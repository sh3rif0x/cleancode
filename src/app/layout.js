import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cleancode.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clean Code | Software & Programming Company in Egypt",
    template: "%s | Clean Code",
  },
  description:
    "Clean Code is a software and programming company in Egypt. We build websites, web apps, and integrations for businesses across Cairo, Giza, Alexandria, and all 27 governorates. شركة برمجة وتطوير مواقع في مصر.",
  keywords: [
    "software company Egypt",
    "programming company Egypt",
    "web development company Cairo",
    "شركة برمجة في مصر",
    "شركة سوفت وير",
    "تطوير مواقع القاهرة",
    "Clean Code",
    "Next.js",
    "web apps Egypt",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    siteName: "Clean Code",
    title: "Clean Code | Software & Programming Company in Egypt",
    description:
      "Websites, web apps, and software for Egyptian businesses — Arabic & English support across all governorates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Code | Software Company in Egypt",
    description:
      "Professional web development and programming services across Egypt.",
  },
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
