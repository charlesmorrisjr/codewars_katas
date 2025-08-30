/* Mini-PEDAC

Problem:
- Find the sum of all multiples of n below m

Input:
- Two integers

Output:
- Integer or String

Rules (Explicit/Implicit/Questions):
- n and m are natural numbers (positive integers)
- m is excluded from the multiples
- If n is less than 1 or m is less than or equal to 1, return "INVALID"

Data Structure:
- Integer
- String

Examples:
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"


Algorithm:
- If second input number is <= 0, return the string "INVALID"
- Create variable sum and set it to 0
- Iterate from first input number to second input number in steps of first input number
  - Add the value of the iterator to sum
- Return sum

*/

function sumMul(n, m) {
  if (m <= 0) return "INVALID";

  let sum = 0;

  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
}

console.log(sumMul(2,9));

