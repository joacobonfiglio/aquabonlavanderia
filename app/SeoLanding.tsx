import type { Metadata } from "next";
import { seoDescriptions } from "./seo-descriptions";
import ServiceLanding from "./ServiceLanding";
import { serviceDesigns } from "./service-design";
import { type Crumb } from "./Breadcrumbs";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import Link from "next/link";
import Img from "./Img";
import { WhatsAppIcon } from "./ui";
import ChatPreview from "./ChatPreview";
import { Clothesline, PageHero, Process, Ribbon, type Step } from "./Blocks";
import { SITE_URL, businessLinks, services } from "./site";

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
    : [{ url: "/laundry-hero-v2.webp", width: 1536, height: 1024, alt: "Ropa lavada y doblada en tonos blancos y azules, Aquabon Lavandería" }];
  return { title: data.title, description, alternates: { canonical: data.path }, openGraph: { title: data.title, description, type: "website", locale: "es_AR", url: data.path, images } };
}

const heroImages: Record<string, string> = {
  "/empresas": "/blog/secar-ropa-adentro-ventilacion.webp",
  ...Object.fromEntries(businessLinks.map(b => [b.href, b.image])),
  "/tintoreria-centro-mar-del-plata": "/blog/revisar-prendas-tintoreria.webp",
};
const check = <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;

// Servicios → plantilla de servicio. Resto (empresas, barrios, tintorería del centro) → esta plantilla.
export default function SeoLanding({ data }: { data: LandingData }) {
  const design = data.path.startsWith("/servicios/") ? serviceDesigns[data.path.split("/").at(-1) || ""] : undefined;
  if (design) return <ServiceLanding data={data} design={design} />;
  const isBusiness = data.path.startsWith("/empresas");
  const isHub = data.path === "/empresas";
  const description = seoDescriptions[data.path] ?? data.description;
  const image = heroImages[data.path] ?? "/laundry-hero-v2.webp";
  const schema = {
    "@context": "https://schema.org", "@type": "Service", "@id": SITE_URL + data.path + "#service",
    name: data.h1, description, url: SITE_URL + data.path,
    provider: { "@id": SITE_URL + "/#business" },
    areaServed: { "@type": "City", name: "Mar del Plata" },
    ...(isBusiness ? { audience: { "@type": "BusinessAudience" } } : {}),
  };
  const stepImgs = isBusiness
    ? ["/blog/elegir-lavanderia-o-tintoreria.webp", "/blog/medir-detergente-para-lavar.webp", "/laundry-hero-v2.webp", "/services/retiro-v3.webp"]
    : ["/blog/leer-simbolos-etiqueta-ropa.webp", "/blog/medir-detergente-para-lavar.webp", "/laundry-hero-v2.webp", "/services/retiro-v3.webp"];
  const steps: Step[] = data.steps.map((s, i) => ({ ...s, image: stepImgs[i % stepImgs.length], alt: s.title }));
  const words = isBusiness ? ["Airbnb", "Hoteles", "Restaurantes", "Estética", "Uniformes", "Deportes"] : ["Valet", "Acolchados", "Tintorería", "Planchado", "Zapatillas", "Arreglos"];
  const lineItems = isBusiness ? businessLinks.filter(b => b.href !== data.path) : services;
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={data.crumbs}
        kicker={isBusiness ? "Aquabon para empresas" : "Gascón 2189, centro de Mar del Plata"}
        title={data.h1}
        lead={data.intro}
        image={{ src: image, alt: businessLinks.find(b => b.href === data.path)?.alt ?? "Ropa lavada y doblada en Aquabon Lavandería, Mar del Plata" }}
        chip={{ text: isBusiness ? "Volumen y frecuencia a medida" : "Te avisamos por WhatsApp" }}
        facts={!isBusiness}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={data.message} ubicacion="hero" data-primary-cta=""><WhatsAppIcon />{data.cta}</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#como-funciona">Cómo trabajamos</a>
        </>}
      />
      <Ribbon words={words} />

      {isHub ? <section className="p-sec" aria-labelledby="rubros-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="rubros-titulo">¿Qué tipo de negocio tenés?</h2><p>Cada operación tiene sus textiles, sus tiempos y su volumen. Elegí la tuya.</p></div>
          <div className="bento bento--six">
            {businessLinks.map((b, i) => <Link key={b.href} href={b.href} className="bento__card" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <Img src={b.image} alt={b.alt} width={1200} height={900} sizes="(max-width: 960px) 100vw, 400px" />
              <span className="bento__body"><strong>{b.name}</strong><span>{b.short}</span><em>Ver más</em></span>
            </Link>)}
          </div>
        </div>
      </section> : null}

      <section className={"p-sec" + (isHub ? " p-sec--espuma" : "")} aria-labelledby="incluye-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="incluye-titulo">{isBusiness ? "Qué podemos resolver" : "Qué encontrás en Aquabon"}</h2>
            {data.sections[0] ? <p>{data.sections[0].text}</p> : null}
          </div>
          {isHub ? null : <ul className="feature-grid">
            {data.items.map((item, i) => <li key={item.title} data-reveal style={{ transitionDelay: `${(i % 2) * 70}ms` }}><b>{check}</b><h3>{item.title}</h3><p>{item.copy}</p></li>)}
          </ul>}
          {data.sections.length > 1 ? <ul className="fit-cards" style={{ marginTop: 28 }} data-reveal>{data.sections.slice(1).map(s => <li key={s.heading}><h3>{s.heading}</h3><p>{s.text}</p></li>)}</ul> : null}
        </div>
      </section>

      <Process title="Cómo trabajamos" steps={steps} cta={<WhatsAppLink className="btn btn--light btn--xl" message={data.message} ubicacion="proceso"><WhatsAppIcon />{data.cta}</WhatsAppLink>} />

      <section className="p-sec" aria-labelledby="faq-titulo">
        <div className="wrap h-pick__grid">
          <div>
            <div className="h-head" data-reveal><h2 id="faq-titulo">Preguntas frecuentes</h2></div>
            <Faq items={data.faqs} />
          </div>
          <div className="h-pick__ticket" data-reveal>
            <p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p>
            <ChatPreview data={{
              service: isBusiness ? data.h1.replace(/ en Mar del Plata$/, "").toLowerCase() : undefined,
              next: isBusiness ? "te respondemos con una propuesta según volumen y frecuencia" : undefined,
              message: data.message,
            }} />
          </div>
        </div>
      </section>

      <section className="p-sec p-sec--espuma" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-label={isBusiness ? "Otros rubros" : "Servicios"}>
        <Clothesline title={isBusiness ? (isHub ? "Todos los rubros" : "Otros rubros") : "Nuestros servicios"} items={lineItems} />
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={schema} />
  </>;
}
