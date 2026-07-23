# FRP HOME Six-Core Video SEO Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

## Source Review

The local product-material directory contains 27 MOV/MP4 files. Candidate videos were reviewed through generated source thumbnails before any file was published.

The second approved six-core video is derived from:

- Source: `产品照片/4701_raw.MP4`
- Source duration: approximately 49.83 seconds
- Source dimensions: 1920x1080
- Verified visible subject: carbon fiber woven fabric moving through a production loom

The source visibly supports a woven/twill carbon fiber production description. It does not independently prove tow size, areal weight, width, roll length, finish or batch identity.

## Published Web Asset

- Product page: `/products/carbon-fiber-woven-fabric`
- Video: `/videos/3k-woven-carbon-fiber-weaving-line.mp4`
- Poster: `/images/products/3k-woven-carbon-fiber-weaving-line-poster.jpg`
- Web duration: 12 seconds, selected from the source production sequence
- Web video: approximately 3.5 MB, 640x360
- Poster: 1280x719, approximately 369 KB

The filename aligns the asset with the existing commercial route, but visible copy and structured data describe the verified process rather than treating the footage as proof of a specific 3K batch.

## Page And Schema Integration

The existing product-video component now supports both:

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

## Sitemap Decision

The English, Spanish, Brazilian Portuguese and Russian Woven Fabric pages had their real `lastModified` date advanced from 2026-07-22 to 2026-07-23. AR, FR, KO, PL and TR were already dated 2026-07-23 because their procurement copy was localized on the same date.

No URL, slug, canonical or hreflang structure changed.

## Held Video Candidates

Other local clips show equipment, sheet/strip processing, hybrid fabrics, logistics or general production views. They remain unpublished until the exact product/process relationship can be confirmed. No generic factory clip will be attached to NCF, 3K laminate, strengthening UD or pultruded plate merely to create more VideoObject entities.

## Release Boundary

- No production deployment was performed.
- The original source video remains in the user material directory and is not staged.
- The web excerpt, poster, code and this audit are the only intended release files.
