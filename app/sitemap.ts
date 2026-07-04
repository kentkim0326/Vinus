import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vinusapp.netlify.app";

  const staticPages = [
    "",
    "/explore",
    "/feed",
    "/about",
    "/become-a-creator",
    "/roadmap",
    "/dashboard",
    "/my",
  ];

  const creatorPages = Array.from({ length: 9 }, (_, i) => `/creator/${i + 1}`);

  return [...staticPages, ...creatorPages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/creator") ? 0.8 : 0.6,
  }));
}
