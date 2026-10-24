import CentroLanding from "../CentroLanding";
import { landingMetadata } from "../SeoLanding";
import { localData } from "../LocalLanding";
export const metadata = landingMetadata(localData("lavanderia-centro-mar-del-plata"));
export default function Page() { return <CentroLanding />; }
