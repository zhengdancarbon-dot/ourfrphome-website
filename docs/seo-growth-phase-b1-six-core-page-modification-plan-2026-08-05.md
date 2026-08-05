# SEO Growth Phase B-1: Six Core Product Page Plan

Status: review plan only. This document does not authorize a public URL, page-content, metadata, schema, form, ad-account, production or deployment change.

## Purpose and guardrails

Phase B-1 strengthens six existing canonical product pages so that each answers a distinct procurement question, exposes only document-backed technical information, and leads the buyer to a more complete RFQ. The existing English routes and localized variants remain the sole public destinations.

- No new public SKU, country, comparison or specification routes.
- No technical value, availability, tolerance, resin consumption, structural design value, certification, authorization or case study unless it is supported by an approved source document.
- Do not use aerospace, military, weaponized-drone, missile or combat-UAV claims.
- Do not call a quotation guide a TDS. The 3K laminate document remains an English `SPEC / RFQ Guide`.
- Maintain self-canonical, hreflang, Product / FAQ / Breadcrumb schemas and locale-specific RFQ source data after any future implementation.
- Content and snippet changes remain gated by verified GSC or Yandex evidence: at least 14 indexed days or 50 verified impressions, except for a factual correction or a required compliance fix.

## Shared implementation pattern after approval

Every approved product refresh should add, in this order:

1. A visible `Quick procurement answer` using only verified scope.
2. A compact buyer-intent and selection section.
3. A comparison/decision table that labels values as `published document`, `order review`, or `qualified engineering review`.
4. A product-specific RFQ quick table that preselects the current product but preserves the existing `/api/inquiry` response contract.
5. Contextual links to related product, applicable technical guide, Contact/RFQ and the matching English PDF.
6. A clearly labelled download card and `tds_download` event payload with product and locale; do not record buyer-entered form data in analytics.

## 1. Woven Carbon Fiber Fabric

- **Canonical:** `/products/carbon-fiber-woven-fabric`
- **Primary procurement theme:** 3K 200gsm twill woven carbon fiber fabric supplier.
- **Evidence available:** FRP HOME 3K 200gsm Twill Carbon Fiber Fabric TDS. Published scope is 3K, 200 g/m2, twill, 1000-1500 mm width and 100 m nominal roll.

### Planned content and comparison

Add a procurement answer stating that the published product is the 3K 200gsm twill construction and that other tow sizes, weaves, widths and roll packing require order review. Add a decision table with these rows:

| Buyer question | Visible answer boundary | RFQ follow-up |
|---|---|---|
| Need a documented visible woven fabric | 3K, 200 g/m2, twill is documented | Confirm width and roll quantity |
| Need a different weave or tow size | Not represented by the published 3K TDS | Submit construction and appearance requirement |
| Need a laminate process recommendation | Process compatibility is reviewed with the buyer | State resin/process and final application |

Do not turn plain, satin, jacquard, 8x8mm or 10x10mm options into separately asserted stock specifications.

### RFQ, links and download

RFQ prefill/fields: material, `3K / 200 g/m2` or requested construction, weave, width, roll length, resin/process, application, quantity, delivery country and document request. Link from the page to Catalog, Spread Tow, 3K Laminate Sheet, the approved woven-fabric technical guide and Contact. Keep the existing TDS card as `English PDF`; expose revision/date and a factual document scope, not a generic download label.

## 2. Carbon Fiber Multiaxial NCF Fabric

- **Canonical:** `/products/carbon-fiber-multiaxial-ncf-fabric`
- **Primary procurement theme:** carbon fiber multiaxial/biaxial NCF supplier, with 300gsm and 600gsm `+45/-45` document-backed entry points.
- **Evidence available:** 300gsm Biaxial Carbon Fiber Fabric TDS for `+45/-45` and `0/90` constructions; 600gsm `+45/-45` Biaxial Carbon NCF TDS at 1270 mm x 50 m; 400gsm quadraxial supply reference.

### Planned content and comparison

Add a selection table that is explicitly an orientation and RFQ guide, not a laminate-design recommendation:

| Construction request | Published evidence boundary | Buyer must confirm |
|---|---|---|
| 300gsm biaxial | `0/90` and `+45/-45` constructions appear in the TDS scope | Required orientation, width and roll requirement |
| 600gsm biaxial | `+45/-45`, 1270 mm x 50 m appears in the TDS | Process, quantity and packaging requirement |
| Quadraxial / other multi-layer NCF | A 400gsm supply reference exists; final construction is order review | Layer schedule, stitch requirement and project process |

The buyer-intent section should explain how orientation, total areal weight, width, roll length, stitch/binder expectation and resin process affect a quotation. It must not say that a construction is automatically suitable for a load case, vacuum infusion, RTM or any engineering application.

### RFQ, links and download

RFQ fields: material, construction (`0/90`, `+45/-45`, quadraxial or custom), total and per-layer areal weight, width, roll length, stitching/binder request, resin process, application, quantity and delivery country. Link bidirectionally with UD Fabric, Woven Fabric, Vacuum Infusion guide, Applications relevant to industrial composites, Catalog and Contact. Show all two TDS files as English PDFs and mark the 400gsm document as a supply reference.

## 3. UD Carbon Fiber Fabric

- **Canonical:** `/products/carbon-fiber-ud-fabric`
- **Primary procurement theme:** 300gsm UD carbon fiber fabric supplier; carbon fiber fabric for strengthening material procurement.
- **Evidence available:** 300gsm UD Carbon Fiber Fabric TDS and a 200gsm `0 degree` strengthening-fabric supply reference.

### Planned content and comparison

Use a buyer FAQ/table to distinguish what can be answered from product evidence from what needs project review:

| Buyer question | Visible answer boundary | RFQ/project input |
|---|---|---|
| What is UD carbon fiber fabric? | Fibres are aligned predominantly in one direction; published 300gsm and 200gsm-reference scopes are separate | Required fibre direction and application |
| Which areal weight is required? | 300gsm has a product TDS; 200gsm is a strengthening supply reference | Drawing/system requirement and requested width |
| How much resin is required? | Do not publish a fixed consumption value | Selected resin/adhesive system and approved installation method |
| How is CFRP strengthening installed? | Supply information is not a design or installation instruction | Qualified engineer/installer and project-specific system review |

### RFQ, links and download

RFQ fields: material, areal weight, direction, width, roll length, resin/adhesive system to be reviewed, application, quantity, delivery country and document requirement. Link to Structural Strengthening System, NCF, Contact/RFQ and the relevant applications without turning a material page into a project-design promise. Show the 300gsm TDS and label the 200gsm record as a supply reference.

## 4. 3K Carbon Fiber Laminate Sheet

- **Canonical:** `/products/3k-carbon-fiber-laminate-sheet`
- **Primary procurement theme:** 3K carbon fiber sheet/plate supplier; 3K laminate manufacturer; CNC-ready carbon sheet.
- **Evidence available:** FRP HOME 3K Carbon Fiber Laminate Sheet Product Specification & RFQ Guide only. It is not a TDS.

### Planned content and comparison

Add a clear comparison table at the top of the decision section:

| Buyer need | Correct page/material route | Evidence boundary |
|---|---|---|
| 3K twill visual/industrial laminate, finish or CNC part | This 3K Laminate Sheet page | Thickness, layup, flatness, dimensions and machining by drawing/order review |
| Externally bonded strengthening plate | Structural Strengthening System | 1.2 mm pultruded CFRP plate has a separate TDS and engineering-review boundary |

Add visible RFQ guidance for surface (`glossy`, `matte`, `sanded`, `peel-ply`), thickness, panel size, drawing, desired inner layup, CNC operations, protected face and packing. Do not claim a generic thickness tolerance, mechanical property, internal layup or stock size.

### RFQ, links and download

RFQ fields: material, surface/finish, thickness, panel dimensions, layup request, drawing upload, CNC/drilling/edge requirements, quantity, delivery country and packing/protection requirement. Link to Custom Carbon Fiber Products, Woven Fabric, Structural Strengthening System (with distinction copy), Catalog and Contact. Download card must read `English SPEC / RFQ Guide`, explain that it collects order inputs, and fire `tds_download` only under a document-type-aware title or use a new normalized `document_download` mapping after analytics approval.

## 5. Carbon Fiber Yarn and Tow

- **Canonical:** `/products/carbon-fiber-yarn-and-tow`
- **Primary procurement theme:** 12K carbon fiber tow supplier; carbon fiber yarn/tow sourcing.
- **Evidence available:** High Strength 12K Carbon Fiber Tow supplier-grade reference. Other tow sizes, grade, sizing, bobbin weight and batch documents must be confirmed for the selected source.

### Planned content and comparison

Replace broad implied availability with a simple sourcing decision table:

| Buyer request | Visible answer boundary | Required quotation data |
|---|---|---|
| 12K tow | One supplier-grade 12K reference is available | Source, grade, sizing, bobbin format and batch documents |
| 3K / 24K / 50K tow | Request can be evaluated; no public product-specific TDS is represented | Tow size, target grade, sizing/process, monthly quantity and destination |
| Weaving, pultrusion, winding or prepreg use | Downstream process affects sizing and package review | Resin/polymer/process and equipment constraints |

Do not describe any grade as aerospace-grade or military-grade, and do not assert manufacturer authorization or allocation.

### RFQ, links and download

RFQ fields: material, tow size, grade or source preference, sizing/process, linear density requested, bobbin dimensions/net weight, quantity, destination country, end-use review and document needs. Link to Woven Fabric, NCF, Structural Strengthening where relevant, compliance/end-use review, Catalog and Contact. Maintain the 12K document as an English supply reference and keep all other tow sizes in order-review state.

## 6. Carbon Fiber Structural Strengthening System

- **Canonical:** `/products/structural-strengthening-system`
- **Primary procurement theme:** pultruded CFRP plate supplier; UD carbon fiber strengthening material supplier.
- **Evidence available:** 300gsm UD fabric TDS, 200gsm UD strengthening supply reference and 1.2 mm pultruded CFRP strengthening plate TDS.

### Planned content and comparison

Add a material-routing table, retaining the existing qualified-engineering boundary:

| Procurement route | Documented scope | Required project review |
|---|---|---|
| 300gsm UD fabric | Published product TDS | System/adhesive compatibility and dimensions |
| 200gsm UD fabric | Published supply reference | Selected project/system review |
| 1.2 mm pultruded CFRP plate | Published TDS | Width, length, bonding surface, design and adhesive system |
| Other plate/fabric system | Matching source evidence required | Qualified engineer, substrate and application review |

The content must state that it supplies materials for review, not structural design, installation approval or performance certification.

### RFQ, links and download

RFQ fields: material route (UD fabric/plate), areal weight or plate thickness, width, length/roll, bonding-surface requirement, system/resin to be reviewed, structure type, quantity, destination country and qualified engineering contact. Link to UD Fabric, 3K Laminate Sheet with its distinct purpose, technical information and Contact. Preserve separate English download cards for 300gsm UD, 200gsm supply reference and 1.2mm plate TDS.

## Acceptance checklist for a future implementation

- Visible content matches the cited document title and scope.
- No page creates a new canonical URL or alters an existing slug.
- English and all live localizations receive the same product-scope boundary; codes such as 3K, 12K, 200gsm, 300gsm, 600gsm, `0/90`, `+45/-45`, NCF and CFRP remain unchanged.
- Arabic is checked in RTL; all other locale pages are checked at desktop and 390px mobile widths.
- Every changed page has one H1, self-canonical, complete hreflang group, correct visible-text schema and a working document/CTA link.
- RFQ records route locale, source URL and product context without emitting personal data to GA4.
- Run `pnpm lint`, `pnpm build`, `pnpm seo:audit`, `pnpm locale:audit` and `pnpm schema:audit` before a Preview-only deployment.
