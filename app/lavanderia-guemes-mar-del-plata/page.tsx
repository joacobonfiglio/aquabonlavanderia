import NeighborhoodLanding from "../NeighborhoodLanding";
import { landingMetadata } from "../SeoLanding";
import { localData } from "../LocalLanding";
export const metadata = landingMetadata(localData("lavanderia-guemes-mar-del-plata"));
export default function Page() { return <NeighborhoodLanding slug="lavanderia-guemes-mar-del-plata" />; }
