import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import { Brand } from "./ui";
import { business, hours, services, businessLinks, TRAKA_URL } from "./site";

export default function SiteFooter() {
  return <footer className="ftr">
    <div className="wrap">
      <div className="ftr__grid">
        <div>
          <Link href="/" style={{ textDecoration: "none" }}><Brand /></Link>
          <address>
            {business.street}, {business.city}<br />
            {hours.map(h => <span key={h.label}>{h.label}: {h.text}<br /></span>)}
            <WhatsAppLink message="Hola Aquabon, quería hacer una consulta." event="whatsapp_footer">WhatsApp {business.phoneDisplay}</WhatsAppLink><br />
            <a href={business.instagram} rel="noreferrer" target="_blank">Instagram {business.instagramHandle}</a><br />
            <a href={business.googleBusiness} rel="noreferrer" target="_blank">Perfil en Google</a>
          </address>
        </div>
        <nav aria-label="Servicios">
          <h2>Servicios</h2>
          <ul>{services.map(s => <li key={s.href}><Link href={s.href}>{s.name}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Empresas">
          <h2>Para empresas</h2>
          <ul>
            <li><Link href="/empresas">Todos los servicios</Link></li>
            {businessLinks.map(s => <li key={s.href}><Link href={s.href}>{s.name}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Aquabon">
          <h2>Aquabon</h2>
          <ul>
            <li><Link href="/lavanderia-mar-del-plata">Lavandería en Mar del Plata</Link></li>
            <li><Link href="/lavanderia-centro-mar-del-plata">Lavandería en el centro</Link></li>
            <li><Link href="/tintoreria-centro-mar-del-plata">Tintorería en el centro</Link></li>
            <li><Link href="/blog">Guías para cuidar tu ropa</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
          </ul>
        </nav>
      </div>
      <div className="ftr__base">
        <p className="ftr__legal">© {business.name}. <Link href="/politica-de-privacidad">Privacidad</Link> <Link href="/politica-de-cookies">Cookies</Link> <Link href="/terminos-y-condiciones">Términos y condiciones</Link></p>
        <p className="ftr__credit">Diseño y desarrollo: {TRAKA_URL ? <a href={TRAKA_URL} rel="noreferrer" target="_blank">Traka</a> : <span>Traka</span>}</p>
      </div>
    </div>
  </footer>;
}
