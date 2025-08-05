/* Mini-PEDAC

Problem:
- Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Input:
- String

Output:
- String

Rules (Explicit/Implicit/Questions):
- Input string will be a string of any length
- Input string can be an empty string
- Input string can contain non-numerical characters
- The last 4 characters of the output string will always be the same as those of the input string
- All characters except for the last 4 characters will be changed to '#'
- If input string string is empty, the output string will be empty

Data Structure:
- String

Examples:
  "4556364607935616" --> "############5616"
      "64607935616" -->      "#######5616"
                "1" -->                "1"
                  "" -->                 ""

  // "What was the name of your first pet?"
  "Skippy" --> "##ippy"
  "Nananananananananananananananana Batman!" --> "####################################man!"

Algorithm:
- If length of input string is <= 4
  - Return input string
- Else
  - Copy the last 4 characters of the input string and assign to a variable named 'lastFour'
  - Create a string of # signs equal in length to the length of the input string minus four
  - Assign that string of # signs to a variable named 'firstChars'
  - Append lastFour to firstChars and return that

*/

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    let lastFour = cc.slice(cc.length - 4, cc.length);
    let firstChars = "#".repeat(cc.length - 4);
    return firstChars + lastFour;
  }
}

function optimizedMaskify(cc) {
  return cc.length > 4 ? "#".repeat(cc.length - 4) + cc.slice(cc.length - 4, cc.length) : cc;
}

console.log(maskify("1234567"));
