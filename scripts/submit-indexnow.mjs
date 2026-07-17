const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.myfrphome.com");
const key = process.env.INDEXNOW_KEY?.trim();
const submittedUrls = process.argv.slice(2);

if (!key) {
  console.error("INDEXNOW_KEY is missing. No URLs were submitted.");
  process.exit(1);
}

if (submittedUrls.length === 0) {
  console.error("Pass one or more updated production URLs to submit.");
  process.exit(1);
}

const urlList = submittedUrls.map((value) => {
  const url = new URL(value, siteUrl);
  if (url.origin !== siteUrl.origin) {
    throw new Error(`Refusing to submit a URL outside ${siteUrl.origin}: ${url.href}`);
  }
  return url.href;
});

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: siteUrl.host,
    key,
    keyLocation: new URL("/indexnow-key.txt", siteUrl).href,
    urlList,
  }),
});

if (!response.ok) {
  console.error(`IndexNow submission failed with HTTP ${response.status}.`);
  process.exit(1);
}

console.log(`IndexNow accepted ${urlList.length} URL(s) with HTTP ${response.status}.`);
