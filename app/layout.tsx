import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Apex Executive Limo | Premium Luxury Transportation Toronto & GTA",
  description: "Experience luxury transportation in the Greater Toronto Area with Apex Executive Limo. Professional chauffeur service, airport transfers, corporate transportation, and special events. Available 24/7.",
  keywords: "Apex Executive Limo, limo service GTA, Toronto airport transportation, luxury car service, chauffeur service Toronto, corporate transportation, wedding limo, airport limo",
  openGraph: {
    title: "Apex Executive Limo - Premium Limo Service GTA",
    description: "Luxury transportation and chauffeur service in the Greater Toronto Area",
    type: "website",
    url: "https://www.apexlimo.ca",
    siteName: "Apex Executive Limo",
    images: [
      {
        url: "/apexLogo.png",
        width: 1200,
        height: 630,
        alt: "Apex Executive Limo - Premium Luxury Transportation",
      },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Executive Limo - Premium Limo Service GTA",
    description: "Luxury transportation and chauffeur service in the Greater Toronto Area",
    images: ["/apexLogo.png"],
  },
  metadataBase: new URL("https://www.apexlimo.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17929127579"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-gtag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17929127579');
          `}
        </Script>
      </head>
      <body className={inter.variable}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}

