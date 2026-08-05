# SEO Growth Phase A: Technical Release and Measurement Foundation

Status: preview-only implementation. Production deployment is not part of this phase.

## Scope completed

- Server-rendered document roots now provide the correct `lang` and `dir` for English, Spanish, Brazilian Portuguese, Russian, Arabic, French, Korean, Polish, Turkish, Ukrainian, Vietnamese and Thai. Arabic is rendered with `dir="rtl"` before JavaScript hydration.
- Ukrainian, Vietnamese and Thai remain in the public localized set: home, Products, Contact, Catalog, 11 approved product pages and four approved application pages. English URLs remain at the root and `/en` remains a 404.
- `lib/seo/product-registry.ts` registers all 16 public products with product family, canonical route, approved locales, real document links, conversion goal, market intent and review date. Candidate specifications are draft-only and are not routed, sitemapped or indexed.
- Conversion tracking has one event taxonomy for RFQ, contact, document, language, video and scroll actions. It preserves allowed UTM, Google, Microsoft and Yandex click identifiers across same-tab navigation and removes PII before sending GA4 or Yandex events.
- Search Console, GA4 and Yandex reporting now accept CSV imports. A secure Google API importer is available only through environment variables or an external secret file. No credentials are committed.

## Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm analytics:audit
pnpm seo:audit:content
pnpm seo:audit:locales
pnpm seo:audit:schema
pnpm seo:audit:local
pnpm seo:data:import
pnpm seo:report
```

`seo:audit:production` is intentionally available for a post-preview or post-production verification only. It must be run with an explicit `EXPECTED_SITEMAP_URLS` value matching the deployed release.

## Current local evidence

- Build: passed; 276 static pages generated.
- Locale crawl: passed; 267 sitemap URLs with English 58 and 11 localized sets of 19 URLs each.
- Schema audit: passed; 137 product pages checked.
- Full local SEO audit: passed; 441 linked internal resources, PDFs and videos were checked.
- Attribution audit: passed; TDS, email, WhatsApp and catalog actions preserve permitted attribution and exclude unrelated query parameters.
- Data report: generated with no imported GSC, GA4, Yandex or sales rows. It records data as unavailable and produces no metadata-change recommendation.

## Review and rollback

1. Deploy this branch as a Vercel Preview, never Production.
2. Review English, Ukrainian, Vietnamese and Thai desktop/mobile pages; separately verify Arabic direction, header menu, language switcher, RFQ start/submit and TDS download.
3. Confirm the preview sitemap contains 267 URLs, `/en` is a 404, and `internal-sales-link-guide` is noindex and absent from the sitemap.
4. Roll back by redeploying the previously approved Production deployment or reverting the Phase A commits. No data migration, API contract or production environment variable change is required by this phase.

## Evidence boundary

This phase does not publish new specification URLs, write product performance claims, add certifications, offers, ratings, customer cases or sensitive end-use claims. Candidate pages stay blocked until matching approved product documentation is supplied.
