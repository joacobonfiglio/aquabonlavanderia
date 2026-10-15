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
  const [ctaVisible, setCtaVisible] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  // Al bajar leyendo se esconde para no tapar texto; al subir o llegar al final, vuelve.
  useEffect(() => {
    let last = window.scrollY, frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const atEnd = window.innerHeight + y >= document.documentElement.scrollHeight - 80;
        if (Math.abs(y - last) > 8) { setScrollingDown(y > last && y > 120 && !atEnd); last = y; }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-primary-cta]"));
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
      setCtaVisible(visible.size > 0);
    });
    targets.forEach(t => io.observe(t));
    return () => { io.disconnect(); setCtaVisible(false); };
  }, [pathname]);
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
  const service = services[pathname?.split("/").at(-1) || ""];
  const message = service ? `Hola Aquabon, quiero consultar por ${service}.` : "Hola Aquabon, quería hacer una consulta.";
  const hidden = ctaVisible || scrollingDown;
  return <WhatsAppLink className="wa-float" data-hidden={hidden ? "true" : "false"} aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : undefined} message={message} event="whatsapp_floating" aria-label="Escribinos por WhatsApp">
    <WhatsAppIcon /><span aria-hidden="true">WhatsApp</span>
  </WhatsAppLink>;
}
