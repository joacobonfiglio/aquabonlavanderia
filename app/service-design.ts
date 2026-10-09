export type ServiceDesign = {
  name: string; title: [string, string]; image: string; alt: string; tag: string;
  caption: string; heading: [string, string]; intro: string; prepare: string;
  guideTitle: string; guide: { title: string; copy: string }[];
  closing: [string, string]; variant: "soft" | "tailored" | "color" | "detail";
};

export const serviceDesigns: Record<string, ServiceDesign> = {
  "lavado-de-acolchados": {
    name: "Lavado de acolchados", title: ["Volvé a descansar", "entre limpio."],
    image: "/blog/revisar-cuando-lavar-acolchado.webp", alt: "Revisión de un acolchado blanco sobre una cama antes de su lavado",
    tag: "EL CUIDADO TAMBIÉN DESCANSA", caption: "Acolchados · Cubrecamas · Frazadas",
    heading: ["Más espacio para lavar.", "Más cuidado para secar."],
    intro: "Un acolchado necesita espacio y un proceso compatible con su relleno. En Aquabon revisamos tamaño, etiqueta y estado para confirmar el lavado y el secado adecuados.",
    prepare: "Traelo seco y en una bolsa. Contanos si tiene manchas, roturas o si ya recibió algún tratamiento. Una foto de la etiqueta ayuda a orientarte antes de venir.",
    guideTitle: "¿Qué necesitás lavar?", guide: [
      { title: "Acolchados de una o dos plazas", copy: "Recibimos diferentes tamaños. El volumen y la etiqueta determinan si podemos realizar el servicio y qué proceso corresponde." },
      { title: "Pluma o rellenos especiales", copy: "Necesitan evaluación previa. Revisamos etiqueta, relleno, costuras y estado antes de confirmar si admiten lavado y secado adecuados." },
      { title: "Frazadas y cubrecamas", copy: "También los recibimos. Contanos el tamaño y el material: una frazada de lana no necesita el mismo cuidado que un cubrecama sintético." }
    ], closing: ["Tu cama, renovada.", "Tu descanso, de vuelta."], variant: "soft"
  },
  tintoreria: {
    name: "Tintorería", title: ["Cada prenda especial", "merece su cuidado."],
    image: "/blog/revisar-prendas-tintoreria.webp", alt: "Revisión de un saco de vestir junto a otras prendas especiales",
    tag: "UN SOLO PUNTO DE CONTACTO", caption: "Recepción · Evaluación · Seguimiento",
    heading: ["Tu prenda tiene historia.", "La escuchamos antes de tratarla."],
    intro: "En Aquabon recibimos tu prenda, registramos sus características y centralizamos el seguimiento. Cuando necesita un tratamiento especializado, lo coordinamos fuera del local y te avisamos cuando vuelve disponible.",
    prepare: "Contanos qué originó la mancha y si probaste algún producto. Traé la prenda con su etiqueta; fotos del tejido y del daño sirven para una primera orientación.",
    guideTitle: "Lo delicado se decide prenda por prenda", guide: [
      { title: "Sacos y trajes", copy: "Revisamos tejido, forro, estructura y detalles. El tratamiento se define para la prenda completa, no solo por su material exterior." },
      { title: "Vestidos y prendas especiales", copy: "Apliques, adornos, costuras y etiquetas pueden limitar el proceso. La evaluación presencial permite confirmar viabilidad y condiciones." },
      { title: "Tapados y camperas", copy: "Forro, relleno y accesorios también cuentan. Recibimos el abrigo y confirmamos si necesita lavado o un tratamiento especializado." }
    ], closing: ["Tu prenda especial.", "Nuestro seguimiento."], variant: "tailored"
  },
  planchado: {
    name: "Planchado", title: ["Menos arrugas.", "Más tiempo para vos."],
    image: "/services/planchado-v3.webp", alt: "Plancha de vapor sobre una camisa de algodón celeste en una tabla de planchar",
    tag: "EL ÚLTIMO DETALLE CUENTA", caption: "Camisas y prendas aptas para planchado",
    heading: ["La terminación que buscás.", "Una tarea que te ahorrás."],
    intro: "Dejá tus camisas y prendas aptas para planchado en Gascón 2189. Revisamos tejido y etiqueta, confirmamos el trabajo y te avisamos por WhatsApp cuando está terminado.",
    prepare: "Contanos cuántas prendas son y qué tipo de tejido tienen. Si también necesitás lavado, pedilo al consultar: el planchado es un servicio aparte del valet.",
    guideTitle: "Elegí lo que necesitás resolver", guide: [
      { title: "Solo planchado", copy: "Podés consultar por una sola prenda o por varias. Revisamos la etiqueta y el estado antes de confirmar el servicio." },
      { title: "Camisas y ropa cotidiana", copy: "Consultanos por cantidad y composición. La temperatura y el cuidado se definen según las indicaciones de cada prenda." },
      { title: "Lavado más planchado", copy: "El valet incluye lavado, secado y doblado. Para sumar planchado, solicitalo de forma específica al hacer el pedido." }
    ], closing: ["Una camisa pendiente.", "Una tarea resuelta."], variant: "detail"
  },
  "lavado-y-planchado-de-camisas": {
    name: "Lavado y planchado de camisas", title: ["Camisas cuidadas.", "Una tarea menos."],
    image: "/blog/preparar-camisa-antes-lavar.webp", alt: "Preparación de una camisa celeste antes de su lavado y planchado",
    tag: "LAVADO Y TERMINACIÓN EN UN PEDIDO", caption: "Cuello · Puños · Tejido · Etiqueta",
    heading: ["Cada camisa se revisa.", "Cada terminación se confirma."],
    intro: "Recibimos tus camisas en Gascón 2189 y revisamos tejido, etiqueta, manchas y detalles antes de confirmar lavado, planchado, precio y plazo.",
    prepare: "Contanos cuántas camisas son y señalá manchas o cuidados particulares. Traelas con su etiqueta y avisá si ya aplicaste algún producto.",
    guideTitle: "Qué revisamos antes de comenzar", guide: [
      { title: "Cuello, puños y axilas", copy: "Inspeccionamos las zonas de mayor roce y acumulación. No prometemos remover toda marca: el resultado depende del tejido y su antigüedad." },
      { title: "Tejido y color", copy: "Algodón, lino, mezclas o fibras delicadas requieren decisiones diferentes de lavado, secado y temperatura de plancha." },
      { title: "Lavado más terminación", copy: "Este pedido combina servicios de manera específica. El planchado no se incluye automáticamente en el valet de ropa." }
    ], closing: ["Tus camisas, listas.", "Primero, revisémoslas."], variant: "detail"
  },
  "tenido-de-prendas": {
    name: "Teñido de prendas", title: ["Otra oportunidad", "para tu color."],
    image: "/services/tenido-v3.webp", alt: "Prenda de algodón en un baño de tinte azul con una herramienta de madera",
    tag: "EL CAMBIO EMPIEZA EN EL TEJIDO", caption: "Recuperación o cambio de color, previa evaluación",
    heading: ["Antes del nuevo color,", "conocemos la prenda."],
    intro: "¿Una prenda desteñida o un color que querés cambiar? Evaluamos composición, tono original, costuras y desgaste. Te orientamos sobre lo que puede lograrse antes de aceptar el trabajo.",
    prepare: "Mandanos una foto de la prenda y su etiqueta. Contanos el color actual y el que buscás; el resultado se evalúa en persona y no se promete un tono exacto.",
    guideTitle: "¿Recuperar o cambiar?", guide: [
      { title: "Recuperar un color apagado", copy: "Puede ser posible en algunos casos. La composición y el desgaste influyen en la absorción y en la uniformidad del resultado." },
      { title: "Pasar de claro a oscuro", copy: "Suele ser una opción más viable, siempre sujeta a revisión. El color de origen participa en el resultado final." },
      { title: "Tejidos y costuras diferentes", copy: "No todas las fibras aceptan teñido. Costuras, cierres y partes sintéticas pueden tomar el color de forma distinta o conservar su tono." }
    ], closing: ["Ese color que imaginás.", "Primero, conversemos."], variant: "color"
  },
  "arreglos-y-costura": {
    name: "Arreglos y costura", title: ["Un pequeño arreglo.", "Más vida para tu ropa."],
    image: "/services/costura-v3.webp", alt: "Máquina de coser trabajando sobre el dobladillo de una prenda de jean azul",
    tag: "LOS DETALLES HACEN LA DIFERENCIA", caption: "Ajustes y reparaciones según cada prenda",
    heading: ["Antes de dejar de usarla,", "veamos qué podemos arreglar."],
    intro: "Una costura o un ajuste pueden cambiar cuánto usás una prenda. En Aquabon recibimos pequeños arreglos y reparaciones para valorar el tejido, el alcance y la viabilidad del trabajo.",
    prepare: "Traé la prenda y explicanos qué necesitás cambiar. Las medidas y el alcance se confirman en persona antes de aceptar el arreglo.",
    guideTitle: "Mostranos el detalle que te preocupa", guide: [
      { title: "Una costura para reparar", copy: "Necesitamos revisar el daño, el tejido y las costuras cercanas. Una foto puede ayudar a orientarte, pero no reemplaza ver la prenda." },
      { title: "Un ajuste para evaluar", copy: "Contanos qué parte querés modificar. Revisamos medidas, margen disponible y construcción antes de confirmar si se puede realizar." },
      { title: "Una prenda con desgaste", copy: "La reparación depende del estado del material. Te indicamos las posibilidades y los límites antes de aceptar el trabajo." }
    ], closing: ["Ese detalle pendiente.", "Empecemos por verlo."], variant: "detail"
  },
  "lavado-de-zapatillas": {
    name: "Lavado de zapatillas", title: ["Tus zapatillas.", "Listas para seguir."],
    image: "/blog/revisar-zapatillas-antes-lavar.webp", alt: "Revisión de zapatillas de tela y materiales combinados antes de su limpieza",
    tag: "EL PRÓXIMO PASO EMPIEZA ACÁ", caption: "Material · Limpieza · Secado",
    heading: ["Para seguir usándolas,", "cuidamos cómo las limpiamos."],
    intro: "Revisamos material, color, manchas, desgaste y uniones. Definimos si el lavado es adecuado y cómo secarlas sin calor innecesario. La limpieza no revierte daños ni garantiza dejarlas como nuevas.",
    prepare: "Enviá fotos del par, la suela y las zonas con manchas o desgaste. Avisanos si hay partes despegadas o si ya aplicaste algún producto.",
    guideTitle: "El material cambia el cuidado", guide: [
      { title: "Tela y materiales textiles", copy: "Revisamos el tejido, los colores y las uniones. Que una zapatilla sea de tela no significa que cualquier proceso sea adecuado." },
      { title: "Cuero, gamuza o combinaciones", copy: "Necesitan una evaluación particular. Confirmamos si podemos realizar la limpieza después de revisar material y estado." },
      { title: "Manchas y desgaste", copy: "Contanos qué pasó y hace cuánto. Algunas manchas no salen y la limpieza no recupera decoloración, roturas o daños previos." }
    ], closing: ["Más caminos por andar.", "Consultá por tu par."], variant: "soft"
  },
  "lavado-de-camperas-y-tapados": {
    name: "Camperas y tapados", title: ["Tu abrigo favorito.", "Su cuidado indicado."],
    image: "/blog/revisar-tapado-etiqueta-forro.webp", alt: "Revisión de la etiqueta y el forro de un tapado de paño azul",
    tag: "CUIDAMOS LO QUE TE ABRIGA", caption: "Etiqueta · Forro · Relleno",
    heading: ["Por fuera y por dentro,", "cada abrigo es distinto."],
    intro: "Una campera liviana, un abrigo de pluma y un tapado de paño necesitan cuidados distintos. Revisamos la prenda completa antes de confirmar lavado o tratamiento especializado, precio y plazo.",
    prepare: "Traé tu abrigo con la etiqueta e informanos manchas, roturas, accesorios y tratamientos previos. Si necesita tintorería, coordinamos el tratamiento especializado fuera del local.",
    guideTitle: "¿Qué tipo de abrigo tenés?", guide: [
      { title: "Camperas livianas o acolchadas", copy: "Revisamos tejido, impermeabilización, cierres, relleno y etiqueta. Confirmamos si admite lavado y secado o necesita otro proceso." },
      { title: "Camperas de pluma", copy: "La etiqueta, el relleno y el estado son claves. La recepción no implica confirmar el lavado: primero evaluamos la prenda." },
      { title: "Tapados de paño o lana", copy: "Forro, estructura y accesorios pueden cambiar el tratamiento. Aquabon centraliza recepción y seguimiento cuando corresponde un cuidado especializado." }
    ], closing: ["Cuando vuelva el frío,", "volvé a tu abrigo."], variant: "tailored"
  },
  "retiro-y-entrega-de-ropa": {
    name: "Retiro y entrega", title: ["Tu ropa va y vuelve.", "Vos seguís con tu día."],
    image: "/services/retiro-v3.webp", alt: "Entrega de una bolsa de ropa cerrada en la puerta de una vivienda",
    tag: "MENOS TRASLADOS EN TU DÍA", caption: "Centro y zonas cercanas · Consultá cobertura",
    heading: ["El cuidado de siempre.", "Una forma de acercarlo."],
    intro: "Coordinamos el retiro de tu ropa y su devolución cuando está lista, según zona y disponibilidad. Escribinos con tu dirección y el servicio: confirmamos recorrido, costo y condiciones antes de acordar.",
    prepare: "Prepará la ropa en una bolsa bien cerrada. Informanos cantidad de prendas, manchas, daños y requisitos particulares antes del retiro.",
    guideTitle: "¿Qué querés que retiremos?", guide: [
      { title: "Una bolsa de ropa cotidiana", copy: "El retiro se solicita principalmente para valet: lavado, secado y doblado. Contanos la cantidad y tu dirección para verificar el recorrido." },
      { title: "Acolchados o prendas especiales", copy: "Consultanos antes de coordinar. La disponibilidad depende del volumen y de la evaluación del servicio que necesita cada pieza." },
      { title: "Tu zona y tus horarios", copy: "Priorizamos el centro de Mar del Plata y zonas cercanas. La cobertura, el costo y la franja se confirman para cada pedido." }
    ], closing: ["Menos idas y vueltas.", "Empezá con un mensaje."], variant: "detail"
  }
};
