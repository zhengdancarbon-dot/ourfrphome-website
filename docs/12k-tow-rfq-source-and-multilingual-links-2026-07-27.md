# 12K Tow RFQ Source And Multilingual Links

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: unchanged

Preview: `https://ourfrphome-website-67il75qac-zhendgan.vercel.app`

Vercel deployment: `dpl_71kwWUrRNLL6sbuVXEaW47reiDWS` (`READY`, Preview)

## Purpose

Strengthen the existing transactional buyer guide for Carbon Fiber Yarn & Tow without creating a competing URL or changing metadata before the agreed search-data threshold.

Updated guide:

`/technical-center/carbon-fiber-tow-rfq-checklist`

Priority product:

`/products/carbon-fiber-yarn-and-tow`

## Primary Document Reviewed

`public/downloads/tds/FRP-HOME-High-Strength-12K-Carbon-Fiber-Tow-Supply-TDS.pdf`

The PDF was text-extracted and visually rendered before use. Only explicit source-grade data were added to the buyer guide:

- FRP HOME code `FRPH-CF12K55`.
- Supplier-origin source grade `ZDCF 55T-12K`.
- 12K continuous tow.
- 5500 MPa typical tensile strength, 240 GPa typical modulus and 2.2% typical elongation to GB/T 3362-2017.
- 1.80 g/cm³ typical density to GB/T 30019-2013.
- 800 g/km typical linear density to GB/T 3362-2017.
- Epoxy sizing and untwisted construction by supplier declaration.
- Nominal 4 kg bobbin for the standard source package.

## Evidence Boundaries

- The values are supplier-origin references for the identified source grade, not a batch certificate or finished-laminate design allowables.
- The TDS does not imply FRP HOME manufacture, official brand authorization, stock or batch availability.
- Other tow sizes remain inquiry options only and require a confirmed source, availability and matching documentation.
- The exact grade, sizing, package, process, destination, end user and final application remain RFQ fields.

## Website Changes

- Preserved the existing article title, description, slug and canonical URL.
- Added source-backed comparison fields, specifications, RFQ requirements and two evidence-boundary FAQs.
- Updated the real technical review date to `2026-07-27`.
- Kept 1K, 3K, 6K, 24K, 48K and 50K as separately confirmed source options rather than availability claims.
- Updated the English Yarn & Tow product `lastModified` because the related-guide order changed.
- The updated Tow RFQ guide is now the first related guide on EN, ES, PT-BR, RU, AR, FR, KO, PL and TR Yarn & Tow product pages.
- The localized product links continue to mark the destination as English with `hreflang="en"`.

## Verification

| Check | Result |
| --- | --- |
| `git diff --check` | Pass |
| `pnpm lint` | Pass, zero project errors |
| `pnpm build` | Pass, 216 generated pages |
| Full local SEO audit | Pass, 207/207 sitemap pages |
| Internal resources | 346 checked |
| Yarn & Tow product pages | 9/9 return 200 |
| Tow RFQ guide position | First related guide on 9/9 product pages |
| Localized `hreflang="en"` | Pass |
| Article source tokens and TDS download | Pass |
| Article `dateModified` | `2026-07-27` |
| Sitemap count and affected `lastModified` | Pass |
| Desktop 1440 x 900 | No page overflow or console errors |
| Mobile 390 x 844 | No page overflow or console errors |
| Arabic | `lang="ar"`, `dir="rtl"`, correct first guide |
| Wide tables on mobile | Scroll only inside `.table-wrap` |
| Vercel Preview build | Pass, 216 generated pages, `READY` |

## Release Boundary

- Production has not been changed.
- Complete a normal-browser review of the fresh Preview before requesting production approval.
- Request one recrawl only after an approved production deployment.
- Keep the article metadata stable until it reaches 14 indexed days or 50 impressions, then review the actual GSC/Yandex queries before making changes.
- Confirm source grade, authorization status, batch documents and compliance before every commercial commitment.
