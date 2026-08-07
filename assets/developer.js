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
      'EdTech (English learning)',
      'Xiangqi / Chinese chess',
      'Mobile utilities (iOS & Android)',
      'Flutter',
    ],
    vi: [
      'EdTech (học tiếng Anh)',
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
   * Authored products (portfolio). Not every product has legal pages on this host yet.
   * Keep claims factual; do not invent store URLs.
   */
  products: [
    {
      id: 'lumi-learning',
      name: { en: 'Lumi Learning', vi: 'Lumi Learning' },
      blurb: {
        en: 'English learning for students from primary school through high school — structured lessons and practice for the school pathway.',
        vi: 'Ứng dụng học tiếng Anh dành cho học sinh từ tiểu học đến cấp 3 — lộ trình và luyện tập theo chương trình phổ thông.',
      },
      meta: {
        en: 'EdTech · Author',
        vi: 'EdTech · Tác giả',
      },
    },
    {
      id: 'lumi-ielts',
      name: { en: 'Lumi IELTS', vi: 'Lumi IELTS' },
      blurb: {
        en: 'English for IELTS candidates and for learners returning after a long break — exam-oriented practice plus foundations for beginners who feel “lost”.',
        vi: 'Tiếng Anh cho người luyện thi IELTS và người muốn học lại sau khi mất gốc — luyện đề theo kỳ thi cùng phần nền tảng cho người mới bắt đầu lại.',
      },
      meta: {
        en: 'EdTech · IELTS · Author',
        vi: 'EdTech · IELTS · Tác giả',
      },
    },
    {
      id: 'ky-nghe-co-tuong',
      name: {
        en: 'Kỳ nghệ cờ tướng',
        vi: 'Kỳ nghệ cờ tướng',
      },
      blurb: {
        en: 'Xiangqi (Chinese chess) learning app: build opening/strategy “binh pháp”, follow player games, a library of 4.4M+ international master games, and AI practice powered by the Pikafish engine.',
        vi: 'Ứng dụng dạy cờ tướng: xây dựng binh pháp, theo dõi ván đấu kỳ thủ, kho hơn 4,4 triệu ván đấu kỳ thủ quốc tế, và hệ thống AI luyện tập với máy dựa trên engine Pikafish.',
      },
      meta: {
        en: 'Xiangqi · AI (Pikafish) · Author',
        vi: 'Cờ tướng · AI (Pikafish) · Tác giả',
      },
    },
    {
      id: 'calculator',
      name: { en: 'Calculator', vi: 'Máy tính' },
      blurb: {
        en: 'Handheld expression calculator for iOS and Android, with live preview, history, and store-ready legal pages on this site.',
        vi: 'Máy tính biểu thức trên iOS và Android — xem trước kết quả trực tiếp, lịch sử, và trang pháp lý trên site này.',
      },
      meta: {
        en: 'Utility · Flutter · Legal pages here',
        vi: 'Tiện ích · Flutter · Có trang pháp lý tại đây',
      },
      legalSlug: 'calculator',
    },
  ],
};
