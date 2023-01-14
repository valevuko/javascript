const rezultatPolje = document.getElementById("rezultat");

function zbroji() {
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  rezultat.innerText = number1(x) + number2(y);
}
function oduzmni() {
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  rezultat.innerText = number1(x) - number2(y);
}

function pomnozi() {
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  rezultat.innerText = number1(x) * number2(y);
}

function podijeli() {
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  rezultat.innerText = number1(x) / number2(y);
}
