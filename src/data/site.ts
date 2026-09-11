export const site = {
  name: "Heaven & Nature",
  description: "A Pakistan-based independent fragrance brand built around transparent glass, considered labels and wooden caps.",
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

export const withBase = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBase}${normalizedPath}` || "/";
};

export const absoluteUrl = (path = "/") => new URL(withBase(path), `${canonicalSiteUrl}/`).toString();
