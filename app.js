function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (j === 0) {
        if (arr[0] > current) {
          arr[j + 1] = arr[j];
          arr[0] = current;
          break;
        }
      }

      if (arr[j] < current) {
        arr[j + 1] = current;
        break;
      }
      arr[j + 1] = arr[j];
    }
  }
  console.log(arr);
}
insertionSort([232, 343, 323434, 32232, 6]);
