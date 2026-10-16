import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import { WavesMark, WhatsAppIcon } from "./ui";

export type ChatData = {
  service?: string;        // servicio sugerido
  next?: string;           // cómo sigue, en una frase
  message: string;         // mensaje precargado (los "__" se completan en WhatsApp)
  servicio?: string;      // parámetro "servicio" del evento (si no, se deduce de la URL)
  link?: { href: string; label: string };
};

// Vista previa de la conversación de WhatsApp: se ve exactamente qué mensaje se va a enviar.
export default function ChatPreview({ data, dataFor, primary = false }: { data: ChatData; dataFor?: string; primary?: boolean }) {
  const parts = data.message.split("__");
  return <article className="chat" data-for={dataFor} aria-label="Vista previa del mensaje de WhatsApp">
    <header className="chat__top">
      <span className="chat__avatar"><WavesMark /></span>
      <span><strong>Aquabon Lavandería</strong><small>Te respondemos por WhatsApp</small></span>
    </header>
    <div className="chat__body">
      {data.service ? <p className="chat__sys">Servicio sugerido: <b>{data.service}</b></p> : null}
      <p className="chat__bubble">
        {parts.map((p, i) => <span key={i}>{p}{i < parts.length - 1 ? <mark>completalo</mark> : null}</span>)}
        <small>ahora</small>
      </p>
      {data.next ? <p className="chat__sys chat__sys--next">Cómo sigue: {data.next}</p> : null}
    </div>
    <footer className="chat__foot">
      <WhatsAppLink className="btn btn--wa" message={data.message} ubicacion="vista_previa_chat" servicio={data.servicio} data-primary-cta={primary ? "" : undefined}><WhatsAppIcon />Enviar este mensaje</WhatsAppLink>
      <p>Se abre WhatsApp con el mensaje escrito. Podés editarlo antes de enviarlo.</p>
      {data.link ? <Link className="link" href={data.link.href}>{data.link.label}</Link> : null}
    </footer>
  </article>;
}
