import type { Metadata } from "next";
import Link from "next/link";
import { seoDescriptions } from "./seo-descriptions";
import ServiceLanding from "./ServiceLanding";
import { serviceDesigns } from "./service-design";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import LocationBlock from "./LocationBlock";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import { WhatsAppIcon } from "./ui";
import { SITE_URL, business, hours } from "./site";

type Item = { title: string; copy: string };
type FaqEntry = { question: string; answer: string };
export type LandingData = {
  path: string; title: string; description: string; eyebrow: string; h1: string; intro: string;
  crumbs: Crumb[]; event: string; message: string; cta: string;
  sections: { heading: string; text: string }[]; items: Item[]; steps: Item[]; faqs: FaqEntry[];
  related?: { label: string; href: string }[]; showLocation?: boolean;
};

export function landingMetadata(data: LandingData): Metadata {
  const design = data.path.startsWith("/servicios/") ? serviceDesigns[data.path.split("/").at(-1) || ""] : undefined;
  const description = seoDescriptions[data.path] ?? data.description;
  const images = design
    ? [{ url: design.image, alt: design.alt }]
    : [{ url: "/aquabon-fachada.jpg", width: 1092, height: 1118, alt: "Vidriera de Lavandería Aquabon en Gascón 2189, Mar del Plata" }];
  return { title: data.title, description, alternates: { canonical: data.path }, openGraph: { title: data.title, description, type: "website", locale: "es_AR", url: data.path, images } };
}

// Páginas de servicio → plantilla de servicio. Resto (barrios, tintorería del centro, empresas) → plantilla de landing.
export default function SeoLanding({ data }: { data: LandingData }) {
  const design = data.path.startsWith("/servicios/") ? serviceDesigns[data.path.split("/").at(-1) || ""] : undefined;
  if (design) return <ServiceLanding data={data} design={design} />;
  const isBusiness = data.path.startsWith("/empresas");
  const description = seoDescriptions[data.path] ?? data.description;
  const schema = {
    "@context": "https://schema.org", "@type": "Service", "@id": SITE_URL + data.path + "#service",
    name: data.h1, description, url: SITE_URL + data.path,
    provider: { "@id": SITE_URL + "/#business" },
    areaServed: { "@type": "City", name: "Mar del Plata" },
    ...(isBusiness ? { audience: { "@type": "BusinessAudience" } } : {}),
  };
  return <>
    <SiteHeader event={data.event + "_header"} />
    <main id="contenido">
      <section className="phero section--espuma" aria-labelledby="landing-titulo" data-cta-zone="">
        <div className="wrap">
          <Breadcrumbs items={data.crumbs} />
          <div className="phero__grid phero__grid--solo">
            <div>
              <h1 id="landing-titulo">{data.h1}</h1>
              <p className="phero__lead">{data.intro}</p>
              <div className="actions">
                <WhatsAppLink className="btn" message={data.message} event={data.event} data-primary-cta=""><WhatsAppIcon />{data.cta}</WhatsAppLink>
              </div>
              {isBusiness ? null : <dl className="facts">
                <div><dt>Dirección</dt><dd>{business.street}, {business.city}</dd></div>
                {hours.map(h => <div key={h.label}><dt>{h.short}</dt><dd>{h.text}</dd></div>)}
              </dl>}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="incluye-titulo">
        <div className="wrap split">
          <div>
            <h2 id="incluye-titulo">{isBusiness ? "Qué podemos resolver" : "Qué encontrás en Aquabon"}</h2>
            {data.sections.map(s => <div key={s.heading} style={{ marginTop: 20 }}><h3 style={{ fontSize: "1.05rem" }}>{s.heading}</h3><p className="muted" style={{ marginTop: 6 }}>{s.text}</p></div>)}
          </div>
          <ul className="cards cards--2">{data.items.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ul>
        </div>
      </section>

      <section className="section section--espuma" aria-labelledby="como-titulo">
        <div className="wrap split">
          <h2 id="como-titulo">Cómo funciona</h2>
          <ol className="talones">{data.steps.map(step => <li key={step.title}><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-titulo">
        <div className="wrap split">
          <h2 id="faq-titulo">Preguntas frecuentes</h2>
          <Faq items={data.faqs} />
        </div>
      </section>

      {data.related?.length ? <section className="section section--espuma" aria-label="Páginas relacionadas">
        <div className="wrap related">
          <nav aria-labelledby="rel-titulo"><h2 id="rel-titulo">También puede interesarte</h2><ul>{data.related.map(r => <li key={r.href}><Link href={r.href}>{r.label}</Link></li>)}</ul></nav>
          <div>
            <h2>¿Lo hablamos?</h2>
            <p className="muted" style={{ marginBottom: 18 }}>{isBusiness ? "Contanos qué textiles son, cuántos y con qué frecuencia. Te respondemos con una propuesta." : "Si tenés dudas, mandanos una foto de la prenda y te orientamos antes de traerla."}</p>
            <WhatsAppLink className="btn" message={data.message} event={data.event + "_related"}><WhatsAppIcon />{data.cta}</WhatsAppLink>
          </div>
        </div>
      </section> : null}

      <LocationBlock />
    </main>
    <SiteFooter />
    <JsonLd data={schema} />
  </>;
}
