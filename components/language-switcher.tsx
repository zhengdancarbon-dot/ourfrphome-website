"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  activeLocales,
  getLocaleFromPathname,
  getUnlocalizedPath,
  hreflangLocales,
  localeShortLabels,
} from "@/lib/i18n/config";
import { isPhaseOneLocalizedPath, phaseOneLocalePath } from "@/lib/i18n/phase-one-paths";
import { getUiCopy } from "@/lib/i18n/ui-copy";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const path = getUnlocalizedPath(pathname);
  const targetPath = isPhaseOneLocalizedPath(path) ? path : "/";
  const copy = getUiCopy(locale);

  return (
    <div className={compact ? "language-switcher language-switcher-compact" : "language-switcher"}>
      <span>{copy.language.label}</span>
      <div>
        {activeLocales.map((targetLocale) => (
          <Link
            href={phaseOneLocalePath(targetPath, targetLocale)}
            hrefLang={hreflangLocales[targetLocale]}
            aria-current={targetLocale === locale ? "true" : undefined}
            key={targetLocale}
          >
            {localeShortLabels[targetLocale]}
          </Link>
        ))}
      </div>
    </div>
  );
}
