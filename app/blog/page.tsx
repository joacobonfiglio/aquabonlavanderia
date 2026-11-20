import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { guides, guidePillars, guidesInPillar, pillarPath } from "../guides";
import { services, pickupZonesShort } from "../site";
import { Clothesline, GuideCards, PageHero, Ribbon } from "../Blocks";
import Link from "next/link";

export const metadata:Metadata={title:"Guías para cuidar tu ropa | Aquabon",description:"Guías para cuidar tu ropa: lavado, manchas, acolchados y zapatillas. Consejos de Aquabon, lavandería en Mar del Plata. Consultá por tu prenda.",alternates:{canonical:"/blog"},openGraph:{title:"Guías para cuidar tu ropa | Aquabon",description:"Guías para cuidar tu ropa: lavado, manchas, acolchados y zapatillas. Consejos de Aquabon, lavandería en Mar del Plata. Consultá por tu prenda.",url:"/blog",type:"website",locale:"es_AR",images:[{url:"/laundry-hero-v2.webp",width:1536,height:1024,alt:"Ropa lavada y doblada en tonos blancos y azules, Aquabon Lavandería"}]}};

export default function BlogPage() {
  const pillars = guidePillars.map(t => ({ ...t, guides: guides.filter(g => t.clusters.includes(g.cluster)) })).filter(t => t.guides.length > 0);
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={[{ label: "Inicio", href: "/" }, { label: "Guías", href: "/blog" }]}
        kicker="Guías Aquabon"
        title="Guías para cuidar tu ropa"
        lead="Manchas, zapatillas, acolchados y prendas especiales, explicado por quienes lavan todos los días. Qué pone en riesgo tu ropa y cuándo conviene dejarla en nuestras manos."
        image={{ src: "/blog/leer-simbolos-etiqueta-ropa.webp", alt: "Manos revisando la etiqueta de cuidado de una prenda azul" }}
        chip={{ symbol: "wash", text: `${guides.length} guías prácticas` }}
        facts={false}
        actions={<>
          <a className="btn btn--azul btn--xl" href="#ultimas">Ver las nuevas</a>
          <a className="btn btn--outline-light btn--xl" href="#temas">Buscar por tema</a>
        </>}
      />
      <Ribbon words={pillars.map(t => t.name)} />
      <section className="p-sec" id="ultimas" aria-labelledby="ultimas-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="ultimas-titulo">Nuevas y destacadas</h2><p>Guías nuevas cada semana, con lo que más nos preguntan en el mostrador.</p></div>
          <GuideCards guides={guides.slice(0, 3)} big badge="Nueva" />
        </div>
      </section>
      <section className="p-sec" aria-labelledby="lavanderia-titulo">
        <div className="wrap">
          <div className="h-head" data-reveal>
            <h2 id="lavanderia-titulo">Lo que aprendimos lavando ropa en Mar del Plata</h2>
            <p>Somos Aquabon, lavandería y tintorería en Gascón 2189, con más de 10 años en el rubro. Estas guías salen de lo que vemos todos los días en el mostrador: la mancha que se fijó con agua caliente, la zapatilla que se despegó en el lavarropas, el acolchado que salió del placard con olor a humedad. En cada una te contamos qué pone en riesgo la prenda y cómo la trabajamos nosotros. Si preferís que nos ocupemos, la pasamos a buscar en {pickupZonesShort}: <Link className="link" href="/lavanderia-mar-del-plata">mirá cómo funciona nuestra lavandería en Mar del Plata</Link>.</p>
          </div>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" id="temas" aria-labelledby="temas-titulo">
        <div className="wrap">
          <div className="h-head" data-reveal><h2 id="temas-titulo">Guías por tema</h2><p>Elegí un tema para ver todas sus guías, incluidas las que comparte con otros temas.</p></div>
          <nav className="g-filter" aria-label="Temas de las guías">
            {pillars.map(t => <Link key={t.id} href={pillarPath(t.id)}>{t.name} <span>{guidesInPillar(t.id).length}</span></Link>)}
          </nav>
          {pillars.map(t => <div key={t.id} className="g-pilar" id={t.id}>
            <div className="g-pilar__head"><h3><Link href={pillarPath(t.id)}>{t.name}</Link></h3><p>{t.intro} <Link className="link" href={pillarPath(t.id)}>Ver las {guidesInPillar(t.id).length} guías del tema</Link></p></div>
            <GuideCards compact guides={t.guides} />
          </div>)}
        </div>
      </section>
      <section className="p-sec" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-label="Servicios">
        <Clothesline title="¿Preferís que lo hagamos nosotros?" items={services} />
      </section>
    </main>
    <SiteFooter />
  </>;
}
