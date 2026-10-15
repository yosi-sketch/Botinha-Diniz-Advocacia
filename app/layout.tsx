import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Cinzel({
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
const title = "Dr. Murilo Alvarenga Nunes | Advogado em Piumhi, MG";
const description = "Advocacia em Piumhi e Capitólio, MG. Direito Ambiental, Previdenciário, Agronegócio, Bancário, Cível, Empresarial e Trabalhista. WhatsApp: (37) 99983-6911.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Murilo Alvarenga Nunes", "advogado em Piumhi", "advogado em Capitólio", "direito ambiental", "aposentadorias", "agronegócio", "direito bancário", "direito cível", "direito empresarial", "direito trabalhista"],
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
            width: 617,
            height: 788,
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
  themeColor: "#141310",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable}>
      <body className="min-h-screen bg-ivory font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
