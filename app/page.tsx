import Image from "next/image";
import Link from "next/link";
import LocationBlock from "./LocationBlock";
import ReviewsSlider from "./ReviewsSlider";
import ServiceIcon from "./ServiceIcon";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import WhatsAppLink from "./WhatsAppLink";

const featuredServices = [
  {
    name: "valet" as const,
    title: "Valet de ropa",
    copy: "Lavamos, secamos y doblamos tu ropa de uso diario para que la retires lista.",
    href: "/servicios/valet-de-ropa",
  },
  {
    name: "acolchado" as const,
    title: "Acolchados",
    copy: "Lavado según tamaño, tejido y relleno, con el cuidado que cada acolchado necesita.",
    href: "/servicios/lavado-de-acolchados",
  },
  {
    name: "tintoreria" as const,
    title: "Tintorería",
    copy: "Recepción y seguimiento de prendas delicadas, formales o con cuidados especiales.",
    href: "/servicios/tintoreria",
  },
  {
    name: "zapatillas" as const,
    title: "Zapatillas",
    copy: "Limpieza adaptada a los materiales y al estado de cada par.",
    href: "/servicios/lavado-de-zapatillas",
  },
];

const secondaryServices = [
  ["Planchado", "/servicios/planchado"],
  ["Teñido de prendas", "/servicios/tenido-de-prendas"],
  ["Arreglos y costura", "/servicios/arreglos-y-costura"],
];

/* Contenido temporal: sustituir por opiniones verificadas. No generar Review ni AggregateRating schema. */
const reviews = [
  {
    stars: "★★★★★",
    name: "Mariana G.",
    text: "El acolchado quedó impecable y lo tuvieron listo cuando me habían dicho. Muy buena atención.",
  },
  {
    stars: "★★★★★",
    name: "Nicolás R.",
    text: "Llevé varias bolsas porque se me había roto el lavarropas. Me resolvieron todo y me avisaron por WhatsApp.",
  },
  {
    stars: "★★★★☆",
    name: "Carolina M.",
    text: "Muy buen servicio y buena atención. Tuve que esperar un poco más, pero la ropa quedó muy bien.",
  },
  {
    stars: "★★★★★",
    name: "Florencia P.",
    text: "Mandé una campera que no me animaba a lavar en casa y quedó perfecta.",
  },
];

export default function Home() {
  return (
    <main className="home-refresh">
      <div className="home-refresh-topbar">
        <div className="home-refresh-topbar-promo">
          <strong>Retiro y entrega a domicilio</strong>
          <span>Ahorrá el viaje: vamos por tu ropa y te la devolvemos lista.</span>
        </div>
        <WhatsAppLink
          className="home-refresh-topbar-cta"
          message="Hola Aquabon, quería consultar si tienen retiro y entrega en mi zona."
          event="whatsapp_home_topbar"
        >
          Consultar mi zona <span aria-hidden="true">↗</span>
        </WhatsAppLink>
        <span className="home-refresh-topbar-info">Gascón 2189 · Lun–Vie 8:30–20 · Sáb 9–14</span>
      </div>

      <SiteHeader event="whatsapp_home_header" />

      <section className="home-refresh-hero">
        <div className="home-refresh-hero-copy">
          <p className="home-refresh-kicker">Lavandería y tintorería en Mar del Plata</p>
          <h1>
            Tu ropa lista.
            <span>Sin perder tu tiempo.</span>
          </h1>
          <p className="home-refresh-lead">
            Valet, acolchados, tintorería y servicios para prendas especiales. Traela a nuestro local o consultá por retiro y entrega.
          </p>

          <div className="home-refresh-actions">
            <WhatsAppLink
              className="home-refresh-primary"
              message="Hola Aquabon, quería consultar por un servicio."
              event="whatsapp_home_hero"
            >
              Consultar por WhatsApp <span aria-hidden="true">↗</span>
            </WhatsAppLink>
            <Link className="home-refresh-secondary" href="#servicios">
              Ver servicios
            </Link>
          </div>

          <ul className="home-refresh-facts" aria-label="Información principal">
            <li>
              <strong>Centro</strong>
              <span>Gascón 2189</span>
            </li>
            <li>
              <strong>Atención</strong>
              <span>Lunes a sábado</span>
            </li>
            <li>
              <strong>Comodidad</strong>
              <span>Retiro y entrega según zona</span>
            </li>
          </ul>
        </div>

        <figure className="home-refresh-hero-media">
          <Image
            src="/laundry-hero-v2.webp"
            alt="Servicio de lavandería Aquabon en Mar del Plata"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <figcaption>
            <span>¿Querés ahorrar el viaje?</span>
            <strong>Consultá retiro y entrega.</strong>
            <WhatsAppLink
              message="Hola Aquabon, quería consultar si tienen retiro y entrega en mi zona."
              event="whatsapp_home_delivery_hero"
            >
              Ver disponibilidad <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </figcaption>
        </figure>
      </section>

      <div className="home-refresh-service-line" aria-label="Servicios destacados">
        <span>Valet</span>
        <span>Acolchados</span>
        <span>Tintorería</span>
        <span>Zapatillas</span>
      </div>

      <section className="home-refresh-services" id="servicios">
        <div className="home-refresh-section-head">
          <div>
            <p className="home-refresh-kicker">Servicios</p>
            <h2>Lo que necesitás, sin vueltas.</h2>
          </div>
          <p>
            Elegí el servicio que más se parece a lo que necesitás. Si no estás seguro, escribinos y te orientamos.
          </p>
        </div>

        <div className="home-refresh-service-grid">
          {featuredServices.map((service) => (
            <Link href={service.href} key={service.href} className="home-refresh-service-card">
              <div className="home-refresh-service-icon">
                <ServiceIcon name={service.name} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="home-refresh-card-link">Ver servicio ↗</span>
            </Link>
          ))}
        </div>

        <div className="home-refresh-secondary-services">
          <div className="home-refresh-secondary-heading">
            <p className="home-refresh-kicker">Más servicios</p>
            <h3>También podemos ayudarte con estas prendas.</h3>
          </div>
          <div className="home-refresh-secondary-grid">
            {secondaryServices.map(([label, href], index) => (
              <Link href={href} key={href} className="home-refresh-secondary-card">
                <span>{String(index + 5).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-refresh-how">
        <div className="home-refresh-how-intro">
          <p className="home-refresh-kicker">Así de simple</p>
          <h2>Tres pasos y te olvidás de la ropa.</h2>
          <p>Sin formularios ni procesos complicados. Todo lo coordinamos con vos por WhatsApp.</p>
        </div>

        <ol className="home-refresh-steps">
          <li>
            <span className="home-refresh-step-number">01</span>
            <div className="home-refresh-step-mark" aria-hidden="true">···</div>
            <div>
              <strong>Mandanos un mensaje</strong>
              <p>Decinos qué necesitás lavar y, si querés retiro, pasanos tu zona.</p>
            </div>
          </li>
          <li>
            <span className="home-refresh-step-number">02</span>
            <div className="home-refresh-step-mark" aria-hidden="true">↔</div>
            <div>
              <strong>Coordinamos con vos</strong>
              <p>Te confirmamos el servicio, disponibilidad y cómo hacemos el retiro o la entrega.</p>
            </div>
          </li>
          <li>
            <span className="home-refresh-step-number">03</span>
            <div className="home-refresh-step-mark" aria-hidden="true">✓</div>
            <div>
              <strong>Te avisamos cuando está listo</strong>
              <p>Recibís el aviso por WhatsApp y coordinamos la devolución o el retiro en el local.</p>
            </div>
          </li>
        </ol>

        <WhatsAppLink
          className="home-refresh-how-cta"
          message="Hola Aquabon, quería consultar por un servicio."
          event="whatsapp_home_process"
        >
          Consultar ahora <span aria-hidden="true">↗</span>
        </WhatsAppLink>
      </section>

      <section className="home-refresh-delivery">
        <div className="home-refresh-delivery-copy">
          <span className="home-refresh-delivery-badge">Servicio destacado</span>
          <p className="home-refresh-kicker">Retiro y entrega a domicilio</p>
          <h2>Nosotros vamos por tu ropa.</h2>
          <p className="home-refresh-delivery-lead">
            No hace falta que vengas al local. Nos escribís, coordinamos el retiro y te devolvemos la ropa lista.
          </p>
          <div className="home-refresh-delivery-benefits">
            <span>Retiramos</span>
            <span>Lavamos</span>
            <span>Te avisamos</span>
            <span>Entregamos</span>
          </div>
          <WhatsAppLink
            className="home-refresh-primary home-refresh-primary-light home-refresh-delivery-cta"
            message="Hola Aquabon, quería consultar si tienen retiro y entrega en mi zona."
            event="whatsapp_retiro_entrega"
          >
            Quiero retiro y entrega <span aria-hidden="true">↗</span>
          </WhatsAppLink>
          <small>Consultanos disponibilidad según tu zona.</small>
        </div>

        <figure className="home-refresh-delivery-media">
          <Image
            src="/laundry-detail-v2.webp"
            alt="Ropa limpia y doblada preparada para entrega por Aquabon"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <figcaption>
            <span>Ideal para</span>
            <strong>Valet · Acolchados · Bolsas con varias prendas</strong>
          </figcaption>
        </figure>
      </section>

      <section className="home-refresh-reviews">
        <div className="home-refresh-reviews-copy">
          <p className="home-refresh-kicker">Experiencias</p>
          <h2>Que vuelvas es la mejor señal.</h2>
          <p>Atención directa, seguimiento simple y cuidado de las prendas.</p>
        </div>
        <ReviewsSlider reviews={reviews} />
      </section>

      <LocationBlock />

      <section className="home-refresh-final">
        <div>
          <p className="home-refresh-kicker">¿Tenés ropa pendiente?</p>
          <h2>Mandanos un mensaje y lo resolvemos.</h2>
        </div>
        <WhatsAppLink
          className="home-refresh-primary home-refresh-primary-light"
          message="Hola Aquabon, quería consultar por un servicio."
          event="whatsapp_home_final"
        >
          Escribir por WhatsApp <span aria-hidden="true">↗</span>
        </WhatsAppLink>
      </section>

      <SiteFooter />

      <WhatsAppLink
        className="whatsapp-float whatsapp-float-cta home-refresh-floating-cta"
        message="Hola Aquabon, quería consultar por un servicio."
        event="whatsapp_home_float"
      >
        Consultar por WhatsApp <span aria-hidden="true">↗</span>
      </WhatsAppLink>
    </main>
  );
}
