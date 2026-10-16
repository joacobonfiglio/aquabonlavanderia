import { SITE_URL, business, hours, services, businessLinks } from "../site";
import { guides } from "../guides";

// /llms.txt: resumen en texto plano para asistentes de IA. Mismos datos que el resto de la web.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${business.name}`,
    "",
    `> Lavandería y tintorería en ${business.address}, Argentina. ${business.experience}. Consultas y pedidos por WhatsApp; no publicamos precios en la web: se confirman según la prenda antes de dejarla.`,
    "",
    "## Datos del local",
    `- Dirección: ${business.street}, ${business.city}, provincia de ${business.region}, Argentina (centro de Mar del Plata)`,
    ...hours.map(h => `- Horario ${h.label.toLowerCase()}: ${h.text}`),
    "- Domingos: cerrado",
    `- WhatsApp y teléfono: ${business.phoneDisplay}`,
    `- Instagram: ${business.instagram}`,
    `- Perfil en Google: ${business.googleBusiness}`,
    "- Zona: Mar del Plata. Retiro y entrega a domicilio según zona y disponibilidad, a confirmar por WhatsApp.",
    "",
    "## Servicios",
    ...services.map(s => `- [${s.name}](${SITE_URL}${s.href}): ${s.short}`),
    "",
    "## Para empresas",
    `- [Servicios para empresas](${SITE_URL}/empresas): alojamientos, gastronomía, centros de estética, uniformes y ropa deportiva, con volumen y frecuencia acordados.`,
    ...businessLinks.map(b => `- [${b.name}](${SITE_URL}${b.href})`),
    "",
    "## Cómo trabajamos",
    "- Revisamos etiqueta, tejido y estado de cada prenda antes de confirmar el servicio, el precio y el plazo.",
    "- El valet de ropa incluye lavado, secado y doblado; el planchado se pide aparte.",
    "- Para tintorería, Aquabon es el punto de recepción y seguimiento; los tratamientos especializados se coordinan fuera del local.",
    "- Avisamos por WhatsApp cuando el pedido está listo.",
    "",
    "## Guías para cuidar la ropa",
    ...guides.map(g => `- [${g.title}](${SITE_URL}${g.href})`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
