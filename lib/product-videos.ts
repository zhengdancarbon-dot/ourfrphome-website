import type { Locale } from "@/lib/i18n/config";
import { hreflangLocales } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/seo";

export type ProductVideo = {
  eyebrow: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  duration: string;
  uploadDate: string;
};

const yarnTowVideo = {
  src: "/videos/carbon-fiber-yarn-tow-spool-creel.mp4",
  poster: "/images/products/carbon-fiber-yarn-tow-production-creel-poster.jpg",
  duration: "PT16S",
  uploadDate: "2026-07-23",
};

const yarnTowVideoCopy: Record<Locale, Pick<ProductVideo, "eyebrow" | "title" | "description">> = {
  en: {
    eyebrow: "Production video",
    title: "Carbon fiber tow spools on a production creel",
    description:
      "A real production-floor view of carbon fiber tow packages feeding from a creel for downstream textile and composite conversion processes.",
  },
  es: {
    eyebrow: "Vídeo de producción",
    title: "Bobinas de mecha de fibra de carbono en una fileta de producción",
    description:
      "Vista real de bobinas de mecha de fibra de carbono alimentadas desde una fileta para procesos textiles y de conversión de composites.",
  },
  "pt-br": {
    eyebrow: "Vídeo de produção",
    title: "Bobinas de tow de fibra de carbono em um creel de produção",
    description:
      "Vista real de bobinas de tow de fibra de carbono alimentadas por um creel para processos têxteis e de conversão de compósitos.",
  },
  ru: {
    eyebrow: "Видео производства",
    title: "Бобины углеродного волокна на производственном шпулярнике",
    description:
      "Реальный производственный вид бобин углеродного волокна на шпулярнике для последующей текстильной и композитной переработки.",
  },
  ar: {
    eyebrow: "فيديو الإنتاج",
    title: "بكرات حزم ألياف الكربون على حامل التغذية الإنتاجي",
    description:
      "مشهد حقيقي من أرضية الإنتاج لبكرات حزم ألياف الكربون على حامل التغذية لعمليات النسيج وتحويل المواد المركبة اللاحقة.",
  },
  fr: {
    eyebrow: "Vidéo de production",
    title: "Bobines de mèches de fibre de carbone sur un cantre de production",
    description:
      "Vue réelle en atelier de bobines de mèches de fibre de carbone alimentées depuis un cantre pour les procédés textiles et composites en aval.",
  },
  ko: {
    eyebrow: "생산 영상",
    title: "생산 크릴의 탄소섬유 토우 보빈",
    description:
      "후속 섬유 및 복합재 변환 공정을 위해 크릴에서 공급되는 탄소섬유 토우 보빈의 실제 생산 현장 영상입니다.",
  },
  pl: {
    eyebrow: "Film z produkcji",
    title: "Szpule rovingu z włókna węglowego na stojaku podającym",
    description:
      "Rzeczywisty widok hali produkcyjnej ze szpulami rovingu węglowego podawanymi ze stojaka do dalszych procesów tekstylnych i kompozytowych.",
  },
  tr: {
    eyebrow: "Üretim videosu",
    title: "Üretim kreelindeki karbon fiber tow bobinleri",
    description:
      "Tekstil ve kompozit dönüştürme süreçleri için kreelden beslenen karbon fiber tow bobinlerinin gerçek üretim alanı görüntüsü.",
  },
};

const wovenFabricVideo = {
  src: "/videos/3k-woven-carbon-fiber-weaving-line.mp4",
  poster: "/images/products/3k-woven-carbon-fiber-weaving-line-poster.jpg",
  duration: "PT12S",
  uploadDate: "2026-07-23",
};

const wovenFabricVideoCopy: Record<Locale, Pick<ProductVideo, "eyebrow" | "title" | "description">> = {
  en: {
    eyebrow: "Weaving video",
    title: "Twill carbon fiber fabric moving through the loom",
    description:
      "A real workshop view of woven carbon fiber fabric being formed on a production loom. Confirm tow size, areal weight, width, weave, roll length and finish in the RFQ.",
  },
  es: {
    eyebrow: "Vídeo de tejido",
    title: "Tejido de fibra de carbono sarga avanzando en el telar",
    description:
      "Vista real de taller del tejido de fibra de carbono formándose en un telar de producción. Confirme tamaño del tow, gramaje, ancho, ligamento, longitud de rollo y acabado en la RFQ.",
  },
  "pt-br": {
    eyebrow: "Vídeo de tecelagem",
    title: "Tecido de fibra de carbono sarja avançando no tear",
    description:
      "Vista real de fábrica do tecido de fibra de carbono sendo formado em um tear de produção. Confirme tamanho do tow, gramatura, largura, trama, comprimento do rolo e acabamento na RFQ.",
  },
  ru: {
    eyebrow: "Видео ткачества",
    title: "Саржевая углеродная ткань на производственном станке",
    description:
      "Реальный цеховой вид формирования тканого углеродного материала на производственном станке. Размер tow, поверхностную плотность, ширину, переплетение, длину рулона и отделку следует подтвердить в RFQ.",
  },
  ar: {
    eyebrow: "فيديو النسيج",
    title: "نسيج ألياف الكربون بنمط twill أثناء مروره عبر النول",
    description:
      "مشهد حقيقي من الورشة لتشكيل نسيج ألياف الكربون على نول الإنتاج. يجب تأكيد حجم tow والوزن المساحي والعرض ونمط النسج وطول اللفة والتشطيب في طلب العرض.",
  },
  fr: {
    eyebrow: "Vidéo de tissage",
    title: "Tissu carbone sergé en cours de formation sur le métier",
    description:
      "Vue réelle en atelier d'un tissu de fibre de carbone formé sur un métier de production. Confirmez la taille du tow, le grammage, la largeur, l'armure, la longueur du rouleau et la finition dans la RFQ.",
  },
  ko: {
    eyebrow: "제직 영상",
    title: "생산 직기에서 이동하는 능직 탄소섬유 직물",
    description:
      "생산 직기에서 탄소섬유 직물이 형성되는 실제 작업 현장 영상입니다. tow 크기, 면중량, 폭, 직조 방식, 롤 길이 및 마감은 RFQ에서 확인해야 합니다.",
  },
  pl: {
    eyebrow: "Film z tkania",
    title: "Tkanina węglowa o splocie skośnym na krośnie produkcyjnym",
    description:
      "Rzeczywisty widok produkcji tkaniny z włókna węglowego na krośnie. Rozmiar tow, gramaturę, szerokość, splot, długość rolki i wykończenie należy potwierdzić w RFQ.",
  },
  tr: {
    eyebrow: "Dokuma videosu",
    title: "Üretim tezgâhında ilerleyen dimi karbon fiber kumaş",
    description:
      "Karbon fiber dokuma kumaşın üretim tezgâhında oluştuğu gerçek atölye görüntüsüdür. Tow boyutu, gramaj, genişlik, dokuma, rulo uzunluğu ve yüzey RFQ sırasında doğrulanmalıdır.",
  },
};

const multiaxialNcfVideo = {
  src: "/videos/carbon-fiber-multiaxial-ncf-directional-layer-production.mp4",
  poster: "/images/products/carbon-fiber-multiaxial-ncf-production-poster.jpg",
  duration: "PT18S",
  uploadDate: "2026-07-23",
};

const multiaxialNcfVideoCopy: Record<Locale, Pick<ProductVideo, "eyebrow" | "title" | "description">> = {
  en: {
    eyebrow: "Production video",
    title: "Directional carbon layers on production equipment",
    description:
      "A real workshop view of carbon reinforcement layers being positioned on production equipment. Confirm the NCF architecture, 0°/90° or +45°/-45° directions, total and per-layer gsm, stitch, width and roll length against the selected TDS and RFQ.",
  },
  es: {
    eyebrow: "Vídeo de producción",
    title: "Capas direccionales de carbono en el equipo de producción",
    description:
      "Vista real de taller de capas de refuerzo de carbono colocadas en un equipo de producción. Confirme en la TDS y la RFQ seleccionadas la arquitectura NCF, las direcciones 0°/90° o +45°/-45°, el gsm total y por capa, la costura, el ancho y la longitud del rollo.",
  },
  "pt-br": {
    eyebrow: "Vídeo de produção",
    title: "Camadas direcionais de carbono no equipamento de produção",
    description:
      "Vista real de fábrica de camadas de reforço de carbono sendo posicionadas no equipamento de produção. Confirme na TDS e na RFQ selecionadas a arquitetura NCF, as direções 0°/90° ou +45°/-45°, o gsm total e por camada, a costura, a largura e o comprimento do rolo.",
  },
  ru: {
    eyebrow: "Видео производства",
    title: "Направленные слои углеродного волокна на производственном оборудовании",
    description:
      "Реальный вид из цеха: слои углеродного армирования укладываются на производственном оборудовании. Архитектуру NCF, направления 0°/90° или +45°/-45°, общую и послойную поверхностную плотность, прошивку, ширину и длину рулона следует подтвердить по выбранному TDS и RFQ.",
  },
  ar: {
    eyebrow: "فيديو الإنتاج",
    title: "طبقات كربون اتجاهية على معدات الإنتاج",
    description:
      "مشهد حقيقي من الورشة لطبقات تقوية كربونية أثناء وضعها على معدات الإنتاج. يجب تأكيد بنية NCF واتجاهات 0°/90° أو +45°/-45° والوزن الكلي ووزن كل طبقة بالغرام/م² والخياطة والعرض وطول اللفة وفق TDS المختار وطلب العرض.",
  },
  fr: {
    eyebrow: "Vidéo de production",
    title: "Couches directionnelles de carbone sur l'équipement de production",
    description:
      "Vue réelle en atelier de couches de renfort carbone positionnées sur un équipement de production. Confirmez dans la TDS et la RFQ sélectionnées l'architecture NCF, les directions 0°/90° ou +45°/-45°, le grammage total et par couche, la couture, la largeur et la longueur du rouleau.",
  },
  ko: {
    eyebrow: "생산 영상",
    title: "생산 설비 위의 방향성 탄소섬유 층",
    description:
      "생산 설비에서 탄소 보강층이 배치되는 실제 작업 현장 영상입니다. 선택한 TDS와 RFQ에서 NCF 구조, 0°/90° 또는 +45°/-45° 방향, 전체 및 층별 gsm, 스티치, 폭과 롤 길이를 확인해야 합니다.",
  },
  pl: {
    eyebrow: "Film z produkcji",
    title: "Kierunkowe warstwy węglowe na urządzeniu produkcyjnym",
    description:
      "Rzeczywisty widok hali produkcyjnej, na której warstwy zbrojenia węglowego są układane na urządzeniu. Architekturę NCF, kierunki 0°/90° lub +45°/-45°, gramaturę całkowitą i każdej warstwy, szew, szerokość oraz długość rolki należy potwierdzić w wybranym TDS i RFQ.",
  },
  tr: {
    eyebrow: "Üretim videosu",
    title: "Üretim ekipmanında yönlü karbon katmanları",
    description:
      "Karbon takviye katmanlarının üretim ekipmanında konumlandırıldığı gerçek atölye görüntüsüdür. NCF yapısı, 0°/90° veya +45°/-45° yönleri, toplam ve katman başına gsm, dikiş, genişlik ve rulo uzunluğu seçilen TDS ve RFQ üzerinden doğrulanmalıdır.",
  },
};

const laminateSheetVideo = {
  src: "/videos/3k-carbon-fiber-laminate-sheet-surface-handling.mp4",
  poster: "/images/products/3k-carbon-fiber-laminate-sheet-video-poster.jpg",
  duration: "PT21S",
  uploadDate: "2026-07-27",
};

const laminateSheetVideoCopy: Record<Locale, Pick<ProductVideo, "eyebrow" | "title" | "description">> = {
  en: {
    eyebrow: "Product video",
    title: "3K twill carbon laminate sheet under protective film",
    description:
      "A real workshop view of a 3K twill carbon surface moving under protective film on flat-sheet handling equipment. Confirm sheet size, thickness, finish, appearance-critical faces, CNC drawings and film requirements in the RFQ.",
  },
  es: {
    eyebrow: "Vídeo del producto",
    title: "Placa laminada de carbono 3K twill bajo película protectora",
    description:
      "Vista real de taller de una superficie de carbono 3K twill bajo película protectora en un equipo de manipulación de placas. Confirme en la RFQ tamaño, espesor, acabado, caras visibles, planos CNC y requisitos de la película.",
  },
  "pt-br": {
    eyebrow: "Vídeo do produto",
    title: "Placa laminada de carbono 3K twill sob filme protetor",
    description:
      "Vista real de fábrica de uma superfície de carbono 3K twill sob filme protetor em um equipamento de manuseio de placas. Confirme na RFQ tamanho, espessura, acabamento, faces visíveis, desenhos CNC e requisitos do filme.",
  },
  ru: {
    eyebrow: "Видео продукции",
    title: "Листовой ламинат 3K twill под защитной пленкой",
    description:
      "Реальный вид из цеха: поверхность углеродного ламината 3K twill проходит под защитной пленкой на оборудовании для работы с плоскими листами. Размер, толщину, отделку, лицевые стороны, чертежи CNC и требования к пленке следует подтвердить в RFQ.",
  },
  ar: {
    eyebrow: "فيديو المنتج",
    title: "صفيحة كربون 3K twill تحت طبقة حماية",
    description:
      "مشهد حقيقي من الورشة لسطح كربون 3K twill تحت طبقة حماية على معدات مناولة الصفائح المسطحة. يجب تأكيد المقاس والسماكة والتشطيب والأسطح الظاهرة ورسومات CNC ومتطلبات طبقة الحماية في طلب العرض.",
  },
  fr: {
    eyebrow: "Vidéo du produit",
    title: "Plaque stratifiée carbone 3K twill sous film protecteur",
    description:
      "Vue réelle en atelier d'une surface carbone 3K twill sous film protecteur sur un équipement de manutention de plaques. Confirmez dans la RFQ les dimensions, l'épaisseur, la finition, les faces visibles, les plans CNC et les exigences du film.",
  },
  ko: {
    eyebrow: "제품 영상",
    title: "보호 필름 아래의 3K twill 탄소섬유 적층판",
    description:
      "평판 취급 설비에서 보호 필름 아래로 이동하는 3K twill 탄소섬유 표면의 실제 작업 현장 영상입니다. 판재 크기, 두께, 마감, 외관면, CNC 도면 및 필름 요구사항은 RFQ에서 확인해야 합니다.",
  },
  pl: {
    eyebrow: "Film produktu",
    title: "Laminowana płyta węglowa 3K twill pod folią ochronną",
    description:
      "Rzeczywisty widok hali: powierzchnia węglowa 3K twill przesuwa się pod folią ochronną na urządzeniu do obsługi płaskich płyt. Wymiary, grubość, wykończenie, strony widoczne, rysunki CNC i wymagania dotyczące folii należy potwierdzić w RFQ.",
  },
  tr: {
    eyebrow: "Ürün videosu",
    title: "Koruyucu film altındaki 3K twill karbon laminat levha",
    description:
      "Düz levha taşıma ekipmanında koruyucu film altında ilerleyen 3K twill karbon yüzeyinin gerçek atölye görüntüsüdür. Levha ölçüsü, kalınlık, yüzey, görünür yüzler, CNC çizimleri ve film gereksinimleri RFQ sırasında doğrulanmalıdır.",
  },
};

export function getProductVideo(slug: string, locale: Locale): ProductVideo | undefined {
  if (slug === "carbon-fiber-multiaxial-ncf-fabric") {
    return {
      ...multiaxialNcfVideo,
      ...multiaxialNcfVideoCopy[locale],
    };
  }

  if (slug === "carbon-fiber-yarn-and-tow") {
    return {
      ...yarnTowVideo,
      ...yarnTowVideoCopy[locale],
    };
  }

  if (slug === "carbon-fiber-woven-fabric") {
    return {
      ...wovenFabricVideo,
      ...wovenFabricVideoCopy[locale],
    };
  }

  if (slug === "3k-carbon-fiber-laminate-sheet") {
    return {
      ...laminateSheetVideo,
      ...laminateSheetVideoCopy[locale],
    };
  }

  return undefined;
}

export function createProductVideoSchema(
  video: ProductVideo,
  pageUrl: string,
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${pageUrl}#product-video`,
    name: video.title,
    description: video.description,
    thumbnailUrl: [absoluteUrl(video.poster)],
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: absoluteUrl(video.src),
    inLanguage: hreflangLocales[locale],
  };
}
