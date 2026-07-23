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

## Revalidation after the source deletion report

The repository was rechecked after a further report that many source files had
been deleted:

- The current branch contains 73 tracked files under `app/`, `components/`,
  `lib/`, `scripts/`, and `src/`. This is the largest source tree among the
  current local and fetched remote branches; `origin/main` contains 69.
- No tracked file is deleted in the working tree or index.
- The current branch has no deleted source path relative to `origin/main`.
- The union of all fetched remote branches contains only one source path absent
  from the current branch: the intentionally retired localized applications
  index documented above.
- Dangling Git trees and the pre-repair object backup contain no additional
  source path that is missing from the current branch.
- A fresh production build generated 216 pages. The full local production audit
  passed for 207 sitemap URLs, 346 internal resources, six priority product
  pages, 27 localized video pages, and three negative 404 checks.

## Independent recovery bundle

A complete Git recovery bundle was created and verified at:

`.codex-output-work/FRP-HOME-source-recovery-2026-07-23.bundle`

The ignored bundle is 70 MB, contains the complete history, and records both
`codex/repository-recovery-20260723` at `7e39a6b` and `origin/main` at
`d57e226`. It excludes untracked source-material and output directories.

The recovery branch has not yet been pushed to GitHub. The push was attempted
but the local HTTPS Git client had no available GitHub credential. No remote
branch, merge, or production deployment was performed by that failed attempt.
