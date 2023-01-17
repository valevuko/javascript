//1
var h1Node = document.querySelector("h1");
h1Node.textContent = "Karlovac";
//drugi način je: h1Node.innerText = "Karlovac";

//2
var descriptionNode = document.getElementsByClassName("description")[0];
descriptionNode.innerHTML = "Grad na <h3> 5 rijeka </h3>"; //prima string koji će biti interpretiran kao HTML

//3
var infoNode = document.getElementsByClassName("info")[0];
infoNode.textContent = "Peta rijeka je piva";

//4
var rivers = ["kupa", "koran", "dobra", "mrežnica", "karlovačko"];

var lis = document.getElementsByTagName("li"); // lista svih li elemenata
for (var i = 0; i < rivers.length; i++) {
  lis[i].textContent = rivers[i];
}
