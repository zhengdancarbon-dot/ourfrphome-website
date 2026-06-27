import { productCatalog } from "@/lib/product-catalog";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  detailHref?: string;
  specs: { label: string; value: string }[];
  applications: string[];
  image: string;
  visualLabel: string;
  position: string;
};

export const products: Product[] = productCatalog.map((product) => ({
  slug: product.slug,
  name: product.name,
  shortName: product.shortName,
  category: product.category,
  description: product.description,
  detailHref: `/products/${product.slug}`,
  specs: product.specs,
  applications: product.applications.slice(0, 3),
  image: product.image,
  visualLabel: product.visualLabel,
  position: product.position,
}));

export const applications = [
  {
    name: "Composite Manufacturing",
    description: "Dry fabrics, prepregs, yarn and additives for established molding processes.",
    products: "UD Fabric · Woven Fabric · Prepreg Fabric · Yarn and Tow",
  },
  {
    name: "Automotive & Tuning",
    description: "Visual 3K carbon surfaces, molded panels, tubes and custom composite parts.",
    products: "3K Fabric · 3K Laminate Sheet · 3K Tubes · Custom Products",
  },
  {
    name: "Civil UAV & Drone Parts",
    description: "Carbon plates, tubes and custom machined parts for civil UAV, FPV drone, agricultural drone, mapping drone and inspection drone applications.",
    products: "3K Laminate Sheet · Carbon Tubes · CNC Parts · Custom Products",
  },
  {
    name: "RC Models & Hobby Parts",
    description: "Lightweight carbon fiber sheets, tubes and CNC parts for RC model frames, accessories and commercial model components.",
    products: "3K Laminate Sheet · 3K Tubes · Pultruded Tubes · Custom Products",
  },
  {
    name: "Marine Composites",
    description: "Carbon and hybrid reinforcements for hulls, decks, masts and lightweight covers.",
    products: "Multiaxial NCF Fabric · Hybrid Fabric · Prepreg Fabric",
  },
  {
    name: "Construction Reinforcement",
    description: "UD fabrics and pultruded CFRP plates for externally bonded strengthening systems.",
    products: "UD Fabric · CFRP Plate · Epoxy Systems",
  },
  {
    name: "Sports Equipment",
    description: "Prepreg, UD fabric, 3K tubes and custom laminates for light and stiff components.",
    products: "Prepreg Fabric · UD Fabric · 3K Tubes · Laminate Sheet",
  },
  {
    name: "Industrial Compounds",
    description: "Short carbon fibers and milled fiber powder for conductive and reinforced materials.",
    products: "Chopped Fiber · Milled Carbon Fiber Powder · Yarn and Tow",
  },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/processes", label: "Processes" },
  { href: "/technical-center", label: "Technical Center" },
  { href: "/quality-control", label: "Quality" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact / RFQ" },
];
