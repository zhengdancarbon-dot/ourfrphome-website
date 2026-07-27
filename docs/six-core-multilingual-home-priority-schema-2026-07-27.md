# Six-Core Multilingual Home Priority Schema

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

## Objective

Make the highest-authority page in each language express the same six-product
commercial priority used by Products, Technical Center and `llms.txt`, without
changing any URL, metadata or page layout.

## Shared priority order

All nine homepages now use `priorityDiscoveryRoutes` as the single source for:

1. Carbon Fiber Multiaxial NCF Fabric
2. 3K Carbon Fiber Laminate Sheet
3. Carbon Fiber Yarn & Tow
4. UD Carbon Fiber Fabric
5. Carbon Fiber Structural Strengthening System
6. Woven Carbon Fiber Fabric

The previous duplicated homepage lists were removed. The same six existing
cards remain visible; only their order is aligned with the approved commercial
allocation.

## Structured data

English and each localized homepage now include an `ItemList` with:

- a self-referencing homepage `@id` ending in `#priority-products`;
- the correct `inLanguage` value;
- six ordered `ListItem` entries;
- visible English or localized product names; and
- stable canonical commercial product URLs.

No `Offer`, price, inventory, rating, review or unsupported property is used.

## Automated controls

The production audit now verifies all nine homepages for:

- a visible priority-products section marker;
- all six cards in the shared order;
- six correct locale-aware links;
- one six-item `ItemList` with the correct language;
- six canonical schema URLs; and
- no exact English product-name fallback on localized homepages.

## Verification

- `pnpm lint`: PASS with zero project errors; three existing warnings remain in
  an unrelated ignored Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - checked homepages: 9/9
  - localized `llms.txt` priority links: 48/48
  - product-and-guide discovery links: 24/24
  - internal resources: 351
  - priority products: 6/6
  - technical articles: 24/24
  - localized video pages: 45/45
- Browser QA:
  - English desktop at 1440 x 900: correct six-card order, no horizontal
    overflow, no console errors or warnings.
  - Arabic RTL mobile at 390 x 844: correct translated order and `ItemList`, no
    horizontal overflow, no console errors or warnings.

## Release status

Vercel Preview:

- URL: `https://ourfrphome-website-96f1lqlg3-zhendgan.vercel.app`
- Deployment: `dpl_FsPBqzKDbyJW46WthMR5Twdvwfps`
- State: `READY`
- Vercel build: PASS, including TypeScript and all 219 generated routes.

The change remains on the recovery branch only. It has not been merged to
`main`, deployed to production or submitted to Google, Yandex or IndexNow.
