# Aquabon Lavandería y Tintorería · web

Web de Aquabon Lavandería y Tintorería, Gascón 2189, Mar del Plata: https://www.aquabonlavanderia.com

- **Manual del proyecto:** [`INSTRUCCIONES.md`](INSTRUCCIONES.md). Identidad, voz, reglas, mapa del sitio, cómo publicar e historial de decisiones.
- **Publicar guías y landings:** [`.claude/skills/publicar-contenido/SKILL.md`](.claude/skills/publicar-contenido/SKILL.md).
- **Registro de publicaciones y planes:** carpeta [`docs/`](docs).
- **Notas técnicas del entorno vinext:** [`docs/tecnico-vinext.md`](docs/tecnico-vinext.md).

Stack: Next.js 16 + React 19, publicado en Vercel desde `main`. Diseño y desarrollo: [Traka](https://trakadigital.com).

```bash
npm run lint
npx tsc --noEmit -p .
npm test
npx next build
```
