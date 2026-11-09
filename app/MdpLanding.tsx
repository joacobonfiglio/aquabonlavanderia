import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Clothesline, GuideCards, PageHero, Process, Ribbon } from "./Blocks";
import Faq from "./Faq";
import Img from "./Img";
import JsonLd from "./JsonLd";
import WhatsAppLink from "./WhatsAppLink";
import TrackedLink from "./TrackedLink";
import ChatPreview from "./ChatPreview";
import { WhatsAppIcon } from "./ui";
import { business, hours, hoursSentence, mapsDirections, mapsEmbed, pickupZones, services, SITE_URL } from "./site";
import { guide } from "./guides";
import { localData } from "./LocalLanding";
import { seoDescriptions } from "./seo-descriptions";

// Plantilla propia de /lavanderia-mar-del-plata. Es la página que Google prefiere para
// "lavandería mar del plata" (1.023 impresiones contra 483 de la home en Search Console,
// 13/09 a 07/11/2026), así que se queda con esa búsqueda y la home apunta a la marca y a
// "lavandería y tintorería". No repetir acá el title ni el H1 de la home.
const data = localData("general");
const message = "Hola Aquabon, quería consultar por un servicio de lavandería en Mar del Plata. Tengo __ para lavar.";
const featured = services.slice(0, 3);
const rest = services.filter(s => !featured.includes(s));

const faqs = [
  { question: "¿Dónde está la lavandería?", answer: `En ${business.address}, en el centro. ${hoursSentence}, sin turno. Si no podés venir, retiramos y entregamos en once barrios.` },
  { question: "¿En qué barrios de Mar del Plata retiran y entregan?", answer: `En ${pickupZones.map(z => z.name).join(", ").replace(/, ([^,]*)$/, " y $1")}. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual.` },
  { question: "¿Cuánto cuesta y cuándo está listo?", answer: "Depende del servicio, la cantidad y la prenda. Te pasamos importe y plazo antes de que dejes la ropa, para que no haya sorpresas." },
  { question: "¿Qué diferencia hay entre el valet y el lavado por prenda?", answer: "El valet es la ropa de todos los días: la lavamos, secamos y doblamos en un solo pedido. Un acolchado, un tapado o unas zapatillas se revisan y se cotizan por pieza, porque cada uno necesita su proceso." },
  { question: "¿El valet incluye planchado?", answer: "No. El valet es lavado, secado y doblado. Si querés algo planchado, pedilo aparte y lo sumamos al pedido." },
  { question: "¿Puedo consultar con una foto antes de ir?", answer: "Sí, es lo que más recomendamos. Mandá una foto de la prenda y de la etiqueta por WhatsApp y te decimos qué le conviene y si hay algún riesgo." },
  { question: "¿Lavan ropa de alquileres temporarios y empresas?", answer: "Sí: alquileres temporarios, hoteles, restaurantes, centros de estética, uniformes y ropa deportiva. Acordamos volumen y frecuencia antes de empezar." },
];

export default function MdpLanding() {
  const description = seoDescriptions[data.path] ?? data.description;
  const schema = {
    "@context": "https://schema.org", "@type": "Service", "@id": SITE_URL + data.path + "#service",
    name: "Lavandería en Mar del Plata", serviceType: "Lavandería", description, url: SITE_URL + data.path,
    provider: { "@id": SITE_URL + "/#business" },
    areaServed: [{ "@type": "City", name: "Mar del Plata" }, ...pickupZones.map(z => ({ "@type": "Place", name: `${z.name}, Mar del Plata` }))],
    availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@id": SITE_URL + "/#business" }, servicePhone: business.phoneE164 },
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero crumbs={data.crumbs} kicker={`Aquabon · ${business.street}`} title={data.h1}
        lead="Te sacamos el lavado de encima: ropa de todos los días, acolchados y prendas especiales, revisadas una por una. Local en Gascón 2189 y retiro y entrega en once barrios. Más de 10 años en el rubro."
        image={{ src: "/laundry-hero-v2.webp", alt: "Ropa lavada y doblada en tonos blancos y azules en Aquabon, lavandería de Mar del Plata" }}
        chip={{ symbol: "wash", text: "Retiramos y entregamos" }}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={message} ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Consultar por WhatsApp</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#cerca">Lavadero cerca tuyo</a>
        </>} />
      <Ribbon words={["Valet", "Acolchados", "Tintorería", "Zapatillas", "Planchado", "Arreglos"]} />

      <section className="p-sec" aria-labelledby="mdp-servicios">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="mdp-servicios">Qué lavamos en Mar del Plata</h2>
            <p>Desde la ropa de todos los días hasta acolchados o prendas delicadas. Te orientamos según el material y el estado, y nos ocupamos del resto.</p>
          </div>
          <div className="bento">
            {featured.map((s, i) => <Link href={s.href} key={s.href} className={`bento__card${i === 0 ? " bento__card--big" : ""}`} data-reveal>
              <Img src={s.image} alt={s.alt} width={1200} height={900} sizes="(max-width: 960px) 100vw, 55vw" />
              <span className="bento__body"><strong>{s.name}</strong><span>{s.short}</span><em>Conocer el servicio</em></span>
            </Link>)}
          </div>
          <p className="note">El más pedido en primavera y otoño es el <Link className="link" href="/servicios/lavado-de-acolchados">lavado de acolchados en Mar del Plata</Link>: te lo lavamos y secamos entero, sin que tengas que pelearte con el lavarropas de casa.</p>
        </div>
      </section>

      <section className="p-sec p-sec--espuma" id="barrios" aria-labelledby="mdp-barrios">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="mdp-barrios">Barrios donde retiramos y entregamos</h2>
            <p>Pasamos a buscar la ropa y te la llevamos cuando está lista. Elegí tu barrio para ver cómo coordinamos ahí, o mandanos tu dirección y te confirmamos costo y disponibilidad antes de pasar.</p>
          </div>
          <ul className="feature-grid feature-grid--zonas">
            {pickupZones.map(z => <li key={z.slug}>
              <h3>{z.name}</h3>
              <p>Ropa de la semana, acolchados y prendas especiales, con retiro y entrega coordinados.</p>
              <Link className="link" href={"/" + z.slug}>Lavandería en {z.name}</Link>
            </li>)}
          </ul>
          <p className="note">¿Estás en otra zona? <WhatsAppLink className="link" message="Hola Aquabon, estoy en __ y necesito lavar __. ¿Pueden retirar en mi dirección?" ubicacion="otras_zonas">Consultanos tu dirección</WhatsAppLink>: te decimos si podemos coordinar el pedido. El costo y la disponibilidad se confirman en cada caso.</p>
        </div>
      </section>

      <section className="p-sec" id="cerca" aria-labelledby="mdp-cerca">
        <div className="wrap loc">
          <div>
            <div className="h-head" data-reveal>
              <h2 id="mdp-cerca">Lavadero de ropa cerca tuyo</h2>
              <p>Si buscás un lavadero cerca, estamos en {business.street}, a metros del centro de Mar del Plata. Se entra directo desde la calle, sin turno y sin reserva: traés la bolsa, la revisamos con vos en el mostrador y te confirmamos importe y plazo antes de dejarla.</p>
            </div>
            <address>
              <strong>{business.name}</strong><br />
              {business.street}, {business.postalCode} {business.city}, {business.region}
            </address>
            <dl>
              {hours.map(h => <div key={h.label}><dt>{h.label}</dt><dd>{h.text}</dd></div>)}
              <div><dt>Teléfono y WhatsApp</dt><dd><TrackedLink className="link" href={`tel:${business.phoneE164}`} gaEvent="click_telefono" ubicacion="mdp_cerca">{business.phoneDisplay}</TrackedLink></dd></div>
            </dl>
            <p className="note">También podés <TrackedLink className="link" href={mapsDirections} target="_blank" rel="noreferrer" gaEvent="click_como_llegar" ubicacion="mdp_cerca">abrir el recorrido en Google Maps</TrackedLink> desde donde estés, o <WhatsAppLink className="link" message={message} ubicacion="mdp_cerca">escribirnos antes de venir</WhatsAppLink>.</p>
          </div>
          <div className="map" data-reveal>
            <iframe src={mapsEmbed} title={`Mapa: ${business.name}, ${business.address}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <Process title="Cómo trabajamos" steps={[
        { title: "Contanos qué tenés", copy: "Elegí el servicio o mandanos una foto de la prenda y su etiqueta por WhatsApp. Con eso ya te orientamos.", image: "/blog/leer-simbolos-etiqueta-ropa.webp", alt: "Revisión de la etiqueta de una prenda antes de lavarla" },
        { title: "Nos la dejás", copy: `En ${business.street} o la pasamos a buscar por tu barrio. Revisamos cada prenda y te confirmamos importe y plazo antes de aceptar el trabajo.`, image: "/services/retiro-v3.webp", alt: "Entrega de una bolsa de ropa en la puerta de una casa" },
        { title: "Te avisamos cuando está", copy: "Recibís el aviso por WhatsApp. La pasás a buscar doblada y lista para guardar, o te la llevamos.", image: "/laundry-hero-v2.webp", alt: "Pila de ropa lavada y doblada" },
      ]} cta={<WhatsAppLink className="btn btn--light btn--xl" message={message} ubicacion="proceso"><WhatsAppIcon />Consultar por WhatsApp</WhatsAppLink>} />

      <section className="p-sec" aria-labelledby="mdp-faq">
        <div className="wrap h-pick__grid">
          <div>
            <div className="h-head" data-reveal><h2 id="mdp-faq">Preguntas frecuentes sobre la lavandería</h2></div>
            <Faq items={faqs} />
          </div>
          <div className="h-pick__ticket" data-reveal>
            <p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p>
            <ChatPreview data={{ service: "lavandería en Mar del Plata", message, next: "te orientamos con el servicio, el importe y el plazo" }} />
          </div>
        </div>
      </section>

      <section className="p-sec p-sec--espuma" aria-labelledby="mdp-guias">
        <div className="wrap">
          <div className="h-head h-head--split"><h2 id="mdp-guias">Antes de lavar en casa</h2><Link className="link" href="/blog">Ver todas las guías</Link></div>
          <GuideCards compact guides={[guide("diferencia-entre-lavanderia-y-tintoreria"), guide("cuanto-cuesta-lavar-un-acolchado"), guide("como-secar-ropa-dentro-de-casa")]} />
        </div>
      </section>

      <section className="p-sec" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-label="Otros servicios">
        <Clothesline title="Todos nuestros servicios" items={rest} />
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={schema} />
    <JsonLd data={faqSchema} />
  </>;
}
