import hello, { getPokemons } from "./hello"; // budući da smo u modulu (typers "module" je postavljen u html-u) možemo koristiit import izraz

document.body.innerHTML = hello();

function getPokemon() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://...");

  return [];
}
