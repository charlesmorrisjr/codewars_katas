/* Mini-PEDAC

Problem:
- Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Input:
- Array of boolean values
- Logical operator (string)

Output:
- Boolean

Rules (Explicit/Implicit/Questions):
- Input is an array of boolean values and a string representing a logical operator
- Input array (1 <= array_length <= 50)
- Input string operator can be "AND", "OR", or "XOR"

Data Structure:
- Array
- Boolean
- String

Examples:
- booleans = [True, True, False], operator = "AND"
- True AND True -> True
- True AND False -> False
- return False
- booleans = [True, True, False], operator = "OR"
- True OR True -> True
- True OR False -> True
- return True
- booleans = [True, True, False], operator = "XOR"
- True XOR True -> False
- False XOR False -> False
- return False

Algorithm:
- If the length of the input array is 1, return the content of the input array unmodified
- Create boolean variable named curBool and set it to the value of the first element in the input array
- Iterate through the input array from index 1 to the length of the array - 1
  - If the input operator string is "AND"
    - curBool equals curBool AND the boolean at the current index
  - If the input operator string is "OR"
    - curBool equals curBool OR the boolean at the current index
  - If the input operator string is "XOR"
    - curBool equals curBool XOR the boolean at the current index

*/

function logicalCalc(array, op){
  if (array.length === 1) return array[0];
  
  let curBool = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (op === "AND") {
      curBool = curBool && array[i];
    } else if (op === "OR") {
      curBool = curBool || array[i];
    } else if (op === "XOR") {
      curBool = curBool !== array[i];
    }
  }
  
  return curBool;
}

console.log(logicalCalc([true, true, true, false], "AND"));

