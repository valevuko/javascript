// brojanje riječi:
var text = "  Slavonia is a land of legends, with its myths and secrets proudly passed down through the generations.";
var slavonija = text.length;
console.log(slavonija);

//na kojoj pozici se nalazi koja riječ
//indexOff - vraća prvi indeks na kojem se određeni element može pronaći u nizu ili -1 ako nije prisutan

var proudly = text.indexOf("proudly");
console.log(proudly);

// substring - vraća dio niza od početnog indeksa do i isključujući završni indeks ili do kraja niza ako nije naveden završni indeks
var proudly = text.substring(proudly);
console.log(proudly);

//replace - vraća novi niz s jednim, nekim ili svim podudaranjima uzorka zamijenjenim zamjenom
var zamijeni = text.replace("proudly", "honored");
console.log(zamijeni);

//dodavanje teksta

var dodavanjeTexta =
  text +
  " " +
  "Here the locals fiercely uphold their traditions, such as harvest festivals, traditional dresses and the popular local music.";
console.log(dodavanjeTexta);

//promjena veličine slova: UPPERCASE

var bigLetter = text.toUpperCase();
console.log(bigLetter);

//trin - micanje razmaka
var trimText = text.trim();
console.log(trimText);

// charAt - vraćanje znaka na poziciju

var test = text.charAt(25);
console.log(test);
