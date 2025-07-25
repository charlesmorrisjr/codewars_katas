/* Mini-PEDAC

Problem:
- Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n.
Assume that m is a positive integer.

Input:
- Integer m
- Real number n

Output:
- An array of real numbers

Rules (Explicit/Implicit/Questions):
- m is always a positive integer
- n is always a real number

Data Structure:
- Integer
- Real number (floating)
- Array

Examples:
(3, 5.0) --> [5.0, 10.0, 15.0]

Algorithm:
- Create an empty array named 'arrMultiples'
- Iterate from 1 to m using index variable 'i'
  - Create variable 'multiple' and set it to i * n
  - Push variable multiple to the end of arrMultiples
- Return 'arrMultiples'

*/

function multiples(m, n){
  let arrMultiples = [];

  for (let i = 1; i <= m; i++) {
    let multiple = i * n;
    arrMultiples.push(multiple);
  }

  return arrMultiples;
}

function improvedMultiples(m, n){
  let arrMultiples = [];

  for (let i = 1; i <= m; i++) {
    arrMultiples.push(i * n);
  }

  return arrMultiples;
}