/* eslint-disable @next/next/no-img-element -- usamos <img>/<picture> con variantes AVIF/WebP pre-generadas; next/image no redimensiona en este hosting. */
import type { CSSProperties } from "react";
import manifest from "./image-manifest.json";

type Entry = { width: number; height: number; widths: number[] };
const images = manifest as Record<string, Entry>;

// Foto responsive con variantes AVIF/WebP pre-generadas (scripts/optimize-images.mjs).
// Misma interfaz que next/image para lo que usa el sitio, sin JavaScript en el cliente.
export default function Img({ src, alt, width, height, sizes = "100vw", priority = false, loading, className, style }: {
  src: string; alt: string; width?: number; height?: number; sizes?: string; priority?: boolean;
  loading?: "lazy" | "eager"; className?: string; style?: CSSProperties;
}) {
  const entry = images[src];
  const w = width ?? entry?.width;
  const h = height ?? (entry && w ? Math.round((w * entry.height) / entry.width) : undefined);
  const load = priority ? "eager" : loading ?? "lazy";
  if (!entry) return <img src={src} alt={alt} width={w} height={h} loading={load} decoding="async" className={className} style={style} />;
  const base = "/img" + src.replace(/\.[a-z]+$/, "");
  const set = (ext: string) => entry.widths.map(x => `${base}-${x}.${ext} ${x}w`).join(", ");
  return <picture>
    <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
    <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
    <img src={`${base}-${entry.widths.at(-1)}.webp`} alt={alt} width={w} height={h} loading={load} decoding={priority ? "sync" : "async"} fetchPriority={priority ? "high" : undefined} className={className} style={style} />
  </picture>;
}
