# Six-Core UTM Attribution Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

Production deployment: not performed

## Finding

The multilingual UTM link pack was valid, but the interactive RFQ form submitted only `window.location.pathname`. This removed campaign parameters from the inquiry email and from the `rfq_submit` event. Attribution would also disappear if a buyer opened a tagged product page and then navigated to Contact in the same browser tab.

## Fix

- Preserve only approved attribution fields:
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_content`
  - `utm_term`
  - `gclid`
  - `msclkid`
  - `yclid`
- Exclude form-prefill and free-text parameters such as `message` and `product`.
- Store the filtered attribution query in session storage so it survives navigation within the same tab.
- Append the filtered query to the RFQ `sourcePage` field.
- Add the approved attribution values to the existing `rfq_submit` analytics event.
- Keep the existing `/api/inquiry` route and response shape unchanged. Its existing `Source Page` and `Submitted from` email fields now receive the attributed source URL.
- Keep the public RFQ form design unchanged.

## Verification

| Check | Result |
| --- | --- |
| Allowed UTM and `yclid` extraction | Passed |
| Non-attribution `message` and `product` filtering | Passed |
| Event parameter extraction | Passed |
| Existing UTM pack | 162 channel links passed |
| Maximum generated `sourcePage` length | 162 characters |
| Server validation limit | 240 characters |
| `pnpm lint` | 0 errors; 3 pre-existing warnings in an untracked Morocco output script |
| `pnpm build` | Passed; TypeScript passed; 216 pages generated |

## Release Check

After an approved preview deployment, submit a non-delivery test only with a controlled recipient and confirm the email displays the full tagged `Source Page` and `Submitted from` URL. Then verify that GA4 receives `rfq_submit` with `locale`, `product_name`, `source_page`, `utm_source`, `utm_medium`, `utm_campaign` and `utm_content`.
