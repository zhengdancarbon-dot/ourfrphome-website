import { applicationPages } from "@/lib/application-pages";
import {
  isPhaseOneApplicationSlug,
  isPhaseOneProductSlug,
  phaseOneStaticPaths,
} from "@/lib/i18n/phase-one-paths";
import { productCatalog } from "@/lib/product-catalog";

export {
  isPhaseOneApplicationSlug,
  isPhaseOneLocalizedPath,
  isPhaseOneProductSlug,
  phaseOneApplicationSlugs,
  phaseOneLocalePath,
  phaseOneProductSlugs,
  phaseOneStaticPaths,
} from "@/lib/i18n/phase-one-paths";

export function getPhaseOneLocalizedPaths() {
  const productPaths = productCatalog
    .filter((product) => isPhaseOneProductSlug(product.slug))
    .map((product) => `/products/${product.slug}`);
  const applicationPaths = applicationPages
    .filter((page) => isPhaseOneApplicationSlug(page.slug))
    .map((page) => `/applications/${page.slug}`);

  return [...phaseOneStaticPaths, ...productPaths, ...applicationPaths];
}
