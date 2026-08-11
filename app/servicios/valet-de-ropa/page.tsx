import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "../ServicePage";

export const metadata: Metadata = {
  title: "Valet de ropa | Aquabon Lavandería",
  description:
    "Lavado, secado y doblado de tu ropa de todos los días en Aquabon, Gascón 2189, Mar del Plata.",
};

const data: ServicePageData = {
  number: "01",
  title: ["Valet", "de ropa"],
  intro: [
    "Tu ropa de todos los días lavada, secada y doblada",
    "Lista para volver al placard",
  ],
  heroImage: "/valet-hero.png",
  heroAlt: "Ropa limpia y doblada junto a un canasto azul",
  detailImage: "/folded-detail.png",
  detailAlt: "Manos doblando cuidadosamente una camisa recién lavada",
  detailLabel: "CUIDADO EN CADA DOBLEZ",
  facts: [
    { label: "IDEAL PARA", value: "Ropa de uso diario" },
    { label: "INCLUYE", value: "Lavado · Secado · Doblado" },
    { label: "ENTREGA", value: "Lista para guardar" },
  ],
  storyEyebrow: "MENOS TAREAS PENDIENTES",
  storyHeading: [
    "Tu semana no debería girar alrededor",
    "del lavarropas",
  ],
  storyParagraphs: [
    "El valet es la forma más simple de sacarte la ropa de todos los días de encima sin dejar de cuidarla. La recibimos, la separamos según sus necesidades y elegimos el ciclo adecuado.",
    "Cuando volvés, no te llevás una bolsa de ropa húmeda ni una montaña para doblar. Te llevás prendas limpias, secas y ordenadas, listas para guardar.",
  ],
  includedHeading: "Nos ocupamos de todo esto",
  included: [
    {
      title: "Recepción y revisión",
      copy: "Miramos las prendas antes de empezar y detectamos si alguna necesita un cuidado diferente.",
    },
    {
      title: "Lavado cuidado",
      copy: "Elegimos el programa de lavado según el tipo de ropa y su composición.",
    },
    {
      title: "Secado adecuado",
      copy: "Controlamos el secado para evitar calor innecesario y conservar mejor las prendas.",
    },
    {
      title: "Doblado y orden",
      copy: "Organizamos cada prenda para que llegue prolija y lista para guardar.",
    },
  ],
  processHeading: ["Traés una bolsa,", "te llevás tiempo"],
  process: [
    {
      title: "Traé tu ropa",
      copy: "Acercala a Gascón 2189. Al recibirla te orientamos si alguna prenda necesita otro servicio.",
    },
    {
      title: "Dejala en nuestras manos",
      copy: "La lavamos, secamos y doblamos con un proceso pensado para ropa de uso diario.",
    },
    {
      title: "Volvé por ella",
      copy: "Te avisamos cuando está lista para que solo tengas que pasar a buscarla.",
    },
  ],
  faq: [
    {
      question: "¿Qué ropa puedo traer?",
      answer:
        "El valet está pensado para ropa cotidiana: remeras, pantalones, ropa interior, medias, pijamas, toallas y prendas similares.",
    },
    {
      question: "¿Incluye planchado?",
      answer:
        "El servicio incluye lavado, secado y doblado. Si necesitás planchado, consultanos al momento de entregar las prendas.",
    },
    {
      question: "¿Qué pasa con las prendas delicadas?",
      answer:
        "Las revisamos al recibirlas. Si requieren un tratamiento especial, te lo indicamos antes de iniciar el servicio.",
    },
    {
      question: "¿También reciben acolchados o prendas de tintorería?",
      answer:
        "Sí, son servicios independientes. Traelos al local y te orientamos según el material y el cuidado que necesiten.",
    },
  ],
  ctaEyebrow: "¿LA BOLSA YA ESTÁ LLENA?",
  ctaHeading: ["Nosotros la", "vaciamos por vos"],
  whatsappText:
    "Hola Aquabon, quisiera consultar por el servicio de valet de ropa.",
  related: [
    { number: "02", title: "Acolchados", href: "/servicios/acolchados" },
    { number: "03", title: "Tintorería", href: "/servicios/tintoreria" },
  ],
};

export default function ValetDeRopa() {
  return <ServicePage data={data} />;
}
