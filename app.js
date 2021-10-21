// Fibonacci using recursion

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

let fibOf5 = fib(15);
console.log(fibOf5);

// The big-O of this is 2^n (to be exat 1.6^n)
// because fibonacci series has both --> overlapping subproblems and optimal substructure
// so this can be solved in a much better way using dynamic programming instead of plain old recursion.
// we can use memoization for solving this so we don't have to calculate fib(4) or fib(5) or fib(3) each time.
// we can just solve them once and use their solution values next time.
