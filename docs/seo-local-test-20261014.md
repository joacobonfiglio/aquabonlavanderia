# SEO local y home — test/seo-local-20261014

Base: main fb830071b3495666ff5527ded29101f5f8cf8c89. Destino: preview del proyecto aquabonlavanderia en Vercel. No publicar en producción antes de validar el diseño.

## Implementado

- Recuperada la dirección visual de la home de test anterior, con azul oscuro, valet primero, ilustración del lavarropas, foto de fachada y contacto por WhatsApp. H1 descriptivo y promesa de marca separada; títulos sin punto final en la home.
- H1 de servicios con servicio y Mar del Plata. Se conserva el copy creativo como apoyo.
- Página general orientada a elegir servicio; página centro orientada a ubicación, horario y visita. No se eliminan URLs locales ni se crean sucursales ficticias.
- Enlaces a camisas, tintorería centro, uniformes y centros de estética desde navegación/pie adecuados. Home sin bloque comercial B2B.
- DryCleaningOrLaundry centralizado con horarios estructurados y enlaces oficiales Google/Instagram. No se inventaron coordenadas, experiencia, precios, plazos ni cobertura.
- Retirada meta codex-preview. Preview con meta noindex y X-Robots-Tag; producción conserva indexación. Canonical sigue apuntando al dominio real.
- Corregida la prioridad de home en sitemap: antes se aplicaba por error a la primera guía. Fechas reales en páginas modificadas.
- URL de guía normalizada a /blog/como-evitar-que-la-ropa-pierda-color, con redirección permanente HTTP 308 desde la antigua; enlaces internos y sitemap actualizados.
- Firma visible de Aquabon Lavandería en guías, enlazada a Nosotros y coherente con el autor Organization existente.
- Eventos normalizados whatsapp_click y directions_click con página, servicio y ubicación del botón. Sin mensaje, teléfono ni dirección del cliente en los parámetros. Se respeta un gtag existente; alternativamente se envía a dataLayer. No se activó una propiedad GA4 ni un script de terceros sin un ID verificado y configuración de consentimiento.

## Reseñas: limitación real

La URL oficial de Google remitió a un bloqueo CAPTCHA en la lectura pública. No se extrajeron nombres, fotos, textos ni nota media. Se muestra un bloque útil con acceso al perfil original, sin tarjetas ficticias ni maqueta pendiente en la interfaz. El componente admite reseñas verificadas y carrusel manual con fotos/iniciales, navegación por teclado y movimiento reducido. Para poblarlo, conectar una fuente autorizada o incorporar una selección verificable con texto, autor, fecha y URL original. No es aún un widget sincronizado.

## Validación

Next.js build es la compilación relevante en Vercel (vercel.json configura npx next build). TypeScript y tests de HTTP renderizado deben pasar. La prueba antigua del runtime Vinext se actualiza para comprobar ausencia de la meta de desarrollo; no debe interpretarse su compilación como prueba del despliegue Vercel.

Comandos: VERCEL_ENV=preview npx next build; VERCEL_ENV=preview npx next start; node --test tests/seo-preview.test.mjs.

## Dependencias de negocio antes de ampliar

Confirmar importe/unidad del valet, tabla de acolchados, tiempos habituales, cobertura, costo y días de reparto. Acceso a Search Console/GA4/GBP para línea base. No prometer ranking 1 ni ampliar barrios sin datos y capacidad operativa. Solicitar reseñas honestas sin descuento a cambio.

## Segunda revisión: diseño propio e imágenes

El hero aprobado se conserva. La home continúa su lenguaje gráfico con etiquetas de cuidado interactivas, un panel de servicios con fotografía y ticket, un acolchado ilustrado mediante CSS, una conversación ilustrativa, un recorrido con costuras, sello de Google y dirección tipográfica sin foto del comercio. El selector permite cambiar servicio, imagen y CTA; admite flechas, Inicio y Fin en teclado y se adapta a móvil.

Se encontraron nueve PNG que no pueden decodificarse, incluido el acolchado de la home. Se retiraron los archivos corruptos sin uso y su referencia visible; se reutilizan WebP válidos ya existentes en el repositorio. Se comprobó la decodificación completa de todos los raster restantes y la existencia de 36 referencias de imagen en el código. No se transformaron archivos dañados con tolerancia a datos truncados.

No quedan referencias a fotografías del local en componentes, metadatos Open Graph ni datos estructurados. Se conserva dirección, horarios y enlace a Maps en formato textual. El archivo de fachada anterior ya no se utiliza.

Validación posterior al rediseño: TypeScript, Next.js build y las 10 pruebas SEO/HTTP pasan. La revisión visual y de interacción se realiza sobre el nuevo preview cuando esté disponible.
