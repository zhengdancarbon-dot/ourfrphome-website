# FRP HOME Five-Core Internal Link Audit

Date: 2026-07-22

Production: `https://www.myfrphome.com`

## Result

- Sitemap pages checked: 207
- Orphan sitemap pages after repair: 0
- Minimum crawlable inbound links to any sitemap page: 8
- All six English priority product pages are one click from the homepage.
- Each Russian priority product page receives links from all 19 Russian sitemap pages.

## English Priority Pages

| Page | Homepage depth | Inbound links | Unique source pages | Main descriptive anchor |
| --- | ---: | ---: | ---: | --- |
| Multiaxial NCF | 1 | 167 | 63 | Carbon Fiber Multiaxial NCF Fabric |
| 3K laminate sheet | 1 | 267 | 63 | 3K Carbon Fiber Laminate Sheet |
| Yarn & Tow | 1 | 864 | 63 | Carbon Fiber Yarn & Tow |
| UD fabric | 1 | 59 | 37 | UD Carbon Fiber Fabric |
| Strengthening system | 1 | 480 | 63 | UD fabric / pultruded CFRP plate / strengthening system |
| 3K woven fabric | 1 | 670 | 63 | Woven Carbon Fiber Fabric / 3K Twill Carbon Fiber Fabric |

Counts include repeated product-family links rendered on relevant commercial pages. They are a crawl and anchor baseline, not a ranking score.

## Russian Priority Pages

| Page | Russian links | Unique Russian source pages | Main Russian anchor |
| --- | ---: | ---: | --- |
| Multiaxial NCF | 61 | 19 | Мультиаксиальная углеродная ткань NCF |
| 3K laminate sheet | 53 | 19 | Лист и плита из углепластика 3K |
| Yarn & Tow | 52 | 19 | Углеродная нить и жгут (tow) |
| UD fabric | 65 | 19 | Однонаправленная углеродная ткань UD |
| Strengthening system | 57 | 19 | Ткань UD для конструкционного усиления |
| 3K woven fabric | 64 | 19 | Ткань из углеродного волокна |

## Repair Completed

The first crawl identified three English-only support pages without normal inbound page links:

- `/technical-resources`
- `/packaging-shipping`
- `/compliance-end-use-review`

They were added to the existing Footer Support column. Non-English footers mark them as `(EN)`, so users are not led to expect an untranslated localized route.

## Decision

No additional sitewide exact-match links are justified. The priority products already have shallow crawl depth and descriptive anchors. Future links should be contextual and useful, coming from new source-backed technical content or relevant application pages rather than repeated footer links.

The counts above were refreshed against the 207-URL production-equivalent crawl after the RFQ checklist releases. They should be remeasured only when the sitemap or shared navigation changes materially.
