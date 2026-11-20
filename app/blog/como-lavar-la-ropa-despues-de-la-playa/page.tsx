import { guide } from "../../guides";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// AQB-028 del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx). Tema: Consejos para Mar del Plata.
// Ilustración editorial generada; no representa un caso real del local.
const illustration = guide("como-lavar-la-ropa-despues-de-la-playa");
const slug = "como-lavar-la-ropa-despues-de-la-playa";
const path = `/blog/${slug}`;
const title = "Ropa de playa: lo que la sal y la arena le hacen a tus prendas";
const lead = "Toallas ásperas, mallas que pierden color y un lavarropas lleno de arena. Lo que trae el bolso de playa además de recuerdos.";
const metaTitle = "Cómo lavar la ropa después de la playa | Aquabon";
const metaDescription = "Cómo lavar la ropa después de la playa: lo que la sal, la arena y el protector solar le hacen a tus prendas. Dejá la bolsa en Aquabon, Mar del Plata.";
const image = illustration.image;
const whatsapp = "Hola Aquabon, vuelvo de la playa y tengo __ (toallas, remeras, mallas). Son más o menos __ prendas. ¿Me pasan importe y plazo?";

const faqs = [
  { question: "¿Hay que enjuagar la ropa después de la playa antes de lavarla?", answer: "Sí, conviene sacarle la sal y la arena cuanto antes. La sal que se seca en la tela la endurece y ayuda a que pierda color, y la arena que entra al lavarropas raspa la ropa en cada vuelta." },
  { question: "¿La arena le hace mal al lavarropas?", answer: "Sí, puede. La arena que queda en bolsillos, toallas y costuras se junta en el tambor, el filtro y las gomas, y en cargas grandes de verano se acumula. Por eso conviene sacudir todo bien antes de lavarlo." },
  { question: "¿Cómo se lavan las toallas de playa para que no queden ásperas?", answer: "Sin sal y sin exceso de jabón ni de suavizante: los restos de producto y de sal son los que dejan la toalla dura y con menos absorción. Y si tienen manchas naranjas o amarillas, puede ser protector solar: no les pongas lavandina." },
  { question: "¿Lavan ropa de playa y toallas en Mar del Plata?", answer: "Sí. En Aquabon, Gascón 2189, recibimos la bolsa de la playa: separamos toallas, remeras y mallas, y te la devolvemos lavada, seca y doblada. Si estás en uno de los barrios donde retiramos, la pasamos a buscar." },
];

export const metadata: Metadata = {
  title: metaTitle, description: metaDescription, alternates: { canonical: path },
  openGraph: { title, description: metaDescription, type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-20", images: [{ url: image, width: 1400, height: 788, alt: illustration.alt }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout updated="2026-11-20" title={title} description={lead} slug={slug} date="2026-11-20" readingTime="5 MIN DE LECTURA" cluster="Mar del Plata" image={image} service="valet">
    <p className="article-lead"><strong>Cuanto antes, sin sal y sin arena.</strong> La sal que se seca en la tela la endurece y ayuda a que pierda color; la arena se mete en costuras y toallas y raspa la ropa, y el lavarropas, en cada vuelta. Lo que más la daña es el bolso cerrado hasta el otro día.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#por-que">Qué le hacen la sal y la arena</a></li><li><a href="#errores">Errores con la ropa de playa</a></li><li><a href="#mdp">Temporada en Mar del Plata</a></li><li><a href="#aquabon">Cómo la lavamos en Aquabon</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>

    <h2 id="por-que">Qué le hacen la sal y la arena a tu ropa</h2>
    <p><strong>La sal.</strong> El agua de mar se evapora y deja cristales de sal metidos en la fibra. La tela queda dura y áspera, sobre todo en toallas y remeras de algodón. Con el sol y los días, esa sal ayuda a que los colores se apaguen y que los elásticos de las mallas pierdan fuerza.</p>
    <p><strong>La arena.</strong> Es fina y se mete en todo: costuras, bolsillos, el rizo de las toallas, la malla de las zapatillas. Cada vez que la prenda se mueve, la arena raspa la fibra desde adentro. En el lavarropas hace lo mismo con toda la carga, y además se junta en el tambor, el filtro y las gomas.</p>
    <p><strong>El protector solar.</strong> Es grasa con filtros que, en algunas telas y con algunos productos, deja manchas que aparecen recién después de lavar. Si querés olvidarte de todo esto, en el <Link href="/servicios/valet-de-ropa">valet de ropa en Mar del Plata</Link> dejás la bolsa de la playa y te la devolvemos lavada y doblada.</p>

    <h2 id="errores">Errores con la ropa de playa que la arruinan</h2>
    <ol className="article-steps">
      <li><strong>Dejar el bolso cerrado hasta mañana.</strong><span>Toalla mojada, malla y remera juntas, con sal y calor: es el combo perfecto para el olor a humedad y para que un color se pase al otro.</span></li>
      <li><strong>Meter todo al lavarropas con arena.</strong><span>La arena raspa la carga entera y se acumula en la máquina. Las toallas salen ásperas y el filtro, lleno.</span></li>
      <li><strong>Mucho jabón y mucho suavizante.</strong><span>Con sal en la fibra, el exceso de producto no se enjuaga y deja las toallas duras y con menos absorción. Más producto no es más limpio.</span></li>
      <li><strong>Lavandina en las manchas raras.</strong><span>Esas manchas naranjas o amarillas en la toalla blanca pueden ser de protector solar. Con lavandina, a veces se oscurecen.</span></li>
      <li><strong>Secar las mallas al sol fuerte.</strong><span>El sol directo apaga los colores y castiga el elástico. Una malla que se seca todos los días al rayo del sol dura una temporada.</span></li>
    </ol>
    <div className="article-callout"><strong>Lo que conviene apenas volvés</strong><p>Abrí el bolso, sacudí todo afuera, separá las toallas mojadas y colgá las prendas a la sombra. Con eso solo ya evitás la mitad de los problemas.</p></div>

    <h2 id="mdp">Temporada en Mar del Plata: más ropa, menos tiempo</h2>
    <p>En verano la ropa de playa se multiplica: toallas para toda la familia, mallas, remeras, lonas, y si tenés un alquiler temporario, juegos completos que hay que dar vuelta entre huéspedes. Y la humedad no se va de vacaciones: lo que no se seca bien en el día termina con olor.</p>
    <p>Si en tu casa la ropa no se seca, en <Link href="/blog/como-secar-ropa-dentro-de-casa">cómo secar ropa dentro de casa sin olor a humedad</Link> te explicamos por qué. Si las manchas son de protector solar, arena o aceite, están en <Link href="/blog/como-sacar-manchas-dificiles-de-la-ropa">manchas difíciles</Link>. Y si alquilás, mirá <Link href="/blog/como-preparar-la-ropa-blanca-de-un-alquiler-temporario">cómo preparar la ropa blanca de un alquiler temporario</Link>.</p>

    <h2 id="aquabon">Cómo lavamos la ropa de playa en Aquabon</h2>
    <ul>
      <li><strong>Sacamos la arena antes.</strong> Para que no raspe la carga ni quede en las costuras.</li>
      <li><strong>Separamos por color y tejido.</strong> Toallas por un lado, mallas y prendas delicadas por otro, y los colores que pueden desteñir, aparte.</li>
      <li><strong>Revisamos las manchas antes de lavar.</strong> Si hay protector solar u otra mancha, se trata antes; si no va a salir del todo, te lo decimos.</li>
      <li><strong>Lavamos y secamos bien.</strong> Sin exceso de producto, para que las toallas no queden duras, y secas por completo, sin olor a humedad.</li>
      <li><strong>Te la devolvemos doblada.</strong> Lista para el bolso de mañana.</li>
    </ul>
    <p>Todas las guías pensadas para la ciudad están en <Link href="/blog/tema/consejos-mar-del-plata">consejos para cuidar la ropa en Mar del Plata</Link>.</p>

    <LocalCta service="valet" message={whatsapp}>Volvés de la playa, dejás la bolsa en Aquabon y te olvidás. Te pasamos importe y plazo antes de que la dejes, y si estás en <Link className="link" href="/lavanderia-punta-mogotes-mar-del-plata">Punta Mogotes</Link> o en otro de los barrios donde retiramos, la pasamos a buscar.</LocalCta>

    <h2 id="preguntas">Preguntas frecuentes sobre la ropa de playa</h2>
    {faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
