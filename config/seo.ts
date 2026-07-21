const normalizeSiteUrl = (value: string | undefined) => {
  const candidate = value?.trim().replace(/\/+$/, "");

  if (!candidate) return undefined;

  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return undefined;
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return undefined;
  }
};

// Alterar allowIndexing para true somente após aprovação do site
// e definição do domínio oficial.
export const seoConfig = {
  allowIndexing: false,
  siteName: "Aitak Odontologia",
  shortName: "Aitak",
  defaultTitle: "Aitak Odontologia | Dentista em Sorocaba",
  defaultDescription:
    "Clínica odontológica em Sorocaba com atendimento humanizado, prevenção, ortodontia, implantes, próteses, estética e diversos convênios.",
  openGraphDescription:
    "Clínica odontológica em Sorocaba com atendimento humanizado e cuidado completo para o seu sorriso.",
  twitterDescription:
    "Atendimento odontológico humanizado e cuidado completo no Centro de Sorocaba.",
  socialImagePath: "/social/aitak-og-image-1200x630.jpg",
  themeColor: "#063E31",
} as const;

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const blockedRobotsContent =
  "noindex, nofollow, noarchive, nosnippet, noimageindex";

export const allowedRobotsContent = "index, follow";

export const robotsContent = seoConfig.allowIndexing
  ? allowedRobotsContent
  : blockedRobotsContent;

export const absoluteSiteUrl = (path = "/") => {
  if (!siteUrl) return undefined;
  return new URL(path, `${siteUrl}/`).toString();
};
