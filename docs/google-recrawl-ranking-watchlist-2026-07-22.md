# FRP HOME Google Recrawl and Ranking Watchlist

Date: 2026-07-22

Production: `https://www.myfrphome.com`

## Current Evidence

- Production sitemap: 205 URLs.
- Last recorded GSC sitemap snapshot: Success, 203 discovered URLs, last read 2026-07-18.
- Whole-site GSC baseline: 4 clicks, 1.36K impressions, 0.3% CTR, average position 53.2.
- Public search discovery checks are used only to identify possible cache/index gaps. They are not ranking reports and do not replace GSC URL Inspection.

## Account-Side Action When Browser Access Returns

1. Open the existing `https://www.myfrphome.com` Search Console property.
2. Submit `https://www.myfrphome.com/sitemap.xml` once so the account reflects the current 205-URL sitemap.
3. Do not delete and re-add the property or submit all 205 URLs manually.
4. Use URL Inspection on the small watchlist below.

## Priority URL Inspection

| URL | Evidence | Action rule |
| --- | --- | --- |
| `/products/structural-strengthening-system` | Public result was crawled about two weeks earlier and still shows a removed generic mechanical-property range. The live page does not contain that range and now includes verified UD and 1.2 mm plate TDS links. | If URL Inspection last crawl predates 2026-07-22, run Live Test and request indexing once. |
| `/technical-center/carbon-fiber-tow-size-guide-1k-to-50k` | Published 2026-07-21; not surfaced in the public discovery check on 2026-07-22. | Wait seven days from publication. Request once only if still not indexed. |
| `/technical-center/3k-200gsm-carbon-fiber-fabric-selection-rfq-guide` | Published 2026-07-21; not surfaced in the public discovery check on 2026-07-22. | Wait seven days from publication. Request once only if still not indexed. |
| `/ru/products/carbon-fiber-multiaxial-ncf-fabric` | Russian priority page updated 2026-07-22; IndexNow accepted the URL but Google does not use IndexNow as a substitute for GSC. | Allow sitemap/hreflang discovery. Inspect after seven days only if it remains unindexed. |

## Metadata Decision Table

| Page | GSC impressions | Average position | Current decision |
| --- | ---: | ---: | --- |
| Carbon Fiber Yarn & Tow | 51 | 39.41 | Query-aligned title/description refinement completed. Hold for a fresh 14-day comparison. |
| 3K Woven Carbon Fiber Fabric | 201 | 47.06 | Query-aligned refinement and RFQ guide completed. Hold for a fresh 14-day comparison. |
| Multiaxial NCF | 23 | 48.48 | Keep metadata stable; improve evidence, links and documents first. |
| 3K Laminate Sheet | 5 | 29.40 | Keep metadata stable; insufficient query evidence. |
| Structural Strengthening System | 20 | 23.40 | Keep metadata stable; resolve stale cache through one recrawl request. |
| UD Carbon Fiber Fabric | 1 | 7.00 | Keep metadata stable; insufficient query evidence despite promising sampled position. |

## Weekly Comparison

For every priority page, record:

- Google index status and last crawl date
- non-brand query impressions and clicks
- CTR and average position
- country and device
- landing-page engagement
- `tds_download`, `rfq_submit`, `email_click`, `whatsapp_click` and `catalog_download`
- locale and source page

Only review title/description after a page has been indexed for 14 days or reaches 50 impressions. Only review CTA/document visibility after at least 20 valid organic visits without a conversion action.

## Boundary

No fixed first-page ranking can be guaranteed or created through repeated indexing requests. The operating objective is to improve qualified non-brand visibility through accurate documents, helpful procurement answers, crawlable internal links and legitimate industry citations.
