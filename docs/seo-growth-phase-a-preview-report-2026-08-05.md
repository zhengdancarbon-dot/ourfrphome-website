# SEO Growth Phase A Preview Report

Date: 2026-08-05

## Deployment

- Branch: `codex/seo-growth-phase-1-20260805`
- Preview: `https://ourfrphome-website-jy2xdeksy-zhendgan.vercel.app`
- Vercel status: Ready
- Production: not deployed, not merged to `main`

## Commits in scope

- `85d8862` Render locale lang and direction on server
- `ae0fd4a` Add SEO measurement and audit foundation

## Verification

- `pnpm lint`: passed with three pre-existing warnings in an untracked local output-work script; no lint errors in committed project files.
- `pnpm typecheck`: passed.
- `pnpm build`: passed locally and in Vercel; 276 static pages generated.
- `pnpm analytics:audit`: passed.
- `pnpm seo:audit:content`: passed; 16 public products are registered and 13 candidate specifications remain draft-only.
- `pnpm seo:audit:locales`: passed; 267 URLs and 12 locale roots checked, including Arabic RTL and negative 404 routes.
- `pnpm seo:audit:schema`: passed; 137 product pages checked.
- `pnpm seo:audit:local`: passed; 267 URLs, 441 internal resources, localized video/PDF resources, `lang`/`dir`, canonicals, hreflang, sitemap and noindex internal guide were checked.
- `pnpm seo:data:import` and `pnpm seo:report`: completed with zero imported data rows. The report is intentionally marked unavailable rather than inventing metrics.

## Preview environment status

- Present: `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL`, contact configuration and `GSC_VERIFICATION_CODE`.
- Not listed for Preview: GA4 measurement configuration and Yandex Metrica configuration. This does not block HTML/RFQ delivery verification, but it blocks Preview analytics event receipt verification.
- Secret values were not read or printed.

## Remaining preview QA

- Vercel reports the deployment Ready. This execution environment timed out when directly opening the Vercel preview hostname, so the remote rendered-page crawl and visual browser test need confirmation in a normal browser.
- Check English, Ukrainian, Vietnamese, Thai and Arabic home/Product/Contact/Catalog pages at desktop and mobile widths. Confirm header language switching, Arabic RTL, RFQ view/start/submit, TDS download and visible contrast.
- Do not submit a production RFQ test in this phase. Preview RFQ delivery may be checked after the recipient confirms test-email handling.

## Rollback

- Keep this branch unmerged until preview review is accepted.
- If rejected, remove the Preview deployment or redeploy the previous approved deployment; no database migration, API response contract change or production environment-variable change is part of Phase A.
