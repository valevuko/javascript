/* 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.
2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
   var x = z === 2 ? y : 5;
3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran"). */

//1
var firstName = "Valentina";
var lastName = "Vuković";
var fullName = lastName + firstName;
console.log(fullName);

//2
var x = Z === 2 ? y : 5;
if (z === 2) {
  x = y;
} else {
  x = 5;
}

//3
for (var i = 1; i > 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj " + " je paran");
  } else {
    console.log("Broj " + " je neparan");
  }
}
