//UVJETI: 15/1/2023
var x = 10;
y = 5;
isActive = true;
isNotActive = false;

//Ako je aktivno i ako je manje od 10 consol.logaj mi aktivno.
//Ako je neaktivno consollogaj neaktivno.
//Ako je y = 5 ili je isActive false, consollogaj mi Prvi blok ili ako tvrdnje nisu točne consollogaj mi Drugi blok.

if (isActive === true && x <= 10) {
  console.log("Aktivno");
}

if (isNotActive === false) {
  console.log("Neaktivno");
}

if (y === 5 || isActive === false) {
  console.log("Prvi blok");
} else {
  console.log("Drugi blok");
}

//PETLJE:
//while

var count = 2;
//napiši while fukciju da ispisuje vrijednost uvećana za 2 puta dok je vrijendost 100

while (count < 100) {
  console.log(count);
  count += 2;
}

//FOR:

var names = ["davor", "bruma", "tina", "gogi", "dunja"];
//ako je elemenet arr davor ispiši slovo D
//ako je element valentina na taj element dodaj slovo z
//ako je gogi izađi iz programa

names.forEach((name) => {
  if (name === "davor") {
    console.log("D");
  } else if (name === "tina") {
    console.log(name + "z");
  } else if (name === "gogi") {
    return;
  }
});

////// novo: 16/1/2023
// ako su sati manji od 12 i vrijeme kišno, napiši jesen
//ako su sati veći od 12 i vrijeme sunčano napiši ljeto
//ako je sati 11 ili snijeg, napiši idealno vrijeme
var sati = 11;
var vrijeme = "snijeg";

if (sati < 12 && vrijeme === "kisno") {
  console.log("jesen");
} else if (sati > 12 && vrijeme === "suncano") {
  console.log("ljeto");
} else if ((sati = 11 || vrijeme === "snijeg")) {
  console.log("idealno vrijeme");
}
