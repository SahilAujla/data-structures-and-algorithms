function merge(arr1, arr2) {
  let mergedArray = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    } else {
      mergedArray.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

mergeSort([1, 5, 87, 34, 21, 45, 2, 9, 6]);
// the space complexity of this is o(n) but if you want merge sort with O(1) space complexity then search
// on google for in-place mergeSort javascript
