import type { Metadata } from "next";
import Image from "../../Img";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import LocalCta from "../LocalCta";

const title = "¿Cuándo llevar la campera a la tintorería?";
const description = "Las cuatro señales de que un abrigo necesita tintorería, por qué conviene antes de guardarlo y qué revisamos en una campera de pluma o un tapado de paño.";
const path = "/blog/cuando-llevar-la-campera-a-la-tintoreria";
const faqs = [
  { question: "¿Cuándo conviene llevar la campera a la tintorería?", answer: "Al final del invierno, antes de guardarla, y en cuanto aparezca una mancha. Guardar un abrigo sucio es lo que hace que al año siguiente aparezca una marca amarilla en el cuello o un olor a encierro que no se va ventilando." },
  { question: "¿Cada cuánto hay que limpiar un abrigo?", answer: "Una vez por temporada alcanza para un tapado de uso normal; si lo usás todos los días o fumás, puede necesitar más. Entre usos, cepillado y ventilación resuelven bastante." },
  { question: "¿Se puede lavar una campera de pluma en casa?", answer: "Algunas lo admiten según su etiqueta, pero el riesgo no está en el lavado: está en el secado. Si queda humedad en el relleno, la pluma se apelmaza, pierde volumen y aparece olor." },
  { question: "¿Y un tapado de paño o de lana?", answer: "Casi siempre pide cuidado profesional. El agua puede encoger la lana y deformar la estructura: entretelas, hombreras y forro no se comportan como el tejido exterior." },
  { question: "¿La tintorería saca el olor a humo o a encierro?", answer: "Muchas veces sí. Contanos de dónde viene el olor y hace cuánto está: humo de cigarrillo, de cocina o encierro de placard no se tratan igual, y el resultado depende de cuánto penetró en el tejido y el relleno." },
  { question: "¿Qué pasa si mi campera no tiene etiqueta?", answer: "La revisamos en el mostrador: tejido, forro, relleno, costuras y accesorios. Sin etiqueta somos más conservadores, y te decimos qué se puede hacer y qué no antes de aceptar la prenda." },
];

export const metadata: Metadata = {
  title: "Cuándo llevar la campera a la tintorería | Aquabon",
  description: "Las señales de que tu abrigo necesita tintorería y por qué conviene antes de guardarlo. Camperas y tapados en Aquabon, Mar del Plata.",
  alternates: { canonical: path },
  openGraph: { title, description: "Las señales de que tu abrigo necesita tintorería y por qué conviene antes de guardarlo. Aquabon, Mar del Plata.", type: "article", locale: "es_AR", url: path, publishedTime: "2026-11-08", images: [{ url: "/blog/revisar-tapado-etiqueta-forro.webp", width: 1400, height: 788, alt: "Revisión del forro y la etiqueta de un tapado azul antes de definir su limpieza" }] },
};

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <ArticleLayout title={title} description={description} slug="cuando-llevar-la-campera-a-la-tintoreria" date="2026-11-08" readingTime="7 MIN DE LECTURA" cluster="Tapados" image="/blog/revisar-tapado-etiqueta-forro.webp" service="camperas">
    <p className="article-lead"><strong>El mejor momento es el final del invierno, antes de guardarla.</strong> Un abrigo que se guarda sucio se guarda con transpiración en el cuello, polvo en el tejido y, si vivís cerca del mar, salitre. Nada de eso se ve en abril; en junio del año siguiente aparece como una marca amarilla, un olor a encierro o una zona del tejido más rígida. Si además tiene una mancha, no esperes: cuanto más vieja, menos margen hay. En Mar del Plata lo vemos todos los años, al abrir los placares.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#senales">Las cuatro señales</a></li><li><a href="#guardado">Antes de guardarla</a></li><li><a href="#tipos">Pluma, inflable o paño</a></li><li><a href="#entre-usos">Qué podés hacer entre usos</a></li><li><a href="#mdp">Humedad y salitre</a></li><li><a href="#llevarla">Cómo llevarla</a></li></ol></nav>

    <h2 id="senales">Cuatro señales de que el abrigo necesita tintorería</h2>
    <div className="frequency-grid">
      <article><strong>Una mancha, cualquiera</strong><p>Grasa de comida, maquillaje en el cuello, vino, barro. En un abrigo con forro no alcanza con limpiar la superficie: hay que ver si pasó al relleno o al forro.</p></article>
      <article><strong>Cuello y puños más oscuros</strong><p>Es la zona que toca la piel. Se acumulan transpiración, crema y desodorante, y con el tiempo endurecen el tejido además de oscurecerlo.</p></article>
      <article><strong>Olor que no se va ventilando</strong><p>Humo, encierro o humedad. Si lo colgaste dos días afuera y sigue ahí, el olor está en la fibra o en el relleno, no en la superficie.</p></article>
      <article><strong>Abriga menos que antes</strong><p>En una campera de pluma suele ser relleno apelmazado por humedad, no relleno perdido. Se puede trabajar, pero conviene verlo antes de otra temporada.</p></article>
    </div>
    <p>Si aparece cualquiera de las cuatro, el momento es ahora y no al final de la temporada que viene. Y si no aparece ninguna pero vas a guardar el abrigo seis meses, igual conviene limpiarlo antes: es más barato que resolver la marca amarilla después.</p>

    <h2 id="guardado">Por qué conviene antes de guardarla, no después</h2>
    <p>Hay una razón química y una práctica. La química: la transpiración y el azúcar de las bebidas se oxidan con el tiempo y el calor, y una marca que hoy no se ve mañana es amarilla y está fijada. Lo mismo hace el protector solar en una prenda de media estación. La práctica: las polillas no comen el tejido limpio, comen el resto orgánico que quedó en él, así que una prenda de lana guardada sucia es una invitación.</p>
    <p>Guardar el abrigo limpio y seco, en una percha ancha o doblado sin presión, es lo que hace que el año siguiente lo saques y lo uses sin tener que resolver nada. Para el resto del placard, mirá <Link href="/blog/como-guardar-la-ropa-de-invierno">cómo guardar la ropa de invierno sin que se arruine</Link>.</p>
    <figure className="article-image"><Image src="/blog/revisar-tapado-etiqueta-forro.webp" alt="Revisión del forro y la etiqueta de cuidado de un tapado azul de paño antes de definir su limpieza" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px" /><figcaption>En un abrigo, el forro y la etiqueta dicen tanto como el tejido de afuera: la estructura interna define el proceso.</figcaption></figure>

    <h2 id="tipos">Campera de pluma, inflable o tapado de paño: no es lo mismo</h2>
    <p>La etiqueta a veces habla solo del tejido exterior, pero el proceso lo define la prenda completa: forro, relleno, entretelas, cierres, botones, capucha y piel desmontable.</p>
    <ul>
      <li><strong>Campera de pluma.</strong> El secado es la etapa decisiva. Si queda humedad entre los canutos, la pluma se apelmaza y aparece olor; si hay una costura abierta, el relleno se escapa en el lavado y hay que resolverla primero.</li>
      <li><strong>Inflable con relleno sintético.</strong> El vellón se puede correr y juntarse en un extremo. Necesita movimiento y espacio para que el relleno vuelva a distribuirse.</li>
      <li><strong>Tapado de paño o lana.</strong> Casi siempre cuidado profesional: el agua encoge la lana y deforma hombreras y entretelas. Un tapado deformado no vuelve a su forma con planchado.</li>
      <li><strong>Rompevientos e impermeables.</strong> Tienen tratamientos de superficie que algunos procesos remueven. Si la prenda repele agua, decilo al consultar.</li>
    </ul>
    <p>Para los abrigos estructurados, la guía de <Link href="/blog/como-limpiar-un-tapado-sin-danarlo">cómo limpiar un tapado sin dañarlo</Link> entra en más detalle, y la de <Link href="/blog/que-es-la-limpieza-en-seco">qué es la limpieza en seco</Link> explica qué hace el proceso que suelen pedir.</p>

    <h2 id="entre-usos">Qué podés hacer entre usos, sin tintorería</h2>
    <p>No todo abrigo necesita tratamiento cada vez que se usa. Entre usos alcanza con tres cosas: cepillarlo en el sentido del pelo para sacar polvo, colgarlo en percha ancha para que mantenga los hombros, y ventilarlo unas horas si estuvo en un lugar con humo o cocina. Lo que conviene evitar es la plancha directa sobre el paño, el secador de pelo para secar una zona mojada y los quitamanchas caseros sobre el forro.</p>
    <p>Si se mojó con lluvia, dejalo secar a temperatura ambiente, en percha y lejos de la estufa. El calor directo sobre un abrigo mojado marca el tejido y puede encoger el forro de forma despareja.</p>

    <h2 id="mdp">En Mar del Plata: humedad, salitre y placares cerrados</h2>
    <p>Acá el abrigo pasa seis meses guardado en una ciudad con humedad alta y aire con sal. Esa combinación produce dos cosas: olor a encierro en prendas que estaban limpias, y tejido más rígido al tacto por el salitre depositado. En departamentos cerca del mar, un placard que no se abre en todo el verano es el peor lugar para un tapado de lana.</p>
    <p>Dos medidas simples ayudan: guardarlo bien seco —no apenas seco— y abrir el placard de vez en cuando para que circule el aire. Si ya apareció olor o moho en el forro, mostranoslo antes de intentar nada: el moho que atacó la fibra no se resuelve igual que un olor a encierro, y conviene saber con cuál de los dos estás tratando.</p>

    <h2 id="llevarla">Cómo llevarla y qué contarnos</h2>
    <ul>
      <li>No cortes la etiqueta de cuidado: es la primera cosa que miramos.</li>
      <li>Vaciá los bolsillos y avisá si falta un botón o hay una costura abierta.</li>
      <li>Señalá cada mancha y contanos qué la produjo y cuándo.</li>
      <li>Decinos si le aplicaste agua, calor, alcohol o algún quitamanchas: cambia lo que se puede intentar.</li>
      <li>Si tiene piel o capucha desmontable, llevala también.</li>
    </ul>

    <LocalCta service="camperas" />

    <h2>Preguntas frecuentes</h2>{faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado profesional</a>, <a href="https://www.cinet-online.com/professional-textile-care/" target="_blank" rel="noreferrer">CINET: cuidado textil profesional</a> y <a href="https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule" target="_blank" rel="noreferrer">FTC: instrucciones para la prenda completa</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </ArticleLayout>;
}
