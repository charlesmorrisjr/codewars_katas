/* Mini-PEDAC

Problem:
- Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Input:
- String

Output:
- Boolean

Rules (Explicit/Implicit/Questions):
- Input string will be a string of any length
- The order of the characters is important
- The case of each character in the word "English" does not matter
- Return value as boolean values, true for the string to contains "English", false for it does not.

Data Structure:
- String
- Boolean

Examples:
"abcEnglishdef" -> True
"abcnEglishsef" -> False

Algorithm:
- Convert the input string to all lowercase
- If you can find the word "english" in the converted string, return true, else return false

*/

function spEng(sentence){
  return sentence.toLowerCase().includes("english");
}

console.log(spEng("english"));
console.log(spEng("enlish"));
