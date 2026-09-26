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
        <span>Gascón 2189 · Mar del Plata</span>
        <span>Lun–Vie 8:30–20 · Sáb 9–14</span>
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

        <div className="home-refresh-more-services">
          <span>También hacemos:</span>
          {secondaryServices.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-refresh-how">
        <div className="home-refresh-section-head home-refresh-section-head-light">
          <div>
            <p className="home-refresh-kicker">Fácil de resolver</p>
            <h2>Nos escribís. Coordinamos. Listo.</h2>
          </div>
          <p>Queremos que contratar el servicio sea tan simple como mandar un mensaje.</p>
        </div>

        <ol className="home-refresh-steps">
          <li>
            <span>01</span>
            <div>
              <strong>Contanos qué necesitás</strong>
              <p>Prendas, acolchado, zapatillas o cualquier consulta específica.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Te orientamos</strong>
              <p>Confirmamos servicio, disponibilidad y retiro o entrega si corresponde.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Te avisamos cuando está listo</strong>
              <p>Seguimiento simple por WhatsApp para que no tengas que estar pendiente.</p>
            </div>
          </li>
        </ol>

        <WhatsAppLink
          className="home-refresh-how-cta"
          message="Hola Aquabon, quería consultar por un servicio."
          event="whatsapp_home_process"
        >
          Hacer una consulta <span aria-hidden="true">↗</span>
        </WhatsAppLink>
      </section>

      <section className="home-refresh-delivery">
        <div className="home-refresh-delivery-copy">
          <p className="home-refresh-kicker">Retiro y entrega</p>
          <h2>Tu ropa puede venir hasta nosotros sin que salgas de casa.</h2>
          <p>
            Consultanos por WhatsApp con tu ubicación y qué necesitás lavar. Te confirmamos disponibilidad y coordinamos.
          </p>
          <WhatsAppLink
            className="home-refresh-primary home-refresh-primary-light"
            message="Hola Aquabon, quería consultar si tienen retiro y entrega en mi zona."
            event="whatsapp_retiro_entrega"
          >
            Consultar mi zona <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </div>
        <div className="home-refresh-delivery-note">
          <span>Ideal para</span>
          <strong>Valet · Acolchados · Volumen de ropa</strong>
          <p>La disponibilidad depende de la zona y del momento del día.</p>
        </div>
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
