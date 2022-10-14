// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

// solve("1341") = 7. See test cases for more examples.

// Good luck!

/* Mini-PEDAC

Problem:
- Given a string of integers, find all the substrings that can be coerced to odd numbers

Input:
- a string

Output:
- a number

Rules (Explicit/Implicit/Questions):
- Given string only contains positive integers
- Return the number of substrings that when converted to a number are odd numbers
- The string itself is considered a substring
- What if given an empty string? Return 0?

Data Structure:
- A number to count the number of odd-numbered substrings
- A number to hold the start index when iterating through the given string
- A number to hold the number of characters to count when finding substrings

Examples:

1357 =>  1, 3, 5, 7, 13, 35, 57, 135, 357, 1357 => 10
13471 => 1, 3, 7, 1,
         13, 47, 71
         347, 471,
         1347, 3471,
         13471
         => 12

Algorithm:
- Declare and initialize to 0 and number variable `count`
- Iterate through the length of the string using index variable `subStrLen`
  - Iterate through the length of the string using index variable `startIdx`
    - Check if `startIdx` + `subStrLen` is greater than the length of the given string
      - If not,
        - Extract the substring from the given string from index `startIdx` to `startIdx` + `subStrLen`
        - Check if substring coerced to number is odd
          - If so, add 1 to `count`
- Return `count`

*/

function solve(str) {
  let count = 0

  for (let subStrLen = 1; subStrLen <= str.length; subStrLen++) {
    for (let startIdx = 0; startIdx < str.length; startIdx++) {
      if (startIdx + subStrLen <= str.length) {
        let subStr = str.slice(startIdx, startIdx + subStrLen);
        
        if (Number(subStr.slice(-1)) % 2 === 1) {
          count += 1;
        }
      }
    }
  }

  return count;
}

console.log(solve("1341"));       // 7
console.log(solve("1357"));       // 10
console.log(solve("13471"));      // 12
console.log(solve("134721"));     // 13
console.log(solve("1347231"));    // 20
console.log(solve("13472315"));   // 28
console.log(solve("18782739269926571391625449165749179598215347913739125")); // 1051
