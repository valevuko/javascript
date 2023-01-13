//1
var name = ["John", "Jane", "Bob", , "Mike"];

name.forEach((element) => {
  console.log(element);
});

//2
name.push("Valentina");
console.log(name);

//3
name.forEach((element) => {
  if (element === "Jane") console.log(element);
});
//
