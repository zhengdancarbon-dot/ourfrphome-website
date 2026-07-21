# FRP HOME 30-Day SEO / GEO Growth Sprint

> **SUPERSEDED - historical only.** As of 2026-07-21, execution is governed only by `docs/five-core-seo-geo-90-day-master-plan-2026-07-21.md`. Do not continue this plan.

Start date: 2026-07-15
Production domain: https://www.myfrphome.com
Working branch: `codex/seo-growth-sprint-30-day`
Deployment status: no production deployment in this sprint branch

## Objective

Build measurable search visibility and qualified RFQ demand around FRP HOME's real carbon fiber material scope. The sprint prioritizes indexing, buyer-useful content, commercial page clarity, internal linking, conversion attribution and multilingual monitoring.

No fixed ranking, traffic or inquiry result is promised. Search performance depends on indexing, competition, demand, site history and content quality.

## Day 1 Production Baseline

Live checks performed on 2026-07-15:

| Item | Result |
| --- | --- |
| Homepage | 200 |
| `robots.txt` | 200; allows public crawl, disallows `/api/`, references the production sitemap |
| `sitemap.xml` | 200; 75 URLs |
| `llms.txt` | 200; current domain, brand, contact and claim boundaries present |
| Apex domain | Redirects to `https://www.myfrphome.com/` |
| English URLs | 43 |
| Spanish URLs | 16 |
| Brazilian Portuguese URLs | 16 |
| RU / AR / FR / KO / PL / TR production URLs | 0; still pending production deployment |
| GA4 | `G-MLKR89V5BJ` found in live HTML |
| Google verification | Present in live HTML |
| Bing verification | Present in live HTML |
| Homepage canonical | Present and self-referencing |
| Homepage hreflang | `en`, `es`, `pt-BR`, `x-default` on current production |

Important release dependency: the QA branch contains a 171 URL, nine-language sitemap, but production still serves the older 75 URL sitemap. Do not submit 171 URLs or request indexing for RU/AR/FR/KO/PL/TR until that multilingual release is approved and deployed.

## Lighthouse Lab Baseline

Lighthouse 12.8.2 was run against the live homepage with a clean headless Chrome session. These are lab measurements, not Chrome UX Report field data.

| Metric | Desktop | Mobile |
| --- | ---: | ---: |
| Performance | 96 | 75 |
| SEO | 100 | 100 |
| Accessibility | 92 | 91 |
| Best Practices | 100 | 100 |
| FCP | 0.87 s | 1.11 s |
| LCP | 1.33 s | 9.92 s simulated |
| Total Blocking Time | 0 ms | 27 ms |
| CLS | 0 | 0 |

Primary lab opportunities:

- Above-the-fold links prefetch Catalog/Application route data and associated images before the user asks for them.
- Large image payloads and responsive image sizing remain the main mobile opportunity.
- Mobile navigation and RFQ type selection have small ARIA issues in the current production build.
- Several footer/RFQ labels need contrast rechecking after the nine-language release reaches production.

Small fixes implemented in this branch:

- Disabled automatic prefetch on first-viewport Contact, Catalog, Application and language-switch links.
- Replaced the checkbox/label mobile-menu control with a real button using `aria-expanded` and `aria-controls`.
- Changed the RFQ product option container from an invalid ARIA list to a labeled group.
- Hid decorative product-card numbering from assistive technology.
- Simplified the brand-link accessible name to the visible brand wording.
- Matched image-link accessible names to visible product labels and removed redundant labels.
- Increased RFQ/footer contrast and tightened mobile hero image sizing.

These changes do not alter URLs, copy, RFQ API behavior or public design.

Three-run local production-build regression after the fixes:

| Metric | Run 1 | Run 2 | Run 3 | Median |
| --- | ---: | ---: | ---: | ---: |
| Mobile Performance | 87 | 90 | 90 | 90 |
| Mobile SEO | 100 | 100 | 100 | 100 |
| Mobile Accessibility | 100 | 100 | 100 | 100 |
| Mobile Best Practices | 100 | 100 | 100 | 100 |
| LCP | 4.14 s | 3.68 s | 3.68 s | 3.68 s |
| Total Blocking Time | 0 ms | 0 ms | 0 ms | 0 ms |
| CLS | 0 | 0 | 0 | 0 |
| Transferred bytes | 0.64 MB | 0.64 MB | 0.64 MB | 0.64 MB |

Mobile interaction regression also passed: the menu button exposes correct expanded state, the navigation and Products disclosure open correctly, the language menu contains nine entries, the 390px viewport has no horizontal overflow and no console errors were recorded.

## Existing SEO Assets

- 10 published English technical comparison/selection articles.
- Product, FAQ, Breadcrumb and Article structured data.
- 127-keyword intent map: `docs/seo-keyword-library-2026-07-15.csv`.
- Topic architecture: `docs/seo-topic-cluster-map-2026-07-15.md`.
- 30-resource editorial backlog: `docs/seo-content-backlog-2026-07-15.md`.
- Sales UTM pack and inquiry tracking workbook already present under `docs/`.
- Weekly nine-language monitoring template already present.

## 30-Day Execution Schedule

| Day | Work | Evidence / deliverable |
| ---: | --- | --- |
| 1 | Capture live sitemap, robots, verification and Lighthouse baseline | This report |
| 2 | Validate multilingual production release decision; do not submit unpublished locales | Release gate record |
| 3 | Crawl production URLs after release; confirm status, canonical, hreflang and Schema | Crawl report |
| 4 | Verify GA4 events for RFQ, WhatsApp, email and catalog by locale | GA4 event record |
| 5 | Review the 127-keyword map against GSC query exports | Prioritized keyword sheet |
| 6 | Audit titles, descriptions, H1, Quick Answers and internal links for P1 pages | Commercial-page audit |
| 7 | Publish Week 1 report | Indexed pages, errors, events, RFQs |
| 8 | Optimize Woven Fabric only where audit or query data supports a change | Page change log |
| 9 | Optimize UD Fabric and check translated procurement terms | Page change log |
| 10 | Draft and technically review Vacuum Infusion guide | Review-ready article |
| 11 | Publish the approved guide and add contextual internal links | Article and link check |
| 12 | Optimize Yarn & Tow and Prepreg RFQ information | Page change log |
| 13 | Complete 50 targeted UTM outreach touches | Outreach record |
| 14 | Week 2 report and index request for approved new/updated URLs | Weekly report |
| 15 | Draft and review Carbon Fiber Fabric RFQ Checklist | Review-ready article |
| 16 | Audit Chopped vs Milled Powder intent separation | Cannibalization check |
| 17 | Validate Product, FAQ, Breadcrumb and Article Schema | Schema report |
| 18 | Run nine-language AI visibility questions and record citations | GEO baseline |
| 19 | Draft and review Carbon Fiber Tow Size Guide | Review-ready article |
| 20 | Standardize only verifiable external company profiles | External profile log |
| 21 | Week 3 query and landing-page analysis | Weekly report |
| 22 | Identify pages with impressions but weak CTR | CTR opportunity list |
| 23 | Adjust titles/meta only after 14 days or at least 50 impressions | Controlled metadata log |
| 24 | Draft and review Milled Carbon Fiber Powder Selection Guide | Review-ready article |
| 25 | Audit application-to-product internal links and orphan pages | Link map |
| 26 | Analyze RFQ, WhatsApp, email and catalog events by locale | Conversion report |
| 27 | Complete second 50-touch UTM outreach batch and follow-up | Outreach record |
| 28 | Recheck AI visibility and Bing AI Performance if data is available | GEO comparison |
| 29 | Consolidate GSC, Bing, GA4 and inquiry data | Monthly data table |
| 30 | Publish the 30-day report and next 60-day content roadmap | Sprint closeout |

## Decision Rules

- Do not change title/meta for a new page before 14 days or 50 impressions unless there is a factual or technical error.
- If a sitemap-discovered P1 page is still unindexed after seven days, run one live URL test and one indexing request. Do not submit repeatedly.
- If a page receives at least 20 qualified visits without an inquiry action, review RFQ clarity and procurement information before adding more traffic content.
- Every new article must pass factual review, internal-link review, canonical/Schema checks and mobile QA.
- Do not create a new URL for a close keyword synonym when an existing product page already owns the intent.
- Do not bulk-publish 30 padded articles. Google states there is no preferred word count and warns against mass-produced search-first content.
- External links must come from relevant industry, partner or directory contexts. No paid link schemes, automated directory blasts or unrelated guest posts.

## 30-Day Acceptance Criteria

- Production sitemap remains valid and matches the languages actually published.
- All P1 URLs have an indexing status or a documented reason/action.
- GA4 can report `rfq_submit`, `whatsapp_click`, `email_click` and `catalog_download` by locale.
- Four technically reviewed English buyer resources are published, with the remaining 30-topic pipeline ready for later review.
- Four priority commercial page groups are reviewed using real query or buyer-intent evidence.
- Approximately 100 targeted UTM outreach touches are recorded with responses and RFQs.
- Four weekly reports and one 30-day report are completed.
- Day 1-7 and Day 24-30 trends are compared without claiming guaranteed ranking or inquiry growth.

## Guardrails

- Keep English root URLs, current slugs and RFQ API stable.
- Keep canonical, hreflang, sitemap and structured data synchronized with published routes.
- Keep final-use, destination and compliance review active in every language.
- Do not add unsupported certifications, official authorization, annual capacity, test reports or customer cases.
- Do not add military, weaponized drone, missile or combat UAV wording.
- Use only authentic company files or reputable primary technical sources for numerical claims.

## Daily Progress Log

### 2026-07-15 - Day 1

- Verified current production endpoint and sitemap status.
- Confirmed production still serves 75 URLs; nine-language 171 URL release remains pending.
- Captured Lighthouse desktop/mobile baseline.
- Found mobile payload/prefetch and accessibility opportunities.
- Implemented a narrow prefetch and accessibility fix set in the sprint branch.
- Confirmed `pnpm lint` and `pnpm build` pass; Next.js generated 180 pages.
- Confirmed three-run mobile Lighthouse median of 90/100/100/100 with 3.68 s lab LCP and 0.64 MB transferred.
- Created the 127-keyword library, topic cluster map and 30-resource backlog.
- No production deployment performed.
