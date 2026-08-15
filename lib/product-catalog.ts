export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type ProductCatalogItem = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  heroCopy: string;
  image: string;
  gallery?: string[];
  visualLabel: string;
  position: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  specs: ProductSpec[];
  intro: string[];
  highlights: ProductSpec[];
  applications: string[];
  tds: {
    codePrefix: string;
    revision: string;
    note: string;
    tables: ProductTable[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};

const commonKeywords = [
  "carbon fiber fabric manufacturer",
  "carbon fiber cloth supplier",
  "carbon fiber prepreg China",
  "UD carbon fiber fabric",
  "multiaxial carbon fabric",
  "carbon fiber composite materials",
];

export const productCatalog: ProductCatalogItem[] = [
  {
    slug: "carbon-fiber-ud-fabric",
    name: "UD Carbon Fiber Fabric",
    shortName: "UD Carbon Fabric",
    category: "Directional Reinforcement",
    description:
      "Unidirectional carbon fiber reinforcement with most fibers aligned in one direction for directional strength, stiffness and controlled layup orientation.",
    heroCopy:
      "UD carbon fiber fabric is used when directional strength, stiffness and controlled layup orientation are required for composite laminates, structural reinforcement, repair, pultrusion and strengthening.",
    image: "/images/products/carbon-fiber-ud-fabric.webp",
    gallery: [
      "/images/products/carbon-fiber-ud-fabric.webp",
      "/images/products/carbon-fiber-ud-fabric-factory.webp",
      "/images/products/carbon-fiber-ud-fabric-detail.webp",
      "/images/products/carbon-fiber-ud-fabric-rolls.webp",
    ],
    visualLabel: "Carbon fiber unidirectional fabric roll / UD tape",
    position: "28% 46%",
    seo: {
      title: "300gsm UD Carbon Fiber Fabric Supplier | CFRP Reinforcement",
      description:
        "300gsm UD carbon fiber fabric with a documented 100-500 mm width range for composite laminates and structural strengthening; other constructions by review.",
      keywords: [
        ...commonKeywords,
        "300 g/m² unidirectional carbon fabric",
        "custom UD carbon fiber fabric",
        "carbon fiber reinforcement fabric",
      ],
    },
    specs: [
      { label: "Fiber direction", value: "0 degree unidirectional" },
      { label: "Published references", value: "200 g/m² strengthening supply reference; 300 g/m² product TDS" },
      { label: "Documented width", value: "100-500 mm for the 300 g/m² product" },
      { label: "Other constructions", value: "By project specification and matching document review" },
    ],
    intro: [
      "Carbon Fiber UD Fabric places most of the carbon fiber in one principal direction, allowing engineers to build tensile strength and stiffness exactly where the laminate or reinforcement system needs it.",
      "The material is suitable for CFRP strengthening, pultruded profiles, directional reinforcement strips, fishing rod components, sports goods and other components where directional performance is more important than a balanced woven appearance.",
      "FRP HOME publishes a product TDS for a 300 g/m² UD fabric in 100-500 mm widths and a separately labeled legacy-source supply reference for a 200 g/m² strengthening fabric. Other weights, widths and fiber constructions require matching product records and order confirmation.",
    ],
    highlights: [
      { label: "Published fabric references", value: "200 g/m² strengthening / 300 g/m² general UD" },
      { label: "Published width", value: "100-500 mm" },
      { label: "Resin process", value: "Epoxy wet layup, pultrusion, lamination" },
      { label: "Supply form", value: "Rolls, slit rolls, export cartons or pallets" },
    ],
    applications: [
      "CFRP concrete and masonry reinforcement",
      "Pultruded carbon strips and profiles",
      "Marine and sporting goods laminates",
      "Fishing rod and leisure product components",
      "Beam, spar and stiffener reinforcement",
      "Composite repair and localized strengthening",
    ],
    tds: {
      codePrefix: "FRPH-UD",
      revision: "Rev. 2026-06",
      note:
        "The 300 g/m² row is supported by a product TDS. The 200 g/m² row is a clearly labeled legacy-source supply reference with narrower evidence. Other constructions remain quotation items until matching product data are confirmed.",
      tables: [
        {
          title: "Documented and order-review UD fabric scope",
          columns: ["Product / inquiry", "Areal weight", "Width", "Fiber direction", "Thickness / status", "Order review"],
          rows: [
            ["FRPH-UD200-SUPPLY", "200 g/m²", "By quotation", "0°", "0.111 mm nominal dry-fiber reference", "Confirm current source, grade, sizing, width, roll and batch documents"],
            ["FRPH-UD300", "300 g/m²", "100-500 mm", "0°", "0.167 mm nominal / published TDS", "Confirm grade, sizing, roll and batch documents"],
            ["Other UD construction", "By project specification", "By project specification", "Project-defined", "Matching product data required", "Technical and commercial review"],
          ],
        },
        {
          title: "Order confirmation items",
          columns: ["Item", "Required confirmation", "Control basis"],
          rows: [
            ["Fiber grade and sizing", "Selected supplier grade and downstream resin process", "Supplier TDS / order specification"],
            ["Areal weight and width", "Selected product and required tolerance", "Published TDS / order specification"],
            ["Binder or stitching", "Construction required by the process", "Approved sample / order specification"],
            ["Roll and packing", "Roll length, core and export protection", "Quotation and packing record"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "What is the difference between UD fabric and woven carbon fabric?",
        answer:
          "UD fabric carries most fibers in one direction for directional strength, while woven fabric balances fibers in warp and weft and is often selected for handling or surface appearance.",
      },
      {
        question: "Can the UD fabric be supplied in narrow widths?",
        answer:
          "Yes. Widths from 10 cm to 100 cm can be discussed, especially for construction reinforcement and pultrusion customers.",
      },
    ],
  },
  {
    slug: "carbon-fiber-woven-fabric",
    name: "Woven Carbon Fiber Fabric",
    shortName: "Woven Carbon Fabric",
    category: "Woven Carbon Fabric",
    description:
      "Bidirectional woven carbon fiber reinforcement made by interlacing carbon fiber yarns in warp and weft directions for balanced handling and visible CFRP surfaces.",
    heroCopy:
      "FRP HOME publishes a TDS for 3K 200 g/m² twill carbon fiber fabric. Other tow sizes, weights, weaves and spread-tow patterns are reviewed against the requested construction before quotation.",
    image: "/images/generated/3k-twill-carbon-fiber-gloss.png",
    gallery: [
      "/images/generated/3k-twill-carbon-fiber-gloss.png",
      "/images/products/carbon-fiber-woven-fabric-twill.webp",
      "/images/products/carbon-fiber-woven-fabric.webp",
      "/images/products/carbon-fiber-woven-fabric-spread-tow.webp",
      "/images/products/carbon-fiber-woven-fabric-metal-wire.webp",
    ],
    visualLabel: "3K twill carbon fiber woven fabric",
    position: "18% 50%",
    seo: {
      title: "3K 200gsm Twill Carbon Fiber Fabric Supplier",
      description:
        "Supplier of documented 3K 200gsm twill carbon fiber fabric, with width, roll, resin process and other woven constructions confirmed by order review.",
      keywords: [
        ...commonKeywords,
        "carbon fiber woven fabric",
        "woven carbon fiber cloth 200 g/m²",
        "3K 200gsm twill carbon fiber fabric supplier",
        "3K twill carbon fiber fabric",
        "carbon fiber cloth manufacturer",
      ],
    },
    specs: [
      { label: "Documented product", value: "3K / 200 g/m² / twill" },
      { label: "Documented width", value: "1000-1500 mm" },
      { label: "Documented roll", value: "100 m nominal" },
      { label: "Other constructions", value: "Tow, weave, weight and width by order review" },
    ],
    intro: [
      "Carbon Fiber Woven Fabric is woven with carbon fiber in both warp and weft directions, making it practical for balanced laminates and visible carbon surfaces.",
      "The published 3K 200 g/m² twill construction is intended for visible laminate surfaces and common composite layups. Other tow sizes, weights and constructions require matching product records and order confirmation.",
      "Plain weave, twill weave, satin weave, jacquard patterns and spread tow checker patterns such as 8x8mm and 10x10mm can be reviewed according to target appearance and process.",
      "FRP HOME supplies documented woven carbon cloth and can review custom weight, width, weave, tow size and roll packing requirements for export orders.",
    ],
    highlights: [
      { label: "Published fabric", value: "3K 200 g/m² twill" },
      { label: "Other visual options", value: "By construction and sample review" },
      { label: "Process", value: "Hand layup, vacuum bagging, infusion, prepregging" },
      { label: "Typical buyers", value: "Composite factories, auto tuning, marine and sports brands" },
    ],
    applications: [
      "Automotive carbon panels and accessories",
      "Marine components and covers",
      "Sports equipment laminates",
      "Fishing rod and leisure product components",
      "Industrial composite panels",
      "Decorative carbon fiber surfaces",
    ],
    tds: {
      codePrefix: "FRPH-WC",
      revision: "Rev. 2026-06",
      note:
        "The 3K 200 g/m² twill row below is supported by the published FRP HOME TDS. Other woven constructions remain quotation items until matching product data are confirmed.",
      tables: [
        {
          title: "Documented and order-review woven fabric scope",
          columns: ["Product / inquiry", "Tow", "Areal weight", "Weave", "Width", "Roll / status"],
          rows: [
            ["FRPH-WCF-3K200-T", "3K", "200 g/m²", "Twill", "1000-1500 mm", "100 m nominal / published TDS"],
            ["Other woven fabric", "By requested construction", "By requested construction", "Plain / twill / satin / jacquard", "By quotation", "Matching product data required"],
            ["Spread tow fabric", "By requested construction", "By requested construction", "8x8mm / 10x10mm / custom", "By quotation", "Separate product review"],
          ],
        },
        {
          title: "Tow and pattern selection guide",
          columns: ["Option", "Typical texture", "Common use"],
          rows: [
            ["1K", "Fine texture", "Premium decorative small parts"],
            ["3K", "Classic carbon look", "Automotive, sports, civil UAV and decorative parts"],
            ["6K", "Medium texture", "Sports and industrial composites"],
            ["12K", "Larger tow", "Larger panels and industrial laminates"],
            ["Spread Tow", "Flat checker pattern", "Visible CFRP surfaces"],
            ["Jacquard", "Custom woven appearance", "Decorative CFRP"],
          ],
        },
        {
          title: "TDS control items",
          columns: ["Item", "Typical value", "Remark"],
          rows: [
            ["Areal weight tolerance", "By confirmed specification", "Final tolerance by order"],
            ["Moisture", "Dry reinforcement with protected packing typical", "Store dry and clean"],
            ["Fiber grade", "Standard and high-strength grade options", "Subject to raw material availability"],
            ["Surface quality", "Typical visual target: uniform weave and no visible oil contamination", "Visual inspection"],
            ["Packing", "Roll on tube, PE film, carton or pallet by order", "Export label available"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Which woven carbon fabric is best for visible carbon parts?",
        answer:
          "The documented 3K 200 g/m² twill fabric is a practical starting point for visible carbon parts. Approve the actual weave appearance, fiber grade, sizing, width and resin process before ordering.",
      },
      {
        question: "Can 12K fabric replace multiple layers of 3K fabric?",
        answer:
          "In some structural laminates, heavier 12K fabric can build thickness faster, but the final laminate schedule should be verified by the customer's engineering team.",
      },
    ],
  },
  {
    slug: "spread-tow-carbon-fiber-fabric",
    name: "Spread Tow Carbon Fiber Fabric",
    shortName: "Spread Tow Fabric",
    category: "Woven Carbon Fabric",
    description:
      "Spread tow carbon fiber fabric with flat tow architecture and larger visual pattern options such as 8x8 mm and 10x10 mm for lightweight panels, decorative CFRP surfaces and thin laminates.",
    heroCopy:
      "Spread tow carbon fiber fabric is a flat woven carbon fabric made from spread carbon fiber tow, giving a thin, smooth surface and large checker appearance such as 8x8mm and 10x10mm patterns for visible CFRP parts.",
    image: "/images/products/carbon-fiber-woven-fabric-spread-tow.webp",
    gallery: [
      "/images/products/carbon-fiber-woven-fabric-spread-tow.webp",
      "/images/products/carbon-fiber-woven-fabric-twill.webp",
      "/images/products/carbon-fiber-woven-fabric.webp",
    ],
    visualLabel: "8x8 mm and 10x10 mm spread tow carbon fiber fabric",
    position: "45% 50%",
    seo: {
      title: "Spread Tow Carbon Fiber Fabric | 8x8mm & 10x10mm Checker Pattern",
      description:
        "Spread tow carbon fiber fabric supplier for 8x8mm and 10x10mm checker pattern, 12K and 24K tow, visible CFRP parts and decorative carbon fiber panels.",
      keywords: [
        ...commonKeywords,
        "spread tow carbon fiber fabric",
        "8x8mm spread tow carbon fabric",
        "10x10mm spread tow carbon fabric",
        "spread tow woven carbon fabric",
      ],
    },
    specs: [
      { label: "Pattern size", value: "8x8 mm / 10x10 mm; custom by review" },
      { label: "Tow size", value: "12K / 24K; custom by specification" },
      { label: "Fiber grade", value: "T700 / custom by review" },
      { label: "Areal weight", value: "100 / 160 / 200 / 240 / 300 / 600 g/m2; custom" },
      { label: "Width", value: "1000 / 1270 mm; project width by review" },
    ],
    intro: [
      "Spread Tow Carbon Fiber Fabric is a woven carbon reinforcement made from flattened tow, producing a wider, flatter visual pattern than conventional 3K twill or plain fabric.",
      "It is commonly selected for lightweight panels, appearance parts, thin CFRP skins and decorative surfaces where the visual pattern and laminate thickness both matter.",
      "Because spread tow quality depends on tow spreading, pattern size, areal weight, width and surface expectations, it is listed as its own product page while remaining part of the Woven Carbon Fiber Fabric category.",
    ],
    highlights: [
      { label: "Common patterns", value: "8x8 mm / 10x10 mm" },
      { label: "Category", value: "Woven Carbon Fiber Fabric" },
      { label: "Process", value: "Wet lay-up, vacuum bagging, prepreg conversion by review" },
      { label: "RFQ focus", value: "Pattern size, weight, width, roll length and surface target" },
    ],
    applications: [
      "Decorative CFRP panels",
      "Automotive carbon surfaces",
      "Sports equipment skins",
      "Thin lightweight laminate panels",
      "Marine and industrial appearance parts",
      "Prepreg conversion projects by review",
    ],
    tds: {
      codePrefix: "FRPH-ST",
      revision: "Rev. 2026-06",
      note:
        "Representative spread tow fabric range. Final pattern size, tow size, weight, width and roll packing are confirmed before quotation.",
      tables: [
        {
          title: "Spread tow fabric options",
          columns: ["Grade", "Pattern", "Tow", "Typical areal weight", "Typical width", "Typical roll length"],
          rows: [
            ["FRPH-ST8", "8x8 mm typical", "12K / 24K by order", "200-400 g/m² typical", "1000 / 1270 mm typical", "50 / 100 m typical"],
            ["FRPH-ST10", "10x10 mm typical", "12K / 24K by order", "300-600 g/m² typical", "1000 / 1270 / 1500 mm typical", "50 / 100 m typical"],
            ["Custom spread tow", "By project review", "By order", "By construction review", "By project review", "By project review"],
          ],
        },
        {
          title: "Selection and control items",
          columns: ["Item", "Typical value", "Remark"],
          rows: [
            ["Pattern size", "8x8 mm / 10x10 mm common", "Confirm visual target and tolerance"],
            ["Surface quality", "Uniform tow spreading and clean roll handling target", "Visual inspection"],
            ["Resin compatibility", "Dry reinforcement for epoxy or prepreg conversion by review", "Confirm process before quotation"],
            ["Packing", "Roll on tube, PE film, carton or pallet by order", "Export label available"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Is spread tow carbon fabric separate from woven carbon fiber fabric?",
        answer:
          "Spread tow fabric belongs under Woven Carbon Fiber Fabric because it is woven, but it has its own product page because pattern size and tow spreading need separate RFQ details.",
      },
      {
        question: "What pattern sizes can be requested?",
        answer:
          "8x8 mm and 10x10 mm spread tow patterns can be discussed. Other pattern sizes depend on tow, construction and order review.",
      },
    ],
  },
  {
    slug: "carbon-fiber-multiaxial-ncf-fabric",
    name: "Carbon Fiber Multiaxial NCF Fabric",
    shortName: "Multiaxial NCF",
    category: "Non-Crimp Fabric",
    description:
      "Carbon fiber multiaxial NCF fabric in 300gsm and 600gsm biaxial formats, plus UD, triaxial and quadriaxial constructions for vacuum infusion, RTM and custom composite laminates.",
    heroCopy:
      "FRP HOME supplies carbon multiaxial non-crimp fabric with stitched 0°, 90°, +45° and -45° layers. Start an RFQ with architecture, total gsm, width, stitch, resin process and final application.",
    image: "/images/products/carbon-fiber-multiaxial-ncf-fabric.webp",
    gallery: [
      "/images/products/carbon-fiber-multiaxial-ncf-fabric.webp",
    ],
    visualLabel: "biaxial, triaxial and quadriaxial carbon fabric structure",
    position: "54% 45%",
    seo: {
      title: "Carbon Multiaxial NCF Fabric Supplier | 300/600gsm",
      description:
        "Supplier of documented 300gsm biaxial and 600gsm +45°/-45° carbon NCF, with other architectures, widths and process requirements reviewed for quotation.",
      keywords: [
        ...commonKeywords,
        "carbon fiber multiaxial fabric supplier",
        "carbon multiaxial NCF supplier",
        "multiaxial carbon fiber fabric manufacturer",
        "biaxial carbon fiber fabric supplier",
        "300gsm biaxial carbon fabric",
        "600gsm biaxial carbon fabric",
        "+45 -45 carbon fiber fabric",
        "0 90 carbon fiber biaxial fabric",
        "carbon NCF for vacuum infusion",
        "carbon NCF for RTM",
        "custom width carbon NCF",
        "carbon fiber axial fabric",
        "carbon fiber biaxial fabric",
        "carbon fiber triaxial fabric",
        "carbon fiber quadriaxial fabric",
        "non crimp carbon fabric",
      ],
    },
    specs: [
      { label: "Construction", value: "UD / biaxial / triaxial / quadriaxial" },
      { label: "Fiber angles", value: "0° / 90° / +45° / -45°" },
      { label: "Documented formats", value: "300 / 600 g/m² biaxial NCF" },
      { label: "Documented roll", value: "1270 mm x 50 m; other formats by review" },
    ],
    intro: [
      "Carbon Fiber Multiaxial NCF Fabric, also called carbon NCF, uses stitched layers of unidirectional carbon fibers arranged at different angles. This reduces crimp and allows faster layup than stacking many separate plies.",
      "Common constructions include biaxial ±45°, biaxial 0°/90°, triaxial 0°/+45°/-45° and quadriaxial 0°/+45°/90°/-45°. The correct architecture depends on torsion, bending, impact and laminate symmetry requirements.",
      "FRP HOME can prepare quotation data for standard and custom multiaxial carbon fabrics according to angle, layer weight, stitching yarn, width, roll length and resin process.",
    ],
    highlights: [
      { label: "Fiber architecture", value: "0°, 90° and ±45° combinations" },
      { label: "Layup efficiency", value: "Multiple directions in one stitched reinforcement" },
      { label: "Process", value: "Vacuum infusion, RTM, prepregging, hand layup" },
      { label: "Applications", value: "Marine, automotive, construction reinforcement, industrial panels and large shells" },
    ],
    applications: [
      "Marine hulls, decks and masts",
      "Automotive structural panels",
      "Sports equipment and industrial composite panels",
      "Large composite shells and covers",
      "Industrial structures with multi-directional loads",
    ],
    tds: {
      codePrefix: "FRPH-MAX",
      revision: "Rev. 2026-06",
      note:
        "Published TDS records support the documented 300 g/m² biaxial and 600 g/m² +45°/-45° entries. Other layer sequences and fiber distributions require matching source data and order review.",
      tables: [
        {
          title: "Documented and order-review NCF formats",
          columns: ["Product / inquiry", "Fiber orientation", "Carbon areal weight", "Width and roll", "Status"],
          rows: [
            ["FRPH-CBX300-X", "+45° / -45°", "300 g/m²", "1270 mm x 50 m", "Published TDS"],
            ["FRPH-CBX300-B", "0° / 90°", "300 g/m²", "1270 mm x 50 m", "Published TDS"],
            ["FRPH-CBX600-45", "+45° / -45°", "600 g/m²", "1270 mm x 50 m", "Published TDS"],
            ["UD / triaxial / quadriaxial / custom", "Project-defined", "By confirmed order", "By confirmed order", "Technical and commercial review"],
          ],
        },
        {
          title: "Technical options",
          columns: ["Item", "Option", "Remark"],
          rows: [
            ["Fiber", "12K documented; alternatives by agreement", "Confirm grade, sizing and batch documents"],
            ["Stitch yarn", "Polyester or compatible stitching", "Selection by resin process"],
            ["Layer weight", "Custom per ply by project review", "Engineering review required"],
            ["Roll length", "50 m documented; alternatives by order", "Depends on construction, weight and width"],
            ["Packing", "Wide roll with PE film and pallet by order", "Export handling required"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "What does quadriaxial carbon fabric mean?",
        answer:
          "Quadriaxial fabric normally combines four fiber directions, such as 0°, +45°, 90° and -45°, stitched into one reinforcement for multi-directional loads.",
      },
      {
        question: "Is multiaxial fabric the same as woven cloth?",
        answer:
          "No. Multiaxial fabric is usually a non-crimp stitched reinforcement, while woven cloth interlaces yarns and has more crimp but easier handling for many cosmetic parts.",
      },
      {
        question: "Do you supply 300gsm and 600gsm biaxial carbon NCF?",
        answer:
          "Yes. FRP HOME publishes verified English TDS documents for 300gsm biaxial formats and a balanced 600gsm +45°/-45° carbon NCF. The final orientation, width, stitch, roll length and order specification must be confirmed before supply.",
      },
      {
        question: "Can carbon multiaxial NCF be used for vacuum infusion or RTM?",
        answer:
          "These are common target processes for stitched carbon NCF, but resin compatibility, permeability, laminate stack, compaction and representative process trials must be reviewed for each project.",
      },
      {
        question: "What information is needed for a custom carbon NCF quotation?",
        answer:
          "Provide the architecture, directions, total and per-layer gsm, width, roll length, stitch requirement, resin process, quantity, destination and final application.",
      },
    ],
  },
  {
    slug: "carbon-fiber-hybrid-jacquard-fabric",
    name: "Carbon Aramid Hybrid Jacquard Fabric",
    shortName: "Hybrid Jacquard",
    category: "Decorative Reinforcement",
    description:
      "Carbon/aramid hybrid cloth, carbon/glass hybrid fabric and jacquard carbon patterns for visual composite parts and selected functional laminates.",
    heroCopy:
      "Hybrid and jacquard fabrics combine carbon fiber with aramid, glass fiber or pattern weaving to create decorative surfaces, impact-resistant skins and differentiated composite products.",
    image: "/images/products/carbon-aramid-hybrid-jacquard-orange.webp",
    gallery: [
      "/images/products/carbon-aramid-hybrid-jacquard-orange.webp",
      "/images/products/carbon-aramid-hybrid-jacquard-orange-close.webp",
      "/images/products/carbon-aramid-hybrid-jacquard-cube.webp",
      "/images/products/carbon-aramid-hybrid-jacquard-diamond.webp",
      "/images/products/carbon-aramid-hybrid-jacquard-herringbone.webp",
      "/images/products/carbon-aramid-hybrid-jacquard-star.webp",
    ],
    visualLabel: "orange carbon aramid hybrid jacquard fabric roll",
    position: "center",
    seo: {
      title: "Carbon Aramid Hybrid Jacquard Fabric Supplier",
      description:
        "Carbon aramid hybrid jacquard fabric, carbon glass hybrid cloth and decorative carbon fiber fabric for composite surfaces and custom laminate designs.",
      keywords: [
        ...commonKeywords,
        "carbon aramid hybrid fabric",
        "carbon aramid hybrid fabric supplier",
        "jacquard carbon fiber fabric",
        "decorative carbon fiber cloth",
      ],
    },
    specs: [
      { label: "Hybrid type", value: "Carbon/aramid, carbon/glass, jacquard carbon" },
      { label: "Areal weight", value: "160-650 g/m² typical" },
      { label: "Weave", value: "Plain / twill / pattern / jacquard" },
      { label: "Color", value: "Black/yellow, black/red, black/blue and custom" },
    ],
    intro: [
      "Carbon Aramid Hybrid Jacquard Fabric is used where composite parts need a distinctive surface appearance or a combination of properties from different fibers.",
      "Carbon/aramid hybrid fabric can improve impact and abrasion response compared with carbon-only decorative skins, while carbon/glass hybrids may be selected for cost and electrical insulation considerations.",
      "Jacquard carbon fabrics are custom woven patterns for premium visible surfaces. Pattern, width, color and MOQ should be reviewed before sampling.",
    ],
    highlights: [
      { label: "Visual design", value: "Checker, colored hybrid, custom jacquard pattern" },
      { label: "Functional options", value: "Impact, abrasion or insulation support by fiber mix" },
      { label: "Custom order", value: "Pattern and color subject to MOQ" },
      { label: "Packing", value: "Rolls with surface protection" },
    ],
    applications: [
      "Automotive interior and exterior trim",
      "Sports goods and consumer products",
      "Marine visible composite panels",
      "Luxury accessories and covers",
      "Hybrid impact skins",
    ],
    tds: {
      codePrefix: "FRPH-HYB",
      revision: "Rev. 2026-06",
      note:
        "Hybrid and jacquard fabrics are custom-oriented products. Trial weaving may be required for new patterns.",
      tables: [
        {
          title: "Product options",
          columns: ["Type", "Fiber combination by order", "Typical weight range", "Typical width", "Indicative feature"],
          rows: [
            ["Carbon/aramid hybrid", "Carbon + para-aramid by order", "160-600 g/m² typical", "1000 / 1270 mm typical", "Impact and visual color"],
            ["Carbon/glass hybrid", "Carbon + E-glass by order", "200-650 g/m² typical", "1000 / 1270 mm typical", "Cost and dielectric balance"],
            ["Jacquard carbon fabric", "Carbon or carbon hybrid by order", "200-500 g/m² typical", "By pattern review", "Decorative woven pattern"],
            ["Colored hybrid fabric", "Carbon + colored aramid or glass by order", "200-600 g/m² typical", "By project review", "Brand-specific surface"],
          ],
        },
        {
          title: "Typical TDS items",
          columns: ["Item", "Typical value", "Remark"],
          rows: [
            ["Weave", "Plain, twill, basket or jacquard by order", "Pattern sample required"],
            ["Color", "Yellow, red, blue, orange or custom by order", "Based on yarn selection"],
            ["Roll length", "50-100 m typical", "Depends on pattern and width"],
            ["Surface inspection", "Pattern alignment and color consistency checked as typical visual items", "Visual inspection"],
            ["MOQ", "Project MOQ by review", "Higher for custom jacquard"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Can jacquard carbon fabric be customized with a special pattern?",
        answer:
          "Yes, but pattern design, loom setup and MOQ must be reviewed before quotation and sample weaving.",
      },
      {
        question: "Is carbon/aramid hybrid fabric structural?",
        answer:
          "It can be used in structural laminates, but the laminate design should be verified because carbon and aramid have different stiffness, compression and cutting behavior.",
      },
    ],
  },
  {
    slug: "aramid-fabric",
    name: "Aramid Fabric",
    shortName: "Aramid Cloth",
    category: "Impact Reinforcement",
    description:
      "Para-aramid woven fabric for impact resistance, abrasion resistance and lightweight protective composite laminates.",
    heroCopy:
      "Aramid fabric is supplied in plain, twill and selected hybrid constructions for protective structures, marine products, sports equipment and industrial composite parts.",
    image: "/images/products/aramid-fabric-yellow-woven.webp",
    gallery: [
      "/images/products/aramid-fabric-yellow-woven.webp",
      "/images/products/aramid-fabric-yellow-plain-weave.webp",
      "/images/products/aramid-fabric-yellow-honeycomb-weave.webp",
      "/images/products/aramid-fabric-carbon-aramid-hybrid.webp",
    ],
    visualLabel: "yellow aramid woven fabric surface",
    position: "18% 48%",
    seo: {
      title: "Aramid Fabric for Composite Reinforcement",
      description:
        "Aramid fabric supplier for impact-resistant composites, marine panels, protective laminates and carbon aramid hybrid materials.",
      keywords: [
        ...commonKeywords,
        "aramid fabric supplier",
        "para aramid fabric",
        "carbon aramid hybrid cloth",
        "impact resistant composite fabric",
      ],
    },
    specs: [
      { label: "Fiber", value: "Para-aramid" },
      { label: "Areal weight", value: "170-600 g/m² typical" },
      { label: "Weave", value: "Plain / twill / satin / hybrid" },
      { label: "Width", value: "1000 / 1270 / 1500 mm; custom" },
    ],
    intro: [
      "Aramid Fabric is selected for composite laminates that require impact resistance, abrasion resistance and low weight. It is commonly used with epoxy, vinyl ester and other compatible resin systems.",
      "Compared with carbon fiber, aramid has lower compressive stiffness but better toughness and energy absorption. It is often combined with carbon fiber to balance stiffness and impact performance.",
      "FRP HOME supplies standard aramid cloth and carbon/aramid hybrid options for distributors and composite product manufacturers.",
    ],
    highlights: [
      { label: "Material", value: "Para-aramid woven reinforcement" },
      { label: "Key benefit", value: "Impact and abrasion resistance" },
      { label: "Color", value: "Natural yellow; hybrid colors by design" },
      { label: "Process", value: "Wet layup, vacuum bagging, infusion" },
    ],
    applications: [
      "Impact-resistant sports and marine panels",
      "Marine kayaks, canoes and impact skins",
      "Sporting goods and helmets",
      "Industrial abrasion-resistant laminates",
      "Carbon/aramid hybrid structures",
    ],
    tds: {
      codePrefix: "FRPH-AF",
      revision: "Rev. 2026-06",
      note:
        "Aramid fabric data is indicative. Cutting method, resin wet-out and edge handling should be confirmed through customer trials.",
      tables: [
        {
          title: "Typical aramid fabric range",
          columns: ["Grade", "Typical areal weight", "Weave by order", "Typical width", "Typical roll length", "Indicative use"],
          rows: [
            ["FRPH-AF170P", "170 g/m² typical", "Plain", "1000 / 1270 mm typical", "100 m typical", "Lightweight skins"],
            ["FRPH-AF200T", "200 g/m² typical", "Twill", "1000 / 1270 mm typical", "100 m typical", "Flexible laminates"],
            ["FRPH-AF280P", "280 g/m² typical", "Plain", "1000 / 1270 mm typical", "100 m typical", "General reinforcement"],
            ["FRPH-AF400T", "400 g/m² typical", "Twill", "1000 / 1270 mm typical", "50 / 100 m typical", "Impact laminates"],
            ["FRPH-AF600", "600 g/m² typical", "Plain / twill", "1000 mm typical", "50 m typical", "Heavy reinforcement"],
          ],
        },
        {
          title: "Technical notes",
          columns: ["Item", "Typical value", "Remark"],
          rows: [
            ["Fiber type", "Para-aramid by order", "Brand by order"],
            ["Compatibility", "Epoxy / vinyl ester / selected thermosets, indicative only", "Trial recommended"],
            ["Cutting", "Sharp shears or CNC cutting recommended", "Aramid is difficult to cut"],
            ["Storage", "Dry, clean, protected from UV", "Keep wrapped before use"],
            ["Packing", "Roll on tube, PE film, carton by order", "Export label available"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Why use aramid fabric with carbon fiber?",
        answer:
          "Carbon fiber provides stiffness, while aramid can improve impact and abrasion behavior. Hybrid layups are common where both properties matter.",
      },
      {
        question: "Can aramid fabric be supplied in custom colors?",
        answer:
          "Pure para-aramid is normally yellow. Colored effects are usually achieved with hybrid yarns or decorative fabric design.",
      },
    ],
  },
  {
    slug: "structural-strengthening-system",
    name: "Carbon Fiber Structural Strengthening System",
    shortName: "Structural Strengthening System",
    category: "Structural Reinforcement",
    description:
      "System materials including UD carbon fiber fabric, pultruded CFRP plates and structural epoxy resin for concrete, bridge and building reinforcement projects.",
    heroCopy:
      "A carbon fiber structural strengthening system includes UD carbon fiber fabric, pultruded CFRP plates and structural epoxy resin for concrete, bridge and building reinforcement projects.",
    image: "/images/products/pultruded-cfrp-plate-stacked-hero.webp",
    gallery: [
      "/images/products/pultruded-cfrp-plate-stacked-hero.webp",
      "/images/products/pultruded-cfrp-plate-stacked-close.webp",
      "/images/products/pultruded-cfrp-plate-edge-detail.webp",
      "/images/products/pultruded-cfrp-plate-surface-detail.webp",
    ],
    visualLabel: "Pultruded carbon fiber plate strips for structural reinforcement",
    position: "50% 46%",
    seo: {
      title: "CFRP Strengthening System | UD Fabric & Plate",
      description:
        "CFRP strengthening system supplier with documented 200gsm and 300gsm UD fabric references, pultruded plates and epoxy review for civil reinforcement.",
      keywords: [
        ...commonKeywords,
        "pultruded carbon fiber plate",
        "CFRP plate for structural reinforcement",
        "carbon fiber plate reinforcement",
        "carbon fiber strengthening plate",
      ],
    },
    specs: [
      { label: "UD fabric", value: "200 g/m² supply reference; 300 g/m² product TDS" },
      { label: "CFRP plate", value: "1.2 mm documented; width and length by quotation" },
      { label: "Epoxy resin", value: "Primer / saturant / plate adhesive by project" },
      { label: "Structure type", value: "Concrete / steel / masonry / bridge / building" },
    ],
    intro: [
      "Carbon Fiber Structural Strengthening System is designed for externally bonded reinforcement of concrete, masonry, timber and steel structures when used with compatible structural epoxy materials.",
      "UD carbon fiber fabric provides surface bonding and directional reinforcement for beams, slabs, columns and walls. Pultruded CFRP plate or laminate provides high-strength linear reinforcement for bridges, beams and strengthening projects.",
      "Structural epoxy resin is used as bonding and impregnation resin with carbon fabric or CFRP plate according to the selected strengthening method.",
      "FRP HOME publishes a legacy-source 200 g/m² strengthening-fabric supply reference, a 300 g/m² UD product TDS and source-reviewed data for a 1.2 mm pultruded CFRP strengthening plate. Final material selection, dimensions, substrate evaluation and adhesive compatibility remain subject to quotation and qualified engineering review.",
    ],
    highlights: [
      { label: "Published UD references", value: "200 g/m² and 300 g/m²" },
      { label: "Published plate", value: "1.2 mm pultruded CFRP strengthening plate" },
      { label: "Length", value: "Confirmed in the quotation" },
      { label: "System use", value: "Externally bonded reinforcement with epoxy adhesive" },
    ],
    applications: [
      "Concrete beam and slab strengthening",
      "Bridge and infrastructure reinforcement",
      "Masonry and timber strengthening",
      "Structural repair and load upgrade",
      "Civil engineering distributors and contractors",
    ],
    tds: {
      codePrefix: "FRPH-CP",
      revision: "Rev. 2026-06",
      note:
        "Indicative CFRP plate data. Structural design values and adhesive systems must be approved by qualified engineers.",
      tables: [
        {
          title: "Structural strengthening system materials",
          columns: ["Material", "Role", "Typical use"],
          rows: [
            ["UD Carbon Fiber Fabric for Strengthening", "Surface bonding and directional reinforcement", "Beams, slabs, columns and walls"],
            ["Pultruded CFRP Plate / Laminate", "High-strength laminate reinforcement", "Bridge, beam and structural strengthening"],
            ["Structural Epoxy Resin", "Bonding and impregnation resin", "Used with carbon fabric or CFRP plate"],
          ],
        },
        {
          title: "Structural reinforcement plate scope",
          columns: ["Product", "Thickness", "Width and length", "Surface", "Document status", "Use review"],
          rows: [
            ["FRPH-CFRP-PLATE-1.2", "1.2 mm", "By quotation", "Bonding surface by order", "Published TDS", "Qualified engineering approval required"],
            ["Other pultruded plate", "By project specification", "By quotation", "By adhesive-system review", "Matching source data required", "Qualified engineering approval required"],
          ],
        },
        {
          title: "Qualification items for project review",
          columns: ["Item", "Order confirmation", "Responsibility"],
          rows: [
            ["Fiber grade and volume content", "Selected plate specification and batch documentation", "Supplier document review"],
            ["Tensile properties", "Selected plate TDS or agreed testing plan", "Project engineer approval"],
            ["Dimensions and tolerance", "Approved width, thickness and length specification", "Order and inspection plan"],
            ["Bonding surface", "Surface preparation agreed with the adhesive system", "Project engineer and adhesive supplier"],
            ["Compatible adhesive", "Structural epoxy bonding system by project", "Customer system approval required"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Which thickness is common for CFRP construction strengthening?",
        answer:
          "FRP HOME currently publishes source-reviewed data for a 1.2 mm pultruded CFRP plate. Any alternate thickness, width, length and structural capacity must be confirmed against the selected product document and approved project design.",
      },
      {
        question: "Can FRP HOME provide design responsibility?",
        answer:
          "FRP HOME supplies material data and commercial support. Structural design, substrate checks and final system approval should be handled by qualified engineers.",
      },
    ],
  },
  {
    slug: "prepreg-carbon-fiber-materials",
    name: "Prepreg Carbon Fiber Materials",
    shortName: "Prepreg Materials",
    category: "Pre-Impregnated Materials",
    description:
      "Carbon fiber reinforcements pre-impregnated with resin for composite molding processes requiring controlled resin content and curing conditions.",
    heroCopy:
      "Prepreg carbon fiber materials include woven carbon fiber prepreg, 3K twill prepreg, UD carbon fiber prepreg, spread tow carbon fiber prepreg and custom prepreg for controlled composite molding.",
    image: "/images/generated/prepreg-carbon-fiber-roll-real-ps.webp",
    gallery: [
      "/images/generated/prepreg-carbon-fiber-roll-real-ps.webp",
      "/images/products/carbon-fiber-prepreg-fabric.webp",
      "/images/products/carbon-fiber-prepreg-roll.webp",
      "/images/products/carbon-fiber-prepreg-release-paper.webp",
    ],
    visualLabel: "Carbon fiber prepreg roll with release paper",
    position: "42% 48%",
    seo: {
      title: "Prepreg Carbon Fiber Materials | Woven, UD & Spread Tow Carbon Prepreg",
      description:
        "Prepreg carbon fiber materials supplier for woven, 3K twill, UD, spread tow and custom carbon prepreg with controlled resin content and curing conditions.",
      keywords: [
        ...commonKeywords,
        "carbon fiber prepreg China",
        "woven carbon fiber prepreg",
        "UD carbon fiber prepreg",
        "epoxy carbon prepreg",
      ],
    },
    specs: [
      { label: "Reinforcement", value: "Woven / UD / spread tow / custom" },
      { label: "Fabric type", value: "3K twill / plain / UD / spread tow" },
      { label: "Fiber grade", value: "T300 / T700 / T800 / custom" },
      { label: "Resin system", value: "Epoxy resin system / custom" },
      { label: "Processing", value: "Autoclave / hot press / compression molding / OOA" },
    ],
    intro: [
      "Carbon Fiber Prepreg Fabric combines carbon reinforcement with a controlled epoxy resin matrix before molding. It reduces resin mixing variation and supports cleaner laminate production compared with wet layup.",
      "Woven carbon fiber prepreg is often used for visible parts and balanced laminates. UD carbon fiber prepreg is selected where directional stiffness, weight control and repeatable ply placement are required.",
      "Prepreg orders require confirmation of fiber, resin system, resin content, volatile content, tack, backing paper, storage temperature, shelf life, roll width and packaging method.",
    ],
    highlights: [
      { label: "Prepreg formats", value: "Woven fabric prepreg and UD prepreg" },
      { label: "Resin content", value: "30-42% typical" },
      { label: "Cure options", value: "Low-temp, 120 °C / 130 °C, 180 °C systems" },
      { label: "Storage", value: "Cold storage required; shelf life by resin system" },
    ],
    applications: [
      "Automotive carbon parts",
      "Sports equipment and premium components",
      "Fishing rods, sports goods and industrial housings",
      "Industrial plates, covers and housings",
      "Compression molded composite parts",
    ],
    tds: {
      codePrefix: "FRPH-PP",
      revision: "Rev. 2026-06",
      note:
        "Prepreg values depend strongly on resin system and storage history. Final TDS must be issued for the selected resin and reinforcement.",
      tables: [
        {
          title: "Prepreg product range",
          columns: ["Type", "Fiber format by order", "Typical fiber weight", "Typical resin content", "Indicative cure profile", "Indicative use"],
          rows: [
            ["Woven prepreg 3K", "3K twill/plain by order", "200 / 245 / 300 g/m² typical", "35-42% typical", "80 °C / 120 °C / 130 °C / 180 °C by resin system", "Visible and structural skins"],
            ["Woven prepreg 12K", "12K plain/twill by order", "400 / 600 g/m² typical", "32-40% typical", "120 °C / 130 °C / 180 °C by resin system", "Larger parts and thicker laminates"],
            ["UD prepreg light", "UD carbon by order", "100 / 150 / 200 g/m² typical", "30-38% typical", "120 °C / 130 °C / 180 °C by resin system", "Precision laminate schedules"],
            ["UD prepreg heavy", "UD carbon by order", "300 / 600 g/m² typical", "30-38% typical", "120 °C / 130 °C / 180 °C by resin system", "Directional strips, plates and panels"],
            ["Spread tow prepreg", "Spread tow carbon fabric by order", "100-300 g/m² typical", "By resin system", "By selected resin system", "Thin visible CFRP skins"],
            ["Custom prepreg", "Woven / UD / spread tow / hybrid by review", "By project", "Custom", "By selected resin system", "Project-specific molded parts"],
          ],
        },
        {
          title: "Typical TDS items",
          columns: ["Property", "Typical value", "Remark"],
          rows: [
            ["Resin system", "Epoxy by selected specification", "Toughened, flame-retardant or special systems by project"],
            ["Volatile content", "By resin specification", "Batch TDS required"],
            ["Tack", "Medium tack typical", "Adjusted by resin and storage"],
            ["Shelf life", "By resin system; cold storage required", "Confirm before shipment"],
            ["Backing", "Release paper or PE film by order", "By customer processing"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Do you supply both woven and UD carbon fiber prepreg?",
        answer:
          "Yes. Woven prepreg and UD prepreg can both be discussed. The final product depends on fiber type, resin content and cure system.",
      },
      {
        question: "Does prepreg require refrigerated shipping?",
        answer:
          "Most epoxy prepregs require controlled cold storage and may require insulated or refrigerated transport depending on resin system, distance and season.",
      },
    ],
  },
  {
    slug: "3k-carbon-fiber-laminate-sheet",
    name: "3K Carbon Fiber Laminate Sheet",
    shortName: "3K Laminate Sheet",
    category: "Carbon Fiber Laminate Sheet",
    description:
      "3K twill carbon fiber plate and laminate sheet with matte or glossy surfaces, custom thicknesses and CNC cutting for panels, fixtures and drawing-controlled industrial parts.",
    heroCopy:
      "FRP HOME supplies 3K carbon fiber plate and laminate sheet with matte, glossy, sanded or peel-ply finishes. Send the thickness, panel size, tolerance, surface requirement, quantity and CNC drawing for quotation.",
    image: "/images/products/3k-carbon-fiber-laminate-sheet.webp",
    gallery: [
      "/images/products/3k-carbon-fiber-laminate-sheet.webp",
      "/images/products/3k-carbon-fiber-laminate-stack.webp",
      "/images/products/custom-carbon-fiber-cnc-plates-close.webp",
    ],
    visualLabel: "3K carbon fiber laminate sheet and CNC cut plates",
    position: "48% 46%",
    seo: {
      title: "3K Carbon Fiber Plate & Laminate Sheet Supplier | CNC",
      description:
        "Source 3K twill carbon fiber plate with matte or glossy finish, order-specific thickness and panel size, plus CNC cutting to DXF or STEP drawings.",
      keywords: [
        ...commonKeywords,
        "3K carbon fiber plate",
        "3K carbon fiber plate supplier",
        "3K carbon fiber plate manufacturer",
        "custom 3K carbon fiber sheet",
        "3K carbon fiber laminate sheet",
        "3K twill carbon fiber sheet",
        "matte 3K carbon fiber plate",
        "glossy 3K carbon fiber sheet",
        "twill carbon fiber plate",
        "carbon fiber sheet supplier",
        "carbon fiber laminate sheet manufacturer",
        "custom thickness carbon fiber plate",
        "CNC ready carbon fiber sheet",
        "carbon fiber plate CNC cutting",
        "carbon fiber panel cut to drawing",
        "carbon fiber plate for civil UAV frames",
        "RC model carbon fiber sheet",
      ],
    },
    specs: [
      { label: "Surface", value: "3K twill carbon fiber" },
      { label: "Thickness", value: "Order-specific; confirm by drawing and quotation" },
      { label: "Finish", value: "Glossy / matte / peel-ply / sanded" },
      { label: "Size", value: "Panel size or CNC geometry by drawing" },
    ],
    intro: [
      "3K Carbon Fiber Laminate Sheet is a cured carbon composite sheet with a 3K woven surface. It is widely used when buyers need a carbon appearance together with stable panel thickness.",
      "The inner layup can be woven, UD or mixed depending on required stiffness, cost and machining behavior. Thicker sheets can be supplied for CNC-machined parts, civil UAV frames, remote-controlled model parts, tooling and fixtures, and industrial panels.",
      "FRP HOME can reserve the surface finish, thickness, panel size, tolerance, inner layup and packing method according to the customer's part requirement.",
    ],
    highlights: [
      { label: "Standard surface", value: "3K twill carbon fiber" },
      { label: "Thickness", value: "Confirmed for the selected layup and drawing" },
      { label: "Processing", value: "CNC cutting, drilling and edge finishing by request" },
      { label: "Finish", value: "Glossy or matte clear surface" },
    ],
    applications: [
      "Civil UAV frames and remote-controlled model parts",
      "RC model parts and CNC machined plates",
      "Automotive interior trim and covers",
      "Fishing rod and leisure product components",
      "Industrial fixtures and lightweight panels",
      "Sports equipment components",
      "Carbon fiber appearance parts",
    ],
    tds: {
      codePrefix: "FRPH-LP3K",
      revision: "Rev. 2026-06",
      note:
        "Laminate sheet properties vary by layup. Thickness tolerance and flatness are confirmed by panel size and curing process.",
      tables: [
        {
          title: "RFQ-controlled laminate options",
          columns: ["Order item", "Required input", "Surface", "Dimensions", "Finish", "Confirmation"],
          rows: [
            ["Flat laminate sheet", "Target thickness and tolerance", "3K twill face by approved sample", "Panel drawing", "Matte / glossy / sanded / peel-ply", "Approved order specification"],
            ["CNC-cut plate", "DXF / STEP / dimensioned PDF", "Appearance-controlled face marked", "Part geometry and holes", "By drawing and sample", "Machining and inspection review"],
            ["Custom layup", "Load direction and use", "3K woven surface if required", "By drawing", "By order", "Technical feasibility review"],
          ],
        },
        {
          title: "Order confirmation items",
          columns: ["Item", "Order input", "Remark"],
          rows: [
            ["Fiber layup", "3K surface with woven / UD / mixed inner plies", "Confirm by technical review"],
            ["Thickness and tolerance", "Drawing-controlled requirement", "Confirm against the selected layup and process"],
            ["Surface", "Glossy or matte clear resin by order", "Protective film optional"],
            ["Packing", "Flat panel protection, carton or wooden case by order", "Export packing available"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Is the 3K carbon plate fully 3K woven inside?",
        answer:
          "It can be made with woven layers or a mixed layup. For many industrial parts, a 3K surface with optimized inner reinforcement is more practical.",
      },
      {
        question: "Can the plate be CNC machined?",
        answer:
          "Yes. CNC cutting and drilling can be discussed, but tool wear, dust control and edge quality should be considered.",
      },
      {
        question: "Do you supply both matte and glossy 3K carbon fiber plate?",
        answer:
          "Yes. Matte, glossy, sanded and peel-ply surface options can be reviewed. Confirm the appearance-controlled face, approved sample, protective film and packing requirement before quotation.",
      },
      {
        question: "What should I send for a custom CNC carbon fiber plate quote?",
        answer:
          "Send a DXF, STEP or dimensioned PDF with thickness, panel size, tolerance, hole and edge details, 3K surface requirement, finish, quantity, packing and final application.",
      },
      {
        question: "Is carbon fiber sheet different from carbon fiber plate?",
        answer:
          "Buyers often use sheet, plate, panel and laminate for the same commercial family. The controlled thickness, layup, surface, dimensions, tolerance and drawing are more important than the name alone.",
      },
      {
        question: "Can 3K carbon fiber laminate sheet be used for civil UAV or remote-controlled model frames?",
        answer:
          "Yes. Carbon fiber laminate sheets can be reviewed for civil UAV frames, remote-controlled model parts and inspection-equipment panels. Thickness, layup and machining tolerance should be confirmed by the drawing and load requirement.",
      },
    ],
  },
  {
    slug: "3k-surface-carbon-fiber-tube",
    name: "3K Surface Carbon Fiber Tube",
    shortName: "3K Carbon Tube",
    category: "Roll-Wrapped Tube",
    description:
      "3K twill surface carbon fiber tubes for visible lightweight structures, sporting goods, commercial drone components, inspection equipment, automation parts and custom composite assemblies.",
    heroCopy:
      "3K surface carbon fiber tubes combine a premium woven carbon appearance with roll-wrapped laminate options for stiffness, weight and visual requirements.",
    image: "/images/products/3k-surface-carbon-fiber-tube.webp",
    gallery: [
      "/images/products/3k-surface-carbon-fiber-tube.webp",
      "/images/products/3k-surface-carbon-fiber-tube-detail.webp",
      "/images/products/3k-surface-carbon-fiber-square-tube.webp",
    ],
    visualLabel: "Glossy or matte 3K carbon fiber tube",
    position: "44% 48%",
    seo: {
      title: "3K Surface Carbon Fiber Tube Supplier",
      description:
        "3K twill surface carbon fiber tube supplier offering roll-wrapped tubes with custom diameter, wall thickness, finish and length for sports, commercial drone and industrial equipment parts.",
      keywords: [
        ...commonKeywords,
        "3K carbon fiber tube",
        "roll wrapped carbon fiber tube",
        "twill carbon fiber tube",
        "carbon fiber tube supplier",
        "commercial drone carbon tube",
      ],
    },
    specs: [
      { label: "Surface", value: "3K twill / plain woven carbon" },
      { label: "OD", value: "6-100 mm typical; custom" },
      { label: "Wall thickness", value: "0.5-5.0 mm typical" },
      { label: "Length", value: "500 / 1000 / 2000 / 3000 mm; custom" },
    ],
    intro: [
      "3K Surface Carbon Fiber Tube is normally made by roll wrapping or tube molding, giving the outside a woven 3K carbon appearance for visible structures and consumer-facing products.",
      "The internal layup can be adjusted using woven and UD carbon layers to balance bending stiffness, torsion, hoop strength and cost.",
      "FRP HOME can discuss custom outside diameter, inside diameter, wall thickness, length, finish, tolerance, slotting, drilling and packing for export orders.",
    ],
    highlights: [
      { label: "Appearance", value: "3K twill or plain surface" },
      { label: "Finish", value: "Glossy, matte, sanded or clear coated" },
      { label: "Custom processing", value: "Cutting, drilling, slotting, assembly by review" },
      { label: "Use", value: "Visible lightweight tubes" },
    ],
    applications: [
      "Sports equipment and poles",
      "Commercial drone and inspection equipment components",
      "Fishing rod and leisure product components",
      "Automotive interior and exterior components",
      "Camera rigs, RC model parts and consumer products",
    ],
    tds: {
      codePrefix: "FRPH-RT3K",
      revision: "Rev. 2026-06",
      note:
        "Tube properties depend on layup, diameter and wall thickness. Mechanical values should be confirmed on final dimensions.",
      tables: [
        {
          title: "Tube size range",
          columns: ["Grade", "Typical outside diameter", "Typical wall thickness", "Typical length", "Surface by order", "Finish by order"],
          rows: [
            ["FRPH-RT3K-S", "6-20 mm typical", "0.5-2.0 mm typical", "500-3000 mm typical", "3K twill/plain by order", "Gloss/matte by order"],
            ["FRPH-RT3K-M", "20-50 mm typical", "0.8-3.0 mm typical", "1000-3000 mm typical", "3K twill/plain by order", "Gloss/matte by order"],
            ["FRPH-RT3K-L", "50-100 mm typical", "1.0-5.0 mm typical", "1000-3000 mm typical", "3K twill/plain by order", "Gloss/matte by order"],
            ["Custom tube", "By drawing", "By drawing", "By drawing", "3K or custom", "By order"],
          ],
        },
        {
          title: "Typical TDS items",
          columns: ["Item", "Typical value", "Remark"],
          rows: [
            ["Material", "Carbon fiber epoxy composite by order", "Layup by requirement"],
            ["Surface", "3K woven carbon outer ply typical", "Plain or twill by order"],
            ["Tolerance", "By diameter and process", "Drawing confirmation required"],
            ["Finish", "Gloss, matte, sanded or painted by order", "Custom finish by MOQ"],
            ["Packing", "Sleeve protection, carton or wooden case by order", "Export packing available"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Are 3K surface tubes structural?",
        answer:
          "They can be structural, but the final structural performance depends on the inner layup, wall thickness, diameter and load direction.",
      },
      {
        question: "Can the tube surface be glossy?",
        answer:
          "Yes. Glossy and matte clear finishes are common for 3K surface tubes.",
      },
      {
        question: "Can 3K carbon tubes be supplied for commercial drone or RC model parts?",
        answer:
          "Yes. Custom diameter, wall thickness, length, surface finish and cutting can be reviewed for commercial drone components, RC model parts, camera rigs and inspection equipment.",
      },
    ],
  },
  {
    slug: "filament-wound-carbon-fiber-tube",
    name: "Filament-Wound Carbon Fiber Tube",
    shortName: "Filament-Wound CFRP Tube",
    category: "Filament-Wound Composite Tube",
    description:
      "Filament-wound carbon fiber tubes made from continuous carbon tow with project-specific hoop, helical and axial reinforcement for torsion, hoop loading and lightweight structural applications.",
    heroCopy:
      "Filament-wound carbon fiber tubes use controlled continuous-fiber winding paths to tailor hoop, helical and axial reinforcement around a mandrel for the required load case.",
    image: "/images/products/filament-wound-carbon-fiber-tube.webp",
    gallery: [
      "/images/products/filament-wound-carbon-fiber-tube.webp",
      "/images/products/filament-wound-carbon-fiber-tube-detail.webp",
    ],
    visualLabel: "Continuous-fiber wound CFRP tube surface and tube range",
    position: "50% 46%",
    seo: {
      title: "Filament-Wound Carbon Fiber Tube | Custom CFRP Tube Supplier",
      description:
        "Filament-wound carbon fiber tube supplier for custom hoop, helical and axial reinforcement, diameter, wall, length and finish based on drawings and load requirements.",
      keywords: [
        ...commonKeywords,
        "filament wound carbon fiber tube",
        "filament winding CFRP tube",
        "custom winding angle carbon tube",
        "continuous carbon fiber tube",
        "carbon fiber composite tube supplier",
      ],
    },
    specs: [
      { label: "Process", value: "Continuous-fiber filament winding" },
      { label: "Fiber architecture", value: "Hoop, helical and axial layers by design review" },
      { label: "Diameter / wall / length", value: "Custom by drawing and tooling review" },
      { label: "Matrix and finish", value: "Resin system and surface finish by application review" },
    ],
    intro: [
      "Filament-Wound Carbon Fiber Tube is produced by winding resin-compatible continuous carbon tow around a mandrel in controlled paths. The winding program can combine circumferential and helical reinforcement, with axial layers added where the load case requires them.",
      "Compared with pultruded tube, which places most reinforcement along the profile length, filament winding gives engineers more control over hoop and torsional reinforcement. Compared with a decorative 3K roll-wrapped tube, the primary design focus is the continuous-fiber architecture beneath the finished surface.",
      "FRP HOME reviews tube diameter, wall thickness, length, winding architecture, resin system, finish, dimensional tolerance and end machining against the customer's drawing and final application before quotation.",
    ],
    highlights: [
      { label: "Reinforcement", value: "Continuous carbon tow" },
      { label: "Winding paths", value: "Hoop, helical and combined architectures" },
      { label: "Customization", value: "Dimensions and layup by drawing and load review" },
      { label: "Secondary processing", value: "Cutting, drilling, bonding and end features by review" },
    ],
    applications: [
      "Industrial rollers and rotating shafts",
      "Automation beams and lightweight machine members",
      "Robotic and inspection equipment structures",
      "Marine and sporting equipment shafts",
      "Instrument housings and composite cylinders",
      "Custom torsion- or hoop-loaded CFRP tube assemblies",
    ],
    tds: {
      codePrefix: "FRPH-FWCT",
      revision: "Rev. 2026-07",
      note:
        "Filament-wound tube performance is design-dependent. Diameter, wall thickness, fiber grade, resin, winding architecture, cure, tolerance and qualification requirements are confirmed for each project.",
      tables: [
        {
          title: "Project configuration range",
          columns: ["Design item", "Available configuration", "Quotation requirement"],
          rows: [
            ["Tube geometry", "Round tube or project-specific cylindrical geometry", "Drawing with diameter, wall and length"],
            ["Fiber architecture", "Hoop, helical, axial or combined reinforcement", "Load direction and service condition"],
            ["Material system", "Carbon fiber and compatible resin system by review", "Temperature, environment and process requirements"],
            ["Surface", "As-wound, machined, sanded, coated or cosmetic outer layer by review", "Finish and tolerance requirement"],
            ["Secondary operations", "Cut length, drilling, slots, bonded inserts or end features by review", "Machining drawing and assembly information"],
          ],
        },
        {
          title: "RFQ and engineering review",
          columns: ["Required information", "Why it matters", "Confirmation"],
          rows: [
            ["Outside / inside diameter and length", "Defines mandrel, tooling and material usage", "Drawing review"],
            ["Load direction and duty cycle", "Guides hoop, helical and axial reinforcement", "Application review"],
            ["Operating environment", "Guides resin and finish selection", "Project review"],
            ["Tolerance and surface requirement", "Guides finishing and inspection plan", "Drawing review"],
            ["Quantity and delivery schedule", "Guides tooling and production planning", "Commercial review"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "How is a filament-wound carbon fiber tube different from a pultruded tube?",
        answer:
          "Pultruded tubes place most continuous reinforcement along the tube length. Filament winding can add controlled hoop and helical reinforcement, making it more suitable when torsion, circumferential loading or combined loading must be considered.",
      },
      {
        question: "Can the winding angle be customized?",
        answer:
          "Yes. Winding paths can be reviewed against the tube geometry, load direction, tooling and manufacturing limits. The final architecture is confirmed during engineering review rather than selected from a generic fixed angle.",
      },
      {
        question: "What information is needed for a filament-wound tube quotation?",
        answer:
          "Please provide a drawing, diameter, wall thickness, length, load direction, operating environment, tolerance, surface requirement, quantity and final application. Qualification or testing requirements should also be identified before production.",
      },
    ],
  },
  {
    slug: "pultruded-carbon-fiber-tube",
    name: "Pultruded Carbon Fiber Tube",
    shortName: "Pultruded Tube",
    category: "Pultruded Profile",
    description:
      "Pultruded carbon fiber tubes and profiles with high axial stiffness, stable dimensions and efficient production for industrial, agricultural drone, inspection equipment and commercial applications.",
    heroCopy:
      "Pultruded carbon fiber tubes are continuous profiles with fibers aligned mainly along the tube length, suitable for lightweight beams, supports and industrial assemblies.",
    image: "/images/products/pultruded-carbon-fiber-tube.webp",
    gallery: [
      "/images/products/pultruded-carbon-fiber-tube.webp",
      "/images/products/pultruded-carbon-fiber-tube-range.webp",
    ],
    visualLabel: "Pultruded carbon fiber round or square tube",
    position: "58% 48%",
    seo: {
      title: "Pultruded Carbon Fiber Tube and Profile Supplier",
      description:
        "Pultruded carbon fiber tube supplier offering round, square and custom carbon profiles for industrial lightweight structures, agricultural drone parts and inspection equipment assemblies.",
      keywords: [
        ...commonKeywords,
        "pultruded carbon fiber tube",
        "carbon fiber pultruded profile",
        "carbon tube supplier",
        "lightweight carbon profile",
        "agricultural drone carbon tube",
      ],
    },
    specs: [
      { label: "Process", value: "Continuous pultrusion" },
      { label: "Shape", value: "Round, square, rectangular and custom profiles" },
      { label: "OD / size", value: "3-80 mm typical; custom" },
      { label: "Length", value: "1000-6000 mm or cut-to-length" },
    ],
    intro: [
      "Pultruded Carbon Fiber Tube is produced by pulling continuous carbon reinforcement through resin and a heated die, creating a consistent profile with high lengthwise stiffness.",
      "Compared with 3K roll-wrapped tubes, pultruded tubes are often selected for cost-effective industrial structures where axial stiffness, dimensional consistency and repeat supply are more important than decorative surface.",
      "FRP HOME can discuss round, square and rectangular pultruded profiles with custom size, wall thickness, resin system, finish and cut length.",
    ],
    highlights: [
      { label: "Fiber orientation", value: "Mainly axial carbon fibers" },
      { label: "Production", value: "Continuous pultrusion" },
      { label: "Surface", value: "Black smooth, sanded or painted" },
      { label: "Use", value: "Industrial lightweight beams and supports" },
    ],
    applications: [
      "Automation and machine frames",
      "Telescopic poles and supports",
      "Agricultural drone structural parts",
      "Mapping and inspection equipment supports",
      "Fishing rod and leisure product components",
      "Industrial lightweight structures",
      "Pultruded carbon profile assemblies",
    ],
    tds: {
      codePrefix: "FRPH-PT",
      revision: "Rev. 2026-06",
      note:
        "Pultruded tube data is dimension-dependent. Final mechanical testing can be arranged for approved sizes.",
      tables: [
        {
          title: "Pultruded tube range",
          columns: ["Type", "Typical size range", "Typical wall thickness", "Typical length", "Surface by order", "Indicative use"],
          rows: [
            ["Round tube", "3-80 mm OD typical", "0.5-5.0 mm typical", "1000-6000 mm typical", "Black / painted by order", "Inspection equipment supports"],
            ["Square tube", "5x5-80x80 mm typical", "0.8-5.0 mm typical", "1000-6000 mm typical", "Black / painted by order", "Agricultural drone and equipment frames"],
            ["Rectangular tube", "Custom by drawing", "By drawing", "1000-6000 mm typical or by order", "Black / painted by order", "Industrial profiles"],
            ["Custom profile", "By drawing", "By drawing", "By drawing", "By order", "OEM assemblies"],
          ],
        },
        {
          title: "Typical TDS items",
          columns: ["Item", "Typical value", "Remark"],
          rows: [
            ["Fiber", "PAN-based carbon fiber by selected grade", "Grade by project"],
            ["Resin", "Epoxy or vinyl ester options by application", "By application"],
            ["Fiber volume", "High axial fiber content typical", "By process specification"],
            ["Tolerance", "Drawing-based", "Confirmed before production"],
            ["Packing", "Bundled tubes, end protection, carton or crate by order", "Export packing"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "What is the main advantage of pultruded carbon fiber tube?",
        answer:
          "Pultruded carbon tubes provide efficient axial stiffness and repeatable dimensions for continuous-profile applications.",
      },
      {
        question: "Can pultruded tubes have a 3K surface?",
        answer:
          "A 3K decorative surface is more common in roll-wrapped tubes. Pultruded tubes usually have a smooth black industrial surface unless post-finished.",
      },
    ],
  },
  {
    slug: "milled-carbon-fiber-powder",
    name: "Milled Carbon Fiber Powder",
    shortName: "Carbon Fiber Powder",
    category: "Short Fiber Additive",
    description:
      "Milled carbon fiber powder for conductive fillers, friction materials, coatings, thermoplastic compounds and functional composite modification.",
    heroCopy:
      "Milled carbon fiber powder is supplied in controlled average fiber lengths for resin, rubber, coating, cement and thermoplastic compound reinforcement.",
    image: "/images/products/milled-carbon-fiber-powder-fine.webp",
    gallery: [
      "/images/products/milled-carbon-fiber-powder-fine.webp",
      "/images/products/milled-carbon-fiber-powder-fine-detail.webp",
    ],
    visualLabel: "fine black carbon fiber powder",
    position: "center",
    seo: {
      title: "Milled Carbon Fiber Powder Supplier",
      description:
        "Milled carbon fiber powder supplier offering 30-300 µm typical lengths for conductive filler, resin modification and composite compounds.",
      keywords: [
        ...commonKeywords,
        "carbon fiber powder",
        "milled carbon fiber",
        "milled carbon powder",
        "carbon fiber conductive filler",
        "fine carbon fiber powder",
      ],
    },
    specs: [
      { label: "Form", value: "Milled carbon fiber powder" },
      { label: "Mean length", value: "30-300 µm typical" },
      { label: "Fiber diameter", value: "Approx. 7 µm typical carbon fiber" },
      { label: "Packaging", value: "Bag, carton or fiber drum" },
    ],
    intro: [
      "Milled Carbon Fiber Powder is produced by milling carbon fiber into short fibrous particles. It is used to improve conductivity, wear resistance, stiffness and dimensional stability in selected matrix systems.",
      "Typical applications include thermoplastic compounds, resin modification, coatings, brake and clutch materials, conductive adhesives, rubber and cementitious materials.",
      "Particle length, bulk density, moisture and sizing should be selected according to feeding behavior, dispersion method and final compound performance.",
    ],
    highlights: [
      { label: "Typical length", value: "30 / 80 / 100 / 150 / 200 / 300 µm" },
      { label: "Surface", value: "Unsized or compatible treatment by request" },
      { label: "Function", value: "Conductivity, reinforcement, wear resistance" },
      { label: "Order", value: "Sample and bulk packing by review" },
    ],
    applications: [
      "Conductive plastic compounds",
      "Friction materials and brake systems",
      "Coatings, adhesives and sealants",
      "Rubber and resin modification",
      "Cement and specialty composite fillers",
    ],
    tds: {
      codePrefix: "FRPH-MCF",
      revision: "Rev. 2026-06",
      note:
        "Milled fiber data is indicative. Dispersion and compound performance must be evaluated in the customer's matrix.",
      tables: [
        {
          title: "Milled carbon fiber range",
          columns: ["Grade", "Typical mean length", "Typical diameter", "Sizing by order", "Packaging by order", "Indicative use"],
          rows: [
            ["FRPH-MCF30", "Approx. 30 µm typical", "Approx. 7 µm typical", "Unsized / custom by order", "Bag/carton by order", "Fine conductive filler"],
            ["FRPH-MCF80", "Approx. 80 µm typical", "Approx. 7 µm typical", "Unsized / custom by order", "Bag/carton by order", "Compounds and coatings"],
            ["FRPH-MCF150", "Approx. 150 µm typical", "Approx. 7 µm typical", "Unsized / custom by order", "Bag/carton by order", "Resin and plastic reinforcement"],
            ["FRPH-MCF300", "Approx. 300 µm typical", "Approx. 7 µm typical", "Unsized / custom by order", "Bag/carton by order", "Higher aspect-ratio filler"],
          ],
        },
        {
          title: "Typical TDS items",
          columns: ["Property", "Typical value", "Remark"],
          rows: [
            ["Carbon content", "High carbon fiber content typical", "By raw material"],
            ["Density", "Approx. 1.75–1.85 g/cm³ typical", "Fiber dependent"],
            ["Moisture", "Low moisture typical with sealed packing", "Batch check available"],
            ["Bulk density", "Depends on length and milling", "Confirmed by grade"],
            ["Storage", "Dry, sealed, away from ignition sources", "Dust control required"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Is milled carbon fiber powder the same as carbon black?",
        answer:
          "No. Carbon fiber powder is milled fibrous carbon reinforcement, while carbon black is a particulate carbon filler with different morphology and behavior.",
      },
      {
        question: "How should carbon fiber powder be selected?",
        answer:
          "Selection depends on target conductivity, mechanical reinforcement, feeding behavior, dispersion method and the resin or polymer matrix.",
      },
    ],
  },
  {
    slug: "chopped-carbon-fiber",
    name: "Chopped Carbon Fiber",
    shortName: "Chopped Fiber",
    category: "Short Fiber Reinforcement",
    description:
      "Chopped carbon fiber in 3 mm, 6 mm, 12 mm and custom lengths for thermoplastics, concrete, resin compounds and specialty composites.",
    heroCopy:
      "Chopped carbon fiber is precision-cut from continuous tow and supplied with sizing options for polymers, thermoset resin systems and industrial composite formulations.",
    image: "/images/products/chopped-carbon-fiber-flakes-main.webp",
    gallery: [
      "/images/products/chopped-carbon-fiber-flakes-main.webp",
      "/images/products/chopped-carbon-fiber-flakes-close.webp",
      "/images/products/chopped-carbon-fiber-flakes-detail.webp",
      "/images/products/chopped-carbon-fiber-flakes-texture.webp",
      "/images/products/chopped-carbon-fiber-flakes-pile.webp",
      "/images/products/chopped-carbon-fiber-flakes-studio.webp",
    ],
    visualLabel: "chopped carbon fiber flakes and strands",
    position: "center",
    seo: {
      title: "Chopped Carbon Fiber 3 mm 6 mm 12 mm",
      description:
        "Chopped carbon fiber supplier offering 3 mm, 6 mm, 12 mm and custom lengths with sizing options for thermoplastics, thermosets and cementitious composites.",
      keywords: [
        ...commonKeywords,
        "chopped carbon fiber",
        "3 mm chopped carbon fiber",
        "6 mm chopped carbon fiber",
        "12 mm chopped carbon fiber",
        "short carbon fiber reinforcement",
      ],
    },
    specs: [
      { label: "Cut length", value: "3 / 6 / 12 / 25 mm; custom" },
      { label: "Tow source", value: "3K / 6K / 12K / 24K / 50K options" },
      { label: "Sizing", value: "Epoxy, PA, PP, PEEK or custom compatibility" },
      { label: "Packing", value: "Bags, cartons, drums or supersacks" },
    ],
    intro: [
      "Chopped Carbon Fiber is made by cutting continuous carbon fiber tow into controlled lengths. It can be used as a reinforcement or functional additive in thermoplastic, thermoset, cementitious and friction materials.",
      "Short fiber length and sizing are selected according to compounding method, resin compatibility, feeding behavior and final part properties.",
      "FRP HOME can discuss standard 3 mm, 6 mm and 12 mm chopped carbon fiber, with custom length and sizing by project requirement.",
    ],
    highlights: [
      { label: "Standard length", value: "3 / 6 / 12 / 25 mm" },
      { label: "Sizing", value: "Polymer or resin-compatible options" },
      { label: "Function", value: "Mechanical reinforcement and conductivity" },
      { label: "Supply", value: "Trial packing to bulk export packing" },
    ],
    applications: [
      "Thermoplastic injection molding compounds",
      "Thermoset molding compounds",
      "Conductive and anti-static materials",
      "Cementitious reinforcement",
      "Friction materials and industrial composites",
    ],
    tds: {
      codePrefix: "FRPH-CCF",
      revision: "Rev. 2026-06",
      note:
        "Chopped fiber performance depends on matrix compatibility and compounding conditions. Customer trials are recommended.",
      tables: [
        {
          title: "Chopped fiber range",
          columns: ["Grade", "Typical length", "Typical diameter", "Sizing by order", "Packaging by order", "Indicative use"],
          rows: [
            ["FRPH-CCF3", "3 mm typical", "Approx. 7 µm typical", "EP / PA / PP / custom by order", "Bag/carton by order", "Fine compounds"],
            ["FRPH-CCF6", "6 mm typical", "Approx. 7 µm typical", "EP / PA / PP / custom by order", "Bag/carton by order", "Injection molding and resin compounds"],
            ["FRPH-CCF12", "12 mm typical", "Approx. 7 µm typical", "EP / PA / PP / custom by order", "Bag/carton by order", "Higher reinforcement demand"],
            ["FRPH-CCF25", "25 mm typical", "Approx. 7 µm typical", "Custom by order", "Bag/drum by order", "Specialty composites"],
          ],
        },
        {
          title: "Typical TDS items",
          columns: ["Property", "Typical value", "Remark"],
          rows: [
            ["Density", "Approx. 1.75–1.85 g/cm³ typical", "Fiber dependent"],
            ["Tensile modulus of source fiber", "Standard modulus or intermediate modulus by raw material", "By raw material"],
            ["Moisture", "Low moisture typical with sealed packing", "Batch check available"],
            ["Bulk density", "Depends on length and sizing", "Confirmed by grade"],
            ["Storage", "Dry, sealed, avoid contamination", "Dust control recommended"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Which chopped fiber length is most common?",
        answer:
          "6 mm is a common starting point for many compounds, while 3 mm and 12 mm may be selected for different feeding and reinforcement requirements.",
      },
      {
        question: "Can sizing be customized?",
        answer:
          "Sizing can be discussed for epoxy, PA, PP, PEEK and other matrix systems depending on order quantity and supplier availability.",
      },
    ],
  },
  {
    slug: "custom-carbon-fiber-products",
    name: "Custom Carbon Fiber Products",
    shortName: "Carbon Products",
    category: "Finished Composites",
    description:
      "Custom carbon fiber parts, molded products, CNC plates, civil UAV frames, remote-controlled model parts, tubes, assemblies and composite components according to drawings or samples.",
    heroCopy:
      "Custom carbon fiber products can be developed from plates, tubes, prepreg, wet layup or molded laminates for industrial, automotive, sports and equipment applications.",
    image: "/images/products/custom-carbon-fiber-cnc-panels-hero.webp",
    gallery: [
      "/images/products/custom-carbon-fiber-cnc-panels-hero.webp",
      "/images/products/custom-carbon-fiber-cnc-parts-detail.webp",
      "/images/products/custom-carbon-fiber-cnc-plates-close.webp",
    ],
    visualLabel: "Custom CNC machined carbon fiber parts and composite assemblies",
    position: "60% 52%",
    seo: {
      title: "Custom Carbon Fiber Products and Composite Parts",
      description:
        "Custom carbon fiber products supplier for CNC plates, civil UAV frames, remote-controlled model parts, tubes, molded parts, covers and lightweight composite components.",
      keywords: [
        ...commonKeywords,
        "custom carbon fiber products",
        "carbon fiber composite parts",
        "CNC carbon fiber parts",
        "carbon fiber OEM products",
        "civil UAV carbon fiber parts",
        "carbon fiber frame for civil UAV",
      ],
    },
    specs: [
      { label: "Product type", value: "Plates, tubes, molded parts, assemblies" },
      { label: "Process", value: "CNC machining, layup, molding, bonding" },
      { label: "Surface", value: "3K twill, UD, painted, matte or glossy" },
      { label: "Input", value: "Drawing, sample, target size or application" },
    ],
    intro: [
      "Custom Carbon Fiber Products are developed when standard plates, tubes or fabrics need to become finished components. The project may start from drawings, CAD files, samples or an application brief.",
      "Typical products include carbon plates with CNC holes, civil UAV frames, remote-controlled model parts, tube assemblies, covers, brackets, sports equipment pieces, fixtures and lightweight industrial components.",
      "FRP HOME can review material selection, laminate style, finish, dimensional tolerance, machining, bonding and packing requirements before confirming feasibility and quotation.",
    ],
    highlights: [
      { label: "Inputs accepted", value: "Drawing, sample, CAD file or application description" },
      { label: "Materials", value: "Carbon plate, carbon tube, prepreg, woven fabric, UD fabric" },
      { label: "Processing", value: "CNC cutting, drilling, bonding, finishing" },
      { label: "Commercial path", value: "Sample confirmation before repeat order" },
    ],
    applications: [
      "Automotive and tuning components",
      "Civil UAV and remote-controlled model parts",
      "Sports equipment and accessories",
      "Fishing rod and leisure product components",
      "Industrial machine components",
      "CNC machined composite parts",
    ],
    tds: {
      codePrefix: "FRPH-OEM",
      revision: "Rev. 2026-06",
      note:
        "Custom product data is project-specific. A drawing review and sample confirmation are required before production.",
      tables: [
        {
          title: "Custom product capability",
          columns: ["Product group", "Typical material by review", "Indicative process", "Surface option by order", "Input required"],
          rows: [
            ["CNC plates", "3K plate / UD plate by review", "Cutting, drilling, chamfering", "Matte / glossy by order", "DXF, STEP or drawing"],
            ["Civil UAV and remote-controlled model frames", "3K plate / UD plate by review", "CNC cutting and drilling", "Matte / glossy by order", "DXF, STEP or drawing"],
            ["Tube assemblies", "3K tube / pultruded tube by review", "Cutting, bonding, drilling", "Matte / glossy / painted by order", "Drawing and load condition"],
            ["Molded parts", "Prepreg / wet layup by review", "Compression, vacuum bagging, curing", "3K / painted / clear coat by order", "CAD and surface requirement"],
            ["Composite covers", "Woven carbon / hybrid by review", "Layup and finishing", "Visible carbon or painted by order", "Sample or drawing"],
          ],
        },
        {
          title: "Project Typical TDS items",
          columns: ["Item", "Typical definition", "Remark"],
          rows: [
            ["Material", "Fiber, resin, layup and finish", "Defined in sample approval"],
            ["Dimension tolerance", "Drawing-based", "Confirmed before production"],
            ["Inspection", "Visual, dimension, weight, optional mechanical check", "By project"],
            ["MOQ", "Depends on tooling, process and part size", "Quoted after review"],
            ["Packing", "Part protection, carton or wooden case by order", "Export packing available"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "What files are needed for custom carbon fiber products?",
        answer:
          "A drawing, CAD file, sample photo, dimensions, material preference and target application help confirm feasibility and price.",
      },
      {
        question: "Can you make civil UAV or remote-controlled model carbon fiber parts?",
        answer:
          "Yes. We can review civil UAV frames, remote-controlled model plates, commercial drone components and inspection-equipment parts according to drawings, material requirements and machining tolerance.",
      },
      {
        question: "Can you make production directly without samples?",
        answer:
          "For most custom parts, sample confirmation is recommended before batch production to confirm fit, finish and material behavior.",
      },
    ],
  },
  {
    slug: "carbon-fiber-yarn-and-tow",
    name: "Carbon Fiber Yarn & Tow",
    shortName: "Carbon Fiber Yarn & Tow",
    category: "Carbon Fiber Yarn, Tow & Precursor Materials",
    description:
      "Continuous carbon fiber yarn, carbon fiber tow and carbon fiber roving supplied on bobbins for weaving, braiding, filament winding, pultrusion, prepreg production and chopping.",
    heroCopy:
      "Carbon fiber yarn, also called carbon fiber tow or carbon fiber roving in different industries, is a continuous bundle of carbon filaments supplied on bobbins for weaving, braiding, filament winding, pultrusion, prepreg production and chopping.",
    image: "/images/products/carbon-fiber-yarn-and-tow.jpg",
    gallery: [
      "/images/products/carbon-fiber-yarn-and-tow.jpg",
      "/images/products/carbon-fiber-yarn-and-tow-spools.jpg",
    ],
    visualLabel: "12K / 24K / 50K carbon fiber tow spools",
    position: "71% 42%",
    seo: {
      title: "12K Carbon Fiber Tow Supplier | Yarn & Tow Sourcing",
      description:
        "Carbon fiber yarn and tow sourcing with a published 12K supply reference; other tow sizes, grade, sizing, bobbin format and batch documents are confirmed for quotation.",
      keywords: [
        ...commonKeywords,
        "carbon fiber yarn supplier",
        "12K carbon fiber tow supplier",
        "carbon fiber tow bobbin supplier",
        "Zhongfu Shenying carbon fiber",
        "Jilin Chemical Fiber carbon fiber",
        "Hengshen carbon fiber",
        "Hyosung TANSOME carbon fiber",
      ],
    },
    specs: [
      { label: "Product type", value: "Carbon fiber yarn / carbon fiber tow / carbon fiber roving" },
      { label: "Tow size", value: "1K / 3K / 6K / 12K / 24K / 48K / 50K" },
      { label: "Grade", value: "T300 / T700 / T800 / high modulus / custom" },
      { label: "Brand options", value: "Selected Chinese and international brands by request" },
      { label: "Package", value: "Bobbin / spool / carton / pallet" },
    ],
    intro: [
      "Carbon Fiber Yarn and Tow are base materials for weaving, pultrusion, filament winding, prepregging and many downstream composite processes.",
      "We can supply or source carbon fiber yarn and tow according to customer requirements, including selected Chinese and international brand options. Brand availability depends on stock, batch, order quantity, destination country and compliance review.",
      "We do not imply official authorization unless separately stated. End-use, end-user and destination details may be required before quotation or shipment for selected high-performance carbon fiber materials.",
      "The correct yarn should be selected by tow size, strength grade, modulus, sizing compatibility, package format, spreading behavior, fuzz level and customer processing method.",
    ],
    highlights: [
      { label: "Tow size", value: "Small tow and large tow options" },
      { label: "Brands", value: "Chinese and international brand sourcing" },
      { label: "Use", value: "Weaving, pultrusion, winding, prepregging" },
      { label: "Review", value: "End use, destination and document needs checked before shipment" },
    ],
    applications: [
      "Carbon fabric weaving",
      "UD fabric and prepreg production",
      "Pultruded plates, rods and tubes",
      "Filament-wound fishing rods, tubes and sports components",
      "Chopped fiber and milled fiber conversion",
    ],
    tds: {
      codePrefix: "FRPH-CFY",
      revision: "Rev. 2026-06",
      note:
        "Brand and grade availability changes with allocation and market supply. Final yarn TDS must follow the selected manufacturer's batch documentation.",
      tables: [
        {
          title: "Brand and tow options for inquiry",
          columns: ["Brand / source", "Typical tow options", "Typical grade positioning", "Common use", "Remark"],
          rows: [
            ["Zhongfu Shenying", "3K / 12K / 24K / 48K typical options", "Standard, high-strength and higher performance series", "Weaving, prepreg, fishing rods, sports", "Subject to model availability"],
            ["Jilin Chemical Fiber", "12K / 25K / 35K / 50K typical options", "Standard and large-tow industrial grades", "Wind, pultrusion, industrial composites", "Large-tow supply by batch"],
            ["Jiangsu Hengshen", "3K / 6K / 12K / 24K typical options", "Standard, high-strength and intermediate modulus series", "Industrial, sports, automotive, prepreg", "Confirm grade and sizing"],
            ["Hyosung TANSOME", "12K / 24K typical; selected 6K/other options", "Standard and intermediate modulus options", "Energy, sports, automotive, industrial", "Availability by region"],
            ["Other sources by request", "1K-50K by customer requirement", "By customer requirement", "General composite conversion", "Customer confirmation required"],
          ],
        },
        {
          title: "Grade and document confirmation",
          columns: ["Property", "Required confirmation", "Remark"],
          rows: [
            ["Tow and source grade", "Selected supplier TDS and batch", "12K source grade documented; other sizes by quotation"],
            ["Tensile properties", "Selected supplier TDS / COA", "Do not use a generic family range for qualification"],
            ["Sizing", "Supplier declaration and downstream process", "Confirm resin or polymer compatibility"],
            ["Bobbin format", "Net weight and dimensions by source", "Confirm equipment fit before order"],
            ["Package", "Bobbin/spool in carton or pallet by supplier standard", "Supplier package standard"],
          ],
        },
        {
          title: "Export compliance support",
          columns: ["Item", "Typical support", "Remark"],
          rows: [
            ["License-related experience", "Dual-use item export license application document preparation", "Subject to actual product grade, destination and regulation review"],
            ["Buyer information", "End-use, end-user, application and destination details may be required", "Confirmed before quotation or shipment"],
            ["Supplier documents", "COA, TDS, packing list and batch information where available", "Final documents depend on selected brand and batch"],
            ["Compliance position", "Order reviewed according to export terms and applicable controls", "Approval depends on competent authority review"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Can you supply specific brands such as Zhongfu Shenying or Hyosung?",
        answer:
          "Brand-specific supply can be discussed, but availability depends on grade, tow size, allocation, export terms and batch stock.",
      },
      {
        question: "What information is needed for carbon fiber yarn quotation?",
        answer:
          "Please provide brand preference, grade, tow size, sizing requirement, package requirement, monthly quantity and downstream process.",
      },
      {
        question: "Which carbon fiber tow sizes can you supply?",
        answer:
          "Inquiry options include 1K, 3K, 6K, 12K, 24K, 48K and 50K carbon fiber tow. Final availability, grade, sizing, package and batch documents are confirmed for each quotation.",
      },
      {
        question: "Can you support dual-use item export license documentation?",
        answer:
          "For carbon fiber yarn and tow projects that may involve dual-use item review, we can support the preparation of license application materials, end-use information and related export documents. Approval depends on the actual product, destination, end use and competent authority review.",
      },
    ],
  },
  {
    slug: "fiber-optic-cable-drum",
    name: "Fiber Optic Cable Drum",
    shortName: "Fiber Optic Drum",
    category: "Industrial Fiber Optic Cable Handling",
    description:
      "Internal pay-off fiber optic cable drums for qualified civil and industrial cable-deployment projects, available in short, mid and long series with source-manual length ranges from 1 km to 60 km.",
    heroCopy:
      "Fiber optic cable drums keep a selected length of optical fiber in a protected housing and pay it out from the inside. Select the required length, drum series, integration requirement, quantity, destination and final civil or industrial application for review before quotation.",
    image: "/images/products/fiber-optic-cable-drum.webp",
    gallery: [
      "/images/products/fiber-optic-cable-drum.webp",
      "/images/products/fiber-optic-cable-drum-mid.webp",
      "/images/products/fiber-optic-cable-drum-short.webp",
    ],
    visualLabel: "Long, mid and short fiber optic cable drum series",
    position: "50% 48%",
    seo: {
      title: "Fiber Optic Cable Drum | Internal Pay-Off Spool Supplier",
      description:
        "Fiber optic cable drums with internal cable pay-off for qualified civil and industrial integration projects. Source-manual references include G.657.A2 fiber, 0.25 mm fiber diameter and 1-60 km series options.",
      keywords: [
        "fiber optic cable drum",
        "fiber optic pay-off spool",
        "internal pay-off fiber drum",
        "G.657.A2 fiber drum",
        "custom fiber optic cable drum",
      ],
    },
    specs: [
      { label: "Series", value: "ZY-SI / ZY-MI / ZY-LI" },
      { label: "Source-manual length ranges", value: "1-15 km / 20-40 km / 50-60 km" },
      { label: "Fiber reference", value: "G.657.A2 / 0.25 mm" },
      { label: "Pay-off method", value: "Internal cable pay-off" },
      { label: "Operating temperature reference", value: "-40°C to +60°C" },
    ],
    intro: [
      "Fiber Optic Cable Drums are self-contained housings designed to hold a selected length of fiber and support internal cable pay-off during qualified civil and industrial cable-deployment projects.",
      "The supplied product manuals describe three standard formats: ZY-SI for 1-15 km, ZY-MI for 20-40 km and ZY-LI for 50-60 km. The published source references G.657.A2 fiber, 0.25 mm fiber diameter, at least 55 N fiber tensile force and an ABS housing.",
      "Dimensions, packing, mass, terminal configuration and supporting equipment must be confirmed against the current order specification. The supplied manual versions contain inconsistent packing and mass data, so those values are not published as fixed commitments on this page.",
      "Availability is subject to final end-use, end-user, destination and compliance review. This public page is limited to qualified civil and industrial applications and does not approve restricted or sensitive uses.",
    ],
    highlights: [
      { label: "Standard series", value: "Short / mid / long internal pay-off drums" },
      { label: "Source-manual fiber", value: "G.657.A2 / 0.25 mm" },
      { label: "Source-manual housing", value: "ABS" },
      { label: "Customization", value: "Non-standard length and configuration by technical review" },
    ],
    applications: [
      "Temporary industrial monitoring and inspection installations",
      "Controlled civil cable-deployment trials",
      "Telecommunications and equipment-integration projects",
      "Tunnel, pipeline and enclosed-space inspection set-ups",
      "Qualified fixed or mobile civil infrastructure projects",
      "Custom fiber-length projects subject to technical and compliance review",
    ],
    tds: {
      codePrefix: "FRPH-FOD",
      revision: "Source-manual reference reviewed 2026-08",
      note:
        "This table consolidates the supplied product manuals for RFQ preparation. Selected length, dimensions, packing, mass, terminal configuration, current revision and permitted end use are confirmed in the quotation and order documents.",
      tables: [
        {
          title: "Standard fiber optic cable drum series",
          columns: ["Series", "Model", "Source-manual fiber length", "Overall dimensions", "Fiber reference", "Pay-off method"],
          rows: [
            ["Short", "ZY-SI", "1-15 km", "120 mm × 330 mm", "G.657.A2 / 0.25 mm", "Internal cable pay-off"],
            ["Mid", "ZY-MI", "20-40 km", "130 mm × 470 mm", "G.657.A2 / 0.25 mm", "Internal cable pay-off"],
            ["Long", "ZY-LI", "50-60 km", "170 mm × 470 mm", "G.657.A2 / 0.25 mm", "Internal cable pay-off"],
          ],
        },
        {
          title: "Published reference and order confirmation",
          columns: ["Item", "Source-manual reference", "Order confirmation"],
          rows: [
            ["Fiber tensile force", "At least 55 N", "Confirm current construction and batch documentation"],
            ["Operating temperature", "-40°C to +60°C", "Confirm against the selected configuration and intended environment"],
            ["Housing", "ABS", "Confirm selected model and finish"],
            ["Length options", "1 / 5 / 10 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 km references", "Confirm the requested length and delivery schedule"],
            ["Packing and mass", "Not published as fixed values", "Confirm current export packing and mass in the quotation"],
          ],
        },
        {
          title: "RFQ review items",
          columns: ["Required information", "Why it matters", "Confirmation basis"],
          rows: [
            ["Required fiber length and series", "Determines the drum format and supply scope", "Quotation review"],
            ["Integration or terminal requirement", "Determines the applicable configuration", "Current technical document"],
            ["Civil or industrial application", "Supports end-use and technical review", "Buyer declaration"],
            ["Destination and quantity", "Supports export packing and delivery planning", "Commercial review"],
            ["Required documents", "Identifies document and inspection needs", "Order agreement"],
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Which fiber lengths are available for the standard drum series?",
        answer:
          "The supplied manuals identify short, mid and long series covering 1-15 km, 20-40 km and 50-60 km respectively. Tell us the requested length so that the applicable model and current documentation can be reviewed.",
      },
      {
        question: "Are packing dimensions and product mass fixed?",
        answer:
          "No. The supplied manual versions contain inconsistent packing and mass references. FRP HOME confirms the current product mass, carton, export packing and shipment details in the quotation and order documents.",
      },
      {
        question: "Can the fiber drum be customized?",
        answer:
          "Non-standard length and configuration requests can be reviewed. Please provide the required length, integration requirement, quantity, destination country and civil or industrial end use.",
      },
      {
        question: "What information is needed before quotation?",
        answer:
          "Please provide the requested drum series or fiber length, integration requirement, quantity, destination country, required documents and final civil or industrial application. End-use and end-user review may be required before quotation or shipment.",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}
