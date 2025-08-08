/* Mini-PEDAC

Problem:
  - Write a function that takes a string as input and returns a string where each character is repeated a number of times equal to its position in the string, with the first character of each repetition capitalized and separated by hyphens.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input will always be a string
- Input will only contain alphabetical characters

Data Structure:
- String

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

Algorithm:
- Create string variable 'expandedStr'
- Iterate through input string using integer counter variable 'i'
  - If i equals 1  
    - Set expandedStr to the capitalized first character of the input string
  - Else
    - Append a single capitalized first character of the input string and lowercase characters at the current index repeat (i - 1) times
  - Append a hypen ("-") to expandedStr
- Return expandedStr

*/

function accum(s) {
  let expandedStr;

  for (let i = 1; i <= s.length; i++) {
    if (i === 1) {
      expandedStr = s.slice(0, 1).toUpperCase();
    } else {
      expandedStr += s.slice(i - 1, i).toUpperCase() + s.slice(i - 1, i).toLowerCase().repeat(i - 1);
    }
    
    if (i !== s.length) expandedStr += "-";
  }
  
  return expandedStr;
}

console.log(accum("abcd"));
