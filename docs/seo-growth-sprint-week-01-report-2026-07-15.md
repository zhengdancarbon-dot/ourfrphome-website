# FRP HOME SEO / GEO Growth Sprint - Week 1

Reporting window: 2026-07-15 to 2026-07-21

Production site: https://www.myfrphome.com

Status: in progress

## Executive Summary

The production site is technically ready for search growth. The live sitemap contains 171 URLs across English and eight localized directories. The first commercial-page audit found no broken priority pages, missing titles, missing H1 headings, missing canonicals or missing RFQ paths.

No metadata changes are being made yet. Several titles and descriptions are longer than typical search-result display ranges, but the sprint rule requires 14 days of indexing or at least 50 impressions before CTR-driven edits unless a factual or technical error exists.

## 1. Production Crawl Baseline

| Check | Result | Evidence |
| --- | --- | --- |
| Homepage | PASS | HTTP 200 |
| Sitemap | PASS | HTTP 200; 171 URLs |
| English URLs | PASS | 43 |
| Localized URLs | PASS | ES, PT-BR, RU, AR, FR, KO, PL and TR: 16 each |
| robots.txt | PASS | Allows public crawl; disallows `/api/`; references production sitemap |
| Canonical domain | PASS | `https://www.myfrphome.com` |
| Hreflang groups | PASS | Nine published languages plus `x-default` |
| `/en/` | PASS | Remains unpublished and returns 404 |
| Broken sitemap pages | PASS | 0 in the latest 171-URL production crawl |
| Broken internal links | PASS | 0 in the latest production crawl |
| Broken rendered images | PASS | 0 in the latest production crawl |

## 2. Priority Commercial Page Audit

Eighteen existing P1 target pages from the 127-keyword map were checked on production.

| Audit item | Result |
| --- | --- |
| HTTP 200 | 18/18 |
| Title present | 18/18 |
| Meta description present | 18/18 |
| H1 present | 18/18 |
| Self-referencing canonical | 18/18 |
| RFQ or quotation path present | 18/18 |
| Internal links | Minimum 28 unique internal destinations per audited page |
| Product and article Quick Answer | Present on all audited product and technical-resource pages |
| Structured data | ItemPage/Article, FAQ, Breadcrumb and site-level entities present where applicable |

Audited commercial pages:

- `/products/carbon-fiber-woven-fabric`
- `/products/carbon-fiber-ud-fabric`
- `/products/spread-tow-carbon-fiber-fabric`
- `/products/prepreg-carbon-fiber-materials`
- `/products/carbon-fiber-yarn-and-tow`
- `/products/chopped-carbon-fiber`
- `/products/milled-carbon-fiber-powder`
- `/products/3k-carbon-fiber-laminate-sheet`
- `/products/structural-strengthening-system`
- `/products/3k-surface-carbon-fiber-tube`
- `/products/pultruded-carbon-fiber-tube`
- `/products/custom-carbon-fiber-products`
- `/products`
- `/contact`
- `/`

Audited P1 technical resources:

- `/technical-center/ud-carbon-fiber-fabric-vs-woven-carbon-fiber-fabric`
- `/technical-center/prepreg-vs-dry-carbon-fiber-fabric`
- `/technical-center/chopped-carbon-fiber-vs-milled-carbon-fiber-powder`

## 3. CTR Observation Queue

The following pages have long titles or descriptions. They are observation items, not immediate rewrite tasks:

- Woven Carbon Fiber Fabric
- UD Carbon Fiber Fabric
- Spread Tow Carbon Fiber Fabric
- Prepreg Carbon Fiber Materials
- Carbon Fiber Yarn & Tow
- Structural Strengthening System
- 3K Surface Carbon Fiber Tube
- Pultruded Carbon Fiber Tube
- Home
- Products

Decision rule:

1. Wait until the page has been indexed for at least 14 days or reaches 50 impressions.
2. Compare query intent, CTR and average position in Search Console.
3. Change title or description only when the data identifies a clear mismatch or factual issue.
4. Record the before/after value and monitor the next 14-day window.

## 4. Search Console and Bing Status

Historical account-side evidence from 2026-07-13 shows:

- Google sitemap submission succeeded when the sitemap contained 75 URLs.
- The Spanish homepage was indexed.
- The PT-BR homepage was unknown to Google at that time.
- Bing accepted the sitemap and reported it as processing.

The production sitemap now contains 171 URLs. A new account-side submission and processing confirmation is required. During this run, the logged-in Search Console page was available, but browser automation timed out before a reliable success state could be read. Therefore, the 171-URL resubmission is not reported as completed.

Required account-side checks:

- Confirm Google sitemap status is `Success` and discovered pages begin updating from 75 toward 171.
- Confirm the last-read date is after the nine-language production release.
- Inspect `/pt-br/` once; request indexing only if it remains unindexed and the live test passes.
- Inspect priority product URLs individually only when they remain unindexed after seven days.
- Confirm Bing sitemap processing completes without errors.

## 5. Analytics and Conversion Baseline

| Item | Current status |
| --- | --- |
| GA4 tag on production | PRESENT |
| `rfq_submit` implementation | PRESENT; includes locale and product context |
| `whatsapp_click` implementation | PRESENT; locale-aware |
| `email_click` implementation | PRESENT; locale-aware |
| `catalog_download` implementation | PRESENT; locale-aware |
| GA4 Realtime / DebugView confirmation | PENDING account-side verification |
| RFQ API | PASS in nine-language production QA |
| Inquiry email locale and source URL | Implemented; inbox display confirmation remains operational monitoring |

## 6. Week 1 Data Table

Search Console and GA4 values must be copied from the authenticated accounts; blank values must not be interpreted as zero.

| Locale | Indexed pages | Impressions | Clicks | RFQs | WhatsApp | Email | Catalog |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| EN | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| ES | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| PT-BR | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| RU | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| AR | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| FR | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| KO | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| PL | Pending | Pending | Pending | Pending | Pending | Pending | Pending |
| TR | Pending | Pending | Pending | Pending | Pending | Pending | Pending |

## 7. Next Actions

### Immediate

1. Confirm the 171-URL sitemap in Google Search Console.
2. Confirm GA4 receives `rfq_submit`, `whatsapp_click`, `email_click` and `catalog_download` with locale values.
3. Export the first seven-day GSC query and page data when available.

### Content Queue

1. Prepare the review draft for `Carbon Fiber Fabric for Vacuum Infusion`.
2. Link the approved article from Technical Center, Woven Fabric, UD Fabric and Prepreg pages.
3. Do not publish numerical resin, cure, storage or mechanical-property claims without a verified source.

### Sales Distribution

1. Use the existing UTM URL pack for the first 50 targeted contacts.
2. Record country, locale, source URL, UTM values, product, status and owner for every valid inquiry.
3. Do not use bulk, unrelated or purchased outreach lists.

## Guardrails

- Keep English root URLs and all existing slugs stable.
- Keep canonical, hreflang, sitemap and structured data synchronized.
- Keep compliance and final-use review active in all languages.
- Do not add unsupported certifications, authorization, annual capacity, test reports or customer cases.
- Do not add military, weaponized drone, missile or combat UAV wording.
