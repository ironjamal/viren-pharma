import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { roles } from "@/data/careers";
import { products } from "@/data/products";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  const paths = ["/", "/about", "/products", "/science-innovation", "/manufacturing", "/quality", "/healthcare-professionals", "/news-insights", "/careers", "/contact"];
  return [...paths, ...products.map((item) => `/products/${item.slug}`), ...articles.map((item) => `/news-insights/${item.slug}`), ...roles.map((item) => `/careers/${item.slug}`)].map((path) => ({ url: new URL(path, `${siteUrl}/`).toString() }));
}
