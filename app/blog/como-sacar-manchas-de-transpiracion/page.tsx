import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo sacar manchas de transpiración de la ropa";
const description="Qué hacer con marcas amarillas o rígidas en axilas: identificar la prenda, pretratar con cuidado y evitar calor hasta comprobar el resultado.";
const path="/blog/como-sacar-manchas-de-transpiracion";
const faqs=[
  {question:"¿Por qué quedan manchas amarillas en las axilas?",answer:"Suelen formarse por la acumulación de transpiración, desodorante, aceites corporales y detergente. El tono también puede ser una alteración del color de la tela, por lo que no siempre es posible devolverle el aspecto original."},
  {question:"¿Conviene usar agua caliente?",answer:"Solo si la etiqueta y el producto de tratamiento lo permiten. Empezá con el método menos agresivo y no uses secadora ni plancha hasta revisar la zona, porque el calor puede dificultar la remoción de residuos."},
  {question:"¿Se puede usar lavandina en una camisa blanca?",answer:"No por el solo hecho de que sea blanca. Revisá el símbolo de blanqueo y la composición completa: hilos, elastano, botones y acabados pueden reaccionar. Nunca mezcles lavandina con otros limpiadores."},
  {question:"¿Qué hago si la prenda es de seda, lana o viscosa?",answer:"No apliques una receta general. Seguí la etiqueta y probá cualquier producto en una zona poco visible. Si hay color inestable, estructura o cuidado profesional indicado, conviene consultar antes de mojarla."},
  {question:"¿Aquabon garantiza que la mancha salga?",answer:"No. El resultado depende del tejido, el color, la antigüedad de la marca y los productos ya aplicados. Revisamos la prenda antes de confirmar el proceso y sus límites."}
];

export const metadata:Metadata={
  title:"Cómo sacar manchas de transpiración | Aquabon",
  description:"Cómo tratar manchas amarillas de transpiración y desodorante sin dañar la ropa. Guía de Aquabon, lavandería en el centro de Mar del Plata.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-09",images:[{url:"/blog/tratar-mancha-transpiracion-camisa.webp",width:1400,height:788,alt:"Pretratamiento suave de una marca de transpiración en la axila de una camisa celeste"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-sacar-manchas-de-transpiracion" date="2026-10-09" readingTime="7 MIN DE LECTURA" cluster="Manchas" image="/blog/tratar-mancha-transpiracion-camisa.webp" service="valet">
    <p className="article-lead"><strong>Para tratar una mancha de transpiración, primero revisá la etiqueta y distinguí si hay residuo, rigidez o cambio de color.</strong> Retirá el exceso, pretratá con un producto compatible durante el tiempo indicado, lavá según la prenda y comprobá la zona antes de aplicar secadora o plancha.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#identificar">Qué tipo de marca es</a></li><li><a href="#pasos">Paso a paso</a></li><li><a href="#tejidos">Qué cambia según la prenda</a></li><li><a href="#errores">Errores frecuentes</a></li><li><a href="#profesional">Cuándo consultar</a></li></ol></nav>

    <h2 id="identificar">Transpiración, desodorante o decoloración: no son lo mismo</h2>
    <p>Las marcas de axila pueden combinar sales de la transpiración, desodorante, grasa corporal y producto de lavado. Una zona blanca o rígida suele indicar acumulación superficial; una marca amarilla puede ser residuo oxidado, pero también un cambio del tinte. Si el color de la fibra se alteró, limpiar no necesariamente lo revierte.</p>
    <div className="frequency-grid">
      <article><strong>Marca fresca</strong><p>Actuá pronto, sin frotar con fuerza. Enjuagá o pretratá según la etiqueta y las instrucciones del producto.</p></article>
      <article><strong>Zona rígida</strong><p>Puede haber capas de desodorante. Trabajá suavemente desde el reverso para no desgastar la cara visible.</p></article>
      <article><strong>Amarillo antiguo</strong><p>Puede requerir más de un tratamiento. Repetí antes de secar; no aumentes calor ni mezcles productos.</p></article>
      <article><strong>Color aclarado</strong><p>Si la fibra perdió tinte, un quitamanchas no repone el color. Conviene evaluar la prenda antes de insistir.</p></article>
    </div>

    <h2 id="pasos">Cómo tratar la zona de la axila paso a paso</h2>
    <ol className="article-steps">
      <li><strong>Leé la etiqueta.</strong><span>Confirmá lavado, temperatura, blanqueo, secado y planchado. Un símbolo tachado cambia por completo el método.</span></li>
      <li><strong>Probá en un punto oculto.</strong><span>Comprobá que el producto no modifique color, brillo o textura antes de aplicarlo en toda la zona.</span></li>
      <li><strong>Pretratá con suavidad.</strong><span>Usá detergente líquido, jabón para ropa o quitamanchas compatible siguiendo dosis y tiempo del envase. No dejes que se seque sobre la tela.</span></li>
      <li><strong>Trabajá desde el reverso.</strong><span>Presioná con los dedos o un paño blanco; evitá cepillos duros y fricción intensa sobre costuras y color.</span></li>
      <li><strong>Lavá según la prenda.</strong><span>Elegí la temperatura máxima segura indicada en la etiqueta, no la más alta por costumbre.</span></li>
      <li><strong>Revisá antes de secar.</strong><span>Si la marca continúa, repetí un tratamiento compatible. Secadora y plancha pueden volver más difícil retirar residuos remanentes.</span></li>
    </ol>
    <div className="article-callout"><strong>Seguridad primero</strong><p>No mezcles lavandina con vinagre, amoníaco, alcohol ni otros limpiadores. Además del riesgo para la prenda, algunas combinaciones liberan gases peligrosos. Usá un solo producto a la vez y seguí su etiqueta.</p></div>

    <figure className="article-image"><Image src="/blog/tratar-mancha-transpiracion-camisa.webp" alt="Manos tratando con un paño blanco una marca de transpiración en la costura de la axila de una camisa celeste" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Trabajar desde el reverso y sin cepillado agresivo ayuda a proteger la cara visible y las costuras.</figcaption></figure>

    <h2 id="tejidos">Qué cambia según el color y el tejido</h2>
    <h3>Camisas blancas de algodón</h3><p>Que sean blancas no habilita cualquier blanqueador. El triángulo de la etiqueta indica si admite blanqueo, y la prenda puede incluir hilos, elastano o acabados sensibles. Empezá con detergente o quitamanchas apto y evaluá el resultado antes de escalar.</p>
    <h3>Prendas de color</h3><p>Probá siempre en un sector oculto. Algunos productos remueven residuo pero también aclaran el tinte; el roce intenso puede dejar un halo aún más visible.</p>
    <h3>Seda, lana, viscosa y prendas estructuradas</h3><p>Agua, alcalinidad y fricción pueden cambiar textura, brillo o forma. Si la etiqueta pide cuidado profesional, la prenda tiene forro o no sabés cómo responde el color, consultá el <Link href="/servicios/tintoreria">servicio de tintorería</Link> antes de tratarla.</p>
    <p>Para interpretar tina, triángulo, cuadrado, plancha y círculo, usá la guía de <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de lavado de ropa</Link>. Si es una camisa, la preparación de cuello y puños está explicada en <Link href="/blog/como-lavar-camisas-sin-arruinarlas">cómo lavar camisas sin arruinarlas</Link>.</p>

    <h2 id="errores">Errores que pueden empeorar la marca</h2>
    <ul><li><strong>Planchar o secar antes de revisar:</strong> el calor puede fijar residuos y dificultar el siguiente intento.</li><li><strong>Frotar con un cepillo duro:</strong> desgasta la superficie, costuras y color.</li><li><strong>Mezclar productos:</strong> es inseguro y puede generar decoloración o daño químico.</li><li><strong>Dejar el pretratamiento secarse:</strong> respetá el tiempo del envase y enjuagá o lavá cuando corresponda.</li><li><strong>Tratar toda prenda como algodón blanco:</strong> fibra, tinte, estructura y etiqueta importan más que el aspecto.</li></ul>

    <h2 id="profesional">Cuándo conviene consultar por lavado y planchado</h2>
    <p>Si la marca es antigua, la camisa es delicada, necesitás varias prendas listas o querés lavado con terminación, consultá el <Link href="/servicios/lavado-y-planchado-de-camisas">lavado y planchado de camisas en Mar del Plata</Link>. En Aquabon recibimos en Gascón 2189, revisamos cada prenda y confirmamos proceso, precio y plazo antes de aceptar el trabajo. No garantizamos la remoción total de una mancha.</p>

    <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide" target="_blank" rel="noreferrer">American Cleaning Institute: guía para quitar manchas</a> y <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX: símbolos de cuidado textil</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
