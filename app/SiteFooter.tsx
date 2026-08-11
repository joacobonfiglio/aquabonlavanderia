import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <Link href="/" aria-label="Aquabon, volver al inicio">
          AQUABON
        </Link>
        <p>Lavandería · Mar del Plata</p>
      </div>
      <nav className="site-footer-links" aria-label="Navegación del pie de página">
        <div>
          <span>EXPLORÁ</span>
          <Link href="/">Inicio</Link>
          <Link href="/#servicios">Servicios</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/#ubicacion">Ubicación</Link>
        </div>
        <div>
          <span>SERVICIOS</span>
          <Link href="/servicios/valet-de-ropa">Valet de ropa</Link>
          <Link href="/servicios/acolchados">Acolchados</Link>
          <Link href="/servicios/tintoreria">Tintorería</Link>
        </div>
      </nav>
      <p className="site-footer-tagline">Ropa limpia · Cabeza liviana</p>
    </footer>
  );
}
