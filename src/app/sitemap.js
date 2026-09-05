import { projects } from "@/data/projects";

const BASE_URL = "https://peacechigozie.com"; // Replace with her final domain

export default async function sitemap() {
  // Static route definitions
  const staticRoutes = [
    "/",
    "/projects",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic project case study routes
  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}