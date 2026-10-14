import type { LandingData } from "./SeoLanding";
export function localData(kind: "general" | "centro"): LandingData {
  const centro = kind === "centro";
  const path = centro ? "/lavanderia-centro-mar-del-plata" : "/lavanderia-mar-del-plata";
  return {
    path, title: (centro ? "Lavadero en el centro de Mar del Plata" : "Cómo elegir tu servicio de lavandería en Mar del Plata") + " | Aquabon",
    description: centro ? "Lavadero y lavandería en Gascón 2189, centro de Mar del Plata. Valet, acolchados y recepción de tintorería. Horarios y cómo llegar." : "Elegí valet, lavado de acolchados, tintorería o planchado según tus prendas. Aquabon te orienta en Gascón 2189, Mar del Plata, o por WhatsApp.",
    eyebrow: centro ? "GASCÓN 2189 · CENTRO" : "GUÍA DE SERVICIOS · AQUABON",
    h1: centro ? "Lavadero en el centro de Mar del Plata" : "Elegí tu servicio de lavandería en Mar del Plata",
    intro: centro ? "Estamos en Gascón 2189. Traé tu bolsa de ropa, consultá por un acolchado o dejá una prenda para tintorería. Atendemos de lunes a sábado." : "¿Qué conviene pedir para una bolsa de ropa, un acolchado o una prenda delicada? En nuestro lavadero te orientamos para elegir el cuidado indicado, sin mezclar servicios distintos.",
    event: centro ? "whatsapp_lavanderia_centro" : "whatsapp_lavanderia_mdp",
    message: centro ? "Hola Aquabon, quiero consultar por un pedido en el local de Gascón 2189." : "Hola Aquabon, quiero saber qué servicio necesita mi ropa. Les cuento qué tengo: ",
    cta: centro ? "Consultar antes de venir" : "Ayudame a elegir el servicio",
    crumbs: [{ label: "Inicio", href: "/" }, { label: centro ? "Lavadero en el centro" : "Elegir servicio", href: path }],
    sections: centro ? [
      { heading: "Cómo llegar a Gascón 2189", text: "El local de Aquabon está en el centro de Mar del Plata. Abrí la ruta de Google Maps con tu ubicación para conocer el recorrido. La recepción y la entrega de pedidos se realizan en este mismo local." },
      { heading: "También atendemos los sábados", text: "De lunes a viernes estamos de 8:30 a 20:00; los sábados, de 9:00 a 14:00. Para saber si un pedido está listo o coordinar una visita, escribinos por WhatsApp antes de venir." },
      { heading: "¿Vivís cerca y necesitás retiro?", text: "Priorizamos el centro y zonas cercanas para retiro y entrega. Mandanos la dirección y el volumen de ropa: confirmamos disponibilidad del recorrido, costo y horario. La cercanía al local no implica cobertura automática." },
    ] : [
      { heading: "Ropa cotidiana: pedí valet", text: "El valet incluye lavado, secado y doblado. Separá las prendas delicadas, vaciá los bolsillos e informá manchas o daños. El planchado se solicita por separado." },
      { heading: "Ropa de cama: consultá por acolchados", text: "Indicá si es de una plaza, dos plazas o king size, y qué relleno tiene. La etiqueta y el estado de la pieza determinan el proceso. Las frazadas y los cubrecamas también se evalúan según material." },
      { heading: "Prendas especiales: evaluación antes de lavar", text: "Sacos, vestidos y abrigos pueden necesitar tintorería. Aquabon funciona como punto de recepción y seguimiento cuando se requiere un tratamiento especializado fuera del local." },
    ],
    items: centro ? [
      { title: "Dejá tu bolsa de ropa", copy: "Consultá el importe y el plazo del valet antes de dejarla. El aviso de pedido listo llega por WhatsApp." },
      { title: "Traé tu acolchado", copy: "Contanos el tamaño, el material y el relleno. Revisamos etiqueta y estado antes de confirmar." },
      { title: "Retirá tu pedido", copy: "Esperá nuestro aviso de disponibilidad y acercate durante el horario de atención." },
    ] : [
      { title: "Lavado, secado y doblado", copy: "Para ropa cotidiana apta para lavado. No incluye planchado ni tratamiento de prendas especiales." },
      { title: "Lavado de acolchados", copy: "Para piezas de cama, con revisión de tamaño, relleno, tejido y condiciones de secado." },
      { title: "Tintorería y planchado", copy: "La tintorería es un servicio distinto del valet. El planchado se consulta como terminación específica." },
    ],
    steps: centro ? [
      { title: "Consultá tu pedido", copy: "Escribinos con el tipo de ropa y la cantidad antes de venir." },
      { title: "Abrí la ruta", copy: "Encontrá Gascón 2189 en el mapa y verificá el horario del local." },
      { title: "Acercate a Aquabon", copy: "Recibimos y registramos tu pedido; te avisamos cuando está listo." },
    ] : [
      { title: "Separá por tipo de prenda", copy: "Ropa cotidiana, ropa de cama y prendas delicadas tienen necesidades distintas." },
      { title: "Enviá la información", copy: "Tipo de ropa, cantidad y fotos de etiquetas cuando haga falta." },
      { title: "Confirmá el servicio", copy: "Acordamos importe y plazo; si querés retiro, también confirmamos el recorrido." },
    ],
    faqs: centro ? [
      { question: "¿Dónde queda el lavadero de Aquabon?", answer: "En Gascón 2189, en el centro de Mar del Plata. Es nuestro punto de recepción y entrega." },
      { question: "¿Abren los sábados?", answer: "Sí, de 9:00 a 14:00. De lunes a viernes atendemos de 8:30 a 20:00." },
      { question: "¿Cómo sé si ya puedo retirar?", answer: "Te avisamos por WhatsApp cuando tu pedido está listo. Si tenés dudas, consultanos antes de venir." },
      { question: "¿Retiran ropa cerca del local?", answer: "Podés consultar retiro en el centro y zonas cercanas. Confirmamos cobertura, costo y horario con tu dirección." },
    ] : [
      { question: "¿Lavadero y lavandería son el mismo servicio?", answer: "En Aquabon usamos ambos términos para el cuidado de ropa. Lo importante es elegir el servicio: valet, acolchados, planchado o recepción de tintorería." },
      { question: "¿El valet incluye el planchado?", answer: "No. Incluye lavado, secado y doblado; el planchado se consulta por separado." },
      { question: "¿Puedo poner prendas delicadas en la bolsa?", answer: "Separalas y consultanos antes. Podemos orientarte con fotos de la prenda y de su etiqueta, y revisarla en el local cuando haga falta." },
      { question: "¿Qué información necesitan para cotizar?", answer: "Tipo de prendas, cantidad y características. Para acolchados, tamaño y relleno; para retiro, también tu dirección. Confirmamos el importe y el plazo antes de comenzar." },
    ],
    related: [{ label: "Valet de ropa", href: "/servicios/valet-de-ropa" }, { label: "Lavado de acolchados", href: "/servicios/lavado-de-acolchados" }, { label: "Tintorería", href: "/servicios/tintoreria" }, { label: centro ? "Retiro y entrega" : "Lavadero en el centro", href: centro ? "/servicios/retiro-y-entrega-de-ropa" : "/lavanderia-centro-mar-del-plata" }],
    showLocation: centro,
  };
}
