import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import { Brand, WhatsAppIcon } from "./ui";
import { services } from "./site";

const nav = [
  { label: "Servicios", href: "/servicios" },
  { label: "Empresas", href: "/empresas" },
  { label: "Guías", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function SiteHeader({ event = "whatsapp_header" }: { event?: string }) {
  const message = "Hola Aquabon, quería hacer una consulta.";
  return <header className="hdr">
    <div className="wrap">
      <Link href="/" className="brand-link" style={{ textDecoration: "none" }}><Brand /></Link>
      <nav className="hdr__nav" aria-label="Principal">
        {nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <WhatsAppLink className="btn" message={message} event={event}><WhatsAppIcon />Escribinos</WhatsAppLink>
      </nav>
      <details className="hdr__menu">
        <summary>Menú</summary>
        <nav className="hdr__panel" aria-label="Menú">
          <p>Servicios</p>
          {services.map(s => <Link key={s.href} href={s.href}>{s.name}</Link>)}
          <p>Aquabon</p>
          <Link href="/empresas">Para empresas</Link>
          <Link href="/blog">Guías para cuidar tu ropa</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/lavanderia-mar-del-plata">Dónde estamos</Link>
          <WhatsAppLink className="btn" message={message} event={event + "_menu"}><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
        </nav>
      </details>
    </div>
  </header>;
}
