// By default the javascript sort method compares the elements by the unicode characters of string, so it only works on strings properly
// to make it work on numbers or by any other logic we need to pass a callback function where we can tell how to compare
// if the function returns a negative number then a comes before b, if it return a positive number then a comes after b, if it returns 0 then both are equal

let soretedByString = [
  "Sahil",
  "Aujla",
  "Algorithms",
  "Data Structures",
].sort();

console.log(soretedByString);

// It cannot compare small letters with capital ones so the order will break in that case

let comparedSmallNLarge = [
  "sahil",
  "Aujla",
  "algorithms",
  "Data Structures",
].sort();

console.log(comparedSmallNLarge);

// telling it to compare by numbers

function numberCompare(a, b) {
  return a - b;
}

let compareByNumbers = [1, 3, 21, 6546, 4334, 64543, 34].sort(numberCompare);

console.log(compareByNumbers);

// if we just reverse a and b (b - a) the order would be reversed

function numbersCompare(a, b) {
  return b - a;
}

let comparesByNumbers = [1, 3, 21, 6546, 4334, 64543, 34].sort(numbersCompare);

console.log(comparesByNumbers);

// Compare by length of string

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

let comparesByLen = ["sahil", "Aujla", "algorithms", "Data Structures"].sort(
  compareByLen
);

console.log(comparesByLen);

// if we just reverse (str1.length - str2.length) to (str2.length - str1.length) then the order would be reversed
