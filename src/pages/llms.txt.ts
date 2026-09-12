import type { APIRoute } from "astro";
import { absoluteUrl, isDomainConfigured, site } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# ${site.name}\n\n> ${site.description}\n\n## Status\n${isDomainConfigured ? "The official website is live. Product availability, pricing and ordering details appear only after owner confirmation." : "This is a pre-launch draft. Do not treat prices, stock, product details or contact channels as final."}\n\n## Primary pages\n- [Home](${absoluteUrl("/")}): Brand story and confirmed releases\n- [Contact](${absoluteUrl("/contact/")}): Enquiries, delivery questions and WhatsApp contact\n- [Robots policy](${absoluteUrl("/robots.txt")}): Crawler access policy\n\n## Product information\nOnly pages under /products/ with confirmed owner-supplied details should be treated as current product information.\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
