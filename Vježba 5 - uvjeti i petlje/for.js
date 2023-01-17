for (var count = 0; count < 10; count++) {
  if (count !== 3) {
    console.log(count);
  }
}
// možemo napisati i ovako te dobijemo isti rezultat:

for (var count = 0; count < 10; count++) {
  if (count === 3) continue;
  console.log(count);
}

// break izjava izlazi iz petlje
for (var count = 0; count < 10; count++) {
  if (count === 3) break;
  console.log(count);
}
