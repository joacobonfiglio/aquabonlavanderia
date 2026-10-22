import assert from "node:assert/strict";
import test from "node:test";
import { existsSync } from "node:fs";

// Control de SEO de todas las páginas del sitemap, sobre el build (dist/). Lo corre `npm test`.
// Si agregás una guía o landing y algo de esto falla, la página no está lista para publicar.

const pub = new URL("../public/", import.meta.url).pathname;
const SITE = "https://www.aquabonlavanderia.com";
const env = { ASSETS: { fetch: async () => new Response("", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function load() {
  const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url).href);
  const get = async path => worker.fetch(new Request("http://localhost" + path, { headers: { accept: "text/html" } }), env, ctx);
  const xml = await (await get("/sitemap.xml")).text();
  const paths = [...xml.matchAll(/<loc>https:\/\/www\.aquabonlavanderia\.com([^<]*)<\/loc>/g)].map(m => m[1] || "/");
  return { get, paths };
}

const one = (html, re) => html.match(re)?.[1]?.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const text = s => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

test("cada página del sitemap cumple las reglas de SEO", async () => {
  const { get, paths } = await load();
  assert.ok(paths.length > 40, "el sitemap tiene muy pocas URLs");
  const titles = new Map(), descriptions = new Map(), problems = [];
  for (const path of paths) {
    const res = await get(path);
    const html = await res.text();
    const p = msg => problems.push(`${path}: ${msg}`);
    if (res.status !== 200) { p(`responde ${res.status}`); continue; }

    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)];
    if (h1s.length !== 1) p(`tiene ${h1s.length} H1 (tiene que tener 1)`);

    const title = one(html, /<title>([^<]*)<\/title>/);
    if (!title) p("sin <title>");
    else {
      if (title.length > 60) p(`title de ${title.length} caracteres (máx. 60): "${title}"`);
      if (titles.has(title)) p(`title repetido con ${titles.get(title)}`); else titles.set(title, path);
    }

    const desc = one(html, /<meta name="description" content="([^"]*)"/);
    if (!desc) p("sin meta description");
    else {
      if (desc.length > 158) p(`description de ${desc.length} caracteres (máx. 158)`);
      if (descriptions.has(desc)) p(`description repetida con ${descriptions.get(desc)}`); else descriptions.set(desc, path);
    }

    const canonical = one(html, /<link rel="canonical" href="([^"]*)"/);
    if (canonical !== SITE + (path === "/" ? "/" : path) && canonical !== SITE + path) p(`canonical incorrecto: ${canonical}`);
    if (!/<meta property="og:image" content="[^"]+"/.test(html)) p("sin og:image");
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) p("tiene noindex pero está en el sitemap");

    for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); } catch { p("JSON-LD inválido"); }
    }
    for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(m[0])) p(`imagen sin alt: ${m[0].slice(0, 80)}`);
    for (const m of html.matchAll(/(?:src|srcSet|srcset)="(\/[^"\s]+\.(?:webp|avif|png|jpe?g|svg))/g)) {
      if (!existsSync(pub + m[1].slice(1))) p(`imagen inexistente: ${m[1]}`);
    }
    const body = text(html.replace(/<script[\s\S]*?<\/script>/g, ""));
    if (/\bTODO\b/.test(body) || /lorem ipsum/i.test(body)) p("muestra un TODO o texto de relleno");
    for (const m of html.matchAll(/href="(https:\/\/wa\.me\/[^"]*)"/g)) if (!m[1].startsWith("https://wa.me/5492235607738?text=")) p(`link de WhatsApp con otro número: ${m[1].slice(0, 60)}`);
  }
  assert.deepEqual(problems, []);
});

test("los enlaces internos no apuntan a páginas inexistentes", async () => {
  const { get, paths } = await load();
  const known = new Set(paths), checked = new Map(), broken = [];
  for (const path of paths) {
    const html = await (await get(path)).text();
    for (const m of html.matchAll(/<a\b[^>]*?href="(\/[^"#?]*)/g)) {
      const href = m[1].replace(/\/$/, "") || "/";
      if (known.has(href) || /\.(svg|png|webp|xml|txt|ico|woff2)$/.test(href) || href.startsWith("/_next") || href.startsWith("/img/") || href.startsWith("/fonts/")) continue;
      if (!checked.has(href)) checked.set(href, (await get(href)).status);
      const status = checked.get(href);
      if (status >= 400) broken.push(`${path} → ${href} (${status})`);
    }
  }
  assert.deepEqual([...new Set(broken)], []);
});

test("la página 404 responde 404", async () => {
  const { get } = await load();
  assert.equal((await get("/esta-pagina-no-existe")).status, 404);
});
