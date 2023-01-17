//događaji/eventi primjer:

var inputNode = document.querySelector("input");

function handleBlur() {
  console.log("blurred");
}

/* inputNode.addEventListener("blur", handleBlur);
 */
/* inputNode.addEventListener("focus", function () {
 console.log("focused");
}); */

inputNode.addEventListener("keyup", function (event) {
  console.log("Input clicked");
  console.log(event.target.value);
});

/* var divNode = document.querySelector("div");
divNode.addEventListener("clik", function () {
  console.log("Div clicked");
});
 */
