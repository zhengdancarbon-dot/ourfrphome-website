const productionUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.myfrphome.com"
).replace(/\/+$/, "");
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@tzcarbon.com";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+86-13586461443";
const contactWhatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "+86-13586461443";
const telNumber = contactPhone.replace(/[^\d+]/g, "");
const whatsappNumber = contactWhatsapp.replace(/\D/g, "");

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
