import { business } from "./site";

// Barrios con retiro y entrega. Centro, Güemes, Chauvin y La Perla los confirmó Joaco el 24/10/2026;
// Playa Grande, Plaza Mitre, Stella Maris, Los Troncos, Parque Luro, Punta Mogotes y Constitución
// entraron con el plan de SEO del 07/11/2026. Costo y disponibilidad se coordinan en cada pedido.
// Vistas previas autorizadas: no declaran sucursales ni retiro garantizado.
// TODO(joaco): días y franjas de recorrido por barrio. Hasta tenerlos, cada página dice que el día y
// el horario se coordinan por WhatsApp, y ninguna promete un recorrido fijo.
// `noDryCleaning` saca la palabra "tintorería" del title, el H1 y los H2 de un barrio
// (Constitución: Tintorería Constitución es cliente de Traka en esa zona).

export type Neighborhood = {
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  heading: string;
  detail: string;
  focusTitle: string;
  focus: string;
  cards: readonly { title: string; copy: string }[];
  pickup: string;
  pickupCards: readonly { title: string; copy: string }[];
  faqs: readonly { question: string; answer: string }[];
  services: readonly string[];
  nearby: readonly string[];
  guides: readonly string[];
  extra: { href: string; label: string } | null;
  noDryCleaning?: boolean;
};

export const neighborhoods: Record<string, Neighborhood> = {
  "lavanderia-guemes-mar-del-plata": {
    name: "Güemes", title: "Lavandería en Güemes, Mar del Plata | Aquabon",
    description: `Lavandería en Güemes: valet, acolchados y tintorería con retiro y entrega. Aquabon está en ${business.street}, a minutos de la zona. Escribinos.`,
    h1: "Lavandería en Güemes",
    intro: `Güemes es de caminar: la calle llena de comercios, bares y locales, y alrededor casas bajas y edificios de pocos pisos. Si vivís o trabajás ahí, te ahorrás el viaje: pasamos a buscar la ropa y te la devolvemos lavada, seca y doblada. Y si preferís traerla, estamos en ${business.street}, a pocas cuadras.`,
    heading: "Lo que más nos traen de Güemes",
    detail: "La ropa de la semana de departamentos sin lavarropas grande, acolchados en los cambios de estación y prendas de trabajo de los locales de la zona. Separá la ropa de todos los días de las piezas de cama y contanos si algo necesita planchado o tiene una mancha.",
    pickup: "Pasamos a buscar la ropa en Güemes y te la entregamos cuando está lista. Mandanos tu dirección, qué tenés para lavar y en qué franja estás, y te confirmamos costo y día antes de pasar. Si no estás, también podés dejarla en el local de camino al trabajo.",
    pickupCards: [
      { title: "Coordinamos por WhatsApp", copy: "Nos escribís con la dirección y el servicio. Te confirmamos el costo del retiro y la franja horaria antes de salir." },
      { title: "O la traés al local", copy: `${business.street} queda a pocas cuadras de la zona de comercios. Sin turno, en el horario del local.` },
    ],
    focusTitle: "Antes de armar el pedido en Güemes",
    focus: "Mandanos qué prendas tenés, cuántos acolchados son y una foto de sus etiquetas. Con eso coordinamos el retiro o te decimos qué traer al local.",
    cards: [
      { title: "Ropa cotidiana", copy: "El valet incluye lavado, secado y doblado. Si necesitás camisas planchadas, pedilo como un servicio aparte." },
      { title: "Acolchados y cubrecamas", copy: "Decinos tamaño y relleno. Si no sabés de qué material es, mandanos la etiqueta y lo vemos." },
    ],
    faqs: [
      { question: "¿Puedo consultar por ropa y acolchados en un mismo pedido?", answer: "Sí. Contanos qué ropa tenés y cuántos acolchados querés lavar. Son servicios distintos, pero los coordinamos en un mismo pedido." },
      { question: "Vivo en un departamento chico de Güemes, ¿me sirve el valet?", answer: "Sí, es el caso más común de la zona. Juntás la ropa de la semana, nos la dejás o la pasamos a buscar, y vuelve lavada, seca y doblada sin ocupar tu casa con el tendedero." },
      { question: "Tengo un local en la zona, ¿lavan ropa de trabajo?", answer: "Sí, textiles de uso general: delantales, manteles, toallas y uniformes lavables. Contanos rubro, cantidad y cada cuánto lo necesitás y te armamos una propuesta." },
    ],
    services: ["/servicios/valet-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/tintoreria"],
    nearby: ["lavanderia-chauvin-mar-del-plata", "lavanderia-plaza-mitre-mar-del-plata"],
    guides: ["diferencia-entre-lavanderia-y-tintoreria", "simbolos-de-lavado-de-un-acolchado", "como-secar-un-acolchado"],
    extra: null,
  },
  "lavanderia-chauvin-mar-del-plata": {
    name: "Chauvin", title: "Lavandería en Chauvin, Mar del Plata | Aquabon",
    description: `Lavandería en Chauvin: valet de ropa, acolchados y tintorería, con retiro y entrega. Aquabon está en ${business.street}. Consultá por WhatsApp.`,
    h1: "Lavandería en Chauvin",
    intro: `Chauvin es barrio de casas y edificios bajos, tranquilo y a pocas cuadras de ${business.street}. Desde acá no hace falta que cargues la bolsa: pasamos a buscar la ropa de todos los días y los acolchados, y te los devolvemos listos. Si estás cerca, también podés acercarte caminando.`,
    heading: "Lo que más nos traen de Chauvin",
    detail: "Ropa de familia, acolchados y frazadas cuando cambia la estación, y abrigos al final del invierno. El valet y los acolchados se lavan por separado, porque no todo admite el mismo proceso.",
    pickup: "Retiramos y entregamos en Chauvin. Nos mandás la dirección y qué tenés para lavar, y coordinamos el costo y la franja horaria antes de pasar. Por la cercanía con el local, también es la zona donde más gente prefiere traer la bolsa y llevarse el acolchado el mismo día que lo avisamos.",
    pickupCards: [
      { title: "Retiro coordinado", copy: "Decinos dirección, servicio y en qué momento estás. Te confirmamos costo y día por WhatsApp antes de salir." },
      { title: "A pocas cuadras", copy: `Si preferís traerla, ${business.street} queda cerca. Te orientamos en el mostrador y te confirmamos importe y plazo ahí mismo.` },
    ],
    focusTitle: "Prepará tu consulta desde Chauvin",
    focus: "Para la ropa de todos los días, decinos más o menos cuánta es. Para acolchados, sumá tamaño, relleno y fotos de manchas o costuras dañadas. Así coordinamos el retiro sabiendo qué buscamos.",
    cards: [
      { title: "Una bolsa de ropa", copy: "Avisanos si hay prendas delicadas o con cuidados especiales. La etiqueta nos dice qué puede ir al valet." },
      { title: "Un acolchado para guardar", copy: "Contanos si tiene manchas, olor o relleno apelmazado. Lo revisamos antes de aceptarlo y te decimos qué se puede esperar según su material y estado." },
    ],
    faqs: [
      { question: "¿Qué datos necesitan si tengo varios acolchados?", answer: "Cantidad, tamaño y relleno de cada uno. Si alguno tiene manchas o una etiqueta distinta, mandanos fotos por separado para poder orientarte." },
      { question: "¿Puedo dejar la ropa de paso y retirarla otro día?", answer: `Sí. ${business.street} queda a pocas cuadras de Chauvin: la dejás cuando te queda cómodo y te avisamos por WhatsApp cuando está lista.` },
      { question: "Guardo el acolchado hasta el año que viene, ¿conviene lavarlo antes?", answer: "Sí. Guardarlo con transpiración, polvo o una mancha invisible es lo que hace que el año siguiente aparezca olor o marca amarilla. Lavalo y guardalo seco." },
    ],
    services: ["/servicios/valet-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/lavado-de-camperas-y-tapados"],
    nearby: ["lavanderia-guemes-mar-del-plata", "lavanderia-los-troncos-mar-del-plata"],
    guides: ["como-guardar-la-ropa-de-invierno", "cada-cuanto-lavar-un-acolchado", "como-secar-un-acolchado"],
    extra: null,
  },
  "lavanderia-la-perla-mar-del-plata": {
    name: "La Perla", title: "Lavandería en La Perla, Mar del Plata | Aquabon",
    description: `Lavandería en La Perla: ropa, acolchados y ropa blanca de alquileres. Retiro y entrega; local en ${business.street}. Consultá por WhatsApp.`,
    h1: "Lavandería en La Perla",
    intro: `La Perla es playa y edificios: muchos departamentos, mucho alquiler temporario y poco lugar para tender. Por eso acá nos piden sobre todo ropa de la semana, acolchados y ropa blanca entre huéspedes. Retiramos y entregamos en la zona, o la traés a ${business.street}.`,
    heading: "Lo que más nos traen de La Perla",
    detail: "Sábanas, fundas y toallas de departamentos que se alquilan, acolchados después de la temporada y ropa de todos los días de quienes viven frente al mar. Si es para un alojamiento, separá sábanas, fundas y toallas, y armamos el pedido según cómo las usás.",
    pickup: "Retiramos y entregamos en La Perla. Para un departamento que se alquila, lo más práctico es avisarnos la fecha del recambio: coordinamos el retiro y la entrega alrededor de la salida del huésped. Mandanos dirección, piso y cantidad de piezas y te confirmamos costo y horario.",
    pickupCards: [
      { title: "Recambios con fecha", copy: "Decinos cuándo se va el huésped y cuántas piezas son. Coordinamos el retiro y la entrega para que la cama esté lista a tiempo." },
      { title: "Ropa de tu casa", copy: "Valet, acolchados y prendas especiales, con el mismo retiro. Nos escribís y te confirmamos costo y día." },
    ],
    focusTitle: "Consultanos desde La Perla",
    focus: "Decinos si es ropa tuya, acolchados o textiles de un alojamiento, cuántas piezas son y para cuándo los necesitás. Te confirmamos si llegamos antes de coordinar.",
    cards: [
      { title: "Ropa y acolchados de tu casa", copy: "Los pasamos a buscar o los traés al local. Para piezas de cama, una foto de la etiqueta y del estado nos ayuda a orientarte." },
      { title: "Sábanas y toallas de un alojamiento", copy: "Si necesitás lavados seguidos, contanos cantidades y frecuencia y armamos una propuesta para tu alojamiento." },
    ],
    faqs: [
      { question: "¿Puedo consultar por la ropa de un alquiler temporario en La Perla?", answer: "Sí. Decinos cantidad de sábanas, fundas y toallas, cada cuánto hacés recambio y la dirección. Te confirmamos condiciones y retiro antes de empezar." },
      { question: "Vivo frente al mar y la ropa queda con olor a humedad, ¿se saca?", answer: "Muchas veces sí, cuando es olor a encierro o a secado lento. Si ya hay moho instalado en el tejido, te lo decimos antes: ahí el resultado depende de cuánto avanzó." },
      { question: "¿Entran a buscar la ropa al departamento?", answer: "Coordinamos el retiro en la puerta del edificio o donde nos indiques. Decinos dirección, piso y timbre, y en qué franja hay alguien." },
    ],
    services: ["/servicios/valet-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/retiro-y-entrega-de-ropa"],
    nearby: ["lavanderia-centro-mar-del-plata", "lavanderia-constitucion-mar-del-plata"],
    guides: ["como-preparar-la-ropa-blanca-de-un-alquiler-temporario", "checklist-recambio-ropa-blanca-airbnb", "como-secar-un-acolchado"],
    extra: { href: "/empresas/lavanderia-airbnb", label: "Ver el servicio para Airbnb y alquileres temporarios" },
  },
  "lavanderia-playa-grande-mar-del-plata": {
    name: "Playa Grande", title: "Lavandería en Playa Grande, Mar del Plata | Aquabon",
    description: `Lavandería en Playa Grande: ropa blanca de alquileres, acolchados y valet, con retiro y entrega. Aquabon, ${business.street}. Escribinos.`,
    h1: "Lavandería en Playa Grande",
    intro: "Playa Grande vive de temporada: balnearios, torres sobre la costa y departamentos que cambian de huésped todos los fines de semana. Acá el lavado no puede esperar, así que retiramos y entregamos en la zona y coordinamos el recambio alrededor de la fecha que nos digas. Lo que más nos piden es ropa blanca y acolchados.",
    heading: "Lo que más nos traen de Playa Grande",
    detail: "Sábanas, fundas y toallas entre huéspedes, acolchados y cubrecamas de departamentos que se alquilan, y ropa de la semana de quienes viven ahí todo el año. También prendas de salir, después de una temporada de arena, salitre y protector solar.",
    pickup: "Retiramos y entregamos en Playa Grande. Si alquilás el departamento, decinos la fecha de salida del huésped y cuántos juegos de cama y toallas son: coordinamos el retiro y la entrega para que la unidad esté lista antes del próximo check-in. Costo y franja horaria te los confirmamos antes de pasar.",
    pickupCards: [
      { title: "Entre huésped y huésped", copy: "Nos pasás la fecha del recambio y las piezas por unidad. Coordinamos retiro y entrega alrededor de ese día." },
      { title: "Varias unidades", copy: "Si manejás más de un departamento en la zona, contanos cuántos y con qué frecuencia y te armamos una propuesta." },
    ],
    focusTitle: "Antes del recambio en Playa Grande",
    focus: "Contanos cuántas unidades son, cuántos juegos de sábanas y toallas por unidad y la fecha del próximo huésped. Si hay una pieza manchada, mandanos la foto aparte: la tratamos antes de que la mancha se fije con el lavado.",
    cards: [
      { title: "Ropa blanca por unidad", copy: "Sábanas, fundas, toallas y toallones contados y doblados por juego, para que el recambio sea sacar y poner." },
      { title: "Arena, salitre y protector solar", copy: "Son las tres marcas típicas de la zona. Avisanos qué prenda las tiene y hace cuánto: el protector solar deja una marca amarilla que conviene tratar temprano." },
    ],
    faqs: [
      { question: "Alquilo un departamento en Playa Grande, ¿llegan a tiempo para el recambio?", answer: "Decinos la fecha de salida del huésped con la mayor antelación posible y te confirmamos si llegamos antes de que coordines. En temporada la agenda se llena, así que cuanto antes avisás, mejor." },
      { question: "¿Sacan las manchas de protector solar de las toallas?", answer: "Muchas veces sí, sobre todo si la pieza no pasó por secado con calor. La marca amarilla del protector se fija con el calor, así que no la seques: separala y avisanos." },
      { question: "¿Lavan acolchados y cubrecamas de departamentos de alquiler?", answer: "Sí. Contanos tamaño y relleno de cada uno. Entre temporadas es el momento para dejarlos limpios y guardados, y así evitar el olor a encierro del próximo verano." },
    ],
    services: ["/servicios/retiro-y-entrega-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/valet-de-ropa"],
    nearby: ["lavanderia-stella-maris-mar-del-plata", "lavanderia-los-troncos-mar-del-plata"],
    guides: ["como-preparar-la-ropa-blanca-de-un-alquiler-temporario", "checklist-recambio-ropa-blanca-airbnb", "como-sacar-manchas-dificiles-de-la-ropa"],
    extra: { href: "/empresas/lavanderia-airbnb", label: "Ver el servicio para Airbnb y alquileres temporarios" },
  },
  "lavanderia-plaza-mitre-mar-del-plata": {
    name: "Plaza Mitre", title: "Lavandería en Plaza Mitre, Mar del Plata | Aquabon",
    description: `Lavandería cerca de Plaza Mitre: valet, acolchados y tintorería. Aquabon está en ${business.street}, a minutos. Consultá por WhatsApp.`,
    h1: "Lavandería en Plaza Mitre",
    intro: `Alrededor de Plaza Mitre hay edificios de departamentos, oficinas y comercios, y mucha gente que pasa por la zona todos los días. Es de las zonas que tenemos más a mano: ${business.street} queda a minutos, y además retiramos y entregamos. Dejás la bolsa de camino y te avisamos cuando está.`,
    heading: "Lo que más nos traen de Plaza Mitre",
    detail: "Camisas y ropa de trabajo de quienes trabajan en la zona, ropa de la semana de departamentos y prendas de tintorería: sacos, trajes y tapados que necesitan revisión antes de cualquier proceso.",
    pickup: "Retiramos y entregamos en la zona de Plaza Mitre. Mandanos la dirección y qué tenés para lavar y te confirmamos costo y franja. Por la distancia con el local, también es cómodo dejar la bolsa al pasar y retirarla cuando te avisamos.",
    pickupCards: [
      { title: "De camino al trabajo", copy: `${business.street} está a minutos de la plaza. Sin turno, en el horario del local.` },
      { title: "O lo coordinamos", copy: "Si no te da el día, pasamos a buscar la ropa y te la llevamos. Nos escribís con la dirección y la franja." },
    ],
    focusTitle: "Antes de traer tu pedido",
    focus: "Si son camisas, contanos cuántas y de qué tela, y si las querés lavadas y planchadas o solo planchadas. Si es una prenda de vestir, mandanos foto de la prenda y de la etiqueta antes de venir y te orientamos.",
    cards: [
      { title: "Camisas para toda la semana", copy: "Lavado y planchado en un mismo pedido. Revisamos cuello, puños y axilas, y te decimos qué marcas pueden quedar según el tejido." },
      { title: "Un saco o un traje", copy: "Lo recibimos, lo revisamos y hacemos el seguimiento del tratamiento. Vos tratás solo con Aquabon." },
    ],
    faqs: [
      { question: "Trabajo en la zona, ¿puedo dejar la ropa y retirarla el mismo día?", answer: "Depende del servicio y del trabajo de esa semana. Te confirmamos el plazo cuando dejás el pedido, antes de aceptarlo, así sabés si llegás." },
      { question: "¿Lavan y planchan camisas por cantidad?", answer: "Sí. Decinos cuántas son y de qué tela y te pasamos importe y plazo. Si solo necesitás planchado, también lo hacemos: es un servicio aparte del valet." },
      { question: "¿Reciben uniformes o ropa de oficina?", answer: "Sí, prendas laborales lavables de uso general. Para volumen o frecuencia semanal, contanos el rubro y te armamos una propuesta." },
    ],
    services: ["/servicios/lavado-y-planchado-de-camisas", "/servicios/tintoreria", "/servicios/valet-de-ropa"],
    nearby: ["lavanderia-centro-mar-del-plata", "lavanderia-guemes-mar-del-plata"],
    guides: ["como-lavar-camisas-sin-arruinarlas", "que-prendas-conviene-llevar-a-la-tintoreria", "como-sacar-manchas-dificiles-de-la-ropa"],
    extra: null,
  },
  "lavanderia-stella-maris-mar-del-plata": {
    name: "Stella Maris", title: "Lavandería en Stella Maris, Mar del Plata | Aquabon",
    description: `Lavandería en Stella Maris: tintorería, acolchados de plumas y valet, con retiro y entrega. Aquabon, ${business.street}. Escribinos.`,
    h1: "Lavandería en Stella Maris",
    intro: "Stella Maris mira al mar desde la zona del Torreón: torres, departamentos con vista y casas antiguas sobre las barrancas. Es viento, humedad y salitre todo el año, y eso se nota en los abrigos y en la ropa de cama. Retiramos y entregamos en la zona, o la traés al local.",
    heading: "Lo que más nos traen de Stella Maris",
    detail: "Prendas de tintorería y abrigos de paño, acolchados de plumas al final del invierno y ropa de la semana de departamentos donde no hay dónde tender. El viento de la zona hace que mucha gente directamente no cuelgue afuera.",
    pickup: "Retiramos y entregamos en Stella Maris. Nos mandás la dirección, el piso y qué tenés para lavar, y coordinamos costo y franja antes de pasar. Para un acolchado de plumas o un tapado conviene mandarnos antes una foto de la etiqueta: así llegamos sabiendo qué vamos a recibir.",
    pickupCards: [
      { title: "Piezas grandes sin cargarlas", copy: "Acolchados, cubrecamas y tapados pesan y ocupan. Los pasamos a buscar y te los devolvemos listos para guardar." },
      { title: "Coordinamos el día", copy: "Decinos dirección, piso y franja en la que hay alguien. Te confirmamos costo y horario por WhatsApp." },
    ],
    focusTitle: "Antes de que pasemos por Stella Maris",
    focus: "Para un abrigo o una prenda de vestir, mandanos fotos de la prenda, del forro y de la etiqueta. Para un acolchado, el tamaño y el relleno. Con eso te orientamos antes de coordinar el retiro.",
    cards: [
      { title: "Tapados y abrigos de paño", copy: "Revisamos tejido, forro, estructura y accesorios. Si necesita un tratamiento especializado, lo coordinamos nosotros y hacemos el seguimiento." },
      { title: "Acolchados de plumas", copy: "El secado es la etapa que define el resultado. Revisamos etiqueta, relleno y costuras antes de confirmar el lavado." },
    ],
    faqs: [
      { question: "Vivo en una torre y no tengo dónde tender, ¿el valet me sirve?", answer: "Sí, es el motivo más común por el que nos escriben de la zona. Nos dejás la bolsa o la pasamos a buscar, y vuelve lavada, seca y doblada." },
      { question: "La humedad y el salitre dejan la ropa con olor, ¿se puede tratar?", answer: "Sí, cuando el olor viene de secado lento o de encierro en un placard. Contanos hace cuánto está guardada y si llegó a aparecer una marca o moho." },
      { question: "¿Reciben acolchados de pluma de dos plazas o más grandes?", answer: "Sí. Lo que define el proceso es el tamaño, el relleno y el estado, no solo las plazas. Mandanos la etiqueta y te confirmamos cómo lo vamos a lavar y secar." },
    ],
    services: ["/servicios/tintoreria", "/servicios/lavado-de-acolchados", "/servicios/lavado-de-camperas-y-tapados"],
    nearby: ["lavanderia-playa-grande-mar-del-plata", "lavanderia-los-troncos-mar-del-plata"],
    guides: ["como-lavar-un-acolchado-de-plumas", "como-limpiar-un-tapado-sin-danarlo", "como-sacar-olor-a-humedad-de-un-acolchado"],
    extra: null,
  },
  "lavanderia-los-troncos-mar-del-plata": {
    name: "Los Troncos", title: "Lavandería en Los Troncos, Mar del Plata | Aquabon",
    description: `Lavandería en Los Troncos: tintorería, acolchados de plumas y tapados, con retiro y entrega. Aquabon, ${business.street}. Consultanos.`,
    h1: "Lavandería en Los Troncos",
    intro: `Los Troncos es el barrio de los chalets y las calles arboladas, con casas grandes y mucha prenda de guardar: tapados, sacos, acolchados de plumas y ropa de cama de más de una cama. Retiramos y entregamos en la zona, y el local está en ${business.street}, cerca.`,
    heading: "Lo que más nos traen de Los Troncos",
    detail: "Tintorería y abrigos de paño, acolchados de plumas en los cambios de estación y ropa blanca de casas con varias habitaciones. También prendas guardadas hace tiempo, que vuelven del placard con olor a encierro.",
    pickup: "Retiramos y entregamos en Los Troncos. Como suelen ser pedidos de varias piezas, contanos cuántas son y de qué tipo para que vayamos preparados. Te confirmamos costo y franja horaria antes de pasar.",
    pickupCards: [
      { title: "Pedidos de varias piezas", copy: "Acolchados, cubrecamas, frazadas y tapados en el mismo retiro. Decinos cuántas piezas y de qué tamaño." },
      { title: "Ropa de cama de la casa", copy: "Sábanas y toallas de varias habitaciones, lavadas y dobladas por juego si lo necesitás así." },
    ],
    focusTitle: "Antes de que pasemos por Los Troncos",
    focus: "Hacé una lista rápida de las piezas: cuántos acolchados y de qué tamaño, cuántos abrigos, cuántas prendas de vestir. Para tintorería, sumá fotos de la etiqueta y de cualquier mancha, y contanos si ya le aplicaron algo.",
    cards: [
      { title: "Prendas de vestir y tapados", copy: "Las recibimos, las revisamos y hacemos el seguimiento del tratamiento hasta que vuelven. Vos tratás solo con Aquabon." },
      { title: "Ropa guardada hace tiempo", copy: "Si estuvo meses en un placard, puede volver con olor a encierro o marcas que no estaban. Mostranos la zona y te decimos qué se puede hacer." },
    ],
    faqs: [
      { question: "Tengo varias piezas de cama, ¿las lavan todas juntas?", answer: "Las recibimos en un mismo pedido, pero cada tipo de pieza va por su proceso. Un acolchado de plumas no se lava igual que un cubrecama sintético: por eso los revisamos uno por uno." },
      { question: "¿Qué hacen con un tapado de paño que está guardado desde el invierno pasado?", answer: "Lo revisamos entero: tejido, forro, estructura y accesorios. Te decimos si admite lavado o si necesita un tratamiento especializado, y en ese caso lo coordinamos nosotros." },
      { question: "¿La ropa guardada con olor a humedad se recupera?", answer: "Muchas veces sí, si es olor a encierro. Si hay moho que ya atacó la fibra, el resultado depende de cuánto avanzó, y preferimos decírtelo antes de aceptar la prenda." },
    ],
    services: ["/servicios/tintoreria", "/servicios/lavado-de-acolchados", "/servicios/lavado-de-camperas-y-tapados"],
    nearby: ["lavanderia-stella-maris-mar-del-plata", "lavanderia-chauvin-mar-del-plata"],
    guides: ["como-guardar-la-ropa-de-invierno", "como-limpiar-un-saco", "como-sacar-olor-a-humedad-de-un-acolchado"],
    extra: null,
  },
  "lavanderia-parque-luro-mar-del-plata": {
    name: "Parque Luro", title: "Lavandería en Parque Luro, Mar del Plata | Aquabon",
    description: `Lavandería en Parque Luro, zona norte: valet de ropa y lavado de acolchados, con retiro y entrega. Aquabon, ${business.street}. Escribinos.`,
    h1: "Lavandería en Parque Luro",
    intro: "Parque Luro es zona norte de casas y edificios nuevos, con familias que juntan ropa de toda la semana. Acá lo que más nos piden es valet y acolchados: lo que ocupa tiempo y espacio en casa. Retiramos y entregamos en la zona, así no tenés que cruzar la ciudad con la bolsa.",
    heading: "Lo que más nos traen de Parque Luro",
    detail: "Ropa de familia por volumen, acolchados y frazadas en los cambios de estación, y ropa de trabajo. Si juntás varias cargas, contanos más o menos cuántas prendas son y lo coordinamos en un solo retiro.",
    pickup: "Retiramos y entregamos en Parque Luro. Por la distancia con el local, es la zona donde más conviene coordinar retiro en lugar de traer la bolsa. Mandanos la dirección, qué tenés para lavar y la franja en la que hay alguien, y te confirmamos el costo antes de pasar.",
    pickupCards: [
      { title: "Mejor coordinar el retiro", copy: "Nos escribís con dirección, servicio y franja horaria. Te confirmamos costo y día antes de salir." },
      { title: "Ropa de toda la semana", copy: "Si es bastante, decinos más o menos cuántas prendas. Así te pasamos importe y plazo de una." },
    ],
    focusTitle: "Antes de coordinar el retiro",
    focus: "Decinos cuánta ropa es, si hay prendas delicadas y si algún acolchado tiene manchas o relleno apelmazado. Con una foto de las etiquetas alcanza para orientarte.",
    cards: [
      { title: "Valet por volumen", copy: "Lavado, secado y doblado de la ropa de todos los días. Separamos por color, tejido y cuidado antes de lavar." },
      { title: "Acolchados y frazadas", copy: "Decinos tamaño y relleno de cada pieza. Los revisamos antes de confirmar el proceso y el secado." },
    ],
    faqs: [
      { question: "Estoy lejos del local, ¿igual retiran?", answer: "Sí, Parque Luro está entre las zonas donde retiramos y entregamos. Mandanos la dirección y te confirmamos costo y disponibilidad antes de coordinar." },
      { question: "Junto mucha ropa en la semana, ¿cómo me conviene mandarla?", answer: "En una sola bolsa bien cerrada, con las prendas delicadas separadas. Contanos más o menos cuántas prendas son y si hay manchas, y te pasamos importe y plazo." },
      { question: "¿Pueden retirar y entregar el mismo día?", answer: "El plazo depende del servicio y del trabajo de esa semana; te lo confirmamos cuando hacés el pedido. Nunca te lo prometemos antes de ver qué tenés para lavar." },
    ],
    services: ["/servicios/valet-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/retiro-y-entrega-de-ropa"],
    nearby: ["lavanderia-constitucion-mar-del-plata", "lavanderia-plaza-mitre-mar-del-plata"],
    guides: ["cuanto-detergente-usar", "cada-cuanto-lavar-un-acolchado", "como-secar-ropa-dentro-de-casa"],
    extra: null,
  },
  "lavanderia-punta-mogotes-mar-del-plata": {
    name: "Punta Mogotes", title: "Lavandería en Punta Mogotes, Mar del Plata | Aquabon",
    description: `Lavandería en Punta Mogotes: ropa blanca de alquileres, acolchados y valet, con retiro y entrega. Aquabon, ${business.street}. Consultanos.`,
    h1: "Lavandería en Punta Mogotes",
    intro: "Punta Mogotes es balnearios, complejos y departamentos de temporada, sobre la costa sur. En verano se llena y la ropa blanca rota todo el tiempo; el resto del año queda la arena, el salitre y lo que hay que guardar limpio. Retiramos y entregamos en la zona.",
    heading: "Lo que más nos traen de Punta Mogotes",
    detail: "Sábanas, fundas y toallas de departamentos y complejos de temporada, acolchados y cubrecamas al cerrar la temporada, y ropa de la semana de quienes viven ahí todo el año.",
    pickup: "Retiramos y entregamos en Punta Mogotes. Si alquilás, lo práctico es avisarnos la fecha del recambio y las piezas por unidad: coordinamos retiro y entrega alrededor de ese día. Es una de las zonas más alejadas del local, así que cuanto antes nos escribas, mejor podemos coordinar.",
    pickupCards: [
      { title: "Temporada y recambios", copy: "Decinos fechas y cantidad de juegos por unidad. Coordinamos para que la cama esté lista antes del próximo huésped." },
      { title: "Cierre de temporada", copy: "Acolchados, cubrecamas y frazadas lavados antes de guardarlos, para que el verano siguiente no aparezca olor a encierro." },
    ],
    focusTitle: "Antes del retiro en Punta Mogotes",
    focus: "Contanos cuántas unidades son, cuántos juegos de sábanas y toallas por unidad y para qué fecha los necesitás. Las piezas con manchas, separadas y con foto: así las tratamos antes del lavado.",
    cards: [
      { title: "Ropa blanca contada por juego", copy: "Te la devolvemos doblada y agrupada por unidad, para que el recambio sea sacar y poner." },
      { title: "Arena y salitre", copy: "Sacudí la arena antes de guardar la pieza en la bolsa: dentro del lavarropas raya el tejido y cuesta más sacarla." },
    ],
    faqs: [
      { question: "¿Llegan a Punta Mogotes para retirar?", answer: "Sí, es una de las zonas donde retiramos y entregamos. Por la distancia conviene avisarnos con tiempo: te confirmamos costo y disponibilidad antes de que coordines." },
      { question: "¿Lavan ropa blanca de un complejo de varias unidades?", answer: "Sí. Contanos cuántas unidades, cuántos juegos por unidad y con qué frecuencia, y te armamos una propuesta por volumen." },
      { question: "¿Qué hago con las toallas con arena y protector solar?", answer: "Sacudí la arena y no las seques con calor: el protector solar deja una marca amarilla que se fija con el secado. Separalas, avisanos cuáles son y las tratamos antes." },
    ],
    services: ["/servicios/retiro-y-entrega-de-ropa", "/servicios/lavado-de-acolchados", "/servicios/valet-de-ropa"],
    nearby: ["lavanderia-playa-grande-mar-del-plata", "lavanderia-stella-maris-mar-del-plata"],
    guides: ["checklist-recambio-ropa-blanca-airbnb", "como-preparar-la-ropa-blanca-de-un-alquiler-temporario", "como-guardar-la-ropa-de-invierno"],
    extra: { href: "/empresas/lavanderia-airbnb", label: "Ver el servicio para Airbnb y alquileres temporarios" },
  },
  "lavanderia-constitucion-mar-del-plata": {
    name: "Constitución", title: "Lavandería en Constitución, Mar del Plata | Aquabon",
    description: `Lavandería en la zona de Constitución: valet de ropa, acolchados y zapatillas, con retiro y entrega. Aquabon, ${business.street}. Escribinos.`,
    h1: "Lavandería en Constitución",
    intro: "La zona de Constitución es avenida, edificios nuevos y mucho movimiento: departamentos de alquiler, gente joven y salidas de fin de semana. Lo que más nos piden acá es valet, acolchados y zapatillas. Retiramos y entregamos en la zona, o la traés al local.",
    heading: "Lo que más nos traen de Constitución",
    detail: "Ropa de la semana de departamentos sin lugar para tender, acolchados en los cambios de estación y zapatillas: blancas, de tela y de running. Si tenés las tres cosas, se coordinan en un mismo pedido.",
    pickup: "Retiramos y entregamos en la zona de Constitución. Mandanos la dirección, el piso y qué tenés para lavar, y te confirmamos costo y franja horaria antes de pasar. Es una zona alejada del local, así que conviene coordinar el retiro con algo de anticipación.",
    pickupCards: [
      { title: "Retiro en la puerta", copy: "Decinos dirección, piso y timbre, y en qué franja hay alguien. Te confirmamos costo y día por WhatsApp." },
      { title: "Valet, acolchados y zapatillas", copy: "Se coordinan en un mismo retiro, aunque cada uno tenga su proceso y su plazo." },
    ],
    focusTitle: "Antes de coordinar el retiro",
    focus: "Decinos cuánta ropa es, el tamaño y relleno de los acolchados y, si mandás zapatillas, de qué material son. Una foto del par y de la suela nos alcanza para orientarte.",
    cards: [
      { title: "Valet de ropa", copy: "Lavado, secado y doblado de la ropa de todos los días, separada por color, tejido y cuidado." },
      { title: "Zapatillas", copy: "Revisamos material, color, uniones y desgaste, y las secamos sin calor de más. No revierte daños previos." },
    ],
    faqs: [
      { question: "¿Retiran en la zona de Constitución?", answer: "Sí, retiramos y entregamos. Mandanos la dirección y qué tenés para lavar y te confirmamos costo y disponibilidad antes de coordinar." },
      { question: "¿Lavan zapatillas blancas y de tela?", answer: "Sí, después de revisarlas. Mirá que el material cambia el cuidado: tela, cuero y gamuza no se limpian igual. Mandanos una foto del par y te decimos qué le conviene." },
      { question: "Vivo en un departamento sin balcón, ¿qué me conviene?", answer: "El valet: te lo devolvemos seco y doblado, así no secás adentro. Secar en un ambiente cerrado es lo que termina dejando olor a humedad en la ropa y condensación en las paredes." },
    ],
    services: ["/servicios/valet-de-ropa", "/servicios/lavado-de-zapatillas", "/servicios/lavado-de-acolchados"],
    nearby: ["lavanderia-parque-luro-mar-del-plata", "lavanderia-la-perla-mar-del-plata"],
    guides: ["se-pueden-lavar-zapatillas-en-el-lavarropas", "como-secar-ropa-dentro-de-casa", "como-secar-zapatillas-sin-deformarlas"],
    extra: null,
    noDryCleaning: true,
  },
};
export type NeighborhoodSlug = keyof typeof neighborhoods;
