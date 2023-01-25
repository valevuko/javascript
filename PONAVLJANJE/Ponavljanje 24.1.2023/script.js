//1. Napišite JavaScript funkciju koja prihvaća dva cijela broja i prikazuje veći.

function najveci(a, b) {
  var najveci = Math.max(a, b);
  console.log(najveci);
}

//2. Napišite JavaScript funkciju da pronađete umnoška tri broja. Brojevi uzoraka: 3, -7, 2
function zbrajanje(x, y, z) {
  var zbroji = x + y + z;
  return rezultat;
}
var zbrojimo = 3 + -7 + 2;
console.log(zbrojimo);

//3. Napišite JavaScript uvjetnu izjavu (if elase) za sortiranje tri broja. Prikažite okvir upozorenja (alert) za prikaz rezultata.
/* 3 broja,  tri uvijeta, alert  u  bloku uvijeta
alert(x + ", " + y + ", " +z)
Brojevi uzoraka: 0, -1, 4
rezultat : 4, 0, -1 */
var x = 0;
var y = -1;
var z = 4;

if (x > y && x > z) {
  console.log(x, y, z);
} else if (y > x && y > z) {
  console.log(y, x, z);
} else if (z > x && z > y) {
  console.log(z, x, y);
}
// 4. Napišite JavaScript uvjetnu(if, else if, elase.  za svaki (5 brojeva, 5 slova)) naredbu da pronađete najveći od pet brojeva.
/* Prikažite okvir upozorenja za prikaz rezultata (alert).
5 uvijeta
primjer if(a > b && a > c && a> c) i tako dalje
Brojevi uzoraka: -5, -2, -6, 0, -1
rez: 0
 */

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
  console.log(a);
} else if (b > a && b > c && b > d && b > e) {
  console.log(b);
} else if (c > a && c > b && c > d && c > e) {
  console.log(c);
} else if (d > a && d > b && d > c && d > e) {
  console.log(d);
} else if (e > a && e > b && e > c && e > d) {
  console.log(e);
}

//5. Napišite JavaScript for petlju koja će iterirati od 0 do 15. Za svaku iteraciju, provjerit će je li trenutni broj neparan ili paran, i prikazati poruku na ekranu.
/* Uzorak izlaza: )
"1 je neparan"
"2 je paran" */

for (var count = 1; count < 15; count++) {
  if (count % 2 === 0) {
    console.log(count + " je paran");
  } else {
    console.log(count + " je neparan");
  }
}

//6. Napišite JavaScript funkciju za sortiranje stavki u nizu.
/* definicija funkcije, koji podatak prima (niz, array) , pozivanje sa uzorkom,  koju metodu pozivam na nizu da okrenem redosljed 
Uzorak niza: var arr1 = [ 8, 7, 6, 5, 3, 2, 1 ];
Uzorak izlaza: 1,2,3,5,6,7,8
 */
/* var arr1 = [8, 7, 6, 5, 3, 2, 1];

function primi(parametar1) {
  var rez = parametar1.sort();
  return rez;
}
var test = primi([8, 7, 6, 5, 3, 2, 1]);
console.log(test); */

//7. Napišite JavaScript narendu za brisanje svojstva ime iz sljedećeg objekta. Također ispišite objekt prije ili nakon brisanja svojstva.
/* Uzorak objekta:*/
var student = {
  ime: "David Rayy",
  razred: "VI",
  rollno: 12,
};
delete student.ime;
console.log(student);

//8. dodatak:

var parametar1 = "ivan";
var parametar2 = "marko";

function primiPodatak(ime1, ime2) {
  var test = ime1.toUpperCase();
  var bla = ime2.toUpperCase();
  return test + " " + bla;
}

var naKraju = primiPodatak("ivan", "marko");
console.log(naKraju);

// pronadi najveci broj u dva niza, te ga prikazi
var input1 = [1, 2, 4];
var param2 = [3, 5, 6];

function test(p1, p2) {}
