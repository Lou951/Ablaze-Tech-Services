import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ablaze Tech Services | Freelance Web Developer",
    template: "%s | Ablaze Tech Services",
  },
  description:
    "Premium websites for small businesses, creators and local brands. Ablaze Tech Services builds fast, modern websites designed to look professional, load quickly and generate enquiries.",
  keywords: [
    "freelance web developer",
    "small business websites",
    "website designer",
    "web developer Newport",
    "web developer South Wales",
    "creator websites",
    "Next.js websites",
    "landing pages",
    "website refresh",
  ],
  authors: [{ name: "Ablaze Tech Services" }],
  creator: "Ablaze Tech Services",
  publisher: "Ablaze Tech Services",
  metadataBase: new URL("https://ablazetechservices.com"),
  openGraph: {
    title: "Ablaze Tech Services | Freelance Web Developer",
    description:
      "Fast, modern websites for small businesses, creators and local brands.",
    url: "https://ablazetechservices.com",
    siteName: "Ablaze Tech Services",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ablaze Tech Services - Premium websites for small businesses and creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ablaze Tech Services | Freelance Web Developer",
    description:
      "Fast, modern websites for small businesses, creators and local brands.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/ablaze-mark.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/ablaze-mark.png",
    apple: "/images/ablaze-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-950 antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
