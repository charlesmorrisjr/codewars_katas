/* PEDAC

Problem:
- Given an array of towel colors and an array of integers that signifies how many towels are used per week, return
  an array containing the towels after they are washed an placed back into the basket. The towels that are replaced
  should be sorted with red at the bottom, and blue at the top. 

Input:
- an array of towel colors
- an array of integers signifying towels removed per week

Output:
- an array of towel colors

Rules (Explicit/Implicit/Questions):
- Towel colors are only 'red' or 'blue'
- Towels removed per week is always a non-negative integer
- Towels removed per week is always less than the towels in the pile
- Towels replaced should always have 'red' towels at the beginning of the list, and 'blue' towels at the end

Examples:

["blue", "red", "blue", "red", "blue"], [2, 1, 4, 2] =

["blue", "red", "blue", "red", "blue"] - 2 =
["blue", "red", "blue", "red", "blue"] - 1 =
["blue", "red", "blue", "red", "blue"] - 4 =
["blue", "red", "red", "blue", "blue"] - 2 =
["blue", "red", "red", "blue", "blue"]

Data Structure:
- An array to hold the towels being removed and replaced

Algorithm:
- Iterate through the given array of integers using index variable `numTowels`
  - Declare an array 'removedTowels'
    - Remove `numTowels` elements from the given array of towel colors
    - Initialize `removedTowels` to the removed elements
  - Sort `removedTowels` by placing all the 'red' towels at the beginning of the list and 'blue' towels at the end
  - Append `removedTowels` back onto the given array of towel colors
- Return the given array of towel colors

*/

function sortThePile(pileOfTowels, weeklyUsedTowels) {
  for (let numTowels of weeklyUsedTowels) {
    let removedTowels = pileOfTowels.splice(-numTowels, numTowels);

    removedTowels.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

    pileOfTowels.push(...removedTowels);
  }
  
  return pileOfTowels;
}

const pileOfTowels = ["blue", "red", "blue", "red", "blue"];
const weeklyUsedTowels = [2, 1, 4, 2];

console.log(sortThePile(pileOfTowels, weeklyUsedTowels));     // ["blue", "red", "red", "blue", "blue"]
