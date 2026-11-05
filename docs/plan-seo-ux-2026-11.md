# Plan SEO + UX — aquabonlavanderia.com

> **Estado al 05/11/2026** (ver `INSTRUCCIONES.md`, historial de decisiones):
> - Fase 0 verificada: JSON-LD, evento `click_whatsapp` y Consent Mode v2 ya existían. El evento **no** se renombra a `whatsapp_click`.
> - Hecho: T-05 (Traka y ficha de Google por CID), parte de T-01 (`geo` y código postal), P8 (sitemap), P5 (barrios publicados el 24/10), textos y preguntas frecuentes, 3 guías de T-12 y la mejora de "lavandería, lavadero o tintorería".
> - Decidido: **no se publican precios** (ni "desde"). T-04 y T-11 quedan sin precios; la mejora de Airbnb está en pausa.
> - Pendiente de Joaco: reseñas reales (T-08), fotos propias (T-09), nosotros con personas (T-10), directorios (T-14).
> - Los precios de ejemplo de este plan ($12.000, $50.000) y los plazos ("24–48 h") **no están confirmados** y no se publican.

_Auditoría: 3 nov 2026 · Para ejecutar en Claude Code sobre el repo de la web_

---

## 0. Cómo usar este documento en Claude Code

1. Copiá este archivo a la raíz del repo como `docs/PLAN-SEO-UX.md`.
2. Primer prompt sugerido:
   > Leé `docs/PLAN-SEO-UX.md`. Empezá por la Fase 0 (verificación): revisá el código y decime qué ítems marcados como "VERIFICAR" ya están resueltos. No toques nada todavía.
3. Después, ejecutá una tarea por vez (`Hacé la tarea T-03`). Cada tarea tiene criterio de aceptación para validarla.

---

## 1. Diagnóstico en una frase

La base técnica y la arquitectura están **muy por encima de la competencia local** (que vive en Facebook, directorios y la ficha de 5asec). Lo que falta ahora es **confianza y diferenciación**: reseñas y fotos reales, datos concretos (plazos, zonas, precios orientativos), páginas locales que no sean variantes de la misma plantilla y un B2B que de verdad venda antes de la temporada.

**Estado general: base sólida; falta capa de conversión y autoridad local.**

---

## 2. Lo que ya está bien (no romper)

| Área | Estado |
|---|---|
| Titles y metas únicos, con keyword + ciudad + marca | ✅ |
| Canonical en todas las páginas revisadas | ✅ |
| OG/Twitter completos (`es_AR`, imagen 1536×1024 con alt) | ✅ |
| `robots.txt` abierto a Google, Bing y bots de IA (GPTBot, ClaudeBot, PerplexityBot…) + sitemap declarado | ✅ Muy bien para GEO |
| Sitemap con 52 URLs y `lastmod` en la mayoría | ✅ (con huecos, ver T-02) |
| Arquitectura: `/servicios/*` (11), `/empresas/*` (6), páginas locales, `/blog` (28 guías) | ✅ |
| Breadcrumbs visibles, FAQ por página, índice de contenido en guías | ✅ |
| Enlazado interno guía → servicio (ej. acolchado de plumas → `/servicios/lavado-de-acolchados`) | ✅ |
| Imágenes `.webp` responsive (480/1024/1400) | ✅ |
| WhatsApp con mensajes precargados por intención ("Mandanos una foto", "Consultar retiro en mi zona") | ✅ Gran detalle UX |
| Skip link `#contenido`, banner de cookies con opción de rechazar | ✅ |
| Cluster de acolchados (6 guías) bien armado alrededor del servicio estrella | ✅ |

---

## 3. Problemas detectados (priorizados)

| # | Página/área | Problema | Severidad |
|---|---|---|---|
| P1 | Todo el sitio | **Cero prueba social on-site**: ni reseñas, ni rating de Google, ni testimonios, ni casos B2B. | Crítica (conversión + E-E-A-T) |
| P2 | Todo el sitio | **Datos estructurados sin confirmar**. No pude ver JSON-LD desde fuera (el lector lo elimina). Si no existe `LocalBusiness`/`DryCleaningOrLaundry`, es el mayor quick win técnico. | Alta — VERIFICAR |
| P3 | Home vs `/lavanderia-mar-del-plata` vs `/servicios` | **Canibalización**: tres H1 casi iguales ("Lavandería y tintorería en Mar del Plata", "Lavandería en Mar del Plata", "Servicios de lavandería y tintorería en Mar del Plata"). | Alta |
| P4 | `/lavanderia-mar-del-plata` (~330 palabras), `/lavanderia-centro-mar-del-plata` (~270), `/tintoreria-centro-mar-del-plata` | **Páginas locales finas y con la misma plantilla**. La de "centro" no nombra ninguna calle, referencia ni barrio cercano; repite "LAVAMOS · SECAMOS…" dos veces. | Alta |
| P5 | Barrios | El retiro cubre **Centro, Güemes, Chauvin y La Perla**, pero solo existe la página de Centro. Güemes, Chauvin y La Perla no tienen landing. | Alta |
| P6 | `/empresas/lavanderia-airbnb` (~200 palabras) | **El B2B más urgente es el más débil**: no menciona kits, plazos, zonas ni frecuencia; no tiene señales de confianza. La temporada arranca en diciembre. | Crítica (negocio) |
| P7 | Servicios | **Sin plazos ni rangos**: "Te confirmamos el plazo al recibirlo". La gente busca "cuánto tarda" y "cuánto sale"; las IA citan datos concretos. | Alta |
| P8 | Sitemap | `/servicios/limpieza-de-vestidos-de-fiesta` **existe pero no está en el sitemap**. Home, `/servicios`, 6 servicios y todo `/empresas` sin `lastmod`. | Media |
| P9 | Imágenes | Fotos de estilo stock/IA; ninguna del local, del equipo ni de la fachada. En `/servicios/lavado-de-acolchados` la misma imagen se repite 5 veces. Un alt no coincide con su archivo en relacionados. | Media |
| P10 | `/nosotros` | Ninguna persona, foto ni historia. Solo "más de 10 años". | Media (E-E-A-T local) |
| P11 | Blog | 28 guías en 1 mes, buenas, pero la mayoría apunta a búsquedas **nacionales informativas** ("cómo lavar jeans") donde compiten Clarín, MDZ y Diario Uno. Poca intención local. Sin autor. | Media |
| P12 | Navegación | Lista de 11 servicios repetida 4 veces por página (menú desktop, menú mobile, bloque, footer) → 22 miniaturas `alt=""` + DOM inflado. | Baja |
| P13 | Footer | "Diseño y desarrollo: Traka" **sin enlace**. Backlink y portfolio perdidos. | Baja (alta para Traka) |
| P14 | GBP | Se enlaza con `share.google/...` (acortador). Mejor la URL directa de Maps/CID + incrustar reseñas. | Baja |
| P15 | Medición | No verificable desde fuera: eventos de clic en WhatsApp por página y Consent Mode v2. Sin esto no se sabe qué página convierte. | Alta — VERIFICAR |

---

## 4. Keywords objetivo y página asignada

> Volúmenes reales: pedirlos a Search Console (Rendimiento → últimos 3 meses → exportar consultas y páginas). Las señales de abajo son estimadas.

| Keyword | Intención | Demanda | Dificultad | Página que debe rankear |
|---|---|---|---|---|
| lavandería mar del plata | Transaccional local | Alta | Media (directorios) | **Home** |
| lavadero de ropa mar del plata | Transaccional local | Alta | Media | Home (variante en copy) |
| tintorería mar del plata | Transaccional local | Alta | Media (5asec) | `/servicios/tintoreria` |
| lavado de acolchados mar del plata | Transaccional | Media-alta, estacional | Baja | `/servicios/lavado-de-acolchados` |
| lavandería a domicilio mar del plata | Transaccional | Media | Baja | `/servicios/retiro-y-entrega-de-ropa` |
| lavandería centro mar del plata | Local | Media | Baja | `/lavanderia-centro-mar-del-plata` |
| lavandería güemes / la perla / chauvin | Local | Baja-media | Muy baja | **Nuevas** (T-07) |
| lavado de zapatillas mar del plata | Transaccional | Media | Muy baja | `/servicios/lavado-de-zapatillas` |
| limpieza vestido de fiesta / de novia mar del plata | Transaccional | Baja-media | Muy baja | `/servicios/limpieza-de-vestidos-de-fiesta` |
| lavandería para airbnb mar del plata | B2B | Baja, alto valor | Muy baja | `/empresas/lavanderia-airbnb` |
| lavado de sábanas y toallas alquiler temporario | B2B | Baja | Muy baja | `/empresas/lavanderia-airbnb` |
| lavado de uniformes mar del plata | B2B | Baja | Muy baja | `/empresas/lavado-de-uniformes` |
| lavandería abierta sábado mar del plata | Local | Baja | Muy baja | Home (bloque horarios) |
| cuánto cuesta lavar un acolchado | Comercial | Media | Media | **Nueva guía** (T-12) |
| cuánto tarda la tintorería | Comercial | Baja | Baja | FAQ en `/servicios/tintoreria` |
| teñir ropa mar del plata | Transaccional | Baja | Muy baja | `/servicios/tenido-de-prendas` |
| arreglos de ropa / costurera mar del plata | Transaccional | Media | Baja | `/servicios/arreglos-y-costura` |

**Regla anti-canibalización:** la home es la única que apunta a "lavandería (y tintorería) en Mar del Plata". `/lavanderia-mar-del-plata` pasa a ser **hub de zonas** ("Zonas de Mar del Plata donde trabajamos") y `/servicios` es un **catálogo** ("Servicios de Aquabon").

---

## 5. Backlog para Claude Code

### Fase 0 — Verificación (antes de tocar nada)

**T-00 · Inventario técnico**
- Revisar en el código: JSON-LD existente, `<html lang>`, meta robots, evento GA4 de clic en WhatsApp, Consent Mode, cómo se genera el sitemap.
- ✅ Aceptación: tabla con "existe / no existe / parcial" para cada punto de P2 y P15.

### Fase 1 — Quick wins (1 semana)

**T-01 · Datos estructurados completos**
- Global (layout): `DryCleaningOrLaundry` (subtipo de `LocalBusiness`) con `name`, `url`, `telephone` (+5492235607738), `address` (Gascón 2189, CP a confirmar, Mar del Plata, Buenos Aires, AR), `geo`, `openingHoursSpecification` (L-V 08:30-20:00, S 09:00-14:00), `areaServed` (Centro, Güemes, Chauvin, La Perla), `sameAs` (Instagram, URL de Google Maps), `image`, `priceRange` ("$$").
- Por servicio: `Service` con `provider` → `@id` del negocio, `areaServed`, `serviceType`.
- Páginas con FAQ: `FAQPage`. Todas: `BreadcrumbList`. Guías: `Article` con `author` (Organization o persona, ver T-10), `datePublished`, `dateModified`.
- `@id` estable: `https://www.aquabonlavanderia.com/#negocio`.
- ✅ Aceptación: 0 errores en Rich Results Test para home, 1 servicio, 1 guía y 1 B2B.

**T-02 · Sitemap**
- Incluir `/servicios/limpieza-de-vestidos-de-fiesta`. `lastmod` real (fecha del último cambio del archivo) en todas las URLs. Asegurar que toda nueva página entre automáticamente.
- ✅ Aceptación: las 53+ URLs con `lastmod`; ninguna página indexable fuera del sitemap.

**T-03 · Desambiguar home / hub / catálogo** (P3)
- Home: mantener H1 "Lavandería y tintorería en Mar del Plata".
- `/lavanderia-mar-del-plata` → H1 "Zonas de Mar del Plata donde trabajamos", title "Lavandería en Mar del Plata por zonas: retiro y entrega | Aquabon", contenido: mapa, tarjetas por barrio (enlazan a T-07), tiempos de retiro por zona.
- `/servicios` → H1 "Servicios de Aquabon", title "Todos los servicios de lavandería y tintorería | Aquabon".
- ✅ Aceptación: ningún par de páginas comparte la misma keyword principal en title + H1.

**T-04 · Plazos y datos concretos en cada servicio** (P7)
- Bloque fijo "Datos rápidos" arriba de cada servicio: plazo habitual (ej. "Valet: 24–48 h", "Acolchados: 48–72 h"), qué incluye, cómo se entrega, si hay retiro.
- Precio: decidir **"desde $X"** o "consultá el precio" (decisión de Joaco; recomendación: "desde" en acolchados y valet, que son comparables).
- ✅ Aceptación: las 11 páginas de servicio muestran plazo; datos alimentados desde un único archivo de config (`data/servicios.ts` o similar) para no desincronizar.

**T-05 · Enlace de Traka y GBP** (P13, P14)
- Footer: "Diseño y desarrollo: [Traka](https://trakadigital.com)" (dofollow).
- Reemplazar `share.google/...` por la URL directa de la ficha en Maps.
- ✅ Aceptación: enlaces funcionando y sin acortadores.

**T-06 · Medición**
- Evento GA4 `whatsapp_click` con parámetros `page_path`, `cta_id` (hero, flotante, servicio, footer), `service`. Marcarlo como conversión clave. Consent Mode v2 conectado al banner existente.
- ✅ Aceptación: en DebugView aparece el evento con los 3 parámetros.

### Fase 2 — Confianza y local (2–4 semanas)

**T-07 · Landings de barrio** (P4, P5)
- Crear `/lavanderia-guemes-mar-del-plata`, `/lavanderia-la-perla-mar-del-plata`, `/lavanderia-chauvin-mar-del-plata`. Reescribir la de Centro.
- Cada una **con contenido propio**: calles y referencias del barrio, distancia/tiempo desde Gascón 2189, días y franja de retiro en ese barrio, qué piden más ahí (ej. La Perla → alquileres temporarios; Güemes → tintorería/camisas), 2–3 FAQ específicas, mapa, CTA de WhatsApp con mensaje precargado "Hola, estoy en {barrio}…".
- Mínimo 500 palabras únicas; el bloque compartido no cuenta.
- ✅ Aceptación: similitud de texto entre landings de barrio < 30 % (fuera de header/footer).

**T-08 · Sistema de reseñas** (P1)
- Componente `<Resenas>`: rating y cantidad de Google + 6–9 reseñas reales seleccionadas (con nombre y fecha), con link "Ver todas en Google". Fuente: JSON estático actualizado a mano (o Places API más adelante).
- Ubicarlo en: home (después de "Así de simple"), cada servicio (filtrar reseñas por servicio), B2B.
- No marcar las reseñas propias como `AggregateRating` en el schema del negocio (Google considera "self-serving" las reseñas que un negocio publica sobre sí mismo y no muestra estrellas por eso); solo mostrarlas visualmente.
- ✅ Aceptación: componente visible en las 3 plantillas, con datos reales.

**T-09 · Fotos reales** (P9)
- Reemplazar progresivamente por fotos propias: fachada (clave para GBP y para que te reconozcan en la calle), mostrador, máquinas de 15 kg, acolchado antes/después, zapatillas antes/después, bolsa de retiro. Nombres de archivo descriptivos y alt específicos.
- Quitar imágenes repetidas dentro de una misma página.
- ✅ Aceptación: home, acolchados, zapatillas y nosotros con al menos 1 foto real cada una.

**T-10 · Nosotros con caras** (P10)
- Historia (más de 10 años, el lavadero familiar), quién está en el mostrador, foto del equipo y del local, compromisos ("Te decimos la verdad antes"). Usar esa persona/equipo como autor de las guías.
- ✅ Aceptación: al menos 1 persona nombrada y 2 fotos reales.

**T-11 · B2B Airbnb a nivel de venta** (P6) — **antes del 1 de diciembre**
- Estructura: problema del gestor (recambios a tiempo, manchas, faltantes) → oferta **por kit** (qué trae un kit 2 plazas, pack de 5 recambios) → cómo funciona el retiro/entrega y frecuencias → zonas → plazos → tabla "Qué pasa si…" (mancha, faltante, urgencia) → FAQ → CTA "Pedí una prueba con 1 kit".
- Precios: decidir si se publican ($12.000 kit / $50.000 pack de 5) o "desde". En B2B mostrar precio filtra y acelera.
- Agregar a `/empresas/lavanderia-hoteles` y `/empresas` el mismo patrón.
- ✅ Aceptación: página ≥ 700 palabras, con kits, plazos, zonas y 1 CTA principal.

### Fase 3 — Autoridad y contenido (trimestre)

**T-12 · Blog con intención local/comercial** (P11)
Prioridad de nuevas guías (cada una enlaza a su servicio y a una landing de barrio):
1. Cuánto cuesta lavar un acolchado en Mar del Plata (y de qué depende)
2. Cómo preparar la ropa blanca de tu alquiler temporario para la temporada
3. Limpieza de vestido de novia: cuándo llevarlo y qué esperar
4. Lavandería vs lavadero vs tintorería en Mar del Plata: qué llevar a cada uno
5. Checklist de recambio para gestores de Airbnb
6. Zapatillas blancas: lavarlas en casa o en lavandería
- Añadir bloque "En Aquabon lo hacemos así" con foto real en las 28 guías existentes (experiencia propia = diferencial frente a medios nacionales).

**T-13 · Optimización para IA (GEO)**
- `/llms.txt` con: qué es Aquabon, servicios, zonas, horarios, plazos, contacto, URLs clave.
- En cada servicio, un párrafo inicial de 40–60 palabras que responda "qué, dónde, cuánto tarda, cómo pedirlo" (es lo que citan ChatGPT/Perplexity/AI Overviews).
- NAP idéntico en web, GBP, Instagram y directorios.

**T-14 · Citas locales (fuera del código)**
- Darse de alta / reclamar ficha en los directorios que hoy rankean para "lavandería Mar del Plata": argentino.com.ar, marplatense.com.ar, miguiaargentina.com.ar. Mismo NAP exacto.
- Backlinks locales: Colegio de Abogados, SportClub/PayClub, clubes y running teams de las alianzas → pedir enlace a la página de beneficios.

**T-15 · Limpieza de navegación** (P12)
- Un único componente de menú para desktop y mobile (no dos listas en el DOM). Miniaturas del menú con `alt=""` + `aria-hidden` está bien si son decorativas.

---

## 6. Qué medir (revisar cada mes)

| KPI | Fuente | Meta 90 días |
|---|---|---|
| Clics en WhatsApp por página | GA4 (`whatsapp_click`) | Línea base en mes 1, +30 % en mes 3 |
| Impresiones/clics "lavandería mar del plata" y variantes | Search Console | Top 3 |
| Reseñas en Google | GBP | +20 nuevas |
| Llamadas/rutas desde la ficha | GBP Insights | Línea base y crecimiento |
| Consultas B2B (Airbnb/hoteles) | WhatsApp etiquetado | 10 deptos gestionados |

---

## 7. Lo que no pude medir (y cómo cerrarlo)

- **Core Web Vitals / velocidad**: correr PageSpeed Insights (móvil) en home, acolchados y una guía, o pedirle a Claude Code que corra Lighthouse local.
- **Posiciones reales**: el buscador que usé no es local de Argentina. Exportar Search Console (consultas + páginas, 3 meses) y repetir el análisis de canibalización con datos.
- **JSON-LD y eventos**: se resuelven en T-00.
