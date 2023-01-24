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

//3 If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
var sati = 18;
if (sati < 18) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

//4 If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 22:00, create a "Good day" greeting, otherwise a "Good evening":
var sati = 10;
if (sati < 10) {
  console.log("Good morning");
} else if (sati < 22) {
  console.log("Good day");
} else {
  console.log("Good evening");
}
