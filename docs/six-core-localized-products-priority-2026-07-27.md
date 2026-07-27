# Six-Core Localized Products Priority Navigation

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

## Objective

Give the six priority product groups a clear procurement entry point on every
published localized Products directory without changing URLs, product slugs,
metadata, canonical tags or hreflang groups.

## Updated localized routes

- `/es/products`
- `/pt-br/products`
- `/ru/products`
- `/ar/products`
- `/fr/products`
- `/ko/products`
- `/pl/products`
- `/tr/products`

Each route now presents these six localized commercial links before the full
family directory:

1. Carbon Fiber Multiaxial NCF Fabric
2. 3K Carbon Fiber Laminate Sheet
3. Carbon Fiber Yarn & Tow
4. 3K Woven Carbon Fiber Fabric
5. Strengthening UD Carbon Fiber Fabric
6. CFRP Structural Strengthening System

The section heading, explanatory copy, product names, categories and CTA are
localized for Spanish, Brazilian Portuguese, Russian, Arabic, French, Korean,
Polish and Turkish. Technical tokens and product URLs remain unchanged.

## Search and crawl behavior

- No public route was added or removed.
- No English fallback page was introduced.
- Existing self-referencing canonicals and nine-language hreflang groups remain
  unchanged.
- The real 2026-07-27 update date is emitted for English and all eight localized
  Products directories in the sitemap.
- Localized sitemap priority values are rounded to two decimal places instead
  of exposing JavaScript floating-point artifacts.
- The production audit now requires all six localized product cards and links
  on all eight directory routes.

## Content boundaries

- The cards reuse already-reviewed localized product names and descriptions.
- No new property, grade, stock, certification, authorization, capacity,
  customer case, price, rating or sensitive end-use claim was added.
- RFQ copy asks buyers to confirm specification, quantity, process, destination,
  final application and required documents.

## Verification

- `pnpm lint`: PASS with zero project errors; three existing warnings remain in
  an unrelated ignored Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - internal resources: 351
  - localized Products directories: 8/8
  - priority product pages: 6/6
  - technical articles: 24/24
  - localized video pages: 45/45
  - negative 404 checks: 3/3
- Spanish desktop `1440 x 900`: correct `lang="es"`, six localized cards, no
  card or page overflow.
- Arabic mobile `390 x 844`: correct `lang="ar"`, `dir="rtl"`, one-column grid,
  six localized cards, no card or page overflow.
- Browser console: no errors.
- Sitemap priority formatting: PASS; no `0.899999...` output remains.

## Release status

The change is prepared on the recovery branch only. It has not been merged to
`main`, deployed to production or submitted to Google, Yandex or IndexNow.
