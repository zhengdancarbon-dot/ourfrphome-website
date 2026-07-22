# FRP HOME Google Search Performance and Action Report

Date: 2026-07-22

Property: `https://www.myfrphome.com/`

Source: Google Search Console Web performance CSV export, downloaded 2026-07-22. The selected UI period was `Last 3 months`; daily rows currently available cover 2026-07-01 through 2026-07-19.

## Current Baseline

- Clicks: 4
- Impressions: 1,363
- CTR: 0.29%
- Average position: approximately 53.2
- Page rows: 46
- Visible query rows: 266
- Countries: 67
- Devices: desktop 1,301 impressions / 3 clicks; mobile 61 impressions / 1 click; tablet 1 impression / 0 clicks

Search Console can omit low-volume query details for privacy. The visible query table therefore does not fully reconcile to site totals and should not be treated as a complete keyword census.

## Seven-Day Direction

| Period | Clicks | Impressions | CTR | Impression-weighted position |
| --- | ---: | ---: | ---: | ---: |
| 2026-07-01 to 2026-07-07 | 0 | 318 | 0.00% | 57.07 |
| 2026-07-13 to 2026-07-19 | 3 | 586 | 0.51% | 48.70 |

The latest seven-day sample shows higher discovery and a better aggregate position than the first seven days. The sample remains too small for a ranking guarantee or broad title rewrites.

## Priority Landing Pages

| Landing page | Clicks | Impressions | CTR | Position | Decision |
| --- | ---: | ---: | ---: | ---: | --- |
| `/products/carbon-fiber-woven-fabric` | 0 | 201 | 0% | 47.06 | Keep the new 3K 200gsm evidence-led content stable; monitor recrawl and query alignment |
| `/products/carbon-fiber-yarn-and-tow` | 0 | 51 | 0% | 39.41 | Already crossed the 50-impression threshold; preserve the recent metadata update and measure the next crawl cycle |
| `/products/carbon-fiber-multiaxial-ncf-fabric` | 0 | 23 | 0% | 48.48 | Keep metadata stable; strengthen TDS citations and relevant industry references |
| `/products/3k-carbon-fiber-laminate-sheet` | 0 | 5 | 0% | 29.40 | No title experiment; sample is too small |
| `/products/structural-strengthening-system` | 0 | 20 | 0% | 23.40 | Preserve system/plate distinction and evidence boundary |
| `/products/carbon-fiber-ud-fabric` | 0 | 1 | 0% | 7.00 | Promising but statistically insignificant; do not change metadata from one impression |
| `/applications/structural-strengthening` | 0 | 48 | 0% | 44.50 | Hold until 50 impressions or the next weekly review |
| `/technical-center/cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening` | 0 | 9 | 0% | 7.22 | Preserve content and monitor because the early position is promising |

## Highest-Volume Query Evidence

| Query | Impressions | Position | Routed page or cluster |
| --- | ---: | ---: | --- |
| `woven carbon fiber` | 54 | 49.93 | 3K woven fabric |
| `woven carbon fabrics` | 50 | 54.30 | 3K woven fabric |
| `pultruded carbon fiber tube` | 35 | 49.26 | Pultruded tube |
| `chopped fiber materials` | 33 | 70.76 | Chopped carbon fiber |
| `chopped carbon fiber` | 18 | 43.67 | Chopped carbon fiber |
| `ncf carbon fiber fabrics` | 18 | 46.67 | Multiaxial NCF |
| `composite woven prepregs` | 16 | 43.31 | Prepreg |
| `milled carbon fiber` | 16 | 47.69 | Milled powder |
| `carbon fiber prepreg` | 15 | 58.40 | Prepreg |
| `carbon fiber tow` | 13 | 62.69 | Yarn & Tow |

Additional priority evidence includes `carbon fiber tow suppliers`, `1k carbon fiber tow`, `12k carbon fiber`, `50k tow carbon fiber`, `multiaxial carbon fiber fabrics`, `3k carbon fiber woven fabric`, `milled carbon fiber suppliers` and `carbon fiber woven fabric`.

## Evidence-Gated Discovery Queries

Three low-volume queries containing `carbon fiber precursor roving` appeared between average positions 13 and 17, with only two or three impressions each. They are useful discovery signals, but they do not justify changing the Yarn & Tow metadata or publishing a precursor product page yet. FRP HOME currently has a verified supplier-origin TDS for a 12K carbon fiber tow; it does not have enough first-party precursor product evidence to broaden the commercial claim safely.

Action: retain these queries in the watchlist, request real precursor product specifications and supplier documentation before creating any dedicated content, and require a larger GSC sample before treating the apparent position as durable.

## Technical Finding: RFQ Query URLs

Search Console reported impressions for localized `/contact?product=...&message=...` URLs. These are functional RFQ-prefill links, not independent landing pages. Their HTML already uses a clean self-family canonical such as `/es/contact` or `/pt-br/contact`.

Remediation on 2026-07-22:

- Keep clean Contact pages crawlable and canonical.
- Add `rel="nofollow"` only to product-generated query-parameter RFQ links.
- Preserve product/message prefill and the existing inquiry API.
- Do not block Contact in robots.txt and do not redirect away the customer-entered form context.

Production verification after deployment: 207 sitemap pages were parsed, 208 product-prefilled RFQ links were found, and zero links were missing `rel="nofollow"`.

## Index Coverage Snapshot

The GSC Page indexing report was last updated on 2026-07-10 and therefore predates the current 207-URL production sitemap. It showed 38 indexed pages and 40 pages not indexed:

- 38: `Discovered - currently not indexed`
- 2: `Crawled - currently not indexed`

The two crawled examples were `/products/pultruded-carbon-fiber-tube` (last crawled 2026-07-08) and `/products/carbon-fiber-ud-fabric` (last crawled 2026-07-03). Both dates precede the current content and sitemap cycle. No `Validate fix` action was started because this is a stale discovery snapshot rather than a confirmed technical error. The correct action is to wait for the newly submitted 207-URL sitemap to be processed, then compare the next coverage export.

## Controlled Actions

1. The production sitemap was re-submitted once in the verified Google Search Console property on 2026-07-22. Google returned `Sitemap submitted successfully`, and the property now reports 207 discovered pages.
2. Re-export page and query data after seven days.
3. Do not perform another Yarn & Tow title rewrite until Google has recrawled the current version and a new comparison window exists.
4. Keep NCF and 3K laminate metadata stable until the 50-impression or 14-indexed-day rule is met.
5. Prioritize contextual links and verified TDS citations for woven fabric, NCF, Yarn & Tow and strengthening before adding more generic articles.
6. Monitor the clean localized Contact pages and parameterized variants; expect canonical consolidation to take time.
7. Evaluate conversions through GA4 `rfq_submit`, `tds_download`, `catalog_download`, `email_click` and `whatsapp_click` with `locale` and `source_page`.

No fixed ranking, traffic or inquiry result is promised. Progress is evaluated through qualified non-brand impressions, position-band movement, clicks, document downloads and RFQs.
