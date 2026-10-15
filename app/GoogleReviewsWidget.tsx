"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

/** The public widget ID is supplied by the business owner; reviews stay managed in Elfsight. */
export default function GoogleReviewsWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    const observers = new Map<Node, MutationObserver>();
    let retry: ReturnType<typeof setInterval> | undefined;
    const stopRetry = () => {
      if (retry !== undefined) clearInterval(retry);
      retry = undefined;
    };

    // Elfsight renders inside open shadow roots. Keep this scoped to our widget;
    // translate the heading only, preserving reviews, links and attribution.
    const translate = () => {
      let found = false;
      const visit = (root: Element | ShadowRoot) => {
        if (!observers.has(root)) {
          const observer = new MutationObserver(translate);
          observer.observe(root, { childList: true, subtree: true, characterData: true });
          observers.set(root, observer);
        }
        root.querySelectorAll<HTMLElement>(".es-widget-title-header").forEach((heading) => {
          found = true;
          if (heading.textContent?.trim() === "What Our Customers Say") {
            heading.textContent = "Lo que dicen nuestros clientes";
            heading.lang = "es";
          }
        });
        root.querySelectorAll("*").forEach((element) => {
          if (element.shadowRoot) visit(element.shadowRoot);
        });
      };
      visit(widget);
      if (widget.shadowRoot) visit(widget.shadowRoot);
      if (found) stopRetry();
    };

    // Attaching a shadow root itself does not emit a DOM mutation. Discover it
    // while the lazy widget is visible, then let observers handle re-renders.
    const visibility = new IntersectionObserver(([entry]) => {
      stopRetry();
      if (entry.isIntersecting) {
        retry = setInterval(translate, 500);
        translate();
      }
    });
    visibility.observe(widget);
    translate();
    return () => {
      stopRetry();
      visibility.disconnect();
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return <>
    <Script id="elfsight-platform" src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
    <div ref={widgetRef} className="elfsight-app-6407271c-6500-44d6-b860-d0a83ba7ac23" data-elfsight-app-lazy />
  </>;
}
