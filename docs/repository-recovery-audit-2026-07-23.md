# Repository Recovery Audit

Date: 2026-07-23

Branch: `codex/repository-recovery-20260723`

## Recovery completed

- Restored the repository from shallow history to complete Git history with all available remote branches.
- Fetched and preserved the historical multilingual, RFQ, catalog, TDS, and SEO branch references from GitHub.
- Ran a full Git object integrity check. No missing or corrupt objects remain.
- Compared the current tracked tree with the union of all remote branch trees.

## Source deletion finding

The current worktree has no tracked source deletions. The only historical source path not present in the current tree is:

- `app/[locale]/applications/page.tsx`

This file was intentionally removed in commit `cc7596d` (`Scope i18n phase one routes to approved pages`). Restoring it would republish a localized applications index that was explicitly excluded from the approved localized route set. The live localized application detail routes remain generated and valid.

The current recovery branch contains 1,160 inserted lines and 19 deleted lines relative to `origin/main`; it does not contain a bulk source deletion.

## Verification

- `git fsck --full`: PASS
- Repository shallow state: `false`
- `pnpm lint`: PASS with 0 errors and 3 warnings from an unrelated untracked Morocco output script
- `pnpm build`: PASS
- TypeScript: PASS
- Generated routes: 216
- Sitemap URL audit: 207/207 PASS
- Internal resource audit: 346/346 PASS
- Priority product page audit: 5/5 PASS
- Negative 404 checks: 3/3 PASS

Locale URL counts:

- English: 55
- Spanish: 19
- Brazilian Portuguese: 19
- Russian: 19
- Arabic: 19
- French: 19
- Korean: 19
- Polish: 19
- Turkish: 19

## Safety notes

- No production deployment was performed.
- No user photo, TDS source, Chinese material, `outputs/`, or Morocco promotion directory was modified or staged.
- The intentionally removed localized applications index was not restored.
