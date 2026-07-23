import type { ProductVideo as ProductVideoData } from "@/lib/product-videos";
import { Eyebrow } from "@/components/ui";

type ProductVideoProps = {
  video: ProductVideoData;
};

export function ProductVideo({ video }: ProductVideoProps) {
  return (
    <section className="product-detail-card product-video-card" id="production-video">
      <div className="product-video-copy">
        <Eyebrow>{video.eyebrow}</Eyebrow>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
      </div>
      <div className="product-video-frame">
        <video
          aria-label={video.title}
          controls
          playsInline
          poster={video.poster}
          preload="metadata"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
