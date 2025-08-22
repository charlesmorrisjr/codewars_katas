/* Mini-PEDAC

Problem:
- Write a function which calculates the average of the numbers in a given array.
Empty arrays should return 0.

Input:
- An array of numbers

Output:
- Number

Rules (Explicit/Implicit/Questions):
- Input will only contain numbers
- Input may be an empty array

Data Structure:
- Array
- Number

Examples:
[1,2,3,4], 2.5

Algorithm:
- If length of the input array is 0, return 0
- Iterate through the array
  - Add the integers of the array together
- Divide the sum of the integers by the number of elements in the array
- Return the result

*/

function findAverage(array){
  if (array.length === 0) return 0;
  return array.reduce((accum, val) => accum + val) / array.length;
}

console.log(findAverage([1,2,2]));
