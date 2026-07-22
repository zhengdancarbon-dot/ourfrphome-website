# FRP HOME GA4 Event Verification

Date: 2026-07-22

Property: `FRP HOME Website`

Production: `https://www.myfrphome.com`

## Account Observation

The authenticated GA4 property was checked directly in the browser.

Last 7 days:

- Active users: 36
- New users: 35
- Event count: 151
- Key events: 0

Last 28 days, Events report:

- Total events: 488
- Total users: 126
- `page_view`: 173
- `session_start`: 140
- `first_visit`: 126
- `user_engagement`: 35
- `scroll`: 10
- `catalog_download`: 4 events from 3 users

The account report did not yet contain real rows for `rfq_submit`, `tds_download`, `email_click` or `whatsapp_click`. This does not mean the instrumentation is broken; it means those event names have not yet appeared in the processed account report.

## Production Transport Check

A headless production-page test intercepted GA4 requests before they reached Google. No external chat, email client or document download was opened.

- `tds_download`: request generated with `locale=en`, the correct source page, product slug and document title.
- `email_click`: request generated with `locale=en` and the correct source page.
- `whatsapp_click`: request generated with `locale=en` and the correct source page.
- `catalog_download`: already independently evidenced by four processed events in the GA4 account.

## RFQ Locale Check

The production Contact form was exercised for EN, ES, PT-BR, RU, AR, FR, KO, PL and TR. The browser intercepted `/api/inquiry` and returned a synthetic success response, and GA collection requests were blocked. Therefore no inquiry email was sent and no synthetic event entered production analytics.

All nine forms:

- rendered the success UI;
- wrote `rfq_submit` to `dataLayer` after the successful API response;
- carried the exact locale;
- carried the correct localized Contact source path;
- carried a product name.

## Decision

The event implementation is operational. Account-side reporting should be reviewed after real buyer activity rather than manufacturing conversion data. `rfq_submit` may be marked as a GA4 key event once the business wants it treated as the primary lead conversion; the current account shows zero configured or recorded key events.
