import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import LocationBlock from "./LocationBlock";

type Item = { title: string; copy: string };
type Faq = { question: string; answer: string };
export type LandingData = {
  path: string; title: string; description: string; eyebrow: string; h1: string; intro: string;
  crumbs: Crumb[]; event: string; message: string; cta: string; sections: { heading: string; text: string }[];
  items: Item[]; steps: Item[]; faqs: Faq[]; related?: { label: string; href: string }[]; showLocation?: boolean;
};

export function landingMetadata(data: LandingData): Metadata {
  return { title: data.title, description: data.description, alternates: { canonical: data.path },
    openGraph: { title: data.title, description: data.description, type: "website", locale: "es_AR", url: data.path } };
}

export default function SeoLanding({ data }: { data: LandingData }) {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: data.h1,
    provider: { "@id": "https://www.aquabonlavanderia.com/#business" }, areaServed: "Mar del Plata", url: "https://www.aquabonlavanderia.com" + data.path };
  return <main className="seo-page">
    <SiteHeader event={data.event} /><Breadcrumbs items={data.crumbs} />
    <section className="seo-hero"><p className="eyebrow">{data.eyebrow}</p><h1>{data.h1}</h1><p>{data.intro}</p>
      <WhatsAppLink className="action-button primary" message={data.message} event={data.event}>{data.cta} <span aria-hidden="true">↗</span></WhatsAppLink>
    </section>
    <section className="seo-sections">{data.sections.map(s=><article key={s.heading}><h2>{s.heading}</h2><p>{s.text}</p></article>)}</section>
    <section className="seo-items"><p className="eyebrow">QUÉ INCLUYE</p><div>{data.items.map((x,i)=><article key={x.title}><span>{String(i+1).padStart(2,"0")}</span><h2>{x.title}</h2><p>{x.copy}</p></article>)}</div></section>
    <section className="seo-process"><p className="eyebrow">CÓMO FUNCIONA</p><h2>Simple, claro y con seguimiento</h2><ol>{data.steps.map((x,i)=><li key={x.title}><strong>{i+1}</strong><div><h3>{x.title}</h3><p>{x.copy}</p></div></li>)}</ol></section>
    <section className="service-faq"><div><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Lo que conviene saber</h2></div><div className="faq-list">{data.faqs.map(f=><details key={f.question}><summary>{f.question}<span>＋</span></summary><p>{f.answer}</p></details>)}</div></section>
    {data.showLocation ? <LocationBlock /> : null}
    {data.related?.length ? <section className="seo-related"><h2>También puede interesarte</h2><div>{data.related.map(x=><Link key={x.href} href={x.href}>{x.label} <span>↗</span></Link>)}</div></section> : null}
    <section className="seo-final"><h2>Contanos qué necesitás</h2><p>Si tenés dudas, mandanos una foto de la prenda y te orientamos antes de traerla.</p>
      <WhatsAppLink className="action-button primary" message={data.message} event={data.event}>{data.cta} ↗</WhatsAppLink></section>
    <SiteFooter /><WhatsAppLink className="whatsapp-float" message={data.message} event={data.event}>WhatsApp ↗</WhatsAppLink>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />
  </main>;
}
