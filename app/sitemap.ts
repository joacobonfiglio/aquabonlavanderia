import type { MetadataRoute } from "next";
import { SITE_URL, services, businessLinks } from "./site";
import { guides } from "./guides";
import { areas } from "./LocalLanding";

// Se arma solo desde los registros de contenido: un servicio, guía, rubro o barrio nuevo entra sin tocar
// este archivo. tests/sitemap-coverage.test.mjs falla si alguna página de app/ queda afuera.
// (Las legales tienen noindex y no van.)
export const sitemapPaths = [
  "/", "/servicios", "/empresas", "/blog", "/nosotros", "/lavanderia-mar-del-plata", "/tintoreria-centro-mar-del-plata",
  ...Object.keys(areas).map(slug => "/" + slug),
  ...services.map(s => s.href),
  ...businessLinks.map(b => b.href),
  ...guides.map(g => g.href),
];

// Última modificación conocida por ruta (las que no figuran usan la fecha del rediseño).
const REDESIGN = "2026-10-15";
const dates: Record<string, string> = {
  "/blog/como-sacar-olor-a-humo-de-la-ropa": "2026-10-15", "/blog/como-secar-ropa-dentro-de-casa": "2026-10-14",
  "/blog/hay-que-lavar-la-ropa-nueva": "2026-10-13", "/blog/cuanto-detergente-usar": "2026-10-12",
  "/blog/como-evitar-que-la-ropa-destina": "2026-10-11", "/blog/como-lavar-jeans-sin-perder-color": "2026-10-10",
  "/blog/como-sacar-manchas-de-transpiracion": "2026-10-09", "/blog/como-lavar-ropa-delicada": "2026-10-08",
  "/blog/como-lavar-camisas-sin-arruinarlas": "2026-10-07", "/blog/como-sacar-maquillaje-de-la-ropa": "2026-10-06",
  "/blog/simbolos-de-lavado-de-la-ropa": "2026-10-05", "/blog/como-sacar-manchas-de-sangre-de-la-ropa": "2026-10-04",
  "/blog/como-sacar-manchas-de-vino-de-la-ropa": "2026-10-03", "/blog/como-lavar-un-acolchado-de-plumas": "2026-09-15",
  "/blog/simbolos-de-lavado-de-un-acolchado": "2026-09-16", "/blog/como-secar-un-acolchado": "2026-09-17",
  "/blog/cada-cuanto-lavar-un-acolchado": "2026-09-18", "/blog/como-sacar-olor-a-humedad-de-un-acolchado": "2026-09-19",
  "/blog/diferencia-entre-lavanderia-y-tintoreria": "2026-09-20", "/blog/que-prendas-conviene-llevar-a-la-tintoreria": "2026-09-21",
  "/blog/como-limpiar-un-tapado-sin-danarlo": "2026-09-22", "/blog/como-limpiar-un-saco": "2026-09-23",
  "/blog/que-es-la-limpieza-en-seco": "2026-09-24", "/blog/se-pueden-lavar-zapatillas-en-el-lavarropas": "2026-09-25",
  "/blog/como-secar-zapatillas-sin-deformarlas": "2026-09-26", "/blog/como-sacar-el-olor-de-las-zapatillas": "2026-09-27",
  "/blog/como-sacar-manchas-de-aceite-de-la-ropa": "2026-09-28", "/blog/como-guardar-la-ropa-de-invierno": "2026-09-29",
  "/blog/como-evitar-que-la-ropa-se-encoja": "2026-09-30",
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
