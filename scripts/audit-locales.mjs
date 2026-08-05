const baseUrl = new URL(process.argv[2] || "http://localhost:3107");
const locales = {
  en: { lang: "en", dir: "ltr" }, es: { lang: "es", dir: "ltr" }, "pt-br": { lang: "pt-BR", dir: "ltr" },
  ru: { lang: "ru", dir: "ltr" }, ar: { lang: "ar", dir: "rtl" }, fr: { lang: "fr", dir: "ltr" },
  ko: { lang: "ko", dir: "ltr" }, pl: { lang: "pl", dir: "ltr" }, tr: { lang: "tr", dir: "ltr" },
  uk: { lang: "uk", dir: "ltr" }, vi: { lang: "vi", dir: "ltr" }, th: { lang: "th", dir: "ltr" },
};

async function get(path) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  return { response, text: await response.text() };
}

const sitemap = await get("/sitemap.xml");
if (!sitemap.response.ok) throw new Error(`Sitemap HTTP ${sitemap.response.status}`);
const paths = [...sitemap.text.matchAll(/<loc>https:\/\/www\.myfrphome\.com([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
const failures = [];
for (const [locale, expected] of Object.entries(locales)) {
  const path = locale === "en" ? "/" : `/${locale}`;
  const { response, text } = await get(path);
  if (response.status !== 200) failures.push(`${path}: HTTP ${response.status}`);
  const html = text.match(/<html\s+([^>]+)>/i)?.[1] || "";
  if (!html.includes(`lang="${expected.lang}"`)) failures.push(`${path}: root lang is not ${expected.lang}`);
  if (!html.includes(`dir="${expected.dir}"`)) failures.push(`${path}: root dir is not ${expected.dir}`);
  if (locale === "ar" && !text.includes('dir="rtl"')) failures.push(`${path}: Arabic RTL wrapper missing`);
}
for (const path of ["/en", "/uk/technical-center", "/vi/technical-center", "/th/technical-center"]) {
  const { response } = await get(path);
  if (response.status !== 404) failures.push(`${path}: expected 404, got ${response.status}`);
}
for (const path of paths.filter((item) => item === "/" || /^\/(es|pt-br|ru|ar|fr|ko|pl|tr|uk|vi|th)(\/|$)/.test(item))) {
  const { text } = await get(path);
  const codes = [...text.matchAll(/rel="alternate"[^>]+hrefLang="([^"]+)"/g)].map((match) => match[1]);
  for (const code of [...Object.values(locales).map((item) => item.lang), "x-default"]) {
    if (!codes.includes(code)) failures.push(`${path}: missing hreflang ${code}`);
  }
}
if (failures.length) throw new Error(failures.join("\n"));
console.log(JSON.stringify({ sitemapUrls: paths.length, localeRoots: Object.keys(locales).length, negative404Checks: 4, status: "PASS" }, null, 2));
