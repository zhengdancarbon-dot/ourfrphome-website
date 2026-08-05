import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { root } from "./seo-data-utils.mjs";

const fixtures = path.join(root, "fixtures", "seo-data");
const validator = path.join(root, "scripts", "validate-seo-data.mjs");
const report = path.join(root, "scripts", "generate-seo-report.mjs");
const run = (script, dataRoot, reportRoot) => spawnSync(process.execPath, [script], {
  cwd: root,
  env: { ...process.env, SEO_DATA_ROOT: dataRoot, ...(reportRoot ? { SEO_REPORT_ROOT: reportRoot } : {}) },
  encoding: "utf8",
});

const validRoot = path.join(fixtures, "valid");
const validValidation = run(validator, validRoot);
assert.equal(validValidation.status, 0, validValidation.stderr);

for (const fixture of ["invalid-pii", "invalid-format"]) {
  const invalidValidation = run(validator, path.join(fixtures, fixture));
  assert.notEqual(invalidValidation.status, 0, `${fixture} fixture unexpectedly passed validation.`);
}

const temporaryReportDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "frp-seo-report-"));
try {
  const reportRun = run(report, validRoot, temporaryReportDirectory);
  assert.equal(reportRun.status, 0, reportRun.stderr);
  const dashboard = fs.readFileSync(path.join(temporaryReportDirectory, "weekly-dashboard.html"), "utf8");
  assert.match(dashboard, /Woven Carbon Fiber Fabric/);
  assert.match(dashboard, /Evidence gate/);
} finally {
  fs.rmSync(temporaryReportDirectory, { recursive: true, force: true });
}

console.log("PASS synthetic SEO data fixtures");
