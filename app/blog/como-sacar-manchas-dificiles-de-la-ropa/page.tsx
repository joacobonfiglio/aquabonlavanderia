import type { Metadata } from "next";
import Image from "../../Img";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// 07/11/2026: fusiona las guías de manchas de sangre, vino y aceite. Las tres competían entre sí,
// estaban en posición 28 a 57 y no traían clics. Las URLs viejas redirigen acá (next.config.ts).
const title = "Cómo sacar manchas difíciles de la ropa";
const description = "Vino, aceite, sangre, transpiración y protector solar: qué hacer en los primeros minutos, cómo tratar una mancha seca y cuándo conviene no insistir en casa.";
const path = "/blog/como-sacar-manchas-dificiles-de-la-ropa";
const faqs = [
  { question: "¿Cuál es la regla que sirve para cualquier mancha?", answer: "Actuar rápido, absorber en lugar de frotar, usar agua fría y no secar con calor hasta ver el resultado. El calor es lo que fija una mancha y la vuelve permanente." },
  { question: "¿Agua fría o caliente?", answer: "Fría, como regla. La sangre, la transpiración y la leche son manchas de origen proteico y el calor las coagula dentro de la fibra. En el vino y el protector solar el calor también fija el color. La temperatura del lavado final la define la etiqueta." },
  { question: "¿Por qué no hay que frotar?", answer: "Frotar extiende la mancha hacia los costados, la empuja más adentro de la fibra y puede dejar una zona desgastada o más clara que el resto. Conviene absorber desde arriba con un paño blanco y enjuagar desde el reverso." },
  { question: "¿Sirve la sal, el agua con soda o el talco?", answer: "La sal y el talco absorben líquido recién derramado, y el talco o la maicena ayudan con el aceite fresco. No quitan el color de una mancha de vino ya instalada. El agua con soda hace poco más que el agua fría." },
  { question: "¿Puedo usar lavandina o agua oxigenada?", answer: "No como regla. Pueden abrir el color y dañar la fibra, y en una prenda de color el remedio queda peor que la mancha. Usalas solo si la etiqueta y el envase lo permiten, probando antes en una costura interior, y nunca mezcles productos." },
  { question: "¿Una mancha vieja todavía sale?", answer: "A veces, y a veces no. Depende del origen, de cuánto tiempo tiene, del tejido y de lo que se le haya aplicado antes. Preferimos decírtelo antes de aceptar la prenda en lugar de prometerte un resultado." },
  { question: "¿Cuándo conviene no intentarlo en casa?", answer: "Cuando la etiqueta marca cuidado profesional, cuando la prenda es de lana o seda, tiene forro, estructura o adornos, cuando ya pasó por calor, o cuando es una prenda que te importa de verdad." },
];

export const metadata: Metadata = {
  title: "Cómo sacar manchas difíciles de la ropa | Aquabon",
  description: "Vino, aceite, sangre y protector solar: qué hacer en los primeros minutos y cuándo conviene tintorería. Aquabon, Gascón 2189, Mar del Plata.",
  alternates: { canonical: path },
  openGraph: { title, description: "Vino, aceite, sangre y protector solar: qué hacer en los primeros minutos y cuándo conviene tintorería. Aquabon, Mar del Plata.", type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-07", images: [{ url: "/blog/tratar-mancha-vino-ropa.webp", width: 1400, height: 788, alt: "Paño blanco absorbiendo una mancha fresca de vino en una prenda clara" }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout title={title} description={description} slug="como-sacar-manchas-dificiles-de-la-ropa" date="2026-11-07" readingTime="9 MIN DE LECTURA" cluster="Manchas" image="/blog/tratar-mancha-vino-ropa.webp" service="tintoreria">
    <p className="article-lead"><strong>Lo que define si una mancha sale no es el producto que uses: es lo que hacés en los primeros minutos y, sobre todo, el calor que evitás.</strong> Absorbé en lugar de frotar, usá agua fría y no la seques con calor hasta haber revisado el resultado. Una mancha que pasó por secadora o plancha suele quedar para siempre.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#primeros-minutos">Los primeros minutos</a></li><li><a href="#vino">Vino</a></li><li><a href="#aceite">Aceite y grasa</a></li><li><a href="#sangre">Sangre</a></li><li><a href="#mar-del-plata">Las manchas de acá: arena, salitre y protector solar</a></li><li><a href="#secas">Manchas secas</a></li><li><a href="#errores">Errores que empeoran todo</a></li></ol></nav>

    <h2 id="primeros-minutos">Los primeros minutos: lo mismo para casi todas</h2>
    <p>Antes de preguntarte qué producto usar, hay cuatro movimientos que sirven para el vino, el aceite, la sangre, el café y la transpiración. Son los que más resultado dan y los que casi nadie hace, porque el impulso natural es frotar con lo primero que haya a mano.</p>
    <ol className="article-steps">
      <li><strong>Absorbé, no frotes.</strong><span>Apoyá un paño blanco o papel absorbente sobre la mancha y presioná. El paño tiene que ser blanco: uno de color puede transferir tinte a tu prenda mojada.</span></li>
      <li><strong>Enjuagá desde el reverso con agua fría.</strong><span>El agua empuja la mancha hacia afuera por donde entró, en lugar de hundirla más. Si la enjuagás de frente, la estás metiendo a través del tejido.</span></li>
      <li><strong>Mirá la etiqueta antes de aplicar cualquier cosa.</strong><span>Si hay un círculo —cuidado profesional— o la prenda es de lana o seda, pará acá. Un quitamanchas en una prenda que no lo admite puede abrir el color de forma irreversible.</span></li>
      <li><strong>No la seques con calor hasta revisar.</strong><span>Ni secadora, ni plancha, ni estufa, ni sol fuerte. Si al mojarla todavía se ve la marca, repetí el tratamiento. El calor es el paso que vuelve permanente lo que todavía tenía solución.</span></li>
    </ol>
    <div className="article-callout"><strong>La idea clave</strong><p>Una mancha húmeda y sin tratar todavía tiene chances. Una mancha que pasó por calor, o que recibió tres productos distintos, casi siempre pierde esas chances.</p></div>
    <figure className="article-image"><Image src="/blog/tratar-mancha-vino-ropa.webp" alt="Paño blanco absorbiendo por presión una mancha fresca de vino en una prenda clara, sin frotar" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px" /><figcaption>Absorber por presión con un paño blanco, sin frotar, es lo primero y lo que más cambia el resultado.</figcaption></figure>

    <h2 id="vino">Manchas de vino</h2>
    <p>El vino tinto tiene color y azúcar. El color es lo que ves en el momento; el azúcar es lo que, meses después, aparece como una marca amarilla en una prenda que vos creías limpia. Por eso una mancha de vino que ya no se ve igual necesita lavado: si la guardás, vuelve.</p>
    <p>Apenas se derrama, absorbé con un paño blanco y enjuagá desde el reverso con agua fría abundante. Si tenés agua con soda, sirve, pero no hace magia: lo que funciona es el agua fría y la cantidad. La sal absorbe líquido mientras está mojado, aunque no quita el color ya fijado; conviene retirarla y enjuagar, no dejarla secando encima.</p>
    <p>Lo que no conviene: vino blanco sobre tinto, lavandina en prendas de color, agua caliente, ni secar al sol para “ver si se va”. En vino sobre lino, seda, lana o una prenda con forro, lo razonable es no insistir y consultar.</p>

    <h2 id="aceite">Manchas de aceite y grasa</h2>
    <p>El aceite no se lleva con agua: el agua lo rodea y no lo levanta. Por eso una mancha de aceite enjuagada parece que desaparece mientras está mojada y reaparece, más oscura y con bordes, cuando la prenda se seca.</p>
    <p>Con la mancha fresca, retirá primero el exceso con una cuchara o el borde de un papel, sin esparcir. Después cubrila con un absorbente en polvo —maicena, talco o bicarbonato— y dejalo actuar un rato: el polvo chupa la grasa que todavía está en superficie. Lo retirás, y recién entonces aplicás una gota de detergente de lavar los platos o un quitamanchas apto, trabajándolo con el dedo desde el reverso.</p>
    <p>La trampa del aceite es el secado. Si lavás y secás sin revisar, el calor termina de fijar la grasa que quedó y la mancha se vuelve casi definitiva. Revisá la zona con la prenda húmeda, contra la luz: si todavía se ve el halo, repetí antes de secar.</p>
    <figure className="article-image"><Image src="/blog/tratar-mancha-aceite-ropa.webp" alt="Tratamiento de una mancha de aceite en una camisa clara con un paño absorbente, sin frotar el tejido" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px" /><figcaption>En el aceite, el absorbente en polvo va antes que cualquier líquido: primero se levanta la grasa de superficie.</figcaption></figure>

    <h2 id="sangre">Manchas de sangre</h2>
    <p>La sangre es una mancha proteica, como la transpiración o la leche, y las proteínas coagulan con el calor. Eso hace que el error más común —enjuagar con agua tibia o caliente porque “limpia mejor”— sea justo el que la fija dentro de la fibra.</p>
    <p>Con la mancha fresca: agua fría, desde el reverso, cuanto antes. Presioná con un paño blanco, no frotes, y si la prenda admite agua podés dejarla en remojo en agua fría un rato. Si necesita más, un quitamanchas enzimático apto para el tejido es el producto indicado para este tipo de mancha, siguiendo lo que dice el envase.</p>
    <p>Con la mancha seca hay menos margen, pero todavía hay: remojo prolongado en agua fría y enzimas pueden levantarla en más de un ciclo. Lo que no corresponde es pasar a agua oxigenada o lavandina por impaciencia en una prenda de color.</p>

    <h2 id="mar-del-plata">Las manchas de acá: arena, salitre y protector solar</h2>
    <p>En Mar del Plata hay tres marcas que no aparecen en las guías generales y que vemos todo el verano en el mostrador.</p>
    <div className="frequency-grid">
      <article><strong>Protector solar</strong><p>Es la peor de las tres, y la que más nos traen de las zonas de playa. Deja una marca amarilla en toallas y ropa blanca que se fija con el calor del secado. Si una toalla tiene protector, no la seques: separala y lavala antes.</p></article>
      <article><strong>Arena</strong><p>No mancha, raya. Metida en el tambor con la prenda, la arena actúa como abrasivo sobre el tejido y la zona queda desgastada. Sacudí bien antes de guardar la pieza en la bolsa.</p></article>
      <article><strong>Salitre y humedad</strong><p>No deja marca pero sí olor y, con el tiempo, tejido rígido. Una prenda guardada húmeda en un placard cerca del mar vuelve con olor a encierro aunque esté limpia.</p></article>
      <article><strong>Transpiración</strong><p>Cuello y axilas de camisas y remeras. La marca amarilla no es suciedad: es transpiración y desodorante oxidados, y el secado con calor la endurece.</p></article>
    </div>
    <p>Para el olor a humedad de piezas grandes, mirá la guía de <Link href="/blog/como-sacar-olor-a-humedad-de-un-acolchado">cómo sacar el olor a humedad de un acolchado</Link>; para la marca de las axilas, la de <Link href="/blog/como-sacar-manchas-de-transpiracion">manchas de transpiración</Link>.</p>

    <h2 id="secas">Qué hacer con una mancha que ya está seca</h2>
    <p>Una mancha seca no es una mancha perdida, pero cambia el enfoque: hay que rehidratarla antes de tratarla. Remojo en agua fría, el tiempo que la prenda tolere, y después el tratamiento que corresponda al origen —enzimas para proteínas, absorbente y detergente para grasa, agua abundante para azúcares—. Casi siempre lleva más de un intento.</p>
    <p>Lo importante es qué pasó en el medio. Si la prenda estuvo guardada meses, si pasó por secadora o plancha, o si ya recibió tres productos distintos, decilo cuando consultes: cambia por completo lo que se puede intentar. Una mancha tratada con lavandina en una prenda de color no es un problema de mancha, es un problema de color abierto, y se resuelve de otra manera —a veces con un <Link href="/servicios/tenido-de-prendas">teñido parejo</Link>—.</p>

    <h2 id="errores">Cinco errores que empeoran casi cualquier mancha</h2>
    <ul>
      <li>Frotar con fuerza: extiende la mancha y desgasta el tejido.</li>
      <li>Usar agua caliente en sangre, transpiración o leche: coagula la proteína dentro de la fibra.</li>
      <li>Secar con calor antes de revisar: fija lo que quedaba y cierra la puerta.</li>
      <li>Mezclar productos o encadenar remedios caseros: además de inútil, puede ser peligroso y abre el color.</li>
      <li>Guardar la prenda “para después”: el tiempo juega en contra de todas las manchas, sin excepción.</li>
    </ul>
    <p>Y uno más, que no es un error de técnica: insistir con una prenda que te importa. Si es el saco del trabajo, el vestido de una fiesta o una prenda de lana, el intento número cuatro en casa suele costar más que haber consultado el primer día. Para decidir, mirá <Link href="/blog/que-prendas-conviene-llevar-a-la-tintoreria">qué prendas conviene llevar a la tintorería</Link>.</p>

    <LocalCta service="tintoreria">
      Si estás en Mar del Plata, traenos la prenda antes de intentar nada más y contanos qué originó la mancha, cuándo pasó y qué le aplicaste. Revisamos tejido, forro y estado, y te decimos qué se puede hacer y hasta dónde: no vas a escuchar que sale todo si no sale todo.
    </LocalCta>

    <h2>Preguntas frecuentes</h2>{faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado</a>, <a href="https://www.cinet-online.com/professional-textile-care/" target="_blank" rel="noreferrer">CINET: cuidado textil profesional</a> y <a href="https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule" target="_blank" rel="noreferrer">FTC: instrucciones para la prenda completa</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
