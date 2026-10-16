import LegalPage, { legalMetadata } from "../LegalPage";
import { business, legal } from "../site";

export const metadata = legalMetadata("Términos y condiciones", "/terminos-y-condiciones");

export default function Page() {
  return <LegalPage title="Términos y condiciones" path="/terminos-y-condiciones">
    <h2>Quiénes somos</h2>
    <p>Esta web es de {business.name}{legal.holder ? ` (${legal.holder}${legal.cuit ? `, CUIT ${legal.cuit}` : ""})` : ""}, lavandería y tintorería en {business.street}, {business.city}. Contacto: WhatsApp {business.phoneDisplay}.</p>

    <h2>Para qué sirve esta web</h2>
    <p>La web es informativa: describe nuestros servicios y te permite escribirnos por WhatsApp. No se contratan ni se pagan servicios a través de ella y no publica precios.</p>

    <h2>Cómo se confirma un servicio</h2>
    <p>El importe, el plazo y las condiciones de cada pedido se confirman por WhatsApp o en el local, después de ver la prenda o el pedido. Lo que acordemos en ese momento es lo que vale para ese pedido.</p>

    <h2>Resultados</h2>
    <p>El resultado de un lavado, una limpieza o un teñido depende del tejido, el estado, el desgaste, las manchas y lo que indica la etiqueta de cada prenda. Por eso no podemos garantizar resultados que dependen de esas características.</p>

    <h2>Guías y contenido</h2>
    <p>Las guías del blog son orientativas. Antes de lavar una prenda en casa, revisá su etiqueta: si tenés dudas, consultanos. Los textos, las imágenes y el diseño de esta web no se pueden copiar ni usar con fines comerciales sin nuestra autorización.</p>

    <h2>Enlaces a otros sitios</h2>
    <p>La web tiene enlaces a servicios de terceros, como WhatsApp, Instagram y Google Maps, que tienen sus propias condiciones.</p>

    <h2>Tus derechos como consumidor</h2>
    <p>Estos términos no limitan los derechos que te da la Ley 24.240 de Defensa del Consumidor. Se aplican las leyes de la República Argentina.</p>

    <h2>Datos personales</h2>
    <p>El uso de tus datos se explica en la <a href="/politica-de-privacidad">política de privacidad</a> y en la <a href="/politica-de-cookies">política de cookies</a>.</p>
  </LegalPage>;
}
