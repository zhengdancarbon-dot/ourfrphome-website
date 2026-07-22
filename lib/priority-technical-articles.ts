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
      "A complete carbon fiber tow RFQ states the tow size, fiber grade, sizing compatibility, downstream process, bobbin or spool requirement, trial and production quantity, destination and final application. Terms such as 12K, T700 or epoxy sizing describe different parts of the specification and should not be treated as interchangeable.",
    definition:
      "Carbon fiber tow is a continuous bundle of carbon filaments supplied on a package for weaving, braiding, filament winding, pultrusion, prepreg conversion or chopping. The K value identifies approximate filament count; grade and sizing must be confirmed separately from tow size.",
    comparison: {
      columns: ["RFQ field", "Example", "Why the supplier needs it"],
      rows: [
        ["Tow size", "3K / 12K / 24K / 50K", "Defines the approximate filament-count class and handling range"],
        ["Fiber grade", "T300 / T700 / project-defined", "Controls the product family and applicable manufacturer data"],
        ["Sizing", "Epoxy-compatible / process-specific", "Supports resin and downstream-process review"],
        ["Package", "Bobbin or spool format and target weight", "Supports creel, handling, packing and quotation review"],
        ["Process", "Weaving / winding / pultrusion / prepreg", "Connects the fiber package and sizing to the intended conversion route"],
        ["Commercial scope", "Trial and production quantity, destination", "Supports availability, compliance and shipping review"],
      ],
    },
    selectionAdvice: [
      "Start with the downstream process and equipment rather than choosing tow size from K value alone.",
      "Attach the required manufacturer grade or property document when a named grade is mandatory.",
      "State the resin family and any sizing restriction; do not assume all epoxy-compatible sizings behave identically.",
      "Confirm package dimensions, net package weight and creel limitations before the production quotation.",
      "Separate the representative trial quantity from the expected production quantity.",
      "Provide end use, end user and destination when compliance review is required.",
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
      ["Tow size", "1K / 3K / 6K / 12K / 24K / 48K / 50K by confirmed source"],
      ["Grade", "Order-specific; final values follow the selected manufacturer and batch documents"],
      ["Sizing", "Resin- and process-specific confirmation required"],
      ["Package", "Bobbin / spool / carton / pallet by confirmed order"],
      ["Compliance", "Destination and final application reviewed before supply where required"],
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
      "Bobbin or spool format",
      "Package weight",
      "Trial quantity",
      "Production quantity",
      "Destination country",
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
    ],
    publishedAt,
    reviewedAt: publishedAt,
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
      ["UD fabric reference", "200 / 300 / 600 g/m2 options; final order by confirmed specification"],
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
    reviewedAt: publishedAt,
    sources: [
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
