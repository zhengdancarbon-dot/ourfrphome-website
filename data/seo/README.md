# SEO Data Import

This directory contains reviewed, non-secret SEO evidence. Do not commit customer names, company names, email addresses, phone numbers, IP addresses, inquiry messages, client IDs, user pseudo IDs, session identifiers, API keys, service-account JSON or unaggregated CRM exports.

## CSV formats

- `gsc/`: `date,query,page,country,clicks,impressions,ctr,position`
- `ga4/`: `date,pagePath,eventName,eventCount,country,language,productSlug`
- `yandex/`: `date,query,page,country,clicks,impressions,position`
- `sales/`: `date,productSlug,country,locale,utm_campaign,status`

The column list and order are exact. The validator rejects every unexpected column, including free-text notes, names, company names, contact details, client identifiers and session identifiers. It also rejects email, phone-like and IP-address values in approved text fields. `productSlug` is required in GA4 and sales exports for product-level attribution. Sales rows must be aggregate or de-identified and use one of these statuses: `new`, `open`, `qualified`, `quoted`, `won`, `lost`, `active` or `closed`.

## Weekly operating sequence

1. Export Search Console, GA4, Yandex and de-identified sales data into their source folders. Do not add raw files to Git.
2. Run `pnpm seo:data:validate` to reject unexpected columns, direct identifiers and malformed values.
3. Run `pnpm seo:data:import` and `pnpm seo:report`.
4. Review `reports/seo/weekly-dashboard.html`, `six-core-performance.csv`, `country-performance.csv` and `decision-queue.csv` locally. These generated files are not committed.
5. Do not modify metadata before both 14 days of evidence and 50 GSC impressions for the relevant page/query set.

For the optional Google APIs, keep `GOOGLE_SERVICE_ACCOUNT_JSON` or `GOOGLE_SERVICE_ACCOUNT_FILE`, `GSC_PROPERTY_URL`, and `GA4_PROPERTY_ID` in the hosting or local secret store, never in this repository. The service account must have read-only access to the Search Console property and GA4 property.
