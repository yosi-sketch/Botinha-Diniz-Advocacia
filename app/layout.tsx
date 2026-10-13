import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Bodoni_Moda({
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
const shareImage = "/Logotipo Jurídico LC em Ouro Metálico.png";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "Leonardo Carvalho Tenório | Advogado Trabalhista e Previdenciário | Pouso Alegre, MG",
  description:
    "Advogado trabalhista e previdenciário em Pouso Alegre, MG. Orientação clara e atendimento em todo o Brasil. Contato: (35) 99749-2543.",
  keywords: ["Leonardo Carvalho Tenório", "advogado trabalhista em Pouso Alegre", "Direito Trabalhista", "Direito Previdenciário", "Pouso Alegre MG"],
  icons: { icon: [{ url: shareImage, type: "image/png" }], apple: [{ url: shareImage, type: "image/png" }] },
  openGraph: {
    title: "Leonardo Carvalho Tenório | Advogado Trabalhista e Previdenciário",
    description:
      "Advocacia trabalhista e previdenciária em Pouso Alegre, MG. Atendimento em todo o Brasil.",
    locale: "pt_BR",
    siteName: "Leonardo Carvalho Tenório | Advogado Trabalhista e Previdenciário",
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 2172,
            height: 724,
            alt: "Leonardo Carvalho Tenório | Advogado Trabalhista e Previdenciário",
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title: "Leonardo Carvalho Tenório | Advogado Trabalhista e Previdenciário",
    description:
      "Advocacia trabalhista e previdenciária em Pouso Alegre, MG. Atendimento em todo o Brasil.",
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#080706",
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
