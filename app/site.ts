// Datos del negocio: única fuente para el texto visible, el JSON-LD y /llms.txt.
// Cambiá un dato acá y se actualiza en toda la web.

export const SITE_URL = "https://www.aquabonlavanderia.com";

export const business = {
  name: "Aquabon Lavandería",
  shortName: "Aquabon",
  street: "Gascón 2189",
  city: "Mar del Plata",
  region: "Buenos Aires",
  country: "AR",
  address: "Gascón 2189, Mar del Plata",
  phoneDisplay: "+54 9 223 560-7738",
  phoneE164: "+5492235607738",
  whatsappNumber: "5492235607738",
  instagram: "https://www.instagram.com/aquabonlavanderia/",
  instagramHandle: "@aquabonlavanderia",
  googleBusiness: "https://share.google/zMYKqQKydXo7nuhxn",
  experience: "Más de 10 años en el rubro",
  // TODO(joaco): pasar latitud y longitud exactas del local (desde Google Business) para sumar "geo" al JSON-LD.
  geo: null as null | { latitude: number; longitude: number },
};

export const hours = [
  { label: "Lunes a viernes", short: "Lun a vie", opens: "08:30", closes: "20:00", text: "8:30 a 20:00", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
  { label: "Sábados", short: "Sáb", opens: "09:00", closes: "14:00", text: "9:00 a 14:00", days: ["Saturday"] },
];
export const hoursSentence = "Lunes a viernes de 8:30 a 20:00 y sábados de 9:00 a 14:00";

export const mapsDirections = "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina";
export const mapsEmbed = "https://www.google.com/maps?q=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina&output=embed";

export function whatsappHref(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type CareSymbolName = "wash" | "tumble" | "dryclean" | "iron" | "handwash" | "line";

export const services: { name: string; href: string; short: string; symbol?: CareSymbolName; image: string; alt: string }[] = [
  { name: "Valet de ropa", href: "/servicios/valet-de-ropa", short: "Lavado, secado y doblado de la ropa de todos los días.", symbol: "wash", image: "/service-still-v2.webp", alt: "Ropa de todos los días lavada y doblada" },
  { name: "Lavado de acolchados", href: "/servicios/lavado-de-acolchados", short: "Acolchados, cubrecamas y frazadas, según su relleno.", symbol: "tumble", image: "/blog/revisar-cuando-lavar-acolchado.webp", alt: "Acolchado blanco revisado antes del lavado" },
  { name: "Tintorería", href: "/servicios/tintoreria", short: "Sacos, trajes, vestidos y prendas especiales.", symbol: "dryclean", image: "/blog/revisar-prendas-tintoreria.webp", alt: "Saco y vestido revisados antes de tintorería" },
  { name: "Limpieza de vestidos de fiesta", href: "/servicios/limpieza-de-vestidos-de-fiesta", short: "Tejido, forro, adornos y manchas, revisados antes.", image: "/blog/revisar-mancha-saco-estructurado.webp", alt: "Prenda de vestir revisada en detalle antes de su limpieza" },
  { name: "Camperas y tapados", href: "/servicios/lavado-de-camperas-y-tapados", short: "Cada abrigo, por fuera y por dentro.", image: "/blog/revisar-tapado-etiqueta-forro.webp", alt: "Tapado azul con la etiqueta del forro a la vista" },
  { name: "Planchado", href: "/servicios/planchado", short: "Prendas listas para usar.", symbol: "iron", image: "/services/planchado-v3.webp", alt: "Plancha de vapor sobre una camisa celeste" },
  { name: "Lavado y planchado de camisas", href: "/servicios/lavado-y-planchado-de-camisas", short: "Lavado y terminación en un mismo pedido.", image: "/blog/preparar-camisa-antes-lavar.webp", alt: "Camisa celeste preparada antes del lavado" },
  { name: "Lavado de zapatillas", href: "/servicios/lavado-de-zapatillas", short: "Limpieza según el material de tu par.", image: "/blog/revisar-zapatillas-antes-lavar.webp", alt: "Zapatillas blancas revisadas antes de lavarlas" },
  { name: "Teñido de prendas", href: "/servicios/tenido-de-prendas", short: "Recuperar o cambiar el color, si la prenda lo permite.", image: "/services/tenido-v3.webp", alt: "Prenda en un baño de tinte azul" },
  { name: "Arreglos y costura", href: "/servicios/arreglos-y-costura", short: "Ajustes y reparaciones para seguir usándola.", image: "/services/costura-v3.webp", alt: "Máquina de coser sobre el dobladillo de un jean" },
  { name: "Retiro y entrega", href: "/servicios/retiro-y-entrega-de-ropa", short: "Consultá si llegamos a tu zona.", image: "/services/retiro-v3.webp", alt: "Entrega de una bolsa de ropa en la puerta de una casa" },
];

export const businessLinks = [
  { name: "Airbnb y alquiler temporario", href: "/empresas/lavanderia-airbnb", short: "Sábanas, fundas y toallas entre huésped y huésped.", image: "/blog/revisar-cuando-lavar-acolchado.webp", alt: "Cama con ropa blanca lista para el próximo huésped" },
  { name: "Hoteles y alojamientos", href: "/empresas/lavanderia-hoteles", short: "Ropa blanca con frecuencia y volumen acordados.", image: "/blog/secar-ropa-adentro-ventilacion.webp", alt: "Toallas tendidas junto a una ventana con vista al mar" },
  { name: "Restaurantes", href: "/empresas/lavanderia-restaurantes", short: "Manteles, servilletas, delantales y uniformes.", image: "/blog/tratar-mancha-vino-ropa.webp", alt: "Mantel blanco con una mancha de vino tratada" },
  { name: "Centros de estética", href: "/empresas/lavanderia-centros-de-estetica", short: "Toallas, batas, capas y textiles de trabajo.", image: "/blog/preparar-ropa-delicada.webp", alt: "Textiles claros preparados para un lavado delicado" },
  { name: "Uniformes", href: "/empresas/lavado-de-uniformes", short: "Prendas laborales lavables de uso general.", image: "/blog/preparar-camisa-antes-lavar.webp", alt: "Camisa de trabajo celeste preparada para el lavado" },
  { name: "Ropa deportiva", href: "/empresas/lavado-ropa-deportiva", short: "Camisetas, shorts y equipos de entrenamiento.", image: "/blog/evitar-encogimiento-ropa.webp", alt: "Prendas de algodón revisadas antes del lavado" },
];

// Contenedor de Google Tag Manager. GA4 y el resto de las etiquetas se configuran dentro de GTM.
// Si se vacía, no se carga GTM ni se muestra el aviso de cookies.
export const GTM_ID = "GTM-KFG2XKG3";

// TODO(joaco): URL de la web de Traka. Mientras esté vacía, el crédito del footer se muestra sin link.
export const TRAKA_URL = "";
