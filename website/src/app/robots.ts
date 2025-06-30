import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/_next/", "/out/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/_next/", "/out/"],
      },
    ],
    sitemap: "https://aki-ui.akitect.io/sitemap.xml",
  };
}
