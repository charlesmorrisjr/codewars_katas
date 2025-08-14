/* Mini-PEDAC

Problem:
- An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Input:
- String

Output:
- Boolean

Rules (Explicit/Implicit/Questions):
- To be considered an isogram, input string should not contain any repeating letters
- Input string may or may not be an isogram
- Input string letter case does not matter
- Input strings will only contain alphabetical characters
- Empty input string counts as an isogram

Data Structure:
- String
- Boolean

Examples:
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

Algorithm:
- If input string is empty, return true
- Set input string to lowercase
- Create an empty Set and assign it to strChars
- Iterate through the input string
  - If strChars contains the character at the current index, return false
  - Add the character at the current index to strChars
- Return true

*/

function isIsogram(str) {
  if (str === "") return true;
  
  str = str.toLowerCase();
  let strChars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (strChars.has(str[i])) return false;
    strChars.add(str[i]);
  }
  
  return true;
}

function optimizedIsIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("aba"));

