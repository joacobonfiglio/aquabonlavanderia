# Aquabon · Estrategia editorial · octubre–noviembre 2026

Actualizado: 23/10/2026. Propuesta para aprobar, sin publicaciones programadas automáticamente. Implementado en esta rama: muestra geográfica de Centro sobre su URL existente. El resto queda en brief.

## Objetivo y evidencia

Conectar búsqueda → respuesta útil → servicio → consulta por WhatsApp → pedido. Un clic a WhatsApp no demuestra una conversación ni una venta.

Demanda estimada: no hay exportación de Search Console ni volúmenes de palabras clave. No se afirman posiciones, tráfico o resultados. Se prioriza por intención comercial y pertinencia estacional; el orden se ajusta con evidencia real.

Inventario revisado: app/site.ts, app/guides.ts, app/landing-data.ts, app/BusinessLanding.tsx, app/LocalLanding.tsx y docs/seo-2026-10.md. Hay 11 servicios, 6 rubros B2B, 30 guías y Centro como zona registrada. Los contenidos coinciden entre main y la rama de reglas consultada.

## Arquitectura

| Tipo | Intención | Contenido necesario | Conversión |
|---|---|---|---|
| Landing geográfica | Encontrar atención desde una zona | Dirección real, cómo llegar, modalidad confirmada, servicios pertinentes y FAQ locales | WhatsApp con dirección y servicio |
| Landing de servicio | Contratar un trabajo concreto | Qué se acepta, qué se revisa, proceso y límites | Foto, prendas y cantidad |
| Landing B2B | Resolver pedidos recurrentes | Textiles, volumen, frecuencia y logística a evaluar | Consulta con datos de la operación |
| Guía práctica | Resolver una duda de cuidado | Respuesta inicial, pasos, errores, cuándo consultar y fuentes primarias | Servicio relacionado |
| Artículo explicativo | Elegir entre cuidados o entender un proceso | Comparación o explicación concreta | Servicio adecuado al caso |

Guías y artículos viven en /blog y usan ArticleLayout. No se abre otra sección ni se crean dos URLs para la misma intención. Cada guía enlaza un servicio y dos guías, y recibe al menos un enlace desde contenido existente.

## Consolidación

- Alquileres temporarios dentro de /empresas/lavanderia-airbnb.
- Mantas y frazadas dentro de /servicios/lavado-de-acolchados.
- Planchado con entrega dentro de planchado, enlazando retiro y entrega.
- Desodorante dentro de la guía de transpiración, si responde la misma duda.
- Guardado sin olor: revisar y mejorar guardado de invierno y secado interior antes de abrir otra URL.
- Hostels: revisar hoteles/alojamientos antes de crear otra landing B2B.
- Deportes: no crear una página por disciplina si la oferta y el proceso son iguales.
- Home y /lavanderia-mar-del-plata ya responden la búsqueda amplia: no sumar otra URL general.

## Muestra geográfica: Centro

| Campo | Brief implementado |
|---|---|
| URL | /lavanderia-centro-mar-del-plata (existente) |
| Búsqueda | lavandería en el centro de Mar del Plata |
| H1 | Lavandería en el centro de Mar del Plata |
| Title | Lavandería en el centro de Mar del Plata \| Aquabon |
| Description | Lavandería en el centro de Mar del Plata, Gascón 2189. Aquabon lava, seca y dobla tu ropa; también recibe acolchados. Consultá por WhatsApp. |
| Estructura | Hero y contacto; tres servicios visuales; dirección y recorrido; consulta de retiro; proceso; FAQ y mensaje preparado; guías; mapa y cierre |
| Enlaces | Valet, acolchados, tintorería, servicios, diferencia entre lavandería y tintorería, secado de acolchado y símbolos |
| Entrada | Footer y /lavanderia-mar-del-plata existentes |
| Imagen | Imágenes existentes de prendas: laundry-hero-v2.webp, service-still-v2.webp y guías. No son fotos del local |
| Fuentes | Datos comerciales de app/site.ts y servicios registrados |
| Medición | click_whatsapp con servicio=zona_centro; click_como_llegar |
| Pendiente | Aprobación visual. Sin cobertura nueva declarada |

Se mantienen tipografía, colores, tarjetas, olas, navegación, componentes y CTA del nuevo diseño. No se agregan librerías ni CSS. La página resuelve la visita al local; no inventa distancias, estacionamiento, colectivos ni sucursales.

## Expansión geográfica

| Zona candidata | Hipótesis de búsqueda | Condición para crear |
|---|---|---|
| Güemes | lavandería para la zona Güemes | TODO(joaco): cobertura y modalidad; comprobar demanda y aportar contenido local propio |
| Chauvin | lavandería con retiro en Chauvin | TODO(joaco): cobertura y condiciones específicas; no publicar si solo cambia el nombre |
| La Perla | lavandería para residentes o alojamientos de La Perla | TODO(joaco): cobertura y público; evitar duplicar Airbnb |

Son candidatos de investigación, no cobertura confirmada ni un orden de prioridad medido. Donde no hay local, explicar la dirección real y usar una formulación honesta como “para [zona]”. No simular sucursales. Si no hay información diferencial, responder desde retiro y entrega o la landing de servicio. Confirmar cobertura y brief antes de crear cada página.

## Calendario propuesto

Una pieza por semana, según las reglas actuales. El calendario diario anterior se conserva como registro histórico, pero esta propuesta reemplaza su planificación futura. Las fechas requieren aprobación de brief y de vista previa.

| Fecha | Pieza | Tipo / acción | Objetivo |
|---|---|---|---|
| 23/10 | Centro | Mejora geográfica | Validar estructura y consulta local |
| 30/10 | Airbnb y alquileres temporarios | Mejora B2B | Recibir consultas de anfitriones para el verano |
| 06/11 | Acolchados, mantas y frazadas | Mejora de servicio | Acompañar cambio de temporada y guardado |
| 13/11 | Vestidos de fiesta | Mejora de servicio | Consultas por eventos y fechas de uso |
| 20/11 | Cómo lavar toallas | Guía nueva | Resolver dureza/olor y derivar a valet/alojamientos |
| 27/11 | Secado independiente | Landing nueva condicionada | Diferenciar secado solo de valet |
| 30/11 | Revisión de datos y consultas | Medición | Decidir diciembre, sin sumar publicación |

Si secado no está confirmado, proponer como sustituto la mejora del artículo existente /blog/como-secar-ropa-dentro-de-casa, con brief previo. Una nueva zona puede reemplazar una entrega si cobertura y demanda están resueltas; no aumenta automáticamente la cadencia.

## Briefs por pieza

### Airbnb — 30/10

| Campo | Propuesta |
|---|---|
| URL / intención | /empresas/lavanderia-airbnb · B2B: lavandería alquileres temporarios Mar del Plata |
| H1 | Lavandería para Airbnb y alquileres temporarios en Mar del Plata |
| Title | Lavandería para Airbnb en Mar del Plata \| Aquabon |
| Description | Lavandería para Airbnb y alquileres temporarios en Mar del Plata. Contanos textiles, cantidades y frecuencia para evaluar el servicio. |
| H2 | Sábanas, fundas y toallas; recambios; datos para cotizar; retiro y entrega; FAQ |
| Enlaces | Empresas, hoteles, retiro, acolchados; toallas cuando se publique. Entrada desde Empresas |
| Imagen | Reutilizar /blog/revisar-cuando-lavar-acolchado.webp |
| Fuentes | Servicio registrado y condiciones confirmadas por Joaco |
| CTA | Consulta con textiles, cantidad, frecuencia y dirección |
| Pendientes | TODO(joaco): mínimos, terminación, capacidad y logística. No ofrecer alquiler de ropa blanca |

### Acolchados — 06/11

| Campo | Propuesta |
|---|---|
| URL / intención | /servicios/lavado-de-acolchados · contratación local |
| H1 | Lavado de acolchados en Mar del Plata |
| Title | Lavado de acolchados en Mar del Plata \| Aquabon |
| Description | Lavado de acolchados, mantas y frazadas en Mar del Plata. Mandanos una foto y consultá el cuidado adecuado para tu ropa de cama. |
| H2 | Ropa de cama recibida; relleno y etiqueta; lavado y secado; antes de guardar; FAQ |
| Enlaces | Secado de acolchados, frecuencia, guardado de invierno y retiro. Entrada desde Centro y guías |
| Imagen | /blog/revisar-cuando-lavar-acolchado.webp |
| Fuentes | Servicio registrado; revisar fuentes primarias de las guías al desarrollar |
| CTA | Foto, plazas y relleno |
| Pendientes | TODO(joaco): límites de tamaños/materiales; no prometer resultados ni tiempo de secado |

### Vestidos — 13/11

| Campo | Propuesta |
|---|---|
| URL / intención | /servicios/limpieza-de-vestidos-de-fiesta · contratación local |
| H1 | Limpieza de vestidos de fiesta en Mar del Plata |
| Title | Limpieza de vestidos de fiesta en Mar del Plata \| Aquabon |
| Description | Limpieza de vestidos de fiesta en Mar del Plata. Mandanos fotos del vestido, la etiqueta y las manchas para una primera orientación. |
| H2 | Revisión de la prenda; bordados y lentejuelas; manchas; fecha de uso; FAQ |
| Enlaces | Tintorería, maquillaje, símbolos. Entrada desde guía de maquillaje |
| Imagen | Proponer vestido-fiesta-detalle.webp generado y aprobado para reemplazar imagen de saco |
| Fuentes | Servicio existente; GINETEX para etiquetas al desarrollar |
| CTA | Foto completa, etiqueta, detalles y fecha de uso |
| Pendientes | Aprobación de imagen; fecha de uso no implica plazo garantizado |

### Toallas — 20/11

| Campo | Propuesta |
|---|---|
| URL / intención | /blog/como-lavar-toallas · informativa → valet y Airbnb |
| H1 | Cómo lavar toallas sin que queden duras ni con olor |
| Title | Cómo lavar toallas sin olor ni dureza \| Aquabon |
| Description | Cómo lavar y secar toallas según su etiqueta, sin sumar residuos ni guardarlas húmedas. Conocé los errores frecuentes y cuándo consultar. |
| H2 | Etiqueta y separación; detergente; lavado según tejido; secado y guardado; cuándo consultar |
| Enlaces | Valet, Airbnb, dosificación de detergente y secado interior. Entrada desde Airbnb y detergente |
| Imagen | Proponer lavado-secado-toallas.webp generado para aprobación |
| Fuentes | Whirlpool: https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-towels.html, localizada en análisis; GINETEX para etiquetas |
| CTA | Consultar por mis toallas |
| Pendientes | Revisar recomendaciones técnicas concretas al redactar; sin temperaturas universales ni promesas de desinfección |

### Secado — 27/11

| Campo | Propuesta |
|---|---|
| URL / intención | /servicios/secado-de-ropa · secado sin lavado |
| H1 | Servicio de secado de ropa en Mar del Plata |
| Title | Secado de ropa en Mar del Plata \| Aquabon |
| Description | ¿Ya lavaste y necesitás secar la ropa? Consultá por secado en Mar del Plata según prendas, etiqueta y disponibilidad. |
| H2 | Si ya lavaste; prendas admitidas; preparación del pedido; diferencia con valet; FAQ |
| Enlaces | Valet, símbolos y secado interior. Entrada desde Servicios y secado interior |
| Imagen | Proponer servicio-secado-ropa.webp generado para aprobar |
| Fuentes | Modalidad comercial confirmada por Joaco |
| CTA | Consultar por secado, cantidad y prendas |
| Pendientes | TODO(joaco): condiciones para ropa lavada fuera, exclusiones, doblado. No desarrollar oferta sin confirmar |

## Reserva y artículos del blog

| Oportunidad | Acción recomendada | Servicio |
|---|---|---|
| Qué incluye el valet | Completar landing antes de crear otro artículo con igual intención | Valet |
| Manchas de desodorante | Ampliar transpiración | Camisas / tintorería |
| Guardado sin humedad | Mejorar guardado de invierno y secado interior | Valet / tintorería |
| Ropa deportiva y estampados | Evaluar guía específica, respaldada por fabricantes | Ropa deportiva |
| Lavado de alfombras | Nueva landing solo con servicio, medidas, materiales y modalidad confirmados | TODO(joaco) |
| Lavado de cortinas | Investigación; servicio no confirmado | TODO(joaco) |

## Medición

Guardar fecha, URL y búsqueda objetivo. Si hay datos disponibles, registrar los 28 días anteriores. Revisar a los 14 y 28 días: indexación, consultas, impresiones, clics, CTR y clics a WhatsApp por página. Estas ventanas no son una promesa de posicionamiento.

- Impresiones relevantes con pocos clics: revisar título y descripción.
- Visitas con pocas consultas: revisar claridad, CTA y FAQ.
- Clics a WhatsApp sin consultas útiles: ajustar mensaje precargado.
- Consultas sin pedidos: registrar motivos reales con Joaco.
- URLs compitiendo por la misma intención: mejorar o consolidar con aprobación y 301 si corresponde.
- Sin datos suficientes: mantener las hipótesis y evitar conclusiones de rendimiento.

## Publicación

Datos desde app/site.ts; no inventar cobertura, precios, plazos ni testimonios. Imágenes reales aportadas o generadas aprobadas; sin fotos del local. Una URL por intención. Todos los datos pendientes quedan fuera de la página.

Cada pieza requiere brief, desarrollo, check:contenido, lint, tsc, npm test, next build, revisión móvil, preview y OK explícito antes de main. La muestra de Centro fue autorizada para desarrollo; su publicación y las demás piezas siguen pendientes de aprobación.
