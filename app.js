function hash(string, arrayLen) {
  let total = 0;
  let primeNumber = 31;
  for (let i = 0; i < Math.min(string.length, 100); i++) {
    let char = string[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * primeNumber + value) % arrayLen;
  }
  return total;
}

// Problems with this hash function

// 1. works only with strings

// Improvements

// 1. has a time complexity of sort of O(1) because max times the loop runs is 100
// 2. is a little more random because we used prime numbers
