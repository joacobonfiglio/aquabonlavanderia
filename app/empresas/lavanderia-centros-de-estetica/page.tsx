import type { LandingData } from "../../SeoLanding";
import SeoLanding, { landingMetadata } from "../../SeoLanding";

const data:LandingData={
  path:"/empresas/lavanderia-centros-de-estetica",
  title:"Lavandería para centros de estética en Mar del Plata | Aquabon",
  description:"Lavandería para centros de estética, salones y gabinetes en Mar del Plata. Consultá por toallas, batas y textiles según volumen y frecuencia.",
  eyebrow:"LAVANDERÍA PARA ESTÉTICA · MAR DEL PLATA",
  h1:"Lavandería para centros de estética en Mar del Plata",
  intro:"Evaluamos toallas, batas, capas y textiles de trabajo para coordinar un servicio acorde al volumen, la frecuencia y las indicaciones de cuidado de cada negocio.",
  event:"whatsapp_centros_estetica",
  message:"Hola Aquabon, quiero consultar por lavandería para un centro de estética o salón. Los textiles son: __. Cantidad aproximada: __. Frecuencia: __.",
  cta:"Consultar mi operación",
  crumbs:[{label:"Inicio",href:"/"},{label:"Empresas",href:"/empresas"},{label:"Centros de estética",href:"/empresas/lavanderia-centros-de-estetica"}],
  sections:[
    {heading:"Textiles limpios para una operación ordenada",text:"Salones, barberías, gabinetes, spas y centros de estética usan textiles con tamaños, colores y composiciones diferentes. Antes de comenzar relevamos qué necesitás lavar y cómo rota cada pieza."},
    {heading:"La frecuencia se define con datos reales",text:"Contanos cuántas toallas, batas, capas u otros textiles generás por jornada y cuántos recambios tenés disponibles. Con esa información confirmamos capacidad, plazo y una modalidad posible, sin comprometer una frecuencia que no se ajuste a tu operación."},
    {heading:"Manchas y productos requieren evaluación",text:"Aceites, cremas, maquillaje, tinturas y otros productos pueden necesitar tratamientos distintos y no siempre desaparecen por completo. Informanos qué usa tu negocio y evitá mezclar químicos antes de entregar los textiles."}
  ],
  items:[
    {title:"Toallas y textiles de cabina",copy:"Revisamos composición, color, tamaño, nivel de uso y volumen antes de confirmar el servicio."},
    {title:"Batas, capas y uniformes",copy:"Separamos las prendas que requieren otro cuidado y respetamos las indicaciones de sus etiquetas."},
    {title:"Servicio periódico a evaluar",copy:"Podemos analizar una frecuencia según cantidad, rotación, capacidad y necesidades reales del establecimiento."}
  ],
  steps:[
    {title:"Describí tus textiles",copy:"Indicá tipos, cantidades aproximadas, colores, frecuencia y productos con los que entran en contacto."},
    {title:"Evaluamos una muestra y el volumen",copy:"Revisamos etiquetas, manchas, capacidad y logística antes de confirmar condiciones."},
    {title:"Acordamos la modalidad",copy:"Definimos recepción o retiro, plazo, costo y seguimiento para la operación consultada."}
  ],
  faqs:[
    {question:"¿Qué textiles de estética pueden evaluar?",answer:"Toallas, batas, capas, uniformes y otros textiles lavables. La aceptación depende de la composición, el estado, el tipo de suciedad y el volumen."},
    {question:"¿Trabajan con peluquerías, barberías y spas?",answer:"Podemos evaluar operaciones de salones, barberías, gabinetes, spas y centros de estética. Primero necesitamos conocer textiles, cantidad y frecuencia."},
    {question:"¿Eliminan manchas de maquillaje, aceite o tintura?",answer:"Se evalúan, pero no se garantiza la eliminación total. El resultado depende del producto, la antigüedad, el tejido, el color y los tratamientos previos."},
    {question:"¿Hay una cantidad mínima o un precio fijo?",answer:"No publicamos un mínimo ni un precio único para todas las operaciones. Consultanos con volumen y frecuencia para confirmar capacidad y condiciones antes de comenzar."},
    {question:"¿Pueden retirar y entregar los textiles?",answer:"Se consulta según dirección, volumen, recorrido y disponibilidad. La cobertura, el costo y los horarios se confirman antes de coordinar."},
    {question:"¿Dónde está Aquabon?",answer:"Estamos en Gascón 2189, en el centro de Mar del Plata. También podés enviar los datos iniciales por WhatsApp."}
  ],
  related:[{label:"Servicios para empresas",href:"/empresas"},{label:"Retiro y entrega",href:"/servicios/retiro-y-entrega-de-ropa"},{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Guía: manchas de maquillaje",href:"/blog/como-sacar-maquillaje-de-la-ropa"}],
  showLocation:true
};

export const metadata=landingMetadata(data);
export default function Page(){return <SeoLanding data={data}/>;}
