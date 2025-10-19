/* Mini-PEDAC

Problem:
- I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

Input:
- Array of integers
- Array of integers

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input array will always contain positive or negative integers
- Input array will not be empty

Data Structure:
- Array
- Integer

Examples:
arrayPlusArray([1, 2, 3], [4, 5, 6]) -> 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]) -> -21
arrayPlusArray([0, 0, 0], [4, 5, 6]) -> 15;

Algorithm:
- Iterate through array 1 and array 2 and add each integer to the next
- Return the sum of both arrays

*/

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((accum, cur) => accum + cur) + arr2.reduce((accum, cur) => accum + cur);
}

