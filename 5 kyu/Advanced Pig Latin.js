/* PEDAC


** Problem **
Given a sentence, translate it to Pig Latin. Make sure that proper punctuation and capitalization is used after words are translated.

** Rules/Requirements **

Questions:
- What if a word contains no vowels?

Explicit:
- Given a string
- The given string will never be undefined
- The given string may contain numbers and letters
- The given string will never contain words that are a combination of letters and numbers
- There will never be punctuation at the beginning of a word
- The only capital letter in a word will be the first letter
- If a word begins with a consonant, move all letters before the first vowel in that word to the end of the word followed by "ay"
- If a word begins with a vowel, append the letters "way" to the end of the word
- If original word was capitalized, make sure that the translated word is capitalized properly

Implicit:
- If the original word has punctuation at the end, make sure the punctuation is at the end of the translated word

- Input: a string
  - containing the words to be translated
- Output: a string
  - contains the input string will all words translated to Pig Latin


** Examples **
"hello" => "ellohay"
"creating" => "eatingcray"

"algorithm" => "algorithmway"

"Hello World" => "Ellohay Orldway"

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"


** Data Structure **

- An array to hold each individual word
- A string containing the translated sentence


** Algorithm **

- Declare a variable `strArr` and initialize it to the return value of a method that splits a string into an array of strings
- Iterate through each element for `strArr`. Each element will be assigned to variable named `word`
  - Declare and initialize an empty string variable `pigWord`
  - Declare and initialize an empty string variable `punctuation`
  - Create a loop
    - Check if the last character of `word` is punctuation
      - If so, remove the last character from `word` and append it to `punctuation`
      - If not, end the loop
  - Check if first letter of `word` is a consonant or vowel
    - If consonant,
      - Declare a variable 'firstVowel' and assigned it to the index of the first vowel in `word`
      - Extract the letters from the first vowel in `word` to the end of the word and assign them to `pigWord`
      - Extract the letters from the beginning of `word` to the vowel, but not including the vowel, and append them to `pigWord`
      - Append the letters "ay"
      - Check if first letter of `word` is uppercase,
        - If so, change the first letter of `pigWord` to uppercase and change the remaing letters of `pigWord` to lowercase
    - If vowel,
      - Assign `pigWord` to the value of `word` and append the string "way" to it
  - Append `punctuation` to `pigWord`
  - Join `strArr` back into a string and return that string

*/

function translate(sentence) {
  let strArr = sentence.split(' ');

  return strArr.map(word => {
    let pigWord = '';
    let punctuation = '';

    while (/[^a-z0-9]/.test(word[word.length - 1])) {
      punctuation += word[word.length - 1]
      word = word.slice(0, -1);
    }
    
    if (/[^aeiou]/i.test(word[0])) {
      let firstVowel = word.search(/[aeiou]/i);
      pigWord = word.slice(firstVowel) + word.slice(0, firstVowel) + 'ay';
      
      if (/[A-Z]/.test(word[0])) {
        pigWord = pigWord[0].toUpperCase() + pigWord.slice(1).toLowerCase();
      }
    } else {
      pigWord = word + 'way';
    }

    pigWord += punctuation;

    return pigWord;
  }).join(' ');
};

console.log(translate('Pizza? Oh Yes Please!!'));  // 'Izzapay? Ohway Esyay Easeplay!!'