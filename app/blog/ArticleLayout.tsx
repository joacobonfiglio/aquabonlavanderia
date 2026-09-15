import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import WhatsAppLink from "../WhatsAppLink";

type ArticleLayoutProps = {
  title: string;
  description: string;
  slug: string;
  date: string;
  readingTime: string;
  cluster: string;
  children: ReactNode;
};

export default function ArticleLayout({title,description,slug,date,readingTime,cluster,children}:ArticleLayoutProps){
  const path=`/blog/${slug}`;
  const schema={"@context":"https://schema.org","@type":"BlogPosting",headline:title,description,datePublished:date,dateModified:date,inLanguage:"es-AR",mainEntityOfPage:`https://www.aquabonlavanderia.com${path}`,author:{"@type":"Organization",name:"Aquabon Lavandería"},publisher:{"@id":"https://www.aquabonlavanderia.com/#business"}};
  return <main className="blog-article">
    <SiteHeader event="whatsapp_blog_header"/>
    <Breadcrumbs items={[{label:"Inicio",href:"/"},{label:"Guías",href:"/blog"},{label:title,href:path}]}/>
    <header className="article-hero">
      <div className="article-hero-copy"><p className="eyebrow">GUÍA · {cluster.toUpperCase()}</p><h1>{title}</h1><p>{description}</p><div className="article-meta"><time dateTime={date}>15 de septiembre de 2026</time><span>{readingTime}</span></div></div>
      <div className="article-hero-art" aria-hidden="true"><span>AC</span><div className="quilt"><i/><i/><i/><i/><i/><i/></div><p>RELLENO · ETIQUETA · SECADO</p></div>
    </header>
    <div className="article-shell"><article className="article-body">{children}</article><aside className="article-aside"><p className="eyebrow">¿PREFERÍS NO HACERLO EN CASA?</p><h2>Lavado de acolchados</h2><p>Revisamos tamaño, tejido, relleno y estado antes de confirmar el proceso.</p><Link href="/servicios/lavado-de-acolchados">Ver el servicio <span>↗</span></Link><WhatsAppLink message="Hola Aquabon, quería consultar por el lavado de un acolchado de plumas." event="whatsapp_blog_sidebar">Consultar por WhatsApp ↗</WhatsAppLink></aside></div>
    <section className="article-next"><p className="eyebrow">SEGUÍ CUIDANDO TUS PRENDAS</p><h2>Servicios relacionados</h2><div><Link href="/servicios/lavado-de-acolchados">Lavado de acolchados ↗</Link><Link href="/servicios/tintoreria">Tintorería ↗</Link><Link href="/blog">Todas las guías ↗</Link></div></section>
    <SiteFooter/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </main>;
}
