"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useId, useState, type PointerEvent } from "react";

type ProductImageZoomProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function ProductImageZoom({ src, alt, sizes, priority = false }: ProductImageZoomProps) {
  const titleId = useId();
  const [lensPosition, setLensPosition] = useState({ x: 50, y: 50 });
  const [isLensActive, setIsLensActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function updateLensPosition(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setLensPosition({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
  }

  return (
    <>
      <div
        className="product-template-media product-zoom-media"
        onPointerEnter={() => setIsLensActive(true)}
        onPointerLeave={() => setIsLensActive(false)}
        onPointerMove={updateLensPosition}
      >
        <button
          type="button"
          className="product-zoom-trigger"
          onClick={() => setIsOpen(true)}
          aria-label={`Enlarge image: ${alt}`}
        >
          <Maximize2 size={18} aria-hidden="true" />
        </button>

        <button
          type="button"
          className="product-zoom-image-button"
          onClick={() => setIsOpen(true)}
          aria-label={`Open enlarged image: ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            preload={priority}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            sizes={sizes}
          />
        </button>

        <div
          className="product-zoom-lens"
          aria-hidden="true"
          data-active={isLensActive ? "true" : "false"}
          style={{
            left: `${lensPosition.x}%`,
            top: `${lensPosition.y}%`,
            backgroundImage: `url(${src})`,
            backgroundPosition: `${lensPosition.x}% ${lensPosition.y}%`,
          }}
        />
      </div>

      {isOpen ? (
        <div
          className="product-zoom-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setIsOpen(false)}
        >
          <div className="product-zoom-dialog-panel" onClick={(event) => event.stopPropagation()}>
            <div className="product-zoom-dialog-header">
              <h2 id={titleId}>{alt}</h2>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close enlarged image">
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="product-zoom-dialog-image">
              <Image src={src} alt={alt} fill sizes="96vw" priority />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
