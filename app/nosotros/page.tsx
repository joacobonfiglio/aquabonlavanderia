import type { Metadata } from "next";
import Link from "next/link";
import LocationBlock from "../LocationBlock";
import MotionEffects from "../MotionEffects";

export const metadata: Metadata = {
  title: "Nosotros | Aquabon Lavandería",
  description:
    "Conocé la misión, la visión y el propósito de Aquabon, una lavandería de barrio en Gascón 2189, Mar del Plata.",
  alternates: {
    canonical: "/nosotros",
  },
};

const whatsappMessage = encodeURIComponent(
  "Hola Aquabon, quisiera consultar por sus servicios de lavandería."
);

const principles = [
  {
    number: "01",
    label: "NUESTRA MISIÓN",
    title: "Hacerte la vida más liviana",
    copy: "Resolver el cuidado de tu ropa de una manera simple, cercana y confiable. Queremos que cada persona que entra a Aquabon se sienta bien atendida y sepa que sus prendas quedan en buenas manos.",
  },
  {
    number: "02",
    label: "NUESTRA VISIÓN",
    title: "Ser parte del barrio",
    copy: "Convertirnos en la lavandería de referencia de Mar del Plata por la confianza que construimos, la atención que damos y la tranquilidad con la que cada prenda vuelve a casa.",
  },
  {
    number: "03",
    label: "LO QUE BUSCAMOS",
    title: "Devolverte tiempo y calma",
    copy: "No queremos ofrecer solamente ropa limpia. Buscamos quitarte una tarea de encima, acompañar tu rutina y crear una relación cercana que se sostenga en cada visita.",
  },
];

export default function Nosotros() {
  return (
    <main className="about-page">
      <MotionEffects />
      <header className="nav-shell service-nav">
        <Link className="brand" href="/" aria-label="Aquabon, volver al inicio">
          <span className="brand-main">AQUABON</span>
          <span className="brand-sub">LAVANDERÍA</span>
        </Link>
        <nav aria-label="Navegación principal">
          <Link href="/#servicios">Servicios</Link>
          <a href="#ubicacion">Ubicación</a>
          <a
            className="nav-cta"
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Escribinos <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="about-page-hero">
        <div className="hero-bubbles" aria-hidden="true">
          <span className="bubble bubble-one" />
          <span className="bubble bubble-two" />
          <span className="bubble bubble-three" />
          <span className="bubble bubble-four" />
          <span className="bubble bubble-five" />
        </div>
        <div className="about-hero-copy">
          <Link className="back-link" href="/">← VOLVER AL INICIO</Link>
          <p className="eyebrow">AQUABON · MAR DEL PLATA</p>
          <h1>
            Más que lavar,
            <span>queremos cuidar</span>
          </h1>
          <p>
            Tu ropa, tu tiempo y la confianza
            <br />
            de quienes nos eligen cada día
          </p>
        </div>
        <div className="about-hero-mark" aria-hidden="true">
          <span>A</span>
          <i />
          <i />
        </div>
        <a className="service-round-cta about-round-cta" href="#proposito">
          CONOCÉ
          <br />
          POR QUÉ ↓
        </a>
        <div className="service-waterline" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="about-origin" data-reveal>
        <div className="about-origin-image" data-parallax>
          <img
            src="/aquabon-fachada.png"
            alt="Fachada de Aquabon Lavandería en Gascón 2189"
          />
          <span>UNA LAVANDERÍA CON NOMBRE Y CARA</span>
        </div>
        <div className="about-origin-copy">
          <p className="eyebrow">CÓMO EMPEZÓ</p>
          <h2>
            Una idea sencilla,
            <em>hacer las cosas con cuidado</em>
          </h2>
          <p>
            Aquabon nace para recuperar algo que a veces se pierde en los
            servicios de todos los días: la cercanía. Queremos que sepas quién
            recibe tu ropa, cómo la tratamos y cuándo vuelve a tus manos.
          </p>
          <p>
            Combinamos procesos claros con atención humana. Escuchamos lo que
            necesitás, revisamos cada prenda y la cuidamos como cuidaríamos la
            nuestra.
          </p>
          <strong>BUENA ATENCIÓN · CUIDADO REAL · CERO COMPLICACIONES</strong>
        </div>
      </section>

      <section className="about-purpose" id="proposito" data-reveal>
        <div className="about-purpose-heading">
          <p className="eyebrow">NUESTRO NORTE</p>
          <h2>
            Lo que nos
            <em>mueve por dentro</em>
          </h2>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <p>{principle.label}</p>
              <h3>{principle.title}</h3>
              <div className="principle-wave" aria-hidden="true" />
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-manifesto" data-reveal>
        <p>CREEMOS EN LOS PEQUEÑOS CUIDADOS</p>
        <h2>
          En esa tranquilidad de dejar algo importante
          <em>y saber que va a volver bien</em>
        </h2>
        <div className="statement-ripples" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <LocationBlock />

      <section className="service-cta about-page-cta" data-reveal>
        <p className="eyebrow">¿NOS CONOCEMOS?</p>
        <h2>
          Traé tu ropa,
          <em>nosotros la cuidamos</em>
        </h2>
        <a
          href={`https://wa.me/?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          ESCRIBINOS POR WHATSAPP <span>↗</span>
        </a>
        <footer>
          <span>AQUABON</span>
          <p>Gascón 2189 · Mar del Plata</p>
          <p>Ropa limpia · Cabeza liviana</p>
        </footer>
      </section>
    </main>
  );
}
