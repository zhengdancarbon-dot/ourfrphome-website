export type ProductFamilyLink = {
  label: string;
  href: string;
};

export type ProductFamily = {
  title: string;
  description: string;
  href: string;
  keyProducts: string[];
  commonApplications: string;
  items: ProductFamilyLink[];
};

export const productFamilies: ProductFamily[] = [
  {
    title: "Carbon Fiber Reinforcements",
    description:
      "Dry carbon fiber fabrics and textile reinforcements for composite manufacturing.",
    href: "/products#carbon-fiber-reinforcements",
    keyProducts: [
      "Woven Carbon Fiber Fabric",
      "UD Carbon Fiber Fabric",
      "Spread Tow Carbon Fabric",
      "Carbon Fiber Multiaxial NCF Fabric",
    ],
    commonApplications:
      "Composite laminates, visible CFRP surfaces, civil UAV components, automotive panels and industrial shells.",
    items: [
      { label: "Woven Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric" },
      { label: "1K Woven Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric" },
      { label: "3K Twill Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric" },
      { label: "3K Plain Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric" },
      { label: "6K Woven Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric" },
      { label: "12K Woven Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric" },
      { label: "Spread Tow Carbon Fiber Fabric", href: "/products/spread-tow-carbon-fiber-fabric" },
      { label: "8x8mm Spread Tow Carbon Fabric", href: "/products/spread-tow-carbon-fiber-fabric" },
      { label: "10x10mm Spread Tow Carbon Fabric", href: "/products/spread-tow-carbon-fiber-fabric" },
      { label: "UD Carbon Fiber Fabric", href: "/products/carbon-fiber-ud-fabric" },
      { label: "Carbon Fiber Multiaxial NCF Fabric", href: "/products/carbon-fiber-multiaxial-ncf-fabric" },
      { label: "Carbon Aramid Hybrid Fabric", href: "/products/carbon-fiber-hybrid-jacquard-fabric" },
      { label: "Aramid Fabric", href: "/products/aramid-fabric" },
    ],
  },
  {
    title: "Carbon Fiber Yarn, Tow & Precursor Materials",
    description:
      "Upstream carbon fiber yarn, tow, roving and PAN-based precursor materials.",
    href: "/products#carbon-fiber-yarn-tow-precursor-materials",
    keyProducts: [
      "Carbon Fiber Yarn & Tow",
      "1K / 3K / 6K Carbon Fiber Yarn",
      "12K / 24K / 48K / 50K Carbon Fiber Tow",
      "PAN Precursor Fiber",
    ],
    commonApplications:
      "Weaving, braiding, filament winding, pultrusion, prepreg production and chopping.",
    items: [
      { label: "Carbon Fiber Yarn & Tow", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "1K Carbon Fiber Yarn", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "3K Carbon Fiber Yarn", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "6K Carbon Fiber Yarn", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "12K Carbon Fiber Tow", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "24K / 48K / 50K Carbon Fiber Tow", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "Chinese Brand Carbon Fiber Yarn & Tow", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "PAN Precursor Fiber", href: "/products/carbon-fiber-yarn-and-tow" },
      { label: "Pre-oxidized PAN Fiber", href: "/products/carbon-fiber-yarn-and-tow" },
    ],
  },
  {
    title: "Prepreg Carbon Fiber Materials",
    description:
      "Resin-impregnated carbon fiber materials for controlled composite molding.",
    href: "/products#prepreg-carbon-fiber-materials",
    keyProducts: [
      "Prepreg Carbon Fiber Fabric",
      "Woven Carbon Fiber Prepreg",
      "UD Carbon Fiber Prepreg",
      "Spread Tow Carbon Fiber Prepreg",
    ],
    commonApplications:
      "Autoclave molding, hot press, compression molding, molded CFRP parts and repeatable laminates.",
    items: [
      { label: "Prepreg Carbon Fiber Fabric", href: "/products/prepreg-carbon-fiber-materials" },
      { label: "Woven Carbon Fiber Prepreg", href: "/products/prepreg-carbon-fiber-materials" },
      { label: "3K Twill Carbon Fiber Prepreg", href: "/products/prepreg-carbon-fiber-materials" },
      { label: "UD Carbon Fiber Prepreg", href: "/products/prepreg-carbon-fiber-materials" },
      { label: "Spread Tow Carbon Fiber Prepreg", href: "/products/prepreg-carbon-fiber-materials" },
      { label: "Custom Carbon Fiber Prepreg", href: "/products/prepreg-carbon-fiber-materials" },
    ],
  },
  {
    title: "Chopped & Milled Carbon Fiber",
    description:
      "Short fiber and powder materials for plastic, resin and conductive applications.",
    href: "/products#chopped-milled-carbon-fiber",
    keyProducts: [
      "Chopped Carbon Fiber",
      "Milled Carbon Fiber Powder",
      "Carbon Fiber Powder",
      "Carbon Fiber for Plastic & Resin Reinforcement",
    ],
    commonApplications:
      "Plastic compounding, resin modification, conductive compounds, friction materials and coatings.",
    items: [
      { label: "Chopped Carbon Fiber", href: "/products/chopped-carbon-fiber" },
      { label: "Milled Carbon Fiber Powder", href: "/products/milled-carbon-fiber-powder" },
      { label: "Carbon Fiber Powder", href: "/products/milled-carbon-fiber-powder" },
      { label: "Carbon Fiber for Plastic & Resin Reinforcement", href: "/applications/plastic-resin-reinforcement" },
    ],
  },
  {
    title: "CFRP Profiles & Custom Parts",
    description:
      "Carbon fiber tubes, sheets, rods, laminates and custom CNC components.",
    href: "/products#cfrp-profiles-custom-parts",
    keyProducts: [
      "Carbon Fiber Tube",
      "Carbon Fiber Sheet / Plate",
      "Carbon Fiber Rod",
      "CNC Machined CFRP Parts",
    ],
    commonApplications:
      "Civil UAV parts, sports equipment, automation parts, structural profiles and machined components.",
    items: [
      { label: "Carbon Fiber Tube", href: "/products/3k-surface-carbon-fiber-tube" },
      { label: "Roll-Wrapped Carbon Fiber Tube", href: "/products/3k-surface-carbon-fiber-tube" },
      { label: "Pultruded Carbon Fiber Tube", href: "/products/pultruded-carbon-fiber-tube" },
      { label: "Carbon Fiber Sheet / Plate", href: "/products/3k-carbon-fiber-laminate-sheet" },
      { label: "Carbon Fiber Rod", href: "/products/pultruded-carbon-fiber-tube" },
      { label: "3K Carbon Fiber Laminate Sheet", href: "/products/3k-carbon-fiber-laminate-sheet" },
      { label: "3K Surface Carbon Fiber Tube", href: "/products/3k-surface-carbon-fiber-tube" },
      { label: "CNC Machined CFRP Parts", href: "/products/custom-carbon-fiber-products" },
      { label: "Custom Carbon Fiber Products", href: "/products/custom-carbon-fiber-products" },
    ],
  },
  {
    title: "Structural Strengthening System",
    description:
      "UD fabric, CFRP plate and epoxy resin for concrete and building reinforcement.",
    href: "/products#structural-strengthening-system",
    keyProducts: [
      "UD Carbon Fiber Fabric for Structural Strengthening",
      "Pultruded CFRP Plate / Laminate",
      "Structural Epoxy Resin",
      "CFRP Strengthening System",
    ],
    commonApplications:
      "Concrete beams, slabs, columns, bridges, masonry and building reinforcement projects.",
    items: [
      { label: "UD Carbon Fiber Fabric for Structural Strengthening", href: "/products/structural-strengthening-system" },
      { label: "Pultruded Carbon Fiber Plate / CFRP Laminate", href: "/products/structural-strengthening-system" },
      { label: "Structural Epoxy Resin", href: "/products/structural-strengthening-system" },
      { label: "CFRP Strengthening System", href: "/products/structural-strengthening-system" },
    ],
  },
];
