import Link from "next/link";
import JsonLd from "./JsonLd";

// `link` deja llevar la respuesta a la guía o al servicio que la amplía. No entra en el schema.
export type FaqItem = { question: string; answer: string; link?: { href: string; label: string } };

export function faqSchema(items: FaqItem[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
}

export default function Faq({ items, schema = true }: { items: FaqItem[]; schema?: boolean }) {
  if (!items.length) return null;
  return <div className="faq">
    {items.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}{f.link ? <> <Link className="link" href={f.link.href}>{f.link.label}</Link>.</> : null}</p></details>)}
    {schema ? <JsonLd data={faqSchema(items)} /> : null}
  </div>;
}
