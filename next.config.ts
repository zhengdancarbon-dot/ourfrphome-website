import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ourfrphome.com" }],
        destination: "https://www.ourfrphome.com/:path*",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-unidirectional-fabric",
        destination: "/products/carbon-fiber-ud-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-bidirectional-fabric",
        destination: "/products/carbon-fiber-woven-fabric",
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
        destination: "/products/pultruded-carbon-fiber-plate-structural-reinforcement",
        permanent: true,
      },
      {
        source: "/products/pultruded-carbon-fiber-plate-construction",
        destination: "/products/pultruded-carbon-fiber-plate-structural-reinforcement",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-prepreg-woven-fabric",
        destination: "/products/carbon-fiber-prepreg-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-unidirectional-prepreg",
        destination: "/products/carbon-fiber-prepreg-fabric",
        permanent: true,
      },
      {
        source: "/products/carbon-fiber-prepreg",
        destination: "/products/carbon-fiber-prepreg-fabric",
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
        source: "/products/carbon-fiber-yarn",
        destination: "/products/carbon-fiber-yarn-and-tow",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
