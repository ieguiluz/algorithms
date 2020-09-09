function openOrSenior(data) {
  return data.map((array) => {
    return array[0] >= 55 && array[1] > 7 ? "Senior" : "Open";
  });
}

console.log(
  openOrSenior([
    [61, 8],
    [55, 7],
    [55, 27],
  ])
);

function anotherOpenOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}
