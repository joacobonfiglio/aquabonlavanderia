import NeighborhoodLanding from "../NeighborhoodLanding";
import { landingMetadata } from "../SeoLanding";
import { localData } from "../LocalLanding";
export const metadata = landingMetadata(localData("lavanderia-chauvin-mar-del-plata"));
export default function Page() { return <NeighborhoodLanding slug="lavanderia-chauvin-mar-del-plata" />; }
