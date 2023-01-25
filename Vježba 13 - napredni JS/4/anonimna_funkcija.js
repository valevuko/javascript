// 1. Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka, a izvana će se moći pristupiti dvjema metodama modula: walk() i getTotalSteps().

// 2. Exportajte modul iz datoteke.

// Common JS - CJS - NodeJS, ne radi u web pregledniku
// u web pregledinku radi ESM - EcmaScript Modules

var steps = 0;
var module1 = {
  // steps: 0,
  getTotalSteps: function () {
    return steps;
  },
  walk: function () {
    steps++;
  },
};

// var module1 = (function() {
// 	var steps = 0;
// 	return {
// 		getTotalSteps: function() {
// 			return steps;
// 		},
// 		walk: function() {
// 			steps++;
// 		}
// 	}
// })();

export default module1;
