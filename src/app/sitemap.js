import { getAllPosts } from "../data/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cleancode.dev";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/projects", "/blog", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
    })
  );

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
