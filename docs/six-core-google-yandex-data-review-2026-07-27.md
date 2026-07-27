# FRP HOME Google and Yandex Data Review

Date: 2026-07-27

Production property: `https://www.myfrphome.com/`

Decision status: monitoring window active; no metadata rewrite in this cycle

## Google Search Console

The live Search Console Web report was read on 2026-07-27. The selected property is the verified `https://www.myfrphome.com/` property. Although the UI range is set to three months, available chart data currently covers 2026-07-01 through 2026-07-24.

| Metric | Current value | Previous recorded value on 2026-07-22 |
| --- | ---: | ---: |
| Clicks | 5 | 4 |
| Impressions | 1,942 | 1,363 |
| CTR | 0.3% | 0.29% |
| Average position | 50.3 | approximately 53.2 |

The current values are early discovery signals, not a ranking guarantee. Search Console may omit low-volume queries for privacy.

### Highest visible queries

| Query | Clicks | Impressions | Decision |
| --- | ---: | ---: | --- |
| `woven carbon fiber` | 0 | 67 | Keep the 3K woven page stable after the 2026-07-27 evidence update |
| `woven carbon fabrics` | 0 | 61 | Same commercial page; do not create a duplicate plural-keyword page |
| `pultruded carbon fiber tube` | 0 | 51 | Monitor the existing tube page; this is outside the six-core allocation |
| `composite fiber` | 0 | 49 | Too broad for a dedicated page or title change |
| `chopped fiber materials` | 0 | 43 | Monitor the existing chopped-fiber page |
| `ncf carbon fiber fabrics` | 0 | 36 | Existing NCF page already uses this terminology naturally |
| `multiaxial carbon fiber fabrics` | 0 | 22 | Route to the same NCF page; do not split the intent |
| `chopped carbon fiber` | 0 | 21 | Monitor the existing product page |
| `pultruded carbon fiber` | 0 | 21 | Keep tube and strengthening-plate intent distinct |
| `fiber reinforced plastics compounding` | 0 | 21 | Monitor the existing reinforcement application cluster |

The two visible NCF queries total 58 impressions, but they do not by themselves prove a page-level total because Search Console query rows can overlap with different landing pages and omit private rows. The NCF commercial page already contains `Carbon Fiber Multiaxial NCF Fabric`, `carbon NCF`, 300gsm, 600gsm, biaxial, triaxial and quadriaxial terminology.

## Yandex Webmaster

The verified Yandex Webmaster dashboard was read on 2026-07-27.

- Site problems: no errors.
- Recommendations: 3; no critical issue was displayed.
- Duplicate titles and descriptions: no large duplicate set found.
- Search clicks shown on the dashboard: 0.
- Search update on 2026-07-25: 98 pages added and 0 removed.
- SQI: not enough data.
- Visible query data is still very small. `custom ud` has 2 impressions; the other visible rows have 1 impression each.
- Yandex recorded successful 200 responses for localized product and contact pages, including the PT-BR 3K laminate page.

### `/es/preload` observation

Yandex recorded one request to `/es/preload` returning 404 on 2026-07-24. Repository search found no `/preload` route or internal link, and the live Spanish homepage contains no `href` pointing to `/preload`. The production URL correctly returns 404.

Decision: keep the 404. Do not create a fake route or redirect for an unlinked crawler artifact. Recheck only if the path appears repeatedly or gains external links.

## Controlled Decision

1. Do not change Woven or NCF metadata in this cycle. Their evidence-led content was updated on 2026-07-27, so Google needs a clean recrawl and comparison window.
2. Keep both query families consolidated on their existing commercial pages. Do not create plural, synonym or near-duplicate pages.
3. Re-export Google page and query dimensions during the next weekly review. Compare a complete post-update period after 2026-08-10 before a title or description experiment.
4. Recheck Yandex indexing, site recommendations and `/es/preload` at the same review.
5. Continue measuring `rfq_submit`, `tds_download`, `catalog_download`, `email_click` and `whatsapp_click` by locale and product. Missing conversion data must not be reported as zero unless a verified analytics export shows zero.

No production submission, indexing request or external account setting was changed during this read-only review.
