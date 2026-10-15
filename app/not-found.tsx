import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página no encontrada | Aquabon",
  description: "Esta página no está disponible. Volvé al inicio de Aquabon y encontrá nuestros servicios de lavandería en Mar del Plata.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return <div className={`aq-renew ${styles.page}`}>
    <SiteHeader />
    <main className={styles.scene} id="contenido">
      <div className={styles.copy}>
        <p className={styles.label}>ERROR 404 / PRENDA NO ENCONTRADA</p>
        <h1>Esta página se fue<br /><em>con la otra media</em></h1>
        <p>Buscamos en el tambor y tampoco está acá. Puede que el enlace haya cambiado o que la dirección no sea correcta.</p>
        <Link className={styles.button} href="/">Volver al inicio de Aquabon ↗</Link>
        <Link className={styles.secondary} href="/servicios">Encontrar un servicio de lavandería →</Link>
      </div>
      <div className={styles.art} aria-hidden="true">
        <span className={styles.code}>4<span>0</span>4</span>
        <svg viewBox="0 0 440 390" fill="none">
          <path d="M18 40Q220 105 422 40" stroke="#bdd0ed" strokeWidth="4" />
          <path d="m175 74-12 133c-2 25-23 34-49 40l-44 12c-25 7-37 36-19 55 13 15 40 19 67 12l87-25c38-11 58-37 61-76l12-140z" fill="#eef3fa" stroke="#09275d" strokeWidth="5" />
          <path d="m175 74-3 38 103 11 3-38z" fill="#bdd0ed" />
          <path d="m177 144 93 10M175 165l93 10M172 186l94 10" stroke="#123e91" strokeWidth="7" />
          <path d="M54 279q45-4 55 49M211 242q15 25 44 19" stroke="#bdd0ed" strokeWidth="18" />
          <path d="m187 56-3 37M255 67l-3 36" stroke="#09275d" strokeWidth="12" strokeLinecap="round" />
          <path d="m346 173 8-18m11 29 20-3m-35 20 7 17" stroke="#bdd0ed" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <div className={styles.ticket}><span>AQUABON / OBJETOS PERDIDOS</span><strong>Una media pendiente<br />Un camino de vuelta</strong><small>DESTINO: EL INICIO ↗</small></div>
      </div>
    </main>
    <SiteFooter showBusiness={false} />
  </div>;
}
