import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "./site";

export type Crumb = { label: string; href: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: SITE_URL + (item.href === "/" ? "/" : item.href) })),
  };
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return <>
    <nav className="crumbs" aria-label="Ubicación en el sitio">
      <ol>{items.map((item, index) => <li key={item.href}>
        {index === items.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}
      </li>)}</ol>
    </nav>
    <JsonLd data={breadcrumbSchema(items)} />
  </>;
}
