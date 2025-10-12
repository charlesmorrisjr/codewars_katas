/* Mini-PEDAC

Problem:
- Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Input:
- Array

Output:
- Array

Rules (Explicit/Implicit/Questions):
- Input will always be an array of integers

Data Structure:
- Array
- Integer

Examples:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Algorithm:
- If input array is empty or null, return an empty array
- Create a variable named sumNeg and initialize it to zero
- Create a variable named sumPos and initialize it to zero
- Iterate through each element of the input array
  - If the element at the current index is less than zero
    - Add the element at the current index to sumNeg
  - If the element at the current index is greater than zero
    - Add one to sumPos
- Return an array of which the first element is sumPos and the second element is sumNeg

*/

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
      return [];
  }

  let sumPos = 0;
  let sumNeg = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      sumNeg += input[i];
    } else if (input[i] > 0) {
      sumPos += 1;
    }
  }
  
  return [sumPos, sumNeg];
}


