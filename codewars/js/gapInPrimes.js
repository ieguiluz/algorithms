// level: 5kyu
// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes

/**
 * Solution:
 * a for loop between the limits given
 */

function gap(g, m, n) {
  let min = 0;

  for (let i = m; i <= n; i++) {
    if (i % 2 !== 0 && isPrimeNumber(i)) {
      if (i - min === g) return [min, i];
      min = i;
    } else continue;
  }

  return null;
}

function isPrimeNumber(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (Number.isInteger(number / i)) return false;
  }

  return true;
}

console.log(gap(16, 3, 2000)); // [1831, 1847]
console.log(gap(16, 3, 2000)); // null
