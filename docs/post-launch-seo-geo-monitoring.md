# Post-Launch SEO / GEO Monitoring Checklist

Production domain: https://www.myfrphome.com

Last prepared: 2026-07-03

## Purpose

Use this checklist after launch to keep FRP HOME visible in search engines and answer engines, while protecting the current URL structure and factual claim boundaries.

## Search Console And Webmaster Setup

### Google Search Console Submission

- Confirm property access for `https://www.myfrphome.com/` or domain property `myfrphome.com`.
- Confirm ownership verification remains active.
- Submit sitemap:
  - `https://www.myfrphome.com/sitemap.xml`
- Use URL Inspection for priority URLs listed in `docs/priority-url-submission-list.md`.
- Recheck important pages that show `Discovered - currently not indexed`, `Crawled - currently not indexed`, or `Duplicate without user-selected canonical`.

### Bing Webmaster Tools Submission

- Confirm Bing Webmaster Tools access for `myfrphome.com`.
- Submit sitemap:
  - `https://www.myfrphome.com/sitemap.xml`
- Use Submit URLs for priority pages when quota is available.
- Run Bing Site Scan when quota is available.
- Monitor Bing IndexNow setup separately if an IndexNow key is later added.

### Sitemap Submission

- Verify sitemap is live:
  - `https://www.myfrphome.com/sitemap.xml`
- Expected live production sitemap count before Phase 1 i18n deployment: 43 URLs.
- Expected sitemap count after Phase 1 i18n deployment: 77 URLs.
- Confirm sitemap URLs use only `https://www.myfrphome.com`.
- Confirm `/catalog`, product detail pages, application pages and technical center articles are included.
- Do not change product slugs unless there is a critical error.

### Robots.txt Verification

- Verify robots is live:
  - `https://www.myfrphome.com/robots.txt`
- Expected sitemap reference:
  - `Sitemap: https://www.myfrphome.com/sitemap.xml`
- Confirm `/api/` remains disallowed.
- Confirm public pages are not blocked.

## Weekly Monitoring

### Index Coverage Monitoring

- Tool: Google Search Console > Indexing > Pages.
- Track:
  - Indexed pages.
  - Not indexed pages.
  - Crawled but not indexed.
  - Discovered but not indexed.
  - Duplicate/canonical issues.
  - 404 or redirect issues.
- Action rule:
  - Fix technical issues immediately.
  - For low-priority pages that are discovered but not indexed, improve internal links and page usefulness before requesting indexing again.

### Query Performance Monitoring

- Tool: Google Search Console > Performance > Search results.
- Track:
  - Clicks.
  - Impressions.
  - CTR.
  - Average position.
  - Top queries.
  - Top landing pages.
- Watch for product-intent queries such as:
  - carbon fiber fabric supplier.
  - 3K twill carbon fiber fabric.
  - UD carbon fiber fabric.
  - carbon fiber prepreg.
  - milled carbon fiber powder.
  - chopped carbon fiber.
  - carbon fiber tube supplier.
  - CFRP structural strengthening system.

### Inquiry Form Monitoring

- Tool: GA4, Resend/email inbox and live RFQ form.
- Track:
  - RFQ form submissions.
  - RFQ API errors.
  - Inquiry email delivery.
  - Attachment upload issues.
  - No-JavaScript fallback form behavior.
- Expected GA4 events:
  - `rfq_submit`
  - `whatsapp_click`
  - `email_click`
  - `catalog_download`

### Page Speed Monitoring

- Tools:
  - Google PageSpeed Insights.
  - Lighthouse.
  - GSC Core Web Vitals.
- Check at least:
  - Homepage.
  - Products page.
  - Catalog page.
  - Contact page.
  - One image-heavy product page.
  - One technical center page.
- Track:
  - LCP.
  - CLS.
  - INP.
  - Mobile performance.
  - Large images.

### Broken Link Monitoring

- Weekly checks:
  - Crawl internal links from homepage, products, applications, technical center, catalog and contact.
  - Check product page links.
  - Check PDF/catalog/download links.
  - Check mailto, tel and WhatsApp links.
- Fix:
  - 404 links.
  - Broken anchors.
  - Old-domain links.
  - Non-canonical absolute URLs.

### AI Search Visibility Monitoring

- Test weekly with the questions in `docs/ai-visibility-test-questions.md`.
- Record:
  - Whether FRP HOME is mentioned.
  - Whether `https://www.myfrphome.com` is cited.
  - Which page is cited.
  - Whether the answer is accurate.
  - Missing product topics.
- Test sources:
  - ChatGPT.
  - Perplexity.
  - Gemini.
  - Copilot / Bing AI.
  - Google AI Overviews when available.

## Analytics Script Status

- Google Analytics 4: present in the app when `GA4_MEASUREMENT_ID` or `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is configured; live production HTML currently contains a GA4 gtag loader.
- Google Search Console verification: present in the app when `GSC_VERIFICATION_CODE` or `NEXT_PUBLIC_GSC_VERIFICATION_CODE` is configured; live production HTML currently contains a Google verification meta tag.
- Bing Webmaster verification: present in the app when `BING_VERIFICATION_CODE` or `NEXT_PUBLIC_BING_VERIFICATION_CODE` is configured; live production HTML currently contains an `msvalidate.01` meta tag.
- Microsoft Clarity: not detected in current app code or live homepage HTML.

## Microsoft Clarity Setup Instructions

Do not add a tracking ID until the real Clarity project ID is provided.

When ready:

1. Create a Microsoft Clarity project for `https://www.myfrphome.com`.
2. Save the Clarity project ID in Vercel, for example:
   - `CLARITY_PROJECT_ID=<provided-id>`
3. Add a conditional Clarity script loader only when that variable exists.
4. Redeploy.
5. Verify in Clarity Realtime and in production page source.

## Claim And Compliance Guardrails

- Do not invent certifications.
- Do not claim authorization without real authorization documents.
- Do not add annual capacity without verified source data.
- Do not add test reports without real test report documents.
- Do not add customer cases unless approved real cases are provided.
- Do not add military, weaponized drone, missile or combat UAV wording.
- Keep compliance and end-use review language active.
