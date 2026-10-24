import { business } from "./site";

export type Review = { author: string; text: string; excerpt?: boolean };

// Fuente: ficha pública de Google Maps, verificada el 24/10/2026.
// Selección aprobada por Joaco. Fragmentos literales; sin aggregateRating ni sincronización automática.
export const reviews: Review[] = [
  { author: "Natalia Mateu", text: "¡Muy profesionales! Es genial poder contar con ellos siempre que necesito. ¡Trato excelente!" },
  { author: "Aida Martinez", text: "mi ropa siempre huele bien", excerpt: true },
  { author: "Maria Dolores Robles Rodríguez", text: "Todo rápido, prolijo y sin vueltas.", excerpt: true },
];

export default function Reviews() {
  return <section className="reviews-section" id="resenas" aria-labelledby="resenas-titulo">
    <div className="wrap">
      <div className="reviews-heading">
        <h2 id="resenas-titulo">Lo que dicen de Aquabon</h2>
        <a className="link" href={business.googleBusiness} target="_blank" rel="noreferrer">Ver reseñas en Google</a>
      </div>
      <ul className="reviews">{reviews.map(r => <li key={r.author}>
        <figure>
          <p className="reviews-stars" aria-label="5 de 5 estrellas"><span aria-hidden="true">★★★★★</span></p>
          <blockquote>{r.text}</blockquote>
          <figcaption>{r.author}<span className="reviews-source">Google · {r.excerpt ? "Fragmento de reseña" : "Reseña"}</span></figcaption>
        </figure>
      </li>)}</ul>
    </div>
  </section>;
}
