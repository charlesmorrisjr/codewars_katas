/* Mini-PEDAC

Problem:
- You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.

Input:
- String

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input string will not be empty
- Output is string of one or two characters
- If the string's length is even, return the middle 2 characters.
- If the string's length is odd, return the middle character.

Data Structure:
- String

Examples:
- "test" --> "es"
- "testing" --> "t"
- "middle" --> "dd"
- "A" --> "A"

Algorithm:
- Create a boolean variable named isOdd and assign it to the length of the input string modulo 2
- If isOdd is true
  - Create an integer variable named middleIdx and assign it to the length of the input string divided by 2
  - Extract the character at middleIdx and return it
- Else
  - Create an integer variable named middleIdx and assign it to the length of the input string divided by 2. Subtract one from this
  - Extract the character at middleIdx and return it and the character after it

*/

function getMiddle(s) {
  let isOdd = s.length % 2;

  if (isOdd) {
    let middleIdx = (s.length / 2);
    return s.slice(middleIdx, middleIdx + 1);
  } else {
    let middleIdx = (s.length / 2) - 1;
    return s.slice(middleIdx, middleIdx + 2);
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
