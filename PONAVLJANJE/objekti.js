//1
var listaAuta = [
  (nekiAuto = {
    model: "Audi",
  }),
  (nekiAuto = {
    model: "Seat",
  }),
];
console.log(listaAuta[1].model);

//2
var auto = ["Audi", "Seat", "VW", "Citroen"];
console.log(auto[2]);

noviAuto = {
  auto: "VW",
};
console.log(noviAuto.auto);
//3
/* 1. napravi objekt user uz dva propertia name i last nama i vrijednosti su im ivan i perić */

user = {
  firstName: "Ivan",
  lastName: "Perić",
};

/* var testUser = user; */
console.log(testUser.firstName); //pristupanje - jedan način

console.log(user["firstName"]); //pristupanje drugi način

var names = ["ivan", "pero"];
var users = [{ firstName: "ivan" }, { firstName: "pero" }];
/* console.log(users[1]) */

names.forEach((kurac) => {
  console.log(kurac);
});

/* 
1. Definiraj objekt koji se zove person koji ima tri propertya, firstName, lastName, age. 
2. Definiraj Array sa gore navedenim objetom (3komada)
3. U Array pushaj novi objek koji se zove child koji ima iste propertye
4. ispiši sve elemenete gornjeg niza
5. ispiši child objekt sa property age; 
6. ispiši u foreach.u objekt koji ima vrijednost age manje od 100 */

//1
var person = {
  firstName: "Ivan",
  lastName: "Ivić",
  age: 105,
};

//2
var persons = [
  {
    firstName: "Ivan",
    lastName: "Ivić",
    age: 105,
  },
  {
    firstName: "Ivan",
    lastName: "Ivić",
    age: 105,
  },
  {
    firstName: "Ivan",
    lastName: "Ivić",
    age: 105,
  },
];
/* console.log(persons[2].age) */

//3
var child = {
  firstName: "Ivan",
  lastName: "Ivić",
  age: 5,
};
persons.push(child);
/* console.log(persons) */

//4.
/* persons.forEach(person => {
  console.log(person)
}); */

//5.
/* persons.forEach(person => {
  if (person.age < 100){
    console.log(person)
  }
}); */
//6 a) Pushaj novi objek first name je pero, i b)foričaj taj array i ispiši samo objekt gdje je pero

//a)
var pero = {
  firstName: "Pero",
  lastName: "Ivić",
  age: 105,
};
persons.push(pero);

//b)
persons.forEach((person) => {
  if (person.firstName === "Pero") {
    console.log(person);
  }
});

//7 Obriši vrijednost age iz objekta
persons.forEach((person) => {
  delete person.age;
  console.log(person);
});
