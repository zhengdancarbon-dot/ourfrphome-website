# Six-Core Russian Yandex Procurement Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

Production domain: `https://www.myfrphome.com`

Status: code and local production verification complete; not deployed

## Scope

The first language-specific review after repository recovery covered the six
Russian priority commercial pages:

1. `/ru/products/carbon-fiber-multiaxial-ncf-fabric`
2. `/ru/products/3k-carbon-fiber-laminate-sheet`
3. `/ru/products/carbon-fiber-yarn-and-tow`
4. `/ru/products/carbon-fiber-ud-fabric`
5. `/ru/products/structural-strengthening-system`
6. `/ru/products/carbon-fiber-woven-fabric`

The review covered metadata, H1, Quick Answer/hero copy, selection language,
FAQ, RFQ terminology, engineering boundaries, document descriptions, locale
output, canonical, hreflang and structured data. URL paths and page structure
were not changed.

## Corrections

| Page | Finding | Correction |
| --- | --- | --- |
| Multiaxial NCF | The former copy could imply that both 300gsm and 600gsm documents covered every listed direction. | The page now states the documented scope precisely: 300gsm biaxial `+45°/-45°` and `0°/90°`, plus 600gsm biaxial `+45°/-45°`. Other architectures and directions remain RFQ review items. |
| 3K laminate sheet | The page had a downloadable document but did not explicitly distinguish its document class from a product TDS. | The FAQ now identifies it as an English specification/RFQ guide, not a batch-specific TDS. |
| Yarn & Tow | The product range covered 1K-50K while the downloadable TDS covers a 12K reference only. | The FAQ now limits the reference TDS to 12K and requires grade, source, batch and sizing confirmation. |
| UD fabric | One engineering-responsibility sentence had incorrect Russian number agreement. | Corrected the grammar while retaining qualified-engineer review. |
| Strengthening system | No material evidence or engineering-boundary conflict found. | Retained the existing 300gsm UD and 1.2 mm pultruded CFRP plate TDS boundaries. |
| 3K woven fabric | No product-document or procurement-term conflict found. | Retained the 3K 200gsm twill TDS scope and both common Russian buyer terms for carbon fabric. |

## Technical Terms Preserved

The following technical values and identifiers remain unchanged:

- `3K`, `12K`, `300gsm`, `600gsm`
- `0°/90°`, `+45°/-45°`
- `UD`, `NCF`, `CFRP`, `RTM`, `TDS`
- `DXF`, `STEP`, `CNC`, `g/m²`, `1.2 mm`

No unsupported performance values, certification, official authorization,
capacity, customer case, stock claim, price, rating or review was added.

## Local Production Verification

- `pnpm lint`: PASS, 0 errors. Three warnings remain only in an unrelated,
  untracked Morocco output script.
- `pnpm build`: PASS.
- TypeScript: PASS.
- Generated pages: 216.
- Sitemap URLs: 207.
- Full URL audit: 207/207 PASS.
- Internal resources: 346/346 PASS.
- Priority product pages: 6/6 PASS.
- Localized video pages: 27/27 PASS.
- Negative 404 checks: 3/3 PASS.

Each reviewed Russian page returned HTTP 200 and exposed:

- `lang="ru"`
- localized title and H1
- self-referencing production canonical
- 10 alternate links: EN, ES, PT-BR, RU, AR, FR, KO, PL, TR and `x-default`
- localized Product, FAQPage and Breadcrumb structured data
- the expected English-PDF disclosure for technical downloads

## Decision

The Russian priority pages are ready for preview/release review from a content,
document-boundary and technical SEO perspective. This audit does not authorize
production deployment or repeated Yandex recrawling. Recrawling should happen
once after an approved material release is deployed.
