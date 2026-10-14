"use client";
import type { AnchorHTMLAttributes } from "react";
import { trackContact } from "./analytics";
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { event: "directions_click"; placement: string };
export default function TrackedLink({ event, placement, onClick, ...props }: Props) {
  return <a {...props} onClick={e => { onClick?.(e); if (!e.defaultPrevented) trackContact(event, placement); }} />;
}
