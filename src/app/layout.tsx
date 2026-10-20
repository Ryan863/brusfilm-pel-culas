import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const SITE_URL = "https://brusfilm-pel-culas.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Brusfilm Películas | Insulfilm Automotivo e Residencial em Brusque - SC",
  description:
    "Películas automotivas, residenciais, de segurança e nano-cerâmica em Brusque - SC. Atendimento por hora marcada e leva e traz. +8.000 clientes, nota 5.0 no Google.",
  keywords: [
    "insulfilm Brusque",
    "película automotiva Brusque",
    "película residencial",
    "nano-cerâmica",
    "película de segurança",
    "Brusfilm",
  ],
  openGraph: {
    title: "Brusfilm Películas | Insulfilm em Brusque - SC",
    description:
      "Proteção térmica, privacidade e sofisticação para seu veículo e imóvel. Orçamento direto no WhatsApp.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/hero-desktop.jpg", width: 1024, height: 572 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#05080d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "Brusfilm Películas",
  telephone: "+55 47 99978-9738",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Sete de Setembro, 534 - Sala 01 - Santa Rita",
    addressLocality: "Brusque",
    addressRegion: "SC",
    postalCode: "88352-001",
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "100",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} ${serif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
