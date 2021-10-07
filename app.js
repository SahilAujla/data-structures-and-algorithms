function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;

  let middle = Math.floor((left + right) / 2);

  while (array[middle] != value) {
    if (array[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    if (left > right) {
      return -1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return middle;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 50));
