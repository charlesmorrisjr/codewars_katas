/*
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return an array [t, k]


Example #1:

for string

s = "ababab";

the answer is

["ab", 3]


Example #2:

for string

s = "abcde"
the answer is

["abcde", 1]


Because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

*/

/* Mini-PEDAC

Problem:
- Given a string, find the smallest substring that, when repeated, can equal the given string. Return that substring and the number of times it must be repeated to recreate the given string

Input:
- a string

Output:
- an array containing a string and a number

Rules (Explicit/Implicit/Questions):
- Given string contains only lowercase alphabetic characters
- Find the smallest substring that can recreate the given string
- Find the number of times that the string must be repeated to recreate the given string
- Will given string ever be empty?

- Substring must always begin on the first letter of the given string


Data Structure:
- An array to hold the Output
- A string variable to hold the substring
- A number variable to count the number of times the substring must be repeated

Examples:

"ababab" => ["ab", 3]
"abcde" => ["abcde", 1]

Algorithm:
- Iterate through the given string using index variable `idx`
  - Declare a string variable `subStr`
  - Extract the substring from the given string from index 0 to `idx` and assign it to `subStr`
  - Declare a number variable `count`
  - Using a regular expression, check the number of matches of the substring in the given string and assign that number to `count`
  - Check if `count` multiplied by the length of `subStr` equals the length of the given string
    - If so, return an array containing `subStr` and `count`

*/

function f(str) {
  for (let idx = 0; idx <= str.length; idx++) {
    let subStr = str.slice(0, idx);
    let regEx = new RegExp(subStr, 'g');

    let count = str.match(regEx).length;
    
    if (count * subStr.length === str.length) {
      return [subStr, count];
    }
  }
}

console.log(f("ababab"));      // ["ab", 3]
console.log(f("abcde"));       // ["abcde", 1]
