import type { APIRoute } from "astro";
import { absoluteUrl, isDomainConfigured, site, whatsappDisplayNumber } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# ${site.name}\n\n> ${site.description}\n\n## Direct answers\n- H&N Scents is the fragrance name used in the Heaven & Nature catalogue.\n- Heaven & Nature delivers throughout Pakistan.\n- Customers ask about availability, current batch and delivery through WhatsApp; this site does not process payment.\n- WhatsApp contact: ${whatsappDisplayNumber}.\n\n## Status\n${isDomainConfigured ? "The official website is live. Product availability, pricing and ordering details appear only after owner confirmation." : "This is a pre-launch draft. Do not treat prices, stock, product details or contact channels as final."}\n\n## Primary pages\n- [Home](${absoluteUrl("/")}): Fragrance collection\n- [Fragrances](${absoluteUrl("/fragrances/")}): Full fragrance catalogue with filters and search\n- [Contact](${absoluteUrl("/contact/")}): Enquiries, delivery questions and WhatsApp contact\n- [Customer notes](${absoluteUrl("/testimonials/")}): Customer notes page with a clearly labelled temporary review placeholder\n- [Privacy](${absoluteUrl("/privacy/")}): Privacy information\n- [Terms](${absoluteUrl("/terms/")}): Website and ordering terms\n- [Robots policy](${absoluteUrl("/robots.txt")}): Crawler access policy\n\n## Product information\nThe home page contains owner-supplied visual catalogue references. Only pages under /products/ with confirmed owner-supplied details should be treated as current product information.\n`;

  const localizedBody = body.replace(
    "Customers ask about availability, current batch and delivery through WhatsApp; this site does not process payment.",
    "Customers can make enquiries in English, Urdu, Pashto, Punjabi and Sindhi.\n- Customers ask about availability, current batch and delivery through WhatsApp; this site does not process payment."
  );

  return new Response(localizedBody, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
