# Vercel Launch Final Check

Generated: 2026-06-27

Production domain: `https://www.ourfrphome.com`

GitHub repository: `https://github.com/zhengdancarbon-dot/ourfrphome-website.git`

Vercel project: `zhendgan/ourfrphome-website`

Current status: Vercel project, GitHub repository, GitHub integration, custom domain entries, and Ready Vercel deployments are prepared. Final public cutover is waiting for Aliyun / HiChina DNS and `RESEND_API_KEY`.

## Deployment Result

| Item | Result | Notes |
| --- | --- | --- |
| GitHub repository | PASS | `zhengdancarbon-dot/ourfrphome-website` created and pushed. |
| Vercel project | PASS | `zhendgan/ourfrphome-website` created. |
| GitHub integration | PASS | Vercel GitHub App installed for this repository. |
| Latest deployment status | PASS | Vercel reports status `Ready`. |
| Stable Vercel project alias | PASS | `https://ourfrphome-website.vercel.app` |
| Example generated deployment URL | PASS | `https://ourfrphome-website-m1nbunqlq-zhendgan.vercel.app` |
| Custom domains in Vercel | PASS | `ourfrphome.com` and `www.ourfrphome.com` are added as aliases. |
| DNS cutover | PENDING | Aliyun / HiChina records still need to be updated. |

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
- PASS: every sitemap URL starts with `https://www.ourfrphome.com`.
- PASS: sitemap includes `https://www.ourfrphome.com/catalog`.
- PASS: no `zdcarbonfiber.com` or `carbonzd.com` sitemap URL found.

Live check status:

- PENDING on custom domain until Aliyun DNS resolves.

## Robots.txt Status

Build artifact checked:

```text
.next/server/app/robots.txt.body
```

Result:

- PASS: `robots.txt` references `Sitemap: https://www.ourfrphome.com/sitemap.xml`.

Live check status:

- PENDING on custom domain until Aliyun DNS resolves.

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

- `https://ourfrphome.com`
- `https://www.ourfrphome.com`
- `https://ourfrphome-website.vercel.app`
- `https://ourfrphome-website-zhendgan.vercel.app`
- `https://ourfrphome-website-git-main-zhendgan.vercel.app`

Code-level redirect:

- PASS: `next.config.ts` redirects `ourfrphome.com/:path*` to `https://www.ourfrphome.com/:path*`.

Live redirect check:

- PENDING until Aliyun DNS is updated and SSL is valid.

## DNS Records Needed

Current nameservers detected:

```text
dns15.hichina.com
dns16.hichina.com
```

Preferred records from Vercel verification:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `216.198.79.1` | `600` or default |
| `@` | `A` | `64.29.17.1` | `600` or default |
| `www` | `CNAME` | `c91344a3f5377e63.vercel-dns-017.com` | `600` or default |

Fallback records if the Aliyun UI or Vercel domain screen requires the simpler Vercel default:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `76.76.21.21` | `600` or default |
| `www` | `CNAME` | `cname.vercel-dns.com` | `600` or default |

Remove conflicting old website records for `@` and `www`. Keep mail-related MX/TXT records.

## Browser And Live Checks

Current result:

- Vercel API and CLI inspection work and report the latest deployment as Ready.
- Local browser/curl access to the `*.vercel.app` URL timed out from this network during testing.
- Custom-domain browser checks are blocked until Aliyun DNS is updated.

Required after DNS:

- Open `https://www.ourfrphome.com` on desktop and mobile.
- Open `/products`, `/catalog`, `/contact`, and one product detail page.
- Confirm no horizontal overflow on mobile.
- Confirm all product images load.
- Confirm the header mobile menu opens and links navigate.
- Submit the contact form without attachment.
- Confirm inquiry email arrives at `sales@tzcarbon.com`.
- Submit a valid PDF or image attachment under 4 MB.
- Open `/sitemap.xml` and confirm all URLs use `https://www.ourfrphome.com`.
- Open `/robots.txt` and confirm the sitemap line is correct.
- Confirm `https://ourfrphome.com` redirects to `https://www.ourfrphome.com`.

## Domain Configuration Checklist

Completed:

- Vercel project created.
- GitHub repo connected.
- Custom domains added in Vercel.
- Apex-to-www redirect added in code.
- Latest deployment Ready.

Still required:

- Add `RESEND_API_KEY` in Vercel.
- Configure Aliyun / HiChina DNS records.
- Wait for DNS propagation and Vercel SSL validation.
- Set or confirm `www.ourfrphome.com` as the primary domain in Vercel.
- Re-test robots, sitemap, canonical, mobile pages, and inquiry form on the live custom domain.
- Submit `https://www.ourfrphome.com/sitemap.xml` in Google Search Console.

## Remaining Risks

- Contact form cannot send email until `RESEND_API_KEY` is set.
- `INQUIRY_FROM_EMAIL` must match a Resend-verified sender/domain.
- DNS propagation can take minutes to several hours after Aliyun changes.
- Live browser checks on the custom domain are not possible until DNS is changed.
- Local network access to `*.vercel.app` timed out during this check, even though Vercel reports deployment Ready.
