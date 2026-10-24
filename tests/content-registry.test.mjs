import assert from "node:assert/strict";
import test from "node:test";
import { existsSync, readFileSync } from "node:fs";

// Coherencia de los registros de contenido (no necesita build). Cuando se suma una guía, un
// servicio o un rubro, este test dice qué archivo quedó sin actualizar.

const root = new URL("../", import.meta.url).pathname;
const read = f => readFileSync(root + f, "utf8");
const { services, businessLinks } = await import(root + "app/site.ts");
const { guides } = await import(root + "app/guides.ts");
const { servicioFromPath } = await import(root + "app/ga.ts");
const { serviceDesigns } = await import(root + "app/service-design.ts");
const { pages } = await import(root + "app/landing-data.ts");
const manifest = JSON.parse(read("app/image-manifest.json"));

const slug = href => href.split("/").at(-1);
const imageOk = src => existsSync(root + "public" + src);

test("guías: registro, página, imagen, tema del blog y fecha del sitemap", () => {
  const problems = [];
  const blogPage = read("app/blog/page.tsx");
  const clusters = new Set([...blogPage.matchAll(/clusters: \[([^\]]*)\]/g)].flatMap(m => [...m[1].matchAll(/"([^"]+)"/g)].map(x => x[1])));
  const sitemap = read("app/sitemap.ts");
  const seen = new Set();
  for (const g of guides) {
    const p = msg => problems.push(`${g.href}: ${msg}`);
    if (seen.has(g.href)) p("está repetida en guides.ts"); seen.add(g.href);
    if (!g.href.startsWith("/blog/")) p("el href tiene que empezar con /blog/");
    if (!existsSync(root + `app${g.href}/page.tsx`)) p(`falta app${g.href}/page.tsx`);
    if (!/^\d{1,2} (ENE|FEB|MAR|ABR|MAY|JUN|JUL|AGO|SEP|OCT|NOV|DIC)$/.test(g.date)) p(`fecha de tarjeta inválida: "${g.date}" (formato "16 OCT")`);
    if (!g.alt?.trim()) p("falta el alt de la imagen");
    if (!imageOk(g.image)) p(`no existe la imagen public${g.image}`);
    else if (!manifest[g.image]) p(`la imagen no tiene variantes optimizadas: corré node scripts/optimize-images.mjs`);
    if (!clusters.has(g.cluster)) p(`el cluster "${g.cluster}" no está en ningún tema de app/blog/page.tsx`);
    if (!sitemap.includes(`"${g.href}"`)) p("falta su fecha en app/sitemap.ts");
    if (g.description.length > 200) p(`description de la tarjeta muy larga (${g.description.length})`);
  }
  if (new Set(guides.map(g => g.title)).size !== guides.length) problems.push("hay títulos de guía repetidos");
  assert.deepEqual(problems, []);
});

test("servicios: página, diseño, datos, medición, WhatsApp e imagen", () => {
  const problems = [];
  const fab = read("app/WhatsAppContact.tsx");
  const guideSlugs = new Set(guides.map(g => slug(g.href)));
  for (const s of services) {
    const p = msg => problems.push(`${s.href}: ${msg}`);
    const sl = slug(s.href);
    if (!existsSync(root + `app${s.href}/page.tsx`)) p(`falta app${s.href}/page.tsx`);
    if (!serviceDesigns[sl]) p(`falta su entrada en app/service-design.ts ("${sl}")`);
    if (!pages[s.href]) p("falta su entrada en app/landing-data.ts");
    if (!servicioFromPath(s.href)) p("falta en byPath de app/ga.ts (parámetro servicio de GA4)");
    if (!fab.includes(`"${sl}"`) && !fab.includes(` ${sl}:`)) p("falta el mensaje del botón flotante en app/WhatsAppContact.tsx");
    if (!imageOk(s.image)) p(`no existe la imagen public${s.image}`);
    if (!s.alt?.trim()) p("falta el alt");
    for (const gs of serviceDesigns[sl]?.guides ?? []) if (!guideSlugs.has(gs)) p(`guía relacionada inexistente: ${gs}`);
  }
  assert.deepEqual(problems, []);
});

test("empresas: página, medición e imagen", () => {
  const problems = [];
  for (const b of businessLinks) {
    const p = msg => problems.push(`${b.href}: ${msg}`);
    if (!existsSync(root + `app${b.href}/page.tsx`)) p(`falta app${b.href}/page.tsx`);
    if (!servicioFromPath(b.href)) p("falta en byPath de app/ga.ts");
    if (!imageOk(b.image)) p(`no existe la imagen public${b.image}`);
    if (!b.alt?.trim()) p("falta el alt");
  }
  assert.deepEqual(problems, []);
});
