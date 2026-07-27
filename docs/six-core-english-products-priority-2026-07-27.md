# Six-Core English Products Priority Navigation

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

## Objective

Concentrate English internal discovery around the six current priority
commercial products without changing product URLs, metadata or the existing
family directory.

## Implementation

The English `/products` directory now presents a priority procurement section
before the complete product-family listing. It links:

1. Carbon Fiber Multiaxial NCF Fabric
2. 3K Carbon Fiber Laminate Sheet
3. Carbon Fiber Yarn & Tow
4. Strengthening UD Carbon Fiber Fabric
5. CFRP Structural Strengthening System
6. 3K Woven Carbon Fiber Fabric

Each card uses the existing commercial name, category, description and stable
product URL. The buyer note asks for specification, quantity, process,
destination, final application and required documents without promising stock,
performance or document availability.

## Structured data

- Added one `ItemList` entity for the six real product URLs.
- The entity records list order, names and canonical product URLs only.
- It does not add `Offer`, price, inventory, rating, review or unsupported
  product properties.
- Existing individual Product and FAQ structured data remains on product detail
  pages.

## Verification

- `pnpm lint`: PASS with zero project errors; three existing warnings remain in
  an unrelated ignored Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - internal resources: 351
  - English priority section: 6/6 product cards and links
  - localized priority directories: 8/8
  - priority product pages: 6/6
  - technical articles: 24/24
  - localized video pages: 45/45
  - negative 404 checks: 3/3
- Desktop `1440 x 900`: six cards, ItemList detected, no page or card overflow.
- Mobile `390 x 844`: one-column grid, six cards, no page or card overflow.
- Browser console: no errors.

## Release status

Vercel Preview:

- URL: `https://ourfrphome-website-1za30y9nh-zhendgan.vercel.app`
- Deployment: `dpl_EsyDCT8N6EggWgQZF3LuF9fgVDqN`
- State: `READY`
- Vercel build: PASS, including TypeScript and 219 generated routes

The change remains on the recovery branch. It has not been merged to `main`,
deployed to production or submitted to a search engine.
