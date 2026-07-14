# Post-i18n Acquisition Day One Checklist - 2026-07-05

> Historical EN/ES/PT-BR launch checklist. Locale publication rules in this document are superseded by the nine-language QA work dated 2026-07-14.

Production site: https://www.myfrphome.com

## Current Status

| Item | Status | Notes |
| --- | --- | --- |
| Website structure | Stable | Do not make major URL, navigation, canonical, hreflang or sitemap changes during the 14-day stability period. |
| Sitemap | Live | `https://www.myfrphome.com/sitemap.xml` returns 200. |
| Sitemap URL count | 75 | Includes English root, Spanish and Brazilian Portuguese Phase 1 pages. |
| robots.txt | Live | References `https://www.myfrphome.com/sitemap.xml`. |
| `/es/` and `/pt-br/` | Live | Keep both language directories available. |
| `/en`, `/ru`, `/tr` | Unpublished | Keep returning 404; do not add to sitemap, hreflang or language switcher. |

## Task 1 - Google Search Console

Submit:

```text
https://www.myfrphome.com/sitemap.xml
```

Then request indexing for:

```text
https://www.myfrphome.com/es/
https://www.myfrphome.com/pt-br/
https://www.myfrphome.com/es/products/carbon-fiber-woven-fabric
https://www.myfrphome.com/pt-br/products/carbon-fiber-woven-fabric
https://www.myfrphome.com/es/products/carbon-fiber-yarn-and-tow
https://www.myfrphome.com/pt-br/products/carbon-fiber-yarn-and-tow
https://www.myfrphome.com/es/contact
https://www.myfrphome.com/pt-br/contact
```

Record result in the weekly monitoring report.

## Task 2 - Bing Webmaster Tools

Submit:

```text
https://www.myfrphome.com/sitemap.xml
```

Check:

- Sitemap processing status.
- URL submission quota.
- Crawl errors.
- Site Scan availability.

## Task 3 - GA4 Event Check

Confirm these events appear by locale:

- `rfq_submit`
- `whatsapp_click`
- `email_click`
- `catalog_download`

Review pages:

- `/`
- `/es/`
- `/pt-br/`

Weekly reporting should separate EN, ES and PT-BR traffic and conversions.

## Task 4 - Sales Team Link Outreach

Use the sales playbook:

- `docs/sales-link-outreach-playbook-2026-07-05.md`

Rule:

- Do not send only "Please check our website."
- Send an application page, product page and contact/RFQ page based on the customer's use case.

## Task 5 - Inquiry Tracking

Use the inquiry workbook:

- `docs/inquiry-tracking-template-2026-07-05.xlsx`

Record every useful inquiry or reply:

- Date
- Customer country
- Customer language
- Source channel
- Viewed/submitted page
- Product
- Application industry
- Valid inquiry status
- Quote/sample need
- Owner
- Follow-up status

## Guardrails

- Do not add unsupported certifications, official authorization, annual capacity, test reports or customer cases.
- Do not add military, weaponized drone, missile or combat UAV wording.
- Keep End Use / Final Application checks active in RFQ follow-up.
