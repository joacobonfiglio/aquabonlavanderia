import type { AnchorHTMLAttributes, ReactNode } from "react";
import TrackedLink from "./TrackedLink";
import { whatsappHref } from "./site";

// Link a WhatsApp con mensaje precargado. Manda el evento click_whatsapp a GA4 con
// "ubicacion" (dónde está el botón) y "servicio" (explícito o deducido de la URL).
export default function WhatsAppLink({ message, ubicacion, servicio, children, ...props }: {
  message: string; ubicacion: string; servicio?: string; children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return <TrackedLink {...props} gaEvent="click_whatsapp" ubicacion={ubicacion} servicio={servicio} href={whatsappHref(message)} target="_blank" rel="noreferrer">{children}</TrackedLink>;
}
