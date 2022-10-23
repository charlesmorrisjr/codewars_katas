function spinWords(string){
  let strArray = string.split(' ');

  strArray = strArray.map(str => {
    if (str.length >= 5) {
      return str.split('').reverse().join('');
    } else {
      return str;
    }
  }).join(' ');
  
  return strArray;
}