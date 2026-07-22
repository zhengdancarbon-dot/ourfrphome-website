# FRP HOME Five-Core SEO / GEO Execution Log

Date: 2026-07-21

Production: `https://www.myfrphome.com`

Authoritative plan: `docs/five-core-seo-geo-90-day-master-plan-2026-07-21.md`

## Verified Production Baseline

- Sitemap: 205 URLs.
- Locale distribution: 53 English URLs and 19 URLs for each of ES, PT-BR, RU, AR, FR, KO, PL and TR.
- Production crawl: 205 pages, 340 internal resources and three required negative routes; status PASS.
- Google Search Console export, last three months: 4 clicks, 1.36K impressions, 0.3% CTR and average position 53.2.
- GA4 tag: present in production HTML.
- Google verification: present in production HTML.
- Bing verification: present in production HTML.
- IndexNow key: present and publicly verifiable at the protocol key route.
- Yandex verification: missing until a Yandex Webmaster property is created and supplies the verification code.
- RFQ route: live; an empty validation request returns HTTP 400 with the existing response shape and does not send email.

## Priority Search Baseline

| Cluster | Primary URL | Impressions | CTR | Average position | Current action |
| --- | --- | ---: | ---: | ---: | --- |
| Multiaxial NCF | `/products/carbon-fiber-multiaxial-ncf-fabric` | 23 | 0% | 48.48 | Preserve metadata; build source-backed NCF authority |
| 3K laminate sheet | `/products/3k-carbon-fiber-laminate-sheet` | 5 | 0% | 29.40 | Preserve metadata; strengthen RFQ and CNC intent |
| Yarn & Tow | `/products/carbon-fiber-yarn-and-tow` | 51 | 0% | 39.41 | Query-aligned metadata and tow guide published |
| Strengthening system | `/products/structural-strengthening-system` | 20 | 0% | 23.40 | Strengthening title refined; retain system intent |
| Strengthening UD | `/products/carbon-fiber-ud-fabric` | 1 | 0% | 7.00 | Keep stable; sample is too small for title experiments |
| 3K woven fabric | `/products/carbon-fiber-woven-fabric` | 201 | 0% | 47.06 | Query-aligned metadata and 200gsm RFQ guide published |

Search volume is not estimated. Values above are direct GSC observations.

## Work Completed

1. Published `Carbon Fiber Tow Size Guide: 1K to 50K` with Product, TDS and RFQ links.
2. Published `3K 200gsm Carbon Fiber Fabric Selection and RFQ Guide` with verified 3K 200gsm TDS context.
3. Refined overlong UD and strengthening metadata without changing URLs.
4. Removed unsupported generic pultruded-plate numerical properties from the strengthening page.
5. Added source review information to the CFRP plate versus fabric strengthening guide.
6. Verified that each priority product receives contextual internal links from Home, Products, Technical Center and relevant application/guide pages.
7. Submitted genuinely changed URLs through IndexNow; the API accepted both batches with HTTP 200.
8. Added Yandex verification metadata support without inventing a verification code.
9. Set accurate sitemap `lastmod` values only for pages with significant verified changes.
10. Added `source_page` to GA4 RFQ, TDS, catalog, email and WhatsApp events while preserving locale and product/document parameters.
11. Promoted the six priority product URLs and nine verified TDS/SPEC documents near the top of `llms.txt` for clearer AI retrieval and source attribution.
12. Completed a five-core SERP and authority-gap review and created a manually reviewed outreach queue that excludes suspicious mirror sites and mass directories.
13. Added natural Russian procurement questions for Yandex visibility monitoring while retaining end-use and trade-compliance review.
14. Generated 162 tracked outreach URLs covering six priority landing pages, nine languages and email, LinkedIn and WhatsApp channels without changing canonical URLs.
15. Reworked the six Russian priority pages around natural Yandex procurement terminology such as `углеродный жгут`, `углепластиковая плита`, `ЧПУ`, `углепластиковая ламель` and `саржевая ткань`, while preserving technical tokens and claim boundaries.
16. Limited localized sitemap modification dates to pages and locales with a verified content change; other localized entries now omit unverified dates.
17. Added a truthful `Product` entity inside each English and localized product `ItemPage` JSON-LD graph. The entity includes only visible product identity data and omits `Offer`, price, stock, reviews and ratings. The 205-page SEO audit now fails if a product detail page is missing this entity.

## Rendered QA

- Desktop Yarn & Tow page: correct title/H1, hero image, zoom interaction and no console errors.
- Mobile `390x844`: no horizontal overflow; menu opens in the fresh production build; product hero and CTAs remain readable.
- Spanish Contact at `390x844`: localized title/H1, `locale=es`, `sourcePage=/es/contact`, one RFQ form and no console errors.
- `pnpm lint`: zero errors; three pre-existing warnings in an unrelated Morocco output script.
- `pnpm build`: PASS; 214 static pages generated.

## Search Engine Status

### Google

- Existing sitemap property is healthy.
- The new guides are present in the production sitemap with real modification dates.
- Do not repeatedly request indexing. Use one URL Inspection request only if a new URL remains unindexed after seven days.
- Review title/meta only when a page has been indexed for 14 days or reaches 50 impressions.

### Yandex

- IndexNow discovery is active and accepted the newly updated URLs.
- Webmaster account connection is pending because no Yandex ID is signed in.
- Required next account-side actions: add the exact HTTPS property, copy its verification code to Vercel as `YANDEX_VERIFICATION_CODE`, redeploy, verify ownership and submit the production sitemap once.
- Keep the verification meta tag after approval because ownership may be checked again.

## Next Data-Driven Actions

1. Monitor the two new guides for indexing and query impressions for seven days.
2. Re-export GSC page/query data before further title changes.
3. Use GA4 Explore to break down the five conversion events by `locale`, `source_page` and product/document parameters.
4. Complete Yandex Webmaster verification when an authenticated account is available.
5. Continue source-backed NCF, 3K sheet, Yarn & Tow, strengthening and 3K woven content only when it answers a distinct procurement question.
6. Review the first nine authority opportunities; no Russia-related contact proceeds without counterparty, destination, final-use and applicable trade-compliance approval.

No ranking, traffic or inquiry count is guaranteed. Success is measured by index coverage, qualified non-brand impressions, position movement, clicks, downloads and RFQs.
