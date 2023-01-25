// 1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex".
// 2. Kreirajte objekt iz Dog funkcije.
// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat.

function Dog(name) {
  // name = "Rex"
  // if (typeof name !== "string") {
  // 	this.name = "Rex";
  // } else {
  // 	this.name = name || "Rex";
  // }

  this.name = typeof name === "string" ? name : "Rex";
}

Dog.prototype.getName = function () {
  return this.name;
};

var dog = new Dog("Max");
console.log(dog);
