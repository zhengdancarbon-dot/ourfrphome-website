# FRP HOME Vercel Production Deployment Checklist

Production domain: `https://www.myfrphome.com`

GitHub repository: `https://github.com/zhengdancarbon-dot/ourfrphome-website.git`

Vercel project: `zhendgan/ourfrphome-website`

Current status: Vercel project, GitHub connection, Aliyun / HiChina DNS, Vercel domain verification, Vercel apex-to-`www` redirect, production deployment, Google Search Console domain verification, sitemap submission, Vercel `RESEND_API_KEY`, Resend DNS records, Resend sender-domain verification, and production inquiry email delivery are complete for `https://www.myfrphome.com`. The production inquiry form now sends through `FRP HOME Website <website@myfrphome.com>`.

Stable Vercel project aliases:

```text
https://ourfrphome-website.vercel.app
https://ourfrphome-website-zhendgan.vercel.app
```

Example generated deployment verified during setup:

```text
https://ourfrphome-website-m1nbunqlq-zhendgan.vercel.app
Deployment ID: dpl_8x8uw95uKyvXwbyZuc23q3MtzRFz
Status: Ready
Created: 2026-06-27 17:17 CST
```

## 1. Supported Deployment Method

This project is best prepared for Vercel.

Reasons:

- It is a Next.js App Router project.
- `package.json` uses standard Next.js commands.
- `/api/inquiry` is a Next.js Route Handler and declares `export const runtime = "nodejs"`.
- The contact form depends on server-side environment variables and Resend email delivery.

Other deployment methods:

- Cloudflare Pages: not currently configured. The Node.js API route would need adaptation.
- Netlify: not currently configured. A Netlify adapter/build configuration would be needed.
- Own server: possible with `pnpm build` and `pnpm start`, but no Docker, PM2, nginx or systemd deployment package is currently included.

## 2. Vercel Project Settings

Use these settings in Vercel:

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Install Command | `pnpm install` |
| Build Command | `pnpm build` |
| Output Directory | Leave empty / Vercel default |
| Development Command | `pnpm dev` |
| Node.js Version | Vercel default Node.js version for Next.js, or Node.js 22 if selecting manually |

Local verification commands:

```bash
pnpm install
pnpm lint
pnpm build
```

Deployment upload note:

- `.vercelignore` is included to prevent local caches, `.next`, `node_modules`, screenshots, and old output folders from being uploaded to Vercel.

## 3. Required Environment Variables

These variables should exist in Vercel Production, Preview, and Development environments. Production and Development currently have `INQUIRY_FROM_EMAIL` set explicitly; Preview can use the same value through code fallback if Vercel does not allow a global Preview variable without a non-production branch.

```text
NEXT_PUBLIC_SITE_URL=https://www.myfrphome.com
NEXT_PUBLIC_CONTACT_EMAIL=info@hntzxcl.com
NEXT_PUBLIC_CONTACT_PHONE=0086-18857397371
NEXT_PUBLIC_CONTACT_WHATSAPP=0086-18857397371
INQUIRY_TO_EMAIL=info@hntzxcl.com
INQUIRY_FROM_EMAIL=FRP HOME Website <website@myfrphome.com>
RESEND_API_KEY=re_your_production_key
```

Current setup result:

- Configured in Vercel: `RESEND_API_KEY` and the public/contact variables are present.
- Resend sender-domain verification: PASS for `myfrphome.com`.

Important notes:

- `RESEND_API_KEY` is required for the contact/RFQ form to send email.
- `INQUIRY_FROM_EMAIL` must use a domain or subdomain verified in Resend.
- Current sender standard: `FRP HOME Website <website@myfrphome.com>`.
- Redeploy after changing environment variables.

## 4. API Route Check

Route:

```text
/api/inquiry
```

Runtime:

```ts
export const runtime = "nodejs";
```

Expected behavior:

- Invalid RFQ payload returns `400` with validation errors.
- Valid RFQ payload without `RESEND_API_KEY` returns `503` with `Email service is temporarily unavailable.`
- Valid RFQ payload with `RESEND_API_KEY`, verified sender, and working recipient should send email through Resend.
- Expected live production result after recipient update: valid RFQ payload returns `200 {"ok":true}` and the test inquiry is received at `info@hntzxcl.com`.

The route uses:

- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL`
- `INQUIRY_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`

Vercel compatibility:

- PASS: Route Handler uses the Vercel-compatible Node.js runtime.
- PASS: live form email delivery test succeeds after `myfrphome.com` sender-domain verification.

## 5. Deploy To Vercel

Preferred method: GitHub integration.

Completed:

1. GitHub repository created: `zhengdancarbon-dot/ourfrphome-website`.
2. Local `main` branch pushed to GitHub.
3. Vercel project created: `zhendgan/ourfrphome-website`.
4. Vercel account connected to GitHub.
5. Vercel GitHub App installed for this repository.
6. GitHub repository connected in Vercel project settings.
7. Latest push auto-deployed successfully.

Future deploy flow:

1. Commit changes locally.
2. Push to `main`.
3. Vercel automatically creates a production deployment.
4. Check the deployment in Vercel before domain cutover or announcement.

Manual CLI deploy, if needed:

```bash
pnpm install
pnpm lint
pnpm build
vercel link
vercel --prod
```

## 6. Add Custom Domains In Vercel

Completed in Vercel:

- Added `www.myfrphome.com`.
- Added `myfrphome.com`.
- Vercel verifies both custom domains as configured correctly.
- Vercel domain settings redirect `myfrphome.com` to `www.myfrphome.com` with status `308`.
- Latest Ready deployment has aliases for both custom domains.

Still required:

- Keep `www.myfrphome.com` as the primary public URL.

Final canonical production URL:

```text
https://www.myfrphome.com
```

## 7. DNS Records For Aliyun / HiChina

Current nameservers detected:

```text
dns15.hichina.com
dns16.hichina.com
```

Vercel verification recommends these records. They were added in Aliyun / HiChina on 2026-06-27 and verified by Vercel CLI.

Preferred records:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `216.198.79.1` | `600` or default |
| `@` | `A` | `64.29.17.1` | `600` or default |
| `www` | `CNAME` | `c91344a3f5377e63.vercel-dns-017.com` | `600` or default |

Fallback records if Aliyun refuses the two apex `A` records or Vercel shows a simpler fallback:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `76.76.21.21` | `600` or default |
| `www` | `CNAME` | `cname.vercel-dns.com` | `600` or default |

Before saving DNS:

- Remove old `A`, `AAAA`, or `CNAME` records for `@` if they point to another website host.
- Remove old `A`, `AAAA`, or `CNAME` records for `www` if they point to another website host.
- Keep unrelated MX/TXT records for business email, SPF, DKIM, DMARC, Google Search Console, and Resend verification.
- Keep the Google Search Console TXT record:
  - Host: `@`
  - Type: `TXT`
  - Value: `google-site-verification=_mCgTsfzhKlTLF8Lx9nweEo9n4rcJt-mpxSzi59HE-0`

After saving DNS:

```bash
vercel domains verify myfrphome.com
vercel domains verify www.myfrphome.com
```

Current verification result:

- PASS: `myfrphome.com` is configured correctly by A records.
- PASS: `www.myfrphome.com` is configured correctly by CNAME.
- PASS: Aliyun / HiChina nameservers are `dns15.hichina.com` and `dns16.hichina.com`.

## 8. Primary Domain And Redirect

Required final behavior:

| URL | Expected result |
| --- | --- |
| `https://www.myfrphome.com` | Main production website |
| `https://myfrphome.com` | Redirects to `https://www.myfrphome.com` |
| `http://www.myfrphome.com` | Redirects to HTTPS |
| `http://myfrphome.com` | Redirects to HTTPS and `www` |

Code-level redirect is already included in `next.config.ts`:

```text
myfrphome.com/:path* -> https://www.myfrphome.com/:path*
```

Vercel domain-level redirect is also configured:

```text
myfrphome.com -> www.myfrphome.com
Status: 308
```

Live verification on 2026-06-27:

```text
https://myfrphome.com -> 308 Location: https://www.myfrphome.com/
https://www.myfrphome.com -> 200
```

## 9. Production SEO Verification

Live verification URLs:

```text
https://www.myfrphome.com/sitemap.xml
https://www.myfrphome.com/robots.txt
https://www.myfrphome.com/products
https://www.myfrphome.com/catalog
https://www.myfrphome.com/contact
```

Expected SEO results:

- `sitemap.xml` contains only `https://www.myfrphome.com` URLs.
- `sitemap.xml` includes `https://www.myfrphome.com/catalog`.
- `robots.txt` references `https://www.myfrphome.com/sitemap.xml`.
- Canonical URLs use `https://www.myfrphome.com`.
- OpenGraph URLs use `https://www.myfrphome.com`.
- JSON-LD Organization schema uses `https://www.myfrphome.com/#organization`.
- JSON-LD WebSite schema uses `https://www.myfrphome.com/#website`.
- Product pages include Product schema.
- Product pages include BreadcrumbList schema.
- FAQ sections include FAQPage schema where applicable.

## 10. Post-Deployment Test Checklist

Run these checks after future production changes:

- Open the home page on desktop and mobile.
- Open `/products`, `/catalog`, `/contact`, and one product detail page.
- Confirm no horizontal overflow on mobile.
- Confirm all product images load.
- Confirm the header mobile menu opens and links navigate.
- Submit the contact form without attachment.
- PASS: inquiry email arrives at `info@hntzxcl.com`.
- Reply to the inquiry email and confirm the buyer email is used as `reply_to`.
- Submit a valid PDF or image attachment under 4 MB.
- Confirm the attachment arrives.
- Try an invalid or oversized attachment and confirm it is rejected.
- Open `/sitemap.xml` and confirm all URLs use `https://www.myfrphome.com`.
- Open `/robots.txt` and confirm the sitemap line is correct.
- Test a nonexistent URL and confirm the 404 page appears.
- Confirm Google Search Console shows `https://www.myfrphome.com/sitemap.xml` as submitted.

## 11. Rollback Method

Vercel dashboard rollback:

1. Open the Vercel project.
2. Go to `Deployments`.
3. Find the last known good production deployment.
4. Use Vercel's redeploy/promote/instant rollback action for that deployment.
5. Re-test home, products, contact form, sitemap and robots.

CLI rollback:

```bash
vercel rollback
```

Environment variable rollback:

1. Restore the previous Vercel environment variable values.
2. Redeploy the last known good commit.
3. Re-test `/api/inquiry`.

DNS rollback:

1. Restore the previous Aliyun records for `@` and `www`.
2. Wait for DNS propagation.
3. Re-check `https://www.myfrphome.com`, sitemap, robots, and contact form.

Emergency fallback:

- Temporarily disable the contact form only if email delivery is failing, while keeping the visible `mailto:info@hntzxcl.com`, `tel:+8618857397371`, and WhatsApp links available.
- Do not point the domain to an old website containing legacy `zdcarbonfiber.com`, `carbonzd.com`, or `Zhengdan` branding.
