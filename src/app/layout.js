import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Toaster } from "sonner";

import { LiquidGlassFilter } from "@/components/LiquidGlass";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://peacechigozie.com"),
  title: {
    default: "Peace Chigozie | Product & Project Manager",
    template: "%s | Peace Chigozie",
  },
  description:
    "Product & Project Manager specializing in cross-functional team leadership, strategic product delivery, agile workflows, and end-to-end roadmap execution.",
  keywords: [
    "Peace Chigozie",
    "Product Manager",
    "Project Manager",
    "Technical Project Manager",
    "Agile Leadership",
    "Product Strategy",
    "Roadmap Execution",
    "Cross-Functional Leadership",
    "Software Delivery",
  ],
  authors: [{ name: "Peace Chigozie" }],
  creator: "Peace Chigozie",
  publisher: "Peace Chigozie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Peace Chigozie | Product & Project Manager",
    description:
      "Strategic Product & Project Manager driving end-to-end software delivery, team alignment, and digital product execution.",
    url: "https://peacechigozie.com", // Replace with her final live domain
    siteName: "Peace Chigozie Portfolio",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Peace Chigozie - Product & Project Manager Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peace Chigozie | Product & Project Manager",
    description:
      "Strategic Product & Project Manager driving end-to-end software delivery, team alignment, and digital product execution.",
    images: ["/images/og-image.webp"],
  },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} no-scrollbar`}>
      <body className="font-sans flex flex-col min-h-screen">
        <Navbar />

        <main id="main-content" role="main" className="grow">
          <LiquidGlassFilter />
          {children}
          <Toaster richColors position="bottom-right" />
        </main>

        <Footer />
      </body>
    </html>
  );
}