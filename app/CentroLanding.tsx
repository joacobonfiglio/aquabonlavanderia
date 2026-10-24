import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { GuideCards, PageHero, Process, Ribbon } from "./Blocks";
import Img from "./Img";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import WhatsAppLink from "./WhatsAppLink";
import TrackedLink from "./TrackedLink";
import ChatPreview from "./ChatPreview";
import { WhatsAppIcon } from "./ui";
import { business, hoursSentence, mapsDirections, services, SITE_URL } from "./site";
import { guide } from "./guides";
import { localData } from "./LocalLanding";

const data = localData("lavanderia-centro-mar-del-plata");
const message = "Hola Aquabon, estoy en el Centro de Mar del Plata y quiero consultar por __. Tengo __ prendas. ¿Me orientan con el servicio y el plazo?";
const pickup = "Hola Aquabon, quería consultar si tienen retiro y entrega. Mi dirección es __ y necesito lavar __.";
const featured = services.filter(s => ["/servicios/valet-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/tintoreria"].includes(s.href));
const faqs = [
  { question: "¿Dónde queda la lavandería?", answer: `Aquabon está en ${business.address}. Abrí el mapa para ver el recorrido desde tu ubicación.` },
  { question: "¿En qué horario puedo acercarme?", answer: `${hoursSentence}. Si tenés dudas sobre una prenda, podés consultar por WhatsApp antes de venir.` },
  { question: "¿Puedo llevar ropa de la semana y un acolchado?", answer: "Sí. El valet corresponde a ropa cotidiana; el acolchado se evalúa como otro servicio según tamaño, relleno y etiqueta." },
  { question: "¿Retiran y entregan en mi dirección?", answer: "Sí. Hacemos retiro y entrega en el Centro. Mandanos la dirección y qué necesitás lavar para coordinar costo y disponibilidad." },
  { question: "¿El valet incluye planchado?", answer: "Incluye lavado, secado y doblado. El planchado se solicita aparte." },
  { question: "¿Cuánto cuesta y cuándo puedo retirar?", answer: "Depende del servicio, la cantidad y el estado de las prendas. Te confirmamos importe y plazo antes de aceptar el pedido y te avisamos cuando está listo." },
];

export default function CentroLanding() {
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero crumbs={data.crumbs} kicker={`Tu lavandería en ${business.street}`} title={data.h1}
        lead={`En ${business.street}, lavamos, secamos y doblamos tu ropa de todos los días. También recibimos acolchados y prendas de tintorería: contanos qué tenés para lavar y te orientamos antes de venir.`}
        image={{ src: "/laundry-hero-v2.webp", alt: "Ropa limpia doblada en tonos blancos y azules" }}
        chip={{ symbol: "wash", text: "Vos traés la bolsa" }}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={message} ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#venir-al-local">Cómo llegar</a>
        </>} />
      <Ribbon words={["Ropa de la semana", "Acolchados", "Tintorería", "Centro de Mar del Plata"]} />
      <section className="p-sec" aria-labelledby="centro-servicios">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="centro-servicios">¿Qué tenés para traer?</h2><p>Elegí según la prenda. Si no sabés qué cuidado necesita, mandanos una foto y la etiqueta.</p></div>
          <div className="bento">
            {featured.map((s, i) => <Link href={s.href} key={s.href} className={`bento__card${i === 0 ? " bento__card--big" : ""}`} data-reveal>
              <Img src={s.image} alt={s.alt} width={1200} height={900} sizes="(max-width: 960px) 100vw, 55vw" />
              <span className="bento__body"><strong>{s.name}</strong><span>{s.short}</span><em>Conocer el servicio</em></span>
            </Link>)}
          </div>
          <p className="note">¿Necesitás planchado, zapatillas o un arreglo? <Link className="link" href="/servicios">Mirá todos los servicios</Link>.</p>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" id="venir-al-local" aria-labelledby="centro-direccion">
        <div className="wrap split-media">
          <div className="split-media__img" data-reveal><Img src="/service-still-v2.webp" alt="Ropa cotidiana doblada y preparada para retirar" width={1000} height={1250} sizes="(max-width: 960px) 100vw, 460px" /></div>
          <div>
            <div className="h-head" data-reveal><p className="pick-step">CENTRO · MAR DEL PLATA</p><h2 id="centro-direccion">Nos encontrás en {business.street}</h2><p>Si vivís, trabajás o estás de paso por el Centro, podés acercarte al local con tu ropa. Revisamos qué necesitás y te indicamos cómo sigue el pedido.</p></div>
            <ul className="fit-cards" data-reveal>
              <li><h3>Organizá tu visita</h3><p>{hoursSentence}. Abrí la ruta desde tu ubicación para elegir cómo venir.<br /><TrackedLink className="link link--light" href={mapsDirections} target="_blank" rel="noreferrer" gaEvent="click_como_llegar" ubicacion="zona_direccion">Ver recorrido en Google Maps</TrackedLink></p></li>
              <li><h3>¿Preferís consultar por retiro?</h3><p>Hacemos retiro y entrega en esta zona. Mandanos tu dirección y el tipo de prendas para coordinar costo y disponibilidad.<br /><WhatsAppLink className="link link--light" message={pickup} ubicacion="zona_retiro">Consultar mi dirección</WhatsAppLink><br /><Link className="link link--light" href="/servicios/retiro-y-entrega-de-ropa">Ver retiro a domicilio y zonas</Link></p></li>
            </ul>
          </div>
        </div>
      </section>
      <Process title="De tu bolsa al aviso de retiro" steps={[
        { title: "Contanos qué necesitás", copy: "Elegí el servicio o mandanos fotos de la prenda y su etiqueta. Si tiene manchas, contanos qué pasó.", image: "/blog/leer-simbolos-etiqueta-ropa.webp", alt: "Revisión de la etiqueta de una prenda" },
        { title: "Acercá tu pedido", copy: `Te esperamos en ${business.street}. Revisamos las prendas y confirmamos el importe y el plazo antes de aceptar el trabajo.`, image: "/blog/elegir-lavanderia-o-tintoreria.webp", alt: "Prendas cotidianas y especiales separadas según su cuidado" },
        { title: "Te avisamos cuando está", copy: "Recibís el aviso por WhatsApp para pasar a retirar. Si solicitaste entrega, la coordinamos según lo acordado.", image: "/laundry-hero-v2.webp", alt: "Pila de ropa limpia y doblada" },
      ]} cta={<WhatsAppLink className="btn btn--light btn--xl" message={message} ubicacion="proceso"><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>} />
      <section className="p-sec" aria-labelledby="centro-faq">
        <div className="wrap h-pick__grid">
          <div><div className="h-head" data-reveal><h2 id="centro-faq">Antes de venir</h2></div><Faq items={faqs} /></div>
          <div className="h-pick__ticket" data-reveal><p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p><ChatPreview data={{ service: "lavandería en el Centro", message, next: "te orientamos con el servicio y las condiciones de tu pedido" }} /></div>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" aria-labelledby="centro-guias">
        <div className="wrap"><div className="h-head h-head--split"><h2 id="centro-guias">Una ayuda antes de lavar</h2><Link className="link" href="/blog">Ver todas las guías</Link></div><GuideCards compact guides={[guide("diferencia-entre-lavanderia-y-tintoreria"), guide("como-secar-un-acolchado"), guide("simbolos-de-lavado-de-la-ropa")]} /></div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": SITE_URL + data.path + "#service", name: data.h1, description: data.description, url: SITE_URL + data.path, provider: { "@id": SITE_URL + "/#business" }, availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@id": SITE_URL + "/#business" } } }} />
  </>;
}
