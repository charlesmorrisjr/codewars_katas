/* Mini-PEDAC

Problem:
- Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

Input:
- Array of integers

Output:
- Integer or null

Rules (Explicit/Implicit/Questions):
- Return first number that is not consecutive (i.e., 1 greater than the previous number)
- Input array will always contain at least 2 elements
- Input array elements will always be numbers
- Input array elements will always be unique and in ascending order
- Input array elements can be positive or negative
- If whole input array is consecutive then return null

Data Structure:
- Array
- Integer
- Boolean

Examples:
 If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

Algorithm:
- Iterate through input array starting from index 1 (second number in array)
  - If the difference between the integer at current index and the integer at the previous index is greater than 1, return that integer
- Return null

*/

function firstNonConsecutive (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) return arr[i];
  }

  return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
console.log(firstNonConsecutive([1,2,3,4]));
console.log(firstNonConsecutive([-8,-7,-6,-5,-4,-3,-2,0,1]));
console.log(firstNonConsecutive([9,12,13,14,15,16,17,18]));

