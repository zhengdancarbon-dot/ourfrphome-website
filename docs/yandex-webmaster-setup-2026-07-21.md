# Yandex Webmaster Setup

Date: 2026-07-21

Production domain: `https://www.myfrphome.com`

## Current Status

- Production homepage: HTTP 200.
- Production robots: HTTP 200 and references `https://www.myfrphome.com/sitemap.xml`.
- Production sitemap: HTTP 200 with 205 URLs after the current content releases.
- IndexNow key file: HTTP 200 at `/indexnow-key.txt`.
- IndexNow submission: HTTP 200 accepted for the two new technical guides and their two related product pages.
- Yandex Webmaster account: blocked at Yandex ID login. No account binding or OAuth grant was performed without confirmation.

## Verification Support

The site now supports the optional production environment variable:

`YANDEX_VERIFICATION_CODE`

When configured in Vercel Production, Next.js outputs:

`<meta name="yandex-verification" content="...">`

The value must remain configured after verification because Yandex checks ownership periodically.

## Remaining Account-Side Actions

1. Log in to Yandex ID or explicitly approve Google-to-Yandex account binding.
2. Add exactly `https://www.myfrphome.com` in Yandex Webmaster.
3. Copy the Yandex verification code into Vercel Production as `YANDEX_VERIFICATION_CODE`.
4. Redeploy and confirm the live meta tag without exposing the code in reports.
5. Complete ownership verification.
6. Submit `https://www.myfrphome.com/sitemap.xml` on the Sitemap files page.
7. Add `/products/` and `/technical-center/` as monitored site sections after crawl data appears.
8. Use Reindex pages only for the homepage and genuinely new or updated priority URLs.

## Monitoring

- Check crawl statistics, searchable pages, excluded pages and optimization advice weekly.
- Do not repeatedly delete and re-add the sitemap. Yandex rechecks an existing sitemap automatically.
- Continue IndexNow only for URLs that are added, updated or deleted.
- Compare Yandex queries and landing pages for the five priority product clusters once data is available.
