// 1.
// var x = 2; // varijable koja je definirana van funkcije je vidljiva i unutar funkcije

// function neki() {
// 	var x = 1; // varijabla koja je definirana unutar funkcije nije vidljiva van funkcije
// 	return x;
// }

// console.log(neki());
// console.log(x);

// 2.
/**************/

// console.log(this);

// function func() {
// 	console.log(this);
// }

// func();

// var person = {
// 	name: "Eve",
// 	hello: function() {
// 		console.log("Hello " + this.name);
// 	}
// }

// person.hello();

/**************/
// 3.
// var y = function(x) { // function expression anonimne funkcije
// 	return x;
// }

// y("Nešto")

/******** */
// 4.

// function vratiNesto(x) {
// 	var y = x(1); // poziv funkcije x s argumentom 1 (jer su zagrade i argument)
//    	return y; // funckija vraća rezultat poziva te funkcije
// }

// function vratiMene(z){
// 	return z/2;
// };

// var y = vratiNesto(vratiMene); // 0.5

/**
 * 1. function vratiNesto(vratiMene)
 *
 * 2. var y = vratiMene(1) --> 0.5
 *
 * 3. return 0.5
 *
 * 4. var y = 0.5;
 */

// 5. IIFE

// (function() {
// 	var x = 7;

// 	function neski() {

// 	}
// })();

// 1.
// 1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?
// 2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

// var x = "John Doe";
// function vratiNesto(name) {
//    var x = name;
//    function f() { return x; }
//    return f;
// }
// var y = vratiNesto("Jane Doe");
// var z = vratiNesto()();

// // var ff = function(name) {

// // }

// // ff(x);

// (function(name) {
// 	var x = name;
// 	function f() { return x; }
// 	return f;
// })(x)

/*** ******* */
// 7.
// 2. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta). Nadite prototip tog prototipa. Ispisite ih.
// 3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".

// var character = {
// 	name: 'Eleven',
// 	show: 'Stranger Things',
// 	portrayedBy: 'Millie Bobby Brown'
// }

// const quotes = [
// 	'I\'m going to my friends. I\'m going home.',
// 	'Pure fuel! PURE FUEL! WOO!',
// 	'See? Zoomer.',
// 	'Bitchin.'
// ];

// // console.log(character);
// // console.log(Object.getPrototypeOf(character));

// const characterPrototype = {
// 	getRandomQuote() {
// 		return quotes[Math.floor(Math.random()*quotes.length)]
// 	},
//   };

// const carl = Object.create(characterPrototype, { name: {value: 'Eleven' } });

// console.log(carl);
// console.log(carl.name);
// console.log(carl.getRandomQuote());

/*********** */
// 8.
/* function Person(name) { // kontruktor
	this.name = name;
	this.hello = function() {
		return "Hello " + this.name;
	}
}

var person = new Person("Jošua"); // instanciranje objekta
console.log(person.hello());

var person1 = new Person("Hrvoje");
console.log(person1.hello()); 
 */

//ekstendati instanciranje prototipa inicijalizacije varijabli globalnog objekta - ne razumijem
