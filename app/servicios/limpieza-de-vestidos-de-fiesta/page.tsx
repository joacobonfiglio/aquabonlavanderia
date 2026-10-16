import SeoLanding,{landingMetadata}from"../../SeoLanding";
import{pages}from"../../landing-data";
const data=pages["/servicios/limpieza-de-vestidos-de-fiesta"];
export const metadata=landingMetadata(data);
export default function Page(){return <SeoLanding data={data}/>}
