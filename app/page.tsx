import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import LocationBlock from "./LocationBlock";
import WhatsAppLink from "./WhatsAppLink";
import ServiceIcon from "./ServiceIcon";

const services = [
  { name: "valet" as const, title: "Tu ropa de todos los días", subtitle: "Valet de ropa", copy: "Lavado, secado y doblado. Una tarea menos en tu semana.", href: "/servicios/valet-de-ropa" },
  { name: "acolchado" as const, title: "Ese acolchado que ocupa todo", subtitle: "Lavado de acolchados", copy: "Revisamos el tejido y el relleno para definir su cuidado.", href: "/servicios/lavado-de-acolchados" },
  { name: "tintoreria" as const, title: "La prenda que te da dudas", subtitle: "Tintorería", copy: "Camperas, sacos y prendas especiales. Consultá antes de lavarlas.", href: "/servicios/tintoreria" },
];
const extraServices = [
  ["Lavado de zapatillas", "Limpieza según el material", "/servicios/lavado-de-zapatillas"],
  ["Planchado", "Prendas listas para usar", "/servicios/planchado"],
  ["Teñido de prendas", "Consultá si tu prenda es apta", "/servicios/tenido-de-prendas"],
  ["Arreglos y costura", "Ajustes y reparaciones", "/servicios/arreglos-y-costura"],
];
export default function Home() {
  return <main className="aq-renew">
    <a className="aq-skip" href="#contenido">Ir al contenido</a>
    <div className="aq-topline"><span>Gascón 2189 · Mar del Plata</span><span>Lun–Vie 8:30–20 · Sáb 9–14</span></div>
    <SiteHeader event="whatsapp_home_header" />
    <section className="aq-hero" id="contenido">
      <div className="aq-hero-copy">
        <p className="aq-label">TU LAVANDERÍA EN MAR DEL PLATA</p>
        <h1>Menos ropa pendiente.<br /><span>Más tiempo<br />para vos.</span></h1>
        <p className="aq-lead">Nos ocupamos de lavar, secar y doblar. Y si una prenda te da dudas, te ayudamos a elegir el cuidado indicado.</p>
        <div className="aq-actions"><WhatsAppLink className="aq-button" message="Hola Aquabon, quiero consultar por el lavado de mi ropa y la disponibilidad de retiro y entrega. Mi zona es: " event="whatsapp_home_hero">Quiero resolver mi lavado</WhatsAppLink><a className="aq-textlink" href="#servicios">Ver qué podemos lavar</a></div>
        <p className="aq-hero-note">Traela al local o consultá por retiro y entrega.</p>
      </div>
      <figure className="aq-hero-photo"><img src="/laundry-hero-v2.webp" width="1536" height="1024" alt="Ropa doblada y textiles en tonos blancos y azules" fetchPriority="high" /><figcaption><span>DE LA BOLSA AL PLACARD</span><strong>Lavada. Seca. Doblada.</strong><span>Vos seguís con tu día.</span></figcaption></figure>
    </section>
    <section className="aq-delivery" id="retiro"><div><p className="aq-label">¿NO TENÉS TIEMPO DE VENIR?</p><h2>Lo coordinamos por WhatsApp.</h2><p>Retiro y entrega según tu zona y disponibilidad. Consultá el costo y el plazo antes de coordinar.</p><WhatsAppLink className="aq-button aq-button-white" message="Hola Aquabon, quiero consultar retiro y entrega. Mi dirección es: " event="whatsapp_retiro_entrega">Consultar mi zona</WhatsAppLink></div><ol><li><span>01</span><div><h3>Contanos qué necesitás lavar</h3><p>Tu ropa, la cantidad aproximada y tu ubicación.</p></div></li><li><span>02</span><div><h3>Acordamos los detalles</h3><p>Te confirmamos servicio, importe y plazo.</p></div></li><li><span>03</span><div><h3>Nos ocupamos de tu ropa</h3><p>Te avisamos por WhatsApp cuando esté lista.</p></div></li></ol></section>
    <section className="aq-services aq-section" id="servicios"><div className="aq-section-heading"><div><p className="aq-label">¿QUÉ TENÉS PENDIENTE?</p><h2>Un cuidado para<br />cada tipo de prenda.</h2></div><p>De la ropa de la semana a las prendas que necesitan una atención especial.</p></div><div className="aq-service-grid">{services.map(service => <Link className="aq-service-card" href={service.href} key={service.href}><div className="aq-card-head"><ServiceIcon name={service.name} /><span>{service.subtitle}</span></div><h3>{service.title}</h3><p>{service.copy}</p><span className="aq-card-link">Conocer el servicio</span></Link>)}</div><div className="aq-more"><h3>También lo resolvemos</h3><div>{extraServices.map(([title,copy,href]) => <Link href={href} key={href}><strong>{title}</strong><span>{copy}</span></Link>)}</div></div></section>
    <section className="aq-care"><figure><img src="/blog/revisar-tapado-etiqueta-forro.webp" width="1200" height="800" alt="Revisión del tejido y la etiqueta de una prenda antes de limpiarla" loading="lazy" /></figure><div className="aq-care-copy"><p className="aq-label">NO HACE FALTA QUE SEAS EXPERTO</p><h2>¿Esto se puede<br />lavar en casa?</h2><p>Si no entendés la etiqueta, no sabés cómo tratar una mancha o te preocupa arruinar una prenda, consultanos.</p><p><strong>Mandanos una foto de la prenda y de su etiqueta.</strong> Te orientamos y, si hace falta, la revisamos en el local antes de confirmar el tratamiento.</p><WhatsAppLink className="aq-button" message="Hola Aquabon, tengo una duda sobre cómo limpiar una prenda. Les voy a enviar una foto de la prenda y de su etiqueta." event="whatsapp_home_prenda">Consultar por mi prenda</WhatsAppLink><Link className="aq-textlink" href="/blog">Prefiero leer las guías de cuidado</Link></div></section>
    <section className="aq-faq aq-section"><div><p className="aq-label">ANTES DE TRAER TU ROPA</p><h2>Las dudas,<br />bien claras.</h2></div><div><details><summary>¿Cuánto cuesta y cuándo está listo?</summary><p>Depende del servicio, la cantidad y las características de la prenda. Escribinos con lo que necesitás lavar para consultar el importe y el plazo antes de dejarlo.</p></details><details><summary>¿Retiran y entregan a domicilio?</summary><p>Coordinamos según tu zona y nuestra disponibilidad. Mandanos tu dirección por WhatsApp para consultar cobertura, costo y horarios.</p></details><details><summary>¿Y si no sé qué servicio necesita mi prenda?</summary><p>Podés enviarnos una foto de la prenda y de la etiqueta. Si necesitamos verla en persona, te lo indicamos. La composición y el estado de la prenda ayudan a definir el tratamiento.</p></details></div></section>
    <LocationBlock />
    <section className="aq-final"><div><p className="aq-label">UNA TAREA MENOS PARA HOY</p><h2>Tu ropa pendiente<br />empieza con un mensaje.</h2></div><WhatsAppLink className="aq-button aq-button-white" message="Hola Aquabon, quiero consultar por el lavado de mi ropa." event="whatsapp_home_final">Hablar con Aquabon</WhatsAppLink></section>
    <SiteFooter />

  </main>;
}

