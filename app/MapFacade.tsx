"use client";

import { useState, type ReactNode } from "react";
import { business, mapsEmbed } from "./site";

// El mapa de Google pesa: se carga recién cuando la persona lo pide. Mientras tanto, la vidriera.
export default function MapFacade({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  return <div className="map">
    {show
      ? <iframe src={mapsEmbed} title={`Mapa: ${business.name}, ${business.address}`} referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      : <>{children}<button type="button" className="btn btn--light map__btn" onClick={() => setShow(true)}>Ver el mapa</button></>}
  </div>;
}
