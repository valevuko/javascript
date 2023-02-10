// 1. Pomoću jQueryja:
// 	- pratite resize događaj na korisničkom ekranu ispisujući širinu ekrana u konzolu
// 	- pratite kretanje miša i na ulazak miša preko retka tablice promijenite mu pozadinsku boju
// 	- na izlazak miša sa retka mora se pozadinska boja vratiti na prijašnju

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

  $("table tr").on("mouseover", function (event) {
    // $(this).css('backgroundColor', 'yellow'); // ili event.currentTarget
    $(this).addClass("hover");
  });

  $("table tr").on("mouseout", function (event) {
    // $(this).removeAttr('style');
    $(this).removeClass("hover");
  });
}

function addStripes() {
  $("table tr").removeClass("striped"); // nakon brisanja elemenata, zebra neće biti lijepo raspoređena -> obriši sve striped klase i postavi nanovo
  $("table tr:nth-child(2n+2)").addClass("striped");
}

// https://api.jquery.com/resize/
$(window).resize(onResize);

// callback funckija
function onResize() {
  console.log($(window).width());
}
