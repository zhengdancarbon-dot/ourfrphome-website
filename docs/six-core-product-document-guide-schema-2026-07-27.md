# Six-Core Product Document and Buyer-Guide Schema

Date: 2026-07-27  
Branch: `codex/repository-recovery-20260723`  
Production deployment: not performed

## Objective

Connect the verified TDS/SPEC downloads and reviewed buyer guides to the six
priority commercial products in machine-readable structured data without
changing any public URL, page metadata, form behavior or visible design.

## Implementation

- Added reusable product-resource schema generation in
  `lib/product-resource-schema.ts`.
- Product entities now reference their two resource lists through `subjectOf`:
  - `#technical-documents`
  - `#buyer-guides`
- Every published product document is represented as a `DigitalDocument` with:
  - its real PDF URL;
  - `application/pdf` encoding;
  - English document language;
  - the existing title and specification boundary;
  - an `about` relationship to the localized Product entity.
- Every reviewed guide is represented as an English `Article` within a
  product-specific buyer-guide `ItemList` and linked to the same Product entity.
- The 3K laminate download remains classified as `Product specification and
  RFQ guide`. It is not labeled as a TDS.
- Product Schema still contains no Offer, price, availability, rating, review,
  inventory or unsupported performance property.

## Coverage

- Six English priority product pages.
- The corresponding six product pages in ES, PT-BR, RU, AR, FR, KO, PL and TR.
- Total product-resource pages checked: 54.
- Unique priority documents retained in the central library: 9.
- The English pages expose up to four reviewed guides; localized pages expose
  up to three and identify them as English resources.

## Verification

- `pnpm lint`: passed with 0 errors. Three pre-existing warnings remain in the
  unrelated `.codex-output-work/morocco-promotion-2026` generator.
- `pnpm build`: passed, including TypeScript, with 219 generated routes.
- Production-mode SEO audit: passed.
  - sitemap URLs: 210;
  - pages checked: 210;
  - internal resources checked: 351;
  - priority product-resource pages: 54/54;
  - technical articles: 24/24;
  - localized video pages: 45/45;
  - negative 404 checks: 3/3.
- Browser QA:
  - English NCF at 1440 x 900: three document links, four guide links, matching
    schema counts, no horizontal overflow and no console errors.
  - Arabic 3K laminate at 390 x 844: `lang=ar`, `dir=rtl`, one SPEC document,
    three guide links, no horizontal overflow and no console errors.

## Release Status

The change is limited to structured entity relationships and audit coverage.
Production remains unchanged pending explicit approval. Preview evidence will be
recorded after the same-commit Preview is created.
