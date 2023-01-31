//4 kreiraj objekt dodaj 3 propertija name, surname, i age, dodaj mu neke vrijednosti , i age vrijednosti prebaci u stringu ako je number ili u stringu ako je broj
class Person {
  name;
  surname;
  age;
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  zazeli() {
    console.log(`Sretan ${this.age.toString()} rođendan ${this.name + this.surname}`);
  }
}

var tina = new Person("Valentina ", "Vuković", "31.");
console.log(tina);
tina.zazeli();

//5 napravi klasu da se zove kuca, sa 2 propertija visina i sirina,  dodaj metodu da racuna povrsinu,  kreiraj instancu kuce sa vrijednostima
class house {
  width;
  height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  izracunaj() {
    return this.width * this.height;
  }
}
