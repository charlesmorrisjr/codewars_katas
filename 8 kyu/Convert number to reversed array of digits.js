/* Mini-PEDAC

Problem:
- Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Input:
- Integer

Output:
- Array

Rules (Explicit/Implicit/Questions):
- Input number should be non-negative
- Input number should always be an integer


Data Structure:
- Integer
- Array

Examples:
35231 => [1,3,2,5,3]
0     => [0]


Algorithm:
- Split input number into an array of characters
- Reverse the array
- Convert each character back into a number
- Return the array

*/

function digitize(n) {
  return String(n).split('').reverse().map(Number);
}
