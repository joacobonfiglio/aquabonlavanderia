import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import ChatPreview, { type ChatData } from "./ChatPreview";

type TicketData = { rows: { label: string; value: string }[]; message: string; servicio?: string; link?: { href: string; label: string } };
const toChat = (t: TicketData): ChatData => ({ service: t.rows.find(r => r.label === "Servicio")?.value, next: t.rows.find(r => r.label === "Cómo sigue")?.value, message: t.message, servicio: t.servicio, link: t.link });
import Faq, { type FaqItem } from "./Faq";
import Reviews from "./Reviews";
import Img from "./Img";
import { CareSymbol, WhatsAppIcon } from "./ui";
import { Clothesline, Process, Ribbon, Waves } from "./Blocks";
import { business, businessLinks, hours, hoursSentence, services } from "./site";

type Option = { id: string; label: string; image: string; ticket: TicketData };

const options: Option[] = [
  { id: "semana", label: "Ropa de la semana", image: "/laundry-detail-v2.webp", ticket: {
    rows: [{ label: "Prenda", value: "ropa de la semana" }, { label: "Servicio", value: "valet: lavado, secado y doblado" }, { label: "Cómo sigue", value: "la dejás en el local y te avisamos cuando está lista" }],
    message: "Hola Aquabon, tengo ropa de la semana para el valet. Son más o menos __ prendas. ¿Me pasan importe y plazo?",
    servicio: "valet", link: { href: "/servicios/valet-de-ropa", label: "Cómo funciona el valet" } } },
  { id: "acolchado", label: "Acolchado", image: "/blog/revisar-cuando-lavar-acolchado.webp", ticket: {
    rows: [{ label: "Prenda", value: "acolchado, cubrecama o frazada" }, { label: "Servicio", value: "lavado de acolchados" }, { label: "Cómo sigue", value: "revisamos tamaño, etiqueta y relleno" }],
    message: "Hola Aquabon, quiero lavar un acolchado. Es de __ plazas y el relleno es __. ¿Me pasan importe y plazo?",
    servicio: "acolchados", link: { href: "/servicios/lavado-de-acolchados", label: "Lavado de acolchados" } } },
  { id: "campera", label: "Campera o tapado", image: "/blog/revisar-tapado-etiqueta-forro.webp", ticket: {
    rows: [{ label: "Prenda", value: "campera o tapado" }, { label: "Servicio", value: "camperas y tapados" }, { label: "Cómo sigue", value: "miramos etiqueta, forro y relleno" }],
    message: "Hola Aquabon, quiero consultar por la limpieza de una campera o tapado. Les mando una foto de la prenda y de la etiqueta.",
    servicio: "camperas_y_tapados", link: { href: "/servicios/lavado-de-camperas-y-tapados", label: "Camperas y tapados" } } },
  { id: "zapatillas", label: "Zapatillas", image: "/blog/revisar-zapatillas-antes-lavar.webp", ticket: {
    rows: [{ label: "Prenda", value: "un par de zapatillas" }, { label: "Servicio", value: "lavado de zapatillas" }, { label: "Cómo sigue", value: "revisamos material, uniones y desgaste" }],
    message: "Hola Aquabon, quiero consultar por el lavado de unas zapatillas. Les mando una foto del par.",
    servicio: "zapatillas", link: { href: "/servicios/lavado-de-zapatillas", label: "Lavado de zapatillas" } } },
  { id: "traje", label: "Traje o vestido", image: "/blog/revisar-prendas-tintoreria.webp", ticket: {
    rows: [{ label: "Prenda", value: "traje, saco o vestido" }, { label: "Servicio", value: "tintorería" }, { label: "Cómo sigue", value: "la registramos y seguimos el tratamiento" }],
    message: "Hola Aquabon, tengo una prenda para tintorería (traje, saco o vestido). Les mando una foto de la prenda y de la etiqueta.",
    servicio: "tintoreria", link: { href: "/servicios/tintoreria", label: "Tintorería" } } },
  { id: "camisas", label: "Camisas", image: "/blog/preparar-camisa-antes-lavar.webp", ticket: {
    rows: [{ label: "Prenda", value: "camisas" }, { label: "Servicio", value: "lavado y planchado de camisas" }, { label: "Cómo sigue", value: "revisamos cuello, puños y etiqueta" }],
    message: "Hola Aquabon, quiero lavar y planchar camisas. Son __. ¿Me pasan importe y plazo?",
    servicio: "camisas", link: { href: "/servicios/lavado-y-planchado-de-camisas", label: "Lavado y planchado de camisas" } } },
  { id: "arreglo", label: "Un arreglo", image: "/services/costura-v3.webp", ticket: {
    rows: [{ label: "Prenda", value: "una prenda para arreglar" }, { label: "Servicio", value: "arreglos y costura" }, { label: "Cómo sigue", value: "medidas y alcance se ven en el local" }],
    message: "Hola Aquabon, quiero consultar por un arreglo de costura. Necesito __.",
    servicio: "arreglos", link: { href: "/servicios/arreglos-y-costura", label: "Arreglos y costura" } } },
];

const general: TicketData = {
  rows: [{ label: "Prenda", value: "lo que tengas pendiente" }, { label: "Servicio", value: "te ayudamos a elegirlo" }, { label: "Cómo sigue", value: "mandanos una foto de la prenda y su etiqueta" }],
  message: "Hola Aquabon, quería consultar qué servicio necesita mi ropa.",
};

const featured = services.slice(0, 3);
const line = services.filter(s => !featured.includes(s));

const steps = [
  { title: "Nos dejás la ropa", copy: "En el local de Gascón 2189 o, si llegamos a tu zona, la pasamos a buscar.", image: "/services/retiro-v3.webp", alt: "Entrega de una bolsa de ropa en la puerta de una casa" },
  { title: "Nos ocupamos de todo", copy: "Separamos por color y tejido, leemos cada etiqueta y elegimos el lavado. Si algo nos genera dudas, te escribimos antes.", image: "/blog/medir-detergente-para-lavar.webp", alt: "Detergente medido junto a un lavarropas cargado" },
  { title: "Te avisamos cuando está lista", copy: "Te llega un WhatsApp y la pasás a buscar doblada, lista para guardar. Si coordinaste retiro, te la llevamos.", image: "/laundry-hero-v2.webp", alt: "Pila de ropa lavada y doblada en tonos blancos y azules" },
];

// Por qué Aquabon: solo datos que ya figuran en la web (dirección, horario, años, forma de trabajo).
const pillars = [
  { title: "Cerca", copy: `Estamos en ${business.street}, de lunes a sábado. Nos escribís por WhatsApp y te orientamos antes de que vengas.` },
  { title: "Con oficio", copy: "Más de 10 años en el rubro. Cada prenda se revisa antes de elegir cómo lavarla." },
  { title: "Claros", copy: "Te confirmamos importe y plazo antes de que dejes la ropa. Si una prenda tiene riesgo, te lo decimos antes de mojarla." },
];

const words = ["Lavamos", "Secamos", "Doblamos", "Planchamos", "Teñimos", "Cosemos", "Cuidamos"];

const faqs: FaqItem[] = [
  { question: "¿Dónde queda Aquabon?", answer: `En ${business.street}, en el centro de Mar del Plata. Podés venir en el horario del local, sin turno, o escribirnos antes por WhatsApp.` },
  { question: "¿Qué horario tiene la lavandería?", answer: `${hoursSentence}.` },
  { question: "¿Cuánto cuesta y cuándo está listo?", answer: "Depende del servicio, la cantidad y la prenda. Escribinos con lo que tenés para lavar y te pasamos el importe y el plazo antes de que lo dejes, para que no haya sorpresas." },
  { question: "¿Retiran y entregan a domicilio?", answer: "Sí, en Centro, Güemes, Chauvin y La Perla. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual." },
  { question: "¿Y si no sé qué servicio necesita mi prenda?", answer: "No hace falta que lo sepas. Mandanos una foto de la prenda y de la etiqueta y te decimos qué le conviene. Si necesitamos verla en persona, te avisamos." },
  { question: "¿El valet incluye planchado?", answer: "No. El valet es lavado, secado y doblado de la ropa de todos los días. Si querés algo planchado, pedilo aparte y lo sumamos al pedido." },
  { question: "¿Lavan acolchados de plumas?", answer: "Sí, después de revisarlos. Miramos etiqueta, relleno y estado, y te decimos si admite lavado y cómo lo vamos a secar antes de aceptarlo." },
  { question: "¿La tintorería se hace en el local?", answer: "No toda. Vos la dejás en Aquabon y nosotros nos encargamos del resto: cuando necesita un tratamiento especializado, lo coordinamos fuera del local, hacemos el seguimiento y te avisamos cuando vuelve." },
  { question: "¿Necesito sacar turno?", answer: "No. Venís en el horario del local y te atendemos. Para prendas especiales o pedidos grandes, escribinos antes así te esperamos con todo listo." },
  { question: "¿Trabajan con empresas y alojamientos?", answer: "Sí: alquileres temporarios, hoteles, restaurantes, centros de estética, uniformes y ropa deportiva. Acordamos volumen y frecuencia antes de empezar, para que tu equipo no tenga que ocuparse del lavado." },
];

export default function Home() {
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="home">

      {/* 1. Hero con ojo de buey */}
      <section className="h-hero" aria-labelledby="hero-titulo" data-cta-zone="">
        <div className="wrap h-hero__grid">
          <div className="h-hero__copy">
            <h1 id="hero-titulo">
              <span className="h-hero__kicker">Lavandería y tintorería en Mar del Plata</span>
              <span className="h-hero__title"><span>Olvidate</span> <span>de lavar,</span> <span className="is-azul">nosotros</span> <span className="is-azul">nos ocupamos</span></span>
            </h1>
            <p className="h-hero__lead">Dejás tu ropa en {business.street}, o la pasamos a buscar si llegamos a tu zona, y te la devolvemos lavada, seca y doblada. Sin lavarropas, sin tender, sin doblar. Más de 10 años cuidando la ropa de Mar del Plata.</p>
            <div className="h-hero__actions">
              <WhatsAppLink className="btn btn--azul btn--xl" message="Hola Aquabon, quiero consultar por el lavado de mi ropa." ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
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

      {/* 2. Cinta + por qué Aquabon */}
      <Ribbon words={words} />
      <section className="p-sec" aria-labelledby="porque-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="porque-titulo">Por qué Aquabon</h2><p>Te sacamos el lavado de encima, con el cuidado de alguien que conoce cada prenda.</p></div>
          <ul className="feature-grid feature-grid--tres">{pillars.map((p, i) => <li key={p.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }}><h3>{p.title}</h3><p>{p.copy}</p></li>)}</ul>
        </div>
      </section>

      {/* 3. Selector */}
      <section className="h-pick" id="pendiente" aria-labelledby="pick-titulo">
        <div className="wrap">
          <div className="h-head" data-reveal>
            <h2 id="pick-titulo">¿Qué tenés pendiente?</h2>
            <p>Tocá lo que querés lavar y te armamos el mensaje de WhatsApp. Lo revisás y lo enviás.</p>
          </div>
          <div className="h-pick__grid">
            <fieldset className="tiles" data-reveal>
              <legend className="pick-step"><b>1</b>Elegí qué querés lavar</legend>
              {options.map(o => <span key={o.id} className="tile">
                <input type="radio" name="pendiente" id={"p-" + o.id} value={o.id} aria-controls="tickets" />
                <label htmlFor={"p-" + o.id}>
                  <Img src={o.image} alt="" width={480} height={360} sizes="(max-width: 640px) 45vw, 220px" />
                  <span>{o.label}</span>
                </label>
              </span>)}
            </fieldset>
            <div className="tickets h-pick__ticket" id="tickets" data-reveal>
              <p className="pick-step"><b>2</b>Tu mensaje, listo para enviar</p>
              <ChatPreview data={toChat(general)} dataFor="general" primary />
              {options.map(o => <ChatPreview key={o.id} data={toChat(o.ticket)} dataFor={o.id} primary />)}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Servicios */}
      <section className="h-svc" id="servicios" aria-labelledby="svc-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="svc-titulo">Lo que hacemos</h2>
            <p>Antes de lavar, miramos etiqueta, tejido y estado de cada prenda. Si hay riesgo, te lo decimos antes de mojarla, no después.</p>
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
        <Clothesline title="Y también" items={line} />
      </section>

      {/* 5. Proceso */}
      <Process title="Así de simple" lead="Tres pasos, y el lavado deja de ser tu problema." steps={steps} cta={<>
        <WhatsAppLink className="btn btn--light btn--xl" message="Hola Aquabon, quiero consultar retiro y entrega. Mi dirección es: " ubicacion="retiro" servicio="retiro_y_entrega"><WhatsAppIcon />Consultar retiro en mi zona</WhatsAppLink>
        <Link className="link link--light" href="/servicios/retiro-y-entrega-de-ropa">Cómo funciona el retiro</Link>
      </>} />

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
          <div data-reveal><h2 id="faq-titulo" className="h-big">Preguntas frecuentes</h2><p className="muted" style={{ marginTop: 12 }}>¿No está tu duda? <WhatsAppLink className="link" message="Hola Aquabon, tengo una consulta." ubicacion="faq">Escribinos</WhatsAppLink>.</p></div>
          <Faq items={[faqs[2], faqs[3], faqs[4], faqs[5]]} />
        </div>
      </section>


    </main>
    <SiteFooter />
  </>;
}
