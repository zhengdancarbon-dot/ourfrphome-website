const baseUrl = new URL(process.argv[2] || "http://localhost:3107");
const expectedTotal = Number(process.env.EXPECTED_SITEMAP_URLS || 280);
const locales = ["es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr", "uk", "vi", "th"];
const localeLabels = {
  es: "Español",
  "pt-br": "Português BR",
  ru: "Русский",
  ar: "العربية",
  fr: "Français",
  ko: "한국어",
  pl: "Polski",
  tr: "Türkçe",
  uk: "Українська",
  vi: "Tiếng Việt",
  th: "ไทย",
};
const expectedLocalizedCount = 20;
const expectedTechnicalArticleCount = 25;
const priorityProductPages = new Map([
  ["/products/carbon-fiber-multiaxial-ncf-fabric", ["Carbon Multiaxial NCF Fabric", "Carbon Fiber Multiaxial NCF Fabric"]],
  ["/products/3k-carbon-fiber-laminate-sheet", ["3K Carbon Fiber Plate", "3K Carbon Fiber Laminate Sheet"]],
  ["/products/fiber-optic-cable-drum", ["Fiber Optic Cable Drum", "Fiber Optic Cable Drum"]],
  ["/products/carbon-fiber-yarn-and-tow", ["12K Carbon Fiber Tow Supplier", "Carbon Fiber Yarn & Tow"]],
  ["/products/carbon-fiber-ud-fabric", ["300gsm UD Carbon Fiber Fabric Supplier", "UD Carbon Fiber Fabric"]],
  ["/products/structural-strengthening-system", ["CFRP Strengthening System", "Carbon Fiber Structural Strengthening System"]],
  ["/products/carbon-fiber-woven-fabric", ["3K 200gsm Twill Carbon Fiber Fabric Supplier", "Woven Carbon Fiber Fabric"]],
]);
const priorityProductSlugs = [...priorityProductPages.keys()].map((path) => path.split("/").pop());
const priorityProductResourceCounts = new Map([
  ["carbon-fiber-multiaxial-ncf-fabric", 3],
  ["3k-carbon-fiber-laminate-sheet", 1],
  ["carbon-fiber-yarn-and-tow", 1],
  ["carbon-fiber-ud-fabric", 2],
  ["structural-strengthening-system", 3],
  ["carbon-fiber-woven-fabric", 1],
]);
const englishPriorityGuideCounts = new Map([
  ["carbon-fiber-multiaxial-ncf-fabric", 4],
  ["3k-carbon-fiber-laminate-sheet", 4],
  ["carbon-fiber-yarn-and-tow", 3],
  ["carbon-fiber-ud-fabric", 4],
  ["structural-strengthening-system", 4],
  ["carbon-fiber-woven-fabric", 4],
  ["fiber-optic-cable-drum", 1],
]);
const priorityResourceProductSlugs = new Set([
  ...priorityProductResourceCounts.keys(),
  ...englishPriorityGuideCounts.keys(),
]);
const englishPriorityProductNames = [
  "Carbon Fiber Multiaxial NCF Fabric",
  "3K Carbon Fiber Laminate Sheet",
  "Carbon Fiber Yarn & Tow",
  "UD Carbon Fiber Fabric",
  "Carbon Fiber Structural Strengthening System",
  "Woven Carbon Fiber Fabric",
  "Fiber Optic Cable Drum",
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
  "/products/fiber-optic-cable-drum",
  "/technical-center/fiber-optic-cable-drum-rfq-checklist",
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
  uk: "uk",
  vi: "vi",
  th: "th",
};
const priorityDocumentLinks = [
  "/downloads/tds/FRP-HOME-300gsm-Biaxial-Carbon-Fabric-TDS.pdf",
  "/downloads/tds/FRP-HOME-600gsm-PlusMinus45-Biaxial-Carbon-NCF-TDS.pdf",
  "/downloads/tds/FRP-HOME-400gsm-Quadraxial-Carbon-NCF-Supply-TDS.pdf",
  "/downloads/specifications/FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide.pdf",
  "/downloads/tds/FRP-HOME-High-Strength-12K-Carbon-Fiber-Tow-Supply-TDS.pdf",
  "/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf",
  "/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf",
  "/downloads/tds/FRP-HOME-1.2mm-Pultruded-CFRP-Strengthening-Plate-TDS.pdf",
  "/downloads/tds/FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf",
];

function matches(html, pattern) {
  return pattern.test(html);
}

function values(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

function occurrenceCount(text, value) {
  return text.split(value).length - 1;
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
const checkedPriorityResourcePages = new Set();
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
    const activeLocale = path === "/" ? "en" : locales.find((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`)) || "en";
    const expectedDirection = activeLocale === "ar" ? "rtl" : "ltr";
    const htmlTag = text.match(/<html\s+([^>]+)>/i)?.[1] || "";
    if (!htmlTag.includes(`lang="${languageCodes[activeLocale]}"`)) failures.push(`${path}: root html lang is incorrect`);
    if (!htmlTag.includes(`dir="${expectedDirection}"`)) failures.push(`${path}: root html dir is incorrect`);
    if (!matches(text, /<title>[^<]+<\/title>/i)) failures.push(`${path}: missing title`);
    if (!matches(text, /<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/i)) failures.push(`${path}: missing H1`);

    const isProductDetail = /^(?:\/(?:es|pt-br|ru|ar|fr|ko|pl|tr|uk|vi|th))?\/products\/[^/]+$/.test(path);
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
      if (!text.includes(`"numberOfItems":${priorityProductSlugs.length}`)) {
        failures.push(`${path}: homepage priority ItemList has an incorrect product count`);
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

    const localizedProductsDirectory = path.match(/^\/(es|pt-br|ru|ar|fr|ko|pl|tr|uk|vi|th)\/products$/)?.[1];
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
      if (!text.includes(`"numberOfItems":${priorityProductSlugs.length}`)) {
        failures.push(`${path}: localized priority ItemList has an incorrect product count`);
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
      if (!text.includes(`"numberOfItems":${priorityProductSlugs.length}`)) {
        failures.push(`${path}: priority ItemList has an incorrect product count`);
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

    if (path === "/technical-resources") {
      if (!text.includes("data-priority-document-library=\"true\"")) {
        failures.push(`${path}: missing priority document library`);
      }
      if (!text.includes('"@type":"DigitalDocument"')) {
        failures.push(`${path}: missing DigitalDocument structured data`);
      }
      if (!text.includes(`\"numberOfItems\":${priorityDocumentLinks.length}`)) {
        failures.push(`${path}: priority document ItemList count is incorrect`);
      }
      for (const documentHref of priorityDocumentLinks) {
        if (!text.includes(`data-document-href=\"${documentHref}\"`)) {
          failures.push(`${path}: missing priority document card ${documentHref}`);
        }
        if (!text.includes(`href=\"${documentHref}\"`)) {
          failures.push(`${path}: missing priority document download ${documentHref}`);
        }
        if (!text.includes(`\"url\":\"https://www.myfrphome.com${documentHref}\"`)) {
          failures.push(`${path}: missing DigitalDocument URL ${documentHref}`);
        }
      }
      for (const slug of priorityProductSlugs) {
        if (!text.includes(`href=\"/products/${slug}\"`)) {
          failures.push(`${path}: missing priority product link ${slug}`);
        }
      }
      if (!text.includes("data-analytics-event=\"tds_download\"")) {
        failures.push(`${path}: missing TDS download analytics attributes`);
      }
      const laminateSpecCard = /<article[^>]*data-document-href="\/downloads\/specifications\/FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide\.pdf"[^>]*data-document-type="SPEC"[^>]*>/;
      if (!laminateSpecCard.test(text)) {
        failures.push(`${path}: 3K laminate specification guide is not labeled SPEC`);
      }
    }

    if (path === "/products") {
      if (!text.includes('data-priority-document-hub-link="products-directory"')) {
        failures.push(`${path}: missing priority document hub CTA`);
      }
      if (!text.includes('href="/technical-resources"')) {
        failures.push(`${path}: priority document hub CTA has incorrect URL`);
      }
    }

    if (path === "/technical-center") {
      if (!text.includes('data-priority-document-hub-link="technical-center"')) {
        failures.push(`${path}: missing verified document hub link`);
      }
      if (!text.includes('href="/technical-resources"')) {
        failures.push(`${path}: verified document hub link has incorrect URL`);
      }
      if (!text.includes('"@type":"CollectionPage"')) {
        failures.push(`${path}: missing CollectionPage structured data`);
      }
      if (!text.includes('"@id":"https://www.myfrphome.com/technical-center#technical-article-list"')) {
        failures.push(`${path}: missing technical article ItemList`);
      }
      if (!text.includes(`"numberOfItems":${expectedTechnicalArticleCount}`)) {
        failures.push(`${path}: technical article ItemList count is incorrect`);
      }
      if (occurrenceCount(text, '"@type":"Article"') > 0) {
        failures.push(`${path}: article-detail schema must be emitted only on article routes`);
      }
    }

    const isTechnicalArticle = /^\/technical-center\/[^/]+$/.test(path);
    if (isTechnicalArticle) {
      checkedTechnicalPages.add(path);
      if (!text.includes('"@type":"Article"')) failures.push(`${path}: missing Article structured data`);
      if (!text.includes('"datePublished":')) failures.push(`${path}: missing Article publication date`);
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
    const priorityDocumentCount = productSlug
      ? priorityProductResourceCounts.get(productSlug)
      : undefined;
    const expectedGuideCount = productSlug
      ? path.startsWith("/products/")
        ? englishPriorityGuideCounts.get(productSlug) ?? 0
        : Math.min(englishPriorityGuideCounts.get(productSlug) ?? 0, 3)
      : 0;
    if (productSlug && (priorityDocumentCount || expectedGuideCount)) {
      checkedPriorityResourcePages.add(path);
      const productionPath = path === "/" ? "" : path;
      const productUrl = `https://www.myfrphome.com${productionPath}`;

      if (priorityDocumentCount && !text.includes(`\"@id\":\"${productUrl}#technical-documents\"`)) {
        failures.push(`${path}: missing product technical-document ItemList`);
      }
      if (expectedGuideCount && !text.includes(`\"@id\":\"${productUrl}#buyer-guides\"`)) {
        failures.push(`${path}: missing product buyer-guide ItemList`);
      }
      const expectedSubjectOf = [
        ...(priorityDocumentCount ? [`{\"@id\":\"${productUrl}#technical-documents\"}`] : []),
        ...(expectedGuideCount ? [`{\"@id\":\"${productUrl}#buyer-guides\"}`] : []),
      ].join(",");
      if (!text.includes(`\"subjectOf\":[${expectedSubjectOf}]`)) {
        failures.push(`${path}: Product entity does not reference the expected resource lists`);
      }
      if (!text.includes(`\"about\":{\"@id\":\"${productUrl}#product\"}`)) {
        failures.push(`${path}: resource entities do not reference the Product entity`);
      }
      if (priorityDocumentCount && occurrenceCount(text, '\"@type\":\"DigitalDocument\"') < priorityDocumentCount) {
        failures.push(`${path}: expected ${priorityDocumentCount} DigitalDocument entities`);
      }
      if (priorityDocumentCount && !text.includes(`\"numberOfItems\":${priorityDocumentCount},\"itemListElement\"`)) {
        failures.push(`${path}: technical-document ItemList count is incorrect`);
      }
      if (expectedGuideCount && !text.includes(`\"numberOfItems\":${expectedGuideCount},\"itemListElement\"`)) {
        failures.push(`${path}: buyer-guide ItemList count is incorrect`);
      }
      if (expectedGuideCount && occurrenceCount(text, '\"@type\":\"Article\"') < expectedGuideCount) {
        failures.push(`${path}: expected ${expectedGuideCount} buyer-guide Article entities`);
      }
      if (priorityDocumentCount && !text.includes('\"encodingFormat\":\"application/pdf\"')) {
        failures.push(`${path}: missing PDF encoding format`);
      }
      if (!text.includes('\"inLanguage\":\"en\"')) {
        failures.push(`${path}: English document/guide language is missing`);
      }
      if (productSlug === "3k-carbon-fiber-laminate-sheet") {
        if (!text.includes('\"genre\":\"Product specification and RFQ guide\"')) {
          failures.push(`${path}: 3K laminate document is not classified as SPEC guidance`);
        }
        if (text.includes('\"genre\":\"Technical data sheet\"')) {
          failures.push(`${path}: 3K laminate SPEC is incorrectly classified as a TDS`);
        }
      }
    }
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
      const requiresVerifiedDownload = path !== "/products/fiber-optic-cable-drum";
      const hasVerifiedDownload = path === "/products/3k-carbon-fiber-laminate-sheet"
        ? matches(text, /href="\/downloads\/specifications\/FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide\.pdf"/i)
        : matches(text, /href="\/downloads\/tds\/[^"]+\.pdf"/i);
      if (requiresVerifiedDownload && !hasVerifiedDownload) failures.push(`${path}: missing verified product download`);
      if (!text.includes('"@type":"FAQPage"')) failures.push(`${path}: missing FAQ structured data`);
      if (!text.includes('"@type":"BreadcrumbList"')) failures.push(`${path}: missing breadcrumb structured data`);
    }

    const canonical = values(text, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/gi)[0];
    const expectedCanonical = `https://www.myfrphome.com${path === "/" ? "" : path}`;
    if (canonical !== expectedCanonical) failures.push(`${path}: canonical ${canonical || "missing"}`);

    if (isLocalized || hasLocalizedAlternates) {
      const hreflangs = values(text, /<link[^>]+rel="alternate"[^>]+hrefLang="([^"]+)"/gi);
      const expected = ["en", "es", "pt-BR", "ru", "ar", "fr", "ko", "pl", "tr", "uk", "vi", "th", "x-default"];
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
const internalSalesResult = await fetchText(new URL("/internal-sales-link-guide", baseUrl));
if (!technicalCenterResult.response.ok) failures.push(`/technical-center: HTTP ${technicalCenterResult.response.status}`);
if (!llmsResult.response.ok) failures.push(`/llms.txt: HTTP ${llmsResult.response.status}`);
if (!internalSalesResult.response.ok) failures.push(`/internal-sales-link-guide: HTTP ${internalSalesResult.response.status}`);
if (pathnameSet.has("/internal-sales-link-guide")) failures.push(`/internal-sales-link-guide: must not be in sitemap`);
if (!/name="robots" content="noindex(?:, nofollow)?"/i.test(internalSalesResult.text)) {
  failures.push(`/internal-sales-link-guide: missing noindex robots directive`);
}
if (!llmsResult.text.includes("[Verified Technical Documents](https://www.myfrphome.com/technical-resources)")) {
  failures.push("/llms.txt: missing verified technical document hub discovery link");
}
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

const expectedPriorityResourcePageCount = priorityResourceProductSlugs.size * (locales.length + 1);
if (checkedPriorityResourcePages.size !== expectedPriorityResourcePageCount) {
  failures.push(`Expected ${expectedPriorityResourcePageCount} priority product resource pages, found ${checkedPriorityResourcePages.size}`);
}

for (const resource of internalResources) {
  const response = await fetch(new URL(resource, baseUrl), { redirect: "manual" });
  if (response.status >= 400) failures.push(`${resource}: linked resource HTTP ${response.status}`);
}

for (const [productSlug, { src }] of videoProductPages) {
  const response = await fetch(new URL(src, baseUrl), { redirect: "manual" });
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok) failures.push(`${productSlug}: product video HTTP ${response.status}`);
  if (!contentType.startsWith("video/")) {
    failures.push(`${productSlug}: product video content-type is ${contentType || "missing"}`);
  }
}

for (const documentPath of priorityDocumentLinks) {
  const response = await fetch(new URL(documentPath, baseUrl), { redirect: "manual" });
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok) failures.push(`${documentPath}: priority document HTTP ${response.status}`);
  if (!contentType.startsWith("application/pdf")) {
    failures.push(`${documentPath}: priority document content-type is ${contentType || "missing"}`);
  }
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
  checkedPriorityProductResourcePages: checkedPriorityResourcePages.size,
  checkedTechnicalArticles: checkedTechnicalPages.size,
  checkedLocalizedVideoPages: checkedVideoPages.size,
  checkedPriorityDiscoveryLinks: priorityDiscoveryLinks.length,
  checkedLocalizedLlmsPriorityLinks,
  checkedLocalizedPriorityDirectories: checkedLocalizedPriorityDirectories.size,
  checkedPriorityHomepages: checkedPriorityHomepages.size,
  checkedPriorityDocuments: priorityDocumentLinks.length,
  checkedPriorityVideoAssets: videoProductPages.size,
  checkedPriorityDocumentHubEntrypoints: 3,
  negative404Checks: 3,
  internalSalesGuideNoindex: true,
  status: "PASS",
}, null, 2));
