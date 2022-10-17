/*
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.
*/

/* Mini-PEDAC

Problem:
- Given two words, how many letter do you have to remove from both words to make them anagrams?

Input:
- a string
- a string

Output:
- a number

Rules (Explicit/Implicit/Questions):
- Both inputs are strings.
- The given strings may be empty
- The given strings may not need any letters removed to make them anagrams
- All input strings will be lowercase letters
- Input strings will only contain alphabetical characters
- Don't worry about upper or lower case

Data Structure:
- An array to store the characters of each word being checked
- A number to hold the total numbers of letters removed from both strings

Examples:
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

codewars
hackerrank

codewars
cear

hackerrank
codewars

hackerrank
acer


Algorithm:
- Declare an array `strArr`
- Declare a number variable `totalLetters` and assign it to 0
- Split the first input string into its individual characters and assign that array to `strArr`
- Iterate through the second input string
  - Check if the character at the current iteration exists in `strArr`
    - If so, remove that character from `strArr`
- Assign the length of `strArr` to `totalLetters`
- Split the second input string into its individual characters and assign that array to `strArr`
- Iterate through the first input string
  - Check if the character at the current iteration exists in `strArr`
    - If so, remove that character from `strArr`
- Take the length of `strArr` and add that to `totalLetters`
- Return `totalLetters`

*/

function anagramDifference(str1, str2) {
  let totalLetters = removeCharacters(str1, str2);
  totalLetters += removeCharacters(str2, str1);

  return totalLetters;
}

function removeCharacters(str1, str2) {
  let strArr = str1.split('');

  for (let char of str2) {
    if (strArr.includes(char)) {
      strArr.splice(strArr.indexOf(char), 1);
    }
  }

  return strArr.length;
}

console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10
