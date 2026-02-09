// src/app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import siteConfig from "../data/siteConfig";
import { Poppins } from "next/font/google";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.description,

  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.companyName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    images: [siteConfig.seo.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-secondary antialiased`}>
        
        {/* ✅ Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>

        <Header />

        <main
          id="main-content"
          className="relative min-h-screen bg-secondary"
        >
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp Support */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
