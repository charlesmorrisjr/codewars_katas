// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

/* Mini-PEDAC

Problem:
- Given a string of integers, find the five consecutive digits that, when multiplied, has the greatest product out of all sets of five consecutive digits in the string

Input:
- a string containing a series of numbers

Output:
- a number

Rules (Explicit/Implicit/Questions):
- The given string will only contain non-negative integers
- The input string always has more than 5 digits

Data Structure:
- A number to hold the product of five consecutive digits

Examples:

"123834539327238239583" => 3 * 9 * 5 * 8 * 3 = 3240

Algorithm:
- Declare a constant variable `NUM_CONSECUTIVE_DIGITS` and initialize it to 5
- Declare a variable `highestProduct` and initialize it to 0
- Iterate from the beginning of the given string to the length of the given string minus `NUM_CONSECUTIVE_DIGITS` using index variable `idx`
  - Declare a number variable `subStrProduct` and initialize it to 1
  - Declare a string variable `subStr`
  - Extract a substring of the given string from `idx` to `idx` + `NUM_CONSECUTIVE_DIGITS` and assign that substring to `subStr`
  - Check if `subStr` has a '0'
    - If so, continue to the next iteration;
  - Iterate through every character of `subStr`
    - Coerce the current character to a number, and assign `subStrProduct` to `subStrProduct` multiplied by that number
    - Check if `subStrProduct` is greater than `highestProduct`
      - If so, reassign `highestProduct` to `subStrProduct`
- Return `highestProduct`

*/

function greatestProduct(str) {
  const NUM_CONSECUTIVE_DIGITS = 5;
  let highestProduct = 0;

  for (let idx = 0; idx <= str.length - NUM_CONSECUTIVE_DIGITS; idx++) {
    let subStrProduct = 1;
    let subStr = str.slice(idx, idx + NUM_CONSECUTIVE_DIGITS);

    if (subStr.includes('0')) continue;

    for (let char of subStr) {
      subStrProduct *= Number(char);

      if (subStrProduct > highestProduct) {
        highestProduct = subStrProduct;
      }
    }
  }

  return highestProduct;
}

console.log(greatestProduct("123834539327238239583"));                  // 3240
console.log(greatestProduct("92494737828244222221111111532909999"));    // 5292
console.log(greatestProduct("02494037820244202221011110532909999"));    // 0