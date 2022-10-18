function duplicateEncode(word){

  return word.split('').map(char => {    
    if (char === '(' || char === ')') {
      char = '\\' + char;
    }

    let regEx = new RegExp(char, 'gi');

    return word.match(regEx).length === 1 ? '(' : ')';
  }).join('');
}

console.log(duplicateEncode("din"));              // "((("
console.log(duplicateEncode("recede"));           // "()()()""
console.log(duplicateEncode("Success"));          // ")())())"
console.log(duplicateEncode("(( @"));             // "))(("

/*

function duplicateEncode(word){
  let wordObj = {};
  let str = '';
  
  for (let char of word) {
    wordObj[char] ? wordObj[char] += 1 : wordObj[char] = 1;
  }

  for (let char of word) {
    wordObj[char] === 1 ? str += '(' : str += ')';
  }

  return str;
}
*/