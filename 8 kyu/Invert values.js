/* Mini-PEDAC

Problem:
- Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

Note: Only valid inputs will be given.

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
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []


Algorithm:
- Return a new array with the inverse of each element in the input array

*/

function invert(array) {
   return array.map(num => -num);
}

