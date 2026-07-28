# Production vs Recovery Branch Deployment Drift

Date: 2026-07-28  
Production domain: `https://www.myfrphome.com`  
Recovery branch: `codex/repository-recovery-20260723`  
Recovery commit: `1567772f73ba535a7c62ed64cd0440cf39d5dfa0`  
Production deployment: not changed during this review

## Executive Conclusion

The missing production video SEO is a deployment-version mismatch, not a new
source deletion.

The current recovery branch remains intact and matches its GitHub tracking ref.
It contains the real video files, posters, localized visible copy and
`VideoObject` generation for the affected Multiaxial NCF, Yarn & Tow and 3K
Woven Fabric page groups. Production is still serving an older release.

No placeholder media or unsupported structured data should be added. The next
website action is a controlled promotion of the already verified recovery
Preview, after explicit production approval and the normal release gate.

## Evidence

### Repository integrity

- Local branch and `origin/codex/repository-recovery-20260723` both resolve to
  `1567772f73ba535a7c62ed64cd0440cf39d5dfa0`.
- `git status` reports no modified or deleted tracked files.
- Only the previously protected user source-material and output directories are
  untracked.
- Recovery checkpoint R13, its annotated tag and the verified complete-history
  bundle preserve the same commit.

### Production state observed on 2026-07-28

- `https://www.myfrphome.com/sitemap.xml` contains 207 URLs.
- Production pages return HTTP 200, but sampled NCF, Yarn & Tow and 3K Woven
  pages do not expose a video source, poster or `VideoObject`.
- Samples included English, Arabic, French and Brazilian Portuguese routes.
- This matches the weekly report's 27 affected localized pages: three product
  groups multiplied by nine languages.

### Recovery branch state

- The verified recovery build contains 210 sitemap URLs and generates 219
  routes.
- `lib/product-videos.ts` maps all nine locales for:
  - `carbon-fiber-multiaxial-ncf-fabric`;
  - `carbon-fiber-yarn-and-tow`;
  - `carbon-fiber-woven-fabric`.
- The referenced real media is tracked in Git:
  - `public/videos/carbon-fiber-multiaxial-ncf-directional-layer-production.mp4`;
  - `public/videos/carbon-fiber-yarn-tow-spool-creel.mp4`;
  - `public/videos/3k-woven-carbon-fiber-weaving-line.mp4`;
  - their corresponding product posters.
- The last production-equivalent audit passed all 210 sitemap pages and 45
  localized product-video pages.
- Vercel Preview deployment `dpl_8ia6pWo5LYVKN1VkYuqHwA55r12a` is Ready and
  generated all 219 routes.

## SEO Decision

- Keep title and meta description changes frozen. The 14 indexed days / 50
  impressions threshold is still not supported by GSC evidence.
- Do not interpret sitemap discovery or `lastModified` as indexing evidence.
- Do not add substitute videos, inferred production claims or fabricated
  structured data.
- Yarn & Tow metadata should not be rewritten again without real query data.

## Release Gate Before Production

1. Review the existing Ready Preview in a normal browser.
2. Confirm the Production inquiry environment variables are present without
   printing their values.
3. Run `pnpm lint` and `pnpm build` from the approved commit.
4. Run the complete SEO audit and desktop/mobile regression.
5. Submit one controlled RFQ and confirm delivery.
6. Obtain explicit production deployment approval.
7. After deployment, confirm 210 sitemap URLs and retest all 27 previously
   affected localized video pages.
8. Request one sitemap recrawl after the material production update; do not
   repeatedly request indexing.

## Data Still Required

- GSC Performance exports for the six exact priority URLs.
- URL Inspection results for the same routes.
- GA4 or CRM exports for RFQ, TDS/SPEC, email, WhatsApp and catalog actions.
- The next metadata decision remains scheduled only after a complete comparison
  window following 2026-08-10.

