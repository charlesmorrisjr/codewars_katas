/* PEDAC

Problem:
- Given an array of integers and a number, return an array of two integers that contains the indices of two integers that when added together will equal the given number

Input:
- an array of integers and a number

Output:
- an array of integers

Rules (Explicit/Implicit/Questions):
- Given array contains only numbers
- Given array will always contain at least two numbers
- Target will always be the sum of two numbers in the given array
- If there are multiple answers, any valid solutions will be accepted
- Returned indices must be of two different numbers in the array, not the same number

Examples:

[1, 2, 3], 4 => [0, 2] or [2, 0]

Data Structure:
- An array to hold the returned indices

Algorithm:
- Iterate through the given array, but not to the last index, using index variable `idx1` 
  - Iterate through the given array using index variable `idx2` starting from `idx1` plus 1
    - Check if the number in the given array at `idx1` plus the number at `idx2` equal the given target number
      - If so, return an array containing `idx1` and `idx2`

*/

function twoSum(numbers, target) {
  for (let idx1 = 0; idx1 < numbers.length - 1; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < numbers.length; idx2++) {
      if (numbers[idx1] + numbers[idx2] === target) return [idx1, idx2];
    }
  }
}

console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]