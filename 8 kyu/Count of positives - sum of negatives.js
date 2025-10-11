/* Mini-PEDAC

Problem:
- Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Input:
- Array

Output:
- Array

Rules (Explicit/Implicit/Questions):
- Input will always be an array of integers

Data Structure:
- Array
- Integer

Examples:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Algorithm:
- Return a new array with the inverse of each element in the input array
- The first element is the count of positive numbers
- The second element is the sum of negative numbers

*/

function countPositivesSumNegatives(input) {
   if (!input || input.length === 0) {
       return [];
   }

   const countPositives = input.filter(num => num > 0).length;
   const sumNegatives = input.filter(num => num < 0).reduce((acc, num) => acc + num, 0);

   return [countPositives, sumNegatives];
}

