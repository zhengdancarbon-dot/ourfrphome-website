# Vercel Launch Final Check

Generated: 2026-06-27

Production domain: `https://www.myfrphome.com`

GitHub repository: `https://github.com/zhengdancarbon-dot/ourfrphome-website.git`

Vercel project: `zhendgan/ourfrphome-website`

Current status: Vercel project, GitHub repository, GitHub integration, custom domain entries, Aliyun / HiChina DNS, Vercel verification, and production deployment are live for `https://www.myfrphome.com`. The remaining launch blockers are adding `RESEND_API_KEY`, confirming `www.myfrphome.com` as the primary production domain in the Vercel dashboard if needed, and submitting the new sitemap to Google Search Console.

## Deployment Result

| Item | Result | Notes |
| --- | --- | --- |
| GitHub repository | PASS | `zhengdancarbon-dot/ourfrphome-website` created and pushed. |
| Vercel project | PASS | `zhendgan/ourfrphome-website` created. |
| GitHub integration | PASS | Vercel GitHub App installed for this repository. |
| Latest deployment status | PASS | Vercel reports status `Ready`. |
| Stable Vercel project alias | PASS | `https://ourfrphome-website.vercel.app` |
| Example generated deployment URL | PASS | `https://ourfrphome-website-m1nbunqlq-zhendgan.vercel.app` |
| Custom domains in Vercel | PASS | `myfrphome.com` and `www.myfrphome.com` are added as aliases. |
| DNS cutover | PASS | Aliyun / HiChina records were added and Vercel verifies both `myfrphome.com` and `www.myfrphome.com`. |
| Latest domain deployment | PASS | Vercel production deployment reached `Ready` after commit `c31a6e3`. |

Example generated deployment verified during setup:

```text
Deployment ID: dpl_8x8uw95uKyvXwbyZuc23q3MtzRFz
Target: production
Status: Ready
Created: 2026-06-27 17:17 CST
```

## Build Result

| Check | Result | Notes |
| --- | --- | --- |
| `pnpm install` | PASS | Dependencies installed/resolved before deployment checks. |
| `pnpm lint` | PASS | `eslint .` completed successfully after the latest redirect change. |
| `pnpm build` | PASS | `next build --webpack` completed successfully after the latest redirect change. |
| Vercel build | PASS | Latest Vercel deployment is Ready. |

Build output confirms:

- `/` static route
- `/products` static route
- `/products/[slug]` SSG product detail routes
- `/catalog` static route
- `/contact` static route
- `/robots.txt` static route
- `/sitemap.xml` static route
- `/api/inquiry` dynamic server route

## API Route Status

Route checked:

```text
/api/inquiry
```

Status:

- PASS: route exists in the build output as a dynamic server route.
- PASS: source declares `export const runtime = "nodejs"`.
- PASS: invalid RFQ payload returns `400` validation errors.
- PASS: valid RFQ payload without `RESEND_API_KEY` returns expected `503` email-service response.
- READY FOR VERCEL: this route should run as a Vercel Node.js serverless function.
- PENDING: live email delivery test after `RESEND_API_KEY` is added.

Environment variables:

| Variable | Status |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Configured |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Configured |
| `NEXT_PUBLIC_CONTACT_PHONE` | Configured |
| `NEXT_PUBLIC_CONTACT_WHATSAPP` | Configured |
| `INQUIRY_TO_EMAIL` | Configured |
| `INQUIRY_FROM_EMAIL` | Configured |
| `RESEND_API_KEY` | Missing - add securely in Vercel |

Important API risk:

- The contact form will not send email until `RESEND_API_KEY` is set and `INQUIRY_FROM_EMAIL` uses a Resend-verified sender/domain.

## Sitemap Status

Build artifact checked:

```text
.next/server/app/sitemap.xml.body
```

Result:

- PASS: sitemap contains 26 URLs.
- PASS: every sitemap URL starts with `https://www.myfrphome.com`.
- PASS: sitemap includes `https://www.myfrphome.com/catalog`.
- PASS: no `zdcarbonfiber.com` or `carbonzd.com` sitemap URL found.

Live check status:

- PASS: live custom-domain sitemap returns 26 URLs, all under `https://www.myfrphome.com`, including `/catalog`.

## Robots.txt Status

Build artifact checked:

```text
.next/server/app/robots.txt.body
```

Result:

- PASS: `robots.txt` references `Sitemap: https://www.myfrphome.com/sitemap.xml`.

Live check status:

- PASS: live `robots.txt` references `Sitemap: https://www.myfrphome.com/sitemap.xml`.

## Production SEO URL Status

Build output checked:

- 28 production HTML files
- `sitemap.xml`
- `robots.txt`

Result:

| Item | Result |
| --- | --- |
| Canonical URLs | PASS |
| OpenGraph URLs | PASS |
| JSON-LD site URLs | PASS |
| Internal absolute URLs | PASS |
| Legacy domain leaks | PASS |

No production HTML output contains active `zdcarbonfiber.com` or `carbonzd.com` links.

## Domain And Redirect Status

Vercel aliases on the latest Ready deployment:

- `https://myfrphome.com`
- `https://www.myfrphome.com`
- `https://ourfrphome-website.vercel.app`
- `https://ourfrphome-website-zhendgan.vercel.app`
- `https://ourfrphome-website-git-main-zhendgan.vercel.app`

Code-level redirect:

- PASS: `next.config.ts` redirects `myfrphome.com/:path*` to `https://www.myfrphome.com/:path*`.

Live redirect check:

- PASS: `https://myfrphome.com` returns `308` to `https://www.myfrphome.com/`.

## DNS Records Configured

Current nameservers detected:

```text
dns15.hichina.com
dns16.hichina.com
```

Configured records from Vercel verification:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `216.198.79.1` | `600` or default |
| `@` | `A` | `64.29.17.1` | `600` or default |
| `www` | `CNAME` | `c91344a3f5377e63.vercel-dns-017.com` | `600` or default |

Fallback records if the Aliyun UI or Vercel domain screen ever requires the simpler Vercel default:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `76.76.21.21` | `600` or default |
| `www` | `CNAME` | `cname.vercel-dns.com` | `600` or default |

Conflicting old website records for `@` and `www` were replaced. Mail-related MX/TXT records were kept.

## Browser And Live Checks

Current result:

- Vercel API and CLI inspection work and report the latest deployment as Ready.
- Local browser/curl access to the `*.vercel.app` URL timed out from this network during testing.
- Custom-domain browser checks are ready after the latest domain-change commit deploys.

Required after DNS:

- Open `https://www.myfrphome.com` on desktop and mobile.
- Open `/products`, `/catalog`, `/contact`, and one product detail page.
- Confirm no horizontal overflow on mobile.
- Confirm all product images load.
- Confirm the header mobile menu opens and links navigate.
- Submit the contact form without attachment.
- Confirm inquiry email arrives at `sales@tzcarbon.com`.
- Submit a valid PDF or image attachment under 4 MB.
- Open `/sitemap.xml` and confirm all URLs use `https://www.myfrphome.com`.
- Open `/robots.txt` and confirm the sitemap line is correct.
- Confirm `https://myfrphome.com` redirects to `https://www.myfrphome.com`.

## Domain Configuration Checklist

Completed:

- Vercel project created.
- GitHub repo connected.
- Custom domains added in Vercel.
- Apex-to-www redirect added in code.
- Latest deployment Ready.

Still required:

- Add `RESEND_API_KEY` in Vercel.
- Set or confirm `www.myfrphome.com` as the primary domain in Vercel.
- Re-test robots, sitemap, canonical, mobile pages, and inquiry form on the live custom domain.
- Submit `https://www.myfrphome.com/sitemap.xml` in Google Search Console.

## Remaining Risks

- Contact form cannot send email until `RESEND_API_KEY` is set.
- `INQUIRY_FROM_EMAIL` must match a Resend-verified sender/domain.
- The previous custom domain was removed from Vercel after business owner confirmation.
- The installed Vercel CLI does not expose a direct primary-domain command, so primary-domain confirmation should be done in the Vercel dashboard.
