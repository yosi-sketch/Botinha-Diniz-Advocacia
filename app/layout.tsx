import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.portrait;
const title = "Silva & Lopes Advocacia | Assessoria Jurídica em Formiga, MG";
const description = "Advocacia cível, criminal, previdenciária, empresarial e trabalhista em Formiga, MG. Converse com a Silva & Lopes pelo WhatsApp: (37) 99902-0336.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Silva & Lopes Advocacia", "advogado em Formiga", "direito cível", "direito criminal", "direito previdenciário", "direito empresarial", "direito trabalhista", "Formiga MG"],
  icons: { icon: [{ url: brand.logo, type: "image/png" }], apple: [{ url: brand.logo, type: "image/png" }] },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    siteName: brand.businessName,
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 675,
            height: 810,
            alt: brand.businessName,
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title,
    description,
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#5e171f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable}>
      <body className="min-h-screen bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
