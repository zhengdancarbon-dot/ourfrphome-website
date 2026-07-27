# FRP HOME Six-Core Exposure Growth Task

Date: 2026-07-23

Production domain: `https://www.myfrphome.com`

Status: active and authoritative

## Objective

Increase qualified international discovery and RFQ opportunities for six priority commercial routes without changing their existing URLs or publishing unsupported claims. Work proceeds in small, measured releases and uses Google Search Console, Yandex Webmaster, GA4, Yandex Metrica, TDS downloads and qualified inquiries as evidence.

## Priority Allocation

| Priority product | Share | Canonical commercial page |
| --- | ---: | --- |
| Carbon Fiber Multiaxial NCF Fabric | 25% | `/products/carbon-fiber-multiaxial-ncf-fabric` |
| 3K Carbon Fiber Laminate Sheet | 20% | `/products/3k-carbon-fiber-laminate-sheet` |
| Carbon Fiber Yarn & Tow | 20% | `/products/carbon-fiber-yarn-and-tow` |
| Strengthening UD Carbon Fiber Fabric | 12% | `/products/carbon-fiber-ud-fabric` |
| Pultruded CFRP Strengthening Plate / System | 12% | `/products/structural-strengthening-system` |
| 3K Woven Carbon Fiber Fabric | 11% | `/products/carbon-fiber-woven-fabric` |

The two strengthening routes must remain distinct: generic UD fabric intent belongs to the UD product page; pultruded plate, concrete strengthening and system intent belongs to the strengthening-system page.

## Verified Starting Evidence

- Production sitemap on 2026-07-22: 207 URLs.
- GSC export through 2026-07-19: 4 clicks, 1,363 impressions, 0.29% CTR and approximately 53.2 average position.
- Highest priority-page impressions: 3K woven 201, Yarn & Tow 51, Multiaxial NCF 23, strengthening system 20, 3K laminate 5 and UD fabric 1.
- Existing source-backed documents: 300gsm and 600gsm biaxial NCF, 12K tow, 300gsm UD fabric, 1.2 mm pultruded CFRP plate, 3K 200gsm twill fabric and a 3K laminate RFQ specification guide.
- Existing buyer resources already cover NCF architecture and RFQ, 3K plate thickness/CNC/finish, tow size and RFQ, strengthening material comparison/RFQ, and 3K woven selection.

No search volume is inferred from this baseline. Low-volume positions are directional signals, not ranking claims.

## Execution Queue

### Completed On 2026-07-23

1. Established the 60-query six-core keyword and intent map in `docs/six-core-keyword-intent-map-2026-07-23.csv` without invented search volume.
2. Prepared the first real Yarn & Tow production video as `/videos/carbon-fiber-yarn-tow-spool-creel.mp4` with a 157 KB source-derived poster.
3. Added controlled playback and localized visible copy to the EN, ES, PT-BR, RU, AR, FR, KO, PL and TR Yarn & Tow product pages.
4. Added localized `VideoObject` structured data with the real media URL, poster, duration, publication date and language code.
5. Verified all nine routes return 200, the MP4 is served as `video/mp4`, the sitemap remains at 207 URLs, `pnpm lint` has zero errors and `pnpm build` generates 216 pages.
6. Added visible, tracked TDS downloads to source-backed Technical Center articles without exposing a document on an unrelated guide.
7. Created a six-cluster, nine-language UTM link pack for email, LinkedIn and WhatsApp outreach.
8. Prepared a manually reviewed authority-outreach shortlist and white-hat submission playbook.
9. Added server-rendered language and direction semantics to every localized page and verified Arabic templates expose `lang="ar"` and `dir="rtl"` before client hydration.
10. Replaced generic generated copy with product-specific procurement content for Yarn & Tow, UD fabric, structural strengthening and 3K woven fabric across AR, FR, KO, PL and TR, covering 20 localized commercial pages.
11. Closed the RFQ attribution gap by preserving approved UTM and Google/Bing/Yandex click parameters in the inquiry source URL and `rfq_submit` event across same-tab navigation.
12. Reconciled the latest available GSC, Yandex and GA4 evidence into `docs/six-core-search-performance-review-2026-07-23.md` without treating missing data as zero or claiming unproven rankings.
13. Added a repeatable Google/Yandex export checklist and six-core weekly report template so future title, content and conversion decisions follow the 14-day / 50-impression and 20-organic-visit gates.
14. Published a source-derived 12-second Woven Fabric loom video with a responsive poster, nine-language visible copy and localized `VideoObject`, while keeping tow size, areal weight and batch identity as TDS/RFQ confirmation items.
15. Audited all available 1.2 mm, 1.4 mm, 3.0 mm and 5.0 mm carbon-plate records and confirmed that they describe pultruded structural-strengthening plate, not visible 3K laminate sheet. Retained the 3K download as a `SPEC` guide and documented the exact evidence required for a future formal TDS in `docs/3k-laminate-tds-source-gap-2026-07-23.md`.
16. Added the real `717.MP4` directional-layer equipment footage to the Multiaxial NCF product in nine languages, with a source-derived poster and localized `VideoObject`. The copy does not assign an unverified gsm, angle set or batch identity and directs buyers to the selected TDS and RFQ.
17. Verified five official industry discovery routes and prepared the first manually reviewed authority-outreach batch in `docs/six-core-authority-outreach-batch-01-2026-07-23.csv`, with individualized drafts in `docs/six-core-authority-outreach-batch-01-drafts-2026-07-23.md`. Every record is explicitly marked `Prepared - not sent`; no external form, email, payment or upload was submitted.
18. Completed the first Yandex-oriented procurement review for all six Russian priority product pages. Tightened NCF, 12K tow and 3K laminate document boundaries, corrected one engineering sentence, and verified 207 sitemap URLs plus six Russian page outputs in `docs/six-core-russian-yandex-procurement-audit-2026-07-23.md`.
19. Completed evidence-boundary and procurement-language review for the six Spanish and six Brazilian Portuguese priority pages. Corrected NCF architecture scope, 12K tow reference-TDS scope, 3K laminate SPEC classification, 300gsm UD and 1.2 mm strengthening documentation, then verified all 12 server outputs in `docs/six-core-es-ptbr-procurement-audit-2026-07-23.md`.
20. Completed the remaining 30-page procurement review for FR, TR, PL, AR and KO. Corrected the documented NCF direction scope and 3K laminate SPEC classification in each language, preserved already-correct Tow/UD/strengthening/woven evidence boundaries, and verified all outputs in `docs/six-core-fr-tr-pl-ar-ko-procurement-audit-2026-07-23.md`. The six priority products have now completed document-boundary review across all eight localized languages.
21. Recovered and independently backed up the complete repository history, confirmed that no tracked source files are deleted, and created a Vercel Preview from the recovered branch. The Preview is `Ready`, the Vercel build generated 216 pages, the dry-run excluded every local source-material directory, and the equivalent local production audit passed 207 sitemap URLs. Evidence is recorded in `docs/repository-recovery-audit-2026-07-23.md` and `docs/six-core-multilingual-preview-verification-2026-07-27.md`; production remains unchanged.
22. Strengthened the `300gsm vs 600gsm Biaxial Carbon NCF Selection Guide` using the two verified FRP HOME TDS documents, including exact documented construction, yarn, weight and roll-format boundaries. Added three related English buyer-guide links to each of the six priority product pages in all eight localized languages, covering 48 commercial pages. Desktop, mobile and Arabic RTL checks passed without page-level overflow or console errors; evidence is recorded in `docs/six-core-ncf-selection-and-multilingual-links-2026-07-27.md`.
23. Reworked the existing CFRP plate vs UD fabric strengthening guide around the verified FRP HOME 300gsm UD fabric and 1.2 mm pultruded plate TDS documents. Added a tightly scoped three-guide strengthening cluster to the English and eight localized structural-strengthening application pages, while preserving the existing URL and metadata. The 207-URL SEO audit, nine-language link check, desktop/mobile layout and Arabic RTL checks passed; evidence is recorded in `docs/strengthening-material-selection-and-multilingual-links-2026-07-27.md`.
24. Strengthened the existing Carbon Fiber Tow RFQ Checklist with the verified supplier-origin 12K Tow TDS, including exact source grade, GB/T methods, linear density, sizing, twist, bobbin and authorization boundaries. The guide is now the first related guide on all nine Yarn & Tow product pages, while the existing URL and metadata remain stable. Build, 207-URL SEO audit, Article Schema, desktop/mobile and Arabic RTL checks passed; evidence is recorded in `docs/12k-tow-rfq-source-and-multilingual-links-2026-07-27.md`.
25. Strengthened the existing 3K 200gsm Carbon Fiber Fabric RFQ Guide with the verified FRP HOME TDS, including product code, source style, dry-fabric thickness, yarn count, width and nominal roll-length boundaries. Added a three-guide woven-fabric buyer cluster to the English and eight localized automotive application pages without creating a new URL or changing article metadata. Build, 207-URL SEO audit, nine-language link checks, desktop/mobile layout and Arabic RTL checks passed; evidence is recorded in `docs/3k-200gsm-woven-rfq-and-automotive-links-2026-07-27.md`.
26. Converted the local 400gsm `0/+45/90/-45` quadraxial source record into an explicitly labeled FRP HOME supplier-origin supply-reference TDS. Published the download on all nine Multiaxial NCF product pages and strengthened the existing architecture guide with the documented 12K layer, stitch, width and roll-format data without claiming FRP HOME manufacture, authorization, stock or batch certification. The PDF render, build, 207-URL SEO audit, nine-language download analytics, mobile layout and Arabic RTL checks passed; evidence is recorded in `docs/400gsm-quadraxial-ncf-tds-and-guide-2026-07-27.md`.

### In Progress

1. Keep the 3K laminate release at specification-guide level until a matching laminate production record or test report is supplied.
2. Obtain action-time approval for the first manually reviewed outreach batch, then record the real send date, response, public listing URL and referral performance. Commercial budget approval is required for paid channels, and the Russia/CIS opportunity also requires destination, counterparty, payment and end-use review.
3. Re-export GSC and Yandex performance after the next complete data window using `docs/six-core-google-yandex-export-checklist-2026-07-23.md`, then apply the 14-day / 50-impression decision rule.

### Next

1. Complete the normal-browser review of the Ready Preview and one controlled RFQ delivery check; request one recrawl only after an approved production deployment.
2. Add further product videos only where real footage can be identified accurately and does not duplicate an existing page asset.
3. Re-export GSC and Yandex data after the next complete reporting window and apply the 14-day / 50-impression rule before changing metadata.

### Measurement Cycle

- Re-export GSC and Yandex data weekly, not daily.
- Use `docs/six-core-seo-geo-weekly-report-template.md` as the authoritative weekly report format.
- Review metadata only after 14 indexed days or 50 impressions for that page.
- Review conversion friction after 20 valid organic visits without RFQ, TDS, email, WhatsApp or catalog action.
- Use one indexing request after a material update; do not repeatedly request indexing.
- Report non-brand queries, country, locale, page, position band, clicks, TDS downloads and qualified RFQs separately for each priority route.

## Content Rules

- Extend existing commercial pages and buyer guides before creating a near-duplicate keyword page.
- Keep `3K`, `12K`, `300gsm`, `600gsm`, `0°/90°`, `+45°/-45°`, `T300`, `T700`, `UD`, `NCF`, `CFRP` and `PAN` unchanged.
- Use real product documents, real factory media and visible review dates.
- Treat generic ranges as RFQ options, not order guarantees.
- Do not invent certification, authorization, annual capacity, customer cases, test conclusions, pricing, inventory, ratings or reviews.
- Keep compliance and final end-use review visible. Do not add military, weaponized drone, missile or combat-use wording.

## Release Gate

Every website release must pass `pnpm lint`, `pnpm build`, desktop/mobile checks, document-link validation, canonical/hreflang checks and a production smoke test. Production deployment remains a separate approval step.
