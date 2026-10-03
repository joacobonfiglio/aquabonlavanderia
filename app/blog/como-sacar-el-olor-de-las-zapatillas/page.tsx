import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo sacar el olor de las zapatillas sin dañarlas";
const description="Una guía para encontrar la causa del olor, secar el interior, tratar las plantillas y evitar que la humedad vuelva a acumularse.";
const path="/blog/como-sacar-el-olor-de-las-zapatillas";
const faqs=[
  {question:"¿El bicarbonato sirve para sacar el olor de las zapatillas?",answer:"Puede ayudar a absorber olores cuando el calzado está completamente seco. Usá una cantidad pequeña dentro de una media o bolsita permeable, dejala actuar durante la noche y retirala antes de usar el par. Evitá el contacto directo si el fabricante desaconseja polvos o si el interior es delicado."},
  {question:"¿Hay que lavar las zapatillas si tienen mal olor?",answer:"No siempre. Primero ventilá y secá el par, retirando las plantillas si son removibles. Si el olor permanece o hay suciedad visible, revisá las indicaciones del fabricante antes de elegir limpieza manual, lavarropas o un servicio profesional."},
  {question:"¿Puedo poner perfume o desodorante dentro?",answer:"El perfume puede tapar el olor por poco tiempo, pero no elimina humedad ni suciedad. Además, algunos aerosoles dejan residuos. Conviene resolver primero la causa y usar únicamente productos compatibles con el material."},
  {question:"¿Cómo evitar que vuelva el olor?",answer:"Dejá que el calzado se seque por completo entre usos, alterná pares, usá medias limpias y aireá las plantillas. No guardes zapatillas húmedas en bolsos o cajas cerradas."},
  {question:"¿Cuándo conviene llevarlas a una limpieza profesional?",answer:"Cuando el olor persiste después del secado, hay suciedad profunda, las plantillas no se pueden retirar o el par combina materiales delicados. La evaluación previa permite elegir un proceso compatible, aunque no todos los olores o daños pueden eliminarse por completo."}
];

export const metadata:Metadata={title:"Cómo sacar el olor de las zapatillas | Aquabon",description:"Cómo sacar el olor de las zapatillas: secado, plantillas y prevención de humedad. Consultá limpieza y secado de tu par en Aquabon, Mar del Plata.",alternates:{canonical:path},openGraph:{title,description:"Cómo sacar el olor de las zapatillas: secado, plantillas y prevención de humedad. Consultá limpieza y secado de tu par en Aquabon, Mar del Plata.",type:"article",locale:"es_AR",url:path,publishedTime:"2026-09-27",images:[{url:"/blog/ventilar-plantillas-olor-zapatillas.webp",width:1400,height:788,alt:"Zapatillas abiertas junto a sus plantillas, una toalla limpia y bicarbonato para tratar el olor"}]}};

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="como-sacar-el-olor-de-las-zapatillas" date="2026-09-27" readingTime="6 MIN DE LECTURA" cluster="Zapatillas" image="/blog/ventilar-plantillas-olor-zapatillas.webp" service="zapatillas">
  <p className="article-lead"><strong>Para sacar el olor hay que eliminar la humedad y tratar el interior, no solamente perfumarlo.</strong> Empezá por abrir el calzado, retirar las plantillas si son removibles y dejar secar todo por separado. Recién después evaluá si alcanza con airear, si conviene usar un absorbente seco o si hace falta una limpieza compatible con los materiales.</p>
  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#causa">Identificar la causa</a></li><li><a href="#pasos">Qué hacer paso a paso</a></li><li><a href="#bicarbonato">Cómo usar bicarbonato</a></li><li><a href="#errores">Errores frecuentes</a></li><li><a href="#prevenir">Cómo prevenir el olor</a></li></ol></nav>

  <h2 id="causa">Primero: ¿olor a uso o humedad retenida?</h2>
  <div className="frequency-grid">
    <article><strong>Después de entrenar</strong><p>El interior quedó húmedo por transpiración. Airear plantillas, lengüeta y acolchado entre usos suele ser el primer paso.</p></article>
    <article><strong>Después de mojarlas</strong><p>La espuma puede conservar agua aunque la superficie parezca seca. Antes de desodorizar, completá el secado.</p></article>
    <article><strong>Olor que vuelve enseguida</strong><p>Puede haber residuos en plantilla, forro o zonas de difícil acceso. Taparlo con perfume no resuelve la causa.</p></article>
    <article><strong>Manchas o material alterado</strong><p>No apliques mezclas al azar. Cuero, gamuza, espumas y adhesivos no toleran los mismos productos.</p></article>
  </div>

  <h2 id="pasos">Cómo quitar el olor paso a paso</h2>
  <ol className="article-steps">
    <li><strong>Vacialas y abrí el interior.</strong><span>Retirá objetos, aflojá los cordones y levantá la lengüeta para que circule aire.</span></li>
    <li><strong>Sacá las plantillas removibles.</strong><span>Airealas por separado. Si tienen indicaciones de cuidado, respetalas antes de mojarlas o aplicar un producto.</span></li>
    <li><strong>Comprobá que estén secas.</strong><span>Presioná puntera, talón y acolchado con papel limpio. Si toma humedad, seguí el método de nuestra guía de secado.</span></li>
    <li><strong>Retirá residuos secos.</strong><span>Usá un paño o cepillo suave compatible con el material. No satures el interior con agua.</span></li>
    <li><strong>Absorbé el olor.</strong><span>Con el par seco, podés dejar una pequeña cantidad de bicarbonato dentro de una media limpia o bolsita permeable durante la noche.</span></li>
    <li><strong>Aireá antes de usar.</strong><span>Retirá por completo el absorbente y verificá que no queden polvo, humedad ni olor intenso.</span></li>
  </ol>

  <figure className="article-image"><Image src="/blog/ventilar-plantillas-olor-zapatillas.webp" alt="Par de zapatillas abierto y ventilado con las plantillas separadas, una toalla limpia y un recipiente con bicarbonato" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Separar las plantillas y abrir el calzado ayuda a ventilar las zonas porosas donde suele quedar humedad.</figcaption></figure>

  <h2 id="bicarbonato">Bicarbonato: útil, pero con cuidado</h2>
  <p>Adidas aconseja retirar las plantillas para combatir el olor y, cuando es intenso, utilizar una cantidad pequeña de bicarbonato. Nike también lo presenta como una opción absorbente. Para reducir residuos y facilitar la retirada, en lugar de volcarlo sobre toda la plantilla podés contenerlo en una media fina o bolsita permeable limpia.</p>
  <div className="article-callout"><strong>No mezcles productos por costumbre</strong><p>Bicarbonato, vinagre, alcohol, lavandina, agua oxigenada y aceites no son intercambiables. Una receta que funciona en lona blanca puede decolorar otro tejido, resecar cuero o dejar residuos en la espuma. Seguí siempre las indicaciones del fabricante.</p></div>
  <p>Si decidís aplicarlo directamente porque el fabricante lo permite, usá poco, dejá actuar con el calzado seco y aspiralo o sacudilo por completo antes de volver a colocar la plantilla.</p>

  <h2 id="errores">Qué conviene evitar</h2>
  <ul><li><strong>Guardar el par apenas termina el uso:</strong> una mochila o caja cerrada retiene humedad.</li><li><strong>Perfumar sin secar:</strong> mezcla aromas, pero no retira la causa del olor.</li><li><strong>Empapar el interior:</strong> aumenta el tiempo de secado y puede afectar espuma y adhesivos.</li><li><strong>Usar calor fuerte:</strong> secador, radiador o secadora pueden deformar materiales y uniones.</li><li><strong>Volver a colocar plantillas húmedas:</strong> el exterior puede estar seco antes que el interior.</li><li><strong>Aplicar la misma receta a todos los pares:</strong> malla, lona, cuero y gamuza requieren cuidados distintos.</li></ul>

  <h2 id="prevenir">Cómo evitar que el olor vuelva</h2>
  <ul><li>Alterná pares para que cada uno tenga tiempo de secarse.</li><li>Usá medias limpias y cambialas después de entrenar.</li><li>Dejá las zapatillas abiertas en un lugar ventilado al terminar el día.</li><li>Aireá las plantillas removibles por separado.</li><li>No guardes el calzado mojado ni lo uses antes de que se seque por completo.</li><li>Limpiá la suciedad antes de que se acumule en el forro y la plantilla.</li></ul>
  <p>Si todavía están húmedas, seguí nuestra guía para <Link href="/blog/como-secar-zapatillas-sin-deformarlas">secar zapatillas sin deformarlas</Link>. Si evaluás un lavado, revisá antes <Link href="/blog/se-pueden-lavar-zapatillas-en-el-lavarropas">cuándo pueden ir al lavarropas</Link>.</p>

  <h2>Cuando la ventilación no alcanza</h2>
  <p>Un olor persistente puede requerir una limpieza más profunda de plantilla, forro y capellada. En Aquabon evaluamos el par antes de confirmar el <Link href="/servicios/lavado-de-zapatillas">lavado de zapatillas</Link>, el precio y el plazo. Podés acercarlo a Gascón 2189, en el centro de Mar del Plata.</p>

  <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
  <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.nike.com/es/a/como-quitar-el-olor-de-las-zapatillas" target="_blank" rel="noreferrer">Nike: humedad, plantillas y opciones para absorber olores</a> y <a href="https://www.adidas.com/qa/en/help-page.html" target="_blank" rel="noreferrer">Adidas: ventilación de plantillas, bicarbonato y secado a temperatura ambiente</a>.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
