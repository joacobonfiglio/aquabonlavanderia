// Genera variantes AVIF/WebP redimensionadas de las fotos del sitio y un manifiesto para <Img>.
// Uso: node scripts/optimize-images.mjs  (correrlo al agregar o cambiar una foto en public/).
import { readdir, mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const pub = path.join(root, "public");
const sources = [
  ...(await readdir(path.join(pub, "blog"))).filter(f => /\.(webp|png|jpe?g)$/.test(f)).map(f => "/blog/" + f),
  ...(await readdir(path.join(pub, "services"))).filter(f => /\.(webp|png|jpe?g)$/.test(f)).map(f => "/services/" + f),
  "/service-still-v2.webp",
  "/laundry-hero-v2.webp",
  "/laundry-detail-v2.webp",
];
const WIDTHS = [480, 960, 1400];
const manifest = {};
for (const src of sources) {
  const input = path.join(pub, src);
  const meta = await sharp(input).metadata();
  const widths = WIDTHS.filter(w => w < meta.width);
  widths.push(Math.min(meta.width, 1400));
  const unique = [...new Set(widths)].sort((a, b) => a - b);
  const base = src.replace(/\.[a-z]+$/, "");
  await mkdir(path.join(pub, "img", path.dirname(base)), { recursive: true });
  for (const w of unique) {
    const out = path.join(pub, "img", `${base}-${w}`);
    if (await access(out + ".avif").then(() => true, () => false)) continue; // ya generada
    const pipeline = sharp(input).resize({ width: w, withoutEnlargement: true });
    await pipeline.clone().avif({ quality: 52, effort: 6 }).toFile(path.join(pub, "img", `${base}-${w}.avif`));
    await pipeline.clone().webp({ quality: 74, effort: 6 }).toFile(path.join(pub, "img", `${base}-${w}.webp`));
  }
  manifest[src] = { width: meta.width, height: meta.height, widths: unique };
  console.log(src, unique.join(","));
}
await writeFile(path.join(root, "app", "image-manifest.json"), JSON.stringify(manifest, null, 1) + "\n");
