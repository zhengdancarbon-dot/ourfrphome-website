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
- Priority product page audit: 6/6 PASS
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
the latest committed `codex/repository-recovery-20260723` branch state and
`origin/main` at `d57e226`. It excludes untracked source-material and output
directories.

The recovery branch has not yet been pushed to GitHub. The push was attempted
but the local HTTPS Git client had no available GitHub credential. No remote
branch, merge, or production deployment was performed by that failed attempt.

## Revalidation on 2026-07-27

A new recovery audit was completed after another source deletion report:

- The working tree and index contain zero deleted tracked files.
- The recovery branch contains 319 tracked files; the fetched `origin/main`
  snapshot contains 286 tracked files.
- The recovery branch is 33 tracked files ahead of the fetched production
  branch snapshot. The apparent source loss is therefore a remote branch
  synchronization gap, not a deletion in the recovered local tree.
- The recovery bundle and current branch both resolve to commit `0def5b8` before
  this report-only checkpoint.
- `git bundle verify` confirms that the bundle contains complete Git history.
- `git fsck --full` found no missing or corrupt object. Unreachable objects are
  retained historical objects and do not indicate current tree corruption.
- `pnpm lint` passed with zero project errors and the same three unrelated
  warnings from the ignored Morocco output script.
- `pnpm build` passed, including TypeScript, and generated 216 routes.
- The production-mode SEO audit passed for all 207 sitemap URLs, 346 internal
  resources, six priority product pages, 27 localized video pages, and three
  negative 404 checks.

No missing source file was restored over the current tree because the complete
recovered source was already present. Synchronizing this branch to GitHub must
be handled separately and must not trigger a production deployment without
explicit approval.

## Revalidation on 2026-07-27 after a new deletion report

- The working tree and index again contain zero deleted tracked files.
- The current recovery branch contains 74 tracked source files under `app/`,
  `components/`, `lib/`, `scripts/`, and `src/`.
- The union of every fetched local and remote branch contains 75 source paths.
  The sole path absent from the current tree remains
  `app/[locale]/applications/page.tsx`, intentionally retired in `cc7596d`.
- The recovery branch contains no deleted path relative to `main`; it adds
  source, documents, verified PDFs, videos, and audit tooling.
- The independent 27 July recovery bundle verifies successfully and records
  complete Git history at commit `202ecec`.
- `pnpm lint` passed with zero project errors and three warnings in an ignored,
  unrelated Morocco output script.
- `pnpm build` passed TypeScript and generated 219 routes.
- No user photo, TDS source, Chinese material, output, or promotion directory
  was modified or staged.

The recovered source is complete locally. A safe push of
`codex/repository-recovery-20260723` was attempted, but the local HTTPS Git
client had no readable GitHub credential. No remote branch, `main` merge, or
production deployment was performed.
