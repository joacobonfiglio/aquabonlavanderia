// Script de cabecera: aplica el consentimiento guardado (por defecto, denegado) ANTES de cargar
// Google Tag Manager, y después carga GTM con el snippet oficial. GTM respeta el Consent Mode:
// las etiquetas de GA4 no usan cookies hasta que la persona acepta en el aviso.
// Marca html[data-consent] antes de pintar, así el aviso no parpadea.
export function gtmHeadScript(id: string) {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
var c=null;try{c=localStorage.getItem("aq-consent")}catch(e){}
document.documentElement.dataset.consent=c||"pending";
gtag("consent","default",{analytics_storage:c==="granted"?"granted":"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",wait_for_update:500});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`;
}
