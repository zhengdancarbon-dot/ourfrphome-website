import fs from "node:fs";
import path from "node:path";
import { coreProductFor, csvEscape, normalizePath, number, readCsvDirectory, root, sixCoreProducts } from "./seo-data-utils.mjs";

const reportDirectory = path.join(root, "reports", "seo");
fs.mkdirSync(reportDirectory, { recursive: true });

const gsc = readCsvDirectory("gsc");
const ga4 = readCsvDirectory("ga4");
const yandex = readCsvDirectory("yandex");
const sales = readCsvDirectory("sales");
const today = new Date().toISOString().slice(0, 10);

function value(row, names) {
  for (const name of names) if (row[name] !== undefined && row[name] !== "") return row[name];
  return "";
}

function normalizedRows(rows, source) {
  return rows.map((row) => ({
    source,
    date: value(row, ["date", "Date"]),
    query: value(row, ["query", "Query", "keyword", "Keyword"]),
    page: normalizePath(value(row, ["page", "Page", "landingPage", "landing_page", "pagePath", "page_path", "sourcePage", "source_page"])),
    productSlug: value(row, ["productSlug", "product_slug", "productId", "product_id"]),
    country: value(row, ["country", "Country", "countryCode", "country_code"]),
    clicks: number(value(row, ["clicks", "Clicks"])),
    impressions: number(value(row, ["impressions", "Impressions", "views", "Views"])),
    position: number(value(row, ["position", "Position", "averagePosition", "average_position", "ranking"])),
    eventName: value(row, ["eventName", "event_name"]),
    eventCount: number(value(row, ["eventCount", "event_count", "count"])),
    status: value(row, ["status", "Status"]),
  }));
}

const normalizedGsc = normalizedRows(gsc, "gsc");
const normalizedYandex = normalizedRows(yandex, "yandex");
const normalizedGa4 = normalizedRows(ga4, "ga4");
const normalizedSales = normalizedRows(sales, "sales");
const observationDays = new Set([...normalizedGsc, ...normalizedYandex].map((row) => row.date).filter(Boolean)).size;
const approvedEventNames = new Set(["rfq_submit", "tds_download", "catalog_download", "email_click", "whatsapp_click"]);
const trackedMarkets = ["Russia", "Turkey", "UAE", "Brazil"];
const marketAliases = {
  Russia: new Set(["russia", "russian federation", "rus"]),
  Turkey: new Set(["turkey", "türkiye", "turkiye", "tur"]),
  UAE: new Set(["united arab emirates", "uae", "are"]),
  Brazil: new Set(["brazil", "bra"]),
};

function productForRow(row) {
  return coreProductFor(row.productSlug) || coreProductFor(row.page);
}

function total(rows, getter) {
  return rows.reduce((sum, row) => sum + getter(row), 0);
}

function weightedPosition(rows) {
  const rowsWithPosition = rows.filter((row) => row.position > 0);
  const weight = total(rowsWithPosition, (row) => row.impressions || 1);
  return weight ? total(rowsWithPosition, (row) => row.position * (row.impressions || 1)) / weight : 0;
}

function isQualified(status) {
  return ["qualified", "quoted", "won", "active"].includes(String(status).trim().toLowerCase());
}

const productPerformance = sixCoreProducts.map((product) => {
  const productGsc = normalizedGsc.filter((row) => productForRow(row)?.id === product.id);
  const productYandex = normalizedYandex.filter((row) => productForRow(row)?.id === product.id);
  const productGa4 = normalizedGa4.filter((row) => productForRow(row)?.id === product.id);
  const productSales = normalizedSales.filter((row) => productForRow(row)?.id === product.id);
  const events = Object.fromEntries([...approvedEventNames].map((eventName) => [eventName, total(productGa4.filter((row) => row.eventName === eventName), (row) => row.eventCount)]));
  const pageViews = total(productGa4.filter((row) => ["page_view", "screenPageViews"].includes(row.eventName)), (row) => row.eventCount);
  const impressions = total(productGsc, (row) => row.impressions);
  const clicks = total(productGsc, (row) => row.clicks);
  return {
    ...product,
    gscClicks: clicks,
    gscImpressions: impressions,
    gscCtr: impressions ? clicks / impressions : 0,
    gscPosition: weightedPosition(productGsc),
    yandexClicks: total(productYandex, (row) => row.clicks),
    yandexImpressions: total(productYandex, (row) => row.impressions),
    yandexPosition: weightedPosition(productYandex),
    pageViews,
    rfqSubmit: events.rfq_submit,
    tdsDownload: events.tds_download,
    catalogDownload: events.catalog_download,
    emailClick: events.email_click,
    whatsappClick: events.whatsapp_click,
    recordedRfqs: productSales.length,
    qualifiedRfqs: productSales.filter((row) => isQualified(row.status)).length,
  };
});

const decisionQueue = productPerformance.flatMap((product) => {
  const decisions = [];
  if (observationDays < 14 || product.gscImpressions < 50) {
    decisions.push({ product: product.name, path: product.path, rule: "Evidence gate", action: "Observe only. Require at least 14 days and 50 GSC impressions before proposing a metadata or content change.", evidence: `${observationDays} day(s), ${product.gscImpressions} GSC impressions` });
    return decisions;
  }
  if (product.gscPosition >= 11 && product.gscPosition <= 30) {
    decisions.push({ product: product.name, path: product.path, rule: "Position 11-30", action: "Prepare an evidence-led content and contextual internal-link review. Do not automatically rewrite title or meta.", evidence: `Position ${product.gscPosition.toFixed(2)}, ${product.gscImpressions} impressions` });
  }
  if (product.gscCtr < 0.01) {
    decisions.push({ product: product.name, path: product.path, rule: "High impressions / low CTR", action: "Prepare a title and meta proposal against the actual query export. Do not publish without review.", evidence: `${product.gscImpressions} impressions, ${(product.gscCtr * 100).toFixed(2)}% CTR` });
  }
  if (product.pageViews >= 20 && product.rfqSubmit === 0 && product.tdsDownload === 0 && product.emailClick === 0 && product.whatsappClick === 0) {
    decisions.push({ product: product.name, path: product.path, rule: "Traffic / no procurement action", action: "Prepare a conversion review for CTA prominence, RFQ completion fields and document visibility.", evidence: `${product.pageViews} GA4 page views, no tracked procurement action` });
  }
  return decisions;
});

const countryPerformance = trackedMarkets.flatMap((market) => productPerformance.map((product) => {
  const matchesMarket = (row) => marketAliases[market].has(String(row.country).trim().toLowerCase());
  const gscRows = normalizedGsc.filter((row) => productForRow(row)?.id === product.id && matchesMarket(row));
  const yandexRows = normalizedYandex.filter((row) => productForRow(row)?.id === product.id && matchesMarket(row));
  const salesRows = normalizedSales.filter((row) => productForRow(row)?.id === product.id && matchesMarket(row));
  return {
    market,
    product: product.name,
    path: product.path,
    gscImpressions: total(gscRows, (row) => row.impressions),
    gscClicks: total(gscRows, (row) => row.clicks),
    yandexImpressions: total(yandexRows, (row) => row.impressions),
    yandexClicks: total(yandexRows, (row) => row.clicks),
    recordedRfqs: salesRows.length,
    qualifiedRfqs: salesRows.filter((row) => isQualified(row.status)).length,
  };
}));

const queryPages = new Map();
for (const row of normalizedGsc.filter((item) => item.query && item.page)) {
  const pages = queryPages.get(row.query.toLowerCase()) || new Set();
  pages.add(row.page);
  queryPages.set(row.query.toLowerCase(), pages);
}
const cannibalization = [...queryPages.entries()].filter(([, pages]) => pages.size > 1).map(([query, pages]) => ({ query, pages: [...pages].join(" | ") }));

function csv(rows, columns) {
  return [columns.join(","), ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n") + "\n";
}

function htmlEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function numberCell(value) {
  return Number(value || 0).toLocaleString("en-US");
}

const dashboardRows = productPerformance.map((product) => `<tr><th>${htmlEscape(product.name)}</th><td>${numberCell(product.gscImpressions)}</td><td>${numberCell(product.gscClicks)}</td><td>${(product.gscCtr * 100).toFixed(2)}%</td><td>${product.gscPosition ? product.gscPosition.toFixed(2) : "-"}</td><td>${numberCell(product.yandexImpressions)}</td><td>${numberCell(product.yandexClicks)}</td><td>${product.yandexPosition ? product.yandexPosition.toFixed(2) : "-"}</td><td>${numberCell(product.rfqSubmit)}</td><td>${numberCell(product.tdsDownload)}</td></tr>`).join("");
const decisionRows = decisionQueue.length ? decisionQueue.map((item) => `<tr><th>${htmlEscape(item.product)}</th><td>${htmlEscape(item.rule)}</td><td>${htmlEscape(item.evidence)}</td><td>${htmlEscape(item.action)}</td></tr>`).join("") : '<tr><td colspan="4">No decision proposals. Import reviewed evidence and rerun the report.</td></tr>';
const dashboard = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FRP HOME SEO Growth Dashboard</title><style>body{margin:0;background:#f5f7f8;color:#15232c;font:14px/1.5 Arial,sans-serif}.wrap{max-width:1320px;margin:auto;padding:32px 20px}h1{margin:0;font-size:28px}h2{margin:30px 0 10px;font-size:18px}.meta{color:#50616b}table{width:100%;border-collapse:collapse;background:#fff}th,td{padding:10px;border:1px solid #d8e0e4;text-align:left;vertical-align:top}th{background:#eaf0f2;font-weight:700}.notice{padding:12px 14px;border-left:4px solid #1c6973;background:#fff;margin:18px 0}.scroll{overflow:auto}</style></head><body><main class="wrap"><h1>FRP HOME SEO Growth Dashboard</h1><p class="meta">Generated ${today}. Observation window: ${observationDays} day(s). Sources: GSC ${gsc.length} rows, GA4 ${ga4.length}, Yandex ${yandex.length}, sales ${sales.length}.</p><p class="notice">No automatic metadata changes. The dashboard only prepares review work after the 14-day and 50-impression evidence gate.</p><h2>Six-Core Product Performance</h2><div class="scroll"><table><thead><tr><th>Product</th><th>GSC impressions</th><th>GSC clicks</th><th>CTR</th><th>Avg position</th><th>Yandex impressions</th><th>Yandex clicks</th><th>Yandex position</th><th>RFQ</th><th>TDS downloads</th></tr></thead><tbody>${dashboardRows}</tbody></table></div><h2>Decision Queue</h2><div class="scroll"><table><thead><tr><th>Product</th><th>Rule</th><th>Evidence</th><th>Prepared action</th></tr></thead><tbody>${decisionRows}</tbody></table></div><h2>Data Boundary</h2><p class="meta">GA4 events and sales records must exclude personal data. AI visibility and external-authority outcomes are only reported after reviewed evidence is imported.</p></main></body></html>`;

const report = [
  "# FRP HOME SEO Growth Weekly Report",
  "",
  `Generated: ${today}`,
  "",
  "## Data status",
  `- Search Console CSV rows: ${gsc.length}`,
  `- GA4 CSV rows: ${ga4.length}`,
  `- Yandex CSV rows: ${yandex.length}`,
  `- Sales/RFQ CSV rows: ${sales.length}`,
  `- Search observation window: ${observationDays} day(s).`,
  observationDays >= 14 ? "- Observation gate: calendar threshold met; individual page actions still require 50 GSC impressions." : "- Observation gate: not yet met. Do not change metadata.",
  "",
  "## Six-core scorecard",
  "| Product | GSC impressions | GSC clicks | CTR | Avg position | RFQ | TDS |",
  "| --- | ---: | ---: | ---: | ---: | ---: | ---: |",
  ...productPerformance.map((product) => `| ${product.name} | ${product.gscImpressions} | ${product.gscClicks} | ${(product.gscCtr * 100).toFixed(2)}% | ${product.gscPosition ? product.gscPosition.toFixed(2) : "-"} | ${product.rfqSubmit} | ${product.tdsDownload} |`),
  "",
  "## Decision rules",
  "- 14 days and 50 GSC impressions: only then prepare a page-level change proposal.",
  "- Position 11-30: prepare answer quality and contextual internal-link review; do not auto-rewrite metadata.",
  "- High impressions with CTR below 1%: prepare a query-led title/meta proposal for human review.",
  "- At least 20 GA4 page views with no RFQ, TDS, email or WhatsApp action: prepare a conversion review.",
  "- Never infer AI visibility, rankings, inquiry quality or external authority without reviewed data.",
  "",
  "## Next evidence needed",
  "- Export GSC Performance by date, page, query and country into data/seo/gsc/.",
  "- Export GA4 event data into data/seo/ga4/ and Yandex data into data/seo/yandex/.",
  "- Record only aggregated qualified enquiries in data/seo/sales/.",
  "- Run pnpm seo:data:validate && pnpm seo:data:import && pnpm seo:report after each import.",
  "",
].join("\n");

fs.writeFileSync(path.join(reportDirectory, "weekly-report.md"), report);
fs.writeFileSync(path.join(reportDirectory, "six-core-performance.csv"), csv(productPerformance, ["id", "name", "path", "gscImpressions", "gscClicks", "gscCtr", "gscPosition", "yandexImpressions", "yandexClicks", "yandexPosition", "pageViews", "rfqSubmit", "tdsDownload", "catalogDownload", "emailClick", "whatsappClick", "recordedRfqs", "qualifiedRfqs"]));
fs.writeFileSync(path.join(reportDirectory, "country-performance.csv"), csv(countryPerformance, ["market", "product", "path", "gscImpressions", "gscClicks", "yandexImpressions", "yandexClicks", "recordedRfqs", "qualifiedRfqs"]));
fs.writeFileSync(path.join(reportDirectory, "decision-queue.csv"), csv(decisionQueue, ["product", "path", "rule", "evidence", "action"]));
fs.writeFileSync(path.join(reportDirectory, "cannibalization.csv"), csv(cannibalization, ["query", "pages"]));
fs.writeFileSync(path.join(reportDirectory, "opportunities.csv"), csv(decisionQueue.filter((item) => item.rule !== "Evidence gate"), ["product", "path", "rule", "evidence", "action"]));
fs.writeFileSync(path.join(reportDirectory, "weekly-dashboard.html"), dashboard);
console.log(JSON.stringify({ gscRows: gsc.length, ga4Rows: ga4.length, yandexRows: yandex.length, salesRows: sales.length, observationDays, sixCoreProducts: productPerformance.length, decisionQueue: decisionQueue.length }));
