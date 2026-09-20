import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="¿Cuál es la diferencia entre lavandería y tintorería?";
const description="La lavandería suele resolver ropa cotidiana con procesos basados en agua, secado y doblado. La tintorería evalúa prendas estructuradas, delicadas o con cuidados profesionales y puede usar limpieza en seco o limpieza húmeda profesional según la etiqueta.";
const path="/blog/diferencia-entre-lavanderia-y-tintoreria";

export const metadata:Metadata={title:"Diferencia entre lavandería y tintorería | Aquabon",description:"Qué hace una lavandería, qué hace una tintorería y cómo elegir el servicio según la etiqueta, el tejido, la estructura y la mancha.",alternates:{canonical:path},openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-09-20",images:[{url:"/blog/elegir-lavanderia-o-tintoreria.webp",width:1400,height:788,alt:"Ropa cotidiana y prendas estructuradas separadas para elegir el servicio de limpieza"}]}};

const faqs=[
  {question:"¿Tintorería y limpieza en seco son lo mismo?",answer:"No exactamente. La tintorería es el servicio profesional que evalúa la prenda; la limpieza en seco es uno de los procesos posibles. También existe limpieza húmeda profesional cuando la etiqueta y el material la admiten."},
  {question:"¿Una campera va a lavandería o tintorería?",answer:"Depende de la etiqueta, el relleno, los recubrimientos, los adornos y la estructura. Una campera lavable puede tratarse con agua; una pieza delicada o estructurada necesita evaluación de tintorería."},
  {question:"¿Los acolchados se llevan a tintorería?",answer:"No de forma automática. Muchos acolchados admiten lavado con agua, pero requieren equipos con capacidad y secado controlado. La etiqueta y el tipo de relleno determinan el proceso."},
  {question:"¿La tintorería garantiza que salgan todas las manchas?",answer:"No. El resultado depende del origen, la antigüedad, el tejido, los tratamientos anteriores y los límites de la etiqueta. Conviene informar qué produjo la mancha y no aplicar remedios caseros antes de la evaluación."}
];

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="diferencia-entre-lavanderia-y-tintoreria" date="2026-09-20" readingTime="7 MIN DE LECTURA" cluster="Cuidado de ropa" image="/blog/elegir-lavanderia-o-tintoreria.webp">
  <p className="article-lead"><strong>Respuesta corta:</strong> la lavandería se ocupa principalmente de ropa cotidiana y textiles lavables con agua, además del secado y doblado. La tintorería recibe prendas que necesitan una evaluación profesional por su tejido, estructura, forro, color o terminación. Eso no significa que toda prenda de tintorería se limpie en seco: el proceso se elige después de leer la etiqueta y revisar la pieza completa.</p>

  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#comparacion">La diferencia principal</a></li><li><a href="#lavanderia">Qué llevar a lavandería</a></li><li><a href="#tintoreria">Qué llevar a tintorería</a></li><li><a href="#seco">Qué significa limpieza en seco</a></li><li><a href="#elegir">Cómo elegir el servicio</a></li><li><a href="#aquabon">Cómo funciona en Aquabon</a></li></ol></nav>

  <h2 id="comparacion">La diferencia no está solo en usar agua o solvente</h2>
  <p>En el uso cotidiano, “lavandería” suele asociarse con lavar, secar y doblar ropa de todos los días. “Tintorería” describe un cuidado profesional más individualizado para prendas cuyo material o construcción exige revisar el método antes de empezar.</p>
  <div className="frequency-grid">
    <article><strong>Lavandería</strong><p>Ropa cotidiana, toallas, sábanas y otros textiles lavables. El proceso suele basarse en agua, detergente, secado compatible y doblado.</p></article>
    <article><strong>Tintorería</strong><p>Sacos, tapados, vestidos, prendas forradas o delicadas. Puede aplicar limpieza en seco, limpieza húmeda profesional u otro tratamiento permitido.</p></article>
    <article><strong>Qué define el método</strong><p>La etiqueta, la fibra, el color, los adornos, los adhesivos, el forro, la estructura y la clase de mancha.</p></article>
    <article><strong>Qué no lo define por sí solo</strong><p>El precio de la prenda, su color o que tenga una mancha difícil. Primero hay que revisar el conjunto completo.</p></article>
  </div>
  <p>La etiqueta establece el tratamiento máximo permitido. El símbolo de la tina se refiere al lavado doméstico; el círculo informa sobre cuidado profesional. Podés consultar nuestra <Link href="/blog/simbolos-de-lavado-de-un-acolchado">guía visual de símbolos de cuidado</Link> para entender la lógica general.</p>

  <h2 id="lavanderia">Qué prendas suelen ir a lavandería</h2>
  <p>La lavandería es la opción habitual para textiles resistentes y de uso frecuente cuando la etiqueta permite lavado con agua. El objetivo no es solamente limpiar: también hay que ajustar carga, programa, temperatura y secado al material.</p>
  <ul><li>Remeras, pantalones, ropa interior y prendas de uso diario.</li><li>Toallas, sábanas, fundas y ropa de cama lavable.</li><li>Ropa deportiva apta para lavado con agua.</li><li>Frazadas y acolchados cuya etiqueta autoriza ese proceso.</li><li>Prendas sintéticas o de algodón sin estructura delicada, según indicaciones.</li></ul>
  <p>Dentro de Aquabon, el <Link href="/servicios/valet-de-ropa">servicio de valet</Link> incluye lavado, secado y doblado de ropa cotidiana. Las prendas especiales se separan y evalúan antes de aceptar el trabajo.</p>

  <figure className="article-image">
    <Image src="/blog/elegir-lavanderia-o-tintoreria.webp" alt="Canasta con ropa cotidiana junto a un saco, una blusa y un tapado revisados por separado" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/>
    <figcaption>La clasificación empieza por la prenda completa: etiqueta, tejido, forro, estructura, adornos y estado.</figcaption>
  </figure>

  <h2 id="tintoreria">Qué prendas conviene llevar a tintorería</h2>
  <p>La tintorería es adecuada cuando la prenda combina materiales, tiene forma estructurada o necesita un tratamiento que no puede reproducirse con seguridad en un lavarropas doméstico. La revisión previa evita asumir que todas las fibras responden igual.</p>
  <ul><li><strong>Sacos y trajes:</strong> entretelas, hombreras y forros pueden perder forma con un lavado inadecuado.</li><li><strong>Tapados y abrigos:</strong> suelen combinar peso, estructura, forro y distintos materiales.</li><li><strong>Vestidos y prendas de fiesta:</strong> pueden incluir bordados, apliques, adhesivos o colores sensibles.</li><li><strong>Lana, seda y mezclas delicadas:</strong> necesitan respetar límites de agua, movimiento, temperatura y acabado.</li><li><strong>Prendas marcadas para cuidado profesional:</strong> el círculo y sus letras orientan al especialista sobre los procesos permitidos.</li></ul>
  <p>“Delicado” no equivale siempre a “solo limpieza en seco”. Algunas prendas admiten limpieza húmeda profesional, un proceso con agua realizado con equipos, productos y controles que no se reproducen en un ciclo doméstico.</p>

  <h2 id="seco">Qué significa realmente limpieza en seco</h2>
  <p>A pesar del nombre, la limpieza en seco utiliza líquidos: la diferencia es que el medio principal no es agua. Los símbolos profesionales indican qué solventes y qué intensidad de acción, humedad añadida o temperatura puede admitir la prenda.</p>
  <p>El círculo vacío o con letras no es una instrucción para experimentar en casa. Está dirigido al profesional. Un círculo tachado indica que la prenda no debe limpiarse en seco; también puede limitar el uso de quitamanchas con solventes.</p>
  <div className="article-callout"><strong>Una tintorería no debería elegir el proceso por costumbre</strong><p>La naturaleza del tejido, la construcción de la prenda y el tipo de suciedad se valoran junto con la etiqueta. Dos sacos parecidos pueden requerir tratamientos diferentes.</p></div>

  <h2 id="elegir">Cómo elegir en menos de un minuto</h2>
  <ol className="article-steps">
    <li><strong>Leé la etiqueta completa.</strong><span>Buscá lavado, secado, planchado y cuidado profesional; no mires un solo símbolo aislado.</span></li>
    <li><strong>Observá la estructura.</strong><span>Forros, hombreras, entretelas, plisados, apliques y partes pegadas aumentan la necesidad de evaluación.</span></li>
    <li><strong>Identificá la mancha.</strong><span>Contá qué la produjo y cuándo ocurrió. No la frotes ni apliques productos antes de consultar.</span></li>
    <li><strong>Comprobá si necesita forma o terminación.</strong><span>Una prenda estructurada puede requerir un acabado profesional además de la limpieza.</span></li>
    <li><strong>Si dudás, separala de la ropa cotidiana.</strong><span>Una evaluación breve es más segura que incluirla en una bolsa de valet sin avisar.</span></li>
  </ol>
  <div className="article-callout warning"><strong>“Se puede lavar” no significa “cualquier lavado sirve”</strong><p>La temperatura, la acción mecánica, la carga y el secado también forman parte de la instrucción. Respetá las barras, puntos, temperaturas y prohibiciones de la etiqueta.</p></div>

  <h2 id="aquabon">Cómo funciona en Aquabon</h2>
  <p>Para ropa cotidiana podés consultar el valet. Para sacos, vestidos, tapados, camperas y piezas especiales, Aquabon funciona como punto de recepción y seguimiento del <Link href="/servicios/tintoreria">servicio de tintorería</Link>: registramos la prenda, revisamos sus características y coordinamos el tratamiento especializado cuando corresponde.</p>
  <p>Estamos en Gascón 2189, en el centro de Mar del Plata. Si no sabés qué servicio elegir, enviá por WhatsApp una foto de la prenda, la etiqueta y la mancha para una primera orientación; la confirmación final se realiza al verla.</p>

  <h2>Preguntas frecuentes</h2>
  {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}

  <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p>Interpretación de lavado y cuidado profesional de <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX</a> y criterios de instrucciones de cuidado de la <a href="https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule" target="_blank" rel="noreferrer">Federal Trade Commission</a>.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
