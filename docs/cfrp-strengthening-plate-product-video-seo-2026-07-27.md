# CFRP Strengthening Plate Product Video SEO

Date: 2026-07-27

## Scope

Added a real workshop product video to the English and eight localized versions of:

`/products/structural-strengthening-system`

The source file is `产品照片/254944_raw.MP4`. The visible evidence is limited to long, narrow black CFRP plate strips handled in a workshop. The page copy does not claim that the footage shows a pultrusion production line, a particular batch, dimensions, mechanical properties or installation performance.

## Assets

- Video: `/videos/cfrp-strengthening-plate-workshop-handling.mp4`
- Poster: `/images/products/cfrp-strengthening-plate-video-poster.jpg`
- Video size: 1,550,962 bytes
- Poster size: 155,939 bytes
- Poster dimensions: 1200 x 675
- Display orientation: landscape, 16:9

The source video was compressed for web delivery and the poster was extracted from the real footage. No synthetic product geometry or unsupported labeling was added.

## Localization And SEO

- Added visible copy for EN, ES, PT-BR, RU, AR, FR, KO, PL and TR.
- Kept the product route, canonical and existing metadata stable.
- Added the media to the existing localized `VideoObject` implementation.
- The copy asks buyers to confirm whether pultruded strengthening plate is required and to provide width, thickness, length, finish, adhesive system, quantity, project location, design responsibility and final application in the RFQ.
- The localized video audit increased from 36 to 45 pages.

## Responsive Fix

The video component now carries an explicit portrait or landscape orientation. Landscape footage uses a 16:9 frame, while the existing portrait Yarn & Tow, NCF and 3K laminate footage remains 9:16. A mobile-specific grid override prevents landscape cards from retaining the desktop 360 px minimum track.

This also corrected the existing Woven Fabric landscape video presentation without changing its asset or copy.

## Verification

- `pnpm lint`: passed with zero errors. Three pre-existing warnings remain in `.codex-output-work/morocco-promotion-2026/`.
- `pnpm build`: passed; Next.js generated 216 pages.
- `pnpm seo:audit http://127.0.0.1:3108`: passed.
- Sitemap URLs: 207.
- Internal resources checked: 348.
- Priority product pages checked: 6.
- Localized video pages checked: 45.
- Negative 404 checks: 3.
- Video response: HTTP 200, `video/mp4`.
- Poster response: HTTP 200, `image/jpeg`.
- Arabic mobile check at 390 x 844: `lang="ar"`, `dir="rtl"`, no horizontal overflow, 16:9 video frame.
- Desktop check at 1440 x 900: Strengthening System and Woven Fabric video frames both render at 16:9 with no horizontal overflow.

## Release Status

Local implementation and verification are complete. Production is unchanged.

- Preview URL: `https://ourfrphome-website-1yf70i6pn-zhendgan.vercel.app`
- Deployment ID: `dpl_4xhNhtczjsscKQ3HzAomubb4rQhH`
- Vercel target: Preview
- Vercel status: Ready
- Vercel build: completed in 37 seconds and generated 216 pages

The current network may prevent reliable direct access to `vercel.app`, so the equivalent local production build supplied the full automated and responsive browser evidence. No production deployment was performed.
