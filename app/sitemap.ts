import type { MetadataRoute } from "next";
import { SITE_URL, services, businessLinks } from "./site";
import { guides, guidePillars, pillarPath } from "./guides";
import { areas } from "./LocalLanding";

// Se arma solo desde los registros de contenido: un servicio, guía, rubro o barrio nuevo entra sin tocar
// este archivo. tests/sitemap-coverage.test.mjs falla si alguna página de app/ queda afuera.
// (Las legales tienen noindex y no van.)
export const sitemapPaths = [
  "/", "/servicios", "/empresas", "/blog", "/nosotros", "/lavanderia-mar-del-plata",
  ...Object.keys(areas).map(slug => "/" + slug),
  ...services.map(s => s.href),
  ...businessLinks.map(b => b.href),
  ...guides.map(g => g.href),
  ...guidePillars.map(p => pillarPath(p.id)),
];

// Última modificación conocida por ruta (las que no figuran usan la fecha del rediseño).
const REDESIGN = "2026-10-15";
const dates: Record<string, string> = {
  "/blog/mancha-de-mate-en-la-ropa": "2026-11-20", "/blog/como-lavar-zapatillas-blancas": "2026-11-20",
  "/blog/como-lavar-un-acolchado": "2026-11-20", "/blog": "2026-11-20",
  "/blog/como-guardar-acolchados-en-verano": "2026-11-20", "/blog/como-lavar-la-ropa-despues-de-la-playa": "2026-11-20",
  "/blog/lavar-campera-de-plumas": "2026-11-20", "/empresas/lavanderia-airbnb": "2026-11-20",
  ...Object.fromEntries(guidePillars.map(p => [pillarPath(p.id), "2026-11-20"])),
  "/blog/cuando-llevar-la-campera-a-la-tintoreria": "2026-11-20",
  "/blog/como-sacar-manchas-dificiles-de-la-ropa": "2026-11-20",
  "/blog/checklist-recambio-ropa-blanca-airbnb": "2026-11-20", "/blog/como-preparar-la-ropa-blanca-de-un-alquiler-temporario": "2026-11-20",
  "/blog/cuanto-cuesta-lavar-un-acolchado": "2026-11-20",
  "/servicios/retiro-y-entrega-de-ropa": "2026-10-24",
  "/lavanderia-la-perla-mar-del-plata": "2026-10-24",
  "/lavanderia-chauvin-mar-del-plata": "2026-10-24",
  "/lavanderia-guemes-mar-del-plata": "2026-10-24",
  "/lavanderia-centro-mar-del-plata": "2026-10-24",
  "/blog/como-lavar-un-sweater-de-lana": "2026-11-20", "/servicios/limpieza-de-vestidos-de-fiesta": "2026-10-16",
  "/blog/como-sacar-olor-a-humo-de-la-ropa": "2026-11-20", "/blog/como-secar-ropa-dentro-de-casa": "2026-11-20",
  "/blog/hay-que-lavar-la-ropa-nueva": "2026-11-20", "/blog/cuanto-detergente-usar": "2026-11-20",
  "/blog/como-evitar-que-la-ropa-destina": "2026-11-20", "/blog/como-lavar-jeans-sin-perder-color": "2026-11-20",
  "/blog/como-sacar-manchas-de-transpiracion": "2026-11-20", "/blog/como-lavar-ropa-delicada": "2026-11-20",
  "/blog/como-lavar-camisas-sin-arruinarlas": "2026-11-20", "/blog/como-sacar-maquillaje-de-la-ropa": "2026-11-20",
  "/blog/simbolos-de-lavado-de-la-ropa": "2026-11-20",
  "/blog/como-lavar-un-acolchado-de-plumas": "2026-11-20",
  "/blog/simbolos-de-lavado-de-un-acolchado": "2026-11-20", "/blog/como-secar-un-acolchado": "2026-11-20",
  "/blog/cada-cuanto-lavar-un-acolchado": "2026-11-20", "/blog/como-sacar-olor-a-humedad-de-un-acolchado": "2026-11-20",
  "/blog/diferencia-entre-lavanderia-y-tintoreria": "2026-11-20", "/blog/que-prendas-conviene-llevar-a-la-tintoreria": "2026-11-20",
  "/blog/como-limpiar-un-tapado-sin-danarlo": "2026-11-20", "/blog/como-limpiar-un-saco": "2026-11-20",
  "/blog/que-es-la-limpieza-en-seco": "2026-11-20", "/blog/se-pueden-lavar-zapatillas-en-el-lavarropas": "2026-11-20",
  "/blog/como-secar-zapatillas-sin-deformarlas": "2026-11-20", "/blog/como-sacar-el-olor-de-las-zapatillas": "2026-11-20",
  "/blog/como-guardar-la-ropa-de-invierno": "2026-11-20",
  "/blog/como-evitar-que-la-ropa-se-encoja": "2026-11-20",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [...new Set(sitemapPaths)]
    .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)))
    .map(p => ({
      url: SITE_URL + (p === "/" ? "/" : p),
      lastModified: new Date(dates[p] ?? REDESIGN),
      changeFrequency: p === "/" || p === "/blog" ? "weekly" : "monthly",
      priority: p === "/" ? 1 : p.startsWith("/servicios/") ? 0.9 : p.startsWith("/blog/") ? 0.6 : 0.7,
    }));
}
