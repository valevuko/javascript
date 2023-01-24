//1 1. Pomoću petlje napravi iteraciju kroz nizh i ispčišite u konzolu sve elemente niza.
var names = ["John", "Jane", "Bob", , "Mike"];

names.forEach((element) => {
  console.log(element);
});

//2 Dodajte svoje ime na kraj niza.
names.push("Valentina");
console.log(names);

//3 Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon pto ispišete 'Jane' izađite iz petlje,
names.forEach((element) => {
  if (element === "Jane") console.log(element);
});
//

var numbers = [];
numbers.push(2, 3);
console.log(numbers);
