# Search Engine Submission Task Summary

> Historical record: this submission was completed before the nine-language release. The production sitemap now contains 171 URLs and requires a fresh account-side processing confirmation.

Date: 2026-07-13

Production site: https://www.myfrphome.com

Scope: Google Search Console and Bing Webmaster Tools submission operations

## Completed Tasks

### Google Search Console

- Confirmed the `myfrphome.com` property is accessible in Google Search Console.
- Resubmitted the production sitemap:
  - `https://www.myfrphome.com/sitemap.xml`
- Confirmed the submission success message.
- Confirmed the sitemap status is `Success`.
- Confirmed Google reported:
  - Submitted: July 13, 2026
  - Last read: July 13, 2026
  - Discovered pages: 75
  - Discovered videos: 0
- Inspected the Spanish homepage:
  - `https://www.myfrphome.com/es/`
  - Result: `URL is on Google`
  - Page indexing status: indexed
- Inspected the Brazilian Portuguese homepage:
  - `https://www.myfrphome.com/pt-br/`
  - Result: `URL is not on Google`
  - Page indexing status: `URL is unknown to Google`

### Bing Webmaster Tools

- Signed in to Bing Webmaster Tools using the existing Google account login flow.
- Confirmed the selected website is `www.myfrphome.com`.
- Resubmitted the HTTPS production sitemap:
  - `https://www.myfrphome.com/sitemap.xml`
- Confirmed Bing reported:
  - Last submitted: July 13, 2026
  - Status immediately after submission: `Processing`
  - URLs discovered: 75
- Confirmed there were no sitemap errors or warnings before the new processing cycle.
- Left the older HTTP sitemap entry unchanged because deleting it was outside this task's approved scope.

## Incomplete or Deferred Tasks

Google returned the following temporary error when `Request Indexing` was attempted:

> We had a problem submitting your indexing request. Please try again later.

To avoid repeated failures or an indexing-request quota restriction, the remaining priority URLs were not submitted in rapid succession.

Retry after approximately 24 hours:

- `https://www.myfrphome.com/pt-br/`
- `https://www.myfrphome.com/es/products/carbon-fiber-woven-fabric`
- `https://www.myfrphome.com/pt-br/products/carbon-fiber-woven-fabric`
- `https://www.myfrphome.com/es/products/carbon-fiber-yarn-and-tow`
- `https://www.myfrphome.com/pt-br/products/carbon-fiber-yarn-and-tow`
- `https://www.myfrphome.com/es/contact`
- `https://www.myfrphome.com/pt-br/contact`

The Spanish homepage does not require urgent resubmission because Google already reports it as indexed.

## Files Involved

### Created by This Task

- `docs/search-engine-submission-summary-2026-07-13.md`

### Existing Files Referenced or Continued by This Task

- `app/sitemap.ts` - generates the live production sitemap submitted to Google and Bing.
- `app/robots.ts` - provides the production sitemap reference to search crawlers.
- `docs/post-i18n-search-submission-checklist-2026-07-05.md` - existing multilingual search submission checklist.
- `docs/seo-geo-promotion-run-2026-07-13.md` - current SEO/GEO promotion run record.
- `docs/sales-utm-url-pack-2026-07-13.md` - human-readable sales UTM link package.
- `docs/sales-utm-url-pack-2026-07-13.csv` - structured sales UTM link package.
- `docs/inquiry-tracking-template-2026-07-05.xlsx` - inquiry tracking workbook for recording valid leads.

## Source Code and Deployment Impact

- No website source files were modified by the search-engine submission operation.
- No URL structure, page slug, metadata, translated content, RFQ behavior, or structured data was changed.
- No production deployment was performed as part of this task.
- The only repository change is this operational summary document.

## Next Check

1. Recheck Bing sitemap processing status after it completes.
2. Retry Google `Request Indexing` after the temporary failure or quota window clears.
3. Record each successfully submitted priority URL and its Google indexing status.
4. Continue weekly EN, ES, and PT-BR indexing and performance monitoring.
