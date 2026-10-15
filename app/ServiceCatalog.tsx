import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import Breadcrumbs from "./Breadcrumbs";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import { CareSymbol, WhatsAppIcon } from "./ui";
import { SITE_URL, services, businessLinks } from "./site";
import { servicesHub } from "./landing-data";

export default function ServiceCatalog() {
  const list = { "@context": "https://schema.org", "@type": "ItemList", name: "Servicios de Aquabon Lavandería", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: SITE_URL + s.href })) };
  return <>
    <SiteHeader event="whatsapp_servicios_header" />
    <main id="contenido">
      <section className="phero section--espuma" aria-labelledby="servicios-titulo" data-cta-zone="">
        <div className="wrap">
          <Breadcrumbs items={servicesHub.crumbs} />
          <div className="phero__grid phero__grid--solo"><div>
            <h1 id="servicios-titulo">Servicios de lavandería y tintorería en Mar del Plata</h1>
            <p className="phero__lead">Ropa de todos los días, acolchados, prendas delicadas, teñido, arreglos y zapatillas. Si no sabés cuál necesitás, mandanos una foto de la prenda y su etiqueta.</p>
            <div className="actions"><WhatsAppLink className="btn" message={servicesHub.message} event={servicesHub.event} data-primary-cta=""><WhatsAppIcon />{servicesHub.cta}</WhatsAppLink></div>
          </div></div>
        </div>
      </section>
      <section className="section" aria-labelledby="lista-titulo">
        <div className="wrap">
          <h2 id="lista-titulo" className="sr-only">Todos los servicios</h2>
          <ul className="catalog">
            {services.map(s => <li key={s.href}><Link href={s.href}>
              <span aria-hidden="true">{s.symbol ? <CareSymbol name={s.symbol} /> : null}</span>
              <strong>{s.name}</strong>
              <p>{s.short}</p>
            </Link></li>)}
          </ul>
          <p className="muted" style={{ marginTop: 28 }}>¿Tenés un alojamiento, un restaurante o un equipo? Mirá los <Link className="link" href="/empresas">servicios para empresas</Link>: {businessLinks.map(b => b.name.toLowerCase()).join(", ")}.</p>
        </div>
      </section>
      <section className="section section--espuma" aria-labelledby="faq-titulo">
        <div className="wrap split"><h2 id="faq-titulo">Preguntas frecuentes</h2><Faq items={servicesHub.faqs} /></div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={list} />
  </>;
}
