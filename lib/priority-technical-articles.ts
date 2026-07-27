import type { TechnicalArticle } from "@/lib/technical-articles";

const publishedAt = "2026-07-22";

export const priorityTechnicalArticles: TechnicalArticle[] = [
  {
    slug: "200gsm-vs-300gsm-ud-carbon-fiber-fabric",
    title: "200gsm vs 300gsm UD Carbon Fiber Fabric for Strengthening",
    description:
      "Compare documented 200gsm and 300gsm unidirectional carbon fiber fabric references for strengthening RFQs without treating dry-fabric data as project design values.",
    image: "/images/products/carbon-fiber-ud-fabric.webp",
    quickAnswer:
      "The documented 200gsm and 300gsm UD fabrics are both 0° dry carbon reinforcements, but they are not interchangeable specifications. The 200gsm supply reference records source model TCU20, 200 g/m² and 0.111 mm nominal dry-fiber thickness; it does not state width, fiber grade or usable mechanical values. The FRPH-UD300 TDS records 300 g/m², 0.167 mm nominal dry-fabric thickness and a 100-500 mm available-width reference, while fiber grade and system properties remain order-dependent. A qualified engineer must select the strengthening design, resin system, laminate schedule and acceptance basis.",
    definition:
      "UD carbon fiber fabric places most reinforcement in one primary direction. In these two documents, 200gsm and 300gsm identify nominal dry-fabric areal weight, not cured-system strength. Nominal dry thickness is a material reference only; cured thickness and structural capacity depend on the selected fiber, resin, impregnation, compaction, laminate schedule, substrate and test basis.",
    comparison: {
      columns: ["RFQ field", "200gsm supply reference", "300gsm product TDS"],
      rows: [
        ["Document identity", "FRPH-TDS-UD200-SUPPLY-EN-R01; source TCU20", "FRPH-TDS-UD300-EN-R01; product FRPH-UD300"],
        ["Principal direction", "0° unidirectional", "0° unidirectional"],
        ["Areal weight", "200 g/m² nominal", "300 g/m² nominal"],
        ["Nominal dry thickness", "0.111 mm dry-fiber reference", "0.167 mm dry-fabric reference"],
        ["Width", "Not stated in the source record", "100-500 mm available-width reference"],
        ["Evidence boundary", "Legacy source-record supply reference; mechanical fields excluded", "Product TDS; fiber grade, sizing, tolerances and system performance confirmed by order"],
      ],
    },
    selectionAdvice: [
      "Start with the qualified engineer's load path, substrate assessment and approved strengthening design. Do not choose 200gsm or 300gsm from website data alone.",
      "Use the 200gsm file only as a legacy source-record supply reference. Confirm current source, width, roll length, fiber grade, sizing and required documents before quotation.",
      "Use FRPH-UD300 when the documented 300 g/m² construction and 100-500 mm width reference match the RFQ, then confirm selected width, tolerance, backing and roll format.",
      "Do not compare 0.111 mm and 0.167 mm as cured-system thicknesses. Both are nominal dry-material references.",
      "State the saturating resin, installation method, overlap or laminate schedule, environment and project test requirements so compatibility can be reviewed.",
      "Request the applicable TDS, approved order specification and required batch-document fields before project approval or installation.",
    ],
    applications: [
      "Externally bonded civil strengthening",
      "Concrete beam, slab and wall reinforcement",
      "Column and wrapped-surface reinforcement",
      "Directional composite laminate buildup",
      "Composite repair subject to system review",
      "Pultrusion feed reinforcement subject to process review",
    ],
    specifications: [
      ["200gsm reference", "TCU20 source record; 0°; 200 g/m²; 0.111 mm nominal dry-fiber thickness; black"],
      ["200gsm missing fields", "Width, roll length, fiber grade, sizing and usable mechanical values require current order documents"],
      ["300gsm reference", "FRPH-UD300; 0°; 300 g/m²; 0.167 mm nominal dry-fabric thickness"],
      ["300gsm width", "100-500 mm available-width reference; selected width and tolerance by quotation"],
      ["Fiber grade", "Exact grade and sizing by confirmed order; do not infer T300 or T700 from gsm"],
      ["System properties", "Confirm resin, cure, laminate design, substrate and test method"],
      ["Design boundary", "Dry-fabric references are not cured-laminate or project design allowables"],
    ],
    recommendedProducts: ["carbon-fiber-ud-fabric", "structural-strengthening-system"],
    rfqInformation: [
      "Engineer-selected areal weight and strengthening layout",
      "Primary fiber direction and laminate schedule",
      "Selected width, width tolerance and roll length",
      "Secondary yarn, backing or handling requirement",
      "Exact fiber grade and sizing",
      "Saturating resin and installation method",
      "Substrate, environment and project test basis",
      "Trial and production quantity",
      "Required TDS, COA, traceability or batch fields",
      "Destination country and project location",
      "Final application",
      "Qualified design and installation responsibility",
    ],
    faqs: [
      {
        question: "Is 300gsm UD carbon fabric always stronger than 200gsm fabric?",
        answer:
          "No universal strength conclusion can be made from areal weight alone. Finished-system performance depends on fiber grade, resin, impregnation, laminate schedule, substrate, installation quality and the applicable test method.",
      },
      {
        question: "Can 0.111 mm and 0.167 mm be used as cured laminate thicknesses?",
        answer:
          "No. Both values are nominal dry-material references. Cured thickness depends on resin content, compaction, laminate schedule and installation or manufacturing process.",
      },
      {
        question: "Does the 200gsm supply reference confirm a current product width?",
        answer:
          "No. The archived source record does not state width or roll length. Current source, usable width, tolerance, roll format and availability must be confirmed in the quotation and order documents.",
      },
      {
        question: "Does the 300gsm TDS guarantee T300 or T700 fiber?",
        answer:
          "No. The TDS states that the exact fiber grade and sizing are confirmed by order. T300, T700 or another grade may be reviewed, but gsm does not identify the fiber grade.",
      },
      {
        question: "What should a strengthening RFQ include?",
        answer:
          "Include the engineer-selected areal weight, direction, width, roll length, backing, fiber grade, sizing, resin system, substrate, laminate or overlap plan, quantity, documents, destination and final application.",
      },
    ],
    publishedAt: "2026-07-27",
    reviewedAt: "2026-07-27",
    sources: [
      {
        title: "200gsm UD Carbon Fiber Strengthening Fabric Supply Reference",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf",
      },
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
    slug: "1-2-mm-pultruded-cfrp-strengthening-plate-rfq-guide",
    title: "1.2 mm Pultruded CFRP Strengthening Plate RFQ Guide",
    description:
      "Prepare a specification-first RFQ for documented 1.2 mm pultruded CFRP strengthening plate covering dimensions, bonding surface, structural epoxy, project quantity and engineering responsibility.",
    image: "/images/products/pultruded-cfrp-plate-stacked-hero.webp",
    quickAnswer:
      "FRP HOME document FRPH-TDS-CFRPPL12-EN-R01 identifies product FRPH-CFRP-PLATE-1.2, source model ZCP1.2, as a 1.2 mm nominal pultruded CFRP laminate for externally bonded civil strengthening. Its 2620 MPa tensile strength, 165 GPa modulus, 1.7% elongation, >68% fiber volume and 1.6 g/cm3 density are typical archived source-model values with no stated test methods. They are not batch values or project design allowables. A complete RFQ must still confirm width, length, tolerances, bonding surface, structural epoxy, quantity, destination, final application and qualified engineering approval.",
    definition:
      "Pultruded CFRP strengthening plate is a cured, narrow carbon-fiber-reinforced polymer laminate made as a dimensioned strip for an externally bonded strengthening system. The plate is only one system component. Structural design, substrate acceptance, anchorage or termination details, compatible adhesive, installation controls and project testing remain project-specific engineering responsibilities.",
    comparison: {
      columns: ["RFQ field", "Documented ZCP1.2 reference", "Order or project confirmation"],
      rows: [
        ["Product identity", "FRPH-CFRP-PLATE-1.2; source model ZCP1.2", "Approved specification revision, traceability and required batch documents"],
        ["Product form", "Pultruded CFRP strengthening laminate", "Externally bonded system layout and qualified engineering approval"],
        ["Thickness", "1.2 mm nominal", "Width, length, thickness tolerance and measured acceptance criteria"],
        ["Typical source properties", "2620 MPa strength; 165 GPa modulus; 1.7% elongation", "Test methods are not stated; do not use as batch values or project design allowables"],
        ["Other source references", ">68% fiber volume; 1.6 g/cm3 density", "Selected order documents and any project-specific verification"],
        ["Bonding system", "Not fixed by the plate TDS", "Bonding surface, compatible structural epoxy, substrate preparation and installation procedure"],
      ],
    },
    selectionAdvice: [
      "Start with the qualified engineer's strengthening design and substrate assessment. Do not select plate dimensions from a website table alone.",
      "Use FRPH-CFRP-PLATE-1.2 when the documented 1.2 mm nominal pultruded plate is the intended reference, then confirm the current revision and traceability scope.",
      "State finished width, cut length, thickness tolerance, edge condition and packing requirement. The TDS does not publish a universal width, length or tolerance.",
      "Define the required bonding surface and the engineer-approved structural epoxy system. Plate supply does not establish adhesive compatibility or substrate preparation.",
      "Treat the published mechanical and physical values as typical archived source-model references because the source does not state test methods. Request the required test basis and batch or COA fields in the quotation.",
      "Provide project quantity, destination, structure type, final application and responsible engineering party for compliance and order review.",
    ],
    applications: [
      "Externally bonded concrete beam strengthening",
      "Concrete slab strengthening",
      "Bridge and building load upgrades",
      "Linear CFRP reinforcement strips",
      "Timber strengthening subject to engineering review",
      "Masonry strengthening subject to engineering review",
    ],
    specifications: [
      ["Document ID", "FRPH-TDS-CFRPPL12-EN-R01"],
      ["Product code", "FRPH-CFRP-PLATE-1.2; source model ZCP1.2"],
      ["Product form", "Pultruded CFRP strengthening laminate"],
      ["Nominal thickness", "1.2 mm; width, length and tolerances by quotation"],
      ["Typical source strength", "2620 MPa; test method not stated"],
      ["Typical source modulus", "165 GPa; test method not stated"],
      ["Other typical source values", "1.7% elongation; >68% fiber volume; 1.6 g/cm3 density"],
      ["Evidence boundary", "Typical archived source-model values, not a batch certificate or project design allowables"],
    ],
    recommendedProducts: ["structural-strengthening-system"],
    rfqInformation: [
      "FRPH-CFRP-PLATE-1.2 reference and required revision",
      "Structure and substrate type",
      "Engineer-selected plate layout",
      "Plate width, cut length and quantity",
      "Thickness and dimensional tolerances",
      "Bonding-surface requirement",
      "Structural epoxy and substrate-preparation scope",
      "Edge, label and packing requirements",
      "Required TDS, COA, traceability or test fields",
      "Destination country and project location",
      "Final application",
      "Qualified design and installation responsibility",
    ],
    faqs: [
      {
        question: "Are 2620 MPa and 165 GPa guaranteed for every 1.2 mm CFRP plate shipment?",
        answer:
          "No. They are typical values retained from the archived ZCP1.2 source model, and the source does not state test methods. Confirm the approved order specification, test basis and required batch or COA values before purchase approval.",
      },
      {
        question: "Does 1.2 mm define the complete CFRP strengthening plate specification?",
        answer:
          "No. The RFQ must also define width, length, tolerances, bonding surface, edge and packing requirements, quantity, structural epoxy scope, destination and final application.",
      },
      {
        question: "Can FRP HOME approve the strengthening design from the plate TDS?",
        answer:
          "No. The TDS supports material and RFQ review. A qualified structural engineer must approve design actions, substrate acceptance, anchorage or termination details, adhesive system and installation controls.",
      },
      {
        question: "Is pultruded strengthening plate the same as a 3K twill carbon fiber sheet?",
        answer:
          "No. This product is a pultruded linear strengthening laminate. A 3K twill laminate sheet is a separate product route with different surface, layup, machining and application requirements.",
      },
      {
        question: "What should a buyer send for a 1.2 mm CFRP plate quotation?",
        answer:
          "Send the engineer-selected plate layout, width, cut length, quantity, tolerances, bonding-surface requirement, approved adhesive scope, substrate and structure information, required documents, destination and final application.",
      },
    ],
    publishedAt: "2026-07-27",
    reviewedAt: "2026-07-27",
    sources: [
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
