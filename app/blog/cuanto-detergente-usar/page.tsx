import type { Metadata } from "next";
import Image from "../../Img";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cuánto detergente usar en el lavarropas";
const description="Una guía para ajustar la dosis según el producto, el tamaño de la carga, la suciedad y el agua, sin dejar residuos ni lavar de menos.";
const path="/blog/cuanto-detergente-usar";
const faqs=[
  {question:"¿Cuánto detergente hay que poner en el lavarropas?",answer:"No existe una cantidad universal. Empezá por la dosis del envase para tu tamaño de carga y ajustala únicamente según la suciedad, la dureza del agua, la concentración del producto y las instrucciones del lavarropas."},
  {question:"¿Más espuma significa que la ropa queda más limpia?",answer:"No. La espuma no mide por sí sola la limpieza. Un exceso puede dificultar el enjuague, alargar algunos ciclos y dejar residuos en la ropa o en el equipo."},
  {question:"¿Qué pasa si uso demasiado detergente?",answer:"Puede aparecer espuma excesiva, tacto rígido o pegajoso, olor intenso, marcas blancas o producto acumulado. También puede empeorar el enjuague y el rendimiento del lavado."},
  {question:"¿Y si uso muy poco?",answer:"La suciedad, la grasa y los olores pueden no eliminarse bien. Además, parte de la suciedad puede quedar suspendida de forma insuficiente y volver a depositarse sobre las prendas."},
  {question:"¿Se usa la misma dosis de detergente líquido y en polvo?",answer:"No necesariamente. Cada fórmula tiene una concentración y una tabla propia. Usá el medidor del producto y no copies mililitros o gramos de otra marca o formato."},
  {question:"¿Dónde se coloca el detergente?",answer:"Depende del lavarropas y del formato. Revisá el manual para saber si corresponde al cajón, al tambor o a un dosificador automático. Nunca pongas una cápsula en el cajón salvo que el fabricante lo indique."}
];

export const metadata:Metadata={
  title:"Cuánto detergente usar en el lavarropas | Aquabon",
  description:"Cuánto detergente usar según carga, suciedad, concentración y dureza del agua. Evitá residuos y espuma excesiva con esta guía de Aquabon.",
  alternates:{canonical:path},
  openGraph:{title,description,type:"article",locale:"es_AR",url:path,publishedTime:"2026-10-12",images:[{url:"/blog/medir-detergente-para-lavar.webp",width:1400,height:788,alt:"Detergente líquido medido en su tapa junto a una carga de ropa antes del lavado"}]}
};

export default function Page(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <ArticleLayout title={title} description={description} slug="cuanto-detergente-usar" date="2026-10-12" readingTime="7 MIN DE LECTURA" cluster="Lavado" image="/blog/medir-detergente-para-lavar.webp" service="valet">
    <p className="article-lead"><strong>La cantidad correcta no se puede resumir en un número válido para todos los lavados.</strong> Tomá como base la tabla del detergente para el tamaño de tu carga y ajustá solo por nivel de suciedad, dureza del agua, concentración del producto y tipo de lavarropas. Más detergente no significa ropa más limpia.</p>
    <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#respuesta">La respuesta corta</a></li><li><a href="#factores">Qué cambia la dosis</a></li><li><a href="#medir">Cómo medirla</a></li><li><a href="#exceso">Señales de exceso</a></li><li><a href="#poco">Señales de falta</a></li><li><a href="#formatos">Líquido, polvo o cápsulas</a></li></ol></nav>

    <h2 id="respuesta">Cuánto detergente usar: la respuesta corta</h2>
    <p>Leé primero la dosis del envase. Buscá la combinación que más se parezca a tu lavado: carga pequeña, media o grande; suciedad normal o intensa; y agua blanda, media o dura si la tabla lo distingue. Después verificá en el manual del lavarropas si exige detergente de alta eficiencia, limita el dosificador o incorpora dosificación automática.</p>
    <div className="article-callout"><strong>No copies una medida de internet</strong><p>Dos detergentes líquidos pueden tener concentraciones distintas y sus tapas no necesariamente equivalen. Lo mismo ocurre entre polvo, gel y cápsulas. La medida correcta pertenece al producto que estás usando.</p></div>
    <div className="frequency-grid">
      <article><strong>Carga habitual</strong><p>Usá la línea indicada por el fabricante para ese volumen y una suciedad normal.</p></article>
      <article><strong>Carga muy sucia</strong><p>Ajustá solamente si la tabla contempla esa condición. Pretratar una mancha puntual puede ser más eficaz que aumentar toda la dosis.</p></article>
      <article><strong>Agua dura</strong><p>Puede requerir un ajuste porque sus minerales afectan el lavado. Seguí la tabla del producto, no una estimación visual.</p></article>
      <article><strong>Producto concentrado</strong><p>Necesita menos volumen que uno convencional. Usá su tapa, cuchara o dosificador específico.</p></article>
    </div>

    <h2 id="factores">Los cuatro factores que cambian la dosis</h2>
    <ol className="article-steps">
      <li><strong>Tamaño real de la carga.</strong><span>Una carga se evalúa por el volumen y el peso de la ropa, no solo por cuán lleno se ve el tambor. No compactes las prendas para que entren más.</span></li>
      <li><strong>Nivel de suciedad.</strong><span>Ropa de uso cotidiano no necesita la misma dosis que prendas con barro, grasa o mucha transpiración.</span></li>
      <li><strong>Dureza del agua.</strong><span>El contenido de minerales influye en el desempeño. Si no conocés el dato, consultá al proveedor de agua o usá una tira de medición apropiada.</span></li>
      <li><strong>Concentración y máquina.</strong><span>La fórmula del detergente y el tipo de lavarropas determinan la escala. Un equipo de alta eficiencia requiere un producto compatible y de baja espuma.</span></li>
    </ol>
    <p>También importa elegir un ciclo coherente con la prenda. Antes de lavar, revisá los <Link href="/blog/simbolos-de-lavado-de-la-ropa">símbolos de la etiqueta</Link> y separá cargas compatibles por color, tejido y temperatura.</p>

    <h2 id="medir">Cómo medir el detergente paso a paso</h2>
    <ol className="article-steps">
      <li><strong>Leé el envase completo.</strong><span>Identificá concentración, tipo de máquina, escala de carga y advertencias.</span></li>
      <li><strong>Evaluá la carga antes de llenar.</strong><span>Separá prendas y definí tamaño y suciedad sin presionar la ropa dentro del tambor.</span></li>
      <li><strong>Elegí una línea del medidor.</strong><span>Usá la tapa o cuchara del mismo producto. Medir “a ojo” favorece tanto el exceso como la falta.</span></li>
      <li><strong>Colocalo donde corresponde.</strong><span>Seguí el manual: cajón, tambor o sistema automático no son intercambiables.</span></li>
      <li><strong>Observá el resultado.</strong><span>Revisá limpieza, olor, tacto, residuos y enjuague antes de modificar la dosis siguiente.</span></li>
    </ol>
    <figure className="article-image"><Image src="/blog/medir-detergente-para-lavar.webp" alt="Persona midiendo detergente líquido con la tapa graduada junto a una carga media de ropa y un lavarropas abierto" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Medir con el dosificador del propio producto permite seguir su escala y evita verter detergente a ojo.</figcaption></figure>

    <h2 id="exceso">Cómo saber si usaste demasiado detergente</h2>
    <p>Un exceso no siempre se ve como una montaña de espuma. En lavarropas de bajo consumo puede manifestarse como enjuague deficiente, ciclos que se alargan, olor demasiado intenso o residuos que quedan atrapados entre pliegues.</p>
    <ul>
      <li><strong>Espuma persistente:</strong> aparece durante el lavado o sigue presente al terminar.</li>
      <li><strong>Marcas blancas o azuladas:</strong> pueden ser producto que no se disolvió o no se enjuagó bien.</li>
      <li><strong>Tacto rígido, resbaladizo o pegajoso:</strong> la prenda no se siente limpia aunque huela fuerte.</li>
      <li><strong>Acumulación en cajón o tambor:</strong> puede combinarse con baja temperatura, mantenimiento insuficiente o un producto incorrecto.</li>
      <li><strong>Peor rendimiento:</strong> demasiada espuma puede amortiguar el movimiento y retener suciedad.</li>
    </ul>
    <p>Si encontrás residuos, no los tapes con suavizante. Revisá manual, dosificación, carga y temperatura permitida por la etiqueta; una repetición del enjuague puede ayudar cuando el tejido lo admite.</p>

    <h2 id="poco">Cómo saber si la dosis quedó corta</h2>
    <p>Usar menos producto no siempre es más eficiente. La American Cleaning Institute señala que tanto el exceso como la falta pueden dejar la ropa menos limpia que una dosis óptima.</p>
    <ul>
      <li>Persisten olor, grasa o suciedad general después de un ciclo adecuado.</li>
      <li>La ropa clara queda opaca o con suciedad redepositada.</li>
      <li>Las manchas puntuales se lavaron sin el pretratamiento que necesitaban.</li>
      <li>La carga era mayor o estaba más sucia que el nivel elegido en la tabla.</li>
    </ul>
    <p>Antes de aumentar indiscriminadamente, comprobá que el tambor no esté sobrecargado, el programa sea correcto y las manchas hayan recibido un tratamiento compatible. Por ejemplo, una <Link href="/blog/como-sacar-manchas-de-aceite-de-la-ropa">mancha de aceite</Link> requiere un enfoque distinto de la suciedad cotidiana.</p>

    <h2 id="formatos">Detergente líquido, en polvo o cápsulas</h2>
    <div className="frequency-grid">
      <article><strong>Líquido o gel</strong><p>Medilo con su tapa y limpiá el dosificador después. No asumas que una tapa llena equivale a una carga.</p></article>
      <article><strong>En polvo</strong><p>Usá la cuchara indicada y asegurate de que el ciclo y la temperatura admitida permitan una buena disolución.</p></article>
      <article><strong>Cápsulas</strong><p>Son dosis predeterminadas. Manipulalas con manos secas, seguí la posición indicada y mantenelas cerradas y lejos de niños y mascotas.</p></article>
      <article><strong>Dosificación automática</strong><p>Configurá concentración y dureza del agua según el manual; rellenar el depósito no significa que la máquina conozca la fórmula.</p></article>
    </div>
    <p>No mezcles detergentes ni agregues blanqueadores, desinfectantes o quitamanchas sin revisar compatibilidad e instrucciones. Tampoco uses detergente para lavado manual en una máquina si no está indicado: puede generar demasiada espuma.</p>

    <h2>Una regla práctica para el próximo lavado</h2>
    <p>En lugar de buscar una cifra universal, seguí este orden: <strong>envase del detergente → tamaño y suciedad de la carga → dureza del agua → manual del lavarropas → resultado del enjuague</strong>. Si cambiás de marca, concentración o formato, volvé a leer la tabla.</p>
    <p>Si preferís resolver el lavado cotidiano sin calcular cada carga, en Aquabon podés consultar el <Link href="/servicios/valet-de-ropa">servicio de valet de ropa</Link>. Estamos en Gascón 2189, en el centro de Mar del Plata, y también podés preguntar por <Link href="/servicios/retiro-y-entrega-de-ropa">retiro y entrega</Link> según zona y disponibilidad.</p>

    <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
    <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/laundry-basics" target="_blank" rel="noreferrer">American Cleaning Institute: fundamentos del lavado</a>, <a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/laundry-products-and-detergents" target="_blank" rel="noreferrer">ACI: productos y detergentes</a>, <a href="https://producthelp.whirlpool.com/Laundry/Washers/Product_Info/Washer_Product_Assistance/HE_Detergent_use_in_a_Washer" target="_blank" rel="noreferrer">Whirlpool: uso de detergente HE</a> y <a href="https://www.lg.com/us/support/help-library/lg-washing-machine-troubleshooting-laundry-detergent-residue-CT10000012-20154755889312" target="_blank" rel="noreferrer">LG: residuos de detergente</a>.</p></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </ArticleLayout>;
}
