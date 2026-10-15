import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import { WhatsAppIcon } from "./ui";

export type TicketData = {
  rows: { label: string; value: string }[];
  message: string;
  event: string;
  cta?: string;
  link?: { href: string; label: string };
  stub?: string;
};

// El ticket de mostrador: campos impresos, lo completado va "a mano".
export default function Ticket({ data, heading = "Tu consulta", dataFor, primary = false }: { data: TicketData; heading?: string; dataFor?: string; primary?: boolean }) {
  return <article className="ticket" data-for={dataFor} aria-label={heading}>
    <div className="ticket__top"><strong>{heading}</strong><span>Gascón 2189</span></div>
    <dl>
      {data.rows.map(r => <div key={r.label}><dt>{r.label}</dt><dd>{r.value}</dd></div>)}
      <div><dt>Mensaje</dt><dd className="ticket__msg">“{data.message}”</dd></div>
    </dl>
    <div className="ticket__actions">
      <WhatsAppLink className="btn" message={data.message} event={data.event} data-primary-cta={primary ? "" : undefined}><WhatsAppIcon />{data.cta ?? "Enviar por WhatsApp"}</WhatsAppLink>
      {data.link ? <Link className="link" href={data.link.href}>{data.link.label}</Link> : null}
    </div>
    {data.stub ? <p className="ticket__stub">{data.stub}</p> : null}
  </article>;
}
