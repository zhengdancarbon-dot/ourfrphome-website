import type { MetadataRoute } from "next";
import { applicationPages } from "@/lib/application-pages";
import { productCatalog } from "@/lib/product-catalog";
import { absoluteUrl } from "@/lib/seo";
import { technicalArticles } from "@/lib/technical-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-18");
  const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/products", changeFrequency: "weekly", priority: 0.95 },
    { path: "/applications", changeFrequency: "monthly", priority: 0.85 },
    { path: "/processes", changeFrequency: "monthly", priority: 0.85 },
    { path: "/technical-center", changeFrequency: "monthly", priority: 0.85 },
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
  }));

  return [...staticRoutes, ...productRoutes, ...applicationRoutes, ...technicalArticleRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
