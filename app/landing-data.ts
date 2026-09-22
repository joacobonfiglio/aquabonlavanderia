import type { LandingData } from "./SeoLanding";

const commonSteps = [
  { title: "Consultanos", copy: "Escribinos o acercate a Gascón 2189 para contarnos qué necesitás." },
  { title: "Revisamos", copy: "Valoramos el material, el estado y las indicaciones de cuidado antes de confirmar el servicio." },
  { title: "Te avisamos", copy: "Hacemos el seguimiento y te contactamos por WhatsApp cuando el pedido está listo." },
];
const rel = [
  {label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Lavado de acolchados",href:"/servicios/lavado-de-acolchados"},
  {label:"Tintorería",href:"/servicios/tintoreria"},{label:"Camperas y tapados",href:"/servicios/lavado-de-camperas-y-tapados"},{label:"Teñido de prendas",href:"/servicios/tenido-de-prendas"},
  {label:"Planchado",href:"/servicios/planchado"},{label:"Arreglos y costura",href:"/servicios/arreglos-y-costura"},{label:"Lavado de zapatillas",href:"/servicios/lavado-de-zapatillas"},
];
const base = (path:string,h1:string,intro:string,event:string,message:string,items:LandingData["items"],faqs:LandingData["faqs"],extra:Partial<LandingData>={}):LandingData => ({
  path, h1, intro, event, message, items, faqs, steps: commonSteps, related: rel.filter(x=>x.href!==path).slice(0,4),
  title: h1+" | Aquabon", description: intro, eyebrow:"AQUABON · GASCÓN 2189", cta:"Consultar por WhatsApp",
  crumbs:[{label:"Inicio",href:"/"},{label:"Servicios",href:"/servicios"},{label:h1.replace(" en Mar del Plata",""),href:path}],
  sections:[{heading:"Cuidado según cada prenda",text:"No todas las prendas necesitan el mismo proceso. Antes de comenzar revisamos material, etiqueta, manchas y estado general para orientarte con claridad."}], ...extra
});
export const pages: Record<string,LandingData> = {
"/servicios/lavado-de-camperas-y-tapados":base("/servicios/lavado-de-camperas-y-tapados","Lavado de camperas y tapados en Mar del Plata","Traé tu campera o tapado a Gascón 2189: evaluamos etiqueta, forro, relleno, manchas y estado para definir un tratamiento compatible antes de confirmar precio y plazo.","whatsapp_camperas_tapados","Hola Aquabon, quería consultar por la limpieza de una campera o un tapado.",[
 {title:"Camperas livianas y acolchadas",copy:"Revisamos tejido, relleno, impermeabilización, cierres y etiqueta. Confirmamos si admite lavado y secado adecuados o necesita un tratamiento distinto."},
 {title:"Tapados de paño y lana",copy:"Inspeccionamos forro, estructura, botones, apliques y manchas. Un tapado no se lava automáticamente por ser de lana o por parecer resistente."},
 {title:"Cada prenda, una evaluación",copy:"Te explicamos viabilidad, proceso, límites, precio y plazo antes de aceptarla. Cuando requiere cuidado especializado coordinamos la tintorería fuera del local."}
],[
 {question:"¿Lavan camperas de pluma?",answer:"Las recibimos para evaluar etiqueta, relleno, estado y secado posible. No confirmamos el proceso ni el resultado sin revisar la prenda."},
 {question:"¿Puedo llevar un tapado de paño?",answer:"Sí. Revisamos su etiqueta, forro, estructura y manchas para decidir si conviene lavado o cuidado profesional."},
 {question:"¿Hacen limpieza en seco en el local?",answer:"Aquabon funciona como punto de recepción y seguimiento para tratamientos especializados; cuando corresponde, se coordinan fuera del local."},
 {question:"¿Cuánto cuesta y cuánto demora?",answer:"El valor y el plazo dependen de la prenda, del proceso y de su estado. Los confirmamos antes de aceptar el trabajo."},
 {question:"¿El tratamiento elimina todas las manchas?",answer:"No se garantiza. Depende del origen y antigüedad de la mancha, tejido, color y tratamientos previos."},
 {question:"¿Hacen retiro y entrega?",answer:"Consultanos con tu ubicación: la cobertura, costo y disponibilidad se confirman para cada pedido."}
],{title:"Lavado de camperas y tapados en Mar del Plata | Aquabon",description:"Camperas, abrigos y tapados en el centro de Mar del Plata. Evaluación de etiqueta, forro y relleno; consultá proceso, precio y plazo antes de confirmar.",eyebrow:"CAMPERAS Y TAPADOS · CENTRO",cta:"Consultar mi abrigo",showLocation:true,sections:[
 {heading:"Un abrigo no es igual a otro",text:"Una campera deportiva, una de pluma y un tapado de paño tienen necesidades diferentes. Evaluamos el conjunto —material exterior, forro, relleno, accesorios y etiqueta— antes de elegir lavado o cuidado profesional."},
 {heading:"Recepción y seguimiento en el Centro",text:"Acercate a Gascón 2189 o enviá fotos para una orientación preliminar. Si la prenda necesita tratamiento de tintorería, coordinamos el servicio especializado fuera del local y te avisamos cuando está lista. La confirmación final requiere revisión presencial."}
],related:[{label:"Guía: cómo limpiar un tapado",href:"/blog/como-limpiar-un-tapado-sin-danarlo"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Retiro y entrega",href:"/servicios/retiro-y-entrega-de-ropa"},{label:"Todas las guías",href:"/blog"}]}),
"/servicios/retiro-y-entrega-de-ropa":base("/servicios/retiro-y-entrega-de-ropa","Retiro y entrega de ropa en el centro de Mar del Plata","Coordiná el retiro de tus prendas y su devolución una vez listas, según zona y disponibilidad. Consultanos con tu ubicación y el servicio que necesitás.","whatsapp_retiro_entrega","Hola Aquabon, quería consultar si tienen retiro y entrega en mi zona. Estoy en…",[
 {title:"Coordinación por WhatsApp",copy:"Envianos tu ubicación, el tipo de prendas y el servicio que necesitás. Confirmamos cobertura, disponibilidad y costo antes de coordinar."},
 {title:"Retiro registrado",copy:"Acordamos una franja y registramos el pedido. Informanos la cantidad de prendas, manchas, daños o condiciones particulares."},
 {title:"Entrega coordinada",copy:"Cuando el pedido está listo, te avisamos y coordinamos la devolución según el recorrido disponible."}
],[
 {question:"¿En qué zonas hacen retiro y entrega?",answer:"Priorizamos el centro de Mar del Plata y zonas cercanas. Enviá tu dirección por WhatsApp y confirmamos si el recorrido está disponible."},
 {question:"¿El retiro tiene costo?",answer:"Puede variar según la zona y el pedido. Te informamos el costo antes de confirmar la coordinación."},
 {question:"¿Qué servicios se pueden pedir?",answer:"Principalmente valet de ropa. Para acolchados u otras prendas, consultanos porque el retiro depende del volumen y de la evaluación del servicio."},
 {question:"¿Cómo preparo la ropa?",answer:"Colocala en una bolsa bien cerrada e informá la cantidad de prendas, manchas, daños o requisitos particulares."},
 {question:"¿La entrega es en el día?",answer:"No se confirma de forma automática. El plazo depende del servicio, el volumen de trabajo y la disponibilidad del recorrido."}
],{title:"Retiro y entrega de ropa en el centro de Mar del Plata | Aquabon",description:"Consultá retiro y entrega de ropa en el centro de Mar del Plata según zona y disponibilidad. Valet y otros servicios con coordinación por WhatsApp.",eyebrow:"RETIRO Y ENTREGA · CENTRO",cta:"Consultar cobertura",steps:[
 {title:"Enviá tu ubicación",copy:"Escribinos por WhatsApp con tu dirección, el servicio y una referencia del volumen."},
 {title:"Confirmamos el recorrido",copy:"Te indicamos cobertura, costo, franja posible y condiciones antes de coordinar."},
 {title:"Retiramos y registramos",copy:"Recibimos la bolsa cerrada con la información de cantidad, manchas o daños que nos hayas comunicado."},
 {title:"Te avisamos y entregamos",copy:"Cuando el pedido está listo, coordinamos la devolución según la agenda disponible."}
],sections:[
 {heading:"Una alternativa para ahorrar traslados",text:"Si estás en el centro o en una zona cercana, consultá por retiro y entrega. La disponibilidad se confirma para cada pedido: no prometemos cobertura automática ni una franja sin verificar el recorrido."},
 {heading:"El servicio de lavado se define por separado",text:"El retiro y la entrega son una modalidad de coordinación. El tratamiento depende de las prendas: ropa cotidiana puede ingresar como valet; acolchados, tintorería y piezas especiales necesitan una evaluación previa."}
],related:[{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Lavado de acolchados",href:"/servicios/lavado-de-acolchados"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Todos los servicios",href:"/servicios"}],showLocation:true}),
"/servicios/valet-de-ropa":base("/servicios/valet-de-ropa","Servicio de valet de ropa en Mar del Plata","Lavado, secado y doblado de ropa cotidiana, con aviso por WhatsApp cuando está lista.","whatsapp_valet","Hola Aquabon, quería consultar por el servicio de valet.",[
 {title:"Lavado, secado y doblado",copy:"Recibimos ropa de uso diario y la devolvemos limpia, seca y lista para guardar."},
 {title:"Servicio a bolsa cerrada",copy:"El cliente debe informar la cantidad de prendas y comunicar daños, manchas o condiciones particulares."},
 {title:"Seguimiento por WhatsApp",copy:"Te avisamos cuando el pedido queda disponible para retirar."}
],[
 {question:"¿Qué incluye el valet?",answer:"Incluye lavado, secado y doblado de ropa cotidiana."},{question:"¿Qué ropa puedo enviar?",answer:"Ropa de uso diario. Las prendas delicadas se revisan aparte antes de confirmar el servicio."},
 {question:"¿Incluye planchado?",answer:"No está incluido de forma automática. Consultanos si una prenda necesita planchado."},{question:"¿Cuánto demora?",answer:"Depende del volumen de trabajo. Te informamos el plazo al recibir la bolsa."},
 {question:"¿Me avisan cuando está listo?",answer:"Sí, te avisamos por WhatsApp."},{question:"¿Hay retiro y entrega?",answer:"Consultanos según zona y disponibilidad."}
],{related:[{label:"Retiro y entrega",href:"/servicios/retiro-y-entrega-de-ropa"},{label:"Lavado de acolchados",href:"/servicios/lavado-de-acolchados"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Planchado",href:"/servicios/planchado"}]}),
"/servicios/lavado-de-acolchados":base("/servicios/lavado-de-acolchados","Lavado de acolchados en Mar del Plata","Lavamos acolchados, cubrecamas y frazadas según tamaño, tejido, relleno y estado.","whatsapp_acolchados","Hola Aquabon, quería consultar por el lavado de un acolchado.",[
 {title:"Una y dos plazas",copy:"Recibimos diferentes tamaños y confirmamos el proceso después de revisar el volumen."},
 {title:"Pluma y rellenos especiales",copy:"Revisamos la etiqueta y el relleno para determinar si el lavado es técnicamente adecuado."},
 {title:"Secado controlado",copy:"Trabajamos el secado según el material para evitar calor innecesario."}
],[
 {question:"¿Lavan acolchados de pluma?",answer:"Los recibimos para valoración previa según etiqueta, relleno y estado."},{question:"¿Reciben acolchados de dos plazas?",answer:"Sí, sujeto a revisión de tamaño y volumen."},
 {question:"¿Lavan frazadas y cubrecamas?",answer:"Sí, los revisamos para confirmar el tratamiento."},{question:"¿Salen todas las manchas?",answer:"No podemos garantizarlo: depende de su origen, antigüedad y tejido."},
 {question:"¿Cuánto tarda?",answer:"Te confirmamos el plazo al recibirlo."},{question:"¿Puedo enviar una foto?",answer:"Sí, mandala por WhatsApp para una primera orientación."}
],{related:[{label:"Guía: cómo lavar un acolchado de plumas",href:"/blog/como-lavar-un-acolchado-de-plumas"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Lavado de zapatillas",href:"/servicios/lavado-de-zapatillas"}]}),
"/servicios/tintoreria":base("/servicios/tintoreria","Tintorería en Mar del Plata","Punto de recepción y seguimiento para sacos, vestidos, tapados, camperas y prendas que requieren tratamiento especializado.","whatsapp_tintoreria","Hola Aquabon, quería consultar por una prenda de tintorería.",[
 {title:"Recepción cercana",copy:"Dejás la prenda en Aquabon y registramos sus características y observaciones."},
 {title:"Tratamiento especializado",copy:"Coordinamos el servicio adecuado fuera del local cuando la prenda lo requiere."},
 {title:"Seguimiento y entrega",copy:"Centralizamos el seguimiento y te avisamos cuando vuelve disponible."}
],[
 {question:"¿Qué prendas reciben?",answer:"Sacos, vestidos, tapados, camperas y otras prendas especiales, sujetas a revisión."},{question:"¿Se trata en el local?",answer:"Aquabon funciona como punto de recepción y seguimiento cuando se requiere un servicio especializado."},
 {question:"¿Garantizan quitar manchas?",answer:"No. El resultado depende de la mancha, el tejido y su antigüedad."},{question:"¿Cuánto demora?",answer:"Te informamos el plazo luego de revisar la prenda."},{question:"¿Dónde retiro?",answer:"En Aquabon, Gascón 2189."}
],{related:[{label:"Lavado de camperas y tapados",href:"/servicios/lavado-de-camperas-y-tapados"},{label:"Guía: qué prendas llevar a tintorería",href:"/blog/que-prendas-conviene-llevar-a-la-tintoreria"},{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Todos los servicios",href:"/servicios"}]}),
"/servicios/planchado":base("/servicios/planchado","Servicio de planchado en Mar del Plata","Planchado de camisas y otras prendas, con recepción en Gascón 2189 y seguimiento por WhatsApp.","whatsapp_planchado","Hola Aquabon, quería consultar por el servicio de planchado.",[
 {title:"Revisión de cada prenda",copy:"Comprobamos el tejido, la etiqueta y los detalles que requieren un cuidado particular antes de confirmar el trabajo."},
 {title:"Planchado por prenda",copy:"Recibimos camisas y otras prendas aptas para planchado. Consultanos por cantidad y tipo de tejido."},
 {title:"Listas para retirar",copy:"Te avisamos por WhatsApp cuando el pedido está terminado y disponible en el local."}
],[
 {question:"¿Qué prendas reciben para planchar?",answer:"Recibimos camisas y otras prendas aptas para planchado. La viabilidad se confirma al revisar tejido, etiqueta y estado."},
 {question:"¿El valet incluye planchado?",answer:"No. El valet incluye lavado, secado y doblado; el planchado se solicita como un servicio aparte."},
 {question:"¿Puedo llevar solo una prenda?",answer:"Sí. Consultanos por WhatsApp o acercate a Gascón 2189 para confirmar el servicio."},
 {question:"¿Cuánto demora?",answer:"El plazo depende de la cantidad y el tipo de prendas. Te lo informamos al recibirlas."},
 {question:"¿Me avisan cuando está listo?",answer:"Sí, hacemos el seguimiento y te avisamos por WhatsApp."}
],{sections:[
 {heading:"Planchado sin sumar otra tarea a tu día",text:"Podés dejar las prendas en nuestro local del Centro y retirarlas cuando te avisemos. Es una opción práctica para camisas y ropa que necesita una terminación más cuidada."},
 {heading:"Un servicio distinto del valet",text:"El valet devuelve la ropa lavada, seca y doblada. Si necesitás planchado, pedilo de manera específica para que podamos revisar las prendas y confirmar el trabajo."}
]}),
"/servicios/tenido-de-prendas":base("/servicios/tenido-de-prendas","Teñido de prendas en Mar del Plata","Valoramos la recuperación o el cambio de color según la composición, el color original y el estado de la prenda.","whatsapp_tenido","Hola Aquabon, quería consultar por el teñido de una prenda.",[
 {title:"Valoración del tejido",copy:"La composición determina cuánto puede absorber el color y qué resultado es razonable esperar."},
 {title:"Recuperación de color",copy:"Evaluamos prendas desteñidas o con color apagado antes de aceptar el trabajo."},
 {title:"Cambio de color",copy:"Puede ser posible en algunos casos, especialmente de tonos claros a más oscuros."}
],[
 {question:"¿Qué prendas se pueden teñir?",answer:"Depende principalmente de la composición, costuras y estado."},{question:"¿Todos los tejidos aceptan teñido?",answer:"No. Algunas fibras sintéticas presentan limitaciones."},
 {question:"¿Puedo pasar de claro a oscuro?",answer:"Suele ser más viable, pero requiere valoración previa."},{question:"¿Se recupera una prenda desteñida?",answer:"En algunos casos sí; el resultado varía según material y desgaste."},{question:"¿Cuánto demora?",answer:"Te confirmamos el plazo después de revisar la prenda."}
]),
"/servicios/arreglos-y-costura":base("/servicios/arreglos-y-costura","Arreglos y costura de ropa en Mar del Plata","Recibimos prendas para valorar pequeños arreglos, ajustes, reparaciones y costuras.","whatsapp_costura","Hola Aquabon, quería consultar por un arreglo de costura.",[
 {title:"Revisión previa",copy:"Necesitamos ver la prenda para comprobar el tipo de tejido, la costura y el alcance."},
 {title:"Pequeños arreglos",copy:"Evaluamos reparaciones y ajustes sencillos según cada caso."},
 {title:"Confirmación clara",copy:"Antes de aceptar el trabajo te indicamos si puede realizarse y el plazo estimado."}
],[
 {question:"¿Qué arreglos realizan?",answer:"Evaluamos pequeños arreglos, reparaciones y ajustes al ver la prenda."},{question:"¿Tengo que llevar la prenda?",answer:"Sí, la valoración presencial permite confirmar medidas y viabilidad."},
 {question:"¿Arreglan cualquier tejido?",answer:"Depende del material, daño y tipo de costura."},{question:"¿Cuánto demora?",answer:"El plazo se informa después de revisar el trabajo."}
]),
"/servicios/lavado-de-zapatillas":base("/servicios/lavado-de-zapatillas","Lavado de zapatillas en Mar del Plata","Limpieza y secado de zapatillas después de revisar material, color, manchas y desgaste.","whatsapp_zapatillas","Hola Aquabon, quería consultar por el lavado de unas zapatillas.",[
 {title:"Revisión del material",copy:"Cuero, tela, gamuza y materiales combinados requieren cuidados diferentes."},
 {title:"Limpieza cuidada",copy:"Definimos el proceso según suciedad, color y estado de las uniones."},
 {title:"Resultado realista",copy:"La limpieza mejora el aspecto, pero no revierte desgaste, decoloración o daños previos."}
],[
 {question:"¿Lavan cualquier zapatilla?",answer:"Primero revisamos el material y el estado para confirmar si es adecuado."},{question:"¿Quedan como nuevas?",answer:"No lo garantizamos; el desgaste y la decoloración no siempre son reversibles."},
 {question:"¿Salen todas las manchas?",answer:"Depende del origen, la antigüedad y el material."},{question:"¿Cómo se secan?",answer:"El secado se adapta al material para evitar calor innecesario."},{question:"¿Cuánto demora?",answer:"Te indicamos el plazo al recibirlas."}
]),
};
export const servicesHub:LandingData={path:"/servicios",title:"Servicios de lavandería y tintorería | Aquabon",description:"Conocé los servicios de Aquabon en Mar del Plata y consultá por WhatsApp.",eyebrow:"SERVICIOS AQUABON",h1:"Servicios de lavandería y tintorería",intro:"Ropa cotidiana, acolchados, prendas delicadas, teñido, arreglos y zapatillas: encontrá el cuidado que necesitás.",event:"whatsapp_servicios",message:"Hola Aquabon, quería saber qué servicio necesita mi prenda.",cta:"Consultar mi prenda",crumbs:[{label:"Inicio",href:"/"},{label:"Servicios",href:"/servicios"}],sections:[{heading:"¿Qué servicio necesitás?",text:"Ropa cotidiana: valet. Acolchados y cubrecamas: lavado de acolchados. Sacos, tapados y prendas delicadas: tintorería. Para color, costuras o calzado, elegí la opción específica."}],items:rel.map(x=>({title:x.label,copy:"Ingresá para conocer el proceso, resolver dudas y consultar por WhatsApp."})),steps:commonSteps,faqs:[{question:"¿Puedo mandar una foto?",answer:"Sí, una foto puede ayudarnos a darte una primera orientación."},{question:"¿Atienden sin turno?",answer:"Podés acercarte en el horario del local; para consultas específicas, escribinos antes."},{question:"¿Hacen retiro y entrega?",answer:"Consultanos según zona y disponibilidad."},{question:"¿Publican precios?",answer:"No; el valor se confirma según el servicio y la prenda."}],related:rel,showLocation:true};
