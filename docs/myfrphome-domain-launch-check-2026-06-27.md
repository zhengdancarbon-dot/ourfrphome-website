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
| `@` | `TXT` | `google-site-verification=_mCgTsfzhKlTLF8Lx9nweEo9n4rcJt-mpxSzi59HE-0` | Verified |

Existing business email records were left untouched, including Aliyun Mail MX, SPF TXT, and mail service CNAME records.

Resend sender-domain records added and verified against Aliyun authoritative DNS:

| Host Record | Type | Value | Status |
| --- | --- | --- | --- |
| `resend._domainkey` | `TXT` | DKIM public key returned by Resend | Verified |
| `send` | `MX` | `feedback-smtp.ap-northeast-1.amazonses.com`, priority `10` | Verified |
| `send` | `TXT` | `v=spf1 include:amazonses.com ~all` | Verified |
| `_dmarc` | `TXT` | `v=DMARC1; p=none;` | Verified |

## Vercel Domain Verification

Vercel CLI verification result:

| Domain | Result | Method |
| --- | --- | --- |
| `myfrphome.com` | PASS | A records |
| `www.myfrphome.com` | PASS | CNAME |

The previous custom domain was removed from Vercel after business owner confirmation. The Vercel team domain list now contains only `myfrphome.com`.

Vercel domain redirect:

| Source | Target | Status |
| --- | --- | --- |
| `myfrphome.com` | `www.myfrphome.com` | PASS: `308` |

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

Live custom-domain result:

- `https://www.myfrphome.com` resolves through Vercel and returns `200`.
- `https://myfrphome.com` returns `308` to `https://www.myfrphome.com/`.
- Live `robots.txt` references `Sitemap: https://www.myfrphome.com/sitemap.xml`.
- Live `sitemap.xml` returns 26 URLs, all under `https://www.myfrphome.com`, including `/catalog`.
- Live `/contact` contains `mailto:sales@tzcarbon.com`, `tel:+8613586461443`, and `https://wa.me/8613586461443`.
- Google Search Console domain property `myfrphome.com` is verified by DNS TXT.
- Google Search Console accepted `https://www.myfrphome.com/sitemap.xml` with `Sitemap submitted successfully`.

## Local Check Results

| Check | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | PASS |
| `pnpm lint` | PASS |
| `pnpm build` | PASS |
| `git diff --check` | PASS |
| DNS lookup | PASS: apex A records and `www` CNAME resolve |
| Vercel domain verify | PASS: apex and `www` configured correctly |
| Vercel production deployment | PASS: commit `c31a6e3` reached `Ready` |
| Live robots/sitemap/contact links | PASS |
| Live apex-to-`www` redirect | PASS |
| Live `/api/inquiry` invalid payload | PASS: returns `400` validation errors |
| Live `/api/inquiry` valid payload | PENDING: returns `502` because Resend reports `myfrphome.com` is not verified |
| Resend DNS records | PASS: DKIM, MX, SPF, and DMARC records resolve from `dns15.hichina.com` |
| Google Search Console DNS verification | PASS |
| Google Search Console sitemap submission | PASS |
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
- `INQUIRY_FROM_EMAIL=FRP HOME Website <website@myfrphome.com>`

Configured secret:

- `RESEND_API_KEY`

Vercel environment status:

- Production: `INQUIRY_FROM_EMAIL` updated to `FRP HOME Website <website@myfrphome.com>`.
- Development: `INQUIRY_FROM_EMAIL` updated to `FRP HOME Website <website@myfrphome.com>`.
- Preview: Vercel required a non-production branch-specific variable; the current code fallback now uses `website@myfrphome.com`.

The inquiry form cannot pass the final live email test until the `myfrphome.com` sender domain is verified in Resend.

Latest production test:

- Deployment: commit `e753150`, Vercel status `Ready`.
- Valid RFQ payload result: `502`.
- Vercel log result: Resend returned `403` with `The myfrphome.com domain is not verified`.

## Remaining Actions

- Verify the `myfrphome.com` sender domain in Resend before the live inquiry-form test.
