export const defaultLocale = "en" as const;
export const activeLocales = ["en", "es", "pt-br"] as const;
export const localizedLocales = ["es", "pt-br"] as const;
export const futureLocales = ["ru", "tr"] as const;

export type Locale = (typeof activeLocales)[number];
export type LocalizedLocale = (typeof localizedLocales)[number];
export type FutureLocale = (typeof futureLocales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  "pt-br": "Português BR",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  "pt-br": "PT-BR",
};

export const hreflangLocales: Record<Locale, string> = {
  en: "en",
  es: "es",
  "pt-br": "pt-BR",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  "pt-br": "pt_BR",
};

export function isActiveLocale(value: string): value is Locale {
  return (activeLocales as readonly string[]).includes(value);
}

export function isLocalizedLocale(value: string): value is LocalizedLocale {
  return (localizedLocales as readonly string[]).includes(value);
}

export function normalizePath(path = "/") {
  if (!path) return "/";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, "") : "/";
}

export function localePath(path: string, locale: Locale = defaultLocale) {
  const normalizedPath = normalizePath(path);
  if (locale === defaultLocale) return normalizedPath;
  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export function splitLocaleFromPathname(pathname: string) {
  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isActiveLocale(firstSegment)) {
    const path = `/${segments.slice(1).join("/")}`;
    return {
      locale: firstSegment,
      path: normalizePath(path),
    };
  }

  return {
    locale: defaultLocale,
    path: normalizedPath,
  };
}

export function getLocaleFromPathname(pathname: string) {
  return splitLocaleFromPathname(pathname).locale;
}

export function getUnlocalizedPath(pathname: string) {
  return splitLocaleFromPathname(pathname).path;
}

export function localizedAlternates(path: string) {
  const normalizedPath = normalizePath(path);

  return Object.fromEntries(
    activeLocales.map((locale) => [
      hreflangLocales[locale],
      localePath(normalizedPath, locale),
    ]),
  ) as Record<string, string>;
}

export function isSupportedFutureLocale(value: string): value is FutureLocale {
  return (futureLocales as readonly string[]).includes(value);
}
