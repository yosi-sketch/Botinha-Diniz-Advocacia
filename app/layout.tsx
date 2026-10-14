import type { Metadata, Viewport } from "next";
import { Outfit, Manrope } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Outfit({
  variable: "--font-display-face",
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
const title = "RAS Advogados | Advocacia em Sete Lagoas, MG";
const description = "Assessoria jurídica em Direito Empresarial e Civil, Penal Empresarial e Financeiro, Imobiliário e Planejamento Sucessório. RAS Advogados em Sete Lagoas: (31) 3177-0100.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["RAS Advogados", "advogado em Sete Lagoas", "direito civil", "direito penal empresarial", "direito financeiro", "direito empresarial", "direito imobiliário", "planejamento sucessório", "Sete Lagoas MG"],
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
            width: 681,
            height: 840,
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
  themeColor: "#0e3b55",
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
