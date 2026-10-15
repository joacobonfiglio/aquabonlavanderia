import Image from "./Img";
import Link from "next/link";
import type { LandingData } from "./SeoLanding";
import type { ServiceDesign } from "./service-design";
import Breadcrumbs from "./Breadcrumbs";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import LocationBlock from "./LocationBlock";
import Ticket from "./Ticket";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import { CareSymbol, WhatsAppIcon } from "./ui";
import { SITE_URL, business, hours } from "./site";
import { guide } from "./guides";
import { seoDescriptions } from "./seo-descriptions";

export default function ServiceLanding({ data, design }: { data: LandingData; design: ServiceDesign }) {
  const url = SITE_URL + data.path;
  const description = seoDescriptions[data.path] ?? data.description;
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", "@id": url + "#service",
    name: data.h1, serviceType: design.name, description, url,
    image: SITE_URL + design.image,
    provider: { "@id": SITE_URL + "/#business" },
    areaServed: { "@type": "City", name: "Mar del Plata" },
    availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@id": SITE_URL + "/#business" }, servicePhone: business.phoneE164 },
  };
  const relatedServices = (data.related ?? []).filter(r => r.href.startsWith("/servicios") || r.href.startsWith("/tintoreria") || r.href.startsWith("/empresas"));
  const relatedGuides = design.guides.map(guide);
  return <>
    <SiteHeader event={data.event + "_header"} />
    <main id="contenido">
      <section className="phero section--espuma" aria-labelledby="servicio-titulo" data-cta-zone="">
        <div className="wrap">
          <Breadcrumbs items={data.crumbs} />
          <div className="phero__grid">
            <div>
              <h1 id="servicio-titulo">{data.h1}</h1>
              <p className="phero__lead">{data.intro}</p>
              <div className="actions">
                <WhatsAppLink className="btn" message={data.message} event={data.event} data-primary-cta=""><WhatsAppIcon />{data.cta}</WhatsAppLink>
                <a className="link" href="#como-funciona">Cómo funciona</a>
              </div>
              <dl className="facts">
                <div><dt>Recepción</dt><dd>{business.street}, {business.city}</dd></div>
                {hours.map(h => <div key={h.label}><dt>{h.short}</dt><dd>{h.text}</dd></div>)}
              </dl>
            </div>
            <figure>
              <Image src={design.image} alt={design.alt} width={1200} height={900} sizes="(max-width: 960px) 100vw, 480px" priority />
              {design.symbol ? <figcaption><CareSymbol name={design.symbol} />{design.name}</figcaption> : null}
            </figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="incluye-titulo" id="que-incluye">
        <div className="wrap split">
          <div>
            <h2 id="incluye-titulo">Qué incluye</h2>
            <p className="muted" style={{ marginTop: 12 }}>{design.intro}</p>
          </div>
          <ul className="cards cards--2">{data.items.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ul>
        </div>
      </section>

      <section className="section section--espuma" aria-labelledby="prendas-titulo">
        <div className="wrap split">
          <div>
            <h2 id="prendas-titulo">Para qué prendas sirve</h2>
            {data.sections.map(s => <div key={s.heading} style={{ marginTop: 20 }}><h3 style={{ fontSize: "1.05rem" }}>{s.heading}</h3><p className="muted" style={{ marginTop: 6 }}>{s.text}</p></div>)}
          </div>
          <ul className="cards">{design.guide.map(g => <li key={g.title}><h3>{g.title}</h3><p>{g.copy}</p></li>)}</ul>
        </div>
      </section>

      <section className="section" aria-labelledby="como-titulo" id="como-funciona">
        <div className="wrap split">
          <div>
            <h2 id="como-titulo">Cómo funciona</h2>
            <div className="note"><strong>Antes de traerlo</strong>{design.prepare}</div>
          </div>
          <ol className="talones">{data.steps.map(step => <li key={step.title}><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section section--espuma" aria-labelledby="consulta-titulo">
        <div className="wrap split">
          <div>
            <h2 id="consulta-titulo">Consultanos por tu prenda</h2>
            <p className="muted measure" style={{ marginTop: 12 }}>El mensaje ya está escrito: mandalo así o sumale detalles. Si podés, agregá una foto de la prenda y de su etiqueta.</p>
          </div>
          <Ticket data={{
            rows: [{ label: "Servicio", value: design.name.toLowerCase() }, { label: "Dónde", value: `${business.street}, ${business.city}` }],
            message: data.message, event: data.event + "_ticket", stub: "Precio y plazo te los confirmamos antes de que dejes la prenda.",
          }} />
        </div>
      </section>

      <section className="section" aria-labelledby="faq-titulo">
        <div className="wrap split">
          <h2 id="faq-titulo">Preguntas frecuentes</h2>
          <Faq items={data.faqs} />
        </div>
      </section>

      <section className="section section--espuma" aria-label="Servicios y guías relacionados">
        <div className="wrap related">
          {relatedServices.length ? <nav aria-labelledby="rel-servicios"><h2 id="rel-servicios">Otros servicios</h2><ul>{relatedServices.map(r => <li key={r.href}><Link href={r.href}>{r.label}</Link></li>)}</ul></nav> : null}
          <nav aria-labelledby="rel-guias"><h2 id="rel-guias">Guías para hacerlo en casa</h2><ul>{relatedGuides.map(g => <li key={g.href}><Link href={g.href}>{g.title}</Link></li>)}</ul></nav>
        </div>
      </section>

      <LocationBlock />
    </main>
    <SiteFooter />
    <JsonLd data={serviceSchema} />
  </>;
}
