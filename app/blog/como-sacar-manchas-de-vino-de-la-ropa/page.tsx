import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo sacar manchas de vino de la ropa";
const description="Qué hacer apenas se derrama vino, cómo tratar una mancha seca y qué cuidados cambian según el tejido y la etiqueta.";
const path="/blog/como-sacar-manchas-de-vino-de-la-ropa";
const faqs=[
  {question:"¿Qué hago apenas cae vino sobre la ropa?",answer:"Absorbé el exceso presionando con un paño blanco limpio o papel, sin frotar. Después revisá la etiqueta y, si la prenda admite lavado doméstico, enjuagá o humedecé la zona con agua fría antes de pretratar."},
  {question:"¿Conviene poner sal sobre una mancha de vino?",answer:"La sal puede absorber parte del líquido, pero no es un tratamiento universal y sus granos pueden castigar tejidos delicados. Es más seguro retirar el exceso con un paño limpio y seguir la etiqueta y las instrucciones de un quitamanchas apto para la prenda."},
  {question:"¿Puedo usar agua oxigenada o lavandina?",answer:"No de forma general. Ambos productos pueden alterar colores o fibras. Usalos únicamente cuando la etiqueta y el producto indiquen que son compatibles, respetando dosis y prueba previa; nunca mezcles lavandina con otros limpiadores."},
  {question:"¿Cómo tratar una mancha de vino que ya se secó?",answer:"Aplicá un pretratamiento compatible con el tejido, respetá el tiempo del envase y lavá según la etiqueta. Revisá el resultado antes de secar o planchar y repetí el proceso si todavía queda pigmento."},
  {question:"¿Cuándo conviene llevar la prenda a tintorería?",answer:"Cuando la etiqueta indica cuidado profesional, la prenda es de lana, seda, cuero o gamuza, tiene forro o estructura, destiñe, o la mancha ya recibió calor o productos caseros."}
];

export const metadata:Metadata={
  title:"Cómo sacar manchas de vino de la ropa | Aquabon",
  description:"Cómo sacar manchas de vino de la ropa y qué evitar según el tejido. Consultá lavado y recepción de tintorería en Aquabon, Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description:"Cómo sacar manchas de vino de la ropa y qué evitar según el tejido. Consultá lavado y recepción de tintorería en Aquabon, Mar del Plata.",type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-03",images:[{url:"/blog/tratar-mancha-vino-ropa.webp",width:1400,height:788,alt:"Paño blanco absorbiendo una mancha de vino sobre una prenda clara antes del lavado"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-sacar-manchas-de-vino-de-la-ropa" date="2026-10-03" readingTime="7 MIN DE LECTURA" cluster="Manchas" image="/blog/tratar-mancha-vino-ropa.webp" service="tintoreria">
    <p className="article-lead"><strong>Para una mancha fresca, la prioridad es absorber sin frotar.</strong> Después hay que identificar el tejido, leer la etiqueta y elegir un tratamiento compatible. El calor de la secadora o la plancha debe esperar hasta comprobar que el pigmento desapareció.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#primeros-minutos">Qué hacer en los primeros minutos</a></li><li><a href="#pasos">Tratamiento paso a paso</a></li><li><a href="#seca">Si la mancha ya está seca</a></li><li><a href="#tejidos">Cuidados según el tejido</a></li><li><a href="#errores">Errores frecuentes</a></li></ol></nav>

    <h2 id="primeros-minutos">Qué hacer en los primeros minutos</h2>
    <ol className="article-steps">
      <li><strong>Retirá la prenda con cuidado.</strong><span>Evitá que la zona manchada toque otras partes de la tela.</span></li>
      <li><strong>Absorbé el exceso.</strong><span>Presioná con papel o un paño blanco limpio, desde el borde hacia el centro. No frotes.</span></li>
      <li><strong>Revisá la etiqueta.</strong><span>Confirmá si admite lavado doméstico, la temperatura permitida y si tiene restricciones de blanqueo.</span></li>
      <li><strong>Identificá la construcción.</strong><span>Una remera lavable, un saco forrado y una prenda de seda requieren decisiones distintas.</span></li>
    </ol>
    <div className="article-callout"><strong>Respuesta directa</strong><p>En una prenda lavable, el American Cleaning Institute recomienda comenzar con agua fría y luego aplicar un pretratamiento antes del lavado. Si la etiqueta exige cuidado profesional, limitate a absorber el líquido y consultá sin agregar productos.</p></div>

    <figure className="article-image"><Image src="/blog/tratar-mancha-vino-ropa.webp" alt="Manos presionando un paño blanco sobre una mancha fresca de vino en una prenda clara, con la etiqueta de cuidado visible" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Absorber con un paño blanco ayuda a retirar líquido sin arrastrar el pigmento hacia una superficie mayor.</figcaption></figure>

    <h2 id="pasos">Cómo tratar una mancha de vino en una prenda lavable</h2>
    <ol className="article-steps">
      <li><strong>Trabajá sobre una superficie limpia.</strong><span>Colocá un paño blanco debajo para evitar transferir la mancha a otra capa.</span></li>
      <li><strong>Enjuagá con agua fría si la etiqueta lo permite.</strong><span>Hacelo desde el reverso de la tela para empujar parte del pigmento hacia afuera.</span></li>
      <li><strong>Aplicá un quitamanchas compatible.</strong><span>Seguí la dosis y el tiempo indicados por el fabricante; primero probalo en una zona poco visible.</span></li>
      <li><strong>Lavá la prenda completa.</strong><span>Usá el ciclo y la temperatura autorizados por la etiqueta, no la temperatura más alta disponible.</span></li>
      <li><strong>Revisá antes de secar.</strong><span>Observá la zona con buena luz. Si queda una sombra, repetí el tratamiento antes de aplicar calor.</span></li>
    </ol>
    <p>No mezcles productos para “potenciar” el resultado. En especial, la lavandina nunca debe combinarse con amoníaco, vinagre ni otros limpiadores. Si usaste algún producto antes de consultar, contá exactamente cuál fue.</p>

    <h2 id="seca">¿Qué hacer si la mancha de vino ya se secó?</h2>
    <p>Una mancha seca puede necesitar varios ciclos de pretratamiento y lavado. Humedecé la zona únicamente si la etiqueta admite agua, aplicá un producto específico para manchas de bebidas y respetá su tiempo de acción. No rasques la superficie ni concentres productos en una aureola durante horas.</p>
    <p>Si la prenda ya pasó por secadora o plancha, el pigmento puede ser más difícil de retirar. Evitá continuar con mezclas caseras: en prendas delicadas o valiosas, una evaluación profesional permite decidir si existe un tratamiento razonable sin prometer un resultado imposible.</p>

    <h2 id="tejidos">El tratamiento cambia según el tejido</h2>
    <div className="frequency-grid">
      <article><strong>Algodón blanco lavable</strong><p>Suele admitir un pretratamiento más amplio, pero “blanco” no significa que acepte lavandina. Verificá el símbolo de blanqueo.</p></article>
      <article><strong>Algodón o sintético de color</strong><p>Probá el producto en una costura interior y evitá frotar: el color de la prenda también puede desplazarse.</p></article>
      <article><strong>Lana</strong><p>Woolmark aconseja trabajar con toques suaves y detergente aprobado diluido. No uses métodos pensados para algodón por defecto.</p></article>
      <article><strong>Seda</strong><p>El agua y los productos domésticos pueden dejar cercos o alterar el brillo. Si indica cuidado profesional, no la pretrates.</p></article>
      <article><strong>Sacos y vestidos estructurados</strong><p>Forros, entretelas, adornos y combinaciones de materiales hacen riesgoso mojar solo una zona.</p></article>
      <article><strong>Cuero o gamuza</strong><p>No apliques agua, sal ni quitamanchas para ropa lavable. Necesitan una evaluación específica del material.</p></article>
    </div>

    <h2 id="errores">Errores que pueden fijar o extender la mancha</h2>
    <ul>
      <li><strong>Frotar con una servilleta:</strong> empuja el vino hacia más fibras y puede desgastar la superficie.</li>
      <li><strong>Usar agua caliente por reflejo:</strong> la etiqueta y el tejido determinan la temperatura segura.</li>
      <li><strong>Cubrir cualquier prenda con sal:</strong> no reemplaza un tratamiento compatible y puede ser abrasiva.</li>
      <li><strong>Aplicar lavandina o agua oxigenada sin comprobar:</strong> puede decolorar o debilitar el material.</li>
      <li><strong>Secar para “ver si salió”:</strong> revisá mientras la prenda todavía está húmeda y antes de exponerla al calor.</li>
      <li><strong>Ocultar tratamientos previos:</strong> esa información es importante si después consultás a una tintorería.</li>
    </ul>

    <h2>¿Cuándo conviene consultar?</h2>
    <p>Si la etiqueta indica limpieza profesional, la prenda es delicada o estructurada, el vino se secó o ya aplicaste calor, evitá sumar productos. En Aquabon recibimos prendas para evaluación de <Link href="/servicios/tintoreria">tintorería</Link> en Gascón 2189, Centro de Mar del Plata. Revisamos etiqueta, tejido, color y tratamientos previos antes de confirmar proceso, plazo y precio.</p>
    <p>También podés consultar <Link href="/blog/que-prendas-conviene-llevar-a-la-tintoreria">qué prendas conviene llevar a tintorería</Link>, <Link href="/blog/diferencia-entre-lavanderia-y-tintoreria">cómo elegir entre lavandería y tintorería</Link> y las guías para tratar <Link href="/blog/como-sacar-manchas-de-aceite-de-la-ropa">manchas de aceite</Link> y <Link href="/blog/como-sacar-manchas-de-sangre-de-la-ropa">manchas de sangre</Link>.</p>

    <h2>Preguntas frecuentes</h2>
    {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.cleaninginstitute.org/cleaning-tips/holiday-cleaning/holiday-stains" target="_blank" rel="noreferrer">American Cleaning Institute: manchas de bebidas</a>, <a href="https://www.woolmark.com/care/removing-stains-from-wool/" target="_blank" rel="noreferrer">Woolmark: eliminación de manchas en lana</a> y <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
