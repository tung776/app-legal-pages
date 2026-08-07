# App legal pages

Static HTTPS pages for Apple App Store and Google Play (Privacy Policy, Terms, Support) — plus a public developer profile.

**Live site:** https://tung776.github.io/app-legal-pages/

| Page | URL |
|---|---|
| Hub | https://tung776.github.io/app-legal-pages/ |
| Developer | https://tung776.github.io/app-legal-pages/about.html |
| Calculator Privacy | https://tung776.github.io/app-legal-pages/apps/calculator/privacy.html?lang=en |
| Calculator Support | https://tung776.github.io/app-legal-pages/apps/calculator/support.html?lang=en |

## Developer

- **Nguyễn Thanh Tùng** — independent software developer & app author, Vietnam
- Master’s degree in Information Systems Management
- Authored products: **Lumi Learning**, **Lumi IELTS**, **Kỳ nghệ cờ tướng**, **Calculator**
- Contact: thanhtung776@gmail.com · +84 916 678 845
- GitHub: https://github.com/tung776

Edit shared identity and product blurbs in `assets/developer.js` (hub/about) and each app’s `assets/site-config.js`.

## Add a new app

```bash
cp -R _template apps/my-new-app
# Edit apps/my-new-app/assets/site-config.js
# Add apps/my-new-app/assets/legal-i18n.js
# Link the app in assets/hub.js (apps list) and push
```

## Calculator (Flutter)

```dart
legalBaseUrl = 'https://tung776.github.io/app-legal-pages/apps/calculator';
```

## Local preview

```bash
cd app-legal-pages
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```
