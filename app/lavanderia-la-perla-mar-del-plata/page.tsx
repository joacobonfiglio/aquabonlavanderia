import NeighborhoodLanding from "../NeighborhoodLanding";
import { landingMetadata } from "../SeoLanding";
import { localData } from "../LocalLanding";
export const metadata = landingMetadata(localData("lavanderia-la-perla-mar-del-plata"));
export default function Page() { return <NeighborhoodLanding slug="lavanderia-la-perla-mar-del-plata" />; }
