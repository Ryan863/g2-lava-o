import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "G2 Lavação & Estética Automotiva | Pomerode - SC",
  description:
    "O mais alto nível de cuidado, proteção e renovação para o seu veículo em Pomerode. Lavagem Snow Foam, aplicação de Colt Cerâmico e detalhamento cirúrgico.",
  keywords: [
    "estética automotiva Pomerode",
    "lavação de carros Pomerode",
    "G2 Lavação",
    "detalhamento automotivo SC",
    "Snow Foam Pomerode",
    "vitrificação e Colt cerâmico",
    "lavagem técnica de carros",
  ],
  authors: [{ name: "G2 Lavação & Estética Automotiva" }],
  creator: "G2 Lavação",
  publisher: "G2 Lavação & Estética Automotiva",
  metadataBase: new URL("https://g2-lavacao.vercel.app"),
  openGraph: {
    title: "G2 Lavação & Estética Automotiva | Pomerode - SC",
    description:
      "Precisão. Brilho. Proteção. O mais alto padrão de detalhamento automotivo e lavagem técnica em Pomerode.",
    url: "https://g2-lavacao.vercel.app",
    siteName: "G2 Lavação & Estética Automotiva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/g2/image_1.png",
        width: 1200,
        height: 670,
        alt: "G2 Lavação & Estética Automotiva - Pomerode SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G2 Lavação & Estética Automotiva | Pomerode - SC",
    description:
      "O mais alto nível de cuidado, proteção e renovação para o seu veículo em Pomerode.",
    images: ["/assets/g2/image_1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/g2/logo.webp",
    apple: "/assets/g2/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "G2 Lavação & Estética Automotiva",
    image: "https://g2-lavacao.vercel.app/assets/g2/image_1.png",
    logo: "https://g2-lavacao.vercel.app/assets/g2/logo.webp",
    telephone: "+55-47-9338-54886",
    url: "https://g2-lavacao.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Progresso, 4611 - Cs 2 - Testo Alto",
      addressLocality: "Pomerode",
      addressRegion: "SC",
      postalCode: "89107-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.7118,
      longitude: -49.1912,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "4",
      bestRating: "5",
    },
    priceRange: "$$",
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090A] text-slate-100 font-sans selection:bg-[#CEFF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
