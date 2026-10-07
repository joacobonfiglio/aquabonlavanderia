import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo lavar camisas sin arruinar cuello, puños ni forma";
const description="Preparación, lavado, secado y planchado de camisas según tejido y etiqueta, con una rutina práctica para cuidar cuello, puños y calce.";
const path="/blog/como-lavar-camisas-sin-arruinarlas";
const faqs=[
  {question:"¿Conviene abrochar una camisa para lavarla?",answer:"No conviene lavar todos los botones cerrados porque el movimiento puede tensar botones y ojales. Desabrochá frente, cuello y puños; si la camisa tiene ballenas removibles, retiralas antes."},
  {question:"¿Cómo lavar el cuello y los puños de una camisa?",answer:"Revisalos antes del lavado y pretratá solamente si la etiqueta y el producto lo permiten. Aplicá la dosis indicada, evitá cepillos duros y no dejes secar el producto sobre la tela."},
  {question:"¿A qué temperatura se lavan las camisas?",answer:"A la temperatura máxima que indique la etiqueta, que no siempre es la más conveniente para color y calce. Si hay elastano, terminaciones especiales o color intenso, respetá también las instrucciones del fabricante."},
  {question:"¿Cómo secar una camisa para que quede menos arrugada?",answer:"Retirala al terminar el ciclo, sacudila suavemente, acomodá costuras, cuello y puños y colgala en una percha adecuada si la etiqueta permite secado vertical. No uses secadora si el símbolo la prohíbe."},
  {question:"¿Cuándo conviene llevar una camisa a la lavandería?",answer:"Cuando necesitás lavado y terminación frecuente, hay manchas difíciles, la tela es delicada o la etiqueta limita el lavado doméstico. La prenda debe revisarse antes de confirmar el proceso."}
];

export const metadata:Metadata={
  title:"Cómo lavar camisas sin arruinarlas | Aquabon",
  description:"Cómo lavar camisas sin arruinar cuello, puños ni forma. Guía práctica de Aquabon, lavandería y planchado en el centro de Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-07",images:[{url:"/blog/preparar-camisa-antes-lavar.webp",width:1400,height:788,alt:"Preparación de una camisa celeste antes del lavado, con puños abiertos, etiqueta y ballenas del cuello a la vista"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-lavar-camisas-sin-arruinarlas" date="2026-10-07" readingTime="7 MIN DE LECTURA" cluster="Camisas" image="/blog/preparar-camisa-antes-lavar.webp" service="valet">
    <p className="article-lead"><strong>Una camisa se cuida antes de encender el lavarropas.</strong> Leé la etiqueta, separá por color y tejido, desabrochá cuello y puños, retirale las ballenas removibles y tratá las zonas más usadas sin frotar de más. Después elegí lavado, secado y planchado según esa prenda, no con una receta única.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#antes">Antes de lavar</a></li><li><a href="#lavado">Ciclo y temperatura</a></li><li><a href="#tejidos">Qué cambia según el tejido</a></li><li><a href="#secado">Secado y planchado</a></li><li><a href="#errores">Errores frecuentes</a></li></ol></nav>

    <h2 id="antes">Qué revisar antes de lavar una camisa</h2>
    <ol className="article-steps">
      <li><strong>Leé la etiqueta.</strong><span>Confirmá si admite lavado doméstico, temperatura, blanqueo, secadora y plancha.</span></li>
      <li><strong>Vaciá los bolsillos.</strong><span>Retirá papeles, objetos y cualquier elemento que pueda manchar o enganchar la tela.</span></li>
      <li><strong>Desabrochá la prenda.</strong><span>Abrí frente, cuello y puños para evitar tensión innecesaria sobre botones y ojales.</span></li>
      <li><strong>Retirá las ballenas removibles.</strong><span>Guardalas juntas para que no se pierdan ni deformen el cuello durante el lavado.</span></li>
      <li><strong>Revisá manchas, cuello y puños.</strong><span>Pretratá solo con un producto compatible, siguiendo dosis y tiempo del envase.</span></li>
      <li><strong>Separá la carga.</strong><span>No mezcles una camisa clara con prendas que destiñen ni una tela liviana con cierres o elementos abrasivos.</span></li>
    </ol>
    <div className="article-callout"><strong>Respuesta directa</strong><p>Para lavar una camisa sin arruinarla, desabrochala, tratá cuello y puños con suavidad, elegí el programa indicado en la etiqueta y retirala apenas termina. El calor y la fricción excesivos suelen afectar antes el color, el calce y las terminaciones.</p></div>

    <figure className="article-image"><Image src="/blog/preparar-camisa-antes-lavar.webp" alt="Manos revisando la etiqueta de una camisa celeste con cuello y puños abiertos y ballenas removibles apartadas" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Abrir cuello y puños y retirar las ballenas removibles evita tensión y ayuda a revisar toda la prenda.</figcaption></figure>

    <h2 id="lavado">Cómo elegir ciclo, detergente y temperatura</h2>
    <p>Usá la cantidad de detergente indicada para el producto, el tamaño de la carga y la dureza del agua. Más producto no significa más limpieza: el exceso puede enjuagarse mal. Elegí un ciclo compatible con la fibra y el nivel de suciedad, sin sobrecargar el tambor para que la camisa pueda moverse y enjuagarse.</p>
    <p>La tina de la etiqueta marca la temperatura máxima y la intensidad admitida. Una o dos líneas debajo piden un tratamiento más suave. Si el símbolo está tachado, no corresponde lavado doméstico con agua. Podés ampliar estos códigos en la guía de <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de lavado de ropa</Link>.</p>
    <div className="frequency-grid">
      <article><strong>Cuello y puños</strong><p>Aplicá pretratamiento compatible y trabajá con los dedos o un paño suave. Un cepillado agresivo puede desgastar bordes y costuras.</p></article>
      <article><strong>Camisas blancas</strong><p>No uses cloro solo por el color. Revisá el triángulo de blanqueo: hilos, botones y acabados también pueden reaccionar.</p></article>
      <article><strong>Camisas de color</strong><p>Separá tonos intensos y lavá del revés si lo recomienda el fabricante. Evitá temperaturas mayores a las necesarias.</p></article>
      <article><strong>Carga del lavarropas</strong><p>Dejá espacio para movimiento. Las prendas apretadas se lavan y enjuagan peor y suelen salir más arrugadas.</p></article>
    </div>

    <h2 id="tejidos">No todas las camisas se lavan igual</h2>
    <h3>Algodón</h3>
    <p>Puede ser resistente, pero temperatura y secado influyen en encogimiento, color y arrugas. No presupongas el programa por la fibra: seguí la etiqueta de la prenda terminada.</p>
    <h3>Lino</h3>
    <p>Se arruga con facilidad y puede requerir un ciclo más suave. Acomodarlo húmedo y plancharlo según el símbolo ayuda más que aumentar el centrifugado o el calor.</p>
    <h3>Poliéster o mezclas con elastano</h3>
    <p>Suelen necesitar menos temperatura. El calor excesivo puede afectar fibras elásticas o fijar olores y manchas; comprobá siempre las indicaciones específicas.</p>
    <h3>Seda, viscosa o prendas estructuradas</h3>
    <p>Pueden perder color, textura o forma con agua, fricción o secado inadecuado. Si la etiqueta indica cuidado profesional, no hagas una prueba casera sobre toda la camisa.</p>

    <h2 id="secado">Cómo secar y planchar sin deformar</h2>
    <p>Retirá la camisa cuando termina el ciclo: dejarla húmeda y compactada profundiza las arrugas. Sacudila con suavidad, alineá costuras, acomodá cuello y puños y, si la etiqueta admite secado vertical, usá una percha que acompañe los hombros. Para secadora, respetá el cuadrado con círculo y sus puntos de temperatura.</p>
    <p>Antes de planchar, verificá el símbolo de la plancha: los puntos indican el nivel de calor permitido. Empezá por las zonas dobles —cuello y puños— y seguí con mangas, espalda y delanteros. Si preferís delegar la terminación, Aquabon ofrece <Link href="/servicios/planchado">servicio de planchado en Mar del Plata</Link>; revisamos tejido y etiqueta antes de confirmar.</p>

    <h2 id="errores">Errores frecuentes que acortan la vida de una camisa</h2>
    <ul>
      <li><strong>Lavarla con todos los botones cerrados:</strong> aumenta la tensión en botones, hilos y ojales.</li>
      <li><strong>Frotar cuello y puños con fuerza:</strong> acelera el desgaste de bordes y puede aclarar el color.</li>
      <li><strong>Usar la temperatura más alta:</strong> la etiqueta fija un máximo, no una obligación.</li>
      <li><strong>Sobrecargar el tambor:</strong> dificulta el lavado, el enjuague y favorece las arrugas.</li>
      <li><strong>Aplicar secadora o plancha sobre una mancha:</strong> revisá primero; el calor puede volverla más difícil de tratar.</li>
      <li><strong>Guardar la camisa húmeda:</strong> dejala secar por completo antes de llevarla al placard.</li>
    </ul>

    <h2>¿Cuándo conviene dejarla en manos profesionales?</h2>
    <p>Si tenés varias camisas por semana, necesitás una terminación pareja o la prenda presenta manchas, estructura o una etiqueta restrictiva, podés consultar el <Link href="/servicios/valet-de-ropa">valet de ropa</Link> y el servicio de planchado. En Aquabon recibimos prendas en Gascón 2189, Centro de Mar del Plata, y confirmamos proceso, plazo y precio después de revisarlas. También conviene consultar antes si la camisa ya se encogió: la guía sobre <Link href="/blog/como-evitar-que-la-ropa-se-encoja">cómo evitar el encogimiento</Link> explica por qué no siempre es reversible.</p>

    <h2>Preguntas frecuentes</h2>
    {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.ginetex.net/userfiles/files/Textile_care_symbols_en.pdf" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a> y <a href="https://www.cleaninginstitute.org/cleaning-tips/clothes" target="_blank" rel="noreferrer">American Cleaning Institute: cuidado de la ropa</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
