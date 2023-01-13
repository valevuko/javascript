var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "bijela",
  godina: 1999,
  brzina: 60,
  maxBrzina: 160,
  težina: 900,
  ubrzaj: function () {
    // trenutna brzina
    while (this.brzina < this.maxBrzina) {
      // this je referenca na trenutni objekt
      this.brzina++;
    }
    return true;
  },
  zakoči: function () {
    while (this.brzina > 0) {
      this.brzina--;
    }
    return true;
  },
  zatrubi: function () {
    alert("tuuuuuuuu...");
  },
};

console.log(auto.brzina);
console.log(auto.ubrzaj());
console.log(auto.brzina);

auto.zatrubi(); // pauza izvršavanja dok ne potvrdite

console.log("Boja mog " + auto.brend.tip + " je " + auto.boja);

console.log(JSON.stringify(auto));
