/* Mini-PEDAC

Problem:
- Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- The input will always be two words separated by a single space
- The output should be the first letter of each word capitalized and separated by a dot
- The input may be in any case (uppercase, lowercase, mixed)

Data Structure:
- String

Examples:
Sam Harris => S.H
patrick feeney => P.F

Algorithm:
- Split the input string into two words
- Capitalize the first letter of each word
- Join the two letters with a dot in between

*/

function abbrevName(name){
  return `${name.split(" ")[0][0].toUpperCase()}.${name.split(" ")[1][0].toUpperCase()}`;
}
