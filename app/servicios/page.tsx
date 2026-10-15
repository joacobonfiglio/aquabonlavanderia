import ServiceCatalog from "../ServiceCatalog";
import { landingMetadata } from "../SeoLanding";
import { servicesHub } from "../landing-data";
export const metadata = landingMetadata({ ...servicesHub, title: "Servicios de lavandería en Mar del Plata | Aquabon" });
export default function Page() { return <ServiceCatalog />; }
