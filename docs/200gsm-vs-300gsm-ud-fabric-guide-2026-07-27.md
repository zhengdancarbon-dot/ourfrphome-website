# 200gsm vs 300gsm UD Fabric Selection Guide

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: unchanged

## Purpose

Add a source-backed comparison for strengthening buyers deciding what must be specified when an RFQ mentions 200gsm or 300gsm unidirectional carbon fiber fabric. The guide does not turn dry-fabric references into structural design values and does not create a second commercial product route.

New English guide:

`/technical-center/200gsm-vs-300gsm-ud-carbon-fiber-fabric`

Commercial routes retained:

- `/products/carbon-fiber-ud-fabric`
- `/products/structural-strengthening-system`

## Sources Reviewed

1. `/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf`
   - Document `FRPH-TDS-UD200-SUPPLY-EN-R01`.
   - Source record `TCU20`.
   - 0° unidirectional dry fabric.
   - 200 g/m² nominal areal weight.
   - 0.111 mm nominal dry-fiber thickness.
   - Width, roll length, fiber grade and usable mechanical values are not stated.

2. `/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf`
   - Document `FRPH-TDS-UD300-EN-R01`.
   - Product `FRPH-UD300`.
   - 0° unidirectional dry fabric.
   - 300 g/m² nominal areal weight.
   - 0.167 mm nominal dry-fabric thickness.
   - 100-500 mm available-width reference.
   - Exact grade, sizing, tolerances and system performance remain order-dependent.

Both two-page PDFs were rendered at 120 dpi and visually checked. No clipping, overlap, broken table or missing identity field was found.

## Evidence Boundary

- `200gsm` and `300gsm` are nominal dry-fabric areal weights.
- `0.111 mm` and `0.167 mm` are nominal dry-material references, not cured-system thicknesses.
- Areal weight alone does not prove finished-system strength.
- Fiber grade cannot be inferred from gsm.
- Structural design, substrate acceptance, resin compatibility, laminate schedule, installation and project testing remain qualified project responsibilities.
- The 200gsm file remains explicitly labeled as a legacy source-record supply reference.

## Website Changes

- Added Quick Answer, definition, six-row comparison, selection advice, specifications, RFQ fields and five FAQs.
- Linked both real PDFs through the existing `tds_download` event.
- Added Product, Article, FAQ and Breadcrumb-compatible links through the existing Technical Center template.
- Added the guide to the strengthening guide cluster and to related guides on UD and strengthening product pages.
- Added four long-tail intents to the six-core keyword map without creating a duplicate commercial URL.
- Extended the full SEO audit to require the document IDs, evidence boundary, both PDFs and UD product link.

## Verification

| Check | Result |
| --- | --- |
| `git diff --check` | Pass |
| `pnpm lint` | Pass, zero project errors; three unrelated existing warnings in `.codex-output-work` |
| `pnpm build` | Pass, 219 generated pages |
| Full local SEO audit | Pass, 210/210 sitemap pages |
| Locale distribution | EN 58; ES/PT-BR/RU/AR/FR/KO/PL/TR 19 each |
| Technical articles | 24 checked |
| Internal resources | 351 checked |
| Article Schema | Article, FAQPage and BreadcrumbList present |
| Product links | Guide and both PDFs present on 18/18 UD and strengthening product routes |
| PDF responses | Both return 200 and `application/pdf` |
| Desktop 1440 x 900 | No page overflow; both tables fit their 1050 px content width |
| Mobile 390 x 844 | No page overflow; long H1 fits; both 680 px tables scroll only inside 319 px containers |
| Arabic mobile | `lang="ar"`, `dir="rtl"`, guide and both TDS links present |
| Browser console | No errors or warnings |

Vercel Preview status and deployment identity are added after the committed branch is deployed. Production remains unchanged until separate approval.

## Release Boundary

- Do not present the 200gsm supply reference as current stock, current manufacture, certification, batch data or project approval.
- Do not use dry-fabric data as cured-laminate design allowables.
- Confirm current source, grade, sizing, width, roll format, resin system, quantity, destination, final application and required documents before quotation.
