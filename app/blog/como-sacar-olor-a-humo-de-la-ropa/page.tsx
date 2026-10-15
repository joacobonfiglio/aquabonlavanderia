import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo sacar olor a humo de la ropa sin dañar el tejido";
const description="Qué hacer con olor a cigarrillo, cocina, parrilla o humo intenso: aireado, lavado según etiqueta y señales para consultar antes de tratar la prenda.";
const path="/blog/como-sacar-olor-a-humo-de-la-ropa";
const faqs=[
  {question:"¿Cómo sacar rápido el olor a humo de la ropa?",answer:"Aireá la prenda en un lugar ventilado y a la sombra, revisá la etiqueta y lavala separada con la dosis de detergente indicada. El perfume solo enmascara el olor y no sustituye el lavado."},
  {question:"¿Se puede usar vinagre o bicarbonato?",answer:"No existe una receta universal segura para todos los tejidos, colores y terminaciones. Antes de agregar productos distintos del detergente, revisá la etiqueta, el manual del lavarropas y las instrucciones del fabricante. No mezcles productos de limpieza."},
  {question:"¿Conviene usar suavizante para tapar el olor?",answer:"No como primer recurso. El suavizante puede perfumar la prenda sin retirar el residuo que causa el olor. Las guías técnicas para daño por humo recomiendan no usarlo hasta eliminar el olor."},
  {question:"¿Puedo poner la prenda en la secadora?",answer:"Primero comprobá que la etiqueta lo permita y que el olor haya desaparecido. Si todavía huele, preferí secar al aire para evaluar el resultado antes de exponerla al calor."},
  {question:"¿Qué hago si además tiene hollín?",answer:"No lo frotes ni mezcles la prenda con ropa limpia. Aislala y retirala del ambiente. Si la exposición es importante, la prenda es delicada o proviene de un incendio, consultá un servicio profesional antes de tratarla."},
  {question:"¿Cuándo conviene llevarla a tintorería?",answer:"Cuando la etiqueta indica cuidado profesional, la prenda tiene estructura o forro, el humo es intenso, hay hollín visible o el olor persiste después de un lavado compatible."}
];

export const metadata:Metadata={title:"Cómo sacar olor a humo de la ropa | Aquabon",description:"Cómo sacar olor a humo de la ropa según su origen y etiqueta. Aireado, lavado, secado y cuidados si hay hollín o una prenda delicada.",alternates:{canonical:path},openGraph:{title,description,url:path,type:"article",locale:"es_AR",publishedTime:"2026-10-15",images:[{url:"/blog/revisar-ropa-con-olor-a-humo.webp",width:1400,height:788,alt:"Persona revisando la etiqueta de una campera con olor a humo mientras separa la ropa afectada de prendas limpias"}]}};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="como-sacar-olor-a-humo-de-la-ropa" date="2026-10-15" readingTime="7 MIN DE LECTURA" cluster="Olores" image="/blog/revisar-ropa-con-olor-a-humo.webp" service="tintoreria"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <p className="article-lead"><strong>Para sacar olor a humo, primero separá la prenda, aireala y revisá su etiqueta.</strong> Si es lavable, tratala en una carga pequeña con detergente y el ciclo permitido; después secala al aire para comprobar el resultado. No tapes el olor con perfume ni frotes el hollín.</p>

    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#tipo">Identificar el tipo de humo</a></li><li><a href="#pasos">Método para ropa lavable</a></li><li><a href="#hollin">Qué hacer si hay hollín</a></li><li><a href="#productos">Productos y mezclas</a></li><li><a href="#delicadas">Prendas delicadas</a></li><li><a href="#errores">Errores frecuentes</a></li></ol></nav>

    <h2 id="tipo">Primero distinguí olor leve, humo intenso y hollín</h2>
    <div className="frequency-grid">
      <article><strong>Cocina o parrilla</strong><p>Suele ser una exposición breve. Aireado y un lavado compatible pueden ser suficientes si no hay grasa ni manchas.</p></article>
      <article><strong>Cigarrillo</strong><p>El olor puede quedar en fibras, forros y prendas cercanas. Separá la ropa afectada para no transferirlo al placard.</p></article>
      <article><strong>Fogón o chimenea</strong><p>Revisá ceniza, partículas y manchas antes de lavar. No sacudas la prenda dentro de casa.</p></article>
      <article><strong>Incendio</strong><p>No es un olor doméstico común. Puede haber hollín, residuos y daño térmico; aislá la prenda y buscá evaluación profesional.</p></article>
    </div>
    <p>La intensidad del olor no permite identificar por sí sola qué residuo quedó en el tejido. Si hubo un incendio, contacto con químicos o mucha ceniza, priorizá la seguridad y no experimentes con mezclas caseras.</p>

    <h2 id="pasos">Cómo quitar olor a humo de ropa lavable</h2>
    <ol className="article-steps">
      <li><strong>Separá la prenda.</strong><span>No la mezcles con ropa limpia ni la guardes en el placard. Si necesitás transportarla, mantenela aislada hasta tratarla.</span></li>
      <li><strong>Aireala a la sombra.</strong><span>Colgala en un espacio exterior protegido o muy ventilado. Abrí bolsillos y cierres para que el aire llegue al forro y a las zonas dobles.</span></li>
      <li><strong>Leé la etiqueta completa.</strong><span>Confirmá lavado, temperatura, blanqueo, secado y cuidado profesional. Esta <Link href="/blog/simbolos-de-lavado-de-la-ropa">guía de símbolos</Link> ayuda a interpretarla.</span></li>
      <li><strong>Lavá una carga pequeña.</strong><span>La ropa necesita espacio para moverse. Usá detergente según su envase y la temperatura más alta permitida por la etiqueta, no la más alta de la máquina.</span></li>
      <li><strong>Secá al aire y evaluá.</strong><span>Antes de usar secadora, revisá el olor en costuras, cuello, puños y forro. Si persiste, repetí solo un proceso compatible o consultá.</span></li>
    </ol>

    <figure className="article-image"><Image src="/blog/revisar-ropa-con-olor-a-humo.webp" alt="Persona revisando la etiqueta de una campera con olor a humo mientras separa la ropa afectada de prendas limpias" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Separar la ropa afectada y revisar su etiqueta evita transferir olor y elegir un proceso incompatible.</figcaption></figure>

    <h2 id="hollin">Si hay hollín o ceniza visible</h2>
    <p><strong>No frotes:</strong> podés empujar las partículas hacia el interior de las fibras y extender la marca. Mantené la prenda alejada de la ropa limpia. Una cantidad superficial pequeña puede retirarse con mucho cuidado al aire libre antes de seguir la etiqueta, pero una exposición importante, un tejido delicado o una prenda proveniente de un incendio necesitan evaluación profesional.</p>
    <div className="article-callout"><strong>Olor a humo no es lo mismo que daño por incendio</strong><p>La limpieza doméstica sirve para exposiciones cotidianas en prendas lavables. No ofrecemos descontaminación de materiales peligrosos ni debemos tratar como una carga normal ropa expuesta a sustancias desconocidas.</p></div>

    <h2 id="productos">Por qué no recomendamos una mezcla universal</h2>
    <p>Vinagre, bicarbonato, blanqueadores, potenciadores y eliminadores de olor no son intercambiables. Su compatibilidad cambia según fibra, tinte, acabado, lavarropas y detergente. Nunca mezcles productos de limpieza ni uses más cantidad para compensar el olor. Si elegís un producto adicional, debe estar autorizado por la etiqueta y utilizarse exactamente como indica su fabricante.</p>
    <p>Tampoco conviene empezar con suavizante o perfume: pueden cubrir temporalmente el olor sin retirar el residuo. Para evitar exceso de producto, consultá <Link href="/blog/cuanto-detergente-usar">cómo medir el detergente</Link>.</p>

    <h2 id="delicadas">Camperas, sacos y prendas que no admiten lavado</h2>
    <p>Forros, entretelas, hombreras, recubrimientos, cuero, gamuza y adornos cambian el tratamiento. Si la etiqueta indica cuidado profesional, no mojes una parte para “probar”. Aireá la prenda sin sol directo y consultá una <Link href="/servicios/tintoreria">tintorería</Link>, explicando de dónde proviene el humo y si existe hollín.</p>
    <p>Para ropa cotidiana lavable podemos evaluar el <Link href="/servicios/valet-de-ropa">servicio de valet</Link>. En ambos casos, enviá por WhatsApp una foto de la prenda y de la etiqueta; la recepción depende de material, estado y tipo de exposición.</p>

    <h2 id="errores">Errores que pueden empeorar el problema</h2>
    <ul><li>Guardar la prenda para tratarla “más adelante”.</li><li>Mezclarla con una carga de ropa limpia.</li><li>Frotar hollín o cepillarlo dentro de casa.</li><li>Rociar perfume para tapar el olor.</li><li>Agregar suavizante antes de retirar el humo.</li><li>Usar agua caliente, blanqueador o secadora sin revisar la etiqueta.</li><li>Mezclar vinagre, bicarbonato, cloro u otros limpiadores.</li></ul>

    <h2>Preguntas frecuentes</h2>{faqs.map(f=><section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

    <h2>Fuentes consultadas</h2><ul><li><a href="https://site.extension.uga.edu/textiles/care/stain-removal/remove-stains-from-smoke-soot/" rel="noreferrer" target="_blank">University of Georgia Extension: humo y hollín en textiles</a>.</li><li><a href="https://www.cleaninginstitute.org/cleaning-tips/holiday-cleaning/holiday-stains" rel="noreferrer" target="_blank">American Cleaning Institute: olor y manchas de humo</a>.</li><li><a href="https://extension.oregonstate.edu/catalog/em-9379-protecting-indoor-air-wildfire-smoke" rel="noreferrer" target="_blank">Oregon State University Extension: ropa expuesta a humo</a>.</li><li><a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" rel="noreferrer" target="_blank">GINETEX: símbolos de cuidado textil</a>.</li></ul>
  </ArticleLayout>;
}
