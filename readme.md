4 načina na koji možemo dodati JS:

1. unutar heada - očitava se skripta po redu i može se dogoditi da ne očita podatak koji tražimo
2. nakon sadržaja koji tražimo iznad bodya
3. asyns - sve se izvršava kao i običnim html-om, ali će se downloadati scripta i za to vrijeme nastavi sa parsanjem HTML-a pa zato nekad bude prikazan consol nekad ne,
   downloada se dokument paralelno i tek kad ju završi će ju vidjeti
4. defer - skripta se downloada paralelno sa parsanjem HTML dokumenta, HTML parsanje ide dok kraja pa će provjeriti je li downloadanje završeno te će tek na kraju očitati script.

Znakovi jednakosti:
= - dodavanje varijabli (pridjeljivanje) vrijednosti
== - provjera vrijednosti
=== - provjera tipa podatka i vrijednosti

- najveći zajebi su dvostruki!

Deklaracija:
var i -> deklaracija - vrijednosti varijabli nakon deklaracije su undefined
var i = 1 -> dekaracija i inicijalizacija

- ako ne varijablu ne imenujemo sa "var" neće ju prepoznati - navodno se ne koristi više :(

Imenovanje:

- moramo voditi računa o malim i velikim slovima, nije isto mojaVarijabla i mojavarijabla - ovo neće ni tumačiti
- mora početi slovom, podvlakom (\_) ili znakom dolara $
- break, delete, cade, do, if, swich, var, catch, else, in, this, void, continue, new, null, for, with, default, Nan, Number, String,... -> JS zadržava određeni broj identifikatora kao ključne riječi samog jezika i ne smijemo ih koristiti kao identifikatore

Komentiranj u JS:

- //ako ih koristimo u jednoj liniji
- /_komentar_/ koristimo u više redova, ekstra zvjezdica u svakom retku se koristi u vizualne svrhe ali nije obavezan

JSDoc:

- standard komentiranja,
- služi za posebno objašnjavanje funkcija
- primjer:
  /\*\*
  \*creates an instance of circle.

* *@construcor
  *author: Ivan
  _@this {Circle}
  _@param {number} r radius of zhe circle
  _/
  function Virvle(r) {
  this.radius = r;
  this.circumference = 2 _ Math.PI \* r
  }
  Prettier:

- ako želimo nekakvu promjenu na .prettierrc moramo u istoj mapi kreirati dokument .prettierrc i u njemu napisati {"što želimo promijeniti"}.
- "printWidth": 80, to znači da će nam iz ovoga: var firstName, lastName, price, discount, fullPrice, hnjkdagakgujabgbvakbkvakbvkbakbv
  prebaciti u ovo:
  var firstName,
  lastName,
  price,
  discount,
  fullPrice,
  hnjkdagakgujabgbvakbkvakbvkbakbv;
- "printWidth": 120 - najčešće se danas koristi 120 znakova
- ako imamo puno riječi koje trebamo zamijeniti ctr+f, na strelicu da se razlista i replace

TIPOVI PODATAKA:

1. PRIMITIVNI: brojevi, tekst, boolean vrijednost, undefined
2. OBJEKTNI: objekti, nizovi, funkcije, null

- također ih možemo podijeliti u promjenjive i nepromijenjive: - promjenjivi: objektni tipovi podataka - nepromjenjivi: primitivni i null

1. PRIMITIVNI TIPOVI PODATAKA:

BROJEVI: (number)

- integer - cijeli broj
- float - decimalni broj, svi brojevi u JS-u su floating poing tip broja i spremaju se u 64-bitnom zapisu

TEKST:

- sprema se u string tip podatka ("navodnici"), mogu biti i jednostruki i dvostruki

BOOLEAN:

- true i false - predstavlja istinu ili neistinu, uključeno i isključeno, da ili ne, ne može biti nešto između ili je ili nije
- truthy i false - vrijednosti koje se konvertiraju u true i false kada izraz očekuje Boolean vrijednost
  Primjeri:
  var x = Boolean (bull); // x = false
  var x = Boolean ({}); // x = true

NULL i UNDEFINED:

- null je ključna riječ koju koristimo za odsutnost neke vrijednosti (var x = null;)
- undefined je vrijednost varijable koje nisu inicijalizirana i vrijednost koju dobivamo kada pokušamo dohvatiti vrijednost objekta,
  ali dobit ćemo undefined i za izvršenje funkcije koja ne vraća nikakvu vrijednost (var x;) x (undefined)

PRIMJERI:
typeof "John" // "string" - tekst
typeof 3.14 // "number"
typeof Nan // "number" (Nan -> not a number)
typeof false // "boolean"
typeof [1,2,3,4] // "object"
typeof {name: 'John', age:34} //"object" - pravi objekt

Automatska konverzija podataka

- JS obavlja mnoge konverzije ovisno o kontekstu u kojem se podataka koristi te operatoru
- znak + može biti zbrajanje ili konkatenacija (pripajanje)
- ako imamo + i stringove i brojeve JS će ih pripojiti a ne zbrojiti (string + broj = string uvijek)
- znak - je uvijek minus
- 'foo' + + 'bar' ='fooNan' - jedan + će raditi pripajanje, drugi plus pretvoriti drugi string u broj i zato dobijemo 'fooNan'

STRNG

- brojanje pozici počinje od nule
- myString = "Lorem ipsum" - L je na poziciji 0 i brojanje uvijek kreće od 0

KONKATENACIJA

Spajanje dva ili više stringova koristi se znak +
x = "Hello, " + "World";
x = "Hello, " + 5;

    var x = "Ovo je vrlo dugi string" +
        "koji je u dva reda " +
        "jer se inače ne može čitati";

          ILI
    var x = "Ovo je vrlo dugi string \
          "koji je u dva reda \
          "jer se inače ne može čitati.";

Ako unutar stringa imamo još jedne navodnike moramo koristiti \, npr: var x = "Ovo je moj \"string\"";
NAPOMENA: ako trebamo koristiti navodnike unutar stringa možemo koristiti dvostruke unutar jednostrukih i obrnute te će raditi
