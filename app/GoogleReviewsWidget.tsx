"use client";

import { useRef } from "react";
import styles from "./google-reviews.module.css";
export type GoogleReview = { id: string; name: string; photoUrl?: string; rating: number; text: string; dateLabel?: string; sourceUrl: string };
const profile = "https://share.google/L9kn23nPWPLthwKMR";
export default function GoogleReviewsWidget({ reviews = [] }: { reviews?: GoogleReview[] }) {
  const track = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * ((card?.offsetWidth || 320) + 18), behavior: reduced ? "instant" : "smooth" });
  }
  return <section className={styles.widget} aria-label="Reseñas de Aquabon en Google" id="resenas">
    <header className={styles.header}><div><p className={styles.label}>LO QUE DICEN DE AQUABON</p><h2>Tu ropa, en buenas manos</h2><span className={styles.source}><span className={styles.google} aria-hidden="true">G</span> Reseñas publicadas en Google</span></div><a href={profile} target="_blank" rel="noreferrer">Ver en Google ↗</a></header>
    {!reviews.length && <p className={styles.previewNotice}>Vista previa del widget · las reseñas reales y sus fotos están pendientes de incorporar</p>}
    <div className={styles.track} ref={track} tabIndex={0} aria-label="Deslizá para ver las reseñas">
      {reviews.length ? reviews.map(review => <article className={styles.card} key={review.id}><div className={styles.author}>{review.photoUrl ? <img src={review.photoUrl} alt={`Foto de perfil de ${review.name}`} width="48" height="48" loading="lazy" referrerPolicy="no-referrer"/> : <span className={styles.avatar} aria-hidden="true">{review.name.trim().split(/\s+/).slice(0,2).map(s=>s[0]).join("")}</span>}<div><strong>{review.name}</strong>{review.dateLabel && <span>{review.dateLabel}</span>}</div><span className={styles.google} aria-label="Google">G</span></div><div className={styles.stars} aria-label={`${review.rating} de 5 estrellas`}>{[1,2,3,4,5].map(n=><span key={n} aria-hidden="true" className={n <= review.rating ? styles.filled : styles.unfilled}>★</span>)}</div><blockquote>{review.text}</blockquote><a className={styles.original} href={review.sourceUrl} target="_blank" rel="noreferrer">Leer reseña original ↗</a></article>) : [0,1,2].map(n=><article className={`${styles.card} ${styles.placeholder}`} key={n} aria-label={`Tarjeta de reseña pendiente ${n+1}`}><div className={styles.author}><span className={styles.silhouette} aria-hidden="true">♙</span><div><strong>Nombre del cliente</strong><span>Foto de perfil de Google</span></div><span className={styles.google} aria-hidden="true">G</span></div><span className={styles.pending}>Reseña pendiente de verificar</span><div className={styles.lines} aria-hidden="true"><i/><i/><i/><i/></div><p>Acá se mostrará el texto real de la reseña</p></article>)}
    </div>
    <footer className={styles.footer}><span>{reviews.length ? "Opiniones de clientes en Google" : "Maqueta visual · sin testimonios de ejemplo"}</span><div><button type="button" onClick={()=>move(-1)} aria-label="Ver reseñas anteriores">←</button><button type="button" onClick={()=>move(1)} aria-label="Ver reseñas siguientes">→</button></div></footer>
  </section>;
}
