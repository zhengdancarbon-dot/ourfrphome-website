# Six-Core Multilingual Preview Verification

Date: 2026-07-27

Branch: `codex/repository-recovery-20260723`

Commit under test: `d402c51`

Production domain: `https://www.myfrphome.com`

Preview deployment: `https://ourfrphome-website-dobix8gne-zhendgan.vercel.app`

Vercel deployment ID: `dpl_8SEJMCiv6rsJxayPsGeeQkp38mpq`

Production release status: not deployed

## Result

The recovered source tree builds successfully in Vercel Preview and the
deployment is `Ready`. Vercel generated the same 216-page application surface
verified by the local production build. No production alias was assigned and
no production deployment command was used.

The Preview is suitable for a normal-browser review. The current automation
network cannot establish a connection to `*.vercel.app`, including Vercel CLI
protected requests and the in-app browser. This is an execution-network limit,
not an HTTP error returned by the application. Full automated URL verification
therefore uses the equivalent local production build described below.

## Vercel Project Link

| Item | Result |
| --- | --- |
| Account | `zhengdancarbon-5554` |
| Team / scope | `zhendgan` |
| Project | `ourfrphome-website` |
| Production domain | `https://www.myfrphome.com` |
| Deployment target | Preview |
| Deployment status | Ready |

## Upload Boundary

`vercel deploy --dry` completed successfully before the Preview deployment.

| Check | Result |
| --- | --- |
| Necessary deployment files | 314 |
| Dry-run file size | 78,249,702 bytes |
| Actual changed upload | approximately 11 MB after Vercel deduplication |
| Forbidden local-material matches | 0 |

The upload excludes `.codex-output-work`, `.env.local`, `.git`, `.next`,
`.vercel`, `node_modules`, `outputs`, Morocco campaign source material,
`public/images/external`, and the untracked Chinese source-material folders.
No user photo library, TDS source folder, or local campaign output was uploaded.

## Environment Variables

Only presence and scope were checked. No secret value was printed or copied
into this report.

### Production

| Variable | Status |
| --- | --- |
| `RESEND_API_KEY` | PRESENT |
| `INQUIRY_TO_EMAIL` | PRESENT |
| `INQUIRY_FROM_EMAIL` | PRESENT |
| `GA4_MEASUREMENT_ID` | PRESENT |
| `GSC_VERIFICATION_CODE` | PRESENT |
| `BING_VERIFICATION_CODE` | PRESENT |
| `YANDEX_METRICA_ID` | PRESENT |
| `YANDEX_VERIFICATION_CODE` | PRESENT |
| `INDEXNOW_KEY` | PRESENT |

### Preview

| Variable | Status |
| --- | --- |
| `RESEND_API_KEY` | PRESENT |
| `INQUIRY_TO_EMAIL` | PRESENT |
| `INQUIRY_FROM_EMAIL` | CODE FALLBACK |
| `GSC_VERIFICATION_CODE` | PRESENT |
| `GA4_MEASUREMENT_ID` | MISSING |
| `BING_VERIFICATION_CODE` | MISSING |
| `YANDEX_METRICA_ID` | MISSING |
| `YANDEX_VERIFICATION_CODE` | MISSING |
| `INDEXNOW_KEY` | MISSING |

The current branch is not present in the connected Git repository, so Vercel
does not accept a branch-specific Preview variable for it. The inquiry route
already falls back to `FRP HOME Website <website@myfrphome.com>` when
`INQUIRY_FROM_EMAIL` is absent. `RESEND_API_KEY` and `INQUIRY_TO_EMAIL` are
present globally for Preview. Analytics and search-verification variables do
not block RFQ behavior in Preview.

## Build And Automated QA

| Check | Result |
| --- | --- |
| Vercel dependency install | PASS |
| Vercel Next.js compile | PASS |
| Vercel TypeScript check | PASS |
| Vercel static page generation | PASS, 216 pages |
| Local `pnpm lint` | PASS, 0 errors |
| Local `pnpm build` | PASS |
| Local sitemap audit | PASS, 207/207 URLs |
| Local internal-resource audit | PASS, 346/346 resources |
| Six priority product routes | PASS, 6/6 |
| Localized video routes | PASS, 27/27 |
| Negative route checks | PASS, 3/3 |
| Arabic language/direction semantics | PASS |

Sitemap locale counts from the equivalent production build:

- English: 55
- Spanish: 19
- Brazilian Portuguese: 19
- Russian: 19
- Arabic: 19
- French: 19
- Korean: 19
- Polish: 19
- Turkish: 19

## RFQ Safety Check

- `/api/inquiry` remains a Vercel Node.js function.
- The route retains locale and source-page data in the inquiry payload and
  email body.
- Required Preview delivery inputs are present through environment variables
  plus the existing verified sender fallback.
- No live Preview RFQ email was sent during this pass because the execution
  network could not connect to the protected Preview. This avoids treating a
  network timeout as a form failure and avoids duplicate test mail.
- One normal-browser Preview submission should be used for final delivery
  confirmation before any production release.

## Manual Preview Review

Open the Preview URL in a normal browser signed in to Vercel and check:

1. Home, Products, Catalog and Contact.
2. The six English priority product pages.
3. NCF, 3K laminate, Yarn & Tow, UD, strengthening and woven pages in at least
   ES, RU, AR and KO.
4. Arabic RTL layout, desktop Products menu and mobile language menu.
5. Product image zoom, TDS/SPEC downloads and one RFQ submission.
6. The RFQ email contains locale, source URL and selected product.

## Release Gate

The code-recovery and automated QA gates pass. Production remains unchanged.
Do not merge or deploy production until the Preview is opened in a normal
browser and the single RFQ delivery check is approved.
