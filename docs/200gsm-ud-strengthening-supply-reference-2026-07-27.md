# 200gsm UD Strengthening Supply Reference

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: unchanged

Preview: `https://ourfrphome-website-7opxiqq4f-zhendgan.vercel.app`

Vercel deployment: `dpl_8PgvWcNKo4caophVWBSXhv3HFJiC` (`READY`)

## Purpose

Add a narrowly scoped 200gsm unidirectional carbon-fiber strengthening-fabric reference to the priority UD and structural-strengthening clusters without carrying forward damaged numerical fields, old approval language or unsupported current-source claims.

Priority products:

- `/products/carbon-fiber-ud-fabric`
- `/products/structural-strengthening-system`

Updated buyer guides:

- `/technical-center/cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening`
- `/technical-center/cfrp-strengthening-material-rfq-checklist`

Published document:

`/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf`

## Source Reviewed

`正旦碳布TDS/TCU20 carbon fiber fabric - T300.pdf`

The archived two-page source clearly shows:

- Product identity `TCU20`.
- Dry unidirectional carbon-fiber fabric for structural strengthening.
- Primary fiber direction `0°`.
- Areal weight `200 g/m²`.
- Nominal fiber thickness `0.111 mm`.
- Color black.

## Excluded Source Content

- Mechanical-property numerals containing damaged or unreadable characters.
- Mechanical values without a complete test-method and resin-system basis.
- Legacy approval wording and standard references presented as product approval.
- Shelf-life and storage-duration claims that are not appropriate for the published dry-fabric supply reference.
- Application assertions that could be interpreted as project design or system approval.
- Any implication of current manufacture, stock, authorization, certification or batch availability.

## Website Changes

- Added the PDF to both the UD Carbon Fiber Fabric and Structural Strengthening System document libraries.
- The download is visible on EN, ES, PT-BR, RU, AR, FR, KO, PL and TR product pages.
- Existing `tds_download` tracking retains locale, link URL, product slug and document title.
- Updated localized product copy so it distinguishes the 200gsm legacy-source supply reference from the 300gsm product TDS.
- Updated English UD and strengthening product data without changing existing URLs or page structure.
- Updated the existing CFRP plate-vs-fabric guide and strengthening RFQ checklist with the new evidence boundary.
- Preserved structural-design, substrate, resin compatibility, installation and end-use review language.

## PDF Verification

- Two A4 pages rendered at 130 dpi.
- No clipping, overlap, broken tables or missing page elements found.
- Cover identifies the file as `SUPPLY REFERENCE DATA SHEET`.
- Source-record and evidence-boundary text is visible on page 2.
- File metadata title and author match the published document.
- Published file size: 69,063 bytes (`68 KB` display value).

## Website Verification

| Check | Result |
| --- | --- |
| `git diff --check` | Pass |
| `pnpm lint` | Pass, zero project errors |
| `pnpm build` | Pass, 216 generated pages |
| Full local SEO audit | Pass, 207/207 sitemap pages |
| Internal resources | 348 checked |
| UD and strengthening product pages | 18/18 return 200 |
| New document link | Present on all 18 product pages |
| New PDF response | 200, `application/pdf` |
| `tds_download` attributes | Locale-compatible tracking present on all pages |
| Updated buyer guides | Both contain the 200gsm, 300gsm and 1.2 mm evidence hierarchy |
| Desktop 1440 x 900 | No page overflow, broken images or console errors |
| Mobile 390 x 844 | No page overflow; all three strengthening document cards fit |
| Arabic | `lang="ar"`, `dir="rtl"`, three tracked document cards |
| Vercel Preview build | Pass, deployment `READY` |

The Vercel build compiled successfully, passed TypeScript validation and generated all 216 application pages. Direct HTTP access from the execution network timed out; use the normal logged-in browser if Vercel deployment protection is active.

## Release Boundary

- Production has not been changed.
- Do not present this file as a batch certificate, current-stock confirmation or project approval.
- Confirm current source, fiber grade, sizing, width, roll, resin compatibility, quantity, destination and final application before quotation.
- Request a recrawl only after an approved production deployment.
