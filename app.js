function hash(string, arrayLen) {
  let total = 0;
  for (let char of string) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// Problems with this hash function

// 1. works only with strings
// 2. has a time complexity of O(n)
// 3. could be more random -- because sometimes we get the same numbers
