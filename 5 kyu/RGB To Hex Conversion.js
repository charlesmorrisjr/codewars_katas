/*
  input: three integers ranging from 0-255
  output: string containing hex values 0-F

explicit requirements: input numbers must be between 0 and 255


* Algorithm *

- Declare and initialize an empty string variable 'hexColor'
- For each input value
  - Check if the value is valid (an integer between 0 and 255) and convert it to a hexadecimal string
    - If value is 0 or less than 0, change it to "00"
    - If value is equal to or above 255, change it to "FF"
    - Otherwise,
      - Convert the value to a string containing the value's hexadecimal equivalent
      - If the hexadecimal string's length is only 1, prepend '0' to the beginning of it
      - Return the value converted to a hexadecimal string
  - Append the hexadecimal string to 'hexColor'
- Convert all lowercase letters in 'hexColor' to uppercase
- Return 'hexColor'

*/

function rgb(r, g, b){
  let hexColor = '';

  hexColor = parseRGB(r)
  hexColor += parseRGB(g)
  hexColor += parseRGB(b)

  return hexColor.toUpperCase();
}

function parseRGB(val) {
  if (val <= 0) {
    return '00';
  } else if (val >= 255) {
    return 'FF';
  } else {
    let hexVal = val.toString(16);
    return hexVal.length === 1 ? '0' + hexVal : hexVal;
  }
}

console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(255, 255, 300)) // returns FFFFFF
console.log(rgb(0,0,0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3
console.log(rgb(37, 169, 5)) // returns 25A905
console.log(rgb(242,202,14)) // returns F2CA0E
