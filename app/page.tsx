import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import Faq, { type FaqItem } from "./Faq";
import Reviews from "./Reviews";
import Img from "./Img";
import { CareSymbol, PinIcon, WhatsAppIcon } from "./ui";
import { Clothesline, Process, Ribbon, Waves } from "./Blocks";
import { business, businessLinks, hours, hoursSentence, pickupZones, services } from "./site";

// Cada opción abre una consulta de WhatsApp con el servicio ya elegido.
const options = [
  { id: "semana", label: "Valet de ropa", image: "/laundry-detail-v2.webp", servicio: "valet", message: "Hola Aquabon, quiero consultar precio y plazo para el valet. Tengo unas __ prendas. Mi barrio es __." },
  { id: "acolchado", label: "Acolchados", image: "/blog/revisar-cuando-lavar-acolchado.webp", servicio: "acolchados", message: "Hola Aquabon, quiero lavar un acolchado. Es de __ plazas y el relleno es __. ¿Me pasan importe y plazo?" },
  { id: "zapatillas", label: "Zapatillas", image: "/blog/revisar-zapatillas-antes-lavar.webp", servicio: "zapatillas", message: "Hola Aquabon, quiero consultar precio y plazo para lavar unas zapatillas. Les mando una foto del par." },
  { id: "traje", label: "Trajes y vestidos", image: "/blog/revisar-prendas-tintoreria.webp", servicio: "tintoreria", message: "Hola Aquabon, quiero consultar precio y plazo para una prenda de tintorería. Les mando una foto de la prenda y de la etiqueta." },
  { id: "campera", label: "Camperas y tapados", image: "/blog/revisar-tapado-etiqueta-forro.webp", servicio: "camperas_y_tapados", message: "Hola Aquabon, quiero consultar precio y plazo para limpiar una campera o un tapado. Les mando una foto de la prenda y de la etiqueta." },
  { id: "camisas", label: "Camisas", image: "/blog/preparar-camisa-antes-lavar.webp", servicio: "camisas", message: "Hola Aquabon, quiero lavar y planchar __ camisas. ¿Me pasan importe y plazo?" },
  { id: "arreglo", label: "Arreglos de ropa", image: "/services/costura-v3.webp", servicio: "arreglos", message: "Hola Aquabon, quiero consultar por un arreglo de costura. Necesito __. ¿Me pasan importe y plazo?" },
];

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
  { question: "¿Retiran y entregan a domicilio?", answer: `Sí, en once barrios: ${pickupZones.map(z => z.name).join(", ").replace(/, ([^,]*)$/, " y $1")}. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual.` },
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
            <p className="h-hero__lead">Valet, acolchados, zapatillas y tintorería. Traé tu ropa a {business.street} o consultá por retiro a domicilio. Te confirmamos importe y plazo antes de empezar.</p>
            <div className="h-hero__actions">
              <WhatsAppLink className="btn btn--azul btn--xl" message="Hola Aquabon, quiero consultar precio y plazo para lavar __. Mi barrio es __." ubicacion="hero" data-primary-cta=""><WhatsAppIcon />Consultar precio por WhatsApp</WhatsAppLink>
              <a className="btn btn--outline-light btn--xl" href="#pendiente">Elegir por prenda</a>
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

      <Ribbon words={words} />

      {/* Consulta directa por servicio: sin pasos intermedios */}
      <section className="h-pick h-quote" id="pendiente" aria-labelledby="pick-titulo">
        <div className="wrap">
          <div className="h-head">
            <h2 id="pick-titulo">¿Qué necesitás lavar?</h2>
            <p>Elegí tu prenda y consultá precio y plazo por WhatsApp. El mensaje ya queda preparado y podés editarlo antes de enviarlo.</p>
          </div>
          <ul className="h-quote__list" aria-label="Consultar por un servicio">
            {options.map(o => <li key={o.id}>
              <WhatsAppLink className="h-quote__link" message={o.message} ubicacion="home_servicio" servicio={o.servicio} data-primary-cta="">
                <Img src={o.image} alt="" width={80} height={80} sizes="64px" />
                <span><strong>{o.label}</strong><small>Consultar precio y plazo</small></span>
                <WhatsAppIcon />
              </WhatsAppLink>
            </li>)}
            <li>
              <WhatsAppLink className="h-quote__link h-quote__link--help" message="Hola Aquabon, no sé qué servicio necesita mi prenda. Les mando una foto de la prenda y de su etiqueta." ubicacion="home_ayuda">
                <span className="h-quote__symbol"><CareSymbol name="wash" /></span>
                <span><strong>¿No sabés qué elegir?</strong><small>Mandanos una foto</small></span>
                <WhatsAppIcon />
              </WhatsAppLink>
            </li>
          </ul>
          <p className="h-quote__note">Sin turno para traerla al local. ¿Querés que la busquemos? <a className="link" href="#barrios">Mirá los barrios con retiro y entrega</a>.</p>
        </div>
      </section>

      {/* Confianza antes de ampliar los servicios */}
      <section className="p-sec" aria-labelledby="porque-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="porque-titulo">Por qué Aquabon</h2><p>Te sacamos el lavado de encima, con el cuidado de alguien que conoce cada prenda.</p></div>
          <ul className="feature-grid feature-grid--tres">{pillars.map((p, i) => <li key={p.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }}><h3>{p.title}</h3><p>{p.copy}</p></li>)}</ul>
          {/* Enlace en el primer scroll al servicio con más búsqueda estacional (plan SEO 07/11/2026). */}
          <p className="note" data-reveal>Lo que más nos piden al cambiar de estación: <Link className="link" href="/servicios/lavado-de-acolchados">lavado de acolchados en Mar del Plata</Link>, con secado completo y retiro a domicilio.</p>
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

      {/* 7. Barrios donde retiramos */}
      <section className="p-sec p-sec--espuma" id="barrios" aria-labelledby="barrios-titulo">
        <div className="wrap">
          <div className="h-zones">
            <div className="h-zones__intro">
              <p className="h-zones__eyebrow">Retiro y entrega a domicilio</p>
              <h2 id="barrios-titulo">Barrios donde retiramos</h2>
              <p>Pasamos a buscar tu ropa y te la llevamos cuando está lista. Un pendiente menos, sin salir de casa.</p>
              <WhatsAppLink className="btn btn--light" message="Hola Aquabon, quiero consultar retiro y entrega. Mi dirección es __ y tengo __ para lavar." ubicacion="retiro" servicio="retiro_y_entrega"><WhatsAppIcon />Consultar mi dirección</WhatsAppLink>
              <p className="h-zones__conditions">Te confirmamos costo y disponibilidad antes de pasar.</p>
            </div>
            <div className="h-zones__directory">
              <div className="h-zones__heading">
                <p><PinIcon />Elegí tu barrio</p>
                <span>{pickupZones.length} barrios</span>
              </div>
              <ul className="h-zones__list" aria-label="Barrios con retiro y entrega">
                {[...pickupZones].sort((a, b) => a.name.localeCompare(b.name, "es")).map(z => <li key={z.slug}>
                  <Link href={"/" + z.slug}>{z.name}</Link>
                </li>)}
                <li className="h-zones__other"><WhatsAppLink message="Hola Aquabon, estoy en __ y necesito lavar __. ¿Pueden retirar en mi dirección?" ubicacion="otras_zonas" servicio="retiro_y_entrega">¿Otro barrio? Consultanos</WhatsAppLink></li>
              </ul>
              <p className="h-zones__local">¿Preferís traerla? Estamos en {business.street}. <Link className="link" href="/lavanderia-mar-del-plata">Conocé el local y cómo llegar</Link>.</p>
            </div>
          </div>
        </div>
      </section>

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
