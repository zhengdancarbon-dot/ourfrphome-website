export const conversionEventNames = [
  "rfq_view",
  "rfq_start",
  "rfq_submit",
  "sample_request",
  "whatsapp_click",
  "email_click",
  "phone_click",
  "tds_download",
  "sds_download",
  "coa_request",
  "catalog_download",
  "video_play",
  "language_switch",
  "scroll_75",
] as const;

export type ConversionEventName = (typeof conversionEventNames)[number];

export const allowedAttributionParameters = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "yclid",
] as const;

// Never pass inquiry fields or other contact details to analytics providers.
export const prohibitedAnalyticsParameters = [
  "name",
  "email",
  "phone",
  "whatsapp",
  "company",
  "message",
  "attachment",
] as const;
