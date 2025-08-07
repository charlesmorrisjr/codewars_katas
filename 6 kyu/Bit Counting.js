/* Mini-PEDAC

Problem:
- Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Input:
- Integer

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input will always be a non-negative integer
- Output should be an integer that is equal to the number of bits that are equal to one in the binary representation of that number

Data Structure:
- Integer
- String

Examples:
The binary representation of 1234 is 10011010010, so the function should return 5 in this case

Algorithm:
- Convert the input number to a string of bits
- Use a regular expression to extract the bits that are 1 from the string
- Get the length of the new string and return it

*/

function countBits(n) {
  let binaryStr = n.toString(2);
  let oneBits = binaryStr.match(new RegExp("1", "g")) || "";
  
  return oneBits.length;
}

function optimizedCountBits(n) {
  return (n.toString(2).match(new RegExp("1", "g")) || "").length;
}

console.log(countBits(0));
console.log(countBits(1234));
