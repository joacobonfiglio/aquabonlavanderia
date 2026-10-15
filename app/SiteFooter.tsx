import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import { Waves } from "./Blocks";
import { Brand, WhatsAppIcon } from "./ui";
import { business, hours, services, businessLinks, mapsDirections, mapsEmbed, TRAKA_URL } from "./site";

export default function SiteFooter() {
  return <footer className="ftr">
    <section className="ftr-cta" aria-labelledby="ftr-cta-titulo">
      <Waves className="waves--top" />
      <div className="wrap ftr-cta__grid">
        <div>
          <h2 id="ftr-cta-titulo">¿Qué tenés para lavar esta semana?</h2>
          <p>Escribinos y te decimos qué servicio conviene, cuánto sale y cuándo está.</p>
          <WhatsAppLink className="btn btn--light btn--xl" message="Hola Aquabon, quiero consultar por el lavado de mi ropa." event="whatsapp_footer_cta"><WhatsAppIcon />Escribinos por WhatsApp</WhatsAppLink>
        </div>
        <div className="ftr-map" id="ubicacion">
          <h2>Dónde estamos</h2>
          <address>
            <strong>{business.street}, {business.city}</strong>
            {hours.map(h => <span key={h.label}>{h.label}: {h.text}</span>)}
          </address>
          <div className="ftr-map__frame">
            <iframe src={mapsEmbed} title={`Mapa: ${business.name}, ${business.address}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <a className="link link--light" href={mapsDirections} target="_blank" rel="noreferrer">Cómo llegar con Google Maps</a>
        </div>
      </div>
    </section>
    <div className="wrap ftr__main">
      <div className="ftr__grid">
        <div>
          <Link href="/" className="brand-link"><Brand /></Link>
          <address>
            {business.street}, {business.city}<br />
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
