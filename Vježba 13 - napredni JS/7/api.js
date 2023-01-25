// 1. Odite na stranicu https://any-api.com/
// 2. Izaberite jedan public API sa liste koji podržava REST standard, pruža podatke u JSON obliku i ima upute za dohvaćanje sa XMLHttpRequest objektom (nativni JavaScript jezik).
// 3. Napišite JS kod koji se priključuje na taj API (po uzoru na primjer iz prijašnje lekcije).
// 4. Izaberite jedan endpoint u APIju nad kojim možete napraviti GET request.
// Ispišite rezultat u konzolu.

const request = new XMLHttpRequest();

const endpoint = "https://jsonplaceholder.typicode.com/posts";

request.open("GET", endpoint);
request.responseType = "json";

// const req = {
// 	ff: "sdfsd",
// 	onLoad: function() {
// 		console.log(this);
// 	}
// }

request.onload = function () {
  console.log(this.response);

  const body = document.querySelector("body");
  const ulNode = document.createElement("ul");
  body.appendChild(ulNode);

  this.response.forEach((element) => {
    const liNode = document.createElement("li");
    liNode.textContent = element.title;
    ulNode.appendChild(liNode);
  });
};

const fetchBtn = document.getElementById("fetchBtn");

fetchBtn.onclick = function () {
  request.send();
};
