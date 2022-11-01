/* PEDAC

Problem:
- Given an array of integers, find and return the index where the sum of the integers to the left
  of the index and the sum of the integers to the right of the index equal each other

Input:
- an array of integers

Output:
- a number

Rules (Explicit/Implicit/Questions):
- Each integer in the given array will greater than 0 and less than 1000
- Each integer in the given array can be positive or negative
- If you cannot find an index where the sums of the left and right sides equal each other, return -1
- Given an array with multiple answers, return the lowest correct index
- When calculating the sum of each side, an empty array (such as left of index 0) is calculated as 0
- The number at the index that the array is separated at is not included

Examples:

[1,2,3,4,3,2,1] -> index 3 ->

sum([1, 2, 3]) = 6
sum([3, 2, 1]) = 6

=> return 3

[1,2,3,4,5,6] => return -1 because no index where the subarrays are equal can be found


Data Structure:
- An array to hold the left subarray
- An array to hold the right subarray
- A number to hold the index postion where the sums of the left and right subarrays are equal

Algorithm:
- Iterate through the given array using index variable `idx`
  - Declare an array `leftSubArr`
    - Select a copy of the given array from index 0 to the current value of `idx`, but don't include the value at `idx`, and initialize `leftSubArr` to that copy
  - Declare an array `rightSubArr`
    - Select a copy of the given array from the current value of `idx` plus 1 to the end of the array, and initialize `rightSubArr` to that copy
  - Check if `leftSubArr` is an empty array
    - If so, reassign `leftSubArr` to [0]
  - Check if `rightSubArr` is an empty array
    - If so, reassign `rightSubArr` to [0]
  - Check if the sum of the numbers in `leftSubArr` equals the sum of the numbers in `rightSubArr`
    - If so, return `idx`
- Return -1

*/

function findEvenIndex(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    let leftSubArr = arr.slice(0, idx);
    let rightSubArr = arr.slice(idx + 1);
    
    if (leftSubArr.length === 0) {
      leftSubArr = [0];
    }

    if (rightSubArr.length === 0) {
      rightSubArr = [0];
    }

    if (leftSubArr.reduce((total, num) => total + num) === rightSubArr.reduce((total, num) => total + num)) return idx;
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));          // 3
console.log(findEvenIndex([1,100,50,-51,1,1]));       // 1
console.log(findEvenIndex([1,2,3,4,5,6]));            // -1
console.log(findEvenIndex([20,10,30,10,10,15,35]));   // 3
console.log(findEvenIndex([10,-80,10,10,15,35,20]));  // 6
