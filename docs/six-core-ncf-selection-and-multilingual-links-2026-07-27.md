# NCF Selection Guide And Multilingual Buyer Links

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: unchanged

Preview: `https://ourfrphome-website-taclj3qrq-zhendgan.vercel.app`

Vercel deployment: `dpl_4HWvFp24PqdMzcXaB1s3pK87Zb7W` (`READY`, Preview)

## Scope

This release strengthens an existing English NCF buyer guide with verified product-document evidence and adds localized entry points to existing English technical guides. It does not add routes, change product slugs, alter the RFQ API or publish new product-performance claims.

## Source Documents Reviewed

- `public/downloads/tds/FRP-HOME-300gsm-Biaxial-Carbon-Fabric-TDS.pdf`
- `public/downloads/tds/FRP-HOME-600gsm-PlusMinus45-Biaxial-Carbon-NCF-TDS.pdf`

Both PDFs were text-extracted and visually rendered before use. The published comparison is limited to facts present in those documents:

- 300gsm: documented `+45°/-45°` and `0°/90°` models, 150 + 150 g/m² carbon layers, 300 g/m² carbon weight, 308 g/m² total weight, 12K carbon yarn, PES 75D stitching yarn and 1270 mm x 50 m roll format.
- 600gsm: documented balanced `+45°/-45°` model, 300 + 300 g/m² carbon layers, 600 g/m² carbon weight, approximately 608-612 g/m² total weight, 12K preferred or 24K by agreement, and 1270 mm x 50 m roll format.
- The current 600gsm TDS does not document a `0°/90°` model. The guide tells buyers to request confirmation instead of implying availability.

The article keeps design allowables, resin compatibility, process settings and guaranteed mechanical performance as engineering or RFQ confirmation items.

## Website Changes

- Refined `/technical-center/300gsm-vs-600gsm-biaxial-carbon-ncf`.
- Added the technical review date `2026-07-27`.
- Added a visible Buyer Guides anchor on English priority product pages where related guides exist.
- Added localized English-guide labels and three related guide links for six priority products across ES, PT-BR, RU, AR, FR, KO, PL and TR.
- The localized links use `hreflang="en"` and explicitly tell users that the linked guide is in English.
- Updated only the affected localized product and Technical Center `lastModified` dates in the sitemap.

Coverage: 6 products x 8 localized languages = 48 localized commercial pages.

## Verification

| Check | Result |
| --- | --- |
| `git diff --check` | Pass |
| `pnpm lint` | Pass, zero project errors |
| `pnpm build` | Pass, 216 generated pages |
| `pnpm seo:audit http://127.0.0.1:3107` | Pass |
| Sitemap URL count | 207 |
| Automated localized link checks | 48/48 pass |
| Arabic semantics | `lang="ar"` and `dir="rtl"` pass |
| Desktop 1440 x 900 | No page overflow; no console errors |
| Mobile 390 x 844 | No page overflow; no console errors |
| NCF comparison tables on mobile | Scroll only inside `.table-wrap` |
| EN NCF source links and model codes | Pass |
| Vercel Preview build | Pass, 216 generated pages, `READY` |

Browser samples covered the English NCF guide, Russian NCF, Arabic NCF and Polish 3K laminate pages. The Arabic page retained natural RTL layout and a stable 390 px document width.

## Remaining Gates

- Production has not been changed by this release.
- Complete a normal-browser review of the fresh Preview before requesting production approval.
- After an approved production deployment, request one recrawl for the materially updated NCF guide and allow the sitemap to carry the localized product updates.
- Re-export GSC and Yandex data after the next complete reporting window. Apply the existing 14 indexed days or 50 impressions rule before changing metadata.
- Keep the 3K laminate download classified as a specification guide until matching product evidence supports a formal TDS.
