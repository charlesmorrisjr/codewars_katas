/* Mini-PEDAC

Problem:
- In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input string will not be empty
- Input string will contain space-separated integers
- Input and out strings can contain positive and negative integers
- The output string should contain the highest and lowest numbers separated by a space
- The highest number should come first, followed by the lowest number

Data Structure:
- String

Examples:
- highAndLow("1 2 3 4 5"); // return "5 1"
- highAndLow("1 2 -3 4 5"); // return "5 -3"
- highAndLow("1 9 3 4 -5"); // return "9 -5"

Algorithm:
- Split the input string on each space into an array of strings and assign an array named 'strArr'
- Create an integer array named 'numArr'
- Iterate through strArr
  - For every string, convert it to a number and push it to numArr
- Create an integer array named 'highLowInts'
- Get the highest number of numArr and push it to highLowInts array
- Get the lowest number of numArr and push it to highLowInts array
- Join highLowInts into a string of two numbers separated by a space and return that string

*/

function highAndLow(numbers){
  let strArr = numbers.split(" ");
  let numArr = strArr.map(char => parseInt(char));

  let highLowInts = [];

  highLowInts.push(Math.max(...numArr));
  highLowInts.push(Math.min(...numArr));

  return highLowInts.join(" ");
}

function optimizedHighAndLow(numbers){
  let strArr = numbers.split(" ");

  return `${Math.max(...strArr)} ${Math.min(...strArr)}`;
}

console.log(highAndLow("1 2 3"));
