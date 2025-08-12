/* Mini-PEDAC

Problem:
- There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colors.

Input:
- String

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input string may not contain any characters
- Input string should only contain the characters "R", "G", and "B"
- Output should be a non-negative integer

Data Structure:
- String
- Integer

Examples:
"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9

Algorithm:
- Create an integer variable named 'stonesRemoved' and set it to 0
- Iterate through each character of the string starting from the second character
  - If the character at the current index is not the same as the character at the previous index, add 1 to stonesRemoved

*/

function solve(stones) {
  let stonesRemoved = 0;
  
  for (let i = 1; i < stones.length; i++) {
    if (stones[i] === stones[i - 1]) stonesRemoved++;
  }

  return stonesRemoved;
}

console.log(solve(""));
console.log(solve("RGBRGBRGGB"));
console.log(solve("RGGRGBBRGRR"));
console.log(solve("RRRRGGGGBBBB"));

