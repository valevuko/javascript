/* 1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.
2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.
3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.
 */
"use strict";

// 1.
var a = 78;
var b = 34;
var myObject = { property1: 1, property2: 2, property1: 1 };

// 2.
const users = [
  { name: "Fabio", surname: "Biondi" },
  { name: "Mario", surname: "Rossi" },
];

const user = { name: "Lorenzo", surname: "Verdi" };

const users2 = [...users, user]; // ne trebaju opet ... jer je samo jedan niz

// 3.
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("The number is " + i);
  }, 1000);
}

console.log(i);
