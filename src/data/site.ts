export const site = {
  name: "Heaven & Nature",
  description: "H&N Scents is a Pakistan-based fragrance brand with transparent glass bottles, considered labels and warm wooden caps.",
  location: "Pakistan",
  fallbackUrl: "https://heavenandnature.example"
} as const;

export const configuredSiteUrl = import.meta.env.SITE_URL?.replace(/\/$/, "") || "";
const configuredBase = import.meta.env.SITE_BASE?.trim() || "";
export const siteBase = configuredBase && configuredBase !== "/"
  ? `/${configuredBase.replace(/^\/+|\/+$/g, "")}`
  : "";
export const canonicalSiteUrl = configuredSiteUrl || site.fallbackUrl;
export const isDomainConfigured = Boolean(
  configuredSiteUrl && !new URL(configuredSiteUrl).hostname.endsWith(".example")
);

export const whatsappNumber = (import.meta.env.PUBLIC_WHATSAPP_NUMBER || "923180194606").replace(/\D/g, "");
export const whatsappTelephone = `+${whatsappNumber}`;
export const whatsappDisplayNumber = whatsappNumber === "923180194606" ? "+92 318 0194606" : whatsappTelephone;
export const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;
export const whatsappUrl = (message: string) => {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};

export const withBase = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBase}${normalizedPath}` || "/";
};

export const absoluteUrl = (path = "/") => new URL(withBase(path), `${canonicalSiteUrl}/`).toString();
