import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "myfrphome.com" }],
        destination: "https://www.myfrphome.com/:path*",
        permanent: true,
      },
      {
        source: "/request-a-quote",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/rfq",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/quality",
        destination: "/quality-control",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-unidirectional-fabric",
        destination: "/products/carbon-fiber-ud-fabric",
        permanent: true,
      },
      {
        source: "/products/ud-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-ud-fabric",
        permanent: true,
      },
      {
        source: "/products/unidirectional-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-ud-fabric",
        permanent: true,
      },
      {
        source: "/products/woven-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-reinforcements",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/1k-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/3k-twill-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/3k-plain-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/6k-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/12k-carbon-fiber-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-bidirectional-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
        permanent: true,
      },
      {
        source: "/products/spread-tow-carbon-fabric",
        destination: "/products/spread-tow-carbon-fiber-fabric",
        permanent: true,
      },
      {
        source: "/products/spread-tow-fabric",
        destination: "/products/spread-tow-carbon-fiber-fabric",
        permanent: true,
      },
      {
        source: "/products/8x8mm-spread-tow-carbon-fabric",
        destination: "/products/spread-tow-carbon-fiber-fabric",
        permanent: true,
      },
      {
        source: "/products/10x10mm-spread-tow-carbon-fabric",
        destination: "/products/spread-tow-carbon-fiber-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-multiaxial-fabric",
        destination: "/products/carbon-fiber-multiaxial-ncf-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-aramid-hybrid-jacquard-fabric",
        destination: "/products/carbon-fiber-hybrid-jacquard-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-pultruded-plate",
        destination: "/products/structural-strengthening-system",
        permanent: true,
      },
      {
        source: "/products/cfrp-strengthening-system",
        destination: "/products/structural-strengthening-system",
        permanent: true,
      },
      {
        source: "/products/pultruded-carbon-fiber-plate-construction",
        destination: "/products/structural-strengthening-system",
        permanent: true,
      },
      {
        source: "/products/pultruded-carbon-fiber-plate-structural-reinforcement",
        destination: "/products/structural-strengthening-system",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-prepreg-woven-fabric",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-unidirectional-prepreg",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-prepreg",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/prepreg-carbon-fiber-fabric",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-prepreg-fabric",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/woven-carbon-fiber-prepreg",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/ud-carbon-fiber-prepreg",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/spread-tow-carbon-fiber-prepreg",
        destination: "/products/prepreg-carbon-fiber-materials",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-laminate-sheet-3k",
        destination: "/products/3k-carbon-fiber-laminate-sheet",
        permanent: true,
      },
      {
        source: "/products/3k-carbon-fiber-laminated-plate",
        destination: "/products/3k-carbon-fiber-laminate-sheet",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-powder",
        destination: "/products/milled-carbon-fiber-powder",
        permanent: true,
      },
      {
        source: "/products/chopped-milled-carbon-fiber",
        destination: "/products/chopped-carbon-fiber",
        permanent: true,
      },
      {
        source: "/products/milled-carbon-fiber",
        destination: "/products/milled-carbon-fiber-powder",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-yarn",
        destination: "/products/carbon-fiber-yarn-and-tow",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-yarn-tow",
        destination: "/products/carbon-fiber-yarn-and-tow",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-tow",
        destination: "/products/carbon-fiber-yarn-and-tow",
        permanent: true,
      },
      {
        source: "/products/chinese-brand-carbon-fiber-yarn-tow",
        destination: "/products/carbon-fiber-yarn-and-tow",
        permanent: true,
      },
      {
        source: "/products/pan-precursor-fiber",
        destination: "/products/carbon-fiber-yarn-and-tow",
        permanent: true,
      },
      {
        source: "/products/pre-oxidized-pan-fiber",
        destination: "/products/carbon-fiber-yarn-and-tow",
        permanent: true,
      },
      {
        source: "/products/cfrp-profiles-custom-parts",
        destination: "/products/custom-carbon-fiber-products",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-tube",
        destination: "/products/3k-surface-carbon-fiber-tube",
        permanent: true,
      },
      {
        source: "/products/roll-wrapped-carbon-fiber-tube",
        destination: "/products/3k-surface-carbon-fiber-tube",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-sheet",
        destination: "/products/3k-carbon-fiber-laminate-sheet",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-sheet-plate",
        destination: "/products/3k-carbon-fiber-laminate-sheet",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-plate",
        destination: "/products/3k-carbon-fiber-laminate-sheet",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-rod",
        destination: "/products/pultruded-carbon-fiber-tube",
        permanent: true,
      },
      {
        source: "/products/ud-carbon-fiber-fabric-for-structural-strengthening",
        destination: "/products/structural-strengthening-system",
        permanent: true,
      },
      {
        source: "/products/pultruded-carbon-fiber-plate",
        destination: "/products/structural-strengthening-system",
        permanent: true,
      },
      {
        source: "/products/structural-epoxy-resin",
        destination: "/products/structural-strengthening-system",
        permanent: true,
      },
      {
        source: "/products/cnc-machined-cfrp-parts",
        destination: "/products/custom-carbon-fiber-products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
