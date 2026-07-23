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

export function getProductVideo(slug: string, locale: Locale): ProductVideo | undefined {
  if (slug !== "carbon-fiber-yarn-and-tow") return undefined;

  return {
    ...yarnTowVideo,
    ...yarnTowVideoCopy[locale],
  };
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
