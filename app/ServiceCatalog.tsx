import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import Img from "./Img";
import ChatPreview from "./ChatPreview";
import { PageHero, Ribbon } from "./Blocks";
import { CareSymbol, WhatsAppIcon } from "./ui";
import { SITE_URL, services, businessLinks } from "./site";
import { servicesHub } from "./landing-data";

export default function ServiceCatalog() {
  const list = { "@context": "https://schema.org", "@type": "ItemList", name: "Servicios de Aquabon Lavandería", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: SITE_URL + s.href })) };
  return <>
    <SiteHeader event="whatsapp_servicios_header" overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={servicesHub.crumbs}
        kicker="Todo en un mismo mostrador"
        title="Servicios de lavandería y tintorería en Mar del Plata"
        lead="Ropa de todos los días, acolchados, prendas delicadas, teñido, arreglos y zapatillas. Si no sabés cuál necesitás, mandanos una foto de la prenda y su etiqueta."
        image={{ src: "/laundry-hero-v2.webp", alt: "Pila de ropa lavada y doblada en tonos blancos y azules" }}
        chip={{ symbol: "wash", text: `${services.length} servicios` }}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={servicesHub.message} event={servicesHub.event} data-primary-cta=""><WhatsAppIcon />{servicesHub.cta}</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#lista">Ver los servicios</a>
        </>}
      />
      <Ribbon words={services.map(s => s.name)} />
      <section className="p-sec" id="lista" aria-labelledby="lista-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="lista-titulo">Elegí tu servicio</h2><p>Cada prenda pasa por el mostrador antes de lavarse: miramos etiqueta, tejido y estado, y recién ahí elegimos el proceso.</p></div>
          <div className="bento bento--six">
            {services.map((s, i) => <Link key={s.href} href={s.href} className="bento__card" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <Img src={s.image} alt={s.alt} width={1200} height={900} sizes="(max-width: 960px) 100vw, 400px" />
              <span className="bento__body">{s.symbol ? <CareSymbol name={s.symbol} /> : null}<strong>{s.name}</strong><span>{s.short}</span><em>Ver el servicio</em></span>
            </Link>)}
          </div>
          <p className="muted" style={{ marginTop: 28 }}>¿Tenés un alojamiento, un restaurante o un equipo? Mirá los <Link className="link" href="/empresas">servicios para empresas</Link>: {businessLinks.map(b => b.name.toLowerCase()).join(", ")}.</p>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" aria-labelledby="faq-titulo">
        <div className="wrap h-pick__grid">
          <div><div className="h-head" data-reveal><h2 id="faq-titulo">Preguntas frecuentes</h2></div><Faq items={servicesHub.faqs} /></div>
          <div className="h-pick__ticket" data-reveal>
            <p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p>
            <ChatPreview data={{ message: servicesHub.message, event: servicesHub.event + "_chat", next: "te decimos qué servicio conviene, el precio y el plazo" }} />
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={list} />
  </>;
}
