(function () {
  const SITE = Object.assign(
    {
      developerName: 'Nguyễn Thanh Tùng',
      contactEmail: 'thanhtung776@gmail.com',
      contactPhone: '0916678845',
      contactPhoneHref: 'tel:+84916678845',
      contactPhoneDisplay: '+84 916 678 845',
      githubUrl: 'https://github.com/tung776',
      aboutUrl: '../../about.html',
      developerRole: {
        en: 'Independent software developer',
        vi: 'Lập trình viên độc lập',
      },
      effectiveDate: '2026-08-02',
      langStorageKey: 'legal_lang',
    },
    window.LEGAL_SITE || {},
  );

  const I18N = window.LEGAL_I18N;
  const supported = new Set(I18N.languages.map((l) => l.code));

  function queryLang() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = (params.get('lang') || '').toLowerCase();
    if (supported.has(fromQuery)) return fromQuery;
    const stored = (localStorage.getItem(SITE.langStorageKey) || '').toLowerCase();
    if (supported.has(stored)) return stored;
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return supported.has(nav) ? nav : 'en';
  }

  function setLang(code) {
    const lang = supported.has(code) ? code : 'en';
    localStorage.setItem(SITE.langStorageKey, lang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
    return lang;
  }

  function t(bucket, lang) {
    return bucket[lang] || bucket.en;
  }

  function roleFor(lang) {
    const roles = SITE.developerRole || {};
    return roles[lang] || roles.en || '';
  }

  function aboutHref(lang) {
    const base = SITE.aboutUrl || '../../about.html';
    const join = base.includes('?') ? '&' : '?';
    return `${base}${join}lang=${lang === 'vi' ? 'vi' : 'en'}`;
  }

  function fillPlaceholders(html) {
    return String(html || '')
      .replaceAll('[YOUR LEGAL NAME]', SITE.developerName)
      .replaceAll('you@example.com', SITE.contactEmail)
      .replaceAll('[PHONE]', SITE.contactPhoneDisplay || SITE.contactPhone || '')
      .replaceAll('[PHONE_HREF]', SITE.contactPhoneHref || '#');
  }

  function bindLangLinks(root, lang) {
    root.querySelectorAll('a[data-page]').forEach((a) => {
      const page = a.getAttribute('data-page');
      a.setAttribute('href', `./${page}.html?lang=${lang}`);
    });
  }

  function render() {
    const page = document.body.dataset.page || 'home';
    let lang = setLang(queryLang());
    const common = t(I18N.common, lang);
    const content =
      page === 'home'
        ? t(I18N.home, lang)
        : t(I18N[page] || I18N.home, lang);

    document.documentElement.lang = lang;
    document.title =
      page === 'home'
        ? content.title
        : `${content.title} — ${common.appName}`;

    const langSelect = document.getElementById('lang-select');
    if (langSelect && !langSelect.dataset.ready) {
      I18N.languages.forEach((item) => {
        const opt = document.createElement('option');
        opt.value = item.code;
        opt.textContent = item.name;
        langSelect.appendChild(opt);
      });
      langSelect.dataset.ready = '1';
      langSelect.addEventListener('change', () => {
        setLang(langSelect.value);
        render();
      });
    }
    if (langSelect) langSelect.value = lang;

    const nav = document.getElementById('nav');
    if (nav) {
      const aboutLabel = lang === 'vi' ? 'Nhà phát triển' : 'Developer';
      nav.innerHTML = `
        <a href="./index.html?lang=${lang}">${common.home}</a>
        <a href="./privacy.html?lang=${lang}">${common.privacy}</a>
        <a href="./terms.html?lang=${lang}">${common.terms}</a>
        <a href="./support.html?lang=${lang}">${common.support}</a>
        <a href="${aboutHref(lang)}">${aboutLabel}</a>
      `;
    }

    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = common.language;

    const titleEl = document.getElementById('page-title');
    if (titleEl) titleEl.textContent = content.title;

    const leadEl = document.getElementById('page-lead');
    if (leadEl) leadEl.textContent = content.lead || '';

    const metaEl = document.getElementById('page-meta');
    if (metaEl) {
      metaEl.textContent = `${common.appName} · ${common.effective}: ${SITE.effectiveDate}`;
    }

    const noteEl = document.getElementById('placeholder-note');
    if (noteEl) noteEl.textContent = '';

    const cardEl = document.getElementById('dev-card');
    if (cardEl) {
      const phone = SITE.contactPhoneDisplay || SITE.contactPhone;
      cardEl.innerHTML = `
        <p class="dev-card-title">${common.developer}</p>
        <p class="dev-card-name">${SITE.developerName}</p>
        <p class="dev-card-role">${roleFor(lang)}</p>
        <ul class="dev-card-lines">
          <li>
            <span class="label">${common.contact}</span>
            <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>
          </li>
          <li>
            <span class="label">${lang === 'vi' ? 'Điện thoại' : 'Phone'}</span>
            <a href="${SITE.contactPhoneHref}">${phone}</a>
          </li>
          <li>
            <span class="label">GitHub</span>
            <a href="${SITE.githubUrl}" rel="noopener noreferrer">github.com/tung776</a>
          </li>
          <li>
            <span class="label">${lang === 'vi' ? 'Hồ sơ' : 'Profile'}</span>
            <a href="${aboutHref(lang)}">${lang === 'vi' ? 'Xem giới thiệu' : 'About the developer'}</a>
          </li>
        </ul>
      `;
    }

    const bodyEl = document.getElementById('page-body');
    if (bodyEl) {
      bodyEl.innerHTML = fillPlaceholders(content.html || '');
      bindLangLinks(bodyEl, lang);
    }

    const homeLinks = document.getElementById('home-links');
    if (homeLinks) {
      homeLinks.innerHTML = `
        <li><a href="./privacy.html?lang=${lang}">${common.privacy}</a></li>
        <li><a href="./terms.html?lang=${lang}">${common.terms}</a></li>
        <li><a href="./support.html?lang=${lang}">${common.support}</a></li>
        <li><a href="${aboutHref(lang)}">${lang === 'vi' ? 'Nhà phát triển' : 'Developer'}</a></li>
      `;
    }

    let footer = document.getElementById('site-footer');
    if (!footer) {
      footer = document.createElement('footer');
      footer.id = 'site-footer';
      footer.className = 'site-footer';
      const main = document.querySelector('main');
      if (main) main.appendChild(footer);
    }
    footer.innerHTML =
      lang === 'vi'
        ? `Phát triển bởi <strong>${SITE.developerName}</strong> · <a href="${aboutHref(lang)}">Giới thiệu</a>`
        : `Developed by <strong>${SITE.developerName}</strong> · <a href="${aboutHref(lang)}">About</a>`;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
