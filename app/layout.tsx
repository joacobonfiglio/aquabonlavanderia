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
  metadataBase: new URL("https://www.aquabonlavanderia.com"),
  title: "Lavandería en Mar del Plata | Aquabon",
  description:
    "Lavandería de barrio en Gascón 2189, Mar del Plata. Valet de ropa, acolchados y recepción de tintorería con atención cercana.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lavandería en Mar del Plata | Aquabon",
    description:
      "Valet de ropa, acolchados y recepción de tintorería en Gascón 2189, Mar del Plata.",
    type: "website",
    locale: "es_AR",
    url: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DryCleaningOrLaundry",
              name: "Aquabon Lavandería",
              url: "https://www.aquabonlavanderia.com",
              image: "https://www.aquabonlavanderia.com/aquabon-fachada.png",
              telephone: "+54 9 223 560-7738",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gascón 2189",
                addressLocality: "Mar del Plata",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              areaServed: "Mar del Plata",
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de lavandería",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Valet de ropa",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lavado de acolchados",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Recepción de tintorería",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
