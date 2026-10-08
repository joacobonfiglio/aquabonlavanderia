import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo lavar ropa delicada a mano o en lavarropas";
const description="Una guía para decidir el método según la etiqueta, proteger la prenda, reducir fricción y secarla sin deformarla.";
const path="/blog/como-lavar-ropa-delicada";
const faqs=[
  {question:"¿Qué ropa se considera delicada?",answer:"No existe una única lista. Puede ser delicada por su fibra, tejido, color, adornos, estructura o terminación. Seda, lana, encaje, viscosa y prendas con apliques suelen requerir más cuidado, pero siempre manda la etiqueta de la prenda terminada."},
  {question:"¿Es mejor lavar la ropa delicada a mano?",answer:"Solo cuando la etiqueta lo permite o lo indica. El lavado a mano también puede dañar si se frota, retuerce o deja la prenda mucho tiempo en remojo. Algunas prendas exigen cuidado profesional y no deben mojarse en casa."},
  {question:"¿Cómo lavar ropa delicada en el lavarropas?",answer:"Si la etiqueta admite máquina, separá colores y tejidos, cerrá cierres, protegé encajes o prendas pequeñas en una bolsa de malla, reducí la carga y elegí el ciclo suave y la temperatura indicados."},
  {question:"¿Se puede centrifugar la ropa delicada?",answer:"Depende de la etiqueta y del tejido. Las líneas debajo de la tina indican menor acción mecánica; algunos textiles requieren centrifugado corto o reducido y otros no deben retorcerse ni centrifugarse."},
  {question:"¿Cómo se seca la ropa delicada?",answer:"Seguí el símbolo de secado. Muchas prendas de punto conservan mejor su forma secándose extendidas; otras admiten percha o secadora suave. No cuelgues una prenda pesada mojada si puede estirarse."}
];

export const metadata:Metadata={
  title:"Cómo lavar ropa delicada sin dañarla | Aquabon",
  description:"Cómo lavar ropa delicada a mano o en lavarropas y secarla sin deformar. Guía de Aquabon, lavandería en el centro de Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-08",images:[{url:"/blog/preparar-ropa-delicada.webp",width:1400,height:788,alt:"Preparación de prendas delicadas con revisión de etiqueta, bolsa de malla, toalla y recipiente con agua"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-lavar-ropa-delicada" date="2026-10-08" readingTime="8 MIN DE LECTURA" cluster="Cuidado de ropa" image="/blog/preparar-ropa-delicada.webp" service="tintoreria">
    <p className="article-lead"><strong>“Delicada” no significa automáticamente “lavar a mano”.</strong> Primero mirá la etiqueta y la construcción de la prenda. Recién después elegí entre ciclo suave, lavado manual o cuidado profesional. La menor temperatura no compensa un método que la etiqueta prohíbe.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#decidir">Cómo elegir el método</a></li><li><a href="#maquina">Lavado en máquina</a></li><li><a href="#mano">Lavado a mano</a></li><li><a href="#secado">Secado sin deformar</a></li><li><a href="#tejidos">Cuidados por tejido</a></li><li><a href="#consulta">Cuándo consultar</a></li></ol></nav>

    <h2 id="decidir">Antes de lavar: tres decisiones importantes</h2>
    <ol className="article-steps">
      <li><strong>Leé todos los símbolos.</strong><span>La tina habla del lavado doméstico; el cuadrado, del secado; la plancha, del calor; y el círculo, del cuidado profesional.</span></li>
      <li><strong>Revisá la prenda completa.</strong><span>Forro, apliques, bordados, hombreras, cierres y combinaciones de color pueden ser más sensibles que la tela principal.</span></li>
      <li><strong>Elegí el proceso permitido.</strong><span>Tina normal: máquina; mano dentro de la tina: lavado manual; tina tachada: no lavar con agua en casa. El círculo no reemplaza estas instrucciones: describe procesos profesionales.</span></li>
    </ol>
    <div className="article-callout"><strong>Respuesta directa</strong><p>Si la etiqueta permite lavar ropa delicada en casa, reducí temperatura, fricción, carga y tiempo de humedad. Si prohíbe el lavado o la prenda tiene estructura, adornos o colores inestables, consultá antes de mojarla.</p></div>

    <figure className="article-image"><Image src="/blog/preparar-ropa-delicada.webp" alt="Manos revisando la etiqueta de una blusa celeste junto a una bolsa de malla, una prenda de punto, una toalla y un recipiente con agua" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Separar, revisar la etiqueta y proteger encajes o piezas pequeñas evita improvisar una vez iniciado el lavado.</figcaption></figure>

    <h2 id="maquina">Cómo lavar ropa delicada en el lavarropas</h2>
    <p>Usá la máquina únicamente si la etiqueta lo admite. Las líneas debajo de la tina indican que la prenda necesita menor acción mecánica: una línea corresponde a un proceso suave y dos, a uno muy suave. Elegí el programa equivalente de tu equipo y no superes la temperatura indicada.</p>
    <ul>
      <li><strong>Separá colores y materiales:</strong> no mezcles prendas livianas con jeans, toallas, velcros, ganchos o cierres expuestos.</li>
      <li><strong>Protegé lo que puede engancharse:</strong> cerrá cierres, abrochá broches y usá bolsa de malla para encajes o piezas pequeñas. La bolsa no vuelve lavable una prenda prohibida.</li>
      <li><strong>Reducí la carga:</strong> un tambor lleno aumenta roce, arrugas y dificultad de enjuague.</li>
      <li><strong>Dosificá el producto:</strong> elegí detergente compatible con la fibra y seguí la cantidad del envase; el exceso no aporta más cuidado.</li>
      <li><strong>Retirá las prendas al terminar:</strong> no las dejes húmedas y compactadas dentro del tambor.</li>
    </ul>
    <p>Para interpretar temperatura, barras y tachados, consultá la guía visual de <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de lavado de ropa</Link>.</p>

    <h2 id="mano">Cómo lavar ropa delicada a mano</h2>
    <p>GINETEX recomienda disolver primero un detergente suave en abundante agua, mover la prenda con cuidado y evitar frotar, tirar o retorcer. Para el símbolo de lavado manual a temperatura ambiente, el rango orientativo es de 20 a 30 °C; si la tina indica 40 °C, esa cifra es el máximo.</p>
    <ol className="article-steps">
      <li><strong>Prepará agua y detergente.</strong><span>Disolvé el producto antes de introducir la prenda y respetá la temperatura de la etiqueta.</span></li>
      <li><strong>Sumergí sin amontonar.</strong><span>Dejá que el textil se mueva en el agua; no frotes zonas contra sí mismas.</span></li>
      <li><strong>Enjuagá con cuidado.</strong><span>Evitá cambios bruscos de temperatura, especialmente con lana.</span></li>
      <li><strong>Retirá agua sin retorcer.</strong><span>Presioná suavemente y, si corresponde, envolvé la prenda en una toalla limpia.</span></li>
      <li><strong>Recuperá la forma.</strong><span>Acomodá costuras y medidas antes del secado, sin estirar.</span></li>
    </ol>

    <h2 id="secado">Cómo secar sin estirar ni marcar</h2>
    <p>El peso del agua puede deformar prendas de punto o tejidos con poca estabilidad. Si el cuadrado muestra una línea horizontal, secá extendido; las líneas verticales indican secado colgado y una diagonal señala sombra. El círculo dentro del cuadrado regula la secadora y, si está tachado, no debe utilizarse.</p>
    <div className="frequency-grid">
      <article><strong>Secado extendido</strong><p>Apoyá la prenda sobre una superficie ventilada y limpia, acomodada en su forma natural. Cambiá la toalla si queda saturada.</p></article>
      <article><strong>Secado en percha</strong><p>Usalo solo cuando la etiqueta y la construcción lo permiten. Una prenda pesada mojada puede estirar hombros y largo.</p></article>
      <article><strong>Secadora</strong><p>Respetá el símbolo y los puntos de temperatura. “Delicado” en la máquina no autoriza una secadora prohibida por la etiqueta.</p></article>
      <article><strong>Sol y calor directo</strong><p>La sombra indicada en la etiqueta ayuda a proteger colores. No aceleres con radiador, secador de pelo o plancha.</p></article>
    </div>

    <h2 id="tejidos">Qué cambia según el tejido</h2>
    <h3>Lana y prendas de punto</h3>
    <p>Algunas admiten programa de lana y otras solo lavado manual o profesional. Woolmark aconseja verificar primero la etiqueta, usar detergente suave cuando el lavado está permitido y secar muchas prendas de lana extendidas. Habrá una guía específica para sweaters; acá la regla es no generalizar por apariencia.</p>
    <h3>Seda</h3>
    <p>Color, brillo y acabado pueden reaccionar al agua, la fricción o los quitamanchas. Si la etiqueta limita el lavado doméstico, no pruebes un método casero sobre toda la prenda.</p>
    <h3>Viscosa, modal y fibras sintéticas finas</h3>
    <p>Pueden requerir carga reducida, ciclo suave y centrifugado corto. La viscosa mojada puede perder estabilidad; acomodala con cuidado y seguí su forma de secado.</p>
    <h3>Encaje, tul, bordados y apliques</h3>
    <p>El riesgo suele estar en enganches, adhesivos, hilos y adornos. Una bolsa de malla reduce roce, pero no protege frente a agua o temperatura incompatibles.</p>

    <h2>Errores frecuentes con prendas delicadas</h2>
    <ul>
      <li><strong>Confiar solo en el ciclo “delicado”:</strong> primero debe estar permitido el lavado en máquina.</li>
      <li><strong>Retorcer para acelerar el secado:</strong> puede deformar fibras, costuras y acabados.</li>
      <li><strong>Dejar en remojo sin límite:</strong> algunos colores y estructuras cambian al permanecer mojados.</li>
      <li><strong>Usar suavizante o quitamanchas por defecto:</strong> comprobá compatibilidad y dosificación.</li>
      <li><strong>Colgar todo en percha:</strong> el peso de una prenda mojada puede estirarla.</li>
      <li><strong>Aplicar calor sin mirar la etiqueta:</strong> secadora, vapor y plancha tienen símbolos propios.</li>
    </ul>

    <h2 id="consulta">Cuándo conviene consultar antes de lavar</h2>
    <p>Consultá si la tina está tachada, el círculo indica cuidado profesional, la prenda combina varios materiales, tiene estructura o apliques, el color migra al probar en una zona oculta o la mancha ya recibió otros productos. En Aquabon recibimos prendas para evaluación de <Link href="/servicios/tintoreria">tintorería</Link> en Gascón 2189, Centro de Mar del Plata. Proceso, plazo y precio se confirman al revisar cada pieza.</p>
    <p>Para ropa cotidiana que sí admite lavado, también podés consultar el <Link href="/servicios/valet-de-ropa">valet de ropa</Link>. Si tu principal duda es el cambio de talla, ampliá con la guía sobre <Link href="/blog/como-evitar-que-la-ropa-se-encoja">cómo evitar que la ropa se encoja</Link>.</p>

    <h2>Preguntas frecuentes</h2>
    {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a> y <a href="https://www.woolmark.com/care/how-to-wash-wool/" target="_blank" rel="noreferrer">Woolmark: lavado de lana</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
