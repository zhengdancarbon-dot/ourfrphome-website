# FRP HOME SEO/GEO Growth Sprint - Day 1-3 Production Report

Date: 2026-07-15

Production site: https://www.myfrphome.com

## Release status

- Nine-language release commit: `225cf77` (`Fix multilingual homepage SEO titles`).
- SEO performance and accessibility release commit: `ec81448` (`Localize mobile menu accessibility labels`).
- Current production deployment: `https://ourfrphome-website-ezp24bpgk-zhendgan.vercel.app`.
- Production branch: `main`.
- Vercel project: `zhendgan/ourfrphome-website`.
- Vercel deployment state: Ready.
- Custom production domain serves the final release marker and updated localized metadata.

## Production environment

Vercel Production reports the following variables as PRESENT. Secret values were not printed.

- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL`
- `INQUIRY_FROM_EMAIL`
- `GA4_MEASUREMENT_ID`
- `GSC_VERIFICATION_CODE`
- `BING_VERIFICATION_CODE`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_CONTACT_WHATSAPP`
- `NEXT_PUBLIC_SITE_URL`

## Build checks

- `pnpm lint`: PASS.
- `pnpm build`: PASS.
- TypeScript check inside the production build: PASS.
- Next.js generated 180 routes, including the inquiry API and sitemap/robots endpoints.

## Sitemap and production crawl

- `https://www.myfrphome.com/sitemap.xml`: HTTP 200.
- Total sitemap URLs: 171.
- English: 43.
- Spanish: 16.
- Brazilian Portuguese: 16.
- Russian: 16.
- Arabic: 16.
- French: 16.
- Korean: 16.
- Polish: 16.
- Turkish: 16.
- All sitemap URLs use `https://www.myfrphome.com`.
- `robots.txt`: HTTP 200 and references the production sitemap.

Full production crawl result:

- 171/171 pages returned HTTP 200.
- 171/171 pages include title, meta description, H1, canonical and JSON-LD.
- All translated page groups include the expected nine language alternates and `x-default`.
- No duplicate titles.
- No duplicate meta descriptions after separating the six extended-locale Home and Products descriptions.
- 239 unique internal URLs checked; no broken internal links.
- 99 unique rendered image URLs checked; no broken images.
- `/en/`: HTTP 404 as intended.
- Untranslated locale routes such as `/ru/quality`: HTTP 404 as intended.

## Mobile and multilingual QA

- Mobile viewport checked at 390 x 844 (375 CSS px content width in the browser runtime).
- No horizontal overflow on the English or Arabic homepage.
- The mobile navigation uses a real button with `aria-expanded` and `aria-controls`.
- The mobile menu accessible name changes between localized Open and Close labels.
- Arabic rendered state: `lang=ar`, `dir=rtl`, right-to-left body direction, self canonical and 10 hreflang entries.
- The language selector exposes all nine published languages.
- Technical tokens remain unchanged in the localized data: 3K, 12K, T300, T700, UD, CFRP, PAN, 8x8mm and 10x10mm.

## RFQ verification

Production API submissions were sent with harmless QA data and spaced to avoid provider rate limits.

| Locale | Source page | API result |
| --- | --- | --- |
| en | `/contact` | 200 / `ok: true` |
| es | `/es/contact` | 200 / `ok: true` |
| pt-br | `/pt-br/contact` | 200 / `ok: true` |
| ru | `/ru/contact` | 200 / `ok: true` |
| ar | `/ar/contact` | 200 / `ok: true` |
| fr | `/fr/contact` | 200 / `ok: true` |
| ko | `/ko/contact` | 200 / `ok: true` |
| pl | `/pl/contact` | 200 / `ok: true` |
| tr | `/tr/contact` | 200 / `ok: true` |

The API accepted locale and source page for every language. Resend accepted all nine messages. Inbox delivery and email-body display remain an account-side confirmation item.

## Analytics verification

- Production GA4 configuration is present.
- The live page loads the configured GA4 tag.
- `rfq_submit` includes `locale`, `product_type` and `product_name`.
- `whatsapp_click`, `email_click` and `catalog_download` include locale-aware parameters.
- A GA4 DebugView/account-side event confirmation remains pending because the Google account was signed out in the available browser session.

## Lighthouse results

Production mobile performance-only run, three-run median:

- Performance: 86.
- LCP: 3.81 seconds.
- TBT: 0 ms.
- CLS: 0.
- Transfer size: about 0.80 MB.

Full-category production runs returned:

- Accessibility: 100.
- Best Practices: 100.
- SEO: 100.

The performance acceptance run meets the sprint target of Performance 85 or higher, LCP 4.0 seconds or lower and transfer size 0.9 MB or lower. Lab performance varied during broader repeated runs, so real-user Core Web Vitals should still be monitored in Search Console after enough field data is collected.

## Search engine submission status

- Google Search Console re-submission: PENDING LOGIN.
- Bing Webmaster Tools re-submission: PENDING LOGIN.
- The available browser session redirected to Google Account Chooser and the Bing Webmaster sign-in/about page.
- No submission is reported as complete without an authenticated success state.
- Submit `https://www.myfrphome.com/sitemap.xml` after login; do not manually submit all 171 URLs.

## Growth assets delivered

- 127-keyword library with intent, priority, target URL and page status.
- 10 topic clusters covering commercial and technical search intent.
- 30-topic content backlog with four reviewed first-month priorities.
- Four first-month articles remain in the editorial queue and are not bulk-published:
  - Carbon Fiber Fabric for Vacuum Infusion.
  - Carbon Fiber Fabric RFQ Checklist.
  - Carbon Fiber Tow Size Guide: 1K-50K.
  - Milled Carbon Fiber Powder Selection Guide.

## Remaining Day 4-7 actions

1. Sign in to Google Search Console and Bing Webmaster Tools and re-submit the production sitemap.
2. Confirm the nine QA messages in the inquiry inbox, including Locale and Submitted from URL.
3. Confirm the four GA4 events in Realtime or DebugView and record locale values.
4. Export the first GSC, Bing and GA4 baseline once data is available.
5. Use the existing weekly multilingual SEO/GEO report template for the first weekly report.

## Content and compliance guardrails

- English URLs, slugs, canonical logic, RFQ API and multilingual routing remain stable.
- No unsupported certification, official authorization, annual capacity, test report or customer case was added.
- No military, weaponized drone, missile or combat UAV wording was added.
- Compliance and end-use review language remains active.
