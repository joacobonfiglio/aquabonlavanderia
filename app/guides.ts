// Guías del blog: una sola lista para el índice, las páginas de servicio y /llms.txt.
import type { ServiceKey } from "./blog/service-info";

// `tags`: ids de otros temas (guidePillars) a los que la guía también pertenece, además del de su cluster.
export type Guide = { title: string; description: string; href: string; cluster: string; date: string; image: string; alt: string; tags?: string[] };

export const guides: Guide[] = [
  {title:"Ropa de playa: lo que la sal y la arena le hacen a tus prendas",description:"Por qué la sal endurece y destiñe, la arena raspa la tela y el lavarropas, y qué errores dejan la ropa de playa con olor y manchas.",href:"/blog/como-lavar-la-ropa-despues-de-la-playa",cluster:"Mar del Plata",date:"20 NOV",image:"/blog/secar-ropa-adentro-ventilacion.webp",alt:"Toallas y ropa tendidas junto a una ventana ventilada"},
  {title:"Cómo guardar el acolchado en verano para que no salga con hongos",description:"Qué le pasa al acolchado en el placard si entra sucio o húmedo, qué errores lo arruinan y cómo dejarlo listo para el invierno.",href:"/blog/como-guardar-acolchados-en-verano",cluster:"Acolchados",tags:["consejos-mar-del-plata"],date:"20 NOV",image:"/blog/comprobar-humedad-acolchado.webp",alt:"Comprobación de humedad en el relleno de un acolchado antes de guardarlo"},
  {title:"Campera de plumas: cómo limpiarla antes de guardarla",description:"Por qué una campera inflable se apelmaza, qué errores de lavado y secado la arruinan y cómo la dejamos lista para el próximo invierno.",href:"/blog/lavar-campera-de-plumas",cluster:"Camperas",date:"20 NOV",image:"/blog/revisar-tapado-etiqueta-forro.webp",alt:"Revisión del forro y la etiqueta de un abrigo antes de definir cómo limpiarlo"},
  {title:"Mancha de mate en la ropa: qué hacer (y qué no) para no arruinarla",description:"Por qué la yerba tiñe, qué errores la fijan para siempre (agua caliente, frotar, lavandina) y cómo la trabajamos según la tela.",href:"/blog/mancha-de-mate-en-la-ropa",cluster:"Manchas",date:"19 NOV",image:"/blog/tratar-mancha-vino-ropa.webp",alt:"Paño blanco absorbiendo una mancha fresca en una prenda clara, sin frotar"},
  {title:"Cómo lavar zapatillas blancas sin dañarlas",description:"Cepillos duros, agua caliente, lavandina y sol: qué raya, despega o amarillea unas zapatillas blancas y cómo las lavamos por zonas.",href:"/blog/como-lavar-zapatillas-blancas",cluster:"Zapatillas",date:"19 NOV",image:"/blog/revisar-zapatillas-antes-lavar.webp",alt:"Revisión de la unión entre suela y capellada de una zapatilla antes de limpiarla"},
  {title:"Cómo lavar un acolchado sin que se apelmace el relleno",description:"Por qué el relleno se amontona en el lavarropas de casa, qué errores dejan olor a humedad y cómo lo lavamos y secamos entero.",href:"/blog/como-lavar-un-acolchado",cluster:"Acolchados",date:"19 NOV",image:"/blog/comprobar-secado-acolchado.webp",alt:"Revisión del relleno de un acolchado durante el secado"},
  {title:"¿Cuándo llevar la campera a la tintorería?",description:"Las cuatro señales de que un abrigo necesita tintorería, por qué conviene antes de guardarlo y qué revisamos en una campera de pluma o un tapado de paño.",href:"/blog/cuando-llevar-la-campera-a-la-tintoreria",cluster:"Tapados",date:"8 NOV",image:"/blog/revisar-tapado-etiqueta-forro.webp",alt:"Revisión del forro y la etiqueta de un tapado azul antes de definir su limpieza"},
  {title:"Cómo sacar manchas difíciles de la ropa",description:"Vino, aceite, sangre, transpiración y protector solar: qué hacer en los primeros minutos, cómo tratar una mancha seca y cuándo no insistir en casa.",href:"/blog/como-sacar-manchas-dificiles-de-la-ropa",tags:["consejos-mar-del-plata"],cluster:"Manchas",date:"7 NOV",image:"/blog/tratar-mancha-vino-ropa.webp",alt:"Paño blanco absorbiendo una mancha fresca de vino en una prenda clara"},
  {title:"Checklist de recambio de ropa blanca entre huéspedes",description:"Qué sacar, contar, revisar y reponer en cada recambio de un alquiler temporario para que no falten piezas ni vuelva una sábana manchada a la cama.",href:"/blog/checklist-recambio-ropa-blanca-airbnb",tags:["consejos-mar-del-plata"],cluster:"Alquiler temporario",date:"5 NOV",image:"/blog/medir-detergente-para-lavar.webp",alt:"Carga de ropa preparada para lavar después de un recambio"},
  {title:"Cómo preparar la ropa blanca de un alquiler temporario para la temporada",description:"Inventario, lavado de lo guardado, revisión de manchas, kits por unidad y quién lava: todo lo que conviene resolver antes del primer huésped.",href:"/blog/como-preparar-la-ropa-blanca-de-un-alquiler-temporario",tags:["consejos-mar-del-plata"],cluster:"Alquiler temporario",date:"5 NOV",image:"/blog/secar-ropa-adentro-ventilacion.webp",alt:"Toallas y ropa blanca tendidas junto a una ventana ventilada"},
  {title:"¿Cuánto cuesta lavar un acolchado? De qué depende el precio",description:"Tamaño, relleno, estado, manchas y retiro: qué cambia el precio y qué mandar para saber cuánto sale el tuyo antes de llevarlo.",href:"/blog/cuanto-cuesta-lavar-un-acolchado",cluster:"Acolchados",date:"5 NOV",image:"/blog/revisar-cuando-lavar-acolchado.webp",alt:"Revisión de una mancha y el relleno de un acolchado antes de pasar el precio"},
  {title:"Cómo lavar un sweater de lana sin encogerlo ni deformarlo",description:"Cómo elegir entre lavado a mano, programa de lana o cuidado profesional, y secarlo extendido para conservar la forma.",href:"/blog/como-lavar-un-sweater-de-lana",cluster:"Lana",date:"16 OCT",image:"/blog/lavar-sweater-lana-secado-plano.webp",alt:"Cómo lavar un sweater de lana: prenda extendida sobre una toalla para retirar agua sin retorcer"},
  {title:"Cómo sacar olor a humo de la ropa sin dañar el tejido",description:"Qué hacer ante humo de cocina, cigarrillo, fogón o una exposición intensa, y cuándo no conviene tratar la prenda en casa.",href:"/blog/como-sacar-olor-a-humo-de-la-ropa",cluster:"Olores",date:"15 OCT",image:"/blog/revisar-ropa-con-olor-a-humo.webp",alt:"Persona revisando la etiqueta de una campera con olor a humo mientras separa la ropa afectada de prendas limpias"},
  {title:"Cómo secar ropa dentro de casa sin olor a humedad",description:"Centrifugado, separación, ventilación y control de humedad para secar de forma pareja sin llenar el ambiente de condensación.",href:"/blog/como-secar-ropa-dentro-de-casa",tags:["consejos-mar-del-plata"],cluster:"Secado",date:"14 OCT",image:"/blog/secar-ropa-adentro-ventilacion.webp",alt:"Ropa separada en un tendedero interior junto a una ventana abierta, un ventilador y un deshumidificador"},
  {title:"¿Hay que lavar la ropa nueva antes de usarla?",description:"Por qué conviene hacerlo, qué prendas priorizar y cómo organizar el primer lavado sin desteñir ni deformar.",href:"/blog/hay-que-lavar-la-ropa-nueva",cluster:"Cuidado de ropa",date:"13 OCT",image:"/blog/revisar-ropa-nueva-primer-lavado.webp",alt:"Revisión de la etiqueta y una costura interior de una prenda nueva antes del primer lavado"},
  {title:"Cuánto detergente usar en el lavarropas",description:"Cómo ajustar la dosis según concentración, carga, suciedad y agua, y reconocer cuándo sobra o falta producto.",href:"/blog/cuanto-detergente-usar",cluster:"Lavado",date:"12 OCT",image:"/blog/medir-detergente-para-lavar.webp",alt:"Detergente líquido medido en su tapa junto a una carga de ropa antes del lavado"},
  {title:"Cómo evitar que la ropa destiña al lavarla",description:"Cómo detectar color inestable, separar la carga y actuar si otra prenda ya tomó tinte sin empeorar el problema.",href:"/blog/como-evitar-que-la-ropa-destina",cluster:"Cuidado de ropa",date:"11 OCT",image:"/blog/probar-prenda-que-destine.webp",alt:"Prueba de transferencia de color con un paño blanco en una costura interior roja"},
  {title:"Cómo lavar jeans sin que pierdan color",description:"Etiqueta, lavado del revés, poca fricción y secado a la sombra: una rutina para cuidar denim azul, negro o con elastano.",href:"/blog/como-lavar-jeans-sin-perder-color",cluster:"Jeans",date:"10 OCT",image:"/blog/preparar-jeans-antes-lavar.webp",alt:"Preparación de un jean azul oscuro del revés antes de lavarlo con ropa oscura"},
  {title:"Cómo sacar manchas de transpiración de la ropa",description:"Qué hacer con marcas amarillas o rígidas en axilas: identificar la causa, pretratar con cuidado y revisar antes de aplicar calor.",href:"/blog/como-sacar-manchas-de-transpiracion",cluster:"Manchas",date:"9 OCT",image:"/blog/tratar-mancha-transpiracion-camisa.webp",alt:"Tratamiento suave de una marca de transpiración en la axila de una camisa celeste"},
  {title:"Cómo lavar ropa delicada a mano o en lavarropas",description:"Cómo elegir el método según etiqueta y estructura, reducir la fricción y secar sin deformar la prenda.",href:"/blog/como-lavar-ropa-delicada",tags:["tintoreria"],cluster:"Cuidado de ropa",date:"8 OCT",image:"/blog/preparar-ropa-delicada.webp",alt:"Preparación de ropa delicada con etiqueta, bolsa de malla, toalla y recipiente con agua"},
  {title:"Cómo lavar camisas sin arruinar cuello, puños ni forma",description:"Preparación, lavado, secado y planchado según tejido y etiqueta, con una rutina práctica para cuidar la camisa.",href:"/blog/como-lavar-camisas-sin-arruinarlas",cluster:"Camisas",date:"7 OCT",image:"/blog/preparar-camisa-antes-lavar.webp",alt:"Preparación de una camisa celeste antes del lavado con cuello y puños abiertos"},
  {title:"Cómo sacar maquillaje de la ropa sin extender la mancha",description:"Qué hacer con base, labial, polvo o máscara: retirar el exceso, pretratar según el tejido y revisar antes de secar.",href:"/blog/como-sacar-maquillaje-de-la-ropa",cluster:"Manchas",date:"6 OCT",image:"/blog/tratar-mancha-maquillaje-ropa.webp",alt:"Paño blanco absorbiendo una mancha de base de maquillaje en una camisa clara"},
  {title:"Símbolos de lavado de ropa: cómo leer la etiqueta",description:"Tina, triángulo, cuadrado, plancha y círculo: una guía visual para interpretar temperaturas, puntos, líneas y tachados.",href:"/blog/simbolos-de-lavado-de-la-ropa",cluster:"Cuidado de ropa",date:"5 OCT",image:"/blog/leer-simbolos-etiqueta-ropa.webp",alt:"Persona revisando la etiqueta de cuidado de una prenda azul antes del lavado"},
  {title:"Cómo evitar que la ropa se encoja al lavarla",description:"Etiqueta, temperatura, ciclo y secado: qué revisar para reducir el riesgo en algodón, lana y prendas mixtas.",href:"/blog/como-evitar-que-la-ropa-se-encoja",cluster:"Cuidado de ropa",date:"30 SEP",image:"/blog/evitar-encogimiento-ropa.webp",alt:"Revisión de la etiqueta de una remera junto a un sweater secándose en plano"},
  {title:"Cómo guardar la ropa de invierno sin que se arruine",description:"Lavado previo, secado, doblado, perchas y recipientes para evitar manchas, olor, deformación y polillas.",href:"/blog/como-guardar-la-ropa-de-invierno",tags:["tintoreria"],cluster:"Cuidado de ropa",date:"29 SEP",image:"/blog/guardar-ropa-invierno.webp",alt:"Sweaters doblados en una caja y un tapado en percha ancha dentro de un placard"},
  {title:"Cómo sacar el olor de las zapatillas",description:"Cómo distinguir humedad de suciedad, airear plantillas y tratar el interior sin limitarse a tapar el olor con perfume.",href:"/blog/como-sacar-el-olor-de-las-zapatillas",cluster:"Zapatillas",date:"27 SEP",image:"/blog/ventilar-plantillas-olor-zapatillas.webp",alt:"Zapatillas abiertas con plantillas separadas para ventilar y tratar el olor"},
  {title:"Cómo secar zapatillas sin deformarlas",description:"Un método con ventilación, papel absorbente y piezas separadas para conservar la forma y evitar calor innecesario.",href:"/blog/como-secar-zapatillas-sin-deformarlas",cluster:"Zapatillas",date:"26 SEP",image:"/blog/secar-zapatillas-aire-ventilado.webp",alt:"Zapatillas abiertas secándose con papel absorbente, plantillas y cordones separados"},
  {title:"¿Se pueden lavar zapatillas en el lavarropas? Riesgos que nadie te cuenta",description:"Qué le hacen el centrifugado, los golpes y el calor a la suela, la horma y el tambor, y qué revisar en el par antes de arriesgarlo.",href:"/blog/se-pueden-lavar-zapatillas-en-el-lavarropas",cluster:"Zapatillas",date:"25 SEP",image:"/blog/revisar-zapatillas-antes-lavar.webp",alt:"Revisión de materiales y uniones de dos zapatillas antes de limpiarlas"},
  {title:"¿Qué es la limpieza en seco y cómo funciona?",description:"Por qué utiliza líquido aunque se llame “en seco”, cuáles son sus etapas y qué indica la etiqueta de cuidado profesional.",href:"/blog/que-es-la-limpieza-en-seco",cluster:"Tintorería",date:"24 SEP",image:"/blog/inspeccion-limpieza-en-seco.webp",alt:"Inspección de un saco antes de colocarlo en una máquina profesional de cuidado textil"},
  {title:"Cómo limpiar un saco sin deformarlo",description:"Etiqueta, hombreras, forro, manchas y guardado: qué podés hacer entre usos y cuándo conviene consultar.",href:"/blog/como-limpiar-un-saco",cluster:"Sacos",date:"23 SEP",image:"/blog/revisar-mancha-saco-estructurado.webp",alt:"Revisión de una pequeña mancha y el forro de un saco estructurado gris"},
  {title:"Cómo limpiar un tapado sin dañarlo",description:"Cómo revisar etiqueta, forro y estructura; cuidados entre usos, lavado permitido y señales para consultar antes de mojarlo.",href:"/blog/como-limpiar-un-tapado-sin-danarlo",cluster:"Tapados",date:"22 SEP",image:"/blog/revisar-tapado-etiqueta-forro.webp",alt:"Revisión del forro y etiqueta de un tapado azul con cepillo y percha a mano"},
  {title:"¿Qué prendas conviene llevar a la tintorería?",description:"Una guía para decidir qué hacer con sacos, tapados, vestidos y prendas con forro o adornos según su etiqueta y construcción.",href:"/blog/que-prendas-conviene-llevar-a-la-tintoreria",cluster:"Tintorería",date:"21 SEP",image:"/blog/revisar-prendas-tintoreria.webp",alt:"Revisión de etiqueta y forro de un saco antes de enviarlo a tintorería"},
  {title:"¿Cuál es la diferencia entre lavandería, lavadero y tintorería?",description:"Qué llevar a cada uno según la etiqueta, el tejido y la estructura de la prenda, y qué conviene en Mar del Plata.",href:"/blog/diferencia-entre-lavanderia-y-tintoreria",tags:["tintoreria"],cluster:"Cuidado de ropa",date:"20 SEP",image:"/blog/elegir-lavanderia-o-tintoreria.webp",alt:"Ropa cotidiana y prendas estructuradas clasificadas por separado"},
  {title:"Cómo sacar el olor a humedad de un acolchado",description:"Cómo diferenciar olor a encierro, humedad interna y moho, y qué hacer en cada caso sin dañar el relleno.",href:"/blog/como-sacar-olor-a-humedad-de-un-acolchado",tags:["consejos-mar-del-plata"],cluster:"Acolchados",date:"19 SEP",image:"/blog/comprobar-humedad-acolchado.webp",alt:"Comprobación de humedad en el relleno de un acolchado"},
  {title:"¿Cada cuánto hay que lavar un acolchado?",description:"Una frecuencia práctica según funda, uso, mascotas, manchas, relleno y señales de suciedad.",href:"/blog/cada-cuanto-lavar-un-acolchado",cluster:"Acolchados",date:"18 SEP",image:"/blog/revisar-cuando-lavar-acolchado.webp",alt:"Revisión de una mancha y el relleno de un acolchado"},
  {title:"Cómo secar un acolchado sin que quede húmedo o apelmazado",description:"Secadora o aire libre: cómo elegir el método, redistribuir el relleno y comprobar la humedad interior.",href:"/blog/como-secar-un-acolchado",cluster:"Acolchados",date:"17 SEP",image:"/blog/comprobar-secado-acolchado.webp",alt:"Revisión del relleno de un acolchado durante el secado"},
  {title:"Símbolos de lavado de un acolchado: cómo leer la etiqueta",description:"Una guía visual para entender lavado, blanqueo, secado, planchado y cuidado profesional.",href:"/blog/simbolos-de-lavado-de-un-acolchado",cluster:"Acolchados",date:"16 SEP",image:"/blog/leer-etiqueta-acolchado.webp",alt:"Etiqueta de cuidado de un acolchado azul"},
  {title:"¿Cómo lavar un acolchado de plumas sin dañarlo?",description:"Qué revisar antes, cómo saber si entra en tu lavarropas y por qué el secado es la etapa decisiva.",href:"/blog/como-lavar-un-acolchado-de-plumas",cluster:"Acolchados",date:"15 SEP",image:"/blog/revisar-etiqueta-acolchado-plumas.webp",alt:"Revisión de un acolchado de plumas antes del lavado"}
];

// Temas del blog = pilares del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx, pestaña Pilares).
// Cada tema tiene su página indexable en /blog/tema/<id> (app/blog/TopicPage.tsx): es la señal de cluster
// para Google y el filtro por tema para quien lee. Una guía entra a un tema por su `cluster` (tema principal,
// define las migas de pan) o por `tags` (etiquetas de otros temas a los que también pertenece).
// Un tema sin guías no se muestra en el hub hasta que tenga la primera.
export type GuidePillar = {
  // `label`: cómo se nombra el tema dentro de una frase ("Guía de …", "Más guías de …").
  id: string; name: string; label: string; intro: string; clusters: string[];
  h1: string; metaTitle: string; metaDescription: string; lead: string; body: string[];
  // H2 propios de la página del tema (no se repiten entre temas).
  aboutHeading: string; listHeading: string;
  service: ServiceKey; image: string; alt: string;
};

export const guidePillars: GuidePillar[] = [
  {
    id: "manchas", aboutHeading: "Por qué una mancha se fija para siempre", listHeading: "Todas las guías de manchas", name: "Manchas", label: "manchas", clusters: ["Manchas"], service: "valet",
    intro: "Mate, vino, aceite, transpiración, maquillaje: qué fija cada mancha y por qué conviene traerla sin frotar.",
    h1: "Guías de manchas en la ropa", metaTitle: "Guías de manchas en la ropa | Aquabon",
    metaDescription: "Mate, vino, aceite, transpiración y maquillaje: qué fija cada mancha y qué la agranda. Guías de Aquabon, lavandería en Mar del Plata. Consultanos.",
    lead: "Qué fija cada mancha, qué la agranda y cuándo conviene traer la prenda sin tocarla.",
    body: [
      "Casi ninguna mancha se arruina sola. Se arruina con lo que le hacemos en los primeros minutos: frotar con la servilleta, tirarle agua caliente, probar lavandina o mezclar tres productos. Cada mancha tiene su química: las de taninos (mate, té, café, vino) se fijan con calor; las de proteína (sangre, huevo) se cocinan con agua caliente; las de grasa (aceite, protector solar, maquillaje) se expanden con agua sola y vuelven a aparecer después de secar.",
      "En estas guías te contamos qué pone en riesgo la prenda en cada caso. No para que pruebes en casa, sino para que no hagas lo que la deja para siempre. Y cuando una mancha ya está fijada, preferimos decírtelo antes: depende del tejido, del tiempo y de lo que se le haya aplicado.",
    ],
    image: "/blog/tratar-mancha-vino-ropa.webp", alt: "Paño blanco absorbiendo una mancha fresca en una prenda clara",
  },
  {
    id: "zapatillas", aboutHeading: "Qué arruina un par de zapatillas", listHeading: "Todas las guías de zapatillas", name: "Zapatillas", label: "zapatillas", clusters: ["Zapatillas"], service: "zapatillas",
    intro: "Lavado, secado, olor y materiales: lo que despega, deforma o amarillea un par.",
    h1: "Guías de zapatillas", metaTitle: "Guías para lavar y cuidar zapatillas | Aquabon",
    metaDescription: "Zapatillas blancas, lavarropas, secado y olor: qué despega, deforma o amarillea un par. Guías de Aquabon, lavado de zapatillas en Mar del Plata.",
    lead: "Lo que despega una suela, deforma una horma o pone amarilla una zapatilla blanca, y cómo lo evitamos.",
    body: [
      "Una zapatilla no es una sola tela: tiene capellada, goma, espuma, plantilla y pegamento, y cada parte reacciona distinto al agua, al calor y a los productos. Por eso los errores más comunes —el lavarropas, el sol, el cepillo duro, la lavandina— no dañan la mugre: dañan el par.",
      "En Mar del Plata se suman la arena, el salitre y una humedad que hace que nada seque rápido. Estas guías explican qué pasa en cada caso y cómo trabajamos cada material en el local, con secado sin calor hasta que el par esté seco por dentro.",
    ],
    image: "/blog/secar-zapatillas-aire-ventilado.webp", alt: "Zapatillas abiertas secándose con papel absorbente, plantillas y cordones separados",
  },
  {
    id: "acolchados", aboutHeading: "Lo que más sufre un acolchado", listHeading: "Todas las guías de acolchados y ropa blanca", name: "Acolchados y blanquería", label: "acolchados y ropa blanca", clusters: ["Acolchados", "Alquiler temporario"], service: "acolchados",
    intro: "Acolchados, guardado de temporada y ropa blanca de alquileres temporarios.",
    h1: "Guías de acolchados y ropa blanca", metaTitle: "Guías de acolchados y ropa blanca | Aquabon",
    metaDescription: "Cómo lavar, secar y guardar acolchados, y la ropa blanca de un alquiler temporario. Guías de Aquabon, lavandería en Mar del Plata con retiro.",
    lead: "Acolchados que vuelven esponjosos, guardados sin olor a humedad y ropa blanca lista para cada huésped.",
    body: [
      "El acolchado es la prenda que más sufre en un lavarropas hogareño: entra apretado, el relleno se amontona y después hay que secarlo entero, que con la humedad de Mar del Plata puede llevar días. Si se guarda con humedad adentro, en marzo sale con olor y manchas.",
      "Acá juntamos lo que hay que saber para lavarlo, secarlo, guardarlo y entender su etiqueta, y también la ropa blanca de los alquileres temporarios: sábanas y toallas que tienen que estar impecables en cada recambio. En el local los lavamos en máquinas de 15 kg y los secamos hasta el centro del relleno.",
    ],
    image: "/blog/revisar-cuando-lavar-acolchado.webp", alt: "Revisión de una mancha y el relleno de un acolchado",
  },
  {
    id: "cuidado-de-prendas", aboutHeading: "Por qué la ropa se arruina en un lavado", listHeading: "Todas las guías de cuidado de prendas", name: "Cuidado de prendas", label: "cuidado de prendas", clusters: ["Cuidado de ropa", "Lavado", "Secado", "Olores", "Jeans", "Camisas", "Lana"], service: "valet",
    intro: "Tejidos, etiquetas, humedad, olores y secado: qué encoge, destiñe o deforma tu ropa.",
    h1: "Guías de lavado y cuidado de prendas", metaTitle: "Guías de lavado y cuidado de prendas | Aquabon",
    metaDescription: "Qué encoge, destiñe o deforma tu ropa: etiquetas, tejidos, secado y olores. Guías de Aquabon, lavandería en Mar del Plata. Escribinos por WhatsApp.",
    lead: "Qué encoge un sweater, destiñe un jean o deja olor a humedad, explicado por quienes lavan todos los días.",
    body: [
      "La mayoría de las prendas no se arruinan por viejas: se arruinan en un lavado. Una temperatura de más encoge el algodón y la lana, una carga mezclada destiñe la ropa blanca, el suavizante tapa la fibra de la ropa deportiva y un secado lento en un departamento sin balcón deja olor a humedad.",
      "Estas guías explican la causa de cada problema y qué lo empeora, empezando por la etiqueta, que es la que manda. Si preferís no arriesgar, en nuestro valet separamos cada carga por color, tejido y cuidado antes de lavarla.",
    ],
    image: "/blog/evitar-encogimiento-ropa.webp", alt: "Revisión de la etiqueta de una remera junto a un sweater secándose en plano",
  },
  {
    id: "consejos-mar-del-plata", aboutHeading: "Lo que la humedad y la playa le hacen a tu ropa", listHeading: "Todos los consejos para Mar del Plata", name: "Consejos para Mar del Plata", label: "consejos para cuidar la ropa en Mar del Plata", clusters: ["Mar del Plata"], service: "valet",
    intro: "Humedad, playa, sal, arena, protector solar y alquileres: lo que la ciudad le hace a tu ropa.",
    h1: "Consejos para cuidar la ropa en Mar del Plata", metaTitle: "Consejos para cuidar la ropa en Mar del Plata | Aquabon",
    metaDescription: "Humedad, sal, arena y protector solar: consejos para cuidar la ropa en Mar del Plata y qué la daña. Te ayudamos en Aquabon, Gascón 2189. Escribinos.",
    lead: "Humedad, sal, arena y protector solar: lo que la costa le hace a tu ropa, y cómo la recuperamos.",
    body: [
      "Vivir en Mar del Plata tiene sus reglas para la ropa. Casi todo el año manda la humedad: ropa que no seca en departamentos sin balcón, olor a encierro y placares que guardan más agua de la que parece. En verano se suman la sal, que reseca y destiñe; la arena, que raspa la tela y el lavarropas; y el protector solar, que deja manchas que aparecen recién después de lavar.",
      "En estos consejos juntamos las guías pensadas para la ciudad: secar ropa con humedad, guardar acolchados sin hongos, la ropa después de la playa y la ropa blanca de los alquileres temporarios. Si preferís no pelearte con nada de esto, dejás la bolsa en Aquabon y te olvidás.",
    ],
    image: "/blog/secar-ropa-adentro-ventilacion.webp", alt: "Toallas y ropa tendidas junto a una ventana ventilada",
  },
  {
    id: "tintoreria", aboutHeading: "Qué prendas necesitan tintorería", listHeading: "Todas las guías de tintorería", name: "Tintorería", label: "tintorería y prendas especiales", clusters: ["Tintorería", "Sacos", "Tapados", "Camperas"], service: "tintoreria",
    intro: "Camperas, tapados, sacos y prendas que necesitan un cuidado especializado.",
    h1: "Guías de tintorería y prendas especiales", metaTitle: "Guías de tintorería y prendas especiales | Aquabon",
    metaDescription: "Camperas, tapados, sacos y limpieza en seco: qué prendas necesitan tintorería y qué las daña. Guías de Aquabon, tintorería en Mar del Plata.",
    lead: "Camperas, tapados, sacos y prendas con forro: qué necesita tintorería y qué las daña en un lavado común.",
    body: [
      "Hay prendas que no se lavan como el resto: un tapado de paño que se encoge con el agua, un saco con entretela que se deforma, una campera de plumas que se apelmaza si queda húmeda. En estas guías te contamos cómo reconocerlas por la etiqueta y la construcción, y qué las pone en riesgo.",
      "En Aquabon las recibimos, las revisamos y hacemos el seguimiento. Cuando una prenda necesita un tratamiento especializado, como la limpieza en seco, lo coordinamos nosotros: vos la dejás en Aquabon y nosotros nos encargamos.",
    ],
    image: "/blog/inspeccion-limpieza-en-seco.webp", alt: "Inspección de un saco antes de su cuidado profesional",
  },
];

export const pillarPath = (id: string) => `/blog/tema/${id}`;
export const pillarOf = (g: Guide) => guidePillars.find(p => p.clusters.includes(g.cluster));
// Temas de una guía: el principal (por cluster) y después sus etiquetas.
export const pillarsOfGuide = (g: Guide) => [pillarOf(g), ...(g.tags ?? []).map(t => guidePillars.find(p => p.id === t))].filter((p, i, a): p is GuidePillar => !!p && a.indexOf(p) === i);
export const guidesInPillar = (id: string) => guides.filter(g => pillarsOfGuide(g).some(p => p.id === id));

export function guide(slug: string) {
  const g = guides.find(x => x.href === "/blog/" + slug);
  if (!g) throw new Error("Guía inexistente: " + slug);
  return g;
}
