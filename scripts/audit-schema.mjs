const baseUrl = new URL(process.argv[2] || "http://localhost:3107");

async function get(path) {
  const response = await fetch(new URL(path, baseUrl));
  return { response, text: await response.text() };
}

const sitemap = await get("/sitemap.xml");
if (!sitemap.response.ok) throw new Error(`Sitemap HTTP ${sitemap.response.status}`);
const paths = [...sitemap.text.matchAll(/<loc>https:\/\/www\.myfrphome\.com([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
const failures = [];
let checkedProducts = 0;
for (const path of paths) {
  const { response, text } = await get(path);
  if (response.status !== 200) { failures.push(`${path}: HTTP ${response.status}`); continue; }
  const jsonLd = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  for (const source of jsonLd) {
    try { JSON.parse(source); } catch { failures.push(`${path}: invalid JSON-LD`); }
  }
  if (!text.includes('"@type":"Organization"') || !text.includes('"@type":"WebSite"')) failures.push(`${path}: missing site schema`);
  if (/^(?:\/(?:es|pt-br|ru|ar|fr|ko|pl|tr|uk|vi|th))?\/products\/[^/]+$/.test(path)) {
    checkedProducts += 1;
    for (const type of ["Product", "BreadcrumbList", "FAQPage"]) if (!text.includes(`"@type":"${type}"`)) failures.push(`${path}: missing ${type}`);
    if (text.includes('"@type":"Offer"') || text.includes('"aggregateRating"') || text.includes('"review"')) failures.push(`${path}: unsupported commercial schema detected`);
  }
}
if (failures.length) throw new Error(failures.join("\n"));
console.log(JSON.stringify({ sitemapUrls: paths.length, checkedProducts, status: "PASS" }, null, 2));
