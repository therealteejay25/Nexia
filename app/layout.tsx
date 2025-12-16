import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- START OPTIMIZED METADATA ---
export const metadata: Metadata = {
  // 1. Primary Title (Max 60 chars) - Focus on Brand Name & Core Benefit
  title: "Nexia",

  // 2. Primary Description (Max 160 chars) - The Value Proposition
  description:
    "Nexia provides the foundation for confident operations. Get guaranteed reliability with Axle (AI workflow engine) and Docr (living documentation hub). Stop worrying, start shipping impact.",
    icons: {
      icon: [
          { url: '/favicon.svg' }, // Primary
      ],
      apple: '/favicon.svg', // iOS Home Screen
  },
  // 3. Keywords (For internal reference, less direct SEO value but helpful)
  keywords: [
    "Nexia",
    "AI SaaS",
    "Workflow Automation",
    "AI Documentation",
    "Axle",
    "Docr",
    "Reliable AI",
    "Business Automation",
    "Developer Tools",
  ],

  // 4. Canonical URL (Always set this to your domain when live)
  // metadataBase: new URL('https://www.nexia.ai'),

  // 5. Open Graph (OG) Tags - Essential for social sharing (LinkedIn, X)
  openGraph: {
    title: "Nexia: Quality AI Platform for Reliable Workflows & Docs",
    description:
      "Stop betting on AI. Demand reliability. Nexia guarantees stability with Axle (workflows) and Docr (docs).",
    url: "https://https://nexiaspace.vercel.app", // Replace with your live domain
    siteName: "Nexia",
    images: [
      {
        url: "/banner.png", // Must be a high-quality, professional image/logo
        width: 1200,
        height: 630,
        alt: "Nexia: The Foundation for Confident Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 6. Twitter Card - Essential for X/Twitter sharing
  twitter: {
    card: "summary_large_image",
    site: "@nexiaspace", // Replace with your X/Twitter handle
    creator: "@nexiaspace", // Replace with your X/Twitter handle
    title: "Nexia: Guaranteed Reliability in AI Workflows and Docs",
    description: "The quality-first platform: Axle (workflows) and Docr (docs) ensure operational confidence, not uncertainty.",
    images: ["/banner.png"],
  },

  // 7. Robots (Controls how search engines crawl your site)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
// --- END OPTIMIZED METADATA ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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