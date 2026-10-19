import type { TechnicalArticle } from "@/lib/technical-articles";

export const geoBuyerTechnicalArticles: TechnicalArticle[] = [
  {
    slug: "carbon-ncf-roll-acceptance-vacuum-infusion",
    publishedAt: "2026-10-19",
    title: "Carbon NCF Roll Acceptance Before Vacuum Infusion",
    description:
      "Check a 600gsm +45/-45 carbon NCF roll for orientation, carbon weight, usable width, stitching, traceability and infusion-trial readiness.",
    image: "/images/products/carbon-fiber-multiaxial-ncf-fabric.webp",
    quickAnswer:
      "Check a carbon NCF roll against the approved order specification, not the word biaxial alone. FRP HOME's documented FRPH-CBX600-45 is a balanced +45/-45 stitched construction with 600 g/m2 of carbon fiber in two nominal 300 g/m2 layers. Confirm roll identity, orientation, usable dimensions, condition and required documents before cutting; validate the selected resin and full laminate stack in a representative process trial.",
    definition:
      "For FRPH-CBX600-45, 600 g/m2 is the nominal carbon-fiber areal weight. The TDS separately lists approximately 608-612 g/m2 for the dry fabric including stitch yarn as typical guidance. A purchase order that says only '600gsm fabric' leaves the measurement basis unclear. Record the product code, TDS revision, carbon-only weight and any agreed total-fabric weight requirement separately. Dry-fabric data are not cured-part mechanical allowables.",
    comparison: {
      columns: ["Receiving check", "Documented or agreed reference", "Buyer action"],
      rows: [
        ["Construction", "FRPH-CBX600-45; balanced +45/-45", "Compare order, roll label and a retained sample against the layup drawing."],
        ["Areal weight", "600 g/m2 carbon; approximately 608-612 g/m2 including stitch, typical", "Agree whether the test includes stitching, plus method and sampling plan."],
        ["Roll format", "1270 mm width and 50 m length, nominal", "Confirm usable width, length, edge allowance and splice policy by order."],
        ["Traceability", "Product and roll identity", "Record batch and roll identifiers; request a COA only if agreed and available."],
        ["Textile condition", "Stitched dry reinforcement", "Agree visual criteria for distortion, broken tows, edges and stitch continuity."],
        ["Process readiness", "Dry fabric, not an infusion guarantee", "Trial the intended resin, stack, compaction and flow media."],
      ],
    },
    selectionAdvice: [
      "Mark the angle reference on the cutting plan before cutting the first ply. +45/-45 and 0/90 are different architectures; the published 600gsm TDS covers +45/-45, while FRP HOME's 300gsm TDS identifies separate +45/-45 and 0/90 product codes. Headline gsm alone cannot justify a substitution.",
      "Define a usable roll, not just a nominal one. For wide-panel production, state the minimum cutting width after edge allowance, acceptable splices and their marking, winding/core requirements and whether partial rolls can be combined. Confirm measurements in the order specification.",
      "Document packaging condition before opening. Then inspect an agreed sample length for angle alignment, stitching, folds, edges and visible contamination. Photograph any exception with the roll identifier and agree whether to isolate, investigate or accept it; appearance does not establish permeability or strength.",
      "If mass-per-area testing is needed, agree a controlled method such as ISO 3374 and define whether carbon-only or total dry-fabric mass is being evaluated. Mentioning a standard here does not claim a particular FRP HOME batch has been tested or certified to it.",
      "Run a representative infusion trial with the actual roll, fiber direction, ply stack, resin and process conditions. Research on stitched carbon preforms shows that flow can be sensitive to stitch geometry and preform arrangement, so do not infer fill time from this TDS or another project. Reassess the trial if resin, stack or geometry changes.",
    ],
    applications: ["Incoming roll inspection", "Wide-panel cutting plans", "Vacuum infusion trials", "RTM process review", "Repeat-order acceptance"],
    specifications: [
      ["Product code", "FRPH-CBX600-45"],
      ["Fiber directions", "+45/-45 relative to the agreed roll reference"],
      ["Carbon areal weight", "600 g/m2 nominal; 300 g/m2 in each directional layer"],
      ["Total dry-fabric weight", "Approximately 608-612 g/m2 including stitch yarn, typical guidance"],
      ["Width and roll length", "1270 mm x 50 m nominal; usable dimensions and tolerances by order"],
      ["Batch documents", "COA or inspection record only when agreed and available"],
    ],
    recommendedProducts: ["carbon-fiber-multiaxial-ncf-fabric"],
    rfqInformation: [
      "Product code and TDS revision",
      "Approved +45/-45 orientation reference",
      "Carbon versus total fabric weight basis",
      "Usable width, length and splice policy",
      "Stitch and visual acceptance criteria",
      "Resin, stack and process trial",
      "Quantity, destination and final application",
    ],
    faqs: [
      {
        question: "Does 600gsm include the stitching yarn?",
        answer:
          "No. In the FRPH-CBX600-45 TDS, 600 g/m2 is nominal carbon weight. Total dry-fabric weight including stitch yarn is a separate typical reference of approximately 608-612 g/m2.",
      },
      {
        question: "Can a 600gsm +45/-45 NCF roll replace a 300gsm 0/90 construction?",
        answer:
          "Not without engineering review. The orientations and layer weights differ, and the approved laminate design controls any substitution.",
      },
      {
        question: "Does a clean-looking NCF roll prove it will infuse well?",
        answer:
          "No. Receiving inspection addresses identity and visible condition. Resin flow and finished-part quality require process-specific evaluation with the chosen resin and laminate stack.",
      },
    ],
    sources: [
      {
        title: "600gsm +45/-45 Biaxial Carbon NCF TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-600gsm-PlusMinus45-Biaxial-Carbon-NCF-TDS.pdf",
      },
      {
        title: "300gsm Biaxial Carbon Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-300gsm-Biaxial-Carbon-Fabric-TDS.pdf",
      },
      {
        title: "ISO 3374:2000 - Mass per unit area of reinforcement products",
        publisher: "ISO",
        url: "https://www.iso.org/standard/26877.html",
      },
      {
        title: "Experimental and Numerical Study of Vacuum Resin Infusion of Stiffened Carbon Fiber Reinforced Panels",
        publisher: "Lionetto et al., Materials (2020)",
        url: "https://www.mdpi.com/1996-1944/13/21/4800",
      },
    ],
  },
  {
    slug: "3k-200gsm-twill-carbon-fabric-sample-approval",
    publishedAt: "2026-10-19",
    title: "How to Approve a 3K 200gsm Twill Carbon Fabric Sample",
    description:
      "Approve 3K 200gsm twill carbon fabric for visible CFRP parts by separating dry-textile checks from cured-panel appearance and documenting order acceptance.",
    image: "/images/products/carbon-fiber-woven-fabric-twill.webp",
    quickAnswer:
      "Approve the delivered dry textile and your cured CFRP surface separately. FRP HOME's documented FRPH-WCF-3K200-T is a 3K, 200 g/m2 twill woven fabric. Its TDS lists 5 x 5 yarns per 10 mm in warp and weft, an available width range of 1000-1500 mm and a 100 m nominal roll. Agree the selected width, tolerances, visual reference, packing and required documents by order, then mold a representative panel with the intended resin and finish.",
    definition:
      "A dry-fabric swatch can define tow, weave, count, width and visible textile condition. It cannot by itself approve the appearance or performance of a cured laminate. Resin, tooling, layup, cure and finishing affect the final surface. For appearance-sensitive parts, retain a physical dry-cloth sample and a separately approved cured-panel sample, marking the cosmetic face, weave direction, viewing conditions and acceptable local variation. A photograph alone is a poor acceptance standard because lighting and reflections change the visible result.",
    comparison: {
      columns: ["Control item", "Published FRP HOME reference", "Buyer approval question"],
      rows: [
        ["Product identity", "FRPH-WCF-3K200-T; 3K twill", "Is the exact style and TDS revision on the order?"],
        ["Areal weight", "200 g/m2 nominal dry fabric", "What tolerance, sampling plan and method are agreed?"],
        ["Weave count", "5 x 5 per 10 mm nominal, warp x weft", "Which construction features matter to the accepted appearance?"],
        ["Width", "1000-1500 mm available range", "Which selected usable width fits the cutting plan?"],
        ["Roll length", "100 m nominal", "What usable length, splice policy, core and packing are agreed?"],
        ["Sizing and process", "Confirmation items in the TDS", "Does the representative resin/process trial meet the buyer's criteria?"],
      ],
    },
    selectionAdvice: [
      "First approve a textile reference. Record the supplier product code, TDS revision, selected width, roll/batch identity and approved swatch. Mark the weave direction and the cosmetic face. Ask how a change in fiber grade, sizing or construction will be communicated before repeat orders.",
      "Then approve a process reference. Mold a panel with the actual resin, layup, tooling and finishing route. Keep a cured reference for appearance. If mechanical or environmental requirements apply, test the finished laminate separately; 200gsm is dry-fabric mass per area, not cured thickness or strength.",
      "Write the acceptance boundary: does inspection apply to the roll, the molded panel or both? Identify who measures what, the method, allowed variation and what happens if a roll or panel fails review. ISO 3374, ISO 5025 and ASTM D3775 describe potential measurement methods, but the order must specify any method and limit actually required; citing them does not certify a batch.",
      "For repeat or export supply, agree roll labels, packing protection and any required batch documents. A COA or specific inspection result should be requested explicitly and its availability confirmed before ordering, rather than inferred from a marketing photo or an older sample.",
    ],
    applications: ["Visible CFRP surface plies", "Appearance-critical composite panels", "First-article sample approval", "Repeat-order textile acceptance", "Resin/process qualification trials"],
    specifications: [
      ["Documented style", "FRPH-WCF-3K200-T; 3K 200 g/m2 twill"],
      ["Nominal weave count", "5 x 5 yarns per 10 mm, warp x weft"],
      ["Available width", "1000-1500 mm; selected usable width by order"],
      ["Nominal roll length", "100 m; packing and splice policy by order"],
      ["Dry versus cured reference", "Approve dry cloth and molded surface separately"],
      ["Required documents", "Confirm TDS revision, inspection record or COA by order"],
    ],
    recommendedProducts: ["carbon-fiber-woven-fabric"],
    rfqInformation: [
      "FRPH-WCF-3K200-T and TDS revision",
      "Selected usable width and roll length",
      "Dry-cloth and cured-panel sample IDs",
      "Cosmetic face and weave direction",
      "Areal-weight and visual acceptance criteria",
      "Resin, process and quantity",
      "Destination and final application",
    ],
    faqs: [
      {
        question: "Does 200gsm tell me the cured panel thickness?",
        answer:
          "No. It describes dry-fabric mass per area. Ply count, resin content, compaction and processing affect the finished laminate, which must be validated separately.",
      },
      {
        question: "Does 3K prove the finished part is stronger than a different tow size?",
        answer:
          "No. 3K identifies an approximate filament count per tow, not a finished-part mechanical rating. Fiber grade, weave, resin, layup and process also matter.",
      },
      {
        question: "Is an approved dry swatch enough for a visible CFRP part?",
        answer:
          "It defines a textile reference, not the final molded appearance. Keep a cured-panel reference when the finished surface is part of acceptance.",
      },
    ],
    sources: [
      {
        title: "3K 200gsm Twill Carbon Fiber Fabric TDS",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/downloads/tds/FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf",
      },
      {
        title: "ISO 3374:2000 - Mass per unit area of reinforcement products",
        publisher: "ISO",
        url: "https://www.iso.org/standard/26877.html",
      },
      {
        title: "ISO 5025:2017 - Width and length of woven reinforcement rolls",
        publisher: "ISO",
        url: "https://www.iso.org/standard/74000.html",
      },
      {
        title: "ASTM D3775-17(2023) - End and pick count of woven fabrics",
        publisher: "ASTM International",
        url: "https://store.astm.org/d3775-17r23.html",
      },
    ],
  },
];
