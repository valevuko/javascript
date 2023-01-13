//1
var firstName = "Valentina";
var lastName = "Vuković";
var nickName = "Tina";

var fullName = firstName + " " + nickName + " " + lastName;
console.log(fullName);

//2 -
var x = z === 2 ? y : 5;

var x;
if (z === 2) {
  x = y;
} else {
  x = 5;
}

//3
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj " + i + " je paran");
  } else {
    console.log("Broj " + i + " nije paran");
  }
}
