import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="¿Qué es la limpieza en seco y cómo funciona?";
const description="La limpieza en seco no se hace sin líquidos: utiliza un solvente distinto del agua en equipos profesionales. Conocé sus etapas, qué indica la etiqueta y cuándo puede convenir.";
const path="/blog/que-es-la-limpieza-en-seco";
const faqs=[
  {question:"¿La limpieza en seco moja la ropa?",answer:"Sí. La prenda entra en contacto con un solvente líquido distinto del agua; después el equipo lo extrae y realiza el secado controlado. “En seco” se refiere a que el agua no es el medio principal de limpieza."},
  {question:"¿Limpieza en seco y tintorería son lo mismo?",answer:"No exactamente. Tintorería es el servicio profesional que evalúa y trata prendas especiales. Según la etiqueta y la prenda, puede utilizar limpieza en seco, limpieza húmeda profesional u otro proceso compatible."},
  {question:"¿Todas las prendas delicadas se limpian en seco?",answer:"No. Algunas admiten lavado suave, otras cuidado húmedo profesional y otras prohíben la limpieza en seco. La decisión se toma con la etiqueta, los materiales, la construcción y el estado de la prenda."},
  {question:"¿La limpieza en seco elimina cualquier mancha?",answer:"No. El resultado depende del origen y antigüedad de la mancha, el tejido, el color y los productos aplicados antes. Informar qué ocurrió ayuda a elegir el tratamiento."},
  {question:"¿Puedo hacer limpieza en seco en casa?",answer:"No con productos o solventes domésticos. Los símbolos de cuidado profesional están dirigidos a especialistas con equipos, procesos y terminaciones que no reproduce un lavarropas doméstico."}
];

export const metadata:Metadata={title:"Qué es la limpieza en seco y cómo funciona | Aquabon",description:"Qué significa limpiar en seco, qué líquido se usa, cuáles son las etapas y cuándo conviene para sacos, tapados y prendas especiales en Mar del Plata.",alternates:{canonical:path},openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-09-24",images:[{url:"/blog/inspeccion-limpieza-en-seco.webp",width:1400,height:788,alt:"Inspección profesional de un saco antes de su tratamiento en una máquina especializada"}]}};

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="que-es-la-limpieza-en-seco" date="2026-09-24" readingTime="6 MIN DE LECTURA" cluster="Tintorería" image="/blog/inspeccion-limpieza-en-seco.webp" service="tintoreria">
  <p className="article-lead"><strong>La limpieza en seco sí utiliza líquido.</strong> La diferencia es que la prenda se trata con un solvente profesional distinto del agua dentro de una máquina especializada. El objetivo es limpiar ciertos tejidos y prendas estructuradas respetando los límites de su etiqueta; no es el mejor proceso para todo ni garantiza eliminar cualquier mancha.</p>
  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#significa">Qué significa “en seco”</a></li><li><a href="#proceso">Cómo es el proceso</a></li><li><a href="#etiqueta">Qué dice la etiqueta</a></li><li><a href="#conviene">Cuándo puede convenir</a></li><li><a href="#entrega">Cómo entregar una prenda</a></li></ol></nav>

  <h2 id="significa">“En seco” significa sin agua como medio principal</h2>
  <p>El nombre puede confundir: la ropa no se limpia solo con aire ni permanece seca durante todo el ciclo. Se utiliza un solvente líquido no acuoso, elegido y controlado por el profesional según el equipo, el material y las indicaciones de cuidado. La prenda se procesa, el líquido se extrae y luego se seca dentro de un sistema especializado.</p>
  <p>Esto tampoco significa que todo tratamiento de tintorería sea en seco. La <strong>limpieza húmeda profesional</strong> utiliza agua con equipos, productos y control mecánico profesionales. GINETEX incluye ambos procesos dentro del cuidado profesional, y la etiqueta puede permitir uno, limitarlo o prohibirlo.</p>
  <div className="article-callout"><strong>La idea clave</strong><p>Tintorería es el servicio; limpieza en seco es uno de los procesos posibles. El método se decide para la prenda completa, no solo por el nombre de la fibra.</p></div>

  <h2 id="proceso">Cómo funciona, paso a paso</h2>
  <ol className="article-steps">
    <li><strong>Recepción e inspección.</strong><span>Se revisan etiqueta, tejido, forro, botones, apliques, costuras, manchas y daños previos. También se registra la información que aporta el cliente.</span></li>
    <li><strong>Clasificación y preparación.</strong><span>Las prendas se separan por compatibilidad; se protegen o retiran accesorios cuando corresponde y se evalúan las manchas antes del ciclo.</span></li>
    <li><strong>Limpieza en equipo profesional.</strong><span>La máquina hace circular un solvente compatible con un movimiento controlado. El proceso concreto depende del símbolo, el material y el grado de suciedad.</span></li>
    <li><strong>Extracción y secado.</strong><span>El equipo retira el solvente y completa un secado controlado. No equivale al ciclo de una secadora doméstica.</span></li>
    <li><strong>Terminación y control.</strong><span>Se revisa el resultado, se realiza la terminación apropiada y se comprueba el estado de la prenda antes de devolverla.</span></li>
  </ol>
  <figure className="article-image"><Image src="/blog/inspeccion-limpieza-en-seco.webp" alt="Profesional inspeccionando etiqueta, forro, botones y una mancha de un saco junto a una máquina cerrada de cuidado textil" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>La inspección previa define si la prenda y todos sus componentes son compatibles con el proceso indicado.</figcaption></figure>

  <h2 id="etiqueta">Cómo reconocer la indicación en la etiqueta</h2>
  <p>El círculo corresponde al cuidado profesional. Las letras que aparecen dentro orientan al profesional sobre los solventes posibles; una barra inferior señala restricciones de acción mecánica, humedad o temperatura. El círculo tachado prohíbe la limpieza en seco.</p>
  <p>No intentes traducir una letra en un producto para usar en casa. Según GINETEX, esos símbolos están destinados al profesional, que además debe considerar el material y el nivel de suciedad. Para entender el resto de grupos, podés consultar nuestra <Link href="/blog/simbolos-de-lavado-de-un-acolchado">guía de símbolos de cuidado</Link>.</p>

  <h2 id="conviene">¿Para qué prendas puede convenir?</h2>
  <div className="frequency-grid">
    <article><strong>Sacos y trajes</strong><p>La estructura, entretelas, hombreras y forros pueden necesitar un proceso profesional. La etiqueta confirma los límites.</p></article>
    <article><strong>Tapados y abrigos</strong><p>El peso, el paño, los forros y los detalles combinados requieren una evaluación completa antes de elegir el método.</p></article>
    <article><strong>Vestidos y prendas con adornos</strong><p>Plisados, bordados, aplicaciones y acabados pueden reaccionar distinto al tejido principal.</p></article>
    <article><strong>Manchas grasas</strong><p>Algunos solventes actúan bien sobre suciedad oleosa, pero ninguna mancha tiene resultado garantizado y puede requerir evaluación localizada.</p></article>
  </div>
  <p>La lista no sustituye la etiqueta. Algunas prendas de estos grupos admiten agua y otras no toleran limpieza en seco. Si querés decidir por tipo de prenda, leé <Link href="/blog/que-prendas-conviene-llevar-a-la-tintoreria">qué prendas conviene llevar a tintorería</Link>.</p>

  <h2>Qué no garantiza la limpieza en seco</h2>
  <p>No repara desgaste, decoloración, fibras rotas ni daños previos. Tampoco elimina automáticamente olor, manchas antiguas o marcas tratadas con productos caseros. Algunos botones, adhesivos, estampados y adornos pueden imponer límites incluso cuando el tejido exterior parece apto.</p>
  <p>Por eso una tintorería responsable revisa antes de prometer un resultado. En ocasiones el profesional puede recomendar otro proceso o rechazar la prenda si el riesgo es alto.</p>

  <h2 id="entrega">Cómo preparar la prenda para llevarla</h2>
  <ul><li>No cortes la etiqueta de cuidado.</li><li>Vaciá los bolsillos y avisá si falta un botón o hay una costura abierta.</li><li>Señalá cada mancha e informá qué la produjo y cuándo ocurrió.</li><li>Contá si aplicaste agua, calor, alcohol, quitamanchas u otro producto.</li><li>Si pertenece a un conjunto, como saco y pantalón, llevalo o informalo para evaluar ambas piezas.</li></ul>
  <p>En Aquabon recibimos prendas en Gascón 2189, en el centro de Mar del Plata. Revisamos cada caso antes de confirmar el <Link href="/servicios/tintoreria">servicio de tintorería</Link>, el precio y el plazo. Cuando se requiere limpieza especializada, coordinamos el tratamiento fuera del local y hacemos el seguimiento hasta la entrega.</p>

  <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
  <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: cuidado profesional y símbolos</a>, <a href="https://www.cinet-online.com/professional-textile-care/" target="_blank" rel="noreferrer">CINET: cuidado textil profesional</a> y <a href="https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule" target="_blank" rel="noreferrer">FTC: instrucciones para la prenda completa</a>.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
