/* PEDAC


** Problem **
Given a string of text (possibly with punctuation and line-breaks), return an array of the top-3 most occurring words, in descending order of the number of occurrences.

** Rules/Requirements **

Questions:
- What should the function return if the given string contains no alphabetic characters?
- What should the function return if the given string contains less than three separate words?

Explicit:
- A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
- Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
- Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
- Matches should be case-insensitive, and the words in the result should be lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Implicit:
- The given string may contain non-alphabetic characters
- The given string may contain no alphabetic characters
- If the given string contains no alphabetic characters, return an empty array
- If the given string contains less than three separate words, return an array of the words that do exist in the given string

- Input: a string
  - Contains the string to be checked
- Output:
  - 


** Examples **
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]


** Data Structure **

- An array containing subarrays. Each subarray contains a unique word and the number of times that the word is counted in the given string.
- An array containing the given string split into an array of strings


** Algorithm **

- Declare an array variable 'strArr' and initialize it to the return value of the method used to split a string into an array of multiple strings.
  - `strArr` will contain the given string separated into multiple strings, each string containing each word or character separated by spaces
- Declare an array variable 'wordCount' and initialize it to `[]`
- Declare and initialize an empty array variable `mostCommonWords`
- Iterate through the array `strArr` assigning the current element to `word`
  - If `word` contains any character that is not alphabetic or an apostrophe, those characters will be removed from `word` using a regular expression
  - If `word` is not an empty string and if `word` is not just an apostrophe,
    - Reassign `word` to `word` converted to lowercase
    - Declare and initialize a boolean variable `wordIndex` to `-1`
    - Iterate through each subarray of `wordCount` using arguments `subArr` and `idx`
      - Check if `subArr` includes `word`
        - If so, reassign `wordIndex` to `idx`
      - Check if `wordIndex` is equal to `-1`
        - If so, append a new 2 element subarray to `wordCount`. The first element contains a copy of `word`, and the second element is assigned to 1.  
        - If not, increase the second element of the subarray at `wordIndex` in `wordCount` by 1
- Afterwords, sort the subarrays of `wordCount` by the value of second element of each subarray in descending numeric order
- Declare a variable `wordCountLen` and initialize it to 3
- Check if the length of `wordCount` is less than 3,
  - If so, reassign `wordCountLen` to the length of `wordCount`
- Iterate from 0 using a index assigned to variable `idx`. Continue iterating as long as `idx` is less than `wordCountLen`.
  - Append the first element of the subarray in `wordCount` at index `idx` to `mostCommonWords`
- Return `mostCommonWords`

*/

function topThreeWords(text) {
  let strArr = text.split(' ');
  let wordCount = [];

  strArr.forEach(word => {
    word = word.replace(/[^a-z\']/gi, '').toLowerCase();;
  
    if (word !== '' && word !== '\'') {
      addWord(wordCount, word);
    }
  });

  wordCount.sort((a, b) => b[1] - a[1]);

  return wordCount.map(word => word[0]).slice(0, 3);
}

function addWord(arr, word) {
  let wordIndex = -1;

  arr.forEach((subArr, idx) => {
    if (subArr.includes(word)) {
      wordIndex = idx;
    }
  })

  if (wordIndex !== -1) {
    arr[wordIndex][1] += 1;
  } else {
    arr.push([word, 1]);
  }
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."));
// ["a", "of", "on"]

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
// ["e", "ddd", "aa"]

console.log(topThreeWords("  //wont won't won't"));
// ["won't", "wont"]

console.log(topThreeWords("  '  "));
// []