export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function absoluteUrl(path: string) {
  if (!siteUrl) return undefined;
  return new URL(path, `${siteUrl}/`).toString();
}

export function pageMetadata(title: string, description: string, path: string) {
  const canonical = absoluteUrl(path);
  const openGraphUrl = absoluteUrl(path);
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title,
      description,
      type: "website" as const,
      ...(openGraphUrl ? { url: openGraphUrl } : {}),
    },
    twitter: {
      card: "summary" as const,
      title,
      description,
    },
  };
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
