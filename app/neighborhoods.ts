import { business } from "./site";

// Cobertura de Centro, Güemes, Chauvin y La Perla confirmada por Joaco el 24/10/2026.
// Costos y disponibilidad se coordinan por pedido.
// Vistas previas autorizadas: no declaran sucursales ni retiro garantizado.
export const neighborhoods = {
  "lavanderia-guemes-mar-del-plata": {
    name: "Güemes", title: "Lavadero para la zona Güemes, Mar del Plata | Aquabon",
    description: `¿Buscás lavadero en la zona Güemes? Consultá por ropa y acolchados en Aquabon. Estamos en ${business.street}, Mar del Plata. Escribinos.`,
    h1: "Lavadero de ropa para la zona Güemes, Mar del Plata",
    intro: `Si estás en la zona Güemes, te ahorrás el viaje: coordinamos retiro y entrega de tu ropa y tus acolchados. También podés traerlos a Aquabon, en ${business.street}. Lavamos, secamos y doblamos; los acolchados se revisan según relleno y etiqueta.`,
    heading: "La ropa de la semana y el acolchado, cada uno con su cuidado",
    detail: "Consultá por las dos cosas en el mismo mensaje y resolvés todo de una vez. Separá la ropa de todos los días de las piezas de cama y contanos si algo necesita planchado o tiene una mancha.",
    focusTitle: "Antes de armar el pedido en Güemes",
    focus: "Mandanos qué prendas tenés, cuántos acolchados son y una foto de sus etiquetas. Con eso coordinamos el retiro o te decimos qué traer al local.",
    cards: [
      { title: "Ropa cotidiana", copy: "El valet incluye lavado, secado y doblado. Si necesitás camisas planchadas, pedilo como un servicio aparte." },
      { title: "Acolchados y cubrecamas", copy: "Decinos tamaño y relleno. Si no sabés de qué material es, mandanos la etiqueta y lo vemos." },
    ],
    question: "¿Puedo consultar por ropa y acolchados en un mismo pedido?",
    answer: "Sí. Contanos qué ropa tenés y cuántos acolchados querés lavar. Son servicios distintos, pero los coordinamos en un mismo pedido.",
    guides: ["diferencia-entre-lavanderia-y-tintoreria", "simbolos-de-lavado-de-un-acolchado", "como-secar-un-acolchado"],
    extra: null,
  },
  "lavanderia-chauvin-mar-del-plata": {
    name: "Chauvin", title: "Lavadero para Chauvin, Mar del Plata | Aquabon",
    description: `¿Vivís en Chauvin y necesitás lavar ropa o acolchados? Consultá en Aquabon, ${business.street}, Mar del Plata. Contanos qué necesitás lavar.`,
    h1: "Lavadero de ropa para Chauvin, Mar del Plata",
    intro: `Desde Chauvin no hace falta que cargues la bolsa: coordinamos retiro y entrega de la ropa de todos los días y de tus acolchados. Si preferís, acercate a Aquabon en ${business.street}. Contanos qué prendas tenés y cuántas son para orientar tu pedido.`,
    heading: "Organizá el lavado de ropa y de cama",
    detail: "Si juntaste ropa o querés guardar un acolchado limpio, contanos qué tenés y nos ocupamos. El valet y los acolchados se lavan por separado, porque no todo admite el mismo proceso.",
    focusTitle: "Prepará tu consulta desde Chauvin",
    focus: "Para la ropa de todos los días, decinos más o menos cuánta es. Para acolchados, sumá tamaño, relleno y fotos de manchas o costuras dañadas. Así coordinamos el retiro sabiendo qué buscamos.",
    cards: [
      { title: "Una bolsa de ropa", copy: "Avisanos si hay prendas delicadas o con cuidados especiales. La etiqueta nos dice qué puede ir al valet." },
      { title: "Un acolchado para guardar", copy: "Contanos si tiene manchas, olor o relleno apelmazado. Lo revisamos antes de aceptarlo y te decimos qué se puede esperar según su material y estado." },
    ],
    question: "¿Qué datos necesitan si tengo varios acolchados?",
    answer: "Cantidad, tamaño y relleno de cada uno. Si alguno tiene manchas o una etiqueta distinta, mandanos fotos por separado para poder orientarte.",
    guides: ["como-guardar-la-ropa-de-invierno", "cada-cuanto-lavar-un-acolchado", "como-secar-un-acolchado"],
    extra: null,
  },
  "lavanderia-la-perla-mar-del-plata": {
    name: "La Perla", title: "Lavadero para La Perla, Mar del Plata | Aquabon",
    description: `¿Buscás lavadero en La Perla? Aquabon recibe ropa y acolchados en ${business.street}, Mar del Plata. Escribinos para consultar por tu pedido.`,
    h1: "Lavadero de ropa para La Perla, Mar del Plata",
    intro: `En La Perla coordinamos retiro y entrega de ropa y acolchados, así no tenés que moverte. También te recibimos en ${business.street}. Consultá por lavado, secado y doblado, o mandanos la etiqueta de tu acolchado para revisarlo.`,
    heading: "Un lavado puntual o ropa para varios recambios",
    detail: "Para tu ropa, contanos qué necesitás lavar. Si es para un alojamiento, separá sábanas, fundas y toallas, y armamos el pedido según cómo las usás.",
    focusTitle: "Consultanos desde La Perla",
    focus: "Decinos si es ropa tuya, acolchados o textiles de un alojamiento, cuántas piezas son y para cuándo los necesitás. Te confirmamos si llegamos antes de coordinar.",
    cards: [
      { title: "Ropa y acolchados de tu casa", copy: "Los pasamos a buscar o los traés al local. Para piezas de cama, una foto de la etiqueta y del estado nos ayuda a orientarte." },
      { title: "Sábanas y toallas de un alojamiento", copy: "Si necesitás lavados seguidos, contanos cantidades y frecuencia y armamos una propuesta para tu alojamiento." },
    ],
    question: "¿Puedo consultar por la ropa de un alquiler temporario en La Perla?",
    answer: "Sí. Decinos cantidad de sábanas, fundas y toallas, cada cuánto hacés recambio y la dirección. Te confirmamos condiciones y retiro antes de empezar.",
    guides: ["como-secar-ropa-dentro-de-casa", "simbolos-de-lavado-de-un-acolchado", "como-secar-un-acolchado"],
    extra: { href: "/empresas/lavanderia-airbnb", label: "Ver el servicio para Airbnb y alquileres temporarios" },
  },
} as const;
export type NeighborhoodSlug = keyof typeof neighborhoods;
