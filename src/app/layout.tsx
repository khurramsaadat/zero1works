import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.zerooneworks.com";

export const metadata: Metadata = {
  title: {
    default: "Zero One Works Ltd - Web Design & Development Agency in Manchester",
    template: "%s | Zero One Works Ltd",
  },
  description: "Manchester-based web design agency with 59 live projects. We build high-performance websites, mobile apps, and e-commerce solutions that drive business growth.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Zero One Works Ltd",
    title: "Zero One Works Ltd - Web Design & Development Agency",
    description: "Manchester-based web design agency with 59 live projects. We build high-performance websites and applications.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Zero One Works Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero One Works Ltd",
    description: "Manchester-based web design agency with 59 live projects.",
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* JSON-LD structured data for Organization and WebSite */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Zero One Works Ltd",
      url: siteUrl,
      logo: `${siteUrl}/images/ZeroOne logo.png`,
      description: "Manchester-based web design and development agency.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1791 Holmcroft Rd",
        addressLocality: "Manchester",
        postalCode: "M18 7WQ",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "khurram@zerooneworks.com",
        contactType: "customer service",
      },
      sameAs: [
        "https://facebook.com",
        "https://twitter.com",
        "https://linkedin.com",
        "https://instagram.com",
        "https://github.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Zero One Works Ltd",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://formspree.io; media-src 'self'; frame-src 'self' https://www.google.com;"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkipToContent />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
