const BASE_URL = "https://peacechigozie.com"; // Replace with her final domain

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}