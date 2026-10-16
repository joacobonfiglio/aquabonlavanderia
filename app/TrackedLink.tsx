"use client";

import type { AnchorHTMLAttributes } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { GA_ID, servicioFromPath } from "./ga";

export type TrackedEvent = "click_whatsapp" | "click_telefono" | "click_como_llegar";

// Link que manda un evento a GA4 al hacer clic. Es el único componente cliente de la medición:
// las páginas siguen siendo Server Components. Si no se pasa "servicio", se toma de la URL actual.
export default function TrackedLink({ gaEvent, ubicacion, servicio, onClick, ...props }: {
  gaEvent: TrackedEvent; ubicacion: string; servicio?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} onClick={e => {
    onClick?.(e);
    if (!GA_ID) return;
    const s = servicio ?? servicioFromPath(location.pathname);
    sendGAEvent("event", gaEvent, { ubicacion, ...(s ? { servicio: s } : {}) });
  }} />;
}
