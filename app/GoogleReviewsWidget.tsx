"use client";
import { useRef } from "react";
import { googleProfileUrl } from "./site-data";
import styles from "./google-reviews.module.css";
export type GoogleReview = { id: string; name: string; photoUrl?: string; rating: number; text: string; dateLabel?: string; sourceUrl: string };
export default function GoogleReviewsWidget({ reviews = [] }: { reviews?: GoogleReview[] }) {
  const track = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    element.scrollBy({ left: direction * ((card?.offsetWidth || 320) + 18), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section className={styles.widget} aria-label="Opiniones de Aquabon en Google" id="resenas">
    <header className={styles.header}><div><p className={styles.label}>EXPERIENCIAS REALES</p><h2>Conocé las opiniones de nuestros clientes</h2><span className={styles.source}>Aquabon Lavandería · Google</span></div><a href={googleProfileUrl} target="_blank" rel="noreferrer">Ver opiniones en Google ↗</a></header>
    {reviews.length ? <><div className={styles.track} ref={track} tabIndex={0} aria-label="Reseñas de clientes; deslizá para ver más">{reviews.map(review => <article className={styles.card} key={review.id}><div className={styles.author}>{review.photoUrl ? <img src={review.photoUrl} alt="" width="48" height="48" loading="lazy" referrerPolicy="no-referrer"/> : <span className={styles.avatar} aria-hidden="true">{review.name.trim().split(/\s+/).slice(0,2).map(s=>s[0]).join("")}</span>}<div><strong>{review.name}</strong>{review.dateLabel ? <span>{review.dateLabel}</span> : null}</div></div><div className={styles.stars} aria-label={`${review.rating} de 5 estrellas`}>{[1,2,3,4,5].map(n=><span key={n} aria-hidden="true" className={n <= review.rating ? styles.filled : styles.unfilled}>★</span>)}</div><blockquote>{review.text}</blockquote><a className={styles.original} href={review.sourceUrl} target="_blank" rel="noreferrer">Leer reseña original ↗</a></article>)}</div><footer className={styles.footer}><span>Opiniones publicadas en Google</span><div><button type="button" onClick={()=>move(-1)} aria-label="Ver reseñas anteriores">←</button><button type="button" onClick={()=>move(1)} aria-label="Ver reseñas siguientes">→</button></div></footer></> : <p className={styles.invitation}>Antes de traer tu ropa, podés conocer las experiencias que nuestros clientes comparten en nuestro perfil de Google.</p>}
  </section>;
}
