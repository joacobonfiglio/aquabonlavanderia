import assert from 'node:assert/strict';
import test from 'node:test';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const text = value => value.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();

test('sitemap pages have unique titles, descriptions and H1s, with no repeated headings or heading periods', async () => {
  const xml = await (await fetch(base+'/sitemap.xml')).text();
  const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>new URL(match[1]).pathname);
  const pages = await Promise.all(paths.map(async path=>({path, html:await (await fetch(base+path)).text()})));
  const titles = new Map(), descriptions = new Map(), h1s = new Map();
  for(const {path,html} of pages){
    const headings = [...html.matchAll(/<h([1-6])\b[^>]*>(.*?)<\/h\1>/gs)].map(match=>({level:match[1],text:text(match[2])}));
    const primary = headings.filter(h=>h.level==='1');
    assert.equal(primary.length,1,path);
    const title = text(html.match(/<title>(.*?)<\/title>/s)?.[1]||'');
    const description = html.match(/<meta name="description" content="(.*?)"/)?.[1]||'';
    for(const [value,seen,label] of [[title,titles,'title'],[description,descriptions,'description'],[primary[0].text,h1s,'H1']]){
      assert.ok(value,`${path}: missing ${label}`);
      assert.ok(!seen.has(value),`${path}: ${label} duplicates ${seen.get(value)}`); seen.set(value,path);
    }
    const seen = new Set();
    for(const heading of headings){
      assert.doesNotMatch(heading.text,/\./,`${path}: heading punctuation: ${heading.text}`);
      assert.ok(!seen.has(heading.text.toLowerCase()),`${path}: repeated heading ${heading.text}`);seen.add(heading.text.toLowerCase());
    }
  }
});

test('legacy quilt service redirects permanently to the canonical service', async () => {
 const response=await fetch(base+'/servicios/acolchados',{redirect:'manual'});
 assert.equal(response.status,308);
 assert.equal(response.headers.get('location'),'/servicios/lavado-de-acolchados');
});

test('missing pages return 404 with a home link and noindex', async () => {
 const response=await fetch(base+'/pagina-que-no-existe-aquabon');
 assert.equal(response.status,404);
 const html=await response.text();
 assert.match(html,/Esta página se fue/);
 assert.match(html,/<a[^>]*href="\/"[^>]*>Volver al inicio de Aquabon/);
 assert.match(html,/name="robots" content="[^"]*noindex/);
});

test('commercial pages keep their primary search topic in the H1', async () => {
 const keywords = {
  '/':'lavadero', '/servicios':'servicios de lavandería',
  '/nosotros':'aquabon lavandería', '/blog':'guías para cuidar',
  '/servicios/valet-de-ropa':'valet de ropa',
  '/servicios/lavado-de-acolchados':'lavado de acolchados',
  '/servicios/tintoreria':'tintorería', '/servicios/planchado':'planchado',
  '/servicios/tenido-de-prendas':'teñido de prendas',
  '/servicios/arreglos-y-costura':'arreglos y costura',
  '/servicios/lavado-de-zapatillas':'lavado de zapatillas',
  '/servicios/lavado-de-camperas-y-tapados':'lavado de camperas y tapados',
  '/servicios/lavado-y-planchado-de-camisas':'lavado y planchado de camisas',
  '/servicios/retiro-y-entrega-de-ropa':'retiro y entrega de ropa',
  '/lavanderia-mar-del-plata':'lavandería en mar del plata',
  '/lavanderia-centro-mar-del-plata':'lavadero en el centro de mar del plata',
  '/tintoreria-centro-mar-del-plata':'tintorería en el centro de mar del plata',
  '/empresas':'lavandería para empresas',
  '/empresas/lavanderia-airbnb':'airbnb', '/empresas/lavanderia-hoteles':'hoteles',
  '/empresas/lavanderia-restaurantes':'restaurantes',
  '/empresas/lavanderia-centros-de-estetica':'centros de estética',
  '/empresas/lavado-de-uniformes':'lavado de uniformes',
  '/empresas/lavado-ropa-deportiva':'uniformes deportivos',
 };
 await Promise.all(Object.entries(keywords).map(async ([path,keyword])=>{
  const html=await (await fetch(base+path)).text();
  const heading=text(html.match(/<h1\b[^>]*>(.*?)<\/h1>/s)?.[1]||'').toLowerCase();
  assert.ok(heading.includes(keyword),`${path}: ${heading} must include ${keyword}`);
 }));
});
