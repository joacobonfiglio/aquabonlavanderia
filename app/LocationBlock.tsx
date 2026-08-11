const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina&output=embed";

export default function LocationBlock() {
  return (
    <section className="location-section" id="ubicacion" data-reveal>
      <div className="location-copy">
        <p className="eyebrow">ENCONTRANOS FÁCIL</p>
        <h2>
          Estamos acá,
          <em>cerca tuyo</em>
        </h2>
        <p>
          A un par de cuadras, en Gascón 2189. Fácil de llegar, fácil de
          encontrarnos.
        </p>
        <a href={directionsUrl} target="_blank" rel="noreferrer">
          ABRIR RUTA EN GOOGLE MAPS <span aria-hidden="true">↗</span>
        </a>
        <div className="location-details">
          <div>
            <span>DIRECCIÓN</span>
            <strong>Gascón 2189<br />Mar del Plata</strong>
          </div>
          <div>
            <span>HORARIO</span>
            <strong>8:00–13:30<br />16:00–20:30</strong>
          </div>
        </div>
      </div>
      <div className="map-frame">
        <iframe
          src={mapEmbedUrl}
          title="Ubicación de Aquabon Lavandería en Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a href={directionsUrl} target="_blank" rel="noreferrer">
          GASCÓN 2189 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
