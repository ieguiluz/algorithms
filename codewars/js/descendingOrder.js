// level: 7kyu
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Your task is to make a function that can take any non-negative integer as an
// argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

/**
 * Solution
 */

function descendingOrder(n) {
  let numbers = (n + "").split("");
  let highestToLowest = numbers.sort((a, b) => b - a).join("");

  return Number(highestToLowest);
}

console.log(descendingOrder(123456789));

function anotherDescendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
