# 400gsm Quadraxial NCF TDS And Guide

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: unchanged

Preview: `https://ourfrphome-website-mitpuxdr2-zhendgan.vercel.app`

Vercel deployment: `dpl_FBvZo2bcVaQFyDqi1h6ZTzuiieNA` (`READY`)

## Purpose

Add a source-backed quadraxial NCF supply reference to the priority Multiaxial Carbon NCF cluster without creating a competing article URL or representing supplier-origin data as FRP HOME manufacture, authorization, stock or batch certification.

Updated guide:

`/technical-center/biaxial-vs-triaxial-vs-quadriaxial-carbon-ncf`

Priority product:

`/products/carbon-fiber-multiaxial-ncf-fabric`

Published document:

`/downloads/tds/FRP-HOME-400gsm-Quadraxial-Carbon-NCF-Supply-TDS.pdf`

## Primary Source Reviewed

`正旦碳布TDS/ZD_Quadraxial_Carbon_Fabric_TDS_400gsm_EN.pdf`

The one-page source record explicitly states:

- Quadraxial construction `0/+45/90/-45`.
- Four 100 g/m2 carbon layers, 400 g/m2 carbon total.
- 12K standard-modulus carbon, 800 tex.
- Texturised polyester stitch, 78 dtex.
- 6.0 gg gauge, 2.22 mm pillar stitch and 8 g/m2 stitch weight.
- 408 g/m2 total dry-fabric weight with +/-5% source tolerance.
- 1270 mm width with +/-5 mm source tolerance.
- 25.72 kg / 50 m source roll reference.
- Customer-specified tracer threads, tapered edges, cardboard core and packaging.

## Evidence Boundaries

- The new PDF is titled `SUPPLY REFERENCE DATA SHEET` and repeatedly identifies the construction as supplier-origin.
- The PDF does not claim FRP HOME manufacture, official source authorization, stock, batch availability or independent testing.
- The values are nominal source references, not a batch certificate or cured-laminate design allowables.
- Final layer order, fiber grade, sizing, width, roll, stitch, packing, COA and source availability require quotation and order confirmation.
- Drape, compaction, permeability, resin process and final end use require customer validation.

## Website Changes

- Added the generated PDF to the Multiaxial NCF product document library.
- The download appears on EN, ES, PT-BR, RU, AR, FR, KO, PL and TR product pages.
- Existing `tds_download` analytics continue to send locale, link URL, product slug and document title.
- Preserved the existing article slug, title, description and canonical URL.
- Added exact source-backed construction, stitch, width and roll data to the architecture comparison, specifications, selection advice, RFQ fields and FAQ.
- Added the new public PDF as a visible source and downloadable document on the guide.
- Updated only the affected English product and article review dates.
- Updated the TDS status register and the reproducible PDF generator.

## PDF Verification

- Two A4 pages rendered at 130 dpi.
- No clipped text, overlap, broken tables or missing page elements were found.
- PDF metadata title and author match the published document.
- Text extraction confirms the source identity, evidence-boundary language and all quoted construction fields.
- Final published file size: 69,227 bytes (`68 KB` display value).

## Website Verification

| Check | Result |
| --- | --- |
| `git diff --check` | Pass |
| `pnpm lint` | Pass, zero project errors |
| `pnpm build` | Pass, 216 generated pages |
| Full local SEO audit | Pass, 207/207 sitemap pages |
| Internal resources | 347 checked |
| NCF product pages | 9/9 return 200 |
| NCF document cards | 3 on every localized product page |
| New PDF response | 200, `application/pdf` |
| `tds_download` attributes | Present on all nine pages |
| Article source facts and PDF link | Pass |
| Sitemap count and affected `lastModified` | Pass |
| Desktop 1440 x 900 | No page overflow or console errors |
| Mobile 390 x 844 | No page overflow; three document cards fit correctly |
| Arabic | `lang="ar"`, `dir="rtl"`, three tracked document cards |
| Vercel Preview build | Pass, deployment `READY` |

The Vercel build compiled successfully, passed TypeScript validation and generated all 216 application pages. Preview access may still require the normal logged-in browser when Vercel deployment protection is active.

## Release Boundary

- Production has not been changed.
- Complete a normal-browser review of the fresh Preview before requesting production approval.
- Request one recrawl only after an approved production deployment.
- Keep article metadata stable until the page reaches 14 indexed days or 50 impressions and query evidence supports a change.
- Confirm source, sample, order specification, destination and final end use before every commercial commitment.
