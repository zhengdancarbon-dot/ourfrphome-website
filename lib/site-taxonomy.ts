export type ProductSeries = {
  title: string;
  description: string;
  items: string[];
  href: string;
  image: string;
  specs: string[];
};

export type MaterialApplication = {
  name: string;
  description: string;
  recommended: string;
  href: string;
  image: string;
};

export type ManufacturingProcess = {
  name: string;
  description: string;
  recommended: string;
  href: string;
  image: string;
  rfqDetails?: string[];
};

export type RfqField = {
  name: string;
  label: string;
  placeholder?: string;
};

export type RfqProductType = {
  value: string;
  label: string;
  fields: RfqField[];
};

export const productSeries: ProductSeries[] = [
  {
    title: "Carbon Fiber Reinforcements",
    description:
      "Woven carbon fiber fabric, spread tow fabric, UD fabric, tape and roving for composite reinforcement.",
    items: [
      "Woven Carbon Fiber Fabric",
      "1K Woven Carbon Fiber Fabric",
      "3K Twill Carbon Fiber Fabric",
      "3K Plain Carbon Fiber Fabric",
      "6K Woven Carbon Fiber Fabric",
      "12K Woven Carbon Fiber Fabric",
      "Spread Tow Carbon Fiber Fabric",
      "Carbon Fiber Tape",
    ],
    href: "/products/carbon-fiber-woven-fabric",
    image: "/images/generated/3k-twill-carbon-fiber-gloss.png",
    specs: ["1K-12K tow options", "Plain / twill / spread tow", "1000-1500 mm typical width"],
  },
  {
    title: "Carbon Fiber Yarn, Tow & Precursor Materials",
    description:
      "Upstream PAN-based yarn, tow and precursor materials for weaving, prepregging, pultrusion and winding.",
    items: [
      "Carbon Fiber Yarn & Tow",
      "1K Carbon Fiber Yarn",
      "3K Carbon Fiber Yarn",
      "6K Carbon Fiber Yarn",
      "12K Carbon Fiber Tow",
      "24K / 48K / 50K Carbon Fiber Tow",
      "PAN Precursor Fiber",
      "Pre-oxidized PAN Fiber",
    ],
    href: "/products/carbon-fiber-yarn-and-tow",
    image: "/images/products/carbon-fiber-yarn-and-tow-spools.jpg",
    specs: ["1K-50K tow range", "Brand availability by review", "Sizing and bobbin by order"],
  },
  {
    title: "Prepreg Carbon Fiber Materials",
    description:
      "Independent prepreg material series with controlled resin content for repeatable laminate production.",
    items: [
      "Prepreg Carbon Fiber Fabric",
      "Woven Carbon Fiber Prepreg",
      "3K Twill Carbon Fiber Prepreg",
      "UD Carbon Fiber Prepreg",
      "Spread Tow Carbon Fiber Prepreg",
      "Custom Carbon Fiber Prepreg",
    ],
    href: "/products/prepreg-carbon-fiber-materials",
    image: "/images/generated/prepreg-carbon-fiber-roll-real-ps.webp",
    specs: ["Woven / UD reinforcement", "Epoxy resin systems", "Cure and storage by confirmation"],
  },
  {
    title: "Chopped & Milled Carbon Fiber",
    description:
      "Short fiber, milled fiber and carbon fiber powder for plastic, resin, friction and conductive applications.",
    items: [
      "Chopped Carbon Fiber",
      "Milled Carbon Fiber",
      "Carbon Fiber Powder",
      "Carbon Fiber for Plastic & Resin Reinforcement",
    ],
    href: "/products/chopped-carbon-fiber",
    image: "/images/products/chopped-carbon-fiber-strands.webp",
    specs: ["Fiber length by grade", "Powder / mesh by review", "Resin compatibility by application"],
  },
  {
    title: "CFRP Profiles & Custom Parts",
    description:
      "Tubes, sheets, rods, CNC machined CFRP parts and custom components based on drawings or samples.",
    items: [
      "Carbon Fiber Tube",
      "Roll-Wrapped Carbon Fiber Tube",
      "Pultruded Carbon Fiber Tube",
      "Carbon Fiber Sheet / Plate",
      "Carbon Fiber Rod",
      "CNC Machined CFRP Parts",
      "Custom CFRP Components",
    ],
    href: "/products/custom-carbon-fiber-products",
    image: "/images/products/custom-carbon-fiber-cnc-panels-hero.webp",
    specs: ["Dimensions by drawing", "Tolerance and surface finish by order", "Packing by component geometry"],
  },
  {
    title: "Structural Strengthening System",
    description:
      "A separate CFRP strengthening portfolio for civil reinforcement, distinct from ordinary UD fabric supply.",
    items: [
      "UD Carbon Fiber Fabric for Structural Strengthening",
      "Pultruded Carbon Fiber Plate / CFRP Laminate",
      "Structural Epoxy Resin",
      "CFRP Strengthening System",
    ],
    href: "/products/structural-strengthening-system",
    image: "/images/products/pultruded-cfrp-plate-stacked-hero.webp",
    specs: ["UD fabric / CFRP plate", "Epoxy system by project", "End-use review before quotation"],
  },
];

export const materialApplications: MaterialApplication[] = [
  {
    name: "Automotive Carbon Fiber Parts",
    description: "Visible 3K surfaces, prepreg skins, CNC plates and molded CFRP components.",
    recommended: "Woven fabric, prepreg, CFRP sheets, custom parts",
    href: "/applications/automotive-carbon-fiber-parts",
    image: "/images/products/3k-carbon-fiber-laminate-sheet.webp",
  },
  {
    name: "Sports Equipment",
    description: "Lightweight, stiff laminates for rods, tubes, boards, frames and protective shells.",
    recommended: "Prepreg, UD fabric, tubes, laminate sheets",
    href: "/applications/sports-equipment",
    image: "/images/products/3k-surface-carbon-fiber-tube.webp",
  },
  {
    name: "Civil UAV / Drone Components",
    description: "Carbon plates, tubes and machined parts for civil UAV, FPV and inspection drones.",
    recommended: "3K sheets, pultruded tubes, CNC CFRP parts",
    href: "/applications/civil-uav-drone-components",
    image: "/images/products/custom-carbon-fiber-cnc-panels-hero.webp",
  },
  {
    name: "Composite Manufacturing",
    description: "Dry reinforcements and prepregs for layup, infusion, autoclave and compression molding.",
    recommended: "Woven fabric, UD fabric, NCF, prepreg",
    href: "/applications#composite-manufacturing",
    image: "/images/composite-materials-range-products.webp",
  },
  {
    name: "Plastic & Resin Reinforcement",
    description: "Short fibers and powder for reinforced plastics, conductive compounds and resin systems.",
    recommended: "Chopped fiber, milled fiber, carbon powder",
    href: "/applications/plastic-resin-reinforcement",
    image: "/images/products/chopped-carbon-fiber.webp",
  },
  {
    name: "Structural Strengthening",
    description: "Externally bonded CFRP systems for concrete, masonry and civil reinforcement projects.",
    recommended: "UD strengthening fabric, CFRP laminate, structural epoxy",
    href: "/applications/structural-strengthening",
    image: "/images/products/pultruded-cfrp-plate-edge-detail.webp",
  },
  {
    name: "Robotics & Automation",
    description: "Stiff lightweight arms, brackets, covers and repeatable machined CFRP assemblies.",
    recommended: "CFRP tubes, plates, CNC parts, custom components",
    href: "/applications#robotics-automation",
    image: "/images/products/3k-surface-carbon-fiber-square-tube.webp",
  },
  {
    name: "Marine Repair",
    description: "Localized reinforcement, panels and repair laminates for marine composite structures.",
    recommended: "Woven fabric, NCF, UD fabric, epoxy-compatible systems",
    href: "/applications#marine-repair",
    image: "/images/products/carbon-fiber-multiaxial-ncf-fabric.webp",
  },
  {
    name: "Decorative CFRP Panels",
    description: "Cosmetic carbon surfaces and patterned laminates for appearance-driven products.",
    recommended: "3K twill fabric, jacquard, hybrid fabric, laminate sheets",
    href: "/applications/decorative-cfrp-panels",
    image: "/images/products/carbon-aramid-hybrid-jacquard-orange.webp",
  },
];

export const manufacturingProcesses: ManufacturingProcess[] = [
  {
    name: "Wet Lay-Up",
    description: "Open-mold processing for repair, prototypes and low-volume laminates.",
    recommended: "Woven fabric, UD fabric, hybrid fabric",
    href: "/processes#wet-lay-up",
    image: "/images/products/carbon-fiber-ud-fabric-factory.webp",
  },
  {
    name: "Vacuum Infusion",
    description: "Dry reinforcement stacks infused with resin under vacuum.",
    recommended: "Woven fabric, NCF, UD fabric",
    href: "/processes#vacuum-infusion",
    image: "/images/composite-applications.png",
  },
  {
    name: "Prepreg / Autoclave Molding",
    description: "Controlled resin content and cure cycles for repeatable laminate quality.",
    recommended: "Woven prepreg, UD prepreg, spread tow prepreg",
    href: "/processes#prepreg-autoclave-molding",
    image: "/images/products/carbon-fiber-prepreg-fabric.webp",
  },
  {
    name: "Compression Molding",
    description: "Matched tooling for repeat CFRP parts and higher-throughput components.",
    recommended: "Prepreg, chopped fiber compounds, custom laminates",
    href: "/processes#compression-molding",
    image: "/images/products/custom-carbon-fiber-cnc-panels-hero.webp",
  },
  {
    name: "Pultrusion",
    description: "Continuous profiles, plates, rods and tubes with stable fiber alignment.",
    recommended: "Carbon fiber tow, UD fabric, CFRP plate systems",
    href: "/processes#pultrusion",
    image: "/images/products/pultruded-carbon-fiber-tube-range.webp",
    rfqDetails: [
      "Profile shape",
      "Width / thickness / OD / ID",
      "Fiber grade",
      "Resin system",
      "Required tensile strength / modulus",
      "Length",
      "Quantity",
      "Surface treatment",
      "Destination country",
    ],
  },
  {
    name: "Filament Winding",
    description: "Tow-based winding for tubes, pressure structures and rotational components.",
    recommended: "Carbon fiber yarn and tow",
    href: "/processes#filament-winding",
    image: "/images/products/3k-surface-carbon-fiber-tube-detail.webp",
    rfqDetails: [
      "Tow size",
      "Fiber grade",
      "Sizing type",
      "Resin system",
      "Winding application",
      "Required strength / modulus",
      "Quantity",
      "Destination country",
    ],
  },
  {
    name: "Weaving & Braiding",
    description: "Textile conversion routes for woven fabric, sleeve, tape and specialty reinforcement.",
    recommended: "1K-50K yarn and tow, PAN precursor materials",
    href: "/processes#weaving-braiding",
    image: "/images/products/carbon-fiber-woven-fabric-twill.webp",
  },
  {
    name: "CNC Machining",
    description: "Sheet, plate and laminate cutting for frames, brackets and precision CFRP parts.",
    recommended: "CFRP sheets, laminate plates, custom components",
    href: "/processes#cnc-machining",
    image: "/images/products/custom-carbon-fiber-cnc-panels-hero.webp",
    rfqDetails: [
      "Drawing upload",
      "Material thickness",
      "Tolerance",
      "Hole size / slot / contour requirement",
      "Surface finish",
      "Quantity",
      "Application",
    ],
  },
  {
    name: "Plastic Compounding",
    description: "Short fiber and powder addition for strength, conductivity and dimensional control.",
    recommended: "Chopped carbon fiber, milled carbon fiber powder",
    href: "/processes#plastic-compounding",
    image: "/images/products/chopped-carbon-fiber-short.webp",
    rfqDetails: [
      "Fiber length",
      "Powder size / mesh",
      "Sizing type",
      "Polymer system: PA / PP / PEEK / PPS / ABS / PC",
      "Target performance: strength / conductivity / dimensional stability",
      "Processing method: extrusion / injection molding",
      "Quantity",
    ],
  },
];

export const featuredProductSlugs = [
  "carbon-fiber-yarn-and-tow",
  "carbon-fiber-woven-fabric",
  "prepreg-carbon-fiber-materials",
  "custom-carbon-fiber-products",
];

export const technicalGuides = [
  {
    title: "Carbon Fiber 101",
    description: "A practical overview of fiber types, fabric structure and common applications.",
    href: "/technical-center#carbon-fiber-101",
    image: "/images/products/carbon-fiber-woven-fabric-twill.webp",
  },
  {
    title: "Prepreg Handling & Storage",
    description: "Guidance for storage, thawing, cutting and out-life management.",
    href: "/technical-center#prepreg-handling-storage",
    image: "/images/products/carbon-fiber-prepreg-release-paper.webp",
  },
  {
    title: "Process Selection Guide",
    description: "Compare layup, infusion, autoclave molding, pultrusion and compounding.",
    href: "/processes",
    image: "/images/hero-carbon-production.png",
  },
  {
    title: "Machining CFRP",
    description: "Tooling, speeds, feeds and surface finish considerations for composite parts.",
    href: "/technical-center#machining-cfrp",
    image: "/images/products/custom-carbon-fiber-cnc-parts-detail.webp",
  },
];

export const qualityDocuments = [
  {
    type: "TDS",
    name: "Technical Data Sheet",
    description: "Material specifications, typical properties and recommended use.",
  },
  {
    type: "SDS",
    name: "Safety Data Sheet",
    description: "Hazard information, handling guidance and safety measures where applicable.",
  },
  {
    type: "COA",
    name: "Certificate of Analysis",
    description: "Batch information and material characteristics when available for confirmed orders.",
  },
];

export const factoryImageSections = [
  {
    title: "Carbon Yarn Creel",
    image: "/images/home/home-yarn-creel-hero-gray.jpg",
  },
  {
    title: "Dornier Weaving Loom",
    image: "/images/home/home-dornier-loom-hero.jpg",
  },
  {
    title: "Warp Threading Preparation",
    image: "/images/home/home-threading-depth.jpg",
  },
  {
    title: "Operating Weaving Room",
    image: "/images/home/home-clean-weaving-room.jpg",
  },
];

export const complianceNotice =
  "Some high-performance carbon fiber materials, prepregs, yarns, tow, CFRP components and related products may require end-use and end-user review before quotation or shipment.";

export const brandAvailabilityNotice =
  "Brand availability depends on stock, batch, order quantity, destination country and compliance review. We do not imply official authorization unless separately stated.";

export const rfqProductTypes: RfqProductType[] = [
  {
    value: "yarn-tow",
    label: "Carbon Fiber Yarn / Tow",
    fields: [
      { name: "towSize", label: "Tow size", placeholder: "1K / 3K / 12K / 24K / 48K / 50K" },
      { name: "brandRequirement", label: "Brand requirement", placeholder: "No preference / specific brand by review" },
      { name: "grade", label: "Grade", placeholder: "Standard modulus / high strength / other" },
      { name: "sizingType", label: "Sizing type", placeholder: "Epoxy-compatible / PA / PP / other" },
      { name: "compatibleProcess", label: "Compatible process", placeholder: "Weaving / prepreg / winding / pultrusion" },
      { name: "bobbinWeight", label: "Bobbin weight", placeholder: "e.g. 4 kg, 6 kg, 8 kg" },
    ],
  },
  {
    value: "woven-fabric",
    label: "Woven Carbon Fiber Fabric",
    fields: [
      { name: "towSize", label: "Tow size", placeholder: "1K / 3K / 6K / 12K" },
      { name: "weaveType", label: "Weave type", placeholder: "Plain / 2x2 twill / satin / jacquard" },
      { name: "patternSize", label: "Pattern size", placeholder: "8x8 mm / 10x10 mm for spread tow" },
      { name: "arealWeight", label: "Areal weight", placeholder: "e.g. 200 g/m2, 245 g/m2, 600 g/m2" },
      { name: "width", label: "Width", placeholder: "e.g. 1000 mm / 1270 mm / 1500 mm" },
      { name: "rollLength", label: "Roll length", placeholder: "e.g. 50 m / 100 m" },
    ],
  },
  {
    value: "aramid-hybrid-fabric",
    label: "Aramid / Carbon-Aramid Hybrid Fabric",
    fields: [
      { name: "fiberType", label: "Fiber type", placeholder: "Para-aramid / meta-aramid / carbon-aramid hybrid" },
      { name: "fabricConstruction", label: "Fabric construction", placeholder: "Plain / twill / honeycomb / jacquard / custom" },
      { name: "arealWeight", label: "Areal weight", placeholder: "e.g. 170 / 180 / 200 / 240 g/m2" },
      { name: "width", label: "Width", placeholder: "1000 mm / 1270 mm / custom" },
      { name: "colorPattern", label: "Color or pattern", placeholder: "Yellow / black-yellow / red-black / custom" },
      { name: "targetApplication", label: "Target application", placeholder: "Protective panel / composite skin / decorative CFRP" },
      { name: "resinCompatibility", label: "Resin compatibility", placeholder: "Epoxy / vinyl ester / phenolic / other" },
    ],
  },
  {
    value: "ud-fabric",
    label: "UD Carbon Fiber Fabric",
    fields: [
      { name: "fiberDirectionRequirement", label: "Fiber direction requirement", placeholder: "0 degree / main load direction / custom" },
      { name: "arealWeight", label: "Areal weight", placeholder: "200 / 300 / 600 g/m2 or custom" },
      { name: "width", label: "Width", placeholder: "10 cm / 20 cm / 50 cm / 100 cm / custom" },
      { name: "fiberGrade", label: "Fiber grade", placeholder: "T300 / T700 / 12K / 24K / 50K / custom" },
      { name: "rollLength", label: "Roll length", placeholder: "e.g. 50 m / 100 m / custom" },
      { name: "resinSystem", label: "Resin system or process", placeholder: "Epoxy / pultrusion / strengthening / laminate" },
    ],
  },
  {
    value: "spread-tow-fabric",
    label: "Spread Tow Carbon Fiber Fabric",
    fields: [
      { name: "patternSize", label: "Pattern size", placeholder: "8x8mm / 10x10mm / custom" },
      { name: "towSize", label: "Tow size", placeholder: "12K / 24K / custom" },
      { name: "fiberGrade", label: "Fiber grade", placeholder: "T700 / custom" },
      { name: "weavePattern", label: "Weave pattern", placeholder: "Plain / twill / diamond / custom" },
      { name: "arealWeight", label: "Areal weight", placeholder: "100 / 160 / 200 / 240 / 300 / 600 g/m2" },
      { name: "width", label: "Width", placeholder: "1000 mm / 1270 mm / custom" },
      { name: "rollLength", label: "Roll length", placeholder: "50 m / 100 m / custom" },
      { name: "surfaceAppearanceRequirement", label: "Surface appearance requirement", placeholder: "Decorative CFRP / thin laminate / panel skin" },
    ],
  },
  {
    value: "prepreg",
    label: "Prepreg Carbon Fiber Materials",
    fields: [
      { name: "reinforcementType", label: "Reinforcement type", placeholder: "Woven / UD / spread tow" },
      { name: "fabricType", label: "Fabric type", placeholder: "3K twill / UD / custom" },
      { name: "fiberGrade", label: "Fiber grade", placeholder: "T300 / T700 / project grade" },
      { name: "resinSystem", label: "Resin system", placeholder: "Epoxy / high Tg / custom" },
      { name: "resinContent", label: "Resin content", placeholder: "e.g. 35% +/- 3%" },
      { name: "curingTemperature", label: "Curing temperature", placeholder: "e.g. 120 C / 135 C" },
      { name: "processingMethod", label: "Processing method", placeholder: "Autoclave / OOA / compression molding" },
      { name: "storageRequirement", label: "Storage requirement", placeholder: "Frozen / refrigerated / other" },
      { name: "shelfLifeRequirement", label: "Shelf-life requirement", placeholder: "Target out-life or storage period" },
    ],
  },
  {
    value: "chopped-powder",
    label: "Chopped / Milled / Powder",
    fields: [
      { name: "fiberLength", label: "Fiber length", placeholder: "e.g. 3 mm / 6 mm / 12 mm" },
      { name: "powderSizeMesh", label: "Powder size / mesh", placeholder: "e.g. 100 mesh / 200 mesh" },
      { name: "sizingType", label: "Sizing type", placeholder: "Unsized / epoxy / PA / PP compatible" },
      { name: "compatibleResinPlastic", label: "Compatible resin or plastic", placeholder: "PA6 / PP / epoxy / PEEK / phenolic" },
      { name: "requiredPerformance", label: "Required performance", placeholder: "Strength / conductivity / wear / dimensional stability" },
      { name: "packaging", label: "Packaging", placeholder: "Bag / carton / pallet / custom" },
    ],
  },
  {
    value: "cfrp-part",
    label: "CFRP Profiles & Custom Parts",
    fields: [
      { name: "cfrpProductType", label: "Product type", placeholder: "Tube / sheet / rod / CNC part / molded component" },
      { name: "dimensions", label: "Dimensions", placeholder: "OD, ID, length, thickness or drawing reference" },
      { name: "tolerance", label: "Tolerance", placeholder: "General / drawing tolerance / critical dimensions" },
      { name: "surfaceFinish", label: "Surface finish", placeholder: "Gloss / matte / 3K visual / painted / machined" },
      { name: "manufacturingProcess", label: "Manufacturing process", placeholder: "Roll-wrapped / pultruded / CNC / molding" },
    ],
  },
  {
    value: "structural-strengthening",
    label: "Structural Strengthening System",
    fields: [
      { name: "projectType", label: "Project type", placeholder: "Concrete beam / bridge / masonry / slab / column" },
      { name: "materialRequired", label: "Material required", placeholder: "UD fabric / CFRP plate / epoxy resin / system" },
      { name: "udFabricWeight", label: "UD fabric weight", placeholder: "e.g. 200 g/m2 / 300 g/m2 / 600 g/m2" },
      { name: "cfrpPlateWidthThickness", label: "CFRP plate width and thickness", placeholder: "e.g. 50 x 1.2 mm / 100 x 1.4 mm" },
      { name: "epoxyResinRequirement", label: "Epoxy resin requirement", placeholder: "Primer / saturant / plate adhesive" },
      { name: "projectArea", label: "Project area", placeholder: "Approximate m2 or linear meters" },
    ],
  },
];

export const rfqFieldLookup = new Map(
  rfqProductTypes.flatMap((type) => type.fields.map((field) => [field.name, field] as const)),
);

export function slugifyAnchor(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
