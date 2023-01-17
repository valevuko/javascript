// 1.
var h1 = document.createElement("h1");
var body = document.querySelector("body"); // prvo moramo dohvatiti element:
// var body = document.getElementsByName("body")[0];

body.prepend(h1);

// 2.
var descriptionNode = document.getElementsByClassName("description")[0];
var footer = document.getElementById("footer");
var infoDiv = document.createElement("div"); // kreirali smo div element
infoDiv.setAttribute("class", "info"); // divu smo dodali class"info"

//insertBefore (insertAfter ne postoji) - dodaj prije, poziva se nad parent elementom elementa koji želimo dodati
//body.insertBefore(infoDiv);

// body.insertBefore(infoDiv, footer);
body.insertBefore(infoDiv, descriptionNode.nextSibling); // ovo je bolje jer ako se promijeni struktura ne moramo pratiti na kojem  je mjestu

//3
var ulNode = document.querySelector("ul"); // trebamo dohvatiti element prije petlje
for (var i = 0; i < 3; i++) {
  var li = document.createElement("li");
  ulNode.appendChild(li);
}
