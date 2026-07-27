# Strengthening Material Selection And Multilingual Links

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Production status: unchanged

Preview: `https://ourfrphome-website-cjohwgmq7-zhendgan.vercel.app`

Vercel deployment: `dpl_41WWcY4tXFn4HXErTM6pFHffMMqx` (`READY`, Preview)

## Purpose

Improve search usefulness and RFQ preparation for two priority strengthening products without changing their URLs, titles, metadata or the RFQ API:

- `/products/carbon-fiber-ud-fabric`
- `/products/structural-strengthening-system`

The work updates the existing comparison guide and strengthens the internal-link cluster from the structural-strengthening application pages.

## Primary Documents Reviewed

- `public/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf`
- `public/downloads/tds/FRP-HOME-1.2mm-Pultruded-CFRP-Strengthening-Plate-TDS.pdf`

Both PDFs were text-extracted and visually rendered before use. The updated content is limited to facts stated in those documents.

### UD Fabric Evidence

- Product code `FRPH-UD300`.
- 300 g/m² unidirectional dry reinforcement.
- 0.167 mm nominal dry-fabric thickness.
- 100-500 mm width.
- T300, T700 or alternate grade only by confirmed order and matching document review.
- Mechanical performance remains system-dependent; fiber, resin, cure and test method require confirmation.

### Pultruded Plate Evidence

- FRP HOME code `FRPH-CFRP-PLATE-1.2`; archived source model `ZCP1.2`.
- 1.2 mm nominal pultruded CFRP strengthening plate.
- Width, length and tolerances remain quotation items.
- 2620 MPa tensile strength, 165 GPa modulus, 1.7% elongation, greater than 68% fiber volume and 1.6 g/cm³ density are retained only as typical source-model values.
- The source did not state test methods. These values are not presented as project design allowables, order guarantees or batch values.

## Website Changes

- Refined `/technical-center/cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening` with a source-backed comparison, selection logic, RFQ fields and five FAQs.
- Preserved the existing article title, description and URL because the current metadata review threshold has not been met.
- Set the real technical review date to `2026-07-27`.
- Added a Buyer Guides section to `/applications/structural-strengthening` and all eight localized versions.
- The localized links explicitly identify the English-language destination with `hreflang="en"`.
- Limited the strengthening cluster to three relevant guides:
  - CFRP Plate vs Carbon Fiber Fabric for Structural Strengthening
  - CFRP Strengthening Material RFQ Checklist
  - UD Carbon Fiber Fabric vs Woven Carbon Fiber Fabric
- Updated only the affected application `lastModified` values. The sitemap route count did not change.

## Verification

| Check | Result |
| --- | --- |
| `git diff --check` | Pass |
| `pnpm lint` | Pass, zero project errors |
| `pnpm build` | Pass, 216 generated pages |
| Full local SEO audit | Pass, 207/207 sitemap pages |
| Internal resources | 346 checked |
| Locales | EN 55; each localized language 19 |
| Application guide links | 9/9 pages, three relevant links each |
| Unrelated NCF guide exclusion | Pass |
| Article source tokens and PDF links | Pass |
| Sitemap count and affected `lastModified` | Pass |
| Desktop 1440 x 900 | No page overflow or console errors |
| Mobile 390 x 844 | No page overflow or console errors |
| Arabic | `lang="ar"`, `dir="rtl"`, correct guide links |
| Wide tables on mobile | Scroll only inside `.table-wrap` |
| Vercel Preview build | Pass, 216 generated pages, `READY` |

## Release Boundaries

- Production has not been changed.
- Complete a normal-browser review of the fresh Preview before requesting production approval.
- Do not request indexing until an approved production deployment materially updates the live pages.
- Do not use the plate source-model values as project design values or marketing guarantees.
- Structural design, substrate acceptance, adhesive compatibility, anchorage and installation remain the responsibility of qualified project parties.
- Continue to apply the 14 indexed days or 50 impressions threshold before changing metadata.
