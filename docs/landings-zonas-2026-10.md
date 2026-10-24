# Landings por zona · vistas previas

Desarrollo solicitado por Joaco sobre la tabla de palabras clave, metadatos y URLs. Rama: codex/landings-zonas-20261023. No autoriza main ni producción.

## Auditoría previa

Verificación HTTP y sitemap de producción: lavanderia-mar-del-plata, servicios/lavado-de-acolchados, empresas/lavanderia-airbnb y empresas/lavanderia-hoteles responden 200 y existen. No se duplican ni se reescriben en este trabajo.
Las rutas de Güemes, Chauvin y La Perla respondían 404 y no figuraban en sitemap ni registros.

## Brief implementado

| Campo | Güemes | Chauvin | La Perla |
|---|---|---|---|
| URL | /lavanderia-guemes-mar-del-plata | /lavanderia-chauvin-mar-del-plata | /lavanderia-la-perla-mar-del-plata |
| Búsqueda | lavadero de ropa Güemes Mar del Plata | lavadero de ropa Chauvin Mar del Plata | lavadero de ropa La Perla Mar del Plata |
| Secundaria | lavado de acolchados Güemes | lavado de acolchados Chauvin | lavado de acolchados La Perla |
| Intención | Consulta local por ropa y acolchados | Consulta local por ropa y acolchados | Consulta local por ropa y acolchados, derivación a alojamientos |
| Enfoque | Combinar ropa cotidiana y piezas de cama | Preparar cantidades y acolchados para guardar | Distinguir uso personal de recambios de alojamiento |
| Enlaces | Valet, acolchados, tintorería y tres guías | Valet, acolchados, tintorería y tres guías | Valet, acolchados, tintorería, Airbnb y tres guías |

H1, title y description en app/neighborhoods.ts. Primer párrafo responde dónde se recibe el pedido, usando la dirección de app/site.ts. Estructura: hero, servicios, preparación de consulta, visita y consulta de retiro, proceso, FAQ, guías. Entrada desde enlaces relacionados de /lavanderia-mar-del-plata.

Diseño de Centro: PageHero, Ribbon, bento, feature-grid, Process, Faq, ChatPreview y GuideCards. Sin CSS ni dependencias nuevas. Imágenes existentes de prendas; no representan fotos del local.

## Límites pendientes de publicación

- TODO(joaco): cobertura y condiciones de retiro en los tres barrios. La vista previa solo invita a consultar la dirección, sin prometer cobertura.
- TODO(joaco): validar utilidad local de cada página y sumar detalles operativos verificables cuando se confirme cobertura. Los enfoques editoriales no son afirmaciones sobre los habitantes ni datos de renta.
- Demanda estimada: no hay volúmenes de Keyword Planner/Semrush/Ahrefs ni datos de Search Console.
- No se declaran sucursales, tiempos de viaje, capacidad, precios ni plazos.
- Preview de Vercel fuera de producción; no pasar a main sin aprobación explícita y resolver los pendientes comerciales.
