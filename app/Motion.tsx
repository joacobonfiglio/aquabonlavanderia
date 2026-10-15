"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Movimiento de la web en un solo lugar, sin re-renders de React:
// - [data-reveal]: aparece al entrar en pantalla (clase .is-in). Sin JS el contenido se ve igual.
// - [data-count]: cuenta hasta el número al aparecer.
// - [data-steps] / [data-step]: marca el paso activo del proceso según el scroll.
// - html[data-scrolled]: el header cambia de transparente a sólido.
// - [data-hscroll]: la soga de ropa avanza en horizontal mientras se hace scroll vertical.
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lines = Array.from(document.querySelectorAll<HTMLElement>("[data-hscroll]"));
    if (reduced) lines.forEach(l => l.classList.add("is-static"));
    const moveLines = () => {
      if (reduced) return;
      const vh = window.innerHeight;
      for (const box of lines) {
        const track = box.querySelector<HTMLElement>("[data-hscroll-track]");
        if (!track) continue;
        const r = box.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const progress = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height * 0.4)));
        const max = Math.max(0, track.scrollWidth - box.clientWidth);
        track.style.transform = `translate3d(${(-progress * max).toFixed(1)}px, 0, 0)`;
      }
    };
    let frame = 0;
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { html.dataset.scrolled = window.scrollY > 24 ? "true" : "false"; moveLines(); }); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const reveal = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      reveal.unobserve(e.target);
    }), { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(el => reduced ? el.classList.add("is-in") : reveal.observe(el));

    const counters = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      counters.unobserve(e.target);
      const el = e.target as HTMLElement;
      const to = Number(el.dataset.count);
      if (reduced) { el.textContent = String(to); return; }
      const start = performance.now(), dur = 1100;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: 0.6 });
    document.querySelectorAll("[data-count]").forEach(el => counters.observe(el));

    const steps = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      const box = el.closest("[data-steps]") as HTMLElement | null;
      if (box) box.dataset.active = el.dataset.step;
    }), { rootMargin: "-45% 0px -45% 0px" });
    document.querySelectorAll("[data-step]").forEach(el => steps.observe(el));

    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); reveal.disconnect(); counters.disconnect(); steps.disconnect(); };
  }, [pathname]);
  return null;
}
