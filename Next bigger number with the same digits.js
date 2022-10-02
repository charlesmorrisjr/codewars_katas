// Make each digit the first number
// Take remaining digits, rotate through them, and concatenate them to first number

/*

* Examples *
17590 => 17905

* Algorithm *

*/

/*
function nextBigger(num){
  let digits = String(num).split('');

  for (let curDigit = digits.length - 1; curDigit > 0; curDigit--) {
    if (Number(digits[curDigit - 1]) < Number(digits[curDigit])) {
      [digits[curDigit - 1], digits[curDigit]] = [digits[curDigit], digits[curDigit - 1]];
      return Number(digits.join(''));
    }
  }
}
*/
/*
function nextBigger(num){
  let digits = String(num).split('');
  let possibilities = [];

  for (idx in digits) {
    let firstNums = digits[idx];
    let remainingDigits = [...digits];
    remainingDigits.splice(idx, 1);
    
    let remainingDigitsLength = remainingDigits.length;
    
    for (let remainingDigitsIdx = 0; remainingDigitsIdx < remainingDigitsLength; remainingDigitsIdx++) {
      let possibility = Number(firstNum + remainingDigits.join(''));
      remainingDigits.push(remainingDigits.shift());
      // console.log(possibility);
      if (possibility > num) possibilities.push(possibility);
    }
  }
  // console.log(possibilities.sort((a, b) => a - b));
}
*/
/*
function nextBigger(num){
  let nextNum = num;
  let numString = String(num);
  
  while (true) {
    nextNum += 1;
    
    if (allDigitsMatch(numString, String(nextNum))) return nextNum;
  }
}

function allDigitsMatch(numString1, numString2) {
  for (let idx = 0; idx <= 9; idx++) {
    let regEx = new RegExp(String(idx), 'gi');
    let matches1 = numString1.match(regEx) || [];
    let matches2 = numString2.match(regEx) || [];
    
    if (matches1.length !== matches2.length) {
      return false;
    }
  }
  return true;
}
*/
// console.log(nextBigger(12));
// console.log(nextBigger(513));
console.log(nextBigger(2017));
// console.log(nextBigger(414));
// console.log(nextBigger(144));

console.log(nextBigger(17590)); //17905