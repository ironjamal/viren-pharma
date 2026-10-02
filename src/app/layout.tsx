import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConceptNotice } from "@/components/ConceptNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME } from "@/data/site";
import { siteUrl } from "@/lib/site";

const inter = localFont({
  src: "../../public/fonts/InterVariable.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: `${SITE_NAME} | Advancing Better Health`, template: `%s | ${SITE_NAME}` },
  description: "Explore the fictional VIREN Pharma portfolio, science-led capabilities, and healthcare resources. Concept content only; not medical guidance.",
  applicationName: SITE_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Advancing Better Health`,
    description: "A fictional pharmaceutical company website concept. Portfolio and company content are illustrative only.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Advancing Better Health`,
    description: "A fictional pharmaceutical company website concept. Portfolio and company content are illustrative only.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} bg-paper text-ink`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <ConceptNotice />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
