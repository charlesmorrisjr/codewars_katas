/* Mini-PEDAC

Problem:
- Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Input:
- Array of boolean values
- Logical operator (string)

Output:
- Boolean

Rules (Explicit/Implicit/Questions):
- You can assume that you are only given numbers.
- You cannot assume the size of the array.
- You can assume that you do get an array and if the array is empty, return 0.

Data Structure:
- Array
- Boolean
- String

Examples:
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398


Algorithm:
- Iterate through the input array
  - Add the value at the current index to the accumulator
- Return the sum of the input array

*/

function sum (numbers) {
  return numbers.length > 0 ? numbers.reduce((accum, val) => accum + val) : 0;
}

console.log(sum());

