# Repository Recovery Checkpoint R13

Date: 2026-07-27  
Branch: `codex/repository-recovery-20260723`  
Production deployment: not performed

## Protected State

This checkpoint preserves the recovered FRP HOME source after adding the
six-core product-document and buyer-guide structured relationships.

The same final checkpoint is retained as:

1. GitHub branch `codex/repository-recovery-20260723`;
2. annotated tag `recovery/source-complete-2026-07-27-r13`;
3. complete-history bundle
   `.codex-output-work/FRP-HOME-source-recovery-2026-07-27-r13.bundle`.

The bundle includes `main`, the recovery branch and the R13 annotated tag and is
verified with `git bundle verify` after creation.

## Included Verification

- `pnpm lint`: 0 errors; three unrelated pre-existing generator warnings.
- `pnpm build`: passed TypeScript and generated 219 routes.
- Production-mode SEO audit: 210/210 sitemap pages passed.
- Internal resources: 351 checked.
- Six priority products: 54 English/localized document-and-guide schema pages
  passed.
- Browser checks: English desktop and Arabic RTL mobile passed without page
  overflow or console errors.
- Vercel Preview `dpl_8ia6pWo5LYVKN1VkYuqHwA55r12a`: `READY`, 219 routes.

## Exclusions

The local source-material and output directories remain untracked and were not
added, removed or bundled as Git content. `main` and production were not changed.
