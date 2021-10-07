function factorial(num) {
  let product = 1;
  for (let i = num; i > 1; i--) {
    product = product * i;
  }
  return product;
}

let fact = factorial(10);
console.log(fact);
