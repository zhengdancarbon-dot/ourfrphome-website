# Catalog Design and QA Ledger

Date: 2026-06-20  
Route tested: `http://localhost:3000/catalog`  
Target: 32-page A4 digital catalog with browser preview and print-to-PDF output

## Visual fidelity ledger

| Comparison point | Concept evidence | Render evidence | Result |
| --- | --- | --- | --- |
| Cover hierarchy | Graphite cover, orange rule, large “Carbon Fiber Materials” title and product-led lower composition | Page 1 keeps the same hierarchy, palette, title order and lower product composition | Pass |
| Color system | True black / graphite, cool gray, white and controlled safety orange | Shared CSS tokens are used across all 32 pages | Pass |
| Interior header | Black running header with brand, section label and orange page marker | Every non-cover page uses the same header family and page numbering | Pass |
| Product-page anatomy | Large image area, key options on the right, technical table, applications and orange RFQ bar | Product pages 8, 10-13, 18-21 and 23 use the reusable `ProductPage` component | Pass |
| Technical tables | Crisp black header row, thin rules and generous row spacing | Tables remain inside the A4 page with zero vertical overflow | Pass |
| Operations pages | Three-stage quality flow, image areas and RFQ-oriented structure | Quality, traceability, packing, customization and RFQ pages use the same visual language | Pass |
| Image treatment | Large implementation-friendly image frames | Real photography is intentionally replaced with clearly labeled image placeholders, as requested | Intentional deviation |
| Typography | Condensed industrial display type with neutral sans-serif body type | System Arial Narrow / Impact fallbacks are used to avoid unlicensed font dependencies | Intentional deviation |
| Company concept density | Combined company, product-range and application content | The final 32-page structure separates product overview and applications onto pages 5-6 | Intentional deviation |
| Above-the-fold copy | FRP HOME, Carbon Fiber Materials, For Composite Manufacturing, company and edition | Cover copy matches the approved concept and supplied company information | Pass |

## Functional QA

- Page identity: title and `/catalog` route confirmed.
- Meaningful render: 27,635 characters of catalog content present.
- Page count: 32 catalog pages rendered.
- Framework overlay: none.
- Console errors or warnings: none.
- Failed network requests: none.
- Contents button: jumps to page 5 with an 84 px toolbar offset.
- RFQ Guide button: jumps to page 29 with an 84 px toolbar offset.
- Mobile viewport: 390 × 844 px, no document-level horizontal overflow.
- Print output: 32-page A4 portrait PDF.
- A4 page size: 594.96 × 841.92 pt.
- Vertical content overflow: zero on all 32 pages.

The cover and section-divider artwork intentionally extends beyond the internal page box and is clipped by the A4 page boundary. This creates the intended full-bleed composition and does not produce document-level overflow.

## Remaining publication work

- Replace every labeled image placeholder with approved high-resolution photography.
- Confirm equipment count and annual production capacity.
- Confirm legal address, active contact details and QR destination.
- Confirm product availability, tolerances, MOQ, lead time and technical values.
- Add authentic TDS, COA or certificate references only where applicable.

