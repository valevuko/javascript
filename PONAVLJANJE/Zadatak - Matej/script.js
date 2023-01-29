//1
function provjeriBroj() {
  var broj = parseInt(document.getElementById("podatak1").value);
  if (broj < 5) {
    alert = "Broj je mali";
  } else if (broj >= 5 && broj <= 10) {
    alert = "Broj je srednjni";
  } else {
    alert = "Broj je velik";
  }
}

//2
document.getElementById("button2").onclick = function () {
  var vrijednostInputa = document.getElementById("podatak2").value;

  if (vrijednostInputa % 2 === 0) {
    alert("Broj je paran");
  } else {
    alert("Broj nije paran");
  }
};

//3
function oduzmiBroj() {
  var num = document.getElementById("podataka3").value;
  if (num % 2 === 0) {
    num -= 5;
  } else {
    num -= 7;
  }
  if (num < 0) {
    document.getElementById("result").innerHTML = "Pogreška: broj je manji od 0";
  } else {
    document.getElementById("result").innerHTML = "Result: " + num;
  }
}

//4
var nekiBroj = document.getElementById("podatak4").value;
for (i = 1; i < nekiBroj; i++) {
  document.getElementById("napisi").innerHTML = "Ispisi brojeve " + nekiBroj;
}
//5

//6
//7
//8
