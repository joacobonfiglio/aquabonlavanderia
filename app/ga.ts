// Medición con Google Analytics 4 (@next/third-parties). Se activa solo en producción y solo si
// NEXT_PUBLIC_GA_ID está definida (.env.production / variables de entorno de Vercel).
export const GA_ID = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_GA_ID ?? "" : "";

// Nombre corto del servicio para el parámetro "servicio" de los eventos, según la URL.
const byPath: Record<string, string> = {
  "/lavanderia-la-perla-mar-del-plata": "zona_la_perla",
  "/lavanderia-chauvin-mar-del-plata": "zona_chauvin",
  "/lavanderia-guemes-mar-del-plata": "zona_guemes",
  "/lavanderia-centro-mar-del-plata": "zona_centro",
  "/servicios/valet-de-ropa": "valet",
  "/servicios/lavado-de-acolchados": "acolchados",
  "/servicios/tintoreria": "tintoreria",
  "/tintoreria-centro-mar-del-plata": "tintoreria",
  "/servicios/limpieza-de-vestidos-de-fiesta": "vestidos_de_fiesta",
  "/servicios/lavado-de-camperas-y-tapados": "camperas_y_tapados",
  "/servicios/planchado": "planchado",
  "/servicios/lavado-y-planchado-de-camisas": "camisas",
  "/servicios/lavado-de-zapatillas": "zapatillas",
  "/servicios/tenido-de-prendas": "tenido",
  "/servicios/arreglos-y-costura": "arreglos",
  "/servicios/retiro-y-entrega-de-ropa": "retiro_y_entrega",
  "/empresas": "empresas",
  "/empresas/lavanderia-airbnb": "empresas_airbnb",
  "/empresas/lavanderia-hoteles": "empresas_hoteles",
  "/empresas/lavanderia-restaurantes": "empresas_restaurantes",
  "/empresas/lavanderia-centros-de-estetica": "empresas_estetica",
  "/empresas/lavado-de-uniformes": "empresas_uniformes",
  "/empresas/lavado-ropa-deportiva": "empresas_ropa_deportiva",
};

export function servicioFromPath(path: string): string | undefined {
  return byPath[path.replace(/\/$/, "") || "/"];
}

// Script de cabecera: deja Analytics sin cookies hasta que la persona acepta el aviso
// (Consent Mode). Corre antes que la etiqueta de GA, así el "config" ya respeta la elección.
export const consentScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
var c=null;try{c=localStorage.getItem("aq-consent")}catch(e){}
document.documentElement.dataset.consent=c||"pending";
gtag("consent","default",{analytics_storage:c==="granted"?"granted":"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});`;
