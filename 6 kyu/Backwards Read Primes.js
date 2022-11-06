/* PEDAC

Problem:
- Given two positive integers, find all the prime numbers between those two numbers (inclusively) that
  when read backwards are a different prime number.

Input:
- A number
- A number

Output:
- An array of integers

Rules (Explicit/Implicit/Questions):
- Given numbers are always postive integers
- Second given number will always be greater than the first one
- Resulting array will be ordered following the natural order of prime numbers
- Backwards read primes cannot includes palindromes

Examples:

backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]

9923 -> 3299
9931 -> 1399
9941 -> 1499
9967 -> 7699

Data Structure:
- An array to hold the backwards read prime numbers

Algorithm:
- Declare an empty array `primes`
- Iterate from the `start` given number to the `stop` given number using index variable `curNum`
  - Check if `curNum` is a prime number
    - If so, reverse the digits of `curNum`
    - Check if the reversed number is equal to `curNum`
      - If not, Check if that number is also a prime number
        - If so, add the reversed `curNum` to `primes`
- Return `primes`

Function isPrime(num) algorithm:
- Declare and initialize to true a boolean variable named `isNumPrime`
- Iterate from 2 to `num` using index variable `divisor`
  - Check if `num` divided by `divisor` does not leave a remainder
    - If so, reassign `isNumPrime` to false
- Return `isNumPrime`

*/

function backwardsPrime(start, stop){
  let primes = [];

  for (let curNum = start; curNum <= stop; curNum++) {
    if (isPrime(curNum)) {
      let reversedNum = Number(String(curNum).split('').reverse().join(''));
      if (reversedNum !== curNum) {
        if (isPrime(reversedNum)) {
          primes.push(curNum);
        }
      }
    }
  }

  return primes;
}

function isPrime(num) {
  let isNumPrime = true;

  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      isNumPrime = false;
    }
  }

  return isNumPrime;
}

console.log(backwardsPrime(9900, 10000));     // [9923, 9931, 9941, 9967]
console.log(backwardsPrime(70000, 70250));    // [70001, 70009, 70061, 70079, 70121, 70141, 70163, 70241, 70249]