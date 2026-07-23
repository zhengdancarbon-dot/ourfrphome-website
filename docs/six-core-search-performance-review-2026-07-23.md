# FRP HOME Six-Core Search Performance Review

Date: 2026-07-23

Production: `https://www.myfrphome.com`

## Evidence Window

This review uses the latest available authenticated exports and account observations already recorded in the project:

- Google Search Console export downloaded 2026-07-22. Daily data currently ends on 2026-07-19.
- Yandex Webmaster ownership and sitemap submission verified 2026-07-22. Search performance and searchable-page baselines are not yet available.
- GA4 account observation completed 2026-07-22.
- The six-core website work completed on 2026-07-23 is still on `codex/repository-recovery-20260723` and has not been deployed to production.

No newer Search Console or Yandex export exists in the current workspace. This report therefore does not describe 2026-07-20 through 2026-07-23 as measured search performance.

## Whole-Site Google Baseline

- Clicks: 4
- Impressions: 1,363
- CTR: 0.29%
- Average position: approximately 53.2
- Available daily range: 2026-07-01 through 2026-07-19
- First seven days: 318 impressions, 0 clicks, 0% CTR, position 57.07
- Latest seven available days: 586 impressions, 3 clicks, 0.51% CTR, position 48.70

The direction is positive, but the sample is not large enough to support a page-one claim or broad metadata rewrite.

## Six-Core Decision Table

| Cluster | Canonical page | Impressions | Clicks | Position | 50-impression threshold | Indexed 14 days | Current decision |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| Multiaxial NCF | `/products/carbon-fiber-multiaxial-ncf-fabric` | 23 | 0 | 48.48 | No | Not proven by current export | Hold metadata; use verified 300gsm/600gsm TDS, buyer guides and reviewed citations |
| 3K Laminate Sheet | `/products/3k-carbon-fiber-laminate-sheet` | 5 | 0 | 29.40 | No | Not proven by current export | Hold metadata; keep 3K laminate distinct from pultruded strengthening plate |
| Yarn & Tow | `/products/carbon-fiber-yarn-and-tow` | 51 | 0 | 39.41 | Yes | Not proven for the latest page version | Preserve the recent page/video update through a fresh crawl and comparison window |
| Strengthening UD Fabric | `/products/carbon-fiber-ud-fabric` | 1 | 0 | 7.00 | No | Not proven by current export | Do not optimize from one impression; retain the verified 300gsm TDS boundary |
| Pultruded Plate / System | `/products/structural-strengthening-system` | 20 | 0 | 23.40 | No | Not proven by current export | Hold metadata; maintain the UD fabric versus pultruded plate distinction |
| 3K Woven Fabric | `/products/carbon-fiber-woven-fabric` | 201 | 0 | 47.06 | Yes | Not proven for the latest page version | Preserve the recent 3K 200gsm evidence-led update through a fresh crawl window |

Crossing 50 impressions makes a page eligible for review; it does not automatically justify another edit. Yarn & Tow and 3K Woven were recently updated, so another metadata change before a new Google crawl window would destroy the comparison baseline.

## Query Evidence

### Multiaxial NCF

- `ncf carbon fiber fabrics`: 18 impressions, position 46.67
- `multiaxial carbon fiber fabrics`: 6 impressions, position 64.50
- `quadriaxial carbon fiber fabrics`: 3 impressions, position 30.67

Decision: retain NCF architecture and RFQ coverage on the existing page. Do not create duplicate biaxial, triaxial or quadriaxial commercial pages from this sample.

### 3K Laminate Sheet

- `cfrp sheets`: 7 impressions, position 59.14
- `carbon fiber laminate sheets`: 2 impressions, position 33.00

Decision: preserve sheet, laminate, surface finish, CNC and custom-dimension terminology on the existing page. Do not call the RFQ specification guide a TDS.

### Yarn & Tow

- `carbon fiber tow`: 13 impressions, position 62.69
- `1k carbon fiber tow`: 8 impressions, position 58.00
- `carbon fiber tow suppliers`: 7 impressions, position 67.86
- `50k tow carbon fiber`: 6 impressions, position 46.17

Decision: keep current supplier and tow-size language stable. Only 12K currently has a supplier-origin TDS, so 1K-50K options remain RFQ confirmation items.

### Strengthening UD And Pultruded Plate

- `cfrp plates`: 2 impressions, position 41.00
- `cfrp plate`: 1 impression, position 38.00

Decision: continue routing generic UD fabric procurement to the UD page and concrete strengthening/pultruded plate intent to the strengthening system page.

### 3K Woven Fabric

- `woven carbon fiber`: 54 impressions, position 49.93
- `woven carbon fabrics`: 50 impressions, position 54.30
- `carbon fiber woven fabric`: 6 impressions, position 41.17
- `3k carbon fiber woven fabric`: 4 impressions, position 43.75

Decision: preserve the current 3K 200gsm page and guide. Review CTR only after Google has recrawled the current version and another comparable window exists.

## Yandex Baseline

- The exact `https://www.myfrphome.com` property is verified.
- The 207-URL sitemap was submitted on 2026-07-22 and was in the processing queue.
- IndexNow accepted genuine update batches.
- Searchable-page, excluded-page and query-performance baselines are not yet available.
- `YANDEX_METRICA_ID` was missing at the latest verified production-environment check.

Until Webmaster has processed the sitemap, Yandex values must remain `N/A`. Public `site:` searches are not an index-count substitute.

## GA4 And Attribution Baseline

Latest authenticated account evidence:

- Last 7 days: 36 active users and 151 events.
- Last 28 days: 488 events and 126 users.
- `catalog_download`: 4 real events from 3 users.
- No processed real rows yet for `rfq_submit`, `tds_download`, `email_click` or `whatsapp_click`.

The current recovery branch preserves approved UTM parameters and `gclid`, `msclkid` and `yclid` in RFQ source URLs and event parameters. This is code-ready but not production evidence until the branch is approved and deployed.

## Approved Actions

1. Keep all six English URLs and metadata stable until a post-deployment crawl and fresh export exist.
2. Deploy the six-core release only after preview/production approval and rerun the release gate.
3. Start the comparison clock from the actual production deployment date, not from the local commit date.
4. Re-export GSC after at least seven complete data days; use the 14-day/50-impression rule for metadata decisions.
5. Check Yandex sitemap processing and query data weekly. Do not resubmit unchanged URLs.
6. Review conversion friction only after a priority page has at least 20 valid organic visits without RFQ, TDS, email, WhatsApp or catalog action.
7. Record every real outreach response and inquiry with locale, source page, campaign and qualification status.

## Prohibited Conclusions

- Do not claim page-one ranking from low-volume average-position samples.
- Do not estimate missing Yandex or conversion data.
- Do not infer product availability, performance, certification or authorization from search queries.
- Do not change metadata merely because a page crossed 50 impressions; first confirm the page version and recrawl date are comparable.
