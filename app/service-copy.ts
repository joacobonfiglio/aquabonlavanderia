// Contenido propio de cada página de servicio.
//
// Por qué existe este archivo: hasta el 07/11/2026 las once páginas de servicio repetían los mismos
// H2 ("Qué incluye", "Para qué prendas sirve", "Así funciona", "También te podemos ayudar con",
// "Preguntas frecuentes"). Para Google eran casi duplicadas y varias no tuvieron ni una impresión en
// tres meses. Acá cada servicio define sus propios H2, con las palabras que la gente busca, y sus
// secciones de contenido extenso, que van ANTES de los bloques compartidos.
//
// Reglas:
// - Prohibidos los H2 genéricos "Qué incluye" y "Para qué prendas sirve".
// - Sin precios (decisión de Joaco del 05/11/2026): se explica qué define el precio.
// - Sin plazos inventados. TODO(joaco): confirmar plazos habituales por servicio ("listo en X días
//   hábiles"). Hasta tenerlos, cada página dice qué define el plazo y que se confirma antes de aceptar.
// - TODO(joaco): fotos propias (2 a 4 por servicio, con alt descriptivo) y 1 o 2 reseñas reales de
//   Google sobre ese servicio. Hasta tenerlas no se muestra prueba que no sea verificable.

export type ServiceBlock =
  | { kind: "text"; paragraphs: string[] }
  | { kind: "cards"; cards: { title: string; copy: string }[] }
  | { kind: "list"; items: string[] };

export type ServiceSection = {
  id: string;
  heading: string;
  lead?: string;
  blocks: ServiceBlock[];
  note?: string;
  links?: { label: string; href: string }[];
  tone?: "claro" | "espuma";
};

export type ServiceCopy = {
  // H2 que reemplazan a los genéricos de la plantilla.
  headings: { incluye: string; prendas: string; proceso: string; faq: string; otros: string; guias: string };
  // Secciones propias, antes de los bloques compartidos.
  sections?: ServiceSection[];
};

const ZONAS_NOTE = "Retiramos y entregamos en once barrios de Mar del Plata. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar.";

export const serviceCopy: Record<string, ServiceCopy> = {
  "lavado-de-acolchados": {
    headings: {
      incluye: "Qué hacemos con tu acolchado, paso por paso",
      prendas: "Antes de aceptar el acolchado, lo revisamos",
      proceso: "Cómo coordinás el lavado de tu acolchado",
      faq: "Preguntas frecuentes sobre el lavado de acolchados",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de acolchados, si preferís hacerlo en casa",
    },
    sections: [
      {
        id: "plumas", heading: "Lavado de acolchados de plumas y pluma sintética", tone: "claro",
        lead: "El relleno es lo que define todo: cuánta agua aguanta, cuánto tiempo necesita y, sobre todo, cómo hay que secarlo.",
        blocks: [
          { kind: "text", paragraphs: [
            "Un acolchado de plumas no se arruina en el lavado: se arruina en el secado. Si queda humedad dentro de los canutos, la pluma se apelmaza, aparece olor y el acolchado pierde el volumen que lo hacía abrigar. Por eso el secado es la etapa que más miramos, y no lo entregamos hasta comprobar que el relleno está seco por dentro, no solo por fuera.",
            "Con pluma sintética el riesgo es otro: el vellón se puede correr y juntarse en un extremo. Se trabaja con movimiento y espacio suficiente para que el relleno vuelva a distribuirse, algo que un lavarropas doméstico cargado al tope no puede dar.",
          ] },
          { kind: "cards", cards: [
            { title: "Plumas y plumón", copy: "Revisamos etiqueta, costuras y canutos antes de aceptarlo. Si hay una costura abierta, hay que resolverla primero: en el lavado se escapa el relleno." },
            { title: "Pluma sintética y vellón", copy: "Lavado y secado con espacio para que el relleno se redistribuya, sin que queden zonas finas y zonas abultadas." },
            { title: "Sin olor a humedad", copy: "El secado completo es lo que evita el olor a encierro de los acolchados guardados a medio secar. Lo comprobamos antes de entregártelo." },
          ] },
        ],
        links: [
          { label: "Cómo lavar un acolchado de plumas sin dañarlo", href: "/blog/como-lavar-un-acolchado-de-plumas" },
          { label: "Cómo secar un acolchado sin que quede apelmazado", href: "/blog/como-secar-un-acolchado" },
        ],
      },
      {
        id: "tamanos", heading: "Acolchados, frazadas y cubrecamas: todos los tamaños", tone: "espuma",
        lead: "Una plaza, dos plazas, queen o king; frazadas, cubrecamas y fundas. Si entra en una cama, consultanos.",
        blocks: [
          { kind: "text", paragraphs: [
            "El problema de lavar una pieza de cama en casa no es el jabón: es el espacio. Un acolchado de dos plazas que entra justo en el tambor no se lava, se amasa, y sale con jabón retenido en el relleno. Nosotros lo recibimos entero, lo lavamos con el espacio que necesita y te lo devolvemos doblado y seco.",
            "Decinos el tamaño y el material de cada pieza cuando nos escribís. No hace falta que sepas el nombre técnico del relleno: con una foto de la etiqueta alcanza, y si no tiene etiqueta lo revisamos en el mostrador antes de aceptarlo.",
          ] },
          { kind: "list", items: [
            "Acolchados de una plaza, dos plazas, queen y king",
            "Frazadas de lana, polar y mezclas",
            "Cubrecamas, pie de cama y fundas de acolchado",
            "Almohadas y almohadones, según su relleno y estado",
            "Ropa de cama de alquileres temporarios y alojamientos",
          ] },
        ],
      },
      {
        id: "plazo-precio", heading: "Cuánto tarda y cuánto cuesta lavar un acolchado", tone: "claro",
        lead: "No publicamos precios porque dos acolchados del mismo tamaño pueden costar distinto. Sí te decimos exactamente qué los cambia.",
        blocks: [
          { kind: "text", paragraphs: [
            "El importe lo define el tamaño, el relleno, el estado y si hay manchas que necesiten tratamiento aparte. El plazo depende de lo mismo y del trabajo de esa semana: un acolchado de plumas necesita más tiempo de secado que un cubrecama liviano, y en los cambios de estación entran más piezas por día.",
            "Te pasamos importe y plazo antes de que lo dejes, siempre. Si al revisarlo encontramos algo que cambia el trabajo —una costura abierta, una mancha vieja, relleno apelmazado— te escribimos antes de empezar, no después.",
          ] },
          { kind: "cards", cards: [
            { title: "Qué sube el precio", copy: "El tamaño, el relleno de pluma, las manchas que necesitan tratamiento previo y el retiro a domicilio, que se cotiza aparte según la zona." },
            { title: "Qué define el plazo", copy: "El secado. Es la etapa más larga y la que no se puede apurar sin arruinar el relleno. Te lo confirmamos cuando dejás la pieza." },
            { title: "Cómo saber lo tuyo", copy: "Mandanos por WhatsApp el tamaño, el relleno y una foto de la etiqueta y de cualquier mancha. Con eso te orientamos antes de que vengas." },
          ] },
        ],
        links: [{ label: "¿Cuánto cuesta lavar un acolchado? De qué depende el precio", href: "/blog/cuanto-cuesta-lavar-un-acolchado" }],
      },
      {
        id: "retiro-acolchados", heading: "Retiro y entrega de acolchados a domicilio", tone: "espuma",
        lead: "Un acolchado ocupa media bolsa de consorcio y pesa el doble cuando llueve. No hace falta que lo traigas.",
        blocks: [
          { kind: "text", paragraphs: [
            "Pasamos a buscarlo por tu casa y te lo devolvemos lavado, seco y doblado. Es el servicio que más piden junto con el lavado de acolchados, sobre todo en primavera y otoño, cuando se cambia el acolchado de la cama y hay que guardar el del invierno.",
            ZONAS_NOTE,
          ] },
        ],
        links: [
          { label: "Cómo funciona el retiro y la entrega", href: "/servicios/retiro-y-entrega-de-ropa" },
          { label: "Ver los barrios donde retiramos", href: "/lavanderia-mar-del-plata" },
        ],
      },
      {
        id: "b2b-acolchados", heading: "Lavadero de acolchados para lavanderías y tintorerías", tone: "claro",
        blocks: [
          { kind: "text", paragraphs: [
            "Si tenés una lavandería, una tintorería o un alojamiento y te llegan acolchados que no podés procesar, los recibimos. Acordamos volumen, frecuencia y forma de entrega antes de empezar, y vos seguís siendo quien le responde al cliente.",
            "Contanos qué volumen manejás y cada cuánto, y te armamos una propuesta. No publicamos precios: se acuerdan según el volumen y la frecuencia de cada caso.",
          ] },
        ],
        links: [{ label: "Servicios para empresas y alojamientos", href: "/empresas" }],
      },
    ],
  },

  tintoreria: {
    headings: {
      incluye: "Qué pasa con tu prenda desde que la dejás",
      prendas: "Sacos, vestidos, tapados: se decide prenda por prenda",
      proceso: "Cómo dejás una prenda en la tintorería",
      faq: "Preguntas frecuentes sobre la tintorería",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de tintorería y prendas especiales",
    },
    sections: [
      {
        id: "limpieza-en-seco", heading: "Limpieza en seco en Mar del Plata", tone: "claro",
        lead: "Se llama en seco porque no usa agua como medio principal, no porque la prenda no se moje.",
        blocks: [
          { kind: "text", paragraphs: [
            "La limpieza en seco trata la prenda con un solvente profesional distinto del agua, dentro de una máquina cerrada. Sirve para tejidos y prendas estructuradas que el agua deformaría: sacos con entretela, trajes, tapados de paño, vestidos con forro. Después del ciclo el solvente se extrae y la prenda se seca y se termina en el mismo equipo.",
            "No es el mejor proceso para todo. Hay prendas que admiten lavado suave con agua, otras que piden limpieza húmeda profesional y otras cuya etiqueta prohíbe la limpieza en seco. Por eso el proceso se decide después de ver la prenda, no antes: miramos el símbolo del círculo en la etiqueta, el tejido, el forro, los adornos y el estado.",
            "Vos dejás la prenda en Aquabon y nosotros nos encargamos. Cuando necesita limpieza en seco u otro tratamiento especializado, lo coordinamos fuera del local, hacemos el seguimiento y te avisamos por WhatsApp cuando vuelve. Tratás con un solo mostrador.",
          ] },
          { kind: "cards", cards: [
            { title: "Qué prendas suelen necesitarla", copy: "Sacos y trajes con estructura, tapados de paño o lana, vestidos con forro o apliques, y prendas cuya etiqueta marca el círculo de cuidado profesional." },
            { title: "Qué no resuelve", copy: "No repara desgaste, decoloración ni fibras rotas, y no garantiza que salga cualquier mancha. Si el riesgo es alto, te lo decimos antes de aceptar la prenda." },
            { title: "Cuánto tarda", copy: "Depende del tratamiento y de la prenda. Te confirmamos el plazo después de revisarla y antes de aceptar el trabajo." },
          ] },
        ],
        links: [
          { label: "Qué es la limpieza en seco y cómo funciona", href: "/blog/que-es-la-limpieza-en-seco" },
          { label: "Qué prendas conviene llevar a la tintorería", href: "/blog/que-prendas-conviene-llevar-a-la-tintoreria" },
        ],
      },
      {
        id: "centro", heading: "Tintorería cerca del Centro de Mar del Plata", tone: "espuma",
        lead: "Estamos en Gascón 2189, a metros del centro. Se entra directo desde la calle, sin turno.",
        blocks: [
          { kind: "text", paragraphs: [
            "Si estás en el Centro, llegás caminando o en un viaje corto: Gascón está a pocas cuadras de las avenidas que cruzan la zona, y abrimos de lunes a viernes de 8:30 a 20:00 y los sábados de 9:00 a 14:00. Dejás la prenda, la revisamos con vos en el mostrador y te confirmamos el tratamiento, el importe y el plazo antes de aceptarla.",
            "Si preferís no moverte, también retiramos y entregamos: una prenda de tintorería puede ir en el mismo retiro que la bolsa de ropa de la semana. Mandanos tu dirección y qué tenés, y coordinamos costo y horario antes de pasar.",
          ] },
          { kind: "cards", cards: [
            { title: "Desde el Centro", copy: "Gascón 2189, sin turno y en el horario del local. Abrí el recorrido en Google Maps desde donde estés." },
            { title: "Desde otros barrios", copy: "Retiramos y entregamos en once barrios. La prenda de tintorería se coordina en el mismo pedido que el resto de la ropa." },
            { title: "Antes de venir", copy: "Mandanos una foto de la prenda, del forro y de la etiqueta, y contanos qué originó la mancha. Con eso te damos una primera orientación." },
          ] },
        ],
        links: [
          { label: "Lavandería en el Centro de Mar del Plata", href: "/lavanderia-centro-mar-del-plata" },
          { label: "Retiro y entrega a domicilio", href: "/servicios/retiro-y-entrega-de-ropa" },
        ],
      },
    ],
  },

  "lavado-de-camperas-y-tapados": {
    headings: {
      incluye: "Qué miramos en una campera o un tapado",
      prendas: "Campera liviana, de pluma o tapado de paño: no es lo mismo",
      proceso: "Cómo dejás tu abrigo",
      faq: "Preguntas frecuentes sobre camperas y tapados",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de abrigos, si preferís hacerlo en casa",
    },
    sections: [
      {
        id: "fin-del-invierno", heading: "Camperas y tapados al final del invierno", tone: "claro",
        lead: "Al final del invierno, antes de guardarla. Es el momento en que casi nadie lo hace y el que más problemas evita.",
        blocks: [
          { kind: "text", paragraphs: [
            "Una campera que se guarda sucia se guarda con transpiración en el cuello y los puños, polvo en el tejido y, si vivís cerca del mar, salitre. Nada de eso se ve en abril, pero en junio del año siguiente aparece como una marca amarilla en el cuello, un olor a encierro que no se va con ventilar, o una zona del tejido más rígida que el resto.",
            "La otra señal es más obvia: el abrigo dejó de abrigar igual. En una campera de pluma eso suele ser relleno apelmazado por humedad, no relleno perdido. Se puede trabajar, pero conviene verlo antes de que pase otra temporada.",
          ] },
          { kind: "cards", cards: [
            { title: "Antes de guardarla", copy: "Final de otoño o invierno. La prenda se guarda limpia y seca, y el año que viene la sacás lista para usar." },
            { title: "Si tiene una mancha", copy: "No esperes. Cuanto más vieja la mancha, menos margen hay, y el calor del guardado la fija más." },
            { title: "Si quedó con olor", copy: "Olor a humedad, a encierro o a humo. Contanos de dónde viene y hace cuánto: cambia lo que se puede hacer." },
          ] },
        ],
        links: [
          { label: "Cuándo llevar la campera a la tintorería", href: "/blog/cuando-llevar-la-campera-a-la-tintoreria" },
          { label: "Cómo limpiar un tapado sin dañarlo", href: "/blog/como-limpiar-un-tapado-sin-danarlo" },
          { label: "Cómo guardar la ropa de invierno", href: "/blog/como-guardar-la-ropa-de-invierno" },
        ],
      },
      {
        id: "tipos-abrigo", heading: "Camperas de pluma, inflables y tapados de paño", tone: "espuma",
        blocks: [
          { kind: "text", paragraphs: [
            "El forro, el relleno y los accesorios mandan tanto como el tejido de afuera. Una campera inflable con relleno sintético, una de pluma y un tapado de paño con entretela se tratan de tres maneras distintas, y la etiqueta a veces solo habla del exterior. Por eso revisamos la prenda completa: tejido, forro, relleno, costuras, cierres, botones, capucha y piel desmontable.",
            "Si la prenda necesita un tratamiento especializado, lo coordinamos nosotros fuera del local y hacemos el seguimiento hasta que vuelve. Vos tratás solo con Aquabon.",
          ] },
          { kind: "list", items: [
            "Camperas livianas, rompevientos e impermeables",
            "Camperas inflables de relleno sintético",
            "Camperas y chalecos de pluma",
            "Tapados y sobretodos de paño o lana",
            "Camperas con capucha, piel desmontable o detalles combinados",
          ] },
        ],
      },
    ],
  },

  "limpieza-de-vestidos-de-fiesta": {
    headings: {
      incluye: "Qué revisamos en un vestido antes de tocarlo",
      prendas: "Capas, forro, apliques y manchas",
      proceso: "Cómo dejás tu vestido",
      faq: "Preguntas frecuentes sobre la limpieza de vestidos",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de prendas delicadas",
    },
    sections: [
      {
        id: "despues-de-la-fiesta", heading: "Después de la fiesta, cuanto antes mejor", tone: "claro",
        lead: "Las manchas de una noche de fiesta son las que más cambian con el tiempo: vino, transpiración, maquillaje y bebidas claras.",
        blocks: [
          { kind: "text", paragraphs: [
            "Una mancha de vino o de bebida clara que parece que se secó y no se ve puede aparecer meses después como una marca amarilla: el azúcar queda en la fibra y se oxida. La transpiración hace algo parecido en las axilas y en la cintura. Por eso, si usaste el vestido en un casamiento o una fiesta, lo mejor es traerlo en los días siguientes, aunque se vea limpio.",
            "Contanos qué pasó, dónde y si le pusiste algo. El agua, el calor o un quitamanchas casero pueden fijar la mancha o abrir el color, y saberlo cambia lo que podemos intentar. Nunca te vamos a prometer que salga todo: te decimos qué se puede hacer y hasta dónde, antes de aceptar la prenda.",
          ] },
          { kind: "cards", cards: [
            { title: "Vestidos de fiesta y de novia", copy: "Revisamos tejido, forro, estructura interna, apliques y bordados. La confirmación final la damos al verlo en el mostrador." },
            { title: "Lentejuelas y pedrería", copy: "Miramos cómo están sujetas y en qué estado. No todos los adornos aguantan el mismo proceso, y algunos lo limitan." },
            { title: "Guardado después", copy: "Un vestido que vas a guardar años conviene guardarlo limpio y seco. Es lo que evita la marca amarilla del año siguiente." },
          ] },
        ],
        links: [
          { label: "Cómo lavar ropa delicada", href: "/blog/como-lavar-ropa-delicada" },
          { label: "Cómo sacar manchas difíciles de la ropa", href: "/blog/como-sacar-manchas-dificiles-de-la-ropa" },
        ],
      },
    ],
  },

  "lavado-de-zapatillas": {
    headings: {
      incluye: "Qué hacemos con tu par",
      prendas: "El material cambia todo el cuidado",
      proceso: "Cómo nos dejás las zapatillas",
      faq: "Preguntas frecuentes sobre el lavado de zapatillas",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de zapatillas, si preferís hacerlo en casa",
    },
    sections: [
      {
        id: "blancas-tela-running", heading: "Limpieza de zapatillas blancas, de tela y de running", tone: "claro",
        lead: "Las tres que más nos traen, y las tres que más se arruinan en el lavarropas de casa.",
        blocks: [
          { kind: "text", paragraphs: [
            "En una zapatilla blanca el problema casi nunca es la tela: es la goma del lateral y la costura, donde la suciedad se mete y queda gris. Se trabaja por zonas, no metiendo todo el par en un ciclo, y se seca sin calor para que la cola de las uniones no se despegue.",
            "En las de tela el riesgo es el color: algunos tejidos y estampados destiñen sobre la zona blanca de la misma zapatilla. En las de running suma la espuma de la entresuela, que absorbe agua y tarda en secar; si queda húmeda por dentro, vuelve el olor en una semana.",
            "Las plantillas y los cordones se tratan aparte. Buena parte del olor de unas zapatillas vive en la plantilla, así que limpiarla sola y secarla bien resuelve más que perfumar el interior.",
          ] },
          { kind: "cards", cards: [
            { title: "Blancas", copy: "Trabajo por zonas en goma, costuras y tela, y secado sin calor. No recupera una goma ya amarilla por el sol." },
            { title: "De tela y lona", copy: "Revisamos si el color es estable antes de mojar el par. Si hay riesgo de que destiña sobre lo blanco, te lo decimos." },
            { title: "De running", copy: "La entresuela de espuma retiene agua. El secado completo es lo que evita que vuelva el olor." },
          ] },
        ],
        links: [
          { label: "¿Se pueden lavar las zapatillas en el lavarropas?", href: "/blog/se-pueden-lavar-zapatillas-en-el-lavarropas" },
          { label: "Cómo sacar el olor de las zapatillas", href: "/blog/como-sacar-el-olor-de-las-zapatillas" },
        ],
      },
      {
        id: "cuero-gamuza", heading: "Zapatillas de cuero y gamuza: limpieza con cuidado", tone: "espuma",
        blocks: [
          { kind: "text", paragraphs: [
            "El cuero y la gamuza no van al agua como la tela. La gamuza se marca con el agua y cambia de aspecto cuando se moja de forma despareja; el cuero se puede secar de más y quedar rígido o cuarteado. Son los pares que más conviene mostrarnos antes: mandanos una foto del par, de la suela y de la zona manchada.",
            "Con materiales combinados —cuero más tela, gamuza más malla— el cuidado lo define la parte más delicada, no la más resistente. Y hay daños que la limpieza no revierte: decoloración por sol, roturas, suela despegada o espuma vencida. Te lo decimos antes de aceptar el par.",
          ] },
        ],
        links: [{ label: "Cómo secar zapatillas sin deformarlas", href: "/blog/como-secar-zapatillas-sin-deformarlas" }],
      },
      {
        id: "plazo-zapatillas", heading: "Cuánto tarda el lavado de zapatillas", tone: "claro",
        blocks: [
          { kind: "text", paragraphs: [
            "El plazo lo define el secado, no la limpieza. Una zapatilla de tela liviana seca antes que una de running con entresuela de espuma, y en días húmedos todo tarda más. No las entregamos antes de que estén secas por dentro: entregar un par a medio secar es garantizar que vuelva el olor.",
            "El importe depende del material, del estado y de si hay manchas que necesiten trabajo aparte. Te lo confirmamos cuando vemos el par, antes de aceptarlo.",
          ] },
        ],
      },
    ],
  },

  "tenido-de-prendas": {
    headings: {
      incluye: "Qué hacemos antes de teñir",
      prendas: "Recuperar un color o cambiarlo",
      proceso: "Cómo consultás por un teñido",
      faq: "Preguntas frecuentes sobre el teñido de ropa",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de color y lavado",
    },
    sections: [
      {
        id: "que-colores", heading: "Qué colores se pueden lograr y qué depende de la prenda", tone: "claro",
        lead: "Mandanos una foto de la prenda y de la etiqueta por WhatsApp. Es la forma más rápida de saber si se puede.",
        blocks: [
          { kind: "text", paragraphs: [
            "Teñir funciona mejor de claro a oscuro que al revés, y mejor sobre fibras naturales como el algodón que sobre sintéticos. El color de origen no desaparece: se suma al nuevo. Un jean negro desteñido puede volver a un negro parejo; una prenda beige no va a quedar blanca.",
            "Las costuras, los cierres y las partes sintéticas suelen tomar el color de otra manera, o conservar el suyo. En una prenda de algodón con costura de poliéster es normal que la costura quede más clara: no es un defecto del teñido, es la fibra. Te lo mostramos antes para que decidas con eso sobre la mesa.",
            "No prometemos un tono exacto. Revisamos composición, color actual, desgaste y estado, y te decimos qué resultado es razonable esperar antes de aceptar el trabajo. Si la prenda no da para teñir, también te lo decimos.",
          ] },
          { kind: "cards", cards: [
            { title: "Recuperar un color apagado", copy: "Negros y azules que se fueron lavando. Es el caso con mejor resultado, sobre todo en algodón." },
            { title: "Cambiar de color", copy: "De claro a oscuro, con el color de origen influyendo en el tono final. Lo vemos juntos antes de empezar." },
            { title: "Si ya destiñó sobre otra prenda", copy: "Una prenda blanca que tomó tinte de otra a veces se resuelve con teñido parejo. Mostranos las dos y te orientamos." },
          ] },
        ],
        links: [
          { label: "Cómo evitar que la ropa destiña al lavarla", href: "/blog/como-evitar-que-la-ropa-destina" },
          { label: "Cómo lavar jeans sin que pierdan color", href: "/blog/como-lavar-jeans-sin-perder-color" },
        ],
      },
    ],
  },

  "valet-de-ropa": {
    headings: {
      incluye: "Qué resolvemos con el valet",
      prendas: "Qué ropa entra en la bolsa y qué va aparte",
      proceso: "De tu bolsa al aviso de WhatsApp",
      faq: "Preguntas frecuentes sobre el valet de ropa",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de lavado, si preferís hacerlo en casa",
    },
    sections: [
      {
        id: "que-es-valet", heading: "Qué es el servicio de valet en una lavandería", tone: "claro",
        lead: "Es la ropa de todos los días, lavada, secada y doblada en un solo pedido. Por bolsa, no por prenda.",
        blocks: [
          { kind: "text", paragraphs: [
            "Vos juntás la ropa de la semana en una bolsa y nos la dejás, o la pasamos a buscar. Nosotros la separamos por color, tejido y tipo de cuidado, la lavamos, la secamos y te la devolvemos doblada y lista para guardar. No tenés que cargar, tender, esperar a que seque ni doblar.",
            "Es el servicio que más piden quienes viven en departamento sin balcón o sin lavarropas grande. En Mar del Plata eso tiene un costo concreto: secar adentro en invierno deja olor a humedad en la ropa y condensación en las paredes. Con el valet la ropa vuelve seca.",
          ] },
          { kind: "cards", cards: [
            { title: "Separado antes de lavar", copy: "Por color, tejido y cuidado. Si una prenda puede desteñir sobre las demás, va aparte." },
            { title: "Secado completo", copy: "La ropa vuelve seca y doblada. Sin tendedero en el living ni humedad en el ambiente." },
            { title: "Te avisamos", copy: "Un WhatsApp cuando está lista. La pasás a buscar o te la llevamos si coordinaste retiro." },
          ] },
        ],
        links: [
          { label: "Cómo secar ropa dentro de casa sin olor a humedad", href: "/blog/como-secar-ropa-dentro-de-casa" },
          { label: "Cuánto detergente usar en el lavarropas", href: "/blog/cuanto-detergente-usar" },
        ],
      },
      {
        id: "valet-aparte", heading: "Qué conviene separar de la bolsa", tone: "espuma",
        blocks: [
          { kind: "text", paragraphs: [
            "El valet es para ropa apta para lavado con agua. Lo que pide otro cuidado va por su propio servicio, y conviene separarlo antes de cerrar la bolsa para que no se lave con el resto por error.",
          ] },
          { kind: "list", items: [
            "Lana, cashmere y tejidos que piden lavado a mano o programa de lana",
            "Sacos, trajes, vestidos y prendas con la etiqueta de cuidado profesional",
            "Acolchados, frazadas y cubrecamas, que tienen su propio servicio",
            "Camperas de pluma y tapados de paño",
            "Prendas con una mancha concreta que querés que miremos",
          ] },
        ],
        note: "El valet no incluye planchado. Si querés camisas planchadas, pedilo al hacer el pedido y lo sumamos.",
        links: [
          { label: "Símbolos de lavado de la ropa: cómo leer la etiqueta", href: "/blog/simbolos-de-lavado-de-la-ropa" },
          { label: "Lavado y planchado de camisas", href: "/servicios/lavado-y-planchado-de-camisas" },
        ],
      },
    ],
  },

  "retiro-y-entrega-de-ropa": {
    headings: {
      incluye: "Cómo funciona el retiro",
      prendas: "Qué podemos pasar a buscar",
      proceso: "Cómo coordinás un retiro",
      faq: "Preguntas frecuentes sobre el retiro a domicilio",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías para preparar tu pedido",
    },
    sections: [
      {
        id: "como-coordinar", heading: "Cómo coordinamos el retiro en tu barrio", tone: "claro",
        lead: "Nos escribís con la dirección y qué tenés para lavar. Te confirmamos costo y franja horaria antes de pasar.",
        blocks: [
          { kind: "text", paragraphs: [
            "El retiro se cotiza aparte del servicio, según la zona, y la disponibilidad depende del día. Nunca te lo damos por hecho: primero te confirmamos que llegamos y cuánto sale, y después coordinamos. Si estás en un barrio que todavía no cubrimos, consultanos igual y te decimos si podemos.",
            "Para que el retiro salga en un solo viaje, dejá la ropa en una bolsa bien cerrada y contanos cuántas prendas son, si hay piezas de cama y si algo necesita que lo miremos. Las prendas con mancha, separadas y con una foto: así las tratamos antes del lavado.",
          ] },
        ],
      },
    ],
  },

  planchado: {
    headings: {
      incluye: "Qué prendas planchamos",
      prendas: "Solo planchado, o lavado y planchado",
      proceso: "Cómo dejás tus prendas para planchar",
      faq: "Preguntas frecuentes sobre el planchado",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de planchado y camisas",
    },
    sections: [
      {
        id: "planchado-cantidad", heading: "Planchado por prenda o por cantidad", tone: "claro",
        blocks: [
          { kind: "text", paragraphs: [
            "Podés traer una prenda sola o la tanda de camisas de la semana. El importe depende de la cantidad y del tipo de prenda: una camisa de algodón, un pantalón de vestir y un vestido con tablas no llevan el mismo trabajo. Te lo confirmamos cuando dejás el pedido.",
            "La temperatura la define la etiqueta de cada prenda, no la prisa. Si una prenda no admite plancha directa o tiene un detalle que puede marcarse, te lo decimos antes de empezar.",
          ] },
        ],
        note: "El planchado es un servicio aparte del valet de ropa. Si querés las dos cosas, pedilas juntas en el mismo pedido.",
      },
      {
        id: "que-se-plancha", heading: "Camisas, pantalones y prendas de vestir", tone: "espuma",
        lead: "Recibimos prendas que admiten planchado según su etiqueta. Las que no, te las decimos antes.",
        blocks: [
          { kind: "text", paragraphs: [
            "Lo más habitual son camisas, pantalones de vestir, polleras, blusas y vestidos lisos. En esas prendas el planchado se nota enseguida: cuello y puños firmes, pinzas marcadas donde corresponde y ninguna marca de brillo donde no corresponde.",
            "Hay prendas donde la plancha directa no va: tejidos con elastano, prendas con apliques o lentejuelas, impermeables con tratamiento de superficie, y cualquier etiqueta con el símbolo de la plancha tachado. En esos casos el calor deja un brillo que no se saca, y preferimos avisarte antes de tocarlas.",
          ] },
          { kind: "list", items: [
            "Camisas de algodón, lino y mezclas",
            "Pantalones y polleras de vestir",
            "Blusas, vestidos lisos y prendas de oficina",
            "Sábanas y manteles, si los querés planchados",
            "Prendas guardadas que salieron del placard arrugadas",
          ] },
        ],
      },
      {
        id: "planchado-mdp", heading: "Por qué en Mar del Plata la ropa sale más arrugada", tone: "claro",
        blocks: [
          { kind: "text", paragraphs: [
            "Con humedad alta, la ropa tarda más en secar y las arrugas se asientan mientras la prenda sigue húmeda. Si además secás adentro, en un ambiente cerrado, la prenda se seca despareja: la parte de arriba primero y la de abajo después, y ahí quedan los pliegues marcados.",
            "Dos cosas ayudan en casa: sacar la ropa del lavarropas apenas termina el centrifugado, y colgarla con el peso del propio tejido estirando los pliegues. Lo que queda después es lo que resolvemos nosotros.",
          ] },
        ],
        links: [{ label: "Cómo secar ropa dentro de casa sin olor a humedad", href: "/blog/como-secar-ropa-dentro-de-casa" }],
      },
    ],
  },

  "lavado-y-planchado-de-camisas": {
    headings: {
      incluye: "Qué revisamos en cada camisa",
      prendas: "Cuello, puños, axilas y tejido",
      proceso: "Cómo dejás tus camisas",
      faq: "Preguntas frecuentes sobre el lavado de camisas",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías de camisas y manchas",
    },
    sections: [
      {
        id: "camisas-semana", heading: "Las camisas de toda la semana, en un pedido", tone: "claro",
        blocks: [
          { kind: "text", paragraphs: [
            "Lavado y planchado juntos: nos dejás las camisas y las retirás listas para colgar en el placard. Decinos cuántas son y de qué tela, y te pasamos importe y plazo antes de aceptarlas.",
            "Las zonas que miramos primero son cuello, puños y axilas, que es donde se acumulan transpiración y desodorante. Una marca amarilla vieja en el cuello no siempre sale, y preferimos decírtelo antes: depende del tejido, de cuánto tiempo tiene y de si pasó por secado con calor, que la fija.",
          ] },
        ],
        links: [
          { label: "Cómo lavar camisas sin arruinar cuello, puños ni forma", href: "/blog/como-lavar-camisas-sin-arruinarlas" },
          { label: "Cómo sacar manchas de transpiración", href: "/blog/como-sacar-manchas-de-transpiracion" },
        ],
      },
      {
        id: "cuello-punos", heading: "Marcas de cuello, puños y axilas: qué sale y qué no", tone: "espuma",
        blocks: [
          { kind: "text", paragraphs: [
            "La marca amarilla del cuello no es suciedad común: es transpiración y desodorante oxidados dentro de la fibra. Cuando es reciente, suele responder bien. Cuando lleva meses y la camisa pasó varias veces por calor, el margen se achica, porque el calor fija ese residuo.",
            "El desodorante en gel o en crema deja además una marca blanca rígida en la axila que endurece la tela. Esa conviene mostrarla al dejar la camisa: se trata distinto que una mancha de comida o de tinta.",
            "Lo que no hacemos es prometerte que una camisa blanca de cinco años vuelve a estar blanca. Te decimos qué se puede mejorar y hasta dónde, y lo vemos juntos en el mostrador antes de aceptar el pedido.",
          ] },
          { kind: "cards", cards: [
            { title: "Responde bien", copy: "Transpiración reciente, manchas de comida frescas y suciedad general de uso diario." },
            { title: "Responde a medias", copy: "Marcas amarillas instaladas hace tiempo y desodorante acumulado en la axila." },
            { title: "No se revierte", copy: "Tejido desgastado o traslúcido en el cuello, y zonas con el color ya abierto por lavandina." },
          ] },
        ],
      },
      {
        id: "camisas-tejido", heading: "Algodón, lino y mezclas: qué terminación esperar", tone: "claro",
        blocks: [
          { kind: "text", paragraphs: [
            "El algodón admite más temperatura y queda más firme. El lino se plancha bien pero vuelve a arrugarse enseguida: es propio del tejido, no una falla de la terminación, y en Mar del Plata con humedad se nota más. Las mezclas con elastano o poliéster piden menos calor, porque la fibra sintética se marca con brillo si se pasa de temperatura.",
            "Decinos de qué tela son tus camisas cuando consultes, o mandanos una foto de la etiqueta. Con eso te pasamos importe y plazo, y sabés qué terminación esperar antes de dejarlas.",
          ] },
        ],
      },
    ],
  },

  "arreglos-y-costura": {
    headings: {
      incluye: "Qué arreglos hacemos",
      prendas: "Qué revisamos antes de confirmar un arreglo",
      proceso: "Cómo consultás por un arreglo",
      faq: "Preguntas frecuentes sobre arreglos y costura",
      otros: "Otros servicios en el mismo mostrador",
      guias: "Guías para que la ropa dure más",
    },
    sections: [
      {
        id: "arreglos-tipicos", heading: "Dobladillos, cierres y ajustes de talle", tone: "claro",
        lead: "Ese ajuste que venís postergando, en el mismo lugar donde lavás tu ropa.",
        blocks: [
          { kind: "text", paragraphs: [
            "Traés la prenda, nos contás qué te molesta y la revisamos juntos: medidas, margen de tela, construcción y estado del tejido. Con eso te decimos si se puede, cómo quedaría y cuánto sale, antes de empezar. Las medidas se toman en persona: por foto no alcanza.",
            "Si la prenda además necesita lavado, se puede hacer en el mismo pedido. Es lo más práctico cuando la traés de guardada: primero se lava, después se arregla sobre la prenda limpia.",
          ] },
          { kind: "list", items: [
            "Dobladillos de pantalón, jean, pollera y vestido",
            "Ajuste de talle en cintura y costados",
            "Cambio de cierre y reparación de costuras abiertas",
            "Botones, broches y pequeños refuerzos",
            "Arreglos sobre prendas que vas a seguir usando, no restauración",
          ] },
        ],
      },
      {
        id: "que-define-arreglo", heading: "Qué define si un arreglo se puede hacer", tone: "espuma",
        lead: "No es el tipo de arreglo: es cuánta tela hay, cómo está construida la prenda y en qué estado llega.",
        blocks: [
          { kind: "text", paragraphs: [
            "Para agrandar una prenda hace falta margen de costura, y eso no se ve desde afuera: hay que dar vuelta la prenda y mirar cuánta tela sobra dentro de la costura. Algunas prendas industriales vienen con el margen cortado al ras, y ahí no hay de dónde sacar. Para acortar casi siempre se puede, aunque en un pantalón con dobladillo original de fábrica hay que decidir si se conserva ese dobladillo o se hace uno nuevo.",
            "El estado del tejido también manda. Una costura abierta en una tela firme se repara sin que se note; la misma costura en una zona ya gastada va a volver a abrirse al costado del arreglo. Cuando es así te lo decimos: preferimos no cobrarte un arreglo que no te va a durar.",
          ] },
          { kind: "cards", cards: [
            { title: "Se resuelve casi siempre", copy: "Dobladillos, botones, costuras abiertas en tela sana y cambios de cierre comunes." },
            { title: "Depende de la prenda", copy: "Agrandar de talle, ajustar un saco con forro o intervenir una prenda con estructura. Hay que verla." },
            { title: "Te lo decimos antes", copy: "Tejido gastado, zonas ya reparadas o arreglos que cambiarían el calce de toda la prenda." },
          ] },
        ],
      },
      {
        id: "arreglo-con-lavado", heading: "El arreglo y el lavado, en el mismo pedido", tone: "claro",
        blocks: [
          { kind: "text", paragraphs: [
            "Si traés una prenda que estuvo guardada, conviene lavarla primero y arreglarla después: sobre la prenda limpia se ve mejor el estado real del tejido, y el arreglo no queda marcado por un pliegue de guardado. Lo coordinamos en un mismo pedido, con un solo plazo.",
            "Es lo más práctico al abrir el placard al principio del invierno: la prenda sale limpia y con el ajuste que venías postergando, sin dos viajes.",
          ] },
        ],
        links: [{ label: "Cómo guardar la ropa de invierno", href: "/blog/como-guardar-la-ropa-de-invierno" }],
      },
    ],
  },
};
