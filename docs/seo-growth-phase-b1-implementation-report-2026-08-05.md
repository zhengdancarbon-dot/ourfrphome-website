# SEO Growth Phase B-1 Implementation Report

Status: implemented locally and ready for Preview review. This change set has not been merged to main or deployed to production.

## Scope delivered

- Kept all existing public routes and slugs unchanged.
- Strengthened six existing commercial pages: Woven Carbon Fiber Fabric, Multiaxial NCF, UD Carbon Fiber Fabric, 3K Carbon Fiber Laminate Sheet, Carbon Fiber Yarn & Tow, and Structural Strengthening System.
- Replaced generic related-product ordering with deliberate links between the six core material routes. These links distinguish adjacent buyer paths such as 3K laminate sheet versus pultruded structural plate.
- Refined English selection guidance for the six pages so its published-document scope and order-review boundary are explicit.
- Corrected English metadata to lead with documented 3K 200gsm twill woven fabric and 12K tow sourcing rather than presenting unverified constructions as equal public specifications.
- Kept the 3K sheet file as an English `SPEC / RFQ Guide`; it is not labeled as a TDS.
- Added a verified `productSlug` to product-page RFQ client submissions and no-JavaScript fallbacks. The API retains its public response shape and inquiry emails now include `Product Page` in addition to product type, locale and source page.
- Added `document_type` to document download analytics metadata. No personal data is added to analytics.
- Added Spanish and Brazilian Portuguese translation coverage for the updated NCF document-scope note.

## Evidence boundaries retained

| Product | Public evidence used | Boundary retained |
|---|---|---|
| Woven fabric | 3K 200gsm twill TDS | Other weaves, tow sizes, width and packing remain order review |
| Multiaxial NCF | 300gsm biaxial and 600gsm `+45°/-45°` TDS | Other architecture/layer schedules require matching data |
| UD fabric | 300gsm TDS; 200gsm supply reference | No fixed resin consumption or installation recommendation |
| 3K laminate sheet | English SPEC/RFQ guide | No generic tolerance, layup or mechanical-property claim |
| Yarn & Tow | 12K supply reference | 3K/24K/50K availability, grade, sizing and package by selected-source review |
| Strengthening system | 300gsm UD, 200gsm supply reference, 1.2mm pultruded plate TDS | No project design, installation or performance approval claim |

## Verification

- `pnpm lint`: passed with 0 errors. Three pre-existing warnings remain in untracked `.codex-output-work/morocco-promotion-2026/build_decks_and_rfq.mjs`; this implementation does not touch that file.
- `pnpm typecheck`: passed.
- `pnpm build`: passed; 276 static pages generated.
- `pnpm seo:audit:content`: passed (16 registry products, 13 candidate specifications).
- `pnpm analytics:audit`: passed.
- Local SEO audit: passed with 267 sitemap URLs, 441 internal resources, 6 priority product pages, 72 priority product resources, 24 technical articles and 9 priority documents checked.
- Locale audit: passed (12 locale roots and negative 404 checks).
- Schema audit: passed (137 product pages checked).
- Browser checks at 390px: English Woven, English 3K Sheet, Arabic 3K Sheet and PT-BR NCF had no horizontal overflow; product-page RFQ forms carried the expected product slug; Arabic kept `lang="ar"` and `dir="rtl"`.

## Release constraints

1. Preview review must cover product RFQ submission, document download, related-product links and desktop/mobile layouts.
2. Do not merge to main or deploy production until the Preview is approved.
3. Google Ads remains a plan only. No campaign, spend, tracking change or account action is included.
4. Do not adjust titles/descriptions again without the 14-day/50-impression evidence rule, except for factual/compliance corrections.
