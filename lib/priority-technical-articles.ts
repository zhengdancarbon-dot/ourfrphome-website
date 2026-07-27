import type { TechnicalArticle } from "@/lib/technical-articles";

const publishedAt = "2026-07-22";

export const priorityTechnicalArticles: TechnicalArticle[] = [
  {
    slug: "300gsm-ud-carbon-fiber-fabric-rfq-guide",
    title: "300gsm UD Carbon Fiber Fabric RFQ Guide",
    description:
      "Prepare a specification-first RFQ for documented 300gsm unidirectional carbon fiber fabric covering direction, width, backing, fiber grade, resin process, quantity and final application.",
    image: "/images/products/carbon-fiber-ud-fabric.webp",
    quickAnswer:
      "FRP HOME product FRPH-UD300 is a 300 g/m² unidirectional carbon reinforcement with a documented 0° direction, 0.167 mm nominal dry-fabric thickness and 100-500 mm available width. A complete RFQ must still confirm selected width, tolerance, secondary yarn or backing, fiber grade, resin system, roll format, quantity, destination and final application. The dry-fabric data is not a cured-laminate design allowable.",
    definition:
      "Unidirectional carbon fiber fabric places most carbon reinforcement in one primary direction. The 300gsm label describes nominal dry-fabric areal weight, while 0° identifies the principal fiber direction. Neither value defines cured laminate thickness, system strength or project suitability without the selected fiber, resin, process, layup and test basis.",
    comparison: {
      columns: ["RFQ field", "Documented FRPH-UD300 reference", "Order confirmation"],
      rows: [
        ["Construction", "Unidirectional carbon fiber fabric; 0° primary direction", "Secondary yarn, backing and handling construction by order"],
        ["Areal weight", "300 g/m² nominal", "Tolerance and test method in the approved specification"],
        ["Dry thickness", "0.167 mm nominal dry-fabric reference", "Do not use as cured laminate thickness or structural design allowable"],
        ["Width", "100-500 mm available-width reference", "Selected usable or slit width, tolerance and roll format"],
        ["Fiber grade", "By confirmed order; T300, T700 or alternate grade may be reviewed", "Exact source grade, sizing and applicable documents"],
        ["System performance", "Mechanical properties are system-dependent", "Resin, cure, laminate design and project test method"],
      ],
    },
    selectionAdvice: [
      "Start with the required load direction and approved laminate or strengthening design; UD reinforcement is not a balanced woven surface.",
      "Use FRPH-UD300 when the documented 300 g/m² construction is the intended reference, then confirm areal-weight tolerance and the applicable revision in the quotation.",
      "Choose the width from the 100-500 mm documented range according to the cutting plan, overlap or strengthening layout, and confirm usable-width tolerance.",
      "State whether secondary yarn, backing or another handling aid is required; these details affect placement and resin wet-out and are not fixed by the 300gsm label.",
      "Confirm exact fiber grade, sizing and resin compatibility. T300 or T700 is an order-review option, not an automatic grade declaration for every roll.",
      "Request a representative trial and the required TDS or batch-document fields before production approval, especially for a new resin, process or structural system.",
    ],
    applications: [
      "CFRP structural strengthening",
      "Directional composite laminates",
      "Pultrusion feed reinforcement",
      "Composite repair",
      "Beam and spar reinforcement",
      "Load-path controlled industrial parts",
    ],
    specifications: [
      ["Product code", "FRPH-UD300"],
      ["Construction", "Unidirectional carbon fiber fabric; secondary yarn and backing by order"],
      ["Principal direction", "0° UD"],
      ["Areal weight", "300 g/m² nominal; tolerance confirmed by order"],
      ["Nominal thickness", "0.167 mm dry-fabric reference, not cured laminate thickness"],
      ["Available width", "100-500 mm; selected slit width confirmed by order"],
      ["Fiber grade", "Exact grade and sizing by confirmed order"],
      ["Mechanical properties", "System-dependent; confirm fiber, resin, cure and test method"],
    ],
    recommendedProducts: ["carbon-fiber-ud-fabric", "structural-strengthening-system"],
    rfqInformation: [
      "FRPH-UD300 reference and required revision",
      "Primary fiber direction and laminate schedule",
      "Areal weight and tolerance",
      "Selected width and width tolerance",
      "Secondary yarn or backing requirement",
      "Exact fiber grade and sizing",
      "Resin system and processing method",
      "Roll length, core and packing",
      "Trial and production quantity",
      "Required TDS, COA or batch fields",
      "Destination country",
      "Final application and design responsibility",
    ],
    faqs: [
      {
        question: "Does 300gsm UD carbon fiber fabric have a cured thickness of 0.167 mm?",
        answer:
          "No. The TDS identifies 0.167 mm as a nominal dry-fabric reference. Cured thickness depends on compaction, resin content, laminate schedule and process.",
      },
      {
        question: "Is every FRPH-UD300 roll made with T700 carbon fiber?",
        answer:
          "No. The current TDS states that fiber grade is confirmed by order and lists T300, T700 or an alternate grade as review options. The exact source grade and sizing must appear in the approved order documents.",
      },
      {
        question: "Can 300gsm UD fabric be used for structural strengthening?",
        answer:
          "It can be considered when the project design specifies a compatible UD fabric and resin system. Material supply information does not replace structural design, substrate assessment, installation procedure or project approval.",
      },
      {
        question: "What width is available for the documented 300gsm UD fabric?",
        answer:
          "The current TDS records a 100-500 mm available-width range. Confirm the selected usable or slit width, tolerance, roll length and packing in the quotation.",
      },
      {
        question: "What should a buyer send for a 300gsm UD fabric quotation?",
        answer:
          "Send the load direction or laminate schedule, 300 g/m² requirement, width, backing or secondary-yarn requirement, fiber grade, sizing, resin process, roll format, quantity, destination and final application.",
      },
    ],
    publishedAt: "2026-07-27",
    reviewedAt: "2026-07-27",
    sources: [
      {
        title: "300gsm UD Carbon Fiber Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf",
      },
      {
        title: "UD Carbon Fiber Fabric",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/products/carbon-fiber-ud-fabric",
      },
    ],
  },
  {
    slug: "carbon-fiber-tow-rfq-checklist",
    title: "Carbon Fiber Tow RFQ Checklist",
    description:
      "Prepare a specification-first RFQ for 1K-50K carbon fiber tow covering grade, sizing, package, process, quantity, destination and final application.",
    image: "/images/products/carbon-fiber-yarn-and-tow-spools.jpg",
    quickAnswer:
      "A complete carbon fiber tow RFQ states the tow size, exact source grade, sizing compatibility, downstream process, bobbin format, trial and production quantity, destination and final application. FRP HOME's published reference covers a 12K, epoxy-sized, untwisted source grade with 800 g/km linear density and a nominal 4 kg bobbin. Other tow sizes and grades require separate source, availability and document confirmation.",
    definition:
      "Carbon fiber tow is a continuous bundle of carbon filaments supplied on a bobbin or spool for weaving, braiding, filament winding, pultrusion, prepreg conversion or chopping. The K value identifies approximate filament count; it does not identify tensile strength, modulus, sizing, twist, source grade or package. Those fields must be confirmed separately.",
    comparison: {
      columns: ["RFQ field", "Example", "Why the supplier needs it"],
      rows: [
        ["Tow size", "12K documented; other K counts by source review", "Defines the approximate filament-count class and handling range"],
        ["Exact source grade", "FRPH-CF12K55 / source grade ZDCF 55T-12K", "Connects the RFQ to the applicable supplier-origin data and traceability"],
        ["Typical source properties", "5500 MPa strength, 240 GPa modulus, 2.2% elongation", "Reference values tested to GB/T 3362-2017; not a batch certificate or laminate allowable"],
        ["Linear density", "800 g/km typical", "Affects package length, textile conversion and process setup"],
        ["Sizing and twist", "Epoxy sizing; untwisted", "Supports resin and downstream-equipment compatibility review"],
        ["Package", "Nominal 4 kg bobbin for the documented source grade", "Supports creel, handling, packing and quotation review"],
        ["Commercial scope", "Trial and production quantity, destination and end use", "Supports source availability, compliance and shipping review"],
      ],
    },
    selectionAdvice: [
      "Start with the downstream process and equipment rather than choosing tow size from K value alone.",
      "Name the exact required source grade or attach the controlling property document. A general label such as 12K or T700 is not a complete product identity.",
      "State the resin family and sizing restriction; do not assume every epoxy-sized tow behaves identically in weaving, pultrusion, winding or prepreg conversion.",
      "Confirm bobbin dimensions, nominal net weight, winding format, unwind direction and creel limitations before the production quotation.",
      "Request source traceability, applicable TDS and required COA fields. The published supplier-origin values are not a batch certificate.",
      "Separate the representative trial quantity from the expected production quantity and provide destination, end user and final application for compliance review.",
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
      ["Documented product", "12K continuous carbon fiber tow; FRPH-CF12K55 / source grade ZDCF 55T-12K"],
      ["Typical tensile properties", "5500 MPa strength, 240 GPa modulus and 2.2% elongation to GB/T 3362-2017"],
      ["Density", "1.80 g/cm³ typical to GB/T 30019-2013"],
      ["Linear density", "800 g/km typical to GB/T 3362-2017"],
      ["Sizing and twist", "Epoxy sizing; untwisted supplier declaration"],
      ["Package reference", "Nominal 4 kg bobbin; final dimensions and packing by quotation"],
      ["Evidence boundary", "Supplier-origin reference values; no FRP HOME manufacture or official brand authorization is implied"],
      ["Other tow sizes", "1K / 3K / 6K / 24K / 48K / 50K only by confirmed source, availability and matching documents"],
    ],
    recommendedProducts: [
      "carbon-fiber-yarn-and-tow",
      "carbon-fiber-woven-fabric",
      "carbon-fiber-multiaxial-ncf-fabric",
    ],
    rfqInformation: [
      "Tow size",
      "Fiber grade",
      "Sizing requirement",
      "Downstream process",
      "Bobbin dimensions and unwind direction",
      "Nominal package weight",
      "Trial quantity",
      "Production quantity",
      "Required TDS, COA and traceability fields",
      "Destination country",
      "End user",
      "Final application",
    ],
    faqs: [
      {
        question: "Is 12K T700 enough information for a carbon fiber tow quotation?",
        answer:
          "No. It identifies a tow-size class and grade family, but the exact manufacturer grade, sizing, package format, quantity, destination and downstream process still need confirmation.",
      },
      {
        question: "Can one carbon fiber tow be used for weaving, pultrusion and filament winding?",
        answer:
          "A grade may be offered for more than one process, but sizing, package, spreading, fuzz control and equipment compatibility should be reviewed for the actual conversion route.",
      },
      {
        question: "Should a buyer request a trial bobbin before production?",
        answer:
          "A representative trial is sensible when changing tow size, grade, sizing, source or equipment settings. Production approval remains based on the customer's process validation and selected batch documentation.",
      },
      {
        question: "Does a larger K value mean stronger carbon fiber?",
        answer:
          "No. The K value is an approximate filament count. Strength and modulus are controlled by the selected fiber grade and manufacturer data, while final laminate performance also depends on processing and design.",
      },
      {
        question: "Are the published 5500 MPa and 240 GPa values guaranteed for every 12K shipment?",
        answer:
          "No. They are typical supplier-origin values for the identified source grade. Confirm source availability, the final order specification, applicable test methods and required batch or COA values before purchase approval.",
      },
      {
        question: "Does the FRP HOME TDS mean FRP HOME manufactures or is officially authorized for the source grade?",
        answer:
          "No. The document identifies supplier-origin reference data for procurement review. Manufacture, official brand authorization, source availability and batch traceability are not implied and must be confirmed separately.",
      },
    ],
    publishedAt,
    reviewedAt: "2026-07-27",
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
    slug: "cfrp-strengthening-material-rfq-checklist",
    title: "CFRP Strengthening Material RFQ Checklist",
    description:
      "Prepare an RFQ for structural-strengthening UD carbon fabric, pultruded CFRP plate and compatible epoxy without replacing project engineering review.",
    image: "/images/products/pultruded-cfrp-plate-stacked-hero.webp",
    quickAnswer:
      "A strengthening-material RFQ should identify the structure and substrate, engineer-selected material form, fabric areal weight or plate dimensions, required surface, epoxy scope, project quantity, destination and final application. Material supply information does not replace structural design, substrate assessment or system approval.",
    definition:
      "A CFRP strengthening system can use externally bonded UD carbon fiber fabric, pultruded CFRP plate and compatible structural epoxy materials. Fabric and plate have different forms, installation methods and order controls, so the project engineer's design should determine which material is quoted.",
    comparison: {
      columns: ["RFQ item", "UD carbon fabric", "Pultruded CFRP plate"],
      rows: [
        ["Primary order unit", "Areal weight, width and roll length", "Width, thickness and length"],
        ["Bonding route", "Saturating epoxy system", "Plate adhesive system"],
        ["Geometry", "Conforms to broad or wrapped surfaces", "Linear strip reinforcement"],
        ["Surface confirmation", "Fabric handling and impregnation requirement", "Bonding surface matched to the adhesive system"],
        ["Project input", "Area, orientation and overlap plan", "Strip layout, termination and joint details"],
        ["Approval boundary", "Engineer and system validation", "Engineer and system validation"],
      ],
    },
    selectionAdvice: [
      "Use the structural engineer's strengthening design as the starting point; do not select from product appearance alone.",
      "State the substrate, existing condition, load direction and project environment.",
      "For UD fabric, confirm areal weight, width, roll length, orientation and saturating epoxy scope.",
      "For plate, confirm width, thickness, length, bonding surface and adhesive-system requirement.",
      "Identify whether primer, putty, saturant or plate adhesive is included in the request.",
      "Request the selected product TDS and project-required batch documents before approval.",
    ],
    applications: [
      "Concrete beam strengthening",
      "Slab and wall reinforcement",
      "Column and wrapped-surface reinforcement",
      "Bridge and infrastructure strengthening",
      "Masonry or timber reinforcement",
      "Civil engineering distribution",
    ],
    specifications: [
      ["Documented UD references", "200 g/m² strengthening supply reference; 300 g/m² product TDS"],
      ["Documented 300 g/m² width", "100-500 mm"],
      ["Other UD construction", "By project specification and matching document review"],
      ["Plate reference", "Width, thickness and length by selected product TDS and quotation"],
      ["Epoxy", "Primer / saturant / plate adhesive by approved project system"],
      ["Documents", "TDS and order or batch documents requested by project scope"],
      ["Responsibility", "Structural design, substrate assessment and system approval by qualified parties"],
    ],
    recommendedProducts: ["structural-strengthening-system", "carbon-fiber-ud-fabric"],
    rfqInformation: [
      "Project and structure type",
      "Substrate condition",
      "Engineer-selected material",
      "Fabric areal weight and width",
      "Plate width, thickness and length",
      "Bonding surface",
      "Epoxy system scope",
      "Project quantity",
      "Destination",
      "Final application",
    ],
    faqs: [
      {
        question: "Can FRP HOME choose the strengthening material from a project photo?",
        answer:
          "No. A photo can support discussion, but material selection requires qualified structural design, substrate assessment, load information and an approved installation system.",
      },
      {
        question: "Is general UD carbon fabric the same as strengthening fabric?",
        answer:
          "Not automatically. The selected fabric, areal weight, binder or handling construction, epoxy compatibility, documentation and project approval must match the strengthening system.",
      },
      {
        question: "Can pultruded CFRP plate and UD fabric be quoted together?",
        answer:
          "Yes, when the project design uses both material forms. List each product, dimensions, quantities and epoxy scope separately so the quotation and documents remain clear.",
      },
      {
        question: "What documents should be requested before a strengthening order?",
        answer:
          "Request the applicable product TDS, order specification and any project-required batch documents. The engineer should also approve the adhesive system, substrate preparation and installation method.",
      },
    ],
    publishedAt,
    reviewedAt: "2026-07-27",
    sources: [
      {
        title: "200gsm UD Carbon Fiber Strengthening Fabric Supply Reference",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf",
      },
      {
        title: "300gsm UD Carbon Fiber Fabric for Structural Strengthening TDS",
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
];
