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
import { business, hoursSentence, mapsDirections, pickupZones, services, SITE_URL } from "./site";
import { guide } from "./guides";
import { localData } from "./LocalLanding";

const data = localData("lavanderia-centro-mar-del-plata");
const message = "Hola Aquabon, estoy en el Centro de Mar del Plata y quiero consultar por __. Tengo __ prendas. ¿Me orientan con el servicio y el plazo?";
const pickup = "Hola Aquabon, quería consultar si tienen retiro y entrega. Mi dirección es __ y necesito lavar __.";
const featured = services.filter(s => ["/servicios/valet-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/tintoreria"].includes(s.href));
const faqs = [
  { question: "¿Dónde queda la lavandería?", answer: `En ${business.address}, en pleno centro. Abrí el mapa para ver cómo llegar desde donde estás.` },
  { question: "¿En qué horario puedo acercarme?", answer: `${hoursSentence}, sin turno. Si tenés dudas sobre una prenda, escribinos por WhatsApp antes de venir.` },
  { question: "¿Puedo llevar ropa de la semana y un acolchado?", answer: "Sí, en el mismo viaje. La ropa de todos los días va al valet y el acolchado lo revisamos aparte según tamaño, relleno y etiqueta." },
  { question: "¿Retiran y entregan en mi dirección?", answer: "Sí, en el Centro pasamos a buscar la ropa y te la llevamos. Mandanos la dirección y qué tenés para lavar, y coordinamos costo y horario." },
  { question: "Trabajo en el Centro, ¿puedo dejar la ropa de camino?", answer: "Sí, es lo más común acá. Dejás la bolsa en el horario del local, sin turno, y te avisamos por WhatsApp cuando está lista para que la pases a buscar." },
  { question: "¿Atienden sin turno?", answer: "Sí. Venís en el horario del local y te atendemos. Para prendas especiales o pedidos grandes, escribinos antes así te esperamos con todo listo." },
  { question: "¿El valet incluye planchado?", answer: "No. Incluye lavado, secado y doblado; el planchado lo pedís aparte y lo sumamos." },
  { question: "¿Cuánto cuesta y cuándo puedo retirar?", answer: "Depende del servicio, la cantidad y el estado de las prendas. Te pasamos importe y plazo antes de aceptar el pedido y te avisamos por WhatsApp cuando está listo." },
];

export default function CentroLanding() {
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero crumbs={data.crumbs} kicker={`Tu lavandería en ${business.street}`} title={data.h1}
        lead={`Te sacamos el lavado de encima: en ${business.street} lavamos, secamos y doblamos tu ropa de todos los días, y en el Centro también la retiramos y entregamos. Recibimos acolchados y prendas de tintorería: contanos qué tenés y te orientamos antes de venir.`}
        image={{ src: "/laundry-hero-v2.webp", alt: "Ropa limpia doblada en tonos blancos y azules" }}
        chip={{ symbol: "wash", text: "Te ahorrás el lavado" }}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={message} ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#retiro">Retiro en el Centro</a>
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
      <section className="p-sec p-sec--espuma" id="retiro" aria-labelledby="centro-retiro">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="centro-retiro">Retiro y entrega en el Centro</h2>
            <p>Estar en el Centro tiene una ventaja: es la zona que tenemos más a mano. Pasamos a buscar la ropa y te la devolvemos lavada, seca y doblada. Mandanos la dirección, el piso y qué tenés para lavar, y te confirmamos costo y franja horaria antes de pasar.</p>
          </div>
          <ul className="feature-grid">
            <li><h3>De camino, sin turno</h3><p>{business.street} queda sobre la zona céntrica: dejás la bolsa cuando te queda cómodo, en el horario del local, y te avisamos cuando está.</p></li>
            <li><h3>O lo coordinamos</h3><p>Si no te da el día, retiramos y entregamos en tu dirección del Centro. El retiro se cotiza aparte según la zona y te lo confirmamos antes.</p></li>
            <li><h3>Edificios y oficinas</h3><p>Coordinamos en la puerta del edificio o en recepción, donde nos indiques. Decinos en qué franja hay alguien.</p></li>
          </ul>
          <p className="note">También retiramos en los barrios de alrededor: {pickupZones.filter(z => z.slug !== "lavanderia-centro-mar-del-plata").slice(0, 5).map((z, i, arr) => <span key={z.slug}><Link className="link" href={"/" + z.slug}>{z.name}</Link>{i < arr.length - 1 ? ", " : ""}</span>)} y más. <Link className="link" href="/lavanderia-mar-del-plata">Ver todos los barrios</Link>.</p>
        </div>
      </section>

      <section className="p-sec" id="que-traen" aria-labelledby="centro-que-traen">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="centro-que-traen">Lo que más nos traen del Centro</h2>
            <p>El Centro es departamentos, oficinas y mucha gente de paso. Eso define los pedidos: ropa de la semana de casas sin lugar para tender, camisas de trabajo y prendas de vestir que necesitan revisión antes de cualquier proceso.</p>
          </div>
          <ul className="feature-grid feature-grid--tres">
            <li><h3>La bolsa de la semana</h3><p>Valet: lavado, secado y doblado. Es el pedido más frecuente de quienes viven en departamento y no tienen dónde secar.</p></li>
            <li><h3>Camisas y ropa de trabajo</h3><p>Lavado y planchado en un mismo pedido. Revisamos cuello, puños y axilas, y te decimos qué marcas pueden quedar según el tejido.</p></li>
            <li><h3>Un saco, un traje, un vestido</h3><p>Lo recibimos, lo revisamos y hacemos el seguimiento del tratamiento. Tratás con un solo mostrador.</p></li>
          </ul>
          <p className="note">Un acolchado o una campera también entran en el mismo viaje: cada pieza se cotiza por separado porque cada una necesita su proceso. <Link className="link" href="/servicios">Ver todos los servicios</Link>.</p>
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
        { title: "Nos la dejás", copy: `En ${business.street} o la pasamos a buscar. Revisamos las prendas y te confirmamos importe y plazo antes de aceptar el trabajo.`, image: "/blog/elegir-lavanderia-o-tintoreria.webp", alt: "Prendas cotidianas y especiales separadas según su cuidado" },
        { title: "Te avisamos cuando está", copy: "Recibís el aviso por WhatsApp para pasar a retirar. Si solicitaste entrega, la coordinamos según lo acordado.", image: "/laundry-hero-v2.webp", alt: "Pila de ropa limpia y doblada" },
      ]} cta={<WhatsAppLink className="btn btn--light btn--xl" message={message} ubicacion="proceso"><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>} />
      <section className="p-sec" aria-labelledby="centro-faq">
        <div className="wrap h-pick__grid">
          <div><div className="h-head" data-reveal><h2 id="centro-faq">Preguntas frecuentes del Centro</h2></div><Faq items={faqs} /></div>
          <div className="h-pick__ticket" data-reveal><p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p><ChatPreview data={{ service: "lavandería en el Centro", message, next: "te orientamos con el servicio y las condiciones de tu pedido" }} /></div>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" aria-labelledby="centro-guias">
        <div className="wrap"><div className="h-head h-head--split"><h2 id="centro-guias">Una ayuda antes de lavar</h2><Link className="link" href="/blog">Ver todas las guías</Link></div><GuideCards compact guides={[guide("diferencia-entre-lavanderia-y-tintoreria"), guide("como-secar-un-acolchado"), guide("simbolos-de-lavado-de-la-ropa")]} /></div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": SITE_URL + data.path + "#service", name: data.h1, description: data.description, url: SITE_URL + data.path, serviceType: "Lavandería", provider: { "@id": SITE_URL + "/#business" }, areaServed: [{ "@type": "Place", name: "Centro, Mar del Plata" }, { "@type": "City", name: "Mar del Plata" }], availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@id": SITE_URL + "/#business" } } }} />
  </>;
}
