# The Reel Recipe — Website

A single-page marketing site for The Reel Recipe, a viral content agency. Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion, and TypeScript.

Live copy is bilingual (English + Arabic) with a dark navy / purple / mint visual system, glassmorphic UI, and scroll-triggered motion.

---

## Quick start

```bash
# 1. Install
npm install

# 2. Create your local env file (see "Environment variables" below)
cp .env.example .env.local
# then fill in values

# 3. Dev server
npm run dev
# → http://localhost:3000

# 4. Production build (sanity-check before deploying)
npm run build
npm run start

# 5. Lint
npm run lint
```

**Node:** v20+ recommended (Next.js 16 requirement).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) |
| UI | **React 19** |
| Styling | **Tailwind CSS 4** (`@tailwindcss/postcss`) + custom CSS in `globals.css` |
| Motion | **Framer Motion 12** |
| Icons | **Lucide React** + custom inline SVGs (see "Icon style" below) |
| Fonts | Inter (body), Anton (display), VIP Hala (Arabic) — all via `next/font` + `@font-face` |
| Forms | Airtable-hosted forms (linked, not embedded) |
| Hosting | Designed for **Vercel** |

---

## ⚠️ Important: this is Next.js 16

Next.js 16 has several breaking changes vs. v14/v15. Read `node_modules/next/dist/docs/` for authoritative guidance. Known gotchas hit during development:

1. **`contentDispositionType` defaults to `"attachment"`** → optimized images (via `next/image`) try to download instead of render. Fixed in `next.config.ts` by setting `contentDispositionType: "inline"`. Don't remove.
2. **Tailwind v4 JIT + HMR can drop new utility classes** on hot reload. If a new `h-*` / `w-*` / etc. class doesn't apply, restart the dev server. Arbitrary values (`h-[80px]`) are more robust than named spacing (`h-20`).

---

## Project structure

```
the-reel-recipe/
├── public/
│   ├── logo-icon.png         # play-button emblem
│   ├── logo-wordmark.png     # "THE REEL RECIPE" text logo
│   ├── logo-text.png         # (alternate)
│   ├── fonts/vip-hala-bold.otf
│   └── portfolio/            # case-study before/after screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx        # fonts, metadata, root layout
│   │   ├── page.tsx          # single-page site; composes sections in order
│   │   ├── globals.css       # Tailwind import + design tokens + glass utilities
│   │   └── api/
│   │       └── followers/
│   │           └── route.ts  # GET /api/followers — IG + TikTok counts
│   └── components/
│       ├── navbar.tsx        # fixed top nav with glass effect on scroll
│       ├── hero.tsx          # headline, subtitle, CTAs, live follower count
│       ├── morphing-emblem.tsx  # big floating play-button emblem in hero
│       ├── follower-count.tsx   # IG / TikTok / Total display
│       ├── services.tsx      # 3 service cards + detail modal
│       ├── portfolio.tsx     # case studies + content types + stats
│       ├── about.tsx         # short company blurb
│       ├── stats.tsx         # 4 animated key metrics
│       ├── cta.tsx           # big "Let's build something" card
│       ├── contact-form.tsx  # 3 buttons → Airtable forms
│       ├── footer.tsx        # social links + copyright
│       └── site-background.tsx  # fixed, full-viewport ambient glow (orbs + gradient)
├── next.config.ts            # sets contentDispositionType: "inline" (do not remove)
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

The page composition is one file: `src/app/page.tsx`.

---

## Environment variables

See `.env.example` for the template. Copy to `.env.local` for local dev; set the same keys in your hosting provider's dashboard for production.

| Variable | Used for | Required? |
|---|---|---|
| `IG_USER_ID` | Instagram Graph API user ID (Business/Creator account) | Optional — enables live IG follower count |
| `IG_ACCESS_TOKEN` | Long-lived Instagram Graph API access token | Optional — enables live IG follower count |
| `TIKTOK_ACCESS_TOKEN` | TikTok Display API v2 OAuth access token | Optional — enables live TikTok follower count |
| `AIRTABLE_API_KEY` | Currently unused by the client. Present in case server-side Airtable integration is added later. | Not required to run |

When any of the follower env vars are missing, `/api/followers` falls back to public-page scraping, and if that fails, to the hardcoded `FALLBACK` values at the top of `src/app/api/followers/route.ts`. **Update those fallback numbers periodically** or wire up the official APIs.

---

## Follower count — how it works

`GET /api/followers` returns:

```json
{
  "instagram": 228000,
  "tiktok": 336400,
  "total": 564400,
  "sources": { "instagram": "fallback", "tiktok": "scrape" },
  "lastUpdated": "2026-04-23T09:57:14.394Z"
}
```

Resolution order per platform:
1. **Official API** (if env vars present) — authoritative, reliable.
2. **Public-page scrape** — best effort; platforms change their HTML / block bots frequently. Multiple regex patterns included.
3. **Hardcoded fallback** — so the UI is never empty.

The endpoint caches for 1 hour (`s-maxage=3600`). `sources` shows which path won per platform — handy for debugging.

---

## Design system

Brand tokens are defined in `src/app/globals.css` under `@theme inline`:

- **Navy** `#161241`, **navy-light** `#1E1755`
- **Purple** `#6c56a4` (+ light `#8570B8`, dark `#5A4690`)
- **Mint** `#67c19f` (+ light `#7ED4B3`, dark `#52A987`)
- **Fonts:** `--font-sans` (Inter), `--font-heading` (Anton)

Glass utilities (`.glass`, `.glass-strong`, `.glass-purple`, `.glass-mint`) and a `.shimmer-overlay` animation are also in `globals.css`.

The ambient background (drifting gradient orbs + noise) is rendered once by `<SiteBackground />` at the top of `page.tsx` so it spans the entire site without section seams.

---

## Known items / next steps

- [ ] **Icons across the site currently mix styles** — `services.tsx` has three preview icons (duotone / sketch / geometric) assigned one per card for comparison. Pick one style and apply consistently across all icons (navbar sparkle, hero badge, CTAs, follower logos, footer).
- [ ] **Instagram scraper is failing** (Instagram blocks unauthenticated requests). Wire up the Graph API via env vars for reliable live numbers.
- [ ] **TikTok scraper works** today but is fragile. Ideally switch to Display API.
- [ ] **Case studies** (PARIS, DTX, TAPIOCA in `portfolio.tsx`) are placeholder — update with real current clients.
- [ ] **Content types** section ("Storytelling, Skits, Voxpop, UGC") may be redundant now that UGC is a top-level service; consider removing or reframing.
- [ ] **Airtable form URLs** in `cta.tsx`, `contact-form.tsx`, and `portfolio.tsx` should be audited for correctness.
- [ ] **Deployment**: repo is not yet pushed to a git remote and is not yet connected to Vercel. See "Deploy" below.

---

## Deploy

**Recommended: Vercel.** Zero config for Next.js.

```bash
# Install CLI (once)
npm i -g vercel

# From the project root
vercel login    # browser OAuth
vercel          # preview deploy
vercel --prod   # production deploy

# Custom domain
vercel domains add thereelrecipe.com
```

Vercel prints the DNS records to add at the domain registrar (A + CNAME, or nameserver delegation).

Env vars: **Vercel Dashboard → Project → Settings → Environment Variables**. Add them for "Production" (and "Preview" if you want preview deploys to hit the live APIs).

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start Turbopack dev server on :3000 |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | ESLint — currently clean |

---

## License / ownership

Proprietary to The Reel Recipe. Do not redistribute without permission.
