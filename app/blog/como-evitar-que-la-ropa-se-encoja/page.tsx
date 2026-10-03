import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo evitar que la ropa se encoja al lavarla";
const description="Cómo interpretar la etiqueta, elegir temperatura, ciclo y secado, y cuidar algodón, lana y prendas mixtas para reducir el riesgo de encogimiento.";
const path="/blog/como-evitar-que-la-ropa-se-encoja";
const faqs=[
  {question:"¿El agua caliente encoge toda la ropa?",answer:"No todos los tejidos reaccionan igual, pero una temperatura superior a la permitida aumenta el riesgo en fibras y construcciones sensibles. Elegí siempre la temperatura máxima indicada en la etiqueta, no una regla general basada solamente en el material."},
  {question:"¿La secadora puede encoger la ropa?",answer:"Sí, el calor y la acción mecánica pueden cambiar tamaño y forma. Usala únicamente cuando el símbolo de secado lo permita y seleccioná la intensidad indicada. Si hay dudas, secá al aire con la forma adecuada para la prenda."},
  {question:"¿Cómo lavar un sweater de lana sin que encoja?",answer:"Comprobá que la etiqueta permita lavado, utilizá ciclo de lana o delicado, detergente suave y evitá fricción, torsión y cambios bruscos de temperatura. Salvo que la etiqueta autorice secadora, acomodalo sobre una toalla y secalo en plano."},
  {question:"¿Se puede recuperar una prenda encogida?",answer:"Depende de la fibra y del grado de daño. Una prenda deformada levemente puede recuperar algo de forma mientras está húmeda, pero el afieltrado severo de la lana o el encogimiento fijado por calor puede ser irreversible."},
  {question:"¿Qué hago si no entiendo la etiqueta?",answer:"No uses el programa más intenso por defecto. Elegí una alternativa conservadora o consultá antes de lavar, especialmente si la prenda es de lana, seda, tiene forro, entretela o mezcla de materiales."}
];

export const metadata:Metadata={title:"Cómo evitar que la ropa se encoja | Aquabon",description:"Cómo evitar que la ropa se encoja: etiqueta, temperatura y secado según tejido. En Aquabon, Mar del Plata, te orientamos sobre el cuidado de tus prendas.",alternates:{canonical:path},openGraph:{title,description:"Cómo evitar que la ropa se encoja: etiqueta, temperatura y secado según tejido. En Aquabon, Mar del Plata, te orientamos sobre el cuidado de tus prendas.",type:"article",locale:"es_AR",url:path,publishedTime:"2026-09-30",images:[{url:"/blog/evitar-encogimiento-ropa.webp",width:1400,height:788,alt:"Revisión de la etiqueta de una remera junto a un sweater secándose en plano"}]}};

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="como-evitar-que-la-ropa-se-encoja" date="2026-09-30" readingTime="7 MIN DE LECTURA" cluster="Cuidado de ropa" image="/blog/evitar-encogimiento-ropa.webp" service="valet">
  <p className="article-lead"><strong>La mejor prevención está en la etiqueta y en el secado.</strong> Usá la temperatura máxima permitida, reducí fricción y centrifugado cuando el símbolo indique un proceso suave, y no lleves una prenda a la secadora si no está autorizada. “Agua fría para todo” tampoco reemplaza las instrucciones específicas.</p>
  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#causas">Por qué encoge la ropa</a></li><li><a href="#pasos">Cómo prevenirlo</a></li><li><a href="#tejidos">Cuidados por tejido</a></li><li><a href="#secado">El secado importa</a></li><li><a href="#encogida">Si ya encogió</a></li></ol></nav>

  <h2 id="causas">Por qué una prenda puede encoger</h2>
  <div className="frequency-grid">
    <article><strong>Temperatura inadecuada</strong><p>Superar el límite de la etiqueta puede modificar fibras, acabados y uniones.</p></article>
    <article><strong>Acción mecánica</strong><p>Un ciclo intenso, mucha carga o fricción afectan especialmente tejidos delicados y lana.</p></article>
    <article><strong>Secado con calor</strong><p>La secadora puede completar un encogimiento que no era evidente al salir del lavado.</p></article>
    <article><strong>Cambio brusco de temperatura</strong><p>En lana y prendas sensibles, alternar agua caliente y fría suma estrés sobre la estructura.</p></article>
    <article><strong>Prenda mal construida o pretratada</strong><p>No toda variación depende del usuario: calidad, estabilización previa y mezcla de fibras también influyen.</p></article>
    <article><strong>Etiqueta ignorada</strong><p>Elegir el programa solamente por color o tipo aparente de tela puede exceder el tratamiento permitido.</p></article>
  </div>

  <h2 id="pasos">Siete pasos para reducir el riesgo</h2>
  <ol className="article-steps">
    <li><strong>Leé la etiqueta completa.</strong><span>Revisá lavado, temperatura, blanqueo, secado, planchado y cuidado profesional.</span></li>
    <li><strong>Separá por necesidades de cuidado.</strong><span>No mezcles un sweater delicado con toallas pesadas solo porque tienen el mismo color.</span></li>
    <li><strong>Elegí la temperatura indicada.</strong><span>El número dentro del símbolo de lavado es el máximo permitido, no una recomendación para superarlo.</span></li>
    <li><strong>Respetá el tipo de ciclo.</strong><span>Una o dos líneas debajo del símbolo exigen menor acción mecánica y una carga más moderada.</span></li>
    <li><strong>Usá el detergente adecuado.</strong><span>Dosificá según producto, carga y suciedad; para lana, elegí uno suave y compatible.</span></li>
    <li><strong>No retuerzas.</strong><span>Quitá el exceso de agua con presión suave cuando la prenda requiera lavado manual.</span></li>
    <li><strong>Decidí el secado por separado.</strong><span>Que una prenda admita lavarropas no significa que también admita secadora.</span></li>
  </ol>

  <figure className="article-image"><Image src="/blog/evitar-encogimiento-ropa.webp" alt="Persona revisando la etiqueta de una remera blanca junto a un lavarropas y un sweater azul secándose en plano" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>La etiqueta define el tratamiento máximo; el sweater muestra el secado en plano recomendado para muchas prendas de punto.</figcaption></figure>

  <h2 id="tejidos">Cuidados según el tejido</h2>
  <h3>Algodón</h3><p>Puede modificar su tamaño con calor y secado intenso, sobre todo si la prenda no fue preencogida. Seguí la temperatura de la etiqueta y evitá prolongar la secadora más de lo necesario.</p>
  <h3>Lana</h3><p>La combinación de humedad, calor y fricción puede producir afieltrado. Woolmark recomienda comprobar la etiqueta, usar ciclo de lana o delicado cuando esté permitido y secar sweaters en plano salvo autorización expresa para secadora.</p>
  <h3>Viscosa y fibras celulósicas</h3><p>Pueden perder estabilidad cuando están mojadas. No retuerzas ni cuelgues una prenda pesada si la etiqueta pide secado en plano.</p>
  <h3>Sintéticos</h3><p>Suelen resistir mejor el lavado, pero el calor excesivo puede alterar forma, elasticidad o acabados. No uses la máxima temperatura por costumbre.</p>
  <h3>Mezclas</h3><p>Tomá como límite el componente o la construcción más delicados. Un porcentaje de fibra resistente no vuelve apto para secadora a todo el conjunto.</p>

  <h2 id="secado">La secadora no es un paso automático</h2>
  <p>GINETEX explica que los puntos dentro del símbolo de secadora indican la intensidad térmica y que el símbolo tachado prohíbe ese proceso. Si la etiqueta no autoriza la secadora, elegí secado natural adecuado: algunas prendas van colgadas; otras, como muchos sweaters, deben apoyarse en plano y acomodarse sin estirar.</p>
  <div className="article-callout"><strong>Lavado permitido no significa secado permitido</strong><p>Son símbolos distintos. Revisá ambos antes de iniciar el ciclo y no supongas que “baja temperatura” vuelve segura una secadora prohibida.</p></div>
  <ul><li>Sacá la ropa cuando termina el ciclo para evitar arrugas y calor residual.</li><li>No sobrecargues: la fricción aumenta y el secado se vuelve desigual.</li><li>Usá el nivel de calor indicado, no el más rápido.</li><li>Acomodá tejidos de punto a su forma original antes de secarlos en plano.</li><li>Evitá radiadores, estufas y calor directo para acelerar prendas sensibles.</li></ul>

  <h2 id="encogida">¿Qué hacer si una prenda ya encogió?</h2>
  <p>No vuelvas a aplicar calor. Mientras esté húmeda, podés acomodarla suavemente sobre una superficie plana sin tirar de costuras. Si la lana quedó rígida, compacta o afieltrada, forzarla puede dañarla más y la recuperación total puede no ser posible.</p>
  <p>Antes de probar mezclas caseras, revisá composición y etiqueta. En una prenda de valor, con estructura o cuidado profesional, conviene detenerse y consultar.</p>

  <h2>Cuando preferís delegar el lavado</h2>
  <p>En Aquabon revisamos material, etiqueta y estado general antes de confirmar el <Link href="/servicios/valet-de-ropa">valet de ropa</Link> o derivar una prenda a <Link href="/servicios/tintoreria">tintorería</Link>. Podés acercarte a Gascón 2189, en el centro de Mar del Plata. Para símbolos específicos, consultá también nuestra <Link href="/blog/simbolos-de-lavado-de-un-acolchado">guía para leer etiquetas de cuidado</Link>.</p>

  <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
  <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos y niveles de lavado y secado</a> y <a href="https://www.woolmark.com/care/how-to-wash-wool-sweater/" target="_blank" rel="noreferrer">Woolmark: lavado y secado de sweaters de lana</a>.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
