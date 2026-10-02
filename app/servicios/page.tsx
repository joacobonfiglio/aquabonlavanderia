import ServiceCatalog from "../ServiceCatalog";
import { landingMetadata } from "../SeoLanding";
import { servicesHub } from "../landing-data";
export const metadata = landingMetadata(servicesHub);
export default function Page() { return <ServiceCatalog />; }
