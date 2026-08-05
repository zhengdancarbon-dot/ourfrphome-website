# Phase C PR Review - 2026-08-05

## Scope

This pull request creates an internal SEO operating workflow. It does not change public routes, product-page content, metadata, schema, RFQ behavior, analytics event behavior, or production configuration.

## Privacy Controls

- Imported CSV files use exact, source-specific allowlisted columns in a fixed order.
- Unexpected fields are rejected, including names, company names, email, phone, IP, inquiry message, client ID, user pseudo ID and session identifiers.
- Approved text cells are rejected when they contain an email address, phone-like value or IPv4 address.
- Dates, numeric fields, URL paths, locales, event names, statuses and campaign identifiers are constrained to machine-readable values.
- Raw source exports and generated reports are Git-ignored. Committed CSV fixtures are synthetic validation-only data.

## Fixtures

- Valid synthetic fixtures cover GSC, GA4, Yandex and de-identified sales input.
- Invalid fixtures prove rejection of PII columns and malformed dates or numeric values.
- The fixture pipeline writes reports into a temporary directory and removes them after verification.

## Reporting Windows

| Window | Date range |
| --- | --- |
| Baseline | 2026-08-05 |
| First full week | 2026-08-06 through 2026-08-12 |
| First 14-day checkpoint | 2026-08-06 through 2026-08-19 |
| First 30-day review | 2026-08-06 through 2026-09-04 |

## Decision Gate

No metadata recommendation is eligible until the relevant page has at least 14 days of verified evidence and 50 GSC impressions. No performance claims are included until reviewed exports are imported.

## First Data Import Checklist

1. Export aggregate GSC, GA4 and Yandex data plus de-identified sales outcomes only.
2. Confirm no export includes identifiers or free-text inquiry content.
3. Place files in their source folder without staging them.
4. Run `pnpm seo:data:validate`, then `pnpm seo:data:import` and `pnpm seo:report`.
5. Review the ignored local dashboard and decision queue against the source exports.
6. Request human approval before any qualifying metadata, internal-link or conversion change.

## Review Status

Draft PR only. Merge and production deployment require separate review approval.
