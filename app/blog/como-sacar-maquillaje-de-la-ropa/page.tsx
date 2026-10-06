import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo sacar maquillaje de la ropa sin extender la mancha";
const description="Qué hacer con base, labial, polvo o máscara: retirar el exceso, pretratar según el tejido y revisar antes de secar.";
const path="/blog/como-sacar-maquillaje-de-la-ropa";
const faqs=[
  {question:"¿Cómo sacar base de maquillaje de una camisa?",answer:"Retirá el exceso sin arrastrarlo, absorbé con un paño blanco y, si la etiqueta admite lavado, aplicá un pretratamiento apto para el tejido. Lavá según la etiqueta y revisá antes de secar."},
  {question:"¿El agua micelar sirve para sacar maquillaje de la ropa?",answer:"No es una solución universal: algunas fórmulas contienen aceites, perfumes o colorantes y pueden dejar otra marca. Conviene usar un producto para ropa compatible con la etiqueta y probarlo primero en una zona poco visible."},
  {question:"¿Cómo sacar labial o máscara de pestañas?",answer:"Suelen combinar ceras, aceites y pigmentos. Retirá el exceso con cuidado, pretratá con detergente líquido o quitamanchas apto para la prenda y repetí antes de secar si todavía queda una sombra."},
  {question:"¿Puedo usar lavandina en una prenda blanca?",answer:"Solo si el símbolo de blanqueo y el producto la permiten. Una tela blanca puede contener fibras, terminaciones o costuras que no toleran cloro. Nunca mezcles limpiadores."},
  {question:"¿Cuándo conviene consultar una tintorería?",answer:"Cuando la etiqueta indica cuidado profesional, la prenda es de seda, lana o tiene estructura, la mancha es antigua, ya recibió calor o no sabés qué producto se aplicó antes."}
];

export const metadata:Metadata={
  title:"Cómo sacar maquillaje de la ropa | Aquabon",
  description:"Cómo tratar manchas de base, labial, polvo y máscara sin extenderlas. Guía de Aquabon, lavandería en el centro de Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-06",images:[{url:"/blog/tratar-mancha-maquillaje-ropa.webp",width:1400,height:788,alt:"Paño blanco absorbiendo una mancha de base de maquillaje en el cuello de una camisa clara"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-sacar-maquillaje-de-la-ropa" date="2026-10-06" readingTime="7 MIN DE LECTURA" cluster="Manchas" image="/blog/tratar-mancha-maquillaje-ropa.webp" service="tintoreria">
    <p className="article-lead"><strong>Primero retirás el exceso; después elegís el tratamiento.</strong> Base, labial, polvo y máscara no dejan la misma mancha. Evitá frotar, revisá la etiqueta y no uses secadora ni plancha hasta comprobar que la marca desapareció.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#primeros-pasos">Qué hacer enseguida</a></li><li><a href="#tipo">Tratamiento según el maquillaje</a></li><li><a href="#tejido">Cuidados según la prenda</a></li><li><a href="#errores">Errores frecuentes</a></li><li><a href="#consulta">Cuándo consultar</a></li></ol></nav>

    <h2 id="primeros-pasos">Qué hacer apenas se mancha la ropa</h2>
    <ol className="article-steps">
      <li><strong>Leé la etiqueta.</strong><span>Confirmá si admite agua, qué temperatura máxima permite y si requiere cuidado profesional.</span></li>
      <li><strong>Retirá el exceso.</strong><span>Levantá producto sólido o cremoso con el borde de una cuchara, sin empujarlo hacia las fibras.</span></li>
      <li><strong>Absorbé, no frotes.</strong><span>Presioná con un paño blanco limpio desde el borde hacia el centro para no ampliar la mancha.</span></li>
      <li><strong>Pretratá con un producto apto.</strong><span>Seguí dosis y tiempo del envase y probalo antes en una costura interior.</span></li>
      <li><strong>Lavá la prenda completa.</strong><span>Elegí el ciclo y la temperatura que indica la etiqueta, no la más alta disponible.</span></li>
      <li><strong>Revisá antes de secar.</strong><span>Si queda una sombra, repetí el tratamiento: el calor puede volverla más difícil de quitar.</span></li>
    </ol>
    <div className="article-callout"><strong>Respuesta directa</strong><p>Para maquillaje lavable, el American Cleaning Institute recomienda pretratar y luego lavar a la temperatura más alta que sea segura para el tejido. La clave es que “segura” la define la etiqueta, no el color ni la apariencia de la prenda.</p></div>

    <figure className="article-image"><Image src="/blog/tratar-mancha-maquillaje-ropa.webp" alt="Manos absorbiendo con un paño blanco una pequeña mancha de base de maquillaje en el cuello de una camisa clara" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Presioná con un paño limpio: frotar puede llevar el pigmento a una superficie mayor.</figcaption></figure>

    <h2 id="tipo">El tratamiento cambia según el tipo de maquillaje</h2>
    <div className="frequency-grid">
      <article><strong>Polvo, rubor o sombra</strong><p>Retirá el producto suelto sin mojarlo ni aplastarlo. Después tratá la marca residual según el tejido.</p></article>
      <article><strong>Base líquida o corrector</strong><p>Quitá el exceso, absorbé y aplicá detergente líquido o prelavado compatible. Las fórmulas con aceite pueden requerir repetir.</p></article>
      <article><strong>Labial</strong><p>Combina pigmento, cera y grasa. No lo arrastres con una servilleta húmeda: retiralo y pretratá antes del lavado.</p></article>
      <article><strong>Máscara y delineador</strong><p>Las versiones resistentes al agua suelen contener ceras y aceites. Trabajá en etapas y no seques mientras quede color.</p></article>
      <article><strong>Maquillaje de larga duración</strong><p>No aumentes fricción ni temperatura para compensar. Puede necesitar varios tratamientos compatibles.</p></article>
      <article><strong>Desmaquillante o agua micelar</strong><p>No los uses por defecto sobre tela: su propia fórmula puede dejar aureola, aceite o colorante.</p></article>
    </div>

    <h2 id="tejido">Antes de tratar, mirá la prenda completa</h2>
    <h3>Algodón y sintéticos lavables</h3>
    <p>Suelen admitir pretratamiento y lavado, pero el color, las estampas y el elastano pueden limitar el producto y la temperatura. Probá siempre en una zona oculta.</p>
    <h3>Seda, lana y prendas delicadas</h3>
    <p>La fricción, las enzimas o el mojado localizado pueden cambiar textura, brillo o color. Si la etiqueta indica cuidado profesional, retirale solo el exceso y consultá.</p>
    <h3>Sacos, vestidos y prendas con forro</h3>
    <p>La tela exterior no es el único factor: entretelas, hombreras, apliques y forros pueden reaccionar de otra manera. Evitá empapar una sola zona.</p>

    <h2 id="errores">Errores que pueden agrandar o fijar la mancha</h2>
    <ul>
      <li><strong>Frotar con una toallita:</strong> puede extender pigmento y dañar la superficie.</li>
      <li><strong>Usar desmaquillante sin probar:</strong> puede sumar aceite, perfume o colorante.</li>
      <li><strong>Aplicar calor:</strong> no seques ni planches hasta revisar el resultado.</li>
      <li><strong>Elegir lavandina por ser ropa blanca:</strong> primero verificá el triángulo de blanqueo.</li>
      <li><strong>Mezclar productos:</strong> nunca combines limpiadores ni improvises reacciones químicas.</li>
      <li><strong>No informar tratamientos previos:</strong> si llevás la prenda a un profesional, contá qué aplicaste y cuándo.</li>
    </ul>

    <h2 id="consulta">Cuándo conviene llevar la prenda a tintorería</h2>
    <p>Consultá si la etiqueta pide cuidado profesional, la prenda es delicada o estructurada, la mancha es antigua, ya pasó por secadora o plancha, o probaste productos sin resultado. En Aquabon recibimos prendas para evaluación de <Link href="/servicios/tintoreria">tintorería</Link> en Gascón 2189, Centro de Mar del Plata. Confirmamos proceso, plazo y precio después de revisarlas; ninguna mancha puede garantizarse sin esa evaluación.</p>
    <p>Si administrás un salón y necesitás resolver toallas, capas o textiles de trabajo de forma recurrente, consultá la propuesta de <Link href="/empresas/lavanderia-centros-de-estetica">lavandería para centros de estética</Link>. También podés comparar esta guía con las de <Link href="/blog/como-sacar-manchas-de-aceite-de-la-ropa">manchas de aceite</Link> y <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de lavado</Link>.</p>

    <h2>Preguntas frecuentes</h2>
    {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.cleaninginstitute.org/cleaning-tips/clean-home/ask-aci/ask-aci-make-stains" target="_blank" rel="noreferrer">American Cleaning Institute: manchas de maquillaje</a>, <a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide" target="_blank" rel="noreferrer">ACI: guía de eliminación de manchas</a> y <a href="https://www.ginetex.net/userfiles/files/Textile_care_symbols_en.pdf" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
