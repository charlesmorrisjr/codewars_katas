/* Mini-PEDAC

Problem:
- Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Input:
- Integer

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input integer can be positive, negative or zero

Data Structure:
- Integer
- String

Examples:
2 => "Even"
-7 => "Odd"
0 => "Even"

Algorithm:
- Find the remainder of the input integer when using the modulo operator and the number 2
- If the remainder is 1, return "Odd"
- If the remainder is 0, return "Even"

*/

function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

