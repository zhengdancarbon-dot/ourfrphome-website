import type { TechnicalArticle } from "@/lib/technical-articles";

export const fiberOpticTechnicalArticles: TechnicalArticle[] = [
  {
    slug: "fiber-optic-cable-drum-rfq-checklist",
    title: "Fiber Optic Cable Drum RFQ Checklist for Civil and Industrial Projects",
    description:
      "Prepare an RFQ for an internal pay-off fiber optic cable drum by confirming fiber length, drum series, fiber reference, integration, destination, packing and final civil or industrial application.",
    image: "/images/products/fiber-optic-cable-drum.webp",
    quickAnswer:
      "Start with the required fiber length and select the matching source-manual series: ZY-SI for 1-15 km, ZY-MI for 20-40 km, or ZY-LI for 50-60 km. The public reference identifies G.657.A2 fiber and 0.25 mm fiber diameter. Confirm the final configuration, terminal or equipment interface, quantity, destination, packing and civil or industrial end use during quotation.",
    definition:
      "An internal pay-off fiber optic cable drum stores a selected fiber length inside a protected housing and releases the fiber from the inside. Series labels and length ranges support early RFQ selection only. They do not establish a fixed packing, mass, interface or order configuration.",
    comparison: {
      columns: ["RFQ starting point", "Source-manual reference", "Confirm in quotation"],
      rows: [
        ["Short series", "ZY-SI; 1-15 km", "Required length, selected configuration and availability"],
        ["Mid series", "ZY-MI; 20-40 km", "Required length, selected configuration and availability"],
        ["Long series", "ZY-LI; 50-60 km", "Required length, selected configuration and availability"],
        ["Fiber reference", "G.657.A2; 0.25 mm", "Current selected fiber and documentation scope"],
        ["Integration and delivery", "Not fixed by the public page", "Terminal or equipment interface, quantity, export packing, destination and inspection needs"],
      ],
    },
    selectionAdvice: [
      "Start with the required cable length rather than selecting a housing from an image alone.",
      "Use ZY-SI, ZY-MI or ZY-LI only as the published short, mid and long series reference; confirm the current configuration in the RFQ.",
      "State the terminal or equipment interface required for the selected civil or industrial project.",
      "Do not treat the public G.657.A2 and 0.25 mm references as a complete order specification. Request the applicable revision and documents during quotation.",
      "Confirm quantity, export packing, destination country, required inspection documents and final civil or industrial application before order review.",
      "Configuration, end use and destination remain subject to compliance review. The product page does not approve restricted or sensitive applications.",
    ],
    applications: [
      "Qualified civil cable-deployment projects",
      "Industrial fiber integration projects",
      "Laboratory and test installation planning",
      "Infrastructure maintenance planning subject to project review",
      "Fiber handling requirements with documented destination and end use",
    ],
    specifications: [
      ["Published series", "ZY-SI / ZY-MI / ZY-LI"],
      ["Source-manual length ranges", "1-15 km / 20-40 km / 50-60 km"],
      ["Fiber reference", "G.657.A2 / 0.25 mm"],
      ["Pay-off method", "Internal cable pay-off"],
      ["Operating-temperature reference", "-40 C to +60 C; confirm the selected order configuration"],
      ["Order boundary", "Dimensions, packing, mass, terminal configuration and documents are confirmed by quotation and order review"],
    ],
    recommendedProducts: ["fiber-optic-cable-drum"],
    rfqInformation: [
      "Required fiber length",
      "ZY-SI, ZY-MI, ZY-LI or a configuration request",
      "G.657.A2 or other required fiber documentation",
      "Terminal or equipment integration requirement",
      "Civil or industrial final application",
      "Quantity, destination country and delivery schedule",
      "Export packing and inspection-document requirement",
      "End-user and end-use information for compliance review",
    ],
    faqs: [
      {
        question: "Which fiber optic cable drum series should I request?",
        answer:
          "Use the required length as a starting point: ZY-SI is the published 1-15 km short-series reference, ZY-MI is 20-40 km, and ZY-LI is 50-60 km. The final selection and availability are confirmed during quotation.",
      },
      {
        question: "Are G.657.A2 and 0.25 mm a complete technical specification?",
        answer:
          "No. They are public source-manual references. Confirm the selected fiber, configuration, documentation and acceptance requirements in the RFQ and order specification.",
      },
      {
        question: "What should a fiber optic cable drum RFQ include?",
        answer:
          "Include the required length, selected series or configuration, fiber-document requirement, terminal or equipment interface, quantity, destination, export packing, final civil or industrial application and any inspection-document needs.",
      },
      {
        question: "Are packing and mass fixed for every drum series?",
        answer:
          "No. The supplied source manuals contain inconsistent packing and mass references. Treat these as order-review items, not fixed public values.",
      },
    ],
    publishedAt: "2026-08-15",
    reviewedAt: "2026-08-15",
    sources: [
      {
        title: "Fiber Optic Cable Drum",
        publisher: "FRP HOME",
        url: "https://www.myfrphome.com/products/fiber-optic-cable-drum",
      },
    ],
  },
];
