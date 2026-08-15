import fs from "node:fs";
import path from "node:path";

export const root = process.cwd();
export const dataRoot = path.resolve(process.env.SEO_DATA_ROOT || path.join(root, "data", "seo"));

export const sixCoreProducts = [
  { id: "carbon-fiber-woven-fabric", name: "Woven Carbon Fiber Fabric", path: "/products/carbon-fiber-woven-fabric" },
  { id: "carbon-fiber-multiaxial-ncf-fabric", name: "Carbon Fiber Multiaxial NCF Fabric", path: "/products/carbon-fiber-multiaxial-ncf-fabric" },
  { id: "carbon-fiber-ud-fabric", name: "UD Carbon Fiber Fabric", path: "/products/carbon-fiber-ud-fabric" },
  { id: "3k-carbon-fiber-laminate-sheet", name: "3K Carbon Fiber Laminate Sheet", path: "/products/3k-carbon-fiber-laminate-sheet" },
  { id: "carbon-fiber-yarn-and-tow", name: "Carbon Fiber Yarn & Tow", path: "/products/carbon-fiber-yarn-and-tow" },
  { id: "structural-strengthening-system", name: "Carbon Fiber Structural Strengthening System", path: "/products/structural-strengthening-system" },
  { id: "fiber-optic-cable-drum", name: "Fiber Optic Cable Drum", path: "/products/fiber-optic-cable-drum" },
];

const localePrefix = /^\/(?:es|pt-br|ru|ar|fr|ko|pl|tr|uk|vi|th)(?=\/|$)/;

export function coreProductFor(value) {
  const normalized = normalizePath(value).replace(localePrefix, "") || "/";
  return sixCoreProducts.find((product) => product.id === value || product.path === normalized) || null;
}

export function parseCsvDocument(text) {
  const valuesByRow = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted && character === '"' && text[index + 1] === '"') {
      cell += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (!quoted && character === ",") {
      row.push(cell.trim());
      cell = "";
    } else if (!quoted && (character === "\n" || character === "\r")) {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) valuesByRow.push(row);
      row = [];
      cell = "";
    } else {
      cell += character;
    }
  }
  row.push(cell.trim());
  if (row.some(Boolean)) valuesByRow.push(row);
  if (!valuesByRow.length) return { headers: [], rows: [], rawRows: [] };
  const headers = valuesByRow.shift().map((header) => header.trim());
  return {
    headers,
    rawRows: valuesByRow,
    rows: valuesByRow.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]))),
  };
}

export function parseCsv(text) {
  return parseCsvDocument(text).rows;
}

export function readCsvFiles(source) {
  const directory = path.join(dataRoot, source);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter((file) => file.endsWith(".csv"))
    .sort()
    .map((file) => ({ file, ...parseCsvDocument(fs.readFileSync(path.join(directory, file), "utf8")) }));
}

export function readCsvDirectory(source) {
  return readCsvFiles(source).flatMap((document) => document.rows);
}

export function number(value) {
  const parsed = Number(String(value ?? "").replace(/[% ,]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function normalizePath(value) {
  if (!value) return "";
  try {
    return new URL(value).pathname || "/";
  } catch {
    return String(value).split("?")[0].trim() || "/";
  }
}

export function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}
