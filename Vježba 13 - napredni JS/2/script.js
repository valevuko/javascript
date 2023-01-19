// 1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?
// 2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

var x = "John Doe";
function vratiNesto(name) {
  var x = name; //x je undefined jer smo proslijedili ""
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

/* 1
imamo dva para zagrad:
1. prvi par zagrada je poziv funkcije
2. par zagra je izvršenje funkcije i zato je riješenje "undefined" */
