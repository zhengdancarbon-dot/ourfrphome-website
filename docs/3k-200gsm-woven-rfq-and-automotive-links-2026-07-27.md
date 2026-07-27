# 3K 200gsm Woven RFQ And Automotive Links

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: unchanged

Preview: `https://ourfrphome-website-1qb4fkgqi-zhendgan.vercel.app`

Vercel deployment: `dpl_EqWUw51au9h8ArYigB4AYg3mREt2` (`READY`, Preview)

## Purpose

Strengthen the existing 3K 200gsm woven-carbon procurement guide with verified FRP HOME product data and connect automotive application intent to the most relevant woven-fabric buyer guides. No public URL, slug, title or description was changed.

Updated guide:

`/technical-center/3k-200gsm-carbon-fiber-fabric-selection-rfq-guide`

Priority product:

`/products/carbon-fiber-woven-fabric`

Application cluster:

`/applications/automotive-carbon-fiber-parts`

## Primary Document Reviewed

`public/downloads/tds/FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf`

Only explicit data from the current FRP HOME TDS were added:

- Document ID `FRPH-TDS-WCF3K200-EN-R01`.
- Product code `FRPH-WCF-3K200-T`.
- Source product style `TCT-3K-200`.
- 3K carbon fiber, 200 g/m2 nominal areal weight and twill weave.
- 0.20 mm nominal dry-fabric thickness.
- 5 x 5 per 10 mm nominal fiber count, warp x weft.
- 1000-1500 mm available width and 100 m nominal roll length.
- Vacuum infusion, wet layup, compression molding, automotive composite panels, sporting goods and industrial composite covers as TDS-listed application categories.

## Evidence Boundaries

- The 0.20 mm value is a dry-fabric reference, not cured laminate thickness.
- The 5 x 5 per 10 mm value describes the nominal woven construction, not tensile strength or laminate performance.
- Width, roll length, tolerance, fiber grade, sizing, packing and batch documents require order confirmation.
- Visible-surface appearance requires an approved sample because weave name alone does not define finished cosmetic quality.
- The TDS values are nominal references, not a batch certificate or finished-laminate design allowables.

## Website Changes

- Preserved the article slug, title, description and canonical URL.
- Replaced generic guide fields with the source-backed product identity, construction, width, roll and process data.
- Removed application wording not listed in the TDS and retained only documented application categories.
- Added RFQ prompts for source identity, fiber grade, sizing, tolerance, surface sample, process, packing and order documents.
- Added FAQs that explain dry thickness, yarn count and reference supply ranges.
- Updated the real review date to `2026-07-27`.
- Added three English buyer guides to the English and eight localized automotive application pages:
  - `3K 200gsm Carbon Fiber Fabric RFQ Guide`
  - `Plain vs Twill Carbon Fiber Fabric`
  - `3K vs 12K Carbon Fiber Fabric`
- Localized application links continue to identify the English destination with `hreflang="en"`.
- Updated only the affected sitemap `lastModified` values.

## Verification

| Check | Result |
| --- | --- |
| `git diff --check` | Pass |
| `pnpm lint` | Pass, zero project errors |
| `pnpm build` | Pass, 216 generated pages |
| Full local SEO audit | Pass, 207/207 sitemap pages |
| Internal resources | 346 checked |
| Automotive application pages | 9/9 return 200 |
| Buyer guides on each application page | 3/3 |
| Localized English-link language | Pass |
| TDS facts and download URL | Pass |
| Sitemap count and affected `lastModified` | Pass |
| Desktop 1440 x 900 | No page overflow; hero image loaded |
| Mobile 390 x 844 | No page overflow; tables scroll only inside `.table-wrap` |
| Arabic application page | `lang="ar"`, `dir="rtl"`, three English guide links |
| Russian application page | `lang="ru"`, no overflow, three English guide links |
| Browser console | No warnings or errors |
| Vercel Preview build | Pass, 216 generated pages, `READY` |

The Vercel CLI confirmed the deployment as `Ready`. Direct HTTP access to the
Preview URL timed out from the current execution network, so the report does
not claim a separate online-page smoke test. The same committed tree passed the
local production build, full SEO audit and desktop/mobile browser checks above.

## Release Boundary

- Production has not been changed.
- Complete a normal-browser review of the fresh Preview before requesting production approval.
- Request one recrawl only after an approved production deployment.
- Keep title and description stable until the page reaches 14 indexed days or 50 impressions, then review actual GSC/Yandex query evidence.
- Confirm product specification, sample, batch documents, destination and final end use before every commercial commitment.
