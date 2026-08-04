# Ukrainian, Vietnamese, and Thai Language Implementation

Date: 2026-08-04

## Scope

Added complete localized route coverage for Ukrainian (`/uk`), Vietnamese (`/vi`), and Thai (`/th`). Each locale publishes the same 19 established commercial routes:

- Home, Products, Contact / RFQ, and Catalog
- Eleven localized product pages, including 3K Carbon Fiber Laminate Sheet, Carbon Fiber Multiaxial NCF Fabric, Carbon Fiber Yarn & Tow, UD Fabric, Woven Fabric, and Filament-Wound Carbon Fiber Tube
- Four localized application pages

English root URLs and existing locale routes remain unchanged. `/en` remains unpublished.

## Localization Coverage

- Header, footer, language switcher, mobile menu, catalog CTA, contact information, RFQ labels, validation messages, image zoom controls, and product-video copy are localized.
- Product metadata, H1s, Quick Answer content, FAQs, product labels, application content, and compliance/end-use-review language are localized.
- Technical identifiers remain unchanged where appropriate: `3K`, `12K`, `T300`, `T700`, `UD`, `CFRP`, `PAN`, `8x8mm`, and `10x10mm`.
- Existing technical documents continue to be explicitly labeled as English documents where applicable.

## SEO Behavior

- New routes have self-referencing canonicals on `https://www.myfrphome.com`.
- Each translated route emits language alternates for all active languages plus `x-default` to the English root route.
- Product, FAQ, breadcrumb, and localized video structured data continue to use the localized URL and language.
- Sitemap count increases from 210 to 267 URLs: 58 English URLs and 19 URLs for each of the 11 localized directories.

## Validation

- TypeScript check: passed.
- `pnpm lint`: passed with three pre-existing warnings in an unrelated ignored output-work script.
- `pnpm build`: passed; 276 static pages generated.
- `pnpm seo:audit http://localhost:3107`: passed. The audit checked all 267 sitemap URLs, 441 internal resources, locale distributions, priority products, structured data, video assets, documents, and negative 404 routes.
- Manual route samples for `/uk`, `/vi`, and `/th`, their 3K plate product pages, and Contact pages returned HTTP 200 with localized title/H1, self canonical, a self hreflang alternate, and `x-default`.
- Negative samples `/en`, `/uk/technical-center`, `/vi/products/not-a-product`, and `/th/applications/not-a-page` return HTTP 404.

## Release Status

This work is ready for preview review. It has not been deployed to production as part of this implementation.
