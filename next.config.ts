import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  redirects: () => {
    return [
      {
        source: "/admin",
        destination: "/admin/projects",
        permanent: false,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  htmlLimitedBots: /.*/,
};

export default nextConfig;
