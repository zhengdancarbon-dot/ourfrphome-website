import type { ExtendedLocale, Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";
import {
  extendedApplicationContent,
  extendedCatalogContent,
  extendedContactContent,
  extendedHomeContent,
  extendedProductContent,
  extendedProductsPageContent,
  translateExtendedLabel,
  translateExtendedSpecText,
} from "@/lib/i18n/extended-page-content";
import { phaseOneApplicationSlugs, phaseOneProductSlugs } from "@/lib/i18n/phase-one-paths";

export type LocalizedSeo = {
  title: string;
  description: string;
  keywords?: string[];
};

export type LocalizedProductContent = {
  name: string;
  shortName: string;
  category: string;
  description: string;
  heroCopy: string;
  seo: LocalizedSeo;
  intro: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
};

export type LocalizedApplicationContent = {
  title: string;
  description: string;
  quickAnswer: string;
  seo: LocalizedSeo;
  why: string[];
  recommendedMaterials: { name: string; note: string; href: string }[];
  commonSpecifications: string[][];
  selectionGuide: string[];
  rfqDetails: string[];
  faqs: { question: string; answer: string }[];
};

export const localizedHomeContent = {
  es: {
    seo: {
      title: "Materiales de fibra de carbono y soluciones CFRP para industrias globales",
      description:
        "FRP HOME suministra tejidos de fibra de carbono, UD, spread tow, prepreg, fibra cortada, polvo de carbono, perfiles CFRP y sistemas de refuerzo estructural.",
      keywords: ["proveedor de fibra de carbono", "tejido de carbono 3K", "prepreg de fibra de carbono", "materiales CFRP"],
    },
    h1: "Materiales de fibra de carbono y soluciones CFRP para industrias globales",
    copy:
      "Hilo y tow de fibra de carbono, tejido woven, spread tow, tejido UD, prepreg, fibra cortada y molida, polvo de carbono, perfiles CFRP y sistemas de refuerzo estructural.",
    primaryCta: "Buscar por aplicación",
    secondaryCta: "Solicitar cotización",
    catalogCta: "Descargar catálogo",
    materialRail: ["Hilo y tow", "Tejido woven", "Prepreg", "Fibra corta / polvo", "Perfiles CFRP", "Refuerzo"],
    heroMeta: {
      title: "La selección de material empieza con",
      format: "Formato",
      formatValue: "tow / tejido / prepreg / perfil",
      process: "Proceso",
      processValue: "laminado / infusión / autoclave / pultrusión",
      review: "Revisión",
      reviewValue: "uso final / documentos / destino",
    },
    sections: {
      productEyebrow: "Series principales",
      productTitle: "Cobertura de suministro sin saturar el catálogo.",
      productCopy:
        "Familias organizadas para ingeniería y compras: refuerzos, tow, prepregs, aditivos, perfiles CFRP y sistemas de refuerzo.",
      applicationEyebrow: "Buscar por aplicación",
      applicationTitle: "Empiece desde la pieza, no desde el código.",
      applicationCopy:
        "Seleccione el uso final y después ajuste peso, proceso, superficie y documentación.",
      processEyebrow: "Buscar por proceso",
      processTitle: "Conecte el formato de refuerzo con el proceso de fabricación.",
      processCopy:
        "El proceso cambia el formato de fibra, sizing, resina, embalaje y documentación requeridos.",
    },
  },
  "pt-br": {
    seo: {
      title: "Materiais de fibra de carbono e soluções CFRP para indústrias globais",
      description:
        "A FRP HOME fornece tecidos de fibra de carbono, UD, spread tow, prepreg, fibra picada, pó de carbono, perfis CFRP e sistemas de reforço estrutural.",
      keywords: ["fornecedor de fibra de carbono", "tecido carbono 3K", "prepreg de fibra de carbono", "materiais CFRP"],
    },
    h1: "Materiais de fibra de carbono e soluções CFRP para indústrias globais",
    copy:
      "Fio e tow de fibra de carbono, tecido woven, spread tow, tecido UD, prepreg, fibra picada e moída, pó de carbono, perfis CFRP e sistemas de reforço estrutural.",
    primaryCta: "Buscar por aplicação",
    secondaryCta: "Solicitar cotação",
    catalogCta: "Baixar catálogo",
    materialRail: ["Fio e tow", "Tecido woven", "Prepreg", "Fibra curta / pó", "Perfis CFRP", "Reforço"],
    heroMeta: {
      title: "A seleção do material começa com",
      format: "Formato",
      formatValue: "tow / tecido / prepreg / perfil",
      process: "Processo",
      processValue: "laminação / infusão / autoclave / pultrusão",
      review: "Revisão",
      reviewValue: "uso final / documentos / destino",
    },
    sections: {
      productEyebrow: "Séries principais",
      productTitle: "Cobertura da cadeia de suprimento sem excesso de catálogo.",
      productCopy:
        "Famílias organizadas para engenharia e compras: reforços, tow, prepregs, aditivos, perfis CFRP e sistemas de reforço.",
      applicationEyebrow: "Buscar por aplicação",
      applicationTitle: "Comece pela peça, não pelo código do produto.",
      applicationCopy:
        "Selecione o uso final e depois ajuste peso, processo, superfície e documentação.",
      processEyebrow: "Buscar por processo",
      processTitle: "Conecte o formato de reforço ao processo de fabricação.",
      processCopy:
        "O processo muda o formato de fibra, sizing, resina, embalagem e documentação necessários.",
    },
  },
  ...extendedHomeContent,
} satisfies Record<Exclude<Locale, "en">, unknown>;

export const localizedProductsPageContent = {
  es: {
    seo: {
      title: "Centro de productos de materiales compuestos de fibra de carbono",
      description:
        "Explore tejido UD, tejido woven, spread tow, prepreg, placas, tubos, fibra cortada, polvo molido, hilo, tow y piezas CFRP personalizadas.",
    },
    eyebrow: "Centro de productos",
    title: "Materiales y productos de fibra de carbono para exportación.",
    copy:
      "Seleccione tejido UD, tejido woven, spread tow, prepreg, fibra cortada, polvo de fibra de carbono, hilo, tow, perfiles y productos personalizados.",
    completePortfolio: "Portafolio completo",
    completeTitle: "Materiales compuestos de fibra de carbono por categoría.",
    completeCopy:
      "Suministramos fibras, tejidos, prepregs, placas, tubos, polvo de carbono y piezas personalizadas para aplicaciones industriales y de fabricación compuesta.",
    keyProducts: "Productos clave",
    commonApplications: "Aplicaciones comunes",
  },
  "pt-br": {
    seo: {
      title: "Centro de produtos de materiais compósitos de fibra de carbono",
      description:
        "Veja tecido UD, tecido woven, spread tow, prepreg, placas, tubos, fibra picada, pó moído, fio, tow e peças CFRP personalizadas.",
    },
    eyebrow: "Centro de produtos",
    title: "Materiais e produtos de fibra de carbono para exportação.",
    copy:
      "Selecione tecido UD, tecido woven, spread tow, prepreg, fibra picada, pó de fibra de carbono, fio, tow, perfis e produtos personalizados.",
    completePortfolio: "Portfólio completo",
    completeTitle: "Materiais compósitos de fibra de carbono por categoria.",
    completeCopy:
      "Fornecemos fibras, tecidos, prepregs, placas, tubos, pó de carbono e peças personalizadas para aplicações industriais e fabricação compósita.",
    keyProducts: "Produtos principais",
    commonApplications: "Aplicações comuns",
  },
  ...extendedProductsPageContent,
} satisfies Record<Exclude<Locale, "en">, unknown>;

export const localizedContactContent = {
  es: {
    seo: {
      title: "Contactar proveedor de tejidos de fibra de carbono",
      description:
        "Contacte a FRP HOME para cotizar tejidos de carbono, tejido UD, prepreg, spread tow, fibra cortada, polvo de carbono y materiales CFRP.",
    },
    eyebrow: "Contacto FRP HOME",
    title: "Envíenos sus requisitos de material.",
    copy:
      "Cuantos más detalles comparta, más rápido podremos revisar viabilidad, especificación y cotización.",
    asideTitle: "Hable con nuestro equipo de exportación.",
    asideCopy:
      "Para una respuesta rápida, incluya producto, especificación, proceso objetivo, aplicación, cantidad y destino.",
    response: "Respuesta",
    location: "Ubicación",
    locationValue: "Zhejiang, China",
  },
  "pt-br": {
    seo: {
      title: "Contato com fornecedor de tecidos de fibra de carbono",
      description:
        "Contate a FRP HOME para cotar tecidos de carbono, tecido UD, prepreg, spread tow, fibra picada, pó de carbono e materiais CFRP.",
    },
    eyebrow: "Contato FRP HOME",
    title: "Envie seus requisitos de material.",
    copy:
      "Quanto mais detalhes você compartilhar, mais rápido poderemos revisar viabilidade, especificação e cotação.",
    asideTitle: "Fale com nossa equipe de exportação.",
    asideCopy:
      "Para resposta rápida, inclua produto, especificação, processo alvo, aplicação, quantidade e destino.",
    response: "Resposta",
    location: "Localização",
    locationValue: "Zhejiang, China",
  },
  ...extendedContactContent,
} satisfies Record<Exclude<Locale, "en">, unknown>;

export const localizedCatalogContent = {
  es: {
    seo: {
      title: "Catálogo digital de productos de fibra de carbono",
      description:
        "Catálogo digital de FRP HOME para tejidos de carbono, UD, spread tow, prepreg, placas, tubos, hilo, tow, fibra cortada y polvo de carbono.",
    },
    eyebrow: "Catálogo",
    title: "Catálogo de materiales de fibra de carbono.",
    copy:
      "Revise las principales familias de productos y prepare una RFQ con formato, especificación, cantidad, aplicación y país de destino.",
    cards: [
      ["Refuerzos", "Tejido woven, UD, spread tow y NCF para laminados compuestos."],
      ["Prepreg", "Materiales impregnados con resina para moldeo controlado."],
      ["Perfiles CFRP", "Placas, tubos, varillas y piezas CNC según plano."],
      ["Aditivos", "Fibra cortada y polvo de carbono para plástico y resina."],
    ],
  },
  "pt-br": {
    seo: {
      title: "Catálogo digital de produtos de fibra de carbono",
      description:
        "Catálogo digital da FRP HOME para tecidos de carbono, UD, spread tow, prepreg, placas, tubos, fio, tow, fibra picada e pó de carbono.",
    },
    eyebrow: "Catálogo",
    title: "Catálogo de materiais de fibra de carbono.",
    copy:
      "Revise as principais famílias de produtos e prepare uma RFQ com formato, especificação, quantidade, aplicação e país de destino.",
    cards: [
      ["Reforços", "Tecido woven, UD, spread tow e NCF para laminados compósitos."],
      ["Prepreg", "Materiais impregnados com resina para moldagem controlada."],
      ["Perfis CFRP", "Placas, tubos, hastes e peças CNC conforme desenho."],
      ["Aditivos", "Fibra picada e pó de carbono para plástico e resina."],
    ],
  },
  ...extendedCatalogContent,
} satisfies Record<Exclude<Locale, "en">, unknown>;

export const localizedProductContent: Record<Exclude<Locale, "en">, Record<(typeof phaseOneProductSlugs)[number], LocalizedProductContent>> = {
  es: {
    "carbon-fiber-woven-fabric": {
      name: "Tejido de fibra de carbono woven",
      shortName: "Tejido de carbono woven",
      category: "Tejido bidireccional",
      description:
        "Refuerzo bidireccional tejido con hilos de carbono en urdimbre y trama para laminados equilibrados y superficies CFRP visibles.",
      heroCopy:
        "FRP HOME publica un TDS para tejido twill 3K de 200 g/m². Otros tow, pesos, tejidos y patrones spread tow se revisan antes de cotizar.",
      seo: {
        title: "Tejido de fibra de carbono woven | 1K 3K 6K 12K plain y twill",
        description:
          "Proveedor de tejido de carbono 3K con producto twill de 200 g/m² documentado; otros tow y tejidos se revisan para laminados CFRP.",
      },
      intro: [
        "El tejido woven combina fibras de carbono en dos direcciones para obtener manejo estable, buena apariencia y laminados equilibrados.",
        "3K twill es una opción común para superficies visibles; 12K puede usarse en paneles más grandes e industriales.",
      ],
      applications: ["Partes automotrices visibles", "Paneles CFRP", "Equipos deportivos", "Componentes civiles UAV", "Laminados industriales"],
      faqs: [
        {
          question: "¿Qué tejido de carbono se usa para superficies visibles?",
          answer: "El tejido twill 3K de 200 g/m² documentado es un punto de partida práctico. Confirme aspecto, grado, sizing, ancho y proceso de resina antes del pedido.",
        },
        {
          question: "¿Puede reemplazar tejido UD?",
          answer: "No siempre. Woven es equilibrado; UD se usa cuando la carga principal está en una dirección.",
        },
      ],
    },
    "spread-tow-carbon-fiber-fabric": {
      name: "Tejido spread tow de fibra de carbono",
      shortName: "Spread tow carbono",
      category: "Superficie CFRP plana",
      description:
        "Tejido de carbono con tow extendido para una superficie más plana, patrón visual amplio y laminados delgados.",
      heroCopy:
        "Adecuado para superficies CFRP visibles con patrón 8x8 mm, 10x10 mm o personalizado, donde se busca textura plana y aspecto premium.",
      seo: {
        title: "Tejido spread tow de fibra de carbono | Superficie CFRP plana",
        description:
          "Tejido spread tow de carbono para paneles CFRP visibles, laminados delgados y superficies decorativas con patrón 8x8 mm o 10x10 mm.",
      },
      intro: [
        "Spread tow distribuye el tow para reducir ondulación y crear una superficie más plana.",
        "Se selecciona cuando la apariencia visible y el espesor del laminado son importantes.",
      ],
      applications: ["Paneles decorativos CFRP", "Piezas automotrices", "Equipos deportivos", "Pieles de laminado delgado"],
      faqs: [
        {
          question: "¿Spread tow es lo mismo que tejido 3K twill?",
          answer: "No. Spread tow usa tow extendido y normalmente muestra un patrón más plano y ancho.",
        },
        {
          question: "¿Qué información se necesita para cotizar?",
          answer: "Patrón, peso, ancho, tow, grado de fibra, superficie requerida y proceso de fabricación.",
        },
      ],
    },
    "carbon-fiber-ud-fabric": {
      name: "Tejido UD de fibra de carbono",
      shortName: "Tejido UD carbono",
      category: "Refuerzo direccional",
      description:
        "Refuerzo unidireccional con la mayoría de fibras orientadas en una dirección para resistencia y rigidez controladas.",
      heroCopy:
        "Se usa cuando la resistencia direccional y la orientación de capas son críticas en laminados, reparación, pultrusión o refuerzo estructural.",
      seo: {
        title: "Tejido UD de fibra de carbono | Refuerzo unidireccional",
        description:
          "Tejido UD de carbono con producto de 300 g/m² documentado y otras construcciones bajo revisión para laminados y refuerzo estructural.",
      },
      intro: [
        "El tejido UD coloca la mayor parte de la fibra en una dirección para reforzar la trayectoria principal de carga.",
        "Es práctico para refuerzo CFRP, pultrusión, reparación y laminados donde la apariencia woven no es prioritaria.",
      ],
      applications: ["Refuerzo de concreto", "Pultrusión", "Reparación compuesta", "Laminados direccionales", "Componentes deportivos"],
      faqs: [
        {
          question: "¿Cuál es la diferencia entre UD y woven?",
          answer: "UD concentra las fibras en una dirección; woven equilibra urdimbre y trama para manejo y apariencia.",
        },
        {
          question: "¿Se puede suministrar en anchos estrechos?",
          answer: "Sí, los anchos estrechos pueden revisarse para refuerzo, reparación o pultrusión.",
        },
      ],
    },
    "carbon-fiber-yarn-and-tow": {
      name: "Hilo y tow de fibra de carbono",
      shortName: "Hilo y tow carbono",
      category: "Material base",
      description:
        "Hilo, tow y roving de fibra de carbono para tejido, trenzado, enrollado filamentario, pultrusión, prepreg y conversión posterior.",
      heroCopy:
        "Opciones 1K, 3K, 6K, 12K, 24K, 48K y 50K pueden revisarse según proceso, sizing, lote, stock y cumplimiento.",
      seo: {
        title: "Hilo y tow de fibra de carbono | 1K 3K 12K 24K 50K",
        description:
          "Proveedor de hilo y tow de fibra de carbono para tejido, prepreg, pultrusión, winding y chopping, con revisión de sizing y proceso.",
      },
      intro: [
        "El hilo y tow son materiales upstream para convertir en tejidos, prepregs, perfiles y fibras cortadas.",
        "La selección debe confirmar tow, grado, sizing, empaque, proceso compatible y país de destino.",
      ],
      applications: ["Tejido", "Trenzado", "Pultrusión", "Prepreg", "Filament winding", "Chopping"],
      faqs: [
        {
          question: "¿Qué datos se necesitan para hilo o tow?",
          answer: "Tow size, grado, sizing, peso de bobina, proceso compatible, cantidad, destino y uso final.",
        },
        {
          question: "¿La disponibilidad de marca está garantizada?",
          answer: "Depende de stock, lote, cantidad, destino y revisión de cumplimiento; no implica autorización oficial.",
        },
      ],
    },
    "prepreg-carbon-fiber-materials": {
      name: "Materiales prepreg de fibra de carbono",
      shortName: "Prepreg carbono",
      category: "Refuerzo impregnado con resina",
      description:
        "Materiales de fibra de carbono preimpregnados con resina para moldeo con contenido de resina y curado controlados.",
      heroCopy:
        "Incluye prepreg woven, UD y spread tow para autoclave, prensa caliente, compresión u otros procesos revisados por especificación.",
      seo: {
        title: "Prepreg de fibra de carbono | Woven, UD y spread tow",
        description:
          "Materiales prepreg de carbono para moldeo compuesto con resina epoxi, contenido de resina y ciclo de curado confirmados por proyecto.",
      },
      intro: [
        "El prepreg combina refuerzo de carbono y sistema de resina antes del moldeo.",
        "Es adecuado cuando se requiere repetibilidad, control de resina y ciclo de curado definido.",
      ],
      applications: ["Piezas CFRP moldeadas", "Paneles automotrices", "Equipos deportivos", "Laminados controlados"],
      faqs: [
        {
          question: "¿Cuándo elegir prepreg en lugar de tejido seco?",
          answer: "Elija prepreg cuando el contenido de resina, acabado y ciclo de curado estén controlados.",
        },
        {
          question: "¿Qué datos se deben confirmar?",
          answer: "Refuerzo, peso, grado de fibra, resina, contenido de resina, temperatura de curado y almacenamiento.",
        },
      ],
    },
    "chopped-carbon-fiber": {
      name: "Fibra de carbono cortada",
      shortName: "Fibra cortada",
      category: "Fibra corta",
      description:
        "Fibra de carbono cortada en longitudes controladas para compuestos plásticos, resinas, conductividad y refuerzo funcional.",
      heroCopy:
        "Longitudes como 3 mm, 6 mm, 12 mm o personalizadas se revisan según matriz, proceso y rendimiento objetivo.",
      seo: {
        title: "Fibra de carbono cortada | Refuerzo para plástico y resina",
        description:
          "Fibra de carbono cortada para compounding, moldeo por inyección, resina y aplicaciones conductivas con longitud y sizing por revisión.",
      },
      intro: [
        "La fibra cortada se usa como refuerzo o aditivo funcional, no como superficie woven visible.",
        "La selección depende de longitud, sizing, matriz, método de proceso y rendimiento objetivo.",
      ],
      applications: ["Compounding plástico", "Resina reforzada", "Compuestos conductivos", "Materiales de fricción"],
      faqs: [
        {
          question: "¿La fibra cortada sirve para superficies visibles?",
          answer: "No. Para superficies visibles se usan tejidos woven, spread tow o laminados.",
        },
        {
          question: "¿Cómo elegir la longitud?",
          answer: "Depende de alimentación, proceso, espesor de pieza y rendimiento objetivo.",
        },
      ],
    },
    "milled-carbon-fiber-powder": {
      name: "Polvo de fibra de carbono molida",
      shortName: "Polvo de carbono",
      category: "Polvo funcional",
      description:
        "Fibra de carbono molida y polvo de carbono para resinas, plásticos, compuestos conductivos, recubrimientos y materiales de fricción.",
      heroCopy:
        "Se especifica por tamaño de polvo o malla, compatibilidad de matriz, dispersión y objetivo de rendimiento.",
      seo: {
        title: "Polvo de fibra de carbono molida | Carbon fiber powder",
        description:
          "Polvo de fibra de carbono molida para plástico, resina, compuestos conductivos y fricción, con tamaño de partícula o malla por revisión.",
      },
      intro: [
        "El polvo de fibra de carbono es adecuado cuando se requiere dispersión fina, conductividad o modificación funcional.",
        "Debe diferenciarse de fibra cortada: la morfología, manejo y uso final son distintos.",
      ],
      applications: ["Resina conductiva", "Plásticos reforzados", "Recubrimientos", "Fricción", "Compuestos funcionales"],
      faqs: [
        {
          question: "¿Es lo mismo que fibra de carbono cortada?",
          answer: "No. El polvo molido es mucho más fino y se usa como relleno o modificador funcional.",
        },
        {
          question: "¿Qué datos se necesitan para cotizar?",
          answer: "Tamaño o malla, matriz compatible, rendimiento objetivo, empaque, cantidad y destino.",
        },
      ],
    },
    "filament-wound-carbon-fiber-tube": {
      name: "Tubo de fibra de carbono por bobinado filamentario",
      shortName: "Tubo CFRP bobinado",
      category: "Tubo compuesto bobinado",
      description:
        "Tubo de fibra de carbono fabricado por bobinado continuo con refuerzo circunferencial, helicoidal y axial adaptado a la carga del proyecto.",
      heroCopy:
        "El bobinado filamentario permite ajustar la arquitectura de fibra continua para cargas circunferenciales, torsionales y combinadas, según plano y revisión técnica.",
      seo: {
        title: "Tubo de fibra de carbono por bobinado filamentario | Tubo CFRP a medida",
        description:
          "Proveedor de tubos CFRP por bobinado filamentario con diámetro, pared, longitud, arquitectura de fibra y acabado definidos según plano y aplicación.",
      },
      intro: [
        "El tubo se fabrica enrollando tow continuo de fibra de carbono sobre un mandril mediante trayectorias controladas.",
        "Antes de cotizar se revisan diámetro, espesor de pared, longitud, dirección de carga, sistema de resina, tolerancias, acabado y uso final.",
      ],
      applications: [
        "Rodillos y ejes industriales",
        "Vigas ligeras para automatización",
        "Estructuras de robótica e inspección",
        "Ejes para equipos marinos y deportivos",
        "Cilindros y conjuntos CFRP personalizados",
      ],
      faqs: [
        {
          question: "¿En qué se diferencia de un tubo pultruido?",
          answer:
            "El tubo pultruido concentra la mayor parte de las fibras en sentido longitudinal. El bobinado filamentario permite incorporar refuerzo circunferencial y helicoidal para torsión o cargas combinadas.",
        },
        {
          question: "¿Se puede personalizar el ángulo de bobinado?",
          answer:
            "Sí. La trayectoria final se revisa según geometría, dirección de carga, mandril, proceso y requisitos de validación del proyecto.",
        },
      ],
    },
    "carbon-fiber-multiaxial-ncf-fabric": {
      name: "Tejido multiaxial NCF de fibra de carbono",
      shortName: "NCF multiaxial de carbono",
      category: "Tejido no-crimp",
      description: "Tejido NCF de carbono UD, biaxial, triaxial y cuadriaxial con capas cosidas para cargas multidireccionales.",
      heroCopy: "Construcciones 300gsm y 600gsm con direcciones 0°, 90°, +45° y -45°; la arquitectura, anchura, puntada, resina y rollo se confirman antes de cotizar.",
      seo: { title: "Tejido multiaxial NCF de carbono | Biaxial 300gsm y 600gsm", description: "Proveedor de tejido multiaxial NCF de carbono UD, biaxial, triaxial y cuadriaxial para infusión, RTM y estructuras compuestas." },
      intro: ["NCF mantiene las capas de fibra en direcciones seleccionadas mediante una puntada, sin el entrelazado de un tejido woven.", "La selección debe confirmar orientación, peso por capa, anchura, longitud del rollo, hilo de costura, proceso de resina y aplicación final."],
      applications: ["Infusión al vacío", "RTM", "Paneles compuestos grandes", "Estructuras industriales", "Laminados multidireccionales"],
      faqs: [
        { question: "¿Qué diferencia hay entre biaxial y cuadriaxial?", answer: "Biaxial combina dos direcciones, por ejemplo +45°/-45°; cuadriaxial combina normalmente 0°, +45°, 90° y -45°. La selección depende del diseño del laminado." },
        { question: "¿Qué datos necesita una cotización?", answer: "Indique construcción, direcciones, g/m², anchura, rollo, hilo de costura, proceso de resina, cantidad y uso final." },
      ],
    },
    "3k-carbon-fiber-laminate-sheet": {
      name: "Placa laminada de fibra de carbono 3K",
      shortName: "Placa de carbono 3K",
      category: "Placa laminada CFRP",
      description: "Placa de carbono con superficie twill 3K y acabado mate, brillante, lijado o peel-ply para paneles y piezas mecanizadas CNC.",
      heroCopy: "El espesor, tamaño, capas interiores, planitud, acabado, tolerancia y dibujo CNC se revisan para cada pedido; no debe confundirse con la placa CFRP pultruida para refuerzo estructural.",
      seo: { title: "Placa de fibra de carbono 3K | Lámina twill y mecanizado CNC", description: "Proveedor de placas laminadas de carbono 3K con acabado mate o brillante, espesores y tamaños personalizados y mecanizado CNC por dibujo." },
      intro: ["La placa 3K combina una superficie woven visible con capas interiores definidas según rigidez, espesor y mecanizado.", "Para cotizar se confirman dimensiones, espesor, acabado, tolerancia, cantidad, dibujo y aplicación final."],
      applications: ["Paneles industriales", "Piezas CNC", "Soportes y útiles", "Componentes automotrices", "Equipos deportivos"],
      faqs: [
        { question: "¿Es igual a una placa pultruida estructural?", answer: "No. Esta página trata placas laminadas 3K para paneles y piezas. La placa pultruida de refuerzo pertenece al sistema de refuerzo estructural." },
        { question: "¿Se puede cortar según dibujo?", answer: "Sí. Envíe DXF, STEP o plano con dimensiones, tolerancias, agujeros, acabado y cantidad para revisión." },
      ],
    },
    "structural-strengthening-system": {
      name: "Sistema de refuerzo estructural con fibra de carbono",
      shortName: "Sistema CFRP estructural",
      category: "Refuerzo civil",
      description:
        "Sistema de tejido UD, placa CFRP pultruida y resina epoxi para refuerzo de concreto, mampostería, puentes y edificios.",
      heroCopy:
        "El sistema se revisa según diseño del proyecto, sustrato, dirección de carga, área de refuerzo y requisitos de resina.",
      seo: {
        title: "Sistema de refuerzo estructural CFRP | Tejido UD y placa pultruida",
        description:
          "Materiales CFRP para refuerzo estructural: tejido UD, placa pultruida CFRP y resina epoxi para concreto, puentes y edificios.",
      },
      intro: [
        "El refuerzo estructural CFRP suele combinar tejido UD, placa CFRP y resina epoxi.",
        "La idoneidad del proyecto debe revisarse por el equipo de ingeniería calificado del cliente.",
      ],
      applications: ["Vigas de concreto", "Puentes", "Columnas", "Mampostería", "Refuerzo de losas"],
      faqs: [
        {
          question: "¿Es un solo material?",
          answer: "Normalmente es un sistema con tejido UD, placa CFRP, primer, saturante o adhesivo epoxi.",
        },
        {
          question: "¿FRP HOME realiza diseño estructural?",
          answer: "Suministramos materiales y datos técnicos. El diseño y aprobación deben hacerlos ingenieros calificados.",
        },
      ],
    },
  },
  "pt-br": {
    "carbon-fiber-woven-fabric": {
      name: "Tecido woven de fibra de carbono",
      shortName: "Tecido carbono woven",
      category: "Tecido bidirecional",
      description:
        "Reforço bidirecional tecido com fios de carbono em urdume e trama para laminados equilibrados e superfícies CFRP visíveis.",
      heroCopy:
        "A FRP HOME publica um TDS para tecido twill 3K de 200 g/m². Outros tow, pesos, tecidos e padrões spread tow são analisados antes da cotação.",
      seo: {
        title: "Tecido woven de fibra de carbono | 1K 3K 6K 12K plain e twill",
        description:
          "Fornecedor de tecido de carbono 3K com produto twill de 200 g/m² documentado; outros tow e tecidos são analisados para laminados CFRP.",
      },
      intro: [
        "O tecido woven combina fibras em duas direções para manuseio estável, boa aparência e laminados equilibrados.",
        "3K twill é comum em superfícies visíveis; 12K pode ser usado em painéis maiores e industriais.",
      ],
      applications: ["Peças automotivas visíveis", "Painéis CFRP", "Equipamentos esportivos", "Componentes civis UAV", "Laminados industriais"],
      faqs: [
        {
          question: "Qual tecido de carbono é usado para superfícies visíveis?",
          answer: "O tecido twill 3K de 200 g/m² documentado é um ponto de partida prático. Confirme aparência, grau, sizing, largura e processo de resina antes do pedido.",
        },
        {
          question: "Pode substituir tecido UD?",
          answer: "Nem sempre. Woven é equilibrado; UD é usado quando a carga principal está em uma direção.",
        },
      ],
    },
    "spread-tow-carbon-fiber-fabric": {
      name: "Tecido spread tow de fibra de carbono",
      shortName: "Spread tow carbono",
      category: "Superfície CFRP plana",
      description:
        "Tecido de carbono com tow espalhado para superfície mais plana, padrão visual amplo e laminados finos.",
      heroCopy:
        "Adequado para superfícies CFRP visíveis com padrão 8x8 mm, 10x10 mm ou personalizado, quando se busca textura plana e visual premium.",
      seo: {
        title: "Tecido spread tow de fibra de carbono | Superfície CFRP plana",
        description:
          "Tecido spread tow de carbono para painéis CFRP visíveis, laminados finos e superfícies decorativas com padrão 8x8 mm ou 10x10 mm.",
      },
      intro: [
        "Spread tow distribui o tow para reduzir ondulação e criar uma superfície mais plana.",
        "É escolhido quando aparência visível e espessura do laminado são importantes.",
      ],
      applications: ["Painéis CFRP decorativos", "Peças automotivas", "Equipamentos esportivos", "Peles de laminado fino"],
      faqs: [
        {
          question: "Spread tow é igual ao tecido 3K twill?",
          answer: "Não. Spread tow usa tow espalhado e geralmente mostra um padrão mais plano e largo.",
        },
        {
          question: "Que informação é necessária para cotação?",
          answer: "Padrão, peso, largura, tow, grau de fibra, superfície desejada e processo de fabricação.",
        },
      ],
    },
    "carbon-fiber-ud-fabric": {
      name: "Tecido UD de fibra de carbono",
      shortName: "Tecido UD carbono",
      category: "Reforço direcional",
      description:
        "Reforço unidirecional com a maioria das fibras orientadas em uma direção para resistência e rigidez controladas.",
      heroCopy:
        "Usado quando resistência direcional e orientação de camadas são críticas em laminados, reparo, pultrusão ou reforço estrutural.",
      seo: {
        title: "Tecido UD de fibra de carbono | Reforço unidirecional",
        description:
          "Tecido UD de carbono com produto de 300 g/m² documentado e outras construções sob análise para laminados e reforço estrutural.",
      },
      intro: [
        "O tecido UD coloca a maior parte da fibra em uma direção para reforçar a principal trajetória de carga.",
        "É prático para reforço CFRP, pultrusão, reparo e laminados em que aparência woven não é prioridade.",
      ],
      applications: ["Reforço de concreto", "Pultrusão", "Reparo compósito", "Laminados direcionais", "Componentes esportivos"],
      faqs: [
        {
          question: "Qual é a diferença entre UD e woven?",
          answer: "UD concentra fibras em uma direção; woven equilibra urdume e trama para manuseio e aparência.",
        },
        {
          question: "Pode ser fornecido em larguras estreitas?",
          answer: "Sim, larguras estreitas podem ser revisadas para reforço, reparo ou pultrusão.",
        },
      ],
    },
    "carbon-fiber-yarn-and-tow": {
      name: "Fio e tow de fibra de carbono",
      shortName: "Fio e tow carbono",
      category: "Material base",
      description:
        "Fio, tow e roving de fibra de carbono para tecelagem, trança, filament winding, pultrusão, prepreg e conversão posterior.",
      heroCopy:
        "Opções 1K, 3K, 6K, 12K, 24K, 48K e 50K podem ser revisadas conforme processo, sizing, lote, estoque e conformidade.",
      seo: {
        title: "Fio e tow de fibra de carbono | 1K 3K 12K 24K 50K",
        description:
          "Fornecedor de fio e tow de fibra de carbono para tecelagem, prepreg, pultrusão, winding e chopping, com revisão de sizing e processo.",
      },
      intro: [
        "Fio e tow são materiais upstream para converter em tecidos, prepregs, perfis e fibras picadas.",
        "A seleção deve confirmar tow, grau, sizing, embalagem, processo compatível e país de destino.",
      ],
      applications: ["Tecelagem", "Trança", "Pultrusão", "Prepreg", "Filament winding", "Chopping"],
      faqs: [
        {
          question: "Quais dados são necessários para fio ou tow?",
          answer: "Tow size, grau, sizing, peso da bobina, processo compatível, quantidade, destino e uso final.",
        },
        {
          question: "A disponibilidade de marca é garantida?",
          answer: "Depende de estoque, lote, quantidade, destino e revisão de conformidade; não implica autorização oficial.",
        },
      ],
    },
    "prepreg-carbon-fiber-materials": {
      name: "Materiais prepreg de fibra de carbono",
      shortName: "Prepreg carbono",
      category: "Reforço impregnado com resina",
      description:
        "Materiais de fibra de carbono pré-impregnados com resina para moldagem com teor de resina e cura controlados.",
      heroCopy:
        "Inclui prepreg woven, UD e spread tow para autoclave, prensa quente, compressão ou outros processos revisados por especificação.",
      seo: {
        title: "Prepreg de fibra de carbono | Woven, UD e spread tow",
        description:
          "Materiais prepreg de carbono para moldagem compósita com resina epóxi, teor de resina e ciclo de cura confirmados por projeto.",
      },
      intro: [
        "O prepreg combina reforço de carbono e sistema de resina antes da moldagem.",
        "É adequado quando repetibilidade, controle de resina e ciclo de cura definido são necessários.",
      ],
      applications: ["Peças CFRP moldadas", "Painéis automotivos", "Equipamentos esportivos", "Laminados controlados"],
      faqs: [
        {
          question: "Quando escolher prepreg em vez de tecido seco?",
          answer: "Escolha prepreg quando teor de resina, acabamento e ciclo de cura estiverem controlados.",
        },
        {
          question: "Quais dados devem ser confirmados?",
          answer: "Reforço, peso, grau de fibra, resina, teor de resina, temperatura de cura e armazenamento.",
        },
      ],
    },
    "chopped-carbon-fiber": {
      name: "Fibra de carbono picada",
      shortName: "Fibra picada",
      category: "Fibra curta",
      description:
        "Fibra de carbono picada em comprimentos controlados para plásticos, resinas, condutividade e reforço funcional.",
      heroCopy:
        "Comprimentos como 3 mm, 6 mm, 12 mm ou personalizados são revisados conforme matriz, processo e desempenho alvo.",
      seo: {
        title: "Fibra de carbono picada | Reforço para plástico e resina",
        description:
          "Fibra de carbono picada para compounding, injeção, resina e aplicações condutivas com comprimento e sizing por revisão.",
      },
      intro: [
        "A fibra picada é usada como reforço ou aditivo funcional, não como superfície woven visível.",
        "A seleção depende de comprimento, sizing, matriz, método de processo e desempenho alvo.",
      ],
      applications: ["Compounding plástico", "Resina reforçada", "Compostos condutivos", "Materiais de fricção"],
      faqs: [
        {
          question: "Fibra picada serve para superfícies visíveis?",
          answer: "Não. Para superfícies visíveis são usados tecidos woven, spread tow ou laminados.",
        },
        {
          question: "Como escolher o comprimento?",
          answer: "Depende de alimentação, processo, espessura da peça e desempenho alvo.",
        },
      ],
    },
    "milled-carbon-fiber-powder": {
      name: "Pó de fibra de carbono moída",
      shortName: "Pó de carbono",
      category: "Pó funcional",
      description:
        "Fibra de carbono moída e pó de carbono para resinas, plásticos, compostos condutivos, revestimentos e materiais de fricção.",
      heroCopy:
        "Especificado por tamanho de pó ou malha, compatibilidade da matriz, dispersão e objetivo de desempenho.",
      seo: {
        title: "Pó de fibra de carbono moída | Carbon fiber powder",
        description:
          "Pó de fibra de carbono moída para plástico, resina, compostos condutivos e fricção, com tamanho de partícula ou malha por revisão.",
      },
      intro: [
        "O pó de fibra de carbono é adequado quando dispersão fina, condutividade ou modificação funcional são necessárias.",
        "Deve ser diferenciado da fibra picada: morfologia, manuseio e uso final são distintos.",
      ],
      applications: ["Resina condutiva", "Plásticos reforçados", "Revestimentos", "Fricção", "Compósitos funcionais"],
      faqs: [
        {
          question: "É igual à fibra de carbono picada?",
          answer: "Não. O pó moído é muito mais fino e usado como carga ou modificador funcional.",
        },
        {
          question: "Quais dados são necessários para cotação?",
          answer: "Tamanho ou malha, matriz compatível, desempenho alvo, embalagem, quantidade e destino.",
        },
      ],
    },
    "filament-wound-carbon-fiber-tube": {
      name: "Tubo de fibra de carbono por enrolamento filamentar",
      shortName: "Tubo CFRP enrolado",
      category: "Tubo compósito enrolado",
      description:
        "Tubo de fibra de carbono produzido por enrolamento contínuo com reforços circunferenciais, helicoidais e axiais definidos conforme a carga do projeto.",
      heroCopy:
        "O enrolamento filamentar permite ajustar a arquitetura de fibra contínua para cargas circunferenciais, torcionais e combinadas, conforme desenho e análise técnica.",
      seo: {
        title: "Tubo de fibra de carbono por enrolamento filamentar | Tubo CFRP sob medida",
        description:
          "Fornecedor de tubos CFRP por enrolamento filamentar com diâmetro, parede, comprimento, arquitetura de fibras e acabamento definidos conforme desenho e aplicação.",
      },
      intro: [
        "O tubo é fabricado enrolando tow contínuo de fibra de carbono sobre um mandril em trajetórias controladas.",
        "Antes da cotação, revisamos diâmetro, espessura de parede, comprimento, direção de carga, sistema de resina, tolerâncias, acabamento e uso final.",
      ],
      applications: [
        "Rolos e eixos industriais",
        "Vigas leves para automação",
        "Estruturas de robótica e inspeção",
        "Eixos para equipamentos marítimos e esportivos",
        "Cilindros e conjuntos CFRP personalizados",
      ],
      faqs: [
        {
          question: "Qual é a diferença em relação ao tubo pultrudado?",
          answer:
            "O tubo pultrudado concentra a maior parte das fibras no sentido longitudinal. O enrolamento filamentar permite adicionar reforço circunferencial e helicoidal para torção ou cargas combinadas.",
        },
        {
          question: "O ângulo de enrolamento pode ser personalizado?",
          answer:
            "Sim. A trajetória final é analisada conforme geometria, direção de carga, mandril, processo e requisitos de validação do projeto.",
        },
      ],
    },
    "carbon-fiber-multiaxial-ncf-fabric": {
      name: "Tecido multiaxial NCF de fibra de carbono",
      shortName: "NCF multiaxial de carbono",
      category: "Tecido não-crimp",
      description: "Tecido NCF de carbono UD, biaxial, triaxial e quadriaxial com camadas costuradas para cargas multidirecionais.",
      heroCopy: "Construções 300gsm e 600gsm com direções 0°, 90°, +45° e -45°; arquitetura, largura, costura, resina e rolo são confirmados antes da cotação.",
      seo: { title: "Tecido multiaxial NCF de carbono | Biaxial 300gsm e 600gsm", description: "Fornecedor de tecido multiaxial NCF de carbono UD, biaxial, triaxial e quadriaxial para infusão, RTM e estruturas compósitas." },
      intro: ["O NCF mantém camadas de fibra em direções selecionadas por meio de costura, sem o entrelaçamento de um tecido woven.", "A seleção deve confirmar orientação, peso por camada, largura, comprimento do rolo, fio de costura, processo de resina e uso final."],
      applications: ["Infusão a vácuo", "RTM", "Painéis compósitos grandes", "Estruturas industriais", "Laminados multidirecionais"],
      faqs: [
        { question: "Qual é a diferença entre biaxial e quadriaxial?", answer: "Biaxial combina duas direções, como +45°/-45°; quadriaxial normalmente combina 0°, +45°, 90° e -45°. A seleção depende do projeto do laminado." },
        { question: "Quais dados são necessários para cotação?", answer: "Informe construção, direções, g/m², largura, rolo, fio de costura, processo de resina, quantidade e uso final." },
      ],
    },
    "3k-carbon-fiber-laminate-sheet": {
      name: "Placa laminada de fibra de carbono 3K",
      shortName: "Placa de carbono 3K",
      category: "Placa laminada CFRP",
      description: "Placa de carbono com superfície twill 3K e acabamento fosco, brilhante, lixado ou peel-ply para painéis e peças usinadas CNC.",
      heroCopy: "Espessura, tamanho, camadas internas, planicidade, acabamento, tolerância e desenho CNC são revisados para cada pedido; não confundir com placa CFRP pultrudada para reforço estrutural.",
      seo: { title: "Placa de fibra de carbono 3K | Chapa twill e usinagem CNC", description: "Fornecedor de placas laminadas de carbono 3K com acabamento fosco ou brilhante, espessuras e tamanhos personalizados e usinagem CNC por desenho." },
      intro: ["A placa 3K combina superfície woven visível com camadas internas definidas conforme rigidez, espessura e usinagem.", "Para cotar, confirme dimensões, espessura, acabamento, tolerância, quantidade, desenho e uso final."],
      applications: ["Painéis industriais", "Peças CNC", "Suportes e gabaritos", "Componentes automotivos", "Equipamentos esportivos"],
      faqs: [
        { question: "É igual a uma placa pultrudada estrutural?", answer: "Não. Esta página trata de placas laminadas 3K para painéis e peças. A placa pultrudada de reforço pertence ao sistema de reforço estrutural." },
        { question: "Pode ser cortada conforme desenho?", answer: "Sim. Envie DXF, STEP ou desenho com dimensões, tolerâncias, furos, acabamento e quantidade para análise." },
      ],
    },
    "structural-strengthening-system": {
      name: "Sistema de reforço estrutural com fibra de carbono",
      shortName: "Sistema CFRP estrutural",
      category: "Reforço civil",
      description:
        "Sistema de tecido UD, placa CFRP pultrudada e resina epóxi para reforço de concreto, alvenaria, pontes e edifícios.",
      heroCopy:
        "O sistema é revisado conforme projeto, substrato, direção de carga, área de reforço e requisitos de resina.",
      seo: {
        title: "Sistema de reforço estrutural CFRP | Tecido UD e placa pultrudada",
        description:
          "Materiais CFRP para reforço estrutural: tecido UD, placa pultrudada CFRP e resina epóxi para concreto, pontes e edifícios.",
      },
      intro: [
        "O reforço estrutural CFRP normalmente combina tecido UD, placa CFRP e resina epóxi.",
        "A adequação do projeto deve ser revisada pela equipe de engenharia qualificada do cliente.",
      ],
      applications: ["Vigas de concreto", "Pontes", "Colunas", "Alvenaria", "Reforço de lajes"],
      faqs: [
        {
          question: "É um único material?",
          answer: "Normalmente é um sistema com tecido UD, placa CFRP, primer, saturante ou adesivo epóxi.",
        },
        {
          question: "A FRP HOME faz projeto estrutural?",
          answer: "Fornecemos materiais e dados técnicos. Projeto e aprovação devem ser feitos por engenheiros qualificados.",
        },
      ],
    },
  },
  ...extendedProductContent,
};

export const localizedApplicationContent: Record<Exclude<Locale, "en">, Record<(typeof phaseOneApplicationSlugs)[number], LocalizedApplicationContent>> = {
  es: {
    "automotive-carbon-fiber-parts": {
      title: "Materiales de fibra de carbono para piezas automotrices",
      description:
        "Guía para tejido de carbono, prepreg, placas, tubos y piezas CFRP personalizadas usadas en componentes automotrices visuales y estructurales.",
      quickAnswer:
        "Las piezas automotrices de carbono suelen usar tejido 3K, spread tow, prepreg, placas de carbono y componentes CFRP personalizados cuando se requiere apariencia, rigidez y bajo peso.",
      seo: {
        title: "Fibra de carbono para piezas automotrices | Tejido 3K, prepreg y placas",
        description:
          "Materiales de carbono para piezas automotrices: tejido 3K, spread tow, prepreg, placas, tubos y piezas CFRP personalizadas.",
      },
      why: [
        "La fibra de carbono puede reducir peso y mantener rigidez en paneles, cubiertas y soportes.",
        "3K twill y spread tow ofrecen apariencia CFRP reconocible para partes visibles.",
        "Prepreg y laminados controlados ayudan cuando importan repetibilidad y acabado.",
      ],
      recommendedMaterials: [
        { name: "Tejido 3K twill de carbono", href: "/products/carbon-fiber-woven-fabric", note: "Apariencia clásica automotriz." },
        { name: "Tejido spread tow", href: "/products/spread-tow-carbon-fiber-fabric", note: "Superficie plana para CFRP visible." },
        { name: "Prepreg carbono", href: "/products/prepreg-carbon-fiber-materials", note: "Contenido de resina controlado." },
        { name: "Placa de fibra de carbono", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Paneles y piezas CNC." },
      ],
      commonSpecifications: [
        ["Tejido visible", "3K twill / plain / spread tow"],
        ["Tejido visible documentado", "3K twill 200 g/m²; otras construcciones bajo revisión"],
        ["Formato", "Tejido seco, prepreg o placa laminada"],
      ],
      selectionGuide: [
        "Use tejido seco cuando el cliente controla el proceso de resina.",
        "Use prepreg cuando se controla contenido de resina y ciclo de curado.",
        "Use placa laminada para piezas planas cortadas por CNC.",
      ],
      rfqDetails: ["Tipo de pieza", "Requisito de superficie", "Espesor", "Plano o foto", "Cantidad", "Destino", "Uso final"],
      faqs: [
        {
          question: "¿Qué tejido se usa para piezas automotrices visibles?",
          answer: "3K twill es un punto de partida común; spread tow se usa cuando se busca patrón más plano.",
        },
        {
          question: "¿Prepreg o tejido seco?",
          answer: "Prepreg ayuda con repetibilidad; tejido seco es práctico para wet lay-up y menor volumen.",
        },
      ],
    },
    "civil-uav-drone-components": {
      title: "Materiales de fibra de carbono para UAV civiles y drones",
      description:
        "Placas, tubos, varillas, tejido 3K, spread tow y piezas CFRP personalizadas para UAV civil, inspección y drones comerciales.",
      quickAnswer:
        "Placas, tubos, varillas y piezas CNC de carbono se usan en UAV civiles y drones donde se requiere estructura ligera, rigidez y estabilidad dimensional.",
      seo: {
        title: "Materiales de carbono para UAV civil y drones | Placas, tubos y piezas CNC",
        description:
          "Materiales CFRP para drones civiles: placas, tubos, varillas, tejido 3K, spread tow y piezas personalizadas según plano.",
      },
      why: [
        "Placas y tubos CFRP ofrecen alta rigidez con bajo peso.",
        "Piezas CNC facilitan geometría repetible cuando hay planos.",
        "Superficies 3K o spread tow pueden usarse cuando importa la apariencia.",
      ],
      recommendedMaterials: [
        { name: "Placa de carbono", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Bastidores, brazos y soportes." },
        { name: "Tubo de carbono", href: "/products/3k-surface-carbon-fiber-tube", note: "Brazos y estructuras ligeras." },
        { name: "Piezas CFRP CNC", href: "/products/custom-carbon-fiber-products", note: "Componentes según plano." },
      ],
      commonSpecifications: [
        ["Espesor de placa", "1 / 1.5 / 2 / 3 / 4 / 5 mm o custom"],
        ["Tubo", "OD / ID / espesor según plano"],
        ["Superficie", "3K twill, mate, brillo o lijada"],
      ],
      selectionGuide: [
        "Use placa para bastidores y soportes planos.",
        "Use tubo para brazos y estructuras ligeras.",
        "Confirme uso civil o comercial y país de destino.",
      ],
      rfqDetails: ["Tipo de componente", "Dimensiones", "Plano", "Acabado", "Cantidad", "Aplicación civil", "Destino"],
      faqs: [
        {
          question: "¿Pueden suministrar piezas para drones comerciales?",
          answer: "Podemos revisar placas, tubos y piezas CNC para UAV civil, inspección, agricultura y fotografía aérea.",
        },
        {
          question: "¿Qué archivos ayudan a cotizar?",
          answer: "DXF, STEP, PDF, espesor, acabado, tolerancia y cantidad.",
        },
      ],
    },
    "plastic-resin-reinforcement": {
      title: "Fibra de carbono para refuerzo de plástico y resina",
      description:
        "Guía de fibra cortada, fibra molida y polvo de carbono para plástico, resina y compuestos conductivos.",
      quickAnswer:
        "Fibra de carbono cortada, fibra molida y polvo de carbono se usan cuando se requiere refuerzo, conductividad, resistencia al desgaste o estabilidad dimensional.",
      seo: {
        title: "Fibra de carbono para plástico y resina | Cortada y polvo molido",
        description:
          "Selección de fibra cortada y polvo de carbono para refuerzo de plástico, resina, compuestos conductivos y materiales funcionales.",
      },
      why: [
        "Las fibras cortas pueden mejorar rigidez y resistencia en matrices seleccionadas.",
        "El polvo molido puede apoyar conductividad, desgaste y control dimensional.",
        "Sizing y longitud deben coincidir con matriz y proceso.",
      ],
      recommendedMaterials: [
        { name: "Fibra de carbono cortada", href: "/products/chopped-carbon-fiber", note: "3 mm, 6 mm, 12 mm o custom." },
        { name: "Polvo de carbono molido", href: "/products/milled-carbon-fiber-powder", note: "Polvo fibroso fino para compuestos." },
      ],
      commonSpecifications: [
        ["Longitud", "3 / 6 / 12 / 25 mm o custom"],
        ["Tamaño de polvo", "30-300 um típico o malla por revisión"],
        ["Matriz", "PA / PP / PEEK / PPS / ABS / PC / epoxi / fenólica"],
      ],
      selectionGuide: [
        "Empiece por la matriz y el método de proceso.",
        "Use fibra cortada para refuerzo corto.",
        "Use polvo molido para dispersión fina o conductividad.",
      ],
      rfqDetails: ["Longitud o malla", "Sizing", "Matriz", "Proceso", "Rendimiento objetivo", "Embalaje", "Cantidad", "Destino"],
      faqs: [
        {
          question: "¿Sirve para superficie visible de carbono?",
          answer: "No. Para superficie visible se usan tejidos o laminados.",
        },
        {
          question: "¿Cómo elegir longitud?",
          answer: "Depende de alimentación, proceso, espesor de pieza y rendimiento objetivo.",
        },
      ],
    },
    "structural-strengthening": {
      title: "Materiales de fibra de carbono para refuerzo estructural",
      description:
        "Guía de tejido UD, placas CFRP pultruidas y resina epoxi para refuerzo de concreto, puentes y edificios.",
      quickAnswer:
        "Un sistema CFRP estructural incluye tejido UD, placas pultruidas CFRP y resina epoxi para refuerzo de concreto, puentes y edificios.",
      seo: {
        title: "Materiales CFRP para refuerzo estructural | Tejido UD y placa CFRP",
        description:
          "Guía de materiales de refuerzo estructural CFRP con tejido UD, placa pultruida y resina epoxi para proyectos civiles.",
      },
      why: [
        "El tejido UD ofrece refuerzo direccional por adhesión superficial.",
        "Las placas CFRP aportan rigidez axial en franjas estrechas.",
        "La resina epoxi debe seleccionarse según sustrato y proyecto.",
      ],
      recommendedMaterials: [
        { name: "Tejido UD para refuerzo", href: "/products/carbon-fiber-ud-fabric", note: "Refuerzo direccional." },
        { name: "Placa CFRP pultruida", href: "/products/structural-strengthening-system", note: "Laminado de alta rigidez." },
        { name: "Resina epoxi estructural", href: "/products/structural-strengthening-system", note: "Bonding e impregnación por proyecto." },
      ],
      commonSpecifications: [
        ["Tejido UD documentado", "300 g/m²; otras construcciones bajo revisión"],
        ["Ancho tejido UD", "100-500 mm documentado para 300 g/m²"],
        ["Placa CFRP documentada", "1.2 mm; ancho y longitud según cotización"],
      ],
      selectionGuide: [
        "Confirme tipo de estructura y dirección de carga.",
        "Use tejido UD para refuerzo superficial en área.",
        "Use placa CFRP para capacidad axial en una franja.",
        "El diseño debe ser aprobado por ingenieros calificados.",
      ],
      rfqDetails: ["Tipo de proyecto", "Material requerido", "Peso UD", "Dimensiones de placa", "Resina", "Área", "Destino"],
      faqs: [
        {
          question: "¿Es un solo material?",
          answer: "Normalmente es un sistema con tejido UD, placa CFRP y resina epoxi.",
        },
        {
          question: "¿FRP HOME proporciona diseño estructural?",
          answer: "Suministramos materiales y datos; el diseño debe hacerlo el equipo de ingeniería calificado.",
        },
      ],
    },
  },
  "pt-br": {
    "automotive-carbon-fiber-parts": {
      title: "Materiais de fibra de carbono para peças automotivas",
      description:
        "Guia para tecido de carbono, prepreg, placas, tubos e peças CFRP personalizadas usadas em componentes automotivos visuais e estruturais.",
      quickAnswer:
        "Peças automotivas de carbono costumam usar tecido 3K, spread tow, prepreg, placas de carbono e componentes CFRP personalizados quando aparência, rigidez e baixo peso são necessários.",
      seo: {
        title: "Fibra de carbono para peças automotivas | Tecido 3K, prepreg e placas",
        description:
          "Materiais de carbono para peças automotivas: tecido 3K, spread tow, prepreg, placas, tubos e peças CFRP personalizadas.",
      },
      why: [
        "A fibra de carbono pode reduzir peso e manter rigidez em painéis, capas e suportes.",
        "3K twill e spread tow oferecem aparência CFRP reconhecível para peças visíveis.",
        "Prepreg e laminados controlados ajudam quando repetibilidade e acabamento importam.",
      ],
      recommendedMaterials: [
        { name: "Tecido carbono 3K twill", href: "/products/carbon-fiber-woven-fabric", note: "Aparência automotiva clássica." },
        { name: "Tecido spread tow", href: "/products/spread-tow-carbon-fiber-fabric", note: "Superfície plana para CFRP visível." },
        { name: "Prepreg carbono", href: "/products/prepreg-carbon-fiber-materials", note: "Teor de resina controlado." },
        { name: "Placa de fibra de carbono", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Painéis e peças CNC." },
      ],
      commonSpecifications: [
        ["Tecido visível", "3K twill / plain / spread tow"],
        ["Tecido visível documentado", "3K twill 200 g/m²; outras construções sob análise"],
        ["Formato", "Tecido seco, prepreg ou placa laminada"],
      ],
      selectionGuide: [
        "Use tecido seco quando o cliente controla o processo de resina.",
        "Use prepreg quando teor de resina e cura são controlados.",
        "Use placa laminada para peças planas cortadas em CNC.",
      ],
      rfqDetails: ["Tipo de peça", "Requisito de superfície", "Espessura", "Desenho ou foto", "Quantidade", "Destino", "Uso final"],
      faqs: [
        {
          question: "Qual tecido é usado para peças automotivas visíveis?",
          answer: "3K twill é um ponto de partida comum; spread tow é usado quando se busca padrão mais plano.",
        },
        {
          question: "Prepreg ou tecido seco?",
          answer: "Prepreg ajuda na repetibilidade; tecido seco é prático para wet lay-up e menor volume.",
        },
      ],
    },
    "civil-uav-drone-components": {
      title: "Materiais de fibra de carbono para UAV civil e drones",
      description:
        "Placas, tubos, hastes, tecido 3K, spread tow e peças CFRP personalizadas para UAV civil, inspeção e drones comerciais.",
      quickAnswer:
        "Placas, tubos, hastes e peças CNC de carbono são usados em UAV civis e drones quando estrutura leve, rigidez e estabilidade dimensional são necessárias.",
      seo: {
        title: "Materiais de carbono para UAV civil e drones | Placas, tubos e CNC",
        description:
          "Materiais CFRP para drones civis: placas, tubos, hastes, tecido 3K, spread tow e peças personalizadas conforme desenho.",
      },
      why: [
        "Placas e tubos CFRP oferecem alta rigidez com baixo peso.",
        "Peças CNC facilitam geometria repetível quando há desenhos.",
        "Superfícies 3K ou spread tow podem ser usadas quando aparência importa.",
      ],
      recommendedMaterials: [
        { name: "Placa de carbono", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Frames, braços e suportes." },
        { name: "Tubo de carbono", href: "/products/3k-surface-carbon-fiber-tube", note: "Braços e estruturas leves." },
        { name: "Peças CFRP CNC", href: "/products/custom-carbon-fiber-products", note: "Componentes conforme desenho." },
      ],
      commonSpecifications: [
        ["Espessura da placa", "1 / 1.5 / 2 / 3 / 4 / 5 mm ou custom"],
        ["Tubo", "OD / ID / parede conforme desenho"],
        ["Superfície", "3K twill, fosca, brilhante ou lixada"],
      ],
      selectionGuide: [
        "Use placa para frames e suportes planos.",
        "Use tubo para braços e estruturas leves.",
        "Confirme uso civil ou comercial e país de destino.",
      ],
      rfqDetails: ["Tipo de componente", "Dimensões", "Desenho", "Acabamento", "Quantidade", "Aplicação civil", "Destino"],
      faqs: [
        {
          question: "Podem fornecer peças para drones comerciais?",
          answer: "Podemos revisar placas, tubos e peças CNC para UAV civil, inspeção, agricultura e fotografia aérea.",
        },
        {
          question: "Quais arquivos ajudam na cotação?",
          answer: "DXF, STEP, PDF, espessura, acabamento, tolerância e quantidade.",
        },
      ],
    },
    "plastic-resin-reinforcement": {
      title: "Fibra de carbono para reforço de plástico e resina",
      description:
        "Guia de fibra picada, fibra moída e pó de carbono para plástico, resina e compostos condutivos.",
      quickAnswer:
        "Fibra de carbono picada, fibra moída e pó de carbono são usados quando reforço, condutividade, resistência ao desgaste ou estabilidade dimensional são necessários.",
      seo: {
        title: "Fibra de carbono para plástico e resina | Picada e pó moído",
        description:
          "Seleção de fibra picada e pó de carbono para reforço de plástico, resina, compostos condutivos e materiais funcionais.",
      },
      why: [
        "Fibras curtas podem melhorar rigidez e resistência em matrizes selecionadas.",
        "Pó moído pode apoiar condutividade, desgaste e controle dimensional.",
        "Sizing e comprimento devem combinar com matriz e processo.",
      ],
      recommendedMaterials: [
        { name: "Fibra de carbono picada", href: "/products/chopped-carbon-fiber", note: "3 mm, 6 mm, 12 mm ou custom." },
        { name: "Pó de carbono moído", href: "/products/milled-carbon-fiber-powder", note: "Pó fibroso fino para compostos." },
      ],
      commonSpecifications: [
        ["Comprimento", "3 / 6 / 12 / 25 mm ou custom"],
        ["Tamanho do pó", "30-300 um típico ou malha por revisão"],
        ["Matriz", "PA / PP / PEEK / PPS / ABS / PC / epóxi / fenólica"],
      ],
      selectionGuide: [
        "Comece pela matriz e método de processo.",
        "Use fibra picada para reforço curto.",
        "Use pó moído para dispersão fina ou condutividade.",
      ],
      rfqDetails: ["Comprimento ou malha", "Sizing", "Matriz", "Processo", "Desempenho alvo", "Embalagem", "Quantidade", "Destino"],
      faqs: [
        {
          question: "Serve para superfície visível de carbono?",
          answer: "Não. Para superfície visível são usados tecidos ou laminados.",
        },
        {
          question: "Como escolher comprimento?",
          answer: "Depende de alimentação, processo, espessura da peça e desempenho alvo.",
        },
      ],
    },
    "structural-strengthening": {
      title: "Materiais de fibra de carbono para reforço estrutural",
      description:
        "Guia de tecido UD, placas CFRP pultrudadas e resina epóxi para reforço de concreto, pontes e edifícios.",
      quickAnswer:
        "Um sistema CFRP estrutural inclui tecido UD, placas pultrudadas CFRP e resina epóxi para reforço de concreto, pontes e edifícios.",
      seo: {
        title: "Materiais CFRP para reforço estrutural | Tecido UD e placa CFRP",
        description:
          "Guia de materiais de reforço estrutural CFRP com tecido UD, placa pultrudada e resina epóxi para projetos civis.",
      },
      why: [
        "O tecido UD oferece reforço direcional por colagem superficial.",
        "Placas CFRP oferecem rigidez axial em faixas estreitas.",
        "A resina epóxi deve ser selecionada conforme substrato e projeto.",
      ],
      recommendedMaterials: [
        { name: "Tecido UD para reforço", href: "/products/carbon-fiber-ud-fabric", note: "Reforço direcional." },
        { name: "Placa CFRP pultrudada", href: "/products/structural-strengthening-system", note: "Laminado de alta rigidez." },
        { name: "Resina epóxi estrutural", href: "/products/structural-strengthening-system", note: "Colagem e impregnação por projeto." },
      ],
      commonSpecifications: [
        ["Tecido UD documentado", "300 g/m²; outras construções sob análise"],
        ["Largura do tecido UD", "100-500 mm documentado para 300 g/m²"],
        ["Placa CFRP documentada", "1.2 mm; largura e comprimento conforme cotação"],
      ],
      selectionGuide: [
        "Confirme tipo de estrutura e direção de carga.",
        "Use tecido UD para reforço superficial em área.",
        "Use placa CFRP para capacidade axial em uma faixa.",
        "O projeto deve ser aprovado por engenheiros qualificados.",
      ],
      rfqDetails: ["Tipo de projeto", "Material necessário", "Peso UD", "Dimensões da placa", "Resina", "Área", "Destino"],
      faqs: [
        {
          question: "É um único material?",
          answer: "Normalmente é um sistema com tecido UD, placa CFRP e resina epóxi.",
        },
        {
          question: "A FRP HOME fornece projeto estrutural?",
          answer: "Fornecemos materiais e dados; o projeto deve ser feito pela equipe de engenharia qualificada.",
        },
      ],
    },
  },
  ...extendedApplicationContent,
};

const labelTranslations: Record<"es" | "pt-br", Record<string, string>> = {
  es: {
    Home: "Inicio",
    Products: "Productos",
    Product: "Producto",
    "Product type": "Tipo de producto",
    Documents: "Documentos",
    "End-use review": "Revisión de uso final",
    Spec: "Especificación",
    Review: "Revisión",
    "Areal weight": "Peso areal",
    Width: "Ancho",
    Weave: "Tejido",
    "Tow size": "Tamaño de tow",
    Tow: "Tow",
    Grade: "Grado",
    Pattern: "Patrón",
    "Pattern size": "Tamaño de patrón",
    "Fiber grade": "Grado de fibra",
    "Mean length": "Longitud media",
    "Fiber diameter": "Diámetro de fibra",
    Form: "Formato",
    "Brand options": "Opciones de marca",
    Package: "Paquete",
    "Fiber direction": "Dirección de fibra",
    "Standard weights": "Pesos estándar",
    "Custom width": "Ancho personalizado",
    "Roll length": "Longitud de rollo",
    "Typical areal weight": "Peso areal típico",
    "Weave by order": "Tejido según pedido",
    "Typical width": "Ancho típico",
    "Typical roll length": "Longitud típica del rollo",
    "Nominal fiber direction": "Dirección nominal de fibra",
    "Indicative MOQ": "MOQ indicativo",
    "Typical texture": "Textura típica",
    "Common use": "Uso común",
    Option: "Opción",
    Type: "Tipo",
    Material: "Material",
    Role: "Función",
    Property: "Propiedad",
    "Typical range": "Rango típico",
    "Typical support": "Soporte típico",
    "Brand / source": "Marca / fuente",
    "Typical tow options": "Opciones típicas de tow",
    "Typical grade positioning": "Posicionamiento típico de grado",
    "Fiber format by order": "Formato de fibra según pedido",
    "Typical fiber weight": "Peso típico de fibra",
    "Typical resin content": "Contenido típico de resina",
    "Indicative cure profile": "Perfil de curado indicativo",
    "Indicative use": "Uso indicativo",
    "Typical mean length": "Longitud media típica",
    "Typical diameter": "Diámetro típico",
    "Sizing by order": "Sizing según pedido",
    "Packaging by order": "Embalaje según pedido",
    Process: "Proceso",
    "Supply form": "Formato de suministro",
    "Technical properties": "Propiedades técnicas",
    Item: "Ítem",
    "Typical value": "Valor típico",
    Remark: "Nota",
    Email: "Email",
    Phone: "Teléfono",
    WhatsApp: "WhatsApp",
  },
  "pt-br": {
    Home: "Início",
    Products: "Produtos",
    Product: "Produto",
    "Product type": "Tipo de produto",
    Documents: "Documentos",
    "End-use review": "Revisão de uso final",
    Spec: "Especificação",
    Review: "Revisão",
    "Areal weight": "Peso areal",
    Width: "Largura",
    Weave: "Trama",
    "Tow size": "Tamanho do tow",
    Tow: "Tow",
    Grade: "Grau",
    Pattern: "Padrão",
    "Pattern size": "Tamanho do padrão",
    "Fiber grade": "Grau da fibra",
    "Mean length": "Comprimento médio",
    "Fiber diameter": "Diâmetro da fibra",
    Form: "Formato",
    "Brand options": "Opções de marca",
    Package: "Pacote",
    "Fiber direction": "Direção da fibra",
    "Standard weights": "Pesos padrão",
    "Custom width": "Largura personalizada",
    "Roll length": "Comprimento do rolo",
    "Typical areal weight": "Peso areal típico",
    "Weave by order": "Trama conforme pedido",
    "Typical width": "Largura típica",
    "Typical roll length": "Comprimento típico do rolo",
    "Nominal fiber direction": "Direção nominal da fibra",
    "Indicative MOQ": "MOQ indicativo",
    "Typical texture": "Textura típica",
    "Common use": "Uso comum",
    Option: "Opção",
    Type: "Tipo",
    Material: "Material",
    Role: "Função",
    Property: "Propriedade",
    "Typical range": "Faixa típica",
    "Typical support": "Suporte típico",
    "Brand / source": "Marca / fonte",
    "Typical tow options": "Opções típicas de tow",
    "Typical grade positioning": "Posicionamento típico de grau",
    "Fiber format by order": "Formato da fibra conforme pedido",
    "Typical fiber weight": "Peso típico da fibra",
    "Typical resin content": "Teor típico de resina",
    "Indicative cure profile": "Perfil de cura indicativo",
    "Indicative use": "Uso indicativo",
    "Typical mean length": "Comprimento médio típico",
    "Typical diameter": "Diâmetro típico",
    "Sizing by order": "Sizing conforme pedido",
    "Packaging by order": "Embalagem conforme pedido",
    Process: "Processo",
    "Supply form": "Forma de fornecimento",
    "Technical properties": "Propriedades técnicas",
    Item: "Item",
    "Typical value": "Valor típico",
    Remark: "Observação",
    Email: "Email",
    Phone: "Telefone",
    WhatsApp: "WhatsApp",
  },
};

export function getLocalizedProductContent(locale: Locale, slug: string) {
  if (locale === defaultLocale) return undefined;
  return localizedProductContent[locale][slug as (typeof phaseOneProductSlugs)[number]];
}

export function getLocalizedApplicationContent(locale: Locale, slug: string) {
  if (locale === defaultLocale) return undefined;
  return localizedApplicationContent[locale][slug as (typeof phaseOneApplicationSlugs)[number]];
}

export function translateLabel(locale: Locale, label: string) {
  if (locale === defaultLocale) return label;
  if (locale !== "es" && locale !== "pt-br") {
    return translateExtendedLabel(locale as ExtendedLocale, label);
  }
  return labelTranslations[locale][label] ?? label;
}

const specTextTranslations: Record<"es" | "pt-br", Record<string, string>> = {
  es: {
    "Standard woven fabric range": "Rango estándar de tejido woven",
    "Representative woven fabric range. Actual construction, pick count and yarn brand are confirmed before production.":
      "Rango representativo de tejido woven. La construcción real, la densidad del tejido y la marca del hilo se confirman antes de producción.",
    "Brand and tow options for inquiry": "Opciones de marca y tow para consulta",
    "Brand and grade availability changes with allocation and market supply. Final yarn TDS must follow the selected manufacturer's batch documentation.":
      "La disponibilidad de marca y grado cambia según asignación y suministro del mercado. El TDS final del hilo debe seguir la documentación de lote del fabricante seleccionado.",
    "Subject to model availability": "Sujeto a disponibilidad del modelo",
    "Large-tow supply by batch": "Suministro de large tow por lote",
    "Confirm grade and sizing": "Confirmar grado y sizing",
    "Availability by region": "Disponibilidad según región",
    "Customer confirmation required": "Confirmación del cliente requerida",
    "Standard, high-strength and higher performance series": "Series estándar, de alta resistencia y mayor rendimiento",
    "Standard and large-tow industrial grades": "Grados industriales estándar y large-tow",
    "Standard, high-strength and intermediate modulus series": "Series estándar, de alta resistencia y módulo intermedio",
    "Standard and intermediate modulus options": "Opciones estándar y de módulo intermedio",
    "By customer requirement": "Según requisito del cliente",
    "Weaving, prepreg, fishing rods, sports": "Tejeduría, prepreg, cañas de pesca, deportes",
    "Wind, pultrusion, industrial composites": "Energía eólica, pultrusión, composites industriales",
    "Industrial, sports, automotive, prepreg": "Industrial, deportes, automoción, prepreg",
    "Energy, sports, automotive, industrial": "Energía, deportes, automoción, industrial",
    "General composite conversion": "Conversión general de composites",
    "Other sources by request": "Otras fuentes bajo solicitud",
    "Standard weave / 8x8mm / 10x10mm / custom": "Tejido estándar / 8x8mm / 10x10mm / personalizado",
    "T300 / T700 / T800 / high modulus / custom": "T300 / T700 / T800 / alto módulo / personalizado",
    "Selected Chinese and international brands by request": "Marcas chinas e internacionales seleccionadas bajo solicitud",
    "Bobbin / spool / carton / pallet": "Bobina / spool / caja / pallet",
    "Milled carbon fiber powder": "Polvo de fibra de carbono molida",
    "Approx. 7 µm typical carbon fiber": "Aprox. 7 µm típico para fibra de carbono",
    "Carbon fiber yarn / carbon fiber tow / carbon fiber roving": "Hilo de fibra de carbono / tow de fibra de carbono / roving de fibra de carbono",
    "3K / 12K / 24K / 48K typical options": "Opciones típicas 3K / 12K / 24K / 48K",
    "12K / 25K / 35K / 50K typical options": "Opciones típicas 12K / 25K / 35K / 50K",
    "3K / 6K / 12K / 24K typical options": "Opciones típicas 3K / 6K / 12K / 24K",
    "12K / 24K typical; selected 6K/other options": "12K / 24K típico; opciones 6K u otras seleccionadas",
    "1K-50K by customer requirement": "1K-50K según requisito del cliente",
  },
  "pt-br": {
    "Standard woven fabric range": "Faixa padrão de tecido woven",
    "Representative woven fabric range. Actual construction, pick count and yarn brand are confirmed before production.":
      "Faixa representativa de tecido woven. A construção real, a densidade da trama e a marca do fio são confirmadas antes da produção.",
    "Brand and tow options for inquiry": "Opções de marca e tow para consulta",
    "Brand and grade availability changes with allocation and market supply. Final yarn TDS must follow the selected manufacturer's batch documentation.":
      "A disponibilidade de marca e grau muda conforme alocação e oferta do mercado. O TDS final do fio deve seguir a documentação de lote do fabricante selecionado.",
    "Subject to model availability": "Sujeito à disponibilidade do modelo",
    "Large-tow supply by batch": "Fornecimento de large tow por lote",
    "Confirm grade and sizing": "Confirmar grau e sizing",
    "Availability by region": "Disponibilidade por região",
    "Customer confirmation required": "Confirmação do cliente necessária",
    "Standard, high-strength and higher performance series": "Séries padrão, de alta resistência e maior desempenho",
    "Standard and large-tow industrial grades": "Graus industriais padrão e large-tow",
    "Standard, high-strength and intermediate modulus series": "Séries padrão, de alta resistência e módulo intermediário",
    "Standard and intermediate modulus options": "Opções padrão e de módulo intermediário",
    "By customer requirement": "Conforme requisito do cliente",
    "Weaving, prepreg, fishing rods, sports": "Tecelagem, prepreg, varas de pesca, esportes",
    "Wind, pultrusion, industrial composites": "Energia eólica, pultrusão, compósitos industriais",
    "Industrial, sports, automotive, prepreg": "Industrial, esportes, automotivo, prepreg",
    "Energy, sports, automotive, industrial": "Energia, esportes, automotivo, industrial",
    "General composite conversion": "Conversão geral de compósitos",
    "Other sources by request": "Outras fontes sob consulta",
    "Standard weave / 8x8mm / 10x10mm / custom": "Trama padrão / 8x8mm / 10x10mm / personalizado",
    "T300 / T700 / T800 / high modulus / custom": "T300 / T700 / T800 / alto módulo / personalizado",
    "Selected Chinese and international brands by request": "Marcas chinesas e internacionais selecionadas sob consulta",
    "Bobbin / spool / carton / pallet": "Bobina / spool / caixa / pallet",
    "Milled carbon fiber powder": "Pó de fibra de carbono moída",
    "Approx. 7 µm typical carbon fiber": "Aprox. 7 µm típico para fibra de carbono",
    "Carbon fiber yarn / carbon fiber tow / carbon fiber roving": "Fio de fibra de carbono / tow de fibra de carbono / roving de fibra de carbono",
    "3K / 12K / 24K / 48K typical options": "Opções típicas 3K / 12K / 24K / 48K",
    "12K / 25K / 35K / 50K typical options": "Opções típicas 12K / 25K / 35K / 50K",
    "3K / 6K / 12K / 24K typical options": "Opções típicas 3K / 6K / 12K / 24K",
    "12K / 24K typical; selected 6K/other options": "12K / 24K típico; opções 6K ou outras selecionadas",
    "1K-50K by customer requirement": "1K-50K conforme requisito do cliente",
  },
};

const specPhraseTranslations: Record<"es" | "pt-br", Array<[RegExp, string]>> = {
  es: [
    [/\b[Bb]y order\b/g, "según pedido"],
    [/\b[Tt]ypical\b/g, "típico"],
    [/\b[Cc]ustom\b/g, "personalizado"],
    [/\b[Aa]pprox\./g, "Aprox."],
    [/\b[Bb]y request\b/g, "bajo solicitud"],
    [/\b[Bb]y review\b/g, "según revisión"],
    [/\b[Bb]y specification\b/g, "según especificación"],
    [/\b[Ss]ubject to\b/g, "sujeto a"],
    [/\b[Aa]vailable\b/g, "disponible"],
    [/\b[Cc]onfirmed before quotation\b/g, "confirmado antes de cotización"],
  ],
  "pt-br": [
    [/\b[Bb]y order\b/g, "conforme pedido"],
    [/\b[Tt]ypical\b/g, "típico"],
    [/\b[Cc]ustom\b/g, "personalizado"],
    [/\b[Aa]pprox\./g, "Aprox."],
    [/\b[Bb]y request\b/g, "sob consulta"],
    [/\b[Bb]y review\b/g, "conforme revisão"],
    [/\b[Bb]y specification\b/g, "conforme especificação"],
    [/\b[Ss]ubject to\b/g, "sujeito a"],
    [/\b[Aa]vailable\b/g, "disponível"],
    [/\b[Cc]onfirmed before quotation\b/g, "confirmado antes da cotação"],
  ],
};

export function translateSpecText(locale: Locale, text: string) {
  if (locale === defaultLocale) return text;
  if (locale !== "es" && locale !== "pt-br") {
    return translateExtendedSpecText(locale as ExtendedLocale, text);
  }
  const exact = specTextTranslations[locale][text] ?? labelTranslations[locale][text];
  if (exact) return exact;
  return specPhraseTranslations[locale].reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), text);
}
