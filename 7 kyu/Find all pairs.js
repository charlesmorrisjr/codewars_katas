/*
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0

If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)

Random tests: maximum array length is 1000, range of values in array is between 0 and 1000


** Mini-PEDAC

Problem:
- Given an array of integers, find the number of pairs that exist

Input:
- an array of integers

Output:
- a number

Rules (Explicit/Implicit/Questions):
- Given array contains only non-negative integers
- If array is empty or contains only one value, return 0
- If there are more pairs of a certain number, count each pair only once.

Data Structure:
- An array to hold a copy of the original array and modify
- A number hold the count of the number of pairs

Examples:
-
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

Algorithm:
- Check if the length of the given array is less than 2
  - If so, return 0
- Declare an object `numObj` and assign it to {}
- Declare a number variable `pairs` and initialize it to 0;
- Iterate through the given array
  - Check if the number at the current element exists in `numObj`
    - If so, add 1 to the corresponding number in `numObj`
    - If not, create a new key in `numObj` and assign it to 1
- Iterate through the values of `numObj`
  - Check if the current value is greater than 1
    - If so, add to `pairs` the value divided by 2 and rounded down to the nearest integer
- Return `pairs`

*/

function duplicates(arr) {
  if (arr.length < 2) return 0;
  
  let numObj = {};
  let pairs = 0;

  arr.forEach(num => {
    if (numObj.hasOwnProperty(num)) {
      numObj[num] += 1;
    } else {
      numObj[num] = 1;
    }
  })

  Object.values(numObj).forEach(value => value > 1 && (pairs += Math.floor(value / 2)));
  
  return pairs;
}

console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));   // 4