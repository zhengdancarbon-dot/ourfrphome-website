# Repository Recovery Checkpoint R11

Date: 2026-07-27

## Current source state

- Branch: `codex/repository-recovery-20260723`
- Commit: `3a39f12ec1b27b7e9995ae9cfa351cd0722515a9`
- GitHub repository: `zhengdancarbon-dot/ourfrphome-website`
- Remote branch: `origin/codex/repository-recovery-20260723`
- Recovery tag: `recovery/source-complete-2026-07-27-r11`

The remote branch and tag were read back from GitHub after pushing. The branch
reference matches the local recovery commit.

## Offline complete-history bundle

Path:

`.codex-output-work/FRP-HOME-source-recovery-2026-07-27-r11.bundle`

The 73 MB bundle passed `git bundle verify` and records complete history for:

- `codex/repository-recovery-20260723`;
- `recovery/source-complete-2026-07-27-r11`; and
- `main`.

This bundle remains local and intentionally is not committed to the repository.

## Scope protection

User source-material directories remain untracked and were not added, removed,
renamed or pushed. Production was not deployed. `main` was not merged or moved.

## Website verification at checkpoint

- `pnpm lint`: zero project errors; three unrelated output-script warnings.
- `pnpm build`: PASS, including TypeScript and 219 generated routes.
- production-mode audit: PASS for 210 sitemap URLs, 351 internal resources,
  nine verified documents, three document-hub entry points and three negative
  404 checks.
- Vercel Preview: `dpl_D5JZBc6FMHQsY7zfy1CqaYH5tUSW`, `READY`.

## Restore examples

Restore from GitHub without touching `main`:

```bash
git fetch origin codex/repository-recovery-20260723
git switch --create recovered-frp-home origin/codex/repository-recovery-20260723
```

Restore from the offline bundle:

```bash
git clone FRP-HOME-source-recovery-2026-07-27-r11.bundle recovered-frp-home
```
