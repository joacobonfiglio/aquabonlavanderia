"use client";

import { useEffect } from "react";
import Link from "next/link";
import { GTM_ID } from "./site";

type Gtag = (...args: unknown[]) => void;
const w = () => window as typeof window & { gtag?: Gtag; dataLayer?: unknown[] };
const push = (data: Record<string, unknown>) => w().dataLayer?.push(data);

// Eventos para GTM (dataLayer). En GTM: activador "Evento personalizado" con el nombre del evento
// y una etiqueta "Evento de GA4" que mande cta y lead_type. Un único listener para toda la web:
// - whatsapp_click: cualquier link a wa.me (parámetro cta = data-event del botón)
// - phone_click, directions_click, instagram_click
// lead_type separa consultas de empresas (/empresas/...) de particulares.
function track(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!a) return;
  const href = a.href;
  const params = {
    cta: a.dataset.event ?? "sin_nombre",
    lead_type: location.pathname.startsWith("/empresas") ? "empresa" : "particular",
  };
  if (href.startsWith("https://wa.me/")) push({ event: "whatsapp_click", ...params });
  else if (href.startsWith("tel:")) push({ event: "phone_click", ...params });
  else if (/google\.[^/]+\/maps/.test(href)) push({ event: "directions_click", ...params });
  else if (href.includes("instagram.com")) push({ event: "instagram_click", ...params });
}

function choose(value: "granted" | "denied") {
  try { localStorage.setItem("aq-consent", value); } catch {}
  w().gtag?.("consent", "update", { analytics_storage: value });
  push({ event: "consent_update", analytics_storage: value });
  document.documentElement.dataset.consent = value;
}

export default function Analytics() {
  useEffect(() => {
    if (!GTM_ID) return;
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, []);
  if (!GTM_ID) return null;
  return <div className="consent" role="region" aria-label="Aviso de cookies">
    <p>Usamos Google Analytics para saber qué páginas sirven y mejorar la web. <Link href="/politica-de-cookies">Más info</Link></p>
    <div className="consent__actions">
      <button type="button" className="btn btn--azul" onClick={() => choose("granted")}>Aceptar</button>
      <button type="button" className="btn consent__no" onClick={() => choose("denied")}>No, gracias</button>
    </div>
  </div>;
}
