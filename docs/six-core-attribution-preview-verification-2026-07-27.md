# FRP HOME Attribution Preview Verification

Date: 2026-07-27

Branch source: `codex/repository-recovery-20260723`

Commit: `e9deb7c980f596cfb1ded55f1926fe89fc4936ec`

Production status: unchanged

## Preview Deployment

- Preview URL: `https://ourfrphome-website-nx0muzs0j-zhendgan.vercel.app`
- Deployment ID: `dpl_94varhF87g5UVqgCAQgLZAVcdvSm`
- Vercel target: Preview
- Vercel status: Ready
- Generated pages: 216
- Build result: compiled successfully, TypeScript passed and all static pages generated.

The first Preview deployment in this cycle was built before the generic Preview sender variable was corrected. It is superseded by the deployment above.

## Preview Environment

The exact Preview environment was pulled through Vercel CLI and checked without printing values. The temporary file was truncated immediately after the presence check.

| Variable | Status | Release impact |
| --- | --- | --- |
| `RESEND_API_KEY` | PRESENT | RFQ required |
| `INQUIRY_TO_EMAIL` | PRESENT | RFQ required |
| `INQUIRY_FROM_EMAIL` | PRESENT | RFQ required |
| `GSC_VERIFICATION_CODE` | PRESENT | Search verification available |
| `GA4_MEASUREMENT_ID` | MISSING | Preview analytics limitation; not an RFQ blocker |
| `BING_VERIFICATION_CODE` | MISSING | Preview verification limitation; not an RFQ blocker |
| `YANDEX_METRICA_ID` | MISSING | Preview analytics limitation; not an RFQ blocker |

`INQUIRY_FROM_EMAIL` was missing from the generic Preview environment because prior values were scoped to older branches. The existing verified FRP HOME sender configuration was added to Preview and a fresh deployment was generated. Production environment variables were not modified.

## Code And SEO Evidence

- `pnpm analytics:audit`: passed.
- `pnpm lint`: passed with zero errors; three unrelated warnings remain in excluded `.codex-output-work` material.
- `pnpm build`: passed locally with 216 generated pages.
- Vercel Preview build: passed with 216 generated pages.
- Local production `pnpm seo:audit`: passed with 207 sitemap URLs, 207 pages, 348 internal resources, six priority product pages, 27 localized video pages and three expected negative 404 checks.
- The source-level conversion audit verifies TDS, catalog, email and WhatsApp attribution for UTM plus Google, Bing and Yandex click identifiers.

## Network Limitation

Vercel API and CLI management endpoints are reachable from the current environment, but direct HTTPS requests to the generated `vercel.app` hostname time out. The same timeout occurs in terminal requests and the in-app browser. Vercel independently reports the deployment as Ready.

Because the Preview origin cannot be reached from this environment, this report does not claim a live-browser RFQ submission, live response-code crawl or final visual review. Those items require one normal-browser pass against the Preview URL. No RFQ was submitted and no duplicate test email was generated during this cycle.

## Remaining Preview Gate

1. Open the Preview URL in a normal browser.
2. Check Home, Products, Catalog, Contact and the six priority product routes on desktop and mobile.
3. Submit one controlled RFQ only after action-time approval, then verify delivery, locale and source URL.
4. Confirm one TDS click appears with campaign attribution in analytics after a Preview analytics ID is intentionally configured, or repeat this event verification after an approved production deployment.

No merge, production deployment, sitemap submission or indexing request was performed.
