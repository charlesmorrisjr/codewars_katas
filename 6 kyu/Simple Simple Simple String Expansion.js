/* PEDAC
Simple Simple Simple String Expansion

** Problem **
Given a string containing alphanumeric characters, return the expansion of that string.
Each letter in the string should be repeated 'x' number of times, 'x' being the number
that precedes each letter.

For each number, the letters after that number should be repeated that number of times
until the next character is a number.

** Rules/Requirements **

Explicit:
- Given a string of numbers and letters, return the expansion of that string
- The returned string should not contain numbers. It should only contain letters.
- Each letter in the string is repeated the number of times that the number preceding
  that letter specifies
- If multiple letters exist after a number with no number in between them, each of those
  letters is repeated that number of times
- If there are consecutive numbers, the numbers are ignored until a letter exists after a number
- If there are consecutive letters, then the letters have no effect on the ones after them
- Code should work with lower and capital case letters

Implicit:
- All characters within the input string are numbers or letters


Questions:

- Input: a string
  - Contains alphanumberic characters
  - Numbers represent the number of times that the letter after each number should be repeated
- Output: a string
  - Contains the expanded letters 


** Examples **

stringExpansion('3D2a5d2f') === 'DDDaadddddff'

stringExpansion('3abc') === 'aaabbbccc'      // correct
stringExpansion('3abc') !== 'aaabc'          // wrong
stringExpansion('3abc') !== 'abcabcabc'      // wrong

stringExpansion('3d332f2a') === 'dddffaa'

stringExpansion('abcde') === 'abcde'

stringExpansion('') === ''


** Data Structure **

- A string containing the expanded string with repeated letters


** Algorithm **

- Declare and initialize an empty string variable named 'expandedStr'
- Declare an integer number variable 'repeatTimes' and initialize it to 1
- Create a loop and iterate through each character of the input string
  - For each character, check if it is a number
    - If so, set 'repeatTimes' to that number
  - For each character, check if it is a letter
    - If so, add that letter to 'expandedStr' 'repeatTimes' number of times
- Return 'expandedStr'

*/
function stringExpansion(s) {
  let expandedStr = '';
  let repeatTimes = 1;
  
  for (let char of s) {
    console.log(char);
  }
}

stringExpansion('3D2a5d2f');