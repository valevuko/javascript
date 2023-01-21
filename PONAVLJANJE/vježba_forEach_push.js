/* 1. Pomoću petlje napravi iteraciju kroz nizh i ispišite u konzolu sve elemente niza.
2. Dodajte svoje ime na kraj niza.
3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon pto ispišete 'Jane' izađite iz petlje,
 */

//1
var names = ["Davor", "Vanja", "Dunaj", "Goran"];
names.forEach((element) => {
  console.log(element);
});

//2
names.push("Valetina");
console.log(names);

//3

names.forEach((element) => {
  if (element === "Jane") console.log(element);
});

//Vježaba:
var student = ["John", "Sara", "Jack"];
student.forEach((element) => {
  console.log(element);
});

//2. dio:
student.push("Tina");
console.log(student);

//3
names.forEach((element) => {
  if (element === "Sara") console.log(element);
});
