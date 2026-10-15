import type { CareSymbolName } from "./site";

// Marca: las tres olas de la fachada, en los tonos del logo.
export function WavesMark() {
  return <svg viewBox="0 0 38 26" aria-hidden="true" focusable="false">
    <path d="M1 8c4.5-4 8.5-4 12.5 0s8.5 4 12.5 0 8.5-4 11 0V0H1z" fill="#c9d9ee" />
    <path d="M1 16c4.5-4 8.5-4 12.5 0s8.5 4 12.5 0 8.5-4 11 0V8c-2.5-4-6.5-4-11 0s-8.5 4-12.5 0S5.5 4 1 8z" fill="#6f94cd" />
    <path d="M1 26h36V16c-2.5-4-6.5-4-11 0s-8.5 4-12.5 0S5.5 12 1 16z" fill="#12285f" />
  </svg>;
}

export function Brand() {
  return <span className="brand">
    <WavesMark />
    <span><b>Aquabon</b><small>Lavandería</small></span>
  </span>;
}

// Símbolos de cuidado textil (estilo ISO 3758), dibujados a línea.
export function CareSymbol({ name, className = "care", title }: { name: CareSymbolName; className?: string; title?: string }) {
  const common = { viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className, role: title ? "img" : undefined, "aria-label": title, "aria-hidden": title ? undefined : true };
  switch (name) {
    case "wash":
      return <svg {...common}><path d="M4 10l3 15h18l3-15" /><path d="M3 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0 3-1.5 2-1" /><path d="M10 18c2-1.5 4-1.5 6 0s4 1.5 6 0" /></svg>;
    case "handwash":
      return <svg {...common}><path d="M4 12l3 13h18l3-13" /><path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" /><path d="M12 12V6.5a1.5 1.5 0 013 0V11m0-3.5a1.5 1.5 0 013 0V11m0-2a1.5 1.5 0 013 0V13" /></svg>;
    case "tumble":
      return <svg {...common}><rect x="4" y="4" width="24" height="24" rx="1.5" /><circle cx="16" cy="16" r="8" /></svg>;
    case "line":
      return <svg {...common}><rect x="4" y="4" width="24" height="24" rx="1.5" /><path d="M8 4c2 4.5 5 6.5 8 6.5S22 8.5 24 4" /></svg>;
    case "dryclean":
      return <svg {...common}><circle cx="16" cy="16" r="11" /><path d="M13.5 21.5V10.5h3.5a3 3 0 010 6h-3.5" /></svg>;
    case "iron":
      return <svg {...common}><path d="M4 24h22c0-7-3-12-9-12h-5" /><path d="M12 12l-1-4h10" /><path d="M4 24c1.5-5 4-8.5 8-12" /><circle cx="15" cy="19.5" r="1" fill="currentColor" stroke="none" /></svg>;
  }
}

export function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.52 3.45A11.81 11.81 0 0012.04 0C5.5 0 .17 5.33.17 11.87c0 2.09.55 4.13 1.58 5.93L.07 24l6.34-1.66a11.87 11.87 0 005.63 1.43h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.24-6.15-3.4-8.45zM12.05 21.77h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.76.98 1-3.66-.23-.38a9.83 9.83 0 01-1.51-5.25c0-5.44 4.42-9.86 9.87-9.86 2.64 0 5.11 1.03 6.98 2.89a9.8 9.8 0 012.88 6.98c0 5.44-4.42 9.9-9.83 9.9zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35z" /></svg>;
}

export function PinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false"><path d="M12 22s7-6.6 7-12.5A7 7 0 005 9.5C5 15.4 12 22 12 22z" /><circle cx="12" cy="9.5" r="2.5" /></svg>;
}
