// Fibonacci using Memoization

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 1 || n === 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

let fibs = fib(15);
console.log(fibs);

// we could have used an object also, instead of an array.
// The time complexity of this solution is O(n) which is way way better than o(2^n).
// Memoization is one of the flavours of dynamic programming another flavour is tablulation
// In memoization we are working top-down but in tabulation we work bottom-up
