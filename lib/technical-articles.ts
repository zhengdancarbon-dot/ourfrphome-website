import { absoluteUrl } from "@/lib/seo";

export type TechnicalArticle = {
  slug: string;
  title: string;
  description: string;
  image: string;
  quickAnswer: string;
  definition: string;
  comparison: {
    columns: string[];
    rows: string[][];
  };
  selectionAdvice: string[];
  applications: string[];
  specifications: string[][];
  recommendedProducts: string[];
  rfqInformation: string[];
  faqs: { question: string; answer: string }[];
};

export const technicalArticles: TechnicalArticle[] = [
  {
    slug: "3k-vs-12k-carbon-fiber-fabric",
    title: "3K vs 12K Carbon Fiber Fabric",
    description:
      "Compare 3K and 12K carbon fiber fabric by appearance, areal weight, laminate build-up, handling and common applications.",
    image: "/images/products/carbon-fiber-woven-fabric-twill.webp",
    quickAnswer:
      "3K carbon fiber fabric is selected for fine visible texture and premium appearance, while 12K fabric uses larger tow and is often selected for larger panels or heavier laminate build-up.",
    definition:
      "The K number describes the approximate number of filaments in each tow. 3K means about 3,000 filaments per tow; 12K means about 12,000 filaments per tow.",
    comparison: {
      columns: ["Item", "3K fabric", "12K fabric"],
      rows: [
        ["Tow size", "Fine 3K tow", "Larger 12K tow"],
        ["Appearance", "Classic small carbon texture", "Larger and more industrial texture"],
        ["Typical weight", "160-245 g/m2 common", "300-600 g/m2 common"],
        ["Use case", "Visible parts, automotive, sports, UAV panels", "Large panels, industrial laminates, faster thickness build"],
        ["RFQ focus", "Weave, surface finish, width, roll length", "Areal weight, panel size, ply count, process"],
      ],
    },
    selectionAdvice: [
      "Choose 3K when the visible carbon surface is a major buying reason.",
      "Choose 12K when larger panels or heavier laminate build-up are more important.",
      "Confirm whether the part is cosmetic, structural or both.",
    ],
    applications: ["Automotive trim", "Sports equipment", "Civil UAV panels", "Industrial panels", "Decorative CFRP"],
    specifications: [
      ["3K common weights", "160 / 200 / 240 / 245 g/m2"],
      ["12K common weights", "300 / 400 / 600 g/m2"],
      ["Weaves", "Plain / twill / satin by order"],
      ["Widths", "1000 / 1270 / 1500 mm or custom"],
    ],
    recommendedProducts: ["carbon-fiber-woven-fabric", "spread-tow-carbon-fiber-fabric", "3k-carbon-fiber-laminate-sheet"],
    rfqInformation: ["Tow size", "Weave type", "Areal weight", "Width", "Roll length", "Surface finish", "Quantity", "End use"],
    faqs: [
      {
        question: "Is 12K carbon fabric stronger than 3K carbon fabric?",
        answer:
          "Not automatically. Strength depends on fiber grade, areal weight, laminate design, resin and process. 12K mainly means larger tow size.",
      },
      {
        question: "Which is better for visible carbon panels?",
        answer:
          "3K twill is the most common visible carbon option. Spread tow may be chosen for a flatter checker look.",
      },
    ],
  },
  {
    slug: "plain-vs-twill-carbon-fiber-fabric",
    title: "Plain vs Twill Carbon Fiber Fabric",
    description:
      "Compare plain weave and twill weave carbon fiber fabric for drape, stability, surface appearance and RFQ selection.",
    image: "/images/products/carbon-fiber-woven-fabric.webp",
    quickAnswer:
      "Plain weave carbon fiber fabric has a stable over-under pattern, while twill weave has a diagonal pattern with better drape and a classic visible carbon appearance.",
    definition:
      "Plain and twill are woven carbon fabric structures. Both are bidirectional reinforcements with fibers arranged in warp and weft directions.",
    comparison: {
      columns: ["Item", "Plain weave", "Twill weave"],
      rows: [
        ["Pattern", "Simple over-under grid", "Diagonal 2x2 or similar pattern"],
        ["Drape", "More stable but less conformable", "Better drape over curves"],
        ["Appearance", "Technical grid texture", "Classic visible carbon look"],
        ["Handling", "Good dimensional stability", "Good surface flow on shaped parts"],
        ["Common use", "Panels, flat laminates, general reinforcement", "Automotive, sports, visible CFRP parts"],
      ],
    },
    selectionAdvice: [
      "Choose plain weave when dimensional stability and flat panels are important.",
      "Choose twill weave when drape and visible surface appearance matter.",
      "Confirm resin process and part shape before selecting weave.",
    ],
    applications: ["Flat panels", "Automotive covers", "Sports equipment", "Marine parts", "Composite skins"],
    specifications: [
      ["Tow size", "1K / 3K / 6K / 12K"],
      ["Areal weight", "90 / 160 / 200 / 240 / 300 / 600 g/m2 or custom"],
      ["Width", "1000 / 1270 / 1500 mm or custom"],
      ["Documents", "TDS / SDS / COA by request"],
    ],
    recommendedProducts: ["carbon-fiber-woven-fabric", "prepreg-carbon-fiber-materials"],
    rfqInformation: ["Tow size", "Plain or twill", "Areal weight", "Width", "Roll length", "Application", "Quantity"],
    faqs: [
      {
        question: "Is twill always better than plain weave?",
        answer:
          "No. Twill often looks better and drapes well, but plain weave can be more stable for flat laminates and general reinforcement.",
      },
      {
        question: "Can both plain and twill be prepreg?",
        answer:
          "Yes. Woven prepreg can be made from plain, twill or other woven reinforcement depending on resin and specification.",
      },
    ],
  },
  {
    slug: "spread-tow-vs-traditional-carbon-fiber-fabric",
    title: "Spread Tow vs Traditional Carbon Fiber Fabric",
    description:
      "Compare spread tow carbon fabric with traditional woven carbon fiber fabric for checker pattern, thickness, surface appearance and process selection.",
    image: "/images/products/carbon-fiber-woven-fabric-spread-tow.webp",
    quickAnswer:
      "Spread tow fabric is made from flattened carbon tow and gives a thin, flat, large-checker surface, while traditional woven fabric uses conventional rounder yarn bundles such as 3K or 12K.",
    definition:
      "Spread tow carbon fabric belongs under woven carbon fiber fabric, but it needs separate RFQ details because pattern size and tow spreading affect appearance and laminate behavior.",
    comparison: {
      columns: ["Item", "Spread tow fabric", "Traditional woven fabric"],
      rows: [
        ["Pattern", "8x8mm / 10x10mm / custom checker", "Plain, twill, satin or standard pattern"],
        ["Tow shape", "Flattened spread tow", "Conventional yarn bundle"],
        ["Surface", "Flat and smooth visible CFRP", "Classic carbon texture"],
        ["Typical use", "Decorative panels, thin skins, premium visible parts", "General laminates, automotive, sports, industrial parts"],
        ["RFQ focus", "Pattern size, tow size, surface target", "Tow size, weave, areal weight, width"],
      ],
    },
    selectionAdvice: [
      "Choose spread tow for 8x8mm or 10x10mm large checker visual surfaces.",
      "Choose traditional woven fabric for standard 3K twill, plain, satin or general laminate use.",
      "Confirm process: wet lay-up, vacuum bagging, compression molding or prepreg conversion.",
    ],
    applications: ["Decorative CFRP panels", "Automotive surfaces", "Sports equipment skins", "Civil UAV covers", "Thin laminate panels"],
    specifications: [
      ["Pattern size", "8x8mm / 10x10mm / custom"],
      ["Tow size", "12K / 24K / custom"],
      ["Areal weight", "100-600 g/m2 typical"],
      ["Width", "1000 / 1270 mm or custom"],
    ],
    recommendedProducts: ["spread-tow-carbon-fiber-fabric", "carbon-fiber-woven-fabric", "prepreg-carbon-fiber-materials"],
    rfqInformation: ["Pattern size", "Tow size", "Fiber grade", "Weave pattern", "Areal weight", "Width", "Surface requirement"],
    faqs: [
      {
        question: "Is spread tow fabric woven?",
        answer:
          "Yes. Spread tow fabric is woven, but it uses spread tow and often has a different checker pattern and surface behavior.",
      },
      {
        question: "What pattern sizes are common?",
        answer:
          "8x8mm and 10x10mm are common spread tow checker patterns. Custom patterns require review.",
      },
    ],
  },
  {
    slug: "ud-carbon-fiber-fabric-vs-woven-carbon-fiber-fabric",
    title: "UD Carbon Fiber Fabric vs Woven Carbon Fiber Fabric",
    description:
      "Compare unidirectional carbon fiber fabric and woven carbon fiber fabric by fiber direction, load path, handling and application.",
    image: "/images/products/carbon-fiber-ud-fabric.webp",
    quickAnswer:
      "UD carbon fiber fabric places most fibers in one direction for directional strength, while woven carbon fiber fabric has warp and weft fibers for balanced handling and visible surface options.",
    definition:
      "UD fabric is unidirectional reinforcement. Woven fabric is bidirectional reinforcement made by interlacing carbon yarns in warp and weft directions.",
    comparison: {
      columns: ["Item", "UD carbon fiber fabric", "Woven carbon fiber fabric"],
      rows: [
        ["Fiber direction", "Mostly 0 degree unidirectional", "Warp and weft directions"],
        ["Best for", "Directional strength and strengthening", "Balanced laminates and visible surfaces"],
        ["Appearance", "Linear or stitched surface", "Plain, twill, satin, jacquard, spread tow"],
        ["RFQ fields", "Areal weight, width, fiber grade, resin process", "Tow size, weave type, pattern, areal weight, width"],
        ["Common use", "Structural reinforcement, pultrusion, directional laminates", "Automotive, sports, decorative and general composite panels"],
      ],
    },
    selectionAdvice: [
      "Choose UD when the main load direction is known and directional reinforcement is needed.",
      "Choose woven fabric when balanced handling, drape or visible carbon appearance is required.",
      "For strengthening projects, confirm whether the application is structural strengthening or composite manufacturing.",
    ],
    applications: ["Structural strengthening", "Pultrusion", "Composite laminates", "Automotive panels", "Sports equipment"],
    specifications: [
      ["UD weight", "200 / 300 / 600 g/m2 or custom"],
      ["UD width", "10 / 20 / 30 / 50 / 100 cm or custom"],
      ["Woven tow", "1K / 3K / 6K / 12K"],
      ["Woven pattern", "Plain / twill / satin / jacquard / spread tow"],
    ],
    recommendedProducts: ["carbon-fiber-ud-fabric", "carbon-fiber-woven-fabric", "carbon-fiber-multiaxial-ncf-fabric"],
    rfqInformation: ["Application", "Main load direction", "Areal weight", "Width", "Fiber grade", "Resin process", "Quantity"],
    faqs: [
      {
        question: "Can UD fabric replace woven fabric?",
        answer:
          "Only when the laminate design requires directional fibers. Woven fabric is usually better for balanced surface handling and visual layers.",
      },
      {
        question: "Is UD fabric suitable for concrete strengthening?",
        answer:
          "Yes, UD carbon fabric is commonly used in structural strengthening systems with compatible epoxy resin and engineering design.",
      },
    ],
  },
  {
    slug: "prepreg-vs-dry-carbon-fiber-fabric",
    title: "Prepreg vs Dry Carbon Fiber Fabric",
    description:
      "Compare prepreg carbon fiber materials and dry carbon fiber fabric by resin content, storage, process control and application.",
    image: "/images/generated/prepreg-carbon-fiber-roll-real-ps.webp",
    quickAnswer:
      "Prepreg carbon fiber already contains controlled resin and requires defined storage and cure conditions, while dry carbon fabric requires resin to be added during wet lay-up, infusion or conversion.",
    definition:
      "Prepreg is resin-impregnated carbon reinforcement. Dry carbon fabric is reinforcement supplied without resin for customer-controlled resin processes.",
    comparison: {
      columns: ["Item", "Prepreg", "Dry carbon fabric"],
      rows: [
        ["Resin", "Already impregnated", "Added by customer process"],
        ["Control", "Controlled resin content and cure cycle", "Controlled by wet layup, infusion or prepreg conversion process"],
        ["Storage", "Cold storage usually required", "Dry clean storage"],
        ["Best for", "Repeatable molded CFRP parts", "Flexible process routes and repair"],
        ["RFQ focus", "Resin system, resin content, cure temperature, shelf life", "Tow size, weave, weight, width, resin compatibility"],
      ],
    },
    selectionAdvice: [
      "Choose prepreg when repeatable resin content and molding control matter.",
      "Choose dry fabric when the customer controls resin, infusion or wet lay-up.",
      "Avoid prepreg if storage control and curing cycle are not confirmed.",
    ],
    applications: ["Autoclave molding", "Hot press", "Compression molding", "Wet lay-up", "Vacuum infusion", "Repair"],
    specifications: [
      ["Prepreg reinforcement", "Woven / UD / spread tow"],
      ["Resin content", "Custom, commonly 30-42% by specification"],
      ["Curing temperature", "According to resin system"],
      ["Dry fabric widths", "1000 / 1270 / 1500 mm or custom"],
    ],
    recommendedProducts: ["prepreg-carbon-fiber-materials", "carbon-fiber-woven-fabric", "carbon-fiber-ud-fabric"],
    rfqInformation: ["Reinforcement type", "Fiber grade", "Resin system", "Resin content", "Curing temperature", "Storage requirement", "Application"],
    faqs: [
      {
        question: "Does prepreg need refrigerated storage?",
        answer:
          "Most epoxy prepregs require controlled cold storage. Exact conditions depend on the resin system and TDS.",
      },
      {
        question: "Is dry fabric cheaper than prepreg?",
        answer:
          "Dry fabric is often simpler to ship and store, but total cost depends on customer process, resin, labor and quality requirements.",
      },
    ],
  },
  {
    slug: "carbon-fiber-yarn-vs-tow-vs-roving",
    title: "Carbon Fiber Yarn vs Tow vs Roving",
    description:
      "Understand carbon fiber yarn, tow and roving terms for weaving, braiding, winding, pultrusion, prepreg and chopping applications.",
    image: "/images/products/carbon-fiber-yarn-and-tow.jpg",
    quickAnswer:
      "Carbon fiber yarn, tow and roving are continuous bundles of carbon filaments supplied on bobbins or spools; the terms are often used by different industries for weaving, winding, pultrusion and conversion.",
    definition:
      "Tow size such as 1K, 3K, 12K, 24K or 50K indicates the filament count range in a continuous carbon fiber bundle.",
    comparison: {
      columns: ["Term", "Common meaning", "Typical use"],
      rows: [
        ["Yarn", "Continuous carbon bundle used by textile buyers", "Weaving, braiding, fabric production"],
        ["Tow", "Continuous carbon filament bundle by tow size", "Pultrusion, winding, prepreg, chopping"],
        ["Roving", "Industrial term often used for continuous fiber package", "Winding, pultrusion, conversion"],
        ["Small tow", "1K / 3K / 6K", "Fine fabric and decorative surfaces"],
        ["Large tow", "12K / 24K / 48K / 50K", "Industrial conversion and higher throughput"],
      ],
    },
    selectionAdvice: [
      "Start with tow size, grade and sizing compatibility.",
      "Confirm compatible process: weaving, winding, pultrusion, prepreg or chopping.",
      "Request brand options carefully; availability depends on stock, batch, order quantity, destination country and compliance review.",
    ],
    applications: ["Weaving", "Braiding", "Filament winding", "Pultrusion", "Prepreg production", "Chopping"],
    specifications: [
      ["Tow size", "1K / 3K / 6K / 12K / 24K / 48K / 50K"],
      ["Grade", "T300 / T700 / T800 / high modulus / custom"],
      ["Sizing", "Epoxy-compatible or custom"],
      ["Package", "Bobbin, spool, carton or pallet"],
    ],
    recommendedProducts: ["carbon-fiber-yarn-and-tow", "carbon-fiber-woven-fabric", "chopped-carbon-fiber"],
    rfqInformation: ["Product type", "Tow size", "Brand requirement", "Grade", "Sizing", "Compatible process", "Bobbin weight", "Quantity", "End use"],
    faqs: [
      {
        question: "Are yarn and tow the same?",
        answer:
          "They can refer to the same continuous carbon filament bundle, but different industries use different terms.",
      },
      {
        question: "Can FRP HOME claim official authorization for brands?",
        answer:
          "No authorization is implied unless separately stated. Brand availability depends on stock, batch, order quantity, destination country and compliance review.",
      },
    ],
  },
  {
    slug: "chopped-carbon-fiber-vs-milled-carbon-fiber-powder",
    title: "Chopped Carbon Fiber vs Milled Carbon Fiber Powder",
    description:
      "Compare chopped carbon fiber and milled carbon fiber powder for plastic reinforcement, resin modification, conductivity and compound selection.",
    image: "/images/products/chopped-carbon-fiber-short.webp",
    quickAnswer:
      "Chopped carbon fiber has controlled cut lengths such as 3mm, 6mm or 12mm, while milled carbon fiber powder is much shorter fibrous powder for filler, conductivity and resin modification.",
    definition:
      "Both are discontinuous carbon fiber materials, but their fiber length, feeding behavior, dispersion and final compound behavior are different.",
    comparison: {
      columns: ["Item", "Chopped carbon fiber", "Milled carbon fiber powder"],
      rows: [
        ["Typical size", "3 / 6 / 12 / 25 mm", "30-300 um typical"],
        ["Main role", "Mechanical reinforcement", "Conductivity, filler behavior, wear and dimensional control"],
        ["Processing", "Compounding, injection molding, resin mixing", "Fine dispersion in resins, coatings, compounds"],
        ["Appearance", "Short strands", "Black fibrous powder"],
        ["RFQ focus", "Fiber length, sizing, matrix", "Powder size/mesh, dispersion, target function"],
      ],
    },
    selectionAdvice: [
      "Use chopped fiber when the compound needs stronger fiber reinforcement.",
      "Use milled powder when fine dispersion, conductivity or filler behavior is more important.",
      "Confirm matrix, processing route and target performance before choosing grade.",
    ],
    applications: ["Nylon modification", "Resin reinforcement", "Conductive compounds", "Friction materials", "Coatings"],
    specifications: [
      ["Chopped length", "3 / 6 / 12 / 25 mm or custom"],
      ["Milled length", "30 / 80 / 150 / 300 um typical"],
      ["Sizing", "Unsized, epoxy, PA, PP or custom"],
      ["Packing", "Bag, carton, drum or pallet"],
    ],
    recommendedProducts: ["chopped-carbon-fiber", "milled-carbon-fiber-powder"],
    rfqInformation: ["Fiber length", "Powder size/mesh", "Sizing type", "Matrix", "Target performance", "Quantity", "Application"],
    faqs: [
      {
        question: "Can chopped fiber provide continuous fiber strength?",
        answer:
          "No. Chopped fiber improves selected compound properties but does not replace continuous fiber laminate strength.",
      },
      {
        question: "Is carbon fiber powder the same as carbon black?",
        answer:
          "No. Milled carbon fiber powder is fibrous carbon reinforcement, while carbon black is a different particulate filler.",
      },
    ],
  },
  {
    slug: "how-to-choose-carbon-fiber-fabric-by-gsm",
    title: "How to Choose Carbon Fiber Fabric by GSM",
    description:
      "Choose carbon fiber fabric by areal weight, tow size, weave, laminate thickness and application requirements.",
    image: "/images/products/carbon-fiber-woven-fabric.webp",
    quickAnswer:
      "Carbon fiber fabric GSM, or areal weight, should be chosen by target laminate thickness, ply count, handling, surface appearance and structural requirement.",
    definition:
      "GSM means grams per square meter. In carbon fabric sourcing it describes fabric areal weight before resin impregnation.",
    comparison: {
      columns: ["GSM range", "Typical use", "Notes"],
      rows: [
        ["90-160 g/m2", "Light cosmetic skins and thin laminates", "Fine handling, lower build thickness"],
        ["200-245 g/m2", "3K visible parts and general CFRP surfaces", "Common automotive and sports range"],
        ["300-400 g/m2", "Medium laminates and larger panels", "Builds thickness faster"],
        ["600 g/m2", "Heavy reinforcement and industrial laminates", "Confirm drape and resin process"],
        ["Custom", "Project-specific reinforcement", "Requires construction review"],
      ],
    },
    selectionAdvice: [
      "Choose lower GSM for thin visible skins or small parts.",
      "Choose 200-245 g/m2 for common 3K visible carbon applications.",
      "Choose heavier fabrics when laminate thickness and productivity matter.",
      "Confirm resin process because heavier fabrics may wet out differently.",
    ],
    applications: ["Automotive panels", "Sports equipment", "Marine covers", "Composite panels", "Decorative CFRP"],
    specifications: [
      ["Tow", "1K / 3K / 6K / 12K"],
      ["Weave", "Plain / twill / satin / jacquard / spread tow"],
      ["Width", "1000 / 1270 / 1500 mm or custom"],
      ["Documents", "TDS / SDS / COA by request"],
    ],
    recommendedProducts: ["carbon-fiber-woven-fabric", "spread-tow-carbon-fiber-fabric", "carbon-fiber-ud-fabric"],
    rfqInformation: ["Areal weight", "Tow size", "Weave", "Width", "Roll length", "Process", "Application", "Quantity"],
    faqs: [
      {
        question: "Does higher GSM always mean stronger?",
        answer:
          "Higher GSM adds more fiber per area, but final strength depends on fiber grade, layup, resin, process and load direction.",
      },
      {
        question: "What GSM is common for 3K twill?",
        answer:
          "200 g/m2, 240 g/m2 and 245 g/m2 are common 3K twill visible fabric ranges.",
      },
    ],
  },
  {
    slug: "roll-wrapped-vs-pultruded-carbon-fiber-tube",
    title: "Roll-Wrapped vs Pultruded Carbon Fiber Tube",
    description:
      "Compare roll-wrapped and pultruded carbon fiber tubes by process, fiber orientation, appearance, cost and application.",
    image: "/images/products/pultruded-carbon-fiber-tube-range.webp",
    quickAnswer:
      "Roll-wrapped carbon fiber tubes are often selected for custom layup and visible 3K surfaces, while pultruded tubes are continuous profiles with efficient axial stiffness and repeatable dimensions.",
    definition:
      "Roll-wrapped tubes are laminated around a mandrel. Pultruded tubes are pulled continuously through resin and a heated die.",
    comparison: {
      columns: ["Item", "Roll-wrapped tube", "Pultruded tube"],
      rows: [
        ["Process", "Layered wrapping and curing", "Continuous pultrusion"],
        ["Appearance", "3K twill or custom visual surface possible", "Smooth black industrial surface typical"],
        ["Fiber orientation", "Custom woven/UD layup", "Mainly axial fibers"],
        ["Best for", "Sports, visible parts, custom stiffness", "Industrial profiles, rods, supports"],
        ["RFQ focus", "OD/ID, wall, layup, surface finish", "Shape, size, resin, tensile/modulus target, length"],
      ],
    },
    selectionAdvice: [
      "Choose roll-wrapped when appearance and custom layup matter.",
      "Choose pultruded when continuous length, axial stiffness and repeatable profile supply matter.",
      "Provide OD, ID, wall thickness, length and surface requirements for either process.",
    ],
    applications: ["Sports poles", "Commercial drone arms", "Automation supports", "Industrial profiles", "Camera rigs"],
    specifications: [
      ["Roll-wrapped OD", "6-100 mm typical"],
      ["Pultruded shape", "Round, square, rectangular or custom profile"],
      ["Wall thickness", "0.5-5.0 mm typical"],
      ["Length", "500-6000 mm or cut-to-length"],
    ],
    recommendedProducts: ["3k-surface-carbon-fiber-tube", "pultruded-carbon-fiber-tube", "custom-carbon-fiber-products"],
    rfqInformation: ["Tube process", "OD / ID / wall thickness", "Length", "Fiber grade", "Surface finish", "Quantity", "Application"],
    faqs: [
      {
        question: "Which tube is better for visible carbon products?",
        answer:
          "Roll-wrapped 3K surface tubes are usually better when the carbon appearance is important.",
      },
      {
        question: "Which tube is more efficient for industrial profiles?",
        answer:
          "Pultruded tubes are often more efficient for continuous profiles where axial stiffness and repeat dimensions matter.",
      },
    ],
  },
  {
    slug: "cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening",
    title: "CFRP Plate vs Carbon Fiber Fabric for Structural Strengthening",
    description:
      "Compare pultruded CFRP plates and UD carbon fiber fabric for concrete, bridge and building strengthening systems.",
    image: "/images/generated/structural-cfrp-plate-real-ps.webp",
    quickAnswer:
      "CFRP plate provides high axial stiffness in strip reinforcement, while UD carbon fiber fabric conforms to surfaces and covers wider strengthening areas with a compatible epoxy system.",
    definition:
      "Both materials can be part of a structural strengthening system. Final project design should be reviewed by qualified engineers.",
    comparison: {
      columns: ["Item", "CFRP plate", "UD carbon fiber fabric"],
      rows: [
        ["Form", "Pultruded laminate strip", "Dry unidirectional fabric roll"],
        ["Use", "High-capacity strip reinforcement", "Surface bonding and area reinforcement"],
        ["Dimensions", "Width and thickness defined", "Areal weight and width defined"],
        ["Resin need", "Plate adhesive system", "Saturating epoxy resin system"],
        ["RFQ focus", "Plate width, thickness, length, surface", "Fabric weight, width, project area, epoxy"],
      ],
    },
    selectionAdvice: [
      "Use CFRP plate when narrow high-stiffness strip reinforcement is required.",
      "Use UD fabric when reinforcement must conform to broader areas or wrapped surfaces.",
      "Confirm substrate, load direction, project area and epoxy requirement before RFQ.",
    ],
    applications: ["Concrete beams", "Bridge strengthening", "Slabs", "Columns", "Masonry or timber reinforcement"],
    specifications: [
      ["CFRP plate", "1.2 / 1.4 / 2.0 / 3.0 / 5.0 mm thickness"],
      ["Plate width", "50 / 80 / 100 / 120 / 150 mm or custom"],
      ["UD fabric", "200 / 300 / 600 g/m2 or custom"],
      ["Fabric width", "10 / 20 / 30 / 50 / 100 cm or custom"],
    ],
    recommendedProducts: ["structural-strengthening-system", "carbon-fiber-ud-fabric"],
    rfqInformation: ["Project type", "Structure type", "Required material", "Fabric weight", "Plate width/thickness", "Epoxy requirement", "Project area"],
    faqs: [
      {
        question: "Can CFRP plate and UD fabric be used together?",
        answer:
          "They may be used in the same project, but the design and epoxy system should be approved by the project engineer.",
      },
      {
        question: "Does FRP HOME provide structural design?",
        answer:
          "FRP HOME supplies material and data support. Structural design responsibility remains with qualified engineers.",
      },
    ],
  },
];

export function getTechnicalArticle(slug: string) {
  return technicalArticles.find((article) => article.slug === slug);
}

export function articleStructuredData(article: TechnicalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.image),
    url: absoluteUrl(`/technical-center/${article.slug}`),
    author: {
      "@type": "Organization",
      name: "Zhejiang FRPHome New Material Co., Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "Zhejiang FRPHome New Material Co., Ltd.",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/brand/frphome-logo-original.jpg"),
      },
    },
  };
}

export function articleBreadcrumbSchema(article: TechnicalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Technical Center", item: absoluteUrl("/technical-center") },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: absoluteUrl(`/technical-center/${article.slug}`),
      },
    ],
  };
}
