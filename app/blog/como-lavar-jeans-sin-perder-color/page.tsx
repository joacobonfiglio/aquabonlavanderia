import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo lavar jeans sin que pierdan color";
const description="Una rutina práctica para cuidar jeans azules, negros o con elastano: etiqueta, lavado del revés, poca fricción y secado sin calor innecesario.";
const path="/blog/como-lavar-jeans-sin-perder-color";
const faqs=[
  {question:"¿Hay que lavar los jeans del revés?",answer:"Sí, cuando la etiqueta admite lavado en máquina. Darlos vuelta reduce el roce directo sobre la cara visible. Cerrá cierre y botón, vaciá los bolsillos y lavalos con colores similares."},
  {question:"¿A qué temperatura se lavan los jeans?",answer:"Usá la temperatura indicada en la etiqueta. Para denim oscuro, el agua fría suele ayudar a reducir la pérdida de color y el encogimiento, pero no reemplaza las instrucciones específicas de la prenda."},
  {question:"¿Se pueden meter los jeans en la secadora?",answer:"Solo si el símbolo lo permite. El calor puede favorecer encogimiento, desgaste y deterioro del elastano. Cuando sea posible, secá del revés, a la sombra y con ventilación."},
  {question:"¿Cada cuánto hay que lavar un jean?",answer:"No existe una frecuencia universal. Depende del uso, la suciedad, el olor, las manchas y las instrucciones del fabricante. Airearlo entre usos puede evitar lavados innecesarios, pero una prenda sucia debe tratarse a tiempo."},
  {question:"¿Qué cambia si el jean tiene elastano?",answer:"Las fibras elásticas son sensibles al calor y a algunos tratamientos intensos. Respetá la etiqueta, evitá temperaturas innecesarias y no uses secadora si está prohibida."},
  {question:"¿El vinagre fija el color del jean?",answer:"No lo tomes como regla general. Los jeans modernos usan tintes y acabados distintos; una receta casera puede alterar color, accesorios o fibras. Seguí la etiqueta y usá un detergente compatible con ropa oscura."}
];

export const metadata:Metadata={
  title:"Cómo lavar jeans sin perder color | Aquabon",
  description:"Cómo lavar jeans azules o negros sin perder color: del revés, con poca fricción y secado adecuado. Guía de Aquabon en Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-10",images:[{url:"/blog/preparar-jeans-antes-lavar.webp",width:1400,height:788,alt:"Preparación de un jean azul oscuro del revés antes de lavarlo con prendas de colores similares"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-lavar-jeans-sin-perder-color" date="2026-10-10" readingTime="7 MIN DE LECTURA" cluster="Jeans" image="/blog/preparar-jeans-antes-lavar.webp" service="valet">
    <p className="article-lead"><strong>Para reducir la pérdida de color, revisá la etiqueta, lavá el jean del revés con prendas oscuras similares y evitá más temperatura, fricción y secado de los necesarios.</strong> El color no se conserva con un único truco: depende del tinte, el acabado, la composición y de todo el ciclo de cuidado.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#antes">Antes de lavar</a></li><li><a href="#maquina">Lavado en máquina</a></li><li><a href="#tipos">Qué cambia según el jean</a></li><li><a href="#secado">Secado</a></li><li><a href="#errores">Errores frecuentes</a></li><li><a href="#frecuencia">Cuándo lavarlos</a></li></ol></nav>

    <h2 id="antes">Antes de lavar: mirá más que el color</h2>
    <p>Dos jeans azul oscuro pueden necesitar cuidados distintos. Uno puede ser algodón rígido; otro, una mezcla con elastano; y un denim crudo puede transferir color durante los primeros lavados. La etiqueta de la prenda terminada tiene prioridad sobre cualquier consejo general.</p>
    <ol className="article-steps">
      <li><strong>Leé lavado y secado.</strong><span>Revisá temperatura, intensidad del ciclo, blanqueo y secadora. Las líneas debajo de la tina piden menor acción mecánica.</span></li>
      <li><strong>Vaciá los bolsillos.</strong><span>Retirá papeles y objetos que puedan marcar, enganchar o dejar residuos.</span></li>
      <li><strong>Cerrá cierre y botón.</strong><span>Ayuda a que los herrajes no golpeen otras prendas y mantiene las piezas metálicas más contenidas.</span></li>
      <li><strong>Dalo vuelta.</strong><span>Dejá la cara teñida hacia adentro para reducir el roce visible durante lavado y centrifugado.</span></li>
      <li><strong>Separá por color y peso.</strong><span>Lavalo con prendas oscuras similares. No mezcles denim nuevo con ropa clara ni con textiles livianos que puedan desgastarse.</span></li>
    </ol>
    <div className="article-callout"><strong>Respuesta directa</strong><p>El método más prudente es: jean del revés, carga oscura y no saturada, detergente bien dosificado, ciclo corto o suave si la etiqueta lo admite, agua fría y secado a la sombra cuando sea compatible con la prenda.</p></div>

    <figure className="article-image"><Image src="/blog/preparar-jeans-antes-lavar.webp" alt="Manos dando vuelta un jean azul oscuro con el cierre cerrado y la etiqueta visible, junto a prendas oscuras separadas" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Dar vuelta el jean y separarlo con colores similares reduce el roce sobre la cara visible y el riesgo de transferencia.</figcaption></figure>

    <h2 id="maquina">Cómo lavar jeans en el lavarropas</h2>
    <ul>
      <li><strong>Temperatura:</strong> elegí la indicada en la etiqueta. Para colores oscuros, el agua fría suele ayudar a limitar decoloración y encogimiento.</li>
      <li><strong>Ciclo:</strong> usá un programa corto o suave cuando sea compatible. Menos agitación implica menos fricción sobre la superficie.</li>
      <li><strong>Carga:</strong> no llenes el tambor hasta compactar la ropa. El jean necesita espacio para moverse, lavarse y enjuagarse.</li>
      <li><strong>Detergente:</strong> dosificá según el envase, el tamaño de la carga y la suciedad. Un producto formulado para ropa oscura puede ayudar; el exceso no protege el color.</li>
      <li><strong>Blanqueo:</strong> no uses lavandina ni otro blanqueador salvo que el símbolo lo permita. El denim puede perder color de forma irregular.</li>
      <li><strong>Fin del ciclo:</strong> retiralo al terminar para evitar arrugas profundas, marcas y humedad retenida.</li>
    </ul>
    <p>Si no reconocés las líneas, puntos o tachados, consultá la guía de <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de lavado de ropa</Link>. La cifra dentro de la tina es un máximo, no una obligación de usar esa temperatura.</p>

    <h2 id="tipos">Jeans oscuros, negros, crudos y elastizados</h2>
    <div className="frequency-grid">
      <article><strong>Azul oscuro o negro</strong><p>Separalos de colores claros, lavalos del revés y evitá el sol directo prolongado. El primer lavado puede liberar más tinte.</p></article>
      <article><strong>Denim crudo</strong><p>Puede transferir color incluso por roce. Seguí las indicaciones del fabricante y lavalo separado si existen dudas sobre la solidez.</p></article>
      <article><strong>Con elastano</strong><p>El calor excesivo puede afectar elasticidad y calce. Revisá secadora y plancha, no solo el símbolo de lavado.</p></article>
      <article><strong>Con roturas o apliques</strong><p>La fricción puede agrandar zonas gastadas o enganchar piezas. Un ciclo suave no corrige una construcción incompatible con máquina.</p></article>
    </div>
    <p>No presupongas que todo denim encoge igual. Si te preocupa el calce, ampliá con la guía sobre <Link href="/blog/como-evitar-que-la-ropa-se-encoja">cómo evitar que la ropa se encoja</Link>.</p>

    <h2 id="secado">Cómo secar jeans sin castigar color ni calce</h2>
    <p>Levi’s recomienda secar el denim del revés y en un lugar sombreado para ayudar a preservar el color. Si la etiqueta permite secado al aire, acomodá costuras y bolsillos y colgalo con suficiente ventilación. Evitá sol fuerte durante horas, radiadores y otras fuentes de calor directo.</p>
    <p>Usá secadora únicamente cuando el cuadrado con círculo lo autorice y respetá sus puntos de temperatura. En jeans con elastano, el calor merece especial atención. Antes de guardar, comprobá que cintura, bolsillos y costuras gruesas estén completamente secos.</p>

    <h2 id="errores">Errores frecuentes que aceleran el desgaste</h2>
    <ul>
      <li><strong>Lavar un jean oscuro con ropa clara:</strong> puede haber transferencia de color, especialmente si es nuevo.</li>
      <li><strong>Usar el ciclo más largo por costumbre:</strong> más tiempo y movimiento implican más fricción.</li>
      <li><strong>Agregar demasiado detergente:</strong> puede enjuagarse mal y dejar residuos visibles sobre el denim.</li>
      <li><strong>Aplicar vinagre, sal o mezclas caseras como regla:</strong> no todos los tintes, acabados ni accesorios responden igual.</li>
      <li><strong>Secar al sol intenso:</strong> la exposición prolongada favorece una pérdida de color desigual.</li>
      <li><strong>Planchar sin revisar el símbolo:</strong> el calor permitido depende de toda la composición, no solo del algodón.</li>
    </ul>

    <h2 id="frecuencia">¿Cada cuánto conviene lavar los jeans?</h2>
    <p>No hay un número válido para todos. Considerá uso, sudor, suciedad, olor, manchas, contacto con superficies y la recomendación del fabricante. Entre usos, airealos en un lugar ventilado. Si hay una mancha, tratala pronto con un producto compatible en lugar de dejar que envejezca.</p>
    <p>Para ropa cotidiana que admite lavado, Aquabon ofrece <Link href="/servicios/valet-de-ropa">valet de ropa en Mar del Plata</Link>: lavado, secado y doblado, con recepción en Gascón 2189. Informanos si el jean es nuevo, pierde color, tiene elastano o necesita una atención particular; proceso, precio y plazo se confirman al recibir el pedido.</p>

    <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://help.levi.com/hc/en-us/articles/15463553339917-Denim-care-and-washing" target="_blank" rel="noreferrer">Levi’s: cuidado y lavado del denim</a>, <a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/fabric-care/keep-dark-clothes-fading" target="_blank" rel="noreferrer">American Cleaning Institute: cuidado de ropa oscura</a> y <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
