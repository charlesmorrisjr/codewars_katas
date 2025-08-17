/* Mini-PEDAC

Problem:
- In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Input:
- Number

Output:
- Number

Rules (Explicit/Implicit/Questions):
- If the number is positive, return the negative version of that number.
- If the number is negative, return it as is.

Data Structure:
- Number

Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Algorithm:
- If the input number is negative or zero, return the input number
- Else, return the input number changed to zero

*/

function makeNegative(num) {
  return num <= 0 ? num : -num;
}

console.log(makeNegative(1));    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0
console.log(makeNegative(0.12)); // return -0.12