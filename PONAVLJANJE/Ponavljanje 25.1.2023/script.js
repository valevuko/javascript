/* 1. Dopustiti korisniku unos jednog broja te ispisati ispod poruku "Broj je mali" ako je manji od 5, "Broj je srednji" 
ako je između 5 i 10, "Broje je velik" ako je broj veći od 10.
2. Dopustiti korisniku unos jednog broja te ispisati ispod je li broj paran ili neparan.
3. Dopustiti korisniku unos jednog broja te od njega oduzeti 5 ako je broj paran, a 7 ako ej broj neparan. 
Ukoliko je dobiveni broj manji od 0 na ekran ispisati da je došlo do pogreško. Ukoliko broj nije manji od 0 na ekran 
ispisati dobiveni broj. 
4. Dopustiti korisniku unos jednog broja te ispod ispisati sve brojeve od 1 do tog broja. Ukoliko je uneseni broj manji 
ili jedan jedinici ispisati poruku pogreške ispod.
5. Dopustiti korisniku unos jednog broja te zbojiti sve brojeve od 1 do tog broja. Ukolik je uneseni broj manji ili 
jednak jedinici ispisati poruku pogređke ispod. 
6. Dopustiti korisniku unos dva broja te ispod ispisati zbroj svih brojeva između unesena dva broja.
7.Napraviti program koji će simulirati dijeljenje karata u Blackjacku. Program treba krenuti od 0 i izbacivati random 
brojeve između 1 i 11 sve dok ne dođe do minimalno 17. Nakon toga ispisati dobiveni broj ukoliko je između 17 i 21, a 
ako je dobiveni broj 21 ispisati "Blackjack", a ako je peko 21 ispisati "bust".
8. Napraviti funkciju koja će za predani array brojeva vraćati njegov zbroj, razliku, umnožak ili kočičnik. 
Doustiti korisniku na fronti da odabere koju operaciju želi izvesti te ispisati rezultat. 
9. Nakon riješavanja prvog zadatka, iz HTML-a pokupiti dobiveni broj te pronaći njegov faktorijel i zamijeniti broj iz 
prvog zadatka s novodobijenim brojem.
10. Sve zadatke smjesitti na jednu stranicu, sa CSS-om ih rasporediti u dva reda sa flexboxom, srediti sve da lijeo 
izgleda i pobrinuti se da HTML bude napisan pravilnom strukturom. */

//1. Dopustiti korisniku unos jednog broja te ispisati ispod poruku "Broj je mali" ako je manji od 5, "Broj je srednji"
/* ako je između 5 i 10, "Broje je velik" ako je broj veći od 10. */
var x = 5;

if (x < 5) {
  console.log("Broj je mali");
} else if ((x = 5 && x < 10)) {
  console.log("Broj je srednji");
} else if (x < 10) {
  console.log("Broje je velik");
}

//2. Dopustiti korisniku unos jednog broja te ispisati ispod je li broj paran ili neparan.

/* var broj = ("")
function broj(x) {
  if (broj % 2 === 0) {
    consol.log("Broj je paran");
  } else {
    consol.log("Broj nije paran");
  }
}
var rezultat = broj (8);
console.log(rezultat)
 */

/* function empty (number) {
    if (typeof(number) === "number" && "number" % 2 === 0){
        consol.log("Broj je paran");
      } else {
        consol.log("Broj nije paran");
      }
}
var rezultat = number (8);
console.log(rezultat) */
