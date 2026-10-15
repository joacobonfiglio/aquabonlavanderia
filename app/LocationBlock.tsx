import Image from "next/image";
import MapFacade from "./MapFacade";
import { business, hours, mapsDirections } from "./site";

export default function LocationBlock({ heading = "Dónde estamos", headingLevel = 2 }: { heading?: string; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return <section className="section" id="ubicacion" aria-labelledby="ubicacion-titulo">
    <div className="wrap loc">
      <div>
        <H id="ubicacion-titulo">{heading}</H>
        <p className="muted measure" style={{ marginTop: 12 }}>Estamos en el centro de Mar del Plata. Si tenés dudas con una prenda, traela y la miramos juntos en el mostrador.</p>
        <address>
          <dl>
            <div><dt>Dirección</dt><dd>{business.street}, {business.city}</dd></div>
            {hours.map(h => <div key={h.label}><dt>{h.label}</dt><dd>{h.text}</dd></div>)}
            <div><dt>WhatsApp</dt><dd>{business.phoneDisplay}</dd></div>
          </dl>
        </address>
        <div className="actions"><a className="link" href={mapsDirections} target="_blank" rel="noreferrer">Cómo llegar con Google Maps</a></div>
        {/* TODO(joaco): reemplazar por una foto real de la vidriera (la actual es un render). */}
        <figure className="storefront" style={{ marginTop: 32, maxWidth: 360 }}>
          <Image src="/aquabon-fachada.webp" width={1092} height={1118} sizes="(max-width: 960px) 90vw, 360px" alt="Vidriera de Lavandería Aquabon, con las olas azules del logo, en Gascón 2189" loading="lazy" />
        </figure>
      </div>
      <MapFacade />
    </div>
  </section>;
}
