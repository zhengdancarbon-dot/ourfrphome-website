# Production Release Verification

Date: 2026-07-30  
Production domain: `https://www.myfrphome.com`  
Source branch: `codex/repository-recovery-20260723`  
Source commit: `94f315b` (documentation-only follow-up to the verified runtime)
Final Vercel deployment: `dpl_Dbe4y895CFLKqJecgJAe7TF4X6yQ`
Deployment URL: `https://ourfrphome-website-8u1azd824-zhendgan.vercel.app`

## Release Result

The verified recovery release was deployed to Vercel Production and aliased to
`https://www.myfrphome.com`.

Vercel completed the production build successfully:

- Next.js compilation passed;
- TypeScript passed;
- 219 routes generated;
- deployment state: `READY`;
- Production alias: `https://www.myfrphome.com`.

The final production deployment refreshed the `INDEXNOW_KEY` runtime
environment after correcting a key mismatch. It did not change public page
content, URLs, metadata or structured data.

## Production Environment Gate

The following Production variables were confirmed present without printing their
values:

- `RESEND_API_KEY`;
- `INQUIRY_TO_EMAIL`;
- `INQUIRY_FROM_EMAIL`;
- `GA4_MEASUREMENT_ID`;
- `GSC_VERIFICATION_CODE`;
- `BING_VERIFICATION_CODE`.

## Production Smoke Test

The production sitemap now contains 210 URLs. This replaces the older 207-URL
production version that was missing the affected video SEO output.

The following routes returned HTTP 200:

- `/`;
- `/products`;
- `/catalog`;
- `/contact`;
- `/applications`;
- `/technical-center`;
- `/compliance-end-use-review`;
- the English NCF, Yarn & Tow and Woven Fabric priority pages;
- sampled Arabic, Spanish and Brazilian Portuguese priority product pages.

`/en/` returns a normal trailing-slash 308 to `/en`, and `/en` returns HTTP 404.
The unpublished English locale route remains unavailable as required.

`robots.txt` serves the production sitemap reference:

`https://www.myfrphome.com/sitemap.xml`

## Video and International SEO Verification

Production now exposes a video element, poster and `VideoObject` on the sampled
English NCF, Yarn & Tow and Woven Fabric pages, plus the sampled Arabic NCF
page. The production NCF page also exposes all 10 alternate links:

- English;
- eight published localized pages;
- `x-default` to the English root route.

All sampled canonical links are self-referencing production URLs.

## Local Release Verification Before Deployment

- `pnpm lint`: passed with 0 errors and three unrelated existing warnings in an
  untracked generator workspace;
- `pnpm build`: passed with TypeScript and 219 generated routes;
- `pnpm seo:audit http://127.0.0.1:3112`: passed all 210 sitemap pages, 351
  internal resources, 54 priority document-and-guide schema pages and 45
  localized video pages;
- desktop NCF and Arabic RTL mobile checks passed without horizontal overflow
  or browser console errors;
- Arabic mobile menu opened and closed with the correct accessible state.

## Post-Launch Operations

The 27 materially updated NCF, Yarn & Tow and Woven Fabric language pages were
submitted through IndexNow after the final deployment. The endpoint accepted
the batch with HTTP 200. This supplies a timely update notification to
IndexNow-supported engines such as Bing and Yandex; it is not a substitute for
Google sitemap discovery.

1. Submit the updated sitemap once in Google Search Console, Bing Webmaster
   Tools and Yandex Webmaster.
2. Request a recrawl only for the homepage and the three materially updated
   priority video pages; do not request indexing repeatedly.
3. Monitor Vercel logs and inquiry delivery for the first 24 hours.
4. Re-export GSC, Bing, Yandex and GA4 data after the post-release observation
   window. Continue the 14-indexed-days / 50-impressions rule before changing
   titles or meta descriptions.
5. Keep the existing URL, canonical, hreflang and compliance language stable.

## Same-Day Production Recheck

After the final IndexNow notification, the live production site was audited
again from the production domain:

- `pnpm seo:audit https://www.myfrphome.com`: passed;
- `pnpm analytics:audit`: passed; TDS, catalog, email and WhatsApp events
  retain approved UTM values plus Google, Bing and Yandex click identifiers;
- the live XML sitemap still exposes 210 URLs;
- the homepage, NCF, 3K laminate sheet, Yarn & Tow, Spanish NCF and Russian
  Yarn & Tow routes each returned HTTP 200.

The deployment is therefore operationally stable. Google Search Console
sitemap submission remains a separate logged-in console action; it must use
the existing `sitemap.xml` entry and does not require individual submission of
the 210 URLs.

## Civil-Use Copy Release

The small terminology correction at commit `02ecd03` was released to Vercel
Production as deployment `dpl_48njZajpw2dck9U82ySLh5tMK3g4`. It aliases
`https://www.myfrphome.com` and is `READY`.

Production checks confirmed that the 3K laminate sheet, custom carbon-fiber
products and civil-UAV application routes return the updated civil-use wording
and contain no `FPV`, military, weapon, missile or combat terms. The sitemap
remains at 210 URLs.

## Technical Center Schema Release

The Technical Center collection-schema correction at commit `10d2b6f` was
released to Vercel Production as deployment `dpl_DNLtCkPZ3VmEia3vMXGrA7N9Td5X`.
Vercel reports `READY` and aliases the deployment to
`https://www.myfrphome.com`.

Production verification confirms that `/technical-center` now emits one
`CollectionPage` and one 24-item `ItemList`, with no Article-detail entities
on the hub. A sampled technical article continues to emit its Article Schema.
The sitemap retains 210 URLs and records the Technical Center's real
`2026-07-30` update date.

## Residual Limit

The current execution environment can read the production HTML but its
interactive browser connection timed out against the public domain. This does
not contradict the HTTP, build, sitemap, schema or local responsive checks; a
normal-browser visual pass remains useful during the first operational day.
