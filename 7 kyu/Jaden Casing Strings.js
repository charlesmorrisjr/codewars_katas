/* Mini-PEDAC

Problem:
- Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input string can contain non-alphabetical characters

Data Structure:
- String

Examples:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Algorithm:
- Take input string and split into an array of strings
- Iterate through the array and capitalize the letter of every string
- Join the array of strings back into a single string
- Return the modified string

*/

function toJadenCase(value) {
  return value.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
