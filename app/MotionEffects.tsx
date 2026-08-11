"use client";

import { useEffect, useRef } from "react";

export default function MotionEffects() {
  const cursorBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const cursorBubble = cursorBubbleRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const compactLayout = window.matchMedia("(max-width: 900px)").matches;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    root.classList.add("motion-ready");

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    const hero = document.querySelector<HTMLElement>(
      ".hero, .service-hero, .about-page-hero"
    );
    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let frame = 0;

    const updateParallax = () => {
      parallaxItems.forEach((item) => {
        if (compactLayout) {
          item.style.setProperty("--parallax-y", "0px");
          return;
        }
        const rect = item.getBoundingClientRect();
        const distance =
          window.innerHeight / 2 - (rect.top + rect.height / 2);
        const offset = Math.max(-32, Math.min(32, distance * 0.045));
        item.style.setProperty("--parallax-y", `${offset}px`);
      });
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      cursorBubble?.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorBubble?.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursorBubble?.classList.add("is-visible");

      const target = event.target;
      cursorBubble?.classList.toggle(
        "is-over-action",
        target instanceof Element &&
          Boolean(target.closest("a, button, summary"))
      );

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const isInsideHero =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        if (isInsideHero) {
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          hero.style.setProperty("--pointer-x", `${x * 28}px`);
          hero.style.setProperty("--pointer-y", `${y * 22}px`);
        }
      }
    };

    const onPointerLeave = () => {
      hero?.style.setProperty("--pointer-x", "0px");
      hero?.style.setProperty("--pointer-y", "0px");
      cursorBubble?.classList.remove("is-visible", "is-over-action");
    };

    if (!compactLayout) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);
    updateParallax();

    return () => {
      observer.disconnect();
      if (!compactLayout) {
        window.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
      window.removeEventListener("blur", onPointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div ref={cursorBubbleRef} className="cursor-bubble" aria-hidden="true">
      <span />
    </div>
  );
}
