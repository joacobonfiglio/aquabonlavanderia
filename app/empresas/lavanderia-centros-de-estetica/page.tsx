import type { LandingData } from "../../SeoLanding";
import SeoLanding, { landingMetadata } from "../../SeoLanding";

const data:LandingData={
  path:"/empresas/lavanderia-centros-de-estetica",
  title:"Lavandería para estética en Mar del Plata | Aquabon",
  description:"Lavandería para centros de estética, salones y gabinetes en Mar del Plata. Consultá por toallas, batas y textiles según volumen y frecuencia.",
  eyebrow:"LAVANDERÍA PARA ESTÉTICA · MAR DEL PLATA",
  h1:"Lavandería para centros de estética en Mar del Plata",
  intro:"Vos atendés a tus clientes; las toallas, batas y capas nos las dejás a nosotros. Coordinamos un servicio acorde al volumen, la frecuencia y las indicaciones de cuidado de tu negocio.",
  event:"whatsapp_centros_estetica",
  message:"Hola Aquabon, quiero consultar por lavandería para un centro de estética o salón. Los textiles son: __. Cantidad aproximada: __. Frecuencia: __.",
  cta:"Consultar mi operación",
  crumbs:[{label:"Inicio",href:"/"},{label:"Empresas",href:"/empresas"},{label:"Centros de estética",href:"/empresas/lavanderia-centros-de-estetica"}],
  sections:[
    {heading:"Textiles limpios para una operación ordenada",text:"Salones, barberías, gabinetes, spas y centros de estética usan textiles de tamaños, colores y materiales distintos. Antes de empezar vemos qué necesitás lavar y cómo rota cada pieza."},
    {heading:"La frecuencia se define con datos reales",text:"Contanos cuántas toallas, batas o capas usás por día y cuántos recambios tenés. Con eso te confirmamos capacidad, plazo y frecuencia, sin prometerte algo que no podamos cumplir."},
    {heading:"Manchas y productos, revisados antes",text:"Aceites, cremas, maquillaje y tinturas pueden necesitar tratamientos distintos y no siempre salen por completo. Contanos qué productos usás y no mezcles químicos antes de entregarnos los textiles."}
  ],
  items:[
    {title:"Toallas y textiles de cabina",copy:"Revisamos material, color, tamaño, uso y volumen antes de confirmar."},
    {title:"Batas, capas y uniformes",copy:"Separamos las prendas que requieren otro cuidado y respetamos las indicaciones de sus etiquetas."},
    {title:"Servicio periódico",copy:"Armamos una frecuencia según cantidad, rotación y lo que de verdad necesita tu negocio."}
  ],
  steps:[
    {title:"Contanos tus textiles",copy:"Qué tipos, más o menos cuántos, colores, frecuencia y qué productos tocan."},
    {title:"Revisamos una muestra",copy:"Etiquetas, manchas, volumen y logística, antes de confirmar condiciones."},
    {title:"Nos ocupamos",copy:"Acordamos retiro o entrega en el local, plazo y costo, y vos te dedicás a tus clientes."}
  ],
  faqs:[
    {question:"¿Qué textiles de estética lavan?",answer:"Toallas, batas, capas, uniformes y otros textiles lavables. Antes de aceptarlos miramos material, estado, tipo de suciedad y volumen."},
    {question:"¿Trabajan con peluquerías, barberías y spas?",answer:"Sí: salones, barberías, gabinetes, spas y centros de estética. Contanos qué textiles son, cuántos y cada cuánto."},
    {question:"¿Salen las manchas de maquillaje, aceite o tintura?",answer:"Las tratamos, pero no siempre salen del todo, y te lo decimos antes. Depende del producto, la antigüedad, el tejido y el color."},
    {question:"¿Hay una cantidad mínima o un precio fijo?",answer:"No publicamos un mínimo ni un precio único, porque cada negocio es distinto. Escribinos con volumen y frecuencia y te pasamos condiciones antes de empezar."},
    {question:"¿Pueden retirar y entregar los textiles?",answer:"Sí, en once barrios de Mar del Plata. Contanos la dirección, el volumen y la frecuencia, y coordinamos días y costo antes de empezar. Si estás en otra zona, consultanos."},
    {question:"¿Dónde está Aquabon?",answer:"En Gascón 2189, en el centro de Mar del Plata. Si te queda más cómodo, arrancamos por WhatsApp."}
  ],
  related:[{label:"Servicios para empresas",href:"/empresas"},{label:"Retiro y entrega",href:"/servicios/retiro-y-entrega-de-ropa"},{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Guía: manchas de maquillaje",href:"/blog/como-sacar-maquillaje-de-la-ropa"}],
  showLocation:true
};

export const metadata=landingMetadata(data);
export default function Page(){return <SeoLanding data={data}/>;}
