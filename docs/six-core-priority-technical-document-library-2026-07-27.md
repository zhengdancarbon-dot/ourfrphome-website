# Six-Core Priority Technical Document Library

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

## Objective

Expose the reviewed TDS and specification files for the six priority product
groups from one crawlable Technical Resources surface, without changing any
commercial URL or presenting a specification guide as a formal TDS.

## Published document library

`/technical-resources` now includes a verified-download section with nine
unique English PDF files:

- three Multiaxial NCF documents: 300gsm biaxial, 600gsm `+45/-45` biaxial and
  400gsm quadraxial supplier-origin supply reference;
- one 3K laminate `SPEC` and RFQ guide;
- one 12K Carbon Fiber Tow TDS;
- two UD documents: 300gsm product TDS and 200gsm supplier-origin strengthening
  supply reference;
- one 1.2 mm pultruded CFRP strengthening-plate TDS; and
- one 3K 200gsm twill woven-fabric TDS.

Shared documents are deduplicated. The UD and strengthening products point to
the same applicable records without creating duplicate cards or URLs.

## Evidence boundaries

- The 3K laminate file remains visibly and programmatically classified as
  `SPEC`, not `TDS`.
- Supplier-origin records remain named as supply references.
- The page tells buyers to confirm final order specification, revision, batch
  documents and test requirements in the RFQ.
- No price, inventory, rating, review, certification, authorization, capacity
  or batch claim was added.

## Discovery and measurement

Each document card provides:

- a direct PDF download;
- one or more links to the applicable priority product page;
- revision, language, file type and file size;
- `tds_download` measurement with document title and product context; and
- a `DigitalDocument` entry in a nine-item `ItemList` using production-domain
  PDF and product URLs.

The sitemap records 2026-07-27 as the real update date for
`/technical-resources`.

## Verification

- `pnpm lint`: PASS with zero project errors; three existing warnings remain in
  an unrelated Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - checked pages: 210/210
  - internal resources: 351
  - priority documents: 9/9
  - priority products: 6/6
  - negative 404 checks: 3/3
- Browser QA:
  - desktop 1440 x 900: 9 cards, 9 downloads, 8 `TDS` plus 1 `SPEC`, all six
    product links, no horizontal overflow;
  - mobile 390 x 844: 9 cards, 9 downloads, no card or page overflow, no narrow
    download controls;
  - no browser console errors.

## Release status

The change is on the recovery branch only. It has not been merged to `main`,
deployed to production or submitted to Google, Yandex or IndexNow.
