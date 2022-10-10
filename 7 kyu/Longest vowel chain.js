// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

/* Mini-PEDAC

Problem:
- Given a string, find the longest substring of vowels and return the length of that substring

Input:
- a string

Output:
- a number

Rules (Explicit/Implicit/Questions):
- The given string will only contain alphabetic characters -- no spaces or punctuation
- All letters in the given string are lowercase
- Vowels are any arrangement of a, e, i, o, and u
- Vowels can be repeated in a substring
- Will given string always contain a least one letter?
- What do I return if there are no vowels?

Data Structure:
- A number containing the largest substring

Examples:

solve("ultrarevolutionariees") => 'iee' => 3


Algorithm:
- Declare and initialize to 0 a number variable `maxVowelLen`
- Declare a number variable `curLen` and initialize it to 0
- Iterate through the given string
  - Check if the character at the current iteration is a vowel
    - If so, add 1 to `curLen`
    - Check if `curLen` is greater than `maxVowelLen`
      - If so, set `maxVowelLen` to `curLen`
    - If not, assign 0 to `curLen`
- Return `maxVowelLen`

*/

function solve(str) {
  let maxVowelLen = 0;
  let curLen = 0;

  for (let char of str) {   
    if (/[aeiou]/.test(char)) {
      curLen += 1;
      
      if (curLen > maxVowelLen) {
        maxVowelLen = curLen;
      }
    } else {
      curLen = 0;
    }
  }

  return maxVowelLen;
}

console.log(solve("suoidea"));                  // 3
console.log(solve("ultrarevolutionariees"));    // 3
