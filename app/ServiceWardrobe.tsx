"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import styles from "./home-test.module.css";
const services = [
  { name: "Valet de ropa", line: "Tu semana, sin esa bolsa", description: "Lavado, secado y doblado de tu ropa cotidiana. El planchado se consulta por separado.", image: "/laundry-detail-v2.webp", alt: "Camisas y toallas dobladas junto a una canasta de ropa", width: 1122, height: 1402, path: "/servicios/valet-de-ropa", code: "VA", message: "Hola Aquabon, quiero consultar por valet de ropa. La cantidad aproximada es: " },
  { name: "Lavado de acolchados", line: "Lo grande también se resuelve", description: "De una plaza, dos plazas y king size. Revisamos tejido, etiqueta y relleno antes de confirmar el cuidado.", image: "/blog/revisar-cuando-lavar-acolchado.webp", alt: "Revisión de un acolchado blanco sobre una cama", width: 1400, height: 788, path: "/servicios/lavado-de-acolchados", code: "AC", message: "Hola Aquabon, quiero consultar por un acolchado. Su tamaño y relleno son: " },
  { name: "Tintorería", line: "Para esa prenda especial", description: "Recibimos y hacemos el seguimiento de prendas que necesitan tratamiento especializado. Primero evaluamos cada pieza.", image: "/blog/revisar-prendas-tintoreria.webp", alt: "Revisión del tejido de un saco antes de su cuidado especializado", width: 1400, height: 788, path: "/servicios/tintoreria", code: "TI", message: "Hola Aquabon, quiero consultar por una prenda de tintorería. La prenda es: " },
  { name: "Planchado", line: "El último detalle de tu look", description: "Camisas y prendas aptas para planchado. Consultá por tejido y cantidad, con o sin lavado.", image: "/services/planchado-v3.webp", alt: "Plancha de vapor sobre una camisa celeste", width: 1000, height: 1250, path: "/servicios/planchado", code: "PL", message: "Hola Aquabon, quiero consultar por planchado. Las prendas son: " },
];
export default function ServiceWardrobe() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const service = services[selected];
  return <section className={styles.wardrobe} id="servicios" aria-labelledby="wardrobe-title">
    <div className={styles.wardrobeHeading}><p className={styles.eyebrow}>CADA PRENDA TIENE SU FORMA</p><h2 id="wardrobe-title">Servicios de lavandería<br/><span>con el cuidado indicado</span></h2><p>Elegí lo que tenés pendiente.<br/>Nosotros te ayudamos a resolverlo.</p></div>
    <div className={styles.wardrobeBody}>
      <div className={styles.serviceLabels} role="tablist" aria-label="Elegí un servicio" aria-orientation="vertical">{services.map((item, index) => <button type="button" id={`service-tab-${index}`} aria-controls={`service-panel-${index}`} aria-selected={index === selected} role="tab" tabIndex={index === selected ? 0 : -1} ref={element=>{tabs.current[index]=element;}} key={item.code} className={index === selected ? styles.selectedLabel : undefined} onClick={()=>setSelected(index)} onKeyDown={event=>{
        let next = index;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") next=(index+1)%services.length;
        else if(event.key === "ArrowUp" || event.key === "ArrowLeft") next=(index-1+services.length)%services.length;
        else if(event.key === "Home") next=0; else if(event.key === "End") next=services.length-1; else return;
        event.preventDefault();setSelected(next);tabs.current[next]?.focus();
      }}><span className={styles.labelNumber}>0{index+1}</span><span>{item.name}</span><span aria-hidden="true">↗</span></button>)}</div>
      {services.map((item,index)=><div key={item.code} id={`service-panel-${index}`} role="tabpanel" aria-labelledby={`service-tab-${index}`} hidden={index!==selected} className={styles.serviceScene} tabIndex={0}>
        {index===selected ? <><figure className={styles.servicePhoto}><img src={service.image} alt={service.alt} width={service.width} height={service.height} loading="lazy" decoding="async"/><figcaption>AQUABON / {service.code} / CUIDADO DE PRENDAS</figcaption></figure><div className={styles.orderLabel}><span className={styles.labelHole} aria-hidden="true"/><span className={styles.eyebrow}>UNA TAREA MENOS</span><h3>{service.line}</h3><p>{service.description}</p><div className={styles.labelLinks}><WhatsAppLink message={service.message} event={`whatsapp_home_service_${service.code.toLowerCase()}`}>Consultar por WhatsApp ↗</WhatsAppLink><Link href={service.path}>Qué incluye el servicio →</Link></div><div className={styles.barcode} aria-hidden="true"/><small>GASCÓN 2189 · MAR DEL PLATA</small></div></> : null}
      </div>)}
    </div>
    <div className={styles.clothesline}><span>TAMBIÉN CUIDAMOS</span><Link href="/servicios/lavado-de-zapatillas">Tus zapatillas <b>↗</b></Link><Link href="/servicios/lavado-de-camperas-y-tapados">Tu abrigo <b>↗</b></Link><Link href="/servicios/tenido-de-prendas">Tu color <b>↗</b></Link><Link href="/servicios/arreglos-y-costura">Esa costura <b>↗</b></Link><Link href="/servicios/lavado-y-planchado-de-camisas">Tus camisas <b>↗</b></Link></div>
  </section>;
}
