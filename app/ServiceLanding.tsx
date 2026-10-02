import Image from "next/image";
import Link from "next/link";
import type { LandingData } from "./SeoLanding";
import type { ServiceDesign } from "./service-design";
import Breadcrumbs from "./Breadcrumbs";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import styles from "./service.module.css";

export default function ServiceLanding({ data, design }: { data: LandingData; design: ServiceDesign }) {
  const url = "https://www.aquabonlavanderia.com" + data.path;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": url + "#page", url, name: data.title, description: data.description, inLanguage: "es-AR", mainEntity: { "@id": url + "#service" } },
    { "@type": "Service", "@id": url + "#service", name: data.h1, serviceType: design.name, description: design.intro, url, image: "https://www.aquabonlavanderia.com" + design.image, provider: { "@id": "https://www.aquabonlavanderia.com/#business" }, areaServed: { "@type": "City", name: "Mar del Plata" } },
    { "@type": "FAQPage", mainEntity: data.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }
  ] };
  return <div className={`aq-renew ${styles.page}`} data-service-variant={design.variant}>
    <a className="aq-skip" href="#servicio-contenido">Saltar al contenido</a>
    <SiteHeader event={data.event} />
    <main id="servicio-contenido">
      <div className={styles.breadcrumbs}><Breadcrumbs items={data.crumbs} /></div>
      <section className={styles.hero} aria-labelledby="servicio-titulo">
        <div className={styles.heroCopy}>
          <p className={styles.label}>{design.name.toUpperCase()} · MAR DEL PLATA</p>
          <h1 id="servicio-titulo">{design.title[0]} <span>{design.title[1]}</span></h1>
          <p className={styles.lead}>{data.intro}</p>
          <WhatsAppLink className={styles.button} message={data.message} event={data.event}>{data.cta}</WhatsAppLink>
          <p className={styles.heroNote}>Gascón 2189 · Orientación por WhatsApp y evaluación antes de confirmar.</p>
          <a className={styles.textLink} href="#que-incluye">Conocé cómo podemos ayudarte ↓</a>
        </div>
        <figure className={styles.heroPhoto}>
          <Image src={design.image} alt={design.alt} fill sizes="(max-width: 760px) 100vw, 48vw" preload />
          <div className={styles.photoTag}>{design.tag}</div>
          <figcaption className={styles.photoCaption}>{design.caption}</figcaption>
        </figure>
      </section>
      <section className={styles.included} id="que-incluye">
        <div className={styles.sectionHeading}><p className={styles.label}>LO QUE APORTAMOS CON AQUABON</p><h2>{design.heading[0]} <span>{design.heading[1]}</span></h2><p>{design.intro}</p></div>
        <div className={styles.includedGrid}>{data.items.map((item, i) => <article key={item.title}><span className={styles.number}>{String(i + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>
      <section className={styles.guide} aria-labelledby="guia-titulo">
        <div><p className={styles.label}>ENCONTRÁ TU CASO</p><h2 id="guia-titulo">{design.guideTitle}</h2><p>Hay detalles que cambian el proceso. Elegí una opción y conocé qué necesitamos saber.</p><WhatsAppLink className={styles.textLink} message={data.message + " Puedo enviarles una foto para una primera orientación."} event={data.event + "_guide"}>Contanos tu caso por WhatsApp ↗</WhatsAppLink></div>
        <div className={styles.guideOptions}>{design.guide.map((item, i) => <details key={item.title} open={i === 0}><summary>{item.title}</summary><p>{item.copy}</p></details>)}</div>
      </section>
      <section className={styles.process} id="como-funciona"><p className={styles.label}>ASÍ LO RESOLVEMOS</p><h2>Del primer mensaje <span>a tu pedido listo.</span></h2>
        <ol className={styles.steps}>{data.steps.map((item, i) => <li key={item.title}><span className={styles.stepNumber}>{String(i + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ol>
        <div className={styles.prepare}><strong>Antes de empezar</strong><p>{design.prepare}</p></div>
      </section>
      <section className={styles.delivery}><div><p className={styles.label}>CERCA TUYO, EN EL CENTRO</p><h2>Dejá tu consulta.<br />Acercá tu prenda.</h2><p>Nos encontrás en Gascón 2189, Mar del Plata. Una foto ayuda a orientarte; la confirmación del servicio se realiza al evaluar el pedido.</p><a className={styles.textLink} href="https://www.google.com/maps/search/?api=1&query=Aquabon+Lavanderia+Gascon+2189+Mar+del+Plata" target="_blank" rel="noreferrer">Cómo llegar a Aquabon ↗</a></div>
        <div className={styles.deliveryOptions}><article><p className={styles.label}>EN EL LOCAL</p><h3>Un punto de contacto para tu pedido</h3><p>Lunes a viernes de 8:30 a 20.<br />Sábados de 9 a 14.</p><WhatsAppLink className={styles.button} message={data.message} event={data.event + "_local"}>Consultar antes de venir</WhatsAppLink></article><article><p className={styles.label}>¿NECESITÁS RETIRO?</p><h3>Consultá por tu zona</h3><p>Retiro y entrega según ubicación, volumen y disponibilidad. Confirmamos cobertura y costo antes de coordinar.</p><Link className={styles.textLink} href="/servicios/retiro-y-entrega-de-ropa">Ver retiro y entrega ↗</Link></article></div>
      </section>
      <section className={styles.faq}><div><p className={styles.label}>PREGUNTAS FRECUENTES</p><h2>Antes de decidir,<br />resolvé tus dudas.</h2><p>Precio y plazo se confirman según el servicio, el estado y la cantidad. Consultanos por tu pedido.</p></div><div className={styles.faqList}>{data.faqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></section>
      <section className={styles.related}><p className={styles.label}>OTROS CUIDADOS Y GUÍAS</p><div>{data.related?.map(item => <Link key={item.href} href={item.href}><strong>{item.label}</strong><span>Conocé más ↗</span></Link>)}</div></section>
      <section className={styles.final}><p className={styles.label}>AQUABON · {design.name.toUpperCase()}</p><h2>{design.closing[0]} <span>{design.closing[1]}</span></h2><WhatsAppLink className={`${styles.button} ${styles.whiteButton}`} message={data.message} event={data.event + "_final"}>{data.cta}</WhatsAppLink></section>
    </main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </div>;
}
