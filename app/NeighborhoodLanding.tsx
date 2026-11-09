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
  const featured = n.services.map(href => services.find(s => s.href === href)).filter((s): s is (typeof services)[number] => Boolean(s));
  const neighbours = n.nearby.map(s => ({ slug: s, name: s === "lavanderia-centro-mar-del-plata" ? "Centro" : neighborhoods[s]?.name })).filter(x => x.name);
  const faqs = [
    { question: `¿Tienen local en ${n.name}?`, answer: `No, nuestro local está en ${business.address}. Pero no hace falta que vengas: en ${n.name} pasamos a buscar la ropa y te la llevamos cuando está lista.` },
    ...n.faqs,
    { question: "¿El valet incluye planchado?", answer: "No. Incluye lavado, secado y doblado de la ropa de todos los días; el planchado lo pedís aparte." },
    { question: "¿Qué horario tienen y cuánto demora un pedido?", answer: `${hoursSentence}. El plazo depende de las prendas y del trabajo de esa semana: te lo confirmamos cuando hacés el pedido.` },
  ];
  // areaServed del barrio, además del LocalBusiness global de app/layout.tsx.
  const schema = {
    "@context": "https://schema.org", "@type": "Service", "@id": SITE_URL + data.path + "#service",
    name: data.h1, description: data.description, url: SITE_URL + data.path,
    serviceType: "Lavandería",
    provider: { "@id": SITE_URL + "/#business" },
    areaServed: [
      { "@type": "Place", name: `${n.name}, Mar del Plata` },
      { "@type": "City", name: "Mar del Plata" },
    ],
    availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@id": SITE_URL + "/#business" }, servicePhone: business.phoneE164 },
  };
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <PageHero crumbs={data.crumbs} kicker={`Aquabon · ${business.street}`} title={data.h1}
        lead={n.intro}
        image={{ src: "/laundry-hero-v2.webp", alt: "Ropa limpia doblada en tonos blancos y azules" }}
        chip={{ symbol: "wash", text: "Te ahorrás el lavado" }}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={message} ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#retiro">Retiro en {n.name}</a>
        </>} />
      <Ribbon words={["Ropa de la semana", "Acolchados", n.noDryCleaning ? "Zapatillas" : "Tintorería", n.name]} />

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

      <section className="p-sec p-sec--espuma" id="retiro" aria-labelledby="zona-retiro-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="zona-retiro-titulo">Retiro y entrega en {n.name}</h2><p>{n.pickup}</p></div>
          <ul className="feature-grid">{n.pickupCards.map(c => <li key={c.title}><h3>{c.title}</h3><p>{c.copy}</p></li>)}</ul>
          <p className="note">
            <WhatsAppLink className="link" message={pickup} ubicacion="zona_retiro">Consultar mi dirección en {n.name}</WhatsAppLink>
            {" · "}<Link className="link" href="/servicios/retiro-y-entrega-de-ropa">Cómo funciona el retiro a domicilio</Link>
          </p>
        </div>
      </section>

      <section className="p-sec" aria-labelledby="zona-preparar">
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
            <div className="h-head" data-reveal><p className="pick-step">{n.name.toUpperCase()} · MAR DEL PLATA</p><h2 id="zona-direccion">Nos encontrás en {business.street}</h2><p>Si preferís traerla, nuestro local está en {business.address}. Mirá el recorrido desde donde estás.</p></div>
            <ul className="fit-cards" data-reveal>
              <li><h3>Organizá tu visita</h3><p>{hoursSentence}, sin turno. Abrí la ruta desde tu ubicación para elegir cómo venir.<br /><TrackedLink className="link link--light" href={mapsDirections} target="_blank" rel="noreferrer" gaEvent="click_como_llegar" ubicacion="zona_direccion">Ver recorrido en Google Maps</TrackedLink></p></li>
              <li><h3>Barrios de al lado</h3><p>También retiramos y entregamos cerca de {n.name}.<br />{neighbours.map(b => <span key={b.slug}><Link className="link link--light" href={"/" + b.slug}>Lavandería en {b.name}</Link><br /></span>)}</p></li>
            </ul>
          </div>
        </div>
      </section>

      <Process title="De tu bolsa al aviso de retiro" steps={[
        { title: "Contanos qué necesitás", copy: "Elegí el servicio o mandanos fotos de la prenda y su etiqueta. Si tiene manchas, contanos qué pasó.", image: "/blog/leer-simbolos-etiqueta-ropa.webp", alt: "Revisión de la etiqueta de una prenda" },
        { title: "Nos la dejás", copy: `La pasamos a buscar por ${n.name} o la traés a ${business.street}. Revisamos las prendas y te confirmamos importe y plazo antes de aceptar el trabajo.`, image: "/blog/elegir-lavanderia-o-tintoreria.webp", alt: "Prendas cotidianas y especiales separadas según su cuidado" },
        { title: "Te avisamos cuando está", copy: "Recibís el aviso por WhatsApp para pasar a retirar. Si solicitaste entrega, la coordinamos según lo acordado.", image: "/laundry-hero-v2.webp", alt: "Pila de ropa limpia y doblada" },
      ]} cta={<WhatsAppLink className="btn btn--light btn--xl" message={message} ubicacion="proceso"><WhatsAppIcon />Consultar por mi ropa</WhatsAppLink>} />

      <section className="p-sec" aria-labelledby="zona-faq">
        <div className="wrap h-pick__grid">
          <div><div className="h-head" data-reveal><h2 id="zona-faq">Preguntas frecuentes de {n.name}</h2></div><Faq items={faqs} /></div>
          <div className="h-pick__ticket" data-reveal><p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p><ChatPreview data={{ service: `lavandería en ${n.name}`, message, next: "te orientamos con el servicio y las condiciones de tu pedido" }} /></div>
        </div>
      </section>

      <section className="p-sec p-sec--espuma" aria-labelledby="zona-guias">
        <div className="wrap"><div className="h-head h-head--split"><h2 id="zona-guias">Una ayuda antes de lavar</h2><Link className="link" href="/blog">Ver todas las guías</Link></div><GuideCards compact guides={n.guides.map(slug => guide(slug))} /></div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={schema} />
  </>;
}
