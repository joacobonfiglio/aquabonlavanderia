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

import { neighborhoods, type NeighborhoodSlug } from "./neighborhoods";

export default function NeighborhoodLanding({ slug }: { slug: NeighborhoodSlug }) {
  const n = neighborhoods[slug];
  const data = localData(slug);
  const message = `Hola Aquabon, estoy en ${n.name}, Mar del Plata. Quiero lavar __. Tengo __ prendas y __ acolchados. ¿Me orientan?`;
  const pickup = `Hola Aquabon, ¿llegan a mi dirección en ${n.name}? Es __ y necesito lavar __. Quisiera consultar cobertura, costo y disponibilidad.`;
  const featured = services.filter(s => ["/servicios/valet-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/tintoreria"].includes(s.href));
  const faqs = [
    { question: `¿Tienen local en ${n.name}?`, answer: `Nuestro local está en ${business.address}. Desde esta página podés consultar por tu ropa y abrir el mapa para organizar tu visita desde ${n.name}.` },
    { question: n.question, answer: n.answer },
    { question: `¿Retiran ropa y acolchados en ${n.name}?`, answer: "Consultá si llegamos a tu dirección. La cobertura, el costo y la disponibilidad se confirman para cada pedido antes de coordinar." },
    { question: "¿Cómo se lava mi acolchado?", answer: "Revisamos etiqueta, tamaño, relleno y estado para indicar el proceso adecuado. Mandanos fotos si tiene manchas, roturas o si no encontrás la etiqueta." },
    { question: "¿El valet incluye planchado?", answer: "Incluye lavado, secado y doblado de ropa cotidiana. El planchado se solicita aparte." },
    { question: "¿Qué horario tienen y cuánto demora un pedido?", answer: `${hoursSentence}. El plazo depende de las prendas y del trabajo: consultalo antes de traer tu pedido.` },
  ];
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero crumbs={data.crumbs} kicker={`Aquabon · ${business.street}`} title={data.h1}
        lead={n.intro}
        image={{ src: "/laundry-hero-v2.webp", alt: "Ropa limpia doblada en tonos blancos y azules" }}
        chip={{ symbol: "wash", text: "Vos traés la bolsa" }}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={message} ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#venir-al-local">Cómo llegar</a>
        </>} />
      <Ribbon words={["Ropa de la semana", "Acolchados", "Tintorería", n.name]} />
      <section className="p-sec" aria-labelledby="zona-servicios">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="zona-servicios">{n.heading}</h2><p>{n.detail}</p></div>
          <div className="bento">
            {featured.map((s, i) => <Link href={s.href} key={s.href} className={`bento__card${i === 0 ? " bento__card--big" : ""}`} data-reveal>
              <Img src={s.image} alt={s.alt} width={1200} height={900} sizes="(max-width: 960px) 100vw, 55vw" />
              <span className="bento__body"><strong>{s.name}</strong><span>{s.short}</span><em>Conocer el servicio</em></span>
            </Link>)}
          </div>
          <p className="note">¿Necesitás planchado, zapatillas o un arreglo? <Link className="link" href="/servicios">Mirá todos los servicios</Link>.</p>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" aria-labelledby="zona-preparar">
        <div className="wrap">
          <div className="h-head h-head--split"><h2 id="zona-preparar">{n.focusTitle}</h2><p>{n.focus}</p></div>
          <ul className="feature-grid">{n.cards.map(c => <li key={c.title}><h3>{c.title}</h3><p>{c.copy}</p></li>)}</ul>
          {n.extra ? <p className="note"><Link className="link" href={n.extra.href}>{n.extra.label}</Link></p> : null}
        </div>
      </section>
      <section className="p-sec p-sec--espuma" id="venir-al-local" aria-labelledby="zona-direccion">
        <div className="wrap split-media">
          <div className="split-media__img" data-reveal><Img src="/service-still-v2.webp" alt="Ropa cotidiana doblada y preparada para retirar" width={1000} height={1250} sizes="(max-width: 960px) 100vw, 460px" /></div>
          <div>
            <div className="h-head" data-reveal><p className="pick-step">{n.name.toUpperCase()} · MAR DEL PLATA</p><h2 id="zona-direccion">Nos encontrás en {business.street}</h2><p>Nuestro local está en {business.street}, Mar del Plata. Consultá el recorrido desde tu ubicación antes de venir.</p></div>
            <ul className="fit-cards" data-reveal>
              <li><h3>Organizá tu visita</h3><p>{hoursSentence}. Abrí la ruta desde tu ubicación para elegir cómo venir.<br /><TrackedLink className="link link--light" href={mapsDirections} target="_blank" rel="noreferrer" gaEvent="click_como_llegar" ubicacion="zona_direccion">Ver recorrido en Google Maps</TrackedLink></p></li>
              <li><h3>¿Preferís consultar por retiro?</h3><p>Mandanos tu dirección y el tipo de prendas. Te confirmamos si llegamos a tu zona, el costo y la disponibilidad antes de coordinar.<br /><WhatsAppLink className="link link--light" message={pickup} ubicacion="zona_retiro">Consultar mi dirección</WhatsAppLink></p></li>
            </ul>
          </div>
        </div>
      </section>
      <Process title="De tu bolsa al aviso de retiro" steps={[
        { title: "Contanos qué necesitás", copy: "Elegí el servicio o mandanos fotos de la prenda y su etiqueta. Si tiene manchas, contanos qué pasó.", image: "/blog/leer-simbolos-etiqueta-ropa.webp", alt: "Revisión de la etiqueta de una prenda" },
        { title: "Acercá tu pedido", copy: `Te esperamos en ${business.street}. Revisamos las prendas y confirmamos el importe y el plazo antes de aceptar el trabajo.`, image: "/blog/elegir-lavanderia-o-tintoreria.webp", alt: "Prendas cotidianas y especiales separadas según su cuidado" },
        { title: "Te avisamos cuando está", copy: "Recibís el aviso por WhatsApp para pasar a retirar. Si solicitaste entrega, la coordinamos según lo acordado.", image: "/laundry-hero-v2.webp", alt: "Pila de ropa limpia y doblada" },
      ]} cta={<WhatsAppLink className="btn btn--light btn--xl" message={message} ubicacion="proceso"><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>} />
      <section className="p-sec" aria-labelledby="zona-faq">
        <div className="wrap h-pick__grid">
          <div><div className="h-head" data-reveal><h2 id="zona-faq">Antes de venir</h2></div><Faq items={faqs} /></div>
          <div className="h-pick__ticket" data-reveal><p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p><ChatPreview data={{ service: `lavadero para ${n.name}`, message, next: "te orientamos con el servicio y las condiciones de tu pedido" }} /></div>
        </div>
      </section>
      <section className="p-sec p-sec--espuma" aria-labelledby="zona-guias">
        <div className="wrap"><div className="h-head h-head--split"><h2 id="zona-guias">Una ayuda antes de lavar</h2><Link className="link" href="/blog">Ver todas las guías</Link></div><GuideCards compact guides={n.guides.map(slug => guide(slug))} /></div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": SITE_URL + data.path + "#service", name: data.h1, description: data.description, url: SITE_URL + data.path, provider: { "@id": SITE_URL + "/#business" }, availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@id": SITE_URL + "/#business" } } }} />
  </>;
}
