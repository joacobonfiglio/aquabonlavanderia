import LegalPage, { legalMetadata } from "../LegalPage";
import { ConsentReset } from "../CookieConsent";

export const metadata = legalMetadata("Política de cookies", "/politica-de-cookies");

export default function Page() {
  return <LegalPage title="Política de cookies" path="/politica-de-cookies">
    <h2>Qué son</h2>
    <p>Las cookies son pequeños archivos que una web guarda en tu navegador para recordar información entre visitas. También existen otras formas de guardar datos en el navegador, como el almacenamiento local.</p>

    <h2>Qué usamos y para qué</h2>
    <ul>
      <li><strong>Tu elección sobre cookies</strong> (almacenamiento local <code>aq-consent</code>): recuerda si aceptaste o no la medición, para no volver a preguntarte. Es necesaria y no se comparte con nadie.</li>
      <li><strong>Google Analytics 4</strong> (cookies <code>_ga</code> y <code>_ga_*</code>, de hasta 2 años): miden de forma agregada qué páginas se visitan y qué botones se usan, por ejemplo el de WhatsApp. <strong>Solo se guardan si las aceptás</strong> en el aviso. Si no las aceptás, Google Analytics funciona sin cookies y sin identificarte.</li>
      <li><strong>Google Maps</strong>: el mapa del pie de página lo muestra Google, que puede usar sus propias cookies al cargarlo. Más información en la <a href="https://policies.google.com/technologies/cookies?hl=es-419" target="_blank" rel="noreferrer">política de cookies de Google</a>.</li>
    </ul>
    <p>No usamos cookies publicitarias ni de redes sociales.</p>

    <h2>Cómo cambiar tu elección</h2>
    <p>Podés cambiar tu elección cuando quieras: el aviso vuelve a aparecer.</p>
    <ConsentReset />
    <p>También podés borrar o bloquear cookies desde la configuración de tu navegador, o instalar el <a href="https://tools.google.com/dlpage/gaoptout?hl=es" target="_blank" rel="noreferrer">complemento de inhabilitación de Google Analytics</a>. Si bloqueás todas las cookies, algunas funciones podrían no andar bien.</p>
  </LegalPage>;
}
