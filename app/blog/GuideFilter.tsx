"use client";

import { useEffect, useState } from "react";

// Filtro de guías por tema. Las tarjetas se renderizan en el servidor (sin JS se ven todas);
// el filtro solo cambia data-filter en la grilla y CSS oculta lo que no corresponde.
export default function GuideFilter({ topics, target }: { topics: { id: string; name: string; count: number }[]; target: string }) {
  const [active, setActive] = useState("todas");
  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (topics.some(t => t.id === fromHash)) setActive(fromHash); // eslint-disable-line react-hooks/set-state-in-effect -- sincroniza con la URL al cargar
  }, [topics]);
  useEffect(() => {
    const grid = document.getElementById(target);
    if (grid) grid.dataset.filter = active;
  }, [active, target]);
  const pick = (id: string) => {
    setActive(id);
    history.replaceState(null, "", id === "todas" ? location.pathname : "#" + id);
  };
  const total = topics.reduce((n, t) => n + t.count, 0);
  return <div className="g-filter" role="group" aria-label="Filtrar guías por tema">
    <button type="button" aria-pressed={active === "todas"} onClick={() => pick("todas")}>Todas <span>{total}</span></button>
    {topics.map(t => <button key={t.id} type="button" aria-pressed={active === t.id} onClick={() => pick(t.id)}>{t.name} <span>{t.count}</span></button>)}
  </div>;
}
