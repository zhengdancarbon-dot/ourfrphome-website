# SEO Growth Phase B: Product Keyword Occupation Plan

Status: planning and review only. No new page, metadata rewrite, production deployment, paid campaign, automatic backlink action or specification URL is authorized by this document.

## P1 release gate

The code repair for server-rendered `lang`/`dir` and the Ukrainian, Vietnamese and Thai routes is complete in Preview. Local static checks passed for all 267 planned sitemap URLs. Production remains at 210 URLs and must stay unchanged until these gates are complete:

1. Review the Vercel Preview at desktop and mobile widths, including Arabic RTL.
2. Confirm RFQ flow, language switcher, PDF download and mobile menu in a normal browser.
3. Confirm the current production deployment has not changed, then approve merge/deployment.
4. After deployment, re-run the production audit with `EXPECTED_SITEMAP_URLS=267` and submit the updated sitemap to Google, Bing and Yandex.

## Ranking objective

Seek qualified procurement queries, not broad head terms. A target must have a distinct buyer question, a clear canonical product page, real technical evidence and a measurable RFQ/document/contact action. Page-one rankings cannot be guaranteed; the operating goal is better indexed coverage, non-brand impressions, document use and qualified enquiries.

## Product SEO Matrix

The editable matrix is [product-seo-matrix-phase-b-2026-08-05.csv](/Users/dylan/Documents/ZD-Carbon-Website/docs/product-seo-matrix-phase-b-2026-08-05.csv). It covers all 16 public product families, their existing canonical URLs, procurement intent, markets, approved locales, real documents and evidence gates.

## First 20 landing-page work items

These are twenty unique intents, not permission to create twenty duplicate product URLs.

| # | Buyer-intent topic | Canonical route | Action | Publication gate |
|---:|---|---|---|---|
| 1 | 3K 200gsm twill woven fabric | `/products/carbon-fiber-woven-fabric` | Strengthen existing page | Existing TDS only |
| 2 | 3K plain woven fabric | Candidate | Hold | Matching approved product evidence |
| 3 | 300gsm UD fabric | `/products/carbon-fiber-ud-fabric` | Strengthen existing page | Existing 300gsm TDS |
| 4 | 600gsm +45/-45 biaxial NCF | `/products/carbon-fiber-multiaxial-ncf-fabric` | Strengthen existing page | Existing 600gsm TDS |
| 5 | 300gsm NCF constructions | `/products/carbon-fiber-multiaxial-ncf-fabric` | Strengthen existing page | Existing TDS scope |
| 6 | 12K carbon fiber tow | `/products/carbon-fiber-yarn-and-tow` | Strengthen existing page | Published supply reference |
| 7 | 24K carbon fiber tow | Candidate | Hold | Grade, sizing and packing evidence |
| 8 | 50K carbon fiber tow | Candidate | Hold | Grade, sizing and packing evidence |
| 9 | Carbon fiber prepreg | `/products/prepreg-carbon-fiber-materials` | Strengthen existing page | WP-L5100 document boundary |
| 10 | Pultruded CFRP strengthening plate | `/products/structural-strengthening-system` | Strengthen existing page | Existing 1.2mm TDS |
| 11 | 3K carbon fiber laminate sheet | `/products/3k-carbon-fiber-laminate-sheet` | Strengthen existing page | Existing RFQ specification guide |
| 12 | 3K plate CNC cutting | `/products/3k-carbon-fiber-laminate-sheet` | Strengthen existing page | Drawing/order review only |
| 13 | Filament-wound carbon fiber tube | `/products/filament-wound-carbon-fiber-tube` | Strengthen existing page | No unverified load claims |
| 14 | 3K twill carbon fiber tube | Candidate | Hold | Construction/dimension evidence |
| 15 | Pultruded CFRP profile | Candidate | Hold | Approved profile scope |
| 16 | Spread tow carbon fabric | `/products/spread-tow-carbon-fiber-fabric` | Strengthen existing page | Construction review only |
| 17 | Chopped carbon fiber for resin | `/products/chopped-carbon-fiber` | Strengthen existing page | No specific length claims |
| 18 | 12mm chopped carbon fiber | Candidate | Hold | Fiber-length and sizing evidence |
| 19 | 300-mesh milled carbon fiber powder | `/products/milled-carbon-fiber-powder` | Strengthen existing page | Existing 300-mesh TDS |
| 20 | Custom CNC CFRP parts | `/products/custom-carbon-fiber-products` | Strengthen existing page | Drawing-based RFQ only |

## Country and language strategy

| Market | Existing localized product entry | Product priorities | Search focus | Guardrail |
|---|---|---|---|---|
| Russia | `/ru/` | 3K plate, NCF, tow | supplier, 3K sheet, 300/600gsm biaxial | Use Russian wording only after observed query evidence |
| Turkey | `/tr/` | 3K woven, UD, NCF, tow | supplier, fabric, reinforcement | Keep technical codes untranslated |
| Poland | `/pl/` | 3K plate, UD, NCF | sheet/plate, CNC, strengthening material | Do not use unverified tolerance claims |
| Vietnam | `/vi/` after P1 release | 3K plate, NCF, tow | supplier, drawing RFQ, material confirmation | Do not campaign before P1 is live |
| Thailand | `/th/` after P1 release | 3K plate, NCF | supplier, custom size, RFQ | Do not campaign before P1 is live |
| UAE | `/ar/` | 3K plate, UD, strengthening system | material supply and RFQ | Arabic RTL review required |
| Brazil | `/pt-br/` | 3K plate, UD, prepreg | supplier, composite material, RFQ | Keep Brazilian Portuguese separate from Spanish |

## Content briefs

| Brief | Purpose | Evidence boundary | Internal links | Status |
|---|---|---|---|---|
| 3K 200gsm Twill Fabric Selection and RFQ | Answer weave, areal weight, width, roll and quantity questions | Use published 3K 200gsm TDS only | Woven product, Catalog, Contact | Existing guide/page refresh candidate |
| 300gsm vs 600gsm Biaxial NCF | Explain selection by layup direction and process | Use published 300/600gsm TDS values only | NCF product, TDS, RFQ | Existing guide refresh candidate |
| Carbon NCF RFQ Checklist | Collect orientation, width, roll, process and quantity details | No performance values without approved product data | NCF product, Contact | Existing guide refresh candidate |
| 12K Tow Sourcing Checklist | Collect grade, sizing, bobbin, packing and quantity details | Use 12K supply reference only | Yarn & Tow product, TDS, RFQ | Draft only |
| 3K Plate CNC and RFQ Checklist | Distinguish decorative/industrial 3K sheet from strengthening plate | Use RFQ guide; no mechanical claims | 3K plate, Custom products, Contact | Existing guide refresh candidate |
| Pultruded CFRP Plate RFQ | Collect dimensions, bonding surface, destination and project review details | Use 1.2mm TDS only | Strengthening system, compliance page, RFQ | Existing guide refresh candidate |

Every approved content change must contain a clear Quick Answer, information boundary, product/RFQ internal link and only schemas matching visible content. No case study, certification, offer, rating, price, stock or sensitive end-use wording is permitted.

## Measurement and decision rules

- Use the new CSV/API import framework for GSC, GA4 and Yandex; source data must include date and not include buyer PII.
- Wait for at least 14 days of indexed data or 50 verified impressions before testing title/meta text.
- Positions 11-30: improve answer quality, documents and contextual internal links first.
- Top 10 with weak CTR: test only one snippet change after real query review.
- Organic traffic with no RFQ/TDS/contact actions: review procurement information and CTA path.
- Track `rfq_submit`, `whatsapp_click`, `email_click`, `phone_click`, `tds_download`, `catalog_download` by product, locale and UTM.

## Google Ads test specification

No campaign has been created. Before spend is authorized, create separate manual-review search campaigns for NCF, 3K Plate, 3K Woven, UD Strengthening and Tow. Use exact/phrase procurement terms, country-language landing pages that are already live, product-level UTM campaigns, and negative terms for unrelated consumer, training and sensitive-use queries. Start with a controlled daily budget supplied by the business; do not infer a budget or publish an ad without account access and approval.
