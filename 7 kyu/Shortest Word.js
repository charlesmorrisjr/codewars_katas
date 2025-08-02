/* Mini-PEDAC

Problem:
- Simple, given a string of words, return the length of the shortest word(s).

Input:
- String

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input string will never be empty
- Input will always be a string

Data Structure:
- String
- Integer

Examples:
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

Algorithm:
- Split input string into an array of strings and set this to variable 'strArr'
- Create a integer variable named 'smallestLen' and set it to the length of the first string in the array
- Iterate through the array of strings starting from the second string.
  - If the length of the string at the current index is less than the length current stored in smallestLen, set smallestLen to that length
- Return smallestLen

*/

function findShort(s){
  let strArr = s.split(' ');
  let smallestLen = strArr[0].length;

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length < smallestLen) {
      smallestLen = strArr[i].length;
    }
  }

  return smallestLen;
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"));
