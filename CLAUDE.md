# Aquabon Lavandería · directrices del proyecto

Web de **Aquabon Lavandería** (Gascón 2189, Mar del Plata). La hizo y la mantiene Traka. Responsable del proyecto: Joaco.
Producción: https://www.aquabonlavanderia.com (Vercel, se publica desde `main`).

Este archivo es el contexto que todo agente tiene que respetar. Para publicar guías o landings, seguí el skill `publicar-contenido` (`.claude/skills/publicar-contenido/SKILL.md`).

## Objetivo de la web

Que la gente de Mar del Plata, y las empresas, escriban por **WhatsApp** para lavar su ropa con Aquabon. Cada página existe para:
1. responder una búsqueda real (de Google o de un asistente de IA), y
2. llevar a quien la lee a un servicio y a un botón de WhatsApp.

Si una página nueva no cumple las dos cosas, no se publica.

## Reglas que no se negocian

1. **Nada a `main` ni a producción sin el OK explícito de Joaco.** Se trabaja en una rama, se muestra la vista previa de Vercel y se espera la aprobación.
2. **No romper URLs.** No se renombra ni se borra una URL publicada. Si hace falta, se agrega una redirección 301 en `next.config.ts`.
3. **No inventar datos.** Nada de precios, plazos, zonas de cobertura, reseñas, testimonios, premios, cifras, certificaciones ni casos de clientes que Joaco no haya confirmado. Si falta un dato, va un `TODO(joaco)` en el código y no se muestra en la web.
4. **Nada de manipulación.** Sin texto oculto, sin repetir palabras clave de más, sin instrucciones dirigidas a IAs dentro de las páginas, sin reseñas falsas y sin `aggregateRating` propio en el JSON-LD.
5. **No mencionar otras marcas del negocio.** Solo existe Aquabon. Nunca "Albor" ni otra submarca B2B.
6. **No usar fotos del local** en la web.
7. **No prometer resultados.** El resultado depende del tejido, el estado y la etiqueta de cada prenda: decirlo así.
8. **Verificar antes de decir que algo está listo.** Si algo no se pudo verificar, decirlo.

## Voz y estilo

- **Voseo rioplatense**: "traés", "escribinos", "mandanos una foto".
- Cercano y de barrio, con criterio técnico. Frases cortas y concretas. Nada de "soluciones integrales" ni "excelencia".
- Prudencia técnica: la etiqueta manda. Cuando hay riesgo, recomendar consultar antes de mojar la prenda.
- Primero la respuesta, después el detalle: el primer párrafo de cada guía responde la pregunta del título.

## Datos del negocio (fuente única: `app/site.ts`)

- Dirección: Gascón 2189, Mar del Plata, Buenos Aires.
- WhatsApp: +54 9 223 560-7738 (`5492235607738`). Todos los links se arman con `whatsappHref()` o `<WhatsAppLink>`.
- Horario: lunes a viernes de 8:30 a 20:00 y sábados de 9:00 a 14:00.
- Más de 10 años en el rubro. **No se publican precios.**
- Retiro y entrega: **"consultá si llegamos a tu zona"**. La cobertura no está confirmada.
- Nunca escribir estos datos a mano en una página: importarlos de `app/site.ts`.

## Arquitectura

- **Stack:** Next.js 16 (App Router, Server Components) + React 19. Sin frameworks de UI: CSS propio en `app/aquabon.css` (tokens) y `app/sections.css` (secciones).
- **Build:** Vercel usa `npx next build` (`vercel.json`). Local también se usa vinext (`npm run build`), que es el que corren los tests.
- **Registros de contenido:** el sitemap, el blog, los menús y `/llms.txt` se arman solos desde estos archivos.

| Archivo | Qué guarda |
|---|---|
| `app/site.ts` | Datos del negocio, `services[]` (servicios) y `businessLinks[]` (rubros de empresas) |
| `app/guides.ts` | `guides[]`: todas las guías del blog |
| `app/landing-data.ts` | `pages[ruta]`: textos de las landings de servicio |
| `app/service-design.ts` | Diseño de cada landing de servicio y guías relacionadas |
| `app/seo-descriptions.ts` | Meta descriptions específicas por ruta |
| `app/ga.ts` | `byPath`: ruta → parámetro `servicio` de GA4 |
| `app/sitemap.ts` | Fecha de última modificación por ruta (`dates`) |
| `app/LocalLanding.tsx` | `areas`: páginas por barrio (solo con cobertura confirmada) |
| `app/blog/page.tsx` | Temas del filtro del blog (`topics`, con sus `clusters`) |

- **Plantillas:**
  - `app/blog/ArticleLayout.tsx`: guías.
  - `app/ServiceLanding.tsx`: servicios. Se elige sola desde `SeoLanding` si la ruta empieza con `/servicios/`.
  - `app/SeoLanding.tsx`: empresas, barrios y tintorería del centro.
  - `app/Blocks.tsx`: bloques compartidos.
- **Imágenes:**
  - Originales en `public/blog/` o `public/services/`.
  - Después de agregar una, correr `node scripts/optimize-images.mjs`. Genera AVIF/WebP en `public/img/` y actualiza `app/image-manifest.json`.
  - En el código, usar siempre `<Img>` (`app/Img.tsx`), nunca `<img>` suelto.
- **Medición:**
  - GA4 con `@next/third-parties`, solo en producción.
  - Todo link a WhatsApp va con `<WhatsAppLink ubicacion="…">`: manda `click_whatsapp` con `ubicacion` y `servicio`.
  - Los demás links medidos usan `<TrackedLink>`.
- **SEO técnico ya resuelto:**
  - JSON-LD global (`DryCleaningOrLaundry`) en `app/layout.tsx`.
  - `Service`, `FAQPage`, `Article` y `BreadcrumbList` por plantilla.
  - `robots.ts` abierto a buscadores y bots de IA.
  - `/llms.txt` generado.
  - Páginas legales con `noindex`.

## Reglas SEO por página

- Un solo **H1**, con la búsqueda principal, por ejemplo "… en Mar del Plata" en servicios y landings.
- **Title** de 60 caracteres o menos, terminado en ` | Aquabon` y único.
- **Description** de 158 caracteres o menos, única, con la búsqueda y un llamado a la acción.
- **Canonical** igual a la ruta. **Open Graph** con imagen y `alt`.
- URL en minúsculas, sin tildes, con guiones y descriptiva: `/blog/como-sacar-manchas-de-cafe`.
- **Una intención por URL.** Antes de crear una página, buscar si ya hay otra que responda lo mismo (canibalización). Si existe, se mejora esa en lugar de crear una nueva.
- **Enlaces internos:** cada guía enlaza al menos un servicio y dos guías, y algún servicio o guía existente enlaza a la nueva.

## Comandos

```bash
npm run lint                  # ESLint
npx tsc --noEmit -p .         # tipos
npm run check:contenido       # coherencia de registros (rápido, sin build)
npm test                      # build de vinext + tests de HTML, sitemap, SEO por página y registros
npx next build                # el build que usa Vercel
node scripts/optimize-images.mjs   # variantes de imágenes nuevas
```

Si `scripts/*.sh` da "Permission denied", corré `bash scripts/sites-env.sh -- bash scripts/build-verified.sh`.

## Git y publicación

- Trabajar en una rama (`claude/…` o la que indique Joaco) creada desde `main` actualizado.
- Commits en español, descriptivos.
- La vista previa de Vercel se genera sola al hacer push.
  - Estado: `https://api.github.com/repos/joacobonfiglio/aquabonlavanderia/commits/<sha>/status`.
  - URL: `…/deployments?sha=<sha>`, y después `…/deployments/<id>/statuses` (`environment_url`).
- Con el OK de Joaco: PR a `main`, merge y verificar que el deploy **Production** quede en `success`.

## Errores que ya cometimos (no repetir)

- **`position: absolute` sin un contenedor con `position: relative`.** Cuando terminan las animaciones de aparición (`data-reveal`), el elemento se escapa y ensancha la página en el celular: se puede mover hacia los costados y salta al tocar. Todo elemento absoluto necesita su contenedor posicionado.
- **`import.meta.glob` en el sitemap** rompe el build de Next. El sitemap se arma desde los registros.
- **Importar un componente de cliente de un paquete CommonJS directo en el layout** rompe el build local de vinext. Hay que envolverlo en un componente propio con `"use client"` (ver `app/GoogleAnalyticsTag.tsx`).
- **Publicar una guía por día sin medir.** Bajó la calidad y no trajo clientes. Ritmo actual: una pieza por semana, conectada a un servicio.
