# Six-Core Preview Browser QA

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Commit under review: `c6a617c`

Vercel Preview: `https://ourfrphome-website-5k78dxq37-zhendgan.vercel.app`

Deployment: `dpl_2S8EvEVJsg73ZSjieqYRtb6H67jv` (`READY`, 219 routes)

## Review method

The Vercel deployment completed successfully, but direct `vercel.app` page
access still times out from the current automation network. Interactive browser
QA therefore used the production build from the exact same commit at
`http://127.0.0.1:3108`. This does not replace a final production smoke test.

## Desktop Products directory

- Route: `/products`
- Viewport: 1440 x 900
- Title and H1 rendered correctly.
- The hero and the start of the six-product priority section were visible in a
  normal browser screenshot.
- The six stable priority routes were present.
- The English `ItemList` contained six ordered canonical product URLs.
- Page width matched the viewport; no horizontal overflow occurred.
- No browser console error or warning was recorded.

## Arabic mobile Products directory

- Route: `/ar/products`
- Viewport: 390 x 844
- Server-rendered semantics: `lang="ar"`, `dir="rtl"`.
- The localized H1, priority heading, six product cards and CTA copy rendered
  in Arabic.
- The localized `ItemList` used `inLanguage: ar`, six Arabic names and six
  `/ar/products/...` canonical URLs.
- The mobile menu opened with `aria-expanded="true"` and exposed the localized
  product navigation.
- The language menu opened and contained EN, ES, PT-BR, RU, AR, FR, KO, PL and
  TR links for the current Products route.
- Page width matched the viewport before and after both menus opened.
- No browser console error or warning was recorded.

## Priority product media and documents

Route: `/products/carbon-fiber-multiaxial-ncf-fabric`

- The canonical points to the unchanged production URL.
- The real directional-layer production video loaded with controls and the
  expected source-derived poster.
- Three scoped documents rendered with `tds_download`, product slug and
  document-title analytics attributes:
  - 300gsm Biaxial Carbon Fiber Fabric TDS
  - 600gsm +45/-45 Biaxial Carbon NCF TDS
  - 400gsm 0/+45/90/-45 Quadraxial Carbon NCF Supply Reference
- The image-enlarge button opened a full-viewport dialog with the correct alt
  text and a loaded image, locked background scrolling, and closed cleanly.
- The mobile layout had no horizontal overflow or console errors.

## Spanish RFQ

Route tested:

`/es/contact?utm_source=preview_qa&utm_medium=browser&utm_campaign=six_core_qa`

- The Spanish title, H1, product choices, field labels, specification prompts,
  file input and submit CTA rendered correctly.
- The form contained `locale=es`.
- The source-page field preserved the route and approved UTM parameters.
- Email, phone and WhatsApp links use the current production contact details.
- The page did not expose `Loading RFQ form...` after rendering.
- No horizontal overflow or console errors occurred.

No real RFQ was submitted during this read-only QA because that would transmit
test contact data and send an external email. A controlled delivery test remains
an action-time approval item before production release.

## Result

PASS for the tested browser surfaces. No website code change was required.
Production remains unchanged. The remaining release gates are explicit merge /
production approval, production smoke testing and one approved controlled RFQ
delivery check.
