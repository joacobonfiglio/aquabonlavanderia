import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo evitar que la ropa destiña al lavarla";
const description="Cómo detectar una prenda con color inestable, separar la carga y actuar si ya hubo transferencia de tinte sin empeorar el problema.";
const path="/blog/como-evitar-que-la-ropa-pierda-color";
const faqs=[
  {question:"¿Cómo saber si una prenda destiñe?",answer:"Revisá primero la etiqueta. Si es lavable y tenés dudas, probá una costura interior con la solución y el método indicados por el producto de lavado: si el paño blanco toma color o la zona cambia, lavá la prenda por separado."},
  {question:"¿La ropa nueva se debe lavar separada?",answer:"Las prendas nuevas de colores intensos pueden liberar exceso de tinte durante los primeros lavados. Si no conocés su estabilidad, lavalas solas o con colores muy similares, siempre según la etiqueta."},
  {question:"¿El agua fría evita que la ropa destiña?",answer:"Puede reducir la migración y la pérdida de color frente a temperaturas mayores, pero no vuelve estable un tinte inestable. La temperatura final debe respetar la etiqueta y el nivel de suciedad."},
  {question:"¿La sal o el vinagre fijan el color?",answer:"No son una solución universal. Fibras, tintes y acabados responden de manera distinta. Evitá recetas caseras como regla y seguí las instrucciones de la prenda y del producto de lavado."},
  {question:"¿Qué hago si una prenda clara tomó otro color?",answer:"No la seques ni la planches. Separala de la prenda que destiñó y volvé a lavarla cuanto antes con un método y un producto aptos para su etiqueta. El daño puede ser permanente y no conviene improvisar blanqueadores."},
  {question:"¿Una toallita atrapacolor reemplaza separar la ropa?",answer:"No. Puede capturar parte del tinte libre, pero no garantiza evitar una transferencia. La medida principal sigue siendo separar colores, identificar prendas nuevas o inestables y respetar la etiqueta."}
];

export const metadata:Metadata={
  title:"Cómo evitar que la ropa destiña | Aquabon",
  description:"Cómo evitar que la ropa destiña: prueba de color, separación de cargas y qué hacer ante una transferencia. Guía de Aquabon en Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-11",images:[{url:"/blog/probar-prenda-que-destine.webp",width:1400,height:788,alt:"Prueba de transferencia de color con un paño blanco en la costura interior de una prenda roja"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-evitar-que-la-ropa-pierda-color" date="2026-10-11" readingTime="7 MIN DE LECTURA" cluster="Cuidado de ropa" image="/blog/probar-prenda-que-destine.webp" service="valet">
    <p className="article-lead"><strong>Para evitar que una prenda tiña a las demás, identificá los colores de riesgo antes de cargar el lavarropas.</strong> Leé la etiqueta, separá blancos, claros, colores intensos y oscuros, probá la estabilidad en una costura interior cuando haya dudas y lavá sola una prenda nueva que transfiera color.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#por-que">Por qué destiñe</a></li><li><a href="#prueba">Cómo hacer una prueba</a></li><li><a href="#separar">Cómo separar la ropa</a></li><li><a href="#lavado">Durante el lavado</a></li><li><a href="#transferencia">Si ya se tiñó</a></li><li><a href="#errores">Errores frecuentes</a></li></ol></nav>

    <h2 id="por-que">Por qué los tejidos liberan tinte durante el lavado</h2>
    <p>Una prenda destiñe cuando parte de su tinte migra al agua o por contacto y puede depositarse sobre otros textiles. Sucede con más frecuencia en colores intensos, algunas prendas nuevas y tintes poco estables, pero no puede predecirse solo mirando el tono. Fibra, proceso de teñido, acabado, temperatura, fricción y productos utilizados también influyen.</p>
    <div className="frequency-grid">
      <article><strong>Prenda nueva</strong><p>Puede liberar excedente de tinte en los primeros lavados. Si no conocés su comportamiento, no la mezcles con claros.</p></article>
      <article><strong>Color intenso</strong><p>Rojos, azules, verdes, violetas y tonos fluorescentes merecen más atención, aunque cualquier color puede ser inestable.</p></article>
      <article><strong>Etiqueta restrictiva</strong><p>“Lavar por separado”, baja temperatura o cuidado profesional son indicaciones concretas, no sugerencias decorativas.</p></article>
      <article><strong>Tratamiento previo</strong><p>Quitamanchas y blanqueadores pueden alterar el color incluso sin una transferencia a otras prendas.</p></article>
    </div>
    <div className="article-callout"><strong>Respuesta directa</strong><p>La prevención más fiable es separar por color e instrucciones de cuidado. Una toallita atrapacolor o el agua fría pueden ayudar, pero no reemplazan esa clasificación ni convierten un tinte inestable en seguro.</p></div>

    <h2 id="prueba">Cómo comprobar si una prenda puede transferir color</h2>
    <p>La American Cleaning Institute recomienda probar la estabilidad del color en una zona poco visible. Hacelo solo si la etiqueta permite lavado con agua y siguiendo las instrucciones del detergente o producto que vayas a utilizar.</p>
    <ol className="article-steps">
      <li><strong>Elegí una costura interior.</strong><span>No pruebes primero sobre la cara visible, un estampado o un adorno.</span></li>
      <li><strong>Prepará la solución indicada.</strong><span>Usá el producto y la dilución que correspondan; no improvises mezclas.</span></li>
      <li><strong>Aplicá con un paño blanco.</strong><span>Presioná suavemente sobre una pequeña zona. No frotes de manera agresiva.</span></li>
      <li><strong>Observá paño y prenda.</strong><span>Si el blanco toma color o la costura cambia de tono, considerá la prenda inestable.</span></li>
      <li><strong>Lavá por separado.</strong><span>Si hay transferencia, respetá la etiqueta y no la mezcles con otras prendas hasta conocer su comportamiento.</span></li>
    </ol>

    <figure className="article-image"><Image src="/blog/probar-prenda-que-destine.webp" alt="Manos comprobando con un paño blanco la transferencia de color en la costura interior de una prenda roja, junto a ropa clara y oscura separada" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Una prueba en una costura interior ayuda a detectar color inestable antes de comprometer una carga completa.</figcaption></figure>

    <h2 id="separar">Cómo separar la ropa para reducir transferencias</h2>
    <p>No alcanza con dividir entre “blanco” y “color”. Agrupá prendas que compartan color, temperatura, ciclo y tipo de tejido. Si una pieza tiene varios colores o adornos, revisá también la estabilidad de sus detalles.</p>
    <div className="frequency-grid">
      <article><strong>Blancos</strong><p>Separalos de cualquier prenda de color, incluso tonos pastel que todavía no conocés.</p></article>
      <article><strong>Claros y pasteles</strong><p>Podés agruparlos cuando sus etiquetas y tejidos admitan el mismo proceso.</p></article>
      <article><strong>Intensos y oscuros</strong><p>Lavá colores similares juntos y mantené aparte prendas nuevas con riesgo de liberar tinte.</p></article>
      <article><strong>Delicados o mixtos</strong><p>Separalos también por fricción y estructura. Un color compatible no evita el daño entre un jean pesado y una tela fina.</p></article>
    </div>
    <p>Si la duda es específica del denim, consultá <Link href="/blog/como-lavar-jeans-sin-perder-color">cómo lavar jeans sin que pierdan color</Link>. Para seda, lana, viscosa, encaje o apliques, ampliá con la guía de <Link href="/blog/como-lavar-ropa-delicada">ropa delicada</Link>.</p>

    <h2 id="lavado">Qué cuidar durante el lavado</h2>
    <ul>
      <li><strong>Temperatura:</strong> usá la indicada en la etiqueta. El agua más fría puede reducir migración, pero también debe ser compatible con la suciedad y el detergente.</li>
      <li><strong>Carga:</strong> no compactes el tambor. La ropa necesita espacio para moverse y enjuagarse.</li>
      <li><strong>Ciclo:</strong> elegí la acción mecánica requerida por la prenda; más tiempo y fricción no siempre significan mejor limpieza.</li>
      <li><strong>Detergente:</strong> respetá la dosis del envase. Demasiado producto puede dejar residuos y no fija el color.</li>
      <li><strong>Quitamanchas:</strong> probalo antes en un punto oculto. Que una prenda sea lavable no significa que su color soporte cualquier tratamiento.</li>
      <li><strong>Blanqueo:</strong> seguí el triángulo de la etiqueta y el envase. Nunca viertas blanqueador sin diluir directamente sobre la ropa.</li>
    </ul>
    <p>La guía de <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de lavado</Link> explica qué significan tina, temperatura, líneas, triángulo, cuadrado y círculo.</p>

    <h2 id="transferencia">Qué hacer si la ropa ya tomó otro color</h2>
    <ol className="article-steps">
      <li><strong>No seques ni planches.</strong><span>El calor puede volver más difícil corregir la transferencia.</span></li>
      <li><strong>Identificá y separá la prenda que destiñó.</strong><span>No repitas la carga con la fuente del color.</span></li>
      <li><strong>Revisá cada etiqueta.</strong><span>La prenda afectada puede tener límites distintos de la que transfirió el tinte.</span></li>
      <li><strong>Volvé a lavar cuanto antes.</strong><span>Usá detergente y, solo si es apto, un producto para transferencia de color siguiendo exactamente su envase.</span></li>
      <li><strong>Comprobá antes de secar.</strong><span>Si el color persiste, no aumentes temperatura ni combines blanqueadores. El cambio puede ser permanente.</span></li>
    </ol>
    <p>En prendas blancas puede existir un método distinto al de una prenda coloreada. No apliques lavandina por defecto: composición, acabados, costuras y etiqueta determinan qué producto es seguro.</p>

    <h2 id="errores">Errores frecuentes</h2>
    <ul>
      <li><strong>Confiar solo en una toallita atrapacolor:</strong> no garantiza proteger una carga frente a un tinte inestable.</li>
      <li><strong>Lavar ropa nueva intensa con claros:</strong> los primeros ciclos pueden liberar más tinte.</li>
      <li><strong>Usar sal o vinagre como solución universal:</strong> no existe una receta doméstica válida para todos los tintes y fibras.</li>
      <li><strong>Frotar la prueba:</strong> puede generar pérdida por abrasión y dar una lectura engañosa.</li>
      <li><strong>Secar una transferencia:</strong> conviene revisar y actuar antes de aplicar calor.</li>
      <li><strong>Ignorar forros, estampas y adornos:</strong> cada parte puede tener una estabilidad diferente.</li>
    </ul>

    <h2>Cuándo conviene pedir ayuda</h2>
    <p>Consultá si la etiqueta prohíbe el lavado, la prenda combina colores y materiales, una costura interior transfiere mucho tinte, ya hubo una transferencia importante o el textil requiere cuidado profesional. En Aquabon recibimos prendas en Gascón 2189, Centro de Mar del Plata, y evaluamos el <Link href="/servicios/tintoreria">servicio de tintorería</Link> cuando corresponde. Para ropa cotidiana lavable, podés consultar el <Link href="/servicios/valet-de-ropa">valet de ropa</Link>; informanos qué prenda te preocupa antes de incluirla en la bolsa.</p>

    <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/laundry-basics" target="_blank" rel="noreferrer">American Cleaning Institute: fundamentos del lavado</a>, <a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/laundering-problems-solutions" target="_blank" rel="noreferrer">ACI: problemas de lavado y transferencia de color</a> y <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
