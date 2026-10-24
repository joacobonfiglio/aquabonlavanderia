"use client";

import { usePathname } from "next/navigation";
import WhatsAppLink from "./WhatsAppLink";
import { WhatsAppIcon } from "./ui";

const services: Record<string, string> = {
  "lavanderia-guemes-mar-del-plata": "ropa y acolchados desde Güemes",
  "lavanderia-chauvin-mar-del-plata": "ropa y acolchados desde Chauvin",
  "lavanderia-la-perla-mar-del-plata": "ropa y acolchados desde La Perla",
  "valet-de-ropa": "el valet de ropa", "lavado-de-acolchados": "el lavado de un acolchado", tintoreria: "una prenda de tintorería", "limpieza-de-vestidos-de-fiesta": "la limpieza de un vestido de fiesta", planchado: "el servicio de planchado",
  "lavado-y-planchado-de-camisas": "el lavado y planchado de camisas", "tenido-de-prendas": "el teñido de una prenda", "arreglos-y-costura": "un arreglo de costura",
  "lavado-de-zapatillas": "el lavado de unas zapatillas", "lavado-de-camperas-y-tapados": "la limpieza de una campera o un tapado", "retiro-y-entrega-de-ropa": "retiro y entrega en mi zona",
};

// Botón flotante de WhatsApp: siempre visible, abajo a la derecha, en celular y en compu.
// El mensaje cambia según la página. Los clics se registran en Analytics.tsx.
export default function WhatsAppContact() {
  const pathname = usePathname();
  const slug = pathname?.split("/").at(-1) || "";
  const service = services[slug];
  const isBusiness = pathname?.startsWith("/empresas");
  const message = service ? `Hola Aquabon, quiero consultar por ${service}.`
    : isBusiness ? "Hola Aquabon, quería consultar por un servicio de lavandería para mi negocio."
    : "Hola Aquabon, quería hacer una consulta.";
  return <WhatsAppLink className="wa-fab" message={message} ubicacion="flotante" aria-label="Escribinos por WhatsApp">
    <span className="wa-fab__icon"><WhatsAppIcon /><i aria-hidden="true" /></span>
    <span className="wa-fab__text" aria-hidden="true"><strong>¿Te ayudamos?</strong><small>Escribinos por WhatsApp</small></span>
  </WhatsAppLink>;
}
