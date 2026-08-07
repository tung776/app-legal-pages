(function () {
  const D = window.DEVELOPER;
  const copy = {
    en: {
      brand: 'Legal & support',
      navHome: 'Apps',
      navAbout: 'Developer',
      language: 'Language',
      kicker: 'Developer · Vietnam',
      heroTitle: D.fullName,
      heroLead:
        'Independent software developer building focused mobile utilities for App Store and Google Play. Clear policies, reachable support, and apps that respect on-device privacy.',
      ctaAbout: 'About the developer',
      ctaApps: 'View apps',
      appsTitle: 'Published apps',
      appsLead: 'Each app has its own Privacy Policy, Terms, and Support pages for store listings.',
      privacy: 'Privacy',
      support: 'Support',
      terms: 'Terms',
      home: 'Home',
      aboutTitle: 'About the developer',
      aboutLead:
        'I design and ship small, reliable mobile applications as an independent developer. This site hosts the public legal and support pages required by Apple and Google.',
      profileTitle: 'Profile',
      contactTitle: 'Contact',
      focusTitle: 'Focus',
      valuesTitle: 'How I work',
      valuesHtml: `
        <ul>
          <li>Privacy-first defaults: keep user data on-device whenever possible.</li>
          <li>Straightforward store disclosures — Privacy Policy and Support stay public and up to date.</li>
          <li>Direct support for customers without a ticket maze.</li>
        </ul>`,
      labelRole: 'Role',
      labelEducation: 'Education',
      labelBorn: 'Born',
      labelLocation: 'Based in',
      labelLanguages: 'Languages',
      labelResponse: 'Support response',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelGitHub: 'GitHub',
      footer: 'Public legal pages for App Store & Google Play · No account required to view.',
    },
    vi: {
      brand: 'Pháp lý & hỗ trợ',
      navHome: 'Ứng dụng',
      navAbout: 'Nhà phát triển',
      language: 'Ngôn ngữ',
      kicker: 'Nhà phát triển · Việt Nam',
      heroTitle: D.fullName,
      heroLead:
        'Lập trình viên freelancer xây dựng ứng dụng tiện ích trên App Store và Google Play. Chính sách rõ ràng, hỗ trợ liên hệ được, tôn trọng quyền riêng tư trên thiết bị.',
      ctaAbout: 'Giới thiệu nhà phát triển',
      ctaApps: 'Xem ứng dụng',
      appsTitle: 'Ứng dụng đã phát hành',
      appsLead: 'Mỗi app có trang Privacy, Terms và Support riêng để khai báo trên store.',
      privacy: 'Privacy',
      support: 'Support',
      terms: 'Terms',
      home: 'Trang chủ',
      aboutTitle: 'Giới thiệu nhà phát triển',
      aboutLead:
        'Tôi thiết kế và phát hành ứng dụng di động gọn, ổn định với tư cách lập trình viên độc lập. Trang này chứa các tài liệu pháp lý và hỗ trợ công khai theo yêu cầu của Apple và Google.',
      profileTitle: 'Hồ sơ',
      contactTitle: 'Liên hệ',
      focusTitle: 'Hướng làm việc',
      valuesTitle: 'Cách làm việc',
      valuesHtml: `
        <ul>
          <li>Ưu tiên quyền riêng tư: lưu dữ liệu trên thiết bị khi có thể.</li>
          <li>Khai báo store minh bạch — Privacy Policy và Support luôn công khai, cập nhật.</li>
          <li>Hỗ trợ trực tiếp, không vòng vo ticket.</li>
        </ul>`,
      labelRole: 'Vai trò',
      labelEducation: 'Học vấn',
      labelBorn: 'Sinh năm',
      labelLocation: 'Địa bàn',
      labelLanguages: 'Ngôn ngữ',
      labelResponse: 'Phản hồi hỗ trợ',
      labelEmail: 'Email',
      labelPhone: 'Điện thoại',
      labelGitHub: 'GitHub',
      footer: 'Trang pháp lý công khai cho App Store & Google Play · Không cần đăng nhập.',
    },
  };

  function lang() {
    const params = new URLSearchParams(location.search);
    const q = (params.get('lang') || '').toLowerCase();
    if (q === 'vi' || q === 'en') return q;
    const stored = (localStorage.getItem('hub_legal_lang') || '').toLowerCase();
    if (stored === 'vi' || stored === 'en') return stored;
    return (navigator.language || 'en').toLowerCase().startsWith('vi') ? 'vi' : 'en';
  }

  function setLang(code) {
    const next = code === 'vi' ? 'vi' : 'en';
    localStorage.setItem('hub_legal_lang', next);
    const url = new URL(location.href);
    url.searchParams.set('lang', next);
    history.replaceState({}, '', url.toString());
    return next;
  }

  function t(code) {
    return copy[code] || copy.en;
  }

  function role(code) {
    return D.role[code] || D.role.en;
  }

  function renderNav(page, code) {
    const c = t(code);
    const qs = `?lang=${code}`;
    document.getElementById('topnav').innerHTML = `
      <a class="brand-mark" href="./index.html${qs}">
        <span class="avatar" aria-hidden="true">${D.initials}</span>
        <span>${c.brand}</span>
      </a>
      <div class="top-links">
        <a href="./index.html${qs}" ${page === 'home' ? 'aria-current="page"' : ''}>${c.navHome}</a>
        <a href="./about.html${qs}" ${page === 'about' ? 'aria-current="page"' : ''}>${c.navAbout}</a>
        <div class="lang-bar">
          <label for="lang-select">${c.language}</label>
          <select id="lang-select" aria-label="${c.language}">
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>
      </div>`;
    const select = document.getElementById('lang-select');
    select.value = code;
    select.addEventListener('change', () => {
      setLang(select.value);
      render();
    });
  }

  function renderHome(code) {
    const c = t(code);
    const qs = `?lang=${code}`;
    document.title = `${D.fullName} · ${c.brand}`;
    document.getElementById('content').innerHTML = `
      <header class="hero">
        <p class="kicker">${c.kicker}</p>
        <h1>${c.heroTitle}</h1>
        <p class="lead">${c.heroLead}</p>
        <div class="actions">
          <a class="btn btn-primary" href="./about.html${qs}">${c.ctaAbout}</a>
          <a class="btn" href="#apps">${c.ctaApps}</a>
        </div>
      </header>

      <section class="section" id="apps">
        <h2>${c.appsTitle}</h2>
        <p class="meta-line">${c.appsLead}</p>
        <div class="card app-row">
          <div>
            <strong>Calculator</strong>
            <p class="meta-line" style="margin:6px 0 0">Flutter · iOS &amp; Android</p>
          </div>
          <div class="app-links">
            <a href="./apps/calculator/index.html${qs}">${c.home}</a>
            <a href="./apps/calculator/privacy.html${qs}">${c.privacy}</a>
            <a href="./apps/calculator/support.html${qs}">${c.support}</a>
            <a href="./apps/calculator/terms.html${qs}">${c.terms}</a>
          </div>
        </div>
      </section>

      <footer class="footer">${c.footer}</footer>`;
  }

  function renderAbout(code) {
    const c = t(code);
    const focus = (D.focus[code] || D.focus.en)
      .map((item) => `<span class="tag">${item}</span>`)
      .join('');
    document.title = `${c.aboutTitle} · ${D.fullName}`;
    document.getElementById('content').innerHTML = `
      <header class="hero">
        <p class="kicker">${c.kicker}</p>
        <h1>${D.fullName}</h1>
        <p class="lead">${c.aboutLead}</p>
        <div class="tag-row">${focus}</div>
      </header>

      <section class="section">
        <h2>${c.profileTitle}</h2>
        <div class="grid">
          <div class="fact">
            <span class="label">${c.labelRole}</span>
            <p class="value">${role(code)}</p>
          </div>
          <div class="fact">
            <span class="label">${c.labelEducation}</span>
            <p class="value">${D.education[code] || D.education.en}</p>
          </div>
          <div class="fact">
            <span class="label">${c.labelBorn}</span>
            <p class="value">${D.birthYear}</p>
          </div>
          <div class="fact">
            <span class="label">${c.labelLocation}</span>
            <p class="value">${D.location[code] || D.location.en}</p>
          </div>
          <div class="fact">
            <span class="label">${c.labelLanguages}</span>
            <p class="value">${D.languages[code] || D.languages.en}</p>
          </div>
          <div class="fact">
            <span class="label">${c.labelResponse}</span>
            <p class="value">${D.response[code] || D.response.en}</p>
          </div>
        </div>
      </section>

      <section class="section prose">
        <h2>${c.valuesTitle}</h2>
        ${c.valuesHtml}
      </section>

      <section class="section">
        <h2>${c.contactTitle}</h2>
        <div class="card">
          <ul class="contact-list">
            <li>
              <span class="label">${c.labelEmail}</span>
              <a href="mailto:${D.email}">${D.email}</a>
            </li>
            <li>
              <span class="label">${c.labelPhone}</span>
              <a href="${D.phoneHref}">${D.phoneDisplay}</a>
              <span class="meta-line">(${D.phone})</span>
            </li>
            <li>
              <span class="label">${c.labelGitHub}</span>
              <a href="${D.github}" rel="noopener noreferrer">${D.githubLabel}</a>
            </li>
          </ul>
        </div>
      </section>

      <footer class="footer">${c.footer}</footer>`;
  }

  function render() {
    const page = document.body.dataset.page || 'home';
    const code = setLang(lang());
    document.documentElement.lang = code;
    renderNav(page, code);
    if (page === 'about') renderAbout(code);
    else renderHome(code);
  }

  document.addEventListener('DOMContentLoaded', render);
})();
