import { absoluteUrl } from "@/lib/seo";

export type ApplicationPage = {
  slug: string;
  title: string;
  description: string;
  image: string;
  quickAnswer: string;
  why: string[];
  recommendedMaterials: { name: string; href: string; note: string }[];
  commonSpecifications: string[][];
  selectionGuide: string[];
  rfqDetails: string[];
  relatedProducts: string[];
  faqs: { question: string; answer: string }[];
};

export const applicationPages: ApplicationPage[] = [
  {
    slug: "automotive-carbon-fiber-parts",
    title: "Carbon Fiber Materials for Automotive Carbon Fiber Parts",
    description:
      "Selection guide for carbon fiber fabric, prepreg, sheets, tubes and custom CFRP parts used in automotive visual and structural composite components.",
    image: "/images/products/3k-carbon-fiber-laminate-sheet.webp",
    quickAnswer:
      "Automotive carbon fiber parts commonly use 3K woven fabric, spread tow fabric, prepreg, carbon fiber sheets and custom CFRP components when visible surface quality, stiffness and lightweight performance are required.",
    why: [
      "Carbon fiber can reduce part weight while preserving stiffness in covers, panels, trims and selected structural components.",
      "3K twill and spread tow surfaces provide a recognizable CFRP appearance for visible automotive parts.",
      "Prepreg and controlled laminate sheets help improve repeatability when cosmetic finish and dimensional stability matter.",
    ],
    recommendedMaterials: [
      { name: "3K Twill Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric", note: "Classic automotive carbon appearance." },
      { name: "Spread Tow Carbon Fiber Fabric", href: "/products/spread-tow-carbon-fiber-fabric", note: "Flat checker surface for premium visible CFRP." },
      { name: "Prepreg Carbon Fiber Materials", href: "/products/prepreg-carbon-fiber-materials", note: "Controlled resin content for molded parts." },
      { name: "3K Carbon Fiber Laminate Sheet", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Panels and CNC-cut trim parts." },
      { name: "Custom Carbon Fiber Products", href: "/products/custom-carbon-fiber-products", note: "Drawing-based covers, brackets and assemblies." },
    ],
    commonSpecifications: [
      ["Visible fabric", "3K twill / plain / spread tow"],
      ["Areal weight", "200 / 240 / 245 / 300 g/m2 typical"],
      ["Prepreg format", "Woven prepreg or UD prepreg by part requirement"],
      ["Sheet thickness", "0.5-10 mm typical; custom by drawing"],
      ["Finish", "Gloss, matte, clear coat or sanded by order"],
    ],
    selectionGuide: [
      "Use dry woven fabric when the customer controls the resin process.",
      "Use prepreg when resin content, surface repeatability and cure cycle are controlled.",
      "Use laminate sheet when the part is CNC cut from flat stock.",
      "Share surface finish, thickness, drawing and annual demand before quotation.",
    ],
    rfqDetails: [
      "Part type",
      "Visible surface requirement",
      "Fabric or prepreg type",
      "Thickness or laminate schedule",
      "Drawing or sample photo",
      "Finish: gloss / matte / painted / sanded",
      "Quantity",
      "Destination country",
      "End use / final application",
    ],
    relatedProducts: [
      "carbon-fiber-woven-fabric",
      "spread-tow-carbon-fiber-fabric",
      "prepreg-carbon-fiber-materials",
      "3k-carbon-fiber-laminate-sheet",
      "custom-carbon-fiber-products",
    ],
    faqs: [
      {
        question: "Which carbon fabric is common for automotive visible parts?",
        answer:
          "3K twill carbon fiber fabric is a common starting point. Spread tow fabric may be selected when a flatter checker pattern is preferred.",
      },
      {
        question: "Should automotive parts use prepreg or dry fabric?",
        answer:
          "Prepreg is better for controlled resin content and repeatable molded parts. Dry fabric is practical for wet lay-up, repair and lower-volume processing.",
      },
    ],
  },
  {
    slug: "civil-uav-drone-components",
    title: "Carbon Fiber Materials for Civil UAV and Drone Components",
    description:
      "Carbon fiber sheets, tubes, rods, 3K woven fabric, spread tow fabric and custom CFRP parts for civil UAV, inspection drone and commercial drone components.",
    image: "/images/products/custom-carbon-fiber-cnc-panels-hero.webp",
    quickAnswer:
      "Carbon fiber sheets, tubes, rods, 3K woven fabric, spread tow fabric and custom CFRP parts are used in civil UAV and drone components where lightweight structure, stiffness and stable dimensions are required.",
    why: [
      "Carbon fiber plates and tubes provide high stiffness-to-weight ratio for frames, arms, mounts and equipment supports.",
      "CNC-machined CFRP sheets support repeatable component geometry when drawings are available.",
      "Visible 3K or spread tow surfaces can be used when appearance is part of the product value.",
    ],
    recommendedMaterials: [
      { name: "3K Twill Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric", note: "Visible laminate skins and panels." },
      { name: "Spread Tow Carbon Fiber Fabric", href: "/products/spread-tow-carbon-fiber-fabric", note: "Thin, flat CFRP surface skins." },
      { name: "Carbon Fiber Sheet / Plate", href: "/products/3k-carbon-fiber-laminate-sheet", note: "CNC-cut frames, arms and panels." },
      { name: "Carbon Fiber Tube", href: "/products/3k-surface-carbon-fiber-tube", note: "Lightweight arms and supports." },
      { name: "Pultruded Carbon Fiber Tube", href: "/products/pultruded-carbon-fiber-tube", note: "Efficient structural support profiles." },
      { name: "Custom CNC CFRP Parts", href: "/products/custom-carbon-fiber-products", note: "Drawing-based parts and assemblies." },
    ],
    commonSpecifications: [
      ["Plate thickness", "1 / 1.5 / 2 / 3 / 4 / 5 mm or custom"],
      ["Tube dimensions", "OD / ID / wall thickness by drawing"],
      ["Surface", "3K twill, matte, glossy or sanded"],
      ["Process", "CNC cutting, drilling, slotting or bonding"],
      ["Application terms", "civil UAV, commercial drone, inspection drone, agricultural drone, aerial photography drone"],
    ],
    selectionGuide: [
      "Use carbon plate for flat frames, brackets and equipment mounting plates.",
      "Use carbon tube for arms, booms and lightweight support structures.",
      "Confirm whether the drone is civil, commercial, inspection, agricultural or aerial photography use.",
      "Provide drawings and tolerance if holes, slots or contour accuracy affect assembly.",
    ],
    rfqDetails: [
      "Component type",
      "Plate thickness",
      "Tube OD / ID / wall thickness",
      "Drawing upload",
      "Surface finish",
      "Quantity",
      "Civil / commercial application",
      "Destination country",
      "End use / final application",
    ],
    relatedProducts: [
      "3k-carbon-fiber-laminate-sheet",
      "3k-surface-carbon-fiber-tube",
      "pultruded-carbon-fiber-tube",
      "custom-carbon-fiber-products",
      "spread-tow-carbon-fiber-fabric",
    ],
    faqs: [
      {
        question: "Can you supply carbon parts for commercial drones?",
        answer:
          "Yes. We can review carbon plates, tubes and CNC parts for civil UAV, commercial drone, inspection drone, agricultural drone and aerial photography drone applications.",
      },
      {
        question: "What files are needed for CNC drone parts?",
        answer:
          "DXF, STEP, PDF drawings, thickness, surface finish, tolerance and quantity help us review feasibility and quotation.",
      },
    ],
  },
  {
    slug: "plastic-resin-reinforcement",
    title: "Carbon Fiber for Plastic and Resin Reinforcement",
    description:
      "Selection guide for chopped carbon fiber, milled carbon fiber powder and carbon fiber powder used in plastic, resin and conductive compound reinforcement.",
    image: "/images/products/chopped-carbon-fiber.webp",
    quickAnswer:
      "Chopped carbon fiber, milled carbon fiber powder and carbon fiber powder are used in plastic and resin systems when reinforcement, conductivity, wear resistance or dimensional stability is required.",
    why: [
      "Short carbon fibers can improve stiffness and strength in selected thermoplastic or thermoset compounds.",
      "Milled carbon fiber powder can support conductivity, wear behavior and dimensional control.",
      "Sizing and fiber length must match the polymer, resin and processing method.",
    ],
    recommendedMaterials: [
      { name: "Chopped Carbon Fiber", href: "/products/chopped-carbon-fiber", note: "3 mm, 6 mm, 12 mm and custom cut lengths." },
      { name: "Milled Carbon Fiber Powder", href: "/products/milled-carbon-fiber-powder", note: "Fine fibrous powder for compounds and fillers." },
      { name: "Carbon Fiber Yarn & Tow", href: "/products/carbon-fiber-yarn-and-tow", note: "Upstream material for chopping or conversion by requirement." },
    ],
    commonSpecifications: [
      ["Fiber length", "3 / 6 / 12 / 25 mm or custom"],
      ["Powder size", "30-300 um typical or mesh by review"],
      ["Sizing", "Epoxy, PA, PP, PEEK, PPS or custom compatibility"],
      ["Polymer system", "PA / PP / PEEK / PPS / ABS / PC / epoxy / phenolic"],
      ["Packing", "Bag, carton, drum, supersack or pallet"],
    ],
    selectionGuide: [
      "Start with the matrix system and processing method.",
      "Choose chopped fiber when continuous-fiber strength is not required but reinforcement is needed.",
      "Choose milled carbon fiber powder when dispersion, conductivity or fine filler behavior matters.",
      "Confirm target performance before selecting length, mesh and sizing.",
    ],
    rfqDetails: [
      "Fiber length",
      "Powder size / mesh",
      "Sizing type",
      "Polymer or resin system",
      "Target performance",
      "Processing method: extrusion / injection molding / resin mixing",
      "Packaging",
      "Quantity",
      "Destination country",
      "End use / final application",
    ],
    relatedProducts: ["chopped-carbon-fiber", "milled-carbon-fiber-powder", "carbon-fiber-yarn-and-tow"],
    faqs: [
      {
        question: "Is chopped carbon fiber suitable for visible carbon surfaces?",
        answer:
          "No. Chopped fiber is used as a reinforcement or functional additive. Visible carbon surfaces usually require woven, spread tow or laminate materials.",
      },
      {
        question: "How do I choose fiber length?",
        answer:
          "Fiber length depends on feeding behavior, compounding process, final part thickness and performance target. 3 mm and 6 mm are common starting points.",
      },
    ],
  },
  {
    slug: "structural-strengthening",
    title: "Carbon Fiber Materials for Structural Strengthening",
    description:
      "CFRP strengthening material guide covering UD carbon fiber fabric, pultruded CFRP plates and structural epoxy resin for concrete, bridge and building reinforcement.",
    image: "/images/products/pultruded-cfrp-plate-stacked-hero.webp",
    quickAnswer:
      "A carbon fiber structural strengthening system includes UD carbon fiber fabric, pultruded CFRP plates and structural epoxy resin for concrete, bridge and building reinforcement projects.",
    why: [
      "UD carbon fabric provides directional reinforcement for surface bonding on beams, slabs, columns and walls.",
      "Pultruded CFRP plates provide high axial stiffness for externally bonded strengthening.",
      "The epoxy resin system is part of the material system and must be selected for substrate and project conditions.",
    ],
    recommendedMaterials: [
      { name: "UD Carbon Fiber Fabric for Strengthening", href: "/products/carbon-fiber-ud-fabric", note: "Directional surface bonding reinforcement." },
      { name: "Pultruded CFRP Plate / Laminate", href: "/products/structural-strengthening-system", note: "High-strength laminate reinforcement." },
      { name: "Structural Epoxy Resin", href: "/products/structural-strengthening-system", note: "Bonding and impregnation resin by project requirement." },
    ],
    commonSpecifications: [
      ["UD fabric weight", "200 / 300 / 600 g/m2 or custom"],
      ["UD fabric width", "10 / 20 / 30 / 50 / 100 cm or custom"],
      ["CFRP plate thickness", "1.2 / 1.4 / 2.0 / 3.0 / 5.0 mm"],
      ["CFRP plate width", "50 / 80 / 100 / 120 / 150 mm or custom"],
      ["Resin", "Primer / saturant / plate adhesive by project"],
    ],
    selectionGuide: [
      "Confirm the structure type and main load direction.",
      "Select UD fabric when surface bonding over an area is required.",
      "Select CFRP plate when high axial capacity in a narrow strip is required.",
      "Ask a qualified engineer to approve structural design and site suitability.",
    ],
    rfqDetails: [
      "Project type",
      "Structure type: concrete / steel / masonry / bridge / building",
      "Required material: UD fabric / CFRP plate / epoxy resin / system",
      "UD fabric weight",
      "CFRP plate width and thickness",
      "Epoxy resin requirement",
      "Project area",
      "Destination country",
      "Required documents",
    ],
    relatedProducts: ["carbon-fiber-ud-fabric", "structural-strengthening-system"],
    faqs: [
      {
        question: "Is CFRP strengthening only one material?",
        answer:
          "No. It is normally a system that may include UD fabric, CFRP plate, primer, saturant or structural epoxy adhesive.",
      },
      {
        question: "Can FRP HOME provide structural design?",
        answer:
          "We provide material supply and technical data. Structural design and site approval should be handled by qualified project engineers.",
      },
    ],
  },
  {
    slug: "sports-equipment",
    title: "Carbon Fiber Materials for Sports Equipment",
    description:
      "Carbon fiber prepreg, UD fabric, woven fabric, tubes and laminate sheets for sports equipment components requiring light weight and stiffness.",
    image: "/images/products/3k-surface-carbon-fiber-tube.webp",
    quickAnswer:
      "Sports equipment commonly uses carbon fiber prepreg, UD fabric, woven fabric, tubes and laminate sheets when lightweight stiffness, repeatable flex and visible carbon surfaces are required.",
    why: [
      "UD and prepreg materials allow directional stiffness and controlled laminate schedules.",
      "Woven 3K fabric and 3K surface tubes provide visible carbon appearance.",
      "Carbon tubes and sheets can be customized for poles, frames, boards, handles and accessories.",
    ],
    recommendedMaterials: [
      { name: "Prepreg Carbon Fiber Materials", href: "/products/prepreg-carbon-fiber-materials", note: "Controlled resin content and repeatable laminates." },
      { name: "UD Carbon Fiber Fabric", href: "/products/carbon-fiber-ud-fabric", note: "Directional stiffness and layup control." },
      { name: "Woven Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric", note: "Balanced handling and visible carbon layers." },
      { name: "3K Surface Carbon Fiber Tube", href: "/products/3k-surface-carbon-fiber-tube", note: "Visible lightweight tube structures." },
      { name: "3K Carbon Fiber Laminate Sheet", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Flat parts, brackets and accessories." },
    ],
    commonSpecifications: [
      ["Fabric", "3K twill, plain, UD or spread tow"],
      ["Prepreg", "Woven or UD prepreg by layup requirement"],
      ["Tube", "OD / ID / wall thickness / length by drawing"],
      ["Sheet", "0.5-10 mm typical; custom thickness available"],
      ["Finish", "Gloss, matte, painted or sanded"],
    ],
    selectionGuide: [
      "Use UD or prepreg when flex and stiffness direction matter.",
      "Use woven or spread tow fabric when appearance is part of the product.",
      "Use tubes or sheets when standard profiles can reduce tooling work.",
      "Share target weight, stiffness, finish and product category before quotation.",
    ],
    rfqDetails: [
      "Sports equipment type",
      "Material format",
      "Layup or stiffness target",
      "Dimensions",
      "Surface finish",
      "Quantity",
      "Destination country",
      "End use / final application",
    ],
    relatedProducts: [
      "prepreg-carbon-fiber-materials",
      "carbon-fiber-ud-fabric",
      "carbon-fiber-woven-fabric",
      "3k-surface-carbon-fiber-tube",
      "3k-carbon-fiber-laminate-sheet",
    ],
    faqs: [
      {
        question: "Why is prepreg common in sports equipment?",
        answer:
          "Prepreg helps control resin content and ply placement, which supports repeatable flex and laminate quality.",
      },
      {
        question: "Can visible 3K carbon be used on sports products?",
        answer:
          "Yes. 3K twill fabric, 3K laminate sheet and 3K surface tubes are often selected when visible appearance matters.",
      },
    ],
  },
  {
    slug: "decorative-cfrp-panels",
    title: "Carbon Fiber Materials for Decorative CFRP Panels",
    description:
      "Decorative CFRP panel material guide for 3K twill fabric, spread tow carbon fabric, jacquard fabric, hybrid fabric and 3K laminate sheets.",
    image: "/images/products/carbon-fiber-woven-fabric-spread-tow.webp",
    quickAnswer:
      "Decorative CFRP panels use 3K twill carbon fabric, spread tow fabric, jacquard fabric, hybrid fabric and 3K laminate sheets when surface appearance is a primary requirement.",
    why: [
      "Woven 3K fabric gives the classic carbon fiber visual language.",
      "Spread tow creates a flatter, larger checker pattern such as 8x8mm or 10x10mm.",
      "Jacquard and hybrid fabrics provide custom decorative effects for differentiated products.",
    ],
    recommendedMaterials: [
      { name: "Woven Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric", note: "3K plain, twill, satin and jacquard options." },
      { name: "Spread Tow Carbon Fiber Fabric", href: "/products/spread-tow-carbon-fiber-fabric", note: "8x8mm and 10x10mm checker patterns." },
      { name: "Carbon Aramid Hybrid Fabric", href: "/products/carbon-fiber-hybrid-jacquard-fabric", note: "Colored and patterned hybrid surfaces." },
      { name: "3K Carbon Fiber Laminate Sheet", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Ready panel stock for cutting or assembly." },
    ],
    commonSpecifications: [
      ["Pattern", "3K twill / plain / satin / jacquard / spread tow"],
      ["Spread tow", "8x8mm / 10x10mm / custom"],
      ["Areal weight", "160 / 200 / 240 / 245 / 300 g/m2 or custom"],
      ["Panel thickness", "0.5-10 mm typical for laminate sheets"],
      ["Finish", "Gloss, matte or clear surface by order"],
    ],
    selectionGuide: [
      "Choose 3K twill for the classic carbon look.",
      "Choose spread tow when the surface should look flatter and larger-patterned.",
      "Choose jacquard or hybrid when color or custom woven appearance matters.",
      "Confirm gloss, matte, panel thickness and viewing surface before sampling.",
    ],
    rfqDetails: [
      "Panel type",
      "Fabric pattern",
      "Areal weight or panel thickness",
      "Surface finish",
      "Panel size",
      "Quantity",
      "Destination country",
      "End use / final application",
    ],
    relatedProducts: [
      "carbon-fiber-woven-fabric",
      "spread-tow-carbon-fiber-fabric",
      "carbon-fiber-hybrid-jacquard-fabric",
      "3k-carbon-fiber-laminate-sheet",
    ],
    faqs: [
      {
        question: "What is the difference between 3K twill and spread tow appearance?",
        answer:
          "3K twill has the classic small diagonal carbon texture. Spread tow has a flatter, larger checker appearance such as 8x8mm or 10x10mm.",
      },
      {
        question: "Can decorative CFRP panels also be structural?",
        answer:
          "They can contribute to structure, but laminate design should be validated separately because decorative appearance alone does not define mechanical performance.",
      },
    ],
  },
];

export function getApplicationPage(slug: string) {
  return applicationPages.find((page) => page.slug === slug);
}

export function applicationBreadcrumbSchema(page: ApplicationPage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Applications", item: absoluteUrl("/applications") },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: absoluteUrl(`/applications/${page.slug}`),
      },
    ],
  };
}
