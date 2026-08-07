(function () {
  const SITE = Object.assign(
    {
      developerName: 'Nguyễn Thanh Tùng',
      contactEmail: 'thanhtung776@gmail.com',
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

  function fillPlaceholders(html) {
    return String(html || '')
      .replaceAll('[YOUR LEGAL NAME]', SITE.developerName)
      .replaceAll('you@example.com', SITE.contactEmail);
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
      nav.innerHTML = `
        <a href="./index.html?lang=${lang}">${common.home}</a>
        <a href="./privacy.html?lang=${lang}">${common.privacy}</a>
        <a href="./terms.html?lang=${lang}">${common.terms}</a>
        <a href="./support.html?lang=${lang}">${common.support}</a>
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
      cardEl.innerHTML = `
        <strong>${common.developer}:</strong> ${SITE.developerName}<br />
        <strong>${common.contact}:</strong>
        <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>
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
      `;
    }
  }

  document.addEventListener('DOMContentLoaded', render);
})();
