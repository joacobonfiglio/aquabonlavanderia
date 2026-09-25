import SeoLanding,{landingMetadata} from "../SeoLanding";
import {pages} from "../landing-data";
const data=pages["/tintoreria-centro-mar-del-plata"];
export const metadata=landingMetadata(data);
export default function Page(){return <SeoLanding data={data}/>}
