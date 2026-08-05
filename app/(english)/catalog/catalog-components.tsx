/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import {
  Camera,
  Check,
  ChevronRight,
  CircleGauge,
  Factory,
  FileCheck2,
  Globe2,
  Layers3,
  PackageCheck,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import styles from "./catalog.module.css";

export type CatalogProduct = {
  id: string;
  group: string;
  shortName: string;
  positioning: string;
  products: string[];
  specifications: string[][];
  applications: string[];
  imagePlaceholder: string;
};

export function CatalogPage({
  page,
  children,
  className = "",
  dark = false,
  label,
}: {
  page: number;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  label?: string;
}) {
  return (
    <section
      className={`${styles.catalogPage} ${dark ? styles.darkPage : ""} ${className}`}
      id={`catalog-page-${page}`}
      data-page={page}
    >
      {label ? <PageHeader page={page} label={label} dark={dark} /> : null}
      {children}
    </section>
  );
}

export function PageHeader({
  page,
  label = "Carbon Fiber Materials",
  dark = false,
}: {
  page: number;
  label?: string;
  dark?: boolean;
}) {
  return (
    <header className={`${styles.pageHeader} ${dark ? styles.pageHeaderDark : ""}`}>
      <div className={styles.miniBrand}>
        <img src="/images/brand/frphome-logo-white.png" alt="FRP HOME 福昊" />
      </div>
      <small>{label}</small>
      <div className={styles.pageNumber}>{String(page).padStart(2, "0")}</div>
    </header>
  );
}

export function PageFooter({
  page,
  dark = false,
  text = "FRP HOME · COMPOSITE MATERIALS",
}: {
  page: number;
  dark?: boolean;
  text?: string;
}) {
  return (
    <footer className={`${styles.pageFooter} ${dark ? styles.pageFooterDark : ""}`}>
      <span>{text}</span>
      <span>{String(page).padStart(2, "0")}</span>
    </footer>
  );
}

export function ImagePlaceholder({
  label,
  code,
  className = "",
  dark = false,
  imageSrc,
  imageAlt,
  objectPosition,
}: {
  label: string;
  code?: string;
  className?: string;
  dark?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  objectPosition?: string;
}) {
  return (
    <div
      className={`${styles.imagePlaceholder} ${imageSrc ? styles.imageFilled : ""} ${dark ? styles.imagePlaceholderDark : ""} ${className}`}
    >
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt={imageAlt ?? label}
            loading="eager"
            style={objectPosition ? { objectPosition } : undefined}
          />
          <span className={styles.imageCaption}>{imageAlt ?? label}</span>
        </>
      ) : (
        <>
          <Camera aria-hidden="true" />
          <strong>{label}</strong>
          {code ? <span>{code}</span> : null}
        </>
      )}
    </div>
  );
}

export function SectionTitle({
  title,
  copy,
  code,
  compact = false,
}: {
  title: string;
  copy?: string;
  code?: string;
  compact?: boolean;
}) {
  return (
    <div className={`${styles.sectionTitle} ${compact ? styles.sectionTitleCompact : ""}`}>
      {code ? <span>{code}</span> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function DataTable({
  columns,
  rows,
  compact = false,
}: {
  columns: string[];
  rows: string[][];
  compact?: boolean;
}) {
  return (
    <div className={`${styles.tableWrap} ${compact ? styles.tableCompact : ""}`}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row.join("-")}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SpecList({ items }: { items: string[][] }) {
  return (
    <dl className={styles.specList}>
      {items.map(([label, value], index) => (
        <div key={`${label}-${value}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ApplicationLine({ applications }: { applications: string[] }) {
  return (
    <div className={styles.applicationLine}>
      <strong>Applications</strong>
      <p>{applications.join(" · ")}</p>
    </div>
  );
}

export function RfqBand({
  message = "Share the specification, quantity, application and destination for a practical quotation.",
}: {
  message?: string;
}) {
  return (
    <div className={styles.rfqBand}>
      <strong>Request this product</strong>
      <span>{message}</span>
      <ChevronRight aria-hidden="true" />
    </div>
  );
}

export function ProductPage({
  page,
  product,
  code,
  tableColumns,
  tableRows,
  note,
  imageSrc,
  imageAlt,
  objectPosition,
}: {
  page: number;
  product: CatalogProduct;
  code: string;
  tableColumns: string[];
  tableRows: string[][];
  note?: string;
  imageSrc?: string;
  imageAlt?: string;
  objectPosition?: string;
}) {
  return (
    <CatalogPage page={page} label={product.shortName}>
      <div className={styles.pageBody}>
        <SectionTitle title={product.group} copy={product.positioning} code={code} />
        <div className={styles.productHeroGrid}>
          <ImagePlaceholder
            label={product.imagePlaceholder}
            code={`IMG-${String(page).padStart(2, "0")}`}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            objectPosition={objectPosition}
          />
          <aside className={styles.productSummary}>
            <div>
              <span>Product group</span>
              <strong>{code}</strong>
            </div>
            <p>
              Standard and custom specifications are reviewed against the buyer&apos;s application,
              process and quantity.
            </p>
            <h3>Key options</h3>
            <SpecList items={product.specifications.slice(0, 4)} />
          </aside>
        </div>
        <div className={styles.tableSection}>
          <h3>Standard range</h3>
          <DataTable columns={tableColumns} rows={tableRows} />
          {note ? <p className={styles.tableNote}>{note}</p> : null}
        </div>
        <ApplicationLine applications={product.applications} />
        <RfqBand />
      </div>
      <PageFooter page={page} />
    </CatalogPage>
  );
}

export function DividerPage({
  page,
  number,
  title,
  copy,
  placeholder,
  items,
  imageSrc,
  imageAlt,
}: {
  page: number;
  number: string;
  title: string;
  copy: string;
  placeholder: string;
  items: string[];
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <CatalogPage page={page} dark className={styles.dividerPage}>
      <div className={styles.dividerTexture} />
      <div className={styles.dividerTop}>
        <div className={styles.miniBrand}>
          <img src="/images/brand/frphome-logo-white.png" alt="FRP HOME 福昊" />
        </div>
        <b>{String(page).padStart(2, "0")}</b>
      </div>
      <div className={styles.dividerNumber}>{number}</div>
      <div className={styles.dividerCopy}>
        <h2>{title}</h2>
        <p>{copy}</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <ImagePlaceholder
        label={placeholder}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        dark
        className={styles.dividerImage}
      />
      <PageFooter page={page} dark />
    </CatalogPage>
  );
}

export const capabilityIcons = {
  factory: Factory,
  layers: Layers3,
  quality: ShieldCheck,
  measure: Ruler,
  export: Globe2,
  packing: PackageCheck,
  documents: FileCheck2,
  process: Workflow,
  custom: Settings2,
  performance: CircleGauge,
  finish: Sparkles,
  check: Check,
};
