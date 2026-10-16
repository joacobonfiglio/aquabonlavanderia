/* eslint-disable @next/next/no-img-element -- miniaturas pre-generadas en /img (ver scripts/optimize-images.mjs). */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services, whatsappHref } from "./site";

const thumb = (src: string) => "/img" + src.replace(/\.[a-z]+$/, "") + "-480.webp";

// Menú desplegable de servicios con foto. Se abre con click/tap o al pasar el mouse (solo con puntero fino).
export default function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); root.current?.querySelector("button")?.focus(); } };
    const onDown = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onDown); };
  }, [open]);
  const fine = () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const enter = () => { if (!fine()) return; window.clearTimeout(timer.current); setOpen(true); };
  const leave = () => { if (!fine()) return; timer.current = window.setTimeout(() => setOpen(false), 140); };
  return <div className="mega" ref={root} onPointerEnter={enter} onPointerLeave={leave}>
    <button type="button" className="mega__trigger" aria-expanded={open} aria-controls="mega-servicios" onClick={() => setOpen(o => fine() ? true : !o)}>
      Servicios <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
    <div className="mega__panel" id="mega-servicios" data-open={open} onClick={e => { if ((e.target as Element).closest("a")) setOpen(false); }}>
      <ul className="mega__grid">
        {services.map(s => <li key={s.href}><Link href={s.href}>
          <img src={thumb(s.image)} alt="" width={96} height={72} loading="lazy" decoding="async" />
          <span><strong>{s.name}</strong><small>{s.short}</small></span>
        </Link></li>)}
      </ul>
      <aside className="mega__aside">
        <p>¿No sabés qué servicio necesita tu prenda?</p>
        <a className="btn btn--azul" href={whatsappHref("Hola Aquabon, quería consultar qué servicio necesita mi ropa.")} target="_blank" rel="noreferrer" data-event="whatsapp_megamenu">Mandanos una foto</a>
        <Link className="link link--light" href="/servicios">Ver todos los servicios</Link>
      </aside>
    </div>
  </div>;
}
