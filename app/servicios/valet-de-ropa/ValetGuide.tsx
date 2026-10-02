"use client";
import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import WhatsAppLink from "../../WhatsAppLink";
import styles from "./valet.module.css";
const groups = [
  { id: "cotidiana", label: "Ropa diaria", status: "EL PUNTO DE PARTIDA: TU VALET", title: "Lo que usás toda la semana.", examples: ["Remeras", "Pantalones", "Ropa interior", "Medias"], copy: "Ropa cotidiana apta para lavado con agua, siempre según la etiqueta. Informanos la cantidad y cualquier mancha o indicación especial antes de cerrar la bolsa.", note: "¿Una prenda te da dudas? Separala y consultanos.", cta: "Consultar por mi ropa", message: "Hola Aquabon, quiero consultar valet para ropa cotidiana. Tengo: __. ¿Cuál sería el importe y el plazo?" },
  { id: "hogar", label: "Textiles de casa", status: "CONSULTAMOS CANTIDAD Y VOLUMEN", title: "Toallas y sábanas, también se consultan.", examples: ["Toallas", "Sábanas", "Fundas"], copy: "Contanos cuántas piezas tenés y sus tamaños para confirmar el servicio, el importe y el plazo. Los acolchados necesitan un cuidado y un presupuesto por separado.", note: "¿Tenés un acolchado? Tiene su propio servicio.", href: "/servicios/lavado-de-acolchados", link: "Conocer el lavado de acolchados", cta: "Consultar mis textiles", message: "Hola Aquabon, quiero consultar el lavado de toallas y sábanas. Tengo esta cantidad y tamaños: __." },
  { id: "especial", label: "Prendas especiales", status: "MEJOR CONSULTAR ANTES", title: "Hay prendas que van por otro camino.", examples: ["Lana", "Sacos", "Prendas delicadas", "Limpieza en seco"], copy: "Separalas de la bolsa de valet. Mandanos una foto de la prenda y de su etiqueta para orientarte. Si necesitamos revisarla en el local, te lo indicamos antes de confirmar el tratamiento.", note: "El cuidado se elige por el tejido, la etiqueta y el estado.", href: "/servicios/tintoreria", link: "Conocer el servicio de tintorería", cta: "Consultar mi prenda", message: "Hola Aquabon, tengo una prenda especial y quiero saber qué servicio necesita. Les envío una foto de la prenda y de su etiqueta." },
];
export default function ValetGuide() {
  const [selected, setSelected] = useState(0);
  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % groups.length;
    else if (event.key === "ArrowLeft") next = (index + groups.length - 1) % groups.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = groups.length - 1;
    else return;
    event.preventDefault(); setSelected(next);
    document.getElementById(`valet-tab-${groups[next].id}`)?.focus();
  }
  return <div className={styles.guide}><div className={styles.tabs} role="tablist" aria-label="Tipo de ropa para lavar">{groups.map((group, index) => <button key={group.id} type="button" role="tab" id={`valet-tab-${group.id}`} aria-controls={`valet-panel-${group.id}`} aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => move(event, index)}>{group.label}</button>)}</div>
    {groups.map((group, index) => <div key={group.id} className={styles.guidePanel} role="tabpanel" id={`valet-panel-${group.id}`} aria-labelledby={`valet-tab-${group.id}`} hidden={selected !== index} tabIndex={0}><p className={styles.label}>{group.status}</p><h3>{group.title}</h3><ul className={styles.examples}>{group.examples.map(example => <li key={example}>{example}</li>)}</ul><p>{group.copy}</p><p className={styles.guideNote}>{group.note}</p><WhatsAppLink className={styles.button} message={group.message} event={`whatsapp_valet_${group.id}`}>{group.cta}</WhatsAppLink>{group.href ? <Link className={styles.textLink} href={group.href}>{group.link}</Link> : null}</div>)}
  </div>;
}
