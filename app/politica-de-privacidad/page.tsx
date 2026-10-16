import LegalPage, { legalMetadata } from "../LegalPage";
import { business, legal } from "../site";

export const metadata = legalMetadata("Política de privacidad", "/politica-de-privacidad");

export default function Page() {
  return <LegalPage title="Política de privacidad" path="/politica-de-privacidad">
    <h2>Quién es responsable de tus datos</h2>
    <p>{business.name}{legal.holder ? ` (${legal.holder}${legal.cuit ? `, CUIT ${legal.cuit}` : ""})` : ""}, con domicilio en {business.street}, {business.city}, provincia de {business.region}, Argentina. Contacto: WhatsApp {business.phoneDisplay} o en el local.</p>

    <h2>Qué datos tratamos</h2>
    <ul>
      <li><strong>Los que nos das vos</strong>, por WhatsApp o en el local: tu nombre, tu teléfono, el detalle del pedido, las fotos de las prendas que nos mandes y, si pedís retiro y entrega, tu dirección.</li>
      <li><strong>Datos de navegación</strong>, con Google Analytics 4: qué páginas se visitan, qué botones se usan, el tipo de dispositivo y navegador, la ciudad o región aproximada y desde dónde llegó la visita. No incluyen tu nombre ni tu teléfono. Ver la <a href="/politica-de-cookies">política de cookies</a>.</li>
    </ul>
    <p>La web no tiene formularios ni cuentas de usuario y no vende por internet.</p>

    <h2>Para qué los usamos</h2>
    <ul>
      <li>Responder tus consultas, darte importe y plazo, y gestionar tu pedido.</li>
      <li>Coordinar el retiro y la entrega, cuando lo pedís.</li>
      <li>Saber qué partes de la web sirven y mejorarla, con datos agregados.</li>
    </ul>
    <p>Usamos tus datos porque nos los das al escribirnos o al dejar tu ropa, y los de navegación con cookies solo si las aceptás en el aviso. No los usamos para publicidad.</p>

    <h2>Con quién se comparten</h2>
    <p>No vendemos ni cedemos datos personales. Para funcionar usamos servicios de terceros que los procesan por nosotros y tienen sus propias políticas:</p>
    <ul>
      <li>WhatsApp (Meta), para las conversaciones.</li>
      <li>Google, por Google Analytics y el mapa de Google Maps del pie de página. Más información en <a href="https://policies.google.com/technologies/partner-sites?hl=es-419" target="_blank" rel="noreferrer">cómo usa Google los datos de los sitios que usan sus servicios</a>.</li>
      <li>Vercel, que aloja esta web.</li>
    </ul>
    <p>Estos servicios pueden guardar datos en servidores fuera de la Argentina.</p>

    <h2>Cuánto tiempo los guardamos</h2>
    <p>Los datos de tus pedidos y conversaciones, mientras haga falta para atenderte y para cumplir obligaciones legales. Los datos de Google Analytics se conservan según el plazo configurado en la herramienta y después se borran.</p>

    <h2>Tus derechos</h2>
    <p>Podés pedir acceso, corrección, actualización o eliminación de tus datos escribiéndonos por WhatsApp al {business.phoneDisplay} o en el local. Te respondemos dentro de los plazos de la Ley 25.326 de Protección de Datos Personales.</p>
    <p>El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N° 25.326. La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales. Más información en <a href="https://www.argentina.gob.ar/aaip/datospersonales" target="_blank" rel="noreferrer">argentina.gob.ar/aaip/datospersonales</a>.</p>

    <h2>Seguridad</h2>
    <p>Cuidamos tus datos con medidas razonables para evitar accesos no autorizados, pérdidas o usos indebidos. La web funciona con conexión segura (HTTPS).</p>

    <h2>Menores de edad</h2>
    <p>La web no está dirigida a menores de 18 años ni busca recolectar sus datos.</p>

    <h2>Cambios en esta política</h2>
    <p>Si cambiamos esta política, publicamos la versión nueva en esta página con su fecha de actualización.</p>
  </LegalPage>;
}
