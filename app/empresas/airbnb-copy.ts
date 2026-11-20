import type { ServiceSection } from "../service-copy";
import { pickupZonesSentence } from "../site";

// Contenido propio de /empresas/lavanderia-airbnb (T-11 del plan SEO/UX, retomado el 20/11/2026 con el OK de Joaco).
// Sin precios, plazos ni kits cerrados: no están confirmados (reglas 3 y 4 del manual).
// TODO(joaco): confirmar si se ofrece un formato "por juego/kit" con nombre propio y si contamos las piezas
// al recibir y al devolver. Con eso se puede sumar una sección "Qué trae cada juego" y "Qué pasa si falta una pieza".
export const airbnbSections: ServiceSection[] = [
  {
    id: "check-in", heading: "Ropa blanca lista para cada check-in en Mar del Plata", tone: "claro",
    lead: "Entre que se va un huésped y llega el siguiente hay pocas horas. La ropa blanca no puede ser el problema.",
    blocks: [
      { kind: "text", paragraphs: [
        "Si administrás un departamento o una casa de alquiler temporario en Mar del Plata, ya sabés cómo es la temporada: recambios pegados, huéspedes que llegan del viaje y lo primero que tocan es la cama y la toalla. Una sábana gris, una funda con una mancha de maquillaje o una toalla con olor a humedad se notan en el primer minuto, y a veces terminan en una reseña.",
        "Lavar todo eso en el lavarropas del departamento, secarlo en un lugar sin balcón y doblarlo entre un huésped y otro es tiempo que no tenés. Nos dejás la ropa blanca y te la devolvemos lavada, seca y doblada por juego, para que armar la cama sea lo único que quede por hacer.",
        "En verano, además, la ropa blanca de un alquiler cerca de la playa trabaja el doble: arena en las sábanas, protector solar en las fundas, maquillaje en las toallas de mano y toallones que vuelven mojados de la playa. Cada recambio trae su propia lista de manchas, y lo que se lava apurado en el departamento tiende a quedar gris o con olor después de unas semanas.",
      ] },
    ],
  },
  {
    id: "que-lavamos", heading: "Qué lavamos de tu alquiler temporario", tone: "espuma",
    blocks: [
      { kind: "cards", cards: [
        { title: "Sábanas y fundas", copy: "Juegos completos de cama, separados por color y tejido antes de lavar, para que lo blanco siga blanco." },
        { title: "Toallas y toallones", copy: "Lavadas y secas por completo, sin exceso de producto, para que no queden duras ni con olor a humedad." },
        { title: "Acolchados y cubrecamas", copy: "Los lavamos en máquinas de 15 kg y los secamos hasta el centro del relleno, también al cerrar la temporada." },
      ] },
      { kind: "text", paragraphs: [
        "También recibimos frazadas, mantas y fundas de acolchado. Si tenés textiles que no son ropa de cama, como cortinas o almohadones, mandanos una foto y la etiqueta por WhatsApp y te decimos si los podemos trabajar.",
        "Antes de lavar, separamos por color y tejido y revisamos las manchas de cada pieza. Las de maquillaje, protector solar o café se tratan antes del lavado: si entran al lavarropas así, el calor del secado las fija y la sábana queda marcada para la temporada siguiente.",
      ] },
    ],
    links: [{ label: "Lavado de acolchados en Mar del Plata", href: "/servicios/lavado-de-acolchados" }],
  },
  {
    id: "recambios", heading: "Cómo coordinamos los recambios de tu alojamiento", tone: "claro",
    lead: "Antes de empezar acordamos todo, para que no te quedes sin ropa blanca entre huéspedes.",
    blocks: [
      { kind: "list", items: [
        "Nos contás cuántas unidades manejás, cuántos juegos tiene cada una y cada cuánto hacés recambio.",
        "Acordamos días de retiro y de entrega alrededor de las fechas de tus huéspedes, y las cantidades de cada entrega.",
        "Te pasamos una propuesta con importe y plazo según volumen y frecuencia, antes de empezar. No publicamos precios porque cada operación es distinta.",
        "Te devolvemos la ropa blanca lavada, seca y doblada por juego, lista para armar la cama.",
      ] },
      { kind: "text", paragraphs: [
        `Retiramos y entregamos en ${pickupZonesSentence}. Si tu alojamiento está en otra zona, consultanos igual: el costo y la disponibilidad se confirman en cada caso.`,
      ] },
    ],
    links: [{ label: "Retiro y entrega de ropa en Mar del Plata", href: "/servicios/retiro-y-entrega-de-ropa" }],
  },
  {
    id: "que-pasa-si", heading: "Qué pasa si una pieza vuelve con problemas", tone: "espuma",
    blocks: [
      { kind: "cards", cards: [
        { title: "Si tiene una mancha", copy: "La tratamos antes de lavar. Si no sale del todo, te lo decimos antes de devolverla, para que decidas si la reponés." },
        { title: "Si está dañada", copy: "Si una pieza llega rota, quemada o muy gastada, te avisamos. Preferimos que lo sepas antes de que la vea un huésped." },
        { title: "Si necesitás algo urgente", copy: "Escribinos por WhatsApp. Te decimos si lo podemos sumar según el trabajo de esa semana, sin prometer lo que no podemos cumplir." },
      ] },
    ],
  },
  {
    id: "antes-temporada", heading: "Antes de la temporada: la ropa blanca que estuvo guardada", tone: "claro",
    blocks: [
      { kind: "text", paragraphs: [
        "Lo que pasó el invierno en el placard de un departamento cerrado cerca del mar suele salir con olor a encierro y manchas amarillas que no estaban. Conviene lavarlo todo antes del primer huésped, contar los juegos y reponer lo que no da para otra temporada.",
        "Si estás armando la operación de este verano, en estas guías tenés el paso a paso: cómo preparar la ropa blanca antes de la temporada y qué revisar en cada recambio para que no falten piezas ni vuelva una sábana manchada a la cama.",
      ] },
    ],
    links: [
      { label: "Cómo preparar la ropa blanca de un alquiler temporario", href: "/blog/como-preparar-la-ropa-blanca-de-un-alquiler-temporario" },
      { label: "Checklist de recambio de ropa blanca", href: "/blog/checklist-recambio-ropa-blanca-airbnb" },
      { label: "Cómo guardar el acolchado en verano", href: "/blog/como-guardar-acolchados-en-verano" },
    ],
  },
];
