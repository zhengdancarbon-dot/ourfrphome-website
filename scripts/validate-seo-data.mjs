import { readCsvDirectory } from "./seo-data-utils.mjs";

const sourceRequirements = {
  gsc: ["date", "page", "clicks", "impressions"],
  ga4: ["date", "pagePath", "eventName", "eventCount"],
  yandex: ["date", "page"],
  sales: ["date"],
};

const personalDataColumns = new Set(["name", "email", "phone", "whatsapp", "company", "message", "attachment"]);
const errors = [];
const summary = {};

for (const [source, requiredColumns] of Object.entries(sourceRequirements)) {
  const rows = readCsvDirectory(source);
  summary[source] = rows.length;
  if (!rows.length) continue;

  const columns = new Set(Object.keys(rows[0]));
  const normalizedColumns = new Set([...columns].map((column) => column.replace(/[_\s]/g, "").toLowerCase()));
  for (const column of personalDataColumns) {
    if (normalizedColumns.has(column)) errors.push(`${source}: personal-data column \"${column}\" is not allowed.`);
  }

  for (const requirement of requiredColumns) {
    const candidates = [requirement, requirement.toLowerCase(), requirement.replace(/Path$/, ""), requirement.replace(/Path$/, "").toLowerCase()];
    if (!candidates.some((candidate) => columns.has(candidate))) {
      errors.push(`${source}: missing expected column \"${requirement}\".`);
    }
  }
}

if (errors.length) {
  console.error(JSON.stringify({ status: "FAIL", summary, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: "PASS", summary, note: "Empty source folders are expected until the first reviewed exports are imported." }, null, 2));
