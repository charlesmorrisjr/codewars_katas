/* Mini-PEDAC

Problem:
- Given an array of numbers, sort each subsequence of numbers, sort the subsequences based on the sums of the numbers in each subsequence, and return an array containing all subseqeucnes

Input: An array
- contains a sequence of numbers

Output: An array
- contains the input array sorted

Rules (Explicit/Implicit/Questions):
- The sequence in the given input can be split into subsequences terminating in 0
- Sort each subsequence in ascending numerical order, but leave 0 at the end of the sequence
- Sort all subsequences according to their sum value in ascending numerical order
  - If subsequences have same sum, sort according to original order
- Return an array of numbers containing the sort subsequences
- All numbers in the given array will be integers equal to or greater than 0 

Algorithm:
- Declare and initialize empty array `sortedArr`
- Declare and initialize empty array `subArr`
- Iterate through the given array
  - Append the number at the current iteration in the given array to `subArr`
  - Check if the number at the current iteration is 0
    - If so, append `subArr` to `sortedArr` and reassign `subArr` to an empty array
- Iterate through `sortedArr`, mutate its subarrays, and map these subarrays to `sortedArr`
  - Sort each subarray in sorted array in ascending numerical order
    - Sort all elements except the last element in each subarray
    - Reassign the subarray to the sorted array and append 0 to the end of the sorted array
- Iterate through `sortedArr`, mutate its subarrays, and map these subarrays to `sortedArr`
  - Calculate the sum of the elements in each subarray
  - Append that sum to the end of the current subarray
- Sort the subarrays of `sortedArr` based on the last element of each subarray
- Iterate through `sortedArr`, mutate its subarrays, and map these subarrays to `sortedArr`
  - Remove the last element of each subarray
- Remove all array nesting from `sortedArr`
- Return `sortedArr`

*/

function sortSequence(sequence){
  let sortedArr = [];
  let subArr = [];

  sequence.forEach(num => {
    subArr.push(num);
    if (num === 0) {
      sortedArr.push(subArr);
      subArr = [];
    }
  })

  sortedArr = sortedArr.map(subArray => {
    subArray = subArray.slice(0, subArray.length - 1).sort((a, b) => a - b);
    subArray.push(0);
    return subArray;
  })

  sortedArr = sortedArr.map(subArray => {
    let sum = subArray.reduce((total, num) => total + num);
    subArray.push(sum);
    return subArray;
  })

  bubbleSort(sortedArr);
  
  sortedArr = sortedArr.map(subArray => {
    subArray.pop();
    return subArray;
  })

  // sortedArr = sortedArr.flat();
  sortedArr = [].concat(...sortedArr);

  return sortedArr;
}

function bubbleSort(array) {
  let notSorted;

  do {
    notSorted = false;

    for (let idx = 0; idx < array.length - 1; idx++) {
      if (array[idx][array[idx].length - 1] > array[idx + 1][array[idx + 1].length - 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        notSorted = true;
      }
    }
  } while (notSorted);
}

console.log(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]));
// [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

console.log(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]));
// [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]

console.log(sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]));
// [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]

console.log(sortSequence([47,18,11,274,0,19,30,45,35,15,1,12,21,10,6,156,0,21,44,1,33,30,3,44,20,9,32,113,0,29,42,1,13,9,18,18,220,0,2,25,25,12,3,36,247,0,47,33,38,27,31,32,43,99,0,34,30,41,38,48,29,40,11,79,0,49,20,32,36,31,182,0,38,39,4,31,10,228,0,41,14,42,15,25,213,0,20,41,19,37,38,22,21,32,5,115,0,2,3,47,27,16,19,27,46,43,120,0,49,44,49,48,160,0,39,17,22,37,38,18,34,145,0,9,47,12,43,17,4,218,0]));