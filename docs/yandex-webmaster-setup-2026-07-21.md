# Yandex Webmaster Setup

Last updated: 2026-07-22

Production domain: `https://www.myfrphome.com`

## Current Status

- Production homepage: HTTP 200.
- Production robots: HTTP 200 and references `https://www.myfrphome.com/sitemap.xml`.
- Production sitemap: HTTP 200 with 205 URLs after the current content releases.
- IndexNow key file: HTTP 200 at `/indexnow-key.txt`.
- Latest IndexNow submission: HTTP 200 accepted for 12 genuinely updated English and Russian priority-product URLs on 2026-07-22.
- Yandex Webmaster account: blocked at Yandex ID login. No account binding or OAuth grant was performed without confirmation.
- Yandex Metrica support: code-ready through `YANDEX_METRICA_ID`; no counter is loaded until a real numeric tag ID is configured.

## Verification Support

The site now supports the optional production environment variable:

`YANDEX_VERIFICATION_CODE`

When configured in Vercel Production, Next.js outputs:

`<meta name="yandex-verification" content="...">`

The value must remain configured after verification because Yandex checks ownership periodically.

## Yandex Metrica Support

The site also supports the optional production environment variable:

`YANDEX_METRICA_ID`

When a numeric tag ID is configured, the tag loads on every page with outbound-link tracking, click maps and accurate bounce tracking. Session Replay (`webvisor`) remains disabled by default. The existing conversion layer sends these goal IDs to both GA4 and Yandex Metrica:

- `rfq_submit`
- `tds_download`
- `catalog_download`
- `email_click`
- `whatsapp_click`

Create five matching JavaScript-event goals in Yandex Metrica. Event parameters retain `locale`, `source_page`, and the available product or document fields. Use `?_ym_debug=2` for a controlled browser verification after the counter is live.

## Remaining Account-Side Actions

1. Log in to Yandex ID or explicitly approve Google-to-Yandex account binding.
2. Add exactly `https://www.myfrphome.com` in Yandex Webmaster.
3. Copy the Yandex verification code into Vercel Production as `YANDEX_VERIFICATION_CODE`.
4. Redeploy and confirm the live meta tag without exposing the code in reports.
5. Complete ownership verification.
6. Submit `https://www.myfrphome.com/sitemap.xml` on the Sitemap files page.
7. Create one Yandex Metrica tag for `myfrphome.com`, configure its numeric ID as `YANDEX_METRICA_ID`, and redeploy.
8. Create the five JavaScript-event goals listed above and validate them with `?_ym_debug=2`.
9. Add `/products/` and `/technical-center/` as monitored site sections after crawl data appears.
10. Use Reindex pages only for the homepage and genuinely new or updated priority URLs.

## Monitoring

- Check crawl statistics, searchable pages, excluded pages and optimization advice weekly.
- Do not repeatedly delete and re-add the sitemap. Yandex rechecks an existing sitemap automatically.
- Continue IndexNow only for URLs that are added, updated or deleted.
- Compare Yandex queries and landing pages for the five priority product clusters once data is available.
