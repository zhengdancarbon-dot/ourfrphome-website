const productionUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.myfrphome.com"
).replace(/\/+$/, "");
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@hntzxcl.com";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "0086-18857397371";
const contactWhatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "0086-18857397371";

function toTelNumber(value: string) {
  const normalized = value.replace(/[^\d+]/g, "");
  return normalized.startsWith("00") ? `+${normalized.slice(2)}` : normalized;
}

function toWhatsappNumber(value: string) {
  const normalized = value.replace(/\D/g, "");
  return normalized.startsWith("00") ? normalized.slice(2) : normalized;
}

const telNumber = toTelNumber(contactPhone);
const whatsappNumber = toWhatsappNumber(contactWhatsapp);

export const siteConfig = {
  companyName: "Zhejiang FRPHome New Material Co., Ltd.",
  companyNameZh: "浙江福昊新材料有限公司",
  brandName: "FRP HOME",
  alternateBrandName: "福昊",
  url: productionUrl,
  email: contactEmail,
  phone: contactPhone,
  whatsapp: contactWhatsapp,
  emailHref: `mailto:${contactEmail}`,
  phoneHref: `tel:${telNumber}`,
  whatsappHref: `https://wa.me/${whatsappNumber}`,
  location: "Haining, Zhejiang, China",
};
