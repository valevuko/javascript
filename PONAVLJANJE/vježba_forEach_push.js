/* 1. Pomoću petlje napravi iteraciju kroz nizh i ispčišite u konzolu sve elemente niza.
2. Dodajte svoje ime na kraj niza.
3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon pto ispišete 'Jane' izađite iz petlje,
 */

//1
var names = ["Davor", "Vanja", "Dunaj", "Goran"];
name.forEach((element) => {
  console.log(element);
});

//2
name.push("Valetina");
console.log(name);

//3

name.forEach((element) => {
  if (element === "Jane") console.log(element);
});
