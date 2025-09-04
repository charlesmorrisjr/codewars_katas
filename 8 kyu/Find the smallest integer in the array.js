/* Mini-PEDAC

Problem:
- Given an array of integers your solution should find the smallest integer.
You can assume, for the purpose of this kata, that the supplied array will not be empty.

Input:
- Array

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- The supplied array will not be empty
- Input array will always have more than one integer

Data Structure:
- Integer
- Array

Examples:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

Algorithm:
- Create a variable named lowestInt and set it to the first element of the array
- Iterate through the input array starting from the second element
  - If the element at the current index is lower than lowestInt, set lowestInt to the
    integer at the current index
- Return lowestInt

*/

function findSmallestInt(arr) {
  let lowestInt = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowestInt) lowestInt = arr[i];
  }
  
  return lowestInt;
}
