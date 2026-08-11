import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "../ServicePage";

export const metadata: Metadata = {
  title: "Recepción de tintorería | Aquabon Lavandería",
  description:
    "Recepción y gestión de prendas para tintorería en Aquabon, Gascón 2189, Mar del Plata.",
};

const data: ServicePageData = {
  number: "03",
  title: ["Recepción", "de tintorería"],
  intro: [
    "Recibimos las prendas que necesitan un cuidado especializado",
    "Y coordinamos su recorrido hasta que vuelven a vos",
  ],
  heroImage: "/tintoreria-hero.png",
  heroAlt: "Blazer marfil y prenda azul preparados para tintorería",
  detailImage: "/tintoreria-detail.png",
  detailAlt: "Manos vaporizando y revisando la solapa de un blazer",
  detailLabel: "PRENDAS QUE PIDEN OTRAS MANOS",
  facts: [
    { label: "IDEAL PARA", value: "Prendas especiales" },
    { label: "SERVICIO", value: "Recepción · Gestión · Entrega" },
    { label: "SEGUIMIENTO", value: "Un solo punto de contacto" },
  ],
  storyEyebrow: "CUANDO LAVAR NO ALCANZA",
  storyHeading: ["Hay prendas que necesitan", "otras manos"],
  storyParagraphs: [
    "Sacos, vestidos, tapados y textiles con indicaciones especiales no deberían improvisarse en casa. En Aquabon los recibimos, revisamos la información disponible y gestionamos su envío a tratamiento especializado.",
    "Vos tenés un lugar cercano donde dejar y retirar la prenda. Nosotros nos ocupamos de acompañar el recorrido y avisarte cuando vuelve lista.",
  ],
  includedHeading: "Un recorrido cuidado de punta a punta",
  included: [
    {
      title: "Recepción",
      copy: "Registramos la prenda, sus características y la información relevante antes de enviarla.",
    },
    {
      title: "Clasificación",
      copy: "Identificamos el tipo de tratamiento indicado y cualquier observación que deba acompañarla.",
    },
    {
      title: "Gestión especializada",
      copy: "Coordinamos el trabajo con el servicio de tintorería encargado del tratamiento.",
    },
    {
      title: "Retiro en Aquabon",
      copy: "La recibimos nuevamente, la revisamos y te avisamos para que puedas pasar a buscarla.",
    },
  ],
  processHeading: ["La dejás cerca,", "vuelve cuidada"],
  process: [
    {
      title: "Traé la prenda",
      copy: "La recibimos en Gascón 2189 y registramos qué necesita y qué observaciones presenta.",
    },
    {
      title: "Coordinamos el tratamiento",
      copy: "Gestionamos su traslado y el cuidado especializado correspondiente.",
    },
    {
      title: "Retirala en Aquabon",
      copy: "Te avisamos cuando regresa y queda disponible para retirar en el mismo local.",
    },
  ],
  faq: [
    {
      question: "¿Qué prendas reciben para tintorería?",
      answer:
        "Recibimos sacos, vestidos, tapados y otras prendas con cuidados especiales. Al verlas confirmamos si podemos gestionar el servicio.",
    },
    {
      question: "¿El tratamiento se realiza en el local?",
      answer:
        "Aquabon funciona como punto de recepción y seguimiento. El tratamiento se coordina con un servicio especializado de tintorería.",
    },
    {
      question: "¿Pueden garantizar que salga una mancha?",
      answer:
        "Ningún tratamiento responsable puede garantizar todas las manchas. Registramos la observación y te orientamos según el tipo de tejido y mancha.",
    },
    {
      question: "¿Dónde retiro la prenda?",
      answer:
        "La retirás en Aquabon, en Gascón 2189. Te avisamos cuando vuelve del tratamiento y está disponible.",
    },
  ],
  ctaEyebrow: "¿HAY UNA PRENDA QUE NO QUERÉS ARRIESGAR?",
  ctaHeading: ["Traela cerca,", "nosotros seguimos"],
  whatsappText:
    "Hola Aquabon, quisiera consultar por una prenda para tintorería.",
  related: [
    { number: "01", title: "Valet de ropa", href: "/servicios/valet-de-ropa" },
    { number: "02", title: "Acolchados", href: "/servicios/acolchados" },
  ],
};

export default function Tintoreria() {
  return <ServicePage data={data} />;
}
