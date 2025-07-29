/* Mini-PEDAC

Problem:
- Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input string will not be empty
- Input string will always contain vowels?
- Input string may contain non-alphanumeric characters such as a "/"
- Vowels are "a", "e", "i", "o", and "u"
- The letter "y" is not considered a vowel

Data Structure:
- String

Examples:
"This website is for losers LOL!" -> "Ths wbst s fr lsrs LL!"

Algorithm:
- Create an array named "vowels" containing the strings "a", "e", "i", "o", and "u"
- Create a string named "newString"
- Iterate through each character of the input string
  - Convert the character to lowercase
  - If a character is not a vowel, add it to newString
- Return newString

*/


function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let newString = str.split("").filter(char => !vowels.includes(char.toLowerCase())).join("");

  return newString;
}

console.log(disemvowel("This website is for losers LOL!"));