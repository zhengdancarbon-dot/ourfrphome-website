# FRP HOME Six-Core Google / Yandex Export Checklist

Use this checklist once per week. Do not replace missing values with estimates.

## Reporting Window

Record before exporting:

- Export date and local timezone
- Production deployment commit and date
- Current sitemap URL count
- Current Google sitemap last-read date
- Current Yandex sitemap status and last-processing date
- Comparison windows: latest 7 complete days, previous 7 complete days, latest 28 complete days

Partial current-day data must not be compared with complete prior days.

## Google Search Console

Property: `https://www.myfrphome.com/`

Export the Web search performance report for each window:

1. Queries
2. Pages
3. Countries
4. Devices
5. Search appearance, when data exists
6. Dates

Required columns:

- clicks
- impressions
- CTR
- average position

Create one filtered page export for each canonical priority route:

- `/products/carbon-fiber-multiaxial-ncf-fabric`
- `/products/3k-carbon-fiber-laminate-sheet`
- `/products/carbon-fiber-yarn-and-tow`
- `/products/carbon-fiber-ud-fabric`
- `/products/structural-strengthening-system`
- `/products/carbon-fiber-woven-fabric`

For each route, record:

- index status
- last crawl date
- Google-selected canonical
- user-declared canonical
- referring sitemap
- top non-brand queries
- locale/country/device split
- whether the page version predates or postdates the last crawl

Brand-query exclusion may include `frp home`, `frphome`, `myfrphome` and the company name. Keep the unfiltered totals as the control; do not report a filtered total as whole-site traffic.

### Google Action Rule

- Under 50 impressions and not proven indexed for 14 days: hold metadata.
- At least 50 impressions or 14 indexed days: review query match, but edit only when a specific mismatch is supported.
- At least 20 valid organic visits without any conversion action: audit CTA, documents and RFQ friction.
- Materially updated but not recrawled after seven days: run one Live Test and one Request Indexing action.
- Never submit all sitemap URLs manually or repeat unchanged requests.

## Yandex Webmaster

Property: `https://www.myfrphome.com`

Export or record:

1. Diagnostics
2. Sitemap files and processing status
3. Pages in search
4. Excluded pages and exclusion reasons
5. Search queries: impressions, clicks, CTR, position and demand when available
6. Important pages: status and last crawl
7. Crawl statistics
8. Region settings
9. IndexNow update status for genuine changes

Filter Russian priority URLs separately:

- `/ru/products/carbon-fiber-multiaxial-ncf-fabric`
- `/ru/products/3k-carbon-fiber-laminate-sheet`
- `/ru/products/carbon-fiber-yarn-and-tow`
- `/ru/products/carbon-fiber-ud-fabric`
- `/ru/products/structural-strengthening-system`
- `/ru/products/carbon-fiber-woven-fabric`

If the sitemap or query report is still processing, enter `N/A` and preserve the account screenshot/export date. Do not use a public `site:` result count as Webmaster evidence.

### Yandex Action Rule

- Submit the sitemap once after a genuine sitemap change.
- Use IndexNow or Reindex pages only for materially changed URLs.
- Wait for the documented processing window before treating missing data as a technical failure.
- Do not configure Metrica events until a real counter ID exists in production.

## GA4 And Inquiry Data

Export by landing page and locale:

- `rfq_submit`
- `tds_download`
- `catalog_download`
- `email_click`
- `whatsapp_click`

Required event dimensions where available:

- `locale`
- `source_page`
- `product_slug`
- `document_title`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Reconcile real RFQ events with the inquiry inbox. Record country, language, product, specification, quantity, destination, source URL, UTM campaign, qualification status and owner. Do not use synthetic QA submissions as leads.

## File Naming

Store exports outside the production bundle using:

- `YYYY-MM-DD-gsc-pages.csv`
- `YYYY-MM-DD-gsc-queries.csv`
- `YYYY-MM-DD-gsc-countries.csv`
- `YYYY-MM-DD-gsc-devices.csv`
- `YYYY-MM-DD-yandex-pages.csv`
- `YYYY-MM-DD-yandex-queries.csv`
- `YYYY-MM-DD-ga4-events.csv`
- `YYYY-MM-DD-rfq-attribution.csv`

Do not commit files containing personal inquiry data, secret tokens or account identifiers.

## Weekly Evidence Gate

Before recommending a change, state:

1. exact data source;
2. complete date range;
3. page and query filters;
4. sample size;
5. last crawl or deployment relationship;
6. proposed change;
7. expected measurable signal;
8. rollback or hold condition.
