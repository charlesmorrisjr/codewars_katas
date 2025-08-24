/* Mini-PEDAC

Problem:
- This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

Input:
- Integer

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input is an integer
- Integer may be positive, negative, or zero

Data Structure:
- Integer

Examples:
- simpleMultiplication(2) // 16
- simpleMultiplication(1) // 9
- simpleMultiplication(8) // 64

Algorithm:
- If modulo 2 of input number is 1, multiply the input number by 9 and return it
- Else if modulo 2 of input number is 0, multiply the input number by 8 and return it

*/

function simpleMultiplication(number) {
  if (number % 2 === 1) {
    return number * 9;
  } else if (number % 2 === 0) {
    return number * 8;
  }
}

function optimizedSimpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8;
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
