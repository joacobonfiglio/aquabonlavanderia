import { business } from "./site";

// Cobertura de Centro, Güemes, Chauvin y La Perla confirmada por Joaco el 24/10/2026.
// Costos y disponibilidad se coordinan por pedido.
// Vistas previas autorizadas: no declaran sucursales ni retiro garantizado.
export const neighborhoods = {
  "lavanderia-guemes-mar-del-plata": {
    name: "Güemes", title: "Lavadero para la zona Güemes, Mar del Plata | Aquabon",
    description: `¿Buscás lavadero en la zona Güemes? Consultá por ropa y acolchados en Aquabon. Estamos en ${business.street}, Mar del Plata. Escribinos.`,
    h1: "Lavadero de ropa para la zona Güemes, Mar del Plata",
    intro: `Si estás en la zona Güemes, podés traer tu ropa y tus acolchados a Aquabon, en ${business.street}. Hacemos lavado, secado y doblado; los acolchados se revisan según relleno y etiqueta.`,
    heading: "La ropa de la semana y el acolchado, cada uno con su cuidado",
    detail: "Podés consultar por ambos en el mismo mensaje. Separá la ropa cotidiana de las piezas de cama y contanos si alguna prenda necesita planchado o tiene una mancha puntual.",
    focusTitle: "Antes de salir desde Güemes",
    focus: "Mandanos qué prendas tenés, cuántos acolchados son y una foto de sus etiquetas. Con esa información te orientamos para que sepas qué llevar al local.",
    cards: [
      { title: "Ropa cotidiana", copy: "El valet incluye lavado, secado y doblado. Si necesitás camisas planchadas, pedilo como un servicio aparte." },
      { title: "Acolchados y cubrecamas", copy: "Indicá tamaño y relleno. Si no sabés de qué material es, mandanos la etiqueta antes de trasladarlo." },
    ],
    question: "¿Puedo consultar por ropa y acolchados en un mismo pedido?",
    answer: "Sí. Contanos qué ropa tenés y cuántos acolchados querés lavar. Son servicios distintos y cada uno se evalúa según las prendas y su estado.",
    guides: ["diferencia-entre-lavanderia-y-tintoreria", "simbolos-de-lavado-de-un-acolchado", "como-secar-un-acolchado"],
    extra: null,
  },
  "lavanderia-chauvin-mar-del-plata": {
    name: "Chauvin", title: "Lavadero para Chauvin, Mar del Plata | Aquabon",
    description: `¿Vivís en Chauvin y necesitás lavar ropa o acolchados? Consultá en Aquabon, ${business.street}, Mar del Plata. Contanos qué necesitás lavar.`,
    h1: "Lavadero de ropa para Chauvin, Mar del Plata",
    intro: `Para lavar la ropa de todos los días o un acolchado desde Chauvin, podés acercarte a Aquabon en ${business.street}. Consultanos con el tipo de prendas y la cantidad para orientar tu pedido.`,
    heading: "Organizá el lavado de ropa y de cama",
    detail: "Si juntaste varias prendas o querés guardar un acolchado, contanos qué necesitás resolver. El valet y el lavado de acolchados se evalúan por separado, sin asumir que todo admite el mismo proceso.",
    focusTitle: "Prepará tu consulta desde Chauvin",
    focus: "Para ropa de uso diario, indicá una cantidad aproximada. Para acolchados, sumá tamaño, relleno y fotos de manchas o costuras dañadas. Así podemos revisar el caso antes de que te acerques.",
    cards: [
      { title: "Una bolsa de ropa", copy: "Avisanos si hay prendas delicadas o con indicaciones especiales. La etiqueta ayuda a decidir qué puede ir al valet." },
      { title: "Un acolchado para guardar", copy: "Contanos si tiene manchas, olor o relleno apelmazado. El resultado depende del material y del estado; lo revisamos antes de aceptar el trabajo." },
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
    intro: `Si estás en La Perla y necesitás lavar ropa o acolchados, Aquabon te recibe en ${business.street}. Consultá por lavado, secado y doblado, o mandanos la etiqueta de tu acolchado para revisarlo.`,
    heading: "Un lavado puntual o ropa para varios recambios",
    detail: "Para tu ropa personal, contanos las prendas que necesitás lavar. Si la consulta es por un alojamiento, indicá sábanas, fundas y toallas por separado para evaluar el pedido según su uso.",
    focusTitle: "Consultanos desde La Perla antes de traer tu pedido",
    focus: "Decinos si se trata de ropa personal, acolchados o textiles de un alojamiento. Incluí la cantidad y la fecha en que los necesitás; te confirmamos las condiciones sin asumir disponibilidad.",
    cards: [
      { title: "Ropa y acolchados de tu casa", copy: "Podés acercarlos al local. Para piezas de cama, una foto de la etiqueta y del estado general nos ayuda a orientarte." },
      { title: "Sábanas y toallas de un alojamiento", copy: "Si necesitás lavados recurrentes, contanos cantidades y frecuencia. La propuesta se evalúa para tu operación." },
    ],
    question: "¿Puedo consultar por la ropa de un alquiler temporario en La Perla?",
    answer: "Sí. Indicá cantidad de sábanas, fundas y toallas, frecuencia de recambio y dirección. Evaluamos las condiciones del pedido y la posibilidad de retiro antes de coordinar.",
    guides: ["como-secar-ropa-dentro-de-casa", "simbolos-de-lavado-de-un-acolchado", "como-secar-un-acolchado"],
    extra: { href: "/empresas/lavanderia-airbnb", label: "Ver el servicio para Airbnb y alquileres temporarios" },
  },
} as const;
export type NeighborhoodSlug = keyof typeof neighborhoods;
