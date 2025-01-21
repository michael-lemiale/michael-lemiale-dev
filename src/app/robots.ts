import { host } from "@/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${host}/sitemap.xml`,
  };
}
