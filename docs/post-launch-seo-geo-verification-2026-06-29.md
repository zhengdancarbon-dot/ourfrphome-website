# Post-launch SEO / GEO verification - 2026-06-29

Production domain: https://www.myfrphome.com

Verification time: 2026-06-29 08:30 CST

## Scope

This report records post-launch checks after production deployment and search setup. No website structure or public content changes were made during this verification pass.

## Production status

- Homepage: `https://www.myfrphome.com/` returns `200`.
- Vercel response: production page served from Vercel with cache hit.
- Key pages checked and returned `200`:
  - `/`
  - `/products`
  - `/applications`
  - `/technical-center`
  - `/contact`
  - `/catalog`
  - `/compliance-end-use-review`
  - `/packaging-shipping`
  - `/processes`
  - `/products/aramid-fabric`
  - `/products/carbon-fiber-yarn-and-tow`

## Redirects

- `http://myfrphome.com` redirects to `https://myfrphome.com/`.
- `http://www.myfrphome.com` redirects to `https://www.myfrphome.com/`.
- `https://myfrphome.com` redirects to `https://www.myfrphome.com/`.

## Robots and sitemap

- `https://www.myfrphome.com/robots.txt` is live.
- Robots file references: `https://www.myfrphome.com/sitemap.xml`.
- `https://www.myfrphome.com/sitemap.xml` is live.
- Sitemap contains 43 `<loc>` URLs.
- Sitemap URLs use `https://www.myfrphome.com`.
- `/catalog` is included in the sitemap.

## Google Search Console

- Domain property: `myfrphome.com`.
- Submitted sitemap: `https://www.myfrphome.com/sitemap.xml`.
- Sitemap status: `Success`.
- Last read: `Jun 29, 2026`.
- Discovered pages: `43`.
- Homepage URL inspection result: `URL is on Google`.
- Homepage page indexing result: `Page is indexed`.
- Homepage HTTPS enhancement: page is served over HTTPS.

## Bing Webmaster Tools

- Site is verified in Bing Webmaster Tools.
- Sitemap was submitted and accepted for processing.
- Bing sitemap record was shown as `http://www.myfrphome.com/sitemap.xml`; the URL redirects to HTTPS and the HTTPS sitemap returns `200`.
- Bing URL Submission quota was `0/day`; retry manual URL submissions after quota resets.
- Bing Site Scan quota was `0 pages`; retry site scan after quota is available.

## Google Analytics 4

- GA4 property/data stream is present for FRP HOME Website.
- Measurement ID observed in GA4 and live page source: `G-MLKR89V5BJ`.
- GA4 Realtime showed live active users during verification, confirming collection is working.

## RFQ and contact conversion

- Production RFQ API test returned `HTTP 200` with `{"ok":true}`.
- Resend delivery path accepted the test request.
- User previously confirmed receiving the test inquiry email.
- Automated Gmail inbox verification was not available because the Gmail connector token returned `token_expired`.
- Contact page includes:
  - `mailto:sales@tzcarbon.com`
  - `tel:+8613586461443`
  - `https://wa.me/8613586461443`
  - File upload field
  - No-JavaScript fallback RFQ form

## SEO / GEO tags and structured data

- Core page canonical URLs point to `https://www.myfrphome.com`.
- Core page OpenGraph URLs point to `https://www.myfrphome.com`.
- Homepage JSON-LD includes `https://www.myfrphome.com/#organization`.
- Homepage JSON-LD includes `https://www.myfrphome.com/#website`.
- Sample product page `/products/aramid-fabric` includes:
  - `Product` schema
  - `FAQPage` schema
  - `BreadcrumbList` schema
- No old-domain hits were found in sampled live HTML for:
  - `ourfrphome.com`
  - `zdcarbonfiber.com`
  - `carbonzd.com`

## Remaining operational tasks

- Wait 24 hours and retry Bing URL Submission for key URLs when quota resets.
- Wait for Bing sitemap processing to finish.
- Wait 48-72 hours for GSC indexing and performance data to stabilize.
- Monitor GA4 traffic and RFQ conversion events.
- Keep claim boundaries strict: do not add certifications, authorization, annual capacity, test reports, or customer cases unless real documents are provided.
