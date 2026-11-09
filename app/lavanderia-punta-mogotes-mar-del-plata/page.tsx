import NeighborhoodLanding from "../NeighborhoodLanding";
import { landingMetadata } from "../SeoLanding";
import { localData } from "../LocalLanding";
const slug = "lavanderia-punta-mogotes-mar-del-plata";
export const metadata = landingMetadata(localData(slug));
export default function Page() { return <NeighborhoodLanding slug={slug} />; }
