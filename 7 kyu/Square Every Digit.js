/* Mini-PEDAC

Problem:
- Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Input:
- Integer

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input will always be an integer
- Output will always be an integer

Data Structure:
- Integer

Examples:
- 9119 -> 811181 (81-1-1-81)
- 765 -> 493625 (49-36-25)

Algorithm:
- Create a string variable named "squaredStr"
- Create a string variable named "strNum"
- Convert the input number to a string and assign it to strNum
- Iterate through every character of strNum
  - Convert the character at the current iteration to an integer
  - Square that integer
  - Convert the squared integer back to a string
  - Append the string of the squared integer to squaredStr
- Convert squareStr to an integer and return it


*/

function squareDigits(num){
  let squaredStr = "";
  let strNum = num.toString();
  
  strNum.split("").forEach(char => squaredStr += (Number(char) ** 2).toString());

  return Number(squaredStr);
}

function optimizedSquareDigits(num){
  let squaredStr = "";
  
  num.toString().split("").forEach(char => squaredStr += (Number(char) ** 2).toString());

  return Number(squaredStr);
}
