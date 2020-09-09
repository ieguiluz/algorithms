// level: 7kyu
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized
// in the same way he originally typed them.

/**
 * Solution
 */

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("hello world".toJadenCase());
console.log("always is never and never is always".toJadenCase());
