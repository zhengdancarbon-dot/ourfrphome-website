# FRP HOME SEO Topic Cluster Map

Date: 2026-07-15
Domain: https://www.myfrphome.com
Keyword source: `docs/seo-keyword-library-2026-07-15.csv`

## Operating Rules

- One commercial page owns each product family and its close synonyms. Do not create separate thin pages for `carbon fiber fabric`, `carbon fiber cloth`, `3K fabric` and `3K twill cloth`.
- Technical articles answer selection, comparison, process and RFQ questions. They link to commercial product pages without duplicating the full product specification table.
- Application pages own part- or industry-led intent. Product pages own material-led intent.
- English root URLs remain stable. New technical articles are English first; localization happens only after terminology review and evidence of demand.
- Article length is determined by what the buyer needs, not a fixed word count. Google explicitly states there is no preferred word count.
- Every article must identify its authoring organization, review date, evidence basis and claim limits.

Reference guidance:

- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google localized page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions)

## Cluster 1: Woven Carbon Fiber Fabric

Pillar page: `/products/carbon-fiber-woven-fabric`

Existing support:

- `/technical-center/3k-vs-12k-carbon-fiber-fabric`
- `/technical-center/plain-vs-twill-carbon-fiber-fabric`
- `/technical-center/how-to-choose-carbon-fiber-fabric-by-gsm`

Planned support:

- `/technical-center/carbon-fiber-fabric-for-vacuum-infusion`
- `/technical-center/carbon-fiber-fabric-for-wet-lay-up`
- `/technical-center/carbon-fiber-fabric-roll-width-guide`
- `/technical-center/carbon-fiber-fabric-rfq-checklist`

Required links: each guide links to Woven Fabric, UD Fabric or NCF only where the comparison is technically relevant, plus Contact/RFQ.

## Cluster 2: UD and Directional Reinforcement

Pillar page: `/products/carbon-fiber-ud-fabric`

Existing support:

- `/technical-center/ud-carbon-fiber-fabric-vs-woven-carbon-fiber-fabric`

Planned support:

- `/technical-center/ud-carbon-fiber-layup-direction-guide`
- `/technical-center/carbon-fiber-sizing-and-resin-compatibility`

Application links:

- `/applications/structural-strengthening`
- `/applications/plastic-resin-reinforcement` only when short-fiber alternatives are discussed

## Cluster 3: Spread Tow

Pillar page: `/products/spread-tow-carbon-fiber-fabric`

Existing support:

- `/technical-center/spread-tow-vs-traditional-carbon-fiber-fabric`

Planned support:

- `/technical-center/8x8-vs-10x10-spread-tow-carbon-fabric`

Cannibalization rule: 8x8mm and 10x10mm remain product options on one commercial page, not separate product URLs.

## Cluster 4: Prepreg

Pillar page: `/products/prepreg-carbon-fiber-materials`

Existing support:

- `/technical-center/prepreg-vs-dry-carbon-fiber-fabric`

Planned support:

- `/technical-center/carbon-fiber-prepreg-storage-handling`
- `/technical-center/carbon-fiber-for-compression-molding`

Evidence gate: storage, thawing, out-life and cure-cycle claims require current product documents. Generic guidance must be labeled as process context, not a product guarantee.

## Cluster 5: Carbon Fiber Yarn and Tow

Pillar page: `/products/carbon-fiber-yarn-and-tow`

Existing support:

- `/technical-center/carbon-fiber-yarn-vs-tow-vs-roving`

Planned support:

- `/technical-center/carbon-fiber-tow-size-guide-1k-50k`
- `/technical-center/t300-vs-t700-carbon-fiber`

Process links: weaving, filament winding and pultrusion sections on `/processes`.

## Cluster 6: Chopped and Milled Carbon Fiber

Pillar pages:

- `/products/chopped-carbon-fiber`
- `/products/milled-carbon-fiber-powder`

Existing support:

- `/technical-center/chopped-carbon-fiber-vs-milled-carbon-fiber-powder`

Planned support:

- `/technical-center/milled-carbon-fiber-powder-selection-guide`
- `/technical-center/carbon-fiber-for-plastic-compounding`
- `/technical-center/carbon-fiber-sizing-and-resin-compatibility`

Cannibalization rule: chopped-fiber queries map to the chopped page; powder, milled and mesh queries map to the milled-powder page.

## Cluster 7: Carbon Fiber Plates, Tubes and Profiles

Pillar pages:

- `/products/3k-carbon-fiber-laminate-sheet`
- `/products/3k-surface-carbon-fiber-tube`
- `/products/pultruded-carbon-fiber-tube`

Existing support:

- `/technical-center/roll-wrapped-vs-pultruded-carbon-fiber-tube`

Planned support:

- `/technical-center/carbon-fiber-plate-thickness-guide`
- `/technical-center/carbon-fiber-tube-selection-guide`

Commercial split: visible 3K tube intent belongs to the roll-wrapped/3K page; axial industrial profile intent belongs to the pultruded page.

## Cluster 8: Custom CFRP and CNC Parts

Pillar page: `/products/custom-carbon-fiber-products`

Planned support:

- `/technical-center/cnc-carbon-fiber-parts-rfq-guide`
- `/technical-center/machining-carbon-fiber-plate-and-parts`

RFQ focus: drawing, material form, dimensions, tolerance, surface, quantity, final application and destination.

## Cluster 9: Structural Strengthening

Pillar pages:

- `/products/structural-strengthening-system`
- `/applications/structural-strengthening`

Existing support:

- `/technical-center/cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening`

Planned support:

- `/technical-center/cfrp-strengthening-material-selection`
- `/technical-center/structural-strengthening-rfq-guide`

Safety boundary: material selection content does not replace project design by a qualified engineer. Do not publish load calculations or project claims without authenticated engineering documents.

## Cluster 10: Supplier Evaluation and Procurement

Pillar pages:

- `/products`
- `/catalog`
- `/contact`

Planned support:

- `/technical-center/carbon-fiber-supplier-evaluation-checklist`
- `/technical-center/carbon-fiber-fabric-rfq-checklist`

Trust signals allowed: real contact information, real factory/product images, documented material scope, RFQ requirements and explicit claim boundaries.

Trust signals prohibited without source files: certification, official authorization, annual capacity, customer logos, test reports and customer cases.

## Internal Linking Pattern

Each new guide should contain:

1. One contextual link to its pillar product page in the first half.
2. One comparison link to a related technical article where useful.
3. One application or process link.
4. One RFQ link with the exact information the buyer should provide.
5. Breadcrumb and Article/FAQ structured data.

Pillar pages should link back to a maximum of three directly relevant guides. Avoid sitewide keyword-heavy footer links.

## International Rollout

- Phase A: publish and measure English guides.
- Phase B: localize only guides that gain impressions, qualified visits or sales value.
- Phase C: use native procurement terminology for ES, PT-BR, RU, AR, FR, KO, PL and TR; do not machine-publish untranslated fallbacks.
- Every localized group must remain self-canonical and reciprocally linked through `hreflang`, including `x-default` to English.
