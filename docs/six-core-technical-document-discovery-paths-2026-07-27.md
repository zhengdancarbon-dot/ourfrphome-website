# Six-Core Technical Document Discovery Paths

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

## Objective

Make the verified six-core document library discoverable from the main buyer,
engineering and AI-readable surfaces without changing any public URL or
duplicating a keyword landing page.

## Changes

The stable `/technical-resources` hub is now connected from:

1. `/products` through the visible `Download TDS` procurement CTA;
2. `/technical-center` through a visible `Browse verified technical documents`
   engineering-document CTA; and
3. `/llms.txt` as `Verified Technical Documents`, with a clear description of
   the reviewed TDS and specification scope.

The Footer link remains active. Commercial product URLs, Technical Center
article URLs, metadata, canonical tags and localized routes are unchanged.

## Automated controls

The production audit now blocks a release when:

- the Products CTA is missing or does not use `/technical-resources`;
- the Technical Center document CTA is missing or uses the wrong URL; or
- the AI-readable primary-page entry is absent from `/llms.txt`.

## Verification

- `pnpm lint`: PASS with zero project errors; three existing warnings remain in
  an unrelated Morocco output script.
- `pnpm build`: PASS, including TypeScript; 219 routes generated.
- Production-mode SEO audit: PASS.
  - sitemap URLs: 210
  - checked pages: 210/210
  - internal resources: 351
  - priority document hub entry points: 3/3
  - priority documents: 9/9
  - negative 404 checks: 3/3
- Browser QA:
  - Products desktop 1440 x 900: `Download TDS` is visible and resolves to
    `/technical-resources`;
  - Technical Center desktop 1440 x 900: the verified-document CTA is visible
    and resolves to `/technical-resources`;
  - Technical Center mobile 390 x 844: CTA width remains within the viewport,
    with no text or page overflow;
  - no browser console errors.

## Release status

Vercel Preview:

- URL: `https://ourfrphome-website-b9b0tn95t-zhendgan.vercel.app`
- Deployment: `dpl_D5JZBc6FMHQsY7zfy1CqaYH5tUSW`
- State: `READY`
- Vercel build: PASS, including TypeScript and all 219 generated routes.

The change remains on the recovery branch only. It has not been merged to
`main`, deployed to production or submitted to Google, Yandex or IndexNow.
