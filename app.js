// this mergesort is written by me and is easy to understand as I have used one extra function that is splitHalves
// we can just use mergeSort function and do it but it is easy to understand

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

function splitHalves(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  return merge(
    splitHalves(arr.slice(0, middle)),
    splitHalves(arr.slice(middle))
  );
}

function mergeSort(arr) {
  console.log(splitHalves(arr));
}

mergeSort([1, 5, 87, 34, 21, 45, 2, 9, 6]);

// all the sorting algorithms actually returns sorted arrays
// but here I am printing them to see the result

// the space complexity of this is o(n) but if you want merge sort with O(1) space complexity then search
// on google for in-place mergeSort javascript
