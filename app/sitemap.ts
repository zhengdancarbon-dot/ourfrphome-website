import type { MetadataRoute } from "next";
import { productCatalog } from "@/lib/product-catalog";
import { absoluteUrl } from "@/lib/seo";

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
    { path: "/catalog", changeFrequency: "monthly", priority: 0.75 },
    { path: "/technical-resources", changeFrequency: "monthly", priority: 0.5 },
    { path: "/packaging-shipping", changeFrequency: "monthly", priority: 0.5 },
  ] as const;
  const productRoutes = productCatalog.map((product) => ({
    path: `/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
