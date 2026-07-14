"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe2 } from "lucide-react";
import {
  activeLocales,
  getLocaleFromPathname,
  getUnlocalizedPath,
  hreflangLocales,
  localeLabels,
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
    <details className={compact ? "language-switcher language-switcher-compact" : "language-switcher"}>
      <summary aria-label={`${copy.language.label}: ${localeLabels[locale]}`}>
        <Globe2 size={15} aria-hidden="true" />
        <span>{copy.language.label}</span>
        <strong>{localeShortLabels[locale]}</strong>
        <ChevronDown className="language-switcher-chevron" size={14} aria-hidden="true" />
      </summary>
      <div className="language-menu">
        {activeLocales.map((targetLocale) => (
          <Link
            href={phaseOneLocalePath(targetPath, targetLocale)}
            hrefLang={hreflangLocales[targetLocale]}
            aria-current={targetLocale === locale ? "page" : undefined}
            key={targetLocale}
          >
            <span>{localeLabels[targetLocale]}</span>
            <small>{localeShortLabels[targetLocale]}</small>
          </Link>
        ))}
      </div>
    </details>
  );
}
