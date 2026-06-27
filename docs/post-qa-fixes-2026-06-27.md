# Post-QA Fixes - 2026-06-27

## Files Changed

- `app/sitemap.ts`
- `lib/site-config.ts`
- `components/site-footer.tsx`
- `app/contact/page.tsx`
- `app/catalog/page.tsx`
- `app/catalog/catalog.module.css`
- `components/ui.tsx`
- `app/products/page.tsx`
- `app/globals.css`
- `app/technical-center/page.tsx`
- `app/technical-resources/page.tsx`
- `docs/post-qa-fixes-2026-06-27.md`

## Exact Fixes Completed

1. Added `/catalog` to the sitemap static routes.
   - Route: `https://www.myfrphome.com/catalog`
   - Change frequency: `monthly`
   - Priority: `0.75`

2. Centralized clickable contact links in `siteConfig`.
   - Email: `mailto:sales@tzcarbon.com`
   - Phone: `tel:+8613586461443`
   - WhatsApp: `https://wa.me/8613586461443`

3. Applied clickable contact links across visible contact surfaces.
   - Contact page contact methods
   - Global footer contact details
   - Digital catalog contact bands and back cover
   - Technical center and technical resources email CTAs

4. Tuned the product directory hero.
   - Added a `className` prop to `PageHero` so page-specific hero tuning can stay scoped.
   - Reduced product directory hero H1 scale and vertical spacing.
   - Reduced product hero image height.
   - Pulled the following product directory section higher in the first viewport while preserving the premium industrial B2B style.

5. Added catalog contact-link hover styling.
   - Catalog email, phone and WhatsApp links now inherit the catalog design and use the orange accent on hover.

## Test Results

| Check | Result | Evidence |
| --- | --- | --- |
| `pnpm lint` | PASS | `eslint .` completed successfully |
| `pnpm build` | PASS | `next build --webpack` completed successfully; `/catalog` listed as a static route |
| Generated sitemap output | PASS | `.next/server/app/sitemap.xml.body` includes `<loc>https://www.myfrphome.com/catalog</loc>` |
| Local sitemap route | PASS | `http://127.0.0.1:3000/sitemap.xml` includes `https://www.myfrphome.com/catalog` |
| Contact links on `/contact` | PASS | Browser-rendered page has 2 `mailto`, 2 `tel`, and 2 WhatsApp links |
| Contact links on `/catalog` | PASS | Browser-rendered page has 4 `mailto`, 4 `tel`, and 4 WhatsApp links |
| Product desktop layout | PASS | `1440x980`: H1 `61.92px`, hero bottom `688px`, next section top `760px`, no horizontal overflow |
| Product mobile layout | PASS | `390x844`: H1 `39px`, hero bottom `744px`, next section top `798px`, no horizontal overflow |
| Browser framework overlay | PASS | No runtime/build error overlay detected on checked product/contact routes |
| Browser console | PASS | No recent local page warn/error logs detected during refined product/contact checks |
| Interaction proof | PASS | Product directory `Request a Quote` CTA navigated to `/contact` |

## Browser Evidence

- Product desktop screenshot: `/tmp/zd-carbon-post-qa-fixes-2026-06-27/products-desktop.png`
- Product mobile screenshot: `/tmp/zd-carbon-post-qa-fixes-2026-06-27/products-mobile.png`
- Contact desktop screenshot: `/tmp/zd-carbon-post-qa-fixes-2026-06-27/contact-desktop-after-cta.png`
- Contact mobile screenshot: `/tmp/zd-carbon-post-qa-fixes-2026-06-27/contact-mobile.png`
- Catalog desktop screenshot: `/tmp/zd-carbon-post-qa-fixes-2026-06-27/catalog-desktop.png`

## Remaining Recommendations

- No required issue from `full-site-qa-report-2026-06-27.md` remains open.
- Run a final production-domain smoke test only after deployment is approved.
- Deployment was not performed.
