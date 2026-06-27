# Domain and Brand Consistency Report

Generated: 2026-06-27

## Final Standard

| Item | Final wording |
| --- | --- |
| Brand | FRP HOME |
| English company name | Zhejiang FRPHome New Material Co., Ltd. |
| Chinese company name | 浙江福昊新材料有限公司 |
| Production domain | https://www.ourfrphome.com |
| Main positioning | Carbon fiber and composite materials supplier |
| Sales email | sales@tzcarbon.com |
| Phone / WhatsApp | +86-13586461443 |
| WhatsApp link | https://wa.me/8613586461443 |

Core product wording:

- Carbon fiber fabric
- UD carbon fiber fabric
- Multiaxial carbon fiber fabric
- Carbon fiber prepreg
- Aramid fabric
- Carbon fiber plates
- Carbon fiber tubes
- CNC carbon fiber parts
- Custom composite materials

## Active Website and Launch Files

Scope checked:

- `app/`
- `components/`
- `lib/`
- `public/`
- `docs/`
- `README.md`
- `PRODUCTION_DEPLOYMENT.md`
- `.env.example`

| Term | Where it appears | Keep or replace | Recommended final wording |
| --- | --- | --- | --- |
| `ourfrphome.com` | `.env.example`, `PRODUCTION_DEPLOYMENT.md`, `lib/site-config.ts`, prior QA docs | Keep | Use only `https://www.ourfrphome.com` for production URLs |
| `tzcarbon.com` | `.env.example`, `PRODUCTION_DEPLOYMENT.md`, `lib/site-config.ts`, `app/api/inquiry/route.ts`, prior QA docs | Keep for email only | `sales@tzcarbon.com`, `website@tzcarbon.com`, and Resend/mail verification notes |
| `FRP HOME` | Site metadata, header/footer, catalog, product copy, reports, README | Keep | `FRP HOME` |
| `Zhejiang FRPHome New Material Co., Ltd.` | `lib/site-config.ts`, `app/layout.tsx`, footer, about page, catalog, README | Keep | `Zhejiang FRPHome New Material Co., Ltd.` |
| `Fuhao` | No active English website/source wording after correction. Chinese `福昊` appears in logo alt and Chinese company text. | Keep Chinese `福昊`; do not use `Zhejiang Fuhao New Materials Co., Ltd.` as the English company name | `Zhejiang FRPHome New Material Co., Ltd. / 浙江福昊新材料有限公司` |
| `Zhengdan` | Only in `docs/old-catalog-content-audit.md` as legacy source branding from the old catalog | Keep only as historical audit context | Mark as legacy source; do not use on production website |
| `Zhonglong` | No active website/source matches found | No action | Do not add |
| `zdcarbonfiber.com` | Only in `docs/old-catalog-content-audit.md` as a legacy-domain warning | Keep only as warning context | Do not use for the FRP HOME production website |
| `carbonzd.com` | Only in `docs/old-catalog-content-audit.md` as a legacy-domain warning | Keep only as warning context | Do not use for the FRP HOME production website |

## Corrections Made

- Updated `PRODUCTION_DEPLOYMENT.md` title from the old project wording to `FRP HOME Production Deployment Checklist`.
- Updated `docs/old-catalog-content-audit.md` contact reconciliation from the legacy website/email to the current FRP HOME details.
- Updated `app/about/page.tsx` metadata and image alt text to use the full English company name.

## Legacy / Output Artifacts

Additional text matches exist in generated or historical working files under:

- `output/`
- `tmp/`
- `.codex-output-work/`

These include old presentation inspections and extracted legacy PDFs with terms such as:

- `Haining Zhengdan Textile Co., Ltd.`
- `Zhejiang Fuhao New Materials Co., Ltd.`
- `www.zdcarbonfiber.com`
- `sales@zdcarbonfiber.com`

Recommendation:

- Treat these files as legacy working artifacts, not current FRP HOME website content.
- Do not upload old `Zhengdan`, `Zhejiang Fuhao New Materials Co., Ltd.`, `zdcarbonfiber.com`, or `carbonzd.com` PDF/PPT output files to the production website unless they are regenerated with the final FRP HOME standard.

## Current Decision

The FRP HOME website should keep:

- `FRP HOME`
- `Zhejiang FRPHome New Material Co., Ltd.`
- `https://www.ourfrphome.com`
- `sales@tzcarbon.com`
- `tel:+8613586461443`
- `https://wa.me/8613586461443`

The FRP HOME website should not use:

- `https://www.zdcarbonfiber.com`
- `carbonzd.com`
- `Zhengdan` as current branding
- `Zhonglong`
- `Zhejiang Fuhao New Materials Co., Ltd.` as the English company name
