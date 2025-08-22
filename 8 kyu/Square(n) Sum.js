/* Mini-PEDAC

Problem:
- Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9.

Input:
- An array of integers

Output:
- Number

Rules (Explicit/Implicit/Questions):
- Input will only contain integers
- Input may be an empty array

Data Structure:
- Array
- Integer

Examples:
For example, for [1, 2, 2] it should return 9 because 
1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9.

Algorithm:
- Iterate through the array
  - For each integer, square it and add the result to the total
- Return the result

*/

function squareSum(numbers){
  return numbers.reduce((accum, val) => accum + (val ** 2), 0);
}

console.log(squareSum([1,2,2]));
