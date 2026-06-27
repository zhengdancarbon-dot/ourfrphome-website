# Vercel Launch Final Check

Generated: 2026-06-27

Production domain: `https://www.ourfrphome.com`

Deployment status: not deployed. Wait for business owner confirmation before production deployment.

## Build Result

| Check | Result | Notes |
| --- | --- | --- |
| `pnpm install` | PASS | Dependencies already up to date. |
| `pnpm lint` | PASS | `eslint .` completed successfully. |
| `pnpm build` | PASS | `next build --webpack` completed successfully. |

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

Required environment variables:

```text
NEXT_PUBLIC_SITE_URL=https://www.ourfrphome.com
NEXT_PUBLIC_CONTACT_EMAIL=sales@tzcarbon.com
NEXT_PUBLIC_CONTACT_PHONE=+86-13586461443
NEXT_PUBLIC_CONTACT_WHATSAPP=+86-13586461443
RESEND_API_KEY=re_your_production_key
INQUIRY_TO_EMAIL=sales@tzcarbon.com
INQUIRY_FROM_EMAIL=FRP HOME Website <website@tzcarbon.com>
```

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

## Robots.txt Status

Build artifact checked:

```text
.next/server/app/robots.txt.body
```

Result:

- PASS: `robots.txt` references `Sitemap: https://www.ourfrphome.com/sitemap.xml`.

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

## Vercel Project Configuration Checklist

Use these Vercel settings:

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Install Command | `pnpm install` |
| Build Command | `pnpm build` |
| Output Directory | Leave empty / Vercel default |
| Development Command | `pnpm dev` |
| Production domain | `https://www.ourfrphome.com` |

Before deployment:

- Add all environment variables listed above to the Production environment.
- Add `www.ourfrphome.com` to the Vercel project.
- Add `ourfrphome.com` to the Vercel project.
- Set `www.ourfrphome.com` as the primary domain.
- Configure `ourfrphome.com` to redirect to `www.ourfrphome.com`.
- Redeploy after any environment variable change.

## DNS Records Needed

Current nameservers detected:

```text
dns15.hichina.com
dns16.hichina.com
```

Add these records in Aliyun / HiChina DNS:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `76.76.21.21` | `600` or default |
| `www` | `CNAME` | `cname.vercel-dns.com` | `600` or default |

If Vercel displays a different CNAME target for `www.ourfrphome.com`, use the exact value shown by Vercel.

Remove conflicting old website records:

- Old `A`, `AAAA`, or `CNAME` for `@`
- Old `A`, `AAAA`, or `CNAME` for `www`

Keep mail-related MX/TXT records for business email and Resend verification.

## Post-Deployment Tests

After deployment, test:

- `https://www.ourfrphome.com`
- `https://www.ourfrphome.com/products`
- `https://www.ourfrphome.com/catalog`
- `https://www.ourfrphome.com/contact`
- `https://www.ourfrphome.com/sitemap.xml`
- `https://www.ourfrphome.com/robots.txt`
- One product detail page
- One nonexistent URL for 404 handling

Expected:

- Apex domain redirects to `www`.
- HTTP redirects to HTTPS.
- Contact form sends email to `sales@tzcarbon.com`.
- Product images load.
- Mobile menu works.
- Sitemap and robots use only `https://www.ourfrphome.com`.

## Remaining Risks

- DNS is not configured yet; only HiChina/Aliyun nameservers were detected.
- Production email delivery is untested until Resend and `sales@tzcarbon.com` are configured.
- The exact Vercel CNAME should be confirmed in the Vercel Domains screen before DNS is saved.
- Legacy files under `output/`, `tmp/`, and `.codex-output-work/` must not be uploaded to production.
- Deployment was not performed in this check.
