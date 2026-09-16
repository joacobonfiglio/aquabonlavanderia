import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Símbolos de lavado de un acolchado: cómo leer la etiqueta";
const description="La tina indica el lavado, el triángulo el blanqueo, el cuadrado el secado, la plancha el calor y el círculo el cuidado profesional. Te explicamos qué mirar antes de lavar un acolchado.";

export const metadata:Metadata={title:"Símbolos de lavado de un acolchado: guía práctica | Aquabon",description:"Aprendé a interpretar los símbolos de lavado, secado, blanqueo, planchado y limpieza profesional de la etiqueta de un acolchado.",alternates:{canonical:"/blog/simbolos-de-lavado-de-un-acolchado"},openGraph:{title,description,type:"article",locale:"es_AR",url:"/blog/simbolos-de-lavado-de-un-acolchado",publishedTime:"2026-09-16",images:[{url:"/blog/leer-etiqueta-acolchado.webp",width:1400,height:933,alt:"Persona revisando los símbolos de cuidado de la etiqueta de un acolchado"}]}};

type SymbolKind="wash"|"bleach"|"dry"|"iron"|"professional";
function SymbolMark({kind}:{kind:SymbolKind}){const common={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};return <svg viewBox="0 0 48 48" aria-hidden="true">{kind==="wash"&&<><path {...common} d="M7 17h34l-3 23H10L7 17Z"/><path {...common} d="M8 23c5-4 9 4 14 0s9 4 17 0"/><text x="24" y="35" textAnchor="middle" fontSize="10" fill="currentColor">30°</text></>}{kind==="bleach"&&<><path {...common} d="M24 7 42 40H6L24 7Z"/><path {...common} d="m11 11 27 27M37 11 11 38"/></>}{kind==="dry"&&<><rect {...common} x="7" y="7" width="34" height="34"/><circle {...common} cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="2.4" fill="currentColor"/></>}{kind==="iron"&&<><path {...common} d="M7 34h35l-4-15H18c-5 0-8 5-11 15Z"/><path {...common} d="M18 19v-6h13c4 0 6 2 7 6"/><circle cx="24" cy="27" r="2.2" fill="currentColor"/></>}{kind==="professional"&&<><circle {...common} cx="24" cy="24" r="17"/><text x="24" y="29" textAnchor="middle" fontSize="15" fill="currentColor">P</text></>}</svg>}

const symbols=[
  {kind:"wash" as const,title:"Tina: lavado",copy:"El número marca la temperatura máxima. Una línea debajo pide un proceso suave; dos líneas, uno muy suave. Una mano limita el tratamiento al lavado a mano y una cruz prohíbe el lavado doméstico con agua."},
  {kind:"bleach" as const,title:"Triángulo: blanqueo",copy:"Vacío permite blanqueador; con líneas limita el producto y tachado lo prohíbe. No improvises con lavandina si la etiqueta no la admite."},
  {kind:"dry" as const,title:"Cuadrado: secado",copy:"Un círculo dentro del cuadrado se refiere a secadora. Los puntos indican la intensidad térmica y una cruz significa que no debe usarse secadora."},
  {kind:"iron" as const,title:"Plancha: calor",copy:"Los puntos fijan el máximo de temperatura de planchado. En un acolchado suele ser poco relevante, pero conviene respetarlo si querés tratar la funda."},
  {kind:"professional" as const,title:"Círculo: cuidado profesional",copy:"Las letras y líneas orientan al profesional sobre el proceso permitido. Un círculo tachado prohíbe ese tratamiento; no significa que la prenda pueda lavarse de cualquier otra manera."}
];

export default function Page(){return <ArticleLayout title={title} description={description} slug="simbolos-de-lavado-de-un-acolchado" date="2026-09-16" readingTime="7 MIN DE LECTURA" cluster="Acolchados" image="/blog/leer-etiqueta-acolchado.webp">
  <p className="article-lead"><strong>Respuesta corta:</strong> leé la etiqueta de izquierda a derecha y no interpretes un símbolo de forma aislada. La tina habla del lavado, el triángulo del blanqueo, el cuadrado del secado, la plancha del planchado y el círculo del cuidado profesional. Los números y puntos fijan límites máximos; las líneas inferiores piden un tratamiento más suave y una cruz prohíbe ese proceso.</p>

  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#orden">En qué orden leer los símbolos</a></li><li><a href="#significado">Qué significa cada familia</a></li><li><a href="#acolchado">Cómo aplicar la etiqueta al acolchado</a></li><li><a href="#ejemplos">Ejemplos frecuentes</a></li><li><a href="#dudas">Qué hacer si la etiqueta no se entiende</a></li></ol></nav>

  <h2 id="orden">En qué orden aparecen los símbolos de lavado</h2>
  <p>Las etiquetas suelen organizar las instrucciones en cinco familias: lavado, blanqueo, secado, planchado y cuidado textil profesional. Ese orden ayuda a leer el proceso completo. Para un acolchado, las decisiones más importantes suelen estar en el lavado y el secado, pero los demás símbolos pueden descartar productos o tratamientos que dañarían la funda o el relleno.</p>
  <p>Los símbolos indican el tratamiento máximo permitido. Podés elegir uno más suave, pero no deberías superar la temperatura, la acción mecánica o el calor que marca el fabricante. La composición del relleno no reemplaza esta información: dos acolchados que parecen iguales pueden tener instrucciones distintas.</p>

  <figure className="article-image">
    <Image src="/blog/leer-etiqueta-acolchado.webp" alt="Manos sosteniendo la etiqueta con símbolos de cuidado de un acolchado azul" width={1400} height={933} sizes="(max-width: 900px) 100vw, 760px"/>
    <figcaption>La etiqueta del fabricante es el punto de partida: revisala antes de elegir programa, temperatura o secado.</figcaption>
  </figure>

  <h2 id="significado">Qué significa cada símbolo de la etiqueta</h2>
  <section className="care-symbol-grid" aria-label="Resumen visual de los símbolos de cuidado">
    {symbols.map(symbol=><article key={symbol.kind}><div><SymbolMark kind={symbol.kind}/></div><h3>{symbol.title}</h3><p>{symbol.copy}</p></article>)}
  </section>

  <div className="article-callout"><strong>Regla visual rápida</strong><p>Los puntos regulan temperatura; las líneas debajo del símbolo reducen la intensidad del proceso; una cruz significa “no realizar este tratamiento”. Si aparecen instrucciones escritas junto a los símbolos, también forman parte de la indicación del fabricante.</p></div>

  <h2 id="acolchado">Cómo aplicar la etiqueta a un acolchado</h2>
  <h3>1. Confirmá si admite lavado con agua</h3>
  <p>Buscá primero la tina. Si está tachada, no lo pongas en el lavarropas ni lo laves a mano. Si contiene un número, esa es la temperatura máxima, no una recomendación para usar siempre ese valor. Las líneas inferiores indican que el movimiento y el centrifugado deben ser más suaves.</p>
  <h3>2. Comprobá si tu lavarropas tiene capacidad real</h3>
  <p>Que la etiqueta autorice el lavado a máquina no significa que cualquier tambor sirva. El acolchado debe entrar holgado y poder moverse. Si queda comprimido, el agua y el detergente no se distribuyen bien y el centrifugado puede desequilibrarse. En ese caso conviene consultar un <Link href="/servicios/lavado-de-acolchados">servicio de lavado de acolchados</Link>.</p>
  <h3>3. Leé el secado antes de empezar</h3>
  <p>No esperes a terminar el lavado para descubrir que el acolchado no admite secadora o que requiere secado horizontal. El cuadrado define esta etapa. Un círculo dentro permite secadora bajo las condiciones señaladas; los puntos limitan el calor. Las líneas dentro del cuadrado describen formas de secado natural.</p>
  <h3>4. Respetá el símbolo de blanqueo</h3>
  <p>Una mancha no justifica usar lavandina sin revisar el triángulo. Algunos tejidos y rellenos pueden perder color, debilitarse o reaccionar mal. Para manchas antiguas o de origen desconocido, una evaluación previa suele ser más segura que probar productos fuertes.</p>

  <h2 id="ejemplos">Tres combinaciones frecuentes y cómo interpretarlas</h2>
  <h3>Tina 30 °C + línea inferior + secadora con un punto</h3>
  <p>Admite lavado con agua hasta 30 °C, con acción mecánica suave, y secado en máquina a baja temperatura. Todavía tenés que confirmar que el acolchado entra holgado y distribuir bien el relleno durante el secado.</p>
  <h3>Tina con una mano + secadora tachada</h3>
  <p>El fabricante limita el lavado al proceso manual y prohíbe la secadora. En una pieza voluminosa, cumplir ambas condiciones en casa puede ser difícil: mojada pesa mucho y necesita un secado amplio y uniforme.</p>
  <h3>Tina tachada + círculo con letra</h3>
  <p>No admite lavado doméstico con agua y debe evaluarse el tratamiento profesional indicado por el círculo. No sustituyas esa prohibición por un programa “delicado”. Consultá una <Link href="/servicios/tintoreria">tintorería</Link> o un profesional que pueda interpretar toda la etiqueta.</p>

  <div className="article-callout warning"><strong>No adivines una temperatura</strong><p>Si la etiqueta está cortada, borrada o no corresponde claramente al acolchado, no hay una configuración universal segura. El tejido exterior, las costuras y el tipo de relleno cambian el tratamiento posible.</p></div>

  <h2 id="dudas">Qué hacer si no entendés la etiqueta</h2>
  <p>Sacale una foto nítida y revisá también la composición del tejido y del relleno. En Aquabon podemos darte una primera orientación por WhatsApp y, al recibir el acolchado, evaluamos tamaño, estado y etiqueta antes de confirmar el proceso. Estamos en Gascón 2189, en el centro de Mar del Plata.</p>
  <p>Si tu acolchado es de plumas, también podés consultar nuestra guía sobre <Link href="/blog/como-lavar-un-acolchado-de-plumas">cómo lavar un acolchado de plumas sin dañarlo</Link>.</p>

  <h2>Preguntas frecuentes</h2>
  <h3>¿El número dentro de la tina es la temperatura recomendada?</h3><p>Es la temperatura máxima permitida. Podés usar una menor si el programa, el detergente y el nivel de suciedad lo permiten, pero no deberías superarla.</p>
  <h3>¿Qué significan las rayas debajo de un símbolo?</h3><p>Una línea pide un proceso suave y dos líneas uno muy suave. Afectan la acción mecánica, el tiempo o las condiciones del tratamiento, según la familia del símbolo.</p>
  <h3>¿Un círculo significa siempre limpieza en seco?</h3><p>El círculo identifica el cuidado profesional. La letra y las líneas especifican el proceso admitido; también existe el lavado profesional con agua. Por eso debe interpretarlo el profesional junto con el resto de la etiqueta.</p>
  <h3>¿Puedo lavar un acolchado si la etiqueta no está?</h3><p>No hay una respuesta universal. Sin instrucciones se desconoce el límite seguro del tejido y del relleno. Conviene pedir una evaluación y evitar pruebas con calor o productos agresivos.</p>

  <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p>Guía internacional de símbolos de cuidado de <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX</a> y norma <a href="https://www.iso.org/standard/74401.html" target="_blank" rel="noreferrer">ISO 3758</a>.</p></section>
</ArticleLayout>}
