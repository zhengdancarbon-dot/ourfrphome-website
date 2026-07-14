# SEO / GEO Promotion Run - 2026-07-13

> Historical snapshot taken before the RU, AR, FR, KO, PL and TR expansion. Its `/ru` and `/tr` 404 results are not current launch requirements.

Production site: https://www.myfrphome.com

## Operating Decision

The site is in acquisition operations mode. No structural website changes were made in this run.

Keep stable:

- English root URLs.
- `/es/` and `/pt-br/` localized routes.
- Product and application slugs.
- Canonical, hreflang and sitemap logic.

Do not publish:

- `/en`
- `/ru`
- `/tr`

## Live Technical Baseline

| Check | Result | Notes |
| --- | --- | --- |
| Sitemap | PASS | `https://www.myfrphome.com/sitemap.xml` returns 200. |
| Sitemap URL count | PASS | 75 URLs. |
| English URL count | PASS | 43 root/English URLs. |
| Spanish URL count | PASS | 16 `/es` URLs. |
| Brazilian Portuguese URL count | PASS | 16 `/pt-br` URLs. |
| Future locales in sitemap | PASS | No `/en`, `/ru` or `/tr` URLs found. |
| robots.txt | PASS | Allows crawl and references the production sitemap. |
| `/en`, `/ru`, `/tr` | PASS | Return 404 after normalized routing checks. |
| Contact details on live pages | PASS | Live pages use `info@hntzxcl.com` and `0086-18857397371`. |
| Old contact details on live sampled pages | PASS | `sales@tzcarbon.com` and old phone were not found in sampled live HTML. |

## Canonical and Hreflang Samples

| Page | Canonical | Hreflang |
| --- | --- | --- |
| `/` | `https://www.myfrphome.com` | `en`, `es`, `pt-BR`, `x-default` |
| `/es` | `https://www.myfrphome.com/es` | `en`, `es`, `pt-BR`, `x-default` |
| `/pt-br` | `https://www.myfrphome.com/pt-br` | `en`, `es`, `pt-BR`, `x-default` |
| `/products/carbon-fiber-woven-fabric` | Self-referencing EN canonical | `en`, `es`, `pt-BR`, `x-default` |
| `/es/products/carbon-fiber-woven-fabric` | Self-referencing ES canonical | `en`, `es`, `pt-BR`, `x-default` |
| `/pt-br/products/carbon-fiber-woven-fabric` | Self-referencing PT-BR canonical | `en`, `es`, `pt-BR`, `x-default` |

## Analytics and Event Tracking Baseline

| Item | Result |
| --- | --- |
| GA4 Measurement ID in live HTML | `G-MLKR89V5BJ` |
| `whatsapp_click` event code | Present |
| `email_click` event code | Present |
| `catalog_download` event code | Present |
| RFQ submit event | Implemented in client RFQ form; confirm in GA4 DebugView/Realtime with a real form submission. |

Events to monitor weekly by locale:

- `rfq_submit`
- `whatsapp_click`
- `email_click`
- `catalog_download`

## Public Search Visibility Notes

Public search checks showed that the domain and multiple product/application pages are discoverable. Some public snippets may still show older cached contact information even though sampled live pages now contain the new contact email and phone.

Action:

- Resubmit sitemap in Google Search Console and Bing Webmaster Tools.
- Request indexing for priority localized pages.
- Wait for snippets to refresh; do not change website structure to chase cached snippets.

## Search Console Actions

Manual logged-in account action required:

```text
Submit sitemap:
https://www.myfrphome.com/sitemap.xml
```

Priority URL inspection / request indexing queue:

```text
https://www.myfrphome.com/
https://www.myfrphome.com/products
https://www.myfrphome.com/catalog
https://www.myfrphome.com/contact
https://www.myfrphome.com/es/
https://www.myfrphome.com/pt-br/
https://www.myfrphome.com/products/carbon-fiber-woven-fabric
https://www.myfrphome.com/es/products/carbon-fiber-woven-fabric
https://www.myfrphome.com/pt-br/products/carbon-fiber-woven-fabric
https://www.myfrphome.com/products/carbon-fiber-yarn-and-tow
https://www.myfrphome.com/es/products/carbon-fiber-yarn-and-tow
https://www.myfrphome.com/pt-br/products/carbon-fiber-yarn-and-tow
https://www.myfrphome.com/products/milled-carbon-fiber-powder
https://www.myfrphome.com/products/prepreg-carbon-fiber-materials
https://www.myfrphome.com/products/structural-strengthening-system
```

## Bing Webmaster Actions

Manual logged-in account action required:

```text
Submit sitemap:
https://www.myfrphome.com/sitemap.xml
```

Then check:

- Sitemap processing status.
- URL submission quota.
- Crawl errors.
- Site Scan availability.

## Sales Promotion Actions Started

Use the UTM link pack:

- `docs/sales-utm-url-pack-2026-07-13.md`
- `docs/sales-utm-url-pack-2026-07-13.csv`

Campaign convention:

```text
utm_source=email_outreach
utm_medium=sales
utm_campaign=2026_q3_acquisition
utm_content=[page-purpose]
```

This gives GA4 a cleaner way to separate sales outreach traffic from organic search traffic.

## Week Of 2026-07-13 Priorities

| Priority | Action | Owner | Notes |
| --- | --- | --- | --- |
| High | Submit sitemap in GSC and Bing | Site admin | Requires logged-in accounts. |
| High | Request indexing for ES/PT-BR home, contact and priority product pages | Site admin | Use URL inspection tools. |
| High | Start sales outreach with UTM links | Sales team | Record replies in inquiry tracker. |
| High | Check GA4 events by locale | Site admin | Confirm click events and RFQ submit event. |
| Medium | Watch for snippet refresh from old contact info | Site admin | Do not change live pages unless old details are found in live HTML. |
| Medium | Log every valid inquiry in the tracking workbook | Sales team | Use `docs/inquiry-tracking-template-2026-07-05.xlsx`. |

## Guardrails

- Do not add unsupported certifications, official authorization, annual capacity, test reports or customer cases.
- Do not add military, weaponized drone, missile or combat UAV wording.
- Keep End Use / Final Application checks active.
- Keep URL structure stable during the current monitoring period.
