import SeoLanding,{landingMetadata}from"../../SeoLanding";
import{pages}from"../../landing-data";
const data=pages["/servicios/planchado"];
export const metadata=landingMetadata(data);
export default function Page(){return <SeoLanding data={data}/>}
