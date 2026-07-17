import { defaultLocale, localePath, normalizePath, type Locale } from "@/lib/i18n/config";

export const phaseOneStaticPaths = [
  "/",
  "/products",
  "/contact",
  "/catalog",
] as const;

export const phaseOneProductSlugs = [
  "carbon-fiber-woven-fabric",
  "spread-tow-carbon-fiber-fabric",
  "carbon-fiber-ud-fabric",
  "carbon-fiber-yarn-and-tow",
  "prepreg-carbon-fiber-materials",
  "chopped-carbon-fiber",
  "milled-carbon-fiber-powder",
  "structural-strengthening-system",
  "filament-wound-carbon-fiber-tube",
] as const;

export const phaseOneApplicationSlugs = [
  "automotive-carbon-fiber-parts",
  "civil-uav-drone-components",
  "plastic-resin-reinforcement",
  "structural-strengthening",
] as const;

const phaseOnePathSet = new Set<string>([
  ...phaseOneStaticPaths,
  ...phaseOneProductSlugs.map((slug) => `/products/${slug}`),
  ...phaseOneApplicationSlugs.map((slug) => `/applications/${slug}`),
]);

function splitPathSuffix(path: string) {
  const queryIndex = path.indexOf("?");
  const hashIndex = path.indexOf("#");
  const suffixStartCandidates = [queryIndex, hashIndex].filter((index) => index >= 0);
  const suffixStart = suffixStartCandidates.length ? Math.min(...suffixStartCandidates) : -1;

  return suffixStart >= 0
    ? { basePath: path.slice(0, suffixStart), suffix: path.slice(suffixStart) }
    : { basePath: path, suffix: "" };
}

export function isPhaseOneProductSlug(slug: string) {
  return (phaseOneProductSlugs as readonly string[]).includes(slug);
}

export function isPhaseOneApplicationSlug(slug: string) {
  return (phaseOneApplicationSlugs as readonly string[]).includes(slug);
}

export function isPhaseOneLocalizedPath(path: string) {
  const { basePath } = splitPathSuffix(path);
  return phaseOnePathSet.has(normalizePath(basePath));
}

export function phaseOneLocalePath(path: string, locale: Locale = defaultLocale) {
  if (locale === defaultLocale || isPhaseOneLocalizedPath(path)) return localePath(path, locale);
  return normalizePath(path);
}
