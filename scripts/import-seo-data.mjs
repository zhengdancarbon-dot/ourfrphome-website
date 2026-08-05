import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { dataRoot, readCsvDirectory } from "./seo-data-utils.mjs";

const source = process.argv.find((argument) => argument.startsWith("--source="))?.split("=")[1] || "csv";
const generatedDirectory = path.join(dataRoot, ".generated");
fs.mkdirSync(generatedDirectory, { recursive: true });

function serviceAccount() {
  const serialized = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const secretFile = process.env.GOOGLE_SERVICE_ACCOUNT_FILE;
  if (serialized) return JSON.parse(serialized);
  if (secretFile) return JSON.parse(fs.readFileSync(secretFile, "utf8"));
  throw new Error("Google API import needs GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_FILE outside the repository.");
}

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

async function googleAccessToken(account) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const unsignedToken = `${base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${base64url(JSON.stringify({
    iss: account.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: issuedAt,
    exp: issuedAt + 3600,
  }))}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  const assertion = `${unsignedToken}.${signer.sign(account.private_key, "base64url")}`;
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
  });
  if (!response.ok) throw new Error(`Google token request failed: HTTP ${response.status}`);
  return (await response.json()).access_token;
}

async function importGoogleApi() {
  const gscProperty = process.env.GSC_PROPERTY_URL;
  const ga4PropertyId = process.env.GA4_PROPERTY_ID;
  if (!gscProperty || !ga4PropertyId) throw new Error("Google API import needs GSC_PROPERTY_URL and GA4_PROPERTY_ID.");
  const account = serviceAccount();
  const token = await googleAccessToken(account);
  const endDate = new Date().toISOString().slice(0, 10);
  const startDate = new Date(Date.now() - 27 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const headers = { authorization: `Bearer ${token}`, "content-type": "application/json" };
  const searchResponse = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(gscProperty)}/searchAnalytics/query`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({ startDate, endDate, dimensions: ["page", "query", "country"], rowLimit: 25000 }),
    },
  );
  if (!searchResponse.ok) throw new Error(`Search Console API request failed: HTTP ${searchResponse.status}`);
  const analyticsResponse = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${ga4PropertyId}:runReport`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: "pagePath" }, { name: "eventName" }, { name: "country" }, { name: "language" }],
        metrics: [{ name: "eventCount" }, { name: "sessions" }],
        limit: 250000,
      }),
    },
  );
  if (!analyticsResponse.ok) throw new Error(`GA4 Data API request failed: HTTP ${analyticsResponse.status}`);
  const output = { generatedAt: new Date().toISOString(), startDate, endDate, gsc: await searchResponse.json(), ga4: await analyticsResponse.json() };
  const outputPath = path.join(generatedDirectory, "google-api-latest.json");
  fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Wrote ${outputPath}`);
}

if (source === "api") {
  await importGoogleApi();
} else if (source === "csv") {
  const summary = Object.fromEntries(["gsc", "ga4", "yandex", "sales"].map((name) => [name, readCsvDirectory(name).length]));
  fs.writeFileSync(path.join(generatedDirectory, "csv-import-summary.json"), `${JSON.stringify({ generatedAt: new Date().toISOString(), summary }, null, 2)}\n`);
  console.log(JSON.stringify(summary));
} else {
  throw new Error("Use --source=csv or --source=api.");
}
