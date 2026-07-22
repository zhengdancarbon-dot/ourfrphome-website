import type { MetadataRoute } from "next";
import { applicationPages } from "@/lib/application-pages";
import { activeLocales, defaultLocale, hreflangLocales, localePath, localizedLocales, type Locale, type LocalizedLocale } from "@/lib/i18n/config";
import { getPhaseOneLocalizedPaths, isPhaseOneLocalizedPath } from "@/lib/i18n/phase-one";
import { productCatalog } from "@/lib/product-catalog";
import { absoluteUrl } from "@/lib/seo";
import { technicalArticles } from "@/lib/technical-articles";

const productLastModified: Record<string, string> = {
  "carbon-fiber-multiaxial-ncf-fabric": "2026-07-17",
  "3k-carbon-fiber-laminate-sheet": "2026-07-17",
  "carbon-fiber-yarn-and-tow": "2026-07-21",
  "carbon-fiber-woven-fabric": "2026-07-21",
  "carbon-fiber-ud-fabric": "2026-07-21",
  "structural-strengthening-system": "2026-07-21",
};

const localizedProductLastModified: Partial<Record<LocalizedLocale, Record<string, string>>> = {
  ru: {
    "carbon-fiber-multiaxial-ncf-fabric": "2026-07-22",
    "3k-carbon-fiber-laminate-sheet": "2026-07-22",
    "carbon-fiber-yarn-and-tow": "2026-07-22",
    "carbon-fiber-woven-fabric": "2026-07-22",
    "carbon-fiber-ud-fabric": "2026-07-22",
    "structural-strengthening-system": "2026-07-22",
  },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1, lastModified: new Date("2026-07-21") },
    { path: "/products", changeFrequency: "weekly", priority: 0.95 },
    { path: "/applications", changeFrequency: "monthly", priority: 0.85 },
    { path: "/processes", changeFrequency: "monthly", priority: 0.85 },
    { path: "/technical-center", changeFrequency: "monthly", priority: 0.85, lastModified: new Date("2026-07-21") },
    { path: "/quality-control", changeFrequency: "monthly", priority: 0.75 },
    { path: "/about", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/compliance-end-use-review", changeFrequency: "monthly", priority: 0.7 },
    { path: "/catalog", changeFrequency: "monthly", priority: 0.75 },
    { path: "/technical-resources", changeFrequency: "monthly", priority: 0.5 },
    { path: "/packaging-shipping", changeFrequency: "monthly", priority: 0.5 },
  ] as const;
  const productRoutes = productCatalog.map((product) => ({
    path: `/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    ...(productLastModified[product.slug]
      ? { lastModified: new Date(productLastModified[product.slug]) }
      : {}),
  }));
  const applicationRoutes = applicationPages.map((page) => ({
    path: `/applications/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));
  const technicalArticleRoutes = technicalArticles.map((article) => ({
    path: `/technical-center/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.78,
    ...(article.reviewedAt || article.publishedAt
      ? { lastModified: new Date(article.reviewedAt || article.publishedAt || "") }
      : {}),
  }));

  const routes = [...staticRoutes, ...productRoutes, ...applicationRoutes, ...technicalArticleRoutes];
  const routeMap = new Map(routes.map((route) => [route.path, route]));

  function alternates(path: string) {
    if (!isPhaseOneLocalizedPath(path)) return undefined;

    return {
      languages: {
        ...Object.fromEntries(
          activeLocales.map((locale) => [
            hreflangLocales[locale],
            absoluteUrl(localePath(path, locale)),
          ]),
        ),
        "x-default": absoluteUrl(localePath(path, defaultLocale)),
      },
    };
  }

  function entry(route: (typeof routes)[number], locale: Locale = defaultLocale) {
    const routeLastModified =
      "lastModified" in route && route.lastModified instanceof Date
        ? route.lastModified
        : undefined;
    const productSlug = route.path.startsWith("/products/")
      ? route.path.slice("/products/".length)
      : undefined;
    const localizedLastModified = locale !== defaultLocale && productSlug
      ? localizedProductLastModified[locale]?.[productSlug]
      : undefined;
    const entryLastModified = locale === defaultLocale
      ? routeLastModified
      : localizedLastModified
        ? new Date(localizedLastModified)
        : undefined;

    return {
      url: absoluteUrl(localePath(route.path, locale)),
      ...(entryLastModified ? { lastModified: entryLastModified } : {}),
      changeFrequency: route.changeFrequency,
      priority: locale === defaultLocale ? route.priority : Math.max(route.priority - 0.05, 0.5),
      ...(alternates(route.path) ? { alternates: alternates(route.path) } : {}),
    };
  }

  const englishEntries = routes.map((route) => entry(route));
  const localizedEntries = getPhaseOneLocalizedPaths().flatMap((path) => {
    const route = routeMap.get(path);
    if (!route) return [];
    return localizedLocales.map((locale) => entry(route, locale));
  });

  return [...englishEntries, ...localizedEntries];
}
