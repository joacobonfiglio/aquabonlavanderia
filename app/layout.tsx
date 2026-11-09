import type { Metadata, Viewport } from "next";
import WhatsAppContact from "./WhatsAppContact";
import Motion from "./Motion";
import JsonLd from "./JsonLd";
import CookieConsent from "./CookieConsent";
import GoogleAnalyticsTag from "./GoogleAnalyticsTag";
import { GA_ID, consentScript } from "./ga";
import { SITE_URL, business, hours, pickupZones } from "./site";
import "./aquabon.css";
import "./sections.css";


const description = "Valet, tintorería, acolchados y zapatillas en Mar del Plata. Más de 10 años lavando con cuidado. Retiro y entrega a domicilio. Consultá por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lavandería y tintorería en Mar del Plata | Aquabon",
  description,
  alternates: { canonical: "/" },
  verification: { google: "4mHzlA2EK0KE4ozLRcdpIRTNCmuPoOECzvX6bR-DfsY" },
  openGraph: { title: "Lavandería y tintorería en Mar del Plata | Aquabon", description, type: "website", locale: "es_AR", url: "/", siteName: business.name, images: [{ url: "/laundry-hero-v2.webp", width: 1536, height: 1024, alt: "Ropa lavada y doblada en tonos blancos y azules, Aquabon Lavandería" }] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#12285f", width: "device-width", initialScale: 1, viewportFit: "cover" };

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  "@id": SITE_URL + "/#business",
  name: business.name,
  alternateName: ["Aquabon Lavandería", "Aquabon"],
  description: "Lavandería y tintorería en Mar del Plata con más de 10 años en el rubro: valet de ropa, lavado de acolchados, tintorería, planchado, teñido, arreglos y costura, lavado de zapatillas, camperas y tapados, y retiro y entrega a consultar.",
  url: SITE_URL + "/",
  telephone: business.phoneE164,
  image: SITE_URL + "/laundry-hero-v2.webp",
  logo: SITE_URL + "/logo-aquabon.png",
  address: { "@type": "PostalAddress", streetAddress: business.street, postalCode: business.postalCode, addressLocality: business.city, addressRegion: business.region, addressCountry: business.country },
  ...(business.geo ? { geo: { "@type": "GeoCoordinates", ...business.geo } } : {}),
  openingHoursSpecification: hours.map(h => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days.map(d => "https://schema.org/" + d), opens: h.opens, closes: h.closes })),
  areaServed: [
    { "@type": "City", name: "Mar del Plata" },
    ...pickupZones.map(z => ({ "@type": "Place", name: `${z.name}, Mar del Plata` })),
  ],
  hasMap: business.googleBusiness,
  // TODO(joaco): sumar acá Facebook, Apple Business Connect y Bing Places cuando estén dados de alta.
  sameAs: [business.instagram, business.googleBusiness],
  contactPoint: { "@type": "ContactPoint", telephone: business.phoneE164, contactType: "customer service", availableLanguage: "es", contactOption: "WhatsApp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es-AR" suppressHydrationWarning>
    <head>
      {/* Solo se precarga la tipografía de texto; la manuscrita del ticket se baja cuando aparece. */}
      <link rel="preload" href="/fonts/schibsted-grotesk-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      {GA_ID ? <script dangerouslySetInnerHTML={{ __html: consentScript }} /> : null}
    </head>
    <body>
      <a className="skip" href="#contenido">Ir al contenido</a>
      <JsonLd data={businessSchema} />
      {children}
      <WhatsAppContact />
      <CookieConsent />
      <Motion />
    </body>
    {GA_ID ? <GoogleAnalyticsTag gaId={GA_ID} /> : null}
  </html>;
}
