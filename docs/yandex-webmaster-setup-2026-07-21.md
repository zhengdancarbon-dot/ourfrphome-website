# Yandex Webmaster Setup

Last updated: 2026-07-22

Production domain: `https://www.myfrphome.com`

## Current Status

- Production homepage: HTTP 200.
- Production robots: HTTP 200 and references `https://www.myfrphome.com/sitemap.xml`.
- Production sitemap: HTTP 200 with 207 URLs after the current content releases.
- IndexNow key file: HTTP 200 at `/indexnow-key.txt`.
- IndexNow on 2026-07-22: two HTTP 200 batches accepted 22 update notifications covering 20 unique genuinely changed URLs; the English and Russian strengthening URLs appeared in both batches because the TDS was added after their first submission.
- Later evidence-alignment and source-citation releases were accepted in additional HTTP 200 IndexNow batches of 25 and 6 changed URLs. No unchanged bulk sitemap submission was sent through IndexNow.
- Yandex Webmaster property: ownership verified for exactly `https://www.myfrphome.com` on 2026-07-22.
- Production verification meta: PRESENT and matched the Yandex-provided value after a Vercel Production redeploy. The sensitive value is not recorded in this report.
- Yandex sitemap submission: `https://www.myfrphome.com/sitemap.xml` was accepted on 2026-07-22 and is in the `Processing queue` with 207 production URLs.
- Yandex Metrica support: code-ready through `YANDEX_METRICA_ID`; no counter is loaded until a real numeric tag ID is configured.
- No Yandex index count is reported yet. The newly verified property and sitemap have not completed their first processing window, and public `site:` results are not used as an index-count substitute.

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

## Completed Account-Side Actions

1. Logged in to Yandex ID with the user's approval.
2. Added exactly `https://www.myfrphome.com` in Yandex Webmaster.
3. Configured `YANDEX_VERIFICATION_CODE` in Vercel Production without exposing its value.
4. Redeployed and confirmed the live verification meta.
5. Completed ownership verification.
6. Submitted `https://www.myfrphome.com/sitemap.xml`; Yandex placed it in the processing queue.

## Remaining Account-Side Actions

1. Wait for the initial sitemap processing window, then record searchable pages, excluded pages, crawl statistics and recommendations from the verified property.
2. Create one Yandex Metrica tag for `myfrphome.com`, configure its numeric ID as `YANDEX_METRICA_ID`, and redeploy only after the real counter ID is available.
3. Create the five JavaScript-event goals listed above and validate them with `?_ym_debug=2`.
4. Add `/products/` and `/technical-center/` as monitored site sections after crawl data appears.
5. Use Reindex pages only for genuinely new or updated priority URLs. The current priority updates were already accepted through IndexNow and should not be resubmitted unchanged.
6. Import `docs/yandex-russian-priority-query-import-2026-07-22.txt` into a Saved query group when query-group controls become available. It contains 51 P1 queries; the full 72-query routing map is `docs/yandex-russian-keyword-map-2026-07-22.csv`.

## Monitoring

- Check crawl statistics, searchable pages, excluded pages and optimization advice weekly.
- Do not repeatedly delete and re-add the sitemap. Yandex rechecks an existing sitemap automatically.
- Yandex states that a newly added or refreshed sitemap can take up to two weeks to process. Do not diagnose a failure from the first few days alone.
- Add the property exactly as `https://www.myfrphome.com`; protocol and `www` form must match the final search URL.
- Continue IndexNow only for URLs that are added, updated or deleted.
- Compare Yandex queries and landing pages for the five priority product clusters once data is available.
- Use Yandex query demand only after account data is available. The local keyword map intentionally contains no invented search volume.

## Official References

- [Getting started and exact site URL](https://yandex.com/support/webmaster/en/service/quick-start)
- [Verifying site rights](https://yandex.com/support/webmaster/en/service/rights)
- [Sitemap files](https://yandex.com/support/webmaster/en/indexing-options/sitemap)
- [Important page monitoring](https://yandex.com/support/webmaster/en/service/tracking-url)
- [Search query monitoring](https://yandex.com/support/webmaster/en/service/popular-queries)
- [Managing query groups](https://yandex.com/support/webmaster/en/service/search-queries)
- [JavaScript event goals](https://yandex.com/support/metrica/en/general/goal-js-event)
