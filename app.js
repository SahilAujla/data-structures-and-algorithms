function isOdd(arr) {
  if (arr.length === 0) {
    console.log("All the numbers are odd");
  } else if (arr[0] % 2 === 0) {
    console.log(`${arr[0]} number in the list is even`);
  } else {
    arr.shift();
    isOdd(arr);
  }
}

isOdd([12345, 43433, 324347, 5434345]);
