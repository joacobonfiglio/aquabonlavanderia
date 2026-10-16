import type { Metadata } from "next";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import { PageHero } from "./Blocks";
import { WhatsAppIcon } from "./ui";

export function legalMetadata(title: string, path: string): Metadata {
  return { title: title + " | Aquabon", description: `${title} de Aquabon Lavandería, Gascón 2189, Mar del Plata.`, alternates: { canonical: path }, robots: { index: false, follow: true, googleBot: { index: false, follow: true } } };
}

export default function LegalPage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={[{ label: "Inicio", href: "/" }, { label: title, href: path }]}
        kicker="Información legal"
        title={title}
        lead="Aquabon Lavandería, Gascón 2189, Mar del Plata. Si tenés una consulta sobre esta información, escribinos."
        facts={false}
        actions={<WhatsAppLink className="btn btn--outline-light btn--xl" message="Hola Aquabon, tengo una consulta sobre la información legal de la web." event="whatsapp_legal"><WhatsAppIcon />Consultar</WhatsAppLink>}
      />
      <section className="p-sec"><div className="wrap"><article className="prose legal">{children}<p>Última actualización: 14 de septiembre de 2026.</p></article></div></section>
    </main>
    <SiteFooter />
  </>;
}
