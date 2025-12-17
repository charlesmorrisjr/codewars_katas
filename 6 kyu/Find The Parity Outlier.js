/* Mini-PEDAC

Problem:
- You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Input:
- Array of integers

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input array will have a length of at least 3
- All numbers in array are odd or even except for one
- Numbers in array can be negative

Data Structure:
- Array
- Integer

Examples:
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

General Algorithm Idea:
- Iterate through the input array
- If more than one number is odd, find the even number in the array and return it
- If more than one number is even, find the odd number in the array and return it

Detailed Algorithm:
- Initialize a boolean variable named findOdd
- Initialize integers variables oddCount and evenCount and set them to 0
- Iterate through the first three numbers in the array
  - If the number at the current index is odd, increment oddCount
  - Else if the number at the current index is even, increment evenCount
- If oddCount < evenCount, findOdd = true
  - Else, findOdd = false
- Iterate through the input array 
  - If findOdd is true, and the number at the current index is odd, return that number
  - Else, if the number at the current index is even, return that number

*/

function findOutlier(integers){
  let findOdd;
  let oddCount = 0, evenCount = 0;

  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2) {
      oddCount++;
    } else {
      evenCount++;
    }
  }

  findOdd = (oddCount < evenCount) ? true : false;

  for (let i = 0; i < integers.length; i++) {
    console.log(integers[i] % 2);
    if (findOdd === true && integers[i] % 2 !== 0) {
      return integers[i];
    } else if (findOdd === false && integers[i] % 2 === 0) {
      return integers[i];
    }
  }
}


