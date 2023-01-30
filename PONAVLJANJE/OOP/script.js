class Person {
  name;
  surname;
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name + this.surname}`);
  }
}

var ivan = new Person("Ivan ", "Ivić");
console.log(ivan);
ivan.introduceSelf();
