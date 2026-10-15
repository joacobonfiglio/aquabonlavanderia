import assert from "node:assert/strict";
import test from "node:test";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

// Toda página de app/ tiene que estar en el sitemap (salvo las legales, que son noindex).
const appDir = new URL("../app/", import.meta.url).pathname;
const noindex = new Set(["/politica-de-privacidad", "/politica-de-cookies", "/terminos-y-condiciones"]);

function pages(dir, base = "") {
  return readdirSync(dir).flatMap(name => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return pages(full, base + "/" + name);
    return name === "page.tsx" ? [base || "/"] : [];
  });
}

test("el sitemap incluye todas las páginas indexables", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  const { default: worker } = await import(workerUrl.href);
  const res = await worker.fetch(new Request("http://localhost/sitemap.xml"), { ASSETS: { fetch: async () => new Response("", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  const xml = await res.text();
  const inSitemap = new Set([...xml.matchAll(/<loc>https:\/\/www\.aquabonlavanderia\.com([^<]*)<\/loc>/g)].map(m => m[1] || "/"));
  const missing = pages(appDir).filter(p => !noindex.has(p) && !inSitemap.has(p));
  assert.deepEqual(missing, []);
});
