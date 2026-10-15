import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ServiceWardrobe from "./ServiceWardrobe";
import TrackedLink from "./TrackedLink";
import WhatsAppLink from "./WhatsAppLink";
import styles from "./home-test.module.css";

const googleProfile = "https://share.google/L9kn23nPWPLthwKMR";
const directions = "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina";
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
      <div className={styles.heroCopy}><p className={styles.eyebrow}>LAVANDERÍA Y TINTORERÍA EN MAR DEL PLATA</p><h1>Lavadero y lavandería<br/><span>en Mar del Plata</span></h1><p className={styles.claim}>Menos ropa pendiente<br/>Más tiempo para vos</p><p className={styles.lead}>En Aquabon lavamos, secamos y doblamos tu ropa. También recibimos acolchados y prendas para tintorería en Gascón 2189, en el centro de Mar del Plata.</p>
        <div className={styles.actions}><WhatsAppLink className={styles.whiteButton} message="Hola Aquabon, quiero consultar por el lavado de mi ropa." event="whatsapp_home_hero">Escribinos por WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink><TrackedLink className={styles.heroLink} href={directions} target="_blank" rel="noreferrer" event="directions_click" placement="home_hero">Cómo llegar ↗</TrackedLink></div>
        <p className={styles.heroNote}>Traela al local o consultá por retiro y entrega.</p><a className={styles.googleHero} href={googleProfile} target="_blank" rel="noreferrer">Conocé las opiniones en Google ↗</a>
      </div><Washer/>
    </div><svg className={styles.wave} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30c180-45 360-45 540 0s360 45 540 0 240-20 360 0v60H0z" fill="#a9bfff" opacity=".3"/><path d="M0 65c180-35 360-35 540 0s360 35 540 0 240-20 360 0v25H0z" fill="#fff"/></svg></section>
    <div className={styles.careRibbon} aria-label="Lavado, secado y doblado"><span>LAVAR</span><i aria-hidden="true">✳</i><span>SECAR</span><i aria-hidden="true">✳</i><span>DOBLAR</span><i aria-hidden="true">✳</i><span>SEGUIR CON TU DÍA</span></div>
    <ServiceWardrobe />
    <section className={styles.quiltPoster} aria-labelledby="quilt-title">
      <div className={styles.quiltPosterCopy}><p className={styles.eyebrow}>LAVADO DE ACOLCHADOS EN MAR DEL PLATA</p><h2 id="quilt-title">Que ocupe<br/>tu cama<br/><span>no tu cabeza</span></h2><p>Grande, de pluma o sintético: contanos cómo es tu acolchado. Revisamos la etiqueta y el relleno antes de confirmar su lavado.</p><WhatsAppLink className={styles.blueButton} message="Hola Aquabon, quiero consultar por el lavado de un acolchado. Su tamaño y relleno son: " event="whatsapp_home_acolchado">Sacar el acolchado de mi lista ↗</WhatsAppLink></div>
      <div className={styles.quiltArtwork} role="img" aria-label="Ilustración de un acolchado acolchado azul y su etiqueta de cuidado"><div className={styles.quiltShape}>{Array.from({length:20},(_,i)=><span key={i}/>)}</div><div className={styles.quiltSticker}><span>1 PLAZA / 2 PLAZAS</span><strong>King size<br/>también</strong><span>CONSULTÁ POR EL TUYO ↗</span></div><p className={styles.quiltNote}>Tu descanso tiene lugar acá</p></div>
    </section>
    <section className={styles.messageStudio} aria-labelledby="dudas-title"><div className={styles.chatPaper}><span className={styles.chatHeader}>UNA CONVERSACIÓN CON AQUABON</span><div className={styles.chatBubble}>¿Esta prenda se puede lavar?</div><div className={styles.chatAnswer}>Mandanos una foto y la etiqueta.<br/>La vemos juntos.</div><span className={styles.chatFootnote}>Así podés empezar tu consulta</span><svg className={styles.hangerDrawing} viewBox="0 0 240 170" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" aria-hidden="true"><path d="M105 35a17 17 0 1 1 26 14c-9 5-11 10-11 19v13M120 81 26 138q-9 12 8 12h172q17 0 8-12L120 81"/></svg></div><div><p className={styles.eyebrow}>LA ROPA NO VIENE CON MANUAL</p><h2 id="dudas-title">La etiqueta<br/>chiquita<br/><span>la leemos juntos</span></h2><p>Una mancha, un tejido delicado o una prenda que te da dudas. Enviá una foto de la ropa y de su etiqueta: te orientamos y te indicamos si hace falta revisarla en persona.</p><WhatsAppLink className={styles.blueButton} message="Hola Aquabon, tengo una duda sobre una prenda. Les voy a enviar una foto de la prenda y su etiqueta." event="whatsapp_home_prenda">Preguntar por mi prenda ↗</WhatsAppLink><Link className={styles.textLink} href="/blog">O explorar nuestras guías de cuidado →</Link></div></section>
    <section className={styles.deliveryStory} id="retiro" aria-labelledby="retiro-title"><div className={styles.deliveryHeading}><p className={styles.eyebrow}>RETIRO Y ENTREGA EN MAR DEL PLATA</p><h2 id="retiro-title">Tu ropa va y vuelve<br/><span>Vos seguís con tu día</span></h2><p>Consultá por el centro y zonas cercanas. Con tu dirección y el volumen de ropa, confirmamos recorrido, costo y horario antes de coordinar.</p></div><ol className={styles.journey}><li><span>01 / EL MENSAJE</span><h3>Nos contás</h3><p>Qué necesitás lavar, cuánto es y dónde estás.</p></li><li><span>02 / TU PEDIDO</span><h3>Lo acordamos</h3><p>Servicio, importe y plazo claros antes de empezar.</p></li><li><span>03 / UNA TAREA MENOS</span><h3>Te avisamos</h3><p>Cuando está listo, retirás o coordinamos la entrega.</p></li></ol><WhatsAppLink className={styles.whiteButton} message="Hola Aquabon, quiero consultar por retiro y entrega. Mi dirección es: " event="whatsapp_retiro_entrega">Consultar retiro en mi dirección ↗</WhatsAppLink></section>
    <section className={styles.reputationBand} aria-labelledby="reviews-title"><span className={styles.reputationSeal} aria-hidden="true">AQUABON<br/>EN GOOGLE<br/>↗</span><div><p className={styles.eyebrow}>EXPERIENCIAS REALES</p><h2 id="reviews-title">La confianza<br/>se gana prenda a prenda</h2><p>Conocé las opiniones que nuestros clientes comparten en nuestro perfil de Google.</p><a href={googleProfile} target="_blank" rel="noreferrer">Leer opiniones en Google ↗</a></div></section>
    <section className={styles.questionsNotebook} aria-labelledby="faq-title"><div><p className={styles.eyebrow}>ANTES DE DEJAR TU ROPA</p><h2 id="faq-title">Las dudas<br/><span>también se resuelven</span></h2></div><div><details><summary>¿Qué incluye el valet?</summary><p>Lavado, secado y doblado de ropa cotidiana. El planchado y los tratamientos de prendas especiales se consultan por separado.</p></details><details><summary>¿Cuánto cuesta y cuándo está listo?</summary><p>Consultanos con el servicio y la cantidad. Confirmamos el importe y el plazo antes de comenzar; para prendas especiales, necesitamos evaluar material y estado.</p></details><details><summary>¿Retiran y entregan a domicilio?</summary><p>Consultá con tu dirección. Priorizamos el centro de Mar del Plata y zonas cercanas, y confirmamos cobertura, costo y disponibilidad antes de coordinar.</p></details><details><summary>¿La tintorería se hace en el local?</summary><p>Somos punto de recepción y seguimiento. Cuando la prenda requiere tratamiento especializado, coordinamos el servicio fuera del local y te avisamos cuando está disponible.</p></details></div></section>
    <section className={styles.addressLabel} id="ubicacion"><span className={styles.addressArrow} aria-hidden="true">↗</span><div><p className={styles.eyebrow}>TU LAVADERO EN EL CENTRO DE MAR DEL PLATA</p><h2>Nos vemos en<br/><span>Gascón 2189</span></h2><TrackedLink href={directions} target="_blank" rel="noreferrer" event="directions_click" placement="home_location">Abrir ruta en Google Maps ↗</TrackedLink></div><dl><dt>CUÁNDO VENIR</dt><dd>Lun–Vie · 8:30 a 20<br/>Sáb · 9 a 14</dd><dt>ESCRIBINOS</dt><dd>+54 9 223 560-7738</dd></dl></section>
    <section className={styles.finalNote}><p className={styles.eyebrow}>AQUABON · UNA TAREA MENOS</p><h2>La ropa, con nosotros<br/><span>El tiempo, para vos</span></h2><WhatsAppLink className={styles.whiteButton} message="Hola Aquabon, quiero consultar por un servicio." event="whatsapp_home_final">Empezar con un mensaje ↗</WhatsAppLink><span className={styles.finalDoodle} aria-hidden="true">↗</span></section>
    <SiteFooter showBusiness={false}/>
    <div className={styles.mobileBar}><TrackedLink href={directions} target="_blank" rel="noreferrer" event="directions_click" placement="home_mobile">Cómo llegar ↗</TrackedLink><WhatsAppLink message="Hola Aquabon, quiero consultar por un servicio." event="whatsapp_home_mobile">WhatsApp ↗</WhatsAppLink></div>
  </main>;
}
