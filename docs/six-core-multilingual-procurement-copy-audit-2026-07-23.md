# Six-Core Multilingual Procurement Copy Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

Production deployment: not performed

## Scope

The first multilingual audit found that RU already had product-specific procurement copy for all six priority families, while AR, FR, KO, PL and TR still used generic generated copy for four of them. This release localizes those remaining commercial pages without changing URLs or templates.

Updated product families:

- Carbon Fiber Yarn & Tow
- UD Carbon Fiber Fabric
- Carbon Fiber Structural Strengthening System
- 3K Woven Carbon Fiber Fabric

Updated locales:

- Arabic (`ar`)
- French (`fr`)
- Korean (`ko`)
- Polish (`pl`)
- Turkish (`tr`)

Total updated pages: 20

## Procurement Coverage

| Product family | Localized buyer details | Source-backed document boundary |
| --- | --- | --- |
| Yarn & Tow | Tow size, grade, sizing, package, process, quantity, end use and destination | 12K reference TDS; exact source, grade, sizing and batch require confirmation |
| UD Fabric | Fiber grade, g/m², width, direction, resin process, project and destination | 300gsm UD TDS only |
| Structural Strengthening | Substrate, engineer-selected material form, fabric or plate dimensions, epoxy scope and project documents | 300gsm UD and 1.2 mm pultruded CFRP plate TDS files |
| 3K Woven Fabric | Tow size, plain/twill, g/m², width, roll, resin process and end use | 3K 200gsm twill TDS only |

Technical identifiers including `1K`, `3K`, `6K`, `12K`, `24K`, `50K`, `200gsm`, `300gsm`, `1.2 mm`, `g/m²`, `UD`, `CFRP`, `TDS` and `tow` remain unchanged.

## Verification

| Check | Result |
| --- | --- |
| Updated routes | 20/20 return 200 |
| Localized title and H1 | 20/20 present |
| Self-referencing canonical | 20/20 correct |
| Hreflang | 20/20 expose EN, ES, PT-BR, RU, AR, FR, KO, PL, TR and `x-default` |
| Product / FAQ / Breadcrumb Schema | 20/20 present |
| TDS download count | Yarn 1, UD 1, strengthening 2, woven 1 in each locale |
| Technical values | Expected source-backed values present in all 20 pages |
| Locale semantics | Correct server-rendered `lang`; Arabic uses `dir="rtl"` |
| Sitemap | 207 URLs; all 20 entries carry the real `2026-07-23` modification date |
| Full local SEO audit | 207 pages, 346 internal resources and 3 negative 404 tests passed |
| `pnpm lint` | 0 errors; 3 pre-existing warnings in an untracked Morocco output script |
| `pnpm build` | Passed; TypeScript passed; 216 pages generated |

## Content Guardrails

- No performance value was inferred from a tow size, surface weight or plate thickness.
- No generic product range was presented as an order guarantee.
- Structural design, substrate review, installation and approval remain assigned to qualified project engineers.
- No unsupported certification, authorization, annual capacity, test conclusion, customer case, price, stock, rating or review was added.
- No military, weaponized drone, missile or combat-use wording was added.

## Next Evidence Window

After an approved deployment, allow Google and Yandex to recrawl the materially updated URLs. Metadata changes should follow the established 14 indexed days or 50 impressions rule rather than being adjusted immediately.
