//1
var firstName = "Valentina";
var lastName = "Vukovic";

var fullName = firstName + " " + lastName;
console.log(fullName);

//2
var x = z === 2 ? y : 5;

var x;
if (z === 2) {
  x = y;
} else {
  x = 5;
}
// var x = uvjet ? ako-je-ispunje : ako-nije - ne razumijem šta je s čim vezano

//3
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj " + i + " je paran");
  } else {
    console.log("Broj " + i + " je neparan");
  }
}
// pojašnjenje logike
