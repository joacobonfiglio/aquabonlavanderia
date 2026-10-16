"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import WhatsAppLink from "./WhatsAppLink";
import { WhatsAppIcon } from "./ui";

const services: Record<string, string> = {
  "valet-de-ropa": "el valet de ropa", "lavado-de-acolchados": "el lavado de un acolchado", tintoreria: "una prenda de tintorería", planchado: "el servicio de planchado",
  "lavado-y-planchado-de-camisas": "el lavado y planchado de camisas", "tenido-de-prendas": "el teñido de una prenda", "arreglos-y-costura": "un arreglo de costura",
  "lavado-de-zapatillas": "el lavado de unas zapatillas", "lavado-de-camperas-y-tapados": "la limpieza de una campera o un tapado", "retiro-y-entrega-de-ropa": "retiro y entrega en mi zona",
};

// Botón flotante de WhatsApp: siempre visible, abajo a la derecha, en celular y en compu.
// El mensaje cambia según la página. La analítica de todos los links de WhatsApp se registra acá.
export default function WhatsAppContact() {
  const pathname = usePathname();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[data-event]") as HTMLAnchorElement | null;
      if (!a) return;
      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", a.dataset.event, { event_category: "whatsapp", link_url: a.href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  const slug = pathname?.split("/").at(-1) || "";
  const service = services[slug];
  const isBusiness = pathname?.startsWith("/empresas");
  const message = service ? `Hola Aquabon, quiero consultar por ${service}.`
    : isBusiness ? "Hola Aquabon, quería consultar por un servicio de lavandería para mi negocio."
    : "Hola Aquabon, quería hacer una consulta.";
  return <WhatsAppLink className="wa-fab" message={message} event="whatsapp_floating" aria-label="Escribinos por WhatsApp">
    <span className="wa-fab__icon"><WhatsAppIcon /><i aria-hidden="true" /></span>
    <span className="wa-fab__text" aria-hidden="true"><strong>¿Te ayudamos?</strong><small>Escribinos por WhatsApp</small></span>
  </WhatsAppLink>;
}
