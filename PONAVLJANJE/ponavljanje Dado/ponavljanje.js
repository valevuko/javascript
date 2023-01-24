//definiranjne varijabli

var name = "Valentina";
var godinaRodenja = 1992;
var booleanVrijednost = true;
var varijabla = null;
var niz = [1, 2];
var nekiObjekt = {
  nekiNoviObjekt: "nesto",
};
function zbrajanje(a, b) {
  var razultat = a + b;
  return razultat;
}
var nesto = zbrajanje(5, 5);

var x;

var users = [
  {
    boja: "zelena",
  },
  {
    boja: "plava",
  },
]; //sva svojstva u JSON-u su pod navodnicima npr: "boja": "zelena"
console.log(typeof booleanVrijednost); //kako provjerimo koja je vrsta

var world = "world";
var pozz = "hi";
console.log(pozz + "," + " " + world);

var hello = pozz + "," + " " + world;
var zamijeni = hello.replace("hi", "hey");
console.log(zamijeni);

var povecaj = hello.toUpperCase();
console.log(povecaj);

//našiši niz sa 10 brojeva

var nekiNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var prazan = [];
var povecaj = [];
var nepar = [];

nekiNiz.forEach((broj) => {
  if (broj % 2 === 0) {
    var spremi = broj * broj;
    povecaj.push(spremi);
  } else {
    nepar.push(broj);
  }
});
console.log(povecaj);
console.log(nepar);

// pushaj u arr one brojeve koji nisu neparni
// ispiši brojeve koji su veći od 5
/* var nekiNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var prazan = [];
var povecaj = [];
var nepar = [];

for (i = 0; i <= 100; i+=10){
        prazan.push(i)
}
console.log(prazan) */

var nekiNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var prazan = [];
var povecaj = [];
var nepar = [];

console.log(nekiNiz.map((broj) => broj * 5));

//napiši funkciju ako je simbol + vratit će zbroj x i y, ako je - vrtiti će rezultat  - x y
//u funkciji napisati provjeru da brojevu ne smiju biti negativni tj manji od 0

function jebivjetar(y, x, simbol) {
  if (x < 0 || y < 0) {
    console.log("Brojevi ne smiju biti negativni");
    return;
  }
  if (simbol == "+") {
    var rezultat = x + y;
    return rezultat;
  }
  if (simbol == "-") {
    var oduzmi = x - y;
    return oduzmi;
  }
}
var rezultat1 = jebivjetar(1, 3, "-");
console.log(rezultat1);
