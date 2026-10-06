import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

// All crawlers are allowed, including AI search bots (OAI-SearchBot,
// PerplexityBot, Claude-SearchBot). Add separate rules here later if you
// decide to block training crawlers such as GPTBot or ClaudeBot.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
