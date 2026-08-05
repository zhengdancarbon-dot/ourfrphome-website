# FRP HOME Production SEO, GEO and Yandex Audit

**Audit date:** 2026-08-05
**Production site:** https://www.myfrphome.com
**Audit scope:** live crawlability, sitemap, canonicals, hreflang, metadata, schema, internal links, priority-product assets, robots, AI/GEO discovery, Google/Yandex bot access, conversion-entry checks, and local release readiness.

## Executive conclusion

The live site has a sound technical SEO foundation. All 210 production sitemap URLs returned HTTP 200; all had a title, meta description, H1, and a self-referencing canonical after normalizing the homepage origin form. The 152 currently published localized pages have a complete 10-link hreflang set (English, eight live localized languages, and `x-default`). No duplicate production titles or meta descriptions were found, and 221 discovered internal page targets returned HTTP 200.

This does **not** prove that every product will reach page one. Rankings depend on the market, language, competing domains, crawl/indexing history, buyer demand, content quality, and earned references. The site is ready for evidence-led promotion, but two P1 items should be completed before expanding country-language campaigns:

1. The server-rendered root `<html>` tag says `lang="en" dir="ltr"` for every localized page. A localized wrapper has the right language and Arabic direction, and client-side JavaScript corrects the root after hydration, but crawlers and no-JavaScript readers initially receive the wrong document language. This is a real international SEO and Arabic accessibility issue.
2. Ukrainian, Vietnamese, and Thai are present in the current Git branch but are not on production. `/uk`, `/vi`, and `/th` currently return 404, and the live sitemap remains at 210 URLs rather than the local release's planned 267 URLs.

No production deployment was performed by this audit.

## Evidence snapshot

| Check | Live result | Status |
| --- | --- | --- |
| `robots.txt` | HTTP 200; allows crawl and names the HTTPS production sitemap | Pass |
| `sitemap.xml` | HTTP 200; 210 URLs, all on `www.myfrphome.com` | Pass |
| Sitemap URL crawl | 210/210 HTTP 200 | Pass |
| Required page metadata | 0 missing titles, descriptions, or H1s | Pass |
| Canonicals | 0 non-self canonicals after homepage normalization | Pass |
| Localized hreflang | 152 localized pages, 0 malformed/incomplete published groups | Pass |
| Sitemap indexing conflict | 0 sitemap URLs carry `noindex` | Pass |
| Duplicate title / description | 0 live duplicates | Pass |
| Internal page links | 221 unique internal destinations checked; 0 failures | Pass |
| Core product assets | Six priority product-page asset sets checked; 0 failures | Pass |
| Bot access | Googlebot and YandexBot samples returned HTTP 200 HTML | Pass |
| Technical PDFs | 300gsm NCF TDS, 600gsm +45/-45 NCF TDS, and 3K plate RFQ specification PDF return 200 `application/pdf` | Pass |
| AI discovery | `llms.txt` is live and contains the canonical site, claim boundaries, product links, documents, and eight live localized entries | Pass |
| Verification / analytics tags | Google Search Console, Bing, Yandex verification tags, GA4 and Yandex Metrica are present in production HTML | Pass |

### Production sitemap language distribution

| Locale | URLs |
| --- | ---: |
| English | 58 |
| Spanish | 19 |
| Brazilian Portuguese | 19 |
| Russian | 19 |
| Arabic | 19 |
| French | 19 |
| Korean | 19 |
| Polish | 19 |
| Turkish | 19 |
| **Total** | **210** |

The current local branch `codex/repository-recovery-20260723` at `bd3b6c1` adds Ukrainian, Vietnamese, and Thai. Its verified local build generates 276 static pages and its SEO audit target is 267 sitemap URLs. This release is pushed to GitHub but is not live on the production domain.

## Priority findings

### P1 - Correct server-rendered language and Arabic direction

**Evidence:** All sampled and crawled localized pages render `<html lang="en" dir="ltr">` in the HTTP response. The localized page wrapper correctly has `lang="es"`, `lang="ru"`, `lang="ar"`, etc., and Arabic's wrapper is `dir="rtl"`. A client script changes the document root after JavaScript runs.

**Why this matters:** `hreflang` tells search engines about alternate URLs; the HTML `lang` attribute tells user agents and assistive technology what the document itself is. Client-side correction is not as robust as server output, especially for Arabic RTL. This should be fixed before the next multilingual production release.

**Required repair:** Refactor routing/layout so the initial server-rendered document root receives the route locale and uses the corresponding `lang` value. Use `dir="rtl"` on Arabic and `dir="ltr"` for all other locales. Keep the existing wrapper as a harmless secondary safeguard, not the primary implementation.

**Acceptance:** Re-crawl one page per locale and verify the initial HTML values:

```text
/es ... lang=es, dir=ltr
/pt-br ... lang=pt-BR, dir=ltr
/ru ... lang=ru, dir=ltr
/ar ... lang=ar, dir=rtl
/fr ... lang=fr, dir=ltr
/ko ... lang=ko, dir=ltr
/pl ... lang=pl, dir=ltr
/tr ... lang=tr, dir=ltr
/uk ... lang=uk, dir=ltr
/vi ... lang=vi, dir=ltr
/th ... lang=th, dir=ltr
```

### P1 - Deploy the already prepared Ukraine, Vietnam and Thailand release only after the language-root fix

**Evidence:** `https://www.myfrphome.com/uk`, `/vi`, and `/th` return 404. The local release contains these locales, but production lists only the eight older localized languages.

**Business impact:** The requested 3K plate campaigns for Ukraine, Vietnam, and Thailand currently cannot use localized landing pages. Do not run country-language search promotion to non-existent routes.

**Required repair:** Include the server-language correction and the prepared Ukrainian/Vietnamese/Thai release in one preview-tested deployment. After approval, production sitemap should grow from 210 to 267 actual URLs. Do not submit the three new locales to Google, Yandex, or IndexNow before they are live.

### P2 - Treat performance as a live monitoring item, not a passed claim

The production HTML is available and the recent local build passes, but this audit could not obtain a live PageSpeed Insights response from the current environment. Therefore no current Core Web Vitals score is asserted in this report. Use the signed-in Search Console Core Web Vitals report and a fresh PageSpeed Insights mobile/desktop run after the next deployment.

### P2 - Validate analytics and search-console data before title rewrites

GA4 and Yandex Metrica scripts are present, but this audit has no authenticated read access to their reports, Google Search Console, or Yandex Webmaster performance data. Do not change title/meta text based on assumptions. Apply the agreed rule: evaluate a page only after it has been indexed for at least 14 days or has at least 50 verified impressions, then compare query intent, CTR, landing-page engagement, TDS downloads, and qualified RFQs.

### P3 - Keep video schema evidence-specific

Five of the six main priority product pages currently include a real video and `VideoObject`: Multiaxial NCF, 3K Plate, Yarn & Tow, Structural Strengthening, and 3K Woven Fabric. UD Fabric has no video. This is not a defect; do not add a placeholder video or `VideoObject` merely for parity.

## Core product SEO and GEO assessment

| Priority product | Procurement page | Current technical/GEO support | Next evidence-led work |
| --- | --- | --- | --- |
| Multiaxial carbon fiber NCF | `/products/carbon-fiber-multiaxial-ncf-fabric` | Product, FAQ, Breadcrumb, VideoObject, production video, 300gsm and 600gsm TDS links | Build country-specific buyer questions around 300/600gsm +45/-45, architecture, width, resin process, and quantity. Use only verified TDS values. |
| 3K carbon fiber laminate plate | `/products/3k-carbon-fiber-laminate-sheet` | Product, FAQ, Breadcrumb, VideoObject, 3K RFQ specification document | Prioritize Ukraine, Poland, Vietnam, Thailand, Korea, and Russia after each localized landing page is live. Differentiate cosmetic laminate plate from structural pultruded CFRP plate. |
| Carbon fiber yarn & tow | `/products/carbon-fiber-yarn-and-tow` | Product, FAQ, Breadcrumb, VideoObject, document link | Expand buyer-facing detail only from real tow, sizing, compatibility and packaging documents. |
| UD fabric for strengthening | `/products/carbon-fiber-ud-fabric` | Product, FAQ, Breadcrumb and documented supply links | Add no video until a real relevant process or product video is available. Keep structural/end-use review language. |
| Pultruded CFRP strengthening plate/system | `/products/structural-strengthening-system` | Product, FAQ, Breadcrumb, VideoObject, document links | Keep it clearly distinct from 3K decorative/industrial laminate sheet. |
| 3K woven fabric | `/products/carbon-fiber-woven-fabric` | Product, FAQ, Breadcrumb, VideoObject, document link | Focus on 3K, weave, areal weight, width, finish and RFQ selection questions. |

The six product pages expose RFQ entry points, mail/phone/WhatsApp links, and where applicable document downloads. Priority samples show `/api/inquiry` in the server HTML. No live form was submitted during this audit because that would create test inquiries and email side effects.

## Yandex readiness

### Confirmed on production

- Yandex site-verification meta tag is present.
- Yandex Metrica counter is present.
- `robots.txt` declares the canonical HTTPS sitemap.
- `indexnow-key.txt` returns HTTP 200.
- YandexBot receives the same HTTP 200 HTML as Googlebot for the homepage, NCF, 3K plate, and Russian NCF samples.
- Attribution code retains `yclid` together with normal UTM parameters for conversion events.

### Still requires Webmaster data, not guesses

- Sitemap accepted/processed status.
- Indexed URL count, crawl errors and host canonical selection.
- Search queries, clicks, impressions and country/device distribution.
- Metrica goals and session-quality trends.
- Bing/Yandex AI citation or grounding observations.

Export these reports weekly from Yandex Webmaster and Metrica. Record the same date range in GA4 and Search Console so product and language results can be compared honestly.

## GEO and AI-search readiness

### Strengths

- `llms.txt` clearly identifies FRP HOME, the legal company name, site purpose, contact details, claim boundaries, technical-document hub, priority products, compliance/end-use language, and links to live localized entry points.
- Product pages provide short answer-style sections, specifications, RFQ information, FAQs, product schema, breadcrumb schema, and document links.
- Schema avoids fabricated price, stock, review and rating fields.

### Limits

- `llms.txt`, schema, and clear answers improve discoverability but do not guarantee citation by Google AI Overviews, Bing/Copilot, Yandex, or other AI systems.
- AI visibility must be tracked by exact question, language, cited URL, date, market, and whether the answer states facts accurately. Never chase an AI citation by adding unsupported performance claims.

## Promotion priority by market

| Market | Primary landing pages after release | Language priority | Campaign focus |
| --- | --- | --- | --- |
| Russia | Russian 3K Plate and Multiaxial NCF pages | Russian | 3K plate sourcing plus 300/600gsm NCF construction and RFQ questions |
| Poland | Polish 3K Plate page | Polish | 3K twill surface, sheet size/thickness confirmation, CNC drawing workflow |
| Korea | Korean 3K Plate page | Korean | Industrial panel, custom machining and packaging/RFQ clarity |
| Ukraine | Ukrainian 3K Plate page after deployment | Ukrainian | 3K plate purchase terms, CNC drawings, material confirmation |
| Vietnam | Vietnamese 3K Plate page after deployment | Vietnamese | 3K plate supplier/RFQ and custom dimension confirmation |
| Thailand | Thai 3K Plate page after deployment | Thai | 3K plate supplier/RFQ and custom dimension confirmation |

For all markets, use a normal country/language landing page plus a product-specific UTM. Send interested buyers to the product page, not directly to a PDF. Do not buy links, use automated directory submission, or send bulk unrelated outreach.

## Required execution order

1. Fix server-rendered locale `lang`/`dir` on a dedicated branch and run lint, build, locale crawl, and Arabic mobile RTL QA.
2. Deploy Ukrainian, Vietnamese and Thai only after preview approval. Verify production sitemap count is 267 and new URLs return 200.
3. Submit the updated sitemap to Google Search Console, Bing Webmaster, and Yandex Webmaster. Use IndexNow only for URLs that are actually newly published or materially updated.
4. Request indexing only for the homepage and the highest-priority product pages; do not repeatedly submit every URL.
5. Establish baseline exports for the six priority products: indexed state, impressions, clicks, CTR, average position, country, locale, RFQ, TDS download, mail click, WhatsApp click, catalog download, and source/UTM.
6. At 14 days or 50 measured impressions, improve title/meta only where the real query and CTR justify it. Preserve slugs and canonical URLs.
7. Publish or update buyer guides only where real documents support the technical claims. Prioritize Multiaxial NCF and 3K Plate guides before broad product expansion.
8. Build authority through real composite-material directories, association profiles, qualified distributors, relevant processors, and earned editorial/partner mentions. Keep a per-domain outreach and response log.

## Release and regression checklist

- `pnpm lint`: passed locally with 0 errors and 3 pre-existing warnings in an unrelated `.codex-output-work` file.
- `pnpm build`: passed locally; 276 static pages generated.
- Production: re-run sitemap crawl, internal-link crawl, bot sample, metadata/hreflang/schema checks, document checks, mobile menu, language switcher, Arabic RTL, RFQ validation, and analytics events after any release.
- Verify `/en` stays 404; do not auto-publish untranslated locales or technical-center translations.
- Verify `/uk`, `/vi`, `/th` only after their approved deployment.
- Keep `internal-sales-link-guide` noindex and excluded from sitemap.
- Keep compliance/end-use review language in every localization.
- Do not add unverified certifications, authorization, annual capacity, test reports, customer cases, prices, ratings, inventory, military use, weaponized drones, missiles, or combat UAV wording.

## Audit limitations

- This report verifies public technical signals, not rankings or index coverage. Search Console, Yandex Webmaster, Yandex Metrica and GA4 reports require authenticated data export or session access for performance conclusions.
- The in-app browser visual automation timed out during responsive capture, so this report does not claim a fresh screenshot-based desktop/mobile visual pass. The next release should include manual visual QA at 1440x900 and 390x844, with Arabic RTL checked separately.
- No test RFQ was sent to avoid generating artificial email and CRM data.

## Final status

**Technical SEO/GEO/Yandex foundation: strong and promotable.**
**Production multilingual release: hold for one P1 language-root repair, then deploy the already prepared Ukraine/Vietnam/Thailand pages.**
**Page-one ranking target: pursue through measured product-market clusters, verified technical content, conversion evidence and earned authority; do not promise a fixed ranking date.**
