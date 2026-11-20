import { guide } from "../../guides";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// AQB-029 del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx). Tema: Tintorería.
// Complementa a /blog/cuando-llevar-la-campera-a-la-tintoreria (señales para llevar cualquier abrigo):
// esta guía va por "lavar campera de plumas" y el riesgo del secado.
// Ilustración editorial generada; no representa un caso real del local.
const illustration = guide("lavar-campera-de-plumas");
const slug = "lavar-campera-de-plumas";
const path = `/blog/${slug}`;
const title = "Campera de plumas: cómo limpiarla antes de guardarla";
const lead = "Se apelmaza, pierde abrigo y, si queda húmeda, aparecen hongos durante el verano. Por qué el secado es lo que la salva o la arruina.";
const metaTitle = "Lavar campera de plumas antes de guardarla | Aquabon";
const metaDescription = "Lavar una campera de plumas sin apelmazarla: qué la arruina y por qué el secado es clave antes de guardarla. Te la dejamos lista en Aquabon, Mar del Plata.";
const image = illustration.image;
const whatsapp = "Hola Aquabon, quiero limpiar una campera de plumas antes de guardarla. Les mando una foto de la campera y de la etiqueta.";

const faqs = [
  { question: "¿Se puede lavar una campera de plumas en el lavarropas?", answer: "Depende de lo que diga la etiqueta y del estado de la campera. Aun cuando admite lavado, el riesgo está en el secado: si la pluma queda húmeda por dentro, se apelmaza y aparece olor. Por eso conviene que la revisemos antes." },
  { question: "¿Por qué mi campera inflable quedó con bollos?", answer: "Porque la pluma o la fibra se secó amontonada. Cuando se moja, el relleno se junta en bloques; si no se seca de forma pareja y completa, queda así. A veces mejora con un nuevo lavado y secado controlado, y te decimos cuánto al verla." },
  { question: "¿Hay que limpiar la campera antes de guardarla?", answer: "Sí. El sudor y la grasa del cuello y los puños, guardados meses en un placard húmedo, se oxidan y dejan marcas amarillas y olor. Guardarla limpia y bien seca es lo que hace que en mayo esté lista para usar." },
  { question: "¿Dónde limpian camperas de plumas en Mar del Plata?", answer: "En Aquabon, Gascón 2189. Revisamos tejido, relleno, forro y accesorios, y te decimos si admite lavado o si necesita un tratamiento especializado, que coordinamos nosotros. Si estás en uno de los barrios donde retiramos, la pasamos a buscar." },
];

export const metadata: Metadata = {
  title: metaTitle, description: metaDescription, alternates: { canonical: path },
  openGraph: { title, description: metaDescription, type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-20", images: [{ url: image, width: 1400, height: 788, alt: illustration.alt }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout updated="2026-11-20" title={title} description={lead} slug={slug} date="2026-11-20" readingTime="5 MIN DE LECTURA" cluster="Camperas" image={image} service="camperas">
    <p className="article-lead"><strong>Limpia, seca hasta adentro y sin comprimir.</strong> Una campera de plumas se arruina más en el secado que en el lavado: si la pluma queda húmeda, se apelmaza, pierde abrigo y, guardada así, aparecen olor y hongos durante el verano. Antes de guardarla, lo que manda es la etiqueta y un secado completo y parejo.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#por-que">Por qué se apelmaza</a></li><li><a href="#errores">Errores que la arruinan</a></li><li><a href="#mdp">Guardarla en Mar del Plata</a></li><li><a href="#aquabon">Cómo la trabajamos</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>

    <h2 id="por-que">Por qué una campera de plumas se apelmaza</h2>
    <p>Una campera inflable abriga por el aire que queda atrapado entre las plumas. Mientras el relleno está suelto y seco, la campera es liviana y abriga mucho. Cuando se moja, la pluma se aplasta, se junta en bloques y pesa varias veces más.</p>
    <p>Si después se seca de forma pareja y completa, la pluma vuelve a separarse. Si se seca amontonada, a medias o con calor de más, queda con bollos en unos canales y vacía en otros: la campera abriga menos y se ve deformada. Y si queda humedad adentro, el relleno empieza a oler. Por eso, si no querés arriesgarla, nuestro servicio de <Link href="/servicios/lavado-de-camperas-y-tapados">limpieza de camperas y tapados en Mar del Plata</Link> empieza por revisar etiqueta, relleno y tela.</p>
    <p>A eso se suma la tela exterior: muchas camperas tienen un acabado que repele el agua y que se daña con productos fuertes, y costuras finas que, con mucha fricción, dejan escapar plumas.</p>

    <h2 id="errores">Errores que arruinan una campera de plumas</h2>
    <ol className="article-steps">
      <li><strong>Lavarla con detergente común y mucho producto.</strong><span>El exceso no se enjuaga en un relleno grueso, queda pegado a la pluma y la apelmaza. Algunos productos también dañan el acabado de la tela.</span></li>
      <li><strong>Secarla colgada en una percha.</strong><span>El relleno mojado cae hacia abajo y se seca en el ruedo y los puños. La parte de arriba queda vacía.</span></li>
      <li><strong>Apurar el secado con estufa o secador.</strong><span>El calor directo puede marcar o encoger la tela sintética y resecar la pluma.</span></li>
      <li><strong>Guardarla “casi seca”.</strong><span>Por fuera parece lista; por dentro, la pluma sigue húmeda. Es la causa más común del olor y las manchas que aparecen en mayo.</span></li>
      <li><strong>Guardarla al vacío o apretada.</strong><span>Meses de compresión le cuestan volumen a la pluma. Mejor colgada en una funda de tela o doblada sin peso encima.</span></li>
    </ol>
    <div className="article-callout"><strong>Antes de mojarla, la etiqueta</strong><p>Algunas camperas admiten lavado y otras piden cuidado profesional. Si tiene piel, cuero, partes que no se sacan o una etiqueta que no se entiende, mandanos una foto antes de hacer nada. Las señales para decidir están en <Link href="/blog/cuando-llevar-la-campera-a-la-tintoreria">cuándo llevar la campera a la tintorería</Link>.</p></div>

    <h2 id="mdp">Guardar la campera de plumas en Mar del Plata</h2>
    <p>En noviembre la campera inflable se va al placard y vuelve en mayo. Entre medio pasan seis meses de verano húmedo en la costa, que es exactamente lo que el relleno no tolera: humedad, encierro y algo de suciedad para alimentar el olor.</p>
    <p>El cuello y los puños son los puntos críticos: juntan grasa de la piel y maquillaje durante todo el invierno, y guardados así se oxidan y quedan amarillos. Si guardás también tapados, sacos y sweaters, en <Link href="/blog/como-guardar-la-ropa-de-invierno">cómo guardar la ropa de invierno</Link> está lo que conviene hacer con cada prenda. El acolchado de plumas tiene el mismo problema de secado: lo explicamos en <Link href="/blog/como-lavar-un-acolchado-de-plumas">cómo lavar un acolchado de plumas</Link>.</p>

    <h2 id="aquabon">Cómo trabajamos una campera de plumas en Aquabon</h2>
    <ul>
      <li><strong>La revisamos entera.</strong> Etiqueta, tela, relleno, forro, cierres y accesorios. Si tiene piel o partes que no se lavan, lo vemos antes.</li>
      <li><strong>Te decimos qué necesita.</strong> Si admite lavado, la lavamos; si necesita un tratamiento especializado, como la limpieza en seco, lo coordinamos nosotros. Vos la dejás en Aquabon y nosotros nos encargamos.</li>
      <li><strong>Tratamos cuello y puños antes.</strong> Es donde se juntan la grasa y el maquillaje.</li>
      <li><strong>No la entregamos húmeda.</strong> El secado es la etapa que más miramos: tiene que estar seca por dentro y con el relleno repartido.</li>
      <li><strong>Sin promesas que no dependen de nosotros.</strong> Una pluma ya dañada o una mancha vieja no siempre se recuperan del todo, y te lo decimos al revisarla.</li>
    </ul>
    <p>Más guías de abrigos y prendas especiales en <Link href="/blog/tema/tintoreria">tintorería y prendas especiales</Link>.</p>

    <LocalCta service="camperas" message={whatsapp}>Si estás en Mar del Plata, dejala lista para el próximo invierno: mandanos una foto de la campera y de la etiqueta por WhatsApp y te decimos qué necesita, con importe y plazo antes. Si estás en <Link className="link" href="/lavanderia-los-troncos-mar-del-plata">Los Troncos</Link> o en otro de los barrios donde retiramos, la pasamos a buscar.</LocalCta>

    <h2 id="preguntas">Preguntas frecuentes sobre la campera de plumas</h2>
    {faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
