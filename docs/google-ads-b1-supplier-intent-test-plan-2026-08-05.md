# Phase B-1 Google Ads Supplier-Intent Test Plan

Status: planning only. No Google Ads account access, campaign, budget, keyword, tracking setting or public landing-page change is authorized by this file.

## Why this is a controlled test

Search ads can reveal buyer wording and country-level conversion paths earlier than organic search, but they do not replace SEO and should not be used to force unsupported product claims. Use exact and phrase match first because Google Ads match types control how broadly a keyword can match search intent. [Google Ads keyword matching](https://support.google.com/google-ads/answer/14996023) explains the available match types and their overlap.

## Market sequence

| Tier | Market | Plan | Landing-page language | Gate |
|---|---|---|---|---|
| 1 | Turkey | Controlled supplier-intent Search test | Turkish when the message is localized and reviewed; English only if appropriate | Account, billing, conversion and legal review |
| 1 | UAE | Controlled supplier-intent Search test | English/Arabic route based on approved creative | Arabic RTL and compliance review |
| 1 | Brazil | Controlled supplier-intent Search test | PT-BR | PT-BR creative and conversion verification |
| Research only | Russia | SEO/Yandex and query research first; do not allocate Google Ads spend until account-level availability and policy review are confirmed | Russian | Separate business approval |

Google location and language settings are independent and can produce multilingual delivery, so campaigns must be reviewed by actual location and language performance rather than assumed from the settings alone. [Google's location and language guidance](https://support.google.com/google-ads/answer/1722072) describes this behavior. Use `Presence` targeting for a market-isolation test when the goal is people physically in or regularly in the selected country; Google documents that the broader default can include people showing interest in that location. [Google's location option guide](https://support.google.com/google-ads/answer/9376662)

## Initial campaign structure after approval

Do not spread a small starting budget across all six pages. Start with three commercial clusters, then add a second cluster only when the first has enough qualified search-term and conversion evidence.

| Campaign | Ad groups / existing landing pages | Exact and phrase seed terms | Exclusions / boundaries |
|---|---|---|---|
| `Search | NCF | Supplier` | Multiaxial NCF | `carbon fiber multiaxial fabric supplier`; `600gsm biaxial carbon fiber fabric supplier`; `+45 -45 carbon NCF supplier` | No strength/design promise; exclude military/weapon terms |
| `Search | 3K Plate | Supplier` | 3K Carbon Fiber Laminate Sheet | `3K carbon fiber sheet supplier`; `3K carbon fiber laminate manufacturer`; `twill carbon fiber plate supplier` | Do not send to structural strengthening page; no fake thickness/stock claim |
| `Search | Woven | Supplier` | Woven Carbon Fiber Fabric | `3K woven carbon fiber fabric supplier`; `3K 200gsm twill carbon fiber fabric supplier`; `carbon fiber cloth manufacturer` | 3K 200gsm twill is the only public documented TDS scope |

Park UD, Yarn & Tow and Structural Strengthening as the next test cohort. They remain SEO/RFQ priorities but should not dilute a small initial paid-search budget.

## Budget and bid policy

The business must set the budget and currency. If the business separately confirms the previously suggested `$30/day` ceiling, use it only as a test ceiling and split it initially 40% NCF, 35% 3K Plate and 25% Woven. Do not use broad match or automated expansion during the first learning period. Review the search-term report and add negatives manually before expanding.

Suggested negative-theme review: jobs, salary, course, training, free, template, wallpaper, repair DIY, consumer bargain/retail intent and all sensitive military/weapon end uses. Translate negatives only after native review; do not machine-translate compliance terms.

## Measurement and landing-page rules

- Use existing canonical pages only; do not create country doorway pages or send ads directly to PDFs.
- Attach one UTM convention per campaign, for example `utm_source=google&utm_medium=cpc&utm_campaign=ncf_supplier_2026`.
- Primary conversion: accepted `rfq_submit`. Secondary: `tds_download`, `email_click`, `whatsapp_click`, and catalog download. Validate the event once per live locale before spend.
- Track qualified enquiry manually by product, market, locale, source URL and UTM. Do not send PII into Google Ads/GA4 parameters.
- Evaluate by qualified RFQ and document-use trend, not click volume alone. Pause any query/ad group that attracts irrelevant or non-compliant traffic.

## Approval checklist before account work

1. Business confirms monthly/daily budget, billing ownership and markets.
2. A human reviews every localized ad and landing page for product evidence and wording.
3. Conversion actions are verified end-to-end, including locale and product context.
4. Country availability is checked in the actual Google Ads account before activation; Google notes that available location target types vary by country. [Google Ads location target reference](https://support.google.com/google-ads/answer/1722075)
5. No campaign is activated without the user's explicit confirmation.
