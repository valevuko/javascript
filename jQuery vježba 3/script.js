// 1. Prepišite XHR poziv u jQuery AJAX poziv.
// 2. Dodajte funkciju koja se poziva na neuspješan kraj API poziva.
//    Ta funkcija ispisuje poruku na ekranu sa dodatnim infomacijama o greški.

// window.onload = function() {
// }

// document.getElementById("results");

// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {
  // http://api.jquery.com/jquery.ajax/
  $.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow", {
    success: function (data, textStatus, jqXHR) {
      fillList(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $("<div></div>")
        .insertAfter($("#pokemon-templates"))
        .text("Error: " + textStatus);
    },
  });
});

function fillList(data) {
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
