import { getProductBySlug, type ProductCatalogItem } from "@/lib/product-catalog";

const coreProductLinks: Partial<Record<string, string[]>> = {
  "carbon-fiber-woven-fabric": [
    "carbon-fiber-multiaxial-ncf-fabric",
    "carbon-fiber-ud-fabric",
    "3k-carbon-fiber-laminate-sheet",
    "carbon-fiber-yarn-and-tow",
  ],
  "carbon-fiber-multiaxial-ncf-fabric": [
    "carbon-fiber-ud-fabric",
    "carbon-fiber-woven-fabric",
    "3k-carbon-fiber-laminate-sheet",
    "structural-strengthening-system",
  ],
  "carbon-fiber-ud-fabric": [
    "structural-strengthening-system",
    "carbon-fiber-multiaxial-ncf-fabric",
    "carbon-fiber-woven-fabric",
    "3k-carbon-fiber-laminate-sheet",
  ],
  "3k-carbon-fiber-laminate-sheet": [
    "carbon-fiber-woven-fabric",
    "carbon-fiber-multiaxial-ncf-fabric",
    "carbon-fiber-yarn-and-tow",
    "structural-strengthening-system",
  ],
  "carbon-fiber-yarn-and-tow": [
    "carbon-fiber-woven-fabric",
    "carbon-fiber-multiaxial-ncf-fabric",
    "carbon-fiber-ud-fabric",
    "structural-strengthening-system",
  ],
  "structural-strengthening-system": [
    "carbon-fiber-ud-fabric",
    "carbon-fiber-multiaxial-ncf-fabric",
    "3k-carbon-fiber-laminate-sheet",
    "carbon-fiber-woven-fabric",
  ],
};

export function getCoreProductRelatedProducts(product: ProductCatalogItem, fallback: ProductCatalogItem[]) {
  const linkedProducts = (coreProductLinks[product.slug] ?? [])
    .map((slug) => getProductBySlug(slug))
    .filter((item): item is ProductCatalogItem => Boolean(item));

  return linkedProducts.length ? linkedProducts : fallback;
}
