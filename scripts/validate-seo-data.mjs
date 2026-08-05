import { readCsvFiles } from "./seo-data-utils.mjs";

const sourceColumns = {
  gsc: ["date", "query", "page", "country", "clicks", "impressions", "ctr", "position"],
  ga4: ["date", "pagePath", "eventName", "eventCount", "country", "language", "productSlug"],
  yandex: ["date", "query", "page", "country", "clicks", "impressions", "position"],
  sales: ["date", "productSlug", "country", "locale", "utm_campaign", "status"],
};

const allowedLocales = new Set(["en", "es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr", "uk", "vi", "th"]);
const allowedEventNames = new Set(["page_view", "rfq_view", "rfq_start", "rfq_submit", "sample_request", "whatsapp_click", "email_click", "phone_click", "tds_download", "sds_download", "coa_request", "catalog_download", "video_play", "language_switch", "scroll_75"]);
const allowedSalesStatuses = new Set(["new", "open", "qualified", "quoted", "won", "lost", "active", "closed"]);
const emailPattern = /\b[^\s@]+@[^\s@]+\.[^\s@]+\b/i;
const ipv4Pattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;
const phonePattern = /(?:^|\s)\+?\d(?:[\d().\s-]*\d){7,}(?:$|\s)/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const numericPattern = /^\d+(?:\.\d+)?$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const errors = [];
const summary = {};

function addError(source, file, row, message) {
  errors.push(`${source}/${file}${row ? ` row ${row}` : ""}: ${message}`);
}

function validDate(value) {
  if (!datePattern.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function validNumber(value) {
  return numericPattern.test(value) && Number.isFinite(Number(value));
}

function inspectCell(source, file, rowIndex, column, value) {
  if (value.length > 500) addError(source, file, rowIndex, `${column} exceeds the 500-character maximum.`);
  if (emailPattern.test(value)) addError(source, file, rowIndex, `${column} contains an email address.`);
  if (ipv4Pattern.test(value)) addError(source, file, rowIndex, `${column} contains an IP address.`);
  if (phonePattern.test(value)) addError(source, file, rowIndex, `${column} contains a phone-like value.`);
}

function validateRow(source, file, row, rowIndex) {
  const contentColumns = source === "sales"
    ? ["country", "locale", "utm_campaign", "status", "productSlug"]
    : source === "ga4"
      ? ["pagePath", "country", "language", "productSlug", "eventName"]
      : ["query", "page", "country"];
  for (const column of contentColumns) inspectCell(source, file, rowIndex, column, row[column]);
  if (!validDate(row.date)) addError(source, file, rowIndex, "date must be a real YYYY-MM-DD value.");
  if (!row.country || row.country.length > 80) addError(source, file, rowIndex, "country must be a non-empty value of 80 characters or fewer.");
  if ((source === "gsc" || source === "yandex") && (!row.page || !row.page.startsWith("/") || row.page.includes("://"))) addError(source, file, rowIndex, "page must be a relative path beginning with '/'.");
  if (source === "gsc" || source === "yandex") {
    if (!row.query || row.query.length > 240) addError(source, file, rowIndex, "query must be present and 240 characters or fewer.");
    for (const column of ["clicks", "impressions", "position"]) {
      if (!validNumber(row[column]) || Number(row[column]) < 0) addError(source, file, rowIndex, `${column} must be a non-negative number.`);
    }
    if (source === "gsc" && (!validNumber(row.ctr) || Number(row.ctr) < 0 || Number(row.ctr) > 1)) addError(source, file, rowIndex, "ctr must be a decimal from 0 to 1.");
  }
  if (source === "ga4") {
    if (!row.pagePath || !row.pagePath.startsWith("/") || row.pagePath.includes("://")) addError(source, file, rowIndex, "pagePath must be a relative path beginning with '/'.");
    if (!allowedEventNames.has(row.eventName)) addError(source, file, rowIndex, "eventName is not an approved aggregate event.");
    if (!validNumber(row.eventCount) || Number(row.eventCount) < 0) addError(source, file, rowIndex, "eventCount must be a non-negative number.");
    if (!allowedLocales.has(row.language)) addError(source, file, rowIndex, "language must be an active site locale.");
  }
  if (source === "ga4" || source === "sales") {
    if (!slugPattern.test(row.productSlug)) addError(source, file, rowIndex, "productSlug must be a kebab-case product identifier.");
  }
  if (source === "sales") {
    if (!allowedLocales.has(row.locale)) addError(source, file, rowIndex, "locale must be an active site locale.");
    if (!/^[a-z0-9][a-z0-9_-]{0,119}$/i.test(row.utm_campaign)) addError(source, file, rowIndex, "utm_campaign must be a non-empty campaign identifier with no free text.");
    if (!allowedSalesStatuses.has(row.status)) addError(source, file, rowIndex, "status is not an approved aggregate inquiry status.");
  }
}

for (const [source, expectedColumns] of Object.entries(sourceColumns)) {
  const documents = readCsvFiles(source);
  summary[source] = { files: documents.length, rows: documents.reduce((count, document) => count + document.rows.length, 0) };
  for (const document of documents) {
    if (document.headers.length !== expectedColumns.length || document.headers.some((header, index) => header !== expectedColumns[index])) {
      addError(source, document.file, 0, `columns must exactly equal: ${expectedColumns.join(",")}.`);
      continue;
    }
    document.rows.forEach((row, index) => validateRow(source, document.file, row, index + 2));
  }
}

if (errors.length) {
  console.error(JSON.stringify({ status: "FAIL", summary, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: "PASS", summary, note: "Empty source folders are expected until the first reviewed exports are imported." }, null, 2));
