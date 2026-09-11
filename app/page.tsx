import MotionEffects from "./MotionEffects";
import LocationBlock from "./LocationBlock";
import SiteFooter from "./SiteFooter";

const whatsappMessage = encodeURIComponent(
  "Hola Aquabon, quisiera consultar por un servicio de lavandería."
);
const whatsappUrl = "https://wa.me/5492235607738?text=" + whatsappMessage;
const mapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina";

const services = [
  { number: "01", title: "Valet de ropa", copy: "Lavamos, secamos y doblamos tu ropa de todos los días. Vos solo pasás a buscarla.", detail: "LAVADO · SECADO · DOBLADO", href: "/servicios/valet-de-ropa", external: false },
  { number: "02", title: "Acolchados", copy: "Lavado y secado cuidado según el tamaño, el tejido y el relleno.", detail: "1 PLAZA · 2 PLAZAS · PLUMA", href: "/servicios/acolchados", external: false },
  { number: "03", title: "Tintorería", copy: "Recibimos tus prendas especiales y coordinamos su tratamiento especializado.", detail: "RECEPCIÓN EN LOCAL", href: "/servicios/tintoreria", external: false },
  { number: "04", title: "Otros cuidados", copy: "Camperas, zapatillas, planchado y arreglos. Consultanos según la prenda.", detail: "ATENCIÓN PERSONALIZADA", href: whatsappUrl, external: true },
];

const faqs = [
  { question: "¿Dónde está Aquabon?", answer: "Estamos en Gascón 2189, Mar del Plata. Podés venir al local o escribirnos antes por WhatsApp." },
  { question: "¿Qué incluye el valet de ropa?", answer: "Incluye lavado, secado y doblado de ropa cotidiana. Si necesitás planchado u otro cuidado, consultanos al recibir las prendas." },
  { question: "¿Me avisan cuando el pedido está listo?", answer: "Sí. Te avisamos por WhatsApp cuando tus prendas están listas para retirar." },
  { question: "¿Tienen retiro y entrega a domicilio?", answer: "Consultanos por zonas, disponibilidad y condiciones del retiro o la entrega a domicilio." },
];

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="conversion-strip" aria-label="Información rápida">
        <span><strong>Gascón 2189</strong> · Mar del Plata</span>
        <span>Lun–Vie 8:30–20:00</span>
        <span>Sáb 9:00–14:00</span>
      </div>

      <header className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Aquabon, ir al inicio">
          <span className="brand-main">AQUABON</span><span className="brand-sub">LAVANDERÍA</span>
        </a>
        <nav aria-label="Navegación principal">
          <details className="services-menu">
            <summary>Servicios <span aria-hidden="true">⌄</span></summary>
            <div className="services-dropdown">
              <a href="#servicios">Todos los servicios</a>
              <a href="/servicios/valet-de-ropa">Valet de ropa</a>
              <a href="/servicios/acolchados">Acolchados</a>
              <a href="/servicios/tintoreria">Tintorería</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Otros cuidados ↗</a>
            </div>
          </details>
          <a href="/nosotros">Nosotros</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú de navegación"><span /><span /></summary>
          <div>
            <details className="mobile-services">
              <summary>Servicios <span aria-hidden="true">＋</span></summary>
              <div>
                <a href="#servicios">Todos los servicios</a>
                <a href="/servicios/valet-de-ropa">Valet de ropa</a>
                <a href="/servicios/acolchados">Acolchados</a>
                <a href="/servicios/tintoreria">Tintorería</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Otros cuidados ↗</a>
              </div>
            </details>
            <a href="/nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">GASCÓN 2189 · MAR DEL PLATA</p>
            <h1>Lavandería<span>en Mar del Plata</span></h1>
            <p className="hero-intro">Lavamos, secamos y doblamos tu ropa para que vuelva limpia, cuidada y lista para guardar. También recibimos acolchados y prendas especiales.</p>
            <div className="hero-meta">
              <p className="hero-note">Servicio atendido · Te avisamos por WhatsApp</p>
              <div className="hero-availability" aria-label="Información de atención"><span>Atención personalizada</span><span>Retiro y entrega: consultar zonas</span></div>
            </div>
            <div className="hero-actions">
              <a className="action-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
              <a className="action-button secondary" href="#servicios">Ver servicios <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustración de una lavadora">
            <div className="hero-art" aria-hidden="true">
              <span className="orbit orbit-one" /><span className="orbit orbit-two" />
              <div className="washer"><span className="washer-dot" /><span className="washer-line" /><div className="washer-door"><div className="water"><span /><span /><span /></div></div></div>
            </div>
            <p className="hero-visual-caption"><span>LAVAR</span><span>SECAR</span><span>DOBLAR</span><span>REPETIR</span></p>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Por qué elegir Aquabon">
        <article><span>01</span><strong>Servicio atendido, sin autoservicio</strong></article>
        <article><span>02</span><strong>Revisión de cada prenda antes de empezar</strong></article>
        <article><span>03</span><strong>Aviso por WhatsApp cuando está listo</strong></article>
      </section>

      <section className="statement" data-reveal><div className="statement-ripples" aria-hidden="true"><span /><span /><span /></div><p>NO ES SOLO ROPA LIMPIA</p><h2>Es abrir el placard<br /><em>y sentir que todo está en orden</em></h2></section>

      <figure className="campaign-image" data-reveal><img data-parallax src="/laundry-hero-v2.webp" alt="Toallas, ropa y prendas dobladas después de un lavado profesional" /><figcaption><span>ROPA LIMPIA</span><span>CABEZA LIVIANA</span></figcaption></figure>

      <section className="services" id="servicios" data-reveal>
        <div className="section-heading"><p className="eyebrow">LO QUE HACEMOS</p><h2>Lavandería, valet y tintorería en Mar del Plata</h2><p>Elegí el servicio que necesitás o escribinos por WhatsApp y te orientamos según la prenda.</p></div>
        <div className="service-list">
          {services.map((service) => (
            <a className={"service-card" + (service.external ? " service-card-extra" : "")} href={service.href} key={service.number} target={service.external ? "_blank" : undefined} rel={service.external ? "noreferrer" : undefined}>
              <span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><span className="service-detail">{service.detail}</span><span className="service-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="process" data-reveal>
        <div className="marquee" aria-hidden="true"><span>MENOS ROPA PENDIENTE · MÁS TIEMPO PARA VOS · </span><span>MENOS ROPA PENDIENTE · MÁS TIEMPO PARA VOS · </span></div>
        <div className="process-grid"><div className="process-title"><p className="eyebrow">ASÍ DE SIMPLE</p><h2>Tres pasos,<br />cero vueltas</h2></div><ol>
          <li><strong>01</strong><span>Traés</span><p>Nos contás qué necesitás y recibimos tus prendas.</p></li>
          <li><strong>02</strong><span>Nosotros cuidamos</span><p>Elegimos el proceso indicado y revisamos cada prenda.</p></li>
          <li><strong>03</strong><span>Te llevás</span><p>Te avisamos por WhatsApp cuando todo está limpio, seco y listo.</p></li>
        </ol></div>
      </section>

      <section className="delivery-strip" data-reveal><div className="delivery-strip-inner"><div><p className="eyebrow">¿NO PODÉS ACERCARTE?</p><h2>Consultá por retiro y <em>entrega a domicilio</em></h2></div><a href={whatsappUrl} target="_blank" rel="noreferrer">Consultar zonas y disponibilidad ↗</a></div></section>

      <section className="about" id="nosotros" data-reveal>
        <div className="photo-frame" data-parallax><img src="/laundry-detail-v2.webp" alt="Ropa, toallas y prendas dobladas después de un lavado profesional" /><span>ROPA LIMPIA</span></div>
        <div className="about-copy"><p className="eyebrow">AQUABON, MAR DEL PLATA</p><h2>Del barrio,<br /><em>hecha para el barrio</em></h2><p>Nacimos con una idea sencilla: hacerte la vida un poco más liviana. Somos una lavandería cercana, cuidada y sin complicaciones. De esas donde sabés quién recibe tu ropa y cómo vuelve a tus manos.</p><p className="promise">CUIDAMOS TU ROPA COMO CUIDARÍAMOS LA NUESTRA</p><a className="about-link" href="/nosotros">CONOCÉ NUESTRA HISTORIA <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="trust-section" data-reveal><div className="trust-heading"><p className="eyebrow">CONFIANZA ANTES QUE PROMESAS</p><h2>Se construye<em>prenda a prenda</em></h2><p>Mostramos cómo trabajamos y te orientamos antes de empezar. Cuando tengas tu experiencia, también podés recomendarnos en Google.</p></div><div className="trust-grid">
        <article><span>01</span><h3>Te atendemos de verdad</h3><p>Escuchamos qué necesitás y te orientamos antes de empezar.</p></article><article><span>02</span><h3>Revisamos cada prenda</h3><p>Elegimos el proceso adecuado y te avisamos si necesita otro cuidado.</p></article><article><span>03</span><h3>Sabés cuándo volver</h3><p>Te confirmamos cuando todo está listo para retirar, sin vueltas.</p></article>
      </div></section>

      <section className="home-faq" aria-labelledby="faq-title" data-reveal><div className="home-faq-inner"><div><p className="eyebrow">ANTES DE VENIR</p><h2 id="faq-title">Lo que suele <em>preguntarse</em></h2></div><div className="home-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">＋</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <LocationBlock />

      <section className="contact" id="contacto" data-reveal>
        <div className="contact-top"><p className="eyebrow">¿TENÉS ROPA PENDIENTE?</p><h2>Que deje de<br />ser pendiente</h2></div>
        <div className="contact-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer">CONSULTAR POR WHATSAPP <span>↗</span></a><a href={mapsUrl} target="_blank" rel="noreferrer">CÓMO LLEGAR <span>↗</span></a></div>
        <div className="contact-details"><div><span>DÓNDE</span><strong>Gascón 2189<br />Mar del Plata</strong></div><div><span>HORARIO</span><strong>Lun–Vie 8:30–20:00<br />Sáb 9:00–14:00</strong></div><div><span>WHATSAPP</span><strong><a href={whatsappUrl} target="_blank" rel="noreferrer">+54 9 223 560-7738</a></strong></div><div><span>SERVICIOS</span><strong>Valet · Acolchados<br />Tintorería · Planchado</strong></div></div>
        <SiteFooter />
      </section>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">WhatsApp <span aria-hidden="true">↗</span></a>
      <div className="mobile-action-bar" aria-label="Acciones rápidas"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="#servicios">Ver servicios ↓</a></div>
    </main>
  );
}
