//1
/* U ovom primjeru se provjerava da li je vrijednost x veća od 5, i ako jeste, u konzoli se ispisuje tekst ""Vrijednost je veća od 5.". 
U suprotnom (ako je x manji ili jednak 5), ne dešava se ništa, program nastavlja normalno s izvršavanjem. */

var x = 5;
if (x > 5) {
  console.log("Vrijednost je veća od 5.");
} else {
  console.log("Vrijednost je nije veća od 5.");
}

//2 Učitati cijeli broj i ispitati je li broj paran i veći od 15?
var broj = 15;
if (broj % 2 === 0 && broj > 15) {
  console.log("Broj je paran i veći od 15");
} else {
  console.log("Broj je neparan i manji od 15");
}

//3 Program treba od korisnika tražiti unos cijelog broja. Na zaslon treba ispisati je li učitani broj pozitivan, negativan ili je nula.
//4 Program treba od korisnika tražiti unos broja. Ako je broj manji od 0 treba ispisati njegov sljedbenik, inače treba ispisati njegov prethodnik.
