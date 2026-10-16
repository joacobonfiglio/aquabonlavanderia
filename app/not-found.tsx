import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import { Clothesline, Waves } from "./Blocks";
import { WhatsAppIcon } from "./ui";
import { services } from "./site";

export default function NotFound() {
  return <>
    <SiteHeader overlay />
    <main id="contenido" className="page">
      <section className="p-hero nf" aria-labelledby="nf-titulo">
        <div className="wrap nf__inner">
          <p className="nf__code" aria-hidden="true">404</p>
          <p className="h-hero__kicker">Página no encontrada</p>
          <h1 id="nf-titulo">Esta página se fue con el lavado</h1>
          <p className="p-hero__lead">Puede que el link haya cambiado. Tu ropa, en cambio, la seguimos esperando.</p>
          <div className="h-hero__actions">
            <Link className="btn btn--light btn--xl" href="/">Volver al inicio</Link>
            <Link className="btn btn--outline-light btn--xl" href="/servicios">Ver servicios</Link>
            <WhatsAppLink className="btn btn--azul btn--xl" message="Hola Aquabon, quería consultar por un servicio." event="whatsapp_404"><WhatsAppIcon />Escribinos</WhatsAppLink>
          </div>
        </div>
        <Waves className="waves--hero" />
      </section>
      <section className="p-sec" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-label="Servicios">
        <Clothesline title="¿Buscabas alguno de estos?" items={services} />
      </section>
    </main>
    <SiteFooter />
  </>;
}
