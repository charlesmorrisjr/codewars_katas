/* PEDAC

Problem:
- Given a string, invert the case of every character, and reverse the ordering of the words

Input:
- a string

Output:
- a string

Rules (Explicit/Implicit/Questions):
- Given string contains only alphabetical characters
- Invert case of every character
- Reverse ordering of the words

Examples:
'Example string' => 'STRING eXAMPLE'

Data Structure:
- An array to hold a copy of the given string as it is manipulated

Algorithm:
- Return the string returned by the following process:
  - Split the given string into an array containing words
  - Split each word into an array of characters
  - Iterate through each character
    - Invert the case of each character
  - Join the characters back into words
  - Reverse the order of the words
  - Join the words back into a string

*/

function stringTransformer(str) {
  return str.split(' ').map(word => {
    return word.split('').map(char => {
      return /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase();
    }).join('');
  }).reverse().join(' ');
}

console.log(stringTransformer('Example string'));       // 'STRING eXAMPLE'