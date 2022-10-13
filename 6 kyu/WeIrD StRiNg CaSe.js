// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

/* Mini-PEDAC

Problem:
- Given a a string of words, return the string with every even index of each word set to uppercase and every odd index of each word set to lowercase

Input:
- A string

Output:
- A string

Rules (Explicit/Implicit/Questions):
- Given string will contain only alphabetical characters and spaces
- Spaces will only be present if there are multiple words
- Words will be separated by a single space
- Letters in given string can be uppercase or lowercase
- Even indexes of each word should be set to uppercase starting with index 0
- Odd indexes of each word should be set to lowercase starting with index 1
- What if a word is only one character? Set to uppercase?

Data Structure:
- An array to hold the given string split into its individual words
- A number variable to hold the current index while iterating through each word

Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


Algorithm:
- Declare an array `strArr` and initialize it to the array created by splitting the given string into its individual words
- Iterate through `strArr`
  - Declare and initialize an empty string `weirdWord`
  - For each word, iterate through the individual characters of that word
    - Check if the current index of this inner loop is even or odd
      - If even, convert current letter to uppercase and append it to `weirdWord`
      - If odd, convert current letter to lowercase and append it to `weirdWord`
    - Replace the original word in the array with `weirdWord`
- Join `strArr` back into a string containing a sentence of words
- Return the joined string

*/

function toWeirdCase(str) {
  let strArr = str.split(' ');

  strArr = strArr.map(word => {
    let weirdWord = '';
    
    for (let idx = 0; idx < word.length; idx++) {
      if (idx % 2 === 0) {
        weirdWord += word[idx].toUpperCase();
      } else {
        weirdWord += word[idx].toLowerCase();
      }
    }
    return weirdWord;
  }).join(' ');

  return strArr;
}

// Examples:
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"