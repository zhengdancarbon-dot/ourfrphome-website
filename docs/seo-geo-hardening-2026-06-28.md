# SEO / GEO hardening - 2026-06-28

Production deployment status: blocked until final user approval.

## Completed

- Added `/llms.txt` as a plain-text AI discovery and citation guide.
- Included canonical site, brand, company, contact and sitemap references in `/llms.txt`.
- Listed primary pages, product pages, application pages and technical articles from existing site data.
- Added explicit claim boundaries for authorization, certification, test reports, annual capacity and customer cases.
- Configured the existing Google Search Console verification code in Vercel Production and Preview environments.

## Not Changed

- No website content or navigation structure was changed.
- No production deployment was triggered.
- No merge to `main` was performed.
- No unsupported certification, authorization, capacity, test report or customer-case claim was added.

## Remaining

- Configure `GA4_MEASUREMENT_ID` after the GA4 property is created.
- Configure `BING_VERIFICATION_CODE` after Bing Webmaster Tools provides a verification code.
- Redeploy Preview or Production after environment-variable changes so metadata reflects the latest values.
- Submit `https://www.myfrphome.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools after production approval.
