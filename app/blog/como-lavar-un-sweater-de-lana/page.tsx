import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo lavar un sweater de lana sin encogerlo ni deformarlo";
const description="Etiqueta, lavado a mano o en máquina y secado plano: una rutina prudente para cuidar la forma y el tejido de un sweater de lana.";
const path="/blog/como-lavar-un-sweater-de-lana";
const image="/blog/lavar-sweater-lana-secado-plano.webp";
const faqs=[
  {question:"¿Se puede lavar un sweater de lana en el lavarropas?",answer:"Sí, pero solo si la etiqueta admite lavado en máquina. Elegí el programa para lana o el ciclo suave equivalente, respetá la temperatura indicada, reducí la carga y usá un detergente suave apto para lana."},
  {question:"¿Es mejor lavar la lana a mano?",answer:"No siempre. El lavado manual corresponde cuando la etiqueta lo permite o lo indica; también puede dañar la prenda si se frota, estira o retuerce. Si la tina está tachada, no la laves con agua en casa."},
  {question:"¿Cómo sacar el agua sin retorcer el sweater?",answer:"Presioná con suavidad y envolvelo en una toalla limpia para que absorba el exceso. Después recuperá su forma sin estirar y dejalo extendido según la indicación de secado."},
  {question:"¿Por qué se encoge un sweater de lana?",answer:"El calor, la fricción y la acción mecánica pueden favorecer el afieltrado y la contracción. Por eso importan el proceso, la temperatura y el secado indicados en la etiqueta, no solamente usar agua fría."},
  {question:"¿Cuándo conviene llevarlo a tintorería?",answer:"Cuando la etiqueta exige cuidado profesional, prohíbe el lavado, la prenda tiene estructura, adornos o varios materiales, o hay una mancha que no conviene tratar sin evaluación."}
];

export const metadata:Metadata={
  title:"Cómo lavar un sweater de lana | Aquabon",
  description:"Cómo lavar un sweater de lana sin encogerlo: etiqueta, lavado a mano o en máquina y secado plano. Guía de Aquabon en Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-16",images:[{url:image,width:1400,height:788,alt:"Cómo lavar un sweater de lana: prenda extendida sobre una toalla para retirar agua sin retorcer"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-lavar-un-sweater-de-lana" date="2026-10-16" readingTime="8 MIN DE LECTURA" cluster="Lana" image={image} service="tintoreria">
    <p className="article-lead"><strong>Para lavar un sweater de lana, la etiqueta decide el método.</strong> Si admite máquina, usá el programa indicado con poca carga y detergente suave; si pide lavado manual, evitá frotar y retorcer. Retirá el agua con una toalla, recuperá la forma y secá extendido cuando corresponda.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#etiqueta">Qué revisar primero</a></li><li><a href="#mano">Lavado a mano</a></li><li><a href="#maquina">Lavado en máquina</a></li><li><a href="#secado">Secado sin deformar</a></li><li><a href="#errores">Errores frecuentes</a></li><li><a href="#consulta">Cuándo consultar</a></li></ol></nav>

    <h2 id="etiqueta">Primero identificá qué proceso admite la prenda</h2>
    <p>No todos los sweaters que parecen de lana tienen la misma composición ni el mismo acabado. Revisá el porcentaje de fibras y todos los símbolos: la tina regula el lavado doméstico; las líneas debajo indican menor acción mecánica; el cuadrado define el secado; y el círculo describe cuidado profesional.</p>
    <div className="frequency-grid">
      <article><strong>Máquina permitida</strong><p>Elegí el ciclo de lana o el proceso suave equivalente y no superes la temperatura de la etiqueta.</p></article>
      <article><strong>Lavado manual</strong><p>Disolvé primero un detergente suave en abundante agua y mové la prenda sin frotar, tirar ni retorcer.</p></article>
      <article><strong>Tina tachada</strong><p>No mojes la prenda en casa. Consultá el proceso profesional indicado y revisá también el símbolo circular.</p></article>
      <article><strong>Sin etiqueta legible</strong><p>No deduzcas el cuidado solo por el tacto. La mezcla, el tejido, los adornos y la estructura también cambian el riesgo.</p></article>
    </div>
    <p>Si necesitás repasar los signos, consultá la guía de <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de lavado de ropa</Link>.</p>

    <h2 id="mano">Un método suave para el lavado manual permitido</h2>
    <ol className="article-steps">
      <li><strong>Prepará la solución.</strong><span>Usá agua y detergente suave compatible con lana según la etiqueta y las instrucciones del producto.</span></li>
      <li><strong>Da vuelta el sweater.</strong><span>Sumergilo sin amontonarlo y distribuí el agua con movimientos suaves.</span></li>
      <li><strong>Evitá la fricción.</strong><span>No cepilles, frotes una parte contra otra ni tires del tejido mojado.</span></li>
      <li><strong>Enjuagá con cuidado.</strong><span>Retirá el producto sin cambios bruscos ni movimientos que estiren la prenda.</span></li>
      <li><strong>Presioná, no retuerzas.</strong><span>Sostené todo el peso del sweater al sacarlo del agua y quitá el exceso suavemente.</span></li>
    </ol>
    <div className="article-callout"><strong>La clave</strong><p>La lana necesita controlar temperatura, tiempo mojada, fricción y movimiento. “A mano” no significa que pueda frotarse con fuerza ni dejarse en remojo sin límite.</p></div>

    <h2 id="maquina">Cómo usar el programa de lana sin improvisar</h2>
    <p>Woolmark indica que muchas prendas de lana pueden lavarse en máquina cuando su etiqueta lo autoriza. Usá el ajuste para lana; si el equipo no lo tiene, elegí el ciclo frío o delicado que reproduzca las condiciones permitidas por la prenda.</p>
    <ul>
      <li><strong>Separá por color y peso:</strong> no mezcles el sweater con jeans, toallas, velcros o cierres expuestos.</li>
      <li><strong>Reducí la carga:</strong> los ciclos muy suaves necesitan espacio y menor acción mecánica.</li>
      <li><strong>Elegí detergente neutro y suave:</strong> comprobá que sea apto para lana y respetá su dosificación.</li>
      <li><strong>Retiralo al terminar:</strong> no lo dejes húmedo y comprimido dentro del tambor.</li>
      <li><strong>No agregues calor por costumbre:</strong> la secadora solo corresponde si el símbolo de la prenda la permite.</li>
    </ul>
    <p>Para evitar otros daños por temperatura o movimiento, ampliá con la guía sobre <Link href="/blog/como-evitar-que-la-ropa-se-encoja">cómo evitar que la ropa se encoja</Link>.</p>

    <figure className="article-image"><Image src={image} alt="Cómo lavar un sweater de lana: prenda extendida sobre una toalla para retirar agua sin retorcer" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>La toalla absorbe parte del agua sin retorcer; después se acomoda el sweater en su forma natural para el secado plano.</figcaption></figure>

    <h2 id="secado">Retirá humedad y devolvé la forma antes de secar</h2>
    <p>Sostené la prenda completa: la lana mojada pesa y puede estirarse si queda colgando de hombros o puños. Apoyala sobre una toalla limpia, enrollá o presioná suavemente para absorber agua y volvé a desplegarla sin tirar.</p>
    <ol className="article-steps">
      <li><strong>Acomodá las medidas.</strong><span>Alineá cuello, hombros, mangas y ruedo sobre una superficie plana.</span></li>
      <li><strong>Respetá el símbolo de secado.</strong><span>Una línea horizontal dentro del cuadrado indica secado extendido; una diagonal agrega la indicación de sombra.</span></li>
      <li><strong>Dejá circular el aire.</strong><span>Cambiá la toalla si queda saturada y no apoyes la prenda sobre un radiador.</span></li>
      <li><strong>Esperá a que esté seca por completo.</strong><span>No la guardes ni la planches mientras conserve humedad en puños, cuello o costuras.</span></li>
    </ol>

    <h2 id="errores">Hábitos que encogen, estiran o apelmazan la lana</h2>
    <ul>
      <li><strong>Lavar por fibra y no por etiqueta:</strong> dos sweaters de lana pueden requerir procesos distintos.</li>
      <li><strong>Frotar una mancha:</strong> puede alterar la superficie y extender la suciedad.</li>
      <li><strong>Retorcer al enjuagar:</strong> deforma el punto y aumenta la fricción.</li>
      <li><strong>Colgar la prenda mojada:</strong> el peso puede estirar hombros, mangas y largo.</li>
      <li><strong>Acelerar con calor directo:</strong> radiador, secador o una secadora no autorizada elevan el riesgo.</li>
      <li><strong>Intentar “desencoger” con una receta universal:</strong> un cambio por afieltrado puede ser irreversible.</li>
    </ul>

    <h2 id="consulta">Cuándo dejar el cuidado en manos profesionales</h2>
    <p>Consultá antes de mojar si la etiqueta prohíbe lavar, exige cuidado profesional, el sweater tiene forro, hombreras, bordados, cuero, varios colores o materiales, o una mancha antigua. En Aquabon recibimos prendas para evaluación de <Link href="/servicios/tintoreria">tintorería en Mar del Plata</Link> y confirmamos proceso, precio y plazo después de revisarlas.</p>
    <p>Si la prenda es lavable pero querés entender mejor el cuidado de tejidos sensibles, leé también <Link href="/blog/como-lavar-ropa-delicada">cómo lavar ropa delicada</Link>.</p>

    <h2>Preguntas frecuentes sobre el cuidado de lana</h2>
    {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.woolmark.com/care/how-to-wash-wool/" target="_blank" rel="noreferrer">Woolmark: cómo lavar lana</a> y <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
