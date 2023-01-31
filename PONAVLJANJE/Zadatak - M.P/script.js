//1
function provjeriBroj() {
  var broj = document.getElementById("podatak1").value;
  if (broj < 5) {
    alert("Broj je mali");
  } else if (broj >= 5 && broj <= 10) {
    alert("Broj je srednjni");
  } else {
    alert("Broj je velik");
  }
}

//2
function parnost() {
  var vrijednostInputa = document.getElementById("podatak2").value;

  if (vrijednostInputa % 2 === 0) {
    alert("Broj je paran");
  } else {
    alert("Broj nije paran");
  }
}

//3
function oduzmiBroj() {
  var num = document.getElementById("podataka3").value;
  if (num % 2 === 0) {
    num -= 5;
  } else {
    num -= 7;
  }
  if (num < 0) {
    alert("Pogreška: broj je manji od 0");
  } else {
    alert("Result: " + num);
  }
}

//4
function nekiBroj() {
  var nizBrojeva = [];
  var nekiBroj = document.getElementById("podatak4").value;
  for (i = 1; i < nekiBroj; i++) {
    nizBrojeva.push(i);
  }
  alert(nizBrojeva);
}

//5
function zbrajanje() {
  var nizoviZbroja = [];
  var zbrojiBrojeve = document.getElementById("podatak5").value;
  for (i = 1; i <= zbrojiBrojeve; i++) {
    nizoviZbroja.push(i);
  }
  var result = nizoviZbroja.reduce((p, c) => p + c, 0);
  alert(result);
}

//6
function zbrojiSve() {
  var nizoviArr = [];
  var podatak6a = document.getElementById("podatak6a").value;
  var podatak6b = document.getElementById("podatak6b").value;

  for (i = +podatak6a; i <= +podatak6b; i++) {
    nizoviArr.push(i);
  }

  var result = nizoviArr.reduce((p, c) => p + c, 0);
  alert(result);
}
