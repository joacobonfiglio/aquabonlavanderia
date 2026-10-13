import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="¿Hay que lavar la ropa nueva antes de usarla?";
const description="Cuándo conviene lavar una prenda nueva, qué revisar antes del primer lavado y cómo evitar irritación, desteñido o deformación.";
const path="/blog/hay-que-lavar-la-ropa-nueva";
const faqs=[
  {question:"¿Siempre hay que lavar la ropa nueva?",answer:"Es una precaución recomendable, sobre todo en prendas que tocan directamente la piel, ropa interior, ropa de bebé o si tenés piel sensible. Antes, revisá la etiqueta para elegir el cuidado permitido."},
  {question:"¿La ropa nueva viene limpia?",answer:"No necesariamente. Pudo pasar por fabricación, transporte, depósito y exhibición. El primer lavado ayuda a retirar polvo, suciedad superficial y parte de los residuos de acabado, aunque no sustituye seguir la etiqueta."},
  {question:"¿Cómo hago el primer lavado?",answer:"Retirá etiquetas comerciales desprendibles, leé la etiqueta de cuidado, separá los colores intensos y elegí detergente, temperatura y ciclo compatibles. No uses calor máximo ni desinfectantes por defecto."},
  {question:"¿Una prenda nueva puede desteñir?",answer:"Sí. Si el color es intenso, conviene lavarla sola o con tonos similares. Cuando la etiqueta lo permite, podés comprobar una costura interior con un paño blanco húmedo antes de mezclarla."},
  {question:"¿Qué hago si la etiqueta indica limpieza en seco?",answer:"No la mojes para probar. La indicación se refiere al cuidado profesional de la prenda completa; consultá antes de lavar en casa."},
  {question:"¿Hay que lavar la ropa nueva de bebé?",answer:"Sí, es especialmente prudente. Organismos de salud y dermatología aconsejan lavarla antes del primer uso con un producto compatible y sin fragancias o colorantes si la piel es sensible."}
];

export const metadata:Metadata={title:"¿Hay que lavar la ropa nueva? | Aquabon",description:"¿Hay que lavar la ropa nueva antes de usarla? Cuándo conviene, cómo hacer el primer lavado y qué prendas necesitan cuidado especial.",alternates:{canonical:path},openGraph:{title,description,url:path,type:"article",locale:"es_AR",publishedTime:"2026-10-13",images:[{url:"/blog/revisar-ropa-nueva-primer-lavado.webp",width:1400,height:788,alt:"Revisión de la etiqueta y una costura interior de una prenda nueva antes del primer lavado"}]}};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="hay-que-lavar-la-ropa-nueva" date="2026-10-13" readingTime="7 MIN DE LECTURA" cluster="Cuidado de ropa" image="/blog/revisar-ropa-nueva-primer-lavado.webp" service="valet"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <p><strong>Sí: en general conviene lavar la ropa nueva antes de estrenarla.</strong> Es especialmente importante cuando va a quedar en contacto directo con la piel, si es ropa interior o de bebé, o si la usará una persona con piel sensible. La etiqueta de cuidado sigue siendo la guía principal.</p>

    <h2>¿Por qué conviene lavar una prenda nueva?</h2>
    <p>Que una prenda no haya sido usada no significa que esté lista para el contacto prolongado con la piel. Durante la fabricación, el transporte, el almacenamiento y la exhibición puede acumular polvo, suciedad superficial o residuos de acabados textiles. Health Canada y la American Academy of Dermatology recomiendan lavar la ropa nueva antes de usarla para reducir el contacto con esos residuos y el riesgo de irritación.</p>
    <p>No hace falta tratar toda prenda nueva como si estuviera contaminada: alcanza con aplicar una precaución razonable y elegir un proceso compatible con su composición.</p>

    <h2>Qué prendas conviene priorizar</h2>
    <ul><li>Ropa interior, medias, remeras y prendas que quedan muchas horas sobre la piel.</li><li>Ropa de bebé o de niños pequeños.</li><li>Prendas para personas con dermatitis, eczema o piel reactiva.</li><li>Colores muy intensos, oscuros o estampados que podrían transferir tinte.</li><li>Prendas probadas por varias personas o expuestas durante mucho tiempo.</li></ul>

    <h2>Primer lavado: una rutina segura</h2>
    <ol><li><strong>Leé la etiqueta:</strong> identifica temperatura, ciclo, secado y cuidado profesional. Esta <Link href="/blog/simbolos-de-lavado-de-la-ropa">guía de símbolos de lavado</Link> ayuda a interpretarla.</li><li><strong>Retirá solo lo desprendible:</strong> sacá cartones, stickers, alfileres y etiquetas comerciales, sin cortar la etiqueta de composición y cuidado.</li><li><strong>Separá por color y tejido:</strong> una prenda intensa se lava sola o con tonos parecidos la primera vez.</li><li><strong>Elegí una dosis medida:</strong> más producto no significa más limpieza. Revisá <Link href="/blog/cuanto-detergente-usar">cuánto detergente usar</Link> según el envase, la carga y la suciedad.</li><li><strong>Secá como indica el fabricante:</strong> el calor innecesario puede encoger, fijar arrugas o dañar elásticos.</li></ol>

    <figure className="article-image"><Image src="/blog/revisar-ropa-nueva-primer-lavado.webp" alt="Revisión de la etiqueta y una costura interior de una prenda nueva antes del primer lavado" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>La etiqueta y una costura interior permiten decidir el primer lavado antes de mezclar la prenda con el resto.</figcaption></figure>

    <h2>Cómo comprobar si puede desteñir</h2>
    <p>Los colores intensos pueden liberar tinte en los primeros lavados. Si la etiqueta permite mojar la prenda, probá una zona oculta con un paño blanco húmedo y observá si transfiere color. Ante la duda, lavala separada. En nuestra guía sobre <Link href="/blog/como-evitar-que-la-ropa-destina">cómo evitar que la ropa destiña</Link> explicamos cómo clasificar la carga y qué hacer si ya hubo transferencia.</p>

    <h2>Prendas que no conviene poner directo en el lavarropas</h2>
    <p>Consultá antes si la etiqueta exige cuidado profesional, si la prenda tiene forro, entretela, hombreras, aplicaciones pegadas o adornos delicados. También conviene detener el proceso si no hay etiqueta y desconocés el material. Una prueba improvisada puede dejar cercos, deformar la estructura o soltar el color.</p>

    <h2>Errores frecuentes en el primer lavado</h2>
    <ul><li>Usar agua muy caliente “para desinfectar” sin que la etiqueta lo permita.</li><li>Mezclar una prenda oscura nueva con ropa clara.</li><li>Agregar demasiado detergente o suavizante.</li><li>Secar con calor alto sin revisar el símbolo de secado.</li><li>Mojar una prenda estructurada indicada para limpieza profesional.</li></ul>

    <h2>Si preferís delegar el cuidado</h2>
    <p>En Aquabon podemos evaluar prendas de uso cotidiano para nuestro <Link href="/servicios/valet-de-ropa">servicio de valet</Link> y prendas especiales para <Link href="/servicios/tintoreria">tintorería</Link>. Escribinos por WhatsApp con una foto de la prenda y su etiqueta; confirmamos el servicio adecuado según material, estado y capacidad.</p>

    <h2>Preguntas frecuentes</h2>{faqs.map(f=><section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

    <h2>Fuentes consultadas</h2><ul><li><a href="https://www.canada.ca/en/health-canada/services/home-safety/clothing-textiles.html" rel="noreferrer" target="_blank">Health Canada: seguridad en ropa y textiles</a>.</li><li><a href="https://www.aad.org/public/diseases/eczema/childhood/itch-relief/clothes" rel="noreferrer" target="_blank">American Academy of Dermatology: ropa y piel sensible</a>.</li><li><a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" rel="noreferrer" target="_blank">GINETEX: símbolos de cuidado textil</a>.</li></ul>
  </ArticleLayout>;
}
