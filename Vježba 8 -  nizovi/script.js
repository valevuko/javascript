//1 1. Pomoću petlje napravi iteraciju kroz nizh i ispčišite u konzolu sve elemente niza.
var name = ["John", "Jane", "Bob", , "Mike"];

name.forEach((element) => {
  console.log(element);
});

//2 Dodajte svoje ime na kraj niza.
name.push("Valentina");
console.log(name);

//3 Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon pto ispišete 'Jane' izađite iz petlje,
name.forEach((element) => {
  if (element === "Jane") console.log(element);
});
//

var numbers = [];
numbers.push(2, 3);
console.log(numbers);
