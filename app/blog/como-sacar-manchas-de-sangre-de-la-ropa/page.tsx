import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo sacar manchas de sangre de la ropa";
const description="Agua fría, pretratamiento y revisión antes de secar: cómo actuar ante una mancha de sangre fresca o seca sin dañar la prenda.";
const path="/blog/como-sacar-manchas-de-sangre-de-la-ropa";
const faqs=[
  {question:"¿Qué hago con una mancha de sangre recién hecha?",answer:"En una prenda lavable, enjuagá cuanto antes con agua fría desde el reverso, presioná sin frotar y aplicá un pretratamiento compatible con la etiqueta. Lavá y revisá antes de secar."},
  {question:"¿Se usa agua fría o caliente para sacar sangre?",answer:"Agua fría. El calor puede dificultar la eliminación de una mancha de origen proteico. La temperatura final de lavado siempre debe respetar la etiqueta de la prenda."},
  {question:"¿Cómo se trata una mancha de sangre seca?",answer:"Si la prenda admite agua, remojá la zona en agua fría y aplicá un quitamanchas enzimático apto para el tejido siguiendo el envase. Puede requerir más de un ciclo y no conviene secar hasta revisar el resultado."},
  {question:"¿Puedo usar agua oxigenada o lavandina?",answer:"No como regla general. Pueden alterar colores y fibras. Usalas solo si la etiqueta y el producto confirman compatibilidad, con prueba previa, y nunca mezcles productos de limpieza."},
  {question:"¿Cuándo conviene llevar la prenda a tintorería?",answer:"Cuando la etiqueta indica cuidado profesional, la prenda es de lana o seda, tiene forro o estructura, destiñe, o la mancha está seca, recibió calor o ya fue tratada con otros productos."}
];

export const metadata:Metadata={
  title:"Cómo sacar manchas de sangre de la ropa | Aquabon",
  description:"Cómo tratar manchas de sangre frescas o secas con agua fría y sin fijarlas. Consultá tintorería en Aquabon, Centro de Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-04",images:[{url:"/blog/enjuagar-mancha-sangre-agua-fria.webp",width:1400,height:788,alt:"Enjuague con agua fría desde el reverso de una prenda blanca con una pequeña mancha de sangre"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-sacar-manchas-de-sangre-de-la-ropa" date="2026-10-04" readingTime="7 MIN DE LECTURA" cluster="Manchas" image="/blog/enjuagar-mancha-sangre-agua-fria.webp" service="tintoreria">
    <p className="article-lead"><strong>Ante una mancha de sangre, actuá con agua fría y evitá el calor.</strong> Enjuagar desde el reverso, pretratar según la etiqueta y comprobar el resultado antes de secar reduce el riesgo de fijar la mancha o dañar el tejido.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#fresca">Mancha fresca: primeros pasos</a></li><li><a href="#seca">Cómo tratar una mancha seca</a></li><li><a href="#tejidos">Cuidados según la prenda</a></li><li><a href="#errores">Errores que conviene evitar</a></li><li><a href="#consulta">Cuándo consultar</a></li></ol></nav>

    <h2 id="fresca">Cómo tratar una mancha de sangre fresca</h2>
    <ol className="article-steps">
      <li><strong>Evitá transferirla.</strong><span>Separá la prenda y apoyala sobre una superficie limpia. Si la sangre no es tuya, usá guantes y evitá el contacto directo.</span></li>
      <li><strong>Enjuagá con agua fría.</strong><span>Si la etiqueta admite agua, hacelo desde el reverso para empujar la mancha hacia afuera en lugar de atravesar más fibras.</span></li>
      <li><strong>Presioná sin frotar.</strong><span>Usá un paño blanco limpio para absorber. Frotar puede extender la zona y castigar la superficie.</span></li>
      <li><strong>Aplicá un pretratamiento compatible.</strong><span>Elegí uno apto para el tejido y seguí dosis, tiempo y prueba previa indicados en el envase.</span></li>
      <li><strong>Lavá según la etiqueta.</strong><span>No elijas una temperatura mayor por intuición: respetá el ciclo y el máximo permitido por el fabricante.</span></li>
      <li><strong>Revisá antes de aplicar calor.</strong><span>Si queda una sombra, repetí el tratamiento antes de usar secadora, plancha o radiador.</span></li>
    </ol>
    <div className="article-callout"><strong>Respuesta directa</strong><p>El agua fría es el punto de partida para una prenda lavable. Tide recomienda enjuagar la mancha desde el reverso y el American Cleaning Institute indica usar un producto enzimático para sangre seca, siempre dentro de lo que admite la etiqueta.</p></div>

    <figure className="article-image"><Image src="/blog/enjuagar-mancha-sangre-agua-fria.webp" alt="Manos con guantes enjuagando con agua fría desde el reverso una pequeña mancha de sangre en una prenda blanca" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Enjuagar desde el reverso ayuda a expulsar la mancha sin arrastrarla por una superficie mayor.</figcaption></figure>

    <h2 id="seca">¿Qué hacer si la mancha ya se secó?</h2>
    <p>Si la prenda es lavable, comenzá con un remojo localizado en agua fría. Luego aplicá un quitamanchas enzimático apto para el tejido, respetá el tiempo del envase y lavá según la etiqueta. Las enzimas ayudan a descomponer manchas de origen proteico, pero no todos los tejidos ni acabados admiten el mismo producto.</p>
    <p>Una marca antigua puede necesitar más de un ciclo. No la rasques, no aumentes la temperatura para acelerar y no la seques hasta observarla con buena luz. Si ya pasó por secadora o plancha, informalo al consultar: el calor previo cambia las posibilidades de tratamiento.</p>

    <h2 id="tejidos">El tratamiento cambia según la prenda</h2>
    <div className="frequency-grid">
      <article><strong>Algodón blanco lavable</strong><p>Puede tolerar distintos pretratamientos, pero “blanco” no significa que acepte lavandina. Revisá el símbolo de blanqueo.</p></article>
      <article><strong>Prendas de color</strong><p>Probá el producto en una costura interior. El quitamanchas también puede desplazar el color original.</p></article>
      <article><strong>Sintéticos deportivos</strong><p>Evitá calor y fricción. Elastano, estampas y acabados técnicos pueden limitar el producto y la temperatura.</p></article>
      <article><strong>Lana y seda</strong><p>No uses un producto enzimático por defecto. Si la etiqueta indica cuidado profesional, limitate a absorber y consultá.</p></article>
      <article><strong>Sacos y prendas estructuradas</strong><p>Forros, hombreras y entretelas pueden deformarse al mojar solo una zona. Requieren una evaluación integral.</p></article>
      <article><strong>Tapizados y colchones</strong><p>No los satures: el relleno retiene humedad. Esta guía está pensada para prendas y ropa de cama lavables; esos materiales requieren su propio código de limpieza.</p></article>
    </div>

    <h2 id="errores">Errores que pueden fijar o extender la mancha</h2>
    <ul>
      <li><strong>Empezar con agua caliente:</strong> en una mancha proteica, el calor puede dificultar su eliminación.</li>
      <li><strong>Frotar con fuerza:</strong> extiende la mancha y puede alterar la textura o el color.</li>
      <li><strong>Mezclar productos:</strong> nunca combines lavandina, amoníaco, ácidos ni otros limpiadores.</li>
      <li><strong>Usar lavandina porque la tela es blanca:</strong> primero verificá la etiqueta y la composición.</li>
      <li><strong>Secar o planchar antes de revisar:</strong> comprobá el resultado mientras la prenda sigue húmeda.</li>
      <li><strong>No contar qué aplicaste:</strong> si consultás después, informá producto, tiempo y exposición al calor.</li>
    </ul>

    <h2 id="consulta">¿Cuándo conviene consultar?</h2>
    <p>Si la etiqueta indica limpieza profesional, la prenda es delicada o estructurada, destiñe, la mancha ya se secó o recibió calor, evitá seguir probando mezclas. En Aquabon recibimos prendas para evaluación de <Link href="/servicios/tintoreria">tintorería</Link> en Gascón 2189, Centro de Mar del Plata. Revisamos tejido, color, construcción y tratamientos previos antes de confirmar proceso, plazo y precio; la eliminación total depende del material y del historial de la mancha.</p>
    <p>Para comparar cuidados, consultá también <Link href="/blog/como-sacar-manchas-de-vino-de-la-ropa">cómo tratar manchas de vino</Link>, la guía de <Link href="/blog/como-sacar-manchas-de-aceite-de-la-ropa">manchas de aceite</Link> y <Link href="/blog/que-prendas-conviene-llevar-a-la-tintoreria">qué prendas conviene llevar a tintorería</Link>.</p>

    <h2>Preguntas frecuentes</h2>
    {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://tide.com/en-us/how-to-wash-clothes/how-to-remove-stains/blood-stains" target="_blank" rel="noreferrer">Tide: tratamiento de manchas de sangre</a>, <a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide" target="_blank" rel="noreferrer">American Cleaning Institute: guía de manchas</a> y <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
