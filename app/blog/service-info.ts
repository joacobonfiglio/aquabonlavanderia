// Servicio al que deriva cada guía del blog: lo usan el lateral (ArticleLayout) y el bloque local
// que va antes de las preguntas frecuentes (LocalCta).
// Regla del plan de SEO del 07/11/2026: toda guía lleva a un servicio real, con un enlace cuyo
// texto incluya "en Mar del Plata". Si una guía no deriva a ningún servicio, no se publica.

export type ServiceKey = "acolchados" | "tintoreria" | "zapatillas" | "valet" | "airbnb" | "camperas" | "camisas";

export const serviceInfo: Record<ServiceKey, { path: string; name: string; copy: string; message: string; local: string }> = {
  acolchados: {
    path: "/servicios/lavado-de-acolchados", name: "Lavado de acolchados",
    copy: "Revisamos tamaño, tejido, relleno y estado antes de confirmar el proceso.",
    message: "Hola Aquabon, quería consultar por el lavado de un acolchado. Es de __ plazas y el relleno es __.",
    local: "Si estás en Mar del Plata, no hace falta que te pelees con el lavarropas: lo lavamos y lo secamos entero, y te lo devolvemos listo para usar o guardar. Te pasamos importe y plazo antes de que lo dejes.",
  },
  tintoreria: {
    path: "/servicios/tintoreria", name: "Tintorería",
    copy: "Revisamos etiqueta, tejido, forro, adornos y manchas antes de confirmar el tratamiento.",
    message: "Hola Aquabon, quería consultar por una prenda de tintorería. Les mando una foto de la prenda y de la etiqueta.",
    local: "Si estás en Mar del Plata, traenos la prenda antes de intentar nada más: revisamos tejido, forro y mancha, y te decimos qué se puede hacer y hasta dónde. Si necesita un tratamiento especializado, lo coordinamos nosotros.",
  },
  zapatillas: {
    path: "/servicios/lavado-de-zapatillas", name: "Lavado de zapatillas",
    copy: "Revisamos material, uniones, color, manchas y desgaste antes de confirmar el proceso.",
    message: "Hola Aquabon, quería consultar por el lavado de unas zapatillas. Les mando una foto del par.",
    local: "Si estás en Mar del Plata, dejanos el par y no lo arriesgues en el lavarropas de casa. Revisamos material, color y uniones, y las secamos sin calor de más para que no vuelva el olor.",
  },
  airbnb: {
    path: "/empresas/lavanderia-airbnb", name: "Lavandería para Airbnb",
    copy: "Sábanas, fundas y toallas lavadas, secas y dobladas para los recambios entre huéspedes.",
    message: "Hola Aquabon, quería consultar por el servicio de lavandería para un alojamiento. Tengo __ unidades y hago recambio cada __.",
    local: "Si alquilás en Mar del Plata, el recambio es tiempo que no tenés. Lavamos, secamos y doblamos la ropa blanca por juego, y coordinamos retiro y entrega alrededor de la fecha del próximo huésped.",
  },
  valet: {
    path: "/servicios/valet-de-ropa", name: "Valet de ropa",
    copy: "Separamos las prendas por color, tejido y cuidado antes de lavar, secar y doblar.",
    message: "Hola Aquabon, quería consultar por el servicio de valet de ropa. Son más o menos __ prendas.",
    local: "Si estás en Mar del Plata, podés dejarnos la bolsa de la semana y olvidarte: la separamos por color y tejido, la lavamos y te la devolvemos seca y doblada. Sin tendedero en el living ni humedad en el ambiente.",
  },
  camperas: {
    path: "/servicios/lavado-de-camperas-y-tapados", name: "Camperas y tapados",
    copy: "Revisamos tejido, forro, relleno y accesorios antes de confirmar cómo limpiar el abrigo.",
    message: "Hola Aquabon, quería consultar por la limpieza de una campera o un tapado. Les mando una foto de la prenda y de la etiqueta.",
    local: "Si estás en Mar del Plata, traenos el abrigo antes de guardarlo. Lo revisamos entero —tejido, forro, relleno y accesorios— y te decimos si admite lavado o si necesita un tratamiento especializado.",
  },
  camisas: {
    path: "/servicios/lavado-y-planchado-de-camisas", name: "Lavado y planchado de camisas",
    copy: "Revisamos cuello, puños, axilas y tejido antes de confirmar importe y plazo.",
    message: "Hola Aquabon, quiero lavar y planchar camisas. Son __. ¿Me pasan importe y plazo?",
    local: "Si estás en Mar del Plata, dejanos las camisas de la semana y las retirás listas para colgar. Revisamos cuello, puños y axilas, y te decimos antes qué marcas pueden quedar según el tejido.",
  },
};
