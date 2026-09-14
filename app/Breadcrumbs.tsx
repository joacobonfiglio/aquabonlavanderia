import Link from "next/link";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.label,
      item: "https://www.aquabonlavanderia.com" + item.href,
    })),
  };
  return <><nav className="breadcrumbs" aria-label="Migas de pan">
    {items.map((item, index) => <span key={item.href}>{index ? <i aria-hidden="true">›</i> : null}
      {index === items.length - 1 ? <strong aria-current="page">{item.label}</strong> : <Link href={item.href}>{item.label}</Link>}
    </span>)}
  </nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
