import type { Metadata } from "next";
import Breadcrumbs from "./Breadcrumbs";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export function legalMetadata(title: string, path: string): Metadata {
  return { title: title + " | Aquabon", description: `${title} de Aquabon Lavandería, Gascón 2189, Mar del Plata.`, alternates: { canonical: path }, robots: { index: false, follow: true, googleBot: { index: false, follow: true } } };
}

export default function LegalPage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  return <>
    <SiteHeader />
    <main id="contenido" className="wrap legal">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: title, href: path }]} />
      <article className="prose"><h1>{title}</h1>{children}<p>Última actualización: 14 de septiembre de 2026.</p></article>
    </main>
    <SiteFooter />
  </>;
}
