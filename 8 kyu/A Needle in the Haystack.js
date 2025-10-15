/* Mini-PEDAC

Problem:
- Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Input:
- Array of strings

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input array will always contain a string "needle"
- Input array will not be empty
- Input array may contain non-string elements

Data Structure:
- Array
- String

Examples:
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

Algorithm:
- Iterate through the input array
  - If the element at the current iteration is 'needle' 
    - Return "found the needle at position [index]" 

*/

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') return "found the needle at position " + i;
  }
}
