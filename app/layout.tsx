import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import {
  absoluteSiteUrl,
  blockedRobotsContent,
  robotsContent,
  seoConfig,
  siteUrl,
} from "@/config/seo";
import "./globals.css";

const socialImageUrl = absoluteSiteUrl(seoConfig.socialImagePath);

export const metadata: Metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: { canonical: siteUrl },
      }
    : {}),
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  manifest: "/site.webmanifest",
  robots: {
    index: seoConfig.allowIndexing,
    follow: seoConfig.allowIndexing,
    noarchive: !seoConfig.allowIndexing,
    nosnippet: !seoConfig.allowIndexing,
    noimageindex: !seoConfig.allowIndexing,
    googleBot: {
      index: seoConfig.allowIndexing,
      follow: seoConfig.allowIndexing,
      noarchive: !seoConfig.allowIndexing,
      nosnippet: !seoConfig.allowIndexing,
      noimageindex: !seoConfig.allowIndexing,
    },
  },
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.openGraphDescription,
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: seoConfig.siteName,
    locale: "pt_BR",
    type: "website",
    ...(socialImageUrl
      ? {
          images: [
            {
              url: socialImageUrl,
              secureUrl: socialImageUrl,
              type: "image/jpeg",
              width: 1200,
              height: 630,
              alt: "Aitak Odontologia — cuidado completo para o seu sorriso em Sorocaba",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.twitterDescription,
    ...(socialImageUrl
      ? {
          images: [
            {
              url: socialImageUrl,
              alt: "Aitak Odontologia em Sorocaba",
            },
          ],
        }
      : {}),
  },
  appleWebApp: {
    capable: true,
    title: seoConfig.shortName,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "codex-preview": "development",
    bingbot: seoConfig.allowIndexing ? robotsContent : blockedRobotsContent,
    "msapplication-TileColor": seoConfig.themeColor,
    "msapplication-config": "none",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seoConfig.themeColor,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  preload("/assets/fonts/geist-latin-variable.v1.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return <html lang="pt-BR">
    <head>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={seoConfig.themeColor} />
    </head>
    <body>{children}</body>
  </html>;
}
