/* Mini-PEDAC

Problem:
- In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Input:
- Array

Output:
- Array

Rules (Explicit/Implicit/Questions):
- Input list will not be empty
- Input list will contain only non-negative integers and strings
- Output list should only contain integers

Data Structure:
- Array
- Integer
- String

Examples:
- filter_list([1,2,'a','b']) == [1,2]
- filter_list([1,'a','b',0,15]) == [1,0,15]
- filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Algorithm:
- Iterate through the input list array
  - If the value at the current index is not a string, push it to the new array
- Return the new array


*/

function filter_list(l) {
  return l.filter(val => typeof val !== "string");
}

console.log(filter_list([1,2,'aasf','1','123',123]));
