/* Mini-PEDAC

Problem:
- Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Input:
- Integer
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input integer is non-negative
- Input string can be empty

Data Structure:
- Integer
- String

Examples:
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Algorithm:
- Take the input string, concatenate it into a new string variable [input integer] times, and return the new string

*/

function repeatStr (n, s) {
  return s.repeat(n);
}

