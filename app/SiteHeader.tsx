import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import ServicesMenu from "./ServicesMenu";
import Img from "./Img";
import { Brand, WhatsAppIcon } from "./ui";
import { services } from "./site";

const nav = [
  { label: "Empresas", href: "/empresas" },
  { label: "Guías", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const message = "Hola Aquabon, quería hacer una consulta.";
  return <header className="hdr" data-overlay={overlay ? "true" : undefined}>
    <div className="wrap">
      <Link href="/" className="brand-link"><Brand /></Link>
      <nav className="hdr__nav" aria-label="Principal">
        <ServicesMenu />
        {nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <WhatsAppLink className="btn btn--azul" message={message} ubicacion="header"><WhatsAppIcon />Escribinos</WhatsAppLink>
      </nav>
      <details className="hdr__menu">
        <summary><span className="sr-only">Abrir menú</span><i aria-hidden="true" /><i aria-hidden="true" /></summary>
        <nav className="hdr__panel" aria-label="Menú">
          <details className="hdr__acc" open>
            <summary>Servicios</summary>
            <ul className="hdr__svc">
              {services.map(s => <li key={s.href}><Link href={s.href}><Img src={s.image} alt="" width={64} height={48} sizes="64px" /><span>{s.name}</span></Link></li>)}
            </ul>
          </details>
          <Link href="/empresas">Para empresas</Link>
          <Link href="/blog">Guías para cuidar tu ropa</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/lavanderia-mar-del-plata">Dónde estamos</Link>
          <WhatsAppLink className="btn btn--azul" message={message} ubicacion="menu_movil"><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
        </nav>
      </details>
    </div>
  </header>;
}
