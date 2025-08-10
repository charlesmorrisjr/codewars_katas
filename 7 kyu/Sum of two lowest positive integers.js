/* Mini-PEDAC

Problem:
  - Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

Input:
- Array of integers

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input numbers will always be positive
- Input numbers will always be integers (not floats)
- Length of input array will be at least 4

Data Structure:
- Array
- Integer

Examples:
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.

Algorithm:
- Create integer variable 'sumInts'
- Get the lowest number of the array and set it to sumInts
- Remove that lowest number from the array
- Get the next lowest number of the array and add it to sumInts
- Return sumInts

*/

function sumTwoSmallestNumbers(numbers) {  
  let sumInts = Math.min(...numbers);
  numbers.splice(numbers.findIndex(num => num === Math.min(sumInts)), 1);
  sumInts += Math.min(...numbers);
  
  return sumInts;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([511, 511, 511, 616]));
