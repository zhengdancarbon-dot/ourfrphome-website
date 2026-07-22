# FRP HOME Five-Core Document and Conversion Audit

Date: 2026-07-22

Production: `https://www.myfrphome.com`

## Coverage

The English, Spanish, Brazilian Portuguese, Russian, Arabic, French, Korean, Polish and Turkish pages were checked for six priority product routes:

- Multiaxial carbon NCF
- 3K carbon fiber laminate sheet
- Carbon fiber yarn and tow
- UD carbon fiber fabric
- Structural strengthening system
- 3K woven carbon fiber fabric

## Result

- Product-language page combinations checked: 54
- PDF download links checked: 72
- Download analytics attribute errors: 0
- Unique priority documents checked: 7
- PDF HTTP or content-type errors: 0
- Localized pages clearly identify the linked files as English documents.

Every checked PDF link includes:

- `data-analytics-event="tds_download"`
- the correct `data-product-slug`
- a non-empty `data-document-title`

The global event bridge adds `locale`, `source_page`, `link_url`, `product_slug` and `document_title` where available and sends the event to GA4. It will also send the same goal to Yandex Metrica after a real counter is configured.

## Product Document Matrix

| Product | Published document | Type | EN | ES | PT-BR | RU | AR | FR | KO | PL | TR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Multiaxial NCF | 300gsm Biaxial Carbon Fabric | TDS | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Multiaxial NCF | 600gsm +45°/-45° Biaxial Carbon NCF | TDS | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| 3K laminate sheet | 3K Laminate Sheet Specification & RFQ Guide | SPEC | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Yarn & Tow | High Strength 12K Carbon Fiber Tow | TDS | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| UD fabric | 300gsm UD Carbon Fiber Fabric | TDS | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Strengthening system | 300gsm UD Fabric for Strengthening | TDS | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Strengthening system | 1.2 mm Pultruded CFRP Strengthening Plate | TDS | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| 3K woven fabric | 3K 200gsm Twill Carbon Fiber Fabric | TDS | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

The 3K laminate file remains a Product Specification & RFQ Guide. It is not labeled as a TDS because matching 3K laminate fiber, resin, layup, tolerance and test-method records have not been supplied.

## Live Analytics and Verification Status

| Integration | Production status |
| --- | --- |
| GA4 tag | PRESENT |
| Google Search Console verification | PRESENT |
| Bing verification | PRESENT |
| Shared conversion event bridge | PRESENT |
| Yandex Webmaster verification | MISSING |
| Yandex Metrica tag | MISSING |

Yandex code support is complete, but no Yandex data is being collected until valid production values are supplied for `YANDEX_VERIFICATION_CODE` and `YANDEX_METRICA_ID` and a fresh production deployment is completed.

## Claim Boundary

The audit does not treat a PDF link as proof of certification, authorization, stock, capacity or project suitability. Final specification, batch documents, destination, end use and engineering approval remain subject to quotation and review.
