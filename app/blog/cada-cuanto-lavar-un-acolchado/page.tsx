import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="¿Cada cuánto hay que lavar un acolchado?";
const description="Como orientación, un acolchado con funda y uso normal puede necesitar una limpieza profunda una o dos veces al año. Sin funda, con mascotas, manchas o uso intenso, conviene revisarlo y lavarlo antes, siempre según la etiqueta.";
const path="/blog/cada-cuanto-lavar-un-acolchado";

export const metadata:Metadata={title:"Cada cuánto lavar un acolchado: guía práctica | Aquabon",description:"Frecuencia orientativa para lavar un acolchado según el uso, la funda, el relleno, las mascotas y las señales de suciedad.",alternates:{canonical:path},openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-09-18",images:[{url:"/blog/revisar-cuando-lavar-acolchado.webp",width:1400,height:788,alt:"Persona revisando una mancha pequeña y el relleno de un acolchado"}]}};

const faqs=[
  {question:"¿Cuántas veces al año se lava un acolchado?",answer:"Con funda removible, uso normal y sin incidentes, una o dos limpiezas profundas al año suelen ser una orientación práctica. La etiqueta, el contacto directo, las mascotas, las manchas y el estado real pueden exigir otra frecuencia."},
  {question:"¿Hay que lavarlo antes de guardarlo?",answer:"Conviene guardarlo limpio y completamente seco. Si tuvo poco uso y no presenta olor ni manchas, revisá la etiqueta y su estado antes de decidir: un lavado innecesario también desgasta el tejido y el relleno."},
  {question:"¿La funda reemplaza el lavado del acolchado?",answer:"No, pero reduce el contacto directo con transpiración, polvo y manchas. Lavá la funda con mayor frecuencia y revisá el relleno en cada cambio de temporada."},
  {question:"¿Qué pasa si lo lavo demasiado seguido?",answer:"Los ciclos repetidos, el calor y la manipulación pueden desgastar la tela, las costuras o el relleno. Por eso conviene combinar funda, ventilación y limpieza localizada cuando la etiqueta lo permita."}
];

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="cada-cuanto-lavar-un-acolchado" date="2026-09-18" readingTime="7 MIN DE LECTURA" cluster="Acolchados" image="/blog/revisar-cuando-lavar-acolchado.webp">
  <p className="article-lead"><strong>Respuesta corta:</strong> si usás funda removible y el acolchado no tiene manchas, olor ni contacto directo intenso, lavarlo en profundidad una o dos veces al año suele ser una referencia razonable. Sin funda, con mascotas, transpiración frecuente o un derrame, revisalo y limpialo antes. La etiqueta siempre define qué proceso admite.</p>
  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#frecuencia">Una frecuencia según el uso</a></li><li><a href="#senales">Señales para adelantar el lavado</a></li><li><a href="#material">Qué cambia según el relleno</a></li><li><a href="#mantener">Cómo mantenerlo entre lavados</a></li><li><a href="#profesional">Cuándo llevarlo a lavandería</a></li></ol></nav>

  <h2 id="frecuencia">No hay una frecuencia única para todos los acolchados</h2>
  <p>El calendario sirve como recordatorio, no como una orden automática. Un acolchado protegido por una funda lavable recibe menos contacto directo que uno usado sin funda; uno que permanece doblado gran parte del año no acumula lo mismo que otro utilizado todas las noches.</p>
  <div className="frequency-grid">
    <article><strong>Con funda y uso normal</strong><p>Lavá la funda con frecuencia y revisá el acolchado al cambiar de temporada. Una o dos limpiezas profundas al año pueden ser suficientes si la etiqueta y el estado lo permiten.</p></article>
    <article><strong>Sin funda o con contacto directo</strong><p>Controlalo más seguido. La transpiración, los productos corporales y la suciedad llegan antes a la tela exterior y al relleno.</p></article>
    <article><strong>Con mascotas o uso intenso</strong><p>Adelantá la revisión cuando haya pelos, olor, tierra o contacto habitual. No esperes a una fecha fija si aparecen señales claras.</p></article>
    <article><strong>Uso estacional</strong><p>Revisalo antes de guardarlo y al volver a usarlo. Debe quedar limpio y completamente seco para evitar olor y humedad durante el almacenamiento.</p></article>
  </div>
  <p>Si el fabricante indica una frecuencia concreta, esa recomendación tiene prioridad. Antes de decidir, aprendé a interpretar los <Link href="/blog/simbolos-de-lavado-de-un-acolchado">símbolos de lavado y secado de la etiqueta</Link>.</p>

  <h2 id="senales">Señales que justifican lavar el acolchado antes</h2>
  <p>No hace falta esperar al cambio de temporada cuando el acolchado muestra una necesidad concreta. Revisá toda la superficie, los bordes y las zonas cercanas a la cara y los pies.</p>
  <ul><li><strong>Manchas o derrames:</strong> tratarlos pronto suele ser más sencillo que esperar a que se fijen.</li><li><strong>Olor persistente:</strong> ventilar puede resolver olor ambiental leve; si vuelve o permanece, hace falta revisar el interior.</li><li><strong>Relleno pesado o apelmazado:</strong> puede indicar suciedad, distribución desigual o humedad. No lo guardes así.</li><li><strong>Uso después de una enfermedad:</strong> revisá la etiqueta y seguí las indicaciones de cuidado compatibles con el material.</li><li><strong>Contacto frecuente con mascotas:</strong> pelos, suciedad exterior y pequeños accidentes modifican la frecuencia real.</li></ul>
  <figure className="article-image">
    <Image src="/blog/revisar-cuando-lavar-acolchado.webp" alt="Manos revisando una pequeña mancha y el estado del relleno de un acolchado blanco" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/>
    <figcaption>Una inspección de manchas, costuras, olor y distribución del relleno ayuda a decidir por estado, no solo por calendario.</figcaption>
  </figure>
  <div className="article-callout warning"><strong>No intentes compensar con un lavado más agresivo</strong><p>Más detergente, más temperatura o un centrifugado intenso no garantizan mejor limpieza. Pueden dejar residuos, dañar la tela o desplazar el relleno. Respetá siempre la etiqueta.</p></div>

  <h2 id="material">La frecuencia también depende del relleno</h2>
  <p>Los acolchados sintéticos, de pluma, lana o mezcla tienen capacidades y límites diferentes. En los de pluma, por ejemplo, el secado uniforme es decisivo: lavarlos sin contar con un tambor amplio o un método de secado compatible puede dejar humedad en el interior. Nuestra guía explica <Link href="/blog/como-lavar-un-acolchado-de-plumas">cómo evaluar un acolchado de plumas antes del lavado</Link>.</p>
  <p>En todos los casos, revisá costuras, roturas y zonas donde el relleno se haya desplazado. Un lavado que llega “por calendario” debería postergarse hasta reparar una abertura; uno necesario por una mancha puede requerir evaluación profesional si la tela está debilitada.</p>

  <h2 id="mantener">Cómo mantenerlo mejor entre lavados</h2>
  <ul><li>Usá una funda removible y lavala con mayor frecuencia que el relleno.</li><li>Ventilá el acolchado en un lugar seco y a la sombra, siempre que su etiqueta no indique lo contrario.</li><li>Sacudilo con suavidad para redistribuir el relleno.</li><li>Actuá pronto ante un derrame y evitá frotar sin conocer el tejido.</li><li>Guardalo completamente seco, en una funda transpirable y sin comprimirlo de manera extrema.</li></ul>
  <p>Después de cada lavado, el control no termina cuando la superficie se siente seca. Consultá <Link href="/blog/como-secar-un-acolchado">cómo comprobar la humedad interior y evitar que el relleno quede apelmazado</Link>.</p>

  <h2 id="profesional">Cuándo conviene llevarlo a una lavandería</h2>
  <p>Pedí una evaluación si el acolchado no entra holgado en tu lavarropas, si no podés reproducir el tratamiento de la etiqueta, si tiene una mancha extensa, costuras débiles o un relleno que necesita secado controlado. Forzar una pieza voluminosa reduce el movimiento y puede impedir un enjuague uniforme.</p>
  <p>En Aquabon revisamos tamaño, tejido, relleno y estado antes de confirmar el <Link href="/servicios/lavado-de-acolchados">servicio de lavado de acolchados</Link>. Podés acercarte a Gascón 2189, en el centro de Mar del Plata, o enviarnos por WhatsApp una foto del acolchado y su etiqueta.</p>

  <h2>Preguntas frecuentes</h2>
  {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
  <section className="article-sources"><strong>Criterio de cuidado</strong><p>La frecuencia propuesta es orientativa. Para el proceso permitido, prevalecen la etiqueta del fabricante y la interpretación de símbolos de <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX</a>.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
