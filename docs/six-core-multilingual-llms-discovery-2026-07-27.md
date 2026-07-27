# Six-Core Multilingual LLM Discovery

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

## Objective

Expose the six priority commercial products in every published language through
`/llms.txt`, using the same translated names, descriptions and stable localized
URLs that buyers see on the website.

## Change

Replaced the Russian-only priority block with generated sections for:

- Español
- Português BR
- Русский
- العربية
- Français
- 한국어
- Polski
- Türkçe

Each section contains exactly six commercial links in the shared priority
order:

1. Carbon Fiber Multiaxial NCF Fabric
2. 3K Carbon Fiber Laminate Sheet
3. Carbon Fiber Yarn & Tow
4. UD Carbon Fiber Fabric
5. Carbon Fiber Structural Strengthening System
6. Woven Carbon Fiber Fabric

The link names and descriptions are read from the existing localized product
content. No second translation store, new route, English fallback page or
keyword-only landing page was added.

## Automated controls

The production audit now requires:

- eight localized priority section headings;
- one and only one canonical localized URL for every product and locale;
- 48 successful localized priority links in total; and
- a non-empty localized link title that is not an exact English product-name
  fallback.

## Verification

- `pnpm lint`: PASS with zero project errors; three existing warnings remain in
  an unrelated ignored Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - locales: EN 58; each localized language 19
  - internal resources: 351
  - priority product pages: 6/6
  - technical articles: 24/24
  - localized video pages: 45/45
  - product-and-guide discovery links: 24/24
  - localized `llms.txt` priority links: 48/48
  - localized Products directories: 8/8
  - negative 404 checks: 3/3

## Claim and release boundaries

The generated entries reuse reviewed website copy. No certification,
authorization, capacity, price, inventory, customer case, rating, review or new
performance claim was introduced. Public URLs, metadata, canonical and
hreflang remain unchanged.

Vercel Preview:

- URL: `https://ourfrphome-website-knmivxkuq-zhendgan.vercel.app`
- Deployment: `dpl_2B3gmp46ay9rCajivCVzhVgYoWng`
- State: `READY`
- Vercel build: PASS, including TypeScript and all 219 generated routes.

The change remains on the recovery branch only. It has not been merged to
`main`, deployed to production or submitted to Google, Yandex or IndexNow.
