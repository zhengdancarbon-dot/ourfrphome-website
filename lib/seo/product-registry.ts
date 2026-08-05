import { productCatalog } from "@/lib/product-catalog";
import { productDocuments } from "@/lib/product-documents";
import { phaseOneProductSlugs } from "@/lib/i18n/phase-one-paths";

export type ProductPublicationStatus = "live" | "draft" | "blocked";

export type ProductSeoRegistryEntry = {
  productId: string;
  family: string;
  canonicalPath: string;
  pageType: "product";
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetMarkets: string[];
  approvedLocales: string[];
  evidenceDocuments: string[];
  schemaType: "Product";
  conversionGoal: "rfq_submit" | "tds_download" | "catalog_download";
  publicationStatus: ProductPublicationStatus;
  lastReviewed: string;
};

export type CandidateSpecification = {
  productId: string;
  label: string;
  publicationStatus: "draft";
  publicationBlockers: string[];
};

const publishedLocalizedProducts = new Set<string>(phaseOneProductSlugs);
const globalMarkets = ["Global", "Ukraine", "Poland", "Vietnam", "Thailand", "South Korea", "Russia"];

function documentLinks(productId: string) {
  return productDocuments
    .filter((document) => document.productSlug === productId)
    .map((document) => document.href);
}

function entry(
  productId: string,
  family: string,
  primaryKeyword: string,
  secondaryKeywords: string[],
  conversionGoal: ProductSeoRegistryEntry["conversionGoal"] = "rfq_submit",
): ProductSeoRegistryEntry {
  return {
    productId,
    family,
    canonicalPath: `/products/${productId}`,
    pageType: "product",
    primaryKeyword,
    secondaryKeywords,
    targetMarkets: globalMarkets,
    approvedLocales: publishedLocalizedProducts.has(productId)
      ? ["en", "es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr", "uk", "vi", "th"]
      : ["en"],
    evidenceDocuments: documentLinks(productId),
    schemaType: "Product",
    conversionGoal,
    publicationStatus: "live",
    lastReviewed: "2026-08-05",
  };
}

export const productSeoRegistry: ProductSeoRegistryEntry[] = [
  entry("carbon-fiber-multiaxial-ncf-fabric", "multiaxial-ncf", "carbon fiber multiaxial fabric supplier", ["biaxial carbon fiber fabric", "300gsm biaxial carbon fabric", "600gsm +45/-45 carbon NCF", "custom width carbon multiaxial fabric"], "tds_download"),
  entry("carbon-fiber-woven-fabric", "woven-fabric", "3K 200gsm twill carbon fiber fabric supplier", ["3K twill carbon fiber fabric", "carbon fiber cloth supplier", "carbon fiber fabric for vacuum infusion"], "tds_download"),
  entry("carbon-fiber-ud-fabric", "ud-fabric", "UD carbon fiber fabric supplier", ["300gsm UD carbon fiber fabric", "unidirectional carbon fiber reinforcement", "carbon fiber strengthening fabric"], "tds_download"),
  entry("spread-tow-carbon-fiber-fabric", "spread-tow", "spread tow carbon fiber fabric", ["spread tow carbon fabric supplier", "8x8mm carbon fiber fabric", "10x10mm carbon fiber fabric"]),
  entry("carbon-fiber-yarn-and-tow", "yarn-and-tow", "12K carbon fiber tow supplier", ["carbon fiber yarn supplier", "carbon fiber tow bobbin supplier", "PAN based carbon fiber tow"], "tds_download"),
  entry("prepreg-carbon-fiber-materials", "prepreg", "carbon fiber prepreg supplier", ["woven carbon fiber prepreg", "UD carbon prepreg", "carbon fiber prepreg materials"], "tds_download"),
  entry("chopped-carbon-fiber", "chopped-fiber", "chopped carbon fiber supplier", ["short carbon fiber for resin", "chopped carbon fiber for plastic reinforcement", "carbon fiber chopped strands"]),
  entry("milled-carbon-fiber-powder", "milled-powder", "milled carbon fiber powder", ["carbon fiber powder supplier", "300 mesh milled carbon fiber", "carbon powder for plastic and resin"], "tds_download"),
  entry("3k-carbon-fiber-laminate-sheet", "3k-laminate-sheet", "3K carbon fiber plate supplier", ["3K carbon fiber sheet", "twill carbon fiber laminate sheet", "custom thickness carbon fiber plate", "carbon fiber plate CNC cutting"], "tds_download"),
  entry("3k-surface-carbon-fiber-tube", "carbon-fiber-tube", "3K surface carbon fiber tube", ["3K twill carbon fiber tube", "visible carbon fiber tube", "carbon fiber tube supplier"]),
  entry("filament-wound-carbon-fiber-tube", "carbon-fiber-tube", "filament wound carbon fiber tube", ["filament winding carbon tube", "carbon fiber tube for industrial components", "custom filament wound CFRP tube"]),
  entry("pultruded-carbon-fiber-tube", "carbon-fiber-tube", "pultruded carbon fiber tube", ["pultruded CFRP tube", "carbon fiber profile supplier", "carbon fiber structural tube"]),
  entry("custom-carbon-fiber-products", "custom-cfrp", "custom carbon fiber products", ["CNC carbon fiber parts", "custom CFRP components", "carbon fiber parts from drawings"]),
  entry("structural-strengthening-system", "structural-strengthening", "CFRP strengthening system", ["pultruded CFRP strengthening plate", "UD carbon fiber fabric for strengthening", "carbon fiber structural strengthening"], "tds_download"),
  entry("aramid-fabric", "aramid", "aramid fabric supplier", ["aramid fiber woven fabric", "para aramid fabric", "aramid composite reinforcement"]),
  entry("carbon-fiber-hybrid-jacquard-fabric", "hybrid-jacquard", "carbon aramid hybrid jacquard fabric", ["carbon aramid hybrid fabric", "carbon kevlar jacquard fabric", "hybrid composite fabric"]),
];

export const candidateSpecifications: CandidateSpecification[] = [
  { productId: "carbon-fiber-multiaxial-ncf-fabric", label: "300gsm 0/90 NCF", publicationStatus: "draft", publicationBlockers: ["Publish only with a matching approved FRP HOME product document."] },
  { productId: "carbon-fiber-multiaxial-ncf-fabric", label: "600gsm +45/-45 NCF", publicationStatus: "draft", publicationBlockers: ["Existing TDS supports the construction; a separate public SKU still requires approved product scope and order-review wording."] },
  { productId: "carbon-fiber-woven-fabric", label: "3K 200gsm twill", publicationStatus: "draft", publicationBlockers: ["Do not create a duplicate SKU page while the documented construction is served by the parent product page."] },
  { productId: "carbon-fiber-woven-fabric", label: "3K 200gsm plain", publicationStatus: "draft", publicationBlockers: ["Matching approved product evidence is required before publication."] },
  { productId: "carbon-fiber-yarn-and-tow", label: "12K tow", publicationStatus: "draft", publicationBlockers: ["Use the parent page and published reference until current product-grade evidence is approved."] },
  { productId: "carbon-fiber-yarn-and-tow", label: "24K/48K/50K tow", publicationStatus: "draft", publicationBlockers: ["Matching product evidence is required before publication."] },
  { productId: "prepreg-carbon-fiber-materials", label: "3K twill prepreg", publicationStatus: "draft", publicationBlockers: ["Resin system, cure and storage data require approved evidence."] },
  { productId: "prepreg-carbon-fiber-materials", label: "UD prepreg", publicationStatus: "draft", publicationBlockers: ["Resin system, cure and storage data require approved evidence."] },
  { productId: "chopped-carbon-fiber", label: "12mm chopped carbon fiber", publicationStatus: "draft", publicationBlockers: ["Fiber length, sizing and application evidence are required."] },
  { productId: "milled-carbon-fiber-powder", label: "Powder for plastic/resin", publicationStatus: "draft", publicationBlockers: ["Grade and resin compatibility must be verified for the requested use."] },
  { productId: "structural-strengthening-system", label: "Pultruded strengthening plate", publicationStatus: "draft", publicationBlockers: ["Do not split from the system page without project-scope and matching product evidence."] },
  { productId: "filament-wound-carbon-fiber-tube", label: "Roll-wrapped tube", publicationStatus: "draft", publicationBlockers: ["Construction, dimensions and performance evidence are required before publication."] },
];

export const productSeoRegistryById = Object.fromEntries(
  productSeoRegistry.map((item) => [item.productId, item]),
) as Record<string, ProductSeoRegistryEntry>;

export const productAnalyticsContextById = Object.fromEntries(
  productSeoRegistry.map((item) => [item.productId, { product_id: item.productId, product_family: item.family }]),
) as Record<string, { product_id: string; product_family: string }>;

const catalogIds = new Set(productCatalog.map((product) => product.slug));
if (productSeoRegistry.some((item) => !catalogIds.has(item.productId))) {
  throw new Error("Product SEO registry contains a product that is absent from the catalog.");
}
