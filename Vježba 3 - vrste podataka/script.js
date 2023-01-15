var text = " Lorem ipsum dolor sit amet";
var textLength = text.length;
console.log(1, textLength);

var sitI = text.indexOf("sit");
console.log(sitI);
var sitvar = text.substring(sitI);
console.log(2, sitvar);

var ametA = text.replace("amet", "elit");
console.log(3, ametA);

var newtext = text + ", " + "consectetur adipiscing elit";
console.log(4, newtext);

var bigletter = text.toUpperCase();
console.log(5, bigletter);

var spacevar = text.trim();
console.log(6, spacevar);

var test = text.charAt(12);
console.log(7, test);

//

var noviText = "Valentina";
console.log(noviText.replace("Valentina", "Davor"));
