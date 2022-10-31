/* PEDAC

Problem:
- Given a list of integers, find the minimum number that needs to be inserted into the list so that the sum of all elements in the new list equals the closest prime number.

Input:
- an array of integers

Output:
- a number

Rules (Explicit/Implicit/Questions):
- Given array will contain at least 2 numbers
- Numbers in the given array will only be positive integers
- Numbers in the given array could be repeated
- Sum of the returned list should equal the closest prime number
- If the sum of the numbers in the given array is already a prime number, return 0

Data Structure:
- A number variable to hold the prime number being tested and to be returned as the closest prime number
- A number variable to hold the sum of the numbers in the given array
- A number variable to hold the current divisor when checking if a number is prime

Examples:

[3,1,2] = 6 + (1) = 7 => 1

[5,2] = 7 + (0) => 0

[1,1,1] = 3 + (0) => 0

[2,12,8,4,6] = 32 + (5) = 37 => 5

[50,39,49,6,17,28] = 189 + (2) => 2


Algorithm:
- Declare and initialize to 0 number variable `minPrimeNum`
- Declare a number variable `sumArr` and initialize it to the sum of the numbers in the given array
- Start a loop
  - Check if `sumArr` + `minPrimeNum` is a prime number using function isPrimeNum
    - If so, return `minPrimeNum`
    - If not, add 1 to `minPrimeNum`

- Function isPrimeNum
  - Declare and initialize to true a boolean variable `isPrime`
  - Iterate from 2 to `sumArr` minus 1 using index variable `idx`
    - Check if `sumArr` divided by `idx` leaves a remainder
      - If so, reassign `isPrime` to false
  - Return value of `isPrime`

*/

function minimumNumber(numbers){
  let minPrimeNum = 0;
  let sumArr = numbers.reduce((total, num) => total + num);
  
  while (true) {
    if (isPrimeNum(sumArr + minPrimeNum)) {
      return minPrimeNum;
    } else {
      minPrimeNum += 1;
    }
  }
}

function isPrimeNum(num) {
  let isPrime = true;

  for (let idx = 2; idx < num; idx++) {
    if (num % idx === 0) {
      isPrime = false;
    }
  }
  
  return isPrime;
}