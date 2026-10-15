export const siteUrl = "https://www.aquabonlavanderia.com";
export const googleProfileUrl = "https://share.google/L9kn23nPWPLthwKMR";
export const instagramUrl = "https://www.instagram.com/aquabonlavanderia/";
export const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Gasc%C3%B3n+2189%2C+Mar+del+Plata%2C+Argentina";
export const businessSchema = {
  "@context": "https://schema.org", "@type": "DryCleaningOrLaundry",
  "@id": siteUrl + "/#business", name: "Aquabon Lavandería", url: siteUrl + "/",
  telephone: "+54 9 223 560-7738", logo: siteUrl + "/favicon.svg",
  image: siteUrl + "/laundry-hero-v2.webp",
  address: { "@type": "PostalAddress", streetAddress: "Gascón 2189", addressLocality: "Mar del Plata", addressRegion: "Buenos Aires", addressCountry: "AR" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  sameAs: [googleProfileUrl, instagramUrl],
};
