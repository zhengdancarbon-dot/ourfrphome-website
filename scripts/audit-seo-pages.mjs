const baseUrl = new URL(process.argv[2] || "http://localhost:3107");
const expectedTotal = Number(process.env.EXPECTED_SITEMAP_URLS || 210);
const locales = ["es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr"];
const localeLabels = {
  es: "Español",
  "pt-br": "Português BR",
  ru: "Русский",
  ar: "العربية",
  fr: "Français",
  ko: "한국어",
  pl: "Polski",
  tr: "Türkçe",
};
const expectedLocalizedCount = 19;
const expectedTechnicalArticleCount = 24;
const priorityProductPages = new Map([
  ["/products/carbon-fiber-multiaxial-ncf-fabric", ["Carbon Multiaxial NCF Fabric", "Carbon Fiber Multiaxial NCF Fabric"]],
  ["/products/3k-carbon-fiber-laminate-sheet", ["3K Carbon Fiber Plate", "3K Carbon Fiber Laminate Sheet"]],
  ["/products/carbon-fiber-yarn-and-tow", ["Carbon Fiber Tow Supplier", "Carbon Fiber Yarn & Tow"]],
  ["/products/carbon-fiber-ud-fabric", ["300gsm UD Carbon Fiber Fabric Supplier", "UD Carbon Fiber Fabric"]],
  ["/products/structural-strengthening-system", ["CFRP Strengthening System", "Carbon Fiber Structural Strengthening System"]],
  ["/products/carbon-fiber-woven-fabric", ["3K Woven Carbon Fiber Fabric", "Woven Carbon Fiber Fabric"]],
]);
const priorityProductSlugs = [...priorityProductPages.keys()].map((path) => path.split("/").pop());
const englishPriorityProductNames = [
  "Carbon Fiber Multiaxial NCF Fabric",
  "3K Carbon Fiber Laminate Sheet",
  "Carbon Fiber Yarn & Tow",
  "UD Carbon Fiber Fabric",
  "Carbon Fiber Structural Strengthening System",
  "Woven Carbon Fiber Fabric",
];
const priorityDiscoveryLinks = [
  "/products/carbon-fiber-multiaxial-ncf-fabric",
  "/technical-center/300gsm-vs-600gsm-biaxial-carbon-ncf",
  "/technical-center/biaxial-vs-triaxial-vs-quadriaxial-carbon-ncf",
  "/technical-center/carbon-fiber-multiaxial-ncf-rfq-checklist",
  "/products/3k-carbon-fiber-laminate-sheet",
  "/technical-center/carbon-fiber-plate-thickness-selection-guide",
  "/technical-center/3k-carbon-fiber-plate-cnc-rfq-guide",
  "/technical-center/matte-vs-glossy-3k-carbon-fiber-sheet",
  "/products/carbon-fiber-yarn-and-tow",
  "/technical-center/carbon-fiber-tow-rfq-checklist",
  "/technical-center/carbon-fiber-tow-size-guide-1k-50k",
  "/technical-center/carbon-fiber-yarn-vs-tow-vs-roving",
  "/products/carbon-fiber-ud-fabric",
  "/technical-center/200gsm-vs-300gsm-ud-carbon-fiber-fabric",
  "/technical-center/300gsm-ud-carbon-fiber-fabric-rfq-guide",
  "/technical-center/ud-carbon-fiber-fabric-vs-woven-carbon-fiber-fabric",
  "/products/structural-strengthening-system",
  "/technical-center/1-2-mm-pultruded-cfrp-strengthening-plate-rfq-guide",
  "/technical-center/cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening",
  "/technical-center/cfrp-strengthening-material-rfq-checklist",
  "/products/carbon-fiber-woven-fabric",
  "/technical-center/3k-200gsm-carbon-fiber-fabric-selection-rfq-guide",
  "/technical-center/plain-vs-twill-carbon-fiber-fabric",
  "/technical-center/how-to-choose-carbon-fiber-fabric-by-gsm",
];
const videoProductPages = new Map([
  ["carbon-fiber-multiaxial-ncf-fabric", {
    src: "/videos/carbon-fiber-multiaxial-ncf-directional-layer-production.mp4",
    poster: "/images/products/carbon-fiber-multiaxial-ncf-production-poster.jpg",
  }],
  ["carbon-fiber-yarn-and-tow", {
    src: "/videos/carbon-fiber-yarn-tow-spool-creel.mp4",
    poster: "/images/products/carbon-fiber-yarn-tow-production-creel-poster.jpg",
  }],
  ["carbon-fiber-woven-fabric", {
    src: "/videos/3k-woven-carbon-fiber-weaving-line.mp4",
    poster: "/images/products/3k-woven-carbon-fiber-weaving-line-poster.jpg",
  }],
  ["3k-carbon-fiber-laminate-sheet", {
    src: "/videos/3k-carbon-fiber-laminate-sheet-surface-handling.mp4",
    poster: "/images/products/3k-carbon-fiber-laminate-sheet-video-poster.jpg",
  }],
  ["structural-strengthening-system", {
    src: "/videos/cfrp-strengthening-plate-workshop-handling.mp4",
    poster: "/images/products/cfrp-strengthening-plate-video-poster.jpg",
  }],
]);
const languageCodes = {
  en: "en",
  es: "es",
  "pt-br": "pt-BR",
  ru: "ru",
  ar: "ar",
  fr: "fr",
  ko: "ko",
  pl: "pl",
  tr: "tr",
};

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
const checkedVideoPages = new Set();
const checkedTechnicalPages = new Set();
const checkedLocalizedPriorityDirectories = new Set();
const checkedPriorityHomepages = new Set();
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

    const homepageLocale = path === "/" ? "en" : locales.find((locale) => path === `/${locale}`);
    if (homepageLocale) {
      checkedPriorityHomepages.add(path);
      if (!text.includes("data-priority-products=\"true\"")) {
        failures.push(`${path}: missing homepage priority-product section`);
      }
      if (!text.includes('"@type":"ItemList"')) {
        failures.push(`${path}: missing homepage priority ItemList structured data`);
      }
      if (!text.includes('"numberOfItems":6')) {
        failures.push(`${path}: homepage priority ItemList does not contain six products`);
      }
      if (!text.includes(`\"inLanguage\":\"${languageCodes[homepageLocale]}\"`)) {
        failures.push(`${path}: homepage priority ItemList has incorrect language`);
      }

      let previousPriorityCardIndex = -1;
      for (const slug of priorityProductSlugs) {
        const cardMarker = `data-priority-product-slug=\"${slug}\"`;
        const cardIndex = text.indexOf(cardMarker);
        if (cardIndex === -1) {
          failures.push(`${path}: missing homepage priority product card ${slug}`);
        } else if (cardIndex <= previousPriorityCardIndex) {
          failures.push(`${path}: homepage priority product order is incorrect at ${slug}`);
        }
        previousPriorityCardIndex = cardIndex;

        const localizedPrefix = homepageLocale === "en" ? "" : `/${homepageLocale}`;
        if (!text.includes(`href=\"${localizedPrefix}/products/${slug}\"`)) {
          failures.push(`${path}: missing homepage priority product link ${slug}`);
        }
        if (!text.includes(`\"url\":\"https://www.myfrphome.com${localizedPrefix}/products/${slug}\"`)) {
          failures.push(`${path}: missing homepage priority ItemList URL ${slug}`);
        }
      }

      if (homepageLocale !== "en") {
        for (const englishName of englishPriorityProductNames) {
          if (text.includes(`\"name\":\"${englishName}\"`)) {
            failures.push(`${path}: homepage priority ItemList fell back to English name ${englishName}`);
          }
        }
      }
    }

    const localizedProductsDirectory = path.match(/^\/(es|pt-br|ru|ar|fr|ko|pl|tr)\/products$/)?.[1];
    if (localizedProductsDirectory) {
      checkedLocalizedPriorityDirectories.add(path);
      if (!text.includes("data-priority-products=\"true\"")) {
        failures.push(`${path}: missing localized priority-product section`);
      }
      for (const slug of priorityProductSlugs) {
        if (!text.includes(`data-priority-product-slug=\"${slug}\"`)) {
          failures.push(`${path}: missing priority product card ${slug}`);
        }
        if (!text.includes(`href=\"/${localizedProductsDirectory}/products/${slug}\"`)) {
          failures.push(`${path}: missing localized priority product link ${slug}`);
        }
        if (!text.includes(`\"url\":\"https://www.myfrphome.com/${localizedProductsDirectory}/products/${slug}\"`)) {
          failures.push(`${path}: missing localized priority ItemList URL ${slug}`);
        }
      }
      if (!text.includes('"@type":"ItemList"')) {
        failures.push(`${path}: missing localized priority ItemList structured data`);
      }
      if (!text.includes('"numberOfItems":6')) {
        failures.push(`${path}: localized priority ItemList does not contain six products`);
      }
      if (!text.includes(`\"inLanguage\":\"${languageCodes[localizedProductsDirectory]}\"`)) {
        failures.push(`${path}: localized priority ItemList has incorrect language`);
      }
      for (const englishName of englishPriorityProductNames) {
        if (text.includes(`\"name\":\"${englishName}\"`)) {
          failures.push(`${path}: localized priority ItemList fell back to English name ${englishName}`);
        }
      }
    }

    if (path === "/products") {
      if (!text.includes("data-priority-products=\"true\"")) {
        failures.push(`${path}: missing English priority-product section`);
      }
      if (!text.includes('"@type":"ItemList"')) {
        failures.push(`${path}: missing priority ItemList structured data`);
      }
      if (!text.includes('"numberOfItems":6')) {
        failures.push(`${path}: priority ItemList does not contain six products`);
      }
      for (const slug of priorityProductSlugs) {
        if (!text.includes(`data-priority-product-slug=\"${slug}\"`)) {
          failures.push(`${path}: missing priority product card ${slug}`);
        }
        if (!text.includes(`href=\"/products/${slug}\"`)) {
          failures.push(`${path}: missing priority product link ${slug}`);
        }
        if (!text.includes(`\"url\":\"https://www.myfrphome.com/products/${slug}\"`)) {
          failures.push(`${path}: missing priority ItemList URL ${slug}`);
        }
      }
    }

    const isTechnicalArticle = /^\/technical-center\/[^/]+$/.test(path);
    if (isTechnicalArticle) {
      checkedTechnicalPages.add(path);
      if (!text.includes('"@type":"Article"')) failures.push(`${path}: missing Article structured data`);
      if (!text.includes('"@type":"FAQPage"')) failures.push(`${path}: missing FAQ structured data`);
      if (!text.includes('"@type":"BreadcrumbList"')) failures.push(`${path}: missing breadcrumb structured data`);
    }

    if (path === "/technical-center/300gsm-ud-carbon-fiber-fabric-rfq-guide") {
      if (!text.includes("FRPH-UD300")) failures.push(`${path}: missing documented product code`);
      if (!text.includes("0.167 mm")) failures.push(`${path}: missing dry-fabric thickness boundary`);
      if (!text.includes('href="/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf"')) {
        failures.push(`${path}: missing verified 300gsm UD TDS download`);
      }
      if (!text.includes('href="/products/carbon-fiber-ud-fabric"')) {
        failures.push(`${path}: missing UD product link`);
      }
    }

    if (path === "/technical-center/1-2-mm-pultruded-cfrp-strengthening-plate-rfq-guide") {
      if (!text.includes("FRPH-CFRP-PLATE-1.2")) failures.push(`${path}: missing documented product code`);
      if (!text.includes("test method not stated")) failures.push(`${path}: missing source-method boundary`);
      if (!text.includes('href="/downloads/tds/FRP-HOME-1.2mm-Pultruded-CFRP-Strengthening-Plate-TDS.pdf"')) {
        failures.push(`${path}: missing verified 1.2 mm plate TDS download`);
      }
      if (!text.includes('href="/products/structural-strengthening-system"')) {
        failures.push(`${path}: missing strengthening-system product link`);
      }
    }

    if (path === "/technical-center/200gsm-vs-300gsm-ud-carbon-fiber-fabric") {
      if (!text.includes("FRPH-TDS-UD200-SUPPLY-EN-R01")) failures.push(`${path}: missing 200gsm source document identity`);
      if (!text.includes("FRPH-UD300")) failures.push(`${path}: missing 300gsm product identity`);
      if (!text.includes("not cured-laminate or project design allowables")) {
        failures.push(`${path}: missing dry-fabric design boundary`);
      }
      if (!text.includes('href="/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf"')) {
        failures.push(`${path}: missing 200gsm supply-reference download`);
      }
      if (!text.includes('href="/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf"')) {
        failures.push(`${path}: missing 300gsm product TDS download`);
      }
      if (!text.includes('href="/products/carbon-fiber-ud-fabric"')) {
        failures.push(`${path}: missing UD product link`);
      }
    }

    const productSlug = path.match(/\/products\/([^/]+)$/)?.[1];
    const video = productSlug ? videoProductPages.get(productSlug) : undefined;
    if (video) {
      checkedVideoPages.add(path);
      const locale = path.match(/^\/(es|pt-br|ru|ar|fr|ko|pl|tr)\//)?.[1] || "en";
      const expectedLanguage = languageCodes[locale];
      if (!text.includes(`src="${video.src}"`)) failures.push(`${path}: missing product video source`);
      if (!text.includes(`poster="${video.poster}"`)) failures.push(`${path}: missing product video poster`);
      if (!text.includes('"@type":"VideoObject"')) failures.push(`${path}: missing VideoObject structured data`);
      if (!text.includes(`"contentUrl":"https://www.myfrphome.com${video.src}"`)) {
        failures.push(`${path}: incorrect VideoObject contentUrl`);
      }
      if (!text.includes(`"thumbnailUrl":["https://www.myfrphome.com${video.poster}"]`)) {
        failures.push(`${path}: incorrect VideoObject thumbnailUrl`);
      }
      if (!text.includes(`"inLanguage":"${expectedLanguage}"`)) {
        failures.push(`${path}: incorrect VideoObject inLanguage`);
      }
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

const technicalCenterResult = await fetchText(new URL("/technical-center", baseUrl));
const llmsResult = await fetchText(new URL("/llms.txt", baseUrl));
if (!technicalCenterResult.response.ok) failures.push(`/technical-center: HTTP ${technicalCenterResult.response.status}`);
if (!llmsResult.response.ok) failures.push(`/llms.txt: HTTP ${llmsResult.response.status}`);
for (const path of priorityDiscoveryLinks) {
  if (!technicalCenterResult.text.includes(`href="${path}"`)) {
    failures.push(`/technical-center: missing priority discovery link ${path}`);
  }
  if (!llmsResult.text.includes(`https://www.myfrphome.com${path}`)) {
    failures.push(`/llms.txt: missing priority discovery URL ${path}`);
  }
}

const llmsLines = llmsResult.text.split("\n");
let checkedLocalizedLlmsPriorityLinks = 0;
for (const locale of locales) {
  const sectionHeading = `## ${localeLabels[locale]} Priority Commercial Products`;
  if (!llmsLines.includes(sectionHeading)) {
    failures.push(`/llms.txt: missing localized priority section ${locale}`);
  }

  for (const slug of priorityProductSlugs) {
    const expectedUrl = `https://www.myfrphome.com/${locale}/products/${slug}`;
    const matchingLines = llmsLines.filter((line) => line.includes(`](${expectedUrl})`));
    if (matchingLines.length !== 1) {
      failures.push(`/llms.txt: expected one ${locale} priority URL for ${slug}, found ${matchingLines.length}`);
      continue;
    }

    const title = matchingLines[0].match(/^- \[([^\]]+)\]\(/)?.[1];
    if (!title) {
      failures.push(`/llms.txt: missing localized link title for ${locale}/${slug}`);
      continue;
    }
    if (englishPriorityProductNames.includes(title)) {
      failures.push(`/llms.txt: ${locale}/${slug} fell back to exact English product name`);
      continue;
    }
    checkedLocalizedLlmsPriorityLinks += 1;
  }
}

for (const path of priorityProductPages.keys()) {
  if (!checkedPriorityPages.has(path)) failures.push(`${path}: priority product page missing from sitemap`);
}

const expectedVideoPageCount = videoProductPages.size * (locales.length + 1);
if (checkedVideoPages.size !== expectedVideoPageCount) {
  failures.push(`Expected ${expectedVideoPageCount} localized video pages, found ${checkedVideoPages.size}`);
}

if (checkedTechnicalPages.size !== expectedTechnicalArticleCount) {
  failures.push(`Expected ${expectedTechnicalArticleCount} technical articles, found ${checkedTechnicalPages.size}`);
}

if (checkedLocalizedPriorityDirectories.size !== locales.length) {
  failures.push(`Expected ${locales.length} localized priority product directories, found ${checkedLocalizedPriorityDirectories.size}`);
}

if (checkedPriorityHomepages.size !== locales.length + 1) {
  failures.push(`Expected ${locales.length + 1} priority homepages, found ${checkedPriorityHomepages.size}`);
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
  checkedTechnicalArticles: checkedTechnicalPages.size,
  checkedLocalizedVideoPages: checkedVideoPages.size,
  checkedPriorityDiscoveryLinks: priorityDiscoveryLinks.length,
  checkedLocalizedLlmsPriorityLinks,
  checkedLocalizedPriorityDirectories: checkedLocalizedPriorityDirectories.size,
  checkedPriorityHomepages: checkedPriorityHomepages.size,
  negative404Checks: 3,
  status: "PASS",
}, null, 2));
