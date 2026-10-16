// Script de cabecera: define gtag, aplica el consentimiento guardado (por defecto, denegado)
// y baja gtag.js recién después de que carga la página, para no frenar el primer render.
// Marca html[data-consent] antes de pintar, así el aviso no parpadea.
export function analyticsHeadScript(id: string) {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
var c=null;try{c=localStorage.getItem("aq-consent")}catch(e){}
document.documentElement.dataset.consent=c||"pending";
gtag("consent","default",{analytics_storage:c==="granted"?"granted":"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
gtag("js",new Date());gtag("config","${id}");
function aqLoad(){var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id=${id}";document.head.appendChild(s)}
if(document.readyState==="complete")aqLoad();else addEventListener("load",function(){setTimeout(aqLoad,0)});`;
}
