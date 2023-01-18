var x = 10;
y = 5;
isActive = true;
isNotActive = false;

//Ako je aktivno i ako je manje od 10 consol.logaj mi aktivno.
//Ako je neaktivno consollogaj neaktivno.
//Ako je y = 5 ili je isActive false, consollogaj mi Prvi blok ili ako tvrdnje nisu točne consollogaj mi Drugi blok.

if (isActive === true && x < 10) {
  console.log("aktivno");
}
if (isNotActive === true) {
  console.log("neaktivno");
}
if (y === 5 || isActive === false) {
  console.log("Prvi blok");
} else {
  console.log("Drugi blok");
}
