# 1.2 mm Pultruded CFRP Plate RFQ Guide

Date: 2026-07-27

## Objective

Strengthen the pultruded CFRP plate search cluster with a procurement guide tied to a real FRP HOME document while preserving the separation between civil strengthening plate and 3K cosmetic or industrial laminate sheet.

## Source Review

The guide uses the published file:

`/downloads/tds/FRP-HOME-1.2mm-Pultruded-CFRP-Strengthening-Plate-TDS.pdf`

The two-page PDF was reviewed as extracted text and rendered pages. It identifies:

- Document ID `FRPH-TDS-CFRPPL12-EN-R01`.
- Product code `FRPH-CFRP-PLATE-1.2`.
- Archived source model `ZCP1.2`.
- Pultruded CFRP strengthening laminate.
- 1.2 mm nominal thickness.
- Typical archived source values of 2620 MPa tensile strength, 165 GPa elastic modulus, 1.7% elongation, >68% fiber volume and 1.6 g/cm3 density.

The source does not state test methods for those mechanical values. The guide therefore identifies them as typical archived source-model references, not batch values, certificates or project design allowables.

## New Buyer Guide

Current branch route:

`/technical-center/1-2-mm-pultruded-cfrp-strengthening-plate-rfq-guide`

The guide covers:

- Product and source-model identity.
- Dimensions, tolerances, edge condition and packing.
- Bonding-surface and structural-epoxy confirmation.
- Required TDS, COA, traceability and test fields.
- Structure, substrate, project location and final application.
- Qualified design, substrate acceptance and installation responsibility.

It explicitly distinguishes pultruded strengthening plate from a 3K twill laminate sheet.

## Search Intent And Internal Links

- Updated the six-core keyword map for `pultruded CFRP plate`, `1.2 mm CFRP strengthening plate`, compact `1.2mm` spelling, `ZCP1.2 CFRP plate`, product RFQ and dimension-based RFQ intent.
- The guide recommends only the existing Structural Strengthening System commercial route.
- English and all eight localized Structural Strengthening System pages expose the guide as an English resource through the existing buyer-guide component.
- English and localized Structural Strengthening application pages include the guide in their English technical-resource cluster.
- No localized article URL was created and no English article is exposed behind a localized canonical.

## SEO And Evidence Boundaries

- The existing product URL and metadata remain unchanged.
- The guide uses Article, FAQPage and Breadcrumb structured data through the existing Technical Center template.
- The verified TDS is downloadable through the existing `tds_download` analytics path.
- Product Schema receives no price, stock, rating or unsupported certification data.
- Project design, substrate acceptance, anchorage, adhesive compatibility, installation and code compliance remain outside the product-data claim.

## Verification

- `pnpm lint`: passed with zero errors. Three unrelated pre-existing warnings remain under `.codex-output-work/morocco-promotion-2026/`.
- `pnpm build`: passed and generated 218 pages.
- Full SEO audit: passed.
- Sitemap URLs: 209.
- Locale distribution: English 57; ES, PT-BR, RU, AR, FR, KO, PL and TR each 19.
- Pages checked: 209.
- Internal resources checked: 350.
- Priority product pages checked: 6.
- Technical articles checked: 23.
- Localized video pages checked: 45.
- Negative 404 checks: 3.
- Article page: Product code, source-method boundary, TDS link, product link and Article / FAQPage / Breadcrumb Schema present.
- Nine Structural Strengthening System product routes: guide link and 1.2 mm TDS link present.
- Nine Structural Strengthening application routes: guide link present.
- Desktop 1440 x 900: no page overflow; both tables fit their containers.
- Mobile 390 x 844: no page overflow; tables scroll only inside their table containers; H1 and TDS download card fit the viewport.
- Arabic mobile: `lang="ar"`, `dir="rtl"`, guide and TDS links present and no page overflow.
- Browser console: no errors recorded during the responsive checks.

## Release Status

Local implementation and QA are complete. Production is unchanged. A Vercel Preview is required before any production release.
