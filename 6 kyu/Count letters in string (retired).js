/*
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
*/

/* Mini-PEDAC

Problem:
- Given a string, return an object containing each unique letter in the string and the number of times that letter appears in the string

Input: 
- a string

Output:
- an object

Rules (Explicit/Implicit/Questions):
- The output object will contain key-value pairs with the keys being the unique letters, and the values being the number of times that letter appears in the given string
- All letters in given string are lowercase?
- Properties of object must be arranged in alphabetic order

Algorithm:
- Declare and initialize and empty object `letterObj`
- Declare and initialize an empty array `letterArr`
- Iterate through the given string
  - Check if the letter at the current index exists in `letterArr`
    - If so, add one to the second element of the subarray of that letter
    - If not, create a new subarray in `letterArr` for the current letter and initialize its second element value to 1
- Sort `letterArr` in alphabetic based on the first element of each subarray
- Convert each subarray of `letterArr` to a key-value pair and assign them to `letterObj`
- Return `letterObj`
*/

function letter_count(str) {
  let letterObj = {};
  let letterArr = [];

  for (let idx = 0; idx < str.length; idx++) {
    let notFound = true;
    
    letterArr = letterArr.map(subArr => {
      if (subArr[0] === str[idx]) {
        subArr[1] += 1;
        notFound = false;
      }
      return subArr;
    })

    if (notFound) {
      letterArr.push([str[idx], 1]);
    }
  }

  letterArr.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
  
  letterArr.forEach(subArr => {
    letterObj[subArr[0]] = subArr[1];
  })
  
  return letterObj;
}

console.log(letter_count('arithmetics')) //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}