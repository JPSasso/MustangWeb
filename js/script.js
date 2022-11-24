function getRandomMustang()
{
  let rnd = Math.floor(Math.random() * 6);
  let cookie = "random=".concat(rnd.toString());
  console.log(cookie);
  localStorage.setItem("RandomMustang",cookie);
  let rndMustang = GetMustang(rnd);
  console.log(rndMustang);
}

function GetMustang(car)
{
  switch(car){
    case 0:
      return Mustang1;
    case 1:
      return Mustang2;
    case 2:
      return Mustang3;
    case 3:
      return Mustang4;
    case 4:
      return Mustang5;
    case 5:
      return Mustang6;
  }
}

function toggleSiteMapVisibility() {
  var x = document.getElementById("siteMap");
  var text = document.getElementById("siteMapToggleButton");
  if (x.style.display === "none") {
    x.style.display = "block";
    text.innerHTML = 'Ver menos  <span>&#8743;</span>';
  } 
  else {
    x.style.display = "none";
    text.innerHTML = 'Ver mas  <span>&#8744;</span>';
  }
}

function SubscribeButtonClick() {
    alert("Te has suscrito!");
}

function gotoHistory()
{
  console.log(localStorage.getItem("RandomMustang"));
  window.location.href='history.html';
}

const Mustang1 = {
  Year: 1965,
  Img1: "img/1964.jpg",
  Img2: "img/1965.jpg",
  sound: "audio/1965.mp3",
  history: `Introducido temprano el 17 de abril de 1964, 16 días después que el Plymouth Barracuda y, por lo tanto, denominado como un "1964½" por los aficionados, pero el modelo 1965 fue el lanzamiento más exitoso de la automotriz desde el modelo Ford A. el Mustang ha sufrido varias transformaciones a su sexta generación actual, siendo la tercera saga de Ford más antigua. Las primeras versiones de producción a menudo se denominaban modelos de 1964½, pero todos los Mustangs fueron anunciados codificados por VIN y titulados por Ford como modelos de 1965, aunque las actualizaciones menores de diseño en agosto de 1964 al comienzo formal del año de producción de 1965 contribuyeron al seguimiento de la producción de 1964½ datos por separado de los datos de 1965. Aunque se diga lo contrario, en aquella época y después de la Segunda Guerra Mundial que dejó a Europa en condiciones lamentables, el mercado estadounidense gozaba de grandes automóviles con potencia, buen diseño, comportamiento, alta tecnología y prestaciones, mientras que, en Europa, en los años cincuenta, marcas como Audi no producían ningún vehículo.
  El equipamiento básico que incluía el primer Mustang consistía en un motor de seis cilindros en línea de 170 pulgadas cúbicas (2,8 litros), proveniente del Falcon, así también como todo el conjunto de chasis-bastidor), transmisión de tres velocidades, ruedas completas forradas, cojinete rellenado y alfombrado. En 1965 es presentado el Shelby GT350 con un V8 de 289 plg (4,7 litros) y 306 HP (310 CV; 228 kW) de potencia. Estos cambios de tamaño buscaban darle la posibilidad de alojar motores más grandes, como el de 390 plg (6,4 litros) con 320 HP (324 CV; 239 kW), al haber salido como un duro competidor de Chevrolet nuevamente, pero esta vez con el Camaro. La filosofía "para todas las necesidades" cede el paso a 11 diferentes combinaciones y se añaden nuevos modelos a la línea de producción de 1969 que incluye, entre otros, el Boss 302 de 290 HP (294 CV; 216 kW) de potencia, mientras que el Boss 429 sube a 375 HP (380 CV; 280 kW) de potencia, así como el Mach I y el lujoso modelo "Grande". También se ofrece por primera vez el motor V8 "Windsor" que produce 250 HP (253 CV; 186 kW) de potencia con carburador de dos bocas, o de 290 HP (294 CV; 216 kW) de potencia con carburador de cuatro bocas. En 1971, se realizó la última gran modificación de la primera generación, ya que creció más de 5 cm (2 pulgadas) de longitud y casi 6 cm (2,4 pulgadas) de ancho respecto al modelo de 1970. Se pone fin a los motores de 200 plg (3,3 litros), así como el 428 plg (7 litros), el Boss 302 y el Boss 429; quedando así los motores Boss 351, 429 y el Ram Air 429. El Boss 351 era un motor que desarrollaba 330 HP (335 CV; 246 kW), mientras que los de 429 plg (7 litros) llegaban a 370 HP (375 CV; 276 kW). dotado con un V8 Cleveland y 350 HP (355 CV; 261 kW), fue el que ocupó su lugar, sin llegar a desarrollar los más de 300 HP (304 CV; 224 kW) que desarrollaba el Boss, pero ofrecía el mismo estilo coupé y magnífico desempeño.`,
  engine: "V8 a 90º de 260 a 429 plg (4,3 a 7 L)",
  long: "4613 mm (181,6 plg)",
  distance: "2700 mm (106,3 plg)",
  Weight: "1109 kg (2445 lb)",
  power:"101 a 375 HP (102 a 380 CV) (75 a 280 kW)",
  Breaks:"Discos ventilados con servofreno (del.) Tambores (tras.)",
  Wheels:"Llantas de acero de 14 x 7,35 plg (35,6 x 18,7 cm) con banda blanca",
  Tranmission:"Manual de 3 o 4 velocidades\nAutomática de 3 velocidades",  
  Suspension:`Independiente con brazos oscilantes de longitud desigual, superior tipo “A”, espirales, amortiguadores telescópicos, barra estabilizadora y ballestas; trasera dependiente de eje rígido`
}

const Mustang2 = {
  Year: 1975,
  Img1: "img/2 gen.jpg",
  Img2: "img/1975.jpg",
  sound: "audio/1973.mp3",
  history: `El Ford Mustang cambió y se convirtió en el Mustang II, un auto basado en el Ford Pinto, el cual era un modelo más pequeño y menos consumidor con motor de 4, 6 y 8 cilindros. El nuevo modelo King Cobra es el primer Mustang en usar la insignia "5.0" en el año 1978.
  Durante la década de 1970, los fabricantes siempre estuvieron a la caza de soluciones para lograr el mínimo consumo de combustible y es así como se comenzó a trabajar con materiales como plástico, aluminio y parachoques de uretano. La ya mencionada crisis petrolera de 1973 marcó a los Mustang II, ya que tanto sus motores como su tamaño y diseño se vieron fuertemente condicionados por ella. La plataforma del Falcon se dejó de usar en 1973, así que para el Mustang II se empezó a usar una modificación la plataforma Arizona, usada desde 1970 en el subcompacto de la casa: el Ford Pinto. Si en 1973 Ford vendió casi 135.000 unidades del Mustang, en 1974 llegaron ser más del doble que en el año anterior, ofreciendo menos prestaciones y menos opciones de carrocería y modelos. En 1975, los motores V8 volvieron a los Mustang, pero no con el mismo significado que antes, ya que el nuevo V8 de 302 plg (4,9 litros) solamente entregaba 130 HP (132 CV; 97 kW) y únicamente estaba disponible con transmisión automática.
  Aunque para muchos el Mustang II ha sido el peor Mustang jamás fabricado, en cuestión de calidad y, sobre todo de ventas, no fue tan malo, ya que esta generación tuvo que enfrentarse a la crisis del petróleo y a unas nuevas normativas de emisiones que acabaron con la época dorada de los "muscle cars". El vano motor fue rediseñado en una actualización de 1975 y acoplaba un V8 de 302 plg (4,9 litros) que entregaba apenas 140 HP (142 CV; 104 kW).`,
  engine: "V8 a 90º Windsor de 302 plg (4,9 litros)",
  long: "4445 mm (175 plg)",
  distance: "2443 mm (96,2 plg)",
  Weight: "1200 a 1248 kg (2646 a 2751 lb)",
  power:"87 a 139 HP (88 a 141 CV) (65 a 104 kW)",
  Breaks:"Discos ventilados de 236 mm (9,3 plg) (del.) Tambores de 229 mm (9 plg) (tras.)",
  Wheels:"195/70 R 13 x 5,5 plg (33,0 x 14,0 cm)",
  Tranmission:"Manual de 4 velocidades\nAutomática de 3 velocidades",  
  Suspension:""
}

const Mustang3 = {
  Year: 1983,
  Img1: "img/1983.jpg",
  Img2: "img/1990.jpg",
  sound: "audio/1990.mp3",
  history: `También se produjo otra versión no tan conocida: el Ford Mustang RSX Rally Ghia en 1979 que fue -o al menos ese iba a ser su destino- el Mustang de rally, pero quedaría como prototipo.
  El Mustang III sería uno de los muchos modelos que habían planeado desarrollar sobre la nueva plataforma y se presentó varios meses después del debut de la línea Fairmont / Zephyr, para que coincidiera con el inicio del año modelo 1979 y no se tomó a la ligera la presentación de la nueva generación III, ya que es uno de los autos más impactantes en la historia contemporánea de la industria automotriz
  El llamado “New Breed” era más corto que el Fairmont, lo cual le daba exclusividad y mejoraba su desempeño, haciéndole más ágil, que le permitía también cautivar a antiguos dueños de Mustang II o restar ventas a otros “deportivos” como los Celica, los Monza, los Scirocco, etc. Los principios básicos de diseño del motor de cuatro cilindros con levas en lo alto, llevado a 140 plg (2,3 litros) y a la tornillería de base métrica, se conservaron en el “New Breed”. El V6 Cologne creado en Europa, no pasó al olvido con el Mustang II y en el “New Breed” coexistió brevemente con la veterana unidad de 6 en línea presentada en el Ford Falcon original y mantenida en el tiempo tras agrandar sus 170 plg (2,8 litros) originales hasta las 200 pulgadas cúbicas (3,3 L). Finalmente, el V8 de 302 plg (4,9 litros) nacido en 1963 del célebre bloque Fairlane de 260 plg (4,3 litros) y ya usado por el Mustang II y el Mustang original, también se usó en el “New Breed” debidamente convertido a sistema métrico y rebautizado "5.0". El año de 1981 fue de aciago para la industria y Ford ofreció un V8 reducido a 255 plg (4,2 litros) y algo más de 100 HP (101 CV; 75 kW), lo cual pareció una buena respuesta en términos de economía, considerando que permitía seguir usando un V8 en esos días en los que automovilistas e industria migraban a motores de cuatro cilindros, pero no fue convincente por su rendimiento y Ford dejó de ofrecerlo. Se cuestionaba a la industria norteamericana por lo anticuado de sus motores y clamaban por motores más "europeos” con bajos desplazamientos, altas compresiones, turbos y complejos sistemas de gestión, así que acabaron aclamando que en 1982 se relanzara la versión GT para relevar al Mustang Cobra Turbo, ya que el nuevo GT tenía un V8 de 302 plg (4,9 litros) configurado para ofrecer máximo rendimiento, pero midiendo su capacidad en litros, por lo que fue rebautizado "5.0 HO" (por High Output). Posteriormente y respondiendo a la demanda de motores tecnológicos más “europeos”, se lanzó el SVO de 1985, que introdujo una edición muy mejorada del Turbo de 140 plg (2,3 litros) con intercooler e inyección que acabó entregando hasta 210 HP (213 CV; 157 kW).`,
  engine: "V8 a 90º Small block de 255 plg (4,2 litros)",
  long: "4562 mm (179,6 plg)",
  distance: "2553 mm (100,5 plg)",
  Weight: "1315 a 1463 kg (2899 a 3225 lb)",
  power:"86 a 235 HP (87 a 238 CV) (64 a 175 kW)",
  Breaks:"Discos ventilados de 10,84 plg (275 mm) (del.) 10,07 plg (256 mm) (tras.)",
  Wheels:"RX o P245/45 ZR 17 x 7,5 plg (43,2 x 19,1 cm) BSW",
  Tranmission:"Manual de 4 o 5 marchas\nAutomática de 3 o 4 marchas",  
  Suspension:`MacPherson struts, muelles helicoidales, eje rígido, 4 brazos de arrastre y barra estabilizadora`
}

const Mustang4 = {
  Year: 1995,
  Img1: "img/1995.jpg",
  Img2: "img/2003.jpg",
  sound:"audio/1995.mp3",
  history: `Por primera vez en décadas, el tren motriz recibió un cambio sustancial al llegar en 1996 el V8 modular de 4601 cm³ (4,6 L; 280,8 plg) en reemplazo del 5.0, mientras que el V6 Essex seguía disponible, pero tras varios años en producción, ya había mejorado lo suficiente como para ofrecer más potencia y fiabilidad. El motor 5.0 solamente duró dos años en la nueva generación, que realmente se trataba del mismo motor de 260 plg (4,3 litros) que apareció en el primer Mustang 30 años atrás. El 5.0 cedió su lugar al mucho más moderno motor modular de 4601 cm³ (4,6 L; 280,8 plg) y árbol de levas a la cabeza, el cual apareció en 1996 con la misma potencia que el 5.0 de 1995, pero creció a partir de ahí. En 1998, la potencia ya había vuelto a 225 HP (228 CV; 168 kW) y en las últimas versiones de 260 HP (264 CV; 194 kW). Además, en 1996 apareció nuevamente el Mustang Cobra con este mismo motor de 4601 cm³ (4,6 L; 280,8 plg), pero con cabezas con árbol de levas doble. Además, un año más tarde entra una nueva norma vigente para todos los modelos: el Sistema de Antirrobo de Ford (PATS). El equipo SVT siguió su intervención en el coche y para el modelo 2003 ya había desarrollado un motor de 4601 cm³ (4,6 L; 280,8 plg) sobrealimentado por un compresor volumétrico tipo Roots Eaton, que lograba desarrollar 390 HP (395 CV; 291 kW). Salvo en los años 1994 y 2002, todos los modelos con más prestaciones superaban esta cifra, llegando incluso a acercase a los 400 HP (406 CV; 298 kW) con los SVT Cobra de 2003 y 2004, una potencia que hasta hoy en día han quedado vetadas para los modelos normales, a excepción de los Shelby y las preparaciones externas como las de Roush o Saleen. Rememorando el clásico Ford Mustang Fastback GT390 de 1968 que conducía el teniente Frank Bullitt por las calles de San Francisco (California), Ford lanzó esta edición especial. Los cambios eran notables, como las llantas de 17 pulgadas (43,2 cm) en gris con el diseño clásico de American Racing, el color y las tomas de aire laterales, algo diferenciadas respecto a los modelos normales, pero no solamente se modificó su estética, sino que la suspensión se retocó y rebajo, para darle más maniobrabilidad. El motor utilizado para esta resurrección era el V8 DOHC de 4601 cm³ (4,6 L; 280,8 plg) que entregaba una potencia máxima de 305 HP (309 CV; 227 kW).`,
  engine: "V8 Windsor de 4942 a 5766 cm³ (4,9 a 5,8 L) (301,6 a 351,9 plg)",
  long: "4770 mm (187,8 plg)",
  distance: "2573 mm (101,3 plg)",
  Weight: "1387 a 1624 kg (3058 a 3580 lb)",
  power:"145 a 390 HP (147 a 395 CV) (108 a 291 kW)",
  Breaks:"Discos ventilados Brembo con ABS53 de 330 mm (13,0 plg) (del.) 248 mm (9,8 plg) (tras.)",
  Wheels:"265/40 ZR 18 plg (45,7 cm)",
  Tranmission:"Manual de 5 o 6 velocidades\nAutomática de 4 velocidades",  
  Suspension:`MacPherson struts, muelles helicoidales separados, amortiguadores monotubo de gas Bilstein, barra estabilizadora tubular`
}

const Mustang5 = {
  Year: 2005,
  Img1: "img/2005.jpg",
  Img2: "img/2012.jpg",
  sound: "audio/2005.mp3",
  history: `Mecánicamente, se ofrece con un motor V6 de 4 litros de 202 HP (205 CV; 151 kW) de potencia para la versión básica; y la versión V8 de 4601 cm³ (4,6 L; 280,8 plg) con 300 HP (304 CV; 224 kW) de potencia, con el que es capaz de acelerar de 0 a 100 km/h (62 mph) en alrededor de 5,2 segundos con transmisión manual. A mediados de 2006, apareció la versión Shelby con un motor V8 con 32 válvulas sobrealimentado de 5409 cm³ (5,4 L; 330,1 plg) que entrega una potencia de 500 HP (507 CV; 373 kW), acoplado a una transmisión manual de seis velocidades. Con este motor, el Shelby GT500 era capaz de acelerar de 0 a 100 km/h (62 mph) en 4,5 segundos y alcanzar una velocidad máxima limitada de 250 km/h (155 mph).

  Presenta una apariencia mejorada con menor resistencia al viento y con dos nuevos motores: un V6 de 305 HP (309 CV; 227 kW) y un V8 5.0 de 412 HP (418 CV; 307 kW), llamado por los ingenieros «Coyote», ambos con transmisión de seis velocidades. En el campo del desempeño, se dejó de ofrecer el V6 de 3797 cm³ (3,8 L; 231,7 plg) remplazándolo por un V6 SOHC de 3996 cm³ (4 L; 243,9 plg) con 210 HP (213 CV; 157 kW). El Shelby GT presentó un motor V8 de 4601 cm³ (4,6 L; 280,8 plg) con 319 HP (323 CV; 238 kW), mientras que el GT500 fue catalogado como el Mustang más poderoso de toda la historia, con un V8 sobrealimentado de 5409 cm³ (5,4 L; 330,1 plg) capaz de generar 500 HP (507 CV; 373 kW).
  
  En 2008, trajo consigo lámparas de Descarga de Alta Densidad (HID), llantas de 18 pulgadas (45,7 cm) en el coupé V6 y en el interior un sistema de alumbrado ambiental. EL Shelby GT es impulsado por un motor V8 de 4601 cm³ (4,6 L; 280,8 plg) el cual se dice que genera 319 HP (323 CV; 238 kW). El Shelby GT500KR presenta un V8 de 5409 cm³ (5,4 L; 330,1 plg) sobrealimentado con un paquete de mejoras de Ford Racing, el cual Se estima que produce alrededor de 540 HP (547 CV; 403 kW). El GT V8 de 4601 cm³ (4,6 L; 280,8 plg) produce 315 HP (319 CV; 235 kW) y 325 lb·pie (441 N·m) de par máximo, gracias a la incorporación del "Bullitt" desde 2008. En 2011, contó con el regreso del motor V8 5.0 en el modelo GT, que vendría equipado con doble árbol de levas, cuatro válvulas por cilindro y distribución de válvulas variable independiente Timing (Ti-VCT), apodado el "Coyote", el cual produce 412 HP (418 CV; 307 kW) y 390 lb·pie (529 N·m) de par máximo. El V6 de 3.7 litros también es revisado y mejorado para ofrecer más potencia y mejor economía de combustible, que era conocido como Duratec de 24 válvulas, capaz de generar 305 HP (309 CV; 227 kW) y 280 lb·pie (380 N·m) de par máximo. También en 2013, apareció la versión Shelby con un bloque V8 de aluminio con 32 válvulas sobrealimentado de 5812 cm³ (5,8 L; 354,7 plg) y una potencia de 662 HP (671 CV; 494 kW) y 631 lb·pie (856 N·m) de par máximo acoplado a una transmisión manual de seis velocidades. Con este motor era capaz de acelerar de 0 a 100 km/h (62 mph) en 3,6 segundos y alcanzar una velocidad máxima limitada de 250 km/h (155 mph); y 325 km/h (202 mph) sin limitador. Por su parte, el GT vio un aumento de potencia a 420 HP (426 CV; 313 kW).`,
  engine: "V8 Coyote de 4951 cm³ (5 L; 302,1 plg)",
  long: "4770 mm (187,8 plg)",
  distance: "2720 mm (107,1 plg)",
  Weight: "1520 a 1833 kg (3351 a 4041 lb)",
  power:"210 a 662 HP (213 a 671 CV) (157 a 494 kW)",
  Breaks:"Discos ventilados Brembo con ABS de 381 mm (15,0 plg) (del.) 350 mm (13,8 plg) (tras.)",
  Wheels:"Eagle F1 SuperCar P265/40 ZR 19 x 9,5 plg (48,3 x 24,1 cm) (del.)\nP285/35 ZR 20 x 9,5 plg (50,8 x 24,1 cm) (tras.)",
  Tranmission:"Manual o automática de 5 o 6 velocidades",  
  Suspension:`MacPherson struts, eje sólido de 3 brazos, varilla Panhard, amortiguadores de gas presurizados de tubos gemelos y barra estabilizadora`
}

const Mustang6 = {
  Year: 2015,
  Img1: "img/2015.jpg",
  Img2: "img/2019.jpg",
  sound: "audio/2015.mp3",
  history: `El nuevo modelo es más ancho por 40 mm (1,57 pulgadas), más bajo por 38 mm (1,50 pulgadas) y más dinámico en lo estético que su antecesor, el diseño a una reminiscencias del Mustang original con el lenguaje Kinetic Design de Ford. Dispone de varias motorizaciones, siendo la principal novedad un cuatro cilindros EcoBoost de 2300 cc que entrega alrededor de 305 HP (309,2 CV) y 300 lb·pie (407 N·m) de par máximo. En cuanto a los frenos, si optamos por el «performance pack», contaremos con pinzas rígidas delanteras de cuatro pistones para el EcoBoost y seis para el V8, ambas firmadas por Brembo y situadas en unas llantas de 19 pulgadas (48,3 cm) de diámetro.

  La nueva versión del Mustang muestra similitudes con el coche Ford Fusion, teniendo características más estéticas, con un diseño más aerodinámico mostrando lujos dentro y fuera del automóvil. Está disponible en versión V6 de 3726 cm³ (3,7 L; 227,4 plg) y versión V8 de 4951 cm³ (5 L; 302,1 plg) con nuevas calibraciones. El logo Ford esta en las "inscripciones de fábrica", el maletero ofrece un volumen de carga de 408 litros (14,4 pies cúbicos) en la versión con carrocería Fastback y de 332 litros (11,7 pies cúbicos) en el caso de la variante descapotable. En carrocería Fastback, permite una aceleración de 0 a 100 km/h (62 mph) en 5,8 segundos, devolviendo un consumo de 8 L/100 km (12,5 km/L; 29,4 mpgAm) con caja de cambios manual y muy superior de 9,8 L/100 km (10,2 km/L; 24,0 mpgAm) si se equipa la caja automática. En conducción real con caja manual y carrocería Fastback, es difícil bajar de 9 L/100 km (11,1 km/L; 26,1 mpgAm) y el motor V8 atmosférico de 4951 cm³ (5 L; 302,1 plg).`,
  engine: "V8 Predator sobrealimentado de 5163 cm³ (5,2 L; 315,1 plg)",
  long: "4782 mm (188,3 plg)",
  distance: "2720 mm (107,1 plg)",
  Weight: "1600 a 1916 kg (3527 a 4224 lb)",
  power:"300 a 760 HP (304 a 771 CV) (224 a 567 kW)",
  Breaks:"Discos ventilados con ABS de 420 mm (16,5 plg) (del.) 370 mm (14,6 plg) (tras.)",
  Wheels:"Pilot Sport Cup 4S 295/30 ZR20 x 11 plg (50,8 x 27,9 cm) (del.) 305/30 ZR20 x 11 plg (50,8 x 27,9 cm) (tras.)",
  Tranmission:"Manual de 6 velocidades\nAutomática de 6 o 10 velocidades",  
  Suspension:`MacPherson struts, muelles helicoidales sobre amortiguadores, brazo integral y barra estabilizadora`
}