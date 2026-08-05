import fs from "node:fs";
import path from "node:path";
import { csvEscape, normalizePath, number, readCsvDirectory, root } from "./seo-data-utils.mjs";

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

const normalizedGsc = gsc.map((row) => ({
  date: value(row, ["date", "Date"]),
  query: value(row, ["query", "Query"]),
  page: normalizePath(value(row, ["page", "Page", "landingPage"])),
  country: value(row, ["country", "Country"]),
  clicks: number(value(row, ["clicks", "Clicks"])),
  impressions: number(value(row, ["impressions", "Impressions"])),
  position: number(value(row, ["position", "Position"])),
}));

const daySpan = new Set(normalizedGsc.map((row) => row.date).filter(Boolean)).size;
const pageMetrics = new Map();
for (const row of normalizedGsc) {
  const current = pageMetrics.get(row.page) || { page: row.page, clicks: 0, impressions: 0, weightedPosition: 0 };
  current.clicks += row.clicks;
  current.impressions += row.impressions;
  current.weightedPosition += row.position * row.impressions;
  pageMetrics.set(row.page, current);
}

const opportunities = [...pageMetrics.values()]
  .map((metric) => ({
    ...metric,
    ctr: metric.impressions ? metric.clicks / metric.impressions : 0,
    position: metric.impressions ? metric.weightedPosition / metric.impressions : 0,
  }))
  .flatMap((metric) => {
    if (daySpan < 14 || metric.impressions < 50) return [];
    if (metric.position >= 11 && metric.position <= 30) return [{ ...metric, action: "Review content depth and contextual internal links; do not auto-rewrite metadata." }];
    if (metric.position > 0 && metric.position <= 10) return [{ ...metric, action: "Review snippet relevance against real queries before testing title or meta." }];
    return [];
  });

const queryPages = new Map();
for (const row of normalizedGsc.filter((item) => item.query && item.page)) {
  const key = row.query.toLowerCase();
  const pages = queryPages.get(key) || new Set();
  pages.add(row.page);
  queryPages.set(key, pages);
}
const cannibalization = [...queryPages.entries()]
  .filter(([, pages]) => pages.size > 1)
  .map(([query, pages]) => ({ query, pages: [...pages].join(" | ") }));

const ga4EventCounts = Object.fromEntries(["rfq_submit", "tds_download", "catalog_download", "email_click", "whatsapp_click"].map((eventName) => [
  eventName,
  ga4.filter((row) => value(row, ["eventName", "event_name"]) === eventName).reduce((total, row) => total + number(value(row, ["eventCount", "event_count"])), 0),
]));

const report = [
  "# Weekly SEO/GEO Report",
  "",
  `Generated: ${today}`,
  "",
  "## Data status",
  `- Search Console CSV rows: ${gsc.length}`,
  `- GA4 CSV rows: ${ga4.length}`,
  `- Yandex CSV rows: ${yandex.length}`,
  `- Sales/RFQ CSV rows: ${sales.length}`,
  gsc.length ? `- Search Console observation window: ${daySpan} day(s).` : "- Search Console data unavailable. No metadata changes are recommended.",
  "",
  "## Conversion events",
  ...Object.entries(ga4EventCounts).map(([eventName, count]) => `- ${eventName}: ${count}`),
  "",
  "## Decision guardrails",
  "- Do not rewrite title or meta before 14 days of evidence and 50 impressions for the page/query set.",
  "- Positions 11-30: review answer quality and contextual internal links.",
  "- Top-10 pages: review snippets against actual queries before a controlled title/meta test.",
  "- Organic visits without RFQ/TDS/contact actions: review CTA and procurement information.",
  "- AI visibility remains unavailable unless manually verified evidence is imported.",
  "",
  "## Next evidence needed",
  "- Export Search Console Performance by page/query/country/date into data/seo/gsc/.",
  "- Export GA4 event data into data/seo/ga4/ and Yandex data into data/seo/yandex/.",
  "- Record qualified RFQs without personal data in data/seo/sales/.",
  "",
].join("\n");

fs.writeFileSync(path.join(reportDirectory, "weekly-report.md"), report);
fs.writeFileSync(
  path.join(reportDirectory, "opportunities.csv"),
  ["page,clicks,impressions,ctr,position,action", ...opportunities.map((item) => [item.page, item.clicks, item.impressions, item.ctr.toFixed(4), item.position.toFixed(2), item.action].map(csvEscape).join(","))].join("\n") + "\n",
);
fs.writeFileSync(
  path.join(reportDirectory, "cannibalization.csv"),
  ["query,pages", ...cannibalization.map((item) => [item.query, item.pages].map(csvEscape).join(","))].join("\n") + "\n",
);
console.log(JSON.stringify({ gscRows: gsc.length, ga4Rows: ga4.length, yandexRows: yandex.length, salesRows: sales.length, opportunities: opportunities.length, cannibalization: cannibalization.length }));
