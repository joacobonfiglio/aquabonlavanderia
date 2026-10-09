import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import Breadcrumbs from "./Breadcrumbs";
import { serviceDesigns } from "./service-design";
import styles from "./service.module.css";

const valet = { name: "Valet de ropa", image: "/service-still-v2.webp", alt: "Ropa cotidiana lavada, seca y doblada", intro: "Lavado, secado y doblado para sacarte una tarea de encima.", path: "/servicios/valet-de-ropa" };
const intros: Record<string, string> = {
  "lavado-de-acolchados": "Acolchados, cubrecamas y frazadas: cuidado según volumen, tejido y relleno.", tintoreria: "Recepción, evaluación y seguimiento de prendas que requieren cuidado especializado.", planchado: "Camisas y prendas aptas para planchado, con una terminación cuidada.", "lavado-y-planchado-de-camisas": "Lavado y terminación de camisas, previa revisión de tejido, etiqueta y manchas.", "tenido-de-prendas": "Evaluación para recuperar o cambiar el color de una prenda.", "arreglos-y-costura": "Pequeñas reparaciones y ajustes, sujetos a revisión presencial.", "lavado-de-zapatillas": "Limpieza y secado según el material y el estado de tu par.", "lavado-de-camperas-y-tapados": "El proceso indicado para cada abrigo, por fuera y por dentro.", "retiro-y-entrega-de-ropa": "Menos traslados: consultá disponibilidad para tu dirección y tu pedido."
};
export default function ServiceCatalog() {
  const cards = [valet, ...Object.entries(serviceDesigns).map(([key, design]) => ({ ...design, intro: intros[key], path: "/servicios/" + key }))];
  return <div className={`aq-renew ${styles.page}`}><a className="aq-skip" href="#servicios-contenido">Saltar al contenido</a><SiteHeader /><main id="servicios-contenido"><div className={styles.breadcrumbs}><Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }]} /></div>
    <section className={styles.catalogHeader}><p className={styles.label}>SERVICIOS AQUABON · MAR DEL PLATA</p><h1>Cada prenda, <span>su cuidado.</span></h1><p>Del lavado de todos los días a ese detalle especial. Encontrá lo que necesitás y conocé cómo podemos ayudarte en Gascón 2189.</p></section>
    <section className={styles.catalogGrid} aria-label="Elegí un servicio">{cards.map((card, i) => <Link className={styles.catalogCard} key={card.path} href={card.path}><div className={styles.catalogPhoto}><Image src={card.image} alt={card.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw" preload={i < 3} /></div><h2>{card.name}</h2><p>{card.intro}</p><span>Conocer el servicio ↗</span></Link>)}</section>
    <section className={styles.catalogHelp}><div><p className={styles.label}>¿NO SABÉS CUÁL ELEGIR?</p><h2>Empecemos por tu prenda.</h2><p>Mandanos una foto y contanos qué necesitás. Te orientamos y confirmamos el tratamiento al evaluar el pedido.</p></div><WhatsAppLink className={styles.button} message="Hola Aquabon, quiero saber qué servicio necesita mi prenda. Puedo enviar una foto." event="whatsapp_services_guide">Ayudame a elegir</WhatsAppLink></section>
  </main><SiteFooter /></div>;
}
