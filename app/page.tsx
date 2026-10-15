import Image from "./Img";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import LocationBlock from "./LocationBlock";
import WhatsAppLink from "./WhatsAppLink";
import Ticket, { type TicketData } from "./Ticket";
import Faq, { type FaqItem } from "./Faq";
import Reviews from "./Reviews";
import { CareSymbol, WhatsAppIcon } from "./ui";
import { business, businessLinks, hours, hoursSentence, type CareSymbolName } from "./site";

type Option = { id: string; label: string; symbol?: CareSymbolName; ticket: TicketData };

const options: Option[] = [
  { id: "semana", label: "Ropa de la semana", symbol: "wash", ticket: {
    rows: [{ label: "Prenda", value: "ropa de la semana" }, { label: "Servicio", value: "valet de ropa: lavado, secado y doblado" }, { label: "Cómo sigue", value: "traés la bolsa y te avisamos por WhatsApp cuando está lista" }],
    message: "Hola Aquabon, tengo ropa de la semana para el valet. Son más o menos __ prendas. ¿Me pasan importe y plazo?",
    event: "whatsapp_home_ticket_valet", link: { href: "/servicios/valet-de-ropa", label: "Ver cómo funciona el valet" } } },
  { id: "acolchado", label: "Acolchado", symbol: "tumble", ticket: {
    rows: [{ label: "Prenda", value: "acolchado, cubrecama o frazada" }, { label: "Servicio", value: "lavado de acolchados" }, { label: "Cómo sigue", value: "revisamos tamaño, etiqueta y relleno antes de confirmar el proceso" }],
    message: "Hola Aquabon, quiero lavar un acolchado. Es de __ plazas y el relleno es __. ¿Me pasan importe y plazo?",
    event: "whatsapp_home_ticket_acolchado", link: { href: "/servicios/lavado-de-acolchados", label: "Ver el lavado de acolchados" } } },
  { id: "campera", label: "Campera o tapado", ticket: {
    rows: [{ label: "Prenda", value: "campera o tapado" }, { label: "Servicio", value: "limpieza de camperas y tapados" }, { label: "Cómo sigue", value: "miramos etiqueta, forro y relleno; si necesita tintorería, la coordinamos" }],
    message: "Hola Aquabon, quiero consultar por la limpieza de una campera o tapado. Les mando una foto de la prenda y de la etiqueta.",
    event: "whatsapp_home_ticket_abrigo", link: { href: "/servicios/lavado-de-camperas-y-tapados", label: "Ver camperas y tapados" } } },
  { id: "zapatillas", label: "Zapatillas", ticket: {
    rows: [{ label: "Prenda", value: "un par de zapatillas" }, { label: "Servicio", value: "lavado de zapatillas" }, { label: "Cómo sigue", value: "revisamos material, uniones y desgaste antes de confirmar" }],
    message: "Hola Aquabon, quiero consultar por el lavado de unas zapatillas. Les mando una foto del par.",
    event: "whatsapp_home_ticket_zapatillas", link: { href: "/servicios/lavado-de-zapatillas", label: "Ver el lavado de zapatillas" } } },
  { id: "traje", label: "Traje o vestido", symbol: "dryclean", ticket: {
    rows: [{ label: "Prenda", value: "traje, saco o vestido" }, { label: "Servicio", value: "tintorería" }, { label: "Cómo sigue", value: "la recibimos, la registramos y seguimos el tratamiento hasta que vuelve" }],
    message: "Hola Aquabon, tengo una prenda para tintorería (traje, saco o vestido). Les mando una foto de la prenda y de la etiqueta.",
    event: "whatsapp_home_ticket_tintoreria", link: { href: "/servicios/tintoreria", label: "Ver tintorería" } } },
  { id: "camisas", label: "Camisas", symbol: "iron", ticket: {
    rows: [{ label: "Prenda", value: "camisas" }, { label: "Servicio", value: "lavado y planchado de camisas" }, { label: "Cómo sigue", value: "revisamos cuello, puños y etiqueta, y confirmamos el pedido" }],
    message: "Hola Aquabon, quiero lavar y planchar camisas. Son __. ¿Me pasan importe y plazo?",
    event: "whatsapp_home_ticket_camisas", link: { href: "/servicios/lavado-y-planchado-de-camisas", label: "Ver lavado y planchado de camisas" } } },
  { id: "arreglo", label: "Un arreglo", ticket: {
    rows: [{ label: "Prenda", value: "una prenda para arreglar" }, { label: "Servicio", value: "arreglos y costura" }, { label: "Cómo sigue", value: "traela al local: medidas y alcance se confirman en persona" }],
    message: "Hola Aquabon, quiero consultar por un arreglo de costura. Necesito __.",
    event: "whatsapp_home_ticket_arreglo", link: { href: "/servicios/arreglos-y-costura", label: "Ver arreglos y costura" } } },
];

const general: TicketData = {
  rows: [{ label: "Prenda", value: "lo que tengas pendiente" }, { label: "Servicio", value: "te ayudamos a elegirlo" }, { label: "Cómo sigue", value: "contanos qué es o mandanos una foto de la prenda y su etiqueta" }],
  message: "Hola Aquabon, quería consultar qué servicio necesita mi ropa.",
  event: "whatsapp_home_ticket_general",
};
const stub = "Precio y plazo te los confirmamos antes de que dejes la prenda.";

const secondary = [
  ["Camperas y tapados", "Cada abrigo, por fuera y por dentro", "/servicios/lavado-de-camperas-y-tapados"],
  ["Planchado", "Prendas listas para usar", "/servicios/planchado"],
  ["Lavado y planchado de camisas", "Un solo pedido", "/servicios/lavado-y-planchado-de-camisas"],
  ["Lavado de zapatillas", "Según el material", "/servicios/lavado-de-zapatillas"],
  ["Teñido de prendas", "Si la tela lo permite", "/servicios/tenido-de-prendas"],
  ["Arreglos y costura", "Ajustes y reparaciones", "/servicios/arreglos-y-costura"],
];

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

export default function Home() {
  return <>
    <SiteHeader event="whatsapp_home_header" />
    <main id="contenido">
      <section className="hero" aria-labelledby="hero-titulo">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1 id="hero-titulo">Lavandería y tintorería en Mar del Plata</h1>
            <p className="hero__lead">Lavamos, secamos y doblamos la ropa de la semana, y cuidamos las prendas que te dan dudas. Más de 10 años en el rubro, en Gascón 2189.</p>
            <fieldset className="picker">
              <legend>¿Qué tenés pendiente?</legend>
              <div className="picker__opts">
                {options.map(o => <span key={o.id}>
                  <input type="radio" name="pendiente" id={"p-" + o.id} value={o.id} aria-controls="tickets" />
                  <label htmlFor={"p-" + o.id}>{o.symbol ? <CareSymbol name={o.symbol} /> : null}{o.label}</label>
                </span>)}
              </div>
            </fieldset>
          </div>
          <div className="hero__ticket tickets" id="tickets">
            <Ticket data={{ ...general, stub }} heading="Tu consulta" dataFor="general" primary />
            {options.map(o => <Ticket key={o.id} data={{ ...o.ticket, stub }} heading="Tu consulta" dataFor={o.id} primary />)}
          </div>
          <dl className="facts hero__facts">
            <div><dt>Dirección</dt><dd>{business.street}, {business.city}</dd></div>
            {hours.map(h => <div key={h.label}><dt>{h.short}</dt><dd>{h.text}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="servicios-titulo" id="servicios">
        <div className="wrap">
          <div className="section-head"><h2 id="servicios-titulo">Qué lavamos y cómo lo cuidamos</h2><p>Cada prenda pasa por el mostrador antes de lavarse: miramos la etiqueta, el tejido y el estado, y recién ahí elegimos el proceso.</p></div>
          <div className="svc">
            <article className="svc-feature">
              <Image src="/service-still-v2.webp" width={1024} height={1536} sizes="(max-width: 960px) 100vw, 360px" alt="Ropa de uso diario lavada y doblada, lista para guardar" loading="lazy" />
              <div className="svc-feature__body">
                <CareSymbol name="wash" />
                <h3>Valet de ropa</h3>
                <p className="muted">La ropa de todos los días, lavada, seca y doblada. Traés la bolsa y te avisamos cuando está lista.</p>
                <ul>
                  <li>Separamos por color, tejido y cuidado antes de lavar</li>
                  <li>Lavado, secado y doblado, lista para guardar</li>
                  <li>Aviso por WhatsApp cuando podés pasar a buscarla</li>
                  <li>Planchado aparte, si lo necesitás</li>
                </ul>
                <Link className="link" href="/servicios/valet-de-ropa">Cómo funciona el valet</Link>
              </div>
            </article>
            <div className="svc-side">
              <article className="svc-item">
                <CareSymbol name="tumble" />
                <h3>Lavado de acolchados</h3>
                <p>Acolchados, cubrecamas y frazadas. Revisamos tamaño, etiqueta y relleno para elegir el lavado y el secado indicados.</p>
                <Link className="link" href="/servicios/lavado-de-acolchados">Lavado de acolchados</Link>
              </article>
              <article className="svc-item">
                <CareSymbol name="dryclean" />
                <h3>Tintorería</h3>
                <p>Sacos, trajes, vestidos y tapados. Recibimos la prenda, la registramos y seguimos el tratamiento especializado hasta que vuelve a tus manos.</p>
                <Link className="link" href="/servicios/tintoreria">Tintorería en Mar del Plata</Link>
              </article>
            </div>
          </div>
          <h3 className="counter-title">También hacemos</h3>
          <ul className="counter-list">
            {secondary.map(([name, copy, href]) => <li key={href}><Link href={href}><strong>{name}</strong><span>{copy}</span></Link></li>)}
          </ul>
        </div>
      </section>

      <section className="section section--espuma" aria-labelledby="retiro-titulo" id="retiro">
        <div className="wrap split">
          <div>
            <h2 id="retiro-titulo">Retiro y entrega</h2>
            <p className="muted measure" style={{ marginTop: 12 }}>Si no podés acercarte, consultá si llegamos a tu zona. Antes de coordinar te confirmamos cobertura, costo y horario.</p>
            <div className="actions">
              <WhatsAppLink className="btn" message="Hola Aquabon, quiero consultar retiro y entrega. Mi dirección es: " event="whatsapp_home_retiro"><WhatsAppIcon />Consultar mi zona</WhatsAppLink>
              <Link className="link" href="/servicios/retiro-y-entrega-de-ropa">Cómo funciona</Link>
            </div>
          </div>
          <ol className="talones">
            <li><div><h3>Mandanos tu dirección</h3><p>Por WhatsApp, con lo que necesitás lavar y una idea de la cantidad.</p></div></li>
            <li><div><h3>Te confirmamos los detalles</h3><p>Cobertura, costo, franja horaria, importe y plazo, antes de retirar.</p></div></li>
            <li><div><h3>Retiramos y te la devolvemos</h3><p>Te avisamos cuando está lista y coordinamos la entrega.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="casa-titulo">
        <div className="wrap split split--even">
          <div>
            <h2 id="casa-titulo">¿Esto se puede lavar en casa?</h2>
            <p className="muted measure" style={{ marginTop: 12 }}>Si la etiqueta no se entiende o no sabés cómo tratar una mancha, mandanos una foto de la prenda y otra de la etiqueta. Te decimos qué conviene antes de que la arriesgues.</p>
            <div className="actions">
              <WhatsAppLink className="btn" message="Hola Aquabon, tengo una duda sobre cómo lavar una prenda. Les mando una foto de la prenda y de su etiqueta." event="whatsapp_home_prenda"><WhatsAppIcon />Mandar las fotos</WhatsAppLink>
              <Link className="link" href="/blog/simbolos-de-lavado-de-la-ropa">Cómo leer la etiqueta</Link>
            </div>
            <p style={{ marginTop: 20 }}><Link className="link" href="/blog">Todas las guías para cuidar tu ropa</Link></p>
          </div>
          <figure className="label-card">
            <Image src="/blog/leer-simbolos-etiqueta-ropa.webp" width={1400} height={788} sizes="(max-width: 960px) 100vw, 560px" alt="Manos revisando la etiqueta de cuidado cosida a una prenda azul" loading="lazy" />
            <figcaption className="label-card__symbols">
              <div><CareSymbol name="wash" />Lavado con agua</div>
              <div><CareSymbol name="tumble" />Secadora</div>
              <div><CareSymbol name="iron" />Planchado</div>
              <div><CareSymbol name="dryclean" />Limpieza profesional</div>
            </figcaption>
          </figure>
        </div>
      </section>

      <Reviews />

      <section className="section section--marino" aria-labelledby="empresas-titulo">
        <div className="wrap biz">
          <div>
            <h2 id="empresas-titulo">Para empresas y alojamientos</h2>
            <p style={{ marginTop: 12, color: "var(--ola-claro)", maxWidth: "56ch" }}>Sábanas, toallas, manteles, uniformes y ropa deportiva, con volumen y frecuencia acordados antes de empezar.</p>
            <ul>{businessLinks.map(b => <li key={b.href}><Link href={b.href}>{b.name}</Link></li>)}</ul>
          </div>
          <div><Link className="btn btn--light" href="/empresas">Servicios para empresas</Link></div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-titulo">
        <div className="wrap split">
          <div><h2 id="faq-titulo">Preguntas frecuentes</h2><p className="muted" style={{ marginTop: 12 }}>¿No está tu duda? <WhatsAppLink className="link" message="Hola Aquabon, tengo una consulta." event="whatsapp_home_faq">Escribinos</WhatsAppLink>.</p></div>
          <Faq items={faqs} />
        </div>
      </section>

      <LocationBlock />

      <section className="section section--marino" aria-labelledby="final-titulo">
        <div className="wrap final">
          <div><h2 id="final-titulo">¿Qué tenés para lavar esta semana?</h2><p>Escribinos y te decimos qué servicio conviene, cuánto sale y cuándo está.</p></div>
          <WhatsAppLink className="btn btn--light" message="Hola Aquabon, quiero consultar por el lavado de mi ropa." event="whatsapp_home_final"><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
