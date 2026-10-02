import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import Breadcrumbs from "../../Breadcrumbs";
import WhatsAppLink from "../../WhatsAppLink";
import ValetGuide from "./ValetGuide";
import styles from "./valet.module.css";

const path = "/servicios/valet-de-ropa";
const url = "https://www.aquabonlavanderia.com" + path;
const description = "Valet de ropa en Mar del Plata: lavado, secado y doblado de ropa cotidiana en Aquabon, Gascón 2189. Consultá precio, plazo, retiro y entrega por WhatsApp.";
export const metadata: Metadata = {
  title: "Valet de ropa en Mar del Plata · Lavado, secado y doblado | Aquabon", description,
  alternates: { canonical: path },
  openGraph: { title: "Tu ropa lista. Tu tiempo libre. | Valet Aquabon", description, url: path, type: "website", locale: "es_AR" },
};
const faqs = [
  { question: "¿Qué es el valet de ropa y qué incluye?", answer: "El valet es el servicio de lavado, secado y doblado de ropa cotidiana. En Aquabon recibimos tu bolsa y te avisamos por WhatsApp cuando la ropa está lista para retirar. El planchado y los tratamientos de prendas especiales se consultan por separado." },
  { question: "¿Qué ropa puedo poner en la bolsa?", answer: "Ropa de uso diario apta para lavado con agua, como remeras, pantalones, ropa interior y medias, siempre según su etiqueta. Toallas y sábanas se consultan según cantidad y volumen. Separá prendas delicadas, de lana, sacos y piezas con indicación de limpieza en seco para consultar su cuidado." },
  { question: "¿Cuánto cuesta el valet?", answer: "Escribinos con el tipo de ropa y la cantidad aproximada para consultar el importe vigente y cómo se calcula tu pedido. Si necesitás retiro y entrega, indicá también tu ubicación: te confirmamos su costo por separado antes de coordinar." },
  { question: "¿Cuándo estará lista mi ropa?", answer: "El plazo depende de la cantidad, las prendas y el volumen de trabajo. Consultalo antes de dejar la bolsa. Te confirmamos el plazo del pedido y te avisamos por WhatsApp cuando está disponible." },
  { question: "¿Cómo preparo la bolsa para llevarla?", answer: "Vaciá los bolsillos, colocá la ropa en una bolsa bien cerrada e informanos la cantidad de prendas. Avisá si hay manchas, daños o indicaciones particulares. Las prendas que te generen dudas conviene separarlas y consultarlas antes." },
  { question: "¿El valet incluye planchado o tratamiento de manchas?", answer: "El planchado no está incluido en el valet; podés consultarlo como servicio adicional. Si hay una mancha, contanos su origen y si aplicaste algún producto. El tratamiento se evalúa según la prenda y no se puede garantizar que todas las manchas salgan." },
  { question: "¿Puedo pedir retiro y entrega a domicilio?", answer: "Sí, podés consultar retiro y entrega en el centro de Mar del Plata y zonas cercanas. Enviá tu dirección para confirmar cobertura, costo, horarios y disponibilidad. No se coordina un recorrido sin confirmar esos detalles." },
  { question: "¿Dónde está Aquabon y en qué horario puedo ir?", answer: "Estamos en Gascón 2189, en el centro de Mar del Plata. Atendemos de lunes a viernes de 8:30 a 20:00 y los sábados de 9:00 a 14:00." },
];
const steps = [
  ["Preparás la bolsa", "Ropa cotidiana, bolsillos vacíos y cualquier indicación que necesitemos saber."],
  ["Acordamos los detalles", "Traela al local o consultá retiro. Confirmamos el importe y el plazo de tu pedido."],
  ["Nos ocupamos del lavado", "Lavado, secado y doblado para que vuelva limpia y lista para guardar."],
  ["Te avisamos cuando está", "Recibís el aviso por WhatsApp. Retirás tu ropa o coordinamos la entrega."],
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": url + "#webpage", url, name: "Valet de ropa en Mar del Plata | Aquabon", description, inLanguage: "es-AR", mainEntity: { "@id": url + "#service" } },
  { "@type": "Service", "@id": url + "#service", name: "Valet de ropa en Mar del Plata", serviceType: "Lavado, secado y doblado de ropa cotidiana", description, provider: { "@id": "https://www.aquabonlavanderia.com/#business" }, areaServed: { "@type": "City", name: "Mar del Plata" }, url, mainEntityOfPage: { "@id": url + "#webpage" } },
  { "@type": "FAQPage", "@id": url + "#faq", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
] };
const message = "Hola Aquabon, quiero consultar por el valet de ropa. Tengo aproximadamente: __. Quería saber el importe y el plazo.";

export default function ValetPage() {
  return <div className={`aq-renew ${styles.page}`}>
    <a className="aq-skip" href="#valet-contenido">Ir al contenido</a><SiteHeader event="whatsapp_valet_header" />
    <main id="valet-contenido">
      <div className={styles.breadcrumbs}><Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: "Valet de ropa", href: path }]} /></div>
      <section className={styles.hero} aria-labelledby="valet-title">
        <div className={styles.heroCopy}><p className={styles.label}>VALET DE ROPA EN MAR DEL PLATA</p><h1 id="valet-title">Tu ropa lista.<br /><span>Tu tiempo<br />libre.</span></h1>
          <p className={styles.lead}>La ropa se acumula. Tu día no tiene por qué esperar. En Aquabon la lavamos, secamos y doblamos por vos.</p>
          <WhatsAppLink className={styles.button} message={message} event="whatsapp_valet_hero">Quiero resolver mi lavado</WhatsAppLink>
          <p className={styles.heroNote}>Traé tu bolsa a Gascón 2189 o consultá por retiro y entrega.</p><a href="#que-incluye" className={styles.textLink}>Conocé qué incluye el valet</a>
        </div>
        <figure className={styles.heroPhoto}><Image src="/service-still-v2.webp" width={1024} height={1536} alt="Ropa de uso diario doblada junto a toallas y una bolsa de lavado" sizes="(max-width: 760px) 100vw, 48vw" preload />
          <div className={styles.photoTag} aria-hidden="true"><span>UNA TAREA MENOS</span><strong>De tu bolsa<br />a tu placard.</strong></div><figcaption className={styles.photoCaption}><span>Lavada.</span><span>Seca.</span><span>Doblada.</span></figcaption>
        </figure>
      </section>
      <section className={styles.included} id="que-incluye" aria-labelledby="included-title">
        <div className={styles.sectionHeading}><p className={styles.label}>VOS DEJÁS LA ROPA. NOSOTROS NOS OCUPAMOS.</p><h2 id="included-title">Todo el lavado.<br /><span>Ninguna tarea pendiente.</span></h2><p>El valet de Aquabon reúne lavado, secado y doblado de ropa cotidiana. Un servicio para liberar tu semana y volver a tener lo que usás a mano.</p></div>
        <div className={styles.includedGrid}>
          <article><span className={styles.number}>01 / LAVADO</span><h3>De pendiente <br />a limpia.</h3><p>Nos ocupamos del lavado de tu ropa de uso diario. Si hay manchas o cuidados particulares, contanos antes de dejar la bolsa.</p></article>
          <article><span className={styles.number}>02 / SECADO</span><h3>Sin ocupar <br />tu casa.</h3><p>El servicio incluye secado. Te ahorrás tender, estar pendiente del clima y esperar a que la ropa deje de ocupar espacio.</p></article>
          <article><span className={styles.number}>03 / DOBLADO</span><h3>Directo <br />al placard.</h3><p>Te entregamos la ropa seca y doblada, lista para guardar. Y te avisamos por WhatsApp cuando el pedido está disponible.</p></article>
        </div><p className={styles.serviceNote}>¿Necesitás planchado? <Link href="/servicios/planchado">Lo podés consultar por separado.</Link></p>
      </section>
      <section className={styles.garments} id="tu-ropa" aria-labelledby="garments-title"><div className={styles.garmentIntro}><p className={styles.label}>ANTES DE ARMAR LA BOLSA</p><h2 id="garments-title">Cada prenda<br />tiene su cuidado.</h2><p>El valet está pensado para ropa cotidiana. Si una etiqueta te genera dudas, te ayudamos a elegir el servicio antes de lavarla.</p><p className={styles.guideHint}>Elegí el tipo de ropa que querés lavar.</p></div><ValetGuide /></section>
      <section className={styles.process} id="como-funciona" aria-labelledby="process-title"><div className={styles.processHeading}><p className={styles.label}>ASÍ DE SIMPLE</p><h2 id="process-title">De tu lista de tareas<br /><span>a nuestra lavandería.</span></h2></div><ol className={styles.steps}>{steps.map(([title, copy], index) => <li key={title}><span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol><div className={styles.prepare}><strong>Antes de cerrar la bolsa</strong><p>Vaciá los bolsillos, informá la cantidad de prendas y avisá si hay manchas o daños. Separá las piezas delicadas para consultarlas.</p></div></section>
      <section className={styles.delivery} id="retiro-y-entrega" aria-labelledby="delivery-title"><div className={styles.deliveryCopy}><p className={styles.label}>CERCA TUYO. A TU MANERA.</p><h2 id="delivery-title">¿Venís al local<br />o lo coordinamos?</h2><p>Elegí la opción que mejor encaje con tu día. Antes de confirmar, consultá el importe y el plazo del lavado.</p><Link className={styles.textLink} href="/servicios/retiro-y-entrega-de-ropa">Más sobre retiro y entrega</Link></div><div className={styles.deliveryOptions}>
        <article><span className={styles.number}>EN EL LOCAL</span><h3>Nos vemos en Gascón 2189.</h3><p>En el centro de Mar del Plata.<br />Lun–Vie 8:30–20 · Sáb 9–14.</p><a className={styles.outlineButton} href="https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata" target="_blank" rel="noreferrer">Cómo llegar a Aquabon</a></article>
        <article><span className={styles.number}>CON RETIRO Y ENTREGA</span><h3>Un traslado menos para vos.</h3><p>Mandanos tu dirección. Te confirmamos cobertura, costo y horarios según zona y disponibilidad.</p><WhatsAppLink className={styles.button} message="Hola Aquabon, quiero consultar valet con retiro y entrega. Mi dirección es: __. Tengo esta ropa: __. ¿Me confirman cobertura, costo y plazo?" event="whatsapp_valet_delivery">Consultar retiro en mi zona</WhatsAppLink></article>
      </div></section>
      <section className={styles.faq} id="preguntas-frecuentes" aria-labelledby="faq-title"><div><p className={styles.label}>SIN DUDAS, SIN VUELTAS</p><h2 id="faq-title">Lo que querés saber<br />antes de dejar tu ropa.</h2><p>¿Tu consulta es sobre una prenda particular? Mandanos una foto de la ropa y de su etiqueta.</p><WhatsAppLink className={styles.textLink} message="Hola Aquabon, tengo una duda sobre una prenda antes de enviarla al valet. Les comparto una foto y su etiqueta." event="whatsapp_valet_question">Consultar mi prenda</WhatsAppLink></div><div className={styles.faqList}>{faqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></section>
      <aside className={styles.related} aria-label="Otros cuidados para tu ropa"><p className={styles.label}>SI TU PRENDA NECESITA ALGO MÁS</p><div><Link href="/servicios/tintoreria"><strong>Tintorería</strong><span>Prendas delicadas y especiales</span></Link><Link href="/servicios/lavado-de-acolchados"><strong>Acolchados</strong><span>Otro volumen, otro cuidado</span></Link><Link href="/blog/diferencia-entre-lavanderia-y-tintoreria"><strong>¿Valet o tintorería?</strong><span>Leé la guía para elegir</span></Link></div></aside>
      <section className={styles.final}><p className={styles.label}>AQUABON · TU LAVANDERÍA EN MAR DEL PLATA</p><h2>Una bolsa de ropa.<br /><span>Una tarea menos.</span></h2><WhatsAppLink className={`${styles.button} ${styles.whiteButton}`} message={message} event="whatsapp_valet_final">Hablemos de tu lavado</WhatsAppLink><p>Contanos qué necesitás lavar. Te confirmamos importe y plazo.</p></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main><SiteFooter />
  </div>;
}
