import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FileText,
  Globe2,
  ImagePlus,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Product } from "@/lib/site-data";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-side">
        {copy && <p>{copy}</p>}
        {action && (
          <Link href={action.href} className="text-link">
            {action.label} <ArrowRight size={17} />
          </Link>
        )}
      </div>
    </div>
  );
}

export function PageHero({
  index,
  eyebrow,
  title,
  copy,
  image,
  visualLabel,
  className,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
  visualLabel?: string;
  className?: string;
  children?: ReactNode;
}) {
  const heroImage = image && !image.includes("placeholder") ? image : undefined;
  const heroClassName = [
    "page-hero",
    image || visualLabel ? "page-hero-with-image" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={heroClassName}>
      <div className="site-shell page-hero-grid">
        <div className="page-hero-content">
          <span className="section-index">{index}</span>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{copy}</p>
          {children}
        </div>
        {heroImage ? (
          <div className="page-hero-image">
            <Image
              src={heroImage}
              alt={visualLabel ?? ""}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        ) : visualLabel ? (
          <ProductVisualPlaceholder
            className="page-hero-image page-hero-product-placeholder"
            label={visualLabel}
          />
        ) : image ? (
          <div className="page-hero-image">
            <Image src={image} alt="" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ProductVisualPlaceholder({
  className = "",
  label,
  note = "Product visual area",
}: {
  className?: string;
  label: string;
  note?: string;
}) {
  return (
    <div className={`product-visual-placeholder ${className}`} aria-label={label}>
      <ImagePlus size={28} strokeWidth={1.4} aria-hidden="true" />
      <strong>{label}</strong>
      <small>{note}</small>
    </div>
  );
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const hasRealImage = !product.image.includes("placeholder");

  return (
    <article className="product-card" id={product.slug}>
      <div className="product-card-image">
        {hasRealImage ? (
          <Image
            src={product.image}
            alt={product.visualLabel}
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        ) : (
          <ProductVisualPlaceholder label={product.visualLabel} note="Product photo space" />
        )}
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="product-card-body">
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <dl className="spec-list">
          {product.specs.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
        <div className="application-tags">
          {product.applications.map((application) => (
            <span key={application}>{application}</span>
          ))}
        </div>
        <div className="product-card-links">
          {product.detailHref && (
            <Link href={product.detailHref} className="text-link">
              View product range <ArrowRight size={17} />
            </Link>
          )}
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="button button-dark product-inquiry-button"
          >
            Send Inquiry <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function InquiryBand({ product }: { product?: string } = {}) {
  const inquiryHref = product
    ? `/contact?product=${encodeURIComponent(product)}`
    : "/contact";

  return (
    <section className="inquiry-band">
      <div className="site-shell inquiry-band-grid">
        <div>
          <Eyebrow>Request specifications or pricing</Eyebrow>
          <h2>Tell us your material requirement.</h2>
        </div>
        <p>
          Share the product, fiber grade, weave, width, areal weight, quantity
          and application. Our team will review the details and respond with a
          practical quotation or material suggestion.
        </p>
        <Link href={inquiryHref} className="button button-light">
          Send Inquiry <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, title: "Stable supply", copy: "For sampling and repeat orders" },
    { icon: ClipboardCheck, title: "Custom specifications", copy: "Weave, width, weight and fiber grade" },
    { icon: FileText, title: "Technical support", copy: "Product data and process guidance" },
    { icon: PackageCheck, title: "Export packing", copy: "Roll protection and clear labels" },
    { icon: Globe2, title: "Export experience", copy: "Documents and shipment coordination" },
  ];

  return (
    <div className="trust-strip">
      <div className="site-shell trust-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title}>
              <Icon size={21} strokeWidth={1.5} />
              <span>
                <strong>{item.title}</strong>
                <small>{item.copy}</small>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} strokeWidth={2} /> {item}
        </li>
      ))}
    </ul>
  );
}
