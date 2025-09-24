/* Mini-PEDAC

Problem:
- Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Input:
- Array of Booleans

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input array may contain true, false, or null/undefined values
- Input array may be empty

Data Structure:
- Array
- Boolean
- Integer

Examples:
    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined,null,false,true], 1],

Algorithm:
- Initialize integer variable named 'numSheep' to 0
- Iterate through the input array
  - If the value at the current iteration is true, add one to numSheep
- Return numSheep

*/

function countSheeps(sheep) {
  let numSheep = 0;
  
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) numSheep += 1;
  }

  return numSheep;
}

function optimizedCountSheeps(sheep) {
  return sheep.filter(boolean).length;
}