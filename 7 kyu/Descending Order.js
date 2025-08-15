/* Mini-PEDAC

Problem:
- Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Input:
- Integer

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input number will be non-negative
- Input number digits should be arranged from highest to lowest
- Input number digits can repeat

Data Structure:
- Integer

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321

Algorithm:
- Convert input integer into a string named numStr
- Split numStr into an array of single characters
- Use sort method to sort array characters in descending order
- Join array into a string
- Convert string into integer and return that number

*/

function descendingOrder(n){
  return Number(n.toString().split('').sort().reverse().join(''));
}

console.log(descendingOrder(1021));

