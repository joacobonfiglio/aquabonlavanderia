import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { guides } from "../guides";
import { services } from "../site";
import { Clothesline, GuideCards, PageHero, Ribbon } from "../Blocks";
import GuideFilter from "./GuideFilter";

export const metadata:Metadata={title:"Guías para cuidar tu ropa | Aquabon",description:"Guías para cuidar tu ropa: lavado, manchas, acolchados y zapatillas. Consejos de Aquabon, lavandería en Mar del Plata. Consultá por tu prenda.",alternates:{canonical:"/blog"},openGraph:{title:"Guías para cuidar tu ropa | Aquabon",description:"Guías para cuidar tu ropa: lavado, manchas, acolchados y zapatillas. Consejos de Aquabon, lavandería en Mar del Plata. Consultá por tu prenda.",url:"/blog",type:"website",locale:"es_AR",images:[{url:"/laundry-hero-v2.webp",width:1536,height:1024,alt:"Ropa lavada y doblada en tonos blancos y azules, Aquabon Lavandería"}]}};

export default function BlogPage() {
  const topics: { name: string; id: string; clusters: string[] }[] = [
    { name: "Acolchados", id: "acolchados", clusters: ["Acolchados"] },
    { name: "Manchas y olores", id: "manchas-y-olores", clusters: ["Manchas", "Olores"] },
    { name: "Lavado y secado en casa", id: "lavado-y-secado", clusters: ["Lavado", "Secado", "Cuidado de ropa", "Jeans", "Camisas", "Lana"] },
    { name: "Prendas especiales y tintorería", id: "prendas-especiales", clusters: ["Tintorería", "Sacos", "Tapados"] },
    { name: "Zapatillas", id: "zapatillas", clusters: ["Zapatillas"] },
  ];
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={[{ label: "Inicio", href: "/" }, { label: "Guías", href: "/blog" }]}
        kicker="Guías Aquabon"
        title="Guías para cuidar tu ropa"
        lead="Lavado, manchas, tejidos, acolchados, zapatillas y prendas especiales, explicado por quienes lo hacen todos los días. Para que sepas qué podés resolver en casa y cuándo conviene traerla."
        image={{ src: "/blog/leer-simbolos-etiqueta-ropa.webp", alt: "Manos revisando la etiqueta de cuidado de una prenda azul" }}
        chip={{ symbol: "wash", text: `${guides.length} guías prácticas` }}
        facts={false}
        actions={<>
          <a className="btn btn--azul btn--xl" href="#ultimas">Ver las nuevas</a>
          <a className="btn btn--outline-light btn--xl" href="#temas">Buscar por tema</a>
        </>}
      />
      <Ribbon words={topics.map(t => t.name)} />
      <section className="p-sec" id="ultimas" aria-labelledby="ultimas-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="ultimas-titulo">Nuevas y destacadas</h2><p>Guías nuevas cada semana, con lo que más nos preguntan en el mostrador.</p></div>
          <GuideCards guides={guides.slice(0, 3)} big badge="Nueva" />
        </div>
      </section>
      <section className="p-sec p-sec--espuma" id="temas" aria-labelledby="temas-titulo">
        <div className="wrap">
          <div className="h-head" data-reveal><h2 id="temas-titulo">Todas las guías</h2><p>Elegí un tema para ver solo esas guías.</p></div>
          <GuideFilter target="lista-guias" topics={topics.map(t => ({ id: t.id, name: t.name, count: guides.filter(g => t.clusters.includes(g.cluster)).length }))} />
          <GuideCards id="lista-guias" compact guides={guides} topicOf={g => topics.find(t => t.clusters.includes(g.cluster))?.id ?? "otros"} />
        </div>
      </section>
      <section className="p-sec" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-label="Servicios">
        <Clothesline title="¿Preferís que lo hagamos nosotros?" items={services} />
      </section>
    </main>
    <SiteFooter />
  </>;
}
