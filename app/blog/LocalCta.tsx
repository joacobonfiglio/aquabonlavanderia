import Link from "next/link";
import WhatsAppLink from "../WhatsAppLink";
import { WhatsAppIcon } from "../ui";
import { servicioFromPath } from "../ga";
import { pickupZonesShort } from "../site";
import { serviceInfo, type ServiceKey } from "./service-info";

// Bloque fijo de todas las guías, antes de las preguntas frecuentes (plan de SEO del 07/11/2026).
// Objetivo: que una guía informativa que lee alguien de cualquier país siga sirviendo para que
// quien está en Mar del Plata llegue a un servicio y a WhatsApp.
export default function LocalCta({ service, children }: { service: ServiceKey; children?: React.ReactNode }) {
  const info = serviceInfo[service];
  return <section className="article-local" aria-labelledby="lo-hacemos-mdp">
    <h2 id="lo-hacemos-mdp">¿Estás en Mar del Plata? Lo hacemos por vos</h2>
    <p>{children ?? info.local}</p>
    <p className="article-local__actions">
      <WhatsAppLink className="btn btn--azul" message={info.message} ubicacion="guia" servicio={servicioFromPath(info.path)}><WhatsAppIcon />Consultar por WhatsApp</WhatsAppLink>
      <Link className="link" href={info.path}>{info.name} en Mar del Plata</Link>
    </p>
    <p className="article-local__zonas">Estamos en Gascón 2189 y retiramos en {pickupZonesShort}. <Link className="link" href="/lavanderia-mar-del-plata">Ver todos los barrios donde retiramos</Link>.</p>
  </section>;
}
