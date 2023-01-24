//while:

var count = 2;
//napiši while fukciju da ispisuje vrijednost uvećana za 2 puta dok je vrijendost 10

while (count < 10) {
  console.log(count);
  count++;
}

//for:

var imena = ["davor", "bruma", "tina", "gogi", "dunja"];
//ako je elemenet arr davor ispiši slovo D
//ako je element valentina na taj element dodaj slovo z
//ako je gogi izađi iz programa

imena.forEach((ime) => {
  if (ime === "davor") {
    console.log("D");
  } else if (ime === "tina") {
    console.log(ime + "z");
  } else if (ime === "gogi") {
    return;
  }
});
