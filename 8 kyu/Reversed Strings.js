/* Mini-PEDAC

Problem:
- Complete the solution so that it reverses the string passed into it.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input string may be an empty string

Data Structure:
- String

Examples:
'world'  =>  'dlrow'
'word'   =>  'drow'

Algorithm:
- Split the input string into an array of characters
- Reverse the array of characters
- Join the array of characters back into a string
- Return the string

*/

function solution(str){
  return str.split('').reverse().join('');
}

