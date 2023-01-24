//1
//napiši funkciju koja će imati x, y i simbol parametre
//u funkciji napisati provjeru da brojevu ne smiju biti negativni tj manji od 0
// ako je simbol + vrati zbroj x i y, ako je simobl - odzumi x i y

function houses (x, y, simbol)
if( x < 0 || y < 0) {
    console.log("Brojevi ne smiju biti negativni")
} if (simbol === "+") {
    var pozitivni = x + y
    return pozitivni;
} if (simbol === "-") {
    var negativni = x - y
    return negativni;
}
var rezultat = (1,  7, "-");
console.log(rezultat);

//2

