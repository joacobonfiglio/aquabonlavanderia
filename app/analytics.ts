"use client";
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
export function trackContact(event: "whatsapp_click" | "directions_click", placement: string) {
  const analytics = window as AnalyticsWindow;
  const pagePath = window.location.pathname;
  const parameters = { page_path: pagePath, placement, service: pagePath.startsWith("/servicios/") ? pagePath.split("/").at(-1) : "general" };
  // No message, customer address or phone is sent to analytics.
  if (analytics.gtag) analytics.gtag("event", event, parameters);
  else { analytics.dataLayer ??= []; analytics.dataLayer.push({ event, ...parameters }); }
}
