import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";

const serviceLinks = [
  ["Valet de ropa", "/servicios/valet-de-ropa"], ["Lavado de acolchados", "/servicios/lavado-de-acolchados"],
  ["Retiro y entrega", "/servicios/retiro-y-entrega-de-ropa"],
  ["Tintorería", "/servicios/tintoreria"], ["Teñido de prendas", "/servicios/tenido-de-prendas"],
  ["Planchado", "/servicios/planchado"], ["Arreglos y costura", "/servicios/arreglos-y-costura"], ["Lavado de zapatillas", "/servicios/lavado-de-zapatillas"],
];
export default function SiteFooter() {
  return <footer className="site-footer seo-footer">
    <div className="site-footer-brand"><Link href="/">AQUABON</Link><p>Gascón 2189 · Mar del Plata</p><p>+54 9 223 560-7738</p><p>Lun–Vie 8:30–20 · Sáb 9–14</p></div>
    <nav className="site-footer-links" aria-label="Navegación del pie">
      <div><span>SERVICIOS</span>{serviceLinks.map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div>
      <div><span>LAVANDERÍA EN MAR DEL PLATA</span><Link href="/lavanderia-mar-del-plata">Lavandería en Mar del Plata</Link><Link href="/lavanderia-centro-mar-del-plata">Lavandería en el centro</Link><Link href="/blog">Guías para cuidar tu ropa</Link><Link href="/nosotros">Nosotros</Link></div>
      <div><span>PARA EMPRESAS</span><Link href="/empresas">Todos los servicios</Link><Link href="/empresas/lavanderia-airbnb">Airbnb</Link><Link href="/empresas/lavanderia-hoteles">Hoteles</Link><Link href="/empresas/lavanderia-restaurantes">Restaurantes</Link><Link href="/empresas/lavado-ropa-deportiva">Ropa deportiva</Link></div>
      <div><span>LEGAL</span><Link href="/politica-de-privacidad">Privacidad</Link><Link href="/politica-de-cookies">Cookies</Link><Link href="/terminos-y-condiciones">Términos y condiciones</Link>
        <a href="https://www.instagram.com/aquabonlavanderia/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <WhatsAppLink message="Hola Aquabon, quería hacer una consulta." event="whatsapp_footer">WhatsApp ↗</WhatsAppLink>
      </div>
    </nav>
  </footer>;
}
