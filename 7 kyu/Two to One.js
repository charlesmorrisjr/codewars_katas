/* Mini-PEDAC

Problem:
- Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Input:
- String
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- The returned string should include all unique letters from both input strings
- All input string letters will be lowercase
- Input strings may be empty
- Input strings may be identical
- Input strings will only contain letters


Data Structure:
- String

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Algorithm:
- Concatenate the input strings and assign a variable named combinedStr
- Split combinedStr into an array of characters
- Convert the array into Set
- Convert the Set back to an array
- Sort the array in ascending alphabetical order
- Join the array back into a string
- Return the string

*/

function longest(s1, s2) {
  let combinedStr = s1 + s2;
  let strArr = combinedStr.split('');

  let strSet = new Set(strArr);
  let newArr = [...strSet];

  newArr.sort();

  let newStr = newArr.join('');

  return newStr;
}

function optimizedLongest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"))   // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
// longest("aretheyhere", "yestheyarehere")
