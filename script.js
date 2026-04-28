/* =========================================================
   THE REEL RECIPE — Static JS
   ========================================================= */

/* ── Translations ── */
const TRANSLATIONS = {
  en: {
    pageTitle:       'The Reel Recipe | Viral Content Agency',
    navServices:     'Services',
    navAbout:        'About',
    navResults:      'Results',
    navContact:      'Contact',
    navCta:          'Get Started',
    heroBadge:       'MENA content agency',
    heroWord1:       'We',
    heroWord2:       ' make',
    heroWord3:       'brands',
    heroViral:       'go viral.',
    heroSub:         'Full-service content agency specializing in viral strategies, performance marketing, and end-to-end digital solutions that drive real results.',
    followerTotal:   'Total Followers',
    heroCta1:        'Become Our Client',
    heroCta2:        'Apply to Jobs',
    servicesBadge:   'What We Do',
    servicesTitleL1: 'Everything you need',
    servicesTitleL2: 'under one roof.',
    svcContentCat:   'Content',
    svcContentTitle: 'Content Creation',
    svcContentDesc:  'Scroll-stopping content that builds community and drives organic reach.',
    svcUgcCat:       'Content',
    svcUgcTitle:     'UGC',
    svcUgcDesc:      'Authentic user-generated content from real creators that drives trust and conversion.',
    svcMediaCat:     'Marketing',
    svcMediaTitle:   'Media Buying',
    svcMediaDesc:    'Strategic ad placement across platforms for maximum impact.',
    svcMore:         'Learn more',
    portfolioBadge:  'Our Work',
    portfolioTitleL1:'Content that',
    portfolioTitleL2:'breaks the algorithm.',
    portfolioSub:    "From storytelling that moves people to skits that go viral, we've cracked the code on what makes content spread.",
    stat80Label:     'Clients Served',
    stat80Sub:       'in just 15 months',
    stat50Label:     'Total Reach',
    stat50Sub:       'across platforms',
    stat3Label:      'Avg. Engagement',
    stat3Sub:        'vs industry standard',
    stat15Label:     'Industries',
    stat15Sub:       'covered',
    realResultsTitle:'Real Results',
    realResultsSub:  'Before & after: what happens when brands work with us.',
    parisCat:        'Clothing Brand',
    dtxCat:          'Digital Printing',
    tapiocaCat:      'Bubble Tea',
    beforeLabel:     'Before',
    afterLabel:      'After',
    whatWeCreate:    'What We Create',
    ct1Title:        'Storytelling',
    ct1Desc:         'One of the secret ingredients that made The Reel Recipe possible. Deep emotional connection through authentic narratives.',
    ct2Title:        'Skits',
    ct2Desc:         "A bit of acting to convey a hidden message with the fun factor we've mastered. Entertainment meets strategy.",
    ct3Title:        'Voxpop',
    ct3Desc:         'Street interviews reinvented. We changed the style and made it more youthful, raw, and shareable.',
    ct4Title:        'UGC',
    ct4Desc:         'User generated content at its best, in the most authentic form. Real people, real results.',
    portCta:         'Get a Free Quote →',
    portCtaNote:     'One click away',
    aboutLine1:      'Built for brands that',
    aboutLine2:      'refuse to blend in.',
    aboutDesc:       "We combine creative instinct with data-driven strategy to build content ecosystems that don't just perform; they dominate.",
    statsViews:      'Views Generated',
    statsBrands:     'Brands Scaled',
    statsRoas:       'Average ROAS',
    statsAlways:     'Always On',
    statsNote:       'Ready to see these results for your brand?',
    statsNoteCta:    "Let's talk →",
    ctaQuestion:     'Are you ready?',
    ctaTitle1:       "Let's build something",
    ctaTitle2:       'unforgettable.',
    ctaDesc:         "Whether you need viral content, a full rebrand, or a complete digital ecosystem: we're ready when you are.",
    ctaBtn1:         'Get Your Free Quote',
    ctaBtn2:         'Join Our Team',
    contactTitle:    'Get Started',
    contactSub:      'Choose how you want to work with us.',
    contactBtn1:     'Become Our Client',
    contactBtn2:     'Apply to Jobs',
    contactBtn3:     'Become a UGC Creator',
    footerTag:       'Viral content. Real results.',
    footerCopy:      '© {year} The Reel Recipe. All rights reserved.',
    modalIncludesTitle: "What's Included",
    modalSeeItTitle: 'See It In Action',
    modalWatchLabel: 'Watch Example',
    modalWatchSub:   'View on Instagram',
    modalQuote:      'Get a Free Quote',
    menuToggle:      'Toggle menu',
    menuClose:       'Close menu',
    modalClose:      'Close',
  },
  ar: {
    pageTitle:       'The Reel Recipe | وكالة المحتوى الفيروسي',
    navServices:     'الخدمات',
    navAbout:        'من نحن',
    navResults:      'النتائج',
    navContact:      'تواصل',
    navCta:          'ابدأ الآن',
    heroBadge:       'وكالة محتوى MENA',
    heroWord1:       'نصنع',
    heroWord2:       ' علامتك',
    heroWord3:       'التجارية',
    heroViral:       'فيروسية.',
    heroSub:         'وكالة محتوى متكاملة متخصصة في استراتيجيات الانتشار الفيروسي والتسويق الرقمي وحلول شاملة تحقق نتائج حقيقية.',
    followerTotal:   'إجمالي المتابعين',
    heroCta1:        'كن عميلنا',
    heroCta2:        'تقدم للوظائف',
    servicesBadge:   'ما نقدمه',
    servicesTitleL1: 'كل ما تحتاجه',
    servicesTitleL2: 'تحت سقف واحد.',
    svcContentCat:   'محتوى',
    svcContentTitle: 'صناعة المحتوى',
    svcContentDesc:  'محتوى يوقف التمرير ويبني مجتمعًا ويحقق وصولًا عضويًا.',
    svcUgcCat:       'محتوى',
    svcUgcTitle:     'محتوى المستخدمين',
    svcUgcDesc:      'محتوى أصيل من منشئين حقيقيين يبني الثقة ويحسّن معدلات التحويل.',
    svcMediaCat:     'تسويق',
    svcMediaTitle:   'شراء الإعلانات',
    svcMediaDesc:    'توزيع إعلاني استراتيجي عبر المنصات لتحقيق أقصى تأثير.',
    svcMore:         'اعرف المزيد',
    portfolioBadge:  'أعمالنا',
    portfolioTitleL1:'محتوى يكسر',
    portfolioTitleL2:'الخوارزميات.',
    portfolioSub:    'من القصص التي تحرك المشاعر إلى السكتشات الفيروسية، اكتشفنا سر انتشار المحتوى.',
    stat80Label:     'عميل خدمناهم',
    stat80Sub:       'في 15 شهرًا فقط',
    stat50Label:     'إجمالي الوصول',
    stat50Sub:       'عبر المنصات',
    stat3Label:      'متوسط التفاعل',
    stat3Sub:        'مقارنة بمعيار الصناعة',
    stat15Label:     'قطاع',
    stat15Sub:       'تغطيها خدماتنا',
    realResultsTitle:'نتائج حقيقية',
    realResultsSub:  'قبل وبعد: ما يحدث عندما تعمل معنا.',
    parisCat:        'علامة ملابس',
    dtxCat:          'طباعة رقمية',
    tapiocaCat:      'مشروبات تابيوكا',
    beforeLabel:     'قبل',
    afterLabel:      'بعد',
    whatWeCreate:    'ما نصنعه',
    ct1Title:        'قصص',
    ct1Desc:         'أحد المكونات السرية التي جعلت The Reel Recipe ممكنة. تواصل عاطفي عميق من خلال روايات أصيلة.',
    ct2Title:        'سكتشات',
    ct2Desc:         'قليل من التمثيل لإيصال رسالة خفية مع عامل المتعة الذي أتقنّاه. الترفيه يلتقي الاستراتيجية.',
    ct3Title:        'مقابلات الشارع',
    ct3Desc:         'مقابلات الشارع بأسلوب مختلف. غيّرنا الطريقة وجعلناها أكثر شبابية وحيوية وقابلية للمشاركة.',
    ct4Title:        'محتوى المستخدمين',
    ct4Desc:         'محتوى المستخدمين في أفضل صوره، بأكثر الأشكال أصالة. أشخاص حقيقيون، نتائج حقيقية.',
    portCta:         'احصل على عرض مجاني ←',
    portCtaNote:     'بنقرة واحدة فقط',
    aboutLine1:      'بُنينا للعلامات التجارية',
    aboutLine2:      'التي ترفض أن تكون عادية.',
    aboutDesc:       'نجمع بين الحدس الإبداعي والاستراتيجية المبنية على البيانات لبناء منظومات محتوى لا تؤدي فحسب؛ بل تهيمن.',
    statsViews:      'مشاهدة حُققت',
    statsBrands:     'علامة تجارية طوّرناها',
    statsRoas:       'متوسط العائد الإعلاني',
    statsAlways:     'متاحون دائمًا',
    statsNote:       'هل أنت مستعد لرؤية هذه النتائج لعلامتك؟',
    statsNoteCta:    'تحدث إلينا ←',
    ctaQuestion:     '!هل أنت مستعد؟',
    ctaTitle1:       'لنبني شيئًا',
    ctaTitle2:       'لا يُنسى.',
    ctaDesc:         'سواء كنت تحتاج محتوى فيروسيًا أو إعادة بناء كاملة للعلامة أو منظومة رقمية متكاملة، نحن جاهزون متى كنت.',
    ctaBtn1:         'احصل على عرضك المجاني',
    ctaBtn2:         'انضم إلى فريقنا',
    contactTitle:    'ابدأ معنا',
    contactSub:      'اختر كيف تريد العمل معنا.',
    contactBtn1:     'كن عميلنا',
    contactBtn2:     'تقدم للوظائف',
    contactBtn3:     'كن منشئ محتوى UGC',
    footerTag:       'محتوى فيروسي. نتائج حقيقية.',
    footerCopy:      '© {year} The Reel Recipe. جميع الحقوق محفوظة.',
    modalIncludesTitle: 'ما يشمله الخدمة',
    modalSeeItTitle: 'شاهد المثال',
    modalWatchLabel: 'شاهد مثالًا',
    modalWatchSub:   'عرض على انستغرام',
    modalQuote:      'احصل على عرض مجاني',
    menuToggle:      'القائمة',
    menuClose:       'إغلاق القائمة',
    modalClose:      'إغلاق',
  },
};

/* ── Language detection & switching ── */
let currentLang = 'en';

function detectLang() {
  const saved = localStorage.getItem('rrLang');
  if (saved === 'en' || saved === 'ar') return saved;
  const browser = (navigator.language || '').toLowerCase();
  return browser.startsWith('ar') ? 'ar' : 'en';
}

function applyLanguage(lang) {
  document.documentElement.classList.add('lang-switching');

  currentLang = lang;
  const t = TRANSLATIONS[lang];
  const isAr = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
  document.title = t.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  const year = new Date().getFullYear();
  const copyEl = document.getElementById('footerCopy');
  if (copyEl) copyEl.textContent = t.footerCopy.replace('{year}', year);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Single-button cycle (desktop nav) */
  const langCycleBtn = document.getElementById('langCycle');
  if (langCycleBtn) {
    langCycleBtn.textContent = lang === 'en' ? 'AR' : 'EN';
    langCycleBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
  }

  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) menuBtn.setAttribute('aria-label', t.menuToggle);
  document.querySelectorAll('.mobile-close').forEach(el => el.setAttribute('aria-label', t.menuClose));
  document.querySelectorAll('.modal-close').forEach(el => el.setAttribute('aria-label', t.modalClose));

  const svcCards = document.querySelectorAll('.service-card');
  const svcLabelKeys = ['svcContentTitle', 'svcUgcTitle', 'svcMediaTitle'];
  svcCards.forEach((card, i) => {
    if (svcLabelKeys[i] && t[svcLabelKeys[i]]) card.setAttribute('aria-label', t[svcLabelKeys[i]]);
  });

  /* Close & clear accordion panels so they re-render in the new language */
  document.querySelectorAll('.svc-row[data-service]').forEach(r => {
    r.setAttribute('aria-expanded', 'false');
    r.classList.remove('active');
  });
  document.querySelectorAll('.svc-panel').forEach(p => {
    p.classList.remove('open');
    const inner = p.querySelector('.svc-panel-inner');
    if (inner) inner.innerHTML = '';
  });

  localStorage.setItem('rrLang', lang);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.documentElement.classList.remove('lang-switching');
  }));
}

/* ── Language button listeners ── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const langCycleBtn = document.getElementById('langCycle');
if (langCycleBtn) {
  langCycleBtn.addEventListener('click', () => applyLanguage(currentLang === 'en' ? 'ar' : 'en'));
}

/* ── Year (fallback, handled in applyLanguage too) ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Navbar scroll effect ── */
const navbar     = document.getElementById('navbar');
const menuBtn    = document.getElementById('menuBtn');
const iconMenu   = document.getElementById('iconMenu');
const iconX      = document.getElementById('iconX');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  iconMenu.style.display = open ? 'none'  : 'block';
  iconX.style.display    = open ? 'block' : 'none';
  navbar.classList.toggle('menu-open', open);
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  iconMenu.style.display = 'block';
  iconX.style.display    = 'none';
  navbar.classList.remove('menu-open');
}


/* ── Scroll reveal (IntersectionObserver) ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '-30px' });

document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

/* ── Animated stat numbers ── */
function animateNumber(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 3200;
  const start    = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(target * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.animated) {
      e.target.dataset.animated = '1';
      animateNumber(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => statObserver.observe(el));

/* ── Follower count animation ── */
function formatFollowers(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'K';
  return n.toLocaleString();
}

function animateFollower(el) {
  const target   = parseInt(el.dataset.count, 10);
  const duration = 3500;
  const start    = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatFollowers(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('[data-count]').forEach(animateFollower);
  }, 400);
});

/* ── Service modal data ── */
const services = {
  content: {
    en: {
      cat:        'Content',
      title:      'Content Creation',
      desc:       'Our content creation stands out by creating a deep emotional connection with audiences, driving higher engagement and reach. We focus on authentic storytelling and understanding social media trends, resulting in content that resonates and is widely shared.',
      includes:   ['Content strategy & planning', 'Trend-driven reels & TikToks', 'Community-building posts', 'Platform-optimized formats', 'Monthly content calendars'],
      videoLabel: 'Watch Example',
      videoSub:   'View on Instagram',
      quoteLabel: 'Get a Free Quote',
      includesTitle: "What's Included",
      seeItTitle: 'See It In Action',
    },
    ar: {
      cat:        'محتوى',
      title:      'صناعة المحتوى',
      desc:       'يتميز محتوانا بإنشاء اتصال عاطفي عميق مع الجمهور، مما يدفع إلى تفاعل ووصول أعلى. نركز على السرد الأصيل وفهم اتجاهات وسائل التواصل الاجتماعي، ما ينتج محتوى يتردد صداه ويُشارَك على نطاق واسع.',
      includes:   ['استراتيجية المحتوى والتخطيط', 'ريلز وتيك توك تتابع الاتجاهات', 'منشورات بناء المجتمع', 'صيغ محسّنة لكل منصة', 'تقاويم محتوى شهرية'],
      videoLabel: 'شاهد مثالًا',
      videoSub:   'عرض على انستغرام',
      quoteLabel: 'احصل على عرض مجاني',
      includesTitle: 'ما يشمله الخدمة',
      seeItTitle: 'شاهد المثال',
    },
    accentBg:  'rgba(103,193,159,0.1)',
    accentClr: '#67c19f',
    gradient:  'linear-gradient(90deg, rgba(103,193,159,0.4), transparent)',
    iconSvg: `<svg width="26" height="26" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="8" width="22" height="16" rx="3.5" fill="currentColor" fill-opacity="0.3"/>
      <rect x="2" y="8" width="22" height="16" rx="3.5" stroke="currentColor" stroke-width="1.8"/>
      <path d="M24 12.5L31 8.5v15l-7-4v-7z" fill="currentColor"/>
      <circle cx="7" cy="13" r="1.1" fill="currentColor"/>
    </svg>`,
    video: 'https://www.instagram.com/thereelrecipe',
  },
  ugc: {
    en: {
      cat:        'Content',
      title:      'UGC',
      desc:       "User-generated content at its most authentic. We partner with real creators and everyday users to produce raw, relatable content that builds trust and drives conversions: the kind of content that stops the scroll because it doesn't look like an ad.",
      includes:   ['Creator network & matching', 'Content brief development', 'Raw, authentic production', 'Multi-platform optimization', 'Performance tracking'],
      quoteLabel: 'Get a Free Quote',
      includesTitle: "What's Included",
    },
    ar: {
      cat:        'محتوى',
      title:      'محتوى المستخدمين',
      desc:       'محتوى المستخدمين في أكثر أشكاله أصالة. نتشارك مع منشئين حقيقيين لإنتاج محتوى خام وقابل للتواصل يبني الثقة ويحفز التحويلات: المحتوى الذي يوقف التمرير لأنه لا يبدو كإعلان.',
      includes:   ['شبكة منشئين ومطابقة', 'تطوير موجز المحتوى', 'إنتاج خام وأصيل', 'تحسين متعدد المنصات', 'تتبع الأداء'],
      quoteLabel: 'احصل على عرض مجاني',
      includesTitle: 'ما يشمله الخدمة',
    },
    accentBg:  'rgba(34,211,238,0.1)',
    accentClr: '#22d3ee',
    gradient:  'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)',
    iconSvg: `<svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.5 5.3c-3.1.2-4.5 2.6-4.1 5.1.4 2.4 1.9 3.6 4.4 3.6 2.4 0 4.3-1.1 4.3-3.7 0-2.8-1.6-5.2-4.6-5z"/>
      <path d="M3.2 25.5c.3-4.6 3.2-8 9-8.2 5.7-.2 8.6 3 9.1 8"/>
      <path d="M22.8 8.5c-2 .3-2.8 1.9-2.5 3.4.3 1.5 1.4 2.3 2.9 2.3 1.5 0 2.8-.8 2.7-2.5-.1-1.9-1-3.4-3.1-3.2z"/>
      <path d="M20 22.3c.4-3.2 1.9-5.5 4.6-5.6 2.7-.1 4.2 1.9 4.6 5.3"/>
    </svg>`,
  },
  media: {
    en: {
      cat:        'Marketing',
      title:      'Media Buying',
      desc:       'We handle end-to-end media buying across Meta, TikTok, Google, and more. Our team optimizes ad spend to maximize reach and conversions, using real-time data to adjust campaigns for the best possible ROAS.',
      includes:   ['Multi-platform ad management', 'Audience targeting & segmentation', 'Budget optimization', 'Real-time performance tracking', 'Weekly reporting'],
      quoteLabel: 'Get a Free Quote',
      includesTitle: "What's Included",
    },
    ar: {
      cat:        'تسويق',
      title:      'شراء الإعلانات',
      desc:       'نتولى شراء الإعلانات من البداية إلى النهاية عبر Meta وTikTok وGoogle وغيرها. يُحسّن فريقنا الإنفاق الإعلاني لتعظيم الوصول والتحويلات باستخدام البيانات الفورية لتعديل الحملات لتحقيق أفضل عائد إعلاني.',
      includes:   ['إدارة إعلانات متعددة المنصات', 'استهداف الجمهور وتقسيمه', 'تحسين الميزانية', 'تتبع الأداء في الوقت الفعلي', 'تقارير أسبوعية'],
      quoteLabel: 'احصل على عرض مجاني',
      includesTitle: 'ما يشمله الخدمة',
    },
    accentBg:  'rgba(251,113,133,0.1)',
    accentClr: '#fb7185',
    gradient:  'linear-gradient(90deg, rgba(251,113,133,0.4), transparent)',
    iconSvg: `<svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor">
      <circle cx="16" cy="16" r="13.5" opacity="0.22"/>
      <circle cx="16" cy="16" r="9" opacity="0.45"/>
      <circle cx="16" cy="16" r="4.5"/>
      <path d="M27 5l-3.2 3.2-1.5-1.5L27 5z"/>
      <path d="M16 16l8.2-8.2" stroke="currentColor" stroke-width="1.8"/>
    </svg>`,
  },
};

/* ── Service accordion ── */
function renderServicePanel(key, inner) {
  const svc = services[key];
  if (!svc) return;
  const s = { ...svc[currentLang], ...svc };

  const checkIcon = (clr) => `<svg class="svc-panel-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${clr}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

  const videoSection = svc.video ? `
    <a href="${svc.video}" target="_blank" rel="noopener noreferrer" class="svc-panel-video">
      <div class="svc-panel-video-icon" style="background:${svc.accentBg};color:${svc.accentClr}">${svc.iconSvg}</div>
      <div>
        <span class="svc-panel-video-label">${s.videoLabel || ''}</span>
        <span class="svc-panel-video-sub">${s.videoSub || ''}</span>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="margin-left:auto;flex-shrink:0" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  ` : '';

  inner.innerHTML = `
    <p class="svc-panel-desc">${s.desc}</p>
    <p class="svc-panel-includes-title">${s.includesTitle}</p>
    <div class="svc-panel-includes">
      ${s.includes.map(item => `
        <div class="svc-panel-include-item">
          ${checkIcon(svc.accentClr)}
          <span class="svc-panel-include-text">${item}</span>
        </div>
      `).join('')}
    </div>
    ${videoSection}
    <a href="#contact-form" class="svc-panel-cta">
      ${s.quoteLabel}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  `;
}

function toggleService(key) {
  const row   = document.querySelector(`.svc-row[data-service="${key}"]`);
  const panel = document.getElementById(`svc-panel-${key}`);
  if (!row || !panel) return;

  const isOpen = row.getAttribute('aria-expanded') === 'true';

  /* Close all */
  document.querySelectorAll('.svc-row[data-service]').forEach(r => {
    r.setAttribute('aria-expanded', 'false');
    r.classList.remove('active');
  });
  document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('open'));

  if (!isOpen) {
    const inner = panel.querySelector('.svc-panel-inner');
    if (inner && !inner.innerHTML.trim()) renderServicePanel(key, inner);
    row.setAttribute('aria-expanded', 'true');
    row.classList.add('active');
    requestAnimationFrame(() => panel.classList.add('open'));
    /* Scroll row into view on mobile */
    if (window.innerWidth < 768) {
      setTimeout(() => row.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
    }
  }
}

/* ── Legacy modal (kept for compatibility) ── */
let _modalOpener = null;

function openModal(key) {
  const svc = services[key];
  if (!svc) return;
  const s = { ...svc[currentLang], ...svc };

  const checkIcon = `<svg class="modal-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${svc.accentClr}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

  const videoSection = svc.video ? `
    <div class="modal-see-it">
      <h4 class="modal-includes-title">${s.seeItTitle || s.includesTitle}</h4>
      <a href="${svc.video}" target="_blank" rel="noopener noreferrer" class="modal-video-link">
        <div class="modal-video-icon" style="background:${svc.accentBg};color:${svc.accentClr}">${svc.iconSvg}</div>
        <div class="modal-video-text">
          <span class="modal-video-label">${s.videoLabel}</span>
          <span class="modal-video-sub">${s.videoSub}</span>
        </div>
        <svg class="modal-video-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>
  ` : '';

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div class="modal-icon" style="background:${svc.accentBg};color:${svc.accentClr}">${svc.iconSvg}</div>
      <div>
        <span class="modal-cat">${s.cat}</span>
        <h3 class="modal-title" id="modalDialogTitle">${s.title}</h3>
      </div>
    </div>
    <div class="modal-divider" style="background:${svc.gradient}"></div>
    <p class="modal-desc">${s.desc}</p>
    <div style="margin-bottom:2rem">
      <h4 class="modal-includes-title">${s.includesTitle}</h4>
      <div class="modal-includes">
        ${s.includes.map(item => `
          <div class="modal-include-item">${checkIcon}<span class="modal-include-text">${item}</span></div>
        `).join('')}
      </div>
    </div>
    ${videoSection}
    <a href="#contact-form" onclick="closeModal()" class="modal-cta-link">
      ${s.quoteLabel}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  `;

  _modalOpener = document.activeElement;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const box = document.getElementById('modalBox');
    const first = box && box.querySelector('button, a[href]');
    if (first) first.focus();
  }, 50);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  if (_modalOpener) { _modalOpener.focus(); _modalOpener = null; }
}

document.addEventListener('keydown', e => {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'Escape') { closeModal(); return; }
  if (e.key !== 'Tab') return;
  const box = document.getElementById('modalBox');
  const focusable = Array.from(box.querySelectorAll('button, a[href]'))
    .filter(el => !el.hasAttribute('disabled'));
  if (focusable.length < 2) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ── Init language (must run last) ── */
applyLanguage(detectLang());
