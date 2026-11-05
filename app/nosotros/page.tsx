import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import WhatsAppLink from "../WhatsAppLink";
import Img from "../Img";
import { Clothesline, PageHero } from "../Blocks";
import { WhatsAppIcon } from "../ui";
import { business, hoursSentence, services } from "../site";

const description = "Aquabon es una lavandería y tintorería de barrio en Gascón 2189, Mar del Plata, con más de 10 años en el rubro. Conocé cómo trabajamos.";
export const metadata: Metadata = {
  title: "Nosotros: lavandería de barrio en Mar del Plata | Aquabon", description,
  alternates: { canonical: "/nosotros" },
  openGraph: { title: "Nosotros | Aquabon Lavandería y Tintorería", description, url: "/nosotros", type: "website", locale: "es_AR", images: [{ url: "/laundry-hero-v2.webp", width: 1536, height: 1024, alt: "Ropa lavada y doblada en tonos blancos y azules, Aquabon Lavandería" }] },
};

const ways = [
  { title: "Todo empieza en el mostrador", copy: "Escuchamos qué necesitás, miramos etiqueta, tejido y estado de la prenda, y recién ahí elegimos el servicio. Así no hay sorpresas." },
  { title: "Te decimos la verdad antes", copy: "Hay manchas que no salen y desgastes que no se revierten. Preferimos explicarlo de entrada a sorprenderte al retirar." },
  { title: "Te avisamos por WhatsApp", copy: `Cuando el pedido está listo, te escribimos. Lo pasás a buscar (${hoursSentence.toLowerCase()}) o, si estás en Centro, Güemes, Chauvin y La Perla, te lo llevamos.` },
  { title: "Un solo punto de contacto", copy: "Si una prenda necesita un tratamiento especializado, la recibimos, coordinamos el tratamiento y hacemos el seguimiento hasta que vuelve. Vos tratás solo con nosotros." },
];

export default function Page() {
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={[{ label: "Inicio", href: "/" }, { label: "Nosotros", href: "/nosotros" }]}
        kicker="Más de 10 años en el rubro"
        title="Una lavandería de barrio en Mar del Plata"
        lead={`Somos Aquabon, en ${business.street}, Mar del Plata. Hace más de 10 años que nos ocupamos de la ropa de la semana, los acolchados y las prendas que necesitan un cuidado especial, para que vos no tengas que hacerlo.`}
        image={{ src: "/laundry-detail-v2.webp", alt: "Ropa de algodón lavada y doblada, lista para entregar" }}
        chip={{ symbol: "wash", text: "Lavandería y tintorería" }}
        actions={<WhatsAppLink className="btn btn--azul btn--xl" message="Hola Aquabon, quería hacer una consulta." ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>}
      />
      <section className="p-sec" aria-labelledby="como-titulo">
        <div className="wrap split-media">
          <div className="split-media__img" data-reveal><Img src="/blog/elegir-lavanderia-o-tintoreria.webp" alt="Revisión de una prenda en el mostrador antes de elegir el servicio" width={1000} height={1250} sizes="(max-width: 960px) 100vw, 460px" /></div>
          <div>
            <div className="h-head" data-reveal><h2 id="como-titulo">Cómo trabajamos</h2></div>
            <ul className="fit-cards" data-reveal>{ways.map(w => <li key={w.title}><h3>{w.title}</h3><p>{w.copy}</p></li>)}</ul>
            {/* TODO(joaco): si el dueño quiere, sumar 2 o 3 líneas reales sobre la historia del local (cuándo abrió, quién atiende). No inventar. */}
            <p style={{ marginTop: 24 }}>Mirá los <Link className="link" href="/servicios">servicios</Link> y las <Link className="link" href="/blog">guías para cuidar tu ropa</Link>.</p>
          </div>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-label="Servicios">
        <Clothesline title="Nuestros servicios" items={services} />
      </section>
    </main>
    <SiteFooter />
  </>;
}
