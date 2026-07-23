export const attributionParameterNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "msclkid",
  "yclid",
] as const;

type SearchParamsReader = {
  get(name: string): string | null;
};

export function getAttributionQuery(searchParams: SearchParamsReader) {
  const attribution = new URLSearchParams();

  for (const name of attributionParameterNames) {
    const value = searchParams.get(name)?.trim();
    if (value) attribution.set(name, value.slice(0, 120));
  }

  return attribution.toString();
}

export function createAttributedSourcePage(pathname: string, attributionQuery = "") {
  const path = pathname || "/contact";
  return attributionQuery ? `${path}?${attributionQuery}` : path;
}

export function getAttributionEventParameters(sourcePage: string) {
  const query = sourcePage.includes("?") ? sourcePage.split("?").slice(1).join("?") : "";
  const searchParams = new URLSearchParams(query);

  return Object.fromEntries(
    attributionParameterNames
      .map((name) => [name, searchParams.get(name)] as const)
      .filter((entry): entry is readonly [typeof attributionParameterNames[number], string] =>
        Boolean(entry[1]),
      ),
  );
}
