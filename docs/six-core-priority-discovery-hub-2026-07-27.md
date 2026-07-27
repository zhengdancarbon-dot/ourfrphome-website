# Six-Core Priority Discovery Hub

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production domain: `https://www.myfrphome.com`

## Objective

Concentrate internal discovery around the six priority commercial products
without creating near-duplicate keyword pages, changing existing URLs or
adding unsupported product claims.

## Implementation

- Added one shared priority-discovery map in `lib/priority-discovery.ts`.
- Added six buyer pathways near the top of `/technical-center`:
  - Carbon Fiber Multiaxial NCF Fabric
  - 3K Carbon Fiber Laminate Sheet
  - Carbon Fiber Yarn & Tow
  - Strengthening UD Carbon Fiber Fabric
  - Pultruded CFRP Strengthening Plate / System
  - 3K Woven Carbon Fiber Fabric
- Each pathway links one commercial product page and three existing buyer
  guides. No new public URL, slug or metadata experiment was introduced.
- Added the same product-and-guide hierarchy to `/llms.txt` so AI and search
  crawlers encounter the priority commercial routes before the full article
  inventory.
- Corrected duplicate React keys in the central TDS library where one verified
  PDF is intentionally associated with more than one commercial product.
- Extended the production SEO audit to require all 24 priority discovery links
  in both `/technical-center` and `/llms.txt`.

## Evidence boundaries

- The pathway copy only summarizes existing, source-backed product and RFQ
  material.
- 3K laminate remains linked to a specification and RFQ guide, not represented
  as a formal product TDS.
- Dry-fabric gsm and nominal dry thickness are not represented as cured-system
  strength or project design values.
- Supplier-origin and legacy source references remain identified by their
  existing document boundaries.
- No certification, authorization, annual capacity, customer case, guaranteed
  stock, price, rating or sensitive end-use claim was added.

## Verification

- `pnpm lint`: PASS with zero project errors. Three existing warnings remain in
  the unrelated ignored Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - English URLs: 58
  - localized URLs: 19 for each of ES, PT-BR, RU, AR, FR, KO, PL and TR
  - internal resources: 351
  - priority product pages: 6
  - technical articles: 24
  - localized video pages: 45
  - priority discovery links: 24
  - negative 404 checks: 3
- Desktop `1440 x 900`: six cards, four links per card, no card or page-level
  horizontal overflow.
- Mobile `390 x 844`: one-column layout, six cards, four links per card and no
  horizontal overflow.
- Browser console: no errors.

## Release status

The implementation is committed only on the recovery branch. It has not been
merged to `main`, deployed to production or submitted to a search engine.
