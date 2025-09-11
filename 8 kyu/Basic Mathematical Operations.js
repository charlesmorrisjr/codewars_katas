/* Mini-PEDAC

Problem:
- Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Input:
- String
- Numbers

Output:
- Number

Rules (Explicit/Implicit/Questions):
- The input string should be one of the following: "+", "-", "*", "/"
- The input number should be positive or negative integers or floats

Data Structure:
- String
- Number

Examples:

Algorithm:
- If the operation is "+", return input number 1 + input number 2
- If the operation is "-", return input number 1 - input number 2
- If the operation is "*", return input number 1 * input number 2
- If the operation is "/", return input number 1 / input number 2

*/

function basicOp(operation, value1, value2){
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}
