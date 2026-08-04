export const defaultLocale = "en" as const;
export const activeLocales = ["en", "es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr", "uk", "vi", "th"] as const;
export const localizedLocales = ["es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr", "uk", "vi", "th"] as const;
export const futureLocales = [] as const;

export type Locale = (typeof activeLocales)[number];
export type LocalizedLocale = (typeof localizedLocales)[number];
export type FutureLocale = (typeof futureLocales)[number];
export type ExtendedLocale = Exclude<LocalizedLocale, "es" | "pt-br">;

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  "pt-br": "Português BR",
  ru: "Русский",
  ar: "العربية",
  fr: "Français",
  ko: "한국어",
  pl: "Polski",
  tr: "Türkçe",
  uk: "Українська",
  vi: "Tiếng Việt",
  th: "ไทย",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  "pt-br": "PT-BR",
  ru: "RU",
  ar: "AR",
  fr: "FR",
  ko: "KO",
  pl: "PL",
  tr: "TR",
  uk: "UK",
  vi: "VI",
  th: "TH",
};

export const hreflangLocales: Record<Locale, string> = {
  en: "en",
  es: "es",
  "pt-br": "pt-BR",
  ru: "ru",
  ar: "ar",
  fr: "fr",
  ko: "ko",
  pl: "pl",
  tr: "tr",
  uk: "uk",
  vi: "vi",
  th: "th",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  "pt-br": "pt_BR",
  ru: "ru_RU",
  ar: "ar_SA",
  fr: "fr_FR",
  ko: "ko_KR",
  pl: "pl_PL",
  tr: "tr_TR",
  uk: "uk_UA",
  vi: "vi_VN",
  th: "th_TH",
};

export const localeLocationLabels: Record<Locale, string> = {
  en: "Zhejiang, China",
  es: "Zhejiang, China",
  "pt-br": "Zhejiang, China",
  ru: "Чжэцзян, Китай",
  ar: "تشجيانغ، الصين",
  fr: "Zhejiang, Chine",
  ko: "중국 저장성",
  pl: "Zhejiang, Chiny",
  tr: "Zhejiang, Çin",
  uk: "Чжецзян, Китай",
  vi: "Chiết Giang, Trung Quốc",
  th: "เจ้อเจียง, จีน",
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
