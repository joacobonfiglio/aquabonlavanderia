import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "../ServicePage";

export const metadata: Metadata = {
  title: "Lavado de acolchados en Mar del Plata | Aquabon",
  description:
    "Lavado y secado de acolchados en Mar del Plata. Cuidado según tejido, relleno y tamaño en Aquabon, Gascón 2189.",
  alternates: {
    canonical: "/servicios/acolchados",
  },
};

const data: ServicePageData = {
  number: "02",
  title: ["Lavado de acolchados", "en Mar del Plata"],
  intro: [
    "Limpieza profunda para lo que abraza tus noches",
    "Cuidado según el tamaño, el tejido y el relleno",
  ],
  heroImage: "/laundry-hero-v2.webp",
  heroAlt: "Acolchados marfil doblados en ondas con un detalle azul",
  detailImage: "/laundry-detail-v2.webp",
  detailAlt: "Manos revisando y alisando un acolchado limpio",
  detailLabel: "CUIDADO EN TODO SU VOLUMEN",
  facts: [
    { label: "IDEAL PARA", value: "Acolchados y cubrecamas" },
    { label: "CUIDADO", value: "Según tejido y relleno" },
    { label: "RESULTADO", value: "Limpio · Seco · Fresco" },
  ],
  storyEyebrow: "LAVANDERÍA PARA ACOLCHADOS EN MAR DEL PLATA",
  storyHeading: ["El descanso también empieza por", "un acolchado fresco"],
  storyParagraphs: [
    "Un acolchado necesita espacio para moverse, agua en la medida correcta y un secado que llegue hasta el interior. Por eso lo tratamos como un servicio propio, no como una prenda más.",
    "Antes de empezar revisamos su tamaño, tejido y relleno. Así podemos elegir un proceso que limpie bien sin perder de vista su volumen, sus costuras y su forma.",
  ],
  includedHeading: "Un proceso pensado para su volumen",
  included: [
    {
      title: "Revisión inicial",
      copy: "Observamos el tejido, las costuras, el relleno y las indicaciones de cuidado antes de comenzar.",
    },
    {
      title: "Lavado con espacio",
      copy: "Elegimos un ciclo que permita al acolchado moverse y enjuagarse de manera adecuada.",
    },
    {
      title: "Secado controlado",
      copy: "Cuidamos el tiempo y la temperatura para trabajar el volumen sin calor innecesario.",
    },
    {
      title: "Preparación final",
      copy: "Lo revisamos nuevamente y lo preparamos limpio, seco y listo para volver a casa.",
    },
  ],
  processHeading: ["Lo traés con volumen,", "vuelve mucho más liviano"],
  process: [
    {
      title: "Acercá tu acolchado",
      copy: "Lo recibimos en Gascón 2189 y revisamos su etiqueta, material y estado general.",
    },
    {
      title: "Elegimos el cuidado",
      copy: "Definimos el lavado y el secado adecuados para sus características.",
    },
    {
      title: "Volvé por el descanso",
      copy: "Te avisamos cuando está limpio, seco y preparado para usar o guardar.",
    },
  ],
  faq: [
    {
      question: "¿Reciben acolchados de todos los tamaños?",
      answer:
        "Recibimos distintos tamaños. Al verlo en el local confirmamos el proceso adecuado según su volumen y capacidad de lavado.",
    },
    {
      question: "¿Puedo llevar uno de plumas o relleno especial?",
      answer:
        "Sí, primero revisamos la etiqueta y el relleno. Si necesita un tratamiento diferente, te lo indicamos antes de comenzar.",
    },
    {
      question: "¿Salen todas las manchas?",
      answer:
        "Trabajamos cada pieza con cuidado, pero el resultado depende del origen y la antigüedad de la mancha. La revisamos al recibirla para orientarte.",
    },
    {
      question: "¿También reciben frazadas y cubrecamas?",
      answer:
        "Sí. Traelos al local para que podamos valorar el material, el tamaño y el servicio más adecuado.",
    },
  ],
  ctaEyebrow: "¿ES HORA DE RENOVAR EL DESCANSO?",
  ctaHeading: ["Tu cama merece", "volver a respirar"],
  whatsappText:
    "Hola Aquabon, quisiera consultar por el lavado de un acolchado.",
  related: [
    { number: "01", title: "Valet de ropa", href: "/servicios/valet-de-ropa" },
    { number: "03", title: "Tintorería", href: "/servicios/tintoreria" },
  ],
};

export default function Acolchados() {
  return <ServicePage data={data} />;
}
