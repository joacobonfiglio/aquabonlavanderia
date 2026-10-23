---
name: publicar-contenido
description: Analiza, desarrolla, revisa y publica contenido nuevo en aquabonlavanderia.com (guías del blog, landings de servicio, landings para empresas y páginas por barrio), siguiendo las reglas SEO, de voz y de datos del proyecto. Usalo cuando pidan "nueva guía", "nuevo artículo", "subir un blog", "nueva landing", "página para [rubro]", "página de [servicio]", "calendario de contenido" o "actualizar una guía".
---

# Publicar contenido en Aquabon

Leé primero `CLAUDE.md`: las reglas de ahí mandan sobre todo lo que está acá. Este skill dice **cómo** hacer cada pieza, en 5 etapas. No saltees ninguna.

```
1. Análisis  →  2. Brief (OK de Joaco)  →  3. Desarrollo  →  4. Revisión  →  5. Vista previa (OK de Joaco) → main
```

Arrancá siempre así:

```bash
git fetch origin main && git checkout -B <rama> origin/main
```

Si la rama ya existe con trabajo sin publicar, hacé merge de `origin/main` en ella; no hagas rebase.

---

## 1. Análisis

Antes de escribir una línea, contestá estas preguntas con evidencia:

1. **Intención.** ¿Qué busca la persona? Puede ser:
   - Informativa ("cómo sacar una mancha de café").
   - Transaccional local ("lavado de alfombras en Mar del Plata").
   - B2B ("lavandería para hostels en Mar del Plata").
2. **¿Ya existe?** Buscá en los registros y en el contenido:

   ```bash
   grep -rni "<palabra clave>" app/guides.ts app/site.ts app/landing-data.ts app/blog app/empresas | head
   ```

   Si una página existente ya responde esa intención, **proponé mejorarla** en lugar de crear otra (evita canibalización). Revisá también `docs/seo-2026-10.md`: el calendario de octubre marca temas para consolidar ("alquileres temporarios" va en la página de Airbnb, "mantas y frazadas" en la de acolchados y "planchado con entrega" en la de planchado).
3. **¿Lleva a algo que Aquabon vende?** Toda guía tiene que conectar con un servicio real de `services` en `app/site.ts`. Una landing de servicio o de empresa necesita que **Joaco confirme** que el servicio existe y cómo se presta.
4. **¿Qué datos hacen falta?** Plazos, cobertura, qué se acepta y qué no. Si no están confirmados, no se publican: anotá `TODO(joaco)` en el brief.
5. **Fuentes técnicas** (en guías): fuentes primarias como GINETEX (símbolos), Woolmark (lana), American Cleaning Institute, fabricantes y organismos públicos. Nada de blogs de terceros como fuente.
6. **Demanda.**
   - Si Joaco pasa datos de Search Console o del Planificador de palabras clave, usalos.
   - Si no, decí que la demanda es estimada.
   - La búsqueda web de esta sesión no muestra resultados locales de Argentina: no la uses para afirmar posiciones.

## 2. Brief (frenar y pedir OK)

Presentale a Joaco una tabla por pieza y esperá su OK. Puede aprobar varias juntas, por ejemplo el calendario del mes.

| Campo | Ejemplo |
|---|---|
| Tipo | Guía / landing de servicio / landing de empresa / barrio / mejora |
| URL | `/blog/como-sacar-manchas-de-cafe` |
| Búsqueda principal | cómo sacar manchas de café de la ropa |
| Intención | Informativa → servicio Tintorería / Valet |
| H1 | Cómo sacar manchas de café de la ropa |
| Title (≤60) | Cómo sacar manchas de café de la ropa \| Aquabon |
| Description (≤158) | … |
| Estructura de H2 | 4 a 6 secciones |
| Enlaces internos | Servicio X, guía Y y guía Z; y qué página existente va a enlazar a la nueva |
| Imagen | Nombre del archivo y de dónde sale |
| Fuentes | … |
| Datos pendientes | `TODO(joaco)`: … |

## 3. Desarrollo

### 3a. Guía del blog

1. **Página:** creá `app/blog/<slug>/page.tsx`, copiando la estructura de `app/blog/como-lavar-un-sweater-de-lana/page.tsx` (simple) o de `app/blog/como-secar-un-acolchado/page.tsx` (con resumen rápido, errores comunes y CTA).
   - Constantes `title`, `description`, `path`, `image` y `faqs` (4 o 5).
   - `export const metadata`:
     - `title` de 60 caracteres o menos, terminado en ` | Aquabon`.
     - `description` de 158 o menos.
     - `alternates.canonical: path`.
     - `openGraph` con `type: "article"`, `publishedTime: "AAAA-MM-DD"` e imagen de 1400×788 con `alt`.
   - `<ArticleLayout title description slug date="AAAA-MM-DD" readingTime="N MIN DE LECTURA" cluster="<Cluster>" image={image} service="acolchados|tintoreria|zapatillas|valet">`
   - Bloques, en este orden:
     1. `p.article-lead`: **responde la pregunta en 2 o 3 frases**. Es lo que citan Google y los asistentes de IA.
     2. `nav.article-toc` con anclas.
     3. H2 con variaciones naturales de la búsqueda.
     4. `div.frequency-grid` (tarjetas por caso).
     5. `ol.article-steps` (pasos).
     6. `div.article-callout` (la idea clave).
     7. `figure.article-image` con `<Image>` (es `Img`) y `figcaption`.
     8. Una sección "Cuándo conviene consultar" que enlaza al servicio.
     9. `section.article-sources` con las fuentes.
     10. Al final, el `<script type="application/ld+json">` del `FAQPage` construido desde `faqs`.
   - Si la guía necesita un CTA a WhatsApp dentro del texto, usá `<WhatsAppLink ubicacion="guia" servicio="<servicio>">`.
2. **Registro:** agregá la guía **al principio** de `guides` en `app/guides.ts`:
   - `title`, `description` (la de la tarjeta), `href`, `cluster`.
   - `date` con formato `"21 OCT"`.
   - `image` y `alt`.
3. **Cluster:** tiene que existir en algún tema de `app/blog/page.tsx`. Si es nuevo, sumalo al tema que corresponda; no crees un tema por una sola guía.
4. **Fecha en el sitemap:** agregá `"/blog/<slug>": "AAAA-MM-DD"` en `dates` de `app/sitemap.ts` y actualizá la fecha de `"/blog"`.
5. **Enlazado:**
   - Sumá el slug a `guides` del servicio relacionado en `app/service-design.ts`, que se muestra al final de esa landing.
   - Agregá un link desde al menos una guía existente del mismo tema.
6. **Imagen:** ver la sección *Imágenes*.

### 3b. Landing de servicio (`/servicios/<slug>`)

Solo con un servicio confirmado por Joaco. Tocá **todos** estos archivos; el test de registros avisa si falta alguno:

1. `app/site.ts` → `services[]`: `{ name, href, short, symbol?, image, alt }`.
2. `app/landing-data.ts` → `pages["/servicios/<slug>"]` con `base(path, h1, intro, event, message, items, faqs, { title, description, related, … })`. Copiá la estructura de `"/servicios/limpieza-de-vestidos-de-fiesta"`.
3. `app/service-design.ts` → `serviceDesigns["<slug>"]`: textos de diseño, `variant`, `symbol` y `guides` (slugs existentes).
4. `app/seo-descriptions.ts` → description específica, si la del registro no sirve.
5. `app/servicios/<slug>/page.tsx` → copia exacta de `app/servicios/limpieza-de-vestidos-de-fiesta/page.tsx` cambiando la ruta.
6. `app/ga.ts` → `byPath["/servicios/<slug>"] = "<nombre_corto>"`.
7. `app/WhatsAppContact.tsx` → mensaje del botón flotante para ese slug.
8. `app/sitemap.ts` → fecha en `dates`.
9. Si las guías van a apuntar a este servicio desde el lateral, sumarlo a `serviceInfo` y al tipo `service` de `app/blog/ArticleLayout.tsx`.

### 3c. Landing para empresas (`/empresas/<slug>`)

1. `app/site.ts` → `businessLinks[]`: `{ name, href, short, image, alt }`. Aparece sola en `/empresas` y en el carrusel de rubros.
2. `app/empresas/<slug>/page.tsx` con el objeto `LandingData` en la propia página. Copiá `app/empresas/lavado-de-uniformes/page.tsx`.
   - El mensaje de WhatsApp pide rubro, prendas, cantidad y frecuencia con `__`, que la persona completa.
   - `crumbs` con Inicio → Empresas → la página.
3. `app/ga.ts` → `byPath["/empresas/<slug>"] = "empresas_<rubro>"`.
4. `app/sitemap.ts` → fecha.
5. **Límites:** solo textiles lavables de uso general. No ofrecer ropa hospitalaria, EPP ni procesos sanitarios regulados, salvo que Joaco lo confirme. No inventar capacidad, frecuencia ni facturación.

### 3d. Página por barrio

Solo cuando Joaco confirme por escrito que el retiro llega a ese barrio (hoy está como `TODO` en `app/LocalLanding.tsx`). Cada página tiene que tener contenido propio del barrio, no una copia con el nombre cambiado. Se agrega en `areas`.

### Imágenes

- Formato:
  - Guías: 1400×788, que también es la imagen para redes.
  - Servicios: 1200×900 o 4:5.
  - Archivos WebP o JPG en `public/blog/` o `public/services/`, con nombre descriptivo en minúsculas y con guiones.
- Origen: fotos reales que pase Joaco o imágenes generadas que él apruebe. **Nunca el local, ni personas que parezcan clientes reales.** Si no hay imagen nueva, reusá una existente que tenga sentido y decilo en el informe.
- Después de agregarla: `node scripts/optimize-images.mjs` y commitear también `public/img/…` y `app/image-manifest.json`.
- `alt` descriptivo de lo que se ve, con la palabra clave solo si sale natural.

### Estilo y código

- Solo componentes y clases que ya existen. Sin CSS nuevo salvo que haga falta, y sin librerías nuevas.
- Los textos de la página van en el archivo de la página o en el registro, en voseo.
- Nada de datos del negocio escritos a mano: importalos de `app/site.ts`.

## 4. Revisión

Corré todo y no avances si algo falla:

```bash
npm run check:contenido      # registros coherentes
npm run lint && npx tsc --noEmit -p .
npm test                     # build + HTML + sitemap + SEO por página + registros
npx next build               # build de Vercel
```

`tests/seo-pages.test.mjs` revisa en todas las páginas del sitemap:
- Un H1, title de 60 o menos y description de 158 o menos, ambos únicos.
- Canonical, og:image, JSON-LD válido e imágenes con `alt` que existen.
- Sin `TODO` visible y links de WhatsApp al número correcto.
- Links internos sanos y la 404.

**Revisión en el navegador** (con `npx next start -p 4180` y Playwright usando el Chromium del entorno, `executablePath: '/opt/pw-browsers/chromium'` si hace falta):
- Celular (iPhone SE, iPhone 13 y Pixel 7): hacer scroll hasta el final y abrir el menú. Tiene que cumplirse `document.documentElement.scrollWidth <= innerWidth`.
- Tocar los CTA de la página nueva: el link de WhatsApp tiene que tener el mensaje correcto.

**Autorrevisión del texto.** Releelo como Joaco:
- [ ] ¿El primer párrafo responde la pregunta?
- [ ] ¿Está todo en voseo y sin relleno ("en el mundo actual…", "es importante destacar…")?
- [ ] ¿Hay algún dato, plazo, precio o promesa que no esté confirmado? Sacalo.
- [ ] ¿Las recomendaciones técnicas coinciden con las fuentes y respetan "la etiqueta manda"?
- [ ] ¿Enlaza a un servicio y a dos guías? ¿Alguna página existente enlaza a esta?
- [ ] ¿Se diferencia de las guías parecidas? Si no, ¿por qué existe?

## 5. Vista previa, OK y publicación

1. Hacé commit en español (`Guía: cómo sacar manchas de café`, `Landing: lavado de alfombras en Mar del Plata`) y push a la rama.
2. Esperá la vista previa de Vercel y conseguí la URL:

   ```bash
   sha=$(git rev-parse HEAD)
   curl -s https://api.github.com/repos/joacobonfiglio/aquabonlavanderia/commits/$sha/status
   curl -s "https://api.github.com/repos/joacobonfiglio/aquabonlavanderia/deployments?sha=$sha"
   # luego …/deployments/<id>/statuses → environment_url
   ```

3. Mandale a Joaco el **informe** (formato abajo) con el link y **esperá su OK**.
4. Con el OK:
   - Abrí el PR a `main` con resumen y verificación, y hacé merge.
   - Esperá a que el deploy **Production** quede en `success`.
5. Anotá la publicación en el registro del mes, en `docs/seo-AAAA-MM.md`, con la misma tabla que `docs/seo-2026-10.md`: fecha, URL, tipo, búsqueda, intención, fuentes y enlaces internos.
6. Pedile a Joaco que, en Search Console, use "Inspeccionar URL" → "Solicitar indexación" con la URL nueva.

### Formato del informe

```
**Qué se publica:** <tipo> · <URL> · búsqueda "<…>"
**Vista previa:** <link a la página exacta>
**Qué incluye:** 3–5 puntos (estructura, enlaces, imagen, FAQ)
**Verificación:** lint ✓ · tipos ✓ · npm test (N pass) ✓ · next build ✓ · celular sin desborde ✓ · CTA WhatsApp ✓
**No verificado / pendiente:** … (o "nada")
**Datos que faltan:** TODO(joaco): … (o "ninguno")
¿Lo paso a main?
```

## Ritmo y prioridades

- **Una pieza por semana** como máximo, salvo que Joaco pida otra cosa. Antes que publicar algo nuevo, mejorar lo que ya tiene impresiones en Search Console.
- Prioridad:
  1. Landings que venden: servicios y empresas, con datos confirmados.
  2. Guías que llevan a un servicio, con ángulo de Mar del Plata (humedad y salitre, temporada de verano, guardado de ropa de invierno, alquileres temporarios).
  3. Guías genéricas.
- **Estacionalidad:**
  - Acolchados y frazadas: primavera y otoño.
  - Empresas y Airbnb: septiembre a noviembre.
  - Camperas y tapados: otoño.
  - Vestidos de fiesta: noviembre y diciembre, y la temporada de casamientos.
