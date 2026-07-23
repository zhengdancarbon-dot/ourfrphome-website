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

export function getProductVideo(slug: string, locale: Locale): ProductVideo | undefined {
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
