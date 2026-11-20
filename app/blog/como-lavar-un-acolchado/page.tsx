import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// AQB-017 del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx). Pilar: Acolchados y blanquería.
// TODO(joaco): foto propia para reemplazar la imagen de stock: un acolchado de dos plazas entrando en la
// máquina de 15 kg del local, y el mismo acolchado doblado y seco listo para entregar.
const slug = "como-lavar-un-acolchado";
const path = `/blog/${slug}`;
const title = "Cómo lavar un acolchado sin que se apelmace el relleno";
const lead = "Que entre en el lavarropas no significa que se lave. El espacio y el secado deciden si el acolchado vuelve esponjoso o con olor a humedad.";
const metaTitle = "Cómo lavar un acolchado sin apelmazar el relleno | Aquabon";
const metaDescription = "Cómo lavar un acolchado sin que el relleno se apelmace ni quede olor a humedad. Lo lavamos y secamos entero en Aquabon, Mar del Plata, con retiro.";
const image = "/blog/comprobar-secado-acolchado.webp";
const whatsapp = "Hola Aquabon, quiero lavar un acolchado. Es de __ plazas, el relleno es __ (plumas, sintético, no sé) y lo necesito para __. Les mando una foto de la etiqueta.";

const faqs = [
  { question: "¿Se puede lavar un acolchado en el lavarropas de casa?", answer: "Depende del tamaño del acolchado, del relleno y de la capacidad del lavarropas. El problema habitual es que entra apretado: no tiene lugar para moverse, el jabón no se enjuaga bien y el relleno se apelmaza. Y después hay que secarlo entero, que es lo más difícil." },
  { question: "¿Por qué el acolchado queda con olor a humedad después de lavarlo?", answer: "Porque el relleno quedó húmedo por dentro aunque la funda parezca seca. Esa humedad atrapada genera olor a encierro y, si se guarda así, puede aparecer moho. El secado completo es la parte que más cuidamos." },
  { question: "¿Cómo recupero un acolchado con el relleno apelmazado?", answer: "A veces mejora con un lavado con espacio y un secado largo y parejo, que vuelve a separar el relleno. Si las fibras o las plumas ya están dañadas, no recupera todo el volumen: te lo decimos al revisarlo." },
  { question: "¿Dónde lavan acolchados en Mar del Plata?", answer: "En Aquabon, Gascón 2189. Lo lavamos en máquinas de 15 kg, lo secamos entero y te lo devolvemos doblado. Si estás en uno de los barrios donde retiramos, lo pasamos a buscar." },
  { question: "¿Cuánto cuesta lavar un acolchado?", answer: "Depende del tamaño, el relleno, el estado y si tiene manchas. Te pasamos importe y plazo antes de que lo dejes. En la guía de precio te contamos qué lo cambia." },
];

export const metadata: Metadata = {
  title: metaTitle, description: metaDescription, alternates: { canonical: path },
  openGraph: { title, description: metaDescription, type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-19", images: [{ url: image, width: 1400, height: 933, alt: "Revisión del relleno de un acolchado durante el secado para comprobar que no quede humedad" }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout title={title} description={lead} slug={slug} date="2026-11-19" readingTime="5 MIN DE LECTURA" cluster="Acolchados" image={image} service="acolchados">
    <p className="article-lead"><strong>Con espacio para que se mueva y con un secado completo, hasta el centro del relleno.</strong> En un lavarropas hogareño el acolchado suele entrar apretado: no se enjuaga bien, el relleno se amontona en una punta y tarda días en secar. Ahí aparece el olor a humedad. El tamaño de la máquina y el secado son los que deciden.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#por-que">Por qué se apelmaza el relleno</a></li><li><a href="#errores">Errores que lo arruinan</a></li><li><a href="#mdp">El problema del secado en Mar del Plata</a></li><li><a href="#aquabon">Cómo lo lavamos en Aquabon</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>

    <h2 id="por-que">Por qué se apelmaza el relleno de un acolchado</h2>
    <p>Un acolchado abriga porque su relleno, sea pluma o fibra sintética, guarda aire entre las fibras. Mientras ese aire está, el acolchado es liviano y esponjoso. Cuando el relleno se moja, pesa varias veces más, se junta en bloques y pierde el aire. Si se seca así, amontonado, queda duro, con zonas finas y zonas con bollos.</p>
    <p>Para que vuelva a separarse necesita dos cosas: lugar para moverse mientras se lava y se enjuaga, y un secado largo y parejo que llegue hasta el centro. Si cualquiera de las dos falla, el resultado es el mismo: un acolchado que abriga menos que antes. Son las dos cosas que cuidamos en el <Link href="/servicios/lavado-de-acolchados">lavado de acolchados en Mar del Plata</Link>.</p>
    <p>El otro riesgo es el que no se ve. La funda se seca en horas; el relleno puede seguir húmedo por dentro durante días. Esa humedad atrapada es la que genera olor a encierro y, si el acolchado se guarda así, manchas de moho.</p>

    <h2 id="errores">Errores que arruinan un acolchado al lavarlo</h2>
    <ol className="article-steps">
      <li><strong>Meterlo apretado en el tambor.</strong><span>Si el acolchado llena el lavarropas, no se lava: se amasa. El agua no circula, el jabón queda adentro del relleno y la máquina trabaja con más peso del que está pensada para mover.</span></li>
      <li><strong>Poner mucho jabón “para que quede bien limpio”.</strong><span>El exceso no se enjuaga en un relleno grueso. Queda pegado a las fibras, las apelmaza y después atrae polvo y olor.</span></li>
      <li><strong>Usar agua caliente o un programa fuerte.</strong><span>Según la etiqueta, el calor puede encoger la funda, dañar la fibra sintética o debilitar las costuras que mantienen el relleno en su lugar.</span></li>
      <li><strong>Secarlo doblado o colgado de una punta.</strong><span>El relleno mojado cae y se junta abajo. Se seca por fuera y queda un bloque húmedo adentro.</span></li>
      <li><strong>Guardarlo “casi seco”.</strong><span>Es la causa más común del acolchado que sale del placard con olor y manchas. Lo explicamos en <Link href="/blog/como-sacar-olor-a-humedad-de-un-acolchado">cómo sacar el olor a humedad de un acolchado</Link>.</span></li>
    </ol>
    <div className="article-callout"><strong>Antes que nada, la etiqueta</strong><p>Dice qué relleno tiene, qué temperatura tolera y si admite secadora. Si no la entendés, en <Link href="/blog/simbolos-de-lavado-de-un-acolchado">símbolos de lavado de un acolchado</Link> los explicamos uno por uno. Y si es de plumas, el secado es todavía más delicado: lo contamos en <Link href="/blog/como-lavar-un-acolchado-de-plumas">cómo lavar un acolchado de plumas</Link>.</p></div>

    <h2 id="mdp">El problema del secado en Mar del Plata</h2>
    <p>En una ciudad con humedad alta casi todo el año, secar un acolchado al aire es una apuesta. Un día de sol en la terraza no alcanza para un relleno grueso, y en un departamento sin balcón puede quedar húmedo varios días ocupando el living. Cuando cambia el viento y entra la niebla del mar, vuelve a tomar humedad.</p>
    <p>Por eso en primavera, cuando se guarda el acolchado de invierno, y en otoño, cuando se saca, es cuando más acolchados nos traen. Guardarlo limpio y bien seco es lo que hace que en marzo salga como lo dejaste.</p>

    <h2 id="aquabon">Cómo lavamos un acolchado en Aquabon</h2>
    <p>En Aquabon trabajamos con máquinas de 15 kg, para que el acolchado tenga el espacio que necesita.</p>
    <ul>
      <li><strong>Lo revisamos antes.</strong> Tamaño, relleno, etiqueta, costuras y manchas. Si hay una costura abierta o una mancha que necesita trabajo aparte, te lo decimos antes de lavar.</li>
      <li><strong>Lo lavamos con espacio.</strong> Para que el agua circule, el jabón se enjuague y el relleno no se amontone.</li>
      <li><strong>Lo secamos entero.</strong> Es la etapa que más miramos: comprobamos que el relleno esté seco por dentro, no solo la funda, antes de entregarlo.</li>
      <li><strong>Te lo devolvemos doblado.</strong> Listo para la cama o para guardar en el placard.</li>
      <li><strong>Sin promesas que no dependen de nosotros.</strong> Un relleno ya dañado o una mancha vieja no siempre se recuperan del todo, y te lo decimos al revisarlo.</li>
    </ul>
    <p>Si te preguntás cuándo toca, mirá <Link href="/blog/cada-cuanto-lavar-un-acolchado">cada cuánto lavar un acolchado</Link>. Y para saber qué cambia el precio, <Link href="/blog/cuanto-cuesta-lavar-un-acolchado">cuánto cuesta lavar un acolchado</Link>. Todas las guías del tema están en <Link href="/blog">Guías Aquabon</Link>.</p>

    <LocalCta service="acolchados" message={whatsapp}>Si estás en Mar del Plata, no hace falta que te pelees con el lavarropas ni que el acolchado ocupe el living tres días. Lo lavamos y lo secamos entero, y te pasamos importe y plazo antes de que lo dejes. Lo pasamos a buscar en <Link className="link" href="/lavanderia-playa-grande-mar-del-plata">Playa Grande</Link> y en los otros barrios donde retiramos.</LocalCta>

    <h2 id="preguntas">Preguntas frecuentes sobre lavar un acolchado</h2>
    {faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
