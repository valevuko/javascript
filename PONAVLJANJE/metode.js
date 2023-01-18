var tekst = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde.";

//length
var duljina = tekst.length;
console.log(duljina);

//charAt
var vratiZnak = tekst.charAt(24);
console.log(vratiZnak);

//trim - makni pazninu
var trimaj = tekst.trim();
console.log(trimaj);

//indexOf - vraća poziciju unutar stringa
var tekstOf = tekst.includes("dolor");
console.log(tekstOf);

//replace
var zamijeni = tekst.replace("dolor", "Tina");
console.log(zamijeni);

//toUpperCase
var povecaj = tekst.toUpperCase();
console.log(povecaj);
