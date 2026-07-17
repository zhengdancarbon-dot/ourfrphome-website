# FRP HOME Dual-Core SEO / GEO 90-Day Master Plan

Date: 2026-07-17

Production domain: https://www.myfrphome.com

Execution branch: `codex/dual-core-seo-geo-90d`

Production status: preview approval required before deployment

## Authority

This is the only active SEO / GEO execution plan. Earlier 30-day plans are historical references and must not be used as parallel task lists.

Resource allocation:

- Carbon Fiber Multiaxial NCF Fabric: 55%
- 3K Carbon Fiber Laminate Sheet: 45%
- English: technical authority and procurement content
- ES, PT-BR, RU, AR, FR, KO, PL and TR: localized commercial landing and RFQ conversion

No ranking, traffic or inquiry volume is guaranteed.

## Baseline And Target

| Metric | Current baseline | Planned result after approved releases |
| --- | ---: | ---: |
| Sitemap URLs | 181 | 203 |
| English URLs | 45 | 51 |
| URLs per localized locale | 17 | 19 |
| New localized product URLs | 0 | 16 |
| New English guides | 0 | 6 |
| Published NCF TDS | 2 | 2 retained |
| 3K laminate document | No matching TDS | 1 honest Product Specification & RFQ Guide |

The reviewed local 1.2 mm carbon plate file belongs to the pultruded structural-strengthening product family. It must not be relabeled as a 3K laminate-sheet TDS. A formal 3K TDS remains blocked until matching source data are provided.

## Commercial Cluster 1: Multiaxial NCF

Primary page: `/products/carbon-fiber-multiaxial-ncf-fabric`

Primary intents:

- carbon fiber multiaxial fabric supplier
- biaxial carbon fiber fabric
- 300gsm biaxial carbon fabric
- 600gsm biaxial carbon fabric
- +45°/-45° carbon NCF
- 0°/90° carbon NCF
- triaxial and quadriaxial carbon fabric
- carbon NCF for vacuum infusion
- custom width carbon multiaxial fabric

Procurement content must explain UD, biaxial, triaxial and quadriaxial architectures; 0°, 90°, +45° and -45° directions; width, roll length, stitch, resin process, quantity and end-use requirements. Generic ranges are not order guarantees.

Verified documents:

- 300gsm Biaxial Carbon Fiber Fabric TDS
- 600gsm +45°/-45° Biaxial Carbon NCF TDS

## Commercial Cluster 2: 3K Laminate Sheet

Primary page: `/products/3k-carbon-fiber-laminate-sheet`

Primary intents:

- 3K carbon fiber plate
- 3K carbon fiber sheet supplier
- twill carbon fiber laminate sheet
- matte carbon fiber plate
- glossy carbon fiber sheet
- carbon fiber plate CNC cutting
- custom thickness carbon fiber plate
- carbon fiber panel manufacturer
- 3K carbon plate for industrial parts

Procurement content must explain visible 3K twill surfaces, matte/glossy/sanded/peel-ply finishes, dimensions, inner layup, flatness, tolerance, protection, packing and CNC drawings. It must remain distinct from pultruded CFRP strengthening plate.

## Published Content Set

1. `/technical-center/300gsm-vs-600gsm-biaxial-carbon-ncf`
2. `/technical-center/carbon-fiber-multiaxial-ncf-rfq-checklist`
3. `/technical-center/biaxial-vs-triaxial-vs-quadriaxial-carbon-ncf`
4. `/technical-center/carbon-fiber-plate-thickness-selection-guide`
5. `/technical-center/3k-carbon-fiber-plate-cnc-rfq-guide`
6. `/technical-center/matte-vs-glossy-3k-carbon-fiber-sheet`

Each article must retain Quick Answer, comparison logic, RFQ information, FAQ, Article/FAQ/Breadcrumb schema, review date, relevant product links and a clear distinction between reference information and order-controlled values.

## Day 1-30

- Establish separate GSC, Bing and GA4 baselines for NCF and 3K plate.
- Crawl all production sitemap URLs for status, title, description, H1, canonical, hreflang, schema, images and internal links.
- Confirm `rfq_submit`, `tds_download`, `catalog_download`, `email_click` and `whatsapp_click` carry locale; TDS events also carry product and document context.
- Publish only real `lastModified` values and omit unknown dates.
- Give both product pages priority contextual links from Home, Products and Technical Center.
- Retain the two verified NCF TDS files.
- Publish the 3K Product Specification & RFQ Guide without presenting it as a TDS.
- Publish the 300gsm vs 600gsm guide and the NCF RFQ checklist.

## Day 31-60

- Keep the 16 localized core-product URLs live and fully translated.
- Verify self-referencing canonical, nine-language hreflang and `x-default` for every product group.
- Confirm Arabic RTL and no English fallback.
- Label every localized download as an English document.
- Publish the remaining four English guides.
- Prepare 30 manually reviewed outreach opportunities using `utm_campaign=ncf_2026` or `utm_campaign=3k_plate_2026`.
- Do not buy links, mass-submit directories or send unrelated outreach.

## Day 61-90

- Strengthen the existing vacuum-infusion guide with NCF selection and TDS links.
- Update the CFRP plate-vs-fabric guide to distinguish 3K laminate from pultruded strengthening plate.
- Adjust title/meta only after 14 days indexed or 50 impressions.
- Audit conversion when a page reaches 20 valid organic visits without RFQ, document or contact action.
- Complete a second manually reviewed set of 30 outreach opportunities.
- Test AI visibility in EN, ES, PT-BR, RU, FR and TR and record citations, cited URLs and factual errors.

## Measurement Contract

Report NCF and 3K plate separately:

- indexed pages and exclusion reasons
- branded and non-branded impressions, clicks, CTR and average position
- top queries and landing pages
- TDS/SPEC downloads, RFQs, WhatsApp, email and catalog events
- country, locale, source URL, UTM, inquiry status and owner
- verified industry mentions and backlinks
- AI answer appearance, citation URL and factual accuracy

GA4 `tds_download` parameters:

- `locale`
- `link_url`
- `product_slug`
- `document_title`

## Technical Rules

- Preserve English URLs, product slugs and `/api/inquiry`.
- Use IndexNow only for genuinely new or updated URLs and only when `INDEXNOW_KEY` is configured.
- Product schema must not fabricate price, stock, rating, review or Offer data.
- Keep 3K, 300gsm, 600gsm, 0°/90°, +45°/-45°, NCF and CFRP unchanged.
- Do not publish unsupported certifications, authorization, annual capacity, customer cases, test conclusions or sensitive-use wording.
- Final values, tolerances, compatibility and batch documents remain subject to quotation and order confirmation.

## Weekly Decision Rules

- Not indexed after seven days: perform one live URL test and one indexing request; do not submit repeatedly.
- Indexed for 14 days or 50 impressions: review query-to-title alignment before any metadata edit.
- 20 valid organic visits without action: inspect CTA, document visibility and RFQ clarity.
- New or updated content: verify canonical, hreflang, schema, mobile layout, internal links and analytics before submission.
- Every qualified inquiry: record date, country, locale, source URL, UTM, product, status and owner.

## Release Gates

- `pnpm lint` and `pnpm build` pass.
- Sitemap contains exactly 203 planned URLs: 51 English and 19 in each localized locale.
- All 203 URLs return 200 and pass canonical/hreflang checks.
- `/en/` and nonexistent localized routes remain 404.
- NCF and 3K product pages pass desktop and mobile visual checks in all nine languages; Arabic passes RTL checks.
- Preview approval is required before main merge or production deployment.
