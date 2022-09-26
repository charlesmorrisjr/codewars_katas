/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0   //# no characters repeats more than once
"aabbcde" -> 2   //# 'a' and 'b'
"aabBcde" -> 2   //# 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1   //# 'i' occurs six times
"Indivisibilities" -> 2   //# 'i' occurs seven times and 's' occurs twice
"aA11" -> 2   //# 'a' and '1'
"ABBA" -> 2   //# 'A' and 'B' each occur twice

*/
/* PEDAC


** Problem **
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

** Rules/Requirements **

Questions:
-

Explicit:
- Given a string of alphanumeric characters
- Return the number of case-insensitive alphabetic characters and numeric digits that occur more than once in the input string
- The input can only contain alphabet characters or numeric characters
- Alphabetic characters can be upper or lower case

Implicit:
-

- Input: a string
  - containing letters and numbers
- Output: an integer number
  - number of characters that are found in the input string more than once


** Examples **
"abcde" -> 0   //# no characters repeats more than once
"aabbcde" -> 2   //# 'a' and 'b'
"aabBcde" -> 2   //# 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1   //# 'i' occurs six times
"Indivisibilities" -> 2   //# 'i' occurs seven times and 's' occurs twice
"aA11" -> 2   //# 'a' and '1'
"ABBA" -> 2   //# 'A' and 'B' each occur twice

** Data Structure **

- an integer that contains the number of characters that are repeated
- an array that contains the characters that were already checked


** Algorithm **

- Declare and initialize an integer variable 'count' to 0
- Declare and initialize an empty array 'usedLetters'
- Iterate through each character of the input string
  - Check if the character has already been searched for by checking if the lowercase version of that character exists in the array 'usedLetters'
    - If not, for each character, check if the character appears in the string more than once
      - Using a regular expression along with the .match() method,
      - Check if the length of the returned array is more than 1
      - If so,
        - Add 1 to the 'count' variable
        - Add the character converted to lowercase to 'usedLetters'
- Return 'count'

*/

function duplicateCount(str) {
  let count = 0;
  let usedLetters = [];

  for (let char of str) {
    if (!usedLetters.includes(char.toLowerCase())) {
      let regEx = new RegExp(char, 'gi');

      if (str.match(regEx).length > 1) {
        count += 1;
        usedLetters.push(char.toLowerCase());
      }
    }
  }
  return count;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));
