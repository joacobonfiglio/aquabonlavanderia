import { guide } from "../../guides";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// AQB-011 del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx). Pilar: Zapatillas.
// Ilustración editorial generada; no representa un caso real del local.
const illustration = guide("como-lavar-zapatillas-blancas");
const slug = "como-lavar-zapatillas-blancas";
const path = `/blog/${slug}`;
const title = "Cómo lavar zapatillas blancas sin dañarlas: lo que tenés que saber";
const lead = "El blanco no perdona: un cepillo duro, agua caliente o el producto equivocado dejan marcas que no se van. Qué las arruina y cómo las trabajamos.";
const metaTitle = "Cómo lavar zapatillas blancas sin dañarlas | Aquabon";
const metaDescription = "Cómo lavar zapatillas blancas sin rayarlas, despegarlas ni amarillearlas. Qué evitar y cómo las lavamos en Aquabon, Mar del Plata. Consultá por WhatsApp.";
const image = illustration.image;
const whatsapp = "Hola Aquabon, quiero lavar unas zapatillas blancas. Son de __ (tela, cuero, gamuza) y tienen __ (barro, manchas, suela gris). Les mando una foto del par.";

const faqs = [
  { question: "¿Cómo limpiar zapatillas blancas sin que se pongan amarillas?", answer: "Evitando el sol directo, el calor y los blanqueadores fuertes. El amarillo aparece muchas veces por oxidación de la goma o por restos de producto que quedan en la tela y reaccionan al secarse. Por eso enjuagamos bien y secamos a la sombra, con ventilación." },
  { question: "¿Las zapatillas blancas de cuero se lavan igual que las de tela?", answer: "No. El cuero no se sumerge: se limpia por zonas y con poca agua, porque si se moja de más se reseca y se cuartea. La tela tolera más agua, pero hay que cuidar que no destiña otra parte del par." },
  { question: "¿Se puede sacar lo gris de la suela de goma?", answer: "Muchas veces mejora mucho, porque buena parte de ese gris es suciedad metida en la textura. Lo que no vuelve es el amarillo de una goma ya oxidada por el sol o el tiempo: te lo decimos cuando vemos el par." },
  { question: "¿Dónde hacen lavado de zapatillas en Mar del Plata?", answer: "En Aquabon, Gascón 2189. Revisamos material, uniones y manchas antes de aceptar el par, y si estás en uno de los barrios donde retiramos, lo pasamos a buscar." },
  { question: "¿Cuánto tardan en lavar unas zapatillas blancas?", answer: "Depende del material y, sobre todo, del secado: no las entregamos hasta que están secas por dentro. Te confirmamos importe y plazo cuando vemos el par, antes de que lo dejes." },
];

export const metadata: Metadata = {
  title: metaTitle, description: metaDescription, alternates: { canonical: path },
  openGraph: { title, description: metaDescription, type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-19", images: [{ url: image, width: 1400, height: 788, alt: illustration.alt }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout updated="2026-11-20" title={title} description={lead} slug={slug} date="2026-11-19" readingTime="5 MIN DE LECTURA" cluster="Zapatillas" image={image} service="zapatillas">
    <p className="article-lead"><strong>Por zonas, con cepillo suave, agua tibia o fría y secado a la sombra.</strong> Las zapatillas blancas se arruinan más por cómo se lavan que por lo sucias que estén: los cepillos duros rayan, el agua caliente afloja el pegamento de la suela y algunos químicos dejan la tela o la goma amarilla. Cada material lleva su proceso.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#por-que">Por qué se arruinan las zapatillas blancas</a></li><li><a href="#errores">Errores comunes</a></li><li><a href="#mdp">Arena, humedad y salitre</a></li><li><a href="#aquabon">Cómo las lavamos en Aquabon</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>

    <h2 id="por-que">Por qué las zapatillas blancas se arruinan al lavarlas</h2>
    <p>Una zapatilla no es una sola tela. Tiene capellada (lona, malla, cuero o sintético), una suela de goma, una entresuela de espuma, plantilla, cordones y, uniendo todo, pegamento. Cada parte reacciona distinto al agua, al calor y a los productos. Lo que limpia una, puede dañar la de al lado.</p>
    <p>En las blancas, además, todo se ve. Una raya en el cuero, un borde de agua en la lona o un tono amarillo en la goma se notan a dos metros. Por eso no alcanza con que queden limpias: tienen que quedar parejas, y es lo que buscamos en el <Link href="/servicios/lavado-de-zapatillas">lavado de zapatillas en Mar del Plata</Link>.</p>
    <p>Hay dos cosas que conviene saber de entrada. La primera: el gris de la goma lateral casi siempre es suciedad metida en la textura, y mejora. La segunda: el amarillo de una goma oxidada por el sol o por los años es un cambio del material, no mugre. Ese no se va con un lavado, y no te lo vamos a vender como si se fuera.</p>

    <h2 id="errores">Errores comunes que dañan las zapatillas blancas</h2>
    <div className="frequency-grid">
      <article><strong>Cepillo duro o esponja de cocina</strong><p>Raya el cuero, levanta pelusa en la lona y deja marcas brillantes en el sintético. En una zapatilla blanca esas marcas quedan a la vista para siempre.</p></article>
      <article><strong>Agua caliente</strong><p>Ablanda el pegamento entre la suela y la capellada. La zapatilla puede salir limpia y con la punta despegada.</p></article>
      <article><strong>Lavandina y blanqueadores fuertes</strong><p>Pueden amarillear la tela, resecar la goma y dejar aureolas donde no se enjuagó bien. El efecto aparece al secar, cuando ya es tarde.</p></article>
      <article><strong>Sol directo o estufa para secarlas</strong><p>El calor deforma la horma, encoge algunas telas y oxida la goma. Es la causa más común de una suela blanca que se pone amarilla.</p></article>
      <article><strong>Pasta dental, bicarbonato y trucos de video</strong><p>Algunos son abrasivos y opacan el material. Otros dejan restos que, al secarse, marcan la tela con un halo.</p></article>
      <article><strong>El lavarropas</strong><p>Golpes, centrifugado y calor. Te contamos los riesgos en <Link href="/blog/se-pueden-lavar-zapatillas-en-el-lavarropas">zapatillas en el lavarropas</Link>.</p></article>
    </div>

    <h2 id="mdp">Arena, humedad y salitre: zapatillas blancas en Mar del Plata</h2>
    <p>En Mar del Plata las zapatillas blancas viven en el límite: arena de la playa en verano, baldosas mojadas y barro en invierno, y una humedad que hace que nada seque rápido. La arena fina se mete en la malla y raspa desde adentro cada vez que caminás. El salitre deja un velo blanquecino en el cuero y la gamuza.</p>
    <p>Y la humedad complica el secado: unas zapatillas que se secan en un departamento sin balcón pueden tardar días y quedar húmedas por dentro. Ahí aparece el olor, y a veces una marca marrón en la tela, que sube desde la plantilla mojada. Si te pasa, en la guía de <Link href="/blog/como-secar-zapatillas-sin-deformarlas">cómo secar zapatillas sin deformarlas</Link> explicamos por qué.</p>

    <h2 id="aquabon">Cómo lavamos zapatillas blancas en Aquabon</h2>
    <p>En Aquabon el trabajo empieza mirando el par, no mojándolo.</p>
    <ul>
      <li><strong>Revisamos materiales y uniones.</strong> Si hay suela abierta, costuras flojas o espuma gastada, te lo decimos antes de aceptarlas, porque la limpieza no lo arregla.</li>
      <li><strong>Separamos cordones y plantillas.</strong> Se tratan aparte. Buena parte del olor vive en la plantilla.</li>
      <li><strong>Trabajamos por zonas.</strong> Goma, costuras y capellada, cada una con lo que tolera. El cuero no se empapa; la lona se cuida para que no destiña sobre lo blanco.</li>
      <li><strong>Secamos sin calor.</strong> A temperatura ambiente y con ventilación, el tiempo que haga falta. No las entregamos hasta que están secas por dentro.</li>
      <li><strong>Te decimos qué esperar.</strong> Si una marca o un amarillo no van a salir, lo sabés antes. El resultado depende del material, del uso y del estado del par.</li>
    </ul>
    <p>Si el problema es el olor más que la mancha, mirá <Link href="/blog/como-sacar-el-olor-de-las-zapatillas">cómo sacar el olor de las zapatillas</Link>. Y todas las guías del tema están en <Link href="/blog">Guías Aquabon</Link>.</p>

    <LocalCta service="zapatillas" message={whatsapp}>Si estás en Mar del Plata, no arriesgues tus zapatillas blancas con un truco de internet. Mandanos una foto del par y de la zona manchada por WhatsApp y te decimos qué se puede hacer, con importe y plazo antes de que lo dejes. Si estás en <Link className="link" href="/lavanderia-guemes-mar-del-plata">Güemes</Link> o en otro de los barrios donde retiramos, lo pasamos a buscar.</LocalCta>

    <h2 id="preguntas">Preguntas frecuentes sobre zapatillas blancas</h2>
    {faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
