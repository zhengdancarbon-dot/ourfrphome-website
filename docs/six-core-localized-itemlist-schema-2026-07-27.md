# Six-Core Localized ItemList Schema

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

## Objective

Make the visible six-product priority navigation machine-readable on all eight
localized Products directories without changing any public URL, metadata,
canonical or hreflang relationship.

## Structured data coverage

Added one localized `ItemList` entity to each route:

- `/es/products` with `inLanguage: es`
- `/pt-br/products` with `inLanguage: pt-BR`
- `/ru/products` with `inLanguage: ru`
- `/ar/products` with `inLanguage: ar`
- `/fr/products` with `inLanguage: fr`
- `/ko/products` with `inLanguage: ko`
- `/pl/products` with `inLanguage: pl`
- `/tr/products` with `inLanguage: tr`

Each entity contains:

- a self-referencing localized `@id`;
- the localized priority-section title;
- six `ListItem` entries in the shared commercial-priority order;
- localized product names;
- localized canonical product URLs;
- list position and item count.

The schema does not contain `Offer`, price, inventory, rating, review,
certification, capacity or product-performance properties.

## No-fallback control

The production SEO audit now fails when a localized priority `ItemList`:

- is missing;
- contains a number other than six;
- exposes the wrong language code;
- omits one of the six localized product URLs; or
- falls back to any of the six exact English product names.

## Verification

- `pnpm lint`: PASS with zero project errors; three existing warnings remain in
  an unrelated ignored Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - localized priority directories: 8/8
  - localized ItemList URL/language/name controls: PASS
  - internal resources: 351
  - priority product pages: 6/6
  - technical articles: 24/24
  - localized video pages: 45/45
  - negative 404 checks: 3/3

## Release status

The change is prepared on the recovery branch only. It has not been merged to
`main`, deployed to production or submitted to Google, Yandex or IndexNow.
