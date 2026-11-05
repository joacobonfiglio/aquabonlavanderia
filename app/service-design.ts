import type { CareSymbolName } from "./site";

export type ServiceDesign = {
  name: string; title: [string, string]; image: string; alt: string; tag: string;
  caption: string; heading: [string, string]; intro: string; prepare: string;
  guideTitle: string; guide: { title: string; copy: string }[];
  closing: [string, string]; variant: "soft" | "tailored" | "color" | "detail";
  symbol?: CareSymbolName;
  // Slugs de guías del blog relacionadas (enlazado interno servicio → guías).
  guides: string[];
};

export const serviceDesigns: Record<string, ServiceDesign> = {
  "valet-de-ropa": {
    symbol: "wash", guides: ["simbolos-de-lavado-de-la-ropa","cuanto-detergente-usar","como-evitar-que-la-ropa-se-encoja","como-secar-ropa-dentro-de-casa","como-sacar-manchas-de-sangre-de-la-ropa","como-sacar-olor-a-humo-de-la-ropa"],
    name: "Valet de ropa", title: ["Menos tiempo lavando,", "más tiempo para vos"],
    image: "/service-still-v2.webp", alt: "Ropa de uso diario lavada, seca y doblada, lista para guardar",
    tag: "", caption: "",
    heading: ["Todo el lavado.", "Ninguna tarea pendiente."],
    intro: "Lavado, secado y doblado de la ropa de todos los días, en un solo pedido. Separamos por color, tejido y cuidado antes de lavar, y te avisamos por WhatsApp cuando la bolsa está lista.",
    prepare: "Vaciá los bolsillos, contanos cuántas prendas son y avisanos si hay manchas o daños. Lo delicado, la lana y lo que dice limpieza en seco, separalo y lo vemos aparte.",
    guideTitle: "Antes de armar la bolsa", guide: [
      { title: "Ropa de todos los días", copy: "Remeras, pantalones, ropa interior y medias aptas para lavado con agua, siempre según su etiqueta. Es el punto de partida del valet." },
      { title: "Toallas y sábanas", copy: "También. Contanos cuántas son y de qué tamaño para pasarte importe y plazo. Los acolchados tienen su propio servicio." },
      { title: "Prendas especiales", copy: "Lana, sacos, prendas delicadas o con limpieza en seco van por otro camino. Separalas de la bolsa y mandanos una foto de la prenda y su etiqueta." }
    ], closing: ["Menos tiempo lavando,", "más tiempo para vos"], variant: "soft"
  },
  "lavado-de-acolchados": {
    symbol: "tumble", guides: ["cuanto-cuesta-lavar-un-acolchado", "cada-cuanto-lavar-un-acolchado", "como-lavar-un-acolchado-de-plumas", "como-secar-un-acolchado", "simbolos-de-lavado-de-un-acolchado", "como-sacar-olor-a-humedad-de-un-acolchado"],
    name: "Lavado de acolchados", title: ["Sin pelearte con el lavarropas", "ni con el tender"],
    image: "/blog/revisar-cuando-lavar-acolchado.webp", alt: "Revisión de un acolchado blanco sobre una cama antes de su lavado",
    tag: "EL CUIDADO TAMBIÉN DESCANSA", caption: "Acolchados · Cubrecamas · Frazadas",
    heading: ["Más espacio para lavar.", "Más cuidado para secar."],
    intro: "Un acolchado necesita espacio y un lavado que respete su relleno, justo lo que es difícil en casa. Revisamos tamaño, etiqueta y estado, y te confirmamos cómo lo vamos a lavar y secar.",
    prepare: "Traelo seco y en una bolsa. Contanos si tiene manchas, roturas o si ya recibió algún tratamiento. Una foto de la etiqueta ayuda a orientarte antes de venir.",
    guideTitle: "¿Qué necesitás lavar?", guide: [
      { title: "Acolchados de una o dos plazas", copy: "Recibimos distintos tamaños. Según el volumen y la etiqueta, te confirmamos el proceso." },
      { title: "Pluma o rellenos especiales", copy: "Los revisamos con más detalle: etiqueta, relleno, costuras y estado, antes de confirmar el lavado y el secado." },
      { title: "Frazadas y cubrecamas", copy: "También los recibimos. Contanos el tamaño y el material: una frazada de lana no necesita el mismo cuidado que un cubrecama sintético." }
    ], closing: ["Tu cama renovada,", "sin ocupar tu casa"], variant: "soft"
  },
  tintoreria: {
    symbol: "dryclean", guides: ["que-prendas-conviene-llevar-a-la-tintoreria", "que-es-la-limpieza-en-seco", "diferencia-entre-lavanderia-y-tintoreria", "como-lavar-ropa-delicada", "como-sacar-manchas-de-vino-de-la-ropa", "como-sacar-manchas-de-aceite-de-la-ropa"],
    name: "Tintorería", title: ["Tu prenda especial,", "con seguimiento de principio a fin"],
    image: "/blog/revisar-prendas-tintoreria.webp", alt: "Revisión de un saco de vestir junto a otras prendas especiales",
    tag: "UN SOLO PUNTO DE CONTACTO", caption: "Recepción · Evaluación · Seguimiento",
    heading: ["Tu prenda tiene historia.", "La escuchamos antes de tratarla."],
    intro: "Vos dejás la prenda en Aquabon y nosotros nos ocupamos del resto: la revisamos, anotamos lo importante y, cuando necesita un tratamiento especializado, lo coordinamos fuera del local. Te avisamos cuando vuelve.",
    prepare: "Contanos qué originó la mancha y si probaste algún producto. Traé la prenda con su etiqueta; fotos del tejido y del daño sirven para una primera orientación.",
    guideTitle: "Lo delicado se decide prenda por prenda", guide: [
      { title: "Sacos y trajes", copy: "Revisamos tejido, forro, estructura y detalles. El tratamiento se define para la prenda completa, no solo por su material exterior." },
      { title: "Vestidos y prendas especiales", copy: "Apliques, adornos, costuras y etiquetas pueden limitar el proceso. Al verla te confirmamos qué se puede hacer." },
      { title: "Tapados y camperas", copy: "Forro, relleno y accesorios también cuentan. Recibimos el abrigo y confirmamos si necesita lavado o un tratamiento especializado." }
    ], closing: ["Tu prenda especial,", "nuestro seguimiento"], variant: "tailored"
  },
  "limpieza-de-vestidos-de-fiesta": {
    symbol: "dryclean", guides: ["que-prendas-conviene-llevar-a-la-tintoreria", "que-es-la-limpieza-en-seco", "como-lavar-ropa-delicada", "como-sacar-manchas-de-vino-de-la-ropa"],
    name: "Limpieza de vestidos de fiesta", title: ["Limpieza de vestidos de fiesta", "en Mar del Plata"],
    image: "/blog/revisar-prendas-tintoreria.webp", alt: "Revisión profesional de prendas especiales antes de definir su limpieza",
    tag: "TEJIDO · FORRO · ADORNOS · MANCHAS", caption: "Recepción y seguimiento en Gascón 2189",
    heading: ["Una prenda con muchos detalles.", "Una evaluación completa."],
    intro: "Antes de tocar tu vestido revisamos etiqueta, tejido, forro, estructura, adornos y manchas. Te explicamos qué se puede hacer, el precio y el plazo antes de aceptar el trabajo.",
    prepare: "Mandá fotos del vestido completo, la etiqueta, los adornos y cualquier mancha. Contanos qué pasó, cuándo y si le pusiste algo; la confirmación final la damos al verlo.",
    guideTitle: "Qué revisamos antes de confirmar", guide: [
      { title: "Capas, forro y estructura", copy: "El material exterior es solo una parte. Costuras, copas, varillas, entretelas y forros pueden limitar o cambiar el tratamiento." },
      { title: "Lentejuelas, bordados y pedrería", copy: "Miramos cómo están sujetos, su estado y cómo pueden reaccionar. No todos los adornos aguantan el mismo proceso." },
      { title: "Manchas y tratamientos previos", copy: "Influyen el origen, la antigüedad y lo que se le aplicó. Te decimos qué se puede hacer, sin prometer que salga todo." }
    ], closing: ["Ese vestido especial,", "revisado antes de limpiarlo"], variant: "tailored"
  },
  planchado: {
    symbol: "iron", guides: ["como-lavar-camisas-sin-arruinarlas", "simbolos-de-lavado-de-la-ropa"],
    name: "Planchado", title: ["Menos arrugas,", "más tiempo para vos"],
    image: "/services/planchado-v3.webp", alt: "Plancha de vapor sobre una camisa de algodón celeste en una tabla de planchar",
    tag: "EL ÚLTIMO DETALLE CUENTA", caption: "Camisas y prendas aptas para planchado",
    heading: ["La terminación que buscás.", "Una tarea que te ahorrás."],
    intro: "Dejá tus camisas y otras prendas en Gascón 2189 y olvidate de la plancha. Revisamos tejido y etiqueta, y te avisamos por WhatsApp cuando están listas.",
    prepare: "Contanos cuántas prendas son y de qué tela. Si también necesitás lavarlas, decilo al consultar: el planchado va aparte del valet.",
    guideTitle: "Elegí lo que necesitás resolver", guide: [
      { title: "Solo planchado", copy: "Una prenda o varias. Revisamos la etiqueta y el estado antes de confirmar." },
      { title: "Camisas y ropa de todos los días", copy: "Contanos cuántas son y de qué tela. La temperatura y el cuidado los define la etiqueta de cada prenda." },
      { title: "Lavado más planchado", copy: "El valet incluye lavado, secado y doblado. Si además la querés planchada, pedilo al hacer el pedido." }
    ], closing: ["Una camisa pendiente,", "una tarea resuelta"], variant: "detail"
  },
  "lavado-y-planchado-de-camisas": {
    symbol: "iron", guides: ["como-lavar-camisas-sin-arruinarlas", "como-sacar-manchas-de-transpiracion", "como-sacar-maquillaje-de-la-ropa"],
    name: "Lavado y planchado de camisas", title: ["Camisas listas para usar,", "una tarea menos"],
    image: "/blog/preparar-camisa-antes-lavar.webp", alt: "Preparación de una camisa celeste antes de su lavado y planchado",
    tag: "LAVADO Y TERMINACIÓN EN UN PEDIDO", caption: "Cuello · Puños · Tejido · Etiqueta",
    heading: ["Cada camisa se revisa.", "Cada terminación se confirma."],
    intro: "Nos dejás las camisas y te las devolvemos lavadas y planchadas. Antes revisamos tejido, etiqueta, manchas y detalles, y te confirmamos precio y plazo.",
    prepare: "Contanos cuántas camisas son y señalá manchas o cuidados particulares. Traelas con su etiqueta y avisá si ya aplicaste algún producto.",
    guideTitle: "Qué revisamos antes de comenzar", guide: [
      { title: "Cuello, puños y axilas", copy: "Revisamos las zonas que más se ensucian. No te prometemos sacar toda marca: depende del tejido y de cuánto tiempo tiene." },
      { title: "Tejido y color", copy: "Algodón, lino, mezclas o fibras delicadas requieren decisiones diferentes de lavado, secado y temperatura de plancha." },
      { title: "Lavado y planchado juntos", copy: "Un solo pedido, camisas listas para usar. El valet de ropa, en cambio, no incluye planchado." }
    ], closing: ["Tus camisas listas,", "primero las revisamos"], variant: "detail"
  },
  "tenido-de-prendas": {
    guides: ["como-evitar-que-la-ropa-destina", "como-lavar-jeans-sin-perder-color"],
    name: "Teñido de prendas", title: ["Otra oportunidad", "para tu color"],
    image: "/services/tenido-v3.webp", alt: "Prenda de algodón en un baño de tinte azul con una herramienta de madera",
    tag: "EL CAMBIO EMPIEZA EN EL TEJIDO", caption: "Recuperación o cambio de color, previa evaluación",
    heading: ["Antes del nuevo color,", "conocemos la prenda."],
    intro: "¿Una prenda desteñida o un color que querés cambiar? Revisamos composición, tono original, costuras y desgaste, y te decimos qué se puede lograr antes de aceptar el trabajo.",
    prepare: "Mandanos una foto de la prenda y su etiqueta. Contanos el color actual y el que buscás; lo confirmamos al verla y no te prometemos un tono exacto.",
    guideTitle: "¿Recuperar o cambiar?", guide: [
      { title: "Recuperar un color apagado", copy: "Puede ser posible en algunos casos. La composición y el desgaste influyen en la absorción y en la uniformidad del resultado." },
      { title: "Pasar de claro a oscuro", copy: "Suele funcionar mejor que al revés, pero primero vemos la prenda. El color de origen influye en el resultado." },
      { title: "Tejidos y costuras diferentes", copy: "No todas las fibras aceptan teñido. Costuras, cierres y partes sintéticas pueden tomar el color de forma distinta o conservar su tono." }
    ], closing: ["Ese color que imaginás,", "primero lo conversamos"], variant: "color"
  },
  "arreglos-y-costura": {
    guides: ["como-guardar-la-ropa-de-invierno", "hay-que-lavar-la-ropa-nueva"],
    name: "Arreglos y costura", title: ["Ese arreglo pendiente,", "resuelto sin vueltas"],
    image: "/services/costura-v3.webp", alt: "Máquina de coser trabajando sobre el dobladillo de una prenda de jean azul",
    tag: "LOS DETALLES HACEN LA DIFERENCIA", caption: "Ajustes y reparaciones según cada prenda",
    heading: ["Antes de dejar de usarla,", "veamos qué podemos arreglar."],
    intro: "Una costura o un ajuste pueden hacer que vuelvas a usar esa prenda. Traela junto con tu ropa: revisamos el tejido y lo que hay que hacer, y te confirmamos el arreglo antes de empezar.",
    prepare: "Traé la prenda y explicanos qué necesitás cambiar. Las medidas y el alcance se confirman en persona antes de aceptar el arreglo.",
    guideTitle: "Mostranos el detalle que te preocupa", guide: [
      { title: "Una costura para reparar", copy: "Necesitamos revisar el daño, el tejido y las costuras cercanas. Una foto puede ayudar a orientarte, pero no reemplaza ver la prenda." },
      { title: "Un ajuste", copy: "Contanos qué querés cambiar. Revisamos medidas, margen de tela y construcción antes de confirmar si se puede." },
      { title: "Una prenda con desgaste", copy: "La reparación depende del estado del material. Te indicamos las posibilidades y los límites antes de aceptar el trabajo." }
    ], closing: ["Ese detalle pendiente,", "empecemos por verlo"], variant: "detail"
  },
  "lavado-de-zapatillas": {
    guides: ["se-pueden-lavar-zapatillas-en-el-lavarropas", "como-secar-zapatillas-sin-deformarlas", "como-sacar-el-olor-de-las-zapatillas"],
    name: "Lavado de zapatillas", title: ["Tus zapatillas limpias,", "sin lavarlas en casa"],
    image: "/blog/revisar-zapatillas-antes-lavar.webp", alt: "Revisión de zapatillas de tela y materiales combinados antes de su limpieza",
    tag: "EL PRÓXIMO PASO EMPIEZA ACÁ", caption: "Material · Limpieza · Secado",
    heading: ["Para seguir usándolas,", "cuidamos cómo las limpiamos."],
    intro: "Nos dejás las zapatillas y no tenés que arriesgarlas en el lavarropas de casa. Revisamos material, color, manchas, desgaste y uniones, y las secamos sin calor de más. No revierte daños previos.",
    prepare: "Mandá fotos del par, la suela y las zonas con manchas o desgaste. Avisanos si hay partes despegadas o si ya les pusiste algún producto.",
    guideTitle: "El material cambia el cuidado", guide: [
      { title: "Tela y materiales textiles", copy: "Revisamos el tejido, los colores y las uniones. Que una zapatilla sea de tela no significa que cualquier proceso sea adecuado." },
      { title: "Cuero, gamuza o combinaciones", copy: "Las miramos con más detalle y te confirmamos la limpieza después de revisar material y estado." },
      { title: "Manchas y desgaste", copy: "Contanos qué pasó y hace cuánto. Algunas manchas no salen y la limpieza no recupera decoloración, roturas o daños previos." }
    ], closing: ["Más caminos por andar,", "consultá por tu par"], variant: "soft"
  },
  "lavado-de-camperas-y-tapados": {
    guides: ["como-limpiar-un-tapado-sin-danarlo", "como-limpiar-un-saco", "como-guardar-la-ropa-de-invierno", "que-es-la-limpieza-en-seco"],
    name: "Camperas y tapados", title: ["Tu abrigo favorito,", "con el cuidado que necesita"],
    image: "/blog/revisar-tapado-etiqueta-forro.webp", alt: "Revisión de la etiqueta y el forro de un tapado de paño azul",
    tag: "CUIDAMOS LO QUE TE ABRIGA", caption: "Etiqueta · Forro · Relleno",
    heading: ["Por fuera y por dentro,", "cada abrigo es distinto."],
    intro: "Una campera liviana, una de pluma y un tapado de paño necesitan cuidados distintos. Revisamos la prenda completa y te confirmamos cómo limpiarla, el precio y el plazo antes de empezar.",
    prepare: "Traé tu abrigo con la etiqueta y contanos si tiene manchas, roturas o tratamientos previos. Si necesita tintorería, la coordinamos nosotros.",
    guideTitle: "¿Qué tipo de abrigo tenés?", guide: [
      { title: "Camperas livianas o acolchadas", copy: "Revisamos tejido, impermeabilización, cierres, relleno y etiqueta, y te decimos si admite lavado o necesita otro proceso." },
      { title: "Camperas de pluma", copy: "La etiqueta, el relleno y el estado son clave. Primero la revisamos y después te confirmamos el lavado." },
      { title: "Tapados de paño o lana", copy: "Forro, estructura y accesorios pueden cambiar el tratamiento. Si necesita un cuidado especializado, lo coordinamos y hacemos el seguimiento." }
    ], closing: ["Cuando vuelva el frío,", "volvé a tu abrigo"], variant: "tailored"
  },
  "retiro-y-entrega-de-ropa": {
    guides: ["como-preparar-la-ropa-blanca-de-un-alquiler-temporario", "checklist-recambio-ropa-blanca-airbnb", "como-secar-ropa-dentro-de-casa", "cuanto-detergente-usar"],
    name: "Retiro y entrega", title: ["Tu ropa va y vuelve,", "vos seguís con tu día"],
    image: "/services/retiro-v3.webp", alt: "Entrega de una bolsa de ropa cerrada en la puerta de una vivienda",
    tag: "MENOS TRASLADOS EN TU DÍA", caption: "Centro · Güemes · Chauvin · La Perla",
    heading: ["El cuidado de siempre.", "Una forma de acercarlo."],
    intro: "Pasamos a buscar tu ropa y te la llevamos cuando está lista, en Centro, Güemes, Chauvin y La Perla. Escribinos con tu dirección y el servicio, y te confirmamos costo y horario antes de pasar.",
    prepare: "Poné la ropa en una bolsa bien cerrada y contanos cuántas prendas son y si hay manchas, daños o algo especial.",
    guideTitle: "¿Qué querés que retiremos?", guide: [
      { title: "Una bolsa de ropa de todos los días", copy: "Lo más común: valet con retiro. Te la devolvemos lavada, seca y doblada. Contanos cuánta ropa es y tu dirección." },
      { title: "Acolchados o prendas especiales", copy: "Consultanos antes de coordinar: depende del volumen y de lo que necesite cada pieza." },
      { title: "Tu zona y tus horarios", copy: "Retiramos en Centro, Güemes, Chauvin y La Perla. Coordinamos la dirección, el costo y la franja horaria de cada pedido." }
    ], closing: ["Menos idas y vueltas,", "empezá con un mensaje"], variant: "detail"
  }
};
