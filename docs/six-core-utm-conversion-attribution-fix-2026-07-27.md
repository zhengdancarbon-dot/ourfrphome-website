# FRP HOME Conversion Attribution Fix

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: not deployed

## Scope

This audit covered attribution for the six-core SEO/GEO campaign conversion events:

- `tds_download`
- `catalog_download`
- `email_click`
- `whatsapp_click`

The public RFQ form, `/api/inquiry`, page design, metadata, URL structure and product content were not changed.

## Confirmed Gap

RFQ submissions already preserved approved UTM parameters and Google, Bing and Yandex click identifiers through `frp-home-rfq-attribution` session storage. The global click tracker previously sent only the current pathname for TDS, catalog, email and WhatsApp actions. A visitor could therefore arrive through an attributed sales or search link, navigate to another page and convert without the original campaign context appearing on those click events.

## Fix

The global conversion tracker now:

1. Reads only approved attribution parameters: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `msclkid` and `yclid`.
2. Trims every value and limits it to 120 characters.
3. Reuses the existing `frp-home-rfq-attribution` session key so RFQ and click events follow the same same-tab attribution model.
4. Adds the approved parameters to each tracked event and to `source_page`.
5. Preserves the existing TDS fields: `locale`, `link_url`, `product_slug` and `document_title`.
6. Excludes unapproved query parameters.

## Automated Verification

A repeatable source-level runtime audit was added as:

`pnpm analytics:audit`

The script executes the actual inline conversion tracker from `app/layout.tsx` in an isolated browser-like context and verifies:

- Spanish TDS locale and document metadata.
- UTM campaign attribution.
- Yandex `yclid` attribution.
- support for Google `gclid` and Bing `msclkid` in the approved parameter contract.
- 120-character value limits.
- exclusion of unrelated query parameters.
- same-tab attribution after navigation to another localized page.
- email, WhatsApp and catalog event attribution.

Result: `PASS conversion attribution audit`.

## Release Checks

- `pnpm analytics:audit`: passed.
- `pnpm lint`: passed with zero errors; three pre-existing warnings remain in excluded `.codex-output-work` material.
- `pnpm build`: passed; 216 pages generated.
- `pnpm seo:audit http://127.0.0.1:3108`: passed; 207 sitemap URLs, 207 pages, 348 internal resources, six priority pages, 27 localized video pages and three expected negative 404 checks.

## Release Decision

The fix is ready for source control and Preview review. No production deployment, sitemap submission, indexing request or analytics-account setting was performed in this change.
