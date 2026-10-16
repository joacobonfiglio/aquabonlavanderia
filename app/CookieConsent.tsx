"use client";

import Link from "next/link";
import { GA_ID } from "./ga";

type Gtag = (...args: unknown[]) => void;

function choose(value: "granted" | "denied") {
  try { localStorage.setItem("aq-consent", value); } catch {}
  (window as typeof window & { gtag?: Gtag }).gtag?.("consent", "update", { analytics_storage: value });
  document.documentElement.dataset.consent = value;
}

// Aviso de cookies: solo existe cuando GA está activo y se ve mientras no haya una elección guardada.
export default function CookieConsent() {
  if (!GA_ID) return null;
  return <div className="consent" role="region" aria-label="Aviso de cookies">
    <p>Usamos Google Analytics para saber qué páginas sirven y mejorar la web. <Link href="/politica-de-cookies">Más info</Link></p>
    <div className="consent__actions">
      <button type="button" className="btn btn--azul" onClick={() => choose("granted")}>Aceptar</button>
      <button type="button" className="btn consent__no" onClick={() => choose("denied")}>No, gracias</button>
    </div>
  </div>;
}

// Botón de la política de cookies: borra la elección guardada y vuelve a mostrar el aviso.
export function ConsentReset() {
  if (!GA_ID) return null;
  return <p><button type="button" className="btn btn--azul" onClick={() => {
    try { localStorage.removeItem("aq-consent"); } catch {}
    (window as typeof window & { gtag?: Gtag }).gtag?.("consent", "update", { analytics_storage: "denied" });
    document.documentElement.dataset.consent = "pending";
  }}>Cambiar mi elección de cookies</button></p>;
}
