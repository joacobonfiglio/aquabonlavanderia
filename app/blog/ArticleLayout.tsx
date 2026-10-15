import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import WhatsAppLink from "../WhatsAppLink";
import JsonLd from "../JsonLd";
import { WhatsAppIcon } from "../ui";
import { SITE_URL } from "../site";
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
  const more = guides.filter(g => g.href !== path && g.cluster.toLowerCase() === cluster.toLowerCase()).concat(guides.filter(g => g.href !== path && g.cluster.toLowerCase() !== cluster.toLowerCase())).slice(0, 4);
  return <>
    <SiteHeader event="whatsapp_blog_header" />
    <main id="contenido">
      <div className="wrap">
        <header className="article-head">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Guías", href: "/blog" }, { label: title, href: path }]} />
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="article-meta"><span>Guía de {sentence(cluster).toLowerCase()}</span><time dateTime={date}>{displayDate}</time><span>{sentence(readingTime)}</span></div>
        </header>
        <div className="article-grid">
          <article className="article-body">{children}</article>
          <aside className="article-aside" aria-labelledby="aside-titulo">
            <p className="muted">¿Preferís no hacerlo en casa?</p>
            <h2 id="aside-titulo">{info.name} en Mar del Plata</h2>
            <p>{info.copy}</p>
            <WhatsAppLink className="btn" message={info.message} event="whatsapp_blog_sidebar"><WhatsAppIcon />Consultar por WhatsApp</WhatsAppLink>
            <Link className="link" href={info.path}>Ver el servicio</Link>
          </aside>
        </div>
      </div>
      <section className="section section--espuma" aria-label="Seguí leyendo">
        <div className="wrap related">
          <nav aria-labelledby="mas-guias"><h2 id="mas-guias">Más guías</h2><ul>{more.map(g => <li key={g.href}><Link href={g.href}>{g.title}</Link></li>)}</ul></nav>
          <nav aria-labelledby="mas-servicios"><h2 id="mas-servicios">Servicios relacionados</h2><ul>
            <li><Link href={info.path}>{info.name}</Link></li>
            <li><Link href={service === "tintoreria" || service === "zapatillas" ? "/servicios/valet-de-ropa" : "/servicios/tintoreria"}>{service === "tintoreria" || service === "zapatillas" ? "Valet de ropa" : "Tintorería"}</Link></li>
            <li><Link href="/blog">Todas las guías</Link></li>
          </ul></nav>
        </div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={schema} />
  </>;
}
