import { MetadataRoute } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL! || "https://scituinsk.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login", "/proxy/", "/api/", "/privacy-policy", "/terms-of-service"],
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
