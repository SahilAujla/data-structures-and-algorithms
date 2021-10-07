function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  console.log(arr);
}

bubbleSort([232, 343, 323434, 32232, 6]);
