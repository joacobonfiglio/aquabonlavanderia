"use client";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackContact } from "./analytics";
export default function WhatsAppLink({ message, event, children, onClick, ...props }: {
  message: string; event: string; children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const href = "https://wa.me/5492235607738?text=" + encodeURIComponent(message);
  return <a {...props} href={href} target="_blank" rel="noreferrer" data-event={event}
    onClick={e => { onClick?.(e); if (!e.defaultPrevented) trackContact("whatsapp_click", event); }}>{children}</a>;
}
