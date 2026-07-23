# FRP HOME Six-Core Video SEO Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

## Source Review

The local product-material directory contains 27 MOV/MP4 files. Candidate videos were reviewed through generated source thumbnails before any file was published.

The approved Woven Fabric video is derived from:

- Source: `产品照片/4701_raw.MP4`
- Source duration: approximately 49.83 seconds
- Source dimensions: 1920x1080
- Verified visible subject: carbon fiber woven fabric moving through a production loom

The source visibly supports a woven/twill carbon fiber production description. It does not independently prove tow size, areal weight, width, roll length, finish or batch identity.

The approved Multiaxial NCF video is derived from:

- Source: `产品照片/717.MP4`
- Source duration: 17.8 seconds
- Source dimensions: 720x1280
- Verified visible subject: directional carbon reinforcement layers positioned on production equipment

The source supports a directional-layer production description. It does not independently prove NCF architecture, 300gsm or 600gsm identity, `0°/90°` or `+45°/-45°` direction set, stitch specification, width, roll length or batch identity.

## Published Web Asset

- Product page: `/products/carbon-fiber-woven-fabric`
- Video: `/videos/3k-woven-carbon-fiber-weaving-line.mp4`
- Poster: `/images/products/3k-woven-carbon-fiber-weaving-line-poster.jpg`
- Web duration: 12 seconds, selected from the source production sequence
- Web video: approximately 3.5 MB, 640x360
- Poster: 1280x719, approximately 369 KB

The Multiaxial NCF web asset is:

- Product page: `/products/carbon-fiber-multiaxial-ncf-fabric`
- Video: `/videos/carbon-fiber-multiaxial-ncf-directional-layer-production.mp4`
- Poster: `/images/products/carbon-fiber-multiaxial-ncf-production-poster.jpg`
- Web duration: 17.8 seconds
- Web video: H.264 MP4, 720x1280, approximately 2.9 MB
- Poster: 720x1280, approximately 202 KB

The filename aligns the asset with the existing commercial route, but visible copy and structured data describe the verified process rather than treating the footage as proof of a specific 3K batch.

## Page And Schema Integration

The existing product-video component now supports:

- Carbon Fiber Multiaxial NCF Fabric
- Carbon Fiber Yarn & Tow
- Carbon Fiber Woven Fabric

For Woven Fabric, EN, ES, PT-BR, RU, AR, FR, KO, PL and TR each receive:

- localized visible eyebrow, title and description;
- a controlled, non-autoplay video player;
- localized `VideoObject` name and description;
- the real poster and media URL;
- `PT12S` duration;
- localized `inLanguage`;
- the existing page canonical as the video entity base URL.

The description explicitly asks buyers to confirm tow size, areal weight, width, weave, roll length and finish in the RFQ. No output volume, grade, certification, mechanical property or batch claim was added.

For Multiaxial NCF, all nine language versions identify the footage as a real directional-layer production view and require buyers to confirm architecture, direction set, total and per-layer gsm, stitch, width and roll length against the selected TDS and RFQ. No specific construction is inferred from the footage.

## Sitemap Decision

The English, Spanish, Brazilian Portuguese and Russian Woven Fabric pages had their real `lastModified` date advanced from 2026-07-22 to 2026-07-23. AR, FR, KO, PL and TR were already dated 2026-07-23 because their procurement copy was localized on the same date.

All nine Multiaxial NCF page entries use 2026-07-23 as their real `lastModified` date after the production video integration.

No URL, slug, canonical or hreflang structure changed.

## Held Video Candidates

Other local clips show sheet/strip processing, hybrid fabrics, logistics or general production views. They remain unpublished until the exact product/process relationship can be confirmed. No generic factory clip will be attached to 3K laminate, strengthening UD or pultruded plate merely to create more VideoObject entities.

## Release Boundary

- No production deployment was performed.
- The original source video remains in the user material directory and is not staged.
- The web excerpt, poster, code and this audit are the only intended release files.

## Verification

- `pnpm lint`: PASS with zero errors; three warnings remain in an unrelated untracked Morocco output script.
- `pnpm build`: PASS, including TypeScript and 216 generated routes.
- Full local production audit: 207/207 sitemap pages and 346/346 internal resources PASS.
- Priority product audit: 6/6 PASS.
- Localized video-page audit: 27/27 PASS across three products and nine languages.
- NCF video request: HTTP 206 with byte ranges, `video/mp4`, 3,044,254 bytes.
- NCF poster request: HTTP 200, `image/jpeg`, 207,325 bytes.
- Desktop NCF video section: no horizontal overflow and no console error.
- Arabic mobile NCF video section: `lang="ar"`, `dir="rtl"`, no horizontal overflow and no console error.
