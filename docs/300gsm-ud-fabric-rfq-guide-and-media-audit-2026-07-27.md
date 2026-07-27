# 300gsm UD Fabric RFQ Guide And Media Audit

Date: 2026-07-27

## Objective

Strengthen the priority UD carbon-fiber-fabric cluster using evidence that can be tied to a real product record. The work covers source-media review, a specification-first buyer guide, keyword mapping, internal links, structured data and responsive QA.

## Media Evidence Decision

The available local videos were reviewed as contact sheets and at multiple time points. Several clips show glossy black sheet or roll material, resin-film-like material, prepreg-like material, woven fabric or other equipment. None provides enough visible evidence to identify the material as the documented dry 300gsm UD strengthening fabric.

No video was published for the UD product page. This avoids assigning the wrong material, process, weight, grade or production route to the product. A future video should visibly establish the dry unidirectional reinforcement, roll construction and handling context without relying on filename inference.

## New Buyer Guide

Published in the current branch:

`/technical-center/300gsm-ud-carbon-fiber-fabric-rfq-guide`

The guide is based on the current FRP HOME document `FRPH-TDS-UD300-EN-R01` and retains these evidence boundaries:

- Product code: `FRPH-UD300`.
- Construction: unidirectional carbon fiber fabric with secondary yarn and backing confirmed by order.
- Principal direction: `0° UD`.
- Areal weight: `300 g/m²` nominal, with tolerance confirmed by order.
- Thickness: `0.167 mm` nominal dry-fabric reference, not cured laminate thickness.
- Available width: `100-500 mm`, with selected slit width and tolerance confirmed by order.
- Fiber grade: exact grade and sizing by confirmed order; T300, T700 or alternate grade are review options, not automatic supply claims.
- Mechanical properties: system-dependent and subject to fiber, resin, cure, laminate and test-method confirmation.

The guide keeps structural design, substrate assessment, resin-system approval, installation procedure and final-application responsibility outside the product-data claim.

## Search Intent And Internal Links

- Expanded the six-core keyword map with five source-backed long-tail variants covering 300gsm, unidirectional terminology, the documented width, dry thickness, grade confirmation and RFQ preparation.
- The English and all eight localized UD product pages link to the new guide as an English technical resource.
- The guide links back to the UD product and Structural Strengthening System pages.
- The English and localized Structural Strengthening application cluster includes the new guide.
- The verified 300gsm TDS is downloadable from the guide with the existing `tds_download` analytics event.

No localized article routes were created, and no untranslated content is exposed as a localized page.

## SEO And Structured Data

- Self-referencing canonical: `https://www.myfrphome.com/technical-center/300gsm-ud-carbon-fiber-fabric-rfq-guide`.
- Article Schema: present.
- FAQPage Schema: present.
- Breadcrumb Schema: present.
- TDS link: present and HTTP-valid in the full resource audit.
- Existing English product URLs and all localized commercial URLs remain unchanged.
- Sitemap changes from 207 to 208 URLs: English 55 to 56; each localized language remains at 19.

## Verification

- `pnpm lint`: passed with zero errors. Three pre-existing warnings remain under `.codex-output-work/morocco-promotion-2026/`.
- `pnpm build`: passed and generated 217 pages.
- Full SEO audit: passed.
- Sitemap URLs: 208.
- Pages checked: 208.
- Internal resources checked: 349.
- Priority product pages checked: 6.
- Technical articles checked: 22.
- Localized video pages checked: 45.
- Negative 404 checks: 3.
- Nine UD product routes: new guide link and 300gsm TDS link present.
- Desktop 1440 x 900: no page overflow; both guide tables fit their desktop containers.
- Mobile 390 x 844: no page overflow; tables scroll only inside their table containers; H1 and TDS card fit the viewport.
- Arabic mobile: `lang="ar"`, `dir="rtl"`, guide link present and no page overflow.

## Release Status

Local implementation and QA are complete. Production is unchanged.

- Vercel target: `preview`.
- Preview status: `Ready`.
- Preview URL: `https://ourfrphome-website-nxwws0nrz-zhendgan.vercel.app`.
- Deployment ID: `dpl_Em5uCBGnJ4sJfL2Y8R2kracSScKA`.
- Vercel build: completed successfully after restoring the prior build cache.
- Production deployment: not performed.
