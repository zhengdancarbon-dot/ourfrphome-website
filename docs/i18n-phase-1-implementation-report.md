# I18n Phase 1 Implementation Report

Date: 2026-07-03

Production domain: https://www.myfrphome.com

Status: implemented on branch `codex/i18n-phase-1-foundation`; not deployed to production.

## Architecture Plan

- Keep English as the default language on existing root URLs.
- Add localized subdirectory routes for Spanish and Brazilian Portuguese only:
  - Spanish: `/es/`
  - Brazilian Portuguese: `/pt-br/`
- Keep current English slugs unchanged for localized URLs to reduce routing and SEO risk.
- Do not redirect users based on browser language.
- Keep Russian `/ru/` and Turkish `/tr/` as future locales only; they are not active routes in Phase 1.
- Keep RFQ submission on the existing `/api/inquiry` backend route and pass the selected locale in form data.

## File Structure Changes

- `lib/i18n/config.ts`: locale constants, labels, hreflang mapping and path helpers.
- `lib/i18n/phase-one-paths.ts`: Phase 1 route allowlist and localized path helper.
- `lib/i18n/phase-one.ts`: Phase 1 path aggregation for sitemap and route checks.
- `lib/i18n/ui-copy.ts`: translated UI, navigation, footer and RFQ labels.
- `lib/i18n/page-content.ts`: translated Phase 1 page, product and application content.
- `components/language-switcher.tsx`: header/footer language switcher.
- `components/localized-pages.tsx`: localized page templates for Phase 1 routes.
- `app/[locale]/...`: localized route entries for `/es` and `/pt-br`.
- `lib/seo.ts`: locale-aware metadata, canonical, OpenGraph and hreflang.
- `app/sitemap.ts`: multilingual sitemap entries for Phase 1 pages.
- `components/inquiry-form.tsx` and `components/rfq-fallback-form.tsx`: locale-aware RFQ labels and hidden locale field.
- `app/api/inquiry/route.ts`: inquiry email now includes submitted locale.

## Locale Data Structure

Active locales:

- `en`: default English root routes.
- `es`: Spanish localized routes.
- `pt-br`: Brazilian Portuguese localized routes.

Future locales:

- `ru`: reserved for Russian.
- `tr`: reserved for Turkish.

The Phase 1 allowlist controls which URLs receive localized routes. Links to non-localized pages intentionally fall back to the English root URL to avoid hidden 404 pages.

## Hreflang Implementation

For Phase 1 localized pages:

- English alternate points to the root English URL.
- Spanish alternate points to `/es/...`.
- Brazilian Portuguese alternate points to `/pt-br/...`.
- `x-default` points to the English default URL.
- Each localized page has a self-referencing canonical URL.
- OpenGraph URLs use the page's localized canonical URL.

## Sitemap Implementation

The sitemap keeps all existing English URLs and adds localized entries only for Phase 1 pages. Future `/ru/` and `/tr/` URLs are excluded until those languages are implemented.

Expected local result:

- Total sitemap `<loc>` entries: `77`
- Includes: `https://www.myfrphome.com/es/products/carbon-fiber-woven-fabric`
- Includes: `https://www.myfrphome.com/pt-br/contact`
- Excludes: `https://www.myfrphome.com/ru/`
- Excludes: `https://www.myfrphome.com/tr/`

## Phase 1 Localized Pages

Static pages:

- Home
- Products
- Applications
- Contact / RFQ
- Catalog

Product pages:

- Carbon Fiber Woven Fabric
- Spread Tow Carbon Fiber Fabric
- UD Carbon Fiber Fabric
- Carbon Fiber Yarn & Tow
- Prepreg Carbon Fiber Materials
- Chopped Carbon Fiber
- Milled Carbon Fiber Powder
- Carbon Fiber Structural Strengthening System

Application pages:

- Automotive Carbon Fiber Parts
- Civil UAV / Drone Components
- Plastic & Resin Reinforcement
- Structural Strengthening

## Structured Data

- Localized product pages include Product schema.
- Localized product and application pages include BreadcrumbList schema.
- Localized product and application FAQ sections include FAQPage schema.
- Localized contact page includes ContactPage schema.
- Global Organization and WebSite schema stay on the production domain.

## RFQ Behavior

- The RFQ form still submits to `/api/inquiry`.
- The submitted payload includes `locale`.
- The inquiry email includes the submitted locale.
- Compliance and end-use review language remains active in all localized RFQ surfaces.

## QA Checklist

- English root URLs remain stable.
- `/es` and `/pt-br` routes return 200 for Phase 1 pages.
- Future `/ru` and `/tr` routes are not active.
- Localized pages have self-referencing canonical URLs.
- Localized pages have hreflang alternates and `x-default`.
- Sitemap includes multilingual Phase 1 URLs only.
- Product pages include Product, FAQPage and BreadcrumbList schema.
- Contact and RFQ forms include localized labels and hidden locale field.
- Non-Phase 1 links fall back to English URLs instead of generating localized 404s.
- Desktop and mobile smoke checks pass before preview deployment.

## Verification Results

- `pnpm lint`: passed.
- `pnpm build`: passed.
- Server smoke test: passed for `/es`, `/pt-br/products/carbon-fiber-woven-fabric`, `/es/contact`, `/sitemap.xml` and `/ru`.
- Browser DOM smoke test: passed for `documentElement.lang`, canonical, hreflang, structured data and non-Phase fallback links.
- Mobile smoke test: passed at 390px viewport with no horizontal overflow and no console errors.

## Remaining Recommendations

- Review Spanish and Brazilian Portuguese copy with a native speaker before production deployment.
- Add Russian and Turkish only after Phase 1 preview is approved.
- Do not add new localized slugs until redirect and sitemap strategy is reviewed.
- Do not add certifications, authorization, annual capacity, test reports or customer cases unless real documents are provided.
