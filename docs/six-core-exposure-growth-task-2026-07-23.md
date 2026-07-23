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

### In Progress

1. Prepare the next source-backed NCF and 3K laminate release from existing verified TDS and buyer guides.
2. Begin the first manually reviewed outreach batch and record listing status, destination URL, UTM campaign and response.
3. Re-export GSC and Yandex performance after the next complete data window using `docs/six-core-google-yandex-export-checklist-2026-07-23.md`, then apply the 14-day / 50-impression decision rule.

### Next

1. Review the six corresponding RU pages first for Yandex procurement terminology, then ES, PT-BR, FR, TR, PL, AR and KO.
2. Add further product videos only where real footage can be identified accurately and does not duplicate an existing page asset.
3. Request recrawling only after the release is approved and deployed; do not repeatedly submit unchanged URLs.

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
