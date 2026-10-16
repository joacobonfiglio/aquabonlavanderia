import Link from "next/link";
import type { LandingData } from "./SeoLanding";
import type { ServiceDesign } from "./service-design";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppLink from "./WhatsAppLink";
import ChatPreview from "./ChatPreview";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import Img from "./Img";
import { Clothesline, GuideCards, PageHero, Process, Ribbon, type Step } from "./Blocks";
import { WhatsAppIcon } from "./ui";
import { SITE_URL, business, services } from "./site";
import { guide } from "./guides";
import { seoDescriptions } from "./seo-descriptions";

// Foto para cada cosa que incluye el servicio: por palabra clave, si no, del pool del servicio.
function itemImage(title: string, i: number, pool: string[]) {
  const t = title.toLowerCase();
  if (t.includes("lavad")) return "/blog/medir-detergente-para-lavar.webp";
  if (t.includes("secad")) return "/blog/secar-ropa-adentro-ventilacion.webp";
  if (t.includes("doblad")) return "/laundry-hero-v2.webp";
  if (t.includes("planch")) return "/services/planchado-v3.webp";
  if (t.includes("retir") || t.includes("entrega")) return "/services/retiro-v3.webp";
  return pool[i % pool.length];
}

function stepImages(n: number, main: string) {
  if (n >= 4) return ["/services/retiro-v3.webp", "/blog/leer-simbolos-etiqueta-ropa.webp", "/blog/medir-detergente-para-lavar.webp", "/laundry-hero-v2.webp"];
  return [main, "/blog/leer-simbolos-etiqueta-ropa.webp", "/laundry-hero-v2.webp"];
}

export default function ServiceLanding({ data, design }: { data: LandingData; design: ServiceDesign }) {
  const url = SITE_URL + data.path;
  const description = seoDescriptions[data.path] ?? data.description;
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", "@id": url + "#service",
    name: data.h1, serviceType: design.name, description, url,
    image: SITE_URL + design.image,
    provider: { "@id": SITE_URL + "/#business" },
    areaServed: { "@type": "City", name: "Mar del Plata" },
    availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@id": SITE_URL + "/#business" }, servicePhone: business.phoneE164 },
  };
  const relatedGuides = design.guides.map(guide);
  const sideImage = relatedGuides[0]?.image ?? "/laundry-detail-v2.webp";
  const imgs = stepImages(data.steps.length, design.image);
  const steps: Step[] = data.steps.map((s, i) => ({ ...s, image: imgs[i % imgs.length], alt: `${s.title}, ${design.name.toLowerCase()} en Aquabon` }));
  const others = services.filter(s => s.href !== data.path);
  const pool = [design.image, ...relatedGuides.map(g => g.image), "/laundry-detail-v2.webp"];
  const words = data.items.every(i => i.title.length <= 28) ? data.items.map(i => i.title) : [design.name, "Mar del Plata", "Gascón 2189"];
  return <>
    <SiteHeader event={data.event + "_header"} overlay />
    <main id="contenido" className="page">
      <PageHero
        crumbs={data.crumbs}
        kicker={design.title.join(" ")}
        title={data.h1}
        lead={data.intro}
        image={{ src: design.image, alt: design.alt }}
        chip={{ symbol: design.symbol, text: "Te avisamos por WhatsApp" }}
        actions={<>
          <WhatsAppLink className="btn btn--azul btn--xl" message={data.message} event={data.event} data-primary-cta=""><WhatsAppIcon />{data.cta}</WhatsAppLink>
          <a className="btn btn--outline-light btn--xl" href="#como-funciona">Cómo funciona</a>
        </>}
      />
      <Ribbon words={words} />

      <section className="p-sec" aria-labelledby="incluye-titulo" id="que-incluye">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal>
            <h2 id="incluye-titulo">Qué incluye</h2>
            <p>{design.intro}</p>
          </div>
          <ul className="inc-cards" style={{ ["--n" as string]: data.items.length }}>
            {data.items.map((item, i) => <li key={item.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <Img src={itemImage(item.title, i, pool)} alt={`${item.title} en el servicio de ${design.name.toLowerCase()}`} width={800} height={1000} sizes="(max-width: 760px) 80vw, 300px" />
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
            </li>)}
          </ul>
        </div>
      </section>

      <section className="p-sec p-sec--espuma" aria-labelledby="prendas-titulo">
        <div className="wrap split-media">
          <div className="split-media__img" data-reveal><Img src={sideImage} alt={relatedGuides[0]?.alt ?? ""} width={1000} height={1250} sizes="(max-width: 960px) 100vw, 460px" /></div>
          <div>
            <div className="h-head" data-reveal><h2 id="prendas-titulo">Para qué prendas sirve</h2>{data.sections[0] ? <p>{data.sections[0].text}</p> : null}</div>
            <ul className="fit-cards" data-reveal>{design.guide.map(g => <li key={g.title}><h3>{g.title}</h3><p>{g.copy}</p></li>)}</ul>
            <div className="note" data-reveal><strong>Antes de traerlo</strong>{design.prepare}</div>
          </div>
        </div>
      </section>

      <Process title="Así funciona" steps={steps} cta={<>
        <WhatsAppLink className="btn btn--light btn--xl" message={data.message} event={data.event + "_proceso"}><WhatsAppIcon />{data.cta}</WhatsAppLink>
        <Link className="link link--light" href="/servicios/retiro-y-entrega-de-ropa">¿Necesitás retiro y entrega?</Link>
      </>} />

      <section className="p-sec p-sec--espuma" style={{ paddingBottom: "clamp(40px, 6vw, 64px)" }} aria-labelledby="otros-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" data-reveal><h2 id="otros-titulo">También te podemos ayudar con</h2><p>Todo en el mismo mostrador de {business.street}. Escribinos y lo resolvemos juntos.</p></div>
        </div>
        <Clothesline title="" items={others} />
      </section>

      <section className="p-sec" aria-labelledby="faq-titulo">
        <div className="wrap h-pick__grid">
          <div>
            <div className="h-head" data-reveal><h2 id="faq-titulo">Preguntas frecuentes</h2></div>
            <Faq items={data.faqs} />
          </div>
          <div className="h-pick__ticket" data-reveal>
            <p className="pick-step"><b>✓</b>Tu consulta, lista para enviar</p>
            <ChatPreview data={{ service: design.name.toLowerCase(), message: data.message, event: data.event + "_chat" }} />
          </div>
        </div>
      </section>

      <section className="p-sec p-sec--espuma" style={{ paddingBlock: "clamp(48px, 6vw, 72px)" }} aria-labelledby="guias-titulo">
        <div className="wrap">
          <div className="h-head h-head--split" style={{ marginBottom: 24 }}><h2 id="guias-titulo" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Si preferís hacerlo en casa</h2><p><Link className="link" href="/blog">Ver todas las guías</Link></p></div>
          <GuideCards compact guides={relatedGuides.slice(0, 3)} />
        </div>
      </section>
    </main>
    <SiteFooter />
    <JsonLd data={serviceSchema} />
  </>;
}
