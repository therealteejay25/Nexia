import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  /* -----------------------------------
   * CORE BRAND & SEO
   * ----------------------------------- */
  metadataBase: new URL("https://nexiaspace.vercel.app"), // replace when live
  title: {
    default: "Nexia",
    template: "%s · Nexia",
  },
  description:
    "Nexia is the reliability-first AI platform for modern teams. Power confident operations with Axle (AI workflows) and Docr (living documentation).",

  keywords: [
    "Nexia",
    "AI platform",
    "AI workflows",
    "workflow automation",
    "AI documentation",
    "developer tools",
    "SaaS",
    "Axle AI",
    "Docr",
    "reliable AI",
  ],

  category: "technology",

  /* -----------------------------------
   * ICONS & BRANDING
   * ----------------------------------- */
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      // { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },

  /* -----------------------------------
   * CANONICAL & LANGUAGE
   * ----------------------------------- */
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },

  /* -----------------------------------
   * OPEN GRAPH (LINKEDIN, SLACK, ETC.)
   * ----------------------------------- */
  openGraph: {
    title: "Nexia — Reliable AI for Workflows & Documentation",
    description:
      "Stop gambling on AI. Nexia delivers operational confidence with Axle (workflow engine) and Docr (living docs).",
    url: "https://nexiaspace.vercel.app",
    siteName: "Nexia",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Nexia — The Foundation for Confident Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* -----------------------------------
   * TWITTER / X
   * ----------------------------------- */
  twitter: {
    card: "summary_large_image",
    site: "@nexiaspace",
    creator: "@nexiaspace",
    title: "Nexia — Reliability-First AI Platform",
    description:
      "Axle powers workflows. Docr keeps documentation alive. Nexia makes AI dependable.",
    images: ["/banner.png"],
  },

  /* -----------------------------------
   * ROBOTS & INDEXING
   * ----------------------------------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  /* -----------------------------------
   * SEARCH ENGINE TRUST SIGNALS
   * ----------------------------------- */
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  /* -----------------------------------
   * BRAND AUTHORITY
   * ----------------------------------- */
  applicationName: "Nexia",
  authors: [{ name: "Nexia Team", url: "https://nexiaspace.vercel.app" }],
  creator: "Nexia",
  publisher: "Nexia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
