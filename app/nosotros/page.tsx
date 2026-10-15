import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import LocationBlock from "../LocationBlock";
import WhatsAppLink from "../WhatsAppLink";
import { WhatsAppIcon } from "../ui";
import { business, hoursSentence } from "../site";

const description = "Aquabon es una lavandería y tintorería de barrio en Gascón 2189, Mar del Plata, con más de 10 años en el rubro. Conocé cómo trabajamos.";
export const metadata: Metadata = {
  title: "Nosotros: lavandería de barrio en Mar del Plata | Aquabon", description,
  alternates: { canonical: "/nosotros" },
  openGraph: { title: "Nosotros | Aquabon Lavandería", description, url: "/nosotros", type: "website", locale: "es_AR", images: [{ url: "/aquabon-fachada.jpg", width: 1092, height: 1118, alt: "Vidriera de Lavandería Aquabon en Gascón 2189, Mar del Plata" }] },
};

export default function Page() {
  return <>
    <SiteHeader event="whatsapp_nosotros_header" />
    <main id="contenido">
      <section className="phero section--espuma" aria-labelledby="nosotros-titulo">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Nosotros", href: "/nosotros" }]} />
          <div className="phero__grid phero__grid--solo"><div>
            <h1 id="nosotros-titulo">Una lavandería de barrio, con atención de verdad</h1>
            <p className="phero__lead">Somos Aquabon, en {business.street}, Mar del Plata. Llevamos más de 10 años en el rubro recibiendo ropa de la semana, acolchados y prendas que necesitan un cuidado especial.</p>
          </div></div>
        </div>
      </section>
      <section className="section" aria-labelledby="como-titulo">
        <div className="wrap split">
          <h2 id="como-titulo">Cómo trabajamos</h2>
          <div className="prose">
            <p>Cada pedido empieza en el mostrador. Escuchamos qué necesitás, miramos la etiqueta, el tejido y el estado de la prenda, y recién ahí elegimos el servicio.</p>
            <p>Si algo no se puede garantizar, te lo decimos antes: hay manchas que no salen y desgastes que no se revierten. Preferimos explicarlo de entrada a sorprenderte al retirar.</p>
            <p>Cuando el pedido está listo, te avisamos por WhatsApp. Podés pasar a buscarlo en el horario del local ({hoursSentence.toLowerCase()}) o consultar por retiro y entrega.</p>
            <p>Para prendas que necesitan un tratamiento especializado, Aquabon es tu punto de contacto: recibimos la prenda, coordinamos el tratamiento y hacemos el seguimiento hasta que vuelve.</p>
            {/* TODO(joaco): si el dueño quiere, sumar 2 o 3 líneas reales sobre la historia del local (cuándo abrió, quién atiende). No inventar. */}
          </div>
        </div>
      </section>
      <section className="section section--espuma" aria-labelledby="hablemos-titulo">
        <div className="wrap split">
          <h2 id="hablemos-titulo">¿Querés consultarnos algo?</h2>
          <div>
            <p className="muted" style={{ marginBottom: 18 }}>Escribinos o mirá los <Link className="link" href="/servicios">servicios</Link> y las <Link className="link" href="/blog">guías para cuidar tu ropa</Link>.</p>
            <WhatsAppLink className="btn" message="Hola Aquabon, quería hacer una consulta." event="whatsapp_nosotros" data-primary-cta=""><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
          </div>
        </div>
      </section>
      <LocationBlock />
    </main>
    <SiteFooter />
  </>;
}
