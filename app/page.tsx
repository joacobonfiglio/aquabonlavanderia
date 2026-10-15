import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import LocationBlock from "./LocationBlock";
import WhatsAppLink from "./WhatsAppLink";
import Ticket, { type TicketData } from "./Ticket";
import Faq, { type FaqItem } from "./Faq";
import Reviews from "./Reviews";
import Img from "./Img";
import { CareSymbol, WhatsAppIcon } from "./ui";
import { business, businessLinks, hours, hoursSentence, services } from "./site";
import "./home.css";

type Option = { id: string; label: string; image: string; ticket: TicketData };

const options: Option[] = [
  { id: "semana", label: "Ropa de la semana", image: "/laundry-detail-v2.webp", ticket: {
    rows: [{ label: "Prenda", value: "ropa de la semana" }, { label: "Servicio", value: "valet: lavado, secado y doblado" }, { label: "Cómo sigue", value: "traés la bolsa y te avisamos cuando está lista" }],
    message: "Hola Aquabon, tengo ropa de la semana para el valet. Son más o menos __ prendas. ¿Me pasan importe y plazo?",
    event: "whatsapp_home_ticket_valet", link: { href: "/servicios/valet-de-ropa", label: "Cómo funciona el valet" } } },
  { id: "acolchado", label: "Acolchado", image: "/blog/revisar-cuando-lavar-acolchado.webp", ticket: {
    rows: [{ label: "Prenda", value: "acolchado, cubrecama o frazada" }, { label: "Servicio", value: "lavado de acolchados" }, { label: "Cómo sigue", value: "revisamos tamaño, etiqueta y relleno" }],
    message: "Hola Aquabon, quiero lavar un acolchado. Es de __ plazas y el relleno es __. ¿Me pasan importe y plazo?",
    event: "whatsapp_home_ticket_acolchado", link: { href: "/servicios/lavado-de-acolchados", label: "Lavado de acolchados" } } },
  { id: "campera", label: "Campera o tapado", image: "/blog/revisar-tapado-etiqueta-forro.webp", ticket: {
    rows: [{ label: "Prenda", value: "campera o tapado" }, { label: "Servicio", value: "camperas y tapados" }, { label: "Cómo sigue", value: "miramos etiqueta, forro y relleno" }],
    message: "Hola Aquabon, quiero consultar por la limpieza de una campera o tapado. Les mando una foto de la prenda y de la etiqueta.",
    event: "whatsapp_home_ticket_abrigo", link: { href: "/servicios/lavado-de-camperas-y-tapados", label: "Camperas y tapados" } } },
  { id: "zapatillas", label: "Zapatillas", image: "/blog/revisar-zapatillas-antes-lavar.webp", ticket: {
    rows: [{ label: "Prenda", value: "un par de zapatillas" }, { label: "Servicio", value: "lavado de zapatillas" }, { label: "Cómo sigue", value: "revisamos material, uniones y desgaste" }],
    message: "Hola Aquabon, quiero consultar por el lavado de unas zapatillas. Les mando una foto del par.",
    event: "whatsapp_home_ticket_zapatillas", link: { href: "/servicios/lavado-de-zapatillas", label: "Lavado de zapatillas" } } },
  { id: "traje", label: "Traje o vestido", image: "/blog/revisar-prendas-tintoreria.webp", ticket: {
    rows: [{ label: "Prenda", value: "traje, saco o vestido" }, { label: "Servicio", value: "tintorería" }, { label: "Cómo sigue", value: "la registramos y seguimos el tratamiento" }],
    message: "Hola Aquabon, tengo una prenda para tintorería (traje, saco o vestido). Les mando una foto de la prenda y de la etiqueta.",
    event: "whatsapp_home_ticket_tintoreria", link: { href: "/servicios/tintoreria", label: "Tintorería" } } },
  { id: "camisas", label: "Camisas", image: "/blog/preparar-camisa-antes-lavar.webp", ticket: {
    rows: [{ label: "Prenda", value: "camisas" }, { label: "Servicio", value: "lavado y planchado de camisas" }, { label: "Cómo sigue", value: "revisamos cuello, puños y etiqueta" }],
    message: "Hola Aquabon, quiero lavar y planchar camisas. Son __. ¿Me pasan importe y plazo?",
    event: "whatsapp_home_ticket_camisas", link: { href: "/servicios/lavado-y-planchado-de-camisas", label: "Lavado y planchado de camisas" } } },
  { id: "arreglo", label: "Un arreglo", image: "/services/costura-v3.webp", ticket: {
    rows: [{ label: "Prenda", value: "una prenda para arreglar" }, { label: "Servicio", value: "arreglos y costura" }, { label: "Cómo sigue", value: "medidas y alcance se ven en el local" }],
    message: "Hola Aquabon, quiero consultar por un arreglo de costura. Necesito __.",
    event: "whatsapp_home_ticket_arreglo", link: { href: "/servicios/arreglos-y-costura", label: "Arreglos y costura" } } },
];

const general: TicketData = {
  rows: [{ label: "Prenda", value: "lo que tengas pendiente" }, { label: "Servicio", value: "te ayudamos a elegirlo" }, { label: "Cómo sigue", value: "mandanos una foto de la prenda y su etiqueta" }],
  message: "Hola Aquabon, quería consultar qué servicio necesita mi ropa.",
  event: "whatsapp_home_ticket_general",
};
const stub = "Precio y plazo te los confirmamos antes de que dejes la prenda.";

const featured = services.slice(0, 3);
const line = services.filter(s => !featured.includes(s));

const steps = [
  { title: "Traés la bolsa o la retiramos", copy: "Pasá por Gascón 2189 o consultá retiro y entrega para tu zona.", image: "/services/retiro-v3.webp", alt: "Entrega de una bolsa de ropa en la puerta de una casa" },
  { title: "Lavamos y secamos según cada prenda", copy: "Separamos por color, tejido y etiqueta antes de elegir el proceso.", image: "/blog/medir-detergente-para-lavar.webp", alt: "Detergente medido junto a un lavarropas cargado" },
  { title: "Doblada, lista y te avisamos", copy: "Te escribimos por WhatsApp cuando podés pasar a buscarla.", image: "/laundry-hero-v2.webp", alt: "Pila de ropa lavada y doblada en tonos blancos y azules" },
];

const words = ["Lavamos", "Secamos", "Doblamos", "Planchamos", "Teñimos", "Cosemos", "Cuidamos"];

const faqs: FaqItem[] = [
  { question: "¿Dónde queda Aquabon?", answer: `En ${business.street}, en el centro de Mar del Plata. Podés traer tu ropa en el horario del local o escribirnos antes por WhatsApp.` },
  { question: "¿Qué horario tiene la lavandería?", answer: `${hoursSentence}.` },
  { question: "¿Cuánto cuesta y cuándo está listo?", answer: "Depende del servicio, la cantidad y las características de la prenda. Escribinos con lo que necesitás lavar y te confirmamos el importe y el plazo antes de que lo dejes." },
  { question: "¿Retiran y entregan a domicilio?", answer: "Coordinamos según tu zona y nuestra disponibilidad. Mandanos tu dirección por WhatsApp para consultar cobertura, costo y horarios." },
  { question: "¿Y si no sé qué servicio necesita mi prenda?", answer: "Mandanos una foto de la prenda y de la etiqueta. Si necesitamos verla en persona, te lo decimos. La composición y el estado de la prenda definen el tratamiento." },
  { question: "¿El valet incluye planchado?", answer: "No. El valet incluye lavado, secado y doblado de ropa de uso diario. El planchado se pide aparte." },
  { question: "¿Lavan acolchados de plumas?", answer: "Los recibimos para evaluarlos. Revisamos etiqueta, relleno y estado antes de confirmar si admiten lavado y cómo secarlos." },
  { question: "¿La tintorería se hace en el local?", answer: "Aquabon es el punto de recepción y seguimiento. Cuando la prenda necesita un tratamiento especializado, lo coordinamos fuera del local y te avisamos cuando vuelve." },
  { question: "¿Necesito sacar turno?", answer: "No. Podés acercarte en el horario del local. Para prendas especiales o pedidos grandes, conviene escribirnos antes." },
  { question: "¿Trabajan con empresas y alojamientos?", answer: "Sí: alquileres temporarios, hoteles, restaurantes, centros de estética, uniformes y ropa deportiva. Acordamos volumen y frecuencia antes de empezar." },
];

function Waves({ className = "" }: { className?: string }) {
  // Las tres olas del logo, en loop horizontal (solo transform).
  const d = "M0 40 C 150 0 300 0 450 40 S 750 80 900 40 S 1200 0 1350 40 S 1650 80 1800 40 V 120 H 0 Z";
  return <div className={"waves " + className} aria-hidden="true">
    <svg viewBox="0 0 1800 120" preserveAspectRatio="none" className="waves__l1"><path d={d} /></svg>
    <svg viewBox="0 0 1800 120" preserveAspectRatio="none" className="waves__l2"><path d={d} /></svg>
    <svg viewBox="0 0 1800 120" preserveAspectRatio="none" className="waves__l3"><path d={d} /></svg>
  </div>;
}

export default function Home() {
  return <>
    <SiteHeader event="whatsapp_home_header" overlay />
    <main id="contenido" className="home">

      {/* 1. Hero con ojo de buey */}
      <section className="h-hero" aria-labelledby="hero-titulo" data-cta-zone="">
        <div className="wrap h-hero__grid">
          <div className="h-hero__copy">
            <h1 id="hero-titulo">
              <span className="h-hero__kicker">Lavandería y tintorería en Mar del Plata</span>
              <span className="h-hero__title"><span>Vos traés</span> <span>la bolsa.</span> <span className="is-azul">Nosotros,</span> <span className="is-azul">el resto.</span></span>
            </h1>
            <p className="h-hero__lead">Lavamos, secamos y doblamos la ropa de la semana, y cuidamos las prendas que te dan dudas. Más de 10 años en el rubro.</p>
            <div className="h-hero__actions">
              <WhatsAppLink className="btn btn--azul btn--xl" message="Hola Aquabon, quiero consultar por el lavado de mi ropa." event="whatsapp_home_hero" data-primary-cta=""><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
              <a className="btn btn--outline-light btn--xl" href="#pendiente">¿Qué tenés para lavar?</a>
            </div>
            <dl className="h-hero__facts">
              <div><dt>Dirección</dt><dd>{business.street}</dd></div>
              {hours.map(h => <div key={h.label}><dt>{h.short}</dt><dd>{h.text}</dd></div>)}
            </dl>
          </div>
          <div className="porthole" aria-hidden="true">
            <div className="porthole__ring" />
            <div className="porthole__glass">
              <div className="porthole__drum">
                <Img src="/laundry-hero-v2.webp" alt="" width={1400} height={933} sizes="(max-width: 960px) 80vw, 560px" priority />
                <Img src="/service-still-v2.webp" alt="" width={1024} height={1536} sizes="(max-width: 960px) 80vw, 560px" loading="eager" />
                <Img src="/laundry-detail-v2.webp" alt="" width={1122} height={1402} sizes="(max-width: 960px) 80vw, 560px" loading="eager" />
              </div>
              <span className="porthole__bubbles"><i /><i /><i /><i /><i /><i /></span>
              <span className="porthole__shine" />
            </div>
            <div className="porthole__chat"><WhatsAppIcon /><span><b>Aquabon</b>Tu ropa ya está lista para retirar.</span></div>
            <div className="porthole__badge"><b>+10</b><span>años en Mar del Plata</span></div>
          </div>
        </div>
        <Waves className="waves--hero" />
      </section>

      {/* 2. Cinta */}
      <div className="ribbon" aria-hidden="true">
        <div className="ribbon__track">
          {[0, 1].map(k => <span key={k}>{words.map(w => <span key={w + k}>{w}<svg viewBox="0 0 38 12"><path d="M1 6c4.5-4 8.5-4 12.5 0s8.5 4 12.5 0 8.5-4 11 0" /></svg></span>)}</span>)}
        </div>
      </div>

      {/* 3. Selector */}
      <section className="h-pick" id="pendiente" aria-labelledby="pick-titulo">
        <div className="wrap">
          <div className="h-head" data-reveal>
            <h2 id="pick-titulo">¿Qué tenés pendiente?</h2>
            <p>Tocá lo que querés lavar. Te armamos el mensaje y te decimos cómo sigue.</p>
          </div>
          <div className="h-pick__grid">
            <fieldset className="tiles" data-reveal>
              <legend className="sr-only">Elegí la prenda</legend>
              {options.map(o => <span key={o.id} className="tile">
                <input type="radio" name="pendiente" id={"p-" + o.id} value={o.id} aria-controls="tickets" />
                <label htmlFor={"p-" + o.id}>
                  <Img src={o.image} alt="" width={480} height={360} sizes="(max-width: 640px) 45vw, 220px" />
                  <span>{o.label}</span>
                </label>
              </span>)}
            </fieldset>
            <div className="tickets h-pick__ticket" id="tickets" data-reveal>
              <Ticket data={{ ...general, stub }} dataFor="general" primary />
              {options.map(o => <Ticket key={o.id} data={{ ...o.ticket, stub }} dataFor={o.id} primary />)}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Servicios */}
      <section className="h-svc" id="servicios" aria-labelledby="svc-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="svc-titulo">Lo que hacemos</h2>
            <p>Cada prenda pasa por el mostrador antes de lavarse: miramos etiqueta, tejido y estado, y recién ahí elegimos el proceso.</p>
          </div>
          <div className="bento">
            {featured.map((s, i) => <Link key={s.href} href={s.href} className={"bento__card" + (i === 0 ? " bento__card--big" : "")} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <Img src={s.image} alt={s.alt} width={1200} height={900} sizes={i === 0 ? "(max-width: 960px) 100vw, 680px" : "(max-width: 960px) 100vw, 480px"} />
              <span className="bento__body">
                {s.symbol ? <CareSymbol name={s.symbol} /> : null}
                <strong>{s.name}</strong>
                <span>{s.short}</span>
                <em>Ver el servicio</em>
              </span>
            </Link>)}
          </div>
        </div>
        <div className="clothesline" data-reveal>
          <div className="wrap"><h3>Y también</h3></div>
          <div className="clothesline__scroller"><div className="clothesline__track">
            <svg className="clothesline__rope" viewBox="0 0 2000 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 8 Q 1000 44 2000 8" /></svg>
            <ul>
              {line.map((s, i) => <li key={s.href} style={{ ["--tilt" as string]: `${i % 2 ? 1.6 : -1.8}deg`, ["--d" as string]: `${i * 70}ms` }}>
                <span className="pin" aria-hidden="true" />
                <Link href={s.href}>
                  <Img src={s.image} alt={s.alt} width={480} height={600} sizes="240px" />
                  <strong>{s.name}</strong>
                  <span>{s.short}</span>
                </Link>
              </li>)}
            </ul>
          </div></div>
        </div>
      </section>

      {/* 5. Proceso */}
      <section className="h-proc" aria-labelledby="proc-titulo" data-steps="" data-active="0">
        <div className="wrap h-proc__grid">
          <div className="h-proc__media" aria-hidden="true">
            {steps.map((s, i) => <figure key={s.title} data-index={i}><Img src={s.image} alt="" width={1000} height={1250} sizes="(max-width: 960px) 100vw, 520px" /></figure>)}
            <div className="h-proc__dots">{steps.map((s, i) => <i key={s.title} data-index={i} />)}</div>
          </div>
          <div>
            <h2 id="proc-titulo" data-reveal>Así de simple</h2>
            <ol className="h-proc__steps">
              {steps.map((s, i) => <li key={s.title} data-step={i}>
                <span className="h-proc__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <div className="h-proc__mobile-img"><Img src={s.image} alt={s.alt} width={1000} height={1250} sizes="100vw" /></div>
              </li>)}
            </ol>
            <div className="h-proc__cta" data-reveal>
              <WhatsAppLink className="btn btn--light btn--xl" message="Hola Aquabon, quiero consultar retiro y entrega. Mi dirección es: " event="whatsapp_home_retiro"><WhatsAppIcon />Consultar retiro en mi zona</WhatsAppLink>
              <Link className="link link--light" href="/servicios/retiro-y-entrega-de-ropa">Cómo funciona el retiro</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cifras reales */}
      <section className="h-stats" aria-label="Aquabon en números">
        <div className="wrap h-stats__grid">
          <div data-reveal><b>+<span data-count="10">10</span></b><span>años en el rubro</span></div>
          <div data-reveal style={{ transitionDelay: "80ms" }}><b><span data-count="6">6</span></b><span>días a la semana abiertos, de lunes a sábado</span></div>
          <div data-reveal style={{ transitionDelay: "160ms" }}><b><span data-count="10">10</span></b><span>servicios en un mismo mostrador</span></div>
        </div>
      </section>

      {/* 7. ¿Se puede lavar en casa? */}
      <section className="h-care" aria-labelledby="casa-titulo">
        <div className="wrap h-care__grid">
          <div className="h-care__media" data-reveal>
            <Img src="/blog/leer-simbolos-etiqueta-ropa.webp" alt="Manos revisando la etiqueta de cuidado cosida a una prenda azul" width={1400} height={788} sizes="(max-width: 960px) 100vw, 640px" />
            <div className="care-tag" aria-hidden="true">
              <span>Etiqueta de cuidado</span>
              <div><CareSymbol name="wash" /><CareSymbol name="tumble" /><CareSymbol name="iron" /><CareSymbol name="dryclean" /></div>
            </div>
          </div>
          <div data-reveal>
            <h2 id="casa-titulo">¿Esto se puede lavar en casa?</h2>
            <p>Si la etiqueta no se entiende o no sabés cómo tratar una mancha, mandanos una foto de la prenda y otra de la etiqueta. Te decimos qué conviene antes de que la arriesgues.</p>
            <div className="h-actions">
              <WhatsAppLink className="btn btn--azul btn--xl" message="Hola Aquabon, tengo una duda sobre cómo lavar una prenda. Les mando una foto de la prenda y de su etiqueta." event="whatsapp_home_prenda"><WhatsAppIcon />Mandar las fotos</WhatsAppLink>
              <Link className="link" href="/blog">Ver las guías de cuidado</Link>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* 8. Empresas */}
      <section className="h-biz" aria-labelledby="empresas-titulo">
        <Img src="/blog/secar-ropa-adentro-ventilacion.webp" alt="" width={1400} height={933} sizes="100vw" />
        <div className="wrap h-biz__inner" data-reveal>
          <h2 id="empresas-titulo">Para empresas y alojamientos</h2>
          <p>Sábanas, toallas, manteles, uniformes y ropa deportiva, con volumen y frecuencia acordados antes de empezar.</p>
          <ul>{businessLinks.map(b => <li key={b.href}><Link href={b.href}>{b.name}</Link></li>)}</ul>
          <Link className="btn btn--light btn--xl" href="/empresas">Servicios para empresas</Link>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section" aria-labelledby="faq-titulo">
        <div className="wrap split">
          <div data-reveal><h2 id="faq-titulo" className="h-big">Preguntas frecuentes</h2><p className="muted" style={{ marginTop: 12 }}>¿No está tu duda? <WhatsAppLink className="link" message="Hola Aquabon, tengo una consulta." event="whatsapp_home_faq">Escribinos</WhatsAppLink>.</p></div>
          <Faq items={faqs} />
        </div>
      </section>

      <LocationBlock />

      {/* 10. Cierre */}
      <section className="h-final" aria-labelledby="final-titulo">
        <Waves className="waves--top" />
        <div className="wrap" data-reveal>
          <h2 id="final-titulo">¿Qué tenés para lavar esta semana?</h2>
          <WhatsAppLink className="btn btn--light btn--xl" message="Hola Aquabon, quiero consultar por el lavado de mi ropa." event="whatsapp_home_final"><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
