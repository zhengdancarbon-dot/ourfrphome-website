import { applicationPages } from "@/lib/application-pages";
import { productCatalog } from "@/lib/product-catalog";
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
  const productLines = productCatalog.map((product) =>
    linkLine(product.name, `/products/${product.slug}`, product.description),
  );
  const applicationLines = applicationPages.map((page) =>
    linkLine(page.title, `/applications/${page.slug}`, page.description),
  );
  const technicalLines = technicalArticles.map((article) =>
    linkLine(article.title, `/technical-center/${article.slug}`, article.description),
  );

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
