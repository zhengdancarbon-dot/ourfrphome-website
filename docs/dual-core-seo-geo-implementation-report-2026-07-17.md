# FRP HOME Dual-Core SEO / GEO Implementation Report

Date: 2026-07-17

Branch: `codex/dual-core-seo-geo-90d`

Production deployment: not performed

## Completed Scope

- Made the 90-day dual-core plan the only active SEO / GEO execution baseline; the older 30-day plans are marked historical.
- Prioritized Carbon Fiber Multiaxial NCF Fabric and 3K Carbon Fiber Laminate Sheet on Home, Products, product-family and related-content surfaces.
- Added fully localized commercial pages for both products in ES, PT-BR, RU, AR, FR, KO, PL and TR while preserving the English slugs.
- Added localized metadata, H1, Quick Answer, specifications, FAQ, CTA, RFQ and end-use review language.
- Added product-specific RFQ fields:
  - NCF: architecture, directions, areal weight, width, roll length, stitch and resin process.
  - 3K plate: product type, dimensions, tolerance, finish and manufacturing process.
- Retained the verified 300gsm and 600gsm NCF TDS downloads.
- Published a 3K Product Specification & RFQ Guide based only on confirmed procurement options.
- Added six English procurement guides with Article, FAQ and Breadcrumb structured data through the existing Technical Center template.
- Added contextual related-guide links from the core product pages.
- Added `product_slug` and `document_title` to `tds_download` tracking while retaining locale and link URL.
- Added optional `INDEXNOW_KEY`, a key-file route and a guarded IndexNow submission command for genuinely changed URLs.
- Removed synthetic global sitemap modification dates; known core-product and article dates use real update dates and unknown dates are omitted.
- Added a reusable 203-URL SEO audit command, weekly report template, AI visibility test list and a blank 60-row manual outreach tracker.

## URL And SEO Result

| Locale | Sitemap URLs |
| --- | ---: |
| English | 51 |
| Español | 19 |
| Português BR | 19 |
| Русский | 19 |
| العربية | 19 |
| Français | 19 |
| 한국어 | 19 |
| Polski | 19 |
| Türkçe | 19 |
| **Total** | **203** |

The automated audit checked all 203 pages, 338 internal resources and three negative routes. Status codes, title, H1, canonical, hreflang and internal resources passed. `/en/` and unsupported localized routes remain 404.

## Validation

- `pnpm lint`: PASS
- `pnpm build`: PASS; 212 static/dynamic routes generated
- `pnpm exec tsc --noEmit`: PASS
- `pnpm seo:audit http://localhost:3107`: PASS
- Desktop/mobile product matrix: PASS for 36 combinations (two products, nine languages, 1440x900 and 390x844)
- No horizontal overflow or broken product images found in that matrix.
- Arabic document direction: PASS (`rtl`)
- Language alternates: PASS; nine localized alternatives present per core product page
- NCF and 3K product-specific RFQ fields: PASS
- RFQ hidden locale and source page: PASS in EN, ES, AR and TR samples
- Download analytics metadata: PASS for two NCF TDS files and the 3K specification guide

## Source Boundary

The reviewed local 1.2 mm carbon plate PDF describes a pultruded structural-strengthening CFRP plate. It is not evidence for a 3K twill laminate sheet and was not relabeled. The new 3K PDF is therefore explicitly a `Product Specification & RFQ Guide`, not a TDS. A formal FRP HOME 3K laminate TDS remains blocked until matching product source data are supplied.

No unsupported certification, authorization, annual capacity, customer case, price, stock, review, rating or sensitive-use claim was added.

## Operational Work After Approval

The following items require an approved production release and real account data; they are not claimed as completed in this implementation:

- establish NCF and 3K baselines in GSC, Bing and GA4
- submit only genuinely updated URLs to Google/Bing/IndexNow
- confirm production event data for RFQ, document, catalog, email and WhatsApp actions
- execute and document 60 manually reviewed outreach contacts over 90 days
- collect 12 weekly reports and one final 90-day comparison

Production must remain unchanged until the Preview report is approved.
