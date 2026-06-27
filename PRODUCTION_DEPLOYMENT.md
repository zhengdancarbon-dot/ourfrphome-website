# FRP HOME Vercel Production Deployment Checklist

Production domain: `https://www.ourfrphome.com`

Deployment status: not deployed. Deploy only after business owner confirmation.

## 1. Supported Deployment Method

This project is best prepared for Vercel.

Reasons:

- It is a Next.js App Router project.
- `package.json` uses standard Next.js commands.
- `/api/inquiry` is a Next.js Route Handler and declares `export const runtime = "nodejs"`.
- The contact form depends on server-side environment variables and Resend API delivery.

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

## 3. Required Environment Variables

Add these variables to the Vercel Production environment before deploying:

```text
NEXT_PUBLIC_SITE_URL=https://www.ourfrphome.com
NEXT_PUBLIC_CONTACT_EMAIL=sales@tzcarbon.com
NEXT_PUBLIC_CONTACT_PHONE=+86-13586461443
NEXT_PUBLIC_CONTACT_WHATSAPP=+86-13586461443
RESEND_API_KEY=re_your_production_key
INQUIRY_TO_EMAIL=sales@tzcarbon.com
INQUIRY_FROM_EMAIL=FRP HOME Website <website@tzcarbon.com>
```

Important notes:

- `RESEND_API_KEY` is required for the contact/RFQ form to send email.
- `INQUIRY_FROM_EMAIL` must use a domain or subdomain verified in Resend.
- If `website@tzcarbon.com` is not verified in Resend, use the exact verified sender shown in Resend.
- If `sales@tzcarbon.com` is not ready, temporarily set `INQUIRY_TO_EMAIL` to a working company-controlled mailbox for testing.
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
- Valid RFQ payload with `RESEND_API_KEY`, verified sender and working recipient should send email through Resend.

The route uses:

- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL`
- `INQUIRY_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`

## 5. Deploy To Vercel

Option A: deploy from Git.

1. Push the final branch to GitHub/GitLab/Bitbucket.
2. In Vercel, choose `Add New Project`.
3. Import this repository.
4. Confirm the project settings in section 2.
5. Add all Production environment variables in section 3.
6. Deploy the Production branch.

Option B: deploy with Vercel CLI.

```bash
pnpm install
pnpm lint
pnpm build
vercel link
vercel --prod
```

Do not run `vercel --prod` until deployment is confirmed.

## 6. Add Custom Domains In Vercel

In the Vercel project:

1. Open `Settings` -> `Domains`.
2. Add `www.ourfrphome.com`.
3. Add `ourfrphome.com`.
4. Set `www.ourfrphome.com` as the primary domain.
5. Configure `ourfrphome.com` to redirect to `www.ourfrphome.com`.
6. Wait until both domains show valid DNS and valid SSL status.

Final canonical production URL:

```text
https://www.ourfrphome.com
```

## 7. DNS Records For Aliyun / HiChina

Current nameservers detected:

```text
dns15.hichina.com
dns16.hichina.com
```

Add these DNS records in Aliyun / HiChina DNS:

| Host Record | Type | Value | TTL |
| --- | --- | --- | --- |
| `@` | `A` | `76.76.21.21` | `600` or default |
| `www` | `CNAME` | `cname.vercel-dns.com` | `600` or default |

If Vercel shows a different CNAME target in the project domain screen, use the exact Vercel-provided value instead of `cname.vercel-dns.com`.

Do not create conflicting records for the same host:

- Remove old `A`, `AAAA`, or `CNAME` records for `@` if they point to another website host.
- Remove old `A`, `AAAA`, or `CNAME` records for `www` if they point to another website host.
- Keep unrelated MX/TXT records for email verification and mail delivery.

## 8. Primary Domain And Redirect

Required final behavior:

| URL | Expected result |
| --- | --- |
| `https://www.ourfrphome.com` | Main production website |
| `https://ourfrphome.com` | Redirects to `https://www.ourfrphome.com` |
| `http://www.ourfrphome.com` | Redirects to HTTPS |
| `http://ourfrphome.com` | Redirects to HTTPS and `www` |

In Vercel:

1. Keep both `www.ourfrphome.com` and `ourfrphome.com` added to the project.
2. Use the Vercel Domains screen to make `www.ourfrphome.com` primary.
3. Enable the apex-to-www redirect when prompted.

## 9. Production SEO Verification

After deployment, verify:

```text
https://www.ourfrphome.com/sitemap.xml
https://www.ourfrphome.com/robots.txt
https://www.ourfrphome.com/products
https://www.ourfrphome.com/catalog
https://www.ourfrphome.com/contact
```

Expected SEO results:

- `sitemap.xml` contains only `https://www.ourfrphome.com` URLs.
- `sitemap.xml` includes `https://www.ourfrphome.com/catalog`.
- `robots.txt` references `https://www.ourfrphome.com/sitemap.xml`.
- Canonical URLs use `https://www.ourfrphome.com`.
- OpenGraph URLs use `https://www.ourfrphome.com`.
- JSON-LD Organization schema uses `https://www.ourfrphome.com/#organization`.
- JSON-LD WebSite schema uses `https://www.ourfrphome.com/#website`.
- Product pages include Product schema.
- Product pages include BreadcrumbList schema.
- FAQ sections include FAQPage schema where applicable.

## 10. Post-Deployment Test Checklist

Run these checks after the Vercel deployment is live:

- Open the home page on desktop and mobile.
- Open `/products`, `/catalog`, `/contact`, and one product detail page.
- Confirm no horizontal overflow on mobile.
- Confirm all product images load.
- Confirm the header mobile menu opens and links navigate.
- Submit the contact form without attachment.
- Confirm inquiry email arrives at `sales@tzcarbon.com`.
- Reply to the inquiry email and confirm the buyer email is used as `reply_to`.
- Submit a valid PDF or image attachment under 4 MB.
- Confirm the attachment arrives.
- Try an invalid or oversized attachment and confirm it is rejected.
- Open `/sitemap.xml` and confirm all URLs use `https://www.ourfrphome.com`.
- Open `/robots.txt` and confirm the sitemap line is correct.
- Test a nonexistent URL and confirm the 404 page appears.
- Submit `https://www.ourfrphome.com/sitemap.xml` in Google Search Console.

## 11. Rollback Method

If a deployment has a problem:

1. Open the Vercel project.
2. Go to `Deployments`.
3. Find the last known good production deployment.
4. Use Vercel's redeploy/promote/instant rollback action for that deployment.
5. Re-test home, products, contact form, sitemap and robots.
6. If the problem was caused by environment variables, restore the previous values and redeploy.
7. If DNS was changed incorrectly, restore the records in section 7 and wait for propagation.

Emergency fallback:

- Temporarily disable the contact form only if email delivery is failing, while keeping the visible `mailto:sales@tzcarbon.com`, `tel:+8613586461443`, and WhatsApp links available.
- Do not point the domain to an old website containing legacy `zdcarbonfiber.com`, `carbonzd.com`, or `Zhengdan` branding.
