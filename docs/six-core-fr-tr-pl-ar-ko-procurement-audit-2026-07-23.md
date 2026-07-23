# Six-Core FR, TR, PL, AR and KO Procurement Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

Production domain: `https://www.myfrphome.com`

Status: code and local production verification complete; not deployed

## Scope

This review completed the remaining five-language procurement audit for the six
priority commercial products, covering 30 localized routes in French, Turkish,
Polish, Arabic and Korean.

The six reviewed products were:

1. Carbon Fiber Multiaxial NCF Fabric
2. 3K Carbon Fiber Laminate Sheet
3. Carbon Fiber Yarn & Tow
4. Strengthening UD Carbon Fiber Fabric
5. Structural Strengthening System / Pultruded CFRP Plate
6. 3K Woven Carbon Fiber Fabric

Existing URLs, slugs, templates, metadata titles and the RFQ API were preserved.

## Evidence Matrix

The existing product-specific copy for Yarn & Tow, UD fabric, structural
strengthening and 3K woven fabric was retained after confirming that every
language already exposed the correct boundaries:

| Product | Verified document boundary |
| --- | --- |
| Yarn & Tow | Reference TDS for continuous 12K tow; grade, source, batch and sizing remain order-confirmation items. |
| UD fabric | TDS for the 300gsm UD product; final order and batch specification must be confirmed. |
| Structural strengthening | TDS documents for 300gsm UD fabric and 1.2 mm pultruded CFRP strengthening plate only. Engineering design and installation remain with qualified engineers. |
| 3K woven fabric | TDS for the documented 3K 200gsm twill product; width, roll and final order specification remain subject to confirmation. |

## Corrections

Ten localized pages required a correction:

- Five Multiaxial NCF pages now state the documented scope precisely: biaxial
  300gsm in `+45°/-45°` and `0°/90°`, plus biaxial 600gsm in `+45°/-45°`.
  UD, triaxial, quadriaxial and other directions remain RFQ review items.
- Five 3K laminate pages now identify the English download as a
  specification/RFQ guide, not a TDS with confirmed properties for a specific
  batch.

The corrections were localized separately for French, Turkish, Polish, Arabic
and Korean. Technical identifiers were not translated or reformatted.

## Technical And Compliance Integrity

The following values remain unchanged across all five languages:

- `3K`, `12K`, `300gsm`, `600gsm`
- `0°/90°`, `+45°/-45°`
- `UD`, `NCF`, `CFRP`, `RTM`, `TDS`, `RFQ`
- `DXF`, `STEP`, `CNC`, `g/m²`, `1.2 mm`

No certification, authorization, annual capacity, inventory, price, customer
case, test conclusion, rating or review was added. Final-use and engineering
review language remains active.

## Local Production Verification

- `pnpm lint`: PASS with 0 errors; three warnings remain only in an unrelated,
  untracked Morocco output script.
- `pnpm build`: PASS.
- TypeScript: PASS.
- Generated pages: 216.
- Sitemap URLs: 207.
- Full URL audit: 207/207 PASS.
- Internal resources: 346/346 PASS.
- Priority products: 6/6 PASS.
- Localized video pages: 27/27 PASS.
- Negative 404 checks: 3/3 PASS.
- Focused five-language product check: 30/30 PASS.

Each of the 30 focused routes returned HTTP 200 and exposed:

- the correct localized server-rendered content wrapper
- Arabic `lang="ar"` and `dir="rtl"`; other reviewed languages use `dir="ltr"`
- self-referencing production canonical
- 10 alternate links: EN, ES, PT-BR, RU, AR, FR, KO, PL, TR and `x-default`
- localized Product, FAQPage and Breadcrumb structured data
- the expected TDS or SPEC boundary in server-rendered HTML

## Multilingual Completion State

The six priority product pages have now completed procurement-language and
document-boundary review in all eight localized languages: ES, PT-BR, RU, AR,
FR, KO, PL and TR. English remains the canonical default route set.

## Decision

The five reviewed language groups are ready for preview/release review. This
does not authorize production deployment, external submission or repeated
indexing requests. After an approved deployment, submit one material-update
recrawl signal and then measure results through the normal weekly reporting
window.
