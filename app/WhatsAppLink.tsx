"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

export default function WhatsAppLink({ message, event, children, ...props }: {
  message: string; event: string; children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const href = "https://wa.me/5492235607738?text=" + encodeURIComponent(message);
  return <a {...props} href={href} target="_blank" rel="noreferrer" data-event={event}
    onClick={() => {
      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", event, { event_category: "whatsapp", link_url: href });
    }}>{children}</a>;
}
