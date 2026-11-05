import { neighborhoods } from "./neighborhoods";
import type { LandingData } from "./SeoLanding";
import { business, hoursSentence } from "./site";

// Páginas locales. Para sumar un barrio:
// 1. Agregá una entrada en `areas` (slug = la URL sin la barra).
// 2. Creá app/<slug>/page.tsx copiando app/lavanderia-centro-mar-del-plata/page.tsx y cambiando el slug.
// 3. El sitemap la toma solo.
// TODO(joaco): no publicar barrios nuevos sin confirmar que hay cobertura real de retiro y entrega o que el local les queda a mano.
type Area = {
  h1?: string;
  name: string;          // "el centro de Mar del Plata"
  crumb: string;         // "Centro"
  title: string;
  description: string;
  intro: string;
  nearby: string;        // por qué Aquabon le sirve a ese barrio, en una frase verificable
};

export const areas: Record<string, Area> = {
  ...Object.fromEntries(Object.entries(neighborhoods).map(([slug, n]) => [slug, { name: n.name, crumb: n.name, title: n.title, description: n.description, intro: n.intro, nearby: n.focus, h1: n.h1 }])),
  "lavanderia-centro-mar-del-plata": {
    name: "el centro de Mar del Plata", crumb: "Centro",
    title: "Lavandería en el centro de Mar del Plata | Aquabon",
    description: "Lavandería en el centro de Mar del Plata: Aquabon está en Gascón 2189. Valet de ropa, acolchados y tintorería. Consultá horarios y servicios.",
    intro: `Estamos en ${business.street}, en el centro. Podés traer la ropa de la semana, un acolchado o esa prenda que te da dudas, y te orientamos en el mostrador.`,
    nearby: `Estamos en ${business.street}. Podés abrir la ruta en el mapa y consultar antes de venir. Horario: ${hoursSentence.toLowerCase()}.`,
  },
};

const commonItems = [
  { title: "Valet de ropa", copy: "Lavado, secado y doblado de la ropa de todos los días." },
  { title: "Lavado de acolchados", copy: "Acolchados, cubrecamas y frazadas, según tamaño, tejido y relleno." },
  { title: "Tintorería", copy: "Recepción y seguimiento de sacos, trajes, vestidos y tapados." },
  { title: "Otros cuidados", copy: "Planchado, camisas, zapatillas, teñido y arreglos, todo en el mismo mostrador." },
];
const commonFaqs = [
  { question: "¿Dónde está Aquabon?", answer: `En ${business.street}, en el centro de Mar del Plata. Si no podés venir, en algunas zonas pasamos a buscar la ropa.` },
  { question: "¿Cuál es el horario?", answer: `${hoursSentence}.` },
  { question: "¿Hacen retiro y entrega?", answer: "Sí, en Centro, Güemes, Chauvin y La Perla. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual." },
  { question: "¿Puedo consultar con una foto?", answer: "Sí. Mandá una foto de la prenda y de la etiqueta por WhatsApp y te orientamos antes de que vengas." },
  { question: "¿Atienden prendas delicadas?", answer: "Sí. Las revisamos antes de aceptarlas y te decimos qué servicio les conviene y si hay algún riesgo." },
];
const commonRelated = [
  { label: "Todos los servicios", href: "/servicios" }, { label: "Valet de ropa", href: "/servicios/valet-de-ropa" },
  { label: "Lavado de acolchados", href: "/servicios/lavado-de-acolchados" }, { label: "Tintorería", href: "/servicios/tintoreria" },
  { label: "Retiro y entrega", href: "/servicios/retiro-y-entrega-de-ropa" },
];

export function localData(kind: "general" | keyof typeof areas | string): LandingData {
  if (kind === "general") {
    const path = "/lavanderia-mar-del-plata";
    return {
      path, title: "Lavandería en Mar del Plata | Aquabon",
      description: "Lavandería y tintorería en Mar del Plata: valet de ropa, acolchados, tintorería y más en Gascón 2189. Consultá por WhatsApp.",
      eyebrow: "", h1: "Lavandería en Mar del Plata",
      intro: "Te sacamos el lavado de encima: ropa de todos los días, acolchados y prendas especiales, revisadas una por una. Local en Gascón 2189 y retiro en Centro, Güemes, Chauvin y La Perla. Más de 10 años en el rubro.",
      event: "whatsapp_lavanderia_mdp", message: "Hola Aquabon, quería consultar por un servicio de lavandería.", cta: "Consultar por WhatsApp",
      crumbs: [{ label: "Inicio", href: "/" }, { label: "Lavandería en Mar del Plata", href: path }],
      sections: [
        { heading: "Todo en un mismo lugar", text: "Desde la ropa de todos los días hasta acolchados o prendas delicadas: te orientamos según el material y el estado, y nos ocupamos del resto." },
        { heading: "Un local en el centro", text: `Nos encontrás en ${business.street}. ${hoursSentence}.` },
        { heading: "Retiro y entrega", text: "Pasamos a buscar la ropa y te la llevamos en Centro, Güemes, Chauvin y La Perla. Para otras zonas, consultanos." },
      ],
      items: commonItems,
      steps: [{ title: "Contanos qué tenés", copy: "Elegí el servicio o mandanos una foto por WhatsApp." }, { title: "Nos la dejás", copy: `En ${business.street} o, si estás en una zona con retiro, la pasamos a buscar.` }, { title: "Te avisamos", copy: "Te escribimos cuando el pedido está listo." }],
      faqs: commonFaqs,
      related: [...Object.entries(neighborhoods).map(([slug, n]) => ({ label: `Lavadero para ${n.name}`, href: "/" + slug })), { label: "Lavandería en el centro", href: "/lavanderia-centro-mar-del-plata" }, { label: "Tintorería en el centro", href: "/tintoreria-centro-mar-del-plata" }, ...commonRelated],
      showLocation: true,
    };
  }
  const area = areas[kind];
  if (!area) throw new Error("Barrio sin configurar: " + kind);
  const path = "/" + kind;
  return {
    path, title: area.title, description: area.description, eyebrow: "",
    h1: area.h1 ?? "Lavandería en " + area.name,
    intro: area.intro, event: "whatsapp_" + kind.replace(/-/g, "_"),
    message: "Hola Aquabon, quería consultar por un servicio de lavandería.", cta: "Consultar por WhatsApp",
    crumbs: [{ label: "Inicio", href: "/" }, { label: "Lavandería en Mar del Plata", href: "/lavanderia-mar-del-plata" }, { label: area.crumb, href: path }],
    sections: [
      { heading: "Una ubicación práctica", text: area.nearby },
      { heading: "Retiro y entrega", text: "Pasamos a buscar la ropa y te la llevamos en Centro, Güemes, Chauvin y La Perla. Costo y horario se coordinan en cada pedido." },
    ],
    items: commonItems,
    steps: [{ title: "Contanos qué tenés", copy: "Elegí el servicio o mandanos una foto por WhatsApp." }, { title: "Nos la dejás", copy: `En ${business.street} o la pasamos a buscar.` }, { title: "Te avisamos", copy: "Te escribimos cuando el pedido está listo." }],
    faqs: commonFaqs, related: commonRelated, showLocation: true,
  };
}
