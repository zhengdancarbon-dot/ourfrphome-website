import type { ExtendedLocale, Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";
import {
  extendedFamilyTranslations,
  extendedProductTranslations,
  extendedUiCopy,
  translateExtendedField,
  translateExtendedPlaceholder,
  translateExtendedRfqType,
} from "@/lib/i18n/extended-ui-copy";

export type RfqCopy = {
  productType: string;
  requestQuote: string;
  fallbackIntro: string;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  country: string;
  destinationCountry: string;
  endUse: string;
  quantity: string;
  requiredDocuments: string;
  requiredSpecification: string;
  fileUpload: string;
  fileHelp: string;
  details: string;
  message: string;
  messagePlaceholder: string;
  endUseReview: string;
  urgentSupport: string;
  submitNote: string;
  submit: string;
  sending: string;
  successTitle: string;
  successCopy: string;
  sendAnother: string;
  errorCopy: string;
};

export type UiCopy = {
  utility: {
    title: string;
    meta: string;
  };
  nav: Record<"home" | "products" | "applications" | "processes" | "technicalCenter" | "quality" | "about" | "contact", string>;
  productMenu: {
    title: string;
    description: string;
  };
  footer: {
    company: string;
    support: string;
    contact: string;
    requestSample: string;
    description: string;
  };
  language: {
    label: string;
  };
  common: {
    requestQuote: string;
    viewProducts: string;
    viewProductPage: string;
    viewAll: string;
    technicalCenter: string;
    downloadCatalog: string;
    sendInquiry: string;
    quickAnswer: string;
    specifications: string;
    overview: string;
    applications: string;
    faq: string;
    documents: string;
    endUseReview: string;
    relatedProducts: string;
    complianceNotice: string;
    brandAvailabilityNotice: string;
    documentsByScope: string;
    usuallyOneBusinessDay: string;
  };
  rfq: RfqCopy;
};

const english: UiCopy = {
  utility: {
    title: "Carbon Fiber Materials & CFRP Solutions",
    meta: "B2B composite material supply",
  },
  nav: {
    home: "Home",
    products: "Products",
    applications: "Applications",
    processes: "Processes",
    technicalCenter: "Technical Center",
    quality: "Quality",
    about: "About Us",
    contact: "Contact / RFQ",
  },
  productMenu: {
    title: "Products by Material Family",
    description: "Choose by reinforcement, upstream tow, prepreg, additive, profile or strengthening system.",
  },
  footer: {
    company: "Company",
    support: "Support",
    contact: "Contact",
    requestSample: "Request a sample",
    description:
      "Reinforcement materials and composite solutions built for stable production, repeatable performance and global delivery.",
  },
  language: {
    label: "Language",
  },
  common: {
    requestQuote: "Request a Quote",
    viewProducts: "View Products",
    viewProductPage: "View product page",
    viewAll: "View all",
    technicalCenter: "Technical Center",
    downloadCatalog: "Download Product Catalog",
    sendInquiry: "Send Inquiry",
    quickAnswer: "Quick Answer",
    specifications: "Specifications",
    overview: "Overview",
    applications: "Applications",
    faq: "FAQ",
    documents: "Documents",
    endUseReview: "End-use review",
    relatedProducts: "Related products",
    complianceNotice:
      "Some high-performance carbon fiber materials, prepregs, yarns, tow, CFRP components and related products may require end-use and end-user review before quotation or shipment.",
    brandAvailabilityNotice:
      "Brand availability depends on stock, batch, order quantity, destination country and compliance review. We do not imply official authorization unless separately stated.",
    documentsByScope: "TDS / SDS / COA by product scope and order agreement",
    usuallyOneBusinessDay: "Usually within one business day",
  },
  rfq: {
    productType: "Product Type *",
    requestQuote: "Request a Quote",
    fallbackIntro: "Basic RFQ form is visible even before JavaScript loads.",
    name: "Name *",
    company: "Company *",
    email: "Email *",
    whatsapp: "WhatsApp / Phone",
    country: "Country",
    destinationCountry: "Destination Country",
    endUse: "End Use / Final Application *",
    quantity: "Quantity",
    requiredDocuments: "Required Documents",
    requiredSpecification: "Target Product / Specification",
    fileUpload: "File Upload",
    fileHelp: "Drawing, specification or previous TDS. Max {size} MB.",
    details: "details",
    message: "Message *",
    messagePlaceholder:
      "Please include material format, process, target application, compliance context and any deadline.",
    endUseReview: "End-use review",
    urgentSupport: "For urgent quotation support, email {email} or send WhatsApp {whatsapp}.",
    submitNote: "By submitting, you agree that we may contact you about this requirement.",
    submit: "Submit RFQ",
    sending: "Sending",
    successTitle: "Inquiry received.",
    successCopy: "Thank you. Our export team will review your requirements and reply shortly.",
    sendAnother: "Send another inquiry",
    errorCopy: "The form could not be submitted. Please try again or email",
  },
};

const spanish: UiCopy = {
  utility: {
    title: "Materiales de fibra de carbono y soluciones CFRP",
    meta: "Suministro B2B de materiales compuestos",
  },
  nav: {
    home: "Inicio",
    products: "Productos",
    applications: "Aplicaciones",
    processes: "Procesos",
    technicalCenter: "Centro técnico",
    quality: "Calidad",
    about: "Empresa",
    contact: "Contacto / RFQ",
  },
  productMenu: {
    title: "Productos por familia de material",
    description: "Elija por refuerzo, tow, prepreg, aditivo, perfil o sistema de refuerzo.",
  },
  footer: {
    company: "Empresa",
    support: "Soporte",
    contact: "Contacto",
    requestSample: "Solicitar muestra",
    description:
      "Materiales de refuerzo y soluciones compuestas para producción estable, rendimiento repetible y entrega global.",
  },
  language: {
    label: "Idioma",
  },
  common: {
    requestQuote: "Solicitar cotización",
    viewProducts: "Ver productos",
    viewProductPage: "Ver producto",
    viewAll: "Ver todo",
    technicalCenter: "Centro técnico",
    downloadCatalog: "Descargar catálogo",
    sendInquiry: "Enviar consulta",
    quickAnswer: "Respuesta rápida",
    specifications: "Especificaciones",
    overview: "Resumen",
    applications: "Aplicaciones",
    faq: "FAQ",
    documents: "Documentos",
    endUseReview: "Revisión de uso final",
    relatedProducts: "Productos relacionados",
    complianceNotice:
      "Algunos materiales de fibra de carbono de alto rendimiento, prepregs, hilos, tow, componentes CFRP y productos relacionados pueden requerir revisión de uso final y usuario final antes de cotizar o enviar.",
    brandAvailabilityNotice:
      "La disponibilidad de marcas depende de stock, lote, cantidad, país de destino y revisión de cumplimiento. No implica autorización oficial salvo que se indique por separado.",
    documentsByScope: "TDS / SDS / COA según el alcance del producto y el acuerdo del pedido",
    usuallyOneBusinessDay: "Normalmente dentro de un día laborable",
  },
  rfq: {
    productType: "Tipo de producto *",
    requestQuote: "Solicitar cotización",
    fallbackIntro: "El formulario RFQ básico está visible incluso antes de cargar JavaScript.",
    name: "Nombre *",
    company: "Empresa *",
    email: "Email *",
    whatsapp: "WhatsApp / Teléfono",
    country: "País",
    destinationCountry: "País de destino",
    endUse: "Uso final / Aplicación *",
    quantity: "Cantidad",
    requiredDocuments: "Documentos requeridos",
    requiredSpecification: "Producto / especificación objetivo",
    fileUpload: "Archivo adjunto",
    fileHelp: "Plano, especificación o TDS anterior. Máx. {size} MB.",
    details: "detalles",
    message: "Mensaje *",
    messagePlaceholder:
      "Incluya formato del material, proceso, aplicación, contexto de cumplimiento y plazo.",
    endUseReview: "Revisión de uso final",
    urgentSupport: "Para soporte urgente de cotización, escriba a {email} o envíe WhatsApp a {whatsapp}.",
    submitNote: "Al enviar, acepta que podamos contactarle sobre este requerimiento.",
    submit: "Enviar RFQ",
    sending: "Enviando",
    successTitle: "Consulta recibida.",
    successCopy: "Gracias. Nuestro equipo de exportación revisará los requisitos y responderá pronto.",
    sendAnother: "Enviar otra consulta",
    errorCopy: "No se pudo enviar el formulario. Inténtelo de nuevo o escriba a",
  },
};

const portuguese: UiCopy = {
  utility: {
    title: "Materiais de fibra de carbono e soluções CFRP",
    meta: "Fornecimento B2B de materiais compósitos",
  },
  nav: {
    home: "Início",
    products: "Produtos",
    applications: "Aplicações",
    processes: "Processos",
    technicalCenter: "Centro técnico",
    quality: "Qualidade",
    about: "Empresa",
    contact: "Contato / RFQ",
  },
  productMenu: {
    title: "Produtos por família de material",
    description: "Escolha por reforço, tow, prepreg, aditivo, perfil ou sistema de reforço.",
  },
  footer: {
    company: "Empresa",
    support: "Suporte",
    contact: "Contato",
    requestSample: "Solicitar amostra",
    description:
      "Materiais de reforço e soluções compósitas para produção estável, desempenho repetível e entrega global.",
  },
  language: {
    label: "Idioma",
  },
  common: {
    requestQuote: "Solicitar cotação",
    viewProducts: "Ver produtos",
    viewProductPage: "Ver produto",
    viewAll: "Ver tudo",
    technicalCenter: "Centro técnico",
    downloadCatalog: "Baixar catálogo",
    sendInquiry: "Enviar consulta",
    quickAnswer: "Resposta rápida",
    specifications: "Especificações",
    overview: "Visão geral",
    applications: "Aplicações",
    faq: "FAQ",
    documents: "Documentos",
    endUseReview: "Revisão de uso final",
    relatedProducts: "Produtos relacionados",
    complianceNotice:
      "Alguns materiais de fibra de carbono de alto desempenho, prepregs, fios, tow, componentes CFRP e produtos relacionados podem exigir revisão de uso final e usuário final antes da cotação ou envio.",
    brandAvailabilityNotice:
      "A disponibilidade de marcas depende de estoque, lote, quantidade, país de destino e revisão de conformidade. Não implica autorização oficial salvo indicação separada.",
    documentsByScope: "TDS / SDS / COA conforme o escopo do produto e o acordo do pedido",
    usuallyOneBusinessDay: "Normalmente em até um dia útil",
  },
  rfq: {
    productType: "Tipo de produto *",
    requestQuote: "Solicitar cotação",
    fallbackIntro: "O formulário RFQ básico fica visível mesmo antes do JavaScript carregar.",
    name: "Nome *",
    company: "Empresa *",
    email: "Email *",
    whatsapp: "WhatsApp / Telefone",
    country: "País",
    destinationCountry: "País de destino",
    endUse: "Uso final / Aplicação *",
    quantity: "Quantidade",
    requiredDocuments: "Documentos necessários",
    requiredSpecification: "Produto / especificação desejada",
    fileUpload: "Upload de arquivo",
    fileHelp: "Desenho, especificação ou TDS anterior. Máx. {size} MB.",
    details: "detalhes",
    message: "Mensagem *",
    messagePlaceholder:
      "Inclua formato do material, processo, aplicação, contexto de conformidade e prazo.",
    endUseReview: "Revisão de uso final",
    urgentSupport: "Para suporte urgente de cotação, envie email para {email} ou WhatsApp para {whatsapp}.",
    submitNote: "Ao enviar, você concorda que possamos entrar em contato sobre este requisito.",
    submit: "Enviar RFQ",
    sending: "Enviando",
    successTitle: "Consulta recebida.",
    successCopy: "Obrigado. Nossa equipe de exportação revisará os requisitos e responderá em breve.",
    sendAnother: "Enviar outra consulta",
    errorCopy: "Não foi possível enviar o formulário. Tente novamente ou envie email para",
  },
};

export const uiCopy: Record<Locale, UiCopy> = {
  en: english,
  es: spanish,
  "pt-br": portuguese,
  ...extendedUiCopy,
};

export function getUiCopy(locale: Locale = defaultLocale) {
  return uiCopy[locale] ?? uiCopy[defaultLocale];
}

const productFamilyTitleTranslations: Record<"es" | "pt-br", Record<string, { title: string; description: string }>> = {
  es: {
    "Carbon Fiber Reinforcements": {
      title: "Refuerzos de fibra de carbono",
      description: "Tejidos secos y refuerzos textiles para fabricación de compuestos.",
    },
    "Carbon Fiber Yarn, Tow & Precursor Materials": {
      title: "Hilo, tow y materiales precursores",
      description: "Hilo, tow, roving y precursores PAN para procesos posteriores.",
    },
    "Prepreg Carbon Fiber Materials": {
      title: "Materiales prepreg de fibra de carbono",
      description: "Materiales impregnados con resina para moldeo compuesto controlado.",
    },
    "Chopped & Milled Carbon Fiber": {
      title: "Fibra de carbono cortada y molida",
      description: "Fibra corta y polvo para plástico, resina y aplicaciones conductivas.",
    },
    "CFRP Profiles & Custom Parts": {
      title: "Perfiles CFRP y piezas personalizadas",
      description: "Tubos, placas, varillas, laminados y piezas CNC de carbono.",
    },
    "Structural Strengthening System": {
      title: "Sistema de refuerzo estructural",
      description: "Tejido UD, placa CFRP y resina epoxi para refuerzo civil.",
    },
  },
  "pt-br": {
    "Carbon Fiber Reinforcements": {
      title: "Reforços de fibra de carbono",
      description: "Tecidos secos e reforços têxteis para fabricação de compósitos.",
    },
    "Carbon Fiber Yarn, Tow & Precursor Materials": {
      title: "Fio, tow e materiais precursores",
      description: "Fio, tow, roving e precursores PAN para processos posteriores.",
    },
    "Prepreg Carbon Fiber Materials": {
      title: "Materiais prepreg de fibra de carbono",
      description: "Materiais impregnados com resina para moldagem compósita controlada.",
    },
    "Chopped & Milled Carbon Fiber": {
      title: "Fibra de carbono picada e moída",
      description: "Fibra curta e pó para plástico, resina e aplicações condutivas.",
    },
    "CFRP Profiles & Custom Parts": {
      title: "Perfis CFRP e peças personalizadas",
      description: "Tubos, placas, hastes, laminados e peças CNC de carbono.",
    },
    "Structural Strengthening System": {
      title: "Sistema de reforço estrutural",
      description: "Tecido UD, placa CFRP e resina epóxi para reforço civil.",
    },
  },
};

const productLinkTranslations: Record<"es" | "pt-br", Record<string, string>> = {
  es: {
    "Woven Carbon Fiber Fabric": "Tejido de fibra de carbono",
    "1K Woven Carbon Fiber Fabric": "Tejido de carbono 1K",
    "3K Twill Carbon Fiber Fabric": "Tejido carbono 3K twill",
    "3K Plain Carbon Fiber Fabric": "Tejido carbono 3K plain",
    "6K Woven Carbon Fiber Fabric": "Tejido de carbono 6K",
    "12K Woven Carbon Fiber Fabric": "Tejido de carbono 12K",
    "Spread Tow Carbon Fiber Fabric": "Tejido spread tow de carbono",
    "Spread Tow Carbon Fabric": "Tejido spread tow de carbono",
    "8x8mm Spread Tow Carbon Fabric": "Tejido spread tow 8x8mm",
    "10x10mm Spread Tow Carbon Fabric": "Tejido spread tow 10x10mm",
    "UD Carbon Fiber Fabric": "Tejido UD de carbono",
    "Carbon Fiber Multiaxial NCF Fabric": "Tejido NCF multiaxial de carbono",
    "Carbon Aramid Hybrid Fabric": "Tejido híbrido carbono-aramida",
    "Aramid Fabric": "Tejido de aramida",
    "Carbon Fiber Yarn & Tow": "Hilo y tow de fibra de carbono",
    "1K / 3K / 6K Carbon Fiber Yarn": "Hilo de carbono 1K / 3K / 6K",
    "12K / 24K / 48K / 50K Carbon Fiber Tow": "Tow de carbono 12K / 24K / 48K / 50K",
    "1K Carbon Fiber Yarn": "Hilo de carbono 1K",
    "3K Carbon Fiber Yarn": "Hilo de carbono 3K",
    "6K Carbon Fiber Yarn": "Hilo de carbono 6K",
    "12K Carbon Fiber Tow": "Tow de carbono 12K",
    "24K / 48K / 50K Carbon Fiber Tow": "Tow de carbono 24K / 48K / 50K",
    "Chinese Brand Carbon Fiber Yarn & Tow": "Hilo y tow de carbono de marcas chinas",
    "PAN Precursor Fiber": "Fibra precursora PAN",
    "Pre-oxidized PAN Fiber": "Fibra PAN preoxidada",
    "Prepreg Carbon Fiber Fabric": "Prepreg de fibra de carbono",
    "Woven Carbon Fiber Prepreg": "Prepreg de tejido de carbono",
    "3K Twill Carbon Fiber Prepreg": "Prepreg carbono 3K twill",
    "UD Carbon Fiber Prepreg": "Prepreg UD de carbono",
    "Spread Tow Carbon Fiber Prepreg": "Prepreg spread tow de carbono",
    "Custom Carbon Fiber Prepreg": "Prepreg de carbono personalizado",
    "Chopped Carbon Fiber": "Fibra de carbono cortada",
    "Milled Carbon Fiber Powder": "Polvo de fibra de carbono molida",
    "Carbon Fiber Powder": "Polvo de fibra de carbono",
    "Carbon Fiber for Plastic & Resin Reinforcement": "Fibra de carbono para plástico y resina",
    "Carbon Fiber Tube": "Tubo de fibra de carbono",
    "Carbon Fiber Sheet / Plate": "Lámina / placa de fibra de carbono",
    "Carbon Fiber Rod": "Varilla de fibra de carbono",
    "CNC Machined CFRP Parts": "Piezas CFRP mecanizadas CNC",
    "Roll-Wrapped Carbon Fiber Tube": "Tubo de carbono roll-wrapped",
    "Filament-Wound Carbon Fiber Tube": "Tubo de carbono por bobinado filamentario",
    "Pultruded Carbon Fiber Tube": "Tubo pultruido de carbono",
    "3K Carbon Fiber Laminate Sheet": "Placa laminada de carbono 3K",
    "3K Surface Carbon Fiber Tube": "Tubo de carbono con superficie 3K",
    "Custom Carbon Fiber Products": "Productos de carbono personalizados",
    "UD Carbon Fiber Fabric for Structural Strengthening": "Tejido UD para refuerzo estructural",
    "Pultruded CFRP Plate / Laminate": "Placa / laminado CFRP pultruido",
    "Pultruded Carbon Fiber Plate / CFRP Laminate": "Placa pultruida CFRP",
    "Structural Epoxy Resin": "Resina epoxi estructural",
    "CFRP Strengthening System": "Sistema de refuerzo CFRP",
  },
  "pt-br": {
    "Woven Carbon Fiber Fabric": "Tecido de fibra de carbono",
    "1K Woven Carbon Fiber Fabric": "Tecido de carbono 1K",
    "3K Twill Carbon Fiber Fabric": "Tecido carbono 3K twill",
    "3K Plain Carbon Fiber Fabric": "Tecido carbono 3K plain",
    "6K Woven Carbon Fiber Fabric": "Tecido de carbono 6K",
    "12K Woven Carbon Fiber Fabric": "Tecido de carbono 12K",
    "Spread Tow Carbon Fiber Fabric": "Tecido spread tow de carbono",
    "Spread Tow Carbon Fabric": "Tecido spread tow de carbono",
    "8x8mm Spread Tow Carbon Fabric": "Tecido spread tow 8x8mm",
    "10x10mm Spread Tow Carbon Fabric": "Tecido spread tow 10x10mm",
    "UD Carbon Fiber Fabric": "Tecido UD de carbono",
    "Carbon Fiber Multiaxial NCF Fabric": "Tecido NCF multiaxial de carbono",
    "Carbon Aramid Hybrid Fabric": "Tecido híbrido carbono-aramida",
    "Aramid Fabric": "Tecido de aramida",
    "Carbon Fiber Yarn & Tow": "Fio e tow de fibra de carbono",
    "1K / 3K / 6K Carbon Fiber Yarn": "Fio de carbono 1K / 3K / 6K",
    "12K / 24K / 48K / 50K Carbon Fiber Tow": "Tow de carbono 12K / 24K / 48K / 50K",
    "1K Carbon Fiber Yarn": "Fio de carbono 1K",
    "3K Carbon Fiber Yarn": "Fio de carbono 3K",
    "6K Carbon Fiber Yarn": "Fio de carbono 6K",
    "12K Carbon Fiber Tow": "Tow de carbono 12K",
    "24K / 48K / 50K Carbon Fiber Tow": "Tow de carbono 24K / 48K / 50K",
    "Chinese Brand Carbon Fiber Yarn & Tow": "Fio e tow de carbono de marcas chinesas",
    "PAN Precursor Fiber": "Fibra precursora PAN",
    "Pre-oxidized PAN Fiber": "Fibra PAN preoxidada",
    "Prepreg Carbon Fiber Fabric": "Prepreg de fibra de carbono",
    "Woven Carbon Fiber Prepreg": "Prepreg de tecido de carbono",
    "3K Twill Carbon Fiber Prepreg": "Prepreg carbono 3K twill",
    "UD Carbon Fiber Prepreg": "Prepreg UD de carbono",
    "Spread Tow Carbon Fiber Prepreg": "Prepreg spread tow de carbono",
    "Custom Carbon Fiber Prepreg": "Prepreg de carbono personalizado",
    "Chopped Carbon Fiber": "Fibra de carbono picada",
    "Milled Carbon Fiber Powder": "Pó de fibra de carbono moída",
    "Carbon Fiber Powder": "Pó de fibra de carbono",
    "Carbon Fiber for Plastic & Resin Reinforcement": "Fibra de carbono para plástico e resina",
    "Carbon Fiber Tube": "Tubo de fibra de carbono",
    "Carbon Fiber Sheet / Plate": "Chapa / placa de fibra de carbono",
    "Carbon Fiber Rod": "Haste de fibra de carbono",
    "CNC Machined CFRP Parts": "Peças CFRP usinadas CNC",
    "Roll-Wrapped Carbon Fiber Tube": "Tubo de carbono roll-wrapped",
    "Filament-Wound Carbon Fiber Tube": "Tubo de carbono por enrolamento filamentar",
    "Pultruded Carbon Fiber Tube": "Tubo pultrudado de carbono",
    "3K Carbon Fiber Laminate Sheet": "Placa laminada de carbono 3K",
    "3K Surface Carbon Fiber Tube": "Tubo de carbono com superfície 3K",
    "Custom Carbon Fiber Products": "Produtos de carbono personalizados",
    "UD Carbon Fiber Fabric for Structural Strengthening": "Tecido UD para reforço estrutural",
    "Pultruded CFRP Plate / Laminate": "Placa / laminado CFRP pultrudado",
    "Pultruded Carbon Fiber Plate / CFRP Laminate": "Placa pultrudada CFRP",
    "Structural Epoxy Resin": "Resina epóxi estrutural",
    "CFRP Strengthening System": "Sistema de reforço CFRP",
  },
};

export function translateProductFamily(locale: Locale, title: string, description: string) {
  if (locale === defaultLocale) return { title, description };
  if (locale !== "es" && locale !== "pt-br") {
    return extendedFamilyTranslations[locale as ExtendedLocale][title] ?? { title, description };
  }
  return productFamilyTitleTranslations[locale][title] ?? { title, description };
}

export function translateProductLink(locale: Locale, label: string) {
  if (locale === defaultLocale) return label;
  if (locale !== "es" && locale !== "pt-br") {
    return extendedProductTranslations[locale as ExtendedLocale][label] ?? label;
  }
  return productLinkTranslations[locale][label] ?? label;
}

export function getRfqPrefillMessage(locale: Locale, productName: string) {
  const messages: Record<Locale, string> = {
    en: `Please quote ${productName}. My target specification and quantity are below.`,
    es: `Solicito una cotización de ${productName}. A continuación indico la especificación y la cantidad requeridas.`,
    "pt-br": `Solicito uma cotação de ${productName}. A especificação e a quantidade necessárias estão abaixo.`,
    ru: `Прошу предоставить предложение на ${productName}. Требуемая спецификация и количество указаны ниже.`,
    ar: `يرجى تقديم عرض سعر لـ ${productName}. المواصفة والكمية المطلوبة موضحتان أدناه.`,
    fr: `Merci d'établir un devis pour ${productName}. La spécification et la quantité recherchées sont indiquées ci-dessous.`,
    ko: `${productName} 견적을 요청합니다. 필요한 사양과 수량은 아래와 같습니다.`,
    pl: `Proszę o ofertę na ${productName}. Wymagana specyfikacja i ilość znajdują się poniżej.`,
    tr: `${productName} için teklif rica ederim. Hedef teknik özellik ve miktar aşağıdadır.`,
    uk: `Прошу надати пропозицію на ${productName}. Потрібні специфікація та кількість наведені нижче.`,
    vi: `Vui lòng báo giá ${productName}. Thông số và số lượng cần thiết được nêu bên dưới.`,
    th: `โปรดเสนอราคาสำหรับ ${productName} ข้อมูลจำเพาะและปริมาณที่ต้องการระบุไว้ด้านล่าง`,
  };

  return messages[locale];
}

const rfqTypeLabelTranslations: Record<"es" | "pt-br", Record<string, string>> = {
  es: {
    "Carbon Fiber Yarn / Tow": "Hilo / tow de fibra de carbono",
    "Woven Carbon Fiber Fabric": "Tejido woven de carbono",
    "Carbon Fiber Multiaxial NCF": "Tejido multiaxial NCF de carbono",
    "Aramid / Carbon-Aramid Hybrid Fabric": "Tejido aramida / híbrido carbono-aramida",
    "UD Carbon Fiber Fabric": "Tejido UD de carbono",
    "Spread Tow Carbon Fiber Fabric": "Tejido spread tow de carbono",
    "Prepreg Carbon Fiber Materials": "Materiales prepreg de carbono",
    "Chopped / Milled / Powder": "Fibra cortada / molida / polvo",
    "CFRP Profiles & Custom Parts": "Perfiles CFRP y piezas personalizadas",
    "Structural Strengthening System": "Sistema de refuerzo estructural",
  },
  "pt-br": {
    "Carbon Fiber Yarn / Tow": "Fio / tow de fibra de carbono",
    "Woven Carbon Fiber Fabric": "Tecido woven de carbono",
    "Carbon Fiber Multiaxial NCF": "Tecido multiaxial NCF de carbono",
    "Aramid / Carbon-Aramid Hybrid Fabric": "Tecido aramida / híbrido carbono-aramida",
    "UD Carbon Fiber Fabric": "Tecido UD de carbono",
    "Spread Tow Carbon Fiber Fabric": "Tecido spread tow de carbono",
    "Prepreg Carbon Fiber Materials": "Materiais prepreg de carbono",
    "Chopped / Milled / Powder": "Fibra picada / moída / pó",
    "CFRP Profiles & Custom Parts": "Perfis CFRP e peças personalizadas",
    "Structural Strengthening System": "Sistema de reforço estrutural",
  },
};

const rfqFieldLabelTranslations: Record<"es" | "pt-br", Record<string, string>> = {
  es: {
    "Tow size": "Tamaño de tow",
    "Brand requirement": "Requisito de marca",
    Grade: "Grado",
    "Sizing type": "Tipo de sizing",
    "Compatible process": "Proceso compatible",
    "Bobbin weight": "Peso de bobina",
    "Weave type": "Tipo de tejido",
    "NCF architecture": "Arquitectura NCF",
    "Fiber directions": "Direcciones de fibra",
    "Stitch requirement": "Requisito de costura",
    "Resin process": "Proceso de resina",
    "Pattern size": "Tamaño de patrón",
    "Areal weight": "Peso areal",
    Width: "Ancho",
    "Roll length": "Longitud de rollo",
    "Fiber type": "Tipo de fibra",
    "Fabric construction": "Construcción del tejido",
    "Color or pattern": "Color o patrón",
    "Target application": "Aplicación objetivo",
    "Resin compatibility": "Compatibilidad de resina",
    "Fiber direction requirement": "Dirección de fibra requerida",
    "Fiber grade": "Grado de fibra",
    "Resin system or process": "Sistema de resina o proceso",
    "Weave pattern": "Patrón de tejido",
    "Surface appearance requirement": "Requisito de superficie",
    "Reinforcement type": "Tipo de refuerzo",
    "Fabric type": "Tipo de tejido",
    "Resin system": "Sistema de resina",
    "Resin content": "Contenido de resina",
    "Curing temperature": "Temperatura de curado",
    "Processing method": "Método de proceso",
    "Storage requirement": "Requisito de almacenamiento",
    "Shelf-life requirement": "Vida útil requerida",
    "Fiber length": "Longitud de fibra",
    "Powder size / mesh": "Tamaño de polvo / malla",
    "Compatible resin or plastic": "Resina o plástico compatible",
    "Required performance": "Rendimiento requerido",
    Packaging: "Embalaje",
    "Product type": "Tipo de producto",
    Dimensions: "Dimensiones",
    Tolerance: "Tolerancia",
    "Surface finish": "Acabado superficial",
    "Manufacturing process": "Proceso de fabricación",
    "Project type": "Tipo de proyecto",
    "Material required": "Material requerido",
    "UD fabric weight": "Peso del tejido UD",
    "CFRP plate width and thickness": "Ancho y espesor de placa CFRP",
    "Epoxy resin requirement": "Requisito de resina epoxi",
    "Project area": "Área del proyecto",
  },
  "pt-br": {
    "Tow size": "Tamanho do tow",
    "NCF architecture": "Arquitetura NCF",
    "Fiber directions": "Direções da fibra",
    "Stitch requirement": "Requisito de costura",
    "Resin process": "Processo de resina",
    "Brand requirement": "Requisito de marca",
    Grade: "Grau",
    "Sizing type": "Tipo de sizing",
    "Compatible process": "Processo compatível",
    "Bobbin weight": "Peso da bobina",
    "Weave type": "Tipo de trama",
    "Pattern size": "Tamanho do padrão",
    "Areal weight": "Peso areal",
    Width: "Largura",
    "Roll length": "Comprimento do rolo",
    "Fiber type": "Tipo de fibra",
    "Fabric construction": "Construção do tecido",
    "Color or pattern": "Cor ou padrão",
    "Target application": "Aplicação alvo",
    "Resin compatibility": "Compatibilidade de resina",
    "Fiber direction requirement": "Direção de fibra necessária",
    "Fiber grade": "Grau da fibra",
    "Resin system or process": "Sistema de resina ou processo",
    "Weave pattern": "Padrão de trama",
    "Surface appearance requirement": "Requisito de superfície",
    "Reinforcement type": "Tipo de reforço",
    "Fabric type": "Tipo de tecido",
    "Resin system": "Sistema de resina",
    "Resin content": "Teor de resina",
    "Curing temperature": "Temperatura de cura",
    "Processing method": "Método de processo",
    "Storage requirement": "Requisito de armazenamento",
    "Shelf-life requirement": "Vida útil necessária",
    "Fiber length": "Comprimento da fibra",
    "Powder size / mesh": "Tamanho do pó / malha",
    "Compatible resin or plastic": "Resina ou plástico compatível",
    "Required performance": "Desempenho necessário",
    Packaging: "Embalagem",
    "Product type": "Tipo de produto",
    Dimensions: "Dimensões",
    Tolerance: "Tolerância",
    "Surface finish": "Acabamento superficial",
    "Manufacturing process": "Processo de fabricação",
    "Project type": "Tipo de projeto",
    "Material required": "Material necessário",
    "UD fabric weight": "Peso do tecido UD",
    "CFRP plate width and thickness": "Largura e espessura da placa CFRP",
    "Epoxy resin requirement": "Requisito de resina epóxi",
    "Project area": "Área do projeto",
  },
};

const rfqPlaceholderTranslations: Record<"es" | "pt-br", Record<string, string>> = {
  es: {
    "TDS / SDS / COA / packing photos": "TDS / SDS / COA / fotos de embalaje",
    "No preference / specific brand by review": "Sin preferencia / marca específica según revisión",
    "Standard modulus / high strength / other": "Módulo estándar / alta resistencia / otro",
    "Epoxy-compatible / PA / PP / other": "Compatible con epoxi / PA / PP / otro",
    "Weaving / prepreg / winding / pultrusion": "Tejeduría / prepreg / bobinado / pultrusión",
    "e.g. 4 kg, 6 kg, 8 kg": "p. ej. 4 kg, 6 kg, 8 kg",
    "Plain / 2x2 twill / satin / jacquard": "Plain / 2x2 twill / satén / jacquard",
    "8x8 mm / 10x10 mm for spread tow": "8x8 mm / 10x10 mm para spread tow",
    "e.g. 200 g/m2, 245 g/m2, 600 g/m2": "p. ej. 200 g/m2, 245 g/m2, 600 g/m2",
    "e.g. 1000 mm / 1270 mm / 1500 mm": "p. ej. 1000 mm / 1270 mm / 1500 mm",
    "e.g. 50 m / 100 m": "p. ej. 50 m / 100 m",
    "Para-aramid / meta-aramid / carbon-aramid hybrid": "Para-aramida / meta-aramida / híbrido carbono-aramida",
    "Plain / twill / honeycomb / jacquard / custom": "Plain / twill / honeycomb / jacquard / personalizado",
    "e.g. 170 / 180 / 200 / 240 g/m2": "p. ej. 170 / 180 / 200 / 240 g/m2",
    "1000 mm / 1270 mm / custom": "1000 mm / 1270 mm / personalizado",
    "Yellow / black-yellow / red-black / custom": "Amarillo / negro-amarillo / rojo-negro / personalizado",
    "Protective panel / composite skin / decorative CFRP": "Panel protector / piel composite / CFRP decorativo",
    "Epoxy / vinyl ester / phenolic / other": "Epoxi / viniléster / fenólico / otro",
    "0 degree / main load direction / custom": "0 grado / dirección principal de carga / personalizado",
    "Documented 300 g/m2 or project-specific construction": "300 g/m2 documentado u otra construcción específica del proyecto",
    "Documented 100-500 mm or project-specific width": "100-500 mm documentado u otro ancho específico del proyecto",
    "Confirm selected grade and matching supplier TDS": "Confirme el grado seleccionado y el TDS correspondiente del proveedor",
    "e.g. 50 m / 100 m / custom": "p. ej. 50 m / 100 m / personalizado",
    "Epoxy / pultrusion / strengthening / laminate": "Epoxi / pultrusión / refuerzo / laminado",
    "8x8mm / 10x10mm / custom": "8x8mm / 10x10mm / personalizado",
    "12K / 24K / custom": "12K / 24K / personalizado",
    "T700 / custom": "T700 / personalizado",
    "Plain / twill / diamond / custom": "Plain / twill / diamante / personalizado",
    "50 m / 100 m / custom": "50 m / 100 m / personalizado",
    "Decorative CFRP / thin laminate / panel skin": "CFRP decorativo / laminado delgado / piel de panel",
    "Woven / UD / spread tow": "Woven / UD / spread tow",
    "3K twill / UD / custom": "3K twill / UD / personalizado",
    "T300 / T700 / project grade": "T300 / T700 / grado de proyecto",
    "Epoxy / high Tg / custom": "Epoxi / alta Tg / personalizado",
    "e.g. 35% +/- 3%": "p. ej. 35% +/- 3%",
    "e.g. 120 C / 135 C": "p. ej. 120 C / 135 C",
    "Autoclave / OOA / compression molding": "Autoclave / OOA / moldeo por compresión",
    "Frozen / refrigerated / other": "Congelado / refrigerado / otro",
    "Target out-life or storage period": "Vida fuera de frío o periodo de almacenamiento objetivo",
    "e.g. 3 mm / 6 mm / 12 mm": "p. ej. 3 mm / 6 mm / 12 mm",
    "e.g. 100 mesh / 200 mesh": "p. ej. 100 mesh / 200 mesh",
    "Unsized / epoxy / PA / PP compatible": "Sin sizing / epoxi / PA / PP compatible",
    "PA6 / PP / epoxy / PEEK / phenolic": "PA6 / PP / epoxi / PEEK / fenólico",
    "Strength / conductivity / wear / dimensional stability": "Resistencia / conductividad / desgaste / estabilidad dimensional",
    "Bag / carton / pallet / custom": "Bolsa / caja / pallet / personalizado",
    "Tube / sheet / rod / CNC part / molded component": "Tubo / placa / varilla / pieza CNC / componente moldeado",
    "OD, ID, length, thickness or drawing reference": "OD, ID, longitud, espesor o referencia de plano",
    "General / drawing tolerance / critical dimensions": "General / tolerancia de plano / dimensiones críticas",
    "Gloss / matte / 3K visual / painted / machined": "Brillo / mate / 3K visible / pintado / mecanizado",
    "Roll-wrapped / pultruded / CNC / molding": "Roll-wrapped / pultruido / CNC / moldeo",
    "Concrete beam / bridge / masonry / slab / column": "Viga de concreto / puente / mampostería / losa / columna",
    "UD fabric / CFRP plate / epoxy resin / system": "Tejido UD / placa CFRP / resina epoxi / sistema",
    "e.g. documented 300 g/m2 or project-specific construction": "p. ej. 300 g/m2 documentado u otra construcción específica del proyecto",
    "e.g. 1.2 mm plate; width and length by project": "p. ej. placa de 1.2 mm; ancho y longitud según proyecto",
    "Primer / saturant / plate adhesive": "Primer / saturante / adhesivo para placa",
    "Approximate m2 or linear meters": "m2 aproximados o metros lineales",
  },
  "pt-br": {
    "TDS / SDS / COA / packing photos": "TDS / SDS / COA / fotos de embalagem",
    "No preference / specific brand by review": "Sem preferência / marca específica conforme revisão",
    "Standard modulus / high strength / other": "Módulo padrão / alta resistência / outro",
    "Epoxy-compatible / PA / PP / other": "Compatível com epóxi / PA / PP / outro",
    "Weaving / prepreg / winding / pultrusion": "Tecelagem / prepreg / enrolamento / pultrusão",
    "e.g. 4 kg, 6 kg, 8 kg": "ex. 4 kg, 6 kg, 8 kg",
    "Plain / 2x2 twill / satin / jacquard": "Plain / 2x2 twill / satin / jacquard",
    "8x8 mm / 10x10 mm for spread tow": "8x8 mm / 10x10 mm para spread tow",
    "e.g. 200 g/m2, 245 g/m2, 600 g/m2": "ex. 200 g/m2, 245 g/m2, 600 g/m2",
    "e.g. 1000 mm / 1270 mm / 1500 mm": "ex. 1000 mm / 1270 mm / 1500 mm",
    "e.g. 50 m / 100 m": "ex. 50 m / 100 m",
    "Para-aramid / meta-aramid / carbon-aramid hybrid": "Para-aramida / meta-aramida / híbrido carbono-aramida",
    "Plain / twill / honeycomb / jacquard / custom": "Plain / twill / honeycomb / jacquard / personalizado",
    "e.g. 170 / 180 / 200 / 240 g/m2": "ex. 170 / 180 / 200 / 240 g/m2",
    "1000 mm / 1270 mm / custom": "1000 mm / 1270 mm / personalizado",
    "Yellow / black-yellow / red-black / custom": "Amarelo / preto-amarelo / vermelho-preto / personalizado",
    "Protective panel / composite skin / decorative CFRP": "Painel protetor / pele compósita / CFRP decorativo",
    "Epoxy / vinyl ester / phenolic / other": "Epóxi / éster vinílico / fenólico / outro",
    "0 degree / main load direction / custom": "0 grau / direção principal de carga / personalizado",
    "Documented 300 g/m2 or project-specific construction": "300 g/m2 documentado ou outra construção específica do projeto",
    "Documented 100-500 mm or project-specific width": "100-500 mm documentado ou outra largura específica do projeto",
    "Confirm selected grade and matching supplier TDS": "Confirme o grau selecionado e o TDS correspondente do fornecedor",
    "e.g. 50 m / 100 m / custom": "ex. 50 m / 100 m / personalizado",
    "Epoxy / pultrusion / strengthening / laminate": "Epóxi / pultrusão / reforço / laminado",
    "8x8mm / 10x10mm / custom": "8x8mm / 10x10mm / personalizado",
    "12K / 24K / custom": "12K / 24K / personalizado",
    "T700 / custom": "T700 / personalizado",
    "Plain / twill / diamond / custom": "Plain / twill / diamante / personalizado",
    "50 m / 100 m / custom": "50 m / 100 m / personalizado",
    "Decorative CFRP / thin laminate / panel skin": "CFRP decorativo / laminado fino / pele de painel",
    "Woven / UD / spread tow": "Woven / UD / spread tow",
    "3K twill / UD / custom": "3K twill / UD / personalizado",
    "T300 / T700 / project grade": "T300 / T700 / grau de projeto",
    "Epoxy / high Tg / custom": "Epóxi / alta Tg / personalizado",
    "e.g. 35% +/- 3%": "ex. 35% +/- 3%",
    "e.g. 120 C / 135 C": "ex. 120 C / 135 C",
    "Autoclave / OOA / compression molding": "Autoclave / OOA / moldagem por compressão",
    "Frozen / refrigerated / other": "Congelado / refrigerado / outro",
    "Target out-life or storage period": "Vida fora do frio ou período de armazenamento desejado",
    "e.g. 3 mm / 6 mm / 12 mm": "ex. 3 mm / 6 mm / 12 mm",
    "e.g. 100 mesh / 200 mesh": "ex. 100 mesh / 200 mesh",
    "Unsized / epoxy / PA / PP compatible": "Sem sizing / epóxi / PA / PP compatível",
    "PA6 / PP / epoxy / PEEK / phenolic": "PA6 / PP / epóxi / PEEK / fenólico",
    "Strength / conductivity / wear / dimensional stability": "Resistência / condutividade / desgaste / estabilidade dimensional",
    "Bag / carton / pallet / custom": "Saco / caixa / pallet / personalizado",
    "Tube / sheet / rod / CNC part / molded component": "Tubo / placa / haste / peça CNC / componente moldado",
    "OD, ID, length, thickness or drawing reference": "OD, ID, comprimento, espessura ou referência de desenho",
    "General / drawing tolerance / critical dimensions": "Geral / tolerância do desenho / dimensões críticas",
    "Gloss / matte / 3K visual / painted / machined": "Brilho / fosco / 3K visual / pintado / usinado",
    "Roll-wrapped / pultruded / CNC / molding": "Roll-wrapped / pultrudado / CNC / moldagem",
    "Concrete beam / bridge / masonry / slab / column": "Viga de concreto / ponte / alvenaria / laje / coluna",
    "UD fabric / CFRP plate / epoxy resin / system": "Tecido UD / placa CFRP / resina epóxi / sistema",
    "e.g. documented 300 g/m2 or project-specific construction": "ex. 300 g/m2 documentado ou outra construção específica do projeto",
    "e.g. 1.2 mm plate; width and length by project": "ex. placa de 1.2 mm; largura e comprimento conforme o projeto",
    "Primer / saturant / plate adhesive": "Primer / saturante / adesivo para placa",
    "Approximate m2 or linear meters": "m2 aproximados ou metros lineares",
  },
};

export function translateRfqTypeLabel(locale: Locale, label: string) {
  if (label === "Fiber Optic Cable Drum") return fiberOpticDrumRfqCopy[locale].type;
  if (locale === defaultLocale) return label;
  if (locale !== "es" && locale !== "pt-br") return translateExtendedRfqType(locale as ExtendedLocale, label);
  return rfqTypeLabelTranslations[locale][label] ?? label;
}

export function translateRfqFieldLabel(locale: Locale, label: string) {
  const translatedLabel = fiberOpticDrumRfqCopy[locale].fields[label];
  if (translatedLabel) return translatedLabel;
  if (locale === defaultLocale) return label;
  if (locale !== "es" && locale !== "pt-br") return translateExtendedField(locale as ExtendedLocale, label);
  return rfqFieldLabelTranslations[locale][label] ?? label;
}

export function translateRfqPlaceholder(locale: Locale, placeholder?: string) {
  if (placeholder && fiberOpticDrumRfqCopy[locale].placeholders[placeholder]) {
    return fiberOpticDrumRfqCopy[locale].placeholders[placeholder];
  }
  if (!placeholder || locale === defaultLocale) return placeholder;
  if (locale !== "es" && locale !== "pt-br") return translateExtendedPlaceholder(locale as ExtendedLocale, placeholder);
  return rfqPlaceholderTranslations[locale][placeholder] ?? placeholder;
}

const fiberOpticDrumRfqCopy: Record<Locale, {
  type: string;
  fields: Record<string, string>;
  placeholders: Record<string, string>;
}> = {
  en: { type: "Fiber Optic Cable Drum", fields: {}, placeholders: {} },
  es: { type: "Carrete de cable de fibra óptica", fields: { "Required fiber length": "Longitud de fibra requerida", "Drum series": "Serie de carrete", "Fiber specification": "Especificación de fibra", "Integration requirement": "Requisito de integración", "Civil or industrial application": "Aplicación civil o industrial", "Packing requirement": "Requisito de embalaje" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / personalizado", "State the required terminal or equipment interface": "Indique la interfaz de terminal o equipo requerida", "Describe the intended final civil or industrial use": "Describa el uso civil o industrial final previsto", "Quantity, export packing and destination requirement": "Cantidad, embalaje de exportación y requisito de destino" } },
  "pt-br": { type: "Tambor de cabo de fibra óptica", fields: { "Required fiber length": "Comprimento de fibra necessário", "Drum series": "Série do tambor", "Fiber specification": "Especificação da fibra", "Integration requirement": "Requisito de integração", "Civil or industrial application": "Aplicação civil ou industrial", "Packing requirement": "Requisito de embalagem" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / personalizado", "State the required terminal or equipment interface": "Informe a interface de terminal ou equipamento necessária", "Describe the intended final civil or industrial use": "Descreva o uso civil ou industrial final pretendido", "Quantity, export packing and destination requirement": "Quantidade, embalagem de exportação e requisito de destino" } },
  ru: { type: "Катушка оптоволоконного кабеля", fields: { "Required fiber length": "Требуемая длина волокна", "Drum series": "Серия катушки", "Fiber specification": "Спецификация волокна", "Integration requirement": "Требование к интеграции", "Civil or industrial application": "Гражданское или промышленное применение", "Packing requirement": "Требование к упаковке" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / индивидуально", "State the required terminal or equipment interface": "Укажите требуемый интерфейс терминала или оборудования", "Describe the intended final civil or industrial use": "Опишите предполагаемое конечное гражданское или промышленное применение", "Quantity, export packing and destination requirement": "Количество, экспортная упаковка и требование к стране назначения" } },
  ar: { type: "بكرة كابل ألياف ضوئية", fields: { "Required fiber length": "طول الألياف المطلوب", "Drum series": "سلسلة البكرة", "Fiber specification": "مواصفة الألياف", "Integration requirement": "متطلب التكامل", "Civil or industrial application": "تطبيق مدني أو صناعي", "Packing requirement": "متطلب التعبئة" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / مخصص", "State the required terminal or equipment interface": "حدد واجهة الطرف أو المعدة المطلوبة", "Describe the intended final civil or industrial use": "صف الاستخدام المدني أو الصناعي النهائي المقصود", "Quantity, export packing and destination requirement": "الكمية وتعبئة التصدير ومتطلبات الوجهة" } },
  fr: { type: "Touret de câble à fibre optique", fields: { "Required fiber length": "Longueur de fibre requise", "Drum series": "Série de touret", "Fiber specification": "Spécification de la fibre", "Integration requirement": "Exigence d'intégration", "Civil or industrial application": "Application civile ou industrielle", "Packing requirement": "Exigence d'emballage" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / sur mesure", "State the required terminal or equipment interface": "Indiquez l'interface de terminal ou d'équipement requise", "Describe the intended final civil or industrial use": "Décrivez l'usage final civil ou industriel prévu", "Quantity, export packing and destination requirement": "Quantité, emballage export et exigence de destination" } },
  ko: { type: "광섬유 케이블 드럼", fields: { "Required fiber length": "필요 광섬유 길이", "Drum series": "드럼 시리즈", "Fiber specification": "광섬유 사양", "Integration requirement": "통합 요구 사항", "Civil or industrial application": "민간 또는 산업용 적용 분야", "Packing requirement": "포장 요구 사항" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / 맞춤", "State the required terminal or equipment interface": "필요한 단자 또는 장비 인터페이스를 입력하십시오", "Describe the intended final civil or industrial use": "예정된 최종 민간 또는 산업용 용도를 설명하십시오", "Quantity, export packing and destination requirement": "수량, 수출 포장 및 목적지 요구 사항" } },
  pl: { type: "Bęben światłowodowy", fields: { "Required fiber length": "Wymagana długość włókna", "Drum series": "Seria bębna", "Fiber specification": "Specyfikacja włókna", "Integration requirement": "Wymaganie integracyjne", "Civil or industrial application": "Zastosowanie cywilne lub przemysłowe", "Packing requirement": "Wymaganie dotyczące opakowania" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / niestandardowe", "State the required terminal or equipment interface": "Podaj wymagany interfejs terminala lub urządzenia", "Describe the intended final civil or industrial use": "Opisz planowane końcowe zastosowanie cywilne lub przemysłowe", "Quantity, export packing and destination requirement": "Ilość, opakowanie eksportowe i wymóg kraju docelowego" } },
  tr: { type: "Fiber optik kablo tamburu", fields: { "Required fiber length": "Gerekli fiber uzunluğu", "Drum series": "Tambur serisi", "Fiber specification": "Fiber spesifikasyonu", "Integration requirement": "Entegrasyon gereksinimi", "Civil or industrial application": "Sivil veya endüstriyel uygulama", "Packing requirement": "Ambalaj gereksinimi" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / özel", "State the required terminal or equipment interface": "Gerekli terminal veya ekipman arayüzünü belirtin", "Describe the intended final civil or industrial use": "Planlanan nihai sivil veya endüstriyel kullanımı açıklayın", "Quantity, export packing and destination requirement": "Miktar, ihracat ambalajı ve varış ülkesi gereksinimi" } },
  uk: { type: "Котушка волоконно-оптичного кабелю", fields: { "Required fiber length": "Потрібна довжина волокна", "Drum series": "Серія котушки", "Fiber specification": "Специфікація волокна", "Integration requirement": "Вимога до інтеграції", "Civil or industrial application": "Цивільне або промислове застосування", "Packing requirement": "Вимога до пакування" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / індивідуально", "State the required terminal or equipment interface": "Вкажіть потрібний інтерфейс терміналу або обладнання", "Describe the intended final civil or industrial use": "Опишіть заплановане кінцеве цивільне або промислове застосування", "Quantity, export packing and destination requirement": "Кількість, експортне пакування та вимога до країни призначення" } },
  vi: { type: "Tang cuộn cáp quang", fields: { "Required fiber length": "Chiều dài sợi quang cần dùng", "Drum series": "Dòng tang", "Fiber specification": "Thông số sợi quang", "Integration requirement": "Yêu cầu tích hợp", "Civil or industrial application": "Ứng dụng dân dụng hoặc công nghiệp", "Packing requirement": "Yêu cầu đóng gói" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / theo yêu cầu", "State the required terminal or equipment interface": "Nêu giao diện đầu cuối hoặc thiết bị cần thiết", "Describe the intended final civil or industrial use": "Mô tả mục đích sử dụng dân dụng hoặc công nghiệp cuối cùng", "Quantity, export packing and destination requirement": "Số lượng, đóng gói xuất khẩu và yêu cầu quốc gia đến" } },
  th: { type: "ดรัมสายใยแก้วนำแสง", fields: { "Required fiber length": "ความยาวใยแก้วที่ต้องการ", "Drum series": "รุ่นดรัม", "Fiber specification": "ข้อมูลจำเพาะของใยแก้ว", "Integration requirement": "ข้อกำหนดการรวมระบบ", "Civil or industrial application": "การใช้งานโยธาหรืออุตสาหกรรม", "Packing requirement": "ข้อกำหนดการบรรจุ" }, placeholders: { "ZY-SI / ZY-MI / ZY-LI / custom": "ZY-SI / ZY-MI / ZY-LI / ตามสั่ง", "State the required terminal or equipment interface": "ระบุอินเทอร์เฟซปลายสายหรืออุปกรณ์ที่ต้องการ", "Describe the intended final civil or industrial use": "อธิบายการใช้งานโยธาหรืออุตสาหกรรมขั้นสุดท้ายที่ตั้งใจ", "Quantity, export packing and destination requirement": "ปริมาณ บรรจุภัณฑ์ส่งออก และข้อกำหนดประเทศปลายทาง" } },
};
