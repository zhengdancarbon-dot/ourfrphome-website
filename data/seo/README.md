# SEO Data Import

This directory contains manually exported, non-secret SEO data. Do not commit customer names, email addresses, phone numbers, inquiry messages, API keys or service-account JSON.

- `gsc/`: Search Console CSV exports with `date,query,page,country,clicks,impressions,ctr,position`.
- `ga4/`: GA4 CSV exports with `date,pagePath,eventName,eventCount,country,language`.
- `yandex/`: Yandex Webmaster or Metrica CSV exports with page/query/country metrics.
- `sales/`: aggregated qualified-inquiry data only, with no personal data.

Run `pnpm seo:data:import` for CSV summary and `pnpm seo:report` for the weekly report. For the optional Google APIs, keep `GOOGLE_SERVICE_ACCOUNT_JSON` or `GOOGLE_SERVICE_ACCOUNT_FILE`, `GSC_PROPERTY_URL`, and `GA4_PROPERTY_ID` in the hosting or local secret store, never in this repository. The service account must be granted read access to the Search Console property and GA4 property.
