# Manual de Aquabon Lavandería y Tintorería · web

Este es el documento de referencia de la web de Aquabon: identidad del negocio, voz, reglas, estructura del sitio, cómo se publica y qué se decidió en el camino. Lo usan las personas del equipo y cualquier agente de IA que trabaje en el repositorio. `CLAUDE.md` y `AGENTS.md` solo apuntan acá.

- **Responsable del proyecto:** Joaco.
- **Diseño y desarrollo:** Traka (https://trakadigital.com).
- **Producción:** https://www.aquabonlavanderia.com (Vercel, se publica desde `main`).
- **Última actualización de este manual:** 05/11/2026.

**Regla para mantener este manual:** si cambia un dato del negocio, una regla o una decisión, se actualiza este archivo en el mismo PR que hace el cambio, y se suma una línea en el [historial de decisiones](#12-historial-de-decisiones).

---

## Índice

1. [El negocio](#1-el-negocio)
2. [Objetivo de la web](#2-objetivo-de-la-web)
3. [Reglas que no se negocian](#3-reglas-que-no-se-negocian)
4. [Identidad y voz](#4-identidad-y-voz)
5. [Mapa del sitio](#5-mapa-del-sitio)
6. [Arquitectura del código](#6-arquitectura-del-código)
7. [Reglas SEO por página](#7-reglas-seo-por-página)
8. [Cómo publicar contenido](#8-cómo-publicar-contenido)
9. [Medición](#9-medición)
10. [Git, vista previa y producción](#10-git-vista-previa-y-producción)
11. [Errores que ya cometimos](#11-errores-que-ya-cometimos)
12. [Historial de decisiones](#12-historial-de-decisiones)
13. [Pendientes](#13-pendientes)
14. [Documentos relacionados](#14-documentos-relacionados)

---

## 1. El negocio

Fuente única en el código: `app/site.ts`. **Nunca escribir estos datos a mano en una página: importarlos de ahí.**

| Dato | Valor |
|---|---|
| Nombre oficial | **Aquabon Lavandería y Tintorería** (igual que la ficha de Google). En títulos se abrevia ` \| Aquabon`. |
| Qué es | Lavandería y tintorería. Ofrecemos los dos servicios. |
| Dirección | Gascón 2189, B7600FMQ Mar del Plata, Buenos Aires |
| WhatsApp y teléfono | +54 9 223 560-7738 (`5492235607738`) |
| Web | https://www.aquabonlavanderia.com |
| Horario | Lunes a viernes de 8:30 a 20:00 y sábados de 9:00 a 14:00. Sin turno. |
| Experiencia | Más de 10 años en el rubro |
| Retiro y entrega | **Centro, Güemes, Chauvin y La Perla** (confirmado por Joaco el 24/10/2026). Costo y disponibilidad se confirman en cada pedido. Para otras zonas: "consultanos". |
| Precios | **No se publican.** Se pasan por WhatsApp antes de que la persona deje la ropa. |
| Ficha de Google | https://maps.google.com/?cid=16265134030335527067 (sin acortadores) |
| Ubicación (pin de Google) | -38.0081341, -57.5480847 |
| Instagram | https://www.instagram.com/aquabonlavanderia/ |

**Cómo funciona la tintorería:** Aquabon recibe la prenda, la revisa y hace el seguimiento. Cuando necesita un tratamiento especializado (por ejemplo limpieza en seco), se coordina fuera del local. Decirlo así: "vos la dejás en Aquabon y nosotros nos encargamos".

**Servicios (11):** valet de ropa, lavado de acolchados, tintorería, limpieza de vestidos de fiesta, camperas y tapados, planchado, lavado y planchado de camisas, lavado de zapatillas, teñido de prendas, arreglos y costura, retiro y entrega.

**Empresas (6 rubros):** Airbnb y alquiler temporario, hoteles y alojamientos, restaurantes, centros de estética, uniformes y ropa deportiva. Solo textiles lavables de uso general: **no** ropa hospitalaria, EPP ni procesos sanitarios regulados.

**Datos del negocio en todos lados (NAP):** web, ficha de Google, Instagram y directorios tienen que mostrar exactamente el mismo nombre, dirección, teléfono, web y horario. Los directorios los da de alta Joaco.

---

## 2. Objetivo de la web

Que la gente de Mar del Plata, y las empresas, escriban por **WhatsApp** o vengan al local para lavar su ropa con Aquabon. Cada página existe para:

1. responder una búsqueda real (de Google o de un asistente de IA), y
2. llevar a quien la lee a un servicio y a un botón de WhatsApp.

Si una página nueva no cumple las dos cosas, no se publica.

---

## 3. Reglas que no se negocian

1. **Nada a `main` ni a producción sin el OK explícito de Joaco.** Se trabaja en una rama, se muestra la vista previa de Vercel y se espera la aprobación.
2. **No romper URLs.** No se renombra ni se borra una URL publicada. Si hace falta, redirección 301 en `next.config.ts`.
3. **No inventar datos.** Nada de precios, plazos, zonas, reseñas, testimonios, premios, cifras, certificaciones ni casos de clientes que Joaco no haya confirmado. Si falta un dato: `TODO(joaco)` en el código y no se muestra en la web.
4. **No publicar precios.** Ni "desde", ni rangos, ni en empresas. Decisión de Joaco del 05/11/2026.
5. **Nada de manipulación.** Sin texto oculto, sin repetir palabras clave de más, sin instrucciones para IAs dentro de las páginas, sin reseñas falsas y sin `aggregateRating` propio en el JSON-LD.
6. **Reseñas solo reales**, copiadas tal cual de la ficha de Google, con nombre y fecha como figuran ahí. Nunca escritas por nosotros.
7. **No mencionar otras marcas del negocio.** Solo existe Aquabon. Nunca "Albor" ni otra submarca.
8. **No usar fotos del local** ni de personas que parezcan clientes reales, salvo fotos que pase Joaco para eso.
9. **No prometer resultados.** El resultado depende del tejido, el estado y la etiqueta de cada prenda: decirlo así.
10. **Verificar antes de decir que algo está listo.** Si algo no se pudo verificar, decirlo.

---

## 4. Identidad y voz

### De qué hablamos

Aquabon le **saca el lavado de encima** a la gente: menos tiempo lavando, sin lavarropas, sin tender, sin doblar, sin preocuparse por arruinar una prenda. Y lo hace con tres valores que hay que mostrar con hechos, no con adjetivos:

| Valor | Cómo se muestra |
|---|---|
| **Cerca** | Local en Gascón 2189, abierto de lunes a sábado, sin turno. Retiro en Centro, Güemes, Chauvin y La Perla. Respuesta por WhatsApp. |
| **Con oficio** | Más de 10 años en el rubro. Cada prenda se revisa (etiqueta, tejido, estado) antes de elegir cómo lavarla. |
| **Claros** | Importe y plazo antes de que dejes la ropa. Si una prenda tiene riesgo, se dice antes de mojarla. Si una mancha no sale, se avisa. |

Frase de la home: **"Olvidate de lavar, nosotros nos ocupamos"**.

### Cómo escribimos

- **Voseo rioplatense:** "traés", "escribinos", "mandanos una foto", "la pasamos a buscar".
- **Primero la respuesta, después el detalle.** El primer párrafo de cada guía responde la pregunta del título. Cada respuesta de preguntas frecuentes empieza con "Sí", "No" o el dato.
- **Primero el beneficio, después el proceso.** Antes: "Recibimos prendas para valorar…". Ahora: "Ese ajuste que venís postergando, en el mismo lugar donde lavás tu ropa".
- **Frases cortas y concretas**, de barrio y con criterio técnico.
- **La etiqueta manda.** Cuando hay riesgo, recomendar consultar antes de mojar la prenda.
- **Títulos sin punto final** (H1, H2, H3, títulos de tarjetas y pasos, frases chicas sobre el título). Se pueden usar coma o signos de pregunta.

### Palabras: sí y no

| Evitar (suena a trámite) | Usar |
|---|---|
| sujeto a revisión / valoración previa / viabilidad | "después de revisarla", "te decimos si se puede" |
| se solicita aparte / se consulta | "lo pedís aparte y lo sumamos" |
| se cotiza según zona y disponibilidad | "Sí, en Centro, Güemes, Chauvin y La Perla…" |
| no se garantiza la remoción | "No siempre, y preferimos decírtelo antes" |
| soluciones integrales, excelencia, calidad premium | el hecho concreto: "revisamos cada prenda antes de lavarla" |
| Aquabon funciona como punto de recepción y seguimiento | "vos la dejás en Aquabon y nosotros nos encargamos" |

### Frases tipo (para reusar)

- **Retiro:** "Sí, en Centro, Güemes, Chauvin y La Perla. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual."
- **Manchas:** "No siempre, y preferimos decírtelo antes. Depende del origen, la antigüedad, el tejido y lo que se le haya aplicado."
- **Precio:** "Depende del servicio, la cantidad y la prenda. Te pasamos importe y plazo antes de que lo dejes, para que no haya sorpresas."
- **Foto:** "Mandá una foto de la prenda y de la etiqueta por WhatsApp y te decimos qué le conviene."

### Mensajes de WhatsApp precargados

Empiezan con "Hola Aquabon," y piden lo que necesitamos para responder rápido, con `__` para completar: "Tengo __ prendas", "Es de __ plazas y el relleno es __". En empresas: rubro, prendas, cantidad y frecuencia.

---

## 5. Mapa del sitio

| Sección | URLs | Plantilla |
|---|---|---|
| Home | `/` | `app/page.tsx` |
| Catálogo de servicios | `/servicios` | `app/ServiceCatalog.tsx` |
| Servicios (11) | `/servicios/<slug>` | `app/ServiceLanding.tsx` (desde `SeoLanding` si la ruta empieza con `/servicios/`) |
| Empresas | `/empresas` y 6 rubros en `/empresas/<slug>` | `app/SeoLanding.tsx` + `app/BusinessLanding.tsx` |
| Zonas | `/lavanderia-mar-del-plata` (índice), `/lavanderia-centro-mar-del-plata`, `/lavanderia-guemes-mar-del-plata`, `/lavanderia-chauvin-mar-del-plata`, `/lavanderia-la-perla-mar-del-plata` | `LocalLanding`, `CentroLanding`, `NeighborhoodLanding` |
| Tintorería del centro | `/tintoreria-centro-mar-del-plata` | `SeoLanding` |
| Blog | `/blog` y 33 guías en `/blog/<slug>` | `app/blog/ArticleLayout.tsx` |
| Nosotros | `/nosotros` | `app/nosotros/page.tsx` |
| Legales (noindex) | privacidad, cookies, términos | `app/LegalPage.tsx` |
| Para IAs | `/llms.txt`, `/robots.txt`, `/sitemap.xml` | se generan solos |

**Temas del blog:** Acolchados · Manchas y olores · Lavado y secado en casa · Prendas especiales y tintorería · Zapatillas · Alquileres temporarios.

**Una intención por URL.** "Lavandería Mar del Plata" la cubre la home. No crear otra página que compita por lo mismo: se mejora la que ya existe.

---

## 6. Arquitectura del código

- **Stack:** Next.js 16 (App Router, Server Components) + React 19. Sin frameworks de UI: CSS propio en `app/aquabon.css` (tokens) y `app/sections.css` (secciones).
- **Build:** Vercel usa `npx next build` (`vercel.json`). Local también se usa vinext (`npm run build`), que es el que corren los tests. Detalles del entorno vinext en `docs/tecnico-vinext.md`.

**Registros de contenido** (el sitemap, el blog, los menús y `/llms.txt` se arman solos desde acá):

| Archivo | Qué guarda |
|---|---|
| `app/site.ts` | Datos del negocio, `services[]` y `businessLinks[]` |
| `app/guides.ts` | `guides[]`: todas las guías (la más nueva primero) |
| `app/landing-data.ts` | Textos y preguntas frecuentes de las landings de servicio y del catálogo |
| `app/service-design.ts` | Diseño de cada servicio, frase sobre el título y guías relacionadas |
| `app/BusinessLanding.tsx` y `app/empresas/*/page.tsx` | Textos de empresas |
| `app/neighborhoods.ts` y `app/LocalLanding.tsx` | Textos de barrios y del índice de zonas |
| `app/seo-descriptions.ts` | Meta descriptions específicas por ruta |
| `app/ga.ts` | Ruta → parámetro `servicio` de GA4 |
| `app/sitemap.ts` | Fecha de última modificación por ruta (`dates`) |
| `app/blog/page.tsx` | Temas del blog (`topics` con sus `clusters`) |
| `app/Reviews.tsx` | Reseñas reales (vacío hasta tenerlas; el bloque no se muestra) |

**Imágenes:** originales en `public/blog/` o `public/services/`. Después de agregar una, correr `node scripts/optimize-images.mjs` (genera AVIF/WebP en `public/img/` y actualiza `app/image-manifest.json`). En el código, siempre `<Img>` (`app/Img.tsx`), nunca `<img>` suelto.

**Ya resuelto de SEO técnico:** JSON-LD global `DryCleaningOrLaundry` con `@id` `/#business`, `geo` y código postal (`app/layout.tsx`); `Service`, `FAQPage`, `Article` y `BreadcrumbList` por plantilla; `robots.ts` abierto a buscadores y bots de IA; `/llms.txt`; legales con `noindex`; `<html lang="es-AR">`.

**Comandos:**

```bash
npm run lint                  # ESLint
npx tsc --noEmit -p .         # tipos
npm run check:contenido       # coherencia de registros (rápido, sin build)
npm test                      # build de vinext + tests de HTML, sitemap, SEO por página y registros
npx next build                # el build que usa Vercel
node scripts/optimize-images.mjs   # variantes de imágenes nuevas
```

Si `scripts/*.sh` da "Permission denied": `bash scripts/sites-env.sh -- bash scripts/build-verified.sh`.

---

## 7. Reglas SEO por página

- Un solo **H1**, con la búsqueda principal ("… en Mar del Plata" en servicios y landings).
- **Title** de 60 caracteres o menos, terminado en ` | Aquabon` y único.
- **Description** de 158 caracteres o menos, única, con la búsqueda y un llamado a la acción.
- **Canonical** igual a la ruta. **Open Graph** con imagen y `alt`.
- URL en minúsculas, sin tildes, con guiones y descriptiva.
- **Una intención por URL.** Antes de crear una página, buscar si ya hay otra que responda lo mismo. Si existe, se mejora esa.
- **Enlaces internos:** cada guía enlaza al menos un servicio y dos guías, y algún servicio o guía existente enlaza a la nueva.
- Las guías apuntan a búsquedas con intención local o de contratar (precio, temporada, Mar del Plata, alquileres), no solo a dudas generales donde compiten diarios nacionales.

---

## 8. Cómo publicar contenido

El paso a paso completo está en el skill `.claude/skills/publicar-contenido/SKILL.md`. En resumen:

1. **Análisis:** intención, ¿ya existe?, ¿lleva a un servicio real?, datos que faltan.
2. **Brief** con URL, búsqueda, H1, title, description, estructura, enlaces e imagen. OK de Joaco.
3. **Desarrollo:** página + registro en `guides.ts` + tema del blog + fecha en el sitemap + enlaces desde servicios y guías existentes.
4. **Revisión:** lint, tipos, `npm test`, `npx next build` y celular sin desborde.
5. **Vista previa, OK de Joaco, PR a `main`**, deploy de producción en `success` y registro en `docs/seo-AAAA-MM.md`.
6. Pedirle a Joaco que solicite la indexación en Search Console.

**Ritmo:** una pieza por semana, conectada a un servicio, salvo que Joaco pida otra cosa.

**Estacionalidad:** acolchados en primavera y otoño · empresas y Airbnb de septiembre a noviembre · camperas y tapados en otoño · vestidos de fiesta en noviembre, diciembre y temporada de casamientos.

---

## 9. Medición

- GA4 con `@next/third-parties`, solo en producción y con `NEXT_PUBLIC_GA_ID`.
- **Consent Mode v2:** todo empieza en `denied` hasta que la persona acepta el aviso de cookies.
- Todo link a WhatsApp va con `<WhatsAppLink ubicacion="…">`: manda el evento `click_whatsapp` con `ubicacion` (hero, flotante, guia, faq, footer…) y `servicio`. **No renombrar el evento**: se cortaría la historia de datos.
- Los demás links medidos usan `<TrackedLink>` (`click_telefono`, `click_como_llegar`).
- Search Console está verificado (meta en `app/layout.tsx`). Antes de decidir landings nuevas, pedir la exportación de consultas y páginas.

---

## 10. Git, vista previa y producción

- Trabajar en una rama (`claude/…`, `codex/…` o la que indique Joaco) creada desde `main` actualizado. Si el PR de esa rama ya se mergeó, reiniciarla desde `main`.
- Commits en español, descriptivos.
- La vista previa de Vercel se genera sola al hacer push:
  - Estado: `https://api.github.com/repos/joacobonfiglio/aquabonlavanderia/commits/<sha>/status`
  - URL: `…/deployments?sha=<sha>` y después `…/deployments/<id>/statuses` (`environment_url`).
- Con el OK de Joaco: PR a `main`, merge y verificar que el deploy **Production** quede en `success`.
- Si un `git push` se queda colgado: `git -c push.negotiate=false push -u origin <rama>`.
- Si Vercel muestra un build "Canceled from the Vercel Dashboard", lo reemplazó uno más nuevo: no es un error del código.

---

## 11. Errores que ya cometimos

- **`position: absolute` sin un contenedor con `position: relative`.** Al terminar las animaciones de aparición (`data-reveal`), el elemento se escapa y ensancha la página en el celular. Todo elemento absoluto necesita su contenedor posicionado.
- **`import.meta.glob` en el sitemap** rompe el build de Next. El sitemap se arma desde los registros.
- **Importar un componente de cliente de un paquete CommonJS directo en el layout** rompe el build local de vinext. Hay que envolverlo en un componente propio con `"use client"` (ver `app/GoogleAnalyticsTag.tsx`).
- **Publicar una guía por día sin medir.** Bajó la calidad y no trajo clientes.
- **Textos que hablaban del proceso y no de la persona** ("Vos traés la bolsa", "valoramos la viabilidad"). Se reescribieron el 05/11/2026: primero lo que te ahorrás, después cómo trabajamos.
- **Retiro desactualizado:** quedó "consultá según zona" en muchas páginas después de confirmar las zonas. Cuando cambia un dato, buscarlo en todo el repo (`grep -rn`).

---

## 12. Historial de decisiones

| Fecha | Decisión |
|---|---|
| 24/10/2026 | Joaco confirma retiro y entrega en Centro, Güemes, Chauvin y La Perla. Se publican las páginas de esos barrios. |
| 03/11/2026 | Auditoría SEO y UX (`docs/plan-seo-ux-2026-11.md`). Fase 0 verificada: JSON-LD, eventos de WhatsApp y Consent Mode ya existían. |
| 03/11/2026 | Ficha de Google por CID en lugar de `share.google`; `geo` y código postal en el JSON-LD; crédito de Traka con link. |
| 05/11/2026 | Nuevo enfoque de textos: sacarte el lavado de encima, ahorrar tiempo, cercanía, oficio y claridad. Títulos sin punto final. Preguntas frecuentes reescritas. |
| 05/11/2026 | Nombre oficial: **Aquabon Lavandería y Tintorería**. |
| 05/11/2026 | **No se publican precios**, tampoco en empresas. La mejora de la página de Airbnb queda en pausa. |
| 05/11/2026 | Guías nuevas: precio de lavar un acolchado, ropa blanca de alquiler temporario y checklist de recambio. Mejora de "lavandería, lavadero o tintorería". |
| 05/11/2026 | Los directorios los da de alta Joaco. Las alianzas con partners están en negociación: no mencionarlas en la web todavía. |
| 05/11/2026 | Este manual reemplaza al `CLAUDE.md` como documento de referencia. |

---

## 13. Pendientes

| Pendiente | Quién | Dónde va |
|---|---|---|
| Reseñas reales de la ficha de Google (6 a 9, con nombre y fecha) | Joaco las comparte | `app/Reviews.tsx` |
| Fotos propias: fachada, mostrador, acolchado, zapatillas, ropa blanca | Joaco | `public/…` y reemplazo de imágenes repetidas |
| `/nosotros` con al menos una persona con nombre y dos fotos | Joaco | `app/nosotros/page.tsx` (`TODO(joaco)`) |
| Titular y CUIT para las páginas legales | Joaco | `legal` en `app/site.ts` |
| Exportación de Search Console (consultas y páginas, 3 meses) | Joaco | Para decidir landings nuevas |
| Alta en directorios con el mismo NAP | Joaco | Apple Business Connect, Bing Places, Facebook, Waze, argentino.com.ar, marplatense.com.ar, miguiaargentina.com.ar, Páginas Amarillas, Cylex |
| Landings posibles, solo con confirmación: barrios con retiro confirmado, vestido de novia, sábanas y toallas sueltas, otros servicios que se hagan | Joaco confirma | Ver skill `publicar-contenido` |
| `dateModified` real en las guías (hoy repite la fecha de publicación) | Desarrollo | `app/blog/ArticleLayout.tsx` |
| `areaServed` con los cuatro barrios en el JSON-LD | Desarrollo | `app/layout.tsx` y plantillas de barrio |

---

## 14. Documentos relacionados

- `docs/plan-seo-ux-2026-11.md`: auditoría y backlog SEO/UX de noviembre de 2026.
- `docs/seo-2026-10.md` y `docs/seo-2026-11.md`: registro mensual de publicaciones.
- `docs/estrategia-contenido-octubre-noviembre-2026.md`: estrategia editorial.
- `docs/landings-zonas-2026-10.md` y `docs/retiro-zonas-2026-10.md`: trabajo de zonas y retiro.
- `docs/tecnico-vinext.md`: notas técnicas del entorno vinext.
- `.claude/skills/publicar-contenido/SKILL.md`: proceso para publicar guías y landings.
