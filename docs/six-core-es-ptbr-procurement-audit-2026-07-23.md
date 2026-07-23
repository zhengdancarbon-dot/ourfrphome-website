# Six-Core ES and PT-BR Procurement Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

Production domain: `https://www.myfrphome.com`

Status: code and local production verification complete; not deployed

## Scope

The review covered the Spanish and Brazilian Portuguese versions of all six
priority commercial pages, for a total of 12 localized routes:

- Carbon Fiber Multiaxial NCF Fabric
- 3K Carbon Fiber Laminate Sheet
- Carbon Fiber Yarn & Tow
- Strengthening UD Carbon Fiber Fabric
- Structural Strengthening System / Pultruded CFRP Plate
- 3K Woven Carbon Fiber Fabric

The audit checked metadata, H1, hero/Quick Answer copy, FAQ, RFQ terminology,
engineering review language, technical-document boundaries, canonical,
hreflang, schema and server-rendered locale semantics. Existing URLs, slugs,
page templates and the RFQ API were not changed.

## Corrections

| Product | Spanish and PT-BR correction |
| --- | --- |
| Multiaxial NCF | Replaced a broad statement that combined 300gsm, 600gsm and every orientation. The copy now limits documented products to 300gsm biaxial `+45°/-45°` and `0°/90°`, plus 600gsm biaxial `+45°/-45°`; other architectures remain RFQ review items. |
| 3K laminate sheet | Added an explicit statement that the English download is a specification/RFQ guide, not a batch-specific TDS. |
| Yarn & Tow | Added the boundary that the English reference TDS covers 12K continuous tow only; grade, source, batch and sizing must be confirmed, and the document does not automatically cover other tow sizes. |
| UD fabric | Added visible 300gsm TDS scope, complete RFQ inputs and qualified-engineer review for strengthening applications. |
| Structural strengthening | Added the actual English TDS scope: 300gsm UD fabric and 1.2 mm pultruded CFRP plate. Clarified that calculation, design, installation and approval remain with qualified engineers. |
| 3K woven fabric | Added a direct TDS FAQ for the documented 3K 200 g/m² twill product while keeping order width, roll and final specification subject to confirmation. |

## Language And Technical Integrity

- Spanish and Brazilian Portuguese copy remains separate; no Spanish wording
  was introduced into PT-BR and no PT-BR wording was introduced into Spanish.
- Product identifiers and technical values remain unchanged: `3K`, `12K`,
  `300gsm`, `600gsm`, `0°/90°`, `+45°/-45°`, `UD`, `NCF`, `CFRP`, `RTM`,
  `TDS`, `DXF`, `STEP`, `CNC`, `g/m²` and `1.2 mm`.
- Generic tow sizes remain RFQ options and are not described as guaranteed
  inventory.
- No unsupported performance, certification, authorization, capacity, stock,
  customer, price, rating or review claim was added.

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

All 12 reviewed routes returned HTTP 200 and exposed:

- localized title and H1
- server-rendered localized content wrapper with `lang="es"` or `lang="pt-BR"`
  and `dir="ltr"`
- self-referencing production canonical
- 10 alternate links: EN, ES, PT-BR, RU, AR, FR, KO, PL, TR and `x-default`
- localized Product, FAQPage and Breadcrumb structured data
- the expected technical-document language disclosure

## Decision

The six Spanish and six Brazilian Portuguese priority pages are ready for
preview/release review. This audit does not authorize production deployment,
external submission or repeated indexing requests. Request recrawling once,
only after an approved material update is deployed.
