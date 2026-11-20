import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

// AQB-020 del plan de contenidos (docs/AquaBon_Plan_Contenidos.xlsx). Tema: Acolchados y blanquería (etiqueta: Consejos para Mar del Plata).
// TODO(joaco): foto propia para reemplazar la imagen de stock: placard abierto con un acolchado doblado,
// limpio y seco, en una funda de tela, listo para guardar.
const slug = "como-guardar-acolchados-en-verano";
const path = `/blog/${slug}`;
const title = "Cómo guardar el acolchado en verano para que no salga con hongos";
const lead = "Lo que guardás en diciembre es lo que sacás en marzo. Si el acolchado entra al placard sucio o con humedad, sale con olor, manchas y menos volumen.";
const metaTitle = "Cómo guardar el acolchado en verano sin hongos | Aquabon";
const metaDescription = "Cómo guardar acolchados en verano sin olor a humedad ni hongos: qué evitar antes de cerrar el placard. Lo lavamos y secamos en Aquabon, Mar del Plata.";
const image = "/blog/comprobar-humedad-acolchado.webp";
const whatsapp = "Hola Aquabon, quiero lavar el acolchado antes de guardarlo. Es de __ plazas y el relleno es __. ¿Me lo pueden pasar a buscar por __ (barrio)?";

const faqs = [
  { question: "¿Hay que lavar el acolchado antes de guardarlo?", answer: "Sí. Durante el invierno acumula sudor, polvo y restos de piel que no se ven. Guardado así, en un placard cerrado, eso es lo que después aparece como olor, manchas amarillas y relleno apagado." },
  { question: "¿Conviene guardar el acolchado en bolsa al vacío?", answer: "Depende del relleno. Al vacío ocupa menos lugar, pero si entra con algo de humedad la encierra, y un relleno de plumas comprimido varios meses puede tardar en recuperar el volumen. Para la mayoría, una funda de tela que respire es más segura." },
  { question: "¿Cómo saco el olor a humedad de un acolchado guardado?", answer: "Depende de si es olor a encierro o humedad que llegó al relleno. Si hay manchas o puntos oscuros, puede haber moho: conviene que lo revisemos antes de lavarlo para decirte qué se puede recuperar." },
  { question: "¿Dónde lavan acolchados antes de guardarlos en Mar del Plata?", answer: "En Aquabon, Gascón 2189. Lo lavamos en máquinas de 15 kg, lo secamos hasta el centro del relleno y te lo devolvemos doblado. Si estás en uno de los barrios donde retiramos, lo pasamos a buscar." },
];

export const metadata: Metadata = {
  title: metaTitle, description: metaDescription, alternates: { canonical: path },
  openGraph: { title, description: metaDescription, type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-20", images: [{ url: image, width: 1400, height: 788, alt: "Comprobación de humedad en el relleno de un acolchado antes de guardarlo" }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout title={title} description={lead} slug={slug} date="2026-11-20" readingTime="5 MIN DE LECTURA" cluster="Acolchados" image={image} service="acolchados">
    <p className="article-lead"><strong>Limpio, seco hasta el centro del relleno y en una funda que respire.</strong> Guardar el acolchado sin lavar le deja sudor, polvo y ácaros encerrados toda la temporada, y si entra con algo de humedad, aparece el olor a encierro y el moho. En marzo sale amarillo, con manchas y con menos volumen que cuando lo guardaste.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#por-que">Qué le pasa en el placard</a></li><li><a href="#errores">Errores al guardarlo</a></li><li><a href="#mdp">Placares de Mar del Plata</a></li><li><a href="#aquabon">Cómo lo dejamos listo</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>

    <h2 id="por-que">Qué le pasa al acolchado en el placard durante el verano</h2>
    <p>Un acolchado de invierno trabaja todas las noches: absorbe la transpiración, junta polvo y restos de piel, y en muchas casas también pelo de mascota. Mientras está en la cama, se ventila un poco cada día. Cuando lo doblás y cerrás la puerta del placard, todo eso queda encerrado entre cuatro y seis meses.</p>
    <p>Ahí empieza el problema. La suciedad orgánica atrae ácaros y, con la humedad del ambiente, se oxida: por eso tantos acolchados salen con manchas amarillas que nadie vio entrar. Si además el relleno no estaba seco del todo, aparecen el olor a encierro y, en el peor caso, los puntos negros del moho. Por eso, antes del cambio de estación, conviene pasar por un <Link href="/servicios/lavado-de-acolchados">lavado de acolchados en Mar del Plata</Link> que lo deje limpio y seco por dentro.</p>
    <p>El relleno también sufre. Comprimido y con humedad, la fibra sintética se apelmaza y la pluma pierde volumen. Lo notás cuando lo sacás: abriga menos y tiene bollos.</p>

    <h2 id="errores">Errores al guardar el acolchado que lo arruinan</h2>
    <ol className="article-steps">
      <li><strong>Guardarlo sin lavar “porque se usó poco”.</strong><span>La suciedad que lo daña no se ve. Lo que no se nota en noviembre aparece en marzo como mancha amarilla y olor.</span></li>
      <li><strong>Guardarlo “casi seco”.</strong><span>La funda se seca en horas; el relleno puede tardar días. Si entra al placard con humedad adentro, el moho tiene toda la temporada para crecer.</span></li>
      <li><strong>Bolsa de plástico cerrada.</strong><span>No deja salir la humedad que tenga el acolchado ni la que entre del ambiente. Se forma condensación y el olor queda encerrado con él.</span></li>
      <li><strong>Comprimirlo al máximo.</strong><span>Las bolsas al vacío ahorran lugar, pero varios meses de presión pueden aplastar el relleno, sobre todo el de plumas, y cuesta que recupere el volumen.</span></li>
      <li><strong>El estante de abajo, contra la pared.</strong><span>En muchos departamentos esa es la zona más fría y húmeda del placard. Es donde primero aparece el olor.</span></li>
    </ol>
    <div className="article-callout"><strong>La regla de diciembre</strong><p>Si dudás de si está seco, no está seco. Un acolchado listo para guardar no tiene ninguna zona fría ni pesada al apretarlo, ni en el centro ni en las esquinas.</p></div>

    <h2 id="mdp">El problema de los placares en Mar del Plata</h2>
    <p>Con la humedad de la costa, el placard no es un lugar neutro: es un ambiente cerrado que guarda la humedad del aire durante meses. En los departamentos cerca del mar, en las paredes que dan al sur y en las casas que se cierran en verano para alquilar, el riesgo es todavía mayor.</p>
    <p>Por eso acá un descuido se nota: un acolchado guardado con algo de humedad puede salir con puntos de moho. Si ya te pasó, en la guía de <Link href="/blog/como-sacar-olor-a-humedad-de-un-acolchado">cómo sacar el olor a humedad de un acolchado</Link> te contamos cómo distinguir el olor a encierro del moho. Y para el resto de la ropa de abrigo, mirá <Link href="/blog/como-guardar-la-ropa-de-invierno">cómo guardar la ropa de invierno</Link>.</p>

    <h2 id="aquabon">Cómo dejamos tu acolchado listo para guardar</h2>
    <ul>
      <li><strong>Lo revisamos antes.</strong> Relleno, etiqueta, costuras y manchas. Si hay una mancha que necesita trabajo aparte o una costura abierta, te lo decimos antes de lavar.</li>
      <li><strong>Lo lavamos con espacio.</strong> En máquinas de 15 kg, para que se enjuague bien y el relleno no quede con jabón. Lo explicamos en <Link href="/blog/como-lavar-un-acolchado">cómo lavar un acolchado sin que se apelmace el relleno</Link>.</li>
      <li><strong>Lo secamos hasta el centro.</strong> Es lo que más miramos antes de entregar, porque es lo que decide si en marzo sale bien.</li>
      <li><strong>Te lo devolvemos doblado.</strong> Listo para la funda y el placard.</li>
      <li><strong>Sin promesas de más.</strong> Si un acolchado ya tiene moho o manchas viejas, no siempre salen del todo, y te lo decimos al revisarlo.</li>
    </ul>
    <p>Todas las guías del tema están en <Link href="/blog/tema/acolchados">acolchados y ropa blanca</Link>.</p>

    <LocalCta service="acolchados" message={whatsapp}>Si estás en Mar del Plata, lavalo antes de guardarlo y olvidate hasta el invierno. Lo pasamos a buscar en <Link className="link" href="/lavanderia-stella-maris-mar-del-plata">Stella Maris</Link> y en los otros barrios donde retiramos, y te pasamos importe y plazo antes.</LocalCta>

    <h2 id="preguntas">Preguntas frecuentes sobre guardar el acolchado</h2>
    {faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
