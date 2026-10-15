"use client";

import { useState } from "react";
import { PinIcon } from "./ui";
import { business, mapsEmbed } from "./site";

// El mapa de Google pesa: se carga recién cuando la persona lo pide.
export default function MapFacade() {
  const [show, setShow] = useState(false);
  return <div className="map">
    {show
      ? <iframe src={mapsEmbed} title={`Mapa: ${business.name}, ${business.address}`} referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      : <div className="map__facade"><PinIcon /><strong>{business.street}</strong><span className="muted">{business.city}</span><button type="button" className="btn btn--ghost" onClick={() => setShow(true)}>Ver el mapa</button></div>}
  </div>;
}
