//Inicijalizacija varijabli

var firstName = "Tony",
  midleName = "John",
  lastName = "Doe",
  price = 0,
  discount = 78,
  fullPrice = 0,
  $myObject = {};
lijep = true;
nedefinirani = undefined;
noviObjekt = {
  ime: "Valentina", //"ime" je properti, tj svojstvo
}; // objek koji unutar sebe ima ime tj string
arr = []; // definiran prazan array - uvijek je niz, to i je jedino niz
function cijena() {} // definirana funkcija
//break = []; this is not allowed because this is native declaration

console.log(price), console.log(lastName);

//Kraj mog programa

var listaUsera = [
  (nekiObjekt = {
    age: 50,
  }),
  (noviObjekt = {
    age: 36,
  }),
];
//console.log(typeof noviObjekt); provjeravamo vrstu podatka

console.log(listaUsera[1].age);

var names = ["Davor", "Valentina"];
console.log(names[1]);

noviObjekt = {
  ime: "Valentina", //"ime" je properti, tj svojstvo
};
console.log(noviObjekt.ime);
