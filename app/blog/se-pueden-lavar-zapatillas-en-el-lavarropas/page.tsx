import type { Metadata } from "next";
import Image from "../../Img";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// AQB-012 del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx): se mejoró esta guía en lugar de crear otra
// para la misma búsqueda. Actualizada el 19/11/2026.
const title="¿Se pueden lavar zapatillas en el lavarropas? Riesgos que nadie te cuenta";
const whatsapp="Hola Aquabon, quería consultar por el lavado de unas zapatillas. Son de __ (tela, cuero, gamuza) y les mando una foto del par.";
const description="El centrifugado, los golpes y el calor pueden despegar la suela, deformar la horma y dañar el tambor. Qué revisar en el par antes de arriesgarlo.";
const path="/blog/se-pueden-lavar-zapatillas-en-el-lavarropas";
const faqs=[
  {question:"¿Las zapatillas de tela se pueden lavar en el lavarropas?",answer:"No necesariamente. Aunque la capellada sea de tela o malla, el par puede incluir adhesivos, espuma, refuerzos y tintes que no toleren la máquina. Solo conviene hacerlo cuando el fabricante del modelo lo autoriza y explica cómo."},
  {question:"¿Qué zapatillas no conviene meter en el lavarropas?",answer:"Evitá la máquina en cuero, gamuza o nobuck; pares con materiales combinados, apliques, luces o piezas delicadas; y zapatillas con uniones abiertas, suela despegada o espuma deteriorada. Ante cualquier duda, elegí limpieza manual o evaluación profesional."},
  {question:"¿Hay que sacar cordones y plantillas?",answer:"Para la limpieza manual suele ayudar retirarlos y tratarlos por separado. Si el fabricante permite lavado a máquina, seguí exactamente sus indicaciones: algunas plantillas y componentes no deben sumergirse."},
  {question:"¿Se pueden secar las zapatillas en secadora?",answer:"No salvo indicación expresa del fabricante. El calor puede deformar materiales y afectar adhesivos. La opción prudente es secar al aire, a temperatura ambiente y lejos del sol directo o de una fuente intensa de calor."},
  {question:"¿El lavado profesional deja las zapatillas como nuevas?",answer:"No se puede garantizar. La limpieza puede mejorar suciedad y algunas manchas, pero no revierte desgaste, decoloración, grietas, amarilleo, daños de espuma ni uniones deterioradas."}
];

export const metadata:Metadata={title:"¿Se pueden lavar zapatillas en el lavarropas? | Aquabon",description:"¿Se pueden lavar zapatillas en el lavarropas? Los riesgos para la suela, la horma y el tambor, y cómo las lavamos en Aquabon, Mar del Plata.",alternates:{canonical:path},openGraph:{title,description:"¿Se pueden lavar zapatillas en el lavarropas? Los riesgos para la suela, la horma y el tambor, y cómo las lavamos en Aquabon, Mar del Plata.",type:"article",locale:"es_AR",url:path,publishedTime:"2026-09-25",images:[{url:"/blog/revisar-zapatillas-antes-lavar.webp",width:1400,height:788,alt:"Revisión de materiales, uniones, cordones y plantilla de dos zapatillas antes de limpiarlas"}]}};

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="se-pueden-lavar-zapatillas-en-el-lavarropas" date="2026-09-25" updated="2026-11-19" readingTime="7 MIN DE LECTURA" cluster="Zapatillas" image="/blog/revisar-zapatillas-antes-lavar.webp" service="zapatillas">
  <p className="article-lead"><strong>Solo cuando el fabricante del modelo lo permite, y aun así con riesgo.</strong> El centrifugado y los golpes contra el tambor despegan suelas y deforman la horma, el calor afloja el pegamento y una zapatilla pesada puede dañar el lavarropas. Que parezca de tela no alcanza: también tiene espuma, adhesivos y tintes que reaccionan distinto.</p>
  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#respuesta">La respuesta corta</a></li><li><a href="#adentro">Qué le pasa adentro del lavarropas</a></li><li><a href="#revisar">Qué revisar</a></li><li><a href="#evitar">Cuándo evitar el lavarropas</a></li><li><a href="#permitido">Si el fabricante lo permite</a></li><li><a href="#secar">Cómo secarlas</a></li></ol></nav>

  <h2 id="respuesta">La respuesta corta: el modelo manda</h2>
  <p>No hay una regla segura para todas las zapatillas. Dos pares con apariencia similar pueden tener espumas, pegamentos o acabados distintos. Buscá primero las instrucciones del fabricante para ese modelo —en la etiqueta, la caja o su sitio oficial— y no reemplaces una prohibición con un consejo genérico de internet.</p>
  <p>Como referencia, Nike no recomienda lavar sus zapatillas en lavarropas: advierte que los materiales delicados pueden dañarse, que el calor de la secadora puede deformarlas y que una carga voluminosa también puede afectar la máquina. Su guía propone cepillado y limpieza manual con una solución suave.</p>
  <p>Si no querés arriesgar ni el par ni el lavarropas, el <Link href="/servicios/lavado-de-zapatillas">lavado de zapatillas en Mar del Plata</Link> de Aquabon trabaja cada material por separado.</p>
  <div className="article-callout"><strong>Regla práctica</strong><p>Sin autorización específica del fabricante, no des por sentado que “tela” significa “lavable a máquina”. Evaluá el par completo y su estado.</p></div>

  <h2 id="adentro">Lo que le pasa a tu zapatilla dentro del lavarropas</h2>
  <p>El lavarropas está pensado para telas que se doblan, no para un objeto rígido con suela. Mientras gira, la zapatilla no acompaña el movimiento: golpea. Ese ruido seco que escuchás en cada vuelta es la punta y el talón chocando contra el tambor.</p>
  <ul>
    <li><strong>El centrifugado tira de las uniones.</strong> La fuerza del giro empuja el agua hacia afuera y, con ella, tensiona el pegamento entre la suela y la capellada. Una unión que ya estaba cansada se abre.</li>
    <li><strong>La horma pierde la forma.</strong> El talón y la puntera tienen refuerzos que, mojados y golpeados, se aplastan o se doblan. Una vez deformados, no vuelven.</li>
    <li><strong>La espuma se llena de agua.</strong> La entresuela absorbe y tarda días en secar. Si queda húmeda por dentro, vuelve el olor y puede aparecer una marca marrón en la tela.</li>
    <li><strong>El tambor también sufre.</strong> Una zapatilla mojada pesa bastante y desbalancea la carga. Los golpes repetidos castigan el tambor, los amortiguadores y la goma de la puerta.</li>
    <li><strong>El calor hace el resto.</strong> Un programa con agua caliente o una pasada por el secarropas ablandan los adhesivos y pueden encoger o arrugar algunas telas.</li>
  </ul>

  <h2 id="revisar">Cinco puntos que conviene revisar antes</h2>
  <ol className="article-steps">
    <li><strong>Instrucciones del modelo.</strong><span>Son la referencia principal. Revisá también si el fabricante distingue capellada, cordones y plantillas.</span></li>
    <li><strong>Materiales combinados.</strong><span>Malla, cuero, gamuza, refuerzos sintéticos y estampas pueden reaccionar de manera diferente al agua y al movimiento.</span></li>
    <li><strong>Uniones y adhesivos.</strong><span>Buscá bordes levantados, suela abierta o piezas flojas. El tambor puede agravar una unión que ya está debilitada.</span></li>
    <li><strong>Espuma y estructura.</strong><span>Una mediasuela muy blanda, deformada o cuarteada no recupera su estado con limpieza y puede dañarse más.</span></li>
    <li><strong>Color y detalles.</strong><span>Probá cualquier producto en una zona poco visible. Apliques, bordados, luces y partes rígidas requieren especial cuidado.</span></li>
  </ol>
  <figure className="article-image"><Image src="/blog/revisar-zapatillas-antes-lavar.webp" alt="Profesional revisando la unión entre suela y capellada de una zapatilla, junto a otro par de malla, cordones, plantilla y cepillo" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>El material exterior es solo una parte: también importan las uniones, la espuma, la plantilla y el estado general.</figcaption></figure>

  <h2 id="evitar">Cuándo conviene evitar el lavarropas</h2>
  <div className="frequency-grid">
    <article><strong>Cuero, gamuza o nobuck</strong><p>El agua, el detergente y la fricción pueden alterar textura, color y acabado. Necesitan cuidados específicos.</p></article>
    <article><strong>Materiales mixtos</strong><p>Una parte puede tolerar humedad y otra no. La compatibilidad se decide por el componente más sensible.</p></article>
    <article><strong>Daños o desgaste</strong><p>Suela despegada, costura abierta, espuma cuarteada o adorno flojo pueden empeorar con la acción mecánica.</p></article>
    <article><strong>Piezas especiales</strong><p>Luces, adornos, estampas delicadas y componentes ortopédicos no deben sumergirse sin una indicación expresa.</p></article>
  </div>

  <h2 id="permitido">Si el fabricante sí autoriza el lavado a máquina</h2>
  <p>Seguí sus instrucciones exactas de preparación, temperatura, programa y producto. No mezcles indicaciones de marcas o modelos distintos. Como precaución, retirá tierra y piedras con un cepillo seco, comprobá que nada esté suelto y protegé el tambor y el par de golpes directos solo si la marca lo indica.</p>
  <p>No uses lavandina ni un quitamanchas fuerte por defecto. Un producto concentrado puede desteñir o afectar un acabado, y agregar más detergente no mejora necesariamente el resultado. Si la suciedad es localizada, suele ser preferible empezar por una limpieza manual suave.</p>
  <div className="article-callout"><strong>No ocultes un problema previo</strong><p>Si hay pegamento expuesto, pérdida de color o una reparación anterior, el lavado puede hacerla más visible. Eso no es suciedad y no se revierte con un ciclo más intenso.</p></div>

  <h2 id="secar">El secado también puede deformarlas</h2>
  <p>Dejalas secar a temperatura ambiente, con ventilación y sin apoyarlas sobre una estufa. Evitá secadora, radiador, secador de pelo y sol intenso salvo que el fabricante indique otra cosa. El calor puede afectar la forma, la espuma y las uniones.</p>
  <p>Retirá el exceso de humedad con un paño sin retorcer y mantené la abertura despejada. No vuelvas a colocar las plantillas ni uses el par hasta que el interior esté completamente seco; la superficie puede parecer lista mientras el acolchado conserva humedad.</p>

  <h2>Cómo las lavamos en Aquabon, sin pasar por el tambor</h2>
  <p>Tus zapatillas y tu lavarropas te lo van a agradecer. En Aquabon primero revisamos material, color, uniones, manchas y desgaste. Después separamos cordones y plantillas, limpiamos por zonas con lo que tolera cada material y las secamos sin calor, hasta que estén secas por dentro. Si un daño previo no se revierte con limpieza, como una suela despegada o una goma amarillenta, te lo decimos antes de aceptar el par.</p>
  <p>Si son blancas, en <Link href="/blog/como-lavar-zapatillas-blancas">cómo lavar zapatillas blancas sin dañarlas</Link> te contamos qué las arruina. Todas las guías del tema están en <Link href="/blog">Guías Aquabon</Link>.</p>

  <LocalCta service="zapatillas" message={whatsapp} />

  <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
  <section className="article-sources"><strong>Fuente técnica consultada</strong><p><a href="https://www.nike.com/a/how-to-clean-shoes" target="_blank" rel="noreferrer">Nike: limpieza manual, materiales y secado de zapatillas</a>. Consultá además las instrucciones específicas del fabricante de tu modelo.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
