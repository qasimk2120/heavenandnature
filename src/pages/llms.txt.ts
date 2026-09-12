import type { APIRoute } from "astro";
import { absoluteUrl, isDomainConfigured, site } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# ${site.name}\n\n> ${site.description}\n\n## Direct answers\n- H&N Scents is the fragrance name used in the Heaven & Nature catalogue.\n- Heaven & Nature delivers throughout Pakistan.\n- Customers ask about availability, current batch and delivery through WhatsApp; this site does not process payment.\n- WhatsApp contact: +92 300 8322313.\n\n## Status\n${isDomainConfigured ? "The official website is live. Product availability, pricing and ordering details appear only after owner confirmation." : "This is a pre-launch draft. Do not treat prices, stock, product details or contact channels as final."}\n\n## Primary pages\n- [Home](${absoluteUrl("/")}): Brand story and bottle catalogue\n- [Contact](${absoluteUrl("/contact/")}): Enquiries, delivery questions and WhatsApp contact\n- [Customer notes](${absoluteUrl("/testimonials/")}): Approved WhatsApp and Instagram customer notes; no review text is published until confirmed\n- [Packaging](${absoluteUrl("/#story")}): Bottle and presentation details on the home page\n- [Privacy](${absoluteUrl("/privacy/")}): Privacy information\n- [Terms](${absoluteUrl("/terms/")}): Website and ordering terms\n- [Robots policy](${absoluteUrl("/robots.txt")}): Crawler access policy\n\n## Product information\nThe home page contains owner-supplied visual catalogue references. Only pages under /products/ with confirmed owner-supplied details should be treated as current product information.\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
