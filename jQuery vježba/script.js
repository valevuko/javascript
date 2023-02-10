// 1. Uključite jQuery biblioteku na vašu stranicu preko CDN-a ako vec niste.
// 2. Pri završetku loadanja stranice i rezultata, pomoću jQueryja:
//  	- kreirajte izmjenjujući zebra uzorak na redovima tablice
// 	- dodajte stil na sve header elemente tablice: boju darkBlue
// 3. Nakon 2 sekunde:
// 	- maknite sve redove Pokemona cija imena pocinju sa slovom p
// 	- popravite zebra uzorak

// window.onload = function() {
// }

// document.getElementById("results");

// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow");
  xhr.onload = fillList;
  xhr.send();
});

function fillList() {
  const data = JSON.parse(this.response);
  console.log(data.pokemon_species);
  const source = document.getElementById("pokemon-templates").innerHTML;
  const template = Handlebars.compile(source);

  const context = { pokemons: data.pokemon_species.slice(0, 20) };
  const html = template(context);

  document.getElementById("results").innerHTML = html;

  // manipulacije nad tablicom možemo raditi tek nakon što je tablica "umetnuta" u div#results
  afterRender();
}

function afterRender() {
  // document.querySelectorAll('table th')
  $("table th").css("color", "darkBlue");

  addStripes();

  setTimeout(() => {
    const links = $("table td a").filter(function () {
      return this.textContent.startsWith("p");
    });

    links.closest("tr").remove();
    addStripes();
  }, 2000);
}

function addStripes() {
  $("table tr").removeClass("striped"); // nakon brisanja elemenata, zebra neće biti lijepo raspoređena -> obriši sve striped klase i postavi nanovo
  $("table tr:nth-child(2n+2)").addClass("striped");
}
