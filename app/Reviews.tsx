import { business } from "./site";

export type Review = { author: string; text: string; date?: string };

// TODO(joaco): pegar reseñas reales copiadas del perfil de Google Business (texto literal, nombre como figura en Google).
// Mientras la lista esté vacía, el bloque no se muestra. No agregar aggregateRating al JSON-LD hasta tenerlas.
export const reviews: Review[] = [];

export default function Reviews() {
  if (!reviews.length) return null;
  return <section className="section" aria-labelledby="resenas-titulo">
    <div className="wrap">
      <div className="section-head"><h2 id="resenas-titulo">Lo que dicen quienes ya nos dejaron su ropa</h2><p>Reseñas publicadas en nuestro <a className="link" href={business.googleBusiness} target="_blank" rel="noreferrer">perfil de Google</a>.</p></div>
      <ul className="reviews">{reviews.map(r => <li key={r.author + r.text.slice(0, 12)}><figure><blockquote>{r.text}</blockquote><figcaption>{r.author}{r.date ? `, ${r.date}` : ""}</figcaption></figure></li>)}</ul>
    </div>
  </section>;
}
