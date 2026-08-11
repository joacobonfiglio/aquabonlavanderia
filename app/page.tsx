import MotionEffects from "./MotionEffects";
import LocationBlock from "./LocationBlock";

const services = [
  {
    number: "01",
    title: "Valet de ropa",
    copy: "Lavamos, secamos y doblamos tu ropa de todos los días. Vos solo pasás a buscarla.",
    detail: "LISTA PARA GUARDAR",
    href: "/servicios/valet-de-ropa",
  },
  {
    number: "02",
    title: "Acolchados",
    copy: "El volumen, el cuidado y el secado que tus acolchados necesitan.",
    detail: "GRANDES TAMBIÉN",
    href: "/servicios/acolchados",
  },
  {
    number: "03",
    title: "Tintorería",
    copy: "Recibimos tus prendas de tintorería y nos ocupamos de que lleguen a manos expertas.",
    detail: "RECEPCIÓN EN LOCAL",
    href: "/servicios/tintoreria",
  },
];

const reviewSamples = [
  {
    service: "VALET DE ROPA",
    quote:
      "Dejé la bolsa camino al trabajo y volvió limpia, seca y doblada. Justo la tranquilidad que buscaba.",
  },
  {
    service: "ACOLCHADOS",
    quote:
      "Me explicaron qué cuidado necesitaba el acolchado y me avisaron apenas estuvo listo para retirar.",
  },
  {
    service: "ATENCIÓN EN EL LOCAL",
    quote:
      "Todo fue simple y claro desde que entré. Se nota el cuidado en la atención y en cada prenda.",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hola Aquabon, quisiera consultar por un servicio de lavandería."
);
const mapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina";

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <header className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Aquabon, ir al inicio">
          <span className="brand-main">AQUABON</span>
          <span className="brand-sub">LAVANDERÍA</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="/nosotros">Nosotros</a>
          <a className="nav-cta" href="#contacto">
            Vení a vernos <span aria-hidden="true">↘</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-bubbles" aria-hidden="true">
          <span className="bubble bubble-one" />
          <span className="bubble bubble-two" />
          <span className="bubble bubble-three" />
          <span className="bubble bubble-four" />
          <span className="bubble bubble-five" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            GASCÓN 2189 · MAR DEL PLATA
          </p>
          <h1>
            Tu ropa
            <span>vuelve a vos</span>
          </h1>
          <p className="hero-intro">
            Más limpia. Más cuidada. Lista para seguirte el ritmo.
            <br />
            En el corazón del barrio.
          </p>
          <a className="round-button" href="#servicios">
            <span>CONOCÉ</span>
            <span>NUESTROS</span>
            <span>SERVICIOS ↓</span>
          </a>
        </div>

        <div className="hero-art" aria-label="Ilustración abstracta de una lavadora">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <div className="washer">
            <span className="washer-dot" />
            <span className="washer-line" />
            <div className="washer-door">
              <div className="water">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <p className="art-note">LAVAR · SECAR · DOBLAR · REPETIR</p>
        </div>

        <div className="wave wave-light" />
        <div className="wave wave-mid" />
        <div className="wave wave-deep" />
      </section>

      <section className="statement" data-reveal>
        <div className="statement-ripples" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>NO ES SOLO ROPA LIMPIA</p>
        <h2>
          Es abrir el placard
          <br />
          <em>y sentir que todo está en orden</em>
        </h2>
      </section>

      <figure className="campaign-image" data-reveal>
        <img
          data-parallax
          src="/service-still.png"
          alt="Composición editorial de ropa limpia y doblada en tonos Aquabon"
        />
        <figcaption>
          <span>ROPA LIMPIA</span>
          <span>CABEZA LIVIANA</span>
        </figcaption>
      </figure>

      <section className="services" id="servicios" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">LO QUE HACEMOS</p>
          <h2>Cuidamos lo tuyo</h2>
          <p>
            Cada prenda tiene su historia.
            <br />
            Y también su manera de ser cuidada.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <a className="service-card" href={service.href} key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="service-detail">{service.detail}</span>
              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="process" data-reveal>
        <div className="marquee" aria-hidden="true">
          <span>MENOS ROPA PENDIENTE · MÁS TIEMPO PARA VOS · </span>
          <span>MENOS ROPA PENDIENTE · MÁS TIEMPO PARA VOS · </span>
        </div>
        <div className="process-grid">
          <div className="process-title">
            <p className="eyebrow">ASÍ DE SIMPLE</p>
            <h2>Tres pasos,<br />cero vueltas</h2>
          </div>
          <ol>
            <li>
              <strong>01</strong>
              <span>Traés</span>
              <p>Nos contás qué necesitás y recibimos tus prendas.</p>
            </li>
            <li>
              <strong>02</strong>
              <span>Nosotros cuidamos</span>
              <p>Elegimos el proceso indicado y hacemos nuestra magia.</p>
            </li>
            <li>
              <strong>03</strong>
              <span>Te llevás</span>
              <p>Todo limpio, seco, doblado y listo para volver a casa.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="about" id="nosotros" data-reveal>
        <div className="photo-frame" data-parallax>
          <img
            src="/aquabon-fachada.png"
            alt="Fachada azul de Lavandería Aquabon"
          />
          <span>GASCÓN 2189</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">AQUABON, MAR DEL PLATA</p>
          <h2>Del barrio,<br /><em>hecha para el barrio</em></h2>
          <p>
            Nacimos con una idea sencilla: hacerte la vida un poco más liviana.
            Somos una lavandería cercana, cuidada y sin complicaciones. De esas
            donde sabés quién recibe tu ropa y cómo vuelve a tus manos.
          </p>
          <p className="promise">CUIDAMOS TU ROPA COMO CUIDARÍAMOS LA NUESTRA</p>
          <a className="about-link" href="/nosotros">
            CONOCÉ NUESTRA HISTORIA <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="trust-section" data-reveal>
        <div className="trust-heading">
          <p className="eyebrow">CONFIANZA ANTES QUE PROMESAS</p>
          <h2>
            Se construye
            <em>prenda a prenda</em>
          </h2>
          <p>
            Hasta que podamos compartir opiniones reales de nuestros clientes,
            preferimos mostrarte cómo trabajamos.
          </p>
        </div>
        <div className="trust-grid">
          <article>
            <span>01</span>
            <h3>Te atendemos de verdad</h3>
            <p>
              Escuchamos qué necesitás y te orientamos antes de empezar.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Revisamos cada prenda</h3>
            <p>
              Elegimos el proceso adecuado y te avisamos si necesita otro
              cuidado.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Sabés cuándo volver</h3>
            <p>
              Te confirmamos cuando todo está listo para retirar, sin vueltas.
            </p>
          </article>
        </div>
      </section>

      <section className="reviews-section" id="resenas" data-reveal>
        <div className="reviews-heading">
          <p className="eyebrow">RESEÑAS</p>
          <h2>
            Voces del barrio,
            <em>muy pronto acá</em>
          </h2>
          <p>
            Este espacio está preparado para incorporar opiniones reales. Por
            ahora, los textos están identificados como ejemplos para mostrar
            cómo se verá.
          </p>
        </div>
        <div className="reviews-grid">
          {reviewSamples.map((review, index) => (
            <article key={review.service}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>TEXTO DE MUESTRA</strong>
              </div>
              <blockquote>“{review.quote}”</blockquote>
              <p>{review.service}</p>
            </article>
          ))}
        </div>
      </section>

      <LocationBlock />

      <section className="contact" id="contacto" data-reveal>
        <div className="contact-top">
          <p className="eyebrow">¿TENÉS ROPA PENDIENTE?</p>
          <h2>
            Que deje de
            <br />
            ser pendiente
          </h2>
        </div>
        <div className="contact-actions">
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            CONSULTAR POR WHATSAPP <span>↗</span>
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            CÓMO LLEGAR <span>↗</span>
          </a>
        </div>
        <div className="contact-details">
          <div>
            <span>DÓNDE</span>
            <strong>Gascón 2189<br />Mar del Plata</strong>
          </div>
          <div>
            <span>HORARIO</span>
            <strong>8:00–13:30<br />16:00–20:30</strong>
          </div>
          <div>
            <span>SERVICIOS</span>
            <strong>Valet · Acolchados<br />Tintorería</strong>
          </div>
        </div>
        <footer>
          <span>AQUABON</span>
          <p>Lavandería · Mar del Plata</p>
          <p>Ropa limpia · Cabeza liviana</p>
        </footer>
      </section>
    </main>
  );
}
