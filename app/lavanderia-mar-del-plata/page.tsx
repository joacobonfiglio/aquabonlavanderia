import MdpLanding from "../MdpLanding";
import { landingMetadata } from "../SeoLanding";
import { localData } from "../LocalLanding";
export const metadata = landingMetadata(localData("general"));
export default function Page() { return <MdpLanding />; }
