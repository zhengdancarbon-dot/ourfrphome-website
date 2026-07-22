import { absoluteUrl } from "@/lib/seo";
import { dualCoreTechnicalArticles } from "@/lib/dual-core-technical-articles";
import { priorityTechnicalArticles } from "@/lib/priority-technical-articles";

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
  publishedAt?: string;
  reviewedAt?: string;
  sources?: { title: string; publisher: string; url: string }[];
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
        ["Published FRP HOME evidence", "3K 200 g/m² twill fabric TDS", "Tow/fabric construction requires matching product data"],
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
      ["Documented 3K fabric", "200 g/m² twill; 1000-1500 mm; 100 m nominal"],
      ["12K woven request", "Confirm construction, weight, width, grade and matching TDS"],
      ["Other weaves", "Confirm against the selected product record and sample"],
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
    sources: [
      {
        title: "3K 200gsm Twill Carbon Fiber Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf",
      },
    ],
  },
  {
    slug: "3k-200gsm-carbon-fiber-fabric-selection-rfq-guide",
    title: "3K 200gsm Carbon Fiber Fabric RFQ Guide",
    description:
      "Select 3K 200gsm twill carbon fiber fabric and prepare an RFQ covering weave, width, roll length, surface target, resin process, quantity and end use.",
    image: "/images/generated/3k-twill-carbon-fiber-gloss.png",
    quickAnswer:
      "3K 200gsm twill carbon fiber fabric is a common bidirectional reinforcement for visible CFRP surfaces and general composite laminates. A complete RFQ should confirm 3K tow, 200 g/m2 areal weight, weave, width, roll length, surface requirement, resin process, quantity and final application; the website description alone is not an order specification.",
    definition:
      "The 3K designation describes an approximate 3,000-filament tow, while 200gsm describes fabric areal weight before resin. Twill describes the woven architecture and diagonal visual pattern. These terms do not define cured laminate thickness, resin content or final part performance, which depend on the complete material and process specification.",
    comparison: {
      columns: ["RFQ point", "FRP HOME reference", "What the buyer should confirm"],
      rows: [
        ["Tow and weight", "3K, 200 g/m2", "Required construction and acceptable tolerance"],
        ["Weave", "Twill TDS available", "Twill or plain according to appearance and handling target"],
        ["Width", "1000-1500 mm reference range", "Exact usable width and cutting plan"],
        ["Roll supply", "Roll-packed dry reinforcement", "Roll length, core, protective packing and labels"],
        ["Surface target", "Visible 3K woven texture", "Cosmetic first ply or general structural reinforcement"],
        ["Process", "Dry carbon reinforcement", "Wet lay-up, vacuum bagging, infusion or prepreg conversion"],
      ],
    },
    selectionAdvice: [
      "Choose the weave from part geometry, handling and visible-surface requirements rather than appearance alone.",
      "Confirm whether 200gsm is required as the exact product construction or only as a laminate-design target.",
      "Match fabric width and roll length to the cutting plan to reduce seams and offcut waste.",
      "Identify the resin system and process so compatibility and representative trial requirements can be reviewed.",
      "Approve the final product specification and batch documents before production use.",
    ],
    applications: [
      "Visible CFRP surface plies",
      "Automotive composite panels",
      "Sports equipment laminates",
      "Industrial composite panels",
      "Marine covers and components",
      "Prepreg conversion",
    ],
    specifications: [
      ["Tow size", "3K"],
      ["Areal weight", "200 g/m2 reference construction"],
      ["Weave", "Twill TDS available; other constructions by order review"],
      ["Width", "1000 / 1270 / 1500 mm reference options"],
      ["Supply form", "Dry fabric roll with export packing by confirmed order"],
      ["Documentation", "Final values follow the approved specification and batch documents"],
    ],
    recommendedProducts: [
      "carbon-fiber-woven-fabric",
      "prepreg-carbon-fiber-materials",
      "3k-carbon-fiber-laminate-sheet",
    ],
    rfqInformation: [
      "3K tow requirement",
      "200gsm construction",
      "Weave type",
      "Width and roll length",
      "Surface requirement",
      "Resin and process",
      "Trial and production quantity",
      "Packing and labels",
      "Destination country",
      "Final application",
    ],
    faqs: [
      {
        question: "Is 3K 200gsm twill carbon fiber fabric suitable for visible parts?",
        answer:
          "It is commonly selected for a recognizable woven carbon surface, but the final appearance also depends on layup, resin, tooling, cure, clear coat and surface finishing.",
      },
      {
        question: "Does 200gsm determine cured laminate thickness?",
        answer:
          "No. It describes dry fabric areal weight. Cured thickness depends on compaction, resin content, ply count, process and laminate design.",
      },
      {
        question: "Can plain weave be supplied instead of twill?",
        answer:
          "Plain and twill constructions can be reviewed, but the exact tow, weight, width, weave and tolerance must be confirmed in the quotation and final specification.",
      },
      {
        question: "What should I send for a 3K carbon fabric quotation?",
        answer:
          "Send tow size, areal weight, weave, width, roll length, resin process, surface requirement, quantity, destination and final application. A sample or reference image can help clarify the visual target.",
      },
    ],
    publishedAt: "2026-07-21",
    reviewedAt: "2026-07-21",
    sources: [
      {
        title: "3K 200gsm Twill Carbon Fiber Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf",
      },
      {
        title: "Woven Carbon Fiber Fabric",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/products/carbon-fiber-woven-fabric",
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
      ["Documented UD fabric", "300 g/m²; 100-500 mm width"],
      ["Other UD construction", "By project specification and matching document review"],
      ["Documented woven fabric", "3K 200 g/m² twill"],
      ["Other woven construction", "By construction, sample and document review"],
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
    slug: "carbon-fiber-tow-size-guide-1k-50k",
    title: "Carbon Fiber Tow Size Guide: 1K to 50K",
    description:
      "Compare 1K, 3K, 6K, 12K, 24K, 48K and 50K carbon fiber tow for weaving, braiding, winding, pultrusion, prepreg conversion and RFQ preparation.",
    image: "/images/products/carbon-fiber-yarn-and-tow-spools.jpg",
    quickAnswer:
      "The K number indicates the approximate filament count in a carbon fiber tow: 1K is about 1,000 filaments, 12K about 12,000 and 50K about 50,000. Tow size affects bundle width, handling, textile appearance and process throughput, but it does not by itself define tensile strength, modulus or final laminate performance.",
    definition:
      "Carbon fiber tow is a continuous bundle of carbon filaments supplied on a bobbin or spool. Buyers should specify tow size together with fiber grade, sizing compatibility, package format and downstream process. A larger tow can improve throughput in some industrial processes, while a smaller tow can support finer textile patterns and more detailed placement; the selected grade and process documentation control the actual properties.",
    comparison: {
      columns: ["Tow size", "Common procurement context", "Confirm before quotation"],
      rows: [
        ["1K", "Fine weaving, braiding and detailed visible textile structures", "Grade, sizing, package and process stability"],
        ["3K", "Woven carbon fabric, braiding and visible 3K surface products", "Weaving behavior, fuzz control, grade and bobbin format"],
        ["6K", "Intermediate textile and conversion requirements", "Actual availability, sizing and downstream equipment"],
        ["12K", "Weaving, pultrusion, filament winding, prepreg and conversion", "Grade, sizing, bobbin weight, batch documents and final use"],
        ["24K", "Industrial conversion, pultrusion, winding and heavier fabric formats", "Spreading behavior, equipment compatibility and package"],
        ["48K / 50K", "Large-tow industrial conversion and higher-throughput processes", "Grade, handling, sizing, creel compatibility and trial quantity"],
      ],
    },
    selectionAdvice: [
      "Start with the downstream process and equipment rather than selecting tow size from K value alone.",
      "Define the required fiber grade separately; tow size does not determine tensile strength or modulus.",
      "Confirm sizing compatibility with the intended resin, weaving, pultrusion, winding or prepreg process.",
      "Provide the required bobbin or spool format, package weight and creel limitations before quotation.",
      "Use a representative trial when changing tow size, grade, sizing or supplier source.",
    ],
    applications: [
      "Carbon fabric weaving",
      "Braiding",
      "Filament winding",
      "Pultrusion",
      "Prepreg conversion",
      "Chopped fiber conversion",
    ],
    specifications: [
      ["Tow size", "1K / 3K / 6K / 12K / 24K / 48K / 50K"],
      ["Grade", "T300 / T700 / T800 / high modulus / custom by confirmed source"],
      ["Sizing", "Epoxy-compatible or process-specific by order review"],
      ["Package", "Bobbin / spool / carton / pallet by confirmed order"],
      ["Documentation", "Final values follow the selected product and batch documentation"],
    ],
    recommendedProducts: [
      "carbon-fiber-yarn-and-tow",
      "carbon-fiber-woven-fabric",
      "carbon-fiber-multiaxial-ncf-fabric",
    ],
    rfqInformation: [
      "Product type",
      "Tow size",
      "Fiber grade",
      "Sizing requirement",
      "Downstream process",
      "Bobbin or spool format",
      "Package weight",
      "Trial and production quantity",
      "Destination country",
      "Final application",
    ],
    faqs: [
      {
        question: "Is 50K carbon fiber tow stronger than 12K tow?",
        answer:
          "Not automatically. The K value describes approximate filament count, not tensile strength or modulus. Compare the selected grade, supplier documentation, sizing and final laminate design.",
      },
      {
        question: "Can I replace 12K tow with 24K or 50K tow?",
        answer:
          "A direct substitution should not be assumed. Bundle width, spreading, handling, equipment settings and resin wet-out can change, so the downstream process and representative trial should be reviewed.",
      },
      {
        question: "Which tow size is commonly used for visible woven carbon fabric?",
        answer:
          "3K is widely selected for a fine visible carbon pattern, while other tow sizes can be woven for different weights and textures. Weave, areal weight, width and surface target should be specified together.",
      },
      {
        question: "What information is needed for a carbon fiber tow quotation?",
        answer:
          "Provide tow size, grade, sizing, downstream process, package format, quantity, destination and final application. Brand or source availability remains subject to stock, batch and compliance review.",
      },
    ],
    publishedAt: "2026-07-21",
    reviewedAt: "2026-07-21",
    sources: [
      {
        title: "High Strength 12K Carbon Fiber Tow Supply TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-High-Strength-12K-Carbon-Fiber-Tow-Supply-TDS.pdf",
      },
      {
        title: "Carbon Fiber Yarn & Tow",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/products/carbon-fiber-yarn-and-tow",
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
        ["3K 200 g/m² documented", "Visible parts and general CFRP surfaces", "Published FRP HOME twill-fabric TDS"],
        ["Other woven GSM", "Project-specific reinforcement", "Requires matching construction data and order review"],
        ["UD 300 g/m² documented", "Directional reinforcement", "Published FRP HOME UD-fabric TDS"],
        ["NCF 300 / 600 g/m² documented", "Multidirectional reinforcement", "Published FRP HOME biaxial NCF TDS files"],
      ],
    },
    selectionAdvice: [
      "Start from the laminate schedule, visible-surface target and required fiber direction.",
      "Use the published 3K 200 g/m² twill record as a documented reference for visible woven applications.",
      "Request matching product data for any other GSM, tow, weave or construction.",
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
          "FRP HOME currently publishes a TDS for 3K 200 g/m² twill fabric. Other weights require a matching product record and order confirmation.",
      },
    ],
    sources: [
      {
        title: "3K 200gsm Twill Carbon Fiber Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf",
      },
      {
        title: "300gsm UD Carbon Fiber Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf",
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
    image: "/images/products/pultruded-cfrp-plate-stacked-hero.webp",
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
      ["Documented CFRP plate", "1.2 mm; width and length by quotation"],
      ["Other CFRP plate", "Matching product data and project approval required"],
      ["Documented UD fabric", "300 g/m²; 100-500 mm width"],
      ["Other UD construction", "By project specification and document review"],
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
    reviewedAt: "2026-07-21",
    sources: [
      {
        title: "300gsm UD Carbon Fiber Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf",
      },
      {
        title: "1.2 mm Pultruded CFRP Strengthening Plate TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-1.2mm-Pultruded-CFRP-Strengthening-Plate-TDS.pdf",
      },
      {
        title: "Carbon Fiber Structural Strengthening System",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/products/structural-strengthening-system",
      },
    ],
  },
  {
    slug: "carbon-fiber-fabric-for-vacuum-infusion",
    title: "Carbon Fiber Fabric for Vacuum Infusion",
    description:
      "Choose woven, UD, multiaxial or spread tow carbon fiber fabric for vacuum infusion and prepare a practical reinforcement RFQ.",
    image: "/images/products/carbon-fiber-woven-fabric.webp",
    quickAnswer:
      "There is no single best carbon fiber fabric for vacuum infusion. Woven fabric supports balanced handling and visible surfaces, multiaxial fabric places fibers efficiently in selected directions, UD fabric serves directional load paths, and spread tow can provide a flatter cosmetic first ply. The complete dry stack, resin system and flow strategy must be validated together before production.",
    definition:
      "Vacuum infusion places dry reinforcement and consumables in a sealed vacuum bag before liquid resin is drawn through the stack. Fabric architecture, areal weight, ply orientation, compacted thickness and any flow medium affect how the resin travels. Material selection therefore starts with the laminate design and process trial, not with weave appearance alone.",
    comparison: {
      columns: ["Reinforcement", "Why buyers consider it", "Infusion review focus"],
      rows: [
        [
          "Woven carbon fabric",
          "Balanced handling, drape options and plain or twill surface appearance",
          "Weave openness, nesting between plies, areal weight and surface target",
        ],
        [
          "Multiaxial / NCF",
          "Directional layers without woven crimp and efficient multi-ply build-up",
          "Stitch construction, fiber directions, stack thickness and resin transport",
        ],
        [
          "UD carbon fabric",
          "High fiber concentration in the principal load direction",
          "Orientation, stabilization method, dense stack behavior and cross-flow plan",
        ],
        [
          "Spread tow fabric",
          "Flat checker appearance and thin cosmetic surface options",
          "First-ply finish, pattern, permeability of the selected construction and print-through",
        ],
        [
          "Hybrid reinforcement stack",
          "Combines surface, load-direction and thickness requirements",
          "Compatibility of every layer, core, consumable and resin flow path",
        ],
      ],
    },
    selectionAdvice: [
      "Define the principal load directions before choosing woven, UD or multiaxial reinforcement.",
      "Separate the cosmetic first-ply requirement from the structural backing plies; they may need different fabric constructions.",
      "Specify areal weight, width, roll length and edge condition so the cutting plan and ply count can be reviewed.",
      "Confirm the exact resin system, working temperature and intended infusion setup with the resin and process owner.",
      "Run a representative panel trial using the intended stack, core and consumables before approving production material.",
    ],
    applications: [
      "Automotive composite panels",
      "Marine and industrial panels",
      "Civil UAV covers and fairings",
      "Composite tooling and enclosures",
      "Sandwich panels with compatible core materials",
    ],
    specifications: [
      ["Fabric construction", "Woven / UD / biaxial / multiaxial NCF / spread tow"],
      ["Woven options", "Plain / twill / satin according to product scope"],
      ["Fiber direction", "0 / 90 / +/-45 degrees or project-defined layup"],
      ["Areal weight", "Confirm by laminate design, ply count and process trial"],
      ["Width and roll length", "Standard or custom according to product and order review"],
      ["Resin compatibility", "Confirm against the selected resin TDS and representative infusion test"],
    ],
    recommendedProducts: [
      "carbon-fiber-woven-fabric",
      "carbon-fiber-multiaxial-ncf-fabric",
      "carbon-fiber-ud-fabric",
      "spread-tow-carbon-fiber-fabric",
      "prepreg-carbon-fiber-materials",
    ],
    rfqInformation: [
      "Part type and dimensions",
      "Laminate schedule or target fiber directions",
      "Fabric construction and areal weight",
      "Width and roll length",
      "Resin system and infusion process",
      "Core and consumable stack",
      "Surface requirement",
      "Trial quantity and production quantity",
      "Destination country and final application",
    ],
    faqs: [
      {
        question: "Which carbon fiber fabric is best for vacuum infusion?",
        answer:
          "The best option depends on load direction, part geometry, surface finish, laminate thickness and the validated resin-flow plan. Woven, UD, multiaxial and spread tow fabrics can all be considered, but the complete stack should be tested.",
      },
      {
        question: "Can 3K twill carbon fiber fabric be vacuum infused?",
        answer:
          "Yes, a suitable 3K twill construction may be used as a visible or structural ply. Its behavior must be checked with the selected resin, backing plies, flow medium and part geometry.",
      },
      {
        question: "Does heavier carbon fabric always infuse faster?",
        answer:
          "No. Areal weight alone does not determine infusion speed. Fabric architecture, compaction, nesting, stack thickness, resin viscosity and the flow strategy all matter.",
      },
      {
        question: "Is prepreg the same as vacuum-infused dry carbon fabric?",
        answer:
          "No. Prepreg already contains a controlled resin system and follows its specified storage and cure process. Vacuum infusion starts with dry reinforcement and introduces liquid resin into the sealed stack.",
      },
      {
        question: "What should be tested before ordering production rolls?",
        answer:
          "Use a representative panel to confirm wet-out, flow time, dry spots, surface finish, laminate thickness and handling with the intended resin, reinforcement stack, core and consumables.",
      },
    ],
    publishedAt: "2026-07-16",
    reviewedAt: "2026-07-17",
    sources: [
      {
        title: "Guide to Composites",
        publisher: "Gurit",
        url: "https://www.gurit.com/wp-content/uploads/2022/12/guide-to-composites-1.pdf",
      },
      {
        title: "Fabrics for Infusion",
        publisher: "Hexcel",
        url: "https://www.hexcel.com/products/fabrics-reinforcements/fabrics-for-infusion/",
      },
    ],
  },
  ...dualCoreTechnicalArticles,
  ...priorityTechnicalArticles,
];

export function getTechnicalArticle(slug: string) {
  return technicalArticles.find((article) => article.slug === slug);
}

export function articleStructuredData(article: TechnicalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/technical-center/${article.slug}`)}#article`,
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.image),
    url: absoluteUrl(`/technical-center/${article.slug}`),
    mainEntityOfPage: absoluteUrl(`/technical-center/${article.slug}`),
    inLanguage: "en",
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    ...(article.reviewedAt ? { dateModified: article.reviewedAt } : {}),
    ...(article.sources ? { citation: article.sources.map((source) => source.url) } : {}),
    author: {
      "@type": "Organization",
      name: "Zhejiang FRPHome New Material Co., Ltd.",
      url: absoluteUrl("/about"),
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
