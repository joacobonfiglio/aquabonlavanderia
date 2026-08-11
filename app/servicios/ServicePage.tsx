import Link from "next/link";
import MotionEffects from "../MotionEffects";
import SiteFooter from "../SiteFooter";

type Fact = {
  label: string;
  value: string;
};

type ContentItem = {
  title: string;
  copy: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type RelatedService = {
  number: string;
  title: string;
  href: string;
};

export type ServicePageData = {
  number: string;
  title: [string, string];
  intro: [string, string];
  heroImage: string;
  heroAlt: string;
  detailImage: string;
  detailAlt: string;
  detailLabel: string;
  facts: [Fact, Fact, Fact];
  storyEyebrow: string;
  storyHeading: [string, string];
  storyParagraphs: [string, string];
  includedHeading: string;
  included: [ContentItem, ContentItem, ContentItem, ContentItem];
  processHeading: [string, string];
  process: [ContentItem, ContentItem, ContentItem];
  faq: [FaqItem, FaqItem, FaqItem, FaqItem];
  ctaEyebrow: string;
  ctaHeading: [string, string];
  whatsappText: string;
  related: RelatedService[];
};

export default function ServicePage({ data }: { data: ServicePageData }) {
  const whatsappMessage = encodeURIComponent(data.whatsappText);
  const whatsappUrl = `https://wa.me/5492235607738?text=${whatsappMessage}`;

  return (
    <main className="service-page">
      <MotionEffects />
      <header className="nav-shell service-nav">
        <Link className="brand" href="/" aria-label="Aquabon, volver al inicio">
          <span className="brand-main">AQUABON</span>
          <span className="brand-sub">LAVANDERÍA</span>
        </Link>
        <nav aria-label="Navegación principal">
          <Link href="/#servicios">Servicios</Link>
          <Link href="/nosotros">Nosotros</Link>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú de navegación">
            <span />
            <span />
          </summary>
          <div>
            <Link href="/#servicios">Servicios</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/#ubicacion">Ubicación</Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
          </div>
        </details>
      </header>

      <section className="service-hero">
        <div className="hero-bubbles service-bubbles" aria-hidden="true">
          <span className="bubble bubble-one" />
          <span className="bubble bubble-two" />
          <span className="bubble bubble-three" />
          <span className="bubble bubble-four" />
        </div>
        <img
          className="service-hero-image"
          data-hero-parallax
          src={data.heroImage}
          alt={data.heroAlt}
        />
        <div className="service-hero-copy">
          <Link className="back-link" href="/#servicios">
            ← TODOS LOS SERVICIOS
          </Link>
          <p className="eyebrow">SERVICIO {data.number} · AQUABON</p>
          <h1>
            {data.title[0]}
            <span>{data.title[1]}</span>
          </h1>
          <p>
            {data.intro[0]}
            <br />
            {data.intro[1]}
          </p>
        </div>
        <a className="service-round-cta" href="#como-funciona">
          VER CÓMO
          <br />
          FUNCIONA ↓
        </a>
        <div className="service-waterline" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section
        className="service-facts"
        aria-label="Resumen del servicio"
        data-reveal
      >
        {data.facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>

      <section className="service-story" data-reveal>
        <div className="service-story-image" data-parallax>
          <img src={data.detailImage} alt={data.detailAlt} />
          <span>{data.detailLabel}</span>
        </div>
        <div className="service-story-copy">
          <p className="eyebrow">{data.storyEyebrow}</p>
          <h2>
            {data.storyHeading[0]}
            <em>{data.storyHeading[1]}</em>
          </h2>
          {data.storyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="included" data-reveal>
        <div className="included-title">
          <p className="eyebrow">QUÉ INCLUYE</p>
          <h2>{data.includedHeading}</h2>
        </div>
        <div className="included-grid">
          {data.included.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process" id="como-funciona" data-reveal>
        <p className="eyebrow">ASÍ DE SIMPLE</p>
        <h2>
          {data.processHeading[0]}
          <br />
          {data.processHeading[1]}
        </h2>
        <ol>
          {data.process.map((item, index) => (
            <li key={item.title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <span>{item.title}</span>
              <p>{item.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-faq" data-reveal>
        <div>
          <p className="eyebrow">ANTES DE VENIR</p>
          <h2>Lo que conviene saber</h2>
        </div>
        <div className="faq-list">
          {data.faq.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question} <span>＋</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="related-services" data-reveal>
        <p className="eyebrow">SEGUÍ EXPLORANDO</p>
        <div className="related-heading">
          <h2>Otros cuidados Aquabon</h2>
          <span>Elegí el servicio que necesitás</span>
        </div>
        <div className="related-grid">
          {data.related.map((service) => (
            <a href={service.href} key={service.href}>
              <span>{service.number}</span>
              <strong>{service.title}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="service-cta" data-reveal>
        <p className="eyebrow">{data.ctaEyebrow}</p>
        <h2>
          {data.ctaHeading[0]}
          <em>{data.ctaHeading[1]}</em>
        </h2>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          CONSULTAR POR WHATSAPP <span>↗</span>
        </a>
        <SiteFooter />
      </section>
    </main>
  );
}
