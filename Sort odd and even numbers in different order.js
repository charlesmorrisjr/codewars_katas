/* PEDAC


** Problem **
Given an array of integers, sort the odd numbers within the array in ascending, and even numbers in descending order

** Rules/Requirements **

Questions:
-

Explicit:
- Given an array of integers
- Containing only odd or even numbers

Implicit:
- All numbers are positive or 0

- Input: an array
  - 
- Output: an array
  - sorted as stated before


** Examples **
sortArray([5, 3, 2, 8, 1, 4, 11]) => [1, 3, 8, 4, 5, 2, 11]
sortArray([2, 22, 37, 11, 4, 1, 5, 0]) => [22, 4, 1, 5, 2, 11, 37, 0]
sortArray([1, 111, 11, 11, 2, 1, 5, 0]) => [1, 1, 5, 11, 2, 11, 111, 0]

sortArray([2, 22, 37, 11, 4, 1, 5, 0]) => [22, 4, 1, 5, 2, 11, 37, 0]
odd: 37, 11, 1, 5 => 1, 5, 11, 37
even: 2, 22, 4, 0 => 22, 4, 2, 0
even 

[5, 3, 2, 8, 1, 4, 11]
[o, o, e, e, o, e, o]
[1, 3, 8, 4, 5, 2, 11]

[2, 22, 37, 11, 4, 1, 5, 0]
[e, e, o, o, e, o, o, e]
[22, 4, 1, 5, 2, 11, 37, 0]

[1, 1, 5, 11, 2, 11, 111, 0]
[o, o, o, o, e,  o,  o,   e]
[1, 1, 5, 11, 2, 11, 111, 0]


sortArray([5, 3, 2, 8, 1, 4, 11]) => [1, 3, 8, 4, 5, 2, 11]



** Data Structure **

- An array to hold the sorted numbers


** Algorithm **

- Check if the given array is empty; if so, return given array
- Declare and initialize an empty array 'sortedArray'
- Declare and initialize an empty array 'evenNums'
- Declare and initialize an empty array 'oddNums'
- Extract the even numbers from the given array and assign them to 'evenNums'
- Extract the odd numbers from the given array and assign them to 'oddNums'
- Sort the 'evenNums' array in descending order
- Sort the 'oddNums' array in ascending order
- Iterate through the given array
  - If the current element in the given is odd
    - Take one number from 'oddNums' and put in 'sortedArray'
  - If the current element in the given is even
    - Take one number from 'evenNums' and put in 'sortedArray'
- Return 'sortArray'

*/

/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.
*/

function sortArray(arr) {
  if (arr === []) return [];

  let sortArray = [];

  let evenNums = arr.filter(num => num % 2 === 0).sort((a, b) => b - a);
  let oddNums = arr.filter(num => num % 2 === 1).sort((a, b) => a - b);

  for (let num of arr) {
    if (num % 2 === 1) {
      sortArray.push(oddNums.shift());
    } else if (num % 2 === 0) {
      sortArray.push(evenNums.shift());
    }
  }

  return sortArray;
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]));
//  => [1, 3, 8, 4, 5, 2, 11]
console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0]));
//  => [22, 4, 1, 5, 2, 11, 37, 0]
console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0]));
//  => [1, 1, 5, 11, 2, 11, 111, 0]
console.log(sortArray([]));
//  => []

/*
function sortArray(array) {
  let sorted = [];
  let odd = array.filter(x => x % 2 !== 0).sort((a,b) => a - b);
  let even = array.filter(x => x % 2 === 0).sort((a,b) => b - a);
  
  for (let num of array) {
    if (num % 2 === 0) {
      sorted.push(even[0]);
      even.shift();
    } else {
      sorted.push(odd[0]);
      odd.shift();
    }
  }
  return sorted;
}

*/