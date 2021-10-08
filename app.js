function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let j = start;
  let i = start + 1;

  while (i <= end) {
    if (arr[i] < pivot) {
      j++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    i++;
  }
  [arr[start], arr[j]] = [arr[j], arr[start]];
  return j;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    pivotIndex = pivot(arr, left, right);
    // left side
    quickSort(arr, left, pivotIndex - 1);
    // right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([9, 8, 7, 6, 232, 53324, 233, -1]));
