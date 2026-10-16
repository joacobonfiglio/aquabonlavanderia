import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import WhatsAppLink from "../WhatsAppLink";
import JsonLd from "../JsonLd";
import { WhatsAppIcon } from "../ui";
import { SITE_URL, services } from "../site";
import { servicioFromPath } from "../ga";
import Img from "../Img";
import { Clothesline, GuideCards, Waves } from "../Blocks";
import { guides } from "../guides";

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

const serviceInfo = {
  acolchados: { path: "/servicios/lavado-de-acolchados", name: "Lavado de acolchados", copy: "Revisamos tamaño, tejido, relleno y estado antes de confirmar el proceso.", message: "Hola Aquabon, quería consultar por el lavado de un acolchado." },
  tintoreria: { path: "/servicios/tintoreria", name: "Tintorería", copy: "Revisamos etiqueta, tejido, forro, adornos y manchas antes de confirmar el tratamiento.", message: "Hola Aquabon, quería consultar por una prenda de tintorería." },
  zapatillas: { path: "/servicios/lavado-de-zapatillas", name: "Lavado de zapatillas", copy: "Revisamos material, uniones, color, manchas y desgaste antes de confirmar el proceso.", message: "Hola Aquabon, quería consultar por el lavado de unas zapatillas." },
  valet: { path: "/servicios/valet-de-ropa", name: "Valet de ropa", copy: "Separamos las prendas por color, tejido y cuidado antes de lavar, secar y doblar.", message: "Hola Aquabon, quería consultar por el servicio de valet de ropa." },
};

function sentence(text: string) {
  const t = text.trim().toLowerCase();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

export default function ArticleLayout({ title, description, slug, date, readingTime, cluster, image, service = "acolchados", children }: ArticleLayoutProps) {
  const path = `/blog/${slug}`;
  const info = serviceInfo[service];
  const displayDate = new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description,
    datePublished: date, dateModified: date, inLanguage: "es-AR",
    mainEntityOfPage: SITE_URL + path,
    ...(image ? { image: SITE_URL + image } : {}),
    author: { "@type": "Organization", name: "Aquabon Lavandería", url: SITE_URL + "/" },
    publisher: { "@id": SITE_URL + "/#business" },
  };
  const more = guides.filter(g => g.href !== path && g.cluster.toLowerCase() === cluster.toLowerCase()).concat(guides.filter(g => g.href !== path && g.cluster.toLowerCase() !== cluster.toLowerCase())).slice(0, 3);
  const heroImage = image ?? "/laundry-hero-v2.webp";
  const serviceImage = services.find(x => x.href === info.path)?.image ?? "/laundry-hero-v2.webp";
  return <>
    <SiteHeader overlay />
    <div className="read-progress" aria-hidden="true" />
    <main id="contenido" className="page">
      <section className="p-hero a-hero" aria-labelledby="page-titulo">
        <div className="wrap">
          <div className="p-hero__crumbs"><Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Guías", href: "/blog" }, { label: title, href: path }]} /></div>
          <div className="p-hero__grid">
            <div className="p-hero__copy">
              <p className="h-hero__kicker">Guía de {sentence(cluster).toLowerCase()}</p>
              <h1 id="page-titulo">{title}</h1>
              <p className="p-hero__lead">{description}</p>
              <div className="a-meta"><time dateTime={date}>{displayDate}</time><span>{sentence(readingTime)}</span><span>Aquabon, Mar del Plata</span></div>
            </div>
            <div className="p-hero__media"><div className="p-hero__photo"><Img src={heroImage} alt={guides.find(g => g.href === path)?.alt ?? title} width={1400} height={933} sizes="(max-width: 960px) 92vw, 520px" priority /></div></div>
          </div>
        </div>
        <Waves className="waves--hero" />
      </section>
      <div className="wrap">
        <div className="article-grid">
          <article className="article-body">{children}</article>
          <aside className="article-aside a-aside" aria-labelledby="aside-titulo">
            <div className="a-aside__img"><Img src={serviceImage} alt="" width={480} height={360} sizes="320px" /></div>
            <p>¿Preferís no hacerlo en casa?</p>
            <h2 id="aside-titulo">{info.name} en Mar del Plata</h2>
            <span>{info.copy}</span>
            <WhatsAppLink className="btn btn--azul" message={info.message} ubicacion="blog_lateral" servicio={servicioFromPath(info.path)}><WhatsAppIcon />Consultar por WhatsApp</WhatsAppLink>
            <Link className="link link--light" href={info.path}>Ver el servicio</Link>
          </aside>
        </div>
      </div>
      <section className="p-sec p-sec--espuma" aria-labelledby="mas-guias">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="mas-guias">Seguí leyendo</h2><p><Link className="link" href="/blog">Ver todas las guías</Link></p></div>
          <GuideCards guides={more} />
        </div>
        <Clothesline title="¿Lo hacemos por vos?" items={services} />
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={schema} />
  </>;
}
