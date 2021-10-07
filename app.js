// Recursion --> A function that calls itself

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let fact = factorial(8);
console.log(fact);
