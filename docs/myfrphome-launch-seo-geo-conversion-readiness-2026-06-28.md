# myfrphome.com Launch, SEO/GEO and Conversion Readiness Report

Date: 2026-06-28

Production domain: `https://www.myfrphome.com`

Company name kept: `Zhejiang FRPHome New Material Co., Ltd.`

Deployment status: local branch changes only. No production deployment was performed.

## 1. Files Changed In This Pass

| File | Change |
| --- | --- |
| `.env.example` | Added launch analytics and webmaster verification variables: `GA4_MEASUREMENT_ID`, `GSC_VERIFICATION_CODE`, `BING_VERIFICATION_CODE`. |
| `app/layout.tsx` | Added optional GA4 loader, optional GSC/Bing verification metadata, and delegated click tracking for WhatsApp, email and catalog/download actions. |
| `components/inquiry-form.tsx` | Added `rfq_submit` event trigger after successful RFQ submission. |
| `next.config.ts` | Added permanent redirects for RFQ/contact/quality/about legacy URLs. |
| `app/catalog/page.tsx` | Replaced simple metadata with canonical/OG/Twitter metadata through `createPageMetadata`. |
| `app/internal-sales-link-guide/page.tsx` | Added noindex internal sales link guide. |
| `app/globals.css` | Added responsive styles for the internal sales link guide. |
| `lib/product-catalog.ts` | Added explicit `carbon fiber roving` wording on the Yarn & Tow product page. |

## 2. Optimized Pages Checked

Core pages checked locally at `http://127.0.0.1:3000`:

- `/`
- `/products`
- `/products/carbon-fiber-woven-fabric`
- `/products/spread-tow-carbon-fiber-fabric`
- `/products/carbon-fiber-ud-fabric`
- `/products/carbon-fiber-yarn-and-tow`
- `/products/prepreg-carbon-fiber-materials`
- `/products/chopped-carbon-fiber`
- `/products/milled-carbon-fiber-powder`
- `/products/3k-surface-carbon-fiber-tube`
- `/products/3k-carbon-fiber-laminate-sheet`
- `/products/structural-strengthening-system`
- `/applications`
- `/applications/automotive-carbon-fiber-parts`
- `/applications/civil-uav-drone-components`
- `/applications/plastic-resin-reinforcement`
- `/applications/structural-strengthening`
- `/applications/sports-equipment`
- `/applications/decorative-cfrp-panels`
- `/technical-center`
- `/contact`
- `/quality-control`
- `/about`
- `/compliance-end-use-review`
- `/catalog`

Result: PASS. All checked pages return `200`, have one H1, title metadata, canonical metadata, and no framework error overlay.

## 3. New / Existing Content Modules

New in this pass:

- `/internal-sales-link-guide`
  - Purpose: internal sales team link guide.
  - SEO handling: `noindex, nofollow`.
  - Sitemap handling: intentionally excluded from `sitemap.xml`.

Existing optimized modules confirmed:

- Applications: 6 independent application pages are generated.
- Technical Center: 10 technical article pages are generated.
- Compliance: `/compliance-end-use-review` exists.
- RFQ fallback form exists on contact/product RFQ areas.

## 4. Product Logic Fix Check

| Page | Result |
| --- | --- |
| `/products/carbon-fiber-ud-fabric` | PASS: RFQ area uses fiber direction, areal weight, width, fiber grade, roll length, resin/process, application, destination and documents. No woven-only fields found in the UD RFQ area. |
| `/products/spread-tow-carbon-fiber-fabric` | PASS: RFQ area uses pattern size, 8x8mm/10x10mm, tow size, fiber grade, areal weight, width, roll length and surface appearance. No yarn/tow sourcing fields found in the Spread Tow RFQ area. |
| `/products/prepreg-carbon-fiber-materials` | PASS: page includes woven prepreg, 3K twill prepreg, UD prepreg, spread tow prepreg and custom prepreg logic; RFQ fields include resin system/content, cure, processing, storage and shelf-life. |
| `/products/carbon-fiber-yarn-and-tow` | PASS: page includes 1K, 3K, 6K, 12K, 24K, 48K, 50K, carbon fiber yarn, carbon fiber tow, carbon fiber roving, PAN Precursor Fiber and Pre-oxidized PAN Fiber. Brand wording stays cautious. |
| `/products/structural-strengthening-system` | PASS: page treats strengthening as a system: UD fabric, pultruded CFRP plate, structural epoxy resin and CFRP strengthening system. |

Brand wording check: PASS. No active page text contains `Official distributor`, `Authorized agent`, or `Exclusive supplier`.

## 5. RFQ / Contact Conversion Check

| Item | Result |
| --- | --- |
| Contact page form visible | PASS |
| No `Loading RFQ form...` blocker | PASS |
| Product page RFQ fallback form | PASS |
| Required labels | PASS: Name, Company, Email, End Use / Final Application, Message |
| File upload field | PASS |
| Dynamic product fields | PASS |
| Mobile fill test | PASS: test values entered into Name, Company, Email, End Use and Message fields without layout issue |
| Contact links | PASS: `mailto:sales@tzcarbon.com`, `tel:+8613586461443`, `https://wa.me/8613586461443` |
| API route | PASS: `/api/inquiry` uses Vercel-compatible Node.js runtime |

Inquiry API environment variables:

- Required: `RESEND_API_KEY`
- Optional / recommended: `INQUIRY_TO_EMAIL=sales@tzcarbon.com`
- Optional / recommended: `INQUIRY_FROM_EMAIL=FRP HOME Website <website@myfrphome.com>`

Note: production email delivery was not re-tested in this pass to avoid sending a new live inquiry. Previous live delivery confirmation should remain valid as long as the Resend domain and API key stay configured.

## 6. Analytics / Conversion Tracking Prep

Environment variables now reserved:

- `GA4_MEASUREMENT_ID`
- `GSC_VERIFICATION_CODE`
- `BING_VERIFICATION_CODE`

Events prepared:

- `rfq_submit`: triggered after successful RFQ submission.
- `whatsapp_click`: delegated click tracking for `wa.me` links.
- `email_click`: delegated click tracking for email links.
- `catalog_download`: delegated click tracking for `/catalog` and download links.

GA4 script behavior:

- If `GA4_MEASUREMENT_ID` is empty, no GA4 script loads.
- If configured in Vercel, GA4 loads through `next/script` after interaction.

GSC/Bing verification behavior:

- Verification meta tags are only output when the corresponding environment variable is configured.

## 7. SEO / GEO Technical Check

| Check | Result |
| --- | --- |
| Production URL standard | PASS: `https://www.myfrphome.com` |
| Sitemap route | PASS: `/sitemap.xml` returns `200` |
| Sitemap URL count | PASS: 43 URLs |
| Sitemap domain | PASS: every URL starts with `https://www.myfrphome.com` |
| `/catalog` in sitemap | PASS |
| `/contact` in sitemap | PASS |
| Internal sales guide in sitemap | PASS: not included, because it is `noindex` |
| Robots route | PASS: `/robots.txt` returns `200` |
| Robots sitemap line | PASS: `Sitemap: https://www.myfrphome.com/sitemap.xml` |
| Robots core blocking | PASS: core routes are not blocked |
| Canonical tags | PASS on all checked core pages |
| OpenGraph URLs | PASS via `createPageMetadata` and production `siteConfig.url` |
| Organization JSON-LD | PASS: `https://www.myfrphome.com/#organization` |
| WebSite JSON-LD | PASS: `https://www.myfrphome.com/#website` |
| Product schema | PASS on checked product pages |
| FAQ schema | PASS on checked product and article pages |
| Breadcrumb schema | PASS on checked product, application and article pages |
| Technical Article schema | PASS on checked technical articles |
| Application WebPage schema | PASS on checked application page |

## 8. Sitemap And Robots URLs For Submission

- Sitemap: `https://www.myfrphome.com/sitemap.xml`
- Robots: `https://www.myfrphome.com/robots.txt`

## 9. Priority URLs For Google / Bing Submission

Submit these after deployment:

- `https://www.myfrphome.com/`
- `https://www.myfrphome.com/products`
- `https://www.myfrphome.com/products/carbon-fiber-woven-fabric`
- `https://www.myfrphome.com/products/spread-tow-carbon-fiber-fabric`
- `https://www.myfrphome.com/products/carbon-fiber-ud-fabric`
- `https://www.myfrphome.com/products/carbon-fiber-yarn-and-tow`
- `https://www.myfrphome.com/products/prepreg-carbon-fiber-materials`
- `https://www.myfrphome.com/products/chopped-carbon-fiber`
- `https://www.myfrphome.com/products/milled-carbon-fiber-powder`
- `https://www.myfrphome.com/products/3k-surface-carbon-fiber-tube`
- `https://www.myfrphome.com/products/3k-carbon-fiber-laminate-sheet`
- `https://www.myfrphome.com/products/structural-strengthening-system`
- `https://www.myfrphome.com/applications/automotive-carbon-fiber-parts`
- `https://www.myfrphome.com/applications/civil-uav-drone-components`
- `https://www.myfrphome.com/applications/plastic-resin-reinforcement`
- `https://www.myfrphome.com/applications/structural-strengthening`
- `https://www.myfrphome.com/technical-center/3k-vs-12k-carbon-fiber-fabric`
- `https://www.myfrphome.com/technical-center/spread-tow-vs-traditional-carbon-fiber-fabric`
- `https://www.myfrphome.com/technical-center/prepreg-vs-dry-carbon-fiber-fabric`
- `https://www.myfrphome.com/technical-center/carbon-fiber-yarn-vs-tow-vs-roving`
- `https://www.myfrphome.com/contact`
- `https://www.myfrphome.com/catalog`

## 10. Permanent Redirect List

Next.js returns `308` for permanent redirects. This is permanent redirect behavior and is suitable for SEO migration.

| Old URL | New URL | Local status |
| --- | --- | --- |
| `/request-a-quote` | `/contact` | 308 |
| `/rfq` | `/contact` | 308 |
| `/contact-us` | `/contact` | 308 |
| `/quality` | `/quality-control` | 308 |
| `/about-us` | `/about` | 308 |
| `/products/woven-carbon-fiber-fabric` | `/products/carbon-fiber-woven-fabric` | 308 |
| `/products/ud-carbon-fiber-fabric` | `/products/carbon-fiber-ud-fabric` | 308 |
| `/products/carbon-fiber-yarn-tow` | `/products/carbon-fiber-yarn-and-tow` | 308 |
| `/products/carbon-fiber-powder` | `/products/milled-carbon-fiber-powder` | 308 |
| `/products/carbon-fiber-tube` | `/products/3k-surface-carbon-fiber-tube` | 308 |
| `/products/carbon-fiber-sheet-plate` | `/products/3k-carbon-fiber-laminate-sheet` | 308 |

## 11. Title / Meta Description Sample List

| URL | Title | Meta description |
| --- | --- | --- |
| `/` | Carbon Fiber Materials & CFRP Solutions for Global Composite Industries | Carbon fiber yarn and tow, woven carbon fiber fabric, spread tow fabric, UD fabric, prepreg materials, chopped and milled carbon fiber, CFRP profiles and structural strengthening systems for global composite industries. |
| `/products` | Carbon Fiber Composite Materials Product Center | Browse carbon fiber UD fabric, woven carbon fabric, multiaxial NCF fabric, prepreg fabric, pultruded plates, carbon tubes, chopped fiber, milled carbon fiber powder, yarn and tow, and custom carbon fiber products. |
| `/products/carbon-fiber-woven-fabric` | Woven Carbon Fiber Fabric | Woven carbon fiber fabric in 1K, 3K, 6K and 12K tow sizes with plain, twill, satin, jacquard and spread tow patterns for visible CFRP and composite laminates. |
| `/products/spread-tow-carbon-fiber-fabric` | Spread Tow Carbon Fiber Fabric | Spread tow carbon fiber fabric supplier for 8x8mm and 10x10mm checker pattern, 12K and 24K tow, visible CFRP parts and decorative carbon fiber panels. |
| `/products/carbon-fiber-ud-fabric` | UD Carbon Fiber Fabric | UD carbon fiber fabric supplier for 0 degree unidirectional reinforcement in 200, 300, 600 g/m2 and custom weights for composite laminates and structural strengthening. |
| `/products/carbon-fiber-yarn-and-tow` | Carbon Fiber Yarn & Tow | Carbon fiber yarn and tow supplier for 1K, 3K, 6K, 12K, 24K, 48K and 50K tow, including selected Chinese and international brand options by request and review. |
| `/products/prepreg-carbon-fiber-materials` | Prepreg Carbon Fiber Materials | Prepreg carbon fiber materials supplier for woven, 3K twill, UD, spread tow and custom carbon prepreg with controlled resin content and curing conditions. |
| `/products/chopped-carbon-fiber` | Chopped Carbon Fiber 3 mm 6 mm 12 mm | Chopped carbon fiber supplier offering 3 mm, 6 mm, 12 mm and custom lengths with sizing options for thermoplastics, thermosets and cementitious composites. |
| `/products/milled-carbon-fiber-powder` | Milled Carbon Fiber Powder Supplier | Milled carbon fiber powder supplier offering 30-300 µm typical lengths for conductive filler, resin modification and composite compounds. |
| `/products/structural-strengthening-system` | Carbon Fiber Structural Strengthening System | Carbon fiber structural strengthening system supplier for UD fabric, pultruded CFRP plate and structural epoxy resin used in concrete, bridge and building reinforcement. |
| `/contact` | Contact Carbon Fiber Fabric Manufacturer | Contact FRP HOME for quotations on carbon fiber cloth, UD carbon fiber fabric, carbon fiber prepreg, multiaxial fabric and composite materials from China. |
| `/catalog` | Digital Carbon Fiber Product Catalog | A4 digital catalog for FRP HOME covering carbon fiber fabrics, prepregs, plates, tubes, yarn, chopped fiber, hybrid fabrics and composite accessories. |

## 12. Browser / Mobile QA

Browser path: Codex in-app browser.

Viewport checks:

- Desktop homepage: PASS
- Mobile homepage: PASS
- Mobile Products overview: PASS
- Mobile product detail page: PASS
- Mobile Catalog page: PASS
- Mobile Contact / RFQ form: PASS

Observed results:

- Homepage hero image loads.
- Mobile Products menu opens and shows product family links.
- No checked viewport had horizontal overflow.
- Contact/RFQ form can be filled on mobile.
- Product detail page includes expected modules and JSON-LD.
- Catalog page has canonical metadata and 32 catalog pages rendered.
- Console error/warn logs were empty for checked flows.

## 13. Command Results

| Command / Check | Result |
| --- | --- |
| `pnpm lint` | PASS |
| `pnpm build` | PASS |
| Static route audit | PASS |
| Sitemap verification | PASS |
| Robots verification | PASS |
| Redirect verification | PASS |
| Product RFQ logic verification | PASS |
| Contact link verification | PASS |
| Browser mobile QA | PASS |

Build output summary:

- Next.js production build completed successfully.
- 51 app routes/pages generated.
- `/api/inquiry` remains a dynamic Node.js route.

## 14. Remaining Human-Supplied Materials

Do not invent these. Add only when real files are available:

- Final product catalog PDF for download, if different from the current digital catalog.
- Real inspection photos for quality modules.
- Real warehouse photos.
- Real packaging photos.
- Real packing label examples with customer-sensitive information removed.
- Sample TDS preview.
- Sample COA preview.
- Certification documents, only if officially provided.
- Testing reports, only if officially provided.
- Authorization documents, only if officially provided.
- Verified annual capacity, only if officially provided.
- Customer cases, only if approved for public use.

## 15. Final Status

The local branch is ready for the next deployment review.

Do not deploy to production until the business owner confirms the final local changes.
