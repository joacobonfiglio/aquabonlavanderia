import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import styles from "./home-test.module.css";

const googleProfile = "https://share.google/L9kn23nPWPLthwKMR";
const directions = "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina";
const services = [
  { title: "Valet de ropa", copy: "Lavado, secado y doblado de la ropa de tu semana.", href: "/servicios/valet-de-ropa", symbol: "wash" },
  { title: "Lavado de acolchados", copy: "De 1 y 2 plazas, pluma o sintético. Consultá por el tuyo.", href: "/servicios/lavado-de-acolchados", symbol: "quilt" },
  { title: "Tintorería", copy: "Recepción y seguimiento de prendas que requieren cuidado especializado.", href: "/servicios/tintoreria", symbol: "clean" },
  { title: "Planchado", copy: "Camisas y prendas listas para volver a usar.", href: "/servicios/planchado", symbol: "iron" },
];
function CareSymbol({ name }: { name: string }) {
  return <svg viewBox="0 0 100 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "wash" ? <><path d="M10 25l10 49h60l10-49"/><path d="M10 25q10-12 20 0t20 0t20 0t20 0"/></> : name === "quilt" ? <><rect x="13" y="10" width="74" height="70" rx="9"/><path d="M13 34h74M13 56h74M38 10v70M63 10v70"/></> : name === "clean" ? <><circle cx="50" cy="45" r="34"/><path d="M41 64V27h13a11 11 0 0 1 0 22H41"/></> : <><path d="M10 70h80v-9c0-24-17-38-40-38H30M30 23C17 23 10 41 10 70"/><path d="M10 61h80M37 36h23"/></>}
  </svg>;
}
function Washer() {
  return <div className={styles.washerArt}>
    <svg viewBox="0 0 500 500" role="img" aria-label="Ilustración de ropa girando en un lavarropas de Aquabon">
      <circle cx="250" cy="250" r="235" fill="#e8efff"/><circle cx="250" cy="250" r="211" fill="#c1d1ff"/><circle cx="250" cy="250" r="184" fill="#13224c"/>
      <g className={styles.spin}>
        <path d="M135 276c18-61 97-89 127-29s-6 102-59 90-88-31-68-61" fill="#1c46e8"/>
        <path d="M257 115c64-15 115 37 77 85s-89 4-99-32 8-49 22-53" fill="#fff"/>
        <path d="M285 286c43-19 87 24 63 65s-86 30-90-10 6-44 27-55" fill="#9cb5ff"/>
        <path d="M139 153c23-37 76-16 78 18s-33 45-60 26-28-31-18-44" fill="#dbe5ff"/>
        <circle cx="367" cy="247" r="8" fill="#fff"/><circle cx="151" cy="354" r="6" fill="#fff"/><circle cx="263" cy="388" r="5" fill="#fff"/>
      </g>
      <circle cx="250" cy="250" r="184" fill="none" stroke="#0d1738" strokeWidth="7"/>
      <path d="M128 161a170 170 0 0 1 87-66" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity=".7" fill="none"/>
    </svg>
    <div className={styles.tag}><span>DE LA BOLSA AL PLACARD</span><strong>Lavada. Seca.<br/>Doblada.</strong><span>Una tarea menos para vos.</span></div>
  </div>;
}
export default function Home() {
  return <main className={`${styles.page} aq-renew`}>
    <a className="aq-skip" href="#contenido">Ir al contenido</a>
    <div className="aq-topline"><span>Gascón 2189 · Mar del Plata</span><span>Lun–Vie 8:30–20 · Sáb 9–14</span></div>
    <SiteHeader event="whatsapp_home_header"/>
    <section className={styles.hero} id="contenido"><div className={styles.heroInner}>
      <div className={styles.heroCopy}><p className={styles.eyebrow}>LAVANDERÍA Y TINTORERÍA EN MAR DEL PLATA</p><h1>Menos ropa<br/>pendiente.<br/><span>Más tiempo<br/>para vos.</span></h1><p className={styles.lead}>Dejás la bolsa. Te la devolvemos lavada, seca y doblada. También nos ocupamos de tus acolchados y prendas especiales.</p>
        <div className={styles.actions}><WhatsAppLink className={styles.whiteButton} message="Hola Aquabon, quiero consultar por el lavado de mi ropa." event="whatsapp_home_hero">Escribinos por WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink><a className={styles.heroLink} href={directions} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div>
        <p className={styles.heroNote}>Traela al local o consultá por retiro y entrega.</p><a className={styles.googleHero} href={googleProfile} target="_blank" rel="noreferrer">Conocé las opiniones en Google ↗</a>
      </div><Washer/>
    </div><svg className={styles.wave} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30c180-45 360-45 540 0s360 45 540 0 240-20 360 0v60H0z" fill="#a9bfff" opacity=".3"/><path d="M0 65c180-35 360-35 540 0s360 35 540 0 240-20 360 0v25H0z" fill="#fff"/></svg></section>
    <section className={styles.section} id="servicios"><div className={styles.heading}><div><p className={styles.eyebrow}>EL CUIDADO INDICADO</p><h2>Cada prenda,<br/>con su cuidado.</h2></div><p>Revisamos el tejido y la etiqueta para orientarte sobre el servicio que necesita tu ropa.</p></div><div className={styles.serviceGrid}>{services.map(s=><Link className={styles.service} key={s.href} href={s.href}><CareSymbol name={s.symbol}/><h3>{s.title}</h3><p>{s.copy}</p><span className={styles.serviceLink}>Conocer el servicio ↗</span></Link>)}</div><div className={styles.extras}><span>También resolvemos</span><Link href="/servicios/lavado-de-zapatillas">Zapatillas ↗</Link><Link href="/servicios/lavado-de-camperas-y-tapados">Camperas y tapados ↗</Link><Link href="/servicios/tenido-de-prendas">Teñido ↗</Link><Link href="/servicios/arreglos-y-costura">Arreglos y costura ↗</Link></div></section>
    <section className={styles.quilt}><div className={styles.quiltImage}><img src="/acolchados-hero.png" alt="Acolchados doblados para su cuidado y limpieza" width="1536" height="1024" loading="lazy"/><span className={styles.photoLabel}>ACOLCHADOS · PLUMA Y SINTÉTICOS</span></div><div className={styles.quiltCopy}><p className={styles.eyebrow}>UN NUEVO COMIENZO PARA TU ACOLCHADO</p><h2>Antes de guardarlo,<br/><span>lavalo.</span></h2><p>Un acolchado limpio y bien seco, listo para cuando lo vuelvas a necesitar. Revisamos el tejido y el relleno antes de confirmar su tratamiento.</p><div className={styles.pills}><span>1 y 2 plazas</span><span>Pluma y sintético</span></div><WhatsAppLink className={styles.blueButton} message="Hola Aquabon, quiero consultar por el lavado de un acolchado. Les paso tamaño y tipo de relleno." event="whatsapp_home_acolchado">Consultar por mi acolchado ↗</WhatsAppLink></div></section>
    <section className={`${styles.section} ${styles.care}`}><div><p className={styles.eyebrow}>ESA PRENDA QUE TE DA DUDAS</p><h2>Mandanos una foto.<br/><span>La vemos juntos.</span></h2><p>¿No entendés la etiqueta o te preocupa una mancha? Enviá una foto de la prenda y de su etiqueta por WhatsApp. Te orientamos y, si hace falta, la revisamos en el local.</p><WhatsAppLink className={styles.blueButton} message="Hola Aquabon, tengo una duda sobre una prenda. Les voy a enviar una foto de la prenda y su etiqueta." event="whatsapp_home_prenda">Consultar por mi prenda ↗</WhatsAppLink><Link className={styles.textLink} href="/blog">Explorar las guías de cuidado ↗</Link></div><figure><img src="/blog/revisar-tapado-etiqueta-forro.webp" width="1200" height="800" alt="Revisión de la etiqueta y el tejido de una prenda" loading="lazy"/><figcaption>Miramos la etiqueta. Cuidamos lo que importa.</figcaption></figure></section>
    <section className={styles.googleBlock} id="resenas"><div><p className={styles.eyebrow}>AQUABON EN GOOGLE</p><h2>Antes de traer tu ropa,<br/>conocenos un poco más.</h2><p>Visitá nuestro perfil para leer las reseñas de quienes pasaron por el local.</p></div><a className={styles.blueButton} href={googleProfile} target="_blank" rel="noreferrer">Leer las reseñas en Google ↗</a></section>
    <section className={`${styles.section} ${styles.delivery}`} id="retiro"><div><p className={styles.eyebrow}>ASÍ DE SIMPLE</p><h2>Tu lavado empieza<br/><span>con un mensaje.</span></h2><p>Traé tu ropa al local o consultá por retiro y entrega según tu zona y disponibilidad.</p><WhatsAppLink className={styles.blueButton} message="Hola Aquabon, quiero consultar por retiro y entrega. Mi dirección es: " event="whatsapp_retiro_entrega">Consultar mi zona ↗</WhatsAppLink></div><ol><li><span>01</span><div><h3>Contanos qué necesitás</h3><p>La prenda, la cantidad y tu ubicación.</p></div></li><li><span>02</span><div><h3>Acordamos los detalles</h3><p>Te confirmamos servicio, importe y plazo.</p></div></li><li><span>03</span><div><h3>Nos ocupamos de tu ropa</h3><p>Te avisamos por WhatsApp cuando esté lista.</p></div></li></ol></section>
    <section className={`${styles.section} ${styles.faq}`}><div><p className={styles.eyebrow}>ANTES DE VENIR</p><h2>Las dudas,<br/>bien claras.</h2></div><div><details><summary>¿Cuánto cuesta y cuándo está listo?</summary><p>Depende del servicio, la cantidad y la prenda. Consultanos por WhatsApp para confirmar importe y plazo antes de dejarla.</p></details><details><summary>¿Retiran y entregan a domicilio?</summary><p>Coordinamos según tu zona y disponibilidad. Mandanos tu dirección para consultar cobertura, costo y horarios.</p></details><details><summary>¿Reciben prendas para tintorería?</summary><p>Sí. Somos punto de recepción y seguimiento de prendas que requieren tratamiento especializado. Primero revisamos la prenda para orientarte.</p></details></div></section>
    <section className={styles.location} id="ubicacion"><figure><img src="/aquabon-fachada.png" width="1092" height="1118" alt="Fachada del local de Aquabon en Gascón 2189, Mar del Plata" loading="lazy"/></figure><div><p className={styles.eyebrow}>ESTAMOS CERCA</p><h2>En el centro.<br/><span>En Gascón 2189.</span></h2><p>Mar del Plata · Entre Corrientes y Entre Ríos</p><dl><dt>HORARIOS</dt><dd>Lunes a viernes de 8:30 a 20<br/>Sábados de 9 a 14</dd><dt>WHATSAPP</dt><dd>+54 9 223 560-7738</dd></dl><a className={styles.blueButton} href={directions} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></section>
    <section className={styles.business}><div><p className={styles.eyebrow}>PARA TU NEGOCIO</p><h2>¿Tenés un alquiler temporario<br/>o necesitás un servicio para empresas?</h2><p>Consultá por el cuidado de tu ropa blanca, uniformes y textiles.</p></div><Link className={styles.textLink} href="/empresas">Ver servicios para empresas ↗</Link></section>
    <section className={styles.final}><div><p className={styles.eyebrow}>UNA TAREA MENOS PARA HOY</p><h2>La ropa, con nosotros.<br/>El tiempo, para vos.</h2></div><WhatsAppLink className={styles.whiteButton} message="Hola Aquabon, quiero consultar por un servicio." event="whatsapp_home_final">Hablar por WhatsApp ↗</WhatsAppLink></section>
    <SiteFooter/>
    <div className={styles.mobileBar}><a href={directions} target="_blank" rel="noreferrer">Cómo llegar ↗</a><WhatsAppLink message="Hola Aquabon, quiero consultar por un servicio." event="whatsapp_home_mobile">WhatsApp ↗</WhatsAppLink></div>
  </main>;
}
