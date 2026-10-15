import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { guides } from "../guides";
import { services } from "../site";

export const metadata:Metadata={title:"Guías para cuidar tu ropa | Aquabon",description:"Guías para cuidar tu ropa: lavado, manchas, acolchados y zapatillas. Consejos de Aquabon, lavandería en Mar del Plata. Consultá por tu prenda.",alternates:{canonical:"/blog"},openGraph:{title:"Guías para cuidar tu ropa | Aquabon",description:"Guías para cuidar tu ropa: lavado, manchas, acolchados y zapatillas. Consejos de Aquabon, lavandería en Mar del Plata. Consultá por tu prenda.",url:"/blog",type:"website",locale:"es_AR",images:[{url:"/aquabon-fachada.jpg",width:1092,height:1118,alt:"Fachada de Aquabon Lavandería en Gascón 2189, Mar del Plata"}]}};

export default function BlogPage() {
  const clusters = Array.from(new Set(guides.map(g => g.cluster)));
  return <>
    <SiteHeader event="whatsapp_blog_index" />
    <main id="contenido">
      <section className="phero section--espuma" aria-labelledby="blog-titulo">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Guías", href: "/blog" }]} />
          <div className="phero__grid phero__grid--solo"><div>
            <h1 id="blog-titulo">Guías para cuidar tu ropa</h1>
            <p className="phero__lead">Lavado, manchas, tejidos, acolchados, zapatillas y prendas especiales, explicado por quienes lo hacen todos los días. Para que sepas qué podés resolver en casa y cuándo conviene traerla.</p>
            <ul className="chips" style={{ marginTop: 24 }} aria-label="Temas">{clusters.map(c => <li key={c}><a href={"#" + c.toLowerCase().replace(/\s+/g, "-")}>{c}</a></li>)}</ul>
          </div></div>
        </div>
      </section>
      {clusters.map(c => <section key={c} className="section" style={{ paddingBottom: 0 }} id={c.toLowerCase().replace(/\s+/g, "-")} aria-labelledby={"t-" + c}>
        <div className="wrap">
          <h2 id={"t-" + c} style={{ marginBottom: 24 }}>{c}</h2>
          <ul className="guides">{guides.filter(g => g.cluster === c).map(g => <li key={g.href}><Link href={g.href}>
            <Image src={g.image} alt={g.alt} width={700} height={467} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
            <h3>{g.title}</h3>
            <p>{g.description}</p>
          </Link></li>)}</ul>
        </div>
      </section>)}
      <section className="section" aria-labelledby="servicios-titulo">
        <div className="wrap related">
          <div><h2 id="servicios-titulo">¿Preferís que lo hagamos nosotros?</h2><p className="muted">Mirá los servicios de Aquabon o mandanos una foto de la prenda.</p></div>
          <ul>{services.slice(0, 6).map(s => <li key={s.href}><Link href={s.href}>{s.name}</Link></li>)}</ul>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
