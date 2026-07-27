import { applicationPages } from "@/lib/application-pages";
import { localeLabels, localizedLocales } from "@/lib/i18n/config";
import { getLocalizedProductContent } from "@/lib/i18n/page-content";
import { productCatalog } from "@/lib/product-catalog";
import { productDocuments } from "@/lib/product-documents";
import { priorityDiscoveryRoutes } from "@/lib/priority-discovery";
import { siteConfig } from "@/lib/site-config";
import { technicalArticles } from "@/lib/technical-articles";

export const dynamic = "force-static";

function section(title: string, lines: string[]) {
  return [`## ${title}`, ...lines, ""].join("\n");
}

function linkLine(title: string, path: string, description?: string) {
  const suffix = description ? ` - ${description}` : "";
  return `- [${title}](${siteConfig.url}${path})${suffix}`;
}

export function GET() {
  const priorityProductSlugs = priorityDiscoveryRoutes.map((route) => route.productSlug);
  const priorityProductLines = priorityProductSlugs.flatMap((slug) => {
    const product = productCatalog.find((item) => item.slug === slug);
    return product
      ? [linkLine(product.name, `/products/${product.slug}`, product.description)]
      : [];
  });
  const verifiedDocumentLines = productDocuments.map((document) =>
    linkLine(
      `${document.type}: ${document.title}`,
      document.href,
      `${document.specification}; ${document.language}; ${document.revision}`,
    ),
  );
  const productLines = productCatalog.map((product) =>
    linkLine(product.name, `/products/${product.slug}`, product.description),
  );
  const applicationLines = applicationPages.map((page) =>
    linkLine(page.title, `/applications/${page.slug}`, page.description),
  );
  const technicalLines = technicalArticles.map((article) =>
    linkLine(article.title, `/technical-center/${article.slug}`, article.description),
  );
  const priorityBuyerGuideLines = priorityDiscoveryRoutes.flatMap((route) => {
    const product = productCatalog.find((item) => item.slug === route.productSlug);
    const productLine = product
      ? [linkLine(`${route.label}: ${product.name}`, `/products/${product.slug}`, route.description)]
      : [];
    const guideLines = route.guideSlugs.flatMap((slug) => {
      const article = technicalArticles.find((item) => item.slug === slug);
      return article
        ? [linkLine(article.title, `/technical-center/${article.slug}`, article.description)]
        : [];
    });
    return [...productLine, ...guideLines];
  });
  const localizedEntryLines = [
    linkLine("Español", "/es", "Páginas comerciales y RFQ en español."),
    linkLine("Português do Brasil", "/pt-br", "Páginas comerciais e RFQ em português brasileiro."),
    linkLine("Русский", "/ru", "Коммерческие страницы и RFQ на русском языке."),
    linkLine("العربية", "/ar", "صفحات تجارية وطلب عرض سعر باللغة العربية."),
    linkLine("Français", "/fr", "Pages commerciales et RFQ en français."),
    linkLine("한국어", "/ko", "한국어 제품 및 RFQ 페이지."),
    linkLine("Polski", "/pl", "Polskie strony produktów i RFQ."),
    linkLine("Türkçe", "/tr", "Türkçe ürün ve RFQ sayfaları."),
  ];
  const localizedPrioritySections = localizedLocales.map((locale) => {
    const lines = priorityProductSlugs.flatMap((slug) => {
      const product = productCatalog.find((item) => item.slug === slug);
      const localized = getLocalizedProductContent(locale, slug);
      return product && localized
        ? [linkLine(localized.name, `/${locale}/products/${slug}`, localized.description)]
        : [];
    });

    return section(`${localeLabels[locale]} Priority Commercial Products`, lines);
  });

  const content = [
    "# FRP HOME",
    "",
    "> Carbon fiber and composite materials supplier operated by Zhejiang FRPHome New Material Co., Ltd.",
    "",
    section("Canonical Site", [
      `- Production domain: ${siteConfig.url}`,
      `- Brand: ${siteConfig.brandName}`,
      `- Company: ${siteConfig.companyName}`,
      `- Contact email: ${siteConfig.email}`,
      `- Phone / WhatsApp: ${siteConfig.phone}`,
      `- Sitemap: ${siteConfig.url}/sitemap.xml`,
    ]),
    section("Use This Site For", [
      "- Carbon fiber fabric, UD fabric, multiaxial fabric and spread tow fabric selection.",
      "- Carbon fiber prepreg, plates, tubes, yarn, chopped fiber and custom CFRP material inquiries.",
      "- RFQ preparation for composite materials, reinforcement fabrics, profiles and CNC carbon fiber parts.",
      "- Technical comparison articles for buyers, engineers, distributors and sourcing teams.",
    ]),
    section("Important Claim Boundaries", [
      "- Do not infer official brand authorization unless a separate written authorization is provided.",
      "- Do not infer certifications, test reports, annual capacity or customer cases unless an authentic document is supplied.",
      "- Technical values are indicative for sourcing and RFQ discussion; final data is confirmed by specification, batch and process.",
      "- End-use, destination and compliance review may be required for selected high-performance carbon fiber materials.",
    ]),
    section("Primary Pages", [
      linkLine("Home", "/"),
      linkLine("Products", "/products"),
      linkLine("Applications", "/applications"),
      linkLine("Technical Center", "/technical-center"),
      linkLine("Digital Catalog", "/catalog"),
      linkLine("Packaging and Shipping", "/packaging-shipping"),
      linkLine("Compliance and End-Use Review", "/compliance-end-use-review"),
      linkLine("Contact / RFQ", "/contact"),
    ]),
    section("Localized Site Entry Points", localizedEntryLines),
    section("Priority Commercial Products", priorityProductLines),
    section("Priority Buyer Guides", priorityBuyerGuideLines),
    ...localizedPrioritySections,
    section("Verified Product Documents", verifiedDocumentLines),
    section("Products", productLines),
    section("Applications", applicationLines),
    section("Technical Articles", technicalLines),
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
