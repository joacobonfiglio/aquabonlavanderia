import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

const title="Cómo sacar manchas de aceite de la ropa";
const description="Qué hacer con una mancha fresca o seca, cómo pretratar sin extender la grasa y por qué no conviene usar la secadora hasta comprobar el resultado.";
const path="/blog/como-sacar-manchas-de-aceite-de-la-ropa";
const faqs=[
  {question:"¿Qué hago apenas cae aceite sobre la ropa?",answer:"Retirá el exceso con una cuchara o papel absorbente y presioná con un paño blanco limpio, sin frotar. Revisá la etiqueta antes de aplicar un producto o lavar la prenda."},
  {question:"¿El detergente para platos sirve para una mancha de aceite?",answer:"Una pequeña cantidad de producto transparente y sin colorantes puede ayudar en algunas prendas lavables porque está formulado para la grasa. Probalo primero en una zona poco visible, no lo uses en tejidos delicados y enjuagá antes de llevar la prenda al lavarropas para evitar exceso de espuma."},
  {question:"¿Cómo sacar una mancha de aceite que ya se secó?",answer:"Pretratala con un producto apto para el tejido y repetí el lavado si hace falta. No planches ni uses secadora mientras quede la aureola, porque el calor puede dificultar su eliminación."},
  {question:"¿Sirve poner bicarbonato o talco?",answer:"Un polvo absorbente puede tomar parte del aceite superficial en una mancha reciente, pero no reemplaza el pretratamiento y el lavado. Retiralo por completo antes de continuar y evitá usarlo en prendas cuya etiqueta exija cuidado profesional."},
  {question:"¿Cuándo conviene llevar la prenda a tintorería?",answer:"Cuando la etiqueta indica cuidado profesional, el tejido es seda, lana, cuero o gamuza, la prenda tiene estructura o la mancha es antigua. No apliques productos caseros antes porque pueden fijarla, extenderla o decolorar el material."}
];

export const metadata:Metadata={title:"Cómo sacar manchas de aceite de la ropa | Aquabon",description:"Cómo sacar manchas de aceite de la ropa según tejido y etiqueta. En Aquabon, Mar del Plata, evaluamos tus prendas antes de confirmar su lavado.",alternates:{canonical:path},openGraph:{title,description:"Cómo sacar manchas de aceite de la ropa según tejido y etiqueta. En Aquabon, Mar del Plata, evaluamos tus prendas antes de confirmar su lavado.",type:"article",locale:"es_AR",url:path,publishedTime:"2026-09-28",images:[{url:"/blog/tratar-mancha-aceite-ropa.webp",width:1400,height:788,alt:"Tratamiento de una mancha de aceite en una camisa con un paño absorbente y revisión de la etiqueta"}]}};

export default function Page(){const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};return <ArticleLayout title={title} description={description} slug="como-sacar-manchas-de-aceite-de-la-ropa" date="2026-09-28" readingTime="7 MIN DE LECTURA" cluster="Manchas" image="/blog/tratar-mancha-aceite-ropa.webp" service="tintoreria">
  <p className="article-lead"><strong>Actuá rápido, pero no frotes ni improvises calor.</strong> Primero retirás el aceite que todavía está sobre la superficie; después pretratás con un producto compatible y lavás según la etiqueta. Antes de secar o planchar, comprobá que la aureola desapareció.</p>
  <nav className="article-toc" aria-label="Índice de la guía"><strong>En esta guía</strong><ol><li><a href="#antes">Qué revisar antes</a></li><li><a href="#fresca">Mancha fresca paso a paso</a></li><li><a href="#seca">Si ya está seca</a></li><li><a href="#tejidos">Cuidados por tejido</a></li><li><a href="#errores">Errores frecuentes</a></li></ol></nav>

  <h2 id="antes">Antes de tocar la mancha</h2>
  <ul><li><strong>Leé la etiqueta:</strong> define si la prenda admite lavado doméstico, temperatura y blanqueadores.</li><li><strong>Identificá el tejido:</strong> algodón resistente, lana, seda, cuero y prendas estructuradas no se tratan igual.</li><li><strong>Revisá si es aceite puro o una mezcla:</strong> una salsa puede sumar pigmentos, proteínas o azúcar.</li><li><strong>Probá el producto:</strong> aplicalo primero en una zona interior poco visible y comprobá que no cambie el color.</li></ul>
  <div className="article-callout"><strong>Si dice “solo limpieza en seco”</strong><p>No mojes ni pretrates por tu cuenta. Retirá únicamente el exceso superficial y llevá la prenda indicando qué produjo la mancha y cuándo ocurrió.</p></div>

  <h2 id="fresca">Cómo tratar una mancha de aceite fresca</h2>
  <ol className="article-steps">
    <li><strong>Retirá el exceso.</strong><span>Levantá restos de comida con una cuchara, sin arrastrarlos por la tela.</span></li>
    <li><strong>Absorbé sin frotar.</strong><span>Presioná con papel o un paño blanco limpio desde el borde hacia el centro. Cambiá de zona a medida que toma aceite.</span></li>
    <li><strong>Aplicá un absorbente si corresponde.</strong><span>En una prenda lavable y resistente, una capa fina de maicena o bicarbonato puede ayudar a tomar aceite superficial. Dejala unos minutos y retirala suavemente.</span></li>
    <li><strong>Pretratá.</strong><span>Usá detergente líquido o quitamanchas indicado para grasa y compatible con el tejido. Respetá cantidad y tiempo del envase.</span></li>
    <li><strong>Lavá según la etiqueta.</strong><span>Elegí el ciclo y la temperatura permitidos; más calor no siempre significa más seguridad para la prenda.</span></li>
    <li><strong>Comprobá antes de secar.</strong><span>Mirala con buena luz. Si queda una aureola, repetí el tratamiento antes de aplicar calor.</span></li>
  </ol>

  <figure className="article-image"><Image src="/blog/tratar-mancha-aceite-ropa.webp" alt="Mano presionando un paño blanco sobre una mancha de aceite en una camisa celeste mientras se revisa la etiqueta" width={1400} height={788} sizes="(max-width: 900px) 100vw, 760px"/><figcaption>Presionar con un paño absorbente ayuda a retirar aceite superficial sin extender la mancha por las fibras.</figcaption></figure>

  <h2 id="seca">¿Qué hacer si la mancha ya está seca?</h2>
  <p>Una mancha antigua puede necesitar más de un ciclo de pretratamiento y lavado. Aplicá un quitamanchas apto para aceite o una pequeña cantidad de detergente líquido, dejalo actuar solamente durante el tiempo indicado y lavá la prenda completa para retirar residuos.</p>
  <p>El American Cleaning Institute recomienda repetir el proceso si la mancha permanece antes de colocar la ropa en la secadora. Esa comprobación es decisiva: una aureola tenue puede hacerse más difícil de retirar después del calor.</p>
  <p>No acumules remedios distintos sobre la misma zona. Si un tratamiento no funcionó, enjuagá según las instrucciones antes de probar otro; nunca mezcles lavandina con otros limpiadores.</p>

  <h2 id="tejidos">El tejido cambia el método</h2>
  <div className="frequency-grid">
    <article><strong>Algodón y jean lavables</strong><p>Suelen admitir pretratamiento con detergente, pero siempre mandan la etiqueta, la solidez del color y la temperatura permitida.</p></article>
    <article><strong>Sintéticos</strong><p>La grasa puede adherirse con fuerza y el calor puede afectar la fibra. Usá producto compatible y evitá secar hasta revisar.</p></article>
    <article><strong>Lana y seda</strong><p>No frotes ni uses lavavajillas por rutina. Si la etiqueta indica cuidado profesional, limitate a absorber el exceso.</p></article>
    <article><strong>Sacos y prendas estructuradas</strong><p>Forros, entretelas y hombreras agregan riesgo. Una mancha pequeña no justifica mojar toda la construcción.</p></article>
    <article><strong>Cuero, gamuza y nobuck</strong><p>Necesitan productos específicos; agua, polvos y desengrasantes domésticos pueden dejar cercos o cambiar la textura.</p></article>
    <article><strong>Prendas de color intenso</strong><p>Probá primero en una zona oculta y evitá blanqueadores no autorizados por la etiqueta.</p></article>
  </div>

  <h2 id="errores">Seis errores que empeoran la mancha</h2>
  <ul><li><strong>Frotar con fuerza:</strong> extiende la grasa y castiga la superficie.</li><li><strong>Mojar antes de retirar el exceso:</strong> dificulta absorber el aceite superficial.</li><li><strong>Usar cualquier desengrasante:</strong> un producto para cocina no necesariamente es apto para textiles.</li><li><strong>Aplicar lavandina por ser ropa blanca:</strong> la etiqueta y la composición determinan si puede usarse.</li><li><strong>Planchar o secar sin revisar:</strong> el calor puede fijar la aureola restante.</li><li><strong>Ocultar qué producto se aplicó:</strong> si acudís a una tintorería, contá todo el tratamiento previo.</li></ul>

  <h2>¿Cuándo conviene pedir ayuda?</h2>
  <p>Si la prenda es delicada, estructurada, de valor o la mancha ya pasó por calor, evitá seguir probando mezclas. En Aquabon recibimos prendas para evaluación de <Link href="/servicios/tintoreria">tintorería</Link> en Gascón 2189, en el centro de Mar del Plata. Antes de confirmar el proceso, el precio y el plazo revisamos etiqueta, tejido y estado de la mancha; ningún método responsable puede garantizar que todas las manchas desaparezcan sin riesgo.</p>
  <p>Si no sabés qué tipo de cuidado necesita la prenda, consultá también <Link href="/blog/diferencia-entre-lavanderia-y-tintoreria">la diferencia entre lavandería y tintorería</Link> y <Link href="/blog/que-prendas-conviene-llevar-a-la-tintoreria">qué prendas conviene llevar a cuidado profesional</Link>.</p>

  <h2>Preguntas frecuentes</h2>{faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}
  <section className="article-sources"><strong>Fuentes técnicas consultadas</strong><p><a href="https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide" target="_blank" rel="noreferrer">American Cleaning Institute: guía de eliminación de manchas</a> y <a href="https://tide.com/es-us/como-lavar-la-ropa/como-remover-las-manchas/manchas-de-aceite" target="_blank" rel="noreferrer">Tide: tratamiento de manchas de aceite</a>.</p></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
</ArticleLayout>}
