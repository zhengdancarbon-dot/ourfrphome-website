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

### In Progress

1. Prepare the next source-backed NCF and 3K laminate release from existing verified TDS and buyer guides.
2. Review the six English priority pages for visible document links, buyer questions and contextual links from Technical Center.
3. Prepare a manually reviewed authority-outreach shortlist for composites directories, engineering media, distributors, processors and relevant exhibitions.

### Next

1. Separate UTM reporting for UD fabric and pultruded strengthening plate even when both use the same strengthening campaign family.
2. Review the six corresponding RU pages first for Yandex procurement terminology, then ES, PT-BR, FR, TR, PL, AR and KO.
3. Add further product videos only where real footage can be identified accurately and does not duplicate an existing page asset.

### Measurement Cycle

- Re-export GSC and Yandex data weekly, not daily.
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
