import type { LandingData } from "./SeoLanding";

const commonSteps = [
  { title: "Contanos qué tenés", copy: "Escribinos por WhatsApp o acercate a Gascón 2189. Con una foto ya te podemos orientar." },
  { title: "Revisamos la prenda", copy: "Miramos material, estado y etiqueta, y te confirmamos qué vamos a hacer, el precio y el plazo antes de empezar." },
  { title: "Te avisamos", copy: "Nos ocupamos del seguimiento y te escribimos por WhatsApp cuando está listo." },
];
const rel = [
  {label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Lavado de acolchados",href:"/servicios/lavado-de-acolchados"},
  {label:"Tintorería",href:"/servicios/tintoreria"},{label:"Camperas y tapados",href:"/servicios/lavado-de-camperas-y-tapados"},{label:"Teñido de prendas",href:"/servicios/tenido-de-prendas"},
  {label:"Planchado",href:"/servicios/planchado"},{label:"Arreglos y costura",href:"/servicios/arreglos-y-costura"},{label:"Lavado de zapatillas",href:"/servicios/lavado-de-zapatillas"},
];
const base = (path:string,h1:string,intro:string,event:string,message:string,items:LandingData["items"],faqs:LandingData["faqs"],extra:Partial<LandingData>={}):LandingData => ({
  path, h1, intro, event, message, items, faqs, steps: commonSteps, related: rel.filter(x=>x.href!==path).slice(0,4),
  title: h1+" | Aquabon", description: intro, eyebrow:"AQUABON · GASCÓN 2189", cta:"Consultar por WhatsApp",
  crumbs:[{label:"Inicio",href:"/"},{label:"Servicios",href:"/servicios"},{label:h1.replace(" en Mar del Plata",""),href:path}],
  sections:[{heading:"Cuidado según cada prenda",text:"No todas las prendas necesitan el mismo proceso. Antes de empezar miramos material, etiqueta, manchas y estado, y te decimos con claridad qué se puede hacer."}], ...extra
});
export const pages: Record<string,LandingData> = {
"/tintoreria-centro-mar-del-plata":base("/tintoreria-centro-mar-del-plata","Tintorería en el centro de Mar del Plata","Tu tintorería en el centro, en Gascón 2189. Recibimos sacos, tapados, vestidos, camperas y prendas especiales, revisamos cada pieza y te confirmamos el tratamiento, el precio y el plazo antes de empezar.","whatsapp_tintoreria_centro","Hola Aquabon, quería consultar por una prenda de tintorería en el centro de Mar del Plata.",[
 {title:"Recepción en el Centro",copy:"Traés la prenda a Gascón 2189 y anotamos etiqueta, tejido, forro, accesorios, manchas y cualquier daño previo."},
 {title:"Te decimos qué se puede hacer",copy:"Después de revisarla te explicamos qué tratamiento le conviene, hasta dónde puede llegar, el precio y el plazo."},
 {title:"Seguimiento por WhatsApp",copy:"Cuando corresponde un tratamiento especializado, lo coordinamos fuera del local y te avisamos cuando la prenda vuelve disponible."}
],[
 {question:"¿Dónde queda la tintorería de Aquabon?",answer:"En Gascón 2189, en el centro de Mar del Plata. Ahí dejás la prenda y ahí la retirás cuando te avisamos."},
 {question:"¿Qué prendas reciben?",answer:"Sacos, trajes, tapados, vestidos, camperas y otras prendas especiales. Antes de aceptarlas las revisamos para confirmar el tratamiento."},
 {question:"¿La limpieza especializada se hace en el local?",answer:"No toda. Vos la dejás en Aquabon y nosotros nos encargamos: cuando necesita un tratamiento especializado, lo coordinamos fuera del local y hacemos el seguimiento hasta que vuelve."},
 {question:"¿Cuánto cuesta y cuánto demora?",answer:"Depende de la prenda, el tratamiento y su estado. Te pasamos precio y plazo después de verla y antes de aceptar el trabajo."},
 {question:"¿Salen todas las manchas?",answer:"No siempre, y preferimos decírtelo antes. Depende del origen y la antigüedad de la mancha, el tejido, el color y lo que se le haya aplicado."},
 {question:"¿Puedo enviar una foto por WhatsApp?",answer:"Sí. Con una foto te damos una primera orientación; el tratamiento, el precio y el plazo los confirmamos al ver la prenda."}
],{title:"Tintorería en el centro de Mar del Plata | Aquabon",description:"Tintorería con recepción en Gascón 2189, centro de Mar del Plata. Sacos, tapados, vestidos y prendas especiales con evaluación y seguimiento.",eyebrow:"TINTORERÍA · CENTRO DE MAR DEL PLATA",cta:"Consultar mi prenda",showLocation:true,sections:[
 {heading:"Una tintorería cerca, que te explica todo antes",text:"Elegir tintorería en el Centro empieza por la cercanía, pero también importa saber qué van a hacer con tu prenda. En Gascón 2189 la dejás y conocés tratamiento, precio y plazo antes de confirmar."},
 {heading:"El tratamiento se elige para la prenda completa",text:"No decidimos solo por el tejido exterior. Etiqueta, forro, entretelas, hombreras, botones, adornos, manchas y reparaciones previas pueden cambiar el proceso recomendado o limitar el resultado."},
 {heading:"Un solo lugar para dejarla y retirarla",text:"Cuando hace falta un tratamiento especializado, lo coordinamos fuera del local. Vos tratás solo con Aquabon: recepción, seguimiento y entrega, sin tener que andar averiguando."}
],related:[{label:"Servicio de tintorería",href:"/servicios/tintoreria"},{label:"Guía: qué prendas llevar",href:"/blog/que-prendas-conviene-llevar-a-la-tintoreria"},{label:"Camperas y tapados",href:"/servicios/lavado-de-camperas-y-tapados"},{label:"Todas las guías",href:"/blog"}]}),
"/servicios/lavado-de-camperas-y-tapados":base("/servicios/lavado-de-camperas-y-tapados","Lavado de camperas y tapados en Mar del Plata","Una campera o un tapado no se lavan como cualquier prenda. Traelo a Gascón 2189: revisamos etiqueta, forro, relleno, manchas y estado, y te confirmamos el tratamiento, el precio y el plazo antes de empezar.","whatsapp_camperas_tapados","Hola Aquabon, quería consultar por la limpieza de una campera o un tapado.",[
 {title:"Camperas livianas y acolchadas",copy:"Revisamos tejido, relleno, impermeabilización, cierres y etiqueta, y te decimos si admite lavado y secado o necesita otro tratamiento."},
 {title:"Tapados de paño y lana",copy:"Inspeccionamos forro, estructura, botones, apliques y manchas. Un tapado no se lava automáticamente por ser de lana o por parecer resistente."},
 {title:"Te explicamos todo antes",copy:"Antes de aceptarla te contamos qué le vamos a hacer, hasta dónde puede llegar, el precio y el plazo. Si necesita tintorería, la coordinamos nosotros."}
],[
 {question:"¿Lavan camperas de pluma?",answer:"Sí, después de revisarlas. Miramos etiqueta, relleno y estado, y te confirmamos el lavado y el secado antes de aceptarla."},
 {question:"¿Puedo llevar un tapado de paño?",answer:"Sí. Revisamos etiqueta, forro, estructura y manchas, y te decimos si conviene lavarlo o mandarlo a tintorería."},
 {question:"¿Hacen limpieza en seco en el local?",answer:"No. Cuando el abrigo la necesita, la coordinamos fuera del local y nos ocupamos del seguimiento. Vos lo dejás y lo retirás en Aquabon."},
 {question:"¿Cuánto cuesta y cuánto demora?",answer:"Depende de la prenda, el tratamiento y su estado. Te pasamos precio y plazo antes de aceptar el trabajo."},
 {question:"¿Salen todas las manchas?",answer:"No siempre, y te lo decimos antes. Depende del origen y la antigüedad de la mancha, el tejido, el color y lo que se le haya aplicado."},
 {question:"¿Hacen retiro y entrega?",answer:"Sí, en Centro, Güemes, Chauvin y La Perla. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual."}
],{title:"Lavado de camperas y tapados en Mar del Plata | Aquabon",description:"Camperas, abrigos y tapados en el centro de Mar del Plata. Evaluación de etiqueta, forro y relleno; consultá proceso, precio y plazo antes de confirmar.",eyebrow:"CAMPERAS Y TAPADOS · CENTRO",cta:"Consultar mi abrigo",showLocation:true,sections:[
 {heading:"Un abrigo no es igual a otro",text:"Una campera deportiva, una de pluma y un tapado de paño necesitan cuidados distintos. Miramos todo, por fuera y por dentro: material, forro, relleno, accesorios y etiqueta, antes de elegir cómo limpiarlo."},
 {heading:"Vos lo dejás, nosotros nos ocupamos",text:"Traelo a Gascón 2189 o mandanos fotos para una primera orientación. Si necesita tintorería, la coordinamos fuera del local y te avisamos cuando está listo. El tratamiento final lo confirmamos al ver la prenda."}
],related:[{label:"Guía: cómo limpiar un tapado",href:"/blog/como-limpiar-un-tapado-sin-danarlo"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Retiro y entrega",href:"/servicios/retiro-y-entrega-de-ropa"},{label:"Todas las guías",href:"/blog"}]}),
"/servicios/retiro-y-entrega-de-ropa":base("/servicios/retiro-y-entrega-de-ropa","Lavandería a domicilio en Mar del Plata","Sin cargar bolsas ni hacer viajes: retiramos y entregamos tu ropa y tus acolchados en Centro, Güemes, Chauvin y La Perla. Mandanos tu dirección y coordinamos costo y disponibilidad antes de pasar.","whatsapp_retiro_entrega","Hola Aquabon, quería consultar si tienen retiro y entrega en mi zona. Estoy en…",[
 {title:"Todo por WhatsApp",copy:"Mandanos tu dirección, qué tenés para lavar y el servicio. Te confirmamos costo y disponibilidad antes de pasar."},
 {title:"La pasamos a buscar",copy:"Acordamos una franja horaria y anotamos tu pedido. Avisanos cuántas prendas son y si hay manchas o daños."},
 {title:"Te la llevamos",copy:"Cuando está lista, te avisamos y coordinamos la entrega en tu casa."}
],[
 {question:"¿En qué zonas hacen retiro y entrega?",answer:"En Centro, Güemes, Chauvin y La Perla. Mandanos la dirección exacta y coordinamos costo y disponibilidad. Si estás en otra zona, consultanos igual."},
 {question:"¿El retiro tiene costo?",answer:"Depende de la zona y del pedido. Te lo decimos antes de coordinar, así sabés exactamente cuánto vas a pagar."},
 {question:"¿Qué servicios se pueden pedir?",answer:"Sobre todo el valet: la ropa de todos los días, lavada, seca y doblada. Para acolchados u otras prendas, consultanos antes: depende del volumen y de lo que necesite cada pieza."},
 {question:"¿Cómo preparo la ropa?",answer:"Poné la ropa en una bolsa bien cerrada y contanos cuántas prendas son y si alguna tiene manchas, daños o un cuidado especial."},
 {question:"¿La entrega es en el día?",answer:"No siempre. El plazo depende del servicio, la cantidad y el recorrido de ese día; te lo confirmamos al coordinar."}
],{title:"Lavandería a domicilio en Mar del Plata | Aquabon",description:"Consultá por retiro y entrega de ropa y acolchados en Mar del Plata. Contanos tu dirección y coordinamos costo y disponibilidad.",eyebrow:"RETIRO Y ENTREGA · CENTRO",cta:"Consultar cobertura",steps:[
 {title:"Mandanos tu dirección",copy:"Escribinos por WhatsApp con tu dirección, el servicio y más o menos cuánta ropa es."},
 {title:"Coordinamos el retiro",copy:"Te confirmamos costo y franja horaria antes de pasar."},
 {title:"La pasamos a buscar",copy:"Retiramos la bolsa cerrada y anotamos lo que nos contaste: cantidad, manchas o daños."},
 {title:"Te la llevamos",copy:"Cuando está lista, te avisamos y coordinamos la entrega."}
],sections:[
 {heading:"Sin viajes ni bolsas a cuestas",text:"Retiramos y entregamos en Centro, Güemes, Chauvin y La Perla. Mandanos dirección, tipo de prendas y cantidad, y te confirmamos costo y franja horaria antes de aceptar el pedido."},
 {heading:"El lavado depende de lo que mandes",text:"El retiro es la forma de hacerte llegar el servicio. La ropa de todos los días entra como valet; los acolchados, la tintorería y las prendas especiales los revisamos antes de confirmar."}
],related:[{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Lavado de acolchados",href:"/servicios/lavado-de-acolchados"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Todos los servicios",href:"/servicios"}],showLocation:true}),
"/servicios/valet-de-ropa":base("/servicios/valet-de-ropa","Valet de ropa en Mar del Plata","Te sacás de encima el lavado de la semana: dejás la bolsa en Gascón 2189, o la pasamos a buscar si llegamos a tu zona, y te la devolvemos lavada, seca y doblada. Te avisamos por WhatsApp cuando está lista.","whatsapp_valet","Hola Aquabon, quiero consultar por el valet de ropa. Tengo aproximadamente __ prendas. ¿Me pasan importe y plazo?",[
 {title:"Lavado",copy:"Lavamos tu ropa de todos los días separando por color, tejido y etiqueta. Si hay manchas o algo especial, contanos antes de dejar la bolsa."},
 {title:"Secado",copy:"Incluido. Te olvidás de tender, de mirar el pronóstico y de tener la ropa colgada por toda la casa."},
 {title:"Doblado",copy:"Te la devolvemos doblada, lista para guardar, y te avisamos por WhatsApp cuando está."},
 {title:"Planchado, aparte",copy:"El valet no incluye planchado. Si alguna prenda lo necesita, pedilo y lo sumamos."}
],[
 {question:"¿Qué es el valet de ropa y qué incluye?",answer:"Es el servicio para sacarte de encima el lavado de la semana: nos dejás la bolsa y te la devolvemos lavada, seca y doblada. Te avisamos por WhatsApp cuando está lista. El planchado y las prendas especiales van aparte."},
 {question:"¿Qué ropa puedo poner en la bolsa?",answer:"La de todos los días que se lava con agua: remeras, pantalones, ropa interior y medias, siempre según su etiqueta. Toallas y sábanas también, contanos cuántas son. Lo delicado, la lana, los sacos y lo que dice limpieza en seco, separalo y consultanos."},
 {question:"¿Cuánto cuesta el valet?",answer:"Escribinos con el tipo de ropa y más o menos cuántas prendas son, y te pasamos el importe. Si querés que la pasemos a buscar, sumá tu dirección y te decimos también el costo del retiro."},
 {question:"¿Cuándo está lista mi ropa?",answer:"Depende de la cantidad y del trabajo que tengamos esa semana. Te confirmamos el plazo cuando dejás la bolsa y te escribimos por WhatsApp apenas está."},
 {question:"¿Cómo preparo la bolsa?",answer:"Vaciá los bolsillos, cerrá bien la bolsa y contanos cuántas prendas son. Avisanos si hay manchas o daños. Lo que te dé dudas, separalo y lo vemos juntos."},
 {question:"¿El valet incluye planchado o tratamiento de manchas?",answer:"El planchado no, lo podés sumar aparte. Si hay una mancha, contanos qué fue y si le pusiste algo: la revisamos, pero no todas salen y preferimos decírtelo antes."},
 {question:"¿Pueden pasar a buscar la ropa?",answer:"Sí, en Centro, Güemes, Chauvin y La Perla. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual."},
 {question:"¿Dónde está Aquabon y en qué horario puedo ir?",answer:"En Gascón 2189, en el centro de Mar del Plata. Atendemos de lunes a viernes de 8:30 a 20:00 y los sábados de 9:00 a 14:00, sin turno."}
],{title:"Valet de ropa en Mar del Plata: lavado y secado | Aquabon",description:"Valet de ropa en Mar del Plata: lavado, secado y doblado en Aquabon, Gascón 2189. Consultá precio, plazo y retiro y entrega por WhatsApp.",cta:"Consultar por mi ropa",steps:[
 {title:"Armás la bolsa",copy:"Ropa de todos los días, bolsillos vacíos y lo que tengamos que saber."},
 {title:"Nos la dejás",copy:"La traés al local o la pasamos a buscar. Te confirmamos importe y plazo."},
 {title:"Nos ocupamos del lavado",copy:"Lavado, secado y doblado. Vos seguís con tu semana."},
 {title:"Te avisamos cuando está lista",copy:"Te llega un WhatsApp. La pasás a buscar o te la llevamos."}
],related:[{label:"Retiro y entrega",href:"/servicios/retiro-y-entrega-de-ropa"},{label:"Lavado de acolchados",href:"/servicios/lavado-de-acolchados"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Planchado",href:"/servicios/planchado"}]}),
"/servicios/lavado-de-acolchados":base("/servicios/lavado-de-acolchados","Lavado de acolchados en Mar del Plata","Un acolchado no entra fácil en el lavarropas y cuesta secarlo bien. Traelo a Gascón 2189: revisamos tamaño, tejido, relleno y estado, y elegimos el lavado y el secado que admite su etiqueta.","whatsapp_acolchados","Hola Aquabon, quería consultar por el lavado de un acolchado.",[
 {title:"Una y dos plazas",copy:"Recibimos distintos tamaños. Lo revisamos y te confirmamos cómo lo vamos a lavar."},
 {title:"Pluma y rellenos especiales",copy:"Miramos etiqueta y relleno antes de lavarlo. Si no conviene, te lo decimos."},
 {title:"Secado completo",copy:"Lo secamos según su material, sin calor de más. Te lo llevás listo para usar o guardar."}
],[
 {question:"¿Lavan acolchados de pluma?",answer:"Sí, después de revisarlos. Miramos etiqueta, relleno y estado, y te confirmamos el lavado y el secado antes de aceptarlo."},{question:"¿Reciben acolchados de dos plazas?",answer:"Sí. También de una plaza y más grandes: lo revisamos y te confirmamos el proceso según el tamaño."},
 {question:"¿Lavan frazadas y cubrecamas?",answer:"Sí. Contanos el tamaño y el material: una frazada de lana no se lava igual que un cubrecama sintético."},{question:"¿Salen todas las manchas?",answer:"No siempre, y te lo decimos antes. Depende de qué la causó, cuánto tiempo tiene y el tejido."},
 {question:"¿Cuánto tarda?",answer:"Depende del tamaño, el relleno y el trabajo de esa semana. Te confirmamos el plazo cuando lo dejás y te avisamos por WhatsApp cuando está listo."},{question:"¿Puedo enviar una foto?",answer:"Sí, mandá una del acolchado y otra de la etiqueta por WhatsApp. Con eso ya te podemos orientar antes de que vengas."}
],{related:[{label:"Guía: cómo lavar un acolchado de plumas",href:"/blog/como-lavar-un-acolchado-de-plumas"},{label:"Tintorería",href:"/servicios/tintoreria"},{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Lavado de zapatillas",href:"/servicios/lavado-de-zapatillas"}]}),
"/servicios/limpieza-de-vestidos-de-fiesta":base("/servicios/limpieza-de-vestidos-de-fiesta","Limpieza de vestidos de fiesta en Mar del Plata","Tu vestido de fiesta, revisado antes de tocarlo: tejido, forro, adornos, manchas y etiqueta. Lo recibimos en Gascón 2189 y te confirmamos el tratamiento, el precio y el plazo antes de empezar.","whatsapp_vestidos_fiesta","Hola Aquabon, quería consultar por la limpieza de un vestido de fiesta. Puedo enviar fotos de la prenda, la etiqueta y las manchas.",[
 {title:"Tejido, forro y estructura",copy:"Revisamos el vestido completo: material, forro, costuras, copas, varillas y capas pueden necesitar cuidados distintos."},
 {title:"Bordados, lentejuelas y apliques",copy:"Miramos cómo están sujetos y si tienen desgaste, pegamento o cambios de color antes de elegir el tratamiento."},
 {title:"Contanos qué pasó",copy:"Decinos qué produjo la mancha, cuándo fue y si le pusiste algo. Eso ayuda a elegir el tratamiento, aunque no siempre sale todo."}
],[
 {question:"¿Reciben vestidos de fiesta para tintorería?",answer:"Sí, en Gascón 2189. Antes de aceptarlo revisamos etiqueta, tejido, forro, estructura y adornos, y te decimos qué se puede hacer."},
 {question:"¿Todos los vestidos se limpian en seco?",answer:"No. Depende de la etiqueta y de cómo está hecho. Puede ir a limpieza en seco o a una limpieza húmeda especializada, según lo que admita."},
 {question:"¿Pueden tratar vestidos con lentejuelas, bordados o pedrería?",answer:"Los revisamos uno por uno. Los adornos, el pegamento y las costuras pueden limitar el tratamiento, así que te confirmamos qué se puede hacer después de verlo."},
 {question:"¿Sale cualquier mancha?",answer:"No siempre, y preferimos decírtelo antes. Depende del origen, la antigüedad, el tejido, el color y lo que se le haya aplicado. Contarnos qué la produjo ayuda mucho."},
 {question:"¿Cuánto cuesta y cuánto demora?",answer:"Te pasamos precio y plazo después de ver el vestido y antes de aceptar el trabajo. Si lo necesitás para una fecha, decínosla al consultar y te decimos si llegamos."},
 {question:"¿Puedo enviar fotos por WhatsApp?",answer:"Sí. Mandá una foto completa, primeros planos de manchas o adornos y la etiqueta. Con eso te orientamos; la confirmación final la damos al verlo."}
],{title:"Limpieza de vestidos de fiesta en Mar del Plata | Aquabon",description:"Limpieza de vestidos de fiesta en Mar del Plata, con evaluación de tejido, forro, adornos y manchas. Consultá proceso, precio y plazo antes de confirmar.",eyebrow:"VESTIDOS DE FIESTA · EVALUACIÓN PREVIA",cta:"Consultar por mi vestido",showLocation:true,steps:[
 {title:"Mandanos fotos",copy:"Mostranos el vestido completo, la etiqueta, los adornos y cualquier mancha o daño visible."},
 {title:"Traelo para revisarlo",copy:"En Gascón 2189 miramos tejido, forro, estructura, costuras, apliques y tratamientos anteriores."},
 {title:"Te explicamos todo antes",copy:"Qué le vamos a hacer, hasta dónde puede llegar, el precio y el plazo, antes de aceptar el trabajo."},
 {title:"Nos ocupamos del seguimiento",copy:"Vos tratás solo con nosotros y te escribimos por WhatsApp cuando el vestido está listo."}
],sections:[
 {heading:"Un vestido de fiesta se mira completo",text:"Satén, gasa, encaje, tul, forro y estructura pueden convivir en un mismo vestido. La etiqueta es el punto de partida, pero también revisamos costuras, color, terminaciones y adornos antes de elegir el cuidado."},
 {heading:"El tratamiento no se decide solo por la mancha",text:"Necesitamos saber qué la causó, cuánto tiempo tiene y qué le pusiste. También miramos si el tejido perdió color o si un aplique podría reaccionar. No te prometemos que salga todo sin ver el vestido."},
 {heading:"Lo dejás en el Centro y te avisamos",text:"Traé el vestido a Gascón 2189. Si necesita un tratamiento especializado, lo coordinamos nosotros y hacemos el seguimiento. Precio y plazo te los confirmamos antes de empezar."}
],related:[{label:"Servicio de tintorería",href:"/servicios/tintoreria"},{label:"Qué prendas llevar a tintorería",href:"/blog/que-prendas-conviene-llevar-a-la-tintoreria"},{label:"Símbolos de lavado",href:"/blog/simbolos-de-lavado-de-la-ropa"},{label:"Tintorería en el Centro",href:"/tintoreria-centro-mar-del-plata"}]}),
"/servicios/tintoreria":base("/servicios/tintoreria","Tintorería en Mar del Plata","Sacos, vestidos, tapados y prendas delicadas que no conviene lavar en casa. Los recibimos en Gascón 2189, revisamos cada prenda y nos ocupamos del seguimiento hasta que vuelve lista.","whatsapp_tintoreria","Hola Aquabon, quería consultar por una prenda de tintorería.",[
 {title:"La dejás cerca",copy:"Traés la prenda a Gascón 2189 y anotamos todo lo que hay que tener en cuenta."},
 {title:"Tratamiento especializado",copy:"Cuando la prenda lo necesita, coordinamos el servicio adecuado fuera del local. Vos no tenés que hacer nada."},
 {title:"Seguimiento y aviso",copy:"Nos ocupamos del seguimiento y te escribimos cuando está lista para retirar."}
],[
 {question:"¿Qué prendas reciben?",answer:"Sacos, trajes, vestidos, tapados, camperas y otras prendas especiales. Antes de aceptarlas las revisamos para confirmar el tratamiento."},{question:"¿Se trata en el local?",answer:"No toda. Vos la dejás en Aquabon y, cuando necesita un tratamiento especializado, lo coordinamos fuera del local y hacemos el seguimiento hasta que vuelve."},
 {question:"¿Salen todas las manchas?",answer:"No siempre, y te lo decimos antes. Depende de la mancha, el tejido y cuánto tiempo tiene."},{question:"¿Cuánto demora?",answer:"Depende de la prenda y del tratamiento. Te pasamos el plazo después de revisarla, antes de aceptar el trabajo."},{question:"¿Dónde la retiro?",answer:"En Aquabon, Gascón 2189. Te escribimos por WhatsApp cuando está lista."}
],{related:[{label:"Tintorería en el Centro",href:"/tintoreria-centro-mar-del-plata"},{label:"Lavado de camperas y tapados",href:"/servicios/lavado-de-camperas-y-tapados"},{label:"Guía: qué prendas llevar a tintorería",href:"/blog/que-prendas-conviene-llevar-a-la-tintoreria"},{label:"Todos los servicios",href:"/servicios"}]}),
"/servicios/planchado":base("/servicios/planchado","Servicio de planchado en Mar del Plata","Sacate la plancha de encima. Recibimos camisas y otras prendas en Gascón 2189, revisamos cada una antes de plancharla y te avisamos por WhatsApp cuando están listas.","whatsapp_planchado","Hola Aquabon, quería consultar por el servicio de planchado.",[
 {title:"Revisión de cada prenda",copy:"Miramos tejido, etiqueta y detalles antes de plancharla, para darle la temperatura y el cuidado que pide."},
 {title:"Camisas y más",copy:"Recibimos camisas y otras prendas que admiten planchado. Contanos cuántas son y de qué tela."},
 {title:"Listas para usar",copy:"Te avisamos por WhatsApp cuando están terminadas para que pases a buscarlas."}
],[
 {question:"¿Qué prendas reciben para planchar?",answer:"Camisas y otras prendas que admiten planchado. Antes de aceptarlas miramos tejido, etiqueta y estado."},
 {question:"¿El valet incluye planchado?",answer:"No. El valet es lavado, secado y doblado; el planchado lo pedís aparte y lo sumamos al pedido."},
 {question:"¿Puedo llevar solo una prenda?",answer:"Sí. Traela a Gascón 2189 o escribinos antes por WhatsApp."},
 {question:"¿Cuánto demora?",answer:"Depende de la cantidad y el tipo de prendas. Te decimos el plazo cuando las dejás."},
 {question:"¿Me avisan cuando está listo?",answer:"Sí, te escribimos por WhatsApp apenas está."}
],{sections:[
 {heading:"Una tarea menos en tu día",text:"Dejás las prendas en el local del Centro y las retirás cuando te avisamos. Ideal para camisas y ropa que necesita una terminación prolija."},
 {heading:"Un servicio distinto del valet",text:"El valet te devuelve la ropa lavada, seca y doblada. Si además la querés planchada, pedilo y revisamos las prendas antes de confirmar."}
],related:[{label:"Lavado y planchado de camisas",href:"/servicios/lavado-y-planchado-de-camisas"},{label:"Guía para lavar camisas",href:"/blog/como-lavar-camisas-sin-arruinarlas"},{label:"Valet de ropa",href:"/servicios/valet-de-ropa"},{label:"Todos los servicios",href:"/servicios"}]}),
"/servicios/lavado-y-planchado-de-camisas":base("/servicios/lavado-y-planchado-de-camisas","Lavado y planchado de camisas en Mar del Plata","Camisas lavadas y planchadas, listas para usar, sin que tengas que ocuparte. Las recibimos en Gascón 2189, revisamos tejido, etiqueta y manchas, y te confirmamos proceso, precio y plazo antes de empezar.","whatsapp_lavado_planchado_camisas","Hola Aquabon, quería consultar por el lavado y planchado de camisas.",[
 {title:"Revisión antes del lavado",copy:"Miramos tejido, color, etiqueta, cuello, puños, manchas y botones antes de confirmar el servicio."},
 {title:"Lavado según cada camisa",copy:"Elegimos el lavado que admite cada una. Si la etiqueta pide otro cuidado, te lo decimos antes de aceptarla."},
 {title:"Planchadas y listas",copy:"Te las devolvemos lavadas y planchadas, listas para usar. Este pedido es distinto del valet, que no incluye planchado."}
],[
 {question:"¿El servicio incluye lavado y planchado?",answer:"Sí, las dos cosas en un mismo pedido. Revisamos cada camisa y te confirmamos el proceso, el precio y el plazo antes de empezar."},
 {question:"¿Es lo mismo que el valet de ropa?",answer:"No. El valet es lavado, secado y doblado de la ropa de todos los días, sin planchado. Este servicio te devuelve las camisas planchadas."},
 {question:"¿Puedo pedir solamente planchado?",answer:"Sí, con el servicio de planchado. Revisamos tejido, etiqueta y estado antes de confirmar."},
 {question:"¿Reciben camisas delicadas o con manchas?",answer:"Sí, para revisarlas. Seda, viscosa, adornos o manchas difíciles pueden necesitar otro cuidado; si hay un límite, te lo explicamos antes de aceptarla."},
 {question:"¿Salen las manchas de cuello y axilas?",answer:"Muchas veces mejoran, pero no siempre salen del todo. Depende de cuánto tiempo tienen, el tejido, el color y lo que se les haya aplicado."},
 {question:"¿Cuánto cuesta y cuánto demora?",answer:"Depende de la cantidad, el tejido y el estado. Te pasamos precio y plazo después de revisar las camisas."}
],{title:"Lavado y planchado de camisas en Mar del Plata | Aquabon",description:"Lavado y planchado de camisas en Mar del Plata, con recepción en Gascón 2189. Evaluamos tejido, manchas y etiqueta antes de confirmar precio y plazo.",eyebrow:"CAMISAS · LAVADO Y TERMINACIÓN",cta:"Consultar por mis camisas",showLocation:true,steps:[
 {title:"Contanos cuántas son",copy:"Escribinos por WhatsApp o traé las camisas al local."},
 {title:"Revisamos cada camisa",copy:"Etiqueta, tejido, color, manchas, botones, cuello y puños, antes de elegir el lavado."},
 {title:"Te confirmamos todo",copy:"Qué vamos a hacer, el precio y el plazo, antes de empezar."},
 {title:"Te avisamos al terminar",copy:"Te escribimos por WhatsApp cuando las camisas están listas para retirar."}
],sections:[
 {heading:"Lavado y planchado en un solo pedido",text:"Las dejás sucias y te las llevás listas para usar. Si ya están limpias y solo necesitás sacarles las arrugas, pedí el servicio de planchado."},
 {heading:"Cuello, puños y axilas se revisan antes",text:"Ahí se juntan el roce, el desodorante y la suciedad. Los miramos antes de lavar, pero no te prometemos sacar toda marca: depende del tejido, el color y la antigüedad."},
 {heading:"La etiqueta decide el cuidado",text:"Algodón, lino, mezclas, seda o prendas estructuradas no responden igual. Si una camisa requiere tintorería u otro tratamiento, te lo explicamos antes de aceptar el pedido."}
],related:[{label:"Solo planchado",href:"/servicios/planchado"},{label:"Guía: cómo lavar camisas",href:"/blog/como-lavar-camisas-sin-arruinarlas"},{label:"Manchas de transpiración",href:"/blog/como-sacar-manchas-de-transpiracion"},{label:"Valet de ropa",href:"/servicios/valet-de-ropa"}]}),
"/servicios/tenido-de-prendas":base("/servicios/tenido-de-prendas","Teñido de prendas en Mar del Plata","¿Una prenda que perdió el color? Antes de teñirla revisamos su composición, el color original y el estado, y te decimos con claridad si se puede recuperar o cambiar el color.","whatsapp_tenido","Hola Aquabon, quería consultar por el teñido de una prenda.",[
 {title:"Primero, el tejido",copy:"La composición define cuánto color puede tomar y qué resultado es razonable esperar."},
 {title:"Recuperar el color",copy:"Revisamos prendas desteñidas o apagadas y te decimos si se pueden recuperar antes de aceptarlas."},
 {title:"Cambiar el color",copy:"Se puede en algunos casos, sobre todo de tonos claros a más oscuros."}
],[
 {question:"¿Qué prendas se pueden teñir?",answer:"Depende sobre todo de la composición, las costuras y el estado. Mandanos una foto de la prenda y de la etiqueta y te orientamos."},{question:"¿Todos los tejidos aceptan teñido?",answer:"No. Algunas fibras sintéticas toman poco color o nada, y te lo decimos antes de aceptar la prenda."},
 {question:"¿Puedo pasar de claro a oscuro?",answer:"Suele funcionar mejor que al revés, pero primero tenemos que ver la prenda."},{question:"¿Se recupera una prenda desteñida?",answer:"En algunos casos sí. El resultado depende del material y el desgaste, y no te prometemos un tono exacto."},{question:"¿Cuánto demora?",answer:"Te pasamos el plazo después de revisar la prenda, antes de aceptar el trabajo."}
]),
"/servicios/arreglos-y-costura":base("/servicios/arreglos-y-costura","Arreglos y costura de ropa en Mar del Plata","Ese ajuste o esa costura que venís postergando, en el mismo lugar donde lavás tu ropa. Recibimos la prenda en Gascón 2189, la revisamos y te confirmamos el arreglo antes de hacerlo.","whatsapp_costura","Hola Aquabon, quería consultar por un arreglo de costura.",[
 {title:"La vemos con vos",copy:"Necesitamos ver la prenda para revisar el tejido, la costura y qué hay que hacer."},
 {title:"Arreglos y ajustes",copy:"Reparaciones y ajustes sencillos para que vuelvas a usar esa prenda."},
 {title:"Sin sorpresas",copy:"Antes de aceptar el trabajo te decimos si se puede hacer y cuánto tarda."}
],[
 {question:"¿Qué arreglos hacen?",answer:"Arreglos chicos, reparaciones y ajustes. Traé la prenda y te decimos si se puede."},{question:"¿Tengo que llevar la prenda?",answer:"Sí. Necesitamos verla para tomar medidas y confirmar el arreglo."},
 {question:"¿Arreglan cualquier tejido?",answer:"Depende del material, el daño y el tipo de costura. Si no se puede, te lo decimos de entrada."},{question:"¿Cuánto demora?",answer:"Depende del arreglo. Te pasamos el plazo cuando vemos la prenda."}
]),
"/servicios/lavado-de-zapatillas":base("/servicios/lavado-de-zapatillas","Lavado de zapatillas en Mar del Plata","Lavar zapatillas en casa puede deformarlas o despegarlas. Nosotros revisamos material, color, manchas y desgaste antes de limpiarlas y secarlas, y te avisamos cuando están listas.","whatsapp_zapatillas","Hola Aquabon, quería consultar por el lavado de unas zapatillas.",[
 {title:"Revisión del material",copy:"Cuero, tela, gamuza y combinaciones necesitan cuidados distintos. Empezamos por ahí."},
 {title:"Limpieza cuidada",copy:"Elegimos cómo limpiarlas según la suciedad, el color y el estado de las uniones."},
 {title:"Te decimos la verdad",copy:"La limpieza mejora el aspecto, pero no revierte desgaste, decoloración ni daños previos."}
],[
 {question:"¿Lavan cualquier zapatilla?",answer:"Casi todas, pero primero revisamos el material y el estado. Si un par no conviene lavarlo, te lo decimos."},{question:"¿Quedan como nuevas?",answer:"No te lo vamos a prometer: el desgaste y la decoloración no siempre se revierten. Lo que sí hacemos es limpiarlas con el cuidado que pide su material."},
 {question:"¿Salen todas las manchas?",answer:"No siempre. Depende de qué las causó, cuánto tiempo tienen y el material."},{question:"¿Cómo se secan?",answer:"Según el material, sin calor de más, para que no se deformen ni se despeguen."},{question:"¿Cuánto demora?",answer:"Te decimos el plazo cuando las dejás y te avisamos por WhatsApp cuando están listas."}
]),
};
export const servicesHub:LandingData={path:"/servicios",title:"Servicios de lavandería y tintorería | Aquabon",description:"Conocé los servicios de Aquabon en Mar del Plata y consultá por WhatsApp.",eyebrow:"SERVICIOS AQUABON",h1:"Servicios de lavandería y tintorería",intro:"Ropa de todos los días, acolchados, prendas delicadas, teñido, arreglos y zapatillas: encontrá el servicio que te saca ese pendiente de encima.",event:"whatsapp_servicios",message:"Hola Aquabon, quería saber qué servicio necesita mi prenda.",cta:"Consultar mi prenda",crumbs:[{label:"Inicio",href:"/"},{label:"Servicios",href:"/servicios"}],sections:[{heading:"¿Qué servicio necesitás?",text:"Ropa cotidiana: valet. Acolchados y cubrecamas: lavado de acolchados. Sacos, tapados y prendas delicadas: tintorería. Para color, costuras o calzado, elegí la opción específica."}],items:rel.map(x=>({title:x.label,copy:"Entrá para ver cómo trabajamos, resolver dudas y consultar por WhatsApp."})),steps:commonSteps,faqs:[{question:"¿Puedo mandar una foto?",answer:"Sí. Mandá una foto de la prenda y de la etiqueta por WhatsApp y te decimos qué servicio le conviene."},{question:"¿Atienden sin turno?",answer:"Sí, venís en el horario del local. Para prendas especiales o pedidos grandes, escribinos antes así te esperamos."},{question:"¿Hacen retiro y entrega?",answer:"Sí, en Centro, Güemes, Chauvin y La Perla. Mandanos tu dirección por WhatsApp y te confirmamos costo y disponibilidad antes de pasar. Si estás en otra zona, consultanos igual."},{question:"¿Publican precios?",answer:"No, porque depende del servicio y de la prenda. Escribinos y te pasamos el precio antes de que dejes nada."}],related:rel,showLocation:true};
