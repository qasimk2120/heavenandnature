import type { APIRoute } from "astro";
import { absoluteUrl, isDomainConfigured } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = isDomainConfigured
    ? `User-agent: *\nAllow: /\n\n# Keep search and answer-engine crawlers discoverable.\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: anthropic-ai\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap-index.xml")}\n`
    : "User-agent: *\nDisallow: /\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
