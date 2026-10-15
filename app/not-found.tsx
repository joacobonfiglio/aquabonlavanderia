import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import { WhatsAppIcon } from "./ui";

export default function NotFound() {
  return <>
    <SiteHeader />
    <main id="contenido" className="section">
      <div className="wrap">
        <h1>Esta página no está</h1>
        <p className="phero__lead">Puede que el link haya cambiado. Tu ropa, en cambio, la seguimos esperando.</p>
        <div className="actions">
          <Link className="btn btn--ghost" href="/servicios">Ver servicios</Link>
          <WhatsAppLink className="btn" message="Hola Aquabon, quería consultar por un servicio." event="whatsapp_404"><WhatsAppIcon />Escribinos</WhatsAppLink>
        </div>
      </div>
    </main>
    <SiteFooter />
  </>;
}
