import module1 from "./script2.js";

module1.walk();
module1.walk();
console.log(module1.getTotalSteps());

module1.steps = 6; // nema učinka jer module.steps ne postoji
console.log(module1.getTotalSteps());

module1.walk();
console.log(module1.getTotalSteps());

console.log(this);
