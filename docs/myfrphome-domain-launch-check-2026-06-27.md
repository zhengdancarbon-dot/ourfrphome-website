# MyFRPHome Domain Launch Check - 2026-06-27

Production domain: `https://www.myfrphome.com`

GitHub repository: `https://github.com/zhengdancarbon-dot/ourfrphome-website.git`

Vercel project: `zhendgan/ourfrphome-website`

## Domain Change Completed

The FRP HOME production URL standard has been changed to:

```text
https://www.myfrphome.com
```

Updated code and documentation references:

- `.env.example`
- `lib/site-config.ts`
- `next.config.ts`
- `PRODUCTION_DEPLOYMENT.md`
- `docs/vercel-launch-final-check.md`
- `docs/final-seo-geo-launch-check-2026-06-27.md`
- `docs/domain-brand-consistency-report.md`
- `docs/post-qa-fixes-2026-06-27.md`
- `docs/old-catalog-content-audit.md`

## Aliyun / HiChina DNS

The domain `myfrphome.com` is managed by Aliyun / HiChina nameservers:

```text
dns15.hichina.com
dns16.hichina.com
```

Website records added:

| Host Record | Type | Value | Status |
| --- | --- | --- | --- |
| `@` | `A` | `216.198.79.1` | Verified |
| `@` | `A` | `64.29.17.1` | Verified |
| `www` | `CNAME` | `c91344a3f5377e63.vercel-dns-017.com` | Verified |

Existing business email records were left untouched, including Aliyun Mail MX, SPF TXT, and mail service CNAME records.

## Vercel Domain Verification

Vercel CLI verification result:

| Domain | Result | Method |
| --- | --- | --- |
| `myfrphome.com` | PASS | A records |
| `www.myfrphome.com` | PASS | CNAME |

The Vercel account still also contains the previous custom domain. It should not be removed until the business owner confirms what to do with that old domain.

## SEO URL Verification

Generated output after `pnpm build`:

- `sitemap.xml` uses only `https://www.myfrphome.com`.
- `sitemap.xml` includes `https://www.myfrphome.com/catalog`.
- `robots.txt` references `https://www.myfrphome.com/sitemap.xml`.
- Canonical URLs use `https://www.myfrphome.com`.
- OpenGraph URLs use `https://www.myfrphome.com`.
- JSON-LD Organization uses `https://www.myfrphome.com/#organization`.
- JSON-LD WebSite uses `https://www.myfrphome.com/#website`.

Build artifact verification:

| Check | Result |
| --- | --- |
| Sitemap URL count | PASS: 26 URLs |
| Non-`myfrphome.com` sitemap URLs | PASS: 0 |
| `/catalog` in sitemap | PASS |
| `robots.txt` sitemap line | PASS |
| Production HTML legacy-domain scan | PASS: 29 HTML files checked, 0 old-domain hits |
| Visible contact links | PASS: `mailto`, `tel`, and WhatsApp links found in generated HTML |

Live custom-domain note:

- `https://www.myfrphome.com` already resolves through Vercel.
- Before this domain-change commit is deployed, live `robots.txt` may still show the previous production sitemap URL.
- Re-check live `robots.txt`, `sitemap.xml`, canonical tags, and apex-to-`www` redirect immediately after Vercel deploys this commit.

## Local Check Results

| Check | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | PASS |
| `pnpm lint` | PASS |
| `pnpm build` | PASS |
| `git diff --check` | PASS |
| DNS lookup | PASS: apex A records and `www` CNAME resolve |
| Vercel domain verify | PASS: apex and `www` configured correctly |
| Browser plugin mobile QA | NOT COMPLETED: in-app Browser automation timed out |
| Playwright mobile QA | NOT COMPLETED: Chromium runtime download did not complete in time |

No UI files were changed for this domain switch, but a live desktop/mobile browser smoke test is still recommended after deployment.

## API / Form Status

`/api/inquiry` is compatible with Vercel Node.js runtime.

Configured environment variables:

- `NEXT_PUBLIC_SITE_URL=https://www.myfrphome.com`
- `NEXT_PUBLIC_CONTACT_EMAIL=sales@tzcarbon.com`
- `NEXT_PUBLIC_CONTACT_PHONE=+86-13586461443`
- `NEXT_PUBLIC_CONTACT_WHATSAPP=+86-13586461443`
- `INQUIRY_TO_EMAIL=sales@tzcarbon.com`
- `INQUIRY_FROM_EMAIL=FRP HOME Website <website@tzcarbon.com>`

Remaining required secret:

- `RESEND_API_KEY`

The inquiry form cannot send real email until `RESEND_API_KEY` is added in Vercel and the sender is verified in Resend.

## Remaining Actions

- Deploy the latest commit so production HTML uses `https://www.myfrphome.com`.
- Confirm in the Vercel dashboard that `www.myfrphome.com` is the primary production domain.
- Add `RESEND_API_KEY` in Vercel before the live inquiry-form test.
- After deployment, open `https://www.myfrphome.com/robots.txt` and `https://www.myfrphome.com/sitemap.xml`.
- Submit `https://www.myfrphome.com/sitemap.xml` in Google Search Console.
