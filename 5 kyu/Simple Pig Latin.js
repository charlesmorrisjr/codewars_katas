function pigIt(str){
  return str.split(' ').map(word => {
    if (!/[^a-z]/i.test(word)) {
      return (word.length > 1) ? word.slice(1) + word[0] + 'ay' : word + 'ay';
    } else {
      return word;
    }
  }).join(' ');
}

console.log(pigIt('Pig latin is cool'));  // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string'));  // 'hisTay siay ymay tringsay'