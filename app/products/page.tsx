import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ImagePlus } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { products } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Composite Materials Product Center",
  description:
    "Browse carbon fiber UD fabric, woven carbon fabric, multiaxial NCF fabric, prepreg fabric, pultruded plates, carbon tubes, chopped fiber, milled carbon fiber powder, yarn and tow, and custom carbon fiber products.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber products supplier",
    "pultruded carbon fiber plate",
    "3K carbon fiber tube",
    "chopped carbon fiber",
    "carbon fiber yarn and tow supplier",
  ],
  path: "/products",
  image: "/images/composite-materials-range-products.webp",
});

const productGroups = [
  {
    id: "carbon-fiber-reinforcements",
    title: "Carbon Fiber Reinforcements",
    description:
      "Dry carbon fiber fabrics and textile reinforcements for composite manufacturing.",
    keyProducts:
      "Woven fabric, UD fabric, spread tow fabric, multiaxial NCF, hybrid and aramid fabrics",
    commonApplications:
      "Composite laminates, visible CFRP surfaces, automotive, sports, civil UAV and industrial panels",
    slugs: [
      "carbon-fiber-woven-fabric",
      "carbon-fiber-ud-fabric",
      "spread-tow-carbon-fiber-fabric",
      "carbon-fiber-multiaxial-ncf-fabric",
    ],
  },
  {
    id: "carbon-fiber-yarn-tow-precursor-materials",
    title: "Carbon Fiber Yarn, Tow & Precursor Materials",
    description:
      "Upstream carbon fiber yarn, tow, roving and PAN-based precursor materials.",
    keyProducts:
      "1K, 3K, 6K, 12K, 24K, 48K and 50K carbon fiber yarn and tow",
    commonApplications:
      "Weaving, braiding, filament winding, pultrusion, prepreg production and chopping",
    slugs: ["carbon-fiber-yarn-and-tow"],
  },
  {
    id: "prepreg-carbon-fiber-materials",
    title: "Prepreg Carbon Fiber Materials",
    description:
      "Resin-impregnated carbon fiber materials for controlled composite molding.",
    keyProducts:
      "Woven prepreg, 3K twill prepreg, UD prepreg, spread tow prepreg and custom prepreg",
    commonApplications:
      "Autoclave molding, hot press, compression molding and repeatable CFRP parts",
    slugs: ["prepreg-carbon-fiber-materials"],
  },
  {
    id: "chopped-milled-carbon-fiber",
    title: "Chopped & Milled Carbon Fiber",
    description:
      "Short fiber and powder materials for plastic, resin and conductive applications.",
    keyProducts:
      "Chopped carbon fiber, milled carbon fiber powder and carbon fiber powder",
    commonApplications:
      "Plastic compounding, resin reinforcement, conductive compounds and friction materials",
    slugs: ["chopped-carbon-fiber", "milled-carbon-fiber-powder"],
  },
  {
    id: "cfrp-profiles-custom-parts",
    title: "CFRP Profiles & Custom Parts",
    description:
      "Carbon fiber tubes, sheets, rods, laminates and custom CNC components based on drawings or samples.",
    keyProducts:
      "Carbon fiber tube, roll-wrapped tube, pultruded tube, sheet, plate, rod and CNC CFRP parts",
    commonApplications:
      "Civil UAV components, sports equipment, automation supports, fixtures and lightweight assemblies",
    slugs: [
      "3k-surface-carbon-fiber-tube",
      "pultruded-carbon-fiber-tube",
      "3k-carbon-fiber-laminate-sheet",
      "custom-carbon-fiber-products",
    ],
  },
  {
    id: "structural-strengthening-system",
    title: "Structural Strengthening System",
    description:
      "UD fabric, pultruded CFRP plate and epoxy resin for concrete and building reinforcement.",
    keyProducts:
      "UD carbon fabric for strengthening, pultruded CFRP plate, structural epoxy resin and system supply",
    commonApplications:
      "Concrete, steel, masonry, bridge and building reinforcement projects",
    slugs: ["structural-strengthening-system", "carbon-fiber-ud-fabric"],
  },
  {
    id: "aramid-hybrid-fabrics",
    title: "Aramid and Hybrid Fabrics",
    description:
      "Aramid, carbon aramid hybrid and jacquard fabrics for impact-resistant laminates, decorative surfaces and custom composite skins.",
    keyProducts:
      "Aramid fabric, carbon aramid hybrid fabric, carbon glass hybrid fabric and jacquard carbon fabric",
    commonApplications:
      "Impact-resistant laminates, marine skins, sports goods and decorative CFRP surfaces",
    slugs: ["aramid-fabric", "carbon-fiber-hybrid-jacquard-fabric"],
  },
  {
    id: "custom-carbon-fiber-products",
    title: "Custom Carbon Fiber Products",
    description:
      "Custom carbon fiber parts, CNC plates, civil UAV frames, FPV drone frames, molded components, tube assemblies and composite products based on drawings or samples.",
    keyProducts:
      "CNC CFRP plates, custom tubes, molded components, carbon covers and assemblies",
    commonApplications:
      "Drawing-based OEM components for industrial, automotive, sports and commercial equipment",
    slugs: ["custom-carbon-fiber-products"],
  },
];

const productMap = new Map(products.map((product) => [product.slug, product]));
const heroTeasers = [
  { title: "Carbon fabrics", detail: "UD, woven, spread tow and multiaxial reinforcements" },
  { title: "Prepreg materials", detail: "Controlled resin content for repeatable laminates" },
  { title: "CFRP components", detail: "Plates, tubes, CNC parts and custom composite products" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        className="products-page-hero"
        index="02 / 07"
        eyebrow="Product center"
        title="Carbon fiber materials and products for export."
        copy="Select from UD fabric, woven carbon fabric, multiaxial NCF fabric, prepreg fabric, aramid fabric, structural reinforcement CFRP plates, carbon tubes, 3K laminate sheets, milled carbon fiber powder, chopped fiber, yarn and tow, and custom carbon products."
        image="/images/composite-materials-range-products.webp"
      >
        <div className="product-hero-teasers" aria-label="Featured product families">
          {heroTeasers.map((item) => (
            <Link href="#product-catalog-list" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </Link>
          ))}
        </div>
      </PageHero>
      <section className="section">
        <div className="site-shell">
          <div className="products-directory-intro" id="product-catalog">
            <div>
              <SectionHeading
                eyebrow="Complete portfolio"
                title="Carbon fiber composite materials by category."
                copy="We supply carbon fiber fabrics, prepregs, pultruded plates, tubes, carbon fiber yarn, chopped fiber, milled carbon fiber powder, aramid fabrics and customized composite products for industrial, sports, automotive, marine, construction and composite manufacturing applications."
              />
            </div>
            <div className="products-directory-actions">
              <Link href="#product-catalog-list" className="button button-dark">
                View Products <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="button button-outline">
                Request a Quote <ArrowRight size={17} />
              </Link>
              <Link href="/technical-center" className="button button-outline">
                Download TDS <FileText size={17} />
              </Link>
            </div>
          </div>

          <div className="product-category-stack" id="product-catalog-list">
            {productGroups.map((group, groupIndex) => {
              const groupProducts = group.slugs
                .map((slug) => productMap.get(slug))
                .filter((product) => product !== undefined);

              return (
                <section className="product-category-section" id={group.id} key={group.title}>
                  <div className="product-category-heading">
                    <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <h2>{group.title}</h2>
                      <p>{group.description}</p>
                    </div>
                    <div className="product-family-summary">
                      <dl>
                        <div>
                          <dt>Key products</dt>
                          <dd>{group.keyProducts}</dd>
                        </div>
                        <div>
                          <dt>Common applications</dt>
                          <dd>{group.commonApplications}</dd>
                        </div>
                      </dl>
                      <div>
                        <Link href="#product-catalog-list" className="button button-outline">
                          View Products <ArrowRight size={17} />
                        </Link>
                        <Link href="/contact" className="button button-dark">
                          Request a Quote <ArrowRight size={17} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="product-directory-grid">
                    {groupProducts.map((product) => (
                      <article className="directory-product-card" key={product.slug}>
                        <div className="directory-product-image-placeholder">
                          {!product.image.includes("placeholder") ? (
                            <Image
                              src={product.image}
                              alt={product.visualLabel}
                              fill
                              sizes="(max-width: 760px) 100vw, 24vw"
                            />
                          ) : (
                            <>
                              <ImagePlus size={28} strokeWidth={1.4} aria-hidden="true" />
                              <span>{product.visualLabel}</span>
                            </>
                          )}
                        </div>
                        <div className="directory-product-body">
                          <div className="product-category">{product.category}</div>
                          <h3>{product.name}</h3>
                          <p>{product.description}</p>
                          <div className="directory-spec-summary">
                            <span>Main specification range</span>
                            <dl>
                              {product.specs.slice(0, 3).map((spec) => (
                                <div key={spec.label}>
                                  <dt>{spec.label}</dt>
                                  <dd>{spec.value}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                          <Link href={product.detailHref ?? "/products"} className="text-link">
                            View product page <ArrowRight size={17} />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
