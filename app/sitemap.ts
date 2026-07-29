import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const paths = ["", "/about", "/parai", "/academy", "/performances", "/workshops", "/contact"]; return paths.map((path) => ({ url: `https://agniarts.in${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 })); }
