import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./conversion.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aquabonlavanderia.com"),
  title: "Lavandería en Mar del Plata | Aquabon",
  description: "Lavandería en Mar del Plata: valet de ropa, lavado de acolchados, tintorería, planchado y prendas especiales en Gascón 2189.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lavandería en Mar del Plata | Aquabon",
    description: "Lavado, secado y doblado de ropa, acolchados y recepción de tintorería en Gascón 2189, Mar del Plata.",
    type: "website", locale: "es_AR", url: "/",
    images: [{ url: "/aquabon-fachada.png", width: 1200, height: 800, alt: "Fachada de Aquabon Lavandería en Mar del Plata" }],
  },
  twitter: { card: "summary_large_image", title: "Lavandería en Mar del Plata | Aquabon", description: "Valet de ropa, acolchados y tintorería en Gascón 2189, Mar del Plata.", images: ["/aquabon-fachada.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "DryCleaningOrLaundry", "@id": "https://www.aquabonlavanderia.com/#business",
  name: "Aquabon Lavandería", url: "https://www.aquabonlavanderia.com", image: "https://www.aquabonlavanderia.com/aquabon-fachada.png",
  telephone: "+54 9 223 560-7738", priceRange: "$$", areaServed: { "@type": "City", name: "Mar del Plata" },
  address: { "@type": "PostalAddress", streetAddress: "Gascón 2189", addressLocality: "Mar del Plata", addressRegion: "Buenos Aires", addressCountry: "AR" },
  hasMap: "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Servicios de lavandería",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Valet de ropa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lavado de acolchados" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recepción de tintorería" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planchado" } },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geistSans.variable + " " + geistMono.variable + " antialiased"}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {children}
      </body>
    </html>
  );
}
