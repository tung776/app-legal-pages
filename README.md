# App legal pages

Static HTTPS pages for Apple App Store and Google Play (Privacy Policy, Terms, Support).

**Live site:** https://tung776.github.io/app-legal-pages/

## Why one repo for many apps?

Each future app gets its own folder under `apps/`. Store listings point at that app’s URLs. You do not need a paid domain — GitHub Pages subdomains are accepted by Apple and Google.

| App | Privacy | Support |
|---|---|---|
| Calculator | [privacy](https://tung776.github.io/app-legal-pages/apps/calculator/privacy.html?lang=en) | [support](https://tung776.github.io/app-legal-pages/apps/calculator/support.html?lang=en) |

## Add a new app

```bash
cp -R _template apps/my-new-app
# Edit apps/my-new-app/assets/site-config.js  (name + email)
# Add apps/my-new-app/assets/legal-i18n.js   (copy from calculator, change app copy)
# Link site-config.js in each HTML (already in template)
# Add the app to the root index.html list
git add apps/my-new-app index.html && git commit -m "Add legal pages for my-new-app" && git push
```

Store URL pattern:

```text
https://tung776.github.io/app-legal-pages/apps/<slug>/privacy.html?lang=en
https://tung776.github.io/app-legal-pages/apps/<slug>/support.html?lang=en
```

## Calculator (Flutter)

In the Calculator app, set:

```dart
legalBaseUrl = 'https://tung776.github.io/app-legal-pages/apps/calculator';
```

## Contact defaults

Shared developer identity (override per app in `site-config.js`):

- Name: Nguyễn Thanh Tùng
- Email: thanhtung776@gmail.com

## Local preview

```bash
cd app-legal-pages
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```
