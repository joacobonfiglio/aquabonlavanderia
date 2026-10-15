"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import WhatsAppLink from "./WhatsAppLink";
import { WhatsAppIcon } from "./ui";

const services: Record<string, string> = {
  "valet-de-ropa": "el valet de ropa", "lavado-de-acolchados": "el lavado de un acolchado", tintoreria: "una prenda de tintorería", planchado: "el servicio de planchado",
  "lavado-y-planchado-de-camisas": "el lavado y planchado de camisas", "tenido-de-prendas": "el teñido de una prenda", "arreglos-y-costura": "un arreglo de costura",
  "lavado-de-zapatillas": "el lavado de unas zapatillas", "lavado-de-camperas-y-tapados": "la limpieza de una campera o un tapado", "retiro-y-entrega-de-ropa": "retiro y entrega en mi zona",
};

// Botón flotante solo en mobile. Se esconde mientras haya un CTA principal de WhatsApp a la vista,
// así nunca hay dos botones iguales en pantalla ni tapa el que ya está.
export default function WhatsAppContact() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-primary-cta]"));
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
      setHidden(visible.size > 0);
    });
    targets.forEach(t => io.observe(t));
    return () => { io.disconnect(); setHidden(false); };
  }, [pathname]);
  const service = services[pathname?.split("/").at(-1) || ""];
  const message = service ? `Hola Aquabon, quiero consultar por ${service}.` : "Hola Aquabon, quería hacer una consulta.";
  return <WhatsAppLink className="wa-float" data-hidden={hidden ? "true" : "false"} message={message} event="whatsapp_floating" aria-label="Escribinos por WhatsApp">
    <WhatsAppIcon /><span aria-hidden="true">WhatsApp</span>
  </WhatsAppLink>;
}
