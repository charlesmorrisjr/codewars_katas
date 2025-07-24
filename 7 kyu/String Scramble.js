/* Mini-PEDAC

Problem:
- Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

Input:
- 'abcd', [0, 3, 1, 2]

Output:
- 'acdb'

Rules (Explicit/Implicit/Questions):
- The given string can contain any character?
- The array will only contain integers
- The number of elements in the array will match the number of characters in the string
- Both the string and the array will contain valid characters (A-Z, a-z, or 0-9)

Data Structure:
- A string of single characters
- An array of integers

Examples:

'abcd', [0, 3, 1, 2] => 'acdb'

if i = 0 then
  arr[0] = 0, so
  'a' => newArr[0]

if i = 1 then
  arr[1] = 3, so
  'b' => newArr[3]

...


Algorithm:
- Create an array 'scrambledArr' that is the length of the string
- Iterate from 0 to end of the string using index variable i
  - Take the integer in the given array at i and set this to 'newIndex'
  - Take the character at i in the given string and insert it at newIndex in scrambledArr
- Combine the individual elements of the array into a string. Set this to 'scrambledStr'
- Return scrambledStr

*/

function scramble(str, arr) {
  let scrambledArr = new Array(arr.length);

  for (let i = 0; i < str.length; i++) {
    let newIndex = arr[i];
    scrambledArr[newIndex] = str[i];
  }

  let scrambledStr = scrambledArr.join('');

  return scrambledStr;  
};

function improvedScramble(str, arr) {
  let scrambledArr = new Array(arr.length);

  for (let i = 0; i < str.length; i++) {
    scrambledArr[arr[i]] = str[i];
  }

  return scrambledArr.join('');
};

console.log(improvedScramble('abcd', [0, 3, 1, 2]));

