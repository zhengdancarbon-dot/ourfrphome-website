# Fiber Optic Cable Drum Priority SEO Release

Date: 2026-08-15

## Scope

Add Fiber Optic Cable Drum to the established priority-product SEO and GEO
operating system without creating duplicate SKU URLs or changing any existing
canonical product route.

## Live Discovery Paths

- Product: `/products/fiber-optic-cable-drum`
- English buyer guide: `/technical-center/fiber-optic-cable-drum-rfq-checklist`
- Localized commercial product pages: `es`, `pt-br`, `ru`, `ar`, `fr`, `ko`,
  `pl`, `tr`, `uk`, `vi` and `th`
- Priority modules: Home, Products, Technical Center and `llms.txt`

## Buyer Intent and Measurement

- Primary intent: fiber optic cable drum supplier.
- Supporting intents: internal pay-off fiber drum, fiber optic pay-off spool,
  G.657.A2 fiber optic drum and fiber optic cable deployment drum.
- Reporting: product-level search, RFQ, email, WhatsApp, catalog and document
  event data is included in the priority-product dashboard.
- Technical guide: one English RFQ checklist links contextually to the product
  page. It is not translated until a source-backed localized knowledge-base
  plan is approved.

## Published Evidence Boundaries

- The public RFQ reference retains only ZY-SI 1-15 km, ZY-MI 20-40 km,
  ZY-LI 50-60 km, G.657.A2 and 0.25 mm as source-manual references.
- Dimensions, mass, packing, terminal or equipment interface, selected fiber,
  inspection documents and final order configuration require quotation and
  order review.
- No TDS or PDF is published for this product until an approved FRP HOME
  document is available.
- Civil or industrial end use, destination and compliance review remain
  required. Restricted or sensitive applications are not promoted.

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `pnpm seo:audit http://localhost:3124`
- `node scripts/audit-schema.mjs http://localhost:3124`
- `node scripts/audit-locales.mjs http://localhost:3124`
- `pnpm seo:audit:content`
- `pnpm seo:data:test`

The local audit expects 280 sitemap URLs, 17 registered catalog products,
seven priority product pages and twelve published languages.
