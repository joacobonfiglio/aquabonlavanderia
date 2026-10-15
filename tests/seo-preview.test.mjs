import assert from 'node:assert/strict';
import test from 'node:test';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const expected = new Map([
 ['/', 'Lavadero y lavandería'],
 ['/servicios', 'Servicios de lavandería'],
 ['/servicios/valet-de-ropa', 'Valet de ropa'],
 ['/servicios/lavado-de-acolchados', 'Lavado de acolchados'],
 ['/servicios/tintoreria', 'Tintorería'],
 ['/servicios/retiro-y-entrega-de-ropa', 'Retiro y entrega'],
 ['/lavanderia-centro-mar-del-plata', 'Lavadero en el centro'],
 ['/lavanderia-mar-del-plata', 'Elegí tu servicio'],
]);
for (const [path, heading] of expected) test(`SEO rendered HTML: ${path}`, async () => {
 const response = await fetch(base + path); assert.equal(response.status, 200);
 const html = await response.text();
 const h1 = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)];
 assert.equal(h1.length, 1); assert.ok(h1[0][1].includes(heading));
 assert.ok(h1[0][1].includes('Mar del Plata'));
 assert.doesNotMatch(html, /name="codex-preview"/);
 assert.ok(html.includes(`href="https://www.aquabonlavanderia.com${path === '/' ? '' : path}"`) || html.includes(`href="https://www.aquabonlavanderia.com${path}"`));
 assert.match(response.headers.get('x-robots-tag') || '', /noindex/);
 const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
 const business = schemas.filter(s=>s['@type']==='DryCleaningOrLaundry');
 assert.equal(business.length, 1); assert.ok(business[0].sameAs.some(s=>s.includes('share.google')));
 assert.ok(html.includes('https://wa.me/5492235607738?text='));
});
test('old blog URL permanently redirects; new URL is canonical', async () => {
 const response = await fetch(base+'/blog/como-evitar-que-la-ropa-destina', {redirect:'manual'});
 assert.equal(response.status, 308); assert.equal(response.headers.get('location'), '/blog/como-evitar-que-la-ropa-pierda-color');
 const html = await (await fetch(base+'/blog/como-evitar-que-la-ropa-pierda-color')).text();
 assert.ok(html.includes('https://www.aquabonlavanderia.com/blog/como-evitar-que-la-ropa-pierda-color'));
});
test('sitemap has unique working URLs and assigns maximum priority to home', async () => {
 const xml = await (await fetch(base+'/sitemap.xml')).text();
 const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]); assert.equal(new Set(urls).size, urls.length);
 assert.ok(!xml.includes('como-evitar-que-la-ropa-destina'));
 assert.match(xml, /<loc>https:\/\/www\.aquabonlavanderia\.com<\/loc>[\s\S]*?<priority>1<\/priority>/);
 const states = await Promise.all(urls.map(async url=>[url,(await fetch(base+new URL(url).pathname)).status]));
 for (const [url,status] of states) assert.equal(status,200,url);
});

test('home includes the connected Elfsight widget once and keeps a Google source link', async () => {
 const html = await (await fetch(base+'/')).text();
 assert.equal((html.match(/class="elfsight-app-6407271c-6500-44d6-b860-d0a83ba7ac23"/g)||[]).length,1);
 assert.ok(html.includes('data-elfsight-app-lazy'));
 assert.ok(html.includes('https://elfsightcdn.com/platform.js'));
 assert.ok(html.includes('https://share.google/L9kn23nPWPLthwKMR'));
});
