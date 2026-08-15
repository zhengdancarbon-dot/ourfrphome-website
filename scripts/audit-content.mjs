import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registryPath = path.join(root, "lib", "seo", "product-registry.ts");
const catalogPath = path.join(root, "lib", "product-catalog.ts");
const registrySource = fs.readFileSync(registryPath, "utf8");
const catalogSource = fs.readFileSync(catalogPath, "utf8");
const registryIds = [...registrySource.matchAll(/entry\("([^"]+)"/g)].map((match) => match[1]);
const catalogIds = [...catalogSource.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
assert.equal(
  registryIds.length,
  catalogIds.length,
  "The product SEO registry must contain every public catalog product.",
);
assert.equal(new Set(registryIds).size, registryIds.length, "The product SEO registry has duplicate product IDs.");
for (const productId of registryIds) assert.ok(catalogIds.includes(productId), `${productId} is absent from the product catalog.`);
assert.match(registrySource, /publicationStatus: "draft"/, "Candidate specifications must remain draft-only.");
assert.doesNotMatch(registrySource, /\bOffer\b|aggregateRating|"review"/, "Registry must not introduce unsupported commercial claims.");
console.log(JSON.stringify({ registryProducts: registryIds.length, catalogProducts: catalogIds.length, candidateSpecifications: (registrySource.match(/publicationStatus: "draft"/g) || []).length, status: "PASS" }, null, 2));
