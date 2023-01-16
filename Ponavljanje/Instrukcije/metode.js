var recenica = " Davor je u poslu, Valentina ponavlja";
//length:
var recenicaLength = recenica.length;
console.log(recenicaLength);
//a može i ovako: console.log(recenica.length); i isto radi

//charAt - vraća znak na poziciji (u zagradi moramo napisati koji znak želimo da nam vrati po redu)
var recenicaA = recenica.charAt(10);
console.log(recenicaA);

//indexOf - vraća poziciju stringa unutar stringa
var recenicaI = recenica.indexOf("Valentina");
console.log(recenicaI);

//replace
var zamijeni = recenica.replace("Valentina", "Tina");
console.log(zamijeni);

// a može i ovako: console.log(recenica.replace("Valentina", "Tina"))

//toUpperCase

var napisiVelika = recenica.toUpperCase();
console.log(napisiVelika);

//a može i ovako console.log(recenica.toUpperCase());
