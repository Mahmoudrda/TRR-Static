/**
 * Cloudflare Worker — The Reel Recipe follower counts
 *
 * Returns live Instagram + TikTok follower counts as JSON.
 * Edge-cached for 1 hour. TikTok access token is auto-refreshed via KV.
 *
 * ── Cloudflare secrets (Worker → Settings → Variables → add as Secret) ──
 *   INSTAGRAM_TOKEN       Long-lived Instagram Graph API access token
 *   INSTAGRAM_USER_ID     Numeric Instagram Business Account ID
 *   TIKTOK_CLIENT_KEY     From TikTok Developer app
 *   TIKTOK_CLIENT_SECRET  From TikTok Developer app
 *   TIKTOK_REFRESH_TOKEN  Initial refresh token from one-time OAuth flow
 *
 * ── Cloudflare plain variables (safe to leave non-secret) ──
 *   INSTAGRAM_FALLBACK    Shown if Instagram API fails  (default: 228000)
 *   TIKTOK_FALLBACK       Shown if TikTok API fails     (default: 228000)
 *
 * ── KV namespace ──
 *   Binding name: TIKTOK_KV  (create in Workers & Pages → KV, then bind here)
 *   Stores: access_token, access_token_expiry, refresh_token (rotates each refresh)
 */

const CACHE_TTL = 3600; // 1 hour

/* ── TikTok token management ─────────────────────────────────────────── */

async function getTikTokAccessToken(env) {
  if (!env.TIKTOK_CLIENT_KEY || !env.TIKTOK_CLIENT_SECRET) return null;

  // Check KV for a still-valid access token
  const [storedToken, storedExpiry] = await Promise.all([
    env.TIKTOK_KV.get('access_token'),
    env.TIKTOK_KV.get('access_token_expiry'),
  ]);

  if (storedToken && storedExpiry && Date.now() < parseInt(storedExpiry, 10)) {
    return storedToken;
  }

  // Access token expired — use refresh token to get a new one.
  // TikTok rotates the refresh token on every use, so we read from KV first
  // (updated on previous refresh), falling back to the original secret.
  const refreshToken =
    (await env.TIKTOK_KV.get('refresh_token')) || env.TIKTOK_REFRESH_TOKEN;

  if (!refreshToken) return null;

  try {
    const res = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_key:     env.TIKTOK_CLIENT_KEY,
        client_secret:  env.TIKTOK_CLIENT_SECRET,
        grant_type:     'refresh_token',
        refresh_token:  refreshToken,
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    if (!data.access_token) return null;

    // Persist new tokens — refresh_token rotates every time
    const expiry = Date.now() + (data.expires_in - 300) * 1000; // 5-min buffer
    await Promise.all([
      env.TIKTOK_KV.put('access_token',        data.access_token),
      env.TIKTOK_KV.put('access_token_expiry', expiry.toString()),
      env.TIKTOK_KV.put('refresh_token',       data.refresh_token),
    ]);

    return data.access_token;
  } catch (_) {
    return null;
  }
}

/* ── Main handler ─────────────────────────────────────────────────────── */

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Content-Type': 'application/json',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Edge cache check
    const cache    = caches.default;
    const cacheKey = new Request(new URL('/follower-counts', request.url).toString());
    const cached   = await cache.match(cacheKey);
    if (cached) {
      return new Response(await cached.text(), {
        headers: { ...corsHeaders, 'X-Cache': 'HIT' },
      });
    }

    const fallbackInstagram = parseInt(env.INSTAGRAM_FALLBACK ?? '228000', 10);
    const fallbackTiktok    = parseInt(env.TIKTOK_FALLBACK    ?? '228000', 10);

    let instagram = fallbackInstagram;
    let tiktok    = fallbackTiktok;

    // ── Instagram Graph API ──────────────────────────────────────────────
    if (env.INSTAGRAM_TOKEN && env.INSTAGRAM_USER_ID) {
      try {
        const res = await fetch(
          `https://graph.instagram.com/${env.INSTAGRAM_USER_ID}` +
          `?fields=followers_count&access_token=${env.INSTAGRAM_TOKEN}`
        );
        if (res.ok) {
          const data = await res.json();
          if (typeof data.followers_count === 'number') instagram = data.followers_count;
        }
      } catch (_) {}
    }

    // ── TikTok API ───────────────────────────────────────────────────────
    const tiktokToken = await getTikTokAccessToken(env).catch(() => null);
    if (tiktokToken) {
      try {
        const res = await fetch(
          'https://open.tiktokapis.com/v2/user/info/?fields=follower_count',
          { headers: { Authorization: `Bearer ${tiktokToken}` } }
        );
        if (res.ok) {
          const data  = await res.json();
          const count = data?.data?.user?.follower_count;
          if (typeof count === 'number') tiktok = count;
        }
      } catch (_) {}
    }

    const body = JSON.stringify({ instagram, tiktok });

    const response = new Response(body, {
      headers: {
        ...corsHeaders,
        'Cache-Control': `public, max-age=${CACHE_TTL}`,
        'X-Cache': 'MISS',
      },
    });

    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  },
};
