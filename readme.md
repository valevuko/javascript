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

* ako ne varijablu ne imenujemo sa "var" neće ju prepoznati - navodno se ne koristi više :(

Imenovanje:
- moramo voditi računa o malim i velikim slovima, nije isto mojaVarijabla i mojavarijabla - ovo neće ni tumačiti
- mora početi slovom, podvlakom (_) ili znakom dolara $
- break, delete, cade, do, if, swich, var, catch, else, in, this, void, continue, new, null, for, with, default, Nan, Number, String,... -> JS zadržava određeni broj identifikatora kao ključne riječi samog jezika i ne smijemo ih koristiti kao identifikatore

Komentiranj u JS:
- //ako ih koristimo u jednoj liniji
- /*komentar*/ koristimo u više redova, ekstra zvjezdica u svakom retku se koristi u vizualne svrhe ali nije obavezan

JSDoc:
- standard komentiranja, 
- služi za posebno objašnjavanje funkcija
- primjer:
/**
*creates an instance of circle.
*
*@construcor
*author: Ivan
*@this {Circle}
*@param {number} r radius of zhe circle
*/
function Virvle(r) {
        this.radius = r;
        this.circumference = 2 * Math.PI * r
}
