var count = 2;

while (count < 20) {
  count++;

  if (count % 9 === 0) {
    continue;
  }
  console.log(count);
}

var varOne = 0;

for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);
