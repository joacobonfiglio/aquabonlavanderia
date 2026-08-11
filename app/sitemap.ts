import type { MetadataRoute } from "next";

const siteUrl = "https://www.aquabonlavanderia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/nosotros`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${siteUrl}/servicios/valet-de-ropa`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servicios/acolchados`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servicios/tintoreria`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
