import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// AQB-001 del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx). Pilar: Manchas.
// TODO(joaco): foto propia para reemplazar la imagen de stock: remera blanca con una mancha de mate
// fresca sobre el mostrador del local, con la etiqueta a la vista. Mientras tanto se usa la de la guía de manchas.
const slug = "mancha-de-mate-en-la-ropa";
const path = `/blog/${slug}`;
const title = "Mancha de mate en la ropa: qué hacer (y qué no) para no arruinarla";
const lead = "La yerba tiñe más de lo que parece. Lo que hacés en los primeros minutos define si la mancha sale o se queda para siempre.";
const metaTitle = "Mancha de mate en la ropa: qué hacer y qué no | Aquabon";
const metaDescription = "Mancha de mate en la ropa: por qué el agua caliente y frotar la fijan, y qué evitar para no arruinar la prenda. Te ayudamos en Aquabon, Mar del Plata.";
const image = "/blog/tratar-mancha-vino-ropa.webp";
const whatsapp = "Hola Aquabon, se me volcó mate en una prenda. Es una __ de __ (tela) y la mancha es de hace __. Les mando una foto de la mancha y de la etiqueta.";

const faqs = [
  { question: "¿La mancha de yerba sale de la ropa blanca?", answer: "Muchas veces sí, sobre todo si llega fresca y sin tratamientos caseros encima. En ropa blanca el riesgo es la lavandina: puede amarillear la fibra y dejar una marca peor que la de la yerba. Por eso conviene que la veamos antes de blanquearla." },
  { question: "¿Qué hago apenas se me vuelca el mate?", answer: "Sacá la yerba que quedó encima sin aplastarla y apoyá un papel o un paño limpio para absorber el líquido, sin frotar. No le pongas agua caliente ni la metas al secarropas. Después mandanos una foto por WhatsApp y te decimos cómo seguir." },
  { question: "¿Sirve el jabón blanco o el quitamanchas para la mancha de mate?", answer: "Depende de la tela y de si el mate tenía azúcar. Algunos productos fuertes sacan el color de la prenda junto con la mancha, y frotar con jabón en barra puede agrandar la aureola. Antes de probar, conviene saber qué tejido es." },
  { question: "¿Una mancha de mate vieja todavía tiene arreglo?", answer: "No siempre, y preferimos decírtelo antes. Si ya pasó por el lavarropas o el secarropas, el tanino puede haber quedado fijado. Igual vale la pena que la revisemos: te decimos qué se puede hacer y hasta dónde antes de tocarla." },
  { question: "¿Dónde llevo una prenda con mancha de mate en Mar del Plata?", answer: "A Aquabon, en Gascón 2189. Revisamos tejido, etiqueta y mancha antes de tratarla, y si estás en uno de los barrios donde retiramos, la pasamos a buscar." },
];

export const metadata: Metadata = {
  title: metaTitle, description: metaDescription, alternates: { canonical: path },
  openGraph: { title, description: metaDescription, type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-19", images: [{ url: image, width: 1400, height: 788, alt: "Paño blanco absorbiendo una mancha fresca en una prenda clara, sin frotar" }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout title={title} description={lead} slug={slug} date="2026-11-19" readingTime="5 MIN DE LECTURA" cluster="Manchas" image={image} service="valet">
    <p className="article-lead"><strong>Absorbé sin frotar y no uses agua caliente.</strong> La yerba tiene taninos, el mismo tipo de pigmento que el té o el vino: el calor y el roce lo meten más adentro de la fibra y dejan una aureola marrón. Cuanto antes llegue la prenda sin tratamientos caseros encima, más chances hay de sacarla.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#por-que">Por qué la mancha de mate se fija</a></li><li><a href="#errores">Errores que la dejan para siempre</a></li><li><a href="#mdp">El mate en Mar del Plata</a></li><li><a href="#aquabon">Cómo la trabajamos en Aquabon</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>

    <h2 id="por-que">Por qué la mancha de mate se fija</h2>
    <p>El mate no es solo agua verde. La yerba suelta taninos, unos compuestos que tiñen y que se agarran a las fibras igual que un colorante. Por eso una mancha de mate fresca parece verdosa y, a los días, se vuelve marrón: el pigmento se oxida con el aire y se asienta en la tela.</p>
    <p>A eso se suman dos cosas que complican el panorama. La primera, la yerba molida: las partículas finas se meten en la trama y, si las aplastás, actúan como lija y tinta a la vez. La segunda, el azúcar: si el mate era dulce, deja una base pegajosa que con el calor se carameliza y atrapa todavía más color.</p>
    <p>La mancha en sí no es lo grave. Lo grave es todo lo que le hacemos en los primeros diez minutos, con la mejor intención. Por eso en nuestro <Link href="/servicios/valet-de-ropa">valet de ropa en Mar del Plata</Link> las manchas se revisan antes de que la prenda toque el agua.</p>

    <h2 id="errores">Errores que dejan la mancha de mate para siempre</h2>
    <ol className="article-steps">
      <li><strong>Frotar con la servilleta.</strong><span>Agranda la mancha, empuja el pigmento hacia adentro y, en telas delicadas, levanta pelusa y deja la zona gastada. El resultado típico: una aureola más grande y más clara alrededor de un centro más oscuro.</span></li>
      <li><strong>Ponerle agua caliente.</strong><span>Es el error más común con la pava a mano. El calor abre la fibra y fija los taninos. Lo mismo pasa con la plancha o el secarropas: si la mancha no salió, el calor la sella.</span></li>
      <li><strong>Lavandina en la ropa blanca.</strong><span>Puede aclarar la mancha, pero también amarillear el algodón, debilitar la tela y, si la prenda tiene detalles de color, desteñirlos. A veces la prenda queda peor que con la mancha original.</span></li>
      <li><strong>Mezclar productos.</strong><span>Jabón en barra, después quitamanchas, después bicarbonato. Cada capa cambia la química de la mancha y hace más difícil tratarla después. Y algunos productos fuertes sacan el color de la prenda junto con la yerba.</span></li>
      <li><strong>Lavarla con el resto y esperar.</strong><span>Si sale del lavarropas y la mancha sigue ahí, el secado termina de fijarla. Una prenda manchada no tiene que pasar por calor hasta que la mancha se haya ido.</span></li>
    </ol>
    <div className="article-callout"><strong>Lo único que conviene hacer apenas pasa</strong><p>Sacá la yerba de arriba con una cuchara, sin aplastarla. Apoyá papel absorbente o un paño limpio del lado de abajo y de arriba, y presioná. Nada de frotar ni de calor. Después, sacale una foto a la mancha y a la etiqueta.</p></div>

    <h2 id="mdp">El mate en Mar del Plata: rambla, oficina y auto</h2>
    <p>Acá el mate va a todos lados: a la playa en verano, a la rambla cuando sale el sol en invierno, a la oficina y al auto. Por eso las manchas que más nos traen no son de la cocina: son de la campera clara apoyada en el termo, del buzo blanco en la arena y de la funda del asiento.</p>
    <p>La humedad de la costa también juega en contra. Una prenda manchada que queda húmeda en un bolso o colgada sin ventilación tarda en secar, la mancha se oxida más rápido y aparece olor a encierro. Si no la vas a poder traer enseguida, dejala seca y estirada, sin doblar sobre la mancha.</p>

    <h2 id="aquabon">Cómo trabajamos una mancha de mate en Aquabon</h2>
    <p>En Aquabon las manchas no van directo al lavarropas. Primero miramos la prenda.</p>
    <ul>
      <li><strong>Revisamos la etiqueta y el tejido.</strong> Algodón, lana, sintético o mezcla: cada uno tolera cosas distintas, y eso define qué se puede usar.</li>
      <li><strong>Preguntamos la historia.</strong> Si era dulce, si ya la lavaste, si le pusiste algún producto. Por eso pedimos que no le hagas nada antes de traerla.</li>
      <li><strong>Tratamos la mancha antes de lavar.</strong> Pretratamos la zona según la fibra y recién después la prenda entra al lavado.</li>
      <li><strong>No la secamos con calor hasta revisarla.</strong> Si la mancha sigue, se vuelve a tratar o te avisamos. No queremos sellarla.</li>
      <li><strong>Te decimos la verdad.</strong> Si una mancha vieja ya está fijada, te lo decimos antes de tocarla. No prometemos que salga siempre: depende del tejido, del tiempo y de lo que se le haya aplicado.</li>
    </ul>
    <p>Si la prenda es delicada o tiene forro, la evaluamos como tintorería. Y si la mancha es de otro origen, en la guía de <Link href="/blog/como-sacar-manchas-dificiles-de-la-ropa">manchas difíciles</Link> repasamos vino, aceite, sangre y protector solar.</p>

    <h2>Otras manchas que se parecen a la de mate</h2>
    <p>El café, el té y el vino tinto también son manchas de taninos y se fijan por las mismas razones. Si además hay grasa, como en un café con leche, son dos manchas en una. Las marcas amarillas en el cuello o las axilas, en cambio, son otra historia: lo explicamos en <Link href="/blog/como-sacar-manchas-de-transpiracion">manchas de transpiración</Link>. Y si el accidente fue con base o labial, mirá <Link href="/blog/como-sacar-maquillaje-de-la-ropa">cómo sacar maquillaje de la ropa</Link>. Todas las guías por tema están en <Link href="/blog">Guías Aquabon</Link>.</p>

    <LocalCta service="valet" message={whatsapp}>Si se te volcó el mate en Mar del Plata, no la frotes ni la metas al lavarropas: traela así como está o mandanos una foto de la mancha y de la etiqueta por WhatsApp. Te decimos qué se puede hacer y te pasamos importe y plazo antes de que la dejes. Si estás en el <Link className="link" href="/lavanderia-centro-mar-del-plata">Centro</Link> o en uno de los barrios donde retiramos, la pasamos a buscar.</LocalCta>

    <h2 id="preguntas">Preguntas frecuentes sobre la mancha de mate</h2>
    {faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
