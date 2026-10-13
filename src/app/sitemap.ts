import { MetadataRoute } from "next";
import { loanServices } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vendansh.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/emi-calculator",
    "/partner-with-us",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/grievance-redressal",
    "/cookies",
  ];

  const serviceRoutes = loanServices.map((s) => `/services/${s.slug}`);

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
