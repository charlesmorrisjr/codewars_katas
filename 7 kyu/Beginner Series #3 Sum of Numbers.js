/* Mini-PEDAC

Problem:
- Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Input:
- Integer
- Integer

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input numbers are always integers
- Input integers can be positive, negative, or zero
- If the two input integers are the same, return one or the other
- The second integer can be less than the first integer

Data Structure:
- Integer

Examples:
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Algorithm:
- If first input integer is equal to second input integer, return the first input integer
- Define integer variables 'start', 'end', and 'sum'. Initialize 'sum' to 0
- If the first input integer is greater than the second input integer then
  - Set 'start' to the second input integer and 'end' to the first input integer
- Else If the first input integer is less than the second input integer then
  - Set 'start' to the first input integer and 'end' to the second input integer
- Iterate from 'start' to 'end' including 'end' using index 'i'
  - Add 'i' to 'sum'
- Return 'sum'

*/

function getSum(a, b) {
  if (a === b) return a;
  
  let start;
  let end;
  let sum = 0;

  if (a > b) {
    start = b;
    end = a;
  } else if (a < b) {
    start = a;
    end = b;
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}