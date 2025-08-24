/* Mini-PEDAC

Problem:
- Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input can contain non-alphabetical characters
- Input may be an empty string
- My function should not mutate the input string

Data Structure:
- String

Examples:
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

Algorithm:
- Split the string into an array of characters
- Iterate through each character of the array
  - If the character at the current index is lowercase, convert to uppercase
  - Else If the character at the current index is uppercase, convert to lowercase
- Join the array of characters and return the string

*/

String.prototype.toAlternatingCase = function () {
  return [...this].map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
}

console.log("HeLLo WoRLD".toAlternatingCase());
