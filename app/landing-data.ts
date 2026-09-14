import type { LandingData } from "./SeoLanding";

const commonSteps = [
  { title: "Consultanos", copy: "Escribinos o acercate a Gascón 2189 para contarnos qué necesitás." },
  { title: "Revisamos", copy: "Valoramos el material, el estado y las indicaciones de cuidado antes de confirmar el servicio." },
  { title: "Te avisamos", copy: "Hacemos el seguimiento y te contactamos por WhatsApp cuando el pedido está listo." },
];
const rel = [
  {label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Lavado de acolchados",href:"/servicios/lavado-de-acolchados"},
  {label:"Tintorería",href:"/servicios/tintoreria"},{label:"Teñido de prendas",href:"/servicios/tenido-de-prendas"},
  {label:"Arreglos y costura",href:"/servicios/arreglos-y-costura"},{label:"Lavado de zapatillas",href:"/servicios/lavado-de-zapatillas"},
];
const base = (path:string,h1:string,intro:string,event:string,message:string,items:LandingData["items"],faqs:LandingData["faqs"],extra:Partial<LandingData>={}):LandingData => ({
  path, h1, intro, event, message, items, faqs, steps: commonSteps, related: rel.filter(x=>x.href!==path).slice(0,4),
  title: h1+" | Aquabon", description: intro, eyebrow:"AQUABON · GASCÓN 2189", cta:"Consultar por WhatsApp",
  crumbs:[{label:"Inicio",href:"/"},{label:"Servicios",href:"/servicios"},{label:h1.replace(" en Mar del Plata",""),href:path}],
  sections:[{heading:"Cuidado según cada prenda",text:"No todas las prendas necesitan el mismo proceso. Antes de comenzar revisamos material, etiqueta, manchas y estado general para orientarte con claridad."}], ...extra
});
export const pages: Record<string,LandingData> = {
"/servicios/valet-de-ropa":base("/servicios/valet-de-ropa","Servicio de valet de ropa en Mar del Plata","Lavado, secado y doblado de ropa cotidiana, con aviso por WhatsApp cuando está lista.","whatsapp_valet","Hola Aquabon, quería consultar por el servicio de valet.",[
 {title:"Lavado, secado y doblado",copy:"Recibimos ropa de uso diario y la devolvemos limpia, seca y lista para guardar."},
 {title:"Servicio a bolsa cerrada",copy:"El cliente debe informar la cantidad de prendas y comunicar daños, manchas o condiciones particulares."},
 {title:"Seguimiento por WhatsApp",copy:"Te avisamos cuando el pedido queda disponible para retirar."}
],[
 {question:"¿Qué incluye el valet?",answer:"Incluye lavado, secado y doblado de ropa cotidiana."},{question:"¿Qué ropa puedo enviar?",answer:"Ropa de uso diario. Las prendas delicadas se revisan aparte antes de confirmar el servicio."},
 {question:"¿Incluye planchado?",answer:"No está incluido de forma automática. Consultanos si una prenda necesita planchado."},{question:"¿Cuánto demora?",answer:"Depende del volumen de trabajo. Te informamos el plazo al recibir la bolsa."},
 {question:"¿Me avisan cuando está listo?",answer:"Sí, te avisamos por WhatsApp."},{question:"¿Hay retiro y entrega?",answer:"Consultanos según zona y disponibilidad."}
]),
"/servicios/lavado-de-acolchados":base("/servicios/lavado-de-acolchados","Lavado de acolchados en Mar del Plata","Lavamos acolchados, cubrecamas y frazadas según tamaño, tejido, relleno y estado.","whatsapp_acolchados","Hola Aquabon, quería consultar por el lavado de un acolchado.",[
 {title:"Una y dos plazas",copy:"Recibimos diferentes tamaños y confirmamos el proceso después de revisar el volumen."},
 {title:"Pluma y rellenos especiales",copy:"Revisamos la etiqueta y el relleno para determinar si el lavado es técnicamente adecuado."},
 {title:"Secado controlado",copy:"Trabajamos el secado según el material para evitar calor innecesario."}
],[
 {question:"¿Lavan acolchados de pluma?",answer:"Los recibimos para valoración previa según etiqueta, relleno y estado."},{question:"¿Reciben acolchados de dos plazas?",answer:"Sí, sujeto a revisión de tamaño y volumen."},
 {question:"¿Lavan frazadas y cubrecamas?",answer:"Sí, los revisamos para confirmar el tratamiento."},{question:"¿Salen todas las manchas?",answer:"No podemos garantizarlo: depende de su origen, antigüedad y tejido."},
 {question:"¿Cuánto tarda?",answer:"Te confirmamos el plazo al recibirlo."},{question:"¿Puedo enviar una foto?",answer:"Sí, mandala por WhatsApp para una primera orientación."}
]),
"/servicios/tintoreria":base("/servicios/tintoreria","Tintorería en Mar del Plata","Punto de recepción y seguimiento para sacos, vestidos, tapados, camperas y prendas que requieren tratamiento especializado.","whatsapp_tintoreria","Hola Aquabon, quería consultar por una prenda de tintorería.",[
 {title:"Recepción cercana",copy:"Dejás la prenda en Aquabon y registramos sus características y observaciones."},
 {title:"Tratamiento especializado",copy:"Coordinamos el servicio adecuado fuera del local cuando la prenda lo requiere."},
 {title:"Seguimiento y entrega",copy:"Centralizamos el seguimiento y te avisamos cuando vuelve disponible."}
],[
 {question:"¿Qué prendas reciben?",answer:"Sacos, vestidos, tapados, camperas y otras prendas especiales, sujetas a revisión."},{question:"¿Se trata en el local?",answer:"Aquabon funciona como punto de recepción y seguimiento cuando se requiere un servicio especializado."},
 {question:"¿Garantizan quitar manchas?",answer:"No. El resultado depende de la mancha, el tejido y su antigüedad."},{question:"¿Cuánto demora?",answer:"Te informamos el plazo luego de revisar la prenda."},{question:"¿Dónde retiro?",answer:"En Aquabon, Gascón 2189."}
]),
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
