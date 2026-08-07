/* Shared developer identity for hub + about (and mirrored in each app). */
window.DEVELOPER = {
  fullName: 'Nguyễn Thanh Tùng',
  initials: 'NT',
  birthYear: 1982,
  role: {
    en: 'Independent software developer & app author',
    vi: 'Lập trình viên độc lập & tác giả ứng dụng',
  },
  education: {
    en: 'Master’s degree in Information Systems Management',
    vi: 'Thạc sĩ Quản lý hệ thống thông tin',
  },
  location: {
    en: 'Vietnam',
    vi: 'Việt Nam',
  },
  email: 'thanhtung776@gmail.com',
  phone: '0916678845',
  phoneHref: 'tel:+84916678845',
  phoneDisplay: '+84 916 678 845',
  github: 'https://github.com/tung776',
  githubLabel: 'github.com/tung776',
  focus: {
    en: [
      'English learning apps',
      'Xiangqi / Chinese chess',
      'Mobile utilities (iOS & Android)',
      'Flutter',
    ],
    vi: [
      'Ứng dụng học tiếng Anh',
      'Cờ tướng',
      'Tiện ích di động (iOS & Android)',
      'Flutter',
    ],
  },
  languages: {
    en: 'Vietnamese, English',
    vi: 'Tiếng Việt, English',
  },
  response: {
    en: 'Usually within 1–2 business days',
    vi: 'Thường phản hồi trong 1–2 ngày làm việc',
  },
  /**
   * Authored products (portfolio).
   * image: path relative to site root
   * links: external product / channel URLs
   * legalSlug: when set, Privacy/Terms/Support live under apps/<slug>/
   */
  products: [
    {
      id: 'lumi-learning',
      name: { en: 'Lumi Learning', vi: 'Lumi Learning' },
      image: './assets/products/lumi-learning.jpg',
      blurb: {
        en: 'English learning for students from primary school through high school — structured lessons and practice for the school pathway.',
        vi: 'Ứng dụng học tiếng Anh dành cho học sinh từ tiểu học đến cấp 3 — lộ trình và luyện tập theo chương trình phổ thông.',
      },
      meta: {
        en: 'English learning · School pathway',
        vi: 'Học tiếng Anh · Phổ thông',
      },
      links: [
        {
          label: { en: 'Website', vi: 'Trang web' },
          href: 'https://lumi.kynghecotuong.vn/',
        },
      ],
    },
    {
      id: 'lumi-ielts',
      name: { en: 'Lumi IELTS', vi: 'Lumi IELTS' },
      image: './assets/products/lumi-ielts.jpg',
      blurb: {
        en: 'English for IELTS candidates and for learners returning after a long break — exam-oriented practice plus foundations for beginners who feel “lost”.',
        vi: 'Tiếng Anh cho người luyện thi IELTS và người muốn học lại sau khi mất gốc — luyện đề theo kỳ thi cùng phần nền tảng cho người mới bắt đầu lại.',
      },
      meta: {
        en: 'English learning · IELTS',
        vi: 'Học tiếng Anh · IELTS',
      },
      links: [
        {
          label: { en: 'Website', vi: 'Trang web' },
          href: 'https://lumi.kynghecotuong.vn/',
        },
      ],
    },
    {
      id: 'ky-nghe-co-tuong',
      name: {
        en: 'Kỳ nghệ cờ tướng',
        vi: 'Kỳ nghệ cờ tướng',
      },
      image: './assets/products/ky-nghe-co-tuong.jpg',
      blurb: {
        en: 'Xiangqi (Chinese chess) learning app: build opening/strategy “binh pháp”, follow player games, a library of 4.4M+ international master games, and on-device AI practice using the open-source Pikafish engine.',
        vi: 'Ứng dụng dạy cờ tướng: xây dựng binh pháp, theo dõi ván đấu kỳ thủ, kho hơn 4,4 triệu ván đấu kỳ thủ quốc tế, và luyện tập với máy bằng engine mã nguồn mở Pikafish.',
      },
      meta: {
        en: 'Xiangqi teaching · AI practice',
        vi: 'Dạy cờ tướng · Luyện với máy',
      },
      links: [
        {
          label: { en: 'Website', vi: 'Trang web' },
          href: 'https://kynghecotuong.edu.vn/',
        },
        {
          label: { en: 'YouTube', vi: 'YouTube' },
          href: 'https://www.youtube.com/@kynghecotuong',
        },
      ],
    },
    {
      id: 'calculator',
      name: { en: 'Calculator', vi: 'Máy tính' },
      image: './assets/products/calculator.jpg',
      blurb: {
        en: 'Handheld expression calculator for iOS and Android, with live preview, history, and store-ready legal pages on this site.',
        vi: 'Máy tính biểu thức trên iOS và Android — xem trước kết quả trực tiếp, lịch sử, và trang pháp lý trên site này.',
      },
      meta: {
        en: 'Utility · Flutter',
        vi: 'Tiện ích · Flutter',
      },
      legalSlug: 'calculator',
      links: [
        {
          label: { en: 'Legal pages', vi: 'Trang pháp lý' },
          href: './apps/calculator/index.html',
          local: true,
        },
      ],
    },
  ],
};
