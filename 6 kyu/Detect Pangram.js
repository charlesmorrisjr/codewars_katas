// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

/* Mini-PEDAC

Problem:
- Given a string, check if the string contains every letter of the alphabet. Return true if so, false if not.

Input:
- a string

Output:
- a boolean

Rules (Explicit/Implicit/Questions):
- Given string can contain letters, numbers, spaces, and punctuation
- Ignore anything that is not a letter
- Uppercase and lowercase are irrelevant
- String will never be empty

Data Structure:
- An array containing every letter of the alphabet

Examples:

"The quick brown fox jumps over the lazy dog."   // True

"This is not a pangram."                         // False


Algorithm:
- Declare and initialize an empty array `alphabet`
- Iterate from the Unicode code point of 'a' to the code point of 'z'
  - Convert the code point of each iteration to a letter and append that letter to `alphabet`
- Iterate through the given string
  - If the character at the current iteration converted to lowercase exists in `alphabet`, remove that character from `alphabet`
  - Check if `alphabet` is empty
    - If so, return true
- Return false

*/

function isPangram(str) {
  let alphabet = [];

  for (let idx = 'a'.charCodeAt(0); idx <= 'z'.charCodeAt(0); idx++) {
    alphabet.push(String.fromCodePoint(idx));
  }

  for (let char of str) {
    if (alphabet.includes(char.toLowerCase())) {
      alphabet.splice(alphabet.indexOf(char.toLowerCase()), 1);
    }
    if (alphabet.length === 0) return true;
  }

  return false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));   // True
console.log(isPangram("This is not a pangram."));                         // False
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));                // True