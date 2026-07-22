# FRP HOME Eight-Hour SEO / GEO and Yandex Operations Report

Date: 2026-07-22

Production: `https://www.myfrphome.com`

Primary clusters: Multiaxial carbon NCF, 3K carbon fiber laminate sheet, carbon fiber yarn and tow, strengthening UD fabric and pultruded CFRP plate, and 3K woven carbon fiber fabric.

## Executive Result

- Production remains stable on the existing English and nine-language URL structure.
- The production sitemap contains 207 URLs: 55 English and 19 each for ES, PT-BR, RU, AR, FR, KO, PL and TR.
- Google Search Console accepted a fresh sitemap submission and immediately reported 207 discovered pages.
- The latest seven-day GSC sample improved from the first seven available days: impressions 318 to 586, clicks 0 to 3, CTR 0% to 0.51%, and impression-weighted position 57.07 to 48.70.
- GA4 is active. The authenticated property reports 36 active users and 151 events in the last seven days. Its 28-day Events report includes four real `catalog_download` events from three users.
- The complete production SEO crawl passes all 207 pages, 346 internal resources and three negative 404 checks.
- The latest deployment is Vercel Production `dpl_ECsecomCGsTVQ3kwGXxD5CSVDwXv`, aliased to `www.myfrphome.com`.
- Yandex site-side readiness and IndexNow are complete. Webmaster ownership and Metrica cannot be completed until Google-to-Yandex OAuth is explicitly approved and the two real Yandex values are obtained.

No fixed Google or Yandex ranking is promised. The current direction is positive, but page-one progress must be measured over later crawl and query windows.

## Search and Indexing Actions

### Google Search Console

- Exported the verified Web performance report for the current property.
- Recorded 4 clicks, 1,363 impressions, 0.29% CTR and approximately 53.2 average position for all currently available data.
- Mapped 266 visible queries and 46 landing-page rows to existing page clusters.
- Re-submitted `https://www.myfrphome.com/sitemap.xml` once after production reached 207 URLs.
- Google returned `Sitemap submitted successfully` and displayed 207 discovered pages.
- Reviewed the 2026-07-10 Page indexing snapshot: 38 indexed, 38 discovered-not-indexed and two crawled-not-indexed.
- The two crawled examples were the pultruded tube and UD fabric pages, with crawl dates before the current content cycle. No premature `Validate fix` action was started.
- Converted live query evidence into `docs/five-core-gsc-query-opportunity-map-2026-07-22.csv` without inventing search volume.

### Query Decisions

- Woven fabric already has the largest sample: 201 page impressions; `woven carbon fiber` has 54 impressions and `woven carbon fabrics` has 50.
- Yarn & Tow crossed 50 page impressions; its current title remains stable through the next recrawl window.
- Early opportunities such as `quadriaxial carbon fiber fabrics`, `multiaxial carbon fiber fabric`, `carbon fiber laminate sheets`, `cfrp plate` and `woven carbon` remain mapped to existing pages rather than creating duplicates.
- Three `carbon fiber precursor roving` variants appeared around positions 13-17 with only two or three impressions. They are evidence-gated and will not become a product claim until real precursor product documentation is supplied.

## Content, Evidence and GEO Work

- Published transaction-focused guides for carbon fiber tow, 3K 200gsm woven fabric, Yarn & Tow RFQ preparation and CFRP strengthening RFQ preparation.
- Added visible primary-reference sections and Article Schema citations to six NCF and 3K laminate buyer guides.
- Reconciled visible product, Catalog, Application, Technical Resources and RFQ claims with the actual document library.
- Preserved the verified 3K 200gsm woven, 300gsm UD, 300/600gsm NCF, 12K tow and 1.2mm pultruded strengthening evidence boundaries.
- Kept the 3K laminate document accurately labeled as Product Specification / RFQ Guide rather than calling it a TDS.
- Published the source-reviewed FRP HOME 1.2mm pultruded civil strengthening plate TDS without carrying forward unsupported certification or approval claims.
- Added truthful Product entities without fake price, stock, rating, review or Offer data.
- Updated `llms.txt` with priority products, localized entry points and verified documents for clearer AI retrieval.
- Built a 72-query Russian Yandex map, a 51-query P1 import list and 162 tracked outreach URLs across six priority pages, nine languages and three channels.

## Internal Links and Crawl Quality

- Repaired three orphan English support pages through existing Footer Support navigation.
- Production-equivalent crawl now has zero sitemap orphans and at least eight inbound links to every sitemap page.
- All six English priority products remain one click from the homepage and already have strong descriptive-anchor coverage.
- No additional sitewide exact-match links are justified; future links should come from distinct, source-backed content.
- GSC exposed localized Contact prefill URLs. The clean Contact canonicals were already correct, and all product-generated parameter links now use `rel="nofollow"`.
- Production verification found 208 parameterized RFQ links and zero missing `nofollow` attributes.

## Analytics and Conversion Verification

- `catalog_download`: four processed GA4 events from three real users in the 28-day report.
- Browser transport interception confirmed `tds_download`, `email_click` and `whatsapp_click` with locale and source-page parameters; TDS also includes product slug and document title.
- EN, ES, PT-BR, RU, AR, FR, KO, PL and TR Contact forms all passed synthetic no-email success tests.
- Each language wrote `rfq_submit` with the exact locale, localized source path and product name.
- `/api/inquiry` and GA collection were intercepted during the nine-language test, so no email was sent and no synthetic conversion polluted analytics.
- The GA4 account currently reports zero key events. Real RFQ, TDS, email and WhatsApp rows should be monitored before conversion conclusions are drawn.

## Performance and Mobile QA

Production mobile Lighthouse:

- Home: Performance 91, Accessibility 100, Best Practices 100, SEO 100, LCP 3.0s, CLS 0, 689 KiB transfer.
- NCF three-run median: Performance 83, Accessibility 97 before the contrast fix, Best Practices 100, SEO 100, LCP 3.90s, CLS 0, 577 KiB transfer.
- The NCF responsive hero image was only about 38 KiB and already used eager, high-priority loading.
- The deterministic accessibility issue was breadcrumb contrast at 4.46:1; the shared gray was darkened slightly.
- Post-deployment NCF Lighthouse: Accessibility 100 and SEO 100 with no accessibility failures.

At `390x844`, all six priority product pages returned 200, had correct H1 and self-canonical, loaded the hero image, had no horizontal overflow and produced zero console errors.

## Yandex Status

Completed:

- IndexNow key is live at `/indexnow-key.txt`.
- All genuine update batches returned HTTP 200.
- Production supports `YANDEX_VERIFICATION_CODE` and `YANDEX_METRICA_ID` without loading placeholder values.
- Existing five conversion events are ready to route to matching Yandex JavaScript goals after a real counter is configured.
- Russian priority pages, FAQs, keyword routing and AI/GEO discovery links are live.

Blocked account-side:

- `YANDEX_VERIFICATION_CODE`: MISSING in Vercel Production.
- `YANDEX_METRICA_ID`: MISSING in Vercel Production.
- The Yandex ID page is waiting for Google OAuth approval. That action creates persistent account access and was not performed unattended.
- The Mac later auto-locked, preventing further browser control.
- Public `site:` retrieval returned Yandex's anti-automation Verification page, so no index count was fabricated.

Required next Yandex sequence:

1. Unlock the Mac and explicitly confirm Google-to-Yandex OAuth.
2. Add exactly `https://www.myfrphome.com` in Yandex Webmaster.
3. Configure the returned verification value as `YANDEX_VERIFICATION_CODE` in Vercel Production and redeploy.
4. Verify ownership and submit the 207-URL production sitemap once.
5. Create one Metrica tag, configure `YANDEX_METRICA_ID`, redeploy and create the five JavaScript-event goals.
6. Import the 51-query P1 Russian list and record searchable/excluded page baselines.

## Verification

- `pnpm lint`: PASS with zero errors; three pre-existing warnings remain in an unrelated Morocco output script.
- `pnpm build`: PASS; 216 static pages generated.
- Local production-equivalent SEO audit: PASS, 207 pages / 346 resources / three negative checks.
- Post-deployment production SEO audit: PASS with the same counts.
- Robots: HTTP 200, allows the site, blocks `/api/`, and references the correct production sitemap.
- Sitemap: HTTP 200, 207 URLs, only `https://www.myfrphome.com`.
- Six priority products, robots, sitemap, `llms.txt` and the IndexNow key all return HTTP 200.

## Git and Deployment

This eight-hour workstream spans commits `075507a` through `9089a9f`, including 19 scoped production commits. The latest commit is:

`9089a9f Record search performance and analytics verification`

Unrelated photo, Morocco promotion, external image and output directories were not staged or modified.

## Next Measurement Windows

- In 7 days: re-export GSC page/query and coverage data; compare clean Contact canonical consolidation and the four new guides.
- In 14 days or after 50 impressions: review title/meta only for pages meeting the agreed evidence threshold.
- Weekly: report indexed pages, non-brand impressions, clicks, CTR, top queries, top landing pages, RFQ, TDS, WhatsApp, email and catalog events by locale and source page.
- Continue source-backed content and manually reviewed authority outreach; do not buy links, mass-submit directories or publish duplicate keyword pages.
