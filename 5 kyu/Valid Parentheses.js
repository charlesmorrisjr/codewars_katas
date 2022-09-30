function validParentheses(parens) {
  let balance = 0;

  for (let char of parens) {
    if (char === '(') {
      balance += 1;
    } else if (char === ')') {
      balance -= 1;
    }
    if (balance < 0) return false;
  }

  return (balance === 0);
}

console.log(validParentheses("()") === true);
console.log(validParentheses(")(()))") === false);
console.log(validParentheses("(") === false);
console.log(validParentheses("(())((()())())") === true);
