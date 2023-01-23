//1 The following for statement starts by declaring the variable i and initializing it to 0. It checks that i is less than nine, performs the two succeeding statements, and increments i by 1 after each pass through the loop.
var i = 9;
for (i = 0; i < 9; i++) {
  console.log(i);
}

//2 break

var i = 9;
for (i = 0; i < 9; i++) {
  if (i > 5) break;
  console.log(i);
}

//3
var nesto = 50;
for (i = 0; i < 50; i++) {
  if (i === 31) break;
  /*     console.log(i) //ispiše mi sve brojeve do 31
   */ console.log(nesto); //ispiše mi 31 od ukupno 50
}

//4continue
var kuca = 50;
for (i = 0; i < 50; i++) {
  if (i === 31) continue;
  console.log(i);
} // dođe do 31, preskoči ga i nastavi dalje do manje od 50
