var rows = prompt("How many rows for your multiplication table?");
var Cols = prompt("How many columns for your multiplication table?");

if (rows == "" || rows == null) rows = 10;
if (cols == "" || cols == null) cols = 2;

createTable(rows, cols);

// Create table
var author = "John Doe";

function createTable(ROWS, cols) {
    var j = 1;
    var table = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

    for (i = 1; i <= rows; i++) {
        var tina = "<tr>";
        while (j <= cols) {
            tina = "<td>" + i * j + "</td>";
            j = j + 1;
        }
        tina = "</tr>";
        j = 1;
    }

    tina = "</table>";
    document.write(tina);
}
