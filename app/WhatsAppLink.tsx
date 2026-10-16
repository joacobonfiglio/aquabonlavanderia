import type { AnchorHTMLAttributes, ReactNode } from "react";
import { whatsappHref } from "./site";

// Link a WhatsApp con mensaje precargado. Sin JavaScript propio: el evento de analítica
// lo registra un único listener global (ver Analytics.tsx).
export default function WhatsAppLink({ message, event, children, ...props }: {
  message: string; event: string; children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return <a {...props} href={whatsappHref(message)} target="_blank" rel="noreferrer" data-event={event}>{children}</a>;
}
