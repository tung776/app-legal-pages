(function () {
  const D = window.DEVELOPER;
  const copy = {
    en: {
      brand: 'Nguyễn Thanh Tùng',
      navHome: 'Apps',
      navAbout: 'Developer',
      language: 'Language',
      kicker: 'App author · Vietnam',
      heroTitle: D.fullName,
      heroLead:
        'Independent developer and author of education and game-learning apps — including Lumi Learning, Lumi IELTS, and Kỳ nghệ cờ tướng — plus focused utilities for App Store and Google Play. This site hosts public Privacy, Terms, and Support pages.',
      ctaAbout: 'About the developer',
      ctaApps: 'View products',
      appsTitle: 'Products & legal pages',
      appsLead:
        'Portfolio of apps I author. Calculator includes store legal pages on this host; other products are listed for identity and trust.',
      portfolioTitle: 'Authored products',
      legalTitle: 'Store legal pages',
      legalLead: 'Use these HTTPS URLs in App Store Connect / Google Play Console.',
      privacy: 'Privacy',
      support: 'Support',
      terms: 'Terms',
      home: 'Home',
      aboutTitle: 'About the developer',
      aboutLead:
        'I build and ship learning and utility apps as an independent author. Best known for Lumi (English learning), Kỳ nghệ cờ tướng (Xiangqi with a large game library and Pikafish-based AI), and smaller utilities such as Calculator. This site keeps Privacy Policy and Support pages public for store review.',
      profileTitle: 'Profile',
      productsTitle: 'Selected products',
      contactTitle: 'Contact',
      valuesTitle: 'How I work',
      valuesHtml: `
        <ul>
          <li>Ship real products for learners and players — not demos only.</li>
          <li>Privacy-first defaults when the product allows on-device data.</li>
          <li>Public, stable Privacy Policy and Support URLs for Apple and Google.</li>
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
      brand: 'Nguyễn Thanh Tùng',
      navHome: 'Ứng dụng',
      navAbout: 'Nhà phát triển',
      language: 'Ngôn ngữ',
      kicker: 'Tác giả ứng dụng · Việt Nam',
      heroTitle: D.fullName,
      heroLead:
        'Lập trình viên độc lập, tác giả các ứng dụng học tập và luyện kỹ năng — gồm Lumi Learning, Lumi IELTS và Kỳ nghệ cờ tướng — cùng các tiện ích trên App Store / Google Play. Site này cung cấp trang Privacy, Terms và Support công khai.',
      ctaAbout: 'Giới thiệu nhà phát triển',
      ctaApps: 'Xem sản phẩm',
      appsTitle: 'Sản phẩm & trang pháp lý',
      appsLead:
        'Các ứng dụng tôi là tác giả. Máy tính (Calculator) có trang pháp lý trên host này; các sản phẩm khác được liệt kê để xác nhận danh tính.',
      portfolioTitle: 'Sản phẩm đã phát triển',
      legalTitle: 'Trang pháp lý trên store',
      legalLead: 'Dùng các URL HTTPS này trong App Store Connect / Google Play Console.',
      privacy: 'Privacy',
      support: 'Support',
      terms: 'Terms',
      home: 'Trang chủ',
      aboutTitle: 'Giới thiệu nhà phát triển',
      aboutLead:
        'Tôi xây dựng và phát hành ứng dụng học tập cũng như tiện ích với tư cách tác giả độc lập. Được biết đến với Lumi (học tiếng Anh), Kỳ nghệ cờ tướng (kho ván đấu lớn và AI dựa trên Pikafish), cùng các tiện ích như Máy tính. Site này giữ Privacy Policy và Support công khai phục vụ review store.',
      profileTitle: 'Hồ sơ',
      productsTitle: 'Một số sản phẩm',
      contactTitle: 'Liên hệ',
      valuesTitle: 'Cách làm việc',
      valuesHtml: `
        <ul>
          <li>Phát hành sản phẩm thật cho người học và người chơi — không chỉ bản demo.</li>
          <li>Ưu tiên quyền riêng tư khi sản phẩm cho phép lưu trên thiết bị.</li>
          <li>URL Privacy Policy và Support ổn định, công khai cho Apple và Google.</li>
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

  function productName(product, code) {
    return (product.name && (product.name[code] || product.name.en)) || product.id;
  }

  function productBlurb(product, code) {
    return (product.blurb && (product.blurb[code] || product.blurb.en)) || '';
  }

  function productMeta(product, code) {
    return (product.meta && (product.meta[code] || product.meta.en)) || '';
  }

  function renderProductCards(code, opts) {
    const products = D.products || [];
    const filter = opts && opts.onlyLegal ? (p) => !!p.legalSlug : () => true;
    const qs = `?lang=${code}`;
    const c = t(code);
    return products
      .filter(filter)
      .map((product) => {
        const legal =
          product.legalSlug != null
            ? `<div class="app-links">
            <a href="./apps/${product.legalSlug}/index.html${qs}">${c.home}</a>
            <a href="./apps/${product.legalSlug}/privacy.html${qs}">${c.privacy}</a>
            <a href="./apps/${product.legalSlug}/support.html${qs}">${c.support}</a>
            <a href="./apps/${product.legalSlug}/terms.html${qs}">${c.terms}</a>
          </div>`
            : '';
        return `<article class="card product-card">
          <div class="app-row">
            <div>
              <strong>${productName(product, code)}</strong>
              <p class="meta-line" style="margin:6px 0 0">${productMeta(product, code)}</p>
            </div>
            ${legal}
          </div>
          <p class="product-blurb">${productBlurb(product, code)}</p>
        </article>`;
      })
      .join('');
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
    document.title = `${D.fullName} · Apps & legal`;
    document.getElementById('content').innerHTML = `
      <header class="hero">
        <p class="kicker">${c.kicker}</p>
        <h1>${c.heroTitle}</h1>
        <p class="lead">${c.heroLead}</p>
        <div class="actions">
          <a class="btn btn-primary" href="./about.html${qs}">${c.ctaAbout}</a>
          <a class="btn" href="#products">${c.ctaApps}</a>
        </div>
      </header>

      <section class="section" id="products">
        <h2>${c.portfolioTitle}</h2>
        <p class="meta-line">${c.appsLead}</p>
        ${renderProductCards(code, { onlyLegal: false })}
      </section>

      <section class="section" id="legal">
        <h2>${c.legalTitle}</h2>
        <p class="meta-line">${c.legalLead}</p>
        ${renderProductCards(code, { onlyLegal: true })}
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

      <section class="section" id="products">
        <h2>${c.productsTitle}</h2>
        ${renderProductCards(code, { onlyLegal: false })}
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
