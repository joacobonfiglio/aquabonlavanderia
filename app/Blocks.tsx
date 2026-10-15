import type { ReactNode } from "react";
import Link from "next/link";
import Img from "./Img";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { business, hours, type CareSymbolName } from "./site";
import { CareSymbol } from "./ui";
import type { Guide } from "./guides";

// Bloques visuales compartidos por la home y las páginas internas.

export function Waves({ className = "" }: { className?: string }) {
  // Las tres olas del logo, en loop horizontal (solo transform).
  const d = "M0 40 C 150 0 300 0 450 40 S 750 80 900 40 S 1200 0 1350 40 S 1650 80 1800 40 V 120 H 0 Z";
  return <div className={"waves " + className} aria-hidden="true">
    <svg viewBox="0 0 1800 120" preserveAspectRatio="none" className="waves__l1"><path d={d} /></svg>
    <svg viewBox="0 0 1800 120" preserveAspectRatio="none" className="waves__l2"><path d={d} /></svg>
    <svg viewBox="0 0 1800 120" preserveAspectRatio="none" className="waves__l3"><path d={d} /></svg>
  </div>;
}

export function Ribbon({ words }: { words: string[] }) {
  return <div className="ribbon" aria-hidden="true">
    <div className="ribbon__track">
      {[0, 1].map(k => <span key={k}>{words.map(w => <span key={w + k}>{w}<svg viewBox="0 0 38 12"><path d="M1 6c4.5-4 8.5-4 12.5 0s8.5 4 12.5 0 8.5-4 11 0" /></svg></span>)}</span>)}
    </div>
  </div>;
}

// Hero oscuro para páginas internas: miga, kicker, H1 grande, foto con chip flotante y olas.
export function PageHero({ crumbs, kicker, title, lead, actions, image, chip, facts = true }: {
  crumbs: Crumb[]; kicker: string; title: string; lead: string; actions: ReactNode;
  image?: { src: string; alt: string }; chip?: { symbol?: CareSymbolName; text: string }; facts?: boolean;
}) {
  return <section className="p-hero" aria-labelledby="page-titulo" data-cta-zone="">
    <div className="wrap">
      <div className="p-hero__crumbs"><Breadcrumbs items={crumbs} /></div>
      <div className={"p-hero__grid" + (image ? "" : " p-hero__grid--solo")}>
        <div className="p-hero__copy">
          <p className="h-hero__kicker">{kicker}</p>
          <h1 id="page-titulo">{title}</h1>
          <p className="p-hero__lead">{lead}</p>
          <div className="h-hero__actions">{actions}</div>
          {facts ? <dl className="h-hero__facts">
            <div><dt>Dirección</dt><dd>{business.street}</dd></div>
            {hours.map(h => <div key={h.label}><dt>{h.short}</dt><dd>{h.text}</dd></div>)}
          </dl> : null}
        </div>
        {image ? <div className="p-hero__media">
          <div className="p-hero__photo"><Img src={image.src} alt={image.alt} width={1200} height={900} sizes="(max-width: 960px) 92vw, 520px" priority /></div>
          {chip ? <div className="p-hero__chip">{chip.symbol ? <CareSymbol name={chip.symbol} /> : null}<span>{chip.text}</span></div> : null}
          <span className="p-hero__bubbles" aria-hidden="true"><i /><i /><i /><i /></span>
        </div> : null}
      </div>
    </div>
    <Waves className="waves--hero" />
  </section>;
}

export type Step = { title: string; copy: string; image: string; alt: string };

// Pasos con foto fija que cambia según el scroll (desktop) y foto por paso (mobile).
export function Process({ title, steps, cta, id = "como-funciona" }: { title: string; steps: Step[]; cta?: ReactNode; id?: string }) {
  return <section className="h-proc" id={id} aria-labelledby={id + "-titulo"} data-steps="" data-active="0">
    <div className="wrap h-proc__grid">
      <div className="h-proc__media" aria-hidden="true">
        {steps.map((s, i) => <figure key={s.title} data-index={i}><Img src={s.image} alt="" width={1000} height={1250} sizes="(max-width: 960px) 100vw, 520px" /></figure>)}
        <div className="h-proc__dots">{steps.map((s, i) => <i key={s.title} data-index={i} />)}</div>
      </div>
      <div>
        <h2 id={id + "-titulo"} data-reveal>{title}</h2>
        <ol className="h-proc__steps">
          {steps.map((s, i) => <li key={s.title} data-step={i}>
            <span className="h-proc__n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
            <div className="h-proc__mobile-img"><Img src={s.image} alt={s.alt} width={1000} height={1250} sizes="100vw" /></div>
          </li>)}
        </ol>
        {cta ? <div className="h-proc__cta" data-reveal>{cta}</div> : null}
      </div>
    </div>
  </section>;
}

// Soga con la ropa colgada: avanza en horizontal a medida que se hace scroll vertical.
export function Clothesline({ title, items }: { title: string; items: { name: string; href: string; short: string; image: string; alt: string }[] }) {
  return <div className="clothesline" data-reveal data-hscroll="">
    <div className="wrap"><h3>{title}</h3></div>
    <div className="clothesline__scroller">
      <div className="clothesline__track" data-hscroll-track="">
        <svg className="clothesline__rope" viewBox="0 0 2000 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 8 Q 1000 44 2000 8" /></svg>
        <ul>
          {items.map((s, i) => <li key={s.href} style={{ ["--tilt" as string]: `${i % 2 ? 1.6 : -1.8}deg`, ["--d" as string]: `${i * 70}ms` }}>
            <span className="pin" aria-hidden="true" />
            <Link href={s.href}>
              <Img src={s.image} alt={s.alt} width={480} height={600} sizes="240px" />
              <strong>{s.name}</strong>
              <span>{s.short}</span>
            </Link>
          </li>)}
        </ul>
      </div>
    </div>
  </div>;
}

export function GuideCards({ guides, big = false, compact = false }: { guides: Guide[]; big?: boolean; compact?: boolean }) {
  return <ul className={"g-cards" + (big ? " g-cards--big" : "") + (compact ? " g-cards--compact" : "")}>
    {guides.map((g, i) => <li key={g.href} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
      <Link href={g.href}>
        <span className="g-cards__img"><Img src={g.image} alt={g.alt} width={700} height={467} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" /></span>
        <span className="g-cards__tag">{g.cluster}</span>
        <strong>{g.title}</strong>
        <span className="g-cards__desc">{g.description}</span>
      </Link>
    </li>)}
  </ul>;
}
