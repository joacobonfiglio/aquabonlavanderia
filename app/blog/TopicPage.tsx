import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import JsonLd from "../JsonLd";
import WhatsAppLink from "../WhatsAppLink";
import { WhatsAppIcon } from "../ui";
import { SITE_URL, services, pickupZonesShort } from "../site";
import { servicioFromPath } from "../ga";
import { Clothesline, GuideCards, PageHero } from "../Blocks";
import { guidePillars, guidesInPillar, pillarPath } from "../guides";
import { serviceInfo } from "./service-info";

// Página de un tema del blog (/blog/tema/<id>): lista sus guías y le dice a Google qué guías forman
// el cluster (CollectionPage + ItemList). Los textos viven en guidePillars (app/guides.ts).

function pillar(id: string) {
  const p = guidePillars.find(x => x.id === id);
  if (!p) throw new Error("Tema inexistente: " + id);
  return p;
}

export function topicMetadata(id: string): Metadata {
  const p = pillar(id);
  const path = pillarPath(id);
  return {
    title: p.metaTitle, description: p.metaDescription, alternates: { canonical: path },
    openGraph: { title: p.h1, description: p.metaDescription, url: path, type: "website", locale: "es_AR", images: [{ url: p.image, alt: p.alt }] },
  };
}

export default function TopicPage({ id }: { id: string }) {
  const p = pillar(id);
  const path = pillarPath(id);
  const list = guidesInPillar(id);
  const info = serviceInfo[p.service];
  const others = guidePillars.filter(x => guidesInPillar(x.id).length > 0);
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage", "@id": SITE_URL + path + "#tema",
    name: p.h1, description: p.metaDescription, url: SITE_URL + path, inLanguage: "es-AR",
    about: { "@type": "Thing", name: p.name },
    isPartOf: { "@type": "Blog", name: "Guías Aquabon", url: SITE_URL + "/blog" },
    publisher: { "@id": SITE_URL + "/#business" },
    mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: SITE_URL + g.href, name: g.title })) },
  };
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={[{ label: "Inicio", href: "/" }, { label: "Guías", href: "/blog" }, { label: p.name, href: path }]}
        kicker="Guías Aquabon"
        title={p.h1}
        lead={p.lead}
        image={{ src: p.image, alt: p.alt }}
        chip={{ symbol: "wash", text: `${list.length} ${list.length === 1 ? "guía" : "guías"}` }}
        facts={false}
        actions={<>
          <a className="btn btn--azul btn--xl" href="#guias-del-tema">Ver las guías</a>
          <WhatsAppLink className="btn btn--outline-light btn--xl" message={info.message} ubicacion="tema_blog" servicio={servicioFromPath(info.path)}><WhatsAppIcon />Consultar</WhatsAppLink>
        </>}
      />
      <section className="p-sec" aria-labelledby="tema-intro">
        <div className="wrap">
          <div className="h-head" data-reveal>
            <h2 id="tema-intro">{p.aboutHeading}</h2>
            {p.body.map(t => <p key={t.slice(0, 24)}>{t}</p>)}
            <p>Si preferís que nos ocupemos, conocé nuestro servicio de <Link className="link" href={info.path}>{info.name.toLowerCase()} en Mar del Plata</Link>. Estamos en Gascón 2189 y retiramos en {pickupZonesShort}.</p>
          </div>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" id="guias-del-tema" aria-labelledby="guias-titulo">
        <div className="wrap">
          <div className="h-head" data-reveal><h2 id="guias-titulo">{p.listHeading}</h2><p>De la más nueva a la más vieja.</p></div>
          <nav className="g-filter" aria-label="Otros temas de las guías">
            <Link href="/blog">Todas</Link>
            {others.map(t => <Link key={t.id} href={pillarPath(t.id)} aria-current={t.id === id ? "page" : undefined}>{t.name} <span>{guidesInPillar(t.id).length}</span></Link>)}
          </nav>
          <div className="g-pilar"><GuideCards compact guides={list} /></div>
        </div>
      </section>
      <section className="p-sec" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-label="Servicios">
        <Clothesline title="¿Preferís que lo hagamos nosotros?" items={services} />
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={schema} />
  </>;
}
