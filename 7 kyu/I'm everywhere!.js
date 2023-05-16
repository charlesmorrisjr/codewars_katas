function i(word) {
  if (!word) return 'Invalid word';

  if (word.match(/[aeiou]/gi).length < (word.match(/[^aeiou]/gi) || []).length &&
      word[0] !== 'I' && word[0].match(/[A-Z]/)) {
    return 'i' + word;
  } else {
    return 'Invalid word';
  }
}

console.log(i('Phone'));       // iPhone
console.log(i('World'));       // iWorld
console.log(i('Human'));       // iHuman
console.log(i('Programmer'));  // iProgrammer

console.log(i(''));            // Invalid word
console.log(i(null));          // Invalid word
console.log(i('I'));           // Invalid word
console.log(i('Inspire'));     // Invalid word
console.log(i('East'));        // Invalid word
console.log(i('Peace'));       // Invalid word
console.log(i('road'));        // Invalid word
