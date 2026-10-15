import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import WhatsAppLink from "../WhatsAppLink";
import { guides } from "./guide-data";

type ArticleLayoutProps = {
  title: string;
  description: string;
  slug: string;
  date: string;
  readingTime: string;
  cluster: string;
  image?: string;
  service?: "acolchados" | "tintoreria" | "zapatillas" | "valet";
  children: ReactNode;
};

export default function ArticleLayout({title,description,slug,date,readingTime,cluster,image,service="acolchados",children}:ArticleLayoutProps){
  const path=`/blog/${slug}`;
  const coverAlt = guides.find(guide => guide.href === path)?.alt || title;
  const isTintoreria=service==="tintoreria";
  const isZapatillas=service==="zapatillas";
  const isValet=service==="valet";
  const servicePath=isTintoreria?"/servicios/tintoreria":isZapatillas?"/servicios/lavado-de-zapatillas":isValet?"/servicios/valet-de-ropa":"/servicios/lavado-de-acolchados";
  const serviceName=isTintoreria?"Tintorería":isZapatillas?"Lavado de zapatillas":isValet?"Valet de ropa":"Lavado de acolchados";
  const serviceCopy=isTintoreria?"Revisamos etiqueta, tejido, forro, adornos y manchas antes de confirmar el tratamiento.":isZapatillas?"Revisamos material, uniones, color, manchas y desgaste antes de confirmar el proceso.":isValet?"Clasificamos las prendas por color, tejido y cuidado antes de lavar, secar y doblar.":"Revisamos tamaño, tejido, relleno y estado antes de confirmar el proceso.";
  const serviceMessage=isTintoreria?"Hola Aquabon, quería consultar por una prenda de tintorería.":isZapatillas?"Hola Aquabon, quería consultar por el lavado de unas zapatillas.":isValet?"Hola Aquabon, quería consultar por el servicio de valet de ropa.":"Hola Aquabon, quería consultar por el lavado de un acolchado.";
  const related = guides.filter(guide => guide.href !== path)
    .map((guide, index) => ({guide, index, score: guide.cluster.toLowerCase() === cluster.toLowerCase() ? 2 : (service === "acolchados" && guide.cluster === "ACOLCHADOS") || (service === "zapatillas" && guide.cluster === "ZAPATILLAS") || (service === "tintoreria" && ["TINTORERÍA", "SACOS", "TAPADOS"].includes(guide.cluster)) || (service === "valet" && ["LAVADO", "SECADO", "CUIDADO DE ROPA", "JEANS", "CAMISAS"].includes(guide.cluster)) ? 1 : 0}))
    .sort((a,b) => b.score-a.score || a.index-b.index).slice(0,3).map(item=>item.guide);
  const displayDate=new Intl.DateTimeFormat("es-AR",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T12:00:00Z`));
  const schema={"@context":"https://schema.org","@type":"BlogPosting",headline:title,description,datePublished:date,dateModified:date,inLanguage:"es-AR",mainEntityOfPage:`https://www.aquabonlavanderia.com${path}`,...(image?{image:`https://www.aquabonlavanderia.com${image}`}:{}),author:{"@type":"Organization",name:"Aquabon Lavandería",url:"https://www.aquabonlavanderia.com/nosotros"},publisher:{"@id":"https://www.aquabonlavanderia.com/#business"}};
  return <main className="aq-renew blog-article">
    <SiteHeader event="whatsapp_blog_header"/>
    <Breadcrumbs items={[{label:"Inicio",href:"/"},{label:"Guías",href:"/blog"},{label:title,href:path}]}/>
    <header className="article-hero">
      <div className="article-hero-copy"><p className="eyebrow">GUÍA · {cluster.toUpperCase()}</p><h1>{title}</h1><p>{description}</p><div className="article-meta"><time dateTime={date}>{displayDate}</time><span>{readingTime}</span><span>Por <Link href="/nosotros">Aquabon Lavandería</Link></span></div></div>
      <figure className="article-cover">{image ? <Image src={image} alt={coverAlt} width={1400} height={788} sizes="(max-width: 760px) 100vw, 45vw" preload/> : null}<figcaption><span>AQUABON / CUADERNO DE CUIDADO</span><strong>{cluster}</strong><small>LEÉ LA ETIQUETA · CUIDÁ TU PRENDA ↗</small></figcaption></figure>
    </header>
    <div className="article-shell"><article className="article-body">{children}</article><aside className="article-sidebar" aria-label="Contacto y lecturas relacionadas"><div className="article-aside"><p className="eyebrow">¿PREFERÍS NO HACERLO EN CASA?</p><h2>{serviceName}</h2><p>{serviceCopy}</p><Link href={servicePath}>Ver el servicio <span>↗</span></Link><WhatsAppLink message={serviceMessage} event="whatsapp_blog_sidebar">Contactar por WhatsApp ↗</WhatsAppLink></div><nav className="article-related" aria-labelledby="related-guides-title"><h2 id="related-guides-title">También te puede servir</h2>{related.map(guide=><Link key={guide.href} href={guide.href}><Image src={guide.image} alt={guide.alt} width={160} height={110} sizes="80px"/><span><small>{guide.cluster}</small><strong>{guide.title}</strong></span></Link>)}</nav></aside></div>
    <section className="article-next"><p className="eyebrow">SEGUÍ CUIDANDO TUS PRENDAS</p><h2>Servicios relacionados</h2><div><Link href={servicePath}>{serviceName} ↗</Link><Link href={isTintoreria||isZapatillas?"/servicios/valet-de-ropa":"/servicios/tintoreria"}>{isTintoreria||isZapatillas?"Valet de ropa":"Tintorería"} ↗</Link><Link href="/blog">Todas las guías ↗</Link></div></section>
    <SiteFooter showBusiness={false}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </main>;
}
