// Fibonacci using Tabulation

function fib(n) {
  if (n === 2 || n === 1) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

let fibs = fib(15);
console.log(fibs);

// we are working bottom-up here as we are starting to calculate from fib(3) and working our way upto fib(n)
// by using Tabulation we can save a lot of space as we don't use call stack in this case but in memoization we do
// so we can also get an error of call stack size exceeded in memoization if the input is very large
// but using Tabulation we will not get that error
// Time complexity of this solution is also O(n)
// but the space complexity of this solution is better than that of memoization solution.
