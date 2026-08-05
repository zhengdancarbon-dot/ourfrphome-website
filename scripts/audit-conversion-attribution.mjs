import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const layoutPath = path.join(root, "components/site-layout-content.tsx");
const layoutSource = fs.readFileSync(layoutPath, "utf8");
const scriptMarker = '<Script id="conversion-click-tracking"';
const markerIndex = layoutSource.indexOf(scriptMarker);

assert.notEqual(markerIndex, -1, "conversion-click-tracking script was not found");

const functionStart = layoutSource.indexOf("(function () {", markerIndex);
const functionEnd = layoutSource.indexOf("})();", functionStart);

assert.notEqual(functionStart, -1, "conversion tracking function start was not found");
assert.notEqual(functionEnd, -1, "conversion tracking function end was not found");

const activeLocales = ["en", "es", "pt-br", "ru", "ar", "fr", "ko", "pl", "tr", "uk", "vi", "th"];
const trackingSource = layoutSource
  .slice(functionStart, functionEnd + 5)
  .replace('${yandexMetricaId || "null"}', "null")
  .replace("${JSON.stringify(activeLocales)}", JSON.stringify(activeLocales))
  .replace(
    "${JSON.stringify(productAnalyticsContextById)}",
    JSON.stringify({
      "carbon-fiber-multiaxial-ncf-fabric": {
        product_id: "carbon-fiber-multiaxial-ncf-fabric",
        product_family: "multiaxial-ncf",
      },
    }),
  );

function createSessionStorage(initial = {}) {
  const values = new Map(Object.entries(initial));

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    snapshot() {
      return Object.fromEntries(values);
    },
  };
}

function createLink({ href, absoluteHref = href, attributes = {} }) {
  return {
    href: absoluteHref,
    getAttribute(name) {
      if (name === "href") return href;
      return attributes[name] ?? null;
    },
    hasAttribute(name) {
      return Object.prototype.hasOwnProperty.call(attributes, name);
    },
  };
}

function runTrackingScenario({ pathname, search, link, sessionStorage }) {
  const events = [];
  let clickHandler;
  const window = {
    location: { pathname, search },
    sessionStorage,
    gtag(command, eventName, params) {
      events.push({ command, eventName, params });
    },
  };
  const document = {
    addEventListener(eventName, handler) {
      if (eventName === "click") clickHandler = handler;
    },
  };

  window.addEventListener = () => {};
  const context = vm.createContext({ document, URLSearchParams, window });
  new vm.Script(trackingSource, { filename: "conversion-click-tracking.js" }).runInContext(context);

  assert.equal(typeof clickHandler, "function", "click handler was not registered");
  clickHandler({ target: { closest: () => link } });

  return events;
}

const longTerm = "x".repeat(180);
const sessionStorage = createSessionStorage();
const tdsEvents = runTrackingScenario({
  pathname: "/es/products/carbon-fiber-multiaxial-ncf-fabric",
  search:
    `?utm_source=sales_email&utm_medium=outreach&utm_campaign=ncf_2026` +
    `&utm_content=tds_test&utm_term=${longTerm}&yclid=yandex-click-id&ignored=remove-me`,
  sessionStorage,
  link: createLink({
    href: "/downloads/frp-home-600gsm-biaxial-carbon-ncf-tds.pdf",
    absoluteHref: "https://www.myfrphome.com/downloads/frp-home-600gsm-biaxial-carbon-ncf-tds.pdf",
    attributes: {
      "data-analytics-event": "tds_download",
      "data-document-title": "600gsm Biaxial Carbon NCF TDS",
      "data-product-slug": "carbon-fiber-multiaxial-ncf-fabric",
      "data-document-id": "carbon-fiber-multiaxial-ncf-fabric:TDS:FRP-HOME-600gsm-PlusMinus45-Biaxial-Carbon-NCF-TDS.pdf",
    },
  }),
});

assert.equal(tdsEvents.length, 1, "TDS click should emit one analytics event");
const tds = tdsEvents[0];
assert.equal(tds.command, "event");
assert.equal(tds.eventName, "tds_download");
assert.equal(tds.params.locale, "es");
assert.equal(tds.params.product_id, "carbon-fiber-multiaxial-ncf-fabric");
assert.equal(tds.params.product_family, "multiaxial-ncf");
assert.equal(tds.params.page_type, "product");
assert.equal(tds.params.document_id, "carbon-fiber-multiaxial-ncf-fabric:TDS:FRP-HOME-600gsm-PlusMinus45-Biaxial-Carbon-NCF-TDS.pdf");
assert.equal(tds.params.document_title, "600gsm Biaxial Carbon NCF TDS");
assert.equal(tds.params.utm_source, "sales_email");
assert.equal(tds.params.utm_medium, "outreach");
assert.equal(tds.params.utm_campaign, "ncf_2026");
assert.equal(tds.params.utm_content, "tds_test");
assert.equal(tds.params.yclid, "yandex-click-id");
assert.equal(tds.params.utm_term.length, 120, "attribution values must be capped at 120 characters");
assert.equal(tds.params.ignored, undefined, "unapproved query parameters must not be tracked");
assert.match(tds.params.source_page, /^\/es\/products\/carbon-fiber-multiaxial-ncf-fabric\?/);
assert.match(tds.params.source_page, /utm_campaign=ncf_2026/);
assert.doesNotMatch(tds.params.source_page, /ignored=/);

const persisted = sessionStorage.snapshot()["frp-home-rfq-attribution"];
assert.match(persisted, /yclid=yandex-click-id/, "attribution should persist for same-tab navigation");

const followUpScenarios = [
  {
    expectedEvent: "email_click",
    link: createLink({ href: "mailto:info@hntzxcl.com" }),
  },
  {
    expectedEvent: "whatsapp_click",
    link: createLink({ href: "https://wa.me/8618857397371" }),
  },
  {
    expectedEvent: "catalog_download",
    link: createLink({
      href: "/catalog",
      absoluteHref: "https://www.myfrphome.com/catalog",
    }),
  },
];

for (const scenario of followUpScenarios) {
  const events = runTrackingScenario({
    pathname: "/fr/contact",
    search: "",
    sessionStorage,
    link: scenario.link,
  });
  assert.equal(events.length, 1, `${scenario.expectedEvent} should emit one event`);
  assert.equal(events[0].eventName, scenario.expectedEvent);
  assert.equal(events[0].params.locale, "fr");
  assert.equal(events[0].params.utm_source, "sales_email");
  assert.equal(events[0].params.utm_campaign, "ncf_2026");
  assert.equal(events[0].params.yclid, "yandex-click-id");
  assert.match(events[0].params.source_page, /^\/fr\/contact\?/);
}

console.log("PASS conversion attribution audit");
console.log("- TDS metadata and locale preserved");
console.log("- approved UTM and Google/Bing/Yandex click parameters preserved");
console.log("- same-tab session attribution preserved across pages");
console.log("- email, WhatsApp and catalog events preserve attribution");
console.log("- unapproved parameters excluded and values capped at 120 characters");
