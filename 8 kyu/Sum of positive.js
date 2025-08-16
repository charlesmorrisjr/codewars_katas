/* Mini-PEDAC

Problem:
- You get an array of numbers, return the sum of all of the positives ones.

Input:
- Array

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input will be an array that can contain integers
- If input array is empty, return zero

Data Structure:
- Integer

Examples:
[1, -4, 7, 12] => 1+7+12=20

Algorithm:
- If the input array is empty, return zero
- Create an integer variable named arrSum
- Iterate through the input array
  - If the integer at the current index is greater than zero, add it to arrSum
- Return arrSum

*/

function positiveSum(arr) {
  // Start with an initial value of 0 for the accumulator
  // and add only positive numbers to it in case the first element is negative
  return arr.reduce((accum, curVal) => accum + (curVal > 0 ? curVal : 0), 0);
}

console.log(positiveSum([-1,-2,-3,-4,-5])); // 0

