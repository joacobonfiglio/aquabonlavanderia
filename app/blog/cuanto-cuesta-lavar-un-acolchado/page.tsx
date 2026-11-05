import type { Metadata } from "next";
import Image from "../../Img";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";
import WhatsAppLink from "../../WhatsAppLink";
import { WhatsAppIcon } from "../../ui";

const title="¿Cuánto cuesta lavar un acolchado? De qué depende el precio";
const description="No hay un precio único: depende del tamaño, el relleno, el estado y las manchas del acolchado, y de si necesitás retiro y entrega. Con una foto de la etiqueta y del acolchado se puede pasar un importe antes de dejarlo.";
const path="/blog/cuanto-cuesta-lavar-un-acolchado";
const image="/blog/revisar-cuando-lavar-acolchado.webp";
const seo="Cuánto cuesta lavar un acolchado y de qué depende el precio: tamaño, relleno y estado. En Aquabon, Mar del Plata, te pasamos el importe antes de dejarlo.";

export const metadata:Metadata={title:"Cuánto cuesta lavar un acolchado: de qué depende | Aquabon",description:seo,alternates:{canonical:path},openGraph:{title,description:seo,type:"article",locale:"es_AR",url:path,publishedTime:"2026-11-05",images:[{url:image,width:1400,height:788,alt:"Revisión de una mancha y el relleno de un acolchado antes de pasar el precio"}]}};

const faqs=[
  {question:"¿Por qué no publican un precio fijo para lavar un acolchado?",answer:"Porque dos acolchados del mismo tamaño pueden necesitar trabajos distintos según el relleno, el estado y las manchas. Preferimos verlo, o ver una foto, y pasarte el importe antes de que lo dejes."},
  {question:"¿Sale más caro lavar un acolchado de plumas?",answer:"Puede variar, porque la pluma necesita más cuidado en el lavado y, sobre todo, en el secado. Lo confirmamos después de revisar la etiqueta y el estado."},
  {question:"¿Qué tengo que mandar para saber el precio?",answer:"Una foto del acolchado completo, otra de la etiqueta y, si tiene, de las manchas o roturas. Sumá la medida (una plaza, dos plazas o más grande) y si necesitás que lo pasemos a buscar."},
  {question:"¿El retiro y la entrega están incluidos?",answer:"Se cotizan aparte según la zona. Hoy retiramos y entregamos en Centro, Güemes, Chauvin y La Perla, y te decimos el costo antes de coordinar."},
  {question:"¿Conviene más lavarlo en casa?",answer:"Si la etiqueta lo permite y entra holgado en tu lavarropas y tu secadora, se puede. Si no entra, si es de pluma o si no tenés dónde secarlo bien, el ahorro puede terminar en un relleno apelmazado o con olor a humedad."}
];

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="cuanto-cuesta-lavar-un-acolchado" date="2026-11-05" readingTime="6 MIN DE LECTURA" cluster="Acolchados" image={image} service="acolchados">
  <p className="article-lead"><strong>Respuesta corta:</strong> lavar un acolchado no tiene un precio único. Depende del tamaño, del tipo de relleno, del estado en que llega y de si tiene manchas que tratar; el retiro y la entrega, si los necesitás, se suman aparte. La forma más rápida de saberlo es mandar una foto del acolchado y de su etiqueta: con eso te pasamos el importe antes de que lo dejes.</p>

  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#factores">Qué cambia el precio</a></li><li><a href="#pedir">Cómo pedir un precio sin vueltas</a></li><li><a href="#casa">Lavarlo en casa: el costo que no se ve</a></li><li><a href="#cuando">Cuándo conviene llevarlo</a></li></ol></nav>

  <h2 id="factores">Qué cambia el precio de lavar un acolchado</h2>
  <p>Cuando alguien pregunta cuánto cuesta lavar un acolchado, en realidad está preguntando por cuatro o cinco cosas a la vez. Estas son las que más pesan:</p>
  <div className="frequency-grid">
    <article><strong>Tamaño</strong><p>Una plaza, dos plazas o medidas más grandes. Más tamaño es más agua, más espacio en el tambor y más tiempo de secado.</p></article>
    <article><strong>Relleno</strong><p>Fibra sintética, pluma, lana u otras mezclas. La pluma y la lana piden un lavado y un secado más cuidados.</p></article>
    <article><strong>Estado</strong><p>Olor a humedad, relleno apelmazado, costuras flojas o roturas cambian el trabajo y a veces lo limitan.</p></article>
    <article><strong>Manchas</strong><p>Una mancha puntual se trata antes del lavado. No todas salen, y eso también se avisa antes de aceptar el acolchado.</p></article>
  </div>
  <p>Hay un quinto factor que no depende del acolchado: si querés que lo pasemos a buscar y te lo llevemos, el retiro y la entrega se cotizan aparte según tu zona.</p>
  <div className="article-callout"><strong>La etiqueta manda</strong><p>Antes de cualquier precio hay que saber qué admite el acolchado. Si la etiqueta no permite lavado con agua o el relleno está dañado, lo correcto es decirlo antes, no después. Si no sabés leerla, mirá nuestra <Link href="/blog/simbolos-de-lavado-de-un-acolchado">guía de símbolos de un acolchado</Link>.</p></div>

  <h2 id="pedir">Cómo pedir un precio sin vueltas</h2>
  <p>Con estos datos se puede pasar un importe sin que tengas que trasladar el acolchado solo para preguntar:</p>
  <ol className="article-steps">
    <li><strong>Foto del acolchado completo.</strong><span>Extendido, para ver el tamaño y el estado general.</span></li>
    <li><strong>Foto de la etiqueta.</strong><span>Ahí figuran el relleno y los símbolos de lavado y secado. Si no tiene etiqueta, avisalo.</span></li>
    <li><strong>Fotos de manchas o roturas.</strong><span>Y, si podés, contanos qué produjo la mancha y si le pusiste algún producto.</span></li>
    <li><strong>Medida y cantidad.</strong><span>Una plaza, dos plazas o más grande, y cuántos son si llevás varios.</span></li>
    <li><strong>Si necesitás retiro.</strong><span>Tu dirección, para pasarte también el costo de buscarlo y llevarlo.</span></li>
  </ol>

  <figure className="article-image">
    <Image src={image} alt="Revisión de una mancha y del relleno de un acolchado antes de pasar el precio del lavado" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/>
    <figcaption>Tamaño, relleno, estado y manchas: lo que se mira antes de pasar un importe.</figcaption>
  </figure>

  <h2 id="casa">Lavarlo en casa: el costo que no se ve</h2>
  <p>Lavar un acolchado en casa parece gratis, pero tiene costos que aparecen después. El más común es el secado: la funda puede sentirse seca mientras el relleno todavía guarda humedad, y un acolchado guardado así toma olor o se apelmaza. En una ciudad costera como Mar del Plata, donde el aire suele estar húmedo, secarlo bien al aire puede llevar más de lo que uno espera.</p>
  <ul><li><strong>Tamaño del lavarropas:</strong> si el acolchado no se mueve con holgura, no se enjuaga parejo. Mirá <Link href="/blog/como-lavar-un-acolchado-de-plumas">cómo saber si entra en tu lavarropas</Link>.</li><li><strong>Secado:</strong> necesita espacio, ventilación y tiempo, o una secadora con capacidad. Lo explicamos en <Link href="/blog/como-secar-un-acolchado">cómo secar un acolchado</Link>.</li><li><strong>Riesgo:</strong> un relleno de pluma mal secado o lavado con más calor del permitido puede no recuperarse.</li></ul>

  <aside className="a-cta">
    <div><strong>¿Querés saber cuánto sale el tuyo?</strong><p>Mandanos una foto del acolchado y de la etiqueta y te pasamos el importe antes de que lo traigas.</p></div>
    <WhatsAppLink className="btn btn--light" message="Hola Aquabon, quiero saber cuánto cuesta lavar mi acolchado. Es de __ plazas y el relleno es __. Les mando una foto del acolchado y de la etiqueta." ubicacion="guia" servicio="acolchados"><WhatsAppIcon />Consultar el precio</WhatsAppLink>
  </aside>

  <h2 id="cuando">Cuándo conviene llevarlo a una lavandería</h2>
  <p>Conviene cuando no entra holgado en tu lavarropas, cuando es de pluma o lana, cuando no tenés dónde secarlo bien o cuando tiene olor a humedad o manchas. También es una buena idea antes de guardarlo al terminar el invierno: guardarlo limpio y bien seco evita que tome olor durante los meses de placard. Si no sabés cada cuánto lavarlo, mirá <Link href="/blog/cada-cuanto-lavar-un-acolchado">cada cuánto hay que lavar un acolchado</Link>.</p>
  <p>En Aquabon revisamos tamaño, tejido, relleno y estado antes de confirmar el <Link href="/servicios/lavado-de-acolchados">lavado de acolchados</Link>, y te pasamos importe y plazo antes de que lo dejes. Estamos en Gascón 2189, en el centro de Mar del Plata, y también lo podemos <Link href="/servicios/retiro-y-entrega-de-ropa">pasar a buscar</Link> en Centro, Güemes, Chauvin y La Perla.</p>

  <h2>Preguntas frecuentes</h2>
  {faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}

  <section className="article-sources"><strong>Fuente técnica consultada</strong><p>Símbolos de lavado, secado y cuidado profesional de <a href="https://www.ginetex.net/gb/labelling/care-symbols.asp" target="_blank" rel="noreferrer">GINETEX</a>.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
