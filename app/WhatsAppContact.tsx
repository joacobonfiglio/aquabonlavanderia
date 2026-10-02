"use client";

import { usePathname } from "next/navigation";
import WhatsAppLink from "./WhatsAppLink";
import styles from "./whatsapp-contact.module.css";

const services: Record<string, string> = {
  "valet-de-ropa": "valet de ropa", "lavado-de-acolchados": "lavado de acolchados", tintoreria: "tintorería", planchado: "planchado", "tenido-de-prendas": "teñido de prendas", "arreglos-y-costura": "arreglos y costura", "lavado-de-zapatillas": "lavado de zapatillas", "lavado-de-camperas-y-tapados": "limpieza de camperas y tapados", "retiro-y-entrega-de-ropa": "retiro y entrega de ropa"
};
export default function WhatsAppContact() {
  const pathname = usePathname();
  const service = services[pathname?.split("/").at(-1) || ""];
  const message = service ? `Hola Aquabon, quiero consultar por el servicio de ${service}.` : "Hola Aquabon, quiero consultar qué servicio necesita mi ropa.";
  return <WhatsAppLink className={styles.contact} message={message} event="whatsapp_floating" aria-label="¿Te ayudamos? Consultanos por WhatsApp">
    <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.449A11.81 11.81 0 0 0 12.04 0C5.495 0 .17 5.325.17 11.87c0 2.09.546 4.13 1.583 5.93L.07 24l6.335-1.66a11.87 11.87 0 0 0 5.635 1.435h.005c6.54 0 11.866-5.326 11.866-11.87a11.8 11.8 0 0 0-3.391-8.456zM12.045 21.77h-.004a9.86 9.86 0 0 1-5.027-1.376l-.36-.214-3.76.985 1.004-3.665-.235-.376a9.83 9.83 0 0 1-1.51-5.254c0-5.437 4.425-9.862 9.87-9.862a9.8 9.8 0 0 1 6.98 2.89 9.8 9.8 0 0 1 2.886 6.975c0 5.437-4.425 9.897-9.844 9.897zm5.414-7.386c-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.166-.174.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.474-.883-.787-1.48-1.759-1.653-2.056-.173-.298-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.199.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.241-.58-.486-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.064 2.876 1.213 3.074c.149.199 2.094 3.2 5.073 4.487.708.305 1.261.487 1.692.624.71.226 1.356.194 1.867.118.57-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.174-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
    <span className={styles.copy}><strong>¿Te ayudamos?</strong><span>Consultanos por WhatsApp</span></span>
  </WhatsAppLink>;
}
