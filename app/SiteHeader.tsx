import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";

const services = [
  ["Todos los servicios", "/servicios"],
  ["Valet de ropa", "/servicios/valet-de-ropa"],
  ["Lavado de acolchados", "/servicios/lavado-de-acolchados"],
  ["Tintorería", "/servicios/tintoreria"],
  ["Teñido de prendas", "/servicios/tenido-de-prendas"],
  ["Arreglos y costura", "/servicios/arreglos-y-costura"],
  ["Lavado de zapatillas", "/servicios/lavado-de-zapatillas"],
];

export default function SiteHeader({ event = "whatsapp_header" }: { event?: string }) {
  return <header className="nav-shell">
    <Link className="brand" href="/" aria-label="Aquabon Lavandería, ir al inicio">
      <span className="brand-main">AQUABON</span><span className="brand-sub">LAVANDERÍA</span>
    </Link>
    <nav aria-label="Navegación principal">
      <details className="services-menu"><summary>Servicios <span aria-hidden="true">⌄</span></summary>
        <div className="services-dropdown">{services.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      </details>
      <WhatsAppLink className="nav-cta" message="Hola Aquabon, quería consultar por un servicio." event={event}>Contactar <span aria-hidden="true">↗</span></WhatsAppLink>
    </nav>
    <details className="mobile-menu"><summary aria-label="Abrir menú"><span /><span /></summary>
      <div><strong>Servicios</strong>{services.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <WhatsAppLink className="mobile-menu-cta" message="Hola Aquabon, quería consultar por un servicio." event={event}>Consultar por WhatsApp ↗</WhatsAppLink>
      </div>
    </details>
  </header>;
}
