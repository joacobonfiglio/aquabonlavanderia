import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Símbolos de lavado de ropa: cómo leer la etiqueta";
const description="Una guía visual para entender lavado, blanqueo, secado, planchado y cuidado profesional antes de tratar una prenda.";
const path="/blog/simbolos-de-lavado-de-la-ropa";

type SymbolKind="wash"|"bleach"|"dry"|"iron"|"professional";
function SymbolMark({kind}:{kind:SymbolKind}){const common={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};return <svg viewBox="0 0 48 48" aria-hidden="true">{kind==="wash"&&<><path {...common} d="M7 17h34l-3 23H10L7 17Z"/><path {...common} d="M8 23c5-4 9 4 14 0s9 4 17 0"/><text x="24" y="35" textAnchor="middle" fontSize="10" fill="currentColor">30°</text></>}{kind==="bleach"&&<path {...common} d="M24 7 42 40H6L24 7Z"/>}{kind==="dry"&&<><rect {...common} x="7" y="7" width="34" height="34"/><circle {...common} cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="2.4" fill="currentColor"/></>}{kind==="iron"&&<><path {...common} d="M7 34h35l-4-15H18c-5 0-8 5-11 15Z"/><path {...common} d="M18 19v-6h13c4 0 6 2 7 6"/><circle cx="24" cy="27" r="2.2" fill="currentColor"/></>}{kind==="professional"&&<><circle {...common} cx="24" cy="24" r="17"/><text x="24" y="29" textAnchor="middle" fontSize="15" fill="currentColor">P</text></>}</svg>}

const symbols=[
  {kind:"wash" as const,title:"Tina: lavado con agua",copy:"El número indica la temperatura máxima. Una mano significa lavado a mano; una o dos líneas debajo piden un proceso suave o muy suave; la tina tachada prohíbe lavar con agua."},
  {kind:"bleach" as const,title:"Triángulo: blanqueo",copy:"Un triángulo vacío permite blanqueadores. Las líneas diagonales limitan el producto a oxígeno; el triángulo tachado prohíbe el blanqueo."},
  {kind:"dry" as const,title:"Cuadrado: secado",copy:"El círculo dentro del cuadrado se refiere a secadora y sus puntos regulan el calor. Las líneas dentro del cuadrado describen secado natural, horizontal, vertical o a la sombra."},
  {kind:"iron" as const,title:"Plancha: planchado",copy:"Los puntos indican el límite de temperatura. Una plancha tachada prohíbe planchar; el símbolo también puede advertir que no se use vapor."},
  {kind:"professional" as const,title:"Círculo: cuidado profesional",copy:"Las letras P o F orientan al profesional sobre los solventes permitidos y la W identifica lavado profesional con agua. Las líneas inferiores reducen la intensidad del proceso."}
];

const faqs=[
  {question:"¿En qué orden se leen los símbolos de lavado?",answer:"Habitualmente aparecen en este orden: lavado, blanqueo, secado, planchado y cuidado profesional. Conviene leer la serie completa antes de elegir cualquier tratamiento."},
  {question:"¿Qué significan los puntos en la etiqueta?",answer:"Los puntos indican niveles de temperatura, especialmente en secadora y plancha: cuantos más puntos, mayor calor permitido. No equivalen a minutos de tratamiento."},
  {question:"¿Qué significan una o dos líneas debajo del símbolo?",answer:"Una línea pide un proceso suave y dos líneas uno muy suave. El equipo o el profesional debe reducir la acción mecánica y adaptar el ciclo."},
  {question:"¿El número de la tina es la temperatura obligatoria?",answer:"No. Es la temperatura máxima admitida por la prenda. Puede elegirse una menor si el nivel de suciedad, el detergente y el programa lo permiten."},
  {question:"¿Qué hago si la etiqueta está cortada o borrada?",answer:"No existe una configuración universal segura. Revisá composición y construcción, evitá calor o productos fuertes y consultá antes de tratar una prenda delicada o valiosa."}
];

export const metadata:Metadata={
  title:"Símbolos de lavado de ropa: guía visual | Aquabon",
  description:"Símbolos de lavado de ropa: qué significan tina, triángulo, cuadrado, plancha y círculo. Guía de Aquabon, Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-05",images:[{url:"/blog/leer-simbolos-etiqueta-ropa.webp",width:1400,height:788,alt:"Persona revisando la etiqueta de cuidado de una prenda azul antes del lavado"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="simbolos-de-lavado-de-la-ropa" date="2026-10-05" readingTime="8 MIN DE LECTURA" cluster="Cuidado de ropa" image="/blog/leer-simbolos-etiqueta-ropa.webp" service="valet">
    <p className="article-lead"><strong>Para leer una etiqueta, identificá primero la forma base.</strong> La tina habla del lavado, el triángulo del blanqueo, el cuadrado del secado, la plancha del planchado y el círculo del cuidado profesional. Después mirá números, puntos, líneas y tachados.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#familias">Las cinco familias</a></li><li><a href="#modificadores">Puntos, líneas y cruces</a></li><li><a href="#orden">Cómo leer una etiqueta completa</a></li><li><a href="#ejemplos">Ejemplos frecuentes</a></li><li><a href="#dudas">Etiqueta ausente o dudosa</a></li></ol></nav>

    <h2 id="familias">Las cinco familias de símbolos de cuidado</h2>
    <p>GINETEX organiza el cuidado textil en cinco grupos y la secuencia coincide con la norma ISO 3758. El símbolo describe el tratamiento máximo que la prenda puede soportar sin daño irreversible; no obliga a usar siempre ese máximo.</p>
    <section className="care-symbol-grid" aria-label="Resumen visual de los símbolos de cuidado">
      {symbols.map(symbol=><article key={symbol.kind}><div><SymbolMark kind={symbol.kind}/></div><h3>{symbol.title}</h3><p>{symbol.copy}</p></article>)}
    </section>

    <figure className="article-image"><Image src="/blog/leer-simbolos-etiqueta-ropa.webp" alt="Manos revisando la etiqueta de cuidado cosida a una prenda azul antes de lavarla" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Leé toda la secuencia antes de lavar: el secado y el planchado pueden ser tan importantes como la temperatura del agua.</figcaption></figure>

    <h2 id="modificadores">Qué significan puntos, líneas y cruces</h2>
    <div className="frequency-grid">
      <article><strong>Números</strong><p>Dentro de la tina marcan la temperatura máxima en grados Celsius, no un tiempo ni una recomendación obligatoria.</p></article>
      <article><strong>Puntos</strong><p>Regulan el calor en secadora y plancha. Un punto es temperatura baja; más puntos permiten una temperatura mayor.</p></article>
      <article><strong>Una línea debajo</strong><p>Pide un proceso suave, con menor acción mecánica y un ciclo adaptado al textil.</p></article>
      <article><strong>Dos líneas debajo</strong><p>Exigen un proceso muy suave. No alcanza con bajar solamente la temperatura.</p></article>
      <article><strong>Una cruz</strong><p>Prohíbe ese tratamiento concreto. No autoriza a reemplazarlo automáticamente por otro.</p></article>
      <article><strong>Una mano en la tina</strong><p>Limita el cuidado al lavado manual bajo las condiciones indicadas por el fabricante.</p></article>
    </div>
    <div className="article-callout"><strong>Regla rápida</strong><p>La forma identifica el proceso; los elementos dentro o debajo fijan sus límites. Si un símbolo está tachado, no realices ese tratamiento aunque la prenda parezca resistente.</p></div>

    <h2 id="orden">Cómo leer una etiqueta completa sin equivocarte</h2>
    <ol className="article-steps">
      <li><strong>Confirmá lavado y temperatura.</strong><span>Buscá la tina y verificá si admite máquina, mano o ningún lavado con agua.</span></li>
      <li><strong>Revisá el triángulo antes de tratar manchas.</strong><span>Una prenda blanca no necesariamente admite lavandina u otro blanqueador.</span></li>
      <li><strong>Leé el secado antes de mojar.</strong><span>Una prenda que no admite secadora puede necesitar espacio, tiempo y una posición de secado específica.</span></li>
      <li><strong>Comprobá planchado y vapor.</strong><span>El calor puede deformar fibras, estampas, adhesivos, entretelas y acabados.</span></li>
      <li><strong>Interpretá el círculo como instrucción profesional.</strong><span>Las letras no son programas domésticos: orientan a la tintorería sobre el proceso autorizado.</span></li>
      <li><strong>Leé las instrucciones escritas.</strong><span>“Lavar del revés”, “retirar accesorios” o similares complementan los pictogramas.</span></li>
    </ol>

    <h2 id="ejemplos">Tres combinaciones frecuentes</h2>
    <h3>Tina 30 °C + una línea + secadora con un punto</h3>
    <p>Admite lavado con agua hasta 30 °C en ciclo suave y secadora a baja temperatura. La línea no modifica solo el centrifugado: pide menor acción mecánica durante el proceso.</p>
    <h3>Tina con una mano + triángulo tachado + secadora tachada</h3>
    <p>La prenda debe lavarse a mano, sin blanqueador y sin secadora. Antes de empezar, asegurate de poder secarla en la forma que indique el cuadrado.</p>
    <h3>Tina tachada + círculo con P</h3>
    <p>No admite lavado doméstico con agua y requiere el cuidado profesional indicado. No reemplaces esa prohibición por un programa “delicado”. En una prenda estructurada, consultá un servicio de <Link href="/servicios/tintoreria">tintorería</Link>.</p>

    <h2 id="dudas">Qué hacer si la etiqueta falta o no se entiende</h2>
    <p>Sin etiqueta no hay una temperatura universal segura. La composición ayuda, pero no revela siempre acabados, tintes, adhesivos o entretelas. Evitá probar calor, lavandina o mezclas de productos en una prenda delicada, estructurada o valiosa.</p>
    <p>En Aquabon podemos revisar la prenda antes de confirmar el proceso. Estamos en Gascón 2189, Centro de Mar del Plata. Para ropa cotidiana también podés consultar el <Link href="/servicios/valet-de-ropa">servicio de valet</Link>; si necesitás interpretar una pieza voluminosa, tenés la guía específica de <Link href="/blog/simbolos-de-lavado-de-un-acolchado">símbolos de lavado de acolchados</Link>. También explicamos <Link href="/blog/que-prendas-conviene-llevar-a-la-tintoreria">qué prendas conviene llevar a tintorería</Link>.</p>

    <h2>Preguntas frecuentes</h2>
    {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.ginetex.es/etiquetado_productos_textiles/simbolos_de_cuidado/" target="_blank" rel="noreferrer">GINETEX España: símbolos de cuidado</a>, <a href="https://www.ginetex.es/sistema_etiquetado_global/" target="_blank" rel="noreferrer">GINETEX: sistema de etiquetado global</a> y <a href="https://www.iso.org/standard/74401.html" target="_blank" rel="noreferrer">ISO 3758</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
