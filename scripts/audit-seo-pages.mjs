const baseUrl = new URL(process.argv[2] || "http://localhost:3107");
const expectedTotal = Number(process.env.EXPECTED_SITEMAP_URLS || 207);
const locales = ["es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr"];
const expectedLocalizedCount = 19;
const priorityProductPages = new Map([
  ["/products/carbon-fiber-multiaxial-ncf-fabric", ["Carbon Multiaxial NCF Fabric", "Carbon Fiber Multiaxial NCF Fabric"]],
  ["/products/3k-carbon-fiber-laminate-sheet", ["3K Carbon Fiber Plate", "3K Carbon Fiber Laminate Sheet"]],
  ["/products/carbon-fiber-yarn-and-tow", ["Carbon Fiber Tow Supplier", "Carbon Fiber Yarn & Tow"]],
  ["/products/structural-strengthening-system", ["CFRP Strengthening System", "Carbon Fiber Structural Strengthening System"]],
  ["/products/carbon-fiber-woven-fabric", ["3K Woven Carbon Fiber Fabric", "Woven Carbon Fiber Fabric"]],
]);

function matches(html, pattern) {
  return pattern.test(html);
}

function values(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

async function fetchText(url) {
  const response = await fetch(url, { redirect: "manual" });
  return { response, text: await response.text() };
}

const sitemapResult = await fetchText(new URL("/sitemap.xml", baseUrl));
if (!sitemapResult.response.ok) throw new Error(`Sitemap HTTP ${sitemapResult.response.status}`);

const productionUrls = values(sitemapResult.text, /<loc>([^<]+)<\/loc>/g);
if (productionUrls.length !== expectedTotal) {
  throw new Error(`Expected ${expectedTotal} sitemap URLs, found ${productionUrls.length}`);
}

const pathnames = productionUrls.map((url) => new URL(url).pathname);
const pathnameSet = new Set(pathnames);
const localeCounts = Object.fromEntries(
  locales.map((locale) => [locale, pathnames.filter((path) => path === `/${locale}` || path.startsWith(`/${locale}/`)).length]),
);
const englishCount = pathnames.length - Object.values(localeCounts).reduce((sum, count) => sum + count, 0);
const expectedEnglishCount = expectedTotal - locales.length * expectedLocalizedCount;

if (englishCount !== expectedEnglishCount || Object.values(localeCounts).some((count) => count !== expectedLocalizedCount)) {
  throw new Error(`Unexpected locale distribution: en=${englishCount}, ${JSON.stringify(localeCounts)}`);
}

const failures = [];
const internalResources = new Set();
const checkedPriorityPages = new Set();
let cursor = 0;

async function worker() {
  while (cursor < pathnames.length) {
    const index = cursor++;
    const path = pathnames[index];
    const url = new URL(path, baseUrl);
    const { response, text } = await fetchText(url);
    const isLocalized = locales.some((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`));
    const hasLocalizedAlternates =
      !isLocalized && locales.every((locale) => pathnameSet.has(path === "/" ? `/${locale}` : `/${locale}${path}`));

    if (response.status !== 200) failures.push(`${path}: HTTP ${response.status}`);
    if (!matches(text, /<title>[^<]+<\/title>/i)) failures.push(`${path}: missing title`);
    if (!matches(text, /<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/i)) failures.push(`${path}: missing H1`);

    const isProductDetail = /^(?:\/(?:es|pt-br|ru|ar|fr|ko|pl|tr))?\/products\/[^/]+$/.test(path);
    if (isProductDetail && !text.includes('"@type":"Product"')) {
      failures.push(`${path}: missing Product structured data entity`);
    }

    const priorityTerms = priorityProductPages.get(path);
    if (priorityTerms) {
      checkedPriorityPages.add(path);
      const [titleTerm, h1Term] = priorityTerms;
      if (!text.includes(`<title>${titleTerm}`)) failures.push(`${path}: priority title no longer starts with ${titleTerm}`);
      if (!matches(text, new RegExp(`<h1(?:\\s[^>]*)?>[^<]*${h1Term.replaceAll("&", "&amp;")}`, "i"))) {
        failures.push(`${path}: priority H1 no longer contains ${h1Term}`);
      }
      if (!matches(text, /href="\/contact\?product=[^"]+"/i)) failures.push(`${path}: missing product-prefilled RFQ link`);
      const hasVerifiedDownload = path === "/products/3k-carbon-fiber-laminate-sheet"
        ? matches(text, /href="\/downloads\/specifications\/FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide\.pdf"/i)
        : matches(text, /href="\/downloads\/tds\/[^"]+\.pdf"/i);
      if (!hasVerifiedDownload) failures.push(`${path}: missing verified product download`);
      if (!text.includes('"@type":"FAQPage"')) failures.push(`${path}: missing FAQ structured data`);
      if (!text.includes('"@type":"BreadcrumbList"')) failures.push(`${path}: missing breadcrumb structured data`);
    }

    const canonical = values(text, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/gi)[0];
    const expectedCanonical = `https://www.myfrphome.com${path === "/" ? "" : path}`;
    if (canonical !== expectedCanonical) failures.push(`${path}: canonical ${canonical || "missing"}`);

    if (isLocalized || hasLocalizedAlternates) {
      const hreflangs = values(text, /<link[^>]+rel="alternate"[^>]+hrefLang="([^"]+)"/gi);
      const expected = ["en", "es", "pt-BR", "ru", "ar", "fr", "ko", "pl", "tr", "x-default"];
      for (const code of expected) {
        if (!hreflangs.includes(code)) failures.push(`${path}: missing hreflang ${code}`);
      }
    }

    for (const href of values(text, /<(?:a|img)[^>]+(?:href|src)="([^"]+)"/gi)) {
      if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/_next/")) {
        internalResources.add(href.split("#")[0]);
      }
    }
  }
}

await Promise.all(Array.from({ length: 12 }, worker));

for (const path of priorityProductPages.keys()) {
  if (!checkedPriorityPages.has(path)) failures.push(`${path}: priority product page missing from sitemap`);
}

for (const resource of internalResources) {
  const response = await fetch(new URL(resource, baseUrl), { redirect: "manual" });
  if (response.status >= 400) failures.push(`${resource}: linked resource HTTP ${response.status}`);
}

for (const path of ["/en", "/es/products/not-a-real-product", "/pt-br/technical-center/not-translated"]) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  if (response.status !== 404) failures.push(`${path}: expected 404, found ${response.status}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  sitemapUrls: productionUrls.length,
  locales: { en: englishCount, ...localeCounts },
  checkedPages: pathnames.length,
  checkedInternalResources: internalResources.size,
  checkedPriorityProductPages: checkedPriorityPages.size,
  negative404Checks: 3,
  status: "PASS",
}, null, 2));
