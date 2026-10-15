export const serviceSubjects: Record<string, string> = {
  "lavado-de-acolchados": "ropa de cama",
  tintoreria: "prendas delicadas",
  planchado: "ropa para planchar",
  "lavado-y-planchado-de-camisas": "camisas",
  "lavado-de-zapatillas": "calzado",
  "lavado-de-camperas-y-tapados": "abrigos",
  "retiro-y-entrega-de-ropa": "lavado a domicilio",
  "tenido-de-prendas": "recuperación del color",
  "arreglos-y-costura": "reparación de ropa",
};
export const headingCopy = (text: string) => text.replace(/\./g, "").trim();

export const landingSectionCopy: Record<string, { process: string; faq: string; contact: string }> = {
  '/empresas': { process: 'Cómo coordinamos el cuidado de textiles comerciales', faq: 'Dudas sobre limpieza de ropa para comercios', contact: 'Pedí una propuesta para tus textiles de trabajo' },
  '/empresas/lavanderia-airbnb': { process: 'Cómo organizar el lavado entre reservas', faq: 'Consultas sobre sábanas y toallas de alquileres temporarios', contact: 'Coordiná el cuidado de la ropa de tu alojamiento' },
  '/empresas/lavanderia-hoteles': { process: 'Recepción y entrega de textiles de hotelería', faq: 'Preguntas sobre limpieza de ropa blanca para hoteles', contact: 'Consultá por sábanas y toallas de tu hotel' },
  '/empresas/lavanderia-restaurantes': { process: 'Cómo coordinar la limpieza de manteles y uniformes', faq: 'Dudas sobre cuidado de textiles gastronómicos', contact: 'Contanos qué ropa usa tu restaurante' },
  '/empresas/lavado-ropa-deportiva': { process: 'Coordinación de equipaciones para clubes', faq: 'Preguntas sobre limpieza de prendas de entrenamiento', contact: 'Organizá el lavado de la ropa de tu equipo' },
  '/empresas/lavado-de-uniformes': { process: 'Cómo coordinamos la limpieza de ropa laboral', faq: 'Dudas sobre el cuidado de uniformes de trabajo', contact: 'Consultá por las prendas de tu comercio' },
  '/empresas/lavanderia-centros-de-estetica': { process: 'Organización del lavado de toallas y batas', faq: 'Consultas sobre textiles de salones de belleza', contact: 'Definí el cuidado de la ropa de tu centro de estética' },
  '/lavanderia-mar-del-plata': { process: 'Cómo elegir el cuidado adecuado para tu ropa', faq: 'Dudas para elegir entre lavado, planchado y tintorería', contact: 'Encontrá el tratamiento indicado para tus prendas' },
  '/lavanderia-centro-mar-del-plata': { process: 'Cómo dejar y retirar ropa en nuestro lavadero del centro', faq: 'Consultas sobre atención y pedidos en Gascón 2189', contact: 'Coordiná tu visita al lavadero de Gascón 2189' },
  '/tintoreria-centro-mar-del-plata': { process: 'Cómo recibimos y seguimos tus prendas delicadas', faq: 'Dudas sobre cuidado profesional de ropa en el centro', contact: 'Consultá por la limpieza especializada de tu prenda' },
};
