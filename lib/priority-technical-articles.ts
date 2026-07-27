import type { TechnicalArticle } from "@/lib/technical-articles";

const publishedAt = "2026-07-22";

export const priorityTechnicalArticles: TechnicalArticle[] = [
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
