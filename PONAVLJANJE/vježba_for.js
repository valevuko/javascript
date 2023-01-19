/* 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
2. Vratite tu riječ iz funkcije i spremite u varijablu.
3. Ispišite varijablu u konzoli.

podsjetnik funkcija:

function fridaysClass(rigoletoStatus) {
if (rigoletoStatus === true) {
muteVjeran === true;
return muteVjeran;
}
}
 */

//1
var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

function najduzaRijec(arr) /*parametar*/ {
  var najduzaRijec = "";
  for (i = 0; i < najduzaRijec; i++) {
    if (arr[i] > najduzaRijec.length) najduzaRijec = arr[i]; //uspoređujemo da li je duljina stringa veća od najdulje riječi
  }
  return najduzaRijec;
  // kad bi napisali i <=2 provjeravao bi svaki drugi element
}
var najduzaRijec = nadiNajduzuRijec(words);
console.log(najduzaRijec);
